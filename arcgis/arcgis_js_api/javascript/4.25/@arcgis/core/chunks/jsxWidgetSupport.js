/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{m as e}from"./handleUtils.js";const t=Symbol("widget"),n=[],r={},o=new WeakMap;function i(e,t){let o=t.children;if(o&&o.length)for(let t=0;t<o.length;++t)o[t]=i(e,o[t]);else o=n;const l=t.vnodeSelector;if(c(l)){const n=t.properties||r,i=n.key||l;return{vnodeSelector:"div",properties:{key:i,afterCreate:d,afterUpdate:s,afterRemoved:a,parentWidget:e,widgetConstructor:l,widgetProperties:{...n,key:i,children:o}},children:void 0,text:void 0,domNode:null}}return t}function d(t,n,r,{parentWidget:i,widgetConstructor:d,widgetProperties:s}){const c=new d(s);c.container=t,o.set(t,c),c.afterCreate?.(c,t),i._internalHandles.add(e((()=>a(t))))}function s(e,t,n,{widgetProperties:r}){const i=o.get(e);i&&(i.set(r),i.afterUpdate?.(i,e))}function a(e){const t=o.get(e);t&&(t.destroy(),o.delete(e))}function c(e){return"function"==typeof e&&e[t]}export{t as W,c as i,i as p};
