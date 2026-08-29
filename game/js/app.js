const SAVE_KEY = "kayphone_v1";

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
    setInterval(() => this.tickClock(), 30000);
  },

  defaultChats() {
    const o = {};
    CONTENT.GIRLS.forEach((g) => { o[g.id] = { i: 0, h: 0, log: [], done: false }; });
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

  tickClock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const d = new Date();
    el.textContent = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
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

  top(title, backFn) {
    const back = backFn
      ? `<button class="icon-btn" data-k="1" onclick="${backFn}">←</button>`
      : `<span class="icon-btn">✧</span>`;
    return `<div class="topbar">${back}<h2>${title}</h2><span class="coin-chip">✦ ${this.coins}</span></div>`;
  },

  showHome() {
    AudioFX.click();
    this.screen = "home";
    Platform.stopGameplay();
    this.el(`<div class="home">
      <div class="home-grid">
        <button class="app-ico" data-k="1" onclick="Game.showTests()">
          <img src="assets/img/ui/app-test.jpg" alt=""><span>TEST 18+</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showPhotos()">
          <img src="assets/img/ui/app-photos.jpg" alt=""><span>Горячие<br>фоточки</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showChats()">
          <img src="assets/img/ui/app-chats.jpg" alt=""><span>Мои чаты</span>
        </button>
        <button class="app-ico" data-k="1" onclick="Game.showProfile()">
          <img src="assets/img/ui/app-profile.jpg" alt=""><span>Мой профиль</span>
        </button>
      </div>
    </div>`);
  },

  showTests() {
    AudioFX.click();
    this.screen = "tests";
    Platform.stopGameplay();
    const cards = CONTENT.QUIZZES.map((q) => {
      const done = !!this.testsDone[q.id];
      return `<button class="card" data-k="1" onclick="Game.previewTest('${q.id}')">
        <img class="avatar" src="${q.cover}" alt="">
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
        <img src="${p.src}" alt="" style="width:100%;border-radius:12px;max-height:52vh;object-fit:contain">
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

  showChats() {
    AudioFX.click();
    this.screen = "chats";
    Platform.stopGameplay();
    const cards = CONTENT.GIRLS.map((g) => {
      const st = this.chats[g.id] || { done: false };
      return `<button class="card tg-item" data-k="1" onclick="Game.openChat('${g.id}')">
        <img class="avatar" src="${g.avatar}" alt="">
        <div style="min-width:0;flex:1;text-align:left">
          <div><b>${g.name}</b> · ${g.age} ${st.done ? "✓" : ""}</div>
          <div class="muted"><span class="dot"></span> ${t("online")} · ${g.job}</div>
          <div class="preview">${g.preview}</div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("chats"), "Game.showHome()")}
      <div class="scroll" style="display:flex;flex-direction:column;gap:6px;background:#0e1a22">${cards}</div>`);
  },

  openChat(id) {
    AudioFX.click();
    this.chatId = id;
    this.screen = "chat";
    Platform.startGameplay();
    if (!this.chats[id]) this.chats[id] = { i: 0, h: 0, log: [], done: false };
    const st = this.chats[id];
    if (!st.log.length) this.advanceNpc(id);
    this.renderChat();
  },

  advanceNpc(id) {
    const script = CONTENT.CHATS[id];
    const st = this.chats[id];
    while (st.i < script.length && script[st.i].her) {
      st.log.push({ who: "her", text: script[st.i].her });
      st.i++;
    }
    if (st.i >= script.length) st.done = true;
    this.save();
  },

  renderChat() {
    const id = this.chatId;
    const g = CONTENT.GIRLS.find((x) => x.id === id);
    const script = CONTENT.CHATS[id];
    const st = this.chats[id];
    const msgs = st.log.map((m) => `<div class="bubble ${m.who}">${m.text}</div>`).join("");
    let choices = "";
    if (st.i < script.length && script[st.i].opts) {
      choices = `<div class="choices">` + script[st.i].opts.map((op, i) =>
        `<button class="choice" data-k="1" onclick="Game.pickChat(${i})">${op.t}</button>`
      ).join("") + `</div>`;
    } else if (st.done) {
      choices = `<div class="choices"><div class="q-card" style="text-align:center">♥ ${st.h}<br><button class="btn" data-k="1" onclick="Game.showChats()">${t("chats")}</button></div></div>`;
    }
    this.el(`${this.top(g.name, "Game.showChats()")}
      <div class="tg">
        <div class="scroll" id="chatScroll"><div class="messages">${msgs}</div>${choices}</div>
      </div>`);
    const sc = document.getElementById("chatScroll");
    if (sc) sc.scrollTop = sc.scrollHeight;
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
    this.renderChat();
    if (st.done) Platform.interstitial(() => {});
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
          <button class="btn sec" data-k="1" onclick="Game.toggleMusic()">${t("music")}: ${this.music ? "ON" : "OFF"}</button>
          <button class="btn sec" data-k="1" onclick="Game.toggleSfx()">${t("sfx")}: ${this.sfx ? "ON" : "OFF"}</button>
        </div>
        <div class="q-card" style="margin-top:12px"><b>${t("how")}</b><p class="muted">${t("howBody")}</p></div>
      </div>`);
  }
};

window.Game = Game;
Game.start().catch(function (e) {
  document.body.innerHTML = '<div style="padding:24px;color:#fff;font-family:sans-serif">Распакуйте архив целиком и откройте index.html из папки.<pre>' + (e && e.message ? e.message : e) + "</pre></div>";
});
