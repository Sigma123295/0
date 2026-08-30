#!/usr/bin/env python3
"""Build true 16:9 (1920x1080) store screenshots from portrait gameplay."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1920, 1080
PHONE_H = 1040
PHONE_W = round(PHONE_H * 9 / 16)  # 585
RADIUS = 44
BEZEL = 9
FONT_B = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/macos/Inter-Regular.ttf"

SCENES = [
    ("01_home.png", "Домашний экран", "TEST 18+  ·  Чаты  ·  Фоточки"),
    ("02_tests.png", "TEST 18+", "12 тестов  ·  180 вопросов"),
    ("04_photos.png", "Горячие фоточки", "Открывай за монеты или рекламу"),
    ("05_chats.png", "Мои чаты", "8 переписок"),
    ("06_alisa.png", "Чат с Алисой", "Выбери реплику — она ответит"),
]


def round_mask(size: tuple[int, int], radius: int) -> Image.Image:
    m = Image.new("L", size, 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return m


def cover_scale(im: Image.Image, tw: int, th: int) -> Image.Image:
    im = im.convert("RGB")
    scale = max(tw / im.width, th / im.height)
    nw, nh = int(im.width * scale), int(im.height * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def compose(src: Path, title: str, sub: str, dest: Path) -> None:
    shot = Image.open(src).convert("RGB")
    bg = cover_scale(shot, W, H).filter(ImageFilter.GaussianBlur(36))
    dark = Image.new("RGB", (W, H), (6, 12, 20))
    bg = Image.blend(bg, dark, 0.42)

    # left neon wash from cover-ish colors
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, W, H), fill=(4, 10, 18, 40))
    bg = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")

    phone = shot.resize((PHONE_W, PHONE_H), Image.Resampling.LANCZOS)
    frame_w, frame_h = PHONE_W + BEZEL * 2, PHONE_H + BEZEL * 2
    frame = Image.new("RGB", (frame_w, frame_h), (8, 10, 14))
    frame.paste(phone, (BEZEL, BEZEL))
    mask = round_mask((frame_w, frame_h), RADIUS)
    framed = Image.new("RGBA", (frame_w, frame_h))
    framed.paste(frame, (0, 0))
    framed.putalpha(mask)

    canvas = bg.convert("RGBA")
    px = 96
    py = (H - frame_h) // 2
    # soft glow
    glow = Image.new("RGBA", (frame_w + 80, frame_h + 80), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.rounded_rectangle((20, 20, frame_w + 59, frame_h + 59), radius=RADIUS + 8, fill=(80, 200, 255, 55))
    glow = glow.filter(ImageFilter.GaussianBlur(24))
    canvas.alpha_composite(glow, (px - 40, py - 40))
    canvas.alpha_composite(framed, (px, py))

    # right: zoomed gameplay crop so the 16:9 frame is filled with the game
    # right: 16:9 gameplay crop filling the landscape frame
    rw, rh = 1120, 630
    crop = cover_scale(shot, rw, rh)
    crop_mask = round_mask((rw, rh), 28)
    crop_rgba = crop.convert("RGBA")
    crop_rgba.putalpha(crop_mask)
    canvas.alpha_composite(crop_rgba, (W - rw - 56, 280))

    draw = ImageDraw.Draw(canvas)
    ft = ImageFont.truetype(FONT_B, 58)
    fs = ImageFont.truetype(FONT_R, 26)
    fk = ImageFont.truetype(FONT_B, 20)
    tx = 160 + frame_w + 48
    draw.text((tx, 86), "НОЧНОЙ КАЙФОН", font=fk, fill=(126, 240, 255))
    draw.text((tx, 128), title, font=ft, fill=(255, 255, 255))
    bbox = draw.textbbox((tx, 128), title, font=ft)
    draw.text((tx, bbox[3] + 14), sub, font=fs, fill=(180, 220, 235))

    out = canvas.convert("RGB")
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "PNG")
    print(dest.name, out.size, round(out.size[0] / out.size[1], 4))


def main() -> None:
    src_dir = Path("/workspace/promo/yandex_upload/screenshots_mobile_9x16")
    dest_dir = Path("/tmp/screens_16x9")
    dest_dir.mkdir(parents=True, exist_ok=True)
    mapping = [
        ("01_home.png", src_dir / "01_home.png"),
        ("02_tests.png", src_dir / "02_tests.png"),
        ("03_photos.png", src_dir / "04_photos.png"),
        ("04_chats.png", src_dir / "05_chats.png"),
        ("05_alisa.png", src_dir / "06_alisa.png"),
    ]
    out_labels = {
        "01_home.png": ("Домашний экран", "TEST 18+  ·  Чаты  ·  Фоточки"),
        "02_tests.png": ("TEST 18+", "12 тестов  ·  180 вопросов"),
        "03_photos.png": ("Горячие фоточки", "Открывай за монеты или рекламу"),
        "04_chats.png": ("Мои чаты", "8 переписок"),
        "05_alisa.png": ("Чат с Алисой", "Выбери реплику — она ответит"),
    }
    for name, src in mapping:
        title, sub = out_labels[name]
        compose(src, title, sub, dest_dir / name)


if __name__ == "__main__":
    main()
