// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request"],function(d,k,m){function e(){e=k._asyncToGenerator(function*(a,b){let c=yield f(a,b);c=c||{};c.layers=c.layers?.filter(l)||[];const g={serviceJSON:c};if(10.5>(c.currentVersion??0))return g;a=yield f(a+"/layers",b);g.layersJSON={layers:a?.layers?.filter(l)||[],tables:a?.tables||[]};return g});return e.apply(this,arguments)}function l(a){return!a.type||"Feature Layer"===a.type}function f(a,b){return h.apply(this,arguments)}
function h(){h=k._asyncToGenerator(function*(a,b){return(yield m(a,{responseType:"json",query:{f:"json",...b?.customParameters,token:b?.apiKey}})).data});return h.apply(this,arguments)}d.fetchFeatureService=function(a,b){return e.apply(this,arguments)};d.fetchService=f;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});