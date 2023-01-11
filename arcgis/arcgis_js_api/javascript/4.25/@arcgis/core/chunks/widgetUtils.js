/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{A as t}from"./ArrayPool.js";import{m as e}from"./handleUtils.js";import"./object.js";import{L as r}from"./Logger.js";var i={exports:{}},o={},n={exports:{}},a={};var s=/javascript\s*\:/gim;a.whiteList={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1},a.getDefaultWhiteList=function(){return{"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1}},a.onAttr=function(t,e,r){},a.onIgnoreAttr=function(t,e,r){},a.safeAttrValue=function(t,e){return s.test(e)?"":e};var l=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},c=a,u=function(t,e){var r;";"!==(r=t,t=String.prototype.trimRight?r.trimRight():r.replace(/(\s*$)/g,""))[t.length-1]&&(t+=";");var i=t.length,o=!1,n=0,a=0,s="";function c(){if(!o){var r=l(t.slice(n,a)),i=r.indexOf(":");if(-1!==i){var c=l(r.slice(0,i)),u=l(r.slice(i+1));if(c){var d=e(n,s.length,c,u,r);d&&(s+=d+"; ")}}}n=a+1}for(;a<i;a++){var u=t[a];if("/"===u&&"*"===t[a+1]){var d=t.indexOf("*/",a+2);if(-1===d)break;n=(a=d+1)+1,o=!1}else"("===u?o=!0:")"===u?o=!1:";"===u?o||c():"\n"===u&&c()}return l(s)};function d(t){return null==t}function g(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||c.whiteList,t.onAttr=t.onAttr||c.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||c.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||c.safeAttrValue,this.options=t}g.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onAttr,o=e.onIgnoreAttr,n=e.safeAttrValue;return u(t,(function(t,e,a,s,l){var c=r[a],u=!1;if(!0===c?u=c:"function"==typeof c?u=c(s):c instanceof RegExp&&(u=c.test(s)),!0!==u&&(u=!1),s=n(a,s)){var g,p={position:e,sourcePosition:t,source:l,isWhite:u};return u?d(g=i(a,s,p))?a+":"+s:g:d(g=o(a,s,p))?void 0:g}}))};var p=g;!function(t,e){var r=a,i=p;for(var o in(e=t.exports=function(t,e){return new i(e).process(t)}).FilterCSS=i,r)e[o]=r[o]}(n,n.exports);var f={indexOf:function(t,e){var r,i;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,i=t.length;r<i;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var i,o;if(Array.prototype.forEach)return t.forEach(e,r);for(i=0,o=t.length;i<o;i++)e.call(r,t[i],i,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}},h=n.exports.FilterCSS,m=n.exports.getDefaultWhiteList,b=f,v=new h;function y(t){return t.replace(w,"&lt;").replace(x,"&gt;")}var w=/</g,x=/>/g,k=/"/g,A=/&quot;/g,L=/&#([a-zA-Z0-9]*);?/gim,j=/&colon;?/gim,T=/&newline;?/gim,O=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,I=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,z=/u\s*r\s*l\s*\(.*/gi;function S(t){return t.replace(k,"&quot;")}function C(t){return t.replace(A,'"')}function E(t){return t.replace(L,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function V(t){return t.replace(j,":").replace(T," ")}function F(t){for(var e="",r=0,i=t.length;r<i;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return b.trim(e)}function W(t){return F(t=V(t=E(t=C(t))))}function P(t){return y(t=S(t))}o.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},o.getDefaultWhiteList=function(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}},o.onTag=function(t,e,r){},o.onIgnoreTag=function(t,e,r){},o.onTagAttr=function(t,e,r){},o.onIgnoreTagAttr=function(t,e,r){},o.safeAttrValue=function(t,e,r,i){if(r=W(r),"href"===e||"src"===e){if("#"===(r=b.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(O.lastIndex=0,O.test(r))return""}else if("style"===e){if(I.lastIndex=0,I.test(r))return"";if(z.lastIndex=0,z.test(r)&&(O.lastIndex=0,O.test(r)))return"";!1!==i&&(r=(i=i||v).process(r))}return P(r)},o.escapeHtml=y,o.escapeQuote=S,o.unescapeQuote=C,o.escapeHtmlEntities=E,o.escapeDangerHtml5Entities=V,o.clearNonPrintableCharacter=F,o.friendlyAttrValue=W,o.escapeAttrValue=P,o.onIgnoreTagStripAll=function(){return""},o.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),i=[],o=!1;return{onIgnoreTag:function(n,a,s){if(function(e){return!!r||-1!==b.indexOf(t,e)}(n)){if(s.isClosing){var l="[/removed]",c=s.position+l.length;return i.push([!1!==o?o:s.position,c]),o=!1,l}return o||(o=s.position),"[removed]"}return e(n,a,s)},remove:function(t){var e="",r=0;return b.forEach(i,(function(i){e+=t.slice(r,i[0]),r=i[1]})),e+=t.slice(r)}}},o.stripCommentTag=function(t){for(var e="",r=0;r<t.length;){var i=t.indexOf("\x3c!--",r);if(-1===i){e+=t.slice(r);break}e+=t.slice(r,i);var o=t.indexOf("--\x3e",i);if(-1===o)break;r=o+3}return e},o.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return!(127===e||e<=31&&10!==e&&13!==e)}))).join("")},o.cssFilter=v,o.getDefaultCSSWhiteList=m;var q={},_=f;function B(t){var e,r=_.spaceIndex(t);return e=-1===r?t.slice(1,-1):t.slice(1,r+1),"/"===(e=_.trim(e).toLowerCase()).slice(0,1)&&(e=e.slice(1)),"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}function H(t){return"</"===t.slice(0,2)}var D=/[^a-zA-Z0-9\\_:.-]/gim;function M(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function R(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"'"===r||'"'===r?e:-1}}function $(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function U(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}q.parseTag=function(t,e,r){var i="",o=0,n=!1,a=!1,s=0,l=t.length,c="",u="";t:for(s=0;s<l;s++){var d=t.charAt(s);if(!1===n){if("<"===d){n=s;continue}}else if(!1===a){if("<"===d){i+=r(t.slice(o,s)),n=s,o=s;continue}if(">"===d){i+=r(t.slice(o,n)),c=B(u=t.slice(n,s+1)),i+=e(n,i.length,c,u,H(u)),o=s+1,n=!1;continue}if('"'===d||"'"===d)for(var g=1,p=t.charAt(s-g);""===p.trim()||"="===p;){if("="===p){a=d;continue t}p=t.charAt(s-++g)}}else if(d===a){a=!1;continue}}return o<t.length&&(i+=r(t.substr(o))),i},q.parseAttr=function(t,e){var r=0,i=0,o=[],n=!1,a=t.length;function s(t,r){if(!((t=(t=_.trim(t)).replace(D,"").toLowerCase()).length<1)){var i=e(t,r||"");i&&o.push(i)}}for(var l=0;l<a;l++){var c,u=t.charAt(l);if(!1!==n||"="!==u)if(!1===n||l!==i){if(/\s|\n|\t/.test(u)){if(t=t.replace(/\s|\n|\t/g," "),!1===n){if(-1===(c=M(t,l))){s(_.trim(t.slice(r,l))),n=!1,r=l+1;continue}l=c-1;continue}if(-1===(c=$(t,l-1))){s(n,U(_.trim(t.slice(r,l)))),n=!1,r=l+1;continue}}}else{if(-1===(c=t.indexOf(u,l+1)))break;s(n,_.trim(t.slice(i+1,c))),n=!1,r=(l=c)+1}else n=t.slice(r,l),r=l+1,i='"'===t.charAt(r)||"'"===t.charAt(r)?r:R(t,l+1)}return r<t.length&&(!1===n?s(t.slice(r)):s(n,U(_.trim(t.slice(r))))),_.trim(o.join(" "))};var N=n.exports.FilterCSS,X=o,Z=q,G=Z.parseTag,Q=Z.parseAttr,Y=f;function J(t){return null==t}function K(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=X.onIgnoreTagStripAll),t.whiteList||t.allowList?t.whiteList=function(t){var e={};for(var r in t)Array.isArray(t[r])?e[r.toLowerCase()]=t[r].map((function(t){return t.toLowerCase()})):e[r.toLowerCase()]=t[r];return e}(t.whiteList||t.allowList):t.whiteList=X.whiteList,t.onTag=t.onTag||X.onTag,t.onTagAttr=t.onTagAttr||X.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||X.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||X.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||X.safeAttrValue,t.escapeHtml=t.escapeHtml||X.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new N(t.css))}K.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,i=e.onTag,o=e.onIgnoreTag,n=e.onTagAttr,a=e.onIgnoreTagAttr,s=e.safeAttrValue,l=e.escapeHtml,c=this.cssFilter;e.stripBlankChar&&(t=X.stripBlankChar(t)),e.allowCommentTag||(t=X.stripCommentTag(t));var u=!1;e.stripIgnoreTagBody&&(u=X.StripTagBody(e.stripIgnoreTagBody,o),o=u.onIgnoreTag);var d=G(t,(function(t,e,u,d,g){var p={sourcePosition:t,position:e,isClosing:g,isWhite:Object.prototype.hasOwnProperty.call(r,u)},f=i(u,d,p);if(!J(f))return f;if(p.isWhite){if(p.isClosing)return"</"+u+">";var h=function(t){var e=Y.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=Y.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=Y.trim(t.slice(0,-1))),{html:t,closing:r}}(d),m=r[u],b=Q(h.html,(function(t,e){var r=-1!==Y.indexOf(m,t),i=n(u,t,e,r);return J(i)?r?(e=s(u,t,e,c))?t+'="'+e+'"':t:J(i=a(u,t,e,r))?void 0:i:i}));return d="<"+u,b&&(d+=" "+b),h.closing&&(d+=" /"),d+">"}return J(f=o(u,d,p))?l(d):f}),l);return u&&(d=u.remove(d)),d};var tt=K;!function(t,e){var r=o,i=q,n=tt;function a(t,e){return new n(e).process(t)}(e=t.exports=a).filterXSS=a,e.FilterXSS=n,function(){for(var t in r)e[t]=r[t];for(var o in i)e[o]=i[o]}(),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)}(i,i.exports);var et=function(){function t(t,e){var r,o=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],audio:["autoplay","controls","loop","muted","preload"],b:[],br:[],dd:["style"],div:["align","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],ol:[],p:["style"],source:["media","src","type"],span:["style"],strong:[],sub:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]},this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"],this.arcgisFilterOptions={allowCommentTag:!0,safeAttrValue:function(t,e,r,n){return"a"===t&&"href"===e||("img"===t||"source"===t)&&"src"===e?o.sanitizeUrl(r):i.exports.safeAttrValue(t,e,r,n)}},this._entityMap={"&":"&#x38;","<":"&#x3C;",">":"&#x3E;",'"':"&#x22;","'":"&#x27;","/":"&#x2F;"},t&&!e?r=t:t&&e?(r=Object.create(this.arcgisFilterOptions),Object.keys(t).forEach((function(e){"whiteList"===e?r.whiteList=o._extendObjectOfArrays([o.arcgisWhiteList,t.whiteList||{}]):r[e]=t[e]}))):(r=Object.create(this.arcgisFilterOptions)).whiteList=this.arcgisWhiteList,this.xssFilterOptions=r,this._xssFilter=new i.exports.FilterXSS(r)}return t.prototype.sanitize=function(t,e){switch(void 0===e&&(e={}),typeof t){case"number":return isNaN(t)||!isFinite(t)?null:t;case"boolean":return t;case"string":return this._xssFilter.process(t);case"object":return this._iterateOverObject(t,e);default:if(e.allowUndefined&&void 0===t)return;return null}},t.prototype.sanitizeUrl=function(t,e){var r=(null!=e?e:{}).isProtocolRequired,o=void 0===r||r,n=this._trim(t.substring(0,t.indexOf(":"))),a="/"===t,s=/^#/.test(t),l=n&&this.allowedProtocols.indexOf(n.toLowerCase())>-1;return a||s||l?i.exports.escapeAttrValue(t):n||o?"":i.exports.escapeAttrValue("https://".concat(t))},t.prototype.sanitizeHTMLAttribute=function(t,e,r,o){return"function"==typeof this.xssFilterOptions.safeAttrValue?this.xssFilterOptions.safeAttrValue(t,e,r,o):i.exports.safeAttrValue(t,e,r,o)},t.prototype.validate=function(t,e){void 0===e&&(e={});var r=this.sanitize(t,e);return{isValid:t===r,sanitized:r}},t.prototype.encodeHTML=function(t){var e=this;return String(t).replace(/[&<>"'\/]/g,(function(t){return e._entityMap[t]}))},t.prototype.encodeAttrValue=function(t){var e=/^[a-zA-Z0-9]$/;return String(t).replace(/[\x00-\xFF]/g,(function(r,i){return e.test(r)?r:"&#x".concat(Number(t.charCodeAt(i)).toString(16),";")}))},t.prototype._extendObjectOfArrays=function(t){var e={};return t.forEach((function(t){Object.keys(t).forEach((function(r){Array.isArray(t[r])&&Array.isArray(e[r])?e[r]=e[r].concat(t[r]):e[r]=t[r]}))})),e},t.prototype._iterateOverObject=function(t,e){var r=this;void 0===e&&(e={});try{var i=!1,o=void 0;if(Array.isArray(t))o=t.reduce((function(t,o){var n=r.validate(o,e);return n.isValid?t.concat([o]):(i=!0,t.concat([n.sanitized]))}),[]);else{if(!function(t){if("object"!=typeof t||null===t)return!1;if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t)){if(e.allowUndefined&&void 0===t)return;return null}o=Object.keys(t).reduce((function(o,n){var a=t[n],s=r.validate(a,e);return s.isValid?o[n]=a:(i=!0,o[n]=s.sanitized),o}),{})}return i?o:t}catch(t){return null}},t.prototype._trim=function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},t}();const rt=new Map;function it(){rt.clear()}function ot(t){return rt.get(t)}function nt(t,e){rt.set(t,e)}function at(t){rt.delete(t)}var st,lt,ct=function(t){st||function(t){if("WebkitTransition"in t.style)st="webkitTransitionEnd",lt="webkitAnimationEnd";else{if(!("transition"in t.style))throw new Error("Your browser is not supported!");st="transitionend",lt="animationend"}}(t)},ut=function(t,e){return void 0===e&&(e=t+"-active"),function(r){ct(r);var i=!1,o=function(n){i||(i=!0,r.removeEventListener(st,o),r.removeEventListener(lt,o),r.classList.remove(t),r.classList.remove(e))};r.classList.add(t),r.addEventListener(st,o),r.addEventListener(lt,o),requestAnimationFrame((function(){r.classList.add(e)}))}},dt=function(t,e){return void 0===e&&(e=t+"-active"),function(r,i){ct(r);var o=!1,n=function(t){o||(o=!0,r.removeEventListener(st,n),r.removeEventListener(lt,n),i())};r.classList.add(t),r.addEventListener(st,n),r.addEventListener(lt,n),requestAnimationFrame((function(){r.classList.add(e)}))}};const gt=r.getLogger("esri.widgets.support.widgetUtils");function pt(e){const r=t.acquire();for(let t=0;t<arguments.length;t++){const e=arguments[t],i=typeof e;if("string"===i)r.push(e);else if(Array.isArray(e))r.push.apply(r,e);else if("object"===i)for(const t in e)e[t]&&r.push(t)}const i=r.join(" ");return t.release(r),i}const ft=(()=>{const t=new Map,r=new ResizeObserver((e=>{it();for(const r of e)t.get(r.target)?.(r)}));return(i,o,n)=>(t.has(i)&&gt.error("Already observing element",i),t.set(i,o),r.observe(i,n),e((()=>{r.unobserve(i),t.delete(i)})))})();function ht(t){const e=t?.closest("[dir]");return null!==e&&e instanceof HTMLElement&&"rtl"===e.dir||"rtl"===document.dir}function mt(t){return ht(t)?"rtl":"ltr"}function bt(t){this[t.getAttribute("data-node-ref")]=null}function vt(t){this[t.getAttribute("data-node-ref")]=t}function yt(t,e){return("enter"===t?ut:dt)(e)}const wt=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup","animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"],xt=wt.reduce(((t,e)=>(t[e]=[],t)),{}),kt=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],At=new et({whiteList:xt,onTagAttr:(t,e,r)=>{const i=`${e}="${r}"`;if(kt.includes(e))return i},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function Lt(t,e){const r=t.getBoundingClientRect(),i=e.getBoundingClientRect(),o=r.top+r.height,n=i.top+i.height,a=r.top,s=i.top;(o>n||a<s)&&t.scrollIntoView({block:"end"})}function jt(t){return"Enter"===t||" "===t}export{nt as a,it as b,pt as c,at as d,mt as e,bt as f,ot as g,yt as h,ht as i,wt as j,kt as k,Lt as l,jt as m,ft as o,At as r,vt as s};
