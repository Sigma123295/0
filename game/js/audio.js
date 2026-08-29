const AudioFX = (() => {
  let ctx = null, master, musicGain, sfxGain;
  let musicOn = true, sfxOn = true, running = false, timer = 0, step = 0;
  const melody = [220, 261.63, 293.66, 329.63, 392, 329.63, 293.66, 261.63, 246.94, 220, 196, 220];

  function ac() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      ctx = new C();
      master = ctx.createGain(); master.gain.value = 0.72; master.connect(ctx.destination);
      musicGain = ctx.createGain(); musicGain.gain.value = 0.22; musicGain.connect(master);
      sfxGain = ctx.createGain(); sfxGain.gain.value = 0.5; sfxGain.connect(master);
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function beep(freq, dur, type, vol, when) {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, c.currentTime + (when || 0));
    g.gain.exponentialRampToValueAtTime(vol || 0.2, c.currentTime + (when || 0) + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (when || 0) + dur);
    o.connect(g); g.connect(sfxGain);
    o.start(c.currentTime + (when || 0));
    o.stop(c.currentTime + (when || 0) + dur + 0.02);
  }

  function click() { if (!sfxOn) return; beep(840, 0.05, "sine", 0.1); }
  function coin() { if (!sfxOn) return; beep(660, 0.08, "sine", 0.1); beep(990, 0.12, "sine", 0.12, 0.07); }
  function success() { if (!sfxOn) return; beep(523, 0.12, "sine", 0.1); beep(659, 0.14, "sine", 0.1, 0.1); beep(784, 0.18, "sine", 0.12, 0.2); }

  function tone(freq, dur, vol) {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    const f = c.createBiquadFilter();
    o.type = "sine";
    o.frequency.value = freq;
    f.type = "lowpass"; f.frequency.value = 1400;
    g.gain.setValueAtTime(0.0001, c.currentTime);
    g.gain.exponentialRampToValueAtTime(vol, c.currentTime + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    o.connect(f); f.connect(g); g.connect(musicGain);
    o.start(); o.stop(c.currentTime + dur + 0.05);
  }

  function tick() {
    if (!running || !musicOn) return;
    const n = melody[step % melody.length];
    tone(n, 1.15, 0.09);
    tone(n / 2, 1.4, 0.05);
    step++;
  }

  function startPad() {
    stopPad();
    ac();
    running = true;
    step = 0;
    tick();
    timer = setInterval(tick, 720);
  }
  function stopPad() {
    running = false;
    if (timer) { clearInterval(timer); timer = 0; }
  }

  return {
    unlock() { ac(); },
    click, coin, success, message: click,
    setMusic(v) {
      musicOn = v;
      if (musicGain) musicGain.gain.value = v && !this._paused ? 0.22 : 0;
      if (v && !running && !this._paused) startPad();
      if (!v) stopPad();
    },
    setSfx(v) { sfxOn = v; },
    pauseAll() {
      this._paused = true;
      if (musicGain) musicGain.gain.value = 0;
      if (sfxGain) sfxGain.gain.value = 0;
      if (ctx && ctx.state === "running") ctx.suspend();
    },
    resumeAll() {
      this._paused = false;
      if (ctx) ctx.resume();
      if (sfxGain) sfxGain.gain.value = sfxOn ? 0.5 : 0;
      if (musicOn) {
        if (musicGain) musicGain.gain.value = 0.22;
        if (!running) startPad();
      }
    },
    isMusic() { return musicOn; },
    isSfx() { return sfxOn; }
  };
})();
