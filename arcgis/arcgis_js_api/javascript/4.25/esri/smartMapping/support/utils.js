// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../support/arcadeOnDemand","../../support/basemapUtils"],function(e,r,t,u){function k(){k=r._asyncToGenerator(function*(a){const {field:b,field2:c,field3:d,normalizationField:f,valueExpression:h}=a;a=[];h&&(l||({arcadeUtils:a}=yield t.loadArcade(),l=a),a=l.extractFieldNames(h));b&&a.push(b);c&&a.push(c);d&&a.push(d);f&&a.push(f);return a});return k.apply(this,arguments)}function g(a){return String(a).padStart(2,"0")}function p(a,b,c){if("date"===
b||"number"===b){"number"===b&&(a=new Date(a));b=c?a.getFullYear():a.getUTCFullYear();const d=g((c?a.getMonth():a.getUTCMonth())+1),f=g(c?a.getDate():a.getUTCDate()),h=g(c?a.getHours():a.getUTCHours()),v=g(c?a.getMinutes():a.getUTCMinutes());a=g(c?a.getSeconds():a.getUTCSeconds());a=`TIMESTAMP'${b}-${d}-${f} ${h}:${v}:${a}'`}return a}function m(a,b){if(b instanceof Date)return"date";if("number"===typeof b)return"number";if("string"===typeof b&&(a=a.getField(b),"\x3cnow\x3e"!==b.toLowerCase()&&a&&
"date"===a.type))return"field"}const q={light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector arcgis-light-gray arcgis-navigation arcgis-streets arcgis-streets-relief arcgis-topographic arcgis-oceans osm-standard osm-standard-relief osm-streets osm-streets-relief osm-light-gray arcgis-terrain arcgis-charted-territory arcgis-community arcgis-colored-pencil arcgis-modern-antique arcgis-midcentury arcgis-newspaper arcgis-hillshade-light".split(" "),
dark:"satellite hybrid dark-gray dark-gray-vector streets-night-vector arcgis-imagery arcgis-imagery-standard arcgis-dark-gray arcgis-navigation-night arcgis-streets-night osm-dark-gray arcgis-nova arcgis-hillshade-dark".split(" ")},n={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864E5},w=["integer","small-integer"];let l=null;e.FIELD_DELIMITER=",";e.castIntegerFieldToFloat=function(a){return`cast(${a} as float)`};e.defaultBasemapGroups=q;e.getBasemapGroup=function(a,
b=q){for(const c in b)if(b[c].includes(a))return c};e.getBasemapId=function(a,b,c=!0){let d=null;a&&("string"===typeof a?b.includes(a)&&(d=a):d=u.getWellKnownBasemapId(a));return c?d||"gray":d};e.getDateDiffSQL=function(a,b,c,d){var {hasQueryEngine:f}=a;c=p(c,m(a,c),f);a=p(b,m(a,b),f);a=`(${c} - ${a})`;f&&(a=`(${a} * ${n.milliseconds})`);d=n[d];f="/";1>d&&(d=1/d,f="*");return{sqlExpression:1===d?a:`(${a} ${f} ${d})`,sqlWhere:null}};e.getDateType=m;e.getFieldsList=function(a){return k.apply(this,arguments)};
e.getNormalizationType=function(a){let b=a.normalizationType;b||(a.normalizationField?b="field":null!=a.normalizationTotal&&(b="percent-of-total"));return b};e.isIntegerField=function(a,b){return(a=b&&a.getField(b))&&w.includes(a.type)};e.unitValueInDays=n;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});