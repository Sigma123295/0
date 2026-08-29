#!/usr/bin/env python3
"""Encode Yandex gameplay + advertising videos and assemble the upload pack."""
from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SRC = Path("/tmp/kayphone_promo")
PACK = Path("/workspace/promo/yandex_upload")
ART = Path("/opt/cursor/artifacts/yandex_console")
FONT_B = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/macos/Inter-Regular.ttf"
COVER = Path("/workspace/promo/cover.png")
COVER_EN = Path("/workspace/promo/cover_en.png")


def run(cmd: list[str]) -> None:
    print("+", " ".join(cmd[:8]), "...")
    subprocess.check_call(cmd)


def encode_frames(folder: Path, out: Path, w: int, h: int) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    run(
        [
            "ffmpeg",
            "-y",
            "-framerate",
            "8",
            "-i",
            str(folder / "%04d.png"),
            "-vf",
            f"scale={w}:{h}:flags=lanczos,fps=30",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-profile:v",
            "high",
            "-crf",
            "20",
            "-movflags",
            "+faststart",
            "-an",
            str(out),
        ]
    )


def title_card(path: Path, w: int, h: int, title: str, sub: str, bg: Path) -> None:
    im = Image.open(bg).convert("RGB").resize((w, h), Image.Resampling.LANCZOS)
    dark = Image.new("RGB", (w, h), (5, 10, 18))
    im = Image.blend(im, dark, 0.42)
    draw = ImageDraw.Draw(im)
    size_t = 92 if w > h else 78
    size_s = 34 if w > h else 30
    ft = ImageFont.truetype(FONT_B, size_t)
    fs = ImageFont.truetype(FONT_R, size_s)
    tw = draw.textbbox((0, 0), title, font=ft)
    sw = draw.textbbox((0, 0), sub, font=fs)
    cx, cy = w // 2, h // 2 - 20
    draw.text((cx - (tw[2] - tw[0]) // 2, cy - (tw[3] - tw[1])), title, font=ft, fill=(255, 255, 255))
    draw.text((cx - (sw[2] - sw[0]) // 2, cy + 28), sub, font=fs, fill=(126, 240, 255))
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "PNG")


def still_clip(src: Path, out: Path, seconds: float, w: int, h: int) -> None:
    run(
        [
            "ffmpeg",
            "-y",
            "-loop",
            "1",
            "-i",
            str(src),
            "-t",
            f"{seconds:.2f}",
            "-vf",
            f"scale={w}:{h}:flags=lanczos,zoompan=z='min(1.08,1+0.0015*on)':d=1:s={w}x{h}:fps=30,format=yuv420p",
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-crf",
            "20",
            "-an",
            str(out),
        ]
    )


def concat(clips: list[Path], out: Path) -> None:
    lst = out.with_suffix(".txt")
    lst.write_text("".join(f"file '{p.resolve()}'\n" for p in clips), encoding="utf-8")
    run(
        [
            "ffmpeg",
            "-y",
            "-f",
            "concat",
            "-safe",
            "0",
            "-i",
            str(lst),
            "-c:v",
            "libx264",
            "-pix_fmt",
            "yuv420p",
            "-profile:v",
            "high",
            "-crf",
            "20",
            "-movflags",
            "+faststart",
            "-an",
            str(out),
        ]
    )


def make_ad(prefix: str, w: int, h: int, title: str, sub: str, end: str, bg: Path, shots: list[str], dest: Path) -> None:
    tmp = Path("/tmp/kayphone_promo/adtmp") / dest.stem
    tmp.mkdir(parents=True, exist_ok=True)
    title_card(tmp / "t0.png", w, h, title, sub, bg)
    title_card(tmp / "t1.png", w, h, end, "Yandex Games · 18+", bg)
    still_clip(tmp / "t0.png", tmp / "c0.mp4", 2.2, w, h)
    clips = [tmp / "c0.mp4"]
    for i, name in enumerate(shots, 1):
        still_clip(SRC / name, tmp / f"c{i}.mp4", 3.4, w, h)
        clips.append(tmp / f"c{i}.mp4")
    still_clip(tmp / "t1.png", tmp / "cend.mp4", 2.0, w, h)
    clips.append(tmp / "cend.mp4")
    concat(clips, dest)


def copy_png(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src).convert("RGB")
    im.save(dest, "PNG")


def main() -> None:
    PACK.mkdir(parents=True, exist_ok=True)
    ART.mkdir(parents=True, exist_ok=True)
    vids = PACK / "videos"
    vids.mkdir(parents=True, exist_ok=True)

    encode_frames(SRC / "desk_frames", vids / "gameplay_horizontal.mp4", 1920, 1080)
    encode_frames(SRC / "mob_frames", vids / "gameplay_vertical.mp4", 1080, 1920)

    desk_shots = [
        "desk_01_home.png",
        "desk_03_quiz.png",
        "desk_07_alisa.png",
        "desk_04_photos.png",
        "desk_06_chats.png",
        "desk_08_profile.png",
    ]
    mob_shots = [
        "mob_01_home.png",
        "mob_03_quiz.png",
        "mob_07_alisa.png",
        "mob_04_photos.png",
        "mob_06_chats.png",
        "mob_08_profile.png",
    ]
    make_ad(
        "desk",
        1920,
        1080,
        "Ночной Кайфон",
        "TEST 18+  ·  Чаты  ·  Горячие фоточки",
        "Играй сейчас",
        COVER,
        desk_shots,
        vids / "ad_horizontal_ru.mp4",
    )
    make_ad(
        "desk",
        1920,
        1080,
        "Night KayPhone",
        "TEST 18+  ·  Chats  ·  Hot photos",
        "Play now",
        COVER_EN,
        desk_shots,
        vids / "ad_horizontal_en.mp4",
    )
    make_ad(
        "mob",
        1080,
        1920,
        "Ночной Кайфон",
        "Тесты · Чаты · Фоточки",
        "Играй сейчас",
        COVER,
        mob_shots,
        vids / "ad_vertical_ru.mp4",
    )
    make_ad(
        "mob",
        1080,
        1920,
        "Night KayPhone",
        "Quizzes · Chats · Photos",
        "Play now",
        COVER_EN,
        mob_shots,
        vids / "ad_vertical_en.mp4",
    )

    desk_dir = PACK / "screenshots_desktop_16x9"
    mob_dir = PACK / "screenshots_mobile_9x16"
    mapping_desk = {
        "01_home.png": "desk_01_home.png",
        "02_tests.png": "desk_02_tests.png",
        "03_quiz.png": "desk_03_quiz.png",
        "04_photos.png": "desk_04_photos.png",
        "05_chats.png": "desk_06_chats.png",
        "06_alisa.png": "desk_07_alisa.png",
        "07_profile.png": "desk_08_profile.png",
        "08_photo_open.png": "desk_05_photo_open.png",
    }
    mapping_mob = {
        "01_home.png": "mob_01_home.png",
        "02_tests.png": "mob_02_tests.png",
        "03_quiz.png": "mob_03_quiz.png",
        "04_photos.png": "mob_04_photos.png",
        "05_chats.png": "mob_06_chats.png",
        "06_alisa.png": "mob_07_alisa.png",
        "07_profile.png": "mob_08_profile.png",
        "08_photo_open.png": "mob_05_photo_open.png",
    }
    for name, src in mapping_desk.items():
        copy_png(SRC / src, desk_dir / name)
        copy_png(SRC / src, Path("/workspace/promo/screens") / f"desktop_{name}")
    for name, src in mapping_mob.items():
        copy_png(SRC / src, mob_dir / name)

    shutil.copy2("/workspace/promo/icon.png", PACK / "icon_ru_512.png")
    shutil.copy2("/workspace/promo/cover.png", PACK / "cover_ru_800x470.png")
    shutil.copy2("/workspace/promo/icon_en.png", PACK / "icon_en_512.png")
    shutil.copy2("/workspace/promo/cover_en.png", PACK / "cover_en_800x470.png")

    for p in vids.iterdir():
        if p.suffix == ".mp4":
            shutil.copy2(p, ART / p.name)
    for p in desk_dir.iterdir():
        shutil.copy2(p, ART / f"desktop_{p.name}")
    for p in mob_dir.iterdir():
        shutil.copy2(p, ART / f"mobile_{p.name}")
    shutil.copy2(PACK / "icon_ru_512.png", ART / "icon_512.png")
    shutil.copy2(PACK / "cover_ru_800x470.png", ART / "cover_800x470.png")
    shutil.copy2(PACK / "icon_en_512.png", ART / "icon_en_512.png")
    shutil.copy2(PACK / "cover_en_800x470.png", ART / "cover_en_800x470.png")

    print("pack ready", PACK)


if __name__ == "__main__":
    main()
