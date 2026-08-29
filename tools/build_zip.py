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
    Path("/opt/cursor/artifacts/FOTKI_v_korne_Nochnoy_Kayfon.zip"),
]

JS_FILES = [
    GAME / "js" / "i18n.js",
    GAME / "js" / "content.js",
    GAME / "js" / "chats.js",
    GAME / "js" / "audio.js",
    GAME / "js" / "platform.js",
    GAME / "js" / "app.js",
]

SKIP_PREFIXES = ("assets/",)


def inline_index() -> str:
    css = (GAME / "css" / "app.css").read_text(encoding="utf-8")
    css = css.replace('url("../ui/', 'url("./ui/')
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


def add_dir(zf: zipfile.ZipFile, name: str) -> None:
    if not name.endswith("/"):
        name += "/"
    info = zipfile.ZipInfo(filename=name)
    info.create_system = 0
    info.external_attr = 0x10  # directory
    zf.writestr(info, b"")


def zip_game(dest: Path) -> None:
    files = []
    dirs = set()
    for path in GAME.rglob("*"):
        if not path.is_file():
            continue
        if path.name.endswith(".src.html"):
            continue
        rel = path.relative_to(GAME).as_posix()
        if rel.startswith(SKIP_PREFIXES):
            continue
        files.append((rel, path))
        parts = rel.split("/")
        acc = []
        for p in parts[:-1]:
            acc.append(p)
            dirs.add("/".join(acc) + "/")
    def sort_key(item):
        rel = item[0]
        if rel == "index.html":
            return (0, rel)
        if rel.startswith("photos/"):
            return (1, rel)
        if rel.startswith("ui/"):
            return (2, rel)
        return (3, rel)

    files.sort(key=sort_key)
    dest.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(dest, "w", compression=zipfile.ZIP_DEFLATED, allowZip64=False) as zf:
        html = next((p for r, p in files if r == "index.html"), None)
        if html is not None:
            info = zipfile.ZipInfo(filename="index.html")
            info.compress_type = zipfile.ZIP_DEFLATED
            info.create_system = 0
            zf.writestr(info, html.read_bytes())
            files = [(r, p) for r, p in files if r != "index.html"]
        add_dir(zf, "photos")
        add_dir(zf, "ui")
        for d in sorted(dirs):
            if d not in ("photos/", "ui/"):
                add_dir(zf, d)
        for rel, path in files:
            info = zipfile.ZipInfo(filename=rel)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.create_system = 0
            zf.writestr(info, path.read_bytes())
    print("zip", dest, dest.stat().st_size, "files", len(files), "dirs", len(dirs) + 2)


def main() -> None:
    inline_index()
    print("inlined", OUT_HTML, OUT_HTML.stat().st_size)
    bat = GAME / "otkryt.bat"
    bat.write_bytes(b"@echo off\r\nstart \"\" \"index.html\"\r\n")
    (GAME / "GDE_FOTKI.txt").write_text(
        "Fotki zdes: papka photos\r\n"
        "Ikonki i oboi: papka ui\r\n"
        "Raspakuy arhiv v papku i otkroy index.html\r\n"
        "Ne otkryvay html iznutri zip.\r\n",
        encoding="ascii",
        newline="\r\n",
    )
    for dest in ZIP_PATHS:
        zip_game(dest)


if __name__ == "__main__":
    main()
