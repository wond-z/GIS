// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../geometry/support/normalizeUtils ./networkService ./utils ./route/utils ./support/FeatureSet ./support/ServiceAreaSolveResult".split(" "),function(p,r,t,u,c,v,w,k,x){function m(){m=r._asyncToGenerator(function*(g,a,d){const n=[];var e=[],b={};const h={},q=v.parseUrl(g);({path:g}=q);a.facilities instanceof k&&c.collectGeometries(a.facilities.features,e,"facilities.features",b);a.pointBarriers instanceof k&&c.collectGeometries(a.pointBarriers.features,
e,"pointBarriers.features",b);a.polylineBarriers instanceof k&&c.collectGeometries(a.polylineBarriers.features,e,"polylineBarriers.features",b);a.polygonBarriers instanceof k&&c.collectGeometries(a.polygonBarriers.features,e,"polygonBarriers.features",b);e=yield u.normalizeCentralMeridian(e);for(const f in b){const l=b[f];n.push(f);h[f]=e.slice(l[0],l[1])}if(c.isInputGeometryZAware(h,n)){b=null;try{b=yield c.fetchServiceDescription(g,a.apiKey,d)}catch{}b&&!b.hasZ&&c.dropZValuesOffInputGeometry(h,
n)}for(const f in h)h[f].forEach((l,y)=>{a.get(f)[y].geometry=l});d={...d,query:{...q.query,...w.serviceAreaParametersToQueryParameters(a),f:"json"}};({data:d}=yield t(`${g}/solveServiceArea`,d));return x.fromJSON(d)});return m.apply(this,arguments)}p.solve=function(g,a,d){return m.apply(this,arguments)};Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});