// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,a,f,l,m,k){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.field=null;b.order=null;return b}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({field:this.field,order:this.order})};return e}(a.JSONSupport);
c.__decorate([f.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);c.__decorate([f.property({type:["asc","desc"],json:{write:!0}})],a.prototype,"order",void 0);return a=d=c.__decorate([k.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],a)});