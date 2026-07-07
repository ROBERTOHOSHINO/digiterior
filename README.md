# digiterior brand assets

石垣の環 — 不揃いの石が隙間を残しながら環をなす。緩くてレジリエンス。
digital × interior の継ぎ目に立つ「t」だけが無彩色(要石)。

## Files

| file | 用途 |
|---|---|
| logo.svg | 明背景用フルロゴ(環 + 多色ワードマーク) |
| logo-dark.svg | 暗背景用(明度調整パレット) |
| logo-mark.svg | 環のみ(正方形、アイコン用途) |
| favicon.svg | ファビコン。`prefers-color-scheme` で暗モード自動対応 |
| mark-512.png | apple-touch-icon / PWA アイコン元データ |
| ogp.png | OGP画像 1200×630 |

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:image" content="https://digiterior.net/ogp.png">
```

## Palette — 石8色(明背景)

| # | hex | 由来 |
|---|---|---|
| 1 | #1A237E | 藍(星・神田祭の半纏) |
| 2 | #b8960c | gold(ブランドトークン) |
| 3 | #0f6e56 | teal(ブランドトークン) |
| 4 | #c0550a | accent(ブランドトークン) |
| 5 | #1a1814 | ink(要石。暗背景では #faf8f4 に反転) |
| 6 | #F9A825 | 晃(柳森神社の薔薇・陽光) |
| 7 | #3949AB | 藍・明 |
| 8 | #1B6B5A | green(ムラーノガラス) |

暗背景版: #7986CB / #d9b13b / #2e9d7f / #e07a3e / #faf8f4 / #F9A825 / #9FA8DA / #58b8a0

## 文字色の巡回

石8色が10文字を一周半する(完全一致させない緩さは意図的)。

```
d→1  i→2  g→3  i→4  t→5(要石・無彩色)  e→6  r→7  i→8  o→1  r→2
```

## Typography

font-family: 'Avenir Next', 'Helvetica Neue', 'Hiragino Sans', Arial, sans-serif
weight 500 / lowercase / letter-spacing ≈ 0.07em

— 2010年商標登録、2026年実装。16年の弧。
