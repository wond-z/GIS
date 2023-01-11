/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{h as o}from"./object.js";import{i as r,a as e}from"./maybe.js";import{whenOrAbort as a}from"../core/promiseUtils.js";import{D as s}from"./DataLayerSource.js";import{a as n}from"./executeQueryJSON.js";import{a as i}from"./executeQueryPBF.js";import f from"../rest/support/FeatureSet.js";import c from"../rest/support/Query.js";async function u(t,o,r,s){return m(t,o,r,s).then((t=>async function(t,o,r,s){if(!p(t,r?.infoFor3D)||e(r.infoFor3D)||!o.assetMaps||!o.features||!o.features.length)return f.fromJSON(o);const{meshFeatureSetFromJSON:n}=await a(import("./meshFeatureSet.js"),s);return n(t,r.infoFor3D,o)}(o,t,r,s)))}async function m(a,f,u,m){const d={...m},D=function(o,a){let n=c.from(o);if(n.sourceSpatialReference=n.sourceSpatialReference||a?.sourceSpatialReference,(a.gdbVersion||a.dynamicDataSource)&&(n=n===o?n.clone():n,n.gdbVersion=o.gdbVersion||a.gdbVersion,n.dynamicDataSource=o.dynamicDataSource?s.from(o.dynamicDataSource):a.dynamicDataSource),r(a.infoFor3D)&&p(o,a?.infoFor3D)){n=n===o?n.clone():n,n.formatOf3DObjects=null;for(const t of a.infoFor3D.queryFormats){if("3D_glb"===t){n.formatOf3DObjects=t;break}"3D_gltf"!==t||n.formatOf3DObjects||(n.formatOf3DObjects=t)}if(!n.formatOf3DObjects)throw new t("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(e(n.outFields)||!n.outFields.includes("*")){n=n===o?n.clone():n,e(n.outFields)&&(n.outFields=[]);const{originX:t,originY:r,originZ:s,translationX:i,translationY:f,translationZ:c,scaleX:u,scaleY:m,scaleZ:l,rotationX:p,rotationY:d,rotationZ:D,rotationDeg:y}=a.infoFor3D.transformFieldRoles;n.outFields.push(t,r,s,i,f,c,u,m,l,p,d,D,y)}}return n}(f,u),y=null!=f.outStatistics?.[0],j=o("featurelayer-pbf-statistics"),F=!y||j;let b;if("pbf"===u.format&&F)try{b=await i(a,D,d)}catch(t){if("query:parsing-pbf"!==t.name)throw t;u.format="json"}return"json"!==u.format&&F||(b=await n(a,D,d)),l(u.fieldsIndex,b.fields),b}function l(t,o){if(r(t)&&r(o))for(const r of o){const o=t.get(r.name);o&&Object.assign(r,o.toJSON())}}function p(t,o){return r(o)&&t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}export{m as a,u as e,l as n};
