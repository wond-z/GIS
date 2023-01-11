/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{a as t,i as n}from"../chunks/maybe.js";class e{constructor(t=1){this._seed=t}set seed(t){this._seed=t??Math.random()*e._m}getInt(){return this._seed=(e._a*this._seed+e._c)%e._m,this._seed}getFloat(){return this.getInt()/(e._m-1)}getIntRange(t,n){return Math.round(this.getFloatRange(t,n))}getFloatRange(t,n){const r=n-t;return t+this.getInt()/e._m*r}}function r(t){if(!t)return;const n=t.length;return n>0?t[n-1]:void 0}function o(t){return t}function c(t,n=o){return function(t,n=o){if(!t||0===t.length)return;let e=t[0],r=n(e);for(let o=1;o<t.length;++o){const c=t[o],f=Number(n(c));f>r&&(r=f,e=c)}return e}(t,(t=>-n(t)))}function f(t,n){return n?t.filter(((t,e,r)=>r.findIndex(n.bind(null,t))===e)):t.filter(((t,n,e)=>e.indexOf(t)===n))}function u(n,e,r){if(t(n)&&t(e))return!0;if(t(n)||t(e)||n.length!==e.length)return!1;if(r){for(let t=0;t<n.length;t++)if(!r(n[t],e[t]))return!1}else for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function s(t,n){let e=t.length!==n.length;e&&(t.length=n.length);for(let r=0;r<n.length;++r)t[r]!==n[r]&&(t[r]=n[r],e=!0);return e}function i(t,n,e){let r,o;return e?(r=n.filter((n=>!t.some((t=>e(t,n))))),o=t.filter((t=>!n.some((n=>e(n,t)))))):(r=n.filter((n=>!t.includes(n))),o=t.filter((t=>!n.includes(t)))),{added:r,removed:o}}function a(t){return t&&"number"==typeof t.length}function l(t,n){const e=t.length;if(0===e)return[];const r=[];for(let o=0;o<e;o+=n)r.push(t.slice(o,o+n));return r}e._m=2147483647,e._a=48271,e._c=0;const h=!!Array.prototype.fill;function g(t,n){if(h)return new Array(t).fill(n);const e=new Array(t);for(let r=0;r<t;r++)e[r]=n;return e}function y(t,n){void 0===n&&(n=t,t=0);const e=new Array(n-t);for(let r=t;r<n;r++)e[r-t]=r;return e}function m(t,n,e){const r=t.length;let o=0,c=r-1;for(;o<c;){const e=o+Math.floor((c-o)/2);n>t[e]?o=e+1:c=e}const f=t[o];return e?n>=t[r-1]?-1:f===n?o:o-1:f===n?o:-1}function p(t,n,e){if(!t||0===t.length)return;const r=t.length-1,o=t[0];if(n<=e(o))return o;const c=t[r];if(n>=e(c))return c;let f=0,u=0,s=r;for(;f<s;){u=f+Math.floor((s-f)/2);const o=t[u],c=e(o);if(c===n)return o;if(n<c){if(u>0){const r=t[u-1],f=e(r);if(n>f)return n-f>=c-n?o:r}s=u}else{if(u<r){const r=t[u+1],f=e(r);if(n<f)return n-c>=f-n?r:o}f=u+1}}return t[u]}class d{constructor(){this.last=0}}const A=new d;function b(t,n,e,r){r=r||A;const o=Math.max(0,r.last-10);for(let c=o;c<e;++c)if(t[c]===n)return r.last=c,c;const c=Math.min(o,e);for(let e=0;e<c;++e)if(t[e]===n)return r.last=e,e;return-1}function M(t,n,e,r){const o=e??t.length,c=b(t,n,o,r);if(-1!==c)return t[c]=t[o-1],null==e&&t.pop(),n}const w=new Set;function O(t,n,e=t.length,r=n.length,o,c){if(0===r||0===e)return e;w.clear();for(let t=0;t<r;++t)w.add(n[t]);o=o||A;const f=Math.max(0,o.last-10);for(let n=f;n<e;++n)if(w.has(t[n])&&(c&&c.push(t[n]),w.delete(t[n]),t[n]=t[e-1],--e,--n,0===w.size||0===e))return w.clear(),e;for(let n=0;n<f;++n)if(w.has(t[n])&&(c&&c.push(t[n]),w.delete(t[n]),t[n]=t[e-1],--e,--n,0===w.size||0===e))return w.clear(),e;return w.clear(),e}function j(t,n,e){const r=t.length;if(n>=r)return t.slice(0);const o=_(e),c=new Set,f=[];for(;f.length<n;){const n=Math.floor(o()*r);c.has(n)||(c.add(n),f.push(t[n]))}return f}function _(t){return t?(N.seed=t,()=>N.getFloat()):Math.random}function I(t,n){const e=_(n);for(let n=t.length-1;n>0;n--){const r=Math.floor(e()*(n+1)),o=t[n];t[n]=t[r],t[r]=o}return t}const N=new e;function v(t,n){const e=t.indexOf(n);return-1!==e?(t.splice(e,1),n):null}function x(t,n){const e=new Map,r=t.length;for(let o=0;o<r;o++){const r=t[o],c=n(r,o,t),f=e.get(c);f?f.push(r):e.set(c,[r])}return e}function T(t,n){if(t.forEach)t.forEach(n);else for(let e=0;e<t.length;e++)n(t[e],e,t)}function F(t,n,e){if(t.slice)return t.slice(n,e);void 0===n?n=0:(n<0&&(n+=t.length),n=Math.min(t.length,Math.max(0,n))),void 0===e?e=t.length:(e<0&&(e+=t.length),e=Math.min(t.length,Math.max(0,e)));const r=Math.max(0,e-n),o=new(0,t.constructor)(r);for(let e=0;e<r;e++)o[e]=t[n+e];return o}function P(t){return t instanceof ArrayBuffer||t&&t.constructor&&"ArrayBuffer"===t.constructor.name}function U(t){return t instanceof Uint8Array||t&&t.constructor&&"Uint8Array"===t.constructor.name}function z(t){return t instanceof Uint8ClampedArray||t&&t.constructor&&"Uint8ClampedArray"===t.constructor.name}function S(t){return t instanceof Int16Array||t&&t.constructor&&"Int16Array"===t.constructor.name}function E(t){return t instanceof Uint16Array||t&&t.constructor&&"Uint16Array"===t.constructor.name}function D(t){return t instanceof Int32Array||t&&t.constructor&&"Int32Array"===t.constructor.name}function k(t){return t instanceof Uint32Array||t&&t.constructor&&"Uint32Array"===t.constructor.name}function B(t){return t instanceof Float32Array||t&&t.constructor&&"Float32Array"===t.constructor.name}function C(t){return t instanceof Float64Array||t&&t.constructor&&"Float64Array"===t.constructor.name}function L(t){const n=new Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e];return n}function R(n){return t(n)?0:128+n.buffer.byteLength+64}function H(t,n){let e;if(n)for(e in t)t.hasOwnProperty(e)&&(void 0===t[e]?delete t[e]:t[e]instanceof Object&&H(t[e],!0));else for(e in t)t.hasOwnProperty(e)&&void 0===t[e]&&delete t[e];return t}function q(t){if(!t||"object"!=typeof t||"function"==typeof t)return t;const e=W(t);if(n(e))return e;if(J(t))return t.clone();if(K(t))return t.map(q);if(Q(t))return t.clone();const r={};for(const n of Object.getOwnPropertyNames(t))r[n]=q(t[n]);return r}function G(t){if(!t||"object"!=typeof t||"function"==typeof t||"HTMLElement"in globalThis&&t instanceof HTMLElement)return t;const e=W(t);if(n(e))return e;if(K(t)){let n=!0;const e=t.map((t=>{const e=G(t);return null!=t&&null==e&&(n=!1),e}));return n?e:null}if(J(t))return t.clone();if(!Q(t)){const n=new(0,Object.getPrototypeOf(t).constructor);for(const e of Object.getOwnPropertyNames(t)){const r=t[e],o=G(r);if(null!=r&&null==o)return null;n[e]=o}return n}return null}function J(t){return"function"==typeof t.clone}function K(t){return"function"==typeof t.map&&"function"==typeof t.forEach}function Q(t){return"function"==typeof t.notifyChange&&"function"==typeof t.watch}function V(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;const n=Object.getPrototypeOf(t);return null===n||n===Object.prototype}function W(t){if((n=t)instanceof Int8Array||n&&n.constructor&&"Int8Array"===n.constructor.name||U(t)||z(t)||S(t)||E(t)||D(t)||k(t)||B(t)||C(t))return F(t);var n;if(t instanceof Date)return new Date(t.getTime());if(t instanceof ArrayBuffer)return t.slice(0,t.byteLength);if(t instanceof Map){const n=new Map;for(const[e,r]of t)n.set(e,q(r));return n}if(t instanceof Set){const n=new Set;for(const e of t)n.add(q(e));return n}return null}function X(t,n){return t===n||"number"==typeof t&&isNaN(t)&&"number"==typeof n&&isNaN(n)||"function"==typeof(t||{}).getTime&&"function"==typeof(n||{}).getTime&&t.getTime()===n.getTime()||!1}function Y(t,n){return t===n||(null==t||"string"==typeof t?t===n:"number"==typeof t?t===n||"number"==typeof n&&isNaN(t)&&isNaN(n):t instanceof Date?n instanceof Date&&t.getTime()===n.getTime():Array.isArray(t)?Array.isArray(n)&&u(t,n):t instanceof Set?n instanceof Set&&function(t,n){if(t.size!==n.size)return!1;for(const e of t)if(!n.has(e))return!1;return!0}(t,n):t instanceof Map?n instanceof Map&&function(t,n){if(t.size!==n.size)return!1;for(const[e,r]of t){const t=n.get(e);if(t!==r||void 0===t&&!n.has(e))return!1}return!0}(t,n):!!V(t)&&V(n)&&function(t,n){if(null===t||null===n)return!1;const e=Object.keys(t);if(null===n||Object.keys(n).length!==e.length)return!1;for(const r of e)if(t[r]!==n[r]||!Object.prototype.hasOwnProperty.call(n,r))return!1;return!0}(t,n))}export{T as A,p as B,c as C,r as D,x as E,I as F,d as P,e as R,O as a,M as b,S as c,q as clone,D as d,u as e,X as equals,Y as equalsShallow,m as f,H as fixJson,g,P as h,b as i,Q as isAccessorLike,V as isPlainObject,z as j,E as k,k as l,a as m,s as n,F as o,j as p,U as q,v as r,l as s,R as t,G as tryClone,W as tryCloneBuiltInObject,f as u,L as v,B as w,C as x,i as y,y as z};
