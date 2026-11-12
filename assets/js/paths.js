// Draws a few sample paths of a standard Brownian motion on the home page.
// New random paths on every visit; animates once unless reduced motion is preferred.
(function () {
  const canvas = document.getElementById('paths');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const N_PATHS = 5, STEPS = 420;

  // Box–Muller standard normal
  const gauss = () => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  // Simulate on [0, 1]: W_{t+dt} = W_t + sqrt(dt) * Z
  const dt = 1 / STEPS;
  const paths = Array.from({ length: N_PATHS }, () => {
    const w = [0];
    for (let i = 1; i <= STEPS; i++) w.push(w[i - 1] + Math.sqrt(dt) * gauss());
    return w;
  });
  const maxAbs = Math.max(1.2, ...paths.flat().map(Math.abs));

  const css = getComputedStyle(document.documentElement);
  const ink = css.getPropertyValue('--path').trim();
  const accent = css.getPropertyValue('--accent').trim();
  const axis = css.getPropertyValue('--rule').trim();

  let w = 0, h = 0;
  function size() {
    const dpr = window.devicePixelRatio || 1;
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(progress) {
    ctx.clearRect(0, 0, w, h);
    const pad = 6, mid = h / 2, scale = (h / 2 - pad) / maxAbs;
    ctx.strokeStyle = axis; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid); ctx.stroke();

    const upto = Math.max(1, Math.floor(progress * STEPS));
    paths.forEach((p, k) => {
      const highlight = k === 0;
      ctx.strokeStyle = highlight ? accent : ink;
      ctx.globalAlpha = highlight ? 1 : 0.45;
      ctx.lineWidth = highlight ? 1.8 : 1.1;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let i = 0; i <= upto; i++) {
        const x = (i / STEPS) * w, y = mid - p[i] * scale;
        i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.stroke();
      if (highlight && progress < 1) {
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc((upto / STEPS) * w, mid - p[upto] * scale, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  }

  size();
  if (reduce) { draw(1); }
  else {
    const start = performance.now(), dur = 2200;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      draw(1 - Math.pow(1 - t, 3)); // ease-out
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  window.addEventListener('resize', () => { size(); draw(1); });
})();
