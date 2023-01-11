// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../Viewpoint ../core/Accessor ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/SpatialReference ../webdoc/RangeInfo ./background/ColorBackground".split(" "),function(h,c,k,a,l,d,r,m,n,p,q){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.background=null;b.rangeInfo=null;b.spatialReference=null;b.viewpoint=null;return b}h._inheritsLoose(f,
g);f.prototype.clone=function(){return new e(l.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))};return f}(a);c.__decorate([d.property({type:q})],a.prototype,"background",void 0);c.__decorate([d.property({type:p})],a.prototype,"rangeInfo",void 0);c.__decorate([d.property({type:n})],a.prototype,"spatialReference",void 0);c.__decorate([d.property({type:k})],a.prototype,"viewpoint",void 0);return a=e=c.__decorate([m.subclass("esri.webmap.InitialViewProperties")],
a)});