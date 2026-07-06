/* lexicon-link.js — digiterior 天然色漢字INDEX runtime linker
   記録は曲がらない。リンクはビューであり、INDEXが読み出し時に投影する。
   (c) Koichiro Hoshino x Claude.ai 2026 */
(function(){
var LEX = [{"c": "相", "x": "#2E6FC7", "m": ["claude.ai", "Claude", "エージェント", "agent", "AI"], "dj": "相方。founder + Claude——AIと二人で、軽やかに深く。", "de": "Partner — founder + Claude: two of us, moving lightly and deep."}, {"c": "認", "x": "#378ADD", "m": ["authentication", "CHROMAKEY", "パスワード", "auth", "認証"], "dj": "認証。パスワードの壁を越え、しるしで人を確かめる。", "de": "Authentication — verifying a person by a mark, beyond passwords."}, {"c": "字", "x": "#4FC3F7", "m": ["japanese", "kanji", "ふりがな", "日本語", "漢字", "文字", "言語", "言葉"], "dj": "文字。一文字が一意味を運ぶ、情報圧縮の最小単位。", "de": "Character — the smallest unit of compression: one character, one meaning."}, {"c": "色", "x": "#EC407A", "m": ["colourful", "colorful", "colour", "color", "天然色", "色彩"], "dj": "色。日本語は生まれながらにしてカラフルだった。", "de": "Colour — Japanese was born colourful."}, {"c": "憶", "x": "#8E24AA", "m": ["MEMORY-BANK", "memory", "記憶"], "dj": "記憶。人の中にだけある、再現不能な資産。", "de": "Memory — the unreproducible asset that lives only in a person."}, {"c": "星", "x": "#1A237E", "m": ["hoshino", "roberto", "晃一郎", "星野"], "dj": "星。神田祭の半纏の深い藍——名の最初の一文字。", "de": "Star — the deep indigo of a festival coat; the first character of a name."}, {"c": "理", "x": "#1B6B5A", "m": ["management", "KANRI", "かんり", "管理", "経営"], "dj": "かんり。管（Control）ではなく、理（やりくり・自律）。", "de": "KANRI — not 管 (control), but 理: reason, autonomy, making things work."}, {"c": "索", "x": "#9A7A2A", "m": ["INDEX", "index", "索引", "辞書"], "dj": "索引。意味をつなぐ配管であり、それ自体がUI。", "de": "Index — the plumbing of meaning, and the interface itself."}, {"c": "時", "x": "#C0550A", "m": ["time", "long", "時間", "未来", "時代"], "dj": "時間。誰も管理しない第一級の資源。利益＝時間。", "de": "Time — the first-class resource no system manages. Profit = time."}, {"c": "工", "x": "#B5401A", "m": ["construction", "takt", "タクト", "建築", "建設", "工程"], "dj": "工。建築×AI×タクト工程——1996年特許の原点。", "de": "Craft — construction × AI × takt: the 1996 patent origin."}, {"c": "邸", "x": "#3A44A0", "m": ["digiterior", "DIGITERIOR"], "dj": "digiterior。2010年から個人が持つ、デジタルの邸。", "de": "digiterior — a digital residence, held personally since 2010."}, {"c": "語", "x": "#534AB7", "m": ["narrative", "note", "コラム", "物語"], "dj": "語り。html-notesの一枚一枚が、物語の器。", "de": "Story — each html-note, a vessel of narrative."}, {"c": "視", "x": "#E53935", "m": ["VISION LAYER", "vision", "視覚", "指紋"], "dj": "視覚。公開されていても再現できない、視覚的な指紋。", "de": "Vision — the visual fingerprint: public, yet unreproducible."}, {"c": "町", "x": "#3B6D11", "m": ["community", "地域", "神田", "文化"], "dj": "町。神田・柳森・地域——文化が育つ場所。", "de": "Town — Kanda, Yanagimori, community: where culture grows."}, {"c": "継", "x": "#AB47BC", "m": ["generations", "DNA", "継承", "世代"], "dj": "継承。42億人の祖先から、次の世代へ。", "de": "Inheritance — from 4.2 billion ancestors to the next generation."}, {"c": "市", "x": "#BA7517", "m": ["marketing", "bazaar", "バザール", "市場", "販売"], "dj": "市。MARKETINGは市づくり——場・知恵・対話を取り戻す。", "de": "Bazaar — marketing as making a market: place, wisdom, dialogue."}, {"c": "花", "x": "#C2185B", "m": ["UI-FLORIST", "florist", "結婚式", "薔薇", "バラ"], "dj": "花。結婚式場の花の原価管理から、すべては始まった。", "de": "Flower — it all began with cost management for wedding flowers."}, {"c": "図", "x": "#1A3A5C", "m": ["architecture", "blueprint", "設計図", "設計", "構造"], "dj": "設計図。2016年に描かれ、2026年に実装された。", "de": "Blueprint — drawn in 2016, buildable in 2026."}, {"c": "網", "x": "#4C7A1E", "m": ["scope", "ERP", "網羅", "全体"], "dj": "網羅。覆われない資源は誤差項になり、ほころぶ。", "de": "Coverage — any resource left out becomes an error term, and frays."}, {"c": "究", "x": "#5A3FB0", "m": ["play", "デジタル", "究", "楽"], "dj": "究める。穴を掘り下げる字。デジタルで、楽を究める。", "de": "Mastery — the character of digging deep. Mastering play, digitally."}, {"c": "金", "x": "#B8960C", "m": ["finance", "profit", "value", "金融", "利益", "入金"], "dj": "価値。売上・原価・利益・入金——そして利益＝時間。", "de": "Value — revenue, cost, profit, payment. And profit = time."}, {"c": "誠", "x": "#0F6E56", "m": ["integrity", "誠実", "誠"], "dj": "Integrity。人の誠実さ・データの完全性・構造の一体性。", "de": "Integrity — of people, of data, of the whole structure."}, {"c": "学", "x": "#66BB6A", "m": ["learning", "Loop", "学習", "評価"], "dj": "学び。すべての業務プロセスは、同時に学習プロセス。", "de": "Learning — every business process is also a learning process."}, {"c": "緩", "x": "#8D6E63", "m": ["レジリエンス", "loose", "疎結合", "石垣"], "dj": "緩さ。石垣と障子——緩くて、レジリエント。", "de": "Looseness — stone wall and paper screen: loose, and resilient."}];
var SAKUIN = (location.hostname==="notes.digiterior.net") ? "sakuin.html"
           : "https://notes.digiterior.net/sakuin.html";
var SKIP = "A,SCRIPT,STYLE,CODE,PRE,TEXTAREA,BUTTON,NAV,HEADER,FOOTER,H1,RT,SVG";

function skips(el){
  for(var n=el;n;n=n.parentElement){
    if(SKIP.indexOf(n.tagName)>=0) return true;
    if(n.classList && (n.classList.contains("lexlink")||n.classList.contains("k")||n.classList.contains("chips"))) return true;
  }
  return false;
}
function findText(member, ascii){
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var re = ascii ? new RegExp("\\b"+member.replace(/[.*+?^${}()|[\]\\-]/g,"\\$&")+"\\b","i") : null;
  var node;
  while((node=w.nextNode())){
    if(skips(node.parentElement)) continue;
    var s = node.nodeValue, idx = -1, len = member.length;
    if(ascii){ var m = re.exec(s); if(m){ idx=m.index; len=m[0].length; } }
    else { idx = s.indexOf(member); }
    if(idx>=0) return {node:node, idx:idx, len:len};
  }
  return null;
}
function jaMode(){
  var b=document.body;
  if(b.classList.contains("lang-en")) return false;
  return true;
}
function link(entry){
  for(var i=0;i<entry.m.length;i++){
    var mem = entry.m[i];
    var ascii = /^[\x20-\x7E]+$/.test(mem);
    var hit = findText(mem, ascii);
    if(!hit) continue;
    var node=hit.node, before=node.nodeValue.slice(0,hit.idx),
        word=node.nodeValue.substr(hit.idx,hit.len),
        after=node.nodeValue.slice(hit.idx+hit.len);
    var a=document.createElement("a");
    a.className="lexlink";
    a.href=SAKUIN+"#k-"+encodeURIComponent(entry.c);
    a.style.setProperty("--lx",entry.x);
    a.setAttribute("data-d",(jaMode()?entry.dj:entry.de));
    a.appendChild(document.createTextNode(word));
    var tag=document.createElement("sup");
    tag.className="lextag"; tag.textContent=entry.c; tag.style.color=entry.x;
    a.appendChild(tag);
    var parent=node.parentNode;
    parent.insertBefore(document.createTextNode(before),node);
    parent.insertBefore(a,node);
    node.nodeValue=after;
    return true;
  }
  return false;
}
function css(){
  var s=document.createElement("style");
  s.textContent=".lexlink{color:inherit;text-decoration:none;border-bottom:1px dotted var(--lx);position:relative;cursor:pointer}"+
  ".lexlink .lextag{font-size:.62em;margin-left:.12em;font-family:'Noto Serif JP',serif;font-weight:700}"+
  ".lexlink:hover{background:color-mix(in srgb,var(--lx) 8%,transparent)}"+
  ".lexlink:hover::after{content:attr(data-d);position:absolute;left:0;bottom:calc(100% + 6px);z-index:999;"+
  "background:#1a1814;color:#faf8f4;font-size:11.5px;line-height:1.7;padding:.55em .8em;border-radius:5px;"+
  "width:max-content;max-width:280px;white-space:normal;font-family:'Noto Sans JP',sans-serif;font-weight:300;"+
  "box-shadow:0 4px 14px rgba(0,0,0,.25);pointer-events:none}"+
  ".lexlink:hover::before{content:'';position:absolute;left:12px;bottom:100%;border:6px solid transparent;border-top-color:#1a1814;z-index:999}";
  document.head.appendChild(s);
}
function run(){
  if(location.pathname.indexOf("sakuin")>=0) return; /* 索引自身は対象外 */
  css();
  for(var i=0;i<LEX.length;i++) link(LEX[i]);
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",run);
else run();
})();