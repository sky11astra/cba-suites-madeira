"""Карта центру Фуншала з даних OpenStreetMap (© OpenStreetMap contributors, ODbL).
Запуск з кореня проєкту:  python tools/map.py
Вхід: assets/osm/streets.json, land.json, walk.json (Overpass + OSRM), src/data/places.json
Вихід: dist/img/funchal-map.svg (вулиці, узбережжя, парки) і src/data/map.json (точки, маршрути, кола «хвилин пішки»).
"""
import json, math
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OSM = ROOT / "assets/osm"
S, W, N, E = 32.6345, -16.9395, 32.6585, -16.8965
COS = math.cos(math.radians((S + N) / 2))
VW = 1200
K = VW / ((E - W) * COS)
VH = round((N - S) * K)
M_PER_PX = 111320 / K


def P(lat, lon):
    return ((lon - W) * COS * K, (N - lat) * K)


def simplify(pts, eps):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    L = math.hypot(dx, dy) or 1e-9
    i, dmax = 0, -1
    for k in range(1, len(pts) - 1):
        d = abs(dy * pts[k][0] - dx * pts[k][1] + x2 * y1 - y2 * x1) / L
        if d > dmax:
            i, dmax = k, d
    if dmax <= eps:
        return [pts[0], pts[-1]]
    return simplify(pts[: i + 1], eps)[:-1] + simplify(pts[i:], eps)


def inside(p, m=30):
    return -m <= p[0] <= VW + m and -m <= p[1] <= VH + m


def clip_runs(pts, m=30):
    """Розбиває лінію на шматки, що лежать у кадрі (з запасом)."""
    runs, cur = [], []
    for i, p in enumerate(pts):
        keep = inside(p, m) or (i > 0 and inside(pts[i - 1], m)) or (i + 1 < len(pts) and inside(pts[i + 1], m))
        if keep:
            cur.append(p)
        elif cur:
            runs.append(cur); cur = []
    if cur:
        runs.append(cur)
    return [r for r in runs if len(r) > 1]


def num(v):
    s = f"{v:.1f}".rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def d_of(lines, eps=0.7, prec=1, close=False):
    out = []
    for pts in lines:
        pts = simplify(pts, eps)
        r = [(round(x, prec), round(y, prec)) for x, y in pts]
        q = [r[0]] + [b for a, b in zip(r, r[1:]) if a != b]
        if len(q) < 2:
            continue
        s = f"M{num(q[0][0])} {num(q[0][1])}l" + " ".join(f"{num(b[0] - a[0])} {num(b[1] - a[1])}" for a, b in zip(q, q[1:]))
        out.append(s + ("z" if close else ""))
    return "".join(out).replace(" -", "-")


def geom(el):
    return [P(g["lat"], g["lon"]) for g in el.get("geometry", []) if g]


streets = json.loads((OSM / "streets.json").read_text())["elements"]
land = json.loads((OSM / "land.json").read_text())["elements"]
CLASS = {"major": ("motorway", "trunk", "primary", "secondary", "motorway_link", "trunk_link", "primary_link", "secondary_link"),
         "mid": ("tertiary", "tertiary_link", "unclassified"),
         "minor": ("residential", "living_street"),
         "ped": ("pedestrian", "steps")}
groups = {k: [] for k in CLASS}
for el in streets:
    hw = el.get("tags", {}).get("highway")
    for k, v in CLASS.items():
        if hw in v:
            groups[k] += clip_runs(geom(el))

# Узбережжя → полігон моря (OSM: суходіл ліворуч від напрямку лінії)
coast = [geom(el) for el in land if el.get("tags", {}).get("natural") == "coastline"]
raw = [[(round(g["lat"], 7), round(g["lon"], 7)) for g in el["geometry"]] for el in land if el.get("tags", {}).get("natural") == "coastline"]
chains = []
pool = [list(r) for r in raw]
while pool:
    ch = pool.pop(0)
    grown = True
    while grown:
        grown = False
        for r in pool:
            if r[0] == ch[-1]:
                ch += r[1:]; pool.remove(r); grown = True; break
            if r[-1] == ch[0]:
                ch = r + ch[1:]; pool.remove(r); grown = True; break
    chains.append(ch)
chains.sort(key=len, reverse=True)
main = [P(a, b) for a, b in chains[0]]
xs = [p[0] for p in main]
print(f"coast: {len(raw)} ways → {len(chains)} chains; main spans x {min(xs):.0f}..{max(xs):.0f}")
# морський полігон: берегова лінія (захід→схід) + обхід через південь кадру
if main[0][0] > main[-1][0]:
    main = main[::-1]
far = VH + 400
sea_pts = [(main[0][0] - 400, main[0][1]), *main, (main[-1][0] + 400, main[-1][1]), (main[-1][0] + 400, far), (main[0][0] - 400, far)]
sea_d = d_of([sea_pts], eps=0.6, close=True)
coast_d = d_of([r for c in chains for r in clip_runs([P(a, b) for a, b in c])], eps=0.6)

parks, piers = [], []
for el in land:
    t = el.get("tags", {})
    g = geom(el)
    if not g or not any(inside(p) for p in g):
        continue
    if t.get("leisure") in ("park", "garden"):
        parks.append(g)
    elif t.get("man_made") in ("pier", "breakwater", "groyne"):
        piers.append(g)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {VW} {VH}" preserveAspectRatio="xMidYMid slice">
<rect width="{VW}" height="{VH}" fill="#0f1e2d"/>
<path d="{sea_d}" fill="#0a1622"/>
<path d="{d_of(parks, eps=0.6, close=True)}" fill="#bfdccf" fill-opacity=".09"/>
<g fill="none" stroke="#f2f5f1" stroke-linecap="round" stroke-linejoin="round">
<path d="{d_of(groups['ped'])}" stroke-opacity=".13" stroke-width=".7"/>
<path d="{d_of(groups['minor'])}" stroke-opacity=".2" stroke-width=".9"/>
<path d="{d_of(groups['mid'])}" stroke-opacity=".3" stroke-width="1.4"/>
<path d="{d_of(groups['major'])}" stroke-opacity=".42" stroke-width="2.2"/>
<path d="{d_of(piers, eps=0.6)}" stroke-opacity=".35" stroke-width="2"/>
</g>
<path d="{coast_d}" fill="none" stroke="#c9a45c" stroke-opacity=".55" stroke-width="1.3"/>
</svg>'''
(ROOT / "dist/img").mkdir(parents=True, exist_ok=True)
(ROOT / "dist/img/funchal-map.svg").write_text(svg, encoding="utf-8")

# Оверлей: готель, точки, маршрути, кола хвилин
places = json.loads((ROOT / "src/data/places.json").read_text(encoding="utf-8"))
walk = json.loads((OSM / "walk.json").read_text())
H = places["hotel"]
hx, hy = P(H["lat"], H["lon"])
pois, routes, ratios = {}, {}, []
for p in places["walk"]:
    x, y = P(p["lat"], p["lon"])
    w = walk[p["id"]]
    mins = max(1, round(w["s"] / 60))
    straight = math.hypot(x - hx, y - hy) * M_PER_PX
    ratios.append(straight / mins)
    pois[p["id"]] = {"x": round(x, 1), "y": round(y, 1), "m": w["m"], "min": mins, "cat": p["cat"]}
    pts = [P(lat, lon) for lon, lat in w["g"]]
    pts = [(hx, hy)] + pts + [(x, y)]
    routes[p["id"]] = d_of([pts], eps=0.9)
ratios.sort()
mpm = ratios[len(ratios) // 2]  # медіана: метрів по прямій за хвилину ходьби
rings = [{"min": m, "r": round(m * mpm / M_PER_PX, 1)} for m in (5, 10, 15, 20, 25)]
areas = [{"id": a["id"], "x": round(P(a["lat"], a["lon"])[0]), "y": round(P(a["lat"], a["lon"])[1])} for a in places["areas"]]
out = {"vw": VW, "vh": VH, "mpp": round(M_PER_PX, 4), "hotel": [round(hx, 1), round(hy, 1)], "rings": rings,
       "pois": pois, "routes": routes, "areas": areas, "scale": {"m": 500, "px": round(500 / M_PER_PX, 1)},
       "sea": [round(P(32.6385, -16.9105)[0]), round(P(32.6385, -16.9105)[1])]}
(ROOT / "src/data/map.json").write_text(json.dumps(out, ensure_ascii=False), encoding="utf-8")
print(f"OK: funchal-map.svg {len(svg) / 1024:.0f} KB, overlay routes {sum(len(v) for v in routes.values()) / 1024:.1f} KB, {mpm:.0f} m/хв по прямій")
