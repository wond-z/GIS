// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(k,c,a,f,m,n,l){var d;a=d=function(g){function e(b){b=g.call(this,b)||this;b.type="virtual";b.directShadowsEnabled=!1;return b}k._inheritsLoose(e,g);var h=e.prototype;h.clone=function(){return new d(this.cloneConstructProperties())};h.cloneConstructProperties=
function(){return{directShadowsEnabled:this.directShadowsEnabled}};return e}(a.JSONSupport);c.__decorate([f.property({readOnly:!0,type:["virtual"],json:{write:!0}})],a.prototype,"type",void 0);c.__decorate([f.property({type:Boolean,json:{default:!1,name:"directShadows",write:!0}})],a.prototype,"directShadowsEnabled",void 0);return a=d=c.__decorate([l.subclass("esri.webscene.VirtualLighting")],a)});