#!/usr/bin/env python3
"""Capture Yandex console screenshots and frame sequences via Chrome/puppeteer."""
import json
import os
import subprocess
import sys
from pathlib import Path

OUT = Path("/tmp/kayphone_promo")
NODE = Path("/tmp/capture_promo.js")
CHROME = "/usr/bin/google-chrome-stable"
BASE = Path("/workspace/game")
PORT = 8766
URL = f"http://127.0.0.1:{PORT}/index.html"

SAVE = {
    "coins": 80,
    "unlocked": {"p01": 1, "p02": 1, "p03": 1, "p04": 1},
    "testsDone": {},
    "music": False,
    "sfx": False,
    "t": 1756490000000,
    "chats": {
        "alisa": {
            "i": 7,
            "h": 4,
            "done": False,
            "opened": True,
            "log": [
                {"who": "her", "text": "Привет. Смена кончилась, я уже дома. Какао, тишина и ты в чате."},
                {"who": "me", "text": "Какао — сильный ход. Налей и мне мысленно."},
                {"who": "her", "text": "Налила. Только пенка у тебя воображаемая, у меня — настоящая."},
                {"who": "her", "text": "Скажи честно: ты сейчас один и можешь не отвлекаться?"},
                {"who": "me", "text": "Один. Весь вечер твой."},
                {"who": "her", "text": "Ого. Тогда я не буду церемониться."},
                {
                    "who": "her",
                    "text": "Я после душа в шёлковом халате. Волосы мокрые, на кухне тепло. Представляешь картинку?",
                },
                {"who": "me", "text": "Звучит уютно и опасно одновременно."},
                {"who": "her", "text": "Опасно — это комплимент. Уют оставлю себе, опасность — тебе."},
                {
                    "who": "her",
                    "text": "Держи кадр с веранды. Свет плохой, зато честно.",
                    "photo": "./photos/alisa-02.jpg",
                },
            ],
        }
    },
}

JS = r"""
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME = process.env.CHROME;
const URL = process.env.GAME_URL;
const OUT = process.env.OUT_DIR;
const SAVE = JSON.parse(process.env.SAVE_JSON);

async function shot(page, name) {
  const dest = path.join(OUT, name);
  await page.screenshot({ path: dest, type: 'png', captureBeyondViewport: false });
  console.log('shot', dest);
}

async function waitReady(page) {
  await page.waitForFunction(() => window.Game && document.getElementById('view') && !document.getElementById('view').classList.contains('hidden'), { timeout: 20000 });
  await page.evaluate((save) => {
    localStorage.setItem('kayphone_v2', JSON.stringify(save));
    Game.coins = save.coins;
    Game.unlocked = save.unlocked;
    Game.testsDone = save.testsDone || {};
    Game.music = false;
    Game.sfx = false;
    Game.chats = Game.defaultChats();
    if (save.chats) {
      Object.keys(save.chats).forEach((id) => { Game.chats[id] = save.chats[id]; });
    }
    Game._typing = false;
    Game.closeModal();
    Game.showHome();
  }, SAVE);
  await new Promise((r) => setTimeout(r, 400));
}

async function openWith(w, h) {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    defaultViewport: { width: w, height: h, deviceScaleFactor: 1 },
    args: [
      `--window-size=${w},${h}`,
      '--hide-scrollbars',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--mute-audio',
      '--font-render-hinting=none',
    ],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument((save) => {
    localStorage.setItem('kayphone_v2', JSON.stringify(save));
  }, SAVE);
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
  await waitReady(page);
  return { browser, page };
}

async function captureStills(prefix, w, h) {
  const { browser, page } = await openWith(w, h);
  await shot(page, `${prefix}_01_home.png`);

  await page.evaluate(() => Game.showTests());
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_02_tests.png`);

  await page.evaluate(() => Game.startTest('poshly'));
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_03_quiz.png`);

  await page.evaluate(() => Game.showPhotos());
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_04_photos.png`);

  await page.evaluate(() => { Game.closeModal(); Game.openPhoto('p01'); });
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_05_photo_open.png`);

  await page.evaluate(() => { Game.closeModal(); Game.showChats(); });
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_06_chats.png`);

  await page.evaluate(() => { Game._typing = false; Game.openChat('alisa'); Game._typing = false; Game.renderChat(); });
  await new Promise((r) => setTimeout(r, 400));
  await shot(page, `${prefix}_07_alisa.png`);

  await page.evaluate(() => Game.showProfile());
  await new Promise((r) => setTimeout(r, 250));
  await shot(page, `${prefix}_08_profile.png`);

  await browser.close();
}

async function recordTour(prefix, w, h) {
  const { browser, page } = await openWith(w, h);
  const dir = path.join(OUT, `${prefix}_frames`);
  fs.mkdirSync(dir, { recursive: true });
  let n = 0;
  const fps = 8;
  const step = async (ms, fn) => {
    if (fn) await fn();
    const frames = Math.max(1, Math.round(ms / (1000 / fps)));
    for (let i = 0; i < frames; i++) {
      await page.screenshot({ path: path.join(dir, String(n).padStart(4, '0') + '.png'), type: 'png', captureBeyondViewport: false });
      n++;
      await new Promise((r) => setTimeout(r, 1000 / fps));
    }
  };

  await step(2800);
  await step(2600, () => page.evaluate(() => Game.showTests()));
  await step(2800, () => page.evaluate(() => Game.startTest('poshly')));
  await step(1800, () => page.evaluate(() => Game.answer(1)));
  await step(1800, () => page.evaluate(() => Game.answer(2)));
  await step(2400, () => page.evaluate(() => { Game.closeModal(); Game.showPhotos(); }));
  await step(2200, () => page.evaluate(() => Game.openPhoto('p01')));
  await step(2400, () => page.evaluate(() => { Game.closeModal(); Game.showChats(); }));
  await step(4200, () => page.evaluate(() => { Game._typing = false; Game.openChat('alisa'); Game._typing = false; Game.renderChat(); }));
  await step(2600, () => page.evaluate(() => Game.showProfile()));

  console.log('frames', prefix, n);
  await browser.close();
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  await captureStills('desk', 1920, 1080);
  await captureStills('mob', 1080, 1920);
  await recordTour('desk', 1920, 1080);
  await recordTour('mob', 1080, 1920);
})().catch((e) => { console.error(e); process.exit(1); });
"""


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    NODE.write_text(JS, encoding="utf-8")
    env = os.environ.copy()
    env["CHROME"] = CHROME
    env["GAME_URL"] = URL
    env["OUT_DIR"] = str(OUT)
    env["SAVE_JSON"] = json.dumps(SAVE, ensure_ascii=False)
    env["NODE_PATH"] = "/tmp/node_modules"
    print("capturing from", URL, file=sys.stderr)
    subprocess.check_call(["node", str(NODE)], env=env, cwd="/tmp")


if __name__ == "__main__":
    main()
