// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){let h=(f,b,a)=>{for(let d=0,e=b.length;d<e;d++){let c=b[d];Array.isArray(c)?h(f,c,a):null!==c&&void 0!==c&&!1!==c&&("string"===typeof c&&(c={vnodeSelector:"",properties:void 0,children:void 0,text:c.toString(),domNode:null}),a.push(c))}};g.h=function(f,b,a){if(Array.isArray(b))a=b,b=void 0;else if(b&&("string"===typeof b||b.hasOwnProperty("vnodeSelector"))||a&&("string"===typeof a||a.hasOwnProperty("vnodeSelector")))throw Error("h called with invalid arguments");let d,
e;a&&1===a.length&&"string"===typeof a[0]?d=a[0]:a&&(e=[],h(f,a,e),0===e.length&&(e=void 0));return{vnodeSelector:f,properties:b,children:e,text:""===d?void 0:d,domNode:null}};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});