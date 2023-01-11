// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../geometry/Extent"],function(c,d){c.cloneGeometry=function(a){if(null==a)return null;const b=a.clone();void 0!==a.cache._geVersion&&(b.cache._geVersion=a.cache._geVersion);return b};c.convertLinearUnitsToCode=function(a){if(null==a)return null;if("number"===typeof a)return a;a=a.toLowerCase();a=a.replace(/\s/g,"");a=a.replace(/-/g,"");switch(a){case "meters":case "meter":case "m":case "squaremeters":case "squaremeter":return 9001;case "miles":case "mile":case "squaremile":case "squaremiles":return 9093;
case "kilometers":case "kilometer":case "squarekilometers":case "squarekilometer":case "km":return 9036;case "yard":case "yd":case "yards":case "squareyards":case "squareyard":return 9096;case "feet":case "ft":case "foot":case "squarefeet":case "squarefoot":return 9002;case "nm":case "nmi":case "nauticalmile":case "nauticalmiles":case "squarenauticalmile":case "squarenauticalmiles":return 9030}return null};c.convertSquareUnitsToCode=function(a){if(null==a)return null;if("number"===typeof a)return a;
a=a.toLowerCase();a=a.replace(/\s/g,"");a=a.replace(/-/g,"");switch(a){case "meters":case "meter":case "m":case "squaremeters":case "squaremeter":return 109404;case "miles":case "mile":case "squaremile":case "squaremiles":return 109439;case "kilometers":case "kilometer":case "squarekilometers":case "squarekilometer":case "km":return 109414;case "acres":case "acre":case "ac":return 109402;case "hectares":case "hectare":case "ha":return 109401;case "yard":case "yd":case "yards":case "squareyards":case "squareyard":return 109442;
case "feet":case "ft":case "foot":case "squarefeet":case "squarefoot":return 109405;case "nm":case "nmi":case "nauticalmile":case "nauticalmiles":case "squarenauticalmile":case "squarenauticalmiles":return 109409}return null};c.sameGeomType=function(a,b){return a===b||"point"===a&&"esriGeometryPoint"===b||"polyline"===a&&"esriGeometryPolyline"===b||"polygon"===a&&"esriGeometryPolygon"===b||"extent"===a&&"esriGeometryEnvelope"===b||"multipoint"===a&&"esriGeometryMultipoint"===b||"point"===b&&"esriGeometryPoint"===
a||"polyline"===b&&"esriGeometryPolyline"===a||"polygon"===b&&"esriGeometryPolygon"===a||"extent"===b&&"esriGeometryEnvelope"===a||"multipoint"===b&&"esriGeometryMultipoint"===a?!0:!1};c.shapeExtent=function(a){if(null==a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;case "point":return new d({xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});