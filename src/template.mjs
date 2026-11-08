// Генерує повну HTML-сторінку для однієї мови.
export const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const I = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
  left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>',
  chev: '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.3" fill="currentColor"/></svg>',
  coffee: '<svg viewBox="0 0 48 48" aria-hidden="true" class="ic-coffee"><path class="steam" d="M18 14c-2-3 2-4 0-7M24 14c-2-3 2-4 0-7M30 14c-2-3 2-4 0-7"/><path d="M10 19h26v9a11 11 0 0 1-11 11h-4a11 11 0 0 1-11-11z"/><path d="M36 22h2.5a4.5 4.5 0 0 1 0 9H35"/><path d="M8 43h32"/></svg>',
  code: '<svg viewBox="0 0 48 48" aria-hidden="true" class="ic-code"><rect x="11" y="6" width="26" height="36" rx="4"/><circle class="k k1" cx="18" cy="16" r="2.2"/><circle class="k k2" cx="24" cy="16" r="2.2"/><circle class="k k3" cx="30" cy="16" r="2.2"/><circle class="k k4" cx="18" cy="23" r="2.2"/><circle cx="24" cy="23" r="2.2"/><circle cx="30" cy="23" r="2.2"/><circle cx="18" cy="30" r="2.2"/><circle cx="24" cy="30" r="2.2"/><circle cx="30" cy="30" r="2.2"/><path d="M21 37h6"/></svg>',
  wifi: '<svg viewBox="0 0 48 48" aria-hidden="true" class="ic-wifi"><path class="w3" d="M6 19a26 26 0 0 1 36 0"/><path class="w2" d="M12 25.5a17.5 17.5 0 0 1 24 0"/><path class="w1" d="M18 32a9 9 0 0 1 12 0"/><circle cx="24" cy="38" r="2.4" fill="currentColor" stroke="none"/></svg>',
  kitchen: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="9" width="34" height="30" rx="3"/><circle cx="18" cy="20" r="5"/><circle cx="31" cy="20" r="3.5"/><path d="M7 30h34M15 35h4M29 35h4"/></svg>',
  lift: '<svg viewBox="0 0 48 48" aria-hidden="true" class="ic-lift"><rect x="10" y="6" width="28" height="36" rx="3"/><path d="M24 6v36"/><path class="up" d="M14 22l3-4 3 4"/><path class="dn" d="M28 26l3 4 3-4"/></svg>',
  plane: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M43 30.5v-4l-16-10V7a3 3 0 0 0-6 0v9.5l-16 10v4l16-5v10.8l-4 3v3.2l7-2 7 2v-3.2l-4-3V25.5z"/></svg>',
  moon: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M33 33.5A15 15 0 0 1 19.5 9.6 15 15 0 1 0 38.4 28 15 15 0 0 1 33 33.5z"/><path d="M33 9l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"/></svg>',
  park: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="8" width="32" height="32" rx="6"/><path d="M19 34V15h7a5.5 5.5 0 0 1 0 11h-7"/></svg>'
};

export function render(ctx) {
  const { lang, c, cfg, base, media, suites, gallery, mapd, places, climate, islandSvg, chartSvg, jsonLd, urls, css, js, data, credits, months } = ctx;
  const brand = cfg.brand;
  const T = (s, v = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k === "brand" ? brand : v[k] ?? m));
  const self = cfg.langs.find((l) => l.code === lang);
  const others = cfg.langs.filter((l) => l.code !== lang);
  const nf = (n, d = 1) => n.toLocaleString(self.locale, { minimumFractionDigits: d, maximumFractionDigits: d });

  // <picture> з AVIF + WebP
  const pic = (key, sizes, { alt = "", cls = "", eager = false, high = false, max = 99999, fill = true } = {}) => {
    const m = media[key];
    if (!m) throw new Error("Немає фото: " + key);
    const ws = m.ws.filter((w) => w <= max);
    const set = (ext) => ws.map((w) => `${base}img/${key}-${w}.${ext} ${w}w`).join(", ");
    const mid = ws.find((w) => w >= 800) || ws.at(-1);
    return `<picture${cls ? ` class="${cls}"` : ""}${fill ? ` style="--c:${m.c}"` : ""}><source type="image/avif" srcset="${set("avif")}" sizes="${sizes}"><img src="${base}img/${key}-${mid}.webp" srcset="${set("webp")}" sizes="${sizes}" width="${m.w}" height="${m.h}" alt="${esc(alt)}"${eager ? "" : ' loading="lazy"'} decoding="async"${high ? ' fetchpriority="high"' : ""}></picture>`;
  };

  const langLinks = cfg.langs.map((l) => `<a href="${urls.rel[l.code]}" hreflang="${l.hreflang}" lang="${l.code}"${l.code === lang ? ' aria-current="page"' : ""}><b>${l.label}</b><span>${esc(l.name)}</span></a>`).join("");
  const nav = c.nav.map(([h, l]) => `<a href="${h}">${esc(l)}</a>`).join("");
  const wa = `https://wa.me/${cfg.contacts.whatsapp}`;
  const P = mapd.pois;

  /* ---------- Біжучий рядок ---------- */
  const mq = [
    ...["casino", "plaza", "marina", "se", "mercado", "cablecar", "santamaria"].map((id) => [c.loc.places[id], T(c.marquee.walk, { n: P[id].min })]),
    [c.marquee.airport, T(c.marquee.car, { n: 25 })], [c.marquee.girao, T(c.marquee.car, { n: 20 })], [c.marquee.arieiro, T(c.marquee.car, { n: 35 })]
  ].map(([a, b]) => `<li>${esc(a)}<small>${esc(b)}</small></li>`).join("");

  /* ---------- Номери ---------- */
  const tagOf = (s) => [...s.view.filter((v) => v !== "city" || !s.view.includes("sea")).slice(0, 2), ...s.outdoor.slice(0, 1)];
  const cards = suites.map((s) => {
    const name = c.suites.names[s.id];
    return `
        <article class="card rv" data-id="${s.id}" data-sea="${s.view.includes("sea") ? 1 : 0}" data-outdoor="${s.outdoor.length ? 1 : 0}" data-four="${s.guests >= 4 ? 1 : 0}">
          <button class="ph" type="button" data-suite="${s.id}" aria-label="${esc(c.suites.open)}: ${esc(name)}">
            ${pic(s.photos[0], "(max-width:760px) 82vw, (max-width:1200px) 42vw, 30vw", { alt: name, cls: "a", max: 1200 })}
            ${pic(s.photos[1], "(max-width:760px) 82vw, (max-width:1200px) 42vw, 30vw", { cls: "b", max: 1200 })}
            <span class="tags">${tagOf(s).map((k) => `<span class="tag">${esc(c.suites.tags[k])}</span>`).join("")}</span>
            <span class="more">${esc(T(c.suites.photos, { n: s.photos.length }))}${I.arrow}</span>
          </button>
          <div class="cbody">
            <h3>${esc(name)}</h3>
            <p class="meta"><span>${s.m2} m²</span><span>${esc(T(c.suites.guests, { n: s.guests }))}</span></p>
            <p class="beds">${esc(c.suites.beds[s.id])}</p>
            <p class="price">${esc(s.price ? T(c.suites.from, { n: s.price }) : c.suites.ask)}</p>
          </div>
        </article>`;
  }).join("");
  const sFilters = Object.entries(c.suites.filters).map(([k, v], i) => `<button class="chip" type="button" data-sf="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join("");

  /* ---------- Зручності (bento) ---------- */
  const A = c.amen.items;
  const tile = (k, icon, cls = "", extra = "") => `
        <div class="tile ${cls} rv">${icon ? `<span class="ic">${icon}</span>` : ""}${extra}<div><h3>${esc(A[k][0])}</h3><p>${esc(A[k][1])}</p></div></div>`;
  const bento = [
    tile("coffee", I.coffee, "t-coffee", `<img class="badge" src="${base}img/929254717-240.webp" srcset="${base}img/929254717-240.webp 240w, ${base}img/929254717-480.webp 480w" sizes="120px" width="1254" height="1254" alt="${esc(c.amen.badgeAlt)}" loading="lazy" decoding="async">`),
    tile("code", I.code), tile("wifi", I.wifi),
    `<div class="tile t-lounge rv">${pic("240155229", "(max-width:760px) 92vw, 46vw", { alt: c.house.alts.lounge, max: 1200 })}<div><h3>${esc(A.lounge[0])}</h3><p>${esc(A.lounge[1])}</p></div></div>`,
    tile("kitchen", I.kitchen), tile("lift", I.lift), tile("transfer", I.plane), tile("quiet", I.moon), tile("parking", I.park, "t-park")
  ].join("");

  /* ---------- Локація ---------- */
  const cats = ["sight", "taste", "green", "sea"];
  const km = (m) => (m < 1000 ? `${m} m` : `${nf(m / 1000)} km`);
  const plist = cats.map((cat) => {
    const items = places.walk.filter((p) => p.cat === cat).sort((a, b) => P[a.id].m - P[b.id].m);
    return `
          <div class="pcat"><h3>${esc(c.loc.cats[cat])}</h3><ul>${items.map((p) => `
            <li><button class="pl" type="button" data-poi="${p.id}" aria-pressed="false"><b>${esc(c.loc.places[p.id])}</b><span>${esc(T(c.loc.min, { n: P[p.id].min }))}</span><small>${km(P[p.id].m)}</small></button></li>`).join("")}
          </ul></div>`;
  }).join("");
  const near = places.near.map((n) => `<li><b>${n.n ? n.n : esc(T(c.loc.min, { n: Math.max(1, Math.round(n.m * 1.3 / 75)) }))}</b><span>${esc(c.loc.near[n.id])}</span></li>`).join("");
  const [hx, hy] = mapd.hotel;
  const pct = (x, y) => `--x:${(x / mapd.vw * 100).toFixed(2)};--y:${(y / mapd.vh * 100).toFixed(2)}`;
  const ringSvg = mapd.rings.map((r) => `<circle class="ring" cx="${hx}" cy="${hy}" r="${r.r}"/>`).join("");
  const ringLbl = mapd.rings.map((r) => {
    const a = -Math.PI * 0.62, x = hx + r.r * Math.cos(a), y = hy + r.r * Math.sin(a);
    return x > 20 && y > 20 && x < mapd.vw - 20 ? `<span class="rl" style="${pct(x, y)}">${esc(T(c.loc.min, { n: r.min }))}</span>` : "";
  }).join("");
  const overlay = `<svg class="ov" viewBox="0 0 ${mapd.vw} ${mapd.vh}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(c.loc.mapAria)}">
            <g class="rings">${ringSvg}</g>
            <g class="routes">${Object.entries(mapd.routes).map(([id, d]) => `<path class="route" data-r="${id}" pathLength="1" d="${d}"/>`).join("")}</g>
            <g class="pois">${Object.entries(P).map(([id, p]) => `<circle class="poi" data-p="${id}" cx="${p.x}" cy="${p.y}" r="6"/>`).join("")}</g>
            <circle class="walker" cx="${hx}" cy="${hy}" r="7"/>
            <g class="me"><circle class="halo" cx="${hx}" cy="${hy}" r="13"/><circle class="core" cx="${hx}" cy="${hy}" r="8"/></g>
          </svg>
          <div class="mlabels" aria-hidden="true">
            ${ringLbl}
            ${mapd.areas.map((a) => `<span class="al" style="${pct(a.x, a.y)}">${esc(a.id)}</span>`).join("")}
            <span class="seal" style="${pct(mapd.sea[0], mapd.sea[1])}">${esc(c.loc.ocean)}</span>
            <span class="me-l" style="${pct(hx, hy)}">${esc(c.loc.you)}</span>
            ${Object.entries(P).map(([id, p]) => `<span class="pl-l" data-l="${id}" style="${pct(p.x, p.y)}">${esc(c.loc.places[id])}<i>${esc(T(c.loc.min, { n: p.min }))} · ${km(p.m)}</i></span>`).join("")}
          </div>`;

  /* ---------- Тури ---------- */
  const tFilters = Object.entries(c.tours.filters).map(([k, v], i) => `<button class="chip" type="button" data-tf="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join("");
  const tcards = places.tours.map((t) => {
    const [name, desc] = c.tours.items[t.id];
    const time = t.drive ? T(c.tours.car, { n: t.drive }) : t.walk ? T(c.tours.boats, { n: P[t.walk].min }) : c.tours.ferry;
    return `
          <article class="tcard rv" data-t="${t.id}" data-type="${t.type}" tabindex="0">
            <div class="ph">${pic(t.photo, "(max-width:760px) 72vw, (max-width:1200px) 28vw, 22vw", { alt: name, max: 800 })}</div>
            <p class="time">${esc(time)}</p>
            <h3>${esc(name)}</h3>
            <p>${esc(desc)}</p>
          </article>`;
  }).join("");

  /* ---------- Сезони ---------- */
  const mbtn = months.map((m, i) => `<button class="mo" type="button" data-m="${i}" aria-pressed="false"><span>${esc(m.short)}</span></button>`).join("");
  const ctable = `<table><thead><tr><th scope="col">${esc(c.seasons.month)}</th><th scope="col">${esc(c.seasons.air)}</th><th scope="col">${esc(c.seasons.sea)}</th></tr></thead><tbody>${months.map((m, i) => `<tr><th scope="row">${esc(m.long)}</th><td>${climate.air[i]} °C</td><td>${climate.sea[i]} °C</td></tr>`).join("")}</tbody></table>`;

  /* ---------- Відгуки ---------- */
  const R = cfg.ratings;
  const bars = Object.entries(R.booking.subs).map(([k, v]) => `
            <li class="bar"><span>${esc(c.reviews.subs[k])}</span><i style="--v:${v}"><s></s></i><b>${nf(v)}</b></li>`).join("");
  const themes = c.reviews.themes.map(([h, p]) => `<li class="rv"><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join("");

  /* ---------- Галерея ---------- */
  const gFilters = Object.entries(c.gallery.filters).map(([k, v], i) => `<button class="chip" type="button" data-gf="${k}" aria-pressed="${i === 0}">${esc(v)}</button>`).join("");
  const gItems = gallery.map((g, i) => `<button class="gi" type="button" data-g="${i}" data-cat="${g.cat}" aria-label="${esc(c.gallery.alts[g.key])}">${pic(g.key, "(max-width:600px) 46vw, (max-width:1100px) 31vw, 23vw", { alt: c.gallery.alts[g.key], max: 800 })}</button>`).join("");

  /* ---------- FAQ, бронювання ---------- */
  const faq = c.faq.items.map(([q, a], i) => `
          <details${i === 0 ? " open" : ""}><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  const sOpts = `<option value="">${esc(c.book.any)}</option>` + suites.map((s) => `<option value="${s.id}">${esc(c.suites.names[s.id])}</option>`).join("");
  const gOpts = [1, 2, 3, 4].map((n) => `<option value="${n}"${n === 2 ? " selected" : ""}>${n}</option>`).join("");

  return `<!DOCTYPE html>
<html lang="${lang}" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(T(c.meta.title))}</title>
<meta name="description" content="${esc(T(c.meta.description))}">
<link rel="canonical" href="${urls.abs[lang]}">
${cfg.langs.map((l) => `<link rel="alternate" hreflang="${l.hreflang}" href="${urls.abs[l.code]}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${urls.abs.en}">
<meta name="robots" content="${cfg.demo ? "noindex, nofollow" : "index, follow, max-image-preview:large"}">
<meta name="geo.region" content="${cfg.geo.region}">
<meta name="geo.placename" content="${cfg.geo.place}">
<meta name="geo.position" content="${cfg.geo.lat};${cfg.geo.lon}">
<meta name="ICBM" content="${cfg.geo.lat}, ${cfg.geo.lon}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(brand)}">
<meta property="og:title" content="${esc(T(c.meta.ogTitle))}">
<meta property="og:description" content="${esc(T(c.meta.description))}">
<meta property="og:url" content="${urls.abs[lang]}">
<meta property="og:image" content="${cfg.siteUrl}/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(c.meta.ogAlt)}">
<meta property="og:locale" content="${self.ogLocale}">
${others.map((l) => `<meta property="og:locale:alternate" content="${l.ogLocale}">`).join("\n")}
<meta property="place:location:latitude" content="${cfg.geo.lat}">
<meta property="place:location:longitude" content="${cfg.geo.lon}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0f1e2d">
<link rel="icon" href="${base}favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${base}img/apple-touch-icon.png">
<link rel="manifest" href="${base}site.webmanifest">
<link rel="preload" as="image" type="image/avif" fetchpriority="high" imagesrcset="${media["474756863"].ws.map((w) => `${base}img/474756863-${w}.avif ${w}w`).join(", ")}" imagesizes="100vw">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@300..600&amp;family=Prata&amp;display=swap">
<script>document.documentElement.classList.add("js")</script>
<style>${css}</style>
<script type="application/ld+json">${jsonLd}</script>
</head>
<body>
<a class="skip" href="#main">${esc(c.ui.skip)}</a>

<header class="hdr" id="hdr">
  <div class="row">
    <a class="wm" href="#top" aria-label="${esc(brand)}"><b>CBA</b><span>Suites<br>Madeira</span></a>
    <nav class="nav" aria-label="${esc(c.ui.menu)}">${nav}</nav>
    <div class="hr">
      <details class="langs">
        <summary aria-label="${esc(c.ui.lang)}: ${esc(self.name)}">${self.label}${I.chev}</summary>
        <div class="langlist">${langLinks}</div>
      </details>
      <a class="btn gold sm mag" href="#book">${esc(c.ui.book)}</a>
      <button id="menuBtn" class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="${esc(c.ui.menuOpen)}"><i></i><i></i></button>
    </div>
  </div>
</header>

<main id="main">
  <section class="hero" id="top" aria-labelledby="h1">
    <div class="pin" id="pin">
      <div class="h-img h-view">${pic("612644740", "100vw", { alt: c.gallery.alts["612644740"] })}</div>
      <div class="h-img h-attic">${pic("474756863", "100vw", { alt: c.gallery.alts["474756863"], eager: true, high: true })}</div>
      <div class="h-shade" aria-hidden="true"></div>
      <div class="h-copy">
        <p class="eyebrow">${esc(c.hero.eyebrow)}</p>
        <h1 class="h1" id="h1">${c.hero.h1.map((l, i) => `<span class="ln"><span style="--i:${i}">${esc(l)}</span></span>`).join(" ")}</h1>
        <p class="h-lead">${esc(c.hero.lead)}</p>
        <div class="h-acts"><a class="btn gold mag" href="#book">${esc(c.hero.cta)}${I.arrow}</a><a class="btn ghost" href="#suites">${esc(c.hero.cta2)}</a></div>
      </div>
      <p class="live" id="live" hidden><i class="dotl" aria-hidden="true"></i><span>${esc(c.hero.live.now)} <b id="lvTime">--:--</b></span><span><span id="lvSunL">${esc(c.hero.live.sunset)}</span> <b id="lvSun">--:--</b></span><span id="lvAvg"></span></p>
      <p class="cap capA">${esc(c.hero.capA)}</p>
      <p class="cap capB">${esc(c.hero.capB)}</p>
      <form class="hbar" id="hbar" novalidate>
        <label class="hf"><span>${esc(c.hero.bar.in)}</span><input type="date" id="hIn" name="in"></label>
        <label class="hf"><span>${esc(c.hero.bar.out)}</span><input type="date" id="hOut" name="out"></label>
        <label class="hf"><span>${esc(c.hero.bar.guests)}</span><select id="hG" name="guests">${gOpts}</select></label>
        <button class="btn gold" type="submit">${esc(c.hero.bar.go)}${I.arrow}</button>
      </form>
      <div class="scue" aria-hidden="true"><span>${esc(c.ui.scroll)}</span><i></i></div>
    </div>
  </section>

  <div class="marq" aria-label="${esc(c.loc.label)}"><div class="track"><ul>${mq}</ul><ul aria-hidden="true">${mq}</ul></div></div>

  <section class="sec house" id="house" aria-labelledby="h-house">
    <div class="wrap house-grid">
      <div class="house-copy">
        <p class="label rv">${esc(c.house.label)}</p>
        <h2 class="h2 rv" id="h-house">${esc(c.house.h2)}</h2>
        ${c.house.p.map((p) => `<p class="body rv">${esc(p)}</p>`).join("")}
        <dl class="facts">${c.house.facts.map(([v, l]) => `<div class="rv"><dt>${esc(l)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </div>
      <div class="collage" aria-hidden="false">
        <div class="cl c1 rvimg" data-speed="-0.05">${pic("courtyard-dusk", "(max-width:900px) 70vw, 36vw", { alt: c.house.alts.courtyard })}</div>
        <div class="cl c2 rvimg" data-speed="0.08">${pic("599496750", "(max-width:900px) 40vw, 18vw", { alt: c.house.alts.wine, max: 800 })}</div>
        <div class="cl c3 rvimg" data-speed="0.03">${pic("240155183", "(max-width:900px) 58vw, 30vw", { alt: c.house.alts.lounge, max: 1200 })}</div>
        <div class="cl c4 rvimg" data-speed="0.12">${pic("599497006", "(max-width:900px) 32vw, 15vw", { alt: c.house.alts.bike, max: 800 })}</div>
      </div>
    </div>
  </section>

  <section class="sec suites" id="suites" aria-labelledby="h-suites">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.suites.label)}</p><h2 class="h2 rv" id="h-suites">${esc(c.suites.h2)}</h2></div>
        <p class="lead rv">${esc(c.suites.lead)}</p>
      </div>
      <div class="railbar"><div class="chips" role="group" aria-label="${esc(c.suites.label)}">${sFilters}</div>
        <div class="rctl"><button class="rbtn" type="button" data-rail="-1" aria-label="${esc(c.ui.prev)}">${I.left}</button><button class="rbtn" type="button" data-rail="1" aria-label="${esc(c.ui.next)}">${I.arrow}</button></div></div>
    </div>
    <div class="rail" id="rail">${cards}
    </div>
    <div class="wrap"><div class="rprog" aria-hidden="true"><s id="rprog"></s></div></div>
  </section>

  <section class="pool" id="pool" aria-labelledby="h-pool">
    <div class="pool-media">${pic("474754100", "100vw", { alt: c.gallery.alts["474754100"] })}<canvas id="water" aria-hidden="true"></canvas></div>
    <div class="pool-copy">
      <p class="label">${esc(c.pool.label)}</p>
      <h2 class="h2" id="h-pool">${esc(c.pool.h2)}</h2>
      <p class="lead">${esc(c.pool.lead)}</p>
    </div>
    <p class="pool-hint" id="poolHint" data-touch="${esc(c.pool.hintTouch)}" hidden>${esc(c.pool.hint)}</p>
  </section>

  <section class="sec amen" id="amenities" aria-labelledby="h-amen">
    <div class="wrap">
      <div class="head2"><div><p class="label rv">${esc(c.amen.label)}</p><h2 class="h2 rv" id="h-amen">${esc(c.amen.h2)}</h2></div></div>
      <div class="bento">${bento}
      </div>
    </div>
  </section>

  <section class="sec loc" id="location" aria-labelledby="h-loc">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.loc.label)}</p><h2 class="h2 rv" id="h-loc">${esc(c.loc.h2)}</h2></div>
        <p class="lead rv">${esc(c.loc.lead)}</p>
      </div>
      <div class="loc-grid">
        <figure class="mapbox" id="mapbox">
          <img class="base" src="${base}img/funchal-map.svg" alt="" width="${mapd.vw}" height="${mapd.vh}" loading="lazy" decoding="async">
          ${overlay}
          <figcaption><span>${esc(c.loc.osm)}</span><a href="${cfg.links.maps}" target="_blank" rel="noopener">${I.pin}${esc(c.loc.gmaps)}</a></figcaption>
        </figure>
        <div class="plist">
          <p class="hint">${esc(c.loc.hint)}</p>${plist}
          <div class="near"><h3>${esc(c.loc.nearLabel)}</h3><ul>${near}</ul></div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec tours" id="tours" aria-labelledby="h-tours">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.tours.label)}</p><h2 class="h2 rv" id="h-tours">${esc(c.tours.h2)}</h2></div>
        <p class="lead rv">${esc(c.tours.lead)}</p>
      </div>
      <div class="chips tchips" role="group" aria-label="${esc(c.tours.label)}">${tFilters}</div>
      <div class="tours-grid">
        <figure class="imap" id="imap">${islandSvg}</figure>
        <div class="tcards" id="tcards">${tcards}
        </div>
      </div>
    </div>
  </section>

  <section class="sec seasons" id="seasons" aria-labelledby="h-seasons">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.seasons.label)}</p><h2 class="h2 rv" id="h-seasons">${esc(c.seasons.h2)}</h2></div>
        <p class="lead rv">${esc(c.seasons.lead)}</p>
      </div>
      <div class="sgrid">
        <figure class="chart" id="chart">
          <div class="legend"><span class="k air"><i></i>${esc(c.seasons.air)}</span><span class="k sea"><i></i>${esc(c.seasons.sea)}</span></div>
          ${chartSvg}
          <div class="months" role="group" aria-label="${esc(c.seasons.month)}">${mbtn}</div>
          <figcaption>${esc(c.seasons.note)}</figcaption>
          <details class="ctable"><summary>${esc(c.seasons.table)}</summary>${ctable}</details>
        </figure>
        <aside class="mcard" id="mcard" aria-live="polite">
          <p class="mname" id="mName"></p>
          <div class="mtemps"><p><b id="mAir"></b><span>${esc(c.seasons.air)}</span></p><p><b id="mSea"></b><span>${esc(c.seasons.sea)}</span></p></div>
          <p class="mev" id="mEv"></p>
        </aside>
      </div>
    </div>
  </section>

  <section class="sec reviews" id="reviews" aria-labelledby="h-reviews">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.reviews.label)}</p><h2 class="h2 rv" id="h-reviews">${esc(c.reviews.h2)}</h2></div>
        <p class="lead rv">${esc(c.reviews.lead)}</p>
      </div>
      <div class="rv-grid">
        <div class="scores">
          <a class="score" href="${cfg.links.booking}#tab-reviews" target="_blank" rel="noopener"><b data-count="${R.booking.score}" data-dec="1">${nf(R.booking.score)}</b><span>/10</span><small>Booking.com · ${esc(T(c.reviews.count, { n: R.booking.count.toLocaleString(self.locale) }))}</small></a>
          <a class="score" href="${cfg.links.maps}" target="_blank" rel="noopener"><b data-count="${R.google.score}" data-dec="1">${nf(R.google.score)}</b><span>/5</span><small>Google · ${esc(T(c.reviews.count, { n: R.google.count }))}</small></a>
        </div>
        <ul class="bars" id="bars">${bars}
        </ul>
      </div>
      <ul class="themes">${themes}</ul>
      <p class="rlinks"><a class="btn ghost-l" href="${cfg.links.booking}#tab-reviews" target="_blank" rel="noopener">${esc(c.reviews.read)}${I.arrow}</a><a class="btn ghost-l" href="${cfg.links.maps}" target="_blank" rel="noopener">${esc(c.reviews.readG)}${I.arrow}</a><small>${esc(c.reviews.note)}</small></p>
    </div>
  </section>

  <section class="sec gallery" id="gallery" aria-labelledby="h-gallery">
    <div class="wrap">
      <div class="head2">
        <div><p class="label rv">${esc(c.gallery.label)}</p><h2 class="h2 rv" id="h-gallery">${esc(c.gallery.h2)}</h2></div>
      </div>
      <div class="chips" role="group" aria-label="${esc(c.gallery.label)}">${gFilters}</div>
      <div class="masonry" id="masonry">${gItems}</div>
    </div>
  </section>

  <section class="sec faq" id="faq" aria-labelledby="h-faq">
    <div class="wrap faq-grid">
      <div class="sticky"><p class="label">${esc(c.faq.label)}</p><h2 class="h2" id="h-faq">${esc(c.faq.h2)}</h2></div>
      <div class="qa">${faq}
      </div>
    </div>
  </section>

  <section class="sec book" id="book" aria-labelledby="h-book">
    <div class="wrap">
      <div class="head2">
        <div><p class="label">${esc(c.book.label)}</p><h2 class="h2" id="h-book">${esc(c.book.h2)}</h2></div>
        <p class="lead">${esc(c.book.lead)}</p>
      </div>
      <div class="bgrid">
        <form class="form" id="bookForm" novalidate>
          <div class="field"><label for="fArr">${esc(c.book.arrival)}</label><input class="inp" type="date" id="fArr" name="arrival" required></div>
          <div class="field"><label for="fDep">${esc(c.book.departure)}</label><input class="inp" type="date" id="fDep" name="departure" required></div>
          <div class="field"><label for="fGuests">${esc(c.book.guests)}</label>
            <div class="step"><button type="button" data-step="-1" aria-label="${esc(c.book.less)}">−</button><input id="fGuests" name="guests" type="number" inputmode="numeric" min="1" max="4" value="2"><button type="button" data-step="1" aria-label="${esc(c.book.more)}">+</button></div>
          </div>
          <div class="field"><label for="fSuite">${esc(c.book.suite)}</label><select class="inp" id="fSuite" name="suite">${sOpts}</select></div>
          <div class="field full"><label for="fName">${esc(c.book.name)}</label><input class="inp" id="fName" name="name" autocomplete="name" required></div>
          <div class="field full"><label for="fMsg">${esc(c.book.msg)}</label><textarea class="inp" id="fMsg" name="message" rows="3" placeholder="${esc(c.book.msgPh)}"></textarea></div>
          <p class="err full" id="formErr" role="alert"></p>
        </form>
        <aside class="key" aria-labelledby="keyTitle">
          <div class="key-top"><span class="mono">CBA</span><span id="keyTitle">${esc(c.book.card)}</span></div>
          <dl class="key-grid">
            <div class="wide"><dt>${esc(c.book.dates)}</dt><dd id="kDates">—</dd></div>
            <div><dt>${esc(c.book.nights)}</dt><dd id="kNights">—</dd></div>
            <div><dt>${esc(c.book.guests)}</dt><dd id="kGuests">2</dd></div>
            <div class="wide"><dt>${esc(c.book.suite)}</dt><dd id="kSuite">${esc(c.book.any)}</dd></div>
          </dl>
          <p class="key-code" aria-hidden="true"><i></i><i></i><i></i><i></i><span>${esc(c.book.code)}</span></p>
          <div class="key-acts">
            <button class="btn gold" type="button" data-send="wa">${esc(c.book.wa)}</button>
            <div class="key-row"><button class="btn line" type="button" data-send="mail">${esc(c.book.mail)}</button><a class="btn line" id="bkLink" href="${cfg.links.booking}" target="_blank" rel="noopener">${esc(c.book.bk)}</a></div>
            <a class="direct" href="${cfg.links.direct}" target="_blank" rel="noopener">${esc(c.book.direct)} ${I.arrow}</a>
          </div>
          <p class="key-msg" id="keyMsg" aria-live="polite"></p>
          <p class="key-note">${esc(c.book.note)}</p>
        </aside>
      </div>
    </div>
  </section>
</main>

<footer class="ft" id="contact" aria-labelledby="h-contact">
  <div class="wrap">
    <div class="ft-top">
      <div><p class="label">${esc(brand)}</p><h2 class="h2" id="h-contact">${esc(c.footer.h2)}</h2><p class="lead">${esc(c.footer.lead)}</p></div>
      <address class="contacts">
        <a href="${wa}" target="_blank" rel="noopener"><span>${esc(c.footer.l.phone)}</span><b>${esc(cfg.contacts.phone)}</b></a>
        <a href="mailto:${esc(cfg.contacts.email)}"><span>${esc(c.footer.l.email)}</span><b>${esc(cfg.contacts.email)}</b></a>
        <a href="${cfg.links.maps}" target="_blank" rel="noopener"><span>${esc(c.footer.l.addr)}</span><b>${esc(c.footer.address)}</b></a>
        <div><span>${esc(c.footer.l.coords)} · ${esc(c.footer.l.plus)}</span><b>${esc(cfg.geo.dms)} · ${esc(cfg.geo.plus)}</b></div>
      </address>
    </div>
    <p class="giant" aria-hidden="true">CBA Suites</p>
    <nav class="flangs" aria-label="${esc(c.ui.lang)}">${cfg.langs.map((l) => `<a href="${urls.rel[l.code]}" hreflang="${l.hreflang}" lang="${l.code}"${l.code === lang ? ' aria-current="page"' : ""}>${esc(l.name)}</a>`).join("")}</nav>
    <div class="fbottom">
      <span>© ${new Date().getFullYear()} ${esc(brand)}. ${esc(c.footer.rights)}</span>
      <span>${esc(c.footer.l.licence)}: ${esc(cfg.licence)} · ${esc(c.footer.l.operator)} ${esc(cfg.operator)}</span>
      <a href="${cfg.links.complaints}" target="_blank" rel="noopener">${esc(c.footer.complaints)}</a>
    </div>
    <details class="credits"><summary>${esc(c.footer.credits)}</summary><p>${esc(c.footer.creditsNote)}</p><ol>${credits}</ol><p>${esc(c.loc.osm)}</p></details>
  </div>
</footer>

<a class="fab btn gold" id="fab" href="#book">${esc(c.ui.book)}</a>

<div id="menu" class="menu" aria-hidden="true">
  <nav aria-label="${esc(c.ui.menu)}">${nav}<a href="#book">${esc(c.book.label)}</a></nav>
  <div class="maddr"><span>${esc(c.footer.address)}</span><span>${esc(cfg.contacts.phone)} · ${esc(cfg.contacts.email)}</span><span class="mlangs">${cfg.langs.map((l) => `<a href="${urls.rel[l.code]}" hreflang="${l.hreflang}" lang="${l.code}"${l.code === lang ? ' aria-current="page"' : ""}>${l.label}</a>`).join("")}</span></div>
</div>

<dialog class="sdlg" id="sdlg" aria-labelledby="sdTitle">
  <div class="sd-media"><div class="sd-main"><img id="sdImg" alt="" decoding="async"></div><div class="sd-thumbs" id="sdThumbs"></div></div>
  <div class="sd-info">
    <button class="x" type="button" data-close aria-label="${esc(c.ui.close)}"><i></i><i></i></button>
    <p class="label">${esc(c.suites.label)}</p>
    <h2 id="sdTitle"></h2>
    <p class="sd-blurb" id="sdBlurb"></p>
    <dl class="sd-facts" id="sdFacts"></dl>
    <h3>${esc(c.suites.dialog.amen)}</h3>
    <ul class="sd-amen" id="sdAmen"></ul>
    <div class="sd-acts"><a class="btn gold" id="sdAsk" href="#book">${esc(c.suites.dialog.ask)}</a><a class="btn line" id="sdBk" href="${cfg.links.booking}" target="_blank" rel="noopener">${esc(c.suites.dialog.booking)}</a></div>
  </div>
</dialog>

<div class="lb" id="lb" aria-hidden="true" role="dialog" aria-modal="true" aria-label="${esc(c.gallery.label)}">
  <figure class="lb-fig"><img id="lbImg" alt="" decoding="async"><figcaption><span id="lbCap"></span><span id="lbNum"></span></figcaption></figure>
  <button class="lb-b prev" type="button" data-lb="-1" aria-label="${esc(c.ui.prev)}">${I.left}</button>
  <button class="lb-b next" type="button" data-lb="1" aria-label="${esc(c.ui.next)}">${I.arrow}</button>
  <button class="x" type="button" data-close aria-label="${esc(c.ui.close)}"><i></i><i></i></button>
</div>

<script type="application/json" id="app-data">${data}</script>
<script>${js}</script>
</body>
</html>
`;
}
