// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Multipoint ../../../geometry/Polygon ../../../geometry/Polyline".split(" "),function(g,c,a,d,n,p,h,k,l,m){a=function(e){function f(b){b=e.call(this,b)||this;b.line=null;b.multipoint=null;b.polygon=null;return b}g._inheritsLoose(f,
e);return f}(a.JSONSupport);c.__decorate([d.property({type:m,json:{write:!0},readOnly:!0})],a.prototype,"line",void 0);c.__decorate([d.property({type:k,json:{read:{source:"point"},write:{target:"point"}},readOnly:!0})],a.prototype,"multipoint",void 0);c.__decorate([d.property({type:l,json:{write:!0},readOnly:!0})],a.prototype,"polygon",void 0);return a=c.__decorate([h.subclass("esri.rest.networks.support.AggregatedGeometry")],a)});