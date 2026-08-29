const SAVE_KEY = "lunar_messages_v1";

const Game = {
  lang: "ru",
  screen: "home",
  tab: "chats",
  coins: 40,
  unlocked: {},
  testsDone: {},
  chats: {},
  music: true,
  sfx: true,
  focus: 0,
  test: null,
  chatId: null,
  fsAsked: false,

  async start() {
    await Platform.init();
    const rawLang = (Platform.lang() || "ru").slice(0, 2).toLowerCase();
    this.lang = ["ru", "be", "kk", "uk", "uz"].includes(rawLang) ? "ru" : "en";
    document.documentElement.lang = this.lang === "ru" ? "ru" : "en";
    this.loadLocal();
    const cloud = await Platform.loadCloud();
    if (cloud && typeof cloud.coins === "number") this.mergeCloud(cloud);
    AudioFX.setMusic(this.music);
    AudioFX.setSfx(this.sfx);
    this.bindGlobal();
    this.showHome();
    Platform.ready();
    this.save();
  },

  defaultChats() {
    const o = {};
    CONTENT.GIRLS.forEach((g) => { o[g.id] = { i: 0, h: 0, log: [], done: false }; });
    return o;
  },

  loadLocal() {
    try {
      const d = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
      if (!d) { this.coins = CONTENT.START_COINS; this.chats = this.defaultChats(); return; }
      this.coins = d.coins || CONTENT.START_COINS;
      this.unlocked = d.unlocked || {};
      this.testsDone = d.testsDone || {};
      this.chats = d.chats || this.defaultChats();
      this.music = d.music !== false;
      this.sfx = d.sfx !== false;
      if (d.lang === "en" || d.lang === "ru") this.lang = d.lang;
    } catch (e) {
      this.coins = CONTENT.START_COINS;
      this.chats = this.defaultChats();
    }
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
      chats: this.chats, music: this.music, sfx: this.sfx, lang: this.lang, t: Date.now()
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
      if (document.hidden) {
        AudioFX.pauseAll();
        Platform.stopGameplay();
      } else if (!Platform.paused) {
        AudioFX.resumeAll();
        if (this.screenNeedsPlay()) Platform.startGameplay();
      }
    });
    window.addEventListener("blur", () => { AudioFX.pauseAll(); });
    window.addEventListener("focus", () => { if (!document.hidden && !Platform.paused) AudioFX.resumeAll(); });
    document.addEventListener("keydown", (e) => this.onKey(e));
    document.addEventListener("pointerdown", () => {
      AudioFX.unlock();
      if (!this.fsAsked && Platform.isMobile()) {
        this.fsAsked = true;
        Platform.requestFs();
      }
    }, { once: false });
  },

  screenNeedsPlay() {
    return this.screen === "chat" || this.screen === "testPlay" || this.screen === "photo";
  },

  onKey(e) {
    if (e.key === "Escape") {
      if (!document.getElementById("modal").classList.contains("hidden")) { this.closeModal(); return; }
      if (this.screen === "chat" || this.screen === "test" || this.screen === "photo") this.goTab(this.tab);
      return;
    }
    const items = [...document.querySelectorAll("[data-k]")];
    if (!items.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      this.focus = (this.focus + 1) % items.length;
      items[this.focus].focus();
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      this.focus = (this.focus - 1 + items.length) % items.length;
      items[this.focus].focus();
    } else if (e.key === "Enter") {
      if (document.activeElement && document.activeElement.dataset.k) document.activeElement.click();
    }
  },

  el(html) {
    const b = document.getElementById("view");
    b.innerHTML = html;
    b.classList.remove("hidden");
    document.getElementById("boot").classList.add("hidden");
    this.focus = 0;
    const first = b.querySelector("[data-k]");
    if (first) first.setAttribute("tabindex", "0");
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

  top(title, back) {
    return `<div class="topbar">
      ${back ? `<button class="icon-btn" data-k="1" onclick="Game.goTab(Game.tab)">${"←"}</button>` : `<span class="icon-btn">🌙</span>`}
      <h2>${title}</h2>
      <span class="coin-chip">✦ ${this.coins}</span>
      <button class="icon-btn" data-k="1" onclick="Game.toggleMusic()">${this.music ? "♪" : "🔇"}</button>
    </div>`;
  },

  nav() {
    const on = (id) => this.tab === id ? "on" : "";
    return `<nav class="nav">
      <button class="${on("chats")}" data-k="1" onclick="Game.goTab('chats')"><b>💬</b>${t("chats")}</button>
      <button class="${on("photos")}" data-k="1" onclick="Game.goTab('photos')"><b>📷</b>${t("photos")}</button>
      <button class="${on("tests")}" data-k="1" onclick="Game.goTab('tests')"><b>✦</b>${t("tests")}</button>
      <button class="${on("profile")}" data-k="1" onclick="Game.goTab('profile')"><b>♡</b>${t("profile")}</button>
    </nav>`;
  },

  goTab(id) {
    AudioFX.click();
    this.tab = id;
    this.screen = "hub";
    Platform.stopGameplay();
    if (id === "chats") this.showChats();
    else if (id === "photos") this.showPhotos();
    else if (id === "tests") this.showTests();
    else this.showProfile();
  },

  showHome() {
    this.tab = "chats";
    this.showChats(true);
  },

  showChats() {
    const cards = CONTENT.GIRLS.map((g) => {
      const st = this.chats[g.id] || { done: false, i: 0 };
      const mark = st.done ? "✓" : "";
      return `<button class="card chat-list" data-k="1" onclick="Game.openChat('${g.id}')">
        <img class="avatar" src="${g.avatar}" alt="">
        <div style="flex:1;min-width:0;text-align:left">
          <div><b>${tx(g.name)}</b> · ${g.age} · ${tx(g.job)} ${mark}</div>
          <div class="muted"><span class="online"></span> ${t("online")}</div>
          <div class="preview">${tx(g.preview)}</div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(tx(CONTENT.GAME_TITLE))}
      <div class="scroll">
        <div class="hero-card">
          <img src="assets/img/hero.jpg" alt="">
          <div class="shade"></div>
          <div class="copy">
            <div class="badge-row"><span class="badge hot">${t("hot")}</span><span class="badge">${t("chats")} · ${t("photos")} · ${t("tests")}</span></div>
            <h3>${tx(CONTENT.GAME_TITLE)}</h3>
            <div class="muted">${t("ageNote")}</div>
          </div>
        </div>
        <div class="section-title">${t("chats")}</div>
        <div style="display:flex;flex-direction:column;gap:8px">${cards}</div>
      </div>${this.nav()}`);
  },

  openChat(id) {
    AudioFX.click();
    this.chatId = id;
    this.screen = "chat";
    Platform.startGameplay();
    const g = CONTENT.GIRLS.find((x) => x.id === id);
    const script = CONTENT.CHATS[id];
    if (!this.chats[id]) this.chats[id] = { i: 0, h: 0, log: [], done: false };
    const st = this.chats[id];
    if (!st.log.length) this.advanceNpc(id, true);
    this.renderChat(g, script, st);
  },

  advanceNpc(id, init) {
    const script = CONTENT.CHATS[id];
    const st = this.chats[id];
    while (st.i < script.length && script[st.i].her) {
      st.log.push({ who: "her", text: script[st.i].her });
      st.i++;
    }
    if (st.i >= script.length) st.done = true;
    if (!init) this.save();
  },

  renderChat(g, script, st) {
    const msgs = st.log.map((m) => `<div class="bubble ${m.who}">${tx(m.text)}</div>`).join("");
    let choices = "";
    if (st.i < script.length && script[st.i].opts) {
      choices = `<div class="choices">` + script[st.i].opts.map((op, i) =>
        `<button class="choice" data-k="1" onclick="Game.pickChat(${i})">${tx(op.t)}</button>`
      ).join("") + `</div>`;
    } else if (st.done) {
      const end = st.h >= 12 ? t("endingFire") : st.h >= 7 ? t("endingSpark") : t("endingWarm");
      choices = `<div class="q-card" style="text-align:center"><div class="stars">♥ ${st.h}</div><p>${end}</p>
        <button class="btn" data-k="1" onclick="Game.goTab('chats')">${t("continue")}</button></div>`;
    }
    this.el(`${this.top(tx(g.name) + " · " + g.age, true)}
      <div class="scroll" id="chatScroll">
        <div class="card" style="margin-bottom:10px">
          <img class="avatar" src="${g.avatar}" alt="">
          <div><b>${tx(g.name)}</b><div class="muted">${tx(g.job)} · <span class="online"></span> ${t("online")}</div></div>
        </div>
        <div class="messages">${msgs}</div>${choices}
      </div>`);
    const sc = document.getElementById("chatScroll");
    sc.scrollTop = sc.scrollHeight;
  },

  pickChat(i) {
    AudioFX.message();
    const id = this.chatId;
    const script = CONTENT.CHATS[id];
    const st = this.chats[id];
    const op = script[st.i].opts[i];
    st.log.push({ who: "me", text: op.t });
    st.h += op.h || 0;
    st.i++;
    this.advanceNpc(id);
    const g = CONTENT.GIRLS.find((x) => x.id === id);
    this.renderChat(g, script, st);
    this.save();
    if (st.done) {
      Platform.interstitial(() => {});
    }
  },

  showPhotos() {
    const cards = CONTENT.PHOTOS.map((p) => {
      const open = !!this.unlocked[p.id];
      const g = CONTENT.GIRLS.find((x) => x.id === p.girl);
      return `<button class="photo-card ${open ? "" : "locked"}" data-k="1" onclick="Game.openPhoto('${p.id}')">
        <img src="${p.src}" alt="">
        ${open ? "" : `<div class="lock-ico">🔒</div>`}
        <div class="meta">
          <span class="badge hot">${t("hot")}</span>
          <span class="badge gold">${open ? "✓" : "✦ " + p.price}</span>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("photos"))}
      <div class="scroll">
        <div class="btn-row" style="margin-bottom:10px">
          <button class="btn gold" data-k="1" onclick="Game.adCoins()">${t("watchAdCoins")}</button>
        </div>
        <div class="photo-grid">${cards}</div>
      </div>${this.nav()}`);
  },

  openPhoto(id) {
    AudioFX.click();
    const p = CONTENT.PHOTOS.find((x) => x.id === id);
    const open = !!this.unlocked[id];
    const g = CONTENT.GIRLS.find((x) => x.id === p.girl);
    if (open) {
      this.screen = "photo";
      Platform.startGameplay();
      this.modal(`<div class="modal-card" style="text-align:center">
        <img src="${p.src}" alt="" style="width:100%;border-radius:12px;max-height:55vh;object-fit:contain">
        <h3>${tx(p.title)}</h3>
        <p class="muted">${tx(g.name)} · ${t("hot")}</p>
        <button class="btn sec" data-k="1" onclick="Game.closeModal();Game.goTab('photos')">${t("close")}</button>
      </div>`);
      return;
    }
    this.modal(`<div class="modal-card">
      <div class="badge-row"><span class="badge hot">${t("hot")}</span><span class="badge gold">✦ ${p.price}</span></div>
      <h3>${tx(p.title)}</h3>
      <p class="muted">${tx(g.name)} · ${t("rewardedHint")}</p>
      <div class="btn-row" style="margin-top:10px">
        <button class="btn" data-k="1" onclick="Game.buyPhoto('${id}')">${t("openFor")} ${p.price}</button>
      </div>
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
    const p = CONTENT.PHOTOS.find((x) => x.id === id);
    if (this.coins < p.price) { this.toast(t("needCoins")); return; }
    this.coins -= p.price;
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
      if (this.tab === "photos") this.showPhotos();
      if (this.tab === "profile") this.showProfile();
    }, () => this.toast(t("adFail")));
  },

  showTests() {
    const cards = CONTENT.QUIZZES.map((q) => {
      const done = !!this.testsDone[q.id];
      return `<button class="card" data-k="1" onclick="Game.previewTest('${q.id}')">
        <img class="avatar" src="${q.cover}" alt="">
        <div style="text-align:left;flex:1">
          <b>${tx(q.title)}</b>
          <div class="muted">${t("testReward", { n: q.questions, c: q.reward })}</div>
          <div class="preview">${done ? "✓" : "15"} </div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("tests"))}
      <div class="scroll"><div style="display:flex;flex-direction:column;gap:8px">${cards}</div></div>${this.nav()}`);
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
    const ans = item.a.map((a, i) =>
      `<button class="answer" data-k="1" onclick="Game.answer(${i})">${tx(a.t)}</button>`
    ).join("");
    this.el(`${this.top(tx(st.quiz.title), true)}
      <div class="scroll">
        <div class="q-card">
          <div class="muted">${st.i + 1} / ${st.quiz.qs.length}</div>
          <div class="progress"><i style="width:${pct}%"></i></div>
          <h3>${tx(item.q)}</h3>
          <div class="answers">${ans}</div>
        </div>
      </div>`);
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
    this.el(`${this.top(t("result"), true)}
      <div class="scroll result">
        <div class="q-card">
          <div class="muted">${tx(st.quiz.title)}</div>
          <div class="big">${tx(res.title)}</div>
          <div class="stars">${"★".repeat(Math.min(5, 1 + Math.floor(st.s / 10)))}</div>
          <p>${tx(res.text)}</p>
          <p class="badge gold" style="display:inline-block">${bonus ? t("coinsGot", { c: bonus }) : t("alreadyRewarded")}</p>
          <div class="btn-row" style="margin-top:14px">
            <button class="btn" data-k="1" onclick="Game.startTest('${st.id}')">${t("again")}</button>
            <button class="btn sec" data-k="1" onclick="Game.goTab('tests')">${t("tests")}</button>
          </div>
        </div>
      </div>`);
    Platform.interstitial(() => {});
  },

  toggleMusic() {
    this.music = !this.music;
    AudioFX.setMusic(this.music);
    this.save();
    if (this.screen === "hub") this.goTab(this.tab);
    else if (this.screen === "chat") this.openChat(this.chatId);
    else if (this.screen === "testPlay" && this.test && this.test.i < (this.test.quiz.qs.length)) this.renderQ();
  },

  showProfile() {
    const chatsDone = Object.values(this.chats).filter((c) => c.done).length;
    const tests = Object.keys(this.testsDone).length;
    const photos = Object.keys(this.unlocked).length;
    this.el(`${this.top(t("profile"))}
      <div class="scroll">
        <div class="stat-row">
          <div class="stat"><b>${this.coins}</b>${t("coins")}</div>
          <div class="stat"><b>${photos}/${CONTENT.PHOTOS.length}</b>${t("photosOpen")}</div>
          <div class="stat"><b>${chatsDone}/${CONTENT.GIRLS.length}</b>${t("chatsDone")}</div>
          <div class="stat"><b>${tests}/${CONTENT.QUIZZES.length}</b>${t("testsDone")}</div>
        </div>
        <button class="btn gold" style="width:100%;margin:8px 0" data-k="1" onclick="Game.adCoins()">${t("watchAdCoins")}</button>
        <div class="q-card" style="margin:10px 0">
          <b>${t("login")}</b>
          <p class="muted">${t("loginHint")}</p>
          ${Platform.isAuth() ? `<p>Yandex ID ✓</p>` : `<button class="btn" data-k="1" onclick="Game.doLogin()">${t("login")}</button>`}
        </div>
        <div class="q-card" style="margin:10px 0">
          <div class="btn-row">
            <button class="btn sec" data-k="1" onclick="Game.toggleMusic()">${t("music")}: ${this.music ? "ON" : "OFF"}</button>
            <button class="btn sec" data-k="1" onclick="Game.toggleSfx()">${t("sfx")}: ${this.sfx ? "ON" : "OFF"}</button>
          </div>
          <div class="btn-row" style="margin-top:8px">
            <button class="btn sec" data-k="1" onclick="Game.setLang('ru')">🇷🇺 Русский</button>
            <button class="btn sec" data-k="1" onclick="Game.setLang('en')">🇬🇧 English</button>
          </div>
        </div>
        <div class="q-card"><b>${t("how")}</b><p class="muted">${t("howBody")}</p></div>
        <div class="q-card" style="margin-top:10px"><b>${t("privacy")}</b><p class="muted">${t("privacyBody")}</p></div>
      </div>${this.nav()}`);
  },

  toggleSfx() {
    this.sfx = !this.sfx;
    AudioFX.setSfx(this.sfx);
    AudioFX.click();
    this.save();
    this.showProfile();
  },

  setLang(l) {
    this.lang = l;
    document.documentElement.lang = l === "ru" ? "ru" : "en";
    this.save();
    AudioFX.click();
    this.showProfile();
  },

  async doLogin() {
    AudioFX.click();
    const ok = await Platform.login();
    if (ok) {
      const cloud = await Platform.loadCloud();
      if (cloud) this.mergeCloud(cloud);
      this.save();
    }
    this.showProfile();
  }
};

window.Game = Game;
Game.start();
