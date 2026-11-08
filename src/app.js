// CBA Suites Madeira — взаємодія сторінки. Без фреймворків.
(() => {
"use strict";
const D = JSON.parse(document.getElementById("app-data").textContent);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const html = document.documentElement, body = document.body;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const U = D.i18n;
const T = (s, v = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (v[k] ?? m));
const pr = new Intl.PluralRules(D.locale);
const plural = (n, f) => f[pr.select(n)] || f.other;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const pick = (p, w) => p.ws.find((x) => x >= w) || p.ws[p.ws.length - 1];
const url = (p, w) => `${D.base}img/${p.k}-${pick(p, w)}.webp`;
const srcset = (p) => p.ws.map((w) => `${D.base}img/${p.k}-${w}.webp ${w}w`).join(", ");
const lock = () => { html.style.overflow = body.classList.contains("menuopen") || $("#lb").classList.contains("open") || $("#sdlg").open ? "hidden" : ""; };

/* ===== Кнопка «Назад» закриває перегляд фото, а не сайт ===== */
// Відкриваючи галерею чи вікно номера, додаємо запис в історію (адреса та сама). «Назад» лише закриває вікно,
// а сторінка лишається на тому місці, де натиснули на фото.
let view = null, viewY = 0, afterPop = null;
const viewOpen = (kind) => { if (view) return; view = kind; viewY = scrollY; history.pushState({ cbaView: kind }, ""); };
const restoreY = () => { if (Math.abs(scrollY - viewY) > 2) scrollTo({ top: viewY, behavior: "instant" }); };
const viewClosed = () => { // вікно закрили кнопкою, Esc чи кліком — прибираємо свій запис з історії
  if (!view) return;
  view = null;
  if (history.state && history.state.cbaView) history.back(); else { restoreY(); afterPop && afterPop(); afterPop = null; }
};
addEventListener("popstate", () => {
  if (view === "lb" && $("#lb").classList.contains("open")) { view = null; lbClose(); }
  else if (view === "dlg" && $("#sdlg").open) { view = null; $("#sdlg").close(); }
  view = null;
  requestAnimationFrame(() => { restoreY(); if (afterPop) { afterPop(); afterPop = null; } });
});

/* ===== Шапка, плаваюча кнопка, активний пункт меню ===== */
const hdr = $("#hdr"), fab = $("#fab"), hero = $(".hero");
let lastY = scrollY, bookVisible = false;
function onScroll() {
  const y = scrollY, end = hero.offsetHeight - innerHeight * 0.92;
  hdr.classList.toggle("solid", y > end);
  hdr.classList.toggle("away", y > end + 300 && y > lastY + 2 && !body.classList.contains("menuopen"));
  if (y < lastY - 2) hdr.classList.remove("away");
  fab.classList.toggle("show", y > end && !bookVisible);
  lastY = y;
}
const navLinks = $$(".nav a");
const secIO = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.target.id === "book") { bookVisible = e.isIntersecting; onScroll(); }
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main > section[id]").forEach((s) => secIO.observe(s));

/* ===== Hero: крізь мансардне вікно ===== */
let p = -1;
function heroTick() {
  if (reduce) return;
  const total = hero.offsetHeight - innerHeight;
  const np = clamp(-hero.getBoundingClientRect().top / Math.max(total, 1), 0, 1);
  if (Math.abs(np - p) > 0.0005) { p = np; hero.style.setProperty("--p", p.toFixed(4)); }
}
if (reduce) hero.style.height = "100svh";

/* ===== Живий Фуншал: час, схід/захід сонця, середні за місяць ===== */
const live = $("#live");
if (live) {
  const tf = new Intl.DateTimeFormat(D.locale, { timeZone: "Atlantic/Madeira", hour: "2-digit", minute: "2-digit" });
  const df = new Intl.DateTimeFormat("en-CA", { timeZone: "Atlantic/Madeira", year: "numeric", month: "2-digit", day: "2-digit" });
  const sun = (Y, M, Dd) => { // NOAA: хвилини UTC сходу й заходу
    const n = Math.round((Date.UTC(Y, M - 1, Dd) - Date.UTC(Y, 0, 0)) / 864e5), g = 2 * Math.PI / 365 * (n - 1);
    const eq = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    const de = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    const la = D.hotel.lat * Math.PI / 180;
    const ha = Math.acos(Math.cos(90.833 * Math.PI / 180) / (Math.cos(la) * Math.cos(de)) - Math.tan(la) * Math.tan(de)) * 180 / Math.PI;
    const noon = 720 - 4 * D.hotel.lon - eq, at = (m) => new Date(Date.UTC(Y, M - 1, Dd) + m * 6e4);
    return { rise: at(noon - 4 * ha), set: at(noon + 4 * ha) };
  };
  const upd = () => {
    const now = new Date(), [Y, M, Dd] = df.format(now).split("-").map(Number), s = sun(Y, M, Dd);
    $("#lvTime").textContent = tf.format(now);
    if (now > s.set) { const t = new Date(Date.UTC(Y, M - 1, Dd) + 864e5); $("#lvSunL").textContent = U.hero.live.sunrise; $("#lvSun").textContent = tf.format(sun(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate()).rise); }
    else if (now < s.rise) { $("#lvSunL").textContent = U.hero.live.sunrise; $("#lvSun").textContent = tf.format(s.rise); }
    else { $("#lvSunL").textContent = U.hero.live.sunset; $("#lvSun").textContent = tf.format(s.set); }
    const m = M - 1;
    $("#lvAvg").textContent = `${T(U.hero.live.typical, { month: D.months[m].long })} ${D.climate.air[m]}° · ${U.hero.live.sea} ${D.climate.sea[m]}°`;
    curMonth = m;
  };
  var curMonth = new Date().getMonth();
  upd(); live.hidden = false; setInterval(upd, 30000);
}

/* ===== Поява при скролі, лічильники ===== */
const countUp = (el) => {
  const to = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0, nf = new Intl.NumberFormat(D.locale, { minimumFractionDigits: dec, maximumFractionDigits: dec });
  if (reduce) { el.textContent = nf.format(to); return; }
  const t0 = performance.now(), dur = 1500;
  const step = (t) => { const k = clamp((t - t0) / dur, 0, 1), e = 1 - Math.pow(1 - k, 3); el.textContent = nf.format(to * e); if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
};
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  if (e.target.dataset.count) countUp(e.target);
  if (e.target.id === "mapbox") mapIn();
  io.unobserve(e.target);
}), { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
[".rail .card", ".tcards .tcard", ".bento .tile", ".themes li", ".facts div"].forEach((sel) => $$(sel).forEach((el, i) => el.style.setProperty("--d", (i % 4) * 0.08 + "s")));
$$(".rv, .rvimg, .bars, #mapbox, [data-count]").forEach((el) => io.observe(el));

/* ===== Паралакс колажу ===== */
const par = $$("[data-speed]");
function parTick() {
  if (reduce || innerWidth < 760) return;
  const vh = innerHeight;
  for (const el of par) {
    const r = el.parentElement.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) continue;
    el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * +el.dataset.speed).toFixed(1)}px`;
  }
}

/* ===== Номери: фільтри, стрічка, перетягування ===== */
const rail = $("#rail"), rprog = $("#rprog");
const railProg = () => rprog && rprog.style.setProperty("--rp", clamp((rail.scrollLeft + rail.clientWidth) / rail.scrollWidth, 0.08, 1).toFixed(3));
rail.addEventListener("scroll", railProg, { passive: true });
$$("[data-sf]").forEach((b) => b.addEventListener("click", () => {
  const f = b.dataset.sf;
  $$("[data-sf]").forEach((x) => x.setAttribute("aria-pressed", x === b));
  $$(".card", rail).forEach((c) => { c.hidden = f !== "all" && c.dataset[f] !== "1"; c.classList.add("in"); });
  rail.scrollTo({ left: 0, behavior: reduce ? "auto" : "smooth" }); setTimeout(railProg, 400);
}));
$$("[data-rail]").forEach((b) => b.addEventListener("click", () => {
  const card = $(".card:not([hidden])", rail);
  rail.scrollBy({ left: +b.dataset.rail * (card ? card.offsetWidth + 24 : 320), behavior: reduce ? "auto" : "smooth" });
}));
if (fine) { // перетягування мишею
  let down = false, sx = 0, sl = 0, moved = false;
  rail.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
  addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 6) { moved = true; rail.classList.add("drag"); } if (moved) rail.scrollLeft = sl - dx; });
  addEventListener("pointerup", () => { if (!down) return; down = false; setTimeout(() => rail.classList.remove("drag"), 0); });
  rail.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
}
railProg();

/* ===== Вікно номера ===== */
const dlg = $("#sdlg"), sdImg = $("#sdImg"), sdThumbs = $("#sdThumbs");
let cur = null, curI = 0;
function showPhoto(i) {
  curI = (i + cur.photos.length) % cur.photos.length;
  const ph = cur.photos[curI];
  sdImg.classList.add("fade");
  const im = new Image(); im.srcset = srcset(ph); im.sizes = "(max-width:980px) 100vw, 60vw"; im.src = url(ph, 1200);
  const done = () => { sdImg.srcset = im.srcset; sdImg.sizes = im.sizes; sdImg.src = im.src; sdImg.alt = cur.name; sdImg.classList.remove("fade"); };
  im.decode ? im.decode().then(done, done) : (im.onload = done);
  $$("button", sdThumbs).forEach((b, j) => b.setAttribute("aria-current", j === curI));
}
function openSuite(id) {
  cur = D.suites.find((s) => s.id === id); if (!cur) return;
  const S = U.suites, list = (a) => a.map((v) => S.tags[v]).join(", ");
  $("#sdTitle").textContent = cur.name;
  $("#sdBlurb").textContent = cur.blurb;
  const facts = [[S.dialog.size, `${cur.m2} m²`], [S.dialog.guests, T(S.guests, { n: cur.guests })], [S.dialog.beds, cur.beds], [S.dialog.view, list(cur.view)], [S.dialog.outdoor, cur.outdoor.length ? list(cur.outdoor) : S.dialog.none], [S.dialog.price, cur.price ? T(S.from, { n: cur.price }) : S.ask]];
  $("#sdFacts").innerHTML = "";
  facts.forEach(([k, v]) => { const d = document.createElement("div"); d.innerHTML = "<dt></dt><dd></dd>"; d.firstChild.textContent = k; d.lastChild.textContent = v; $("#sdFacts").append(d); });
  $("#sdAmen").innerHTML = "";
  cur.amen.forEach((a) => { const li = document.createElement("li"); li.textContent = S.amen[a]; $("#sdAmen").append(li); });
  sdThumbs.innerHTML = "";
  cur.photos.forEach((ph, j) => {
    const b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", `${j + 1} / ${cur.photos.length}`);
    const im = document.createElement("img"); im.src = url(ph, 240); im.alt = ""; im.loading = "lazy"; b.append(im);
    b.addEventListener("click", () => showPhoto(j)); sdThumbs.append(b);
  });
  $("#sdBk").href = `${D.links.booking}#RD${cur.bk}`;
  showPhoto(0);
  dlg.showModal(); lock(); viewOpen("dlg");
}
$$("[data-suite]").forEach((b) => b.addEventListener("click", () => openSuite(b.dataset.suite)));
dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.closest("[data-close]")) dlg.close(); });
dlg.addEventListener("close", () => { lock(); viewClosed(); });
dlg.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") showPhoto(curI + 1); if (e.key === "ArrowLeft") showPhoto(curI - 1); });
swipe($(".sd-main"), (d) => showPhoto(curI + d));
$("#sdAsk").addEventListener("click", (e) => {
  e.preventDefault(); $("#fSuite").value = cur.id; updKey();
  afterPop = () => $("#book").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  dlg.close();
});

/* ===== Басейн: хвилі на воді (WebGL) ===== */
const pool = $("#pool"), cv = $("#water");
let water = null;
function initWater() {
  if (water || reduce) return;
  const gl = cv.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false });
  if (!gl) return;
  const vs = "attribute vec2 a;varying vec2 v;void main(){v=a*.5+.5;v.y=1.-v.y;gl_Position=vec4(a,0.,1.);}";
  const fs = `precision mediump float;varying vec2 v;uniform sampler2D T;uniform vec2 R,I;uniform float t;uniform vec4 Dr[10];
vec2 cover(vec2 u){float rs=R.x/R.y,ri=I.x/I.y;vec2 s=rs>ri?vec2(1.,ri/rs):vec2(rs/ri,1.);return (u-.5)*s+.5;}
float caust(vec2 p){float c=0.;for(int n=0;n<3;n++){float fn=float(n);p=p*1.55+vec2(sin(p.y*1.7+t*.6+fn),cos(p.x*1.4-t*.5+fn));c+=abs(sin(p.x)*cos(p.y));}c/=3.;return pow(clamp(1.-c,0.,1.),7.);}
void main(){float a=R.x/R.y;vec2 q=vec2(v.x*a,v.y);vec2 off=vec2(0.);float sh=0.;
for(int i=0;i<10;i++){vec4 d=Dr[i];float age=t-d.z;if(age<0.||age>3.5)continue;vec2 dp=q-vec2(d.x*a,d.y);float r=length(dp);float w=r-age*.3;float amp=d.w*exp(-age*1.15)*exp(-w*w*150.);float wave=sin(w*80.)*amp;off+=dp/(r+.0001)*wave*.012;sh+=wave;}
vec3 b=texture2D(T,cover(v)).rgb;float wa=smoothstep(.03,.16,b.b-b.r);
vec3 col=texture2D(T,cover(v+off*wa)).rgb;
col+=wa*(sh*.14+caust(q*5.+3.)*.22);
gl_FragColor=vec4(clamp(col,0.,1.),1.);}`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : (console.warn(gl.getShaderInfoLog(s)), null); };
  const prg = gl.createProgram(), v1 = sh(gl.VERTEX_SHADER, vs), f1 = sh(gl.FRAGMENT_SHADER, fs);
  if (!v1 || !f1) return;
  gl.attachShader(prg, v1); gl.attachShader(prg, f1); gl.linkProgram(prg);
  if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) return;
  gl.useProgram(prg);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prg, "a"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(prg, "R"), uI = gl.getUniformLocation(prg, "I"), uT = gl.getUniformLocation(prg, "t"), uD = gl.getUniformLocation(prg, "Dr");
  const drops = new Float32Array(40); for (let i = 0; i < 10; i++) drops[i * 4 + 2] = -99;
  let di = 0, t0 = performance.now(), running = false, raf = 0, ready = false, lastDrop = 0, lx = -1, ly = -1;
  const now = () => (performance.now() - t0) / 1000;
  const drop = (x, y, s) => { drops.set([x, y, now(), s], di * 4); di = (di + 1) % 10; };
  const fit = () => { const dpr = Math.min(devicePixelRatio || 1, 1.5); cv.width = Math.round(cv.clientWidth * dpr); cv.height = Math.round(cv.clientHeight * dpr); gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(uR, cv.width, cv.height); };
  const im = new Image();
  im.onload = () => {
    const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
    gl.uniform2f(uI, im.naturalWidth, im.naturalHeight);
    fit(); ready = true; cv.classList.add("on"); $("#poolHint").hidden = false;
    drop(0.62, 0.55, 1); start();
  };
  im.src = url(D.pool, Math.min(2400, cv.clientWidth * Math.min(devicePixelRatio || 1, 1.5)));
  const frame = () => {
    raf = 0; if (!running || !ready) return;
    const t = now();
    if (t - lastDrop > 2.6) { lastDrop = t; drop(0.25 + Math.random() * 0.6, 0.2 + Math.random() * 0.6, 0.55); }
    gl.uniform1f(uT, t); gl.uniform4fv(uD, drops); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    raf = requestAnimationFrame(frame);
  };
  const start = () => { running = true; if (!raf) raf = requestAnimationFrame(frame); };
  const stop = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; };
  const pos = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height]; };
  pool.addEventListener("pointermove", (e) => {
    const [x, y] = pos(e), t = now();
    if (Math.hypot(x - lx, y - ly) > 0.035 || t - lastDrop > 0.25) { drop(x, y, e.pointerType === "mouse" ? 0.75 : 1); lx = x; ly = y; lastDrop = t; }
  }, { passive: true });
  pool.addEventListener("pointerdown", (e) => { const [x, y] = pos(e); drop(x, y, 1.3); });
  addEventListener("resize", () => ready && fit());
  water = { start, stop };
  if (!fine) $("#poolHint").textContent = $("#poolHint").dataset.touch;
}
new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { initWater(); water && water.start(); } else water && water.stop(); }), { rootMargin: "200px 0px" }).observe(pool);
document.addEventListener("visibilitychange", () => { if (!water) return; document.hidden ? water.stop() : pool.getBoundingClientRect().top < innerHeight && water.start(); });

/* ===== Карта: маршрути пішки ===== */
const mapbox = $("#mapbox"), core = $(".me .core"), vb = $(".ov").viewBox.baseVal;
mapbox.style.setProperty("--hx", (core.cx.baseVal.value / vb.width * 100).toFixed(1) + "%");
mapbox.style.setProperty("--hy", (core.cy.baseVal.value / vb.height * 100).toFixed(1) + "%");
const walker = $(".walker");
let wRaf = 0, auto = 0, touched = false;
function selectPoi(id) {
  $$(".route").forEach((r) => r.classList.toggle("on", r.dataset.r === id));
  $$(".poi").forEach((c) => c.classList.toggle("on", c.dataset.p === id));
  $$(".pl-l").forEach((l) => l.classList.toggle("on", l.dataset.l === id));
  $$(".pl").forEach((b) => b.setAttribute("aria-pressed", b.dataset.poi === id));
  const path = $(`.route[data-r="${id}"]`); if (!path) return;
  const len = path.getTotalLength(), t0 = performance.now(), dur = reduce ? 1 : 1300;
  cancelAnimationFrame(wRaf); walker.classList.add("on");
  const step = (t) => {
    const k = clamp((t - t0) / dur, 0, 1), e = k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2, pt = path.getPointAtLength(len * e);
    walker.setAttribute("cx", pt.x.toFixed(1)); walker.setAttribute("cy", pt.y.toFixed(1));
    if (k < 1) wRaf = requestAnimationFrame(step);
  };
  wRaf = requestAnimationFrame(step);
}
const tourIds = ["se", "marina", "mercado", "casino", "cablecar", "pico", "santamaria", "blandys"];
let ti = 0;
function mapIn() { setTimeout(() => { if (!touched) selectPoi(tourIds[0]); }, reduce ? 0 : 1600); auto = setInterval(() => { if (touched) return clearInterval(auto); ti = (ti + 1) % tourIds.length; if (isVisible(mapbox)) selectPoi(tourIds[ti]); }, 4200); }
const isVisible = (el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };
const userPick = (id) => { touched = true; clearInterval(auto); selectPoi(id); };
$$(".pl").forEach((b) => { b.addEventListener("click", () => userPick(b.dataset.poi)); if (fine) b.addEventListener("pointerenter", () => userPick(b.dataset.poi)); });
$$(".poi").forEach((c) => c.addEventListener("click", () => userPick(c.dataset.p)));

/* ===== Тури: фільтри і лінії на карті острова ===== */
const tcards = $$(".tcard");
function tourOn(id) {
  $$(".tl").forEach((l) => l.classList.toggle("on", l.dataset.t === id));
  $$(".td").forEach((d) => d.classList.toggle("on", d.dataset.t === id));
  $$(".il[data-l]").forEach((l) => l.classList.toggle("on", l.dataset.l === id));
  tcards.forEach((c) => c.classList.toggle("on", c.dataset.t === id));
}
$$("[data-tf]").forEach((b) => b.addEventListener("click", () => {
  const f = b.dataset.tf;
  $$("[data-tf]").forEach((x) => x.setAttribute("aria-pressed", x === b));
  const show = new Set();
  tcards.forEach((c) => { const ok = f === "all" || c.dataset.type === f; c.hidden = !ok; c.classList.add("in"); if (ok) show.add(c.dataset.t); });
  $$(".tl, .td").forEach((el) => el.classList.toggle("dim", !show.has(el.dataset.t)));
  const first = tcards.find((c) => !c.hidden); first && tourOn(first.dataset.t);
}));
tcards.forEach((c) => { c.addEventListener("pointerenter", () => tourOn(c.dataset.t)); c.addEventListener("focus", () => tourOn(c.dataset.t)); c.addEventListener("click", () => tourOn(c.dataset.t)); });
const tIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !e.target.hidden) tourOn(e.target.dataset.t); }),
  innerWidth < 760 ? { root: $("#tcards"), threshold: 0.7 } : { rootMargin: "-48% 0px -48% 0px" });
tcards.forEach((c) => tIO.observe(c));

/* ===== Сезони ===== */
const mBtns = $$(".mo"), selLine = $("#selLine");
function selMonth(m) {
  mBtns.forEach((b, i) => b.setAttribute("aria-pressed", i === m));
  $$(".pt").forEach((c) => c.classList.toggle("on", +c.dataset.m === m));
  const x = $(`.pt.air[data-m="${m}"]`).getAttribute("cx");
  selLine.setAttribute("x1", x); selLine.setAttribute("x2", x); selLine.classList.add("on");
  $("#mName").textContent = D.months[m].long;
  $("#mAir").textContent = D.climate.air[m] + "°";
  $("#mSea").textContent = D.climate.sea[m] + "°";
  $("#mEv").textContent = U.seasons.events[m];
}
mBtns.forEach((b, i) => b.addEventListener("click", () => selMonth(i)));
$$(".hit").forEach((r) => { r.addEventListener("click", () => selMonth(+r.dataset.m)); if (fine) r.addEventListener("pointerenter", () => selMonth(+r.dataset.m)); });
const thisMonth = typeof curMonth === "number" ? curMonth : new Date().getMonth();
mBtns[thisMonth] && mBtns[thisMonth].classList.add("now");
selMonth(thisMonth);

/* ===== Галерея і лайтбокс ===== */
const gis = $$(".gi"), lb = $("#lb"), lbImg = $("#lbImg");
let vis = gis, li = 0;
$$("[data-gf]").forEach((b) => b.addEventListener("click", () => {
  const f = b.dataset.gf;
  $$("[data-gf]").forEach((x) => x.setAttribute("aria-pressed", x === b));
  gis.forEach((g) => g.classList.toggle("hide", f !== "all" && g.dataset.cat !== f));
  vis = gis.filter((g) => !g.classList.contains("hide"));
}));
function lbShow(i) {
  li = (i + vis.length) % vis.length;
  const g = D.gallery[+vis[li].dataset.g];
  lbImg.srcset = srcset(g); lbImg.sizes = "92vw"; lbImg.src = url(g, 1800); lbImg.alt = g.alt;
  lbImg.width = g.w; lbImg.height = g.h;
  $("#lbCap").textContent = g.alt; $("#lbNum").textContent = `${li + 1} / ${vis.length}`;
  [li + 1, li - 1].forEach((j) => { const n = D.gallery[+vis[(j + vis.length) % vis.length].dataset.g]; const pre = new Image(); pre.src = url(n, 1800); });
}
const vt = !!document.startViewTransition && !reduce;
function lbOpen(i) {
  const th = $("img", vis[i]);
  viewOpen("lb");
  const go = () => { if (th) th.style.viewTransitionName = ""; lbShow(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); lock(); $(".x", lb).focus({ preventScroll: true }); };
  if (!vt) return go();
  if (th) th.style.viewTransitionName = "lbimg";
  const t = document.startViewTransition(go);
  t.ready.catch(() => {}); t.finished.catch(() => {});
}
function lbClose() {
  viewClosed();
  const th = vis[li] && $("img", vis[li]);
  const go = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lock(); if (vt && th && isVisible(th)) th.style.viewTransitionName = "lbimg"; vis[li] && vis[li].focus({ preventScroll: true }); };
  if (!vt) return go();
  const t = document.startViewTransition(go), clean = () => { if (th) th.style.viewTransitionName = ""; };
  t.ready.catch(() => {}); t.finished.then(clean, clean);
}
gis.forEach((g) => g.addEventListener("click", () => lbOpen(vis.indexOf(g))));
lb.addEventListener("click", (e) => { if (e.target.closest("[data-close]") || e.target === lb) lbClose(); const b = e.target.closest("[data-lb]"); if (b) lbShow(li + +b.dataset.lb); });
addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lbClose(); if (e.key === "ArrowRight") lbShow(li + 1); if (e.key === "ArrowLeft") lbShow(li - 1);
});
swipe(lb, (d) => lbShow(li + d));
function swipe(el, fn) {
  let x0 = null, y0 = 0;
  el.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  el.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) fn(dx < 0 ? 1 : -1); x0 = null; }, { passive: true });
}

/* ===== Бронювання ===== */
const B = U.book, form = $("#bookForm"), fArr = $("#fArr"), fDep = $("#fDep"), fG = $("#fGuests"), fSuite = $("#fSuite"), fName = $("#fName"), err = $("#formErr");
const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const today = iso(new Date());
[fArr, fDep, $("#hIn"), $("#hOut")].forEach((i) => i && (i.min = today));
const dfmt = new Intl.DateTimeFormat(D.locale, { day: "numeric", month: "short" });
const parse = (v) => (v ? new Date(v + "T12:00:00") : null);
const nights = () => { const a = parse(fArr.value), b = parse(fDep.value); return a && b ? Math.round((b - a) / 864e5) : 0; };
function updKey() {
  const a = parse(fArr.value), b = parse(fDep.value), n = nights(), g = clamp(+fG.value || 1, 1, 4);
  $("#kDates").textContent = a && b && n > 0 ? `${dfmt.format(a)} → ${dfmt.format(b)}` : a ? `${dfmt.format(a)} → …` : "—";
  $("#kNights").textContent = n > 0 ? n : "—";
  $("#kGuests").textContent = g;
  $("#kSuite").textContent = fSuite.selectedOptions[0].textContent;
  const bk = $("#bkLink");
  bk.href = n > 0 ? `${D.links.booking}?checkin=${fArr.value}&checkout=${fDep.value}&group_adults=${g}&no_rooms=1&group_children=0` : D.links.booking;
}
fArr.addEventListener("change", () => { if (fArr.value) { fDep.min = fArr.value; if (fDep.value && fDep.value <= fArr.value) fDep.value = ""; if (!fDep.value) { const d = parse(fArr.value); d.setDate(d.getDate() + 4); fDep.value = iso(d); } } updKey(); });
[fDep, fSuite, fName].forEach((i) => i.addEventListener("input", updKey));
fG.addEventListener("input", updKey);
$$("[data-step]").forEach((b) => b.addEventListener("click", () => { fG.value = clamp((+fG.value || 1) + +b.dataset.step, 1, 4); updKey(); }));
function message() {
  const t = B.text, n = nights(), g = +fG.value || 1;
  const lines = [t.hello, `${t.want} ${t.from} ${dfmt.format(parse(fArr.value))} ${t.to} ${dfmt.format(parse(fDep.value))} (${n} ${plural(n, B.plural.night)}).`, `${t.guests}: ${g}`];
  if (fSuite.value) lines.push(`${t.suite}: ${fSuite.selectedOptions[0].textContent}`);
  if ($("#fMsg").value.trim()) lines.push("", $("#fMsg").value.trim());
  lines.push("", `${t.name}: ${fName.value.trim()}`);
  return lines.join("\n");
}
function valid() {
  err.textContent = "";
  if (!fArr.value || !fDep.value) { err.textContent = B.err.dates; (fArr.value ? fDep : fArr).focus(); return false; }
  if (nights() <= 0) { err.textContent = B.err.order; fDep.focus(); return false; }
  if (!fName.value.trim()) { err.textContent = B.err.name; fName.focus(); return false; }
  return true;
}
$$("[data-send]").forEach((b) => b.addEventListener("click", () => {
  if (!valid()) return;
  const msg = message();
  const href = b.dataset.send === "wa" ? `https://wa.me/${D.contacts.whatsapp}?text=${encodeURIComponent(msg)}` : `mailto:${D.contacts.email}?subject=${encodeURIComponent(B.text.subject)}&body=${encodeURIComponent(msg)}`;
  const a = document.createElement("a"); a.href = href; if (b.dataset.send === "wa") { a.target = "_blank"; a.rel = "noopener"; } a.click();
}));
form.addEventListener("submit", (e) => e.preventDefault());
$("#hbar").addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("#hIn").value) fArr.value = $("#hIn").value;
  if ($("#hOut").value) fDep.value = $("#hOut").value;
  fG.value = $("#hG").value;
  if (fArr.value && !fDep.value) fArr.dispatchEvent(new Event("change"));
  updKey();
  $("#book").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  setTimeout(() => (fArr.value && fDep.value ? fName : fArr).focus({ preventScroll: true }), reduce ? 0 : 900);
});
$("#hIn").addEventListener("change", () => { const h = $("#hOut"); h.min = $("#hIn").value; if (!h.value || h.value <= $("#hIn").value) { const d = parse($("#hIn").value); d.setDate(d.getDate() + 4); h.value = iso(d); } });
updKey();

/* ===== Меню і мови ===== */
const menu = $("#menu"), menuBtn = $("#menuBtn");
function setMenu(open) {
  body.classList.toggle("menuopen", open); menu.setAttribute("aria-hidden", !open); menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? U.ui.menuClose : U.ui.menuOpen); lock();
}
menuBtn.addEventListener("click", () => setMenu(!body.classList.contains("menuopen")));
$$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
addEventListener("keydown", (e) => { if (e.key === "Escape" && body.classList.contains("menuopen")) setMenu(false); });
const langs = $(".langs");
document.addEventListener("click", (e) => { if (langs.open && !langs.contains(e.target)) langs.open = false; });

/* ===== Магнітні кнопки ===== */
if (fine && !reduce) $$(".mag").forEach((b) => {
  b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px)`; });
  b.addEventListener("pointerleave", () => { b.style.transform = ""; });
});

/* ===== Скрол-цикл ===== */
let ticking = false;
const loop = () => { ticking = false; heroTick(); parTick(); onScroll(); };
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(loop); } }, { passive: true });
addEventListener("resize", () => { p = -1; loop(); railProg(); });
loop();
})();
