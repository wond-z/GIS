// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(g,c,a,h,d,m,n,k,l){a=function(e){function f(b){b=e.call(this,b)||this;b.layerId=null;b.layerUrl=null;b.type="feature-layer";return b}g._inheritsLoose(f,e);return f}(a.ClonableMixin(h.JSONSupport));
c.__decorate([d.property({type:String,json:{write:{overridePolicy(){return{isRequired:null===this.layerUrl}}}}})],a.prototype,"layerId",void 0);c.__decorate([d.property({type:String,json:{write:{overridePolicy(){return{isRequired:null===this.layerId}}}}})],a.prototype,"layerUrl",void 0);c.__decorate([k.enumeration({featureLayer:"feature-layer"},{readOnly:!0})],a.prototype,"type",void 0);return a=c.__decorate([l.subclass("esri.webdoc.geotriggersInfo.FeatureLayerSource")],a)});