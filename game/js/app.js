const SAVE_KEY = "candid_scale_v1";

const Game = {
  lang: "ru",
  screen: "hub",
  tab: "tests",
  coins: 0,
  unlocked: {},
  testsDone: {},
  music: true,
  sfx: true,
  focus: 0,
  test: null,
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
    this.goTab("tests");
    Platform.ready();
    this.save();
  },

  loadLocal() {
    try {
      const d = JSON.parse(localStorage.getItem(SAVE_KEY) || "null");
      if (!d) { this.coins = CONTENT.START_COINS; return; }
      this.coins = d.coins || 0;
      this.unlocked = d.unlocked || {};
      this.testsDone = d.testsDone || {};
      this.music = d.music !== false;
      this.sfx = d.sfx !== false;
      if (d.lang === "en" || d.lang === "ru") this.lang = d.lang;
    } catch (e) { this.coins = 0; }
  },

  mergeCloud(d) {
    if ((d.coins || 0) > this.coins) this.coins = d.coins;
    this.unlocked = Object.assign({}, d.unlocked || {}, this.unlocked);
    this.testsDone = Object.assign({}, d.testsDone || {}, this.testsDone);
  },

  save() {
    const data = {
      coins: this.coins, unlocked: this.unlocked, testsDone: this.testsDone,
      music: this.music, sfx: this.sfx, lang: this.lang, t: Date.now()
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

  screenNeedsPlay() { return this.screen === "testPlay" || this.screen === "photo"; },

  onKey(e) {
    if (e.key === "Escape") {
      if (!document.getElementById("modal").classList.contains("hidden")) { this.closeModal(); return; }
      if (this.screen === "testPlay" || this.screen === "result" || this.screen === "photo") this.goTab(this.tab);
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
      ${back ? `<button class="icon-btn" data-k="1" onclick="Game.goTab(Game.tab)">←</button>` : `<span class="icon-btn">✧</span>`}
      <h2>${title}</h2>
      <span class="coin-chip">✦ ${this.coins}</span>
      <button class="icon-btn" data-k="1" onclick="Game.toggleMusic()">${this.music ? "♫" : "🔇"}</button>
    </div>`;
  },

  nav() {
    const on = (id) => this.tab === id ? "on" : "";
    return `<nav class="nav">
      <button class="${on("tests")}" data-k="1" onclick="Game.goTab('tests')"><b>✦</b>${t("tests")}</button>
      <button class="${on("photos")}" data-k="1" onclick="Game.goTab('photos')"><b>♡</b>${t("photos")}</button>
      <button class="${on("coins")}" data-k="1" onclick="Game.goTab('coins')"><b>✦</b>${t("coinsTab")}</button>
    </nav>`;
  },

  goTab(id) {
    AudioFX.click();
    this.tab = id;
    this.screen = "hub";
    Platform.stopGameplay();
    if (id === "tests") this.showTests();
    else if (id === "photos") this.showPhotos();
    else this.showCoins();
  },

  showTests() {
    const cards = CONTENT.QUIZZES.map((q) => {
      const done = !!this.testsDone[q.id];
      return `<button class="card" data-k="1" onclick="Game.previewTest('${q.id}')">
        <img class="avatar" src="${q.cover}" alt="">
        <div style="text-align:left;flex:1;min-width:0">
          <b>${tx(q.title)}</b>
          <div class="muted">${t("testReward", { n: q.questions, c: q.reward })}</div>
          <div class="preview">${done ? "✓ +20" : "+20 ✦"}</div>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(tx(CONTENT.GAME_TITLE))}
      <div class="scroll">
        <div class="hero-card">
          <img src="assets/img/hero.jpg" alt="">
          <div class="shade"></div>
          <div class="copy">
            <div class="badge-row"><span class="badge hot">${t("hot")}</span><span class="badge">${CONTENT.QUIZZES.length} ${t("tests")}</span></div>
            <h3>${tx(CONTENT.GAME_TITLE)}</h3>
            <div class="muted">${t("coinsHelp")}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">${cards}</div>
      </div>${this.nav()}`);
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
          <div class="muted">${st.i + 1} / ${st.quiz.qs.length} · ${t("testReward", { n: st.quiz.qs.length, c: st.quiz.reward })}</div>
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

  showPhotos() {
    const cards = CONTENT.PHOTOS.map((p) => {
      const open = !!this.unlocked[p.id];
      return `<button class="photo-card ${open ? "" : "locked"}" data-k="1" onclick="Game.openPhoto('${p.id}')">
        <img src="${p.src}" alt="">
        ${open ? "" : `<div class="lock-ico">🔒</div>`}
        <div class="meta">
          <span class="badge hot">${t("hot")}</span>
          <span class="badge gold">${open ? "✓" : "✦ 50"}</span>
        </div>
      </button>`;
    }).join("");
    this.el(`${this.top(t("photos"))}
      <div class="scroll">
        <p class="muted" style="margin-top:0">${t("coinsHelp")}</p>
        <div class="photo-grid">${cards}</div>
      </div>${this.nav()}`);
  },

  openPhoto(id) {
    AudioFX.click();
    const p = CONTENT.PHOTOS.find((x) => x.id === id);
    if (this.unlocked[id]) {
      this.screen = "photo";
      Platform.startGameplay();
      this.modal(`<div class="modal-card" style="text-align:center">
        <img src="${p.src}" alt="" style="width:100%;border-radius:12px;max-height:55vh;object-fit:contain">
        <h3>${tx(p.title)}</h3>
        <button class="btn sec" data-k="1" onclick="Game.closeModal();Game.goTab('photos')">${t("close")}</button>
      </div>`);
      return;
    }
    this.modal(`<div class="modal-card">
      <div class="badge-row"><span class="badge hot">${t("hot")}</span><span class="badge gold">✦ 50</span></div>
      <h3>${tx(p.title)}</h3>
      <p class="muted">${t("rewardedHint")}</p>
      <button class="btn" style="width:100%;margin-top:10px" data-k="1" onclick="Game.buyPhoto('${id}')">${t("openFor")} 50</button>
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
      if (this.tab === "coins") this.showCoins();
    }, () => this.toast(t("adFail")));
  },

  toggleMusic() {
    this.music = !this.music;
    AudioFX.setMusic(this.music);
    this.save();
    if (this.screen === "hub") this.goTab(this.tab);
    else if (this.screen === "testPlay") this.renderQ();
  },

  toggleSfx() {
    this.sfx = !this.sfx;
    AudioFX.setSfx(this.sfx);
    AudioFX.click();
    this.save();
    this.showCoins();
  },

  setLang(l) {
    this.lang = l;
    document.documentElement.lang = l === "ru" ? "ru" : "en";
    this.save();
    AudioFX.click();
    this.showCoins();
  },

  showCoins() {
    const tests = Object.keys(this.testsDone).length;
    const photos = Object.keys(this.unlocked).length;
    this.el(`${this.top(t("coinsTab"))}
      <div class="scroll">
        <div class="stat-row">
          <div class="stat"><b>${this.coins}</b>${t("coins")}</div>
          <div class="stat"><b>${tests}/${CONTENT.QUIZZES.length}</b>${t("tests")}</div>
          <div class="stat"><b>${photos}/${CONTENT.PHOTOS.length}</b>${t("photos")}</div>
        </div>
        <p class="muted">${t("coinsHelp")}</p>
        <button class="btn gold" style="width:100%;min-height:56px;margin:8px 0" data-k="1" onclick="Game.adCoins()">${t("watchAdCoins")}</button>
        <p class="muted">${t("rewardedHint")}</p>
        <div class="btn-row" style="margin-top:10px">
          <button class="btn sec" data-k="1" onclick="Game.toggleMusic()">${t("music")}: ${this.music ? "ON" : "OFF"}</button>
          <button class="btn sec" data-k="1" onclick="Game.toggleSfx()">${t("sfx")}: ${this.sfx ? "ON" : "OFF"}</button>
        </div>
        <div class="btn-row" style="margin-top:8px">
          <button class="btn sec" data-k="1" onclick="Game.setLang('ru')">🇷🇺 Русский</button>
          <button class="btn sec" data-k="1" onclick="Game.setLang('en')">🇬🇧 English</button>
        </div>
        <div class="q-card" style="margin-top:12px"><b>${t("how")}</b><p class="muted">${t("howBody")}</p></div>
      </div>${this.nav()}`);
  },

  async doLogin() {
    AudioFX.click();
    const ok = await Platform.login();
    if (ok) {
      const cloud = await Platform.loadCloud();
      if (cloud) this.mergeCloud(cloud);
      this.save();
    }
    this.showCoins();
  }
};

window.Game = Game;
Game.start().catch(function (e) {
  var msg = (e && e.message) ? e.message : String(e);
  document.body.innerHTML = '<div style="padding:28px;font-family:Segoe UI,sans-serif;color:#fff;background:#120218;min-height:100vh">' +
    "<h2>Распакуйте архив целиком и откройте index.html из папки</h2><pre>" + msg + "</pre></div>";
});
