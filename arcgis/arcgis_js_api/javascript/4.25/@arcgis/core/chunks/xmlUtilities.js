/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
function n(e,t){if(!e||!t)return[];let l=t;t.includes("/")?(l=t.slice(0,t.indexOf("/")),t=t.slice(t.indexOf("/")+1)):t="";const r=[];if(t){const u=n(e,l);for(let e=0;e<u.length;e++)n(u[e],t).forEach((n=>r.push(n)));return r}const u=e.getElementsByTagNameNS("*",l);if(!u||0===u.length)return[];for(let n=0;n<u.length;n++)r.push(u[n]||u.item[n]);return r}function e(t,l){if(!t||!l)return null;let r=l;l.includes("/")?(r=l.slice(0,l.indexOf("/")),l=l.slice(l.indexOf("/")+1)):l="";const u=n(t,r);return u.length>0?l?e(u[0],l):u[0]:null}function t(n,t=null){const l=t?e(n,t):n;let r;return l?(r=l.textContent||l.nodeValue,r?r.trim():null):null}function l(e,t){const l=n(e,t),r=[];let u;for(let n=0;n<l.length;n++)u=l[n].textContent||l[n].nodeValue,u&&(u=u.trim(),""!==u&&r.push(u));return r}function r(n,e=null){return t(n,e)?.split(" ").map((n=>Number(n)))??[]}function u(n,e){return l(n,e).map((n=>Number(n)))}function s(n,e){const l=t(n,e);return Number(l)}function o(n,e){const t=n?.nodeName?.toLowerCase(),l=e.toLowerCase();return t.slice(t.lastIndexOf(":")+1)===l}function i(n){return n.nodeName.slice(n.nodeName.lastIndexOf(":")+1)}export{n as a,e as b,s as c,u as d,r as e,l as f,t as g,i as h,o as i};
