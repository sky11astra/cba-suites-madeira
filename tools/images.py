"""Готує фото для сайту: AVIF + WebP у кількох ширинах, середній колір (плейсхолдер), OG-картинку та іконки.
Запуск з кореня проєкту:  python tools/images.py
Список фото — src/data/media.json (+ усі assets/booking/*.jpg). Результат — dist/img/ і src/data/media-out.json.
"""
import json
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "dist" / "img"
SPEC = json.loads((ROOT / "src/data/media.json").read_text(encoding="utf-8"))


def jobs():
    items = dict(SPEC["items"])
    for f in sorted((ROOT / "assets/booking").glob("*.jpg")):
        items.setdefault(f.stem, {"src": f"assets/booking/{f.name}", "set": SPEC["allBooking"]})
    return items


def process(args):
    key, item = args
    src = ROOT / item["src"]
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    w, h = im.size
    want = [x for x in SPEC["sets"][item["set"]]["w"] if x <= w] or [w]
    for tw in want:
        th = round(h * tw / w)
        small = None
        for ext, kw in (("avif", {"quality": 52, "speed": 6}), ("webp", {"quality": 76, "method": 5})):
            out = OUT / f"{key}-{tw}.{ext}"
            if out.exists() and out.stat().st_mtime > src.stat().st_mtime:
                continue
            small = small or im.resize((tw, th), Image.LANCZOS)
            small.save(out, ext.upper(), **kw)
    r, g, b = im.resize((1, 1), Image.BOX).getpixel((0, 0))
    return key, {"w": w, "h": h, "c": f"#{r:02x}{g:02x}{b:02x}", "ws": want}


def og_and_icons():
    navy, gold, paper = (15, 30, 45), (201, 164, 92), (242, 245, 241)
    try:
        serif = lambda s: ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", s)
        sans = lambda s: ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", s)
        serif(10); sans(10)
    except OSError:
        serif = sans = lambda s: ImageFont.load_default()
    # OG 1200x630: вид з балкона на затоку
    view = Image.open(ROOT / "assets/booking/612644740.jpg").convert("RGB")
    og = ImageOps.fit(view, (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
    shade = Image.new("L", (1, 630))
    for y in range(630):
        shade.putpixel((0, y), int(max(0, (y - 230) / 400) ** 1.25 * 225))
    og.paste(Image.new("RGB", og.size, navy), (0, 0), shade.resize(og.size))
    d = ImageDraw.Draw(og)
    d.text((64, 432), "CBA Suites", font=serif(84), fill=paper)
    d.text((66, 534), "SUITES WITH POOL  ·  CENTRAL FUNCHAL  ·  MADEIRA", font=sans(25), fill=gold)
    og.save(OUT / "og.jpg", "JPEG", quality=84, optimize=True, progressive=True)
    # Іконки: темно-синій квадрат, золоте коло, монограма CBA
    S = 512
    ic = Image.new("RGB", (S, S), navy)
    d = ImageDraw.Draw(ic)
    d.ellipse([56, 56, S - 56, S - 56], outline=gold, width=10)
    f = serif(150)
    tw = d.textlength("CBA", font=f)
    d.text(((S - tw) / 2, S / 2 - 98), "CBA", font=f, fill=paper)
    ic.save(OUT / "icon-512.png", optimize=True)
    ic.resize((192, 192), Image.LANCZOS).save(OUT / "icon-192.png", optimize=True)
    ic.resize((180, 180), Image.LANCZOS).save(OUT / "apple-touch-icon.png", optimize=True)
    ic.save(OUT.parent / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    todo = jobs()
    with ProcessPoolExecutor() as ex:
        manifest = dict(ex.map(process, todo.items()))
    (ROOT / "src/data/media-out.json").write_text(json.dumps(manifest, indent=0, sort_keys=True), encoding="utf-8")
    og_and_icons()
    total = sum(p.stat().st_size for p in OUT.rglob("*") if p.is_file())
    print(f"OK: {len(manifest)} фото, dist/img = {total / 1024 / 1024:.1f} MB")
