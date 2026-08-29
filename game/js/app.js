const SAVE_KEY = "kayphone_v2";
const DAYS = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const Game = {
  lang: "ru",
  screen: "home",
  coins: 0,
  unlocked: {},
  testsDone: {},
  chats: {},
  music: true,
  sfx: true,
  focus: 0,
  test: null,
  chatId: null,
  fsAsked: false,
  _typing: false,
  _gen: 0,

  async start() {
    await Platform.init();
    this.lang = "ru";
    document.documentElement.lang = "ru";
    this.loadLocal();
    const cloud = await Platform.loadCloud();
    if (cloud && typeof cloud.coins === "number") this.mergeCloud(cloud);
    AudioFX.setMusic(this.music);
    AudioFX.setSfx(this.sfx);
    this.bindGlobal();
    this.showHome();
    Platform.ready();
    this.save();
    this.tickClock();
    setInterval(() => this.tickClock(), 15000);
  },

  defaultChats() {
    const o = {};
    CONTENT.GIRLS.forEach((g) => { o[g.id] = { i: 0, h: 0, log: [], done: false, opened: false }; });
    return o;
  },

  loadLocal() {
    try {
      const d = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
      if (!d) { this.coins = CONTENT.START_COINS || 0; this.chats = this.defaultChats(); return; }
      this.coins = d.coins || 0;
      this.unlocked = d.unlocked || {};
      this.testsDone = d.testsDone || {};
      this.chats = d.chats || this.defaultChats();
      CONTENT.GIRLS.forEach((g) => {
        if (!this.chats[g.id]) this.chats[g.id] = { i: 0, h: 0, log: [], done: false, opened: false };
      });
      this.music = d.music !== false;
      this.sfx = d.sfx !== false;
    } catch (e) { this.coins = 0; this.chats = this.defaultChats(); }
  },

  mergeCloud(d) {
    if ((d.coins || 0) > this.coins) this.coins = d.coins;
    this.unlocked = Object.assign({}, d.unlocked || {}, this.unlocked);
    this.testsDone = Object.assign({}, d.testsDone || {}, this.testsDone);
    const base = this.defaultChats();
    Object.keys(base).forEach((id) => {
      const a = (d.chats && d.chats[id]) || base[id];
      const b = this.chats[id] || base[id];
      this.chats[id] = (a.i || 0) >= (b.i || 0) ? a : b;
    });
  },

  save() {
    const data = {
      coins: this.coins, unlocked: this.unlocked, testsDone: this.testsDone,
      chats: this.chats, music: this.music, sfx: this.sfx, t: Date.now()
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) {}
    clearTimeout(this._cloudT);
    this._cloudT = setTimeout(() => Platform.saveCloud(data), 1200);
  },

  bindGlobal() {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    document.addEventListener("selectstart", (e) => {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
      e.preventDefault();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { AudioFX.pauseAll(); Platform.stopGameplay(); }
      else if (!Platform.paused) {
        AudioFX.resumeAll();
        if (this.screenNeedsPlay()) Platform.startGameplay();
      }
    });
    window.addEventListener("blur", () => AudioFX.pauseAll());
    window.addEventListener("focus", () => { if (!document.hidden && !Platform.paused) AudioFX.resumeAll(); });
    document.addEventListener("keydown", (e) => this.onKey(e));
    document.addEventListener("pointerdown", () => {
      AudioFX.unlock();
      if (!this.fsAsked && Platform.isMobile()) { this.fsAsked = true; Platform.requestFs(); }
    });
  },

  screenNeedsPlay() {
    return this.screen === "testPlay" || this.screen === "chat" || this.screen === "photo";
  },

  clockStr() {
    const d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  },
  dateStr() {
    const d = new Date();
    return DAYS[d.getDay()] + ", " + d.getDate() + " " + MONTHS[d.getMonth()];
  },
  greetStr() {
    const h = new Date().getHours();
    if (h < 6) return "Доброй ночи";
    if (h < 12) return "Доброе утро";
    if (h < 18) return "Добрый день";
    return "Добрый вечер";
  },
  tickClock() {
    const el = document.getElementById("clock");
    if (el) el.textContent = this.clockStr();
    const ht = document.getElementById("homeTime");
    if (ht) ht.textContent = this.clockStr();
  },

  onKey(e) {
    if (e.key === "Escape") {
      if (!document.getElementById("modal").classList.contains("hidden")) { this.closeModal(); return; }
      if (this.screen === "home") return;
      if (this.screen === "chat") { this.showChats(); return; }
      this.showHome();
      return;
    }
    const items = [...document.querySelectorAll("[data-k]")];
    if (!items.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault(); this.focus = (this.focus + 1) % items.length; items[this.focus].focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault(); this.focus = (this.focus - 1 + items.length) % items.length; items[this.focus].focus();
    } else if (e.key === "Enter" && document.activeElement && document.activeElement.dataset.k) {
      document.activeElement.click();
    }
  },

  el(html) {
    const b = document.getElementById("view");
    b.innerHTML = html;
    b.classList.remove("hidden");
    document.getElementById("boot").classList.add("hidden");
    this.focus = 0;
    this.tickClock();
  },

  toast(msg) {
    const n = document.getElementById("toast");
    n.textContent = msg;
    n.classList.remove("hidden");
    clearTimeout(this._tt);
    this._tt = setTimeout(() => n.classList.add("hidden"), 2400);
  },
  closeModal() { document.getElementById("modal").classList.add("hidden"); document.getElementById("modal").innerHTML = ""; },
  modal(html) {
    const m = document.getElementById("modal");
    m.innerHTML = html;
    m.classList.remove("hidden");
    m.onclick = (e) => { if (e.target === m) this.closeModal(); };
  },

  sleep(ms) { return new Promise((r) => setTimeout(r, ms)); },

  unreadCount() {
    return CONTENT.GIRLS.filter((g) => {
      const st = this.chats[g.id];
      return st && !st.opened;
    }).length;
  },

  top(title, backFn) {
    const back = backFn
      ? `<button class="icon-btn" data-k="1" onclick="${backFn}">←</button>`
      : `<span class="icon-btn">✧</span>`;
    return `<div class="topbar">${back}<h2>${title}</h2><span class="coin-chip">✦ ${this.coins}</span></div>`;
  },

  showHome() {
    this._gen++;
    this._typing = false;
    AudioFX.click();
    this.screen = "home";
    Platform.stopGameplay();
    const unread = this.unreadCount();
    const next = CONTENT.GIRLS.find((g) => {
      const st = this.chats[g.id];
      return st && !st.done;
    });
    const notif = next ? `<button class="notif" data-k="1" onclick="Game.openChat('${next.id}')">
        <img src="${next.avatar}" alt="">
        <div style="min-width:0;flex:1">
          <b>${t("newMsg")} · ${next.name}</b>
          <div class="preview">${next.preview}</div>
        </div>
      </button>` : "";
    this.el(`<div class="home">
      <div class="home-clock">
        <div class="time" id="homeTime">${this.clockStr()}</div>
        <div class="date">${this.dateStr()}</div>
        <div class="greet">${this.greetStr()}</div>
      </div>
      <div class="home-notifs">${notif}</div>
      <div class="home-grid">
        <button class="app-ico" data-k="1" onclick="Game.showTests()">
          <span class="ico-wrap"><img src="assets/img/ui/app-test.jpg" alt=""></span>
          <span>TEST 18+</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showPhotos()">
          <span class="ico-wrap"><img src="assets/img/ui/app-photos.jpg" alt=""></span>
          <span>Горячие<br>фоточки</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showChats()">
          <span class="ico-wrap">
            <img src="assets/img/ui/app-chats.jpg" alt="">
            ${unread ? `<span class="app-badge">${unread}</span>` : ""}
          </span>
          <span>Мои чаты</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showProfile()">
          <span class="ico-wrap"><img src="assets/img/ui/app-profile.jpg" alt=""></span>
          <span>Мой профиль</span>
        </button>
      </div>
    </div>`);
  },

  showTests() {
    this._gen++;
    AudioFX.click();
    this.screen = "tests";
    Platform.stopGameplay();
    const cards = CONTENT.QUIZZES.map((q) => {
      const done = !!this.testsDone[q.id];
      return `<button class="card" data-k="1" onclick="Game.previewTest('${q.id}')">
        <img class="avatar sq" src="${q.cover}" alt="">
        <div style="min-width:0;flex:1">
          <b>${tx(q.title)}</b>
          <div class="muted">${t("testReward", { n: q.questions, c: q.reward })}</div>
          <div class="preview">${done ? "✓ +20" : "+20 ✦"}</div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("tests"), "Game.showHome()")}
      <div class="scroll" style="display:flex;flex-direction:column;gap:8px">${cards}</div>`);
  },

  previewTest(id) {
    AudioFX.click();
    const q = CONTENT.QUIZZES.find((x) => x.id === id);
    this.modal(`<div class="modal-card">
      <h3>${tx(q.title)}</h3>
      <p><b>${t("testReward", { n: q.questions, c: q.reward })}</b></p>
      <p class="muted">${this.testsDone[id] ? t("alreadyRewarded") : ""}</p>
      <button class="btn" style="width:100%" data-k="1" onclick="Game.startTest('${id}')">${t("startTest")}</button>
      <button class="btn sec" style="width:100%;margin-top:8px" data-k="1" onclick="Game.closeModal()">${t("close")}</button>
    </div>`);
  },

  startTest(id) {
    this.closeModal();
    const q = CONTENT.QUIZZES.find((x) => x.id === id);
    this.test = { id, i: 0, s: 0, quiz: q };
    this.screen = "testPlay";
    Platform.startGameplay();
    this.renderQ();
  },

  renderQ() {
    const st = this.test;
    const item = st.quiz.qs[st.i];
    const pct = Math.round((st.i / st.quiz.qs.length) * 100);
    const ans = item.a.map((a, i) => `<button class="answer" data-k="1" onclick="Game.answer(${i})">${tx(a.t)}</button>`).join("");
    this.el(`${this.top(tx(st.quiz.title), "Game.showTests()")}
      <div class="scroll"><div class="q-card">
        <div class="muted">${st.i + 1} / ${st.quiz.qs.length} · ${t("testReward", { n: st.quiz.qs.length, c: st.quiz.reward })}</div>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <h3>${tx(item.q)}</h3>
        <div class="answers">${ans}</div>
      </div></div>`);
  },

  answer(i) {
    AudioFX.click();
    const st = this.test;
    st.s += st.quiz.qs[st.i].a[i].s;
    st.i++;
    if (st.i >= st.quiz.qs.length) this.finishTest();
    else this.renderQ();
  },

  finishTest() {
    const st = this.test;
    let res = st.quiz.results[0];
    st.quiz.results.forEach((r) => { if (st.s >= r.min) res = r; });
    let bonus = 0;
    if (!this.testsDone[st.id]) {
      bonus = st.quiz.reward;
      this.coins += bonus;
      this.testsDone[st.id] = { s: st.s, t: Date.now() };
      AudioFX.coin();
    } else AudioFX.success();
    this.save();
    this.screen = "result";
    Platform.stopGameplay();
    this.el(`${this.top(t("result"), "Game.showTests()")}
      <div class="scroll result"><div class="q-card">
        <div class="big">${tx(res.title)}</div>
        <div class="stars">${"★".repeat(Math.min(5, 1 + Math.floor(st.s / 10)))}</div>
        <p>${tx(res.text)}</p>
        <p class="badge gold" style="display:inline-block">${bonus ? t("coinsGot", { c: bonus }) : t("alreadyRewarded")}</p>
        <div class="btn-row" style="margin-top:12px">
          <button class="btn" data-k="1" onclick="Game.startTest('${st.id}')">${t("again")}</button>
          <button class="btn sec" data-k="1" onclick="Game.showTests()">${t("tests")}</button>
        </div>
      </div></div>`);
    Platform.interstitial(() => {});
  },

  showPhotos() {
    this._gen++;
    AudioFX.click();
    this.screen = "photos";
    Platform.stopGameplay();
    const cards = CONTENT.PHOTOS.map((p) => {
      const open = !!this.unlocked[p.id];
      return `<button class="photo-card ${open ? "" : "locked"}" data-k="1" onclick="Game.openPhoto('${p.id}')">
        <img src="${p.src}" alt="">
        ${open ? "" : `<div class="lock-ico">🔒</div>`}
        <div class="meta"><span class="badge hot">${t("hot")}</span><span class="badge gold">${open ? "✓" : "✦ 50"}</span></div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("photos"), "Game.showHome()")}
      <div class="scroll">
        <p class="muted" style="margin-top:0">${t("coinsHelp")}</p>
        <div class="photo-grid">${cards}</div>
      </div>`);
  },

  openPhoto(id) {
    AudioFX.click();
    const p = CONTENT.PHOTOS.find((x) => x.id === id);
    if (this.unlocked[id]) {
      this.screen = "photo";
      Platform.startGameplay();
      this.modal(`<div class="modal-card" style="text-align:center">
        <img class="img-zoom" src="${p.src}" alt="">
        <h3>${tx(p.title)}</h3>
        <button class="btn sec" data-k="1" onclick="Game.closeModal();Game.showPhotos()">${t("close")}</button>
      </div>`);
      return;
    }
    this.modal(`<div class="modal-card">
      <div><span class="badge hot">${t("hot")}</span> <span class="badge gold">✦ 50</span></div>
      <h3>${tx(p.title)}</h3>
      <p class="muted">${t("rewardedHint")}</p>
      <button class="btn" style="width:100%;margin-top:8px" data-k="1" onclick="Game.buyPhoto('${id}')">${t("openFor")} 50</button>
      <button class="btn cyan" style="width:100%;margin-top:8px" data-k="1" onclick="Game.adPhoto('${id}')">${t("watchAd")}</button>
      <button class="btn sec" style="width:100%;margin-top:8px" data-k="1" onclick="Game.closeModal()">${t("close")}</button>
    </div>`);
  },

  unlockPhoto(id) {
    this.unlocked[id] = 1;
    this.save();
    AudioFX.success();
    this.toast(t("opened"));
    this.closeModal();
    this.showPhotos();
    this.openPhoto(id);
  },
  buyPhoto(id) {
    if (this.coins < CONTENT.PHOTO_PRICE) { this.toast(t("needCoins")); return; }
    this.coins -= CONTENT.PHOTO_PRICE;
    this.unlockPhoto(id);
  },
  adPhoto(id) {
    Platform.rewarded(() => this.unlockPhoto(id), () => this.toast(t("adFail")));
  },
  adCoins() {
    Platform.rewarded(() => {
      this.coins += CONTENT.AD_COINS;
      this.save();
      AudioFX.coin();
      this.toast(t("coinsGot", { c: CONTENT.AD_COINS }));
      if (this.screen === "profile") this.showProfile();
    }, () => this.toast(t("adFail")));
  },

  lastPreview(g) {
    const st = this.chats[g.id] || {};
    const last = st.log && st.log.length ? st.log[st.log.length - 1] : null;
    if (!last) return g.preview;
    if (last.photo && !last.text) return "📷 " + t("photoMsg");
    return last.text || g.preview;
  },

  showChats() {
    this._gen++;
    this._typing = false;
    AudioFX.click();
    this.screen = "chats";
    Platform.stopGameplay();
    const cards = CONTENT.GIRLS.map((g) => {
      const st = this.chats[g.id] || { done: false, opened: false };
      const unread = !st.opened ? `<span class="unread">1</span>` : "";
      return `<button class="card tg-item" data-k="1" onclick="Game.openChat('${g.id}')">
        <img class="avatar" src="${g.avatar}" alt="">
        <div style="min-width:0;flex:1;text-align:left">
          <div style="display:flex;justify-content:space-between;gap:8px">
            <b>${g.name}</b>${unread}
          </div>
          <div class="muted"><span class="dot"></span> ${t("online")} · ${g.age}</div>
          <div class="preview">${this.lastPreview(g)}</div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("chats"), "Game.showHome()")}
      <div class="scroll tg-list" style="display:flex;flex-direction:column;gap:0;padding:0">${cards}</div>`);
  },

  openChat(id) {
    AudioFX.click();
    this.closeModal();
    this.chatId = id;
    this.screen = "chat";
    Platform.startGameplay();
    if (!this.chats[id]) this.chats[id] = { i: 0, h: 0, log: [], done: false, opened: false };
    this.chats[id].opened = true;
    this.save();
    this.renderChat();
    const st = this.chats[id];
    const script = CONTENT.CHATS[id] || [];
    if (!st.done && script[st.i] && script[st.i].her) this.pumpNpc(id);
  },

  async pumpNpc(id) {
    const script = CONTENT.CHATS[id];
    if (!script) return;
    const st = this.chats[id];
    const gen = ++this._gen;
    while (st.i < script.length && script[st.i].her) {
      if (gen !== this._gen || this.chatId !== id) return;
      this._typing = true;
      this.renderChat();
      const wait = 700 + Math.min(1300, (script[st.i].her.length || 20) * 14);
      await this.sleep(wait);
      if (gen !== this._gen || this.chatId !== id) return;
      st.log.push({ who: "her", text: script[st.i].her, photo: script[st.i].photo || "" });
      st.i++;
      this._typing = false;
      this.save();
      this.renderChat();
    }
    if (st.i >= script.length) this.finishChat(id);
    else this.renderChat();
  },

  finishChat(id) {
    const st = this.chats[id];
    if (!st || st.done) return;
    st.done = true;
    this.coins += CONTENT.CHAT_REWARD || 20;
    this.save();
    AudioFX.coin();
    this.toast(t("chatReward", { c: CONTENT.CHAT_REWARD || 20 }));
    this.renderChat();
    Platform.interstitial(() => {});
  },

  renderChat() {
    const id = this.chatId;
    if (!id) return;
    const g = CONTENT.GIRLS.find((x) => x.id === id);
    const script = CONTENT.CHATS[id] || [];
    const st = this.chats[id];
    const msgs = st.log.map((m) => {
      const img = m.photo ? `<img class="att" src="${m.photo}" alt="" onclick="Game.zoomPhoto('${m.photo}')">` : "";
      const txm = m.text ? `<div>${m.text}</div>` : "";
      return `<div class="bubble ${m.who}">${img}${txm}</div>`;
    }).join("");
    const typing = this._typing ? `<div class="typing" aria-label="${t("typing")}"><i></i><i></i><i></i></div>` : "";
    let choices = "";
    if (!this._typing && st.i < script.length && script[st.i].opts) {
      choices = `<div class="choices">` + script[st.i].opts.map((op, i) =>
        `<button class="choice" data-k="1" onclick="Game.pickChat(${i})">${op.t}</button>`
      ).join("") + `</div>`;
    } else if (!this._typing && st.done) {
      choices = `<div class="choices"><div class="q-card" style="text-align:center">${t("hearts")}: ${st.h}<br>
        <button class="btn" style="margin-top:8px" data-k="1" onclick="Game.showChats()">${t("chats")}</button></div></div>`;
    }
    this.el(`<div class="tg-head">
        <button class="icon-btn" data-k="1" onclick="Game.showChats()">←</button>
        <img class="avatar" src="${g.avatar}" alt="">
        <div style="flex:1;min-width:0">
          <h2>${g.name}</h2>
          <div class="sub">${this._typing ? t("typing") : t("online")}</div>
        </div>
        <span class="coin-chip">✦ ${this.coins}</span>
      </div>
      <div class="tg">
        <div class="scroll" id="chatScroll"><div class="messages">${msgs}${typing}</div></div>
        ${choices}
        <div class="tg-input">${t("messagePh")}</div>
      </div>`);
    const sc = document.getElementById("chatScroll");
    if (sc) sc.scrollTop = sc.scrollHeight;
  },

  async pickChat(i) {
    if (this._typing) return;
    AudioFX.message();
    const id = this.chatId;
    const script = CONTENT.CHATS[id];
    const st = this.chats[id];
    if (!script[st.i] || !script[st.i].opts) return;
    const op = script[st.i].opts[i];
    st.log.push({ who: "me", text: op.t });
    st.h += op.h || 0;
    st.i++;
    this.renderChat();
    const gen = ++this._gen;
    if (op.her) {
      this._typing = true;
      this.renderChat();
      await this.sleep(700 + Math.min(1200, op.her.length * 14));
      if (gen !== this._gen || this.chatId !== id) return;
      st.log.push({ who: "her", text: op.her, photo: op.photo || "" });
      this._typing = false;
      this.save();
      this.renderChat();
    }
    if (gen !== this._gen) return;
    await this.pumpNpc(id);
  },

  zoomPhoto(src) {
    this.modal(`<div class="modal-card" style="text-align:center">
      <img class="img-zoom" src="${src}" alt="">
      <button class="btn sec" style="margin-top:8px" data-k="1" onclick="Game.closeModal()">${t("close")}</button>
    </div>`);
  },

  toggleMusic() {
    this.music = !this.music;
    AudioFX.setMusic(this.music);
    this.save();
    this.showProfile();
  },
  toggleSfx() {
    this.sfx = !this.sfx;
    AudioFX.setSfx(this.sfx);
    AudioFX.click();
    this.save();
    this.showProfile();
  },

  showProfile() {
    this._gen++;
    AudioFX.click();
    this.screen = "profile";
    Platform.stopGameplay();
    const chatsDone = Object.values(this.chats).filter((c) => c.done).length;
    const tests = Object.keys(this.testsDone).length;
    const photos = Object.keys(this.unlocked).length;
    this.el(`${this.top(t("profile"), "Game.showHome()")}
      <div class="scroll">
        <div class="stat-row">
          <div class="stat"><b>${this.coins}</b>${t("coins")}</div>
          <div class="stat"><b>${tests}/${CONTENT.QUIZZES.length}</b>${t("testsDone")}</div>
          <div class="stat"><b>${photos}/${CONTENT.PHOTOS.length}</b>${t("photosOpen")}</div>
          <div class="stat"><b>${chatsDone}/${CONTENT.GIRLS.length}</b>${t("chatsDone")}</div>
        </div>
        <p class="muted">${t("coinsHelp")}</p>
        <button class="btn gold" style="width:100%;min-height:52px;margin:8px 0" data-k="1" onclick="Game.adCoins()">${t("watchAdCoins")}</button>
        <p class="muted">${t("rewardedHint")}</p>
        <div class="btn-row" style="margin-top:10px">
          <button class="btn sec" data-k="1" onclick="Game.toggleMusic()">${t("music")}: ${this.music ? t("on") : t("off")}</button>
          <button class="btn sec" data-k="1" onclick="Game.toggleSfx()">${t("sfx")}: ${this.sfx ? t("on") : t("off")}</button>
        </div>
        <div class="q-card" style="margin-top:12px"><b>${t("how")}</b><p class="muted">${t("howBody")}</p></div>
      </div>`);
  }
};

window.Game = Game;
Game.start().catch(function (e) {
  document.body.innerHTML = '<div style="padding:24px;color:#fff;font-family:sans-serif">Распакуйте архив целиком и откройте index.html из папки.<pre>' + (e && e.message ? e.message : e) + "</pre></div>";
});
