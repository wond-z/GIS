// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/has ../../../../core/Logger ../SnappingDomain ../snappingUtils ./SnappingHint".split(" "),function(d,h,e,t,k,f,l){e=function(g){function c(a,m,n,b,p=k.SnappingDomain.ALL,q=!0,r=!0){b=g.call(this,b,p)||this;b.type=a;b.lineStart=m;b.lineEnd=n;b.fadeLeft=q;b.fadeRight=r;return b}h._inheritsLoose(c,g);c.prototype.equals=function(a){return a instanceof c?this.type===a.type&&f.objectEqual(this.lineStart,a.lineStart)&&f.objectEqual(this.lineEnd,
a.lineEnd)&&this.fadeLeft===a.fadeLeft&&this.fadeRight===a.fadeRight:!1};return c}(l.SnappingHint);d.LineSnappingHint=e;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});