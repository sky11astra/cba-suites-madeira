// Збірка статичного сайту: node build.mjs → dist/ (EN «/», UA «/uk/», PT «/pt/», DE «/de/»)
// Перед першою збіркою: python tools/images.py && python tools/map.py
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import cfg from "./src/config.mjs";
import { suites } from "./src/data/suites.mjs";
import { gallery } from "./src/data/gallery.mjs";
import { climate } from "./src/data/climate.mjs";
import { render, esc } from "./src/template.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const json = (p) => JSON.parse(read(p));
for (const f of ["src/data/media-out.json", "src/data/map.json"]) if (!existsSync(join(ROOT, f))) { console.error(`Немає ${f}. Спершу: python tools/images.py && python tools/map.py`); process.exit(1); }
const media = json("src/data/media-out.json");
const mapd = json("src/data/map.json");
const places = json("src/data/places.json");
const island = json("src/data/island.json");
const tourCredits = json("assets/tours/credits.json");
const packs = {};
cfg.langs = cfg.langs.filter((l) => existsSync(join(ROOT, "src/i18n", `${l.code}.mjs`)) || console.warn(`! немає перекладу ${l.code} — пропускаю`));
for (const L of cfg.langs) packs[L.code] = (await import(pathToFileURL(join(ROOT, "src/i18n", `${L.code}.mjs`)).href)).default;
const LANGS = cfg.langs.map((l) => l.code);
const pageUrl = (code) => `${cfg.siteUrl}/${cfg.langs.find((l) => l.code === code).dir}`;
const T = (s, v = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k === "brand" ? cfg.brand : v[k] ?? m));
const f1 = (n) => Math.round(n * 10) / 10;

/* ---------- Карта острова для турів ---------- */
const LON0 = -17.30, LON1 = -16.60, LAT0 = 32.92, LAT1 = 32.58;
const COS = Math.cos((32.75 * Math.PI) / 180);
const K = 1000 / ((LON1 - LON0) * COS);
const MW = 1000, MH = Math.round((LAT0 - LAT1) * K);
const proj = (lat, lon) => [(lon - LON0) * COS * K, (LAT0 - lat) * K];
const H = proj(places.hotel.lat, places.hotel.lon);
function islandSvg(c) {
  const land = "M" + island.madeira.map(([lon, lat]) => proj(lat, lon).map(f1).join(",")).join("L") + "Z";
  const lines = [], dots = [], labels = [];
  for (const t of places.tours) {
    let [x, y] = proj(t.lat, t.lon), edge = false;
    if (x > MW - 30 || y > MH - 30 || y < 20) { // за межами кадру: лінія до краю зі стрілкою
      const dx = x - H[0], dy = y - H[1];
      const s = Math.min((MW - 34 - H[0]) / Math.max(dx, 1e-6), dy > 0 ? (MH - 34 - H[1]) / dy : (24 - H[1]) / dy);
      x = H[0] + dx * s; y = H[1] + dy * s; edge = true;
    }
    const mx = (H[0] + x) / 2, my = (H[1] + y) / 2, dx = x - H[0], dy = y - H[1], L = Math.hypot(dx, dy) || 1;
    const bend = Math.min(60, L * 0.18) * (x < H[0] ? -1 : 1);
    const cx = mx - (dy / L) * bend, cy = my + (dx / L) * bend;
    lines.push(`<path class="tl" data-t="${t.id}" pathLength="1" d="M${f1(H[0])},${f1(H[1])}Q${f1(cx)},${f1(cy)} ${f1(x)},${f1(y)}"/>`);
    dots.push(edge ? `<path class="td edge" data-t="${t.id}" d="M${f1(x - 7)},${f1(y - 7)}L${f1(x + 7)},${f1(y)}L${f1(x - 7)},${f1(y + 7)}Z" transform="rotate(${f1(Math.atan2(dy, dx) * 180 / Math.PI)} ${f1(x)} ${f1(y)})"/>` : `<circle class="td" data-t="${t.id}" cx="${f1(x)}" cy="${f1(y)}" r="6"/>`);
    const time = t.drive ? T(c.tours.car, { n: t.drive }) : t.walk ? T(c.tours.boats, { n: mapd.pois[t.walk].min }) : c.tours.ferry;
    labels.push(`<span class="il" data-l="${t.id}" style="--x:${f1(x / MW * 100)};--y:${f1(y / MH * 100)}">${esc(c.tours.items[t.id][0])}<i>${esc(time)}</i></span>`);
  }
  return `<svg viewBox="0 0 ${MW} ${MH}" role="img" aria-label="${esc(c.tours.mapAria)}" xmlns="http://www.w3.org/2000/svg">
<path class="land" d="${land}"/>
<g class="tls">${lines.join("")}</g><g class="tds">${dots.join("")}</g>
<g class="home"><circle class="halo" cx="${f1(H[0])}" cy="${f1(H[1])}" r="16"/><circle class="core" cx="${f1(H[0])}" cy="${f1(H[1])}" r="8"/></g>
</svg><div class="ilabels" aria-hidden="true"><span class="il home-l on" style="--x:${f1(H[0] / MW * 100)};--y:${f1(H[1] / MH * 100)}">${esc(c.tours.funchal)}</span>${labels.join("")}</div>`;
}

/* ---------- Графік клімату ---------- */
function chartSvg(c, months) {
  const W = 720, Hh = 300, L = 40, R = 64, Tp = 18, B = 16, y0 = 16, y1 = 28;
  const X = (i) => L + (i * (W - L - R)) / 11, Y = (v) => Tp + ((y1 - v) * (Hh - Tp - B)) / (y1 - y0);
  const grid = [16, 20, 24, 28].map((v) => `<line class="gl" x1="${L}" x2="${W - R}" y1="${f1(Y(v))}" y2="${f1(Y(v))}"/><text class="yt" x="${L - 10}" y="${f1(Y(v) + 4)}" text-anchor="end">${v}°</text>`).join("");
  const line = (arr, cls) => `<polyline class="ln ${cls}" points="${arr.map((v, i) => `${f1(X(i))},${f1(Y(v))}`).join(" ")}"/>` + arr.map((v, i) => `<circle class="pt ${cls}" data-m="${i}" cx="${f1(X(i))}" cy="${f1(Y(v))}" r="4"/>`).join("");
  const hits = months.map((m, i) => `<rect class="hit" data-m="${i}" x="${f1(X(i) - (W - L - R) / 22)}" y="${Tp}" width="${f1((W - L - R) / 11)}" height="${Hh - Tp - B}"><title>${esc(m.long)}: ${climate.air[i]} °C / ${climate.sea[i]} °C</title></rect>`).join("");
  const end = (arr, cls, lbl) => `<text class="el ${cls}" x="${f1(X(11) + 12)}" y="${f1(Y(arr[11]) + 4)}">${arr[11]}° ${esc(lbl)}</text>`;
  return `<svg class="csvg" viewBox="0 0 ${W} ${Hh}" role="img" aria-label="${esc(c.seasons.air)} / ${esc(c.seasons.sea)}, °C">
<g>${grid}</g><line class="sel" id="selLine" x1="0" x2="0" y1="${Tp}" y2="${Hh - B}"/>
${line(climate.air, "air")}${line(climate.sea, "sea")}
${end(climate.air, "air", "")}${end(climate.sea, "sea", "")}
<g class="hits">${hits}</g></svg>`;
}

/* ---------- JSON-LD ---------- */
const hotelId = `${cfg.siteUrl}/#hotel`;
function jsonLd(lang) {
  const c = packs[lang];
  const img = (k, w = 1800) => `${cfg.siteUrl}/img/${k}-${Math.min(w, media[k].ws.at(-1))}.webp`;
  const AM = ["Outdoor swimming pool", "Free Wi-Fi", "Kitchenette in every suite", "Dishwasher", "Lift", "Garden", "Sun terrace", "Lounge", "Billiards", "Free coffee and tea 24 hours", "Self check-in", "Concierge", "Airport shuttle (paid)", "Non-smoking rooms"];
  const g = [
    {
      "@type": "Hotel", "@id": hotelId, name: cfg.brand, alternateName: cfg.short, url: `${cfg.siteUrl}/`,
      description: T(c.meta.description), image: ["474756863", "612644740", "474754100", "240155183", "courtyard-dusk"].map((k) => img(k)),
      logo: `${cfg.siteUrl}/img/icon-512.png`, telephone: cfg.contacts.phone, email: cfg.contacts.email,
      address: { "@type": "PostalAddress", streetAddress: cfg.address.street, addressLocality: cfg.address.city, addressRegion: cfg.address.region, postalCode: cfg.address.postal, addressCountry: cfg.address.country },
      geo: { "@type": "GeoCoordinates", latitude: cfg.geo.lat, longitude: cfg.geo.lon },
      hasMap: cfg.links.maps, containedInPlace: { "@type": "City", name: "Funchal", containedInPlace: { "@type": "AdministrativeArea", name: "Madeira, Portugal" } },
      checkinTime: `${cfg.checkIn}:00`, checkoutTime: `${cfg.checkOut}:00`, petsAllowed: false, smokingAllowed: false, priceRange: "€€",
      currenciesAccepted: "EUR", availableLanguage: ["en", "es"],
      amenityFeature: AM.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      containsPlace: suites.map((s) => ({
        "@type": "Suite", name: c.suites.names[s.id], description: c.suites.blurbs[s.id],
        floorSize: { "@type": "QuantitativeValue", value: s.m2, unitCode: "MTK" },
        occupancy: { "@type": "QuantitativeValue", maxValue: s.guests },
        bed: c.suites.beds[s.id], image: img(s.photos[0], 1200)
      })),
      sameAs: [cfg.links.booking, cfg.links.maps, cfg.links.direct],
      identifier: { "@type": "PropertyValue", name: "Registo Nacional de Alojamento Local", value: cfg.licence }
    },
    { "@type": "WebSite", "@id": `${cfg.siteUrl}/#website`, url: `${cfg.siteUrl}/`, name: cfg.brand, inLanguage: LANGS, publisher: { "@id": hotelId } },
    { "@type": "WebPage", "@id": `${pageUrl(lang)}#webpage`, url: pageUrl(lang), name: T(c.meta.title), description: T(c.meta.description), inLanguage: lang,
      isPartOf: { "@id": `${cfg.siteUrl}/#website` }, about: { "@id": hotelId }, primaryImageOfPage: img("474756863") },
    { "@type": "ItemList", name: `${c.loc.h2} · ${cfg.short}`, itemListElement: places.walk.map((p, i) => ({
      "@type": "ListItem", position: i + 1,
      item: { "@type": "TouristAttraction", name: c.loc.places[p.id], geo: { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lon },
        description: `${mapd.pois[p.id].m} m · ${T(c.loc.min, { n: mapd.pois[p.id].min })} (${cfg.short})` } })) },
    { "@type": "ItemList", name: `${c.tours.h2} · ${cfg.short}`, itemListElement: places.tours.map((t, i) => ({
      "@type": "ListItem", position: i + 1,
      item: { "@type": "TouristDestination", name: c.tours.items[t.id][0], description: c.tours.items[t.id][1], geo: { "@type": "GeoCoordinates", latitude: t.lat, longitude: t.lon } } })) },
    { "@type": "FAQPage", mainEntity: c.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  ];
  return JSON.stringify({ "@context": "https://schema.org", "@graph": g }).replace(/</g, "\\u003c");
}

/* ---------- Мінімізація ---------- */
const minCss = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s*\n\s*/g, "").replace(/\s{2,}/g, " ").replace(/\s*([{};,>])\s*/g, "$1").replace(/;}/g, "}");
const minJs = (s) => s.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("//")).join("\n");
const css = minCss(read("src/styles.css"));
const js = minJs(read("src/app.js"));

/* ---------- Сторінки ---------- */
const rel = (from, to) => (from.dir ? "../" : "") + to.dir || "./";
const credits = Object.entries(tourCredits).map(([k, ph]) => `<li>${esc(packs.en.tours.items[k]?.[0] || k)}: <a href="${esc(ph.page)}" rel="noopener" target="_blank">${esc(ph.author)}</a>, ${esc(ph.license)}</li>`).join("");
mkdirSync(DIST, { recursive: true });
for (const L of cfg.langs) {
  const lang = L.code, c = packs[lang], base = L.dir ? "../" : "";
  const urls = { abs: Object.fromEntries(LANGS.map((x) => [x, pageUrl(x)])), rel: Object.fromEntries(cfg.langs.map((x) => [x.code, rel(L, x) || "./"])) };
  const months = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(Date.UTC(2026, i, 15));
    const cap = (s) => s.charAt(0).toLocaleUpperCase(L.locale) + s.slice(1);
    return { short: cap(d.toLocaleString(L.locale, { month: "short", timeZone: "UTC" }).replace(".", "")), long: cap(d.toLocaleString(L.locale, { month: "long", timeZone: "UTC" })) };
  });
  const src = (k) => ({ k, w: media[k].w, h: media[k].h, c: media[k].c, ws: media[k].ws });
  const data = JSON.stringify({
    lang, locale: L.locale, base,
    hotel: { lat: cfg.geo.lat, lon: cfg.geo.lon },
    contacts: cfg.contacts, links: cfg.links,
    suites: suites.map((s) => ({ id: s.id, bk: s.bk[0], m2: s.m2, guests: s.guests, view: s.view, outdoor: s.outdoor, amen: s.amen, price: s.price,
      name: c.suites.names[s.id], beds: c.suites.beds[s.id], blurb: c.suites.blurbs[s.id], photos: s.photos.map(src) })),
    gallery: gallery.map((g) => ({ ...src(g.key), alt: c.gallery.alts[g.key] })),
    pool: src("474754100"),
    pois: Object.fromEntries(Object.entries(mapd.pois).map(([id, p]) => [id, { min: p.min, m: p.m }])),
    climate, months,
    i18n: { ui: c.ui, hero: c.hero, suites: { tags: c.suites.tags, dialog: c.suites.dialog, amen: c.suites.amen, guests: c.suites.guests, from: c.suites.from, ask: c.suites.ask },
      seasons: { events: c.seasons.events }, book: c.book, gallery: { count: c.gallery.count }, loc: { min: c.loc.min } }
  }).replace(/</g, "\\u003c");
  const html = render({ lang, c, cfg, base, media, suites, gallery, mapd, places, climate, months,
    islandSvg: islandSvg(c), chartSvg: chartSvg(c, months), jsonLd: jsonLd(lang), urls, css, js, data, credits });
  const out = join(DIST, L.dir, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log(`✓ /${L.dir}index.html  ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);
}

/* ---------- SEO / GEO файли ---------- */
const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(DIST, "robots.txt"), cfg.demo ? `# Demo version: not for indexing yet\nUser-agent: *\nDisallow: /\n` : `User-agent: *\nAllow: /\n\n# AI search and assistants are welcome\nUser-agent: GPTBot\nAllow: /\nUser-agent: OAI-SearchBot\nAllow: /\nUser-agent: ChatGPT-User\nAllow: /\nUser-agent: ClaudeBot\nAllow: /\nUser-agent: Claude-SearchBot\nAllow: /\nUser-agent: PerplexityBot\nAllow: /\nUser-agent: Google-Extended\nAllow: /\nUser-agent: Applebot-Extended\nAllow: /\n\nSitemap: ${cfg.siteUrl}/sitemap.xml\n`);
const sitemapImgs = ["474756863", "612644740", "474754100", "240155183", "courtyard-dusk", "612644780", "474756830", "599502789"];
writeFileSync(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${cfg.langs.map((L) => `  <url>
    <loc>${pageUrl(L.code)}</loc>
    <lastmod>${today}</lastmod>
${cfg.langs.map((x) => `    <xhtml:link rel="alternate" hreflang="${x.hreflang}" href="${pageUrl(x.code)}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl("en")}"/>
${sitemapImgs.map((k) => `    <image:image><image:loc>${cfg.siteUrl}/img/${k}-${media[k].ws.at(-1)}.webp</image:loc></image:image>`).join("\n")}
  </url>`).join("\n")}
</urlset>
`);
const en = packs.en, R = cfg.ratings;
writeFileSync(join(DIST, "llms.txt"), `# ${cfg.brand}

> ${T(en.meta.description)}

${cfg.brand} is a small boutique aparthotel (Alojamento Local licence ${cfg.licence}) at ${cfg.address.street}, ${cfg.address.parish}, ${cfg.address.postal} ${cfg.address.city}, Madeira, Portugal (${cfg.geo.lat}, ${cfg.geo.lon}; Plus Code ${cfg.geo.plus}). It is managed by ${cfg.operator}. The site is available in ${new Intl.ListFormat("en").format(cfg.langs.map((l) => new Intl.DisplayNames(["en"], { type: "language" }).of(l.code)))}.

## Key facts
- Outdoor swimming pool open all year, in a garden walled with Madeiran basalt; sun terrace and sunbeds.
- Every studio and suite has a kitchenette (stovetop, microwave, fridge, kettle, dishwasher) and a dining table.
- Lounge with billiards, books and board games; free coffee and tea 24 hours; free Wi-Fi (guest score 9.1).
- Self check-in ${cfg.checkIn}–${cfg.checkInUntil} with a door code; check-out by ${cfg.checkOut}. Lift to all floors.
- Adults only (minimum age 18). No pets, no smoking, no parties or group bookings. Quiet hours 22:00–10:00.
- Paid airport transfer on request. Madeira Airport (FNC) is 20 km away, about 25 minutes by car.
- Ratings (November 2026): Booking.com ${R.booking.score}/10 from ${R.booking.count} reviews; Google ${R.google.score}/5 from ${R.google.count} reviews.

## Suites
${suites.map((s) => `- **${en.suites.names[s.id]}**: ${s.m2} m², up to ${s.guests} guests, ${en.suites.beds[s.id]}. ${en.suites.blurbs[s.id]}${s.price ? ` From €${s.price} a night.` : ""}`).join("\n")}

## Walking distances from the house (real routes, OpenStreetMap)
${places.walk.map((p) => `- ${en.loc.places[p.id]}: ${mapd.pois[p.id].m} m, ${mapd.pois[p.id].min} min`).join("\n")}

## Island tours and drive times from the house
${places.tours.map((t) => `- ${en.tours.items[t.id][0]}: ${en.tours.items[t.id][1]} (${t.drive ? `about ${t.drive} min by car` : t.walk ? `boats leave from Funchal marina, ${mapd.pois[t.walk].min} min walk` : "ferry from Funchal port"})`).join("\n")}

## FAQ
${en.faq.items.map(([q, a]) => `**${q}** ${a}`).join("\n\n")}

## Pages
${cfg.langs.map((l) => `- ${l.name}: ${pageUrl(l.code)}`).join("\n")}

## Contact
- Phone / WhatsApp: ${cfg.contacts.phone}
- Email: ${cfg.contacts.email}
- Booking.com: ${cfg.links.booking}
- Google Maps: ${cfg.links.maps}
`);
writeFileSync(join(DIST, "site.webmanifest"), JSON.stringify({
  name: cfg.brand, short_name: cfg.short, start_url: "./", display: "standalone", background_color: "#0f1e2d", theme_color: "#0f1e2d",
  icons: [{ src: "img/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "img/icon-512.png", sizes: "512x512", type: "image/png" }]
}, null, 2));
writeFileSync(join(DIST, "favicon.svg"), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0f1e2d"/><circle cx="32" cy="32" r="22" fill="none" stroke="#c9a45c" stroke-width="2.4"/><text x="32" y="39.5" text-anchor="middle" font-family="Georgia,serif" font-size="19" fill="#f2f5f1" letter-spacing=".5">CBA</text></svg>`);
writeFileSync(join(DIST, "404.html"), `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>404 | ${cfg.brand}</title><meta name="robots" content="noindex"><link rel="icon" href="${cfg.siteUrl}/favicon.svg" type="image/svg+xml"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#0f1e2d;color:#f2f5f1;font:300 16px/1.6 system-ui,-apple-system,Segoe UI,sans-serif;text-align:center;padding:24px}h1{font:400 clamp(48px,9vw,110px)/1 Georgia,serif;margin:0 0 14px;color:#c9a45c}a{color:#f2f5f1;margin:0 8px}</style></head><body><div><h1>404</h1><p>Page not found · Сторінку не знайдено · Página não encontrada · Seite nicht gefunden · Page introuvable · Nie znaleziono strony · Страница не найдена</p><p>${cfg.langs.map((l) => `<a href="${cfg.siteUrl}/${l.dir}">${l.label}</a>`).join("")}</p></div></body></html>`);
console.log("✓ robots.txt, sitemap.xml, llms.txt, site.webmanifest, favicon.svg, 404.html");
