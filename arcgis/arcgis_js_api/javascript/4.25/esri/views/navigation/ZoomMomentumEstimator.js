// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./Momentum","./MomentumEstimator"],function(g,k,h,m){let l=function(b){function d(a,c,e){return b.call(this,a,c,e)||this}k._inheritsLoose(d,b);var f=d.prototype;f.value=function(a){a=b.prototype.value.call(this,a);return Math.exp(a)};f.valueDelta=function(a,c){const e=b.prototype.value.call(this,a);a=b.prototype.value.call(this,a+c);return Math.exp(a-e)};return d}(h.Momentum);h=function(b){function d(a=2.5,c=.01,e=.95,n=12){return b.call(this,
a,c,e,n)||this}k._inheritsLoose(d,b);var f=d.prototype;f.add=function(a,c){b.prototype.add.call(this,Math.log(a),c)};f.createMomentum=function(a,c,e){return new l(a,c,e)};return d}(m.MomentumEstimator);g.ZoomMomentum=l;g.ZoomMomentumEstimator=h;Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});