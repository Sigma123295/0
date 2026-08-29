#!/usr/bin/env python3
"""Inline CSS/JS into index.html and build a Windows-friendly zip."""
from __future__ import annotations

import zipfile
from pathlib import Path

ROOT = Path("/workspace")
GAME = ROOT / "game"
SRC = GAME / "index.src.html"
OUT_HTML = GAME / "index.html"
ZIP_PATHS = [
    ROOT / "lunar-messages.zip",
    Path("/opt/cursor/artifacts/IGRA_Nochnoy_Kayfon.zip"),
]

JS_FILES = [
    GAME / "js" / "i18n.js",
    GAME / "js" / "content.js",
    GAME / "js" / "chats.js",
    GAME / "js" / "audio.js",
    GAME / "js" / "platform.js",
    GAME / "js" / "app.js",
]


def inline_index() -> str:
    css = (GAME / "css" / "app.css").read_text(encoding="utf-8")
    # CSS lives in css/, so source uses ../assets. Inlined into index.html → ./assets
    css = css.replace('url("../assets/', 'url("./assets/')
    js = "\n".join(p.read_text(encoding="utf-8") for p in JS_FILES)
    html = SRC.read_text(encoding="utf-8")
    html = html.replace(
        '  <link rel="stylesheet" href="./css/app.css">\n',
        f"  <style>\n{css}\n  </style>\n",
    )
    for name in (
        "./js/i18n.js",
        "./js/content.js",
        "./js/chats.js",
        "./js/audio.js",
        "./js/platform.js",
        "./js/app.js",
    ):
        html = html.replace(f'  <script src="{name}"></script>\n', "")
    html = html.replace("</body>", f"  <script>\n{js}\n  </script>\n</body>")
    OUT_HTML.write_text(html, encoding="utf-8")
    return html


def zip_game(dest: Path) -> None:
    files = []
    for path in GAME.rglob("*"):
        if not path.is_file():
            continue
        if path.name.endswith(".src.html"):
            continue
        if path.suffix == ".bat":
            pass
        rel = path.relative_to(GAME).as_posix()
        files.append((rel, path))
    files.sort(key=lambda x: (0 if x[0] == "index.html" else 1, x[0]))
    dest.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED, allowZip64=False) as zf:
        for rel, path in files:
            info = zipfile.ZipInfo(filename=rel)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.create_system = 0
            data = path.read_bytes()
            zf.writestr(info, data)
    print("zip", dest, dest.stat().st_size, "files", len(files))


def main() -> None:
    inline_index()
    print("inlined", OUT_HTML, OUT_HTML.stat().st_size)
    bat = GAME / "otkryt.bat"
    if not bat.exists():
        bat.write_text("@echo off\r\nstart index.html\r\n", encoding="ascii")
    for dest in ZIP_PATHS:
        zip_game(dest)


if __name__ == "__main__":
    main()
