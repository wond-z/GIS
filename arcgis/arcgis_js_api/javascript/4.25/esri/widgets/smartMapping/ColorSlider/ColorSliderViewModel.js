// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/Error ../../../core/has ../../../core/accessorSupport/decorators/subclass ../SmartMappingPrimaryHandleSliderViewModel".split(" "),function(h,k,a,n,p,q,r,l,m){a=function(e){function b(c){return e.call(this,c)||this}h._inheritsLoose(b,e);b.prototype.getStopInfo=function(){const {min:c,max:f,stops:d}=this;return d&&d.length?d.map(g=>
({color:g.color,offset:(f-g.value)/(f-c)})):[]};return b}(m);return a=k.__decorate([l.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],a)});