// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(h,c,k,a,d,m,n,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.floorField=null;b.viewAllMode=!1;b.viewAllLevelIds=new k;return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({floorField:this.floorField,
viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})};return f}(a.JSONSupport);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"floorField",void 0);c.__decorate([d.property({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0);c.__decorate([d.property({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0);return a=e=c.__decorate([l.subclass("esri.layers.support.LayerFloorInfo")],a)});