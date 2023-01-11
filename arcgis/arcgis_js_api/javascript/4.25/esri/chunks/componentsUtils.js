// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../assets","../core/has","../core/urlUtils"],function(m,xa,U,ya){function za(a){return a.map(b=>{let d="";for(let c=0;c<b;c++)d+=(65536*(1+Math.random())|0).toString(16).substring(1);return d}).join("-")}function M(a,b){function d(c){if(c){var e;(e=c.closest(b))||(c=c.getRootNode().host||null,e=d(c));c=e}else c=null;return c}return d(a)}function Aa(a,b){return V(a,b)}function V(a,b){if(a){var d=b(a);if(void 0!==d)return d;({parentNode:a}=a);return V(a instanceof ShadowRoot?a.host:
a,b)}}function W(a){return"function"===typeof(null===a||void 0===a?void 0:a.setFocus)}function X(a,b){return a?Array.from(a.children||[]).filter(d=>null===d||void 0===d?void 0:d.matches(b)):[]}function Ba(a,b,d){b=":not([slot])"===b?X(a,":not([slot])"):Array.from(a.querySelectorAll(b));b=d&&!1===d.direct?b:b.filter(e=>e.parentElement===a);b=(null===d||void 0===d?0:d.matches)?b.filter(e=>null===e||void 0===e?void 0:e.matches(d.matches)):b;const c=null===d||void 0===d?void 0:d.selector;return c?b.map(e=>
Array.from(e.querySelectorAll(c))).reduce((e,f)=>[...e,...f],[]).filter(e=>!!e):b}function Ca(a,b,d){b=":not([slot])"===b?X(a,":not([slot])")[0]||null:a.querySelector(b);b=d&&!1===d.direct?b:(null===b||void 0===b?void 0:b.parentElement)===a?b:null;b=(null===d||void 0===d?0:d.matches)?(null===b||void 0===b?0:b.matches(d.matches))?b:null:b;return(a=null===d||void 0===d?void 0:d.selector)?null===b||void 0===b?void 0:b.querySelector(a):b}function Y(){const {classList:a}=document.body,b=window.matchMedia("(prefers-color-scheme: dark)").matches,
d=e=>document.body.dispatchEvent(new CustomEvent("calciteThemeChange",{bubbles:!0,detail:{theme:e}}));let c=a.contains("calcite-theme-dark")||a.contains("calcite-theme-auto")&&b?"dark":"light";d(c);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e=e.matches?"dark":"light";c!==e&&d(e);c=e});(new MutationObserver(()=>{var e=a.contains("calcite-theme-dark")||a.contains("calcite-theme-auto")&&b?"dark":"light";c!==e&&d(e);c=e})).observe(document.body,{attributes:!0,attributeFilter:["class"]})}
let A,Z,G,aa=!1,H=!1,N=!1,t=!1,O=!1;const z=(a,b)=>()=>{},ba={},P=a=>{a=typeof a;return"object"===a||"function"===a},Q=(a,b,...d)=>{let c=null,e=null,f=null,g=!1,h=!1;const k=[],l=n=>{for(let p=0;p<n.length;p++)if(c=n[p],Array.isArray(c))l(c);else if(null!=c&&"boolean"!==typeof c){if(g="function"!==typeof a&&!P(c))c=String(c);g&&h?k[k.length-1].$text$+=c:k.push(g?I(null,c):c);h=g}};l(d);if(b){b.key&&(e=b.key);b.name&&(f=b.name);const n=b.className||b.class;n&&(b.class="object"!==typeof n?n:Object.keys(n).filter(p=>
n[p]).join(" "))}if("function"===typeof a)return a(null===b?{}:b,k,Da);d=I(a,null);d.$attrs$=b;0<k.length&&(d.$children$=k);d.$key$=e;d.$name$=f;return d},I=(a,b)=>({$flags$:0,$tag$:a,$text$:b,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),ca={},Da={forEach:(a,b)=>a.map(da).forEach(b),map:(a,b)=>a.map(da).map(b).map(Ea)},da=a=>({vattrs:a.$attrs$,vchildren:a.$children$,vkey:a.$key$,vname:a.$name$,vtag:a.$tag$,vtext:a.$text$}),Ea=a=>{if("function"===typeof a.vtag){var b=Object.assign({},
a.vattrs);a.vkey&&(b.key=a.vkey);a.vname&&(b.name=a.vname);return Q(a.vtag,b,...(a.vchildren||[]))}b=I(a.vtag,a.vtext);b.$attrs$=a.vattrs;b.$children$=a.vchildren;b.$key$=a.vkey;b.$name$=a.vname;return b},Ga=a=>Fa.map(b=>b(a)).find(b=>!!b),Ha=(a,b)=>{if(null!=a&&!P(a)){if(b&4)return"false"===a?!1:""===a||!!a;if(b&2)return parseFloat(a);if(b&1)return String(a)}return a},ea=new WeakMap,Ja=(a,b,d)=>{let c=J.get(a);Ia&&d?(c=c||new CSSStyleSheet,"string"===typeof c?c=b:c.replaceSync(b)):c=b;J.set(a,c)},
fa=(a,b)=>"sc-"+(b&&a.$flags$&32?a.$tagName$+"-"+b:a.$tagName$),ia=(a,b,d,c,e,f)=>{if(d!==c){let k=b in a,l=b.toLowerCase();if("class"===b){a=a.classList;const n=d?d.split(ha):[],p=c?c.split(ha):[];a.remove(...n.filter(r=>r&&!p.includes(r)));a.add(...p.filter(r=>r&&!n.includes(r)))}else if("style"===b){for(var g in d)c&&null!=c[g]||(g.includes("-")?a.style.removeProperty(g):a.style[g]="");for(var h in c)d&&c[h]===d[h]||(h.includes("-")?a.style.setProperty(h,c[h]):a.style[h]=c[h])}else if("key"!==
b)if("ref"===b)c&&c(a);else if(a.__lookupSetter__(b)||"o"!==b[0]||"n"!==b[1]){g=P(c);if((k||g&&null!==c)&&!e)try{if(a.tagName.includes("-"))a[b]=c;else if(h=null==c?"":c,"list"===b)k=!1;else if(null==d||a[b]!=h)a[b]=h}catch(n){}d=!1;l!==(l=l.replace(/^xlink:?/,""))&&(b=l,d=!0);if(null==c||!1===c){if(!1!==c||""===a.getAttribute(b))d?a.removeAttributeNS("http://www.w3.org/1999/xlink",b):a.removeAttribute(b)}else(!k||f&4||e)&&!g&&(c=!0===c?"":c,d?a.setAttributeNS("http://www.w3.org/1999/xlink",b,c):
a.setAttribute(b,c))}else b="-"===b[2]?b.slice(3):l in E?l.slice(2):l[2]+b.slice(3),d&&q.rel(a,b,d,!1),c&&q.ael(a,b,c,!1)}},ha=/\s/,ja=(a,b,d,c)=>{const e=11===b.$elm$.nodeType&&b.$elm$.host?b.$elm$.host:b.$elm$;a=a&&a.$attrs$||ba;const f=b.$attrs$||ba;for(c in a)c in f||ia(e,c,a[c],void 0,d,b.$flags$);for(c in f)ia(e,c,a[c],f[c],d,b.$flags$)},K=(a,b,d,c)=>{b=b.$children$[d];let e=0,f;aa||(N=!0,"slot"===b.$tag$&&(A&&c.classList.add(A+"-s"),b.$flags$|=b.$children$?2:1));if(null!==b.$text$)c=b.$elm$=
w.createTextNode(b.$text$);else if(b.$flags$&1)c=b.$elm$=w.createTextNode("");else{t||(t="svg"===b.$tag$);c=b.$elm$=w.createElementNS(t?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",b.$flags$&2?"slot-fb":b.$tag$);t&&"foreignObject"===b.$tag$&&(t=!1);ja(null,b,t);null!=A&&c["s-si"]!==A&&c.classList.add(c["s-si"]=A);if(b.$children$)for(e=0;e<b.$children$.length;++e)(f=K(a,b,e,c))&&c.appendChild(f);"svg"===b.$tag$?t=!1:"foreignObject"===c.tagName&&(t=!0)}c["s-hn"]=G;b.$flags$&3&&(c["s-sr"]=
!0,c["s-cr"]=Z,c["s-sn"]=b.$name$||"",(d=a&&a.$children$&&a.$children$[d])&&d.$tag$===b.$tag$&&a.$elm$&&F(a.$elm$,!1));return c},F=(a,b)=>{q.$flags$|=1;a=a.childNodes;for(let d=a.length-1;0<=d;d--){const c=a[d];c["s-hn"]!==G&&c["s-ol"]&&((c["s-ol"]?c["s-ol"]:c).parentNode.insertBefore(c,c&&c["s-ol"]||c),c["s-ol"].remove(),c["s-ol"]=void 0,N=!0);b&&F(c,b)}q.$flags$&=-2},ka=(a,b,d,c,e,f)=>{let g=a["s-cr"]&&a["s-cr"].parentNode||a,h;g.shadowRoot&&g.tagName===G&&(g=g.shadowRoot);for(;e<=f;++e)c[e]&&(h=
K(null,d,e,a))&&(c[e].$elm$=h,g.insertBefore(h,b&&b["s-ol"]||b))},ma=(a,b,d,c,e)=>{for(;b<=d;++b)if(c=a[b])e=c.$elm$,la(c),H=!0,e["s-ol"]?e["s-ol"].remove():F(e,!0),e.remove()},L=(a,b)=>a.$tag$===b.$tag$?"slot"===a.$tag$?a.$name$===b.$name$:a.$key$===b.$key$:!1,B=(a,b)=>{const d=b.$elm$=a.$elm$,c=a.$children$,e=b.$children$,f=b.$tag$;var g=b.$text$;if(null===g){t="svg"===f?!0:"foreignObject"===f?!1:t;"slot"!==f&&ja(a,b,t);if(null!==c&&null!==e){var h=g=a=0,k=0;let n=c.length-1,p=c[0],r=c[n],y=e.length-
1,u=e[0],x=e[y];for(;a<=n&&g<=y;)if(null==p)p=c[++a];else if(null==r)r=c[--n];else if(null==u)u=e[++g];else if(null==x)x=e[--y];else if(L(p,u))B(p,u),p=c[++a],u=e[++g];else if(L(r,x))B(r,x),r=c[--n],x=e[--y];else if(L(p,x))"slot"!==p.$tag$&&"slot"!==x.$tag$||F(p.$elm$.parentNode,!1),B(p,x),d.insertBefore(p.$elm$,r.$elm$.nextSibling),p=c[++a],x=e[--y];else if(L(r,u))"slot"!==p.$tag$&&"slot"!==x.$tag$||F(r.$elm$.parentNode,!1),B(r,u),d.insertBefore(r.$elm$,p.$elm$),r=c[--n],u=e[++g];else{h=-1;for(k=
a;k<=n;++k)if(c[k]&&null!==c[k].$key$&&c[k].$key$===u.$key$){h=k;break}0<=h?(k=c[h],k.$tag$!==u.$tag$?h=K(c&&c[g],b,h,d):(B(k,u),c[h]=void 0,h=k.$elm$)):h=K(c&&c[g],b,g,d);u=e[++g];if(h){k=p.$elm$;k=(k["s-ol"]?k["s-ol"]:k).parentNode;var l=p.$elm$;k.insertBefore.call(k,h,l&&l["s-ol"]||l)}}a>n?ka(d,null==e[y+1]?null:e[y+1].$elm$,b,e,g,y):g>y&&ma(c,a,n)}else null!==e?(null!==a.$text$&&(d.textContent=""),ka(d,null,b,e,0,e.length-1)):null!==c&&ma(c,0,c.length-1);t&&"svg"===f&&(t=!1)}else(b=d["s-cr"])?
b.parentNode.textContent=g:a.$text$!==g&&(d.data=g)},na=a=>{a=a.childNodes;let b,d,c,e,f,g;d=0;for(c=a.length;d<c;d++)if(b=a[d],1===b.nodeType){if(b["s-sr"])for(f=b["s-sn"],b.hidden=!1,e=0;e<c;e++)if(g=a[e].nodeType,a[e]["s-hn"]!==b["s-hn"]||""!==f){if(1===g&&f===a[e].getAttribute("slot")){b.hidden=!0;break}}else if(1===g||3===g&&""!==a[e].textContent.trim()){b.hidden=!0;break}na(b)}},v=[],pa=a=>{let b,d,c,e,f,g=0;const h=a.childNodes,k=h.length;for(;g<k;g++){a=h[g];if(a["s-sr"]&&(b=a["s-cr"])&&b.parentNode)for(d=
b.parentNode.childNodes,c=a["s-sn"],f=d.length-1;0<=f;f--)b=d[f],b["s-cn"]||b["s-nr"]||b["s-hn"]===a["s-hn"]||(oa(b,c)?(e=v.find(l=>l.$nodeToRelocate$===b),H=!0,b["s-sn"]=b["s-sn"]||c,e?e.$slotRefNode$=a:v.push({$slotRefNode$:a,$nodeToRelocate$:b}),b["s-sr"]&&v.map(l=>{oa(l.$nodeToRelocate$,b["s-sn"])&&(e=v.find(n=>n.$nodeToRelocate$===b))&&!l.$slotRefNode$&&(l.$slotRefNode$=e.$slotRefNode$)})):v.some(l=>l.$nodeToRelocate$===b)||v.push({$nodeToRelocate$:b}));1===a.nodeType&&pa(a)}},oa=(a,b)=>1===
a.nodeType?null===a.getAttribute("slot")&&""===b||a.getAttribute("slot")===b?!0:!1:a["s-sn"]===b?!0:""===b,la=a=>{a.$attrs$&&a.$attrs$.ref&&a.$attrs$.ref(null);a.$children$&&a.$children$.map(la)},Ka=(a,b)=>{const d=a.$hostElement$;var c=a.$cmpMeta$,e=a.$vnode$||I(null,null);const f=b&&b.$tag$===ca?b:Q(null,null,b);G=d.tagName;c.$attrsToReflect$&&(f.$attrs$=f.$attrs$||{},c.$attrsToReflect$.map(([g,h])=>f.$attrs$[h]=d[g]));f.$tag$=null;f.$flags$|=4;a.$vnode$=f;f.$elm$=e.$elm$=d.shadowRoot||d;A=d["s-sc"];
Z=d["s-cr"];aa=0!==(c.$flags$&1);H=!1;B(e,f);q.$flags$|=1;if(N){pa(f.$elm$);let g,h;for(c=0;c<v.length;c++)e=v[c],a=e.$nodeToRelocate$,a["s-ol"]||(e=w.createTextNode(""),e["s-nr"]=a,a.parentNode.insertBefore(a["s-ol"]=e,a));for(c=0;c<v.length;c++)if(e=v[c],a=e.$nodeToRelocate$,e.$slotRefNode$){b=e.$slotRefNode$.parentNode;g=e.$slotRefNode$.nextSibling;for(e=a["s-ol"];e=e.previousSibling;)if((h=e["s-nr"])&&h["s-sn"]===a["s-sn"]&&b===h.parentNode&&(h=h.nextSibling,!h||!h["s-nr"])){g=h;break}(g||b===
a.parentNode)&&a.nextSibling===g||a===g||(!a["s-hn"]&&a["s-ol"]&&(a["s-hn"]=a["s-ol"].parentNode.nodeName),b.insertBefore(a,g))}else 1===a.nodeType&&(a.hidden=!0)}H&&na(f.$elm$);q.$flags$&=-2;v.length=0},R=(a,b)=>{a.$flags$|=16;return La(()=>Ma(a,b))},Ma=(a,b)=>{const d=a.$hostElement$,c=z("scheduleUpdate",a.$cmpMeta$.$tagName$);let e;e=b?C(d,"componentWillLoad"):C(d,"componentWillUpdate");e=qa(e,()=>C(d,"componentWillRender"));c();return qa(e,()=>Na(a,d,b))},Na=async(a,b,d)=>{var c=a.$hostElement$,
e=z("update",a.$cmpMeta$.$tagName$);c["s-rc"];if(d){var f=a.$cmpMeta$;d=a.$hostElement$;c=f.$flags$;const h=z("attachStyles",f.$tagName$);var g=d.shadowRoot?d.shadowRoot:d.getRootNode();f=fa(f,a.$modeName$);const k=J.get(f);g=11===g.nodeType?g:w;if(k)if("string"===typeof k){g=g.head||g;let l=ea.get(g),n;l||ea.set(g,l=new Set);l.has(f)||(n=w.createElement("style"),n.innerHTML=k,g.insertBefore(n,g.querySelector("link")),l&&l.add(f))}else g.adoptedStyleSheets.includes(k)||(g.adoptedStyleSheets=[...g.adoptedStyleSheets,
k]);g=f;c&10&&(d["s-sc"]=g,d.classList.add(g+"-h"),c&2&&d.classList.add(g+"-s"));h()}d=z("render",a.$cmpMeta$.$tagName$);try{b=b.render&&b.render(),a.$flags$&=-17,a.$flags$|=2,Ka(a,b)}catch(h){(0,console.error)(h,a.$hostElement$)}d();e();e=a.$hostElement$;b=z("postUpdate",a.$cmpMeta$.$tagName$);a.$ancestorComponent$;C(e,"componentDidRender");a.$flags$&64?C(e,"componentDidUpdate"):(a.$flags$|=64,C(e,"componentDidLoad"));b()},C=(a,b,d)=>{if(a&&a[b])try{return a[b](d)}catch(c){(0,console.error)(c,void 0)}},
qa=(a,b)=>a&&a.then?a.then(b):b(),Oa=(a,b,d,c)=>{const e=D.get(a),f=e.$instanceValues$.get(b),g=e.$flags$;d=Ha(d,c.$members$[b][0]);const h=Number.isNaN(f)&&Number.isNaN(d);d===f||h||(e.$instanceValues$.set(b,d),c.$watchers$&&g&128&&(c=c.$watchers$[b])&&c.map(k=>{try{a[k](d,f,b)}catch(l){(0,console.error)(l,a)}}),2!==(g&18)||a.componentShouldUpdate&&!1===a.componentShouldUpdate(d,f,b)||R(e,!1))},Pa=(a,b,d)=>{if(b.$members$){a.watchers&&(b.$watchers$=a.watchers);d=Object.entries(b.$members$);const c=
a.prototype;d.map(([f,[g]])=>{(g&31||g&32)&&Object.defineProperty(c,f,{get(){return D.get(this).$instanceValues$.get(f)},set(h){Oa(this,f,h,b)},configurable:!0,enumerable:!0})});const e=new Map;c.attributeChangedCallback=function(f,g,h){q.jmp(()=>{const k=e.get(f);if(this.hasOwnProperty(k))h=this[k],delete this[k];else if(c.hasOwnProperty(k)&&"number"===typeof this[k]&&this[k]==h)return;this[k]=null===h&&"boolean"===typeof this[k]?!1:h})};a.observedAttributes=d.filter(([,f])=>f[0]&15).map(([f,g])=>
{const h=g[1]||f;e.set(h,f);g[0]&512&&b.$attrsToReflect$.push([f,h]);return h})}return a},Qa=async(a,b,d,c,e)=>{0===(b.$flags$&32)&&(e=a.constructor,b.$flags$|=32,customElements.whenDefined(d.$tagName$).then(()=>b.$flags$|=128),e.style&&(c=e.style,"string"!==typeof c&&(c=c[b.$modeName$=Ga(a)]),a=fa(d,b.$modeName$),J.has(a)||(e=z("registerStyles",d.$tagName$),Ja(a,c,!!(d.$flags$&1)),e())));b.$ancestorComponent$;R(b,!0)},Sa=a=>{if(0===(q.$flags$&1)){const b=D.get(a),d=b.$cmpMeta$,c=z("connectedCallback",
d.$tagName$);b.$flags$&1?ra(a,b,d.$listeners$):(b.$flags$|=1,d.$flags$&12&&Ra(a),d.$members$&&Object.entries(d.$members$).map(([e,[f]])=>{f&31&&a.hasOwnProperty(e)&&(f=a[e],delete a[e],a[e]=f)}),Qa(a,b,d));c()}},Ra=a=>{const b=a["s-cr"]=w.createComment("");b["s-cn"]=!0;a.insertBefore(b,a.firstChild)},Ta=a=>{0===(q.$flags$&1)&&(a=D.get(a),a.$rmListeners$&&(a.$rmListeners$.map(b=>b()),a.$rmListeners$=void 0))},ra=(a,b,d,c)=>{d&&d.map(([e,f,g])=>{const h=e&4?w:e&8?E:e&16?w.body:a,k=Ua(b,g),l=Va?{passive:0!==
(e&1),capture:0!==(e&2)}:0!==(e&2);q.ael(h,f,k,l);(b.$rmListeners$=b.$rmListeners$||[]).push(()=>q.rel(h,f,k,l))})},Ua=(a,b)=>d=>{try{a.$hostElement$[b](d)}catch(c){(0,console.error)(c,void 0)}},D=new WeakMap,J=new Map,Fa=[],E="undefined"!==typeof window?window:{};null;const w=E.document||{head:{}};U=E.HTMLElement||class{};const q={$flags$:0,$resourcesUrl$:"",jmp:a=>a(),raf:a=>requestAnimationFrame(a),ael:(a,b,d,c)=>a.addEventListener(b,d,c),rel:(a,b,d,c)=>a.removeEventListener(b,d,c),ce:(a,b)=>new CustomEvent(a,
b)},Va=(()=>{let a=!1;try{w.addEventListener("e",null,Object.defineProperty({},"passive",{get(){a=!0}}))}catch(b){}return a})();a:{try{new CSSStyleSheet;var sa="function"===typeof(new CSSStyleSheet).replaceSync;break a}catch(a){}sa=!1}const Ia=sa,ta=[],ua=[],va=a=>{for(let b=0;b<a.length;b++)try{a[b](performance.now())}catch(d){(0,console.error)(d,void 0)}a.length=0},S=()=>{va(ta);va(ua);(O=0<ta.length)&&q.raf(S)},La=((a,b)=>d=>{a.push(d);O||(O=!0,b&&q.$flags$&4?(d=S,Promise.resolve(void 0).then(d)):
q.raf(S))})(ua,!0),wa=()=>za([2,1,1,1,3]),T={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"};(function(){"undefined"!==typeof window&&"undefined"!==typeof location&&"undefined"!==typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?Y():document.addEventListener("DOMContentLoaded",()=>Y(),{once:!0}))})();m.Build={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1};m.CSS_UTILITY=T;
m.Fragment=(a,b)=>b;m.H=U;m.Host=ca;m.TEXT={loading:"Loading"};m.closestElementCrossShadowBoundary=M;m.commitAssetPath=function(){q.$resourcesUrl$=ya.makeAbsolute(xa.getAssetUrl("esri/widgets/support/components/assets"))};m.containsCrossShadowBoundary=function(a,b){return!!Aa(b,d=>d===a?!0:void 0)};m.createEvent=(a,b,d)=>({emit:c=>{c=q.ce(b,{bubbles:!!(d&4),composed:!!(d&2),cancelable:!!(d&1),detail:c});a.dispatchEvent(c);return c}});m.ensureId=function(a){return a?a.id=a.id||`${a.tagName.toLowerCase()}-${wa()}`:
""};m.filterDirectChildren=function(a,b){return Array.from(a.children).filter(d=>d.matches(b))};m.focusElement=async function(a){if(a)return W(a)?a.setFocus():a.focus()};m.forceUpdate=a=>{a=D.get(a);const b=a.$hostElement$.isConnected;b&&2===(a.$flags$&18)&&R(a,!1);return b};m.getAssetPath=a=>{a=new URL(a,q.$resourcesUrl$);return a.origin!==E.location.origin?a.href:a.pathname};m.getElementDir=function(a){return(a=M(a,"[dir]"))?a.getAttribute("dir"):"ltr"};m.getElementProp=function(a,b,d){return(a=
a.closest(`[${b}]`))?a.getAttribute(b):d};m.getSlotted=function(a,b,d){b&&!Array.isArray(b)&&"string"!==typeof b&&(d=b,b=null);b=b?Array.isArray(b)?b.map(c=>`[slot="${c}"]`).join(","):`[slot="${b}"]`:":not([slot])";return(null===d||void 0===d?0:d.all)?Ba(a,b,d):Ca(a,b,d)};m.getThemeName=function(a){a=M(a,`.${T.darkTheme}, .${T.lightTheme}`);return(null===a||void 0===a?0:a.classList.contains("calcite-theme-dark"))?"dark":"light"};m.guid=wa;m.h=Q;m.intersects=function(a,b){return!(b.left>a.right||b.right<
a.left||b.top>a.bottom||b.bottom<a.top)};m.isCalciteFocusable=W;m.isPrimaryPointerButton=function(a){return!(!a.isPrimary||0!==a.button)};m.nodeListToArray=function(a){return Array.isArray(a)?a:Array.from(a)};m.proxyCustomElement=(a,b)=>{const d={$flags$:b[0],$tagName$:b[1]};d.$members$=b[2];d.$listeners$=b[3];d.$watchers$=a.$watchers$;d.$attrsToReflect$=[];const c=a.prototype.connectedCallback,e=a.prototype.disconnectedCallback;Object.assign(a.prototype,{__registerHost(){const f={$flags$:0,$hostElement$:this,
$cmpMeta$:d,$instanceValues$:new Map};ra(this,f,d.$listeners$);D.set(this,f)},connectedCallback(){Sa(this);c&&c.call(this)},disconnectedCallback(){Ta(this);e&&e.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(d.$flags$&16)})}});a.is=d.$tagName$;return Pa(a,d)};m.queryElementRoots=function(a,{selector:b,id:d}){function c(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var f=e.getRootNode();e=d?"getElementById"in f?f.getElementById(d):null:b?f.querySelector(b):
null;f=f.host||null;return e?e:f?c(f):null}return c(a)};m.setRequestedIcon=function(a,b,d){if("string"===typeof b&&""!==b)return b;if(""===b)return a[d]};m.toAriaBoolean=function(a){return(!!a).toString()}});