// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./BaseFunctionArguments".split(" "),function(h,c,k,l,a,m,n,p){var d;a=d=function(f){function e(){return f.apply(this,arguments)||this}h._inheritsLoose(e,f);var g=e.prototype;g.writeRasters=function(q,r){r.rasters=q.map(b=>
"number"===typeof b||"string"===typeof b?b:b.toJSON())};g.clone=function(){return new d({rasters:k.clone(this.rasters)})};return e}(p);c.__decorate([l.property({json:{write:!0}})],a.prototype,"rasters",void 0);c.__decorate([n.writer("rasters")],a.prototype,"writeRasters",null);return a=d=c.__decorate([m.subclass("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")],a)});