// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./ActionBase".split(" "),function(h,c,f,b,m,k,l){var d;b=d=function(g){function e(a){a=g.call(this,a)||this;a.image=null;a.type="toggle";a.value=!1;return a}h._inheritsLoose(e,g);e.prototype.clone=function(){return new d({active:this.active,className:this.className,disabled:this.disabled,
id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})};return e}(l);c.__decorate([f.property()],b.prototype,"image",void 0);c.__decorate([f.property()],b.prototype,"value",void 0);return b=d=c.__decorate([k.subclass("esri.support.Action.ActionToggle")],b)});