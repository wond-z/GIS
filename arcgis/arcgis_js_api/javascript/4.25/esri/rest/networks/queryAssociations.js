// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../networks/support/typeUtils ../utils ./support/QueryAssociationsResult".split(" "),function(g,h,k,l,e,m){function n(a){const {returnDeletes:c,elements:b,gdbVersion:p,moment:q}=a.toJSON(),r=JSON.stringify(b.map(d=>({globalId:d.globalId,networkSourceId:d.networkSourceId,terminalId:d.terminalId})));a=JSON.stringify(a.associationTypes.map(d=>l.associationTypeKebabDict.toJSON(d)));return{returnDeletes:c,elements:r,types:a,gdbVersion:p,
moment:q}}function f(){f=h._asyncToGenerator(function*(a,c,b){a=e.parseUrl(a);c={...n(c),f:"json"};c=e.encode({...a.query,...c});b=e.asValidOptions(c,{...b,method:"post"});({data:b}=yield k(`${a.path}/associations/query`,b));return b?m.fromJSON(b):null});return f.apply(this,arguments)}g.queryAssociations=function(a,c,b){return f.apply(this,arguments)};Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});