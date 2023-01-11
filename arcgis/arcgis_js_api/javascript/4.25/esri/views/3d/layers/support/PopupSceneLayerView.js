// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Error ../../../../core/maybe ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../layers/support/fieldUtils ../../../layers/support/popupUtils".split(" "),function(p,h,v,q,r,x,y,z,A,w,t,k){p.PopupSceneLayerView=e=>{e=function(u){function l(){return u.apply(this,arguments)||
this}h._inheritsLoose(l,u);var m=l.prototype;m._validateFetchPopupFeatures=function(c){const {layer:a}=this,{popupEnabled:b}=a;if(!b)return new q("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:a});if(!k.getFetchPopupTemplate(a,c))return new q("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:a})};m.prepareFetchPopupFeatures=function(){var c=h._asyncToGenerator(function*(a){});return function(a){return c.apply(this,arguments)}}();m.fetchPopupFeatures=
function(){var c=h._asyncToGenerator(function*(a,b){if(a=this._validateFetchPopupFeatures(b))throw a;a=r.isSome(b)?b.clientGraphics:null;if(!a||0===a.length)return[];var f="scene"===this.layer.type&&r.isSome(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer;b=t.unpackFieldNames(this.layer.fieldsIndex,yield k.getRequiredFields(f,k.getFetchPopupTemplate(this.layer,b)));yield this.prepareFetchPopupFeatures(b);f=new Set;const n=[],g=[];for(const d of a)t.populateMissingFields(b,d,f)?g.push(d):
n.push(d);return 0===g.length?n:this.whenGraphicAttributes(g,[...f]).catch(()=>g).then(d=>n.concat(d))});return function(a,b){return c.apply(this,arguments)}}();return l}(e);return e=v.__decorate([w.subclass("esri.views.3d.layers.support.PopupSceneLayerView")],e)};Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});