// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/AsyncUpdate ../../../../core/HandleOwner ../../../../core/Logger ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/fieldUtils".split(" "),function(b,l,d,q,r,t,k,f,x,y,u,m){function n(g){return p.apply(this,arguments)}
function p(){p=l._asyncToGenerator(function*(g){const e=new Set;try{return yield g(e),Array.from(e).sort()}catch(a){return t.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields").error(a),null}});return p.apply(this,arguments)}b.SceneLayerViewRequiredFields=function(g){function e(a){return g.call(this,a)||this}l._inheritsLoose(e,g);e.prototype.initialize=function(){this.layer=this.layerView.layer;this.handles.add([this.autoUpdateAsync("rendererFields",()=>{const {fieldsIndex:a,renderer:c}=
this.layer;return c?n(h=>c.collectRequiredFields(h,a)):null}),this.autoUpdateAsync("labelingFields",()=>{const {layer:a}=this;return a.labelsVisible?n(c=>m.collectLabelingFields(c,a)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const {layer:a,filter:c}=this.layerView;return n(h=>m.collectFilterFields(h,a,c))})])};l._createClass(e,[{key:"requiredFields",get:function(){const {layerView:{layer:{fieldsIndex:a},definitionExpressionFields:c},rendererFields:h,labelingFields:v,viewFilterFields:w}=
this;return m.fixFields(a,[...k.unwrapOr(c,[]),...k.unwrapOr(h,[]),...k.unwrapOr(v,[]),...k.unwrapOr(w,[])])}}]);return e}(q.AsyncUpdateMixin(r.HandleOwner));d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"layerView",void 0);d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"layer",void 0);d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"requiredFields",null);d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"rendererFields",
void 0);d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"labelingFields",void 0);d.__decorate([f.property()],b.SceneLayerViewRequiredFields.prototype,"viewFilterFields",void 0);b.SceneLayerViewRequiredFields=d.__decorate([u.subclass("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],b.SceneLayerViewRequiredFields);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});