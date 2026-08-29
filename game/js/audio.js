const AudioFX = (() => {
  let ctx = null, master, musicGain, sfxGain, musicNodes = [];
  let musicOn = true, sfxOn = true, running = false;

  function ac() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext;
      ctx = new C();
      master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
      musicGain = ctx.createGain(); musicGain.gain.value = 0.18; musicGain.connect(master);
      sfxGain = ctx.createGain(); sfxGain.gain.value = 0.55; sfxGain.connect(master);
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
    g.gain.exponentialRampToValueAtTime(vol || 0.2, c.currentTime + (when || 0) + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + (when || 0) + dur);
    o.connect(g); g.connect(sfxGain);
    o.start(c.currentTime + (when || 0));
    o.stop(c.currentTime + (when || 0) + dur + 0.02);
  }

  function click() { if (!sfxOn) return; beep(720, 0.06, "triangle", 0.12); beep(980, 0.05, "sine", 0.08, 0.02); }
  function coin() { if (!sfxOn) return; beep(880, 0.08, "square", 0.1); beep(1320, 0.12, "sine", 0.12, 0.06); }
  function message() { if (!sfxOn) return; beep(420, 0.09, "sine", 0.1); beep(640, 0.1, "triangle", 0.08, 0.04); }
  function success() { if (!sfxOn) return; beep(523, 0.1, "sine", 0.1); beep(659, 0.12, "sine", 0.1, 0.08); beep(784, 0.16, "sine", 0.12, 0.16); }

  function startPad() {
    const c = ac();
    stopPad();
    const notes = [196, 247, 294, 330, 392];
    notes.forEach((n, i) => {
      const o = c.createOscillator();
      const g = c.createGain();
      const f = c.createBiquadFilter();
      o.type = i % 2 ? "sine" : "triangle";
      o.frequency.value = n;
      f.type = "lowpass"; f.frequency.value = 900;
      g.gain.value = 0.07;
      const lfo = c.createOscillator();
      const lg = c.createGain();
      lfo.frequency.value = 0.04 + i * 0.015;
      lg.gain.value = 18;
      lfo.connect(lg); lg.connect(o.frequency);
      o.connect(f); f.connect(g); g.connect(musicGain);
      o.start(); lfo.start();
      musicNodes.push(o, lfo, g);
    });
    running = true;
  }
  function stopPad() {
    musicNodes.forEach((n) => { try { n.stop && n.stop(); } catch (e) {} });
    musicNodes = [];
    running = false;
  }

  return {
    unlock() { ac(); },
    click, coin, message, success,
    setMusic(v) { musicOn = v; if (musicGain) musicGain.gain.value = v && !this._paused ? 0.18 : 0; if (v && !running && !this._paused) startPad(); if (!v) stopPad(); },
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
      if (sfxGain) sfxGain.gain.value = sfxOn ? 0.55 : 0;
      if (musicOn) {
        if (musicGain) musicGain.gain.value = 0.18;
        if (!running) startPad();
      }
    },
    isMusic() { return musicOn; },
    isSfx() { return sfxOn; }
  };
})();
