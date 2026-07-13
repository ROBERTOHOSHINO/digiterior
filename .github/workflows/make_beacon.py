#!/usr/bin/env python3
# raku beacon — digiterior.net 分散色認証
# 使い方:
#   python3 make_beacon.py "合言葉"
#   python3 make_beacon.py "合言葉" --date 2026-07-11   (テスト用に日付を指定)
#   BEACON_SECRET 環境変数でも合言葉を渡せます
# 出力: raku-beacon.svg  → digiterior.net のルートにアップロードしてください

import hashlib
import hmac
import os
import sys
from datetime import datetime, timedelta, timezone

SURFACE_ID = "dgt"

PALETTE = [
    "#A63030", "#A66B30", "#A6A630", "#6BA630",
    "#30A630", "#30A66B", "#30A6A6", "#306BA6",
    "#3030A6", "#6B30A6", "#A630A6", "#A6306B",
]
HUE_NAMES = ["紅", "橙", "黄", "黄緑", "緑", "青碧", "浅葱", "空", "瑠璃", "菫", "紫", "躑躅"]

SVG_TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     width="120" height="120" role="img" data-surface="{surface}" data-date="{date}">
  <title>楽 — digiterior beacon {date}</title>
  <g stroke="#1F1D1A" stroke-opacity="0.55" stroke-width="1" fill="none">
    <path d="M 60 100 L 12 44"/>
    <path d="M 60 100 L 38 32"/>
    <path d="M 60 100 L 60 28"/>
    <path d="M 60 100 L 82 32"/>
    <path d="M 60 100 L 108 44"/>
    <path d="M 12 44 A 72 72 0 0 1 108 44"/>
    <path d="M 26 60 A 50 50 0 0 1 94 60" stroke-opacity="0.3"/>
  </g>
  <circle id="keystone" cx="60" cy="100" r="15" fill="{color}"/>
  <text x="60" y="105" text-anchor="middle" font-family="serif"
        font-size="13" fill="#FFFFFF">楽</text>
</svg>
"""


def jst_today() -> str:
    return datetime.now(timezone(timedelta(hours=9))).strftime("%Y-%m-%d")


def derive_hue(secret: str, surface: str, date_str: str) -> int:
    msg = f"{surface}|{date_str}".encode("utf-8")
    digest = hmac.new(secret.encode("utf-8"), msg, hashlib.sha256).digest()
    return digest[0] % 12


def main() -> None:
    args = sys.argv[1:]
    date_str = jst_today()
    if "--date" in args:
        i = args.index("--date")
        date_str = args[i + 1]
        del args[i : i + 2]

    secret = args[0] if args else os.environ.get("BEACON_SECRET", "")
    if not secret:
        sys.exit("合言葉を指定してください: python3 make_beacon.py \"合言葉\"")

    hue = derive_hue(secret, SURFACE_ID, date_str)
    color = PALETTE[hue]

    svg = SVG_TEMPLATE.format(surface=SURFACE_ID, date=date_str, color=color)
    out = "raku-beacon.svg"
    with open(out, "w", encoding="utf-8") as f:
        f.write(svg)

    print(f"{date_str} の要の色: {HUE_NAMES[hue]} {color} (hue {hue}/12)")
    print(f"書き出しました → {out}")
    print("digiterior.net のルートにアップロードすれば、今日の膜が張られます。")


if __name__ == "__main__":
    main()
