/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import r from"../core/Error.js";import{i as t}from"./maybe.js";import{throwIfAbortError as s}from"../core/promiseUtils.js";import{removeFile as o,normalize as n}from"../core/urlUtils.js";import a from"../portal/Portal.js";import l from"../portal/PortalQueryParams.js";import{h as f}from"./object.js";const i=()=>!!f("enable-feature:direct-3d-object-feature-layer-display"),u=()=>!!f("enable-feature:SceneLayer-editing"),m={};function y(e,n,f){return e&&t(e.styleUrl)?async function(e,r){try{return{data:(await d(e,r)).data,baseUrl:o(e),styleUrl:e}}catch(e){return s(e),null}}(e.styleUrl,f):e&&t(e.styleName)?function(e,s,o){const n=t(s.portal)?s.portal:a.getDefault();let f;const i=`${n.url} - ${n.user&&n.user.username} - ${e}`;return m[i]||(m[i]=function(e,t,s){return t.load(s).then((()=>{const r=new l({disableExtraQuery:!0,query:`owner:${b} AND type:${j} AND typekeywords:"${e}"`});return t.queryItems(r,s)})).then((({results:t})=>{let o=null;const n=e.toLowerCase();if(t&&Array.isArray(t))for(const e of t){const r=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(r&&e.type===j&&e.owner===b){o=e;break}}if(!o)throw new r("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return o.load(s)}))}(e,n,o).then((e=>(f=e,e.fetchData()))).then((r=>({data:r,baseUrl:f.itemUrl??"",styleName:e})))),m[i]}(e.styleName,n,f):Promise.reject(new r("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function c(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function p(e,r){if("cimRef"===r)return e.cimRef;if(e.formatInfos&&!f("enable-feature:force-wosr"))for(const r of e.formatInfos)if("gltf"===r.type)return r.href;return e.webRef}function d(r,t){const s={responseType:"json",query:{f:"json"},...t};return e(n(r),s)}const b="esri_en",j="Style",h="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";export{h as S,p as a,i as e,y as f,c as m,d as r,u as s};
