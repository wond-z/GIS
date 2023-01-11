// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../chunks/_rollupPluginBabelHelpers ../../intl ../../core/has ../../intl/locale".split(" "),function(c,g,p,h,t,q){function n(a){if(!a)return"en-us";if(k.has(a.toLowerCase()))return a.toLowerCase();a=a.split("-")[0].toLowerCase();let b=null;for(const d of k.keys())if(d.startsWith(a)){b=d;break}return b||"en-us"}function l(){l=p._asyncToGenerator(function*(a=q.getLocale()){a=n(a);if(e&&a===f)return e;e=(new Promise((b,d)=>c(["../../chunks/index"],b,d))).then(b=>b.index);f=
a;try{const [b,d]=yield Promise.all([e,k.get(f)()]);f===a&&(b.am4core.options.defaultLocale=d.default);b.am4core.options.suppressWarnings=!0;b.am4core.options.autoDispose=!0}catch{return f=e=null}return e});return l.apply(this,arguments)}h="#ffffff #858585 #ffbebe #ffebbe #ffebaf #ffffbe #e9ffbe #d3ffbe #beffe8 #bee8ff #bed2ff #e8beff #ffbee8 #ebebeb #707070 #ff7f7f #ffa77f #ffd37f #ffff73 #d1ff73 #a3ff73 #73ffdf #73dfff #73b2ff #df73ff #ff73df #d6d6d6 #5c5c5c #ff0000 #ff5500 #ffaa00 #ffff00 #aaff00 #55ff00 #00ffc5 #00c5ff #0070ff #c500ff #ff00c5 #c2c2c2 #474747 #e60000 #e64c00 #e69800 #e6e600 #98e600 #4ce600 #00e6a9 #00a9e6 #005ce6 #a900e6 #e600a9 #adadad #242424 #a80000 #a83800 #a87000 #a8a800 #70a800 #38a800 #00a884 #0084a8 #004da8 #8400a8 #a80084 #999999 #1a1a1a #730000 #732600 #734c00 #737300 #4c7300 #267300 #00734c #004c73 #002673 #4c0073 #73004".split(" ");
var r=[{name:"default",colors:[].concat(h.slice(30,39),h.slice(28,30).reverse())},{name:"cat-dark",colors:"#ed5151 #149ece #a7c636 #9e559c #fc921f #ffde3e #f789d8 #b7814a #3caf99 #6b6bd6 #b54779 #7f7f7f".split(" ")},{name:"tropical-bliss",colors:"#fce138 #ff9399 #fcd27e #f1983c #a553b7 #b1a9d0 #6ecffc #4c81cd #fc6f84 #fc3e5a #6af689 #48885c".split(" ")},{name:"desert-blooms",colors:"#102432 #144d59 #ffc730 #ed9310 #a64f1b #661510 #d9351a #b31515 #4a0932 #8c213f #18382e #2c6954".split(" ")},{name:"under-the-sea",
colors:"#bf9727 #607100 #00734c #704489 #01acca #024e76 #f09100 #ea311f #c6004b #7570b3 #666666 #333333".split(" ")},{name:"vibrant-rainbow",colors:"#fffb00 #f5cb11 #9fd40c #46e39c #32b8a6 #7ff2fa #ac08cc #dd33ff #eb7200 #e8a784 #bf2e2e #6c7000".split(" ")},{name:"ocean-bay",colors:"#191921 #11495c #78b1c2 #454f4b #8f8f82 #9be0c0 #87b051 #f7ec88 #ebdcc1 #dbb658 #c43541 #75351e".split(" ")},{name:"prairie-summer",colors:"#332424 #751555 #d47013 #d68989 #211173 #82aad6 #7bfaeb #6ec9a8 #6b6408 #eada40 #ccc54a #1fc235".split(" ")},
{name:"pastel-chalk",colors:"#fffd99 #f5e6a4 #c1d48c #b8e3d0 #a0b8b5 #cbf7fa #d791f2 #dfc1eb #f2b983 #e8c4b2 #bf8e8e #94995c".split(" ")},{name:"seq-yellow-orange-red-bright",colors:"#910000 #b1260b #c0370f #e05919 #ef6a1d #ff7b22 #ffa143 #ffb454 #ffda74 #ffed85".split(" ")},{name:"seq-reds-bright",colors:"#57453b #7b4238 #9f4036 #c23d33 #d7483c #ec5244 #f3696c #f9816c #ffc4ae #fff0dc".split(" ")},{name:"seq-purples-bright",colors:"#4e465c #5a4a78 #695291 #775baa #8663c3 #946bdc #aa89e8 #c1a6f3 #d7c4ff #e6e1ff".split(" ")},
{name:"seq-blues-bright",colors:"#404d54 #435c6c #48799d #4b88b6 #4d96ce #50a5e7 #74bbed #98d0f3 #bce6f9 #e6faff".split(" ")},{name:"seq-greens-bright",colors:"#39544c #386757 #368165 #359b73 #33b581 #4bc392 #64d2a2 #7ce0b3 #cbf6d9 #f4ffea".split(" ")},{name:"seq-browns-bright",colors:"#524834 #715b38 #8f6e3c #ae8140 #cc9444 #eba748 #eeb664 #f0c47f #f9e0b7 #fff8eb".split(" ")}];const k=new Map([["ar",()=>(new Promise((a,b)=>c(["../../chunks/ar"],a,b))).then(a=>a.ar)],["bg-bg",()=>(new Promise((a,
b)=>c(["../../chunks/bg_BG"],a,b))).then(a=>a.bg_BG)],["bs-ba",()=>(new Promise((a,b)=>c(["../../chunks/bs_BA"],a,b))).then(a=>a.bs_BA)],["ca-es",()=>(new Promise((a,b)=>c(["../../chunks/ca_ES"],a,b))).then(a=>a.ca_ES)],["cs-cz",()=>(new Promise((a,b)=>c(["../../chunks/cs_CZ"],a,b))).then(a=>a.cs_CZ)],["da-dk",()=>(new Promise((a,b)=>c(["../../chunks/da_DK"],a,b))).then(a=>a.da_DK)],["de-de",()=>(new Promise((a,b)=>c(["../../chunks/de_DE"],a,b))).then(a=>a.de_DE)],["de-ch",()=>(new Promise((a,b)=>
c(["../../chunks/de_CH"],a,b))).then(a=>a.de_CH)],["el-gr",()=>(new Promise((a,b)=>c(["../../chunks/el_GR"],a,b))).then(a=>a.el_GR)],["en-us",()=>(new Promise((a,b)=>c(["../../chunks/en_US"],a,b))).then(a=>a.en_US)],["en-ca",()=>(new Promise((a,b)=>c(["../../chunks/en_CA"],a,b))).then(a=>a.en_CA)],["es-es",()=>(new Promise((a,b)=>c(["../../chunks/es_ES"],a,b))).then(a=>a.es_ES)],["et-ee",()=>(new Promise((a,b)=>c(["../../chunks/et_EE"],a,b))).then(a=>a.et_EE)],["fi-fi",()=>(new Promise((a,b)=>c(["../../chunks/fi_FI"],
a,b))).then(a=>a.fi_FI)],["fr-fr",()=>(new Promise((a,b)=>c(["../../chunks/fr_FR"],a,b))).then(a=>a.fr_FR)],["he-il",()=>(new Promise((a,b)=>c(["../../chunks/he_IL"],a,b))).then(a=>a.he_IL)],["hr-hr",()=>(new Promise((a,b)=>c(["../../chunks/hr_HR"],a,b))).then(a=>a.hr_HR)],["hu-hu",()=>(new Promise((a,b)=>c(["../../chunks/hu_HU"],a,b))).then(a=>a.hu_HU)],["id-id",()=>(new Promise((a,b)=>c(["../../chunks/id_ID"],a,b))).then(a=>a.id_ID)],["it-it",()=>(new Promise((a,b)=>c(["../../chunks/it_IT"],a,b))).then(a=>
a.it_IT)],["ja-jp",()=>(new Promise((a,b)=>c(["../../chunks/ja_JP"],a,b))).then(a=>a.ja_JP)],["ko-kr",()=>(new Promise((a,b)=>c(["../../chunks/ko_KR"],a,b))).then(a=>a.ko_KR)],["lt-lt",()=>(new Promise((a,b)=>c(["../../chunks/lt_LT"],a,b))).then(a=>a.lt_LT)],["lv-lv",()=>(new Promise((a,b)=>c(["../../chunks/lv_LV"],a,b))).then(a=>a.lv_LV)],["nb-no",()=>(new Promise((a,b)=>c(["../../chunks/nb_NO"],a,b))).then(a=>a.nb_NO)],["nl-nl",()=>(new Promise((a,b)=>c(["../../chunks/nl_NL"],a,b))).then(a=>a.nl_NL)],
["pl-pl",()=>(new Promise((a,b)=>c(["../../chunks/pl_PL"],a,b))).then(a=>a.pl_PL)],["pt-br",()=>(new Promise((a,b)=>c(["../../chunks/pt_BR"],a,b))).then(a=>a.pt_BR)],["pt-pt",()=>(new Promise((a,b)=>c(["../../chunks/pt_PT"],a,b))).then(a=>a.pt_PT)],["ro-ro",()=>(new Promise((a,b)=>c(["../../chunks/ro_RO"],a,b))).then(a=>a.ro_RO)],["ru-ru",()=>(new Promise((a,b)=>c(["../../chunks/ru_RU"],a,b))).then(a=>a.ru_RU)],["sk-sk",()=>(new Promise((a,b)=>c(["../../chunks/sk_SK"],a,b))).then(a=>a.sk_SK)],["sl-sl",
()=>(new Promise((a,b)=>c(["../../chunks/sl_SL"],a,b))).then(a=>a.sl_SL)],["sr-rs",()=>(new Promise((a,b)=>c(["../../chunks/sr_RS"],a,b))).then(a=>a.sr_RS)],["sv-se",()=>(new Promise((a,b)=>c(["../../chunks/sv_SE"],a,b))).then(a=>a.sv_SE)],["th-th",()=>(new Promise((a,b)=>c(["../../chunks/th_TH"],a,b))).then(a=>a.th_TH)],["tr-tr",()=>(new Promise((a,b)=>c(["../../chunks/tr_TR"],a,b))).then(a=>a.tr_TR)],["uk-ua",()=>(new Promise((a,b)=>c(["../../chunks/uk_UA"],a,b))).then(a=>a.uk_UA)],["vi-vn",()=>
(new Promise((a,b)=>c(["../../chunks/vi_VN"],a,b))).then(a=>a.vi_VN)],["zh-cn",()=>(new Promise((a,b)=>c(["../../chunks/zh_Hans"],a,b))).then(a=>a.zh_Hans)],["zh-hk",()=>(new Promise((a,b)=>c(["../../chunks/zh_Hant"],a,b))).then(a=>a.zh_Hant)],["zh-tw",()=>(new Promise((a,b)=>c(["../../chunks/zh_Hant"],a,b))).then(a=>a.zh_Hant)]]);let e,f;g.getChartLocale=n;g.getColorSet=function(a,b="default"){const d=r.find(m=>m.name===b);return d?d.colors.map(m=>a.color(m)):null};g.loadChartsModule=function(){return l.apply(this,
arguments)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});