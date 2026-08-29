const Platform = {
  ysdk: null,
  player: null,
  local: true,
  paused: false,
  gameplay: false,
  readySent: false,

  async init() {
    if (location.protocol === "file:") {
      this.local = true;
      this.ysdk = this._mock();
      return this.ysdk;
    }
    const waitYa = () => new Promise((resolve) => {
      if (window.YaGames) return resolve(true);
      let n = 0;
      const id = setInterval(() => {
        n++;
        if (window.YaGames) { clearInterval(id); resolve(true); }
        else if (n > 20) { clearInterval(id); resolve(false); }
      }, 80);
    });
    const has = await waitYa();
    if (!has) {
      this.local = true;
      this.ysdk = this._mock();
      return this.ysdk;
    }
    this.ysdk = await YaGames.init();
    this.local = false;
    this.ysdk.on("game_api_pause", () => this.onPause());
    this.ysdk.on("game_api_resume", () => this.onResume());
    if (this.ysdk.EVENTS) {
      this.ysdk.on(this.ysdk.EVENTS.ACCOUNT_SELECTION_DIALOG_CLOSED, () => {
        location.reload();
      });
    }
    try { this.player = await this.ysdk.getPlayer({ scopes: false }); } catch (e) { this.player = null; }
    try {
      const st = await this.ysdk.adv.getBannerAdvStatus();
      if (!st.stickyAdvIsShowing) this.ysdk.adv.showBannerAdv();
    } catch (e) {}
    return this.ysdk;
  },

  lang() {
    try {
      return (this.ysdk && this.ysdk.environment && this.ysdk.environment.i18n.lang) || navigator.language || "ru";
    } catch (e) { return "ru"; }
  },

  isMobile() {
    try {
      const d = this.ysdk && this.ysdk.deviceInfo;
      if (d) return !!(d.isMobile || d.isTablet);
    } catch (e) {}
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  },

  ready() {
    if (this.readySent) return;
    this.readySent = true;
    try { this.ysdk.features.LoadingAPI.ready(); } catch (e) {}
  },

  startGameplay() {
    if (this.gameplay) return;
    this.gameplay = true;
    try { this.ysdk.features.GameplayAPI.start(); } catch (e) {}
  },
  stopGameplay() {
    if (!this.gameplay) return;
    this.gameplay = false;
    try { this.ysdk.features.GameplayAPI.stop(); } catch (e) {}
  },

  onPause() {
    this.paused = true;
    AudioFX.pauseAll();
    document.getElementById("pause").classList.remove("hidden");
  },
  onResume() {
    this.paused = false;
    document.getElementById("pause").classList.add("hidden");
    AudioFX.resumeAll();
    AudioFX.setMusic(AudioFX.isMusic());
  },

  requestFs() {
    try { this.ysdk.screen.fullscreen.request(); } catch (e) {
      const el = document.documentElement;
      const fn = el.requestFullscreen || el.webkitRequestFullscreen;
      if (fn) fn.call(el).catch(() => {});
    }
  },

  isAuth() {
    try { return !!(this.player && this.player.isAuthorized && this.player.isAuthorized()); }
    catch (e) { return false; }
  },

  async login() {
    try {
      await this.ysdk.auth.openAuthDialog();
      this.player = await this.ysdk.getPlayer({ scopes: false });
      return this.isAuth();
    } catch (e) { return false; }
  },

  async loadCloud() {
    if (!this.player || !this.player.getData) return null;
    try { return await this.player.getData(); } catch (e) { return null; }
  },
  async saveCloud(data) {
    if (!this.player || !this.player.setData) return;
    try {
      await this.player.setData(data, true);
      if (this.player.setStats) await this.player.setStats({ coins: data.coins || 0 });
    } catch (e) {}
  },

  interstitial(cb) {
    this.stopGameplay();
    const done = () => { if (Game.screenNeedsPlay()) this.startGameplay(); cb && cb(); };
    try {
      this.ysdk.adv.showFullscreenAdv({
        callbacks: {
          onOpen: () => AudioFX.pauseAll(),
          onClose: () => { AudioFX.resumeAll(); done(); },
          onError: () => { AudioFX.resumeAll(); done(); }
        }
      });
    } catch (e) { AudioFX.resumeAll(); done(); }
  },

  rewarded(onReward, onFail) {
    this.stopGameplay();
    let got = false;
    const finish = () => {
      AudioFX.resumeAll();
      if (Game.screenNeedsPlay()) this.startGameplay();
      if (got) onReward && onReward();
      else onFail && onFail();
    };
    if (this.local) {
      got = true;
      Game.toast(t("adLocal"));
      finish();
      return;
    }
    try {
      this.ysdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: () => AudioFX.pauseAll(),
          onRewarded: () => { got = true; },
          onClose: finish,
          onError: finish
        }
      });
    } catch (e) { finish(); }
  },

  _mock() {
    const self = this;
    return {
      environment: { i18n: { lang: "ru" } },
      deviceInfo: { isMobile: /Mobi|Android|iPhone/i.test(navigator.userAgent), isDesktop: true, type: "desktop" },
      features: { LoadingAPI: { ready() {} }, GameplayAPI: { start() {}, stop() {} } },
      adv: {
        showFullscreenAdv(o) { o.callbacks && o.callbacks.onClose && o.callbacks.onClose(false); },
        showRewardedVideo(o) { o.callbacks && o.callbacks.onRewarded && o.callbacks.onRewarded(); o.callbacks && o.callbacks.onClose && o.callbacks.onClose(true); },
        showBannerAdv() { return Promise.resolve({ stickyAdvIsShowing: false }); },
        getBannerAdvStatus() { return Promise.resolve({ stickyAdvIsShowing: false }); }
      },
      getPlayer: async () => ({
        isAuthorized: () => false,
        getData: async () => ({}),
        setData: async () => {},
        setStats: async () => {}
      }),
      auth: { openAuthDialog: async () => {} },
      screen: { fullscreen: { request: async () => {}, exit: async () => {}, status: "off" } },
      on() {}, off() {},
      EVENTS: {}
    };
  }
};
