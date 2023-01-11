// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../patterns/utils ./materialUtils ./symbolLayerUtils3D".split(" "),function(b,l,c,m,n,e,p,d,u,v,q,r,h,t){var f;b.Symbol3DOutline=f=function(k){function g(a){a=k.call(this,a)||this;a.color=new m([0,
0,0,1]);a.size=p.px2pt(1);a.pattern=null;a.patternCap="butt";return a}l._inheritsLoose(g,k);g.prototype.clone=function(){const a={color:e.isSome(this.color)?this.color.clone():null,size:this.size,pattern:e.isSome(this.pattern)?this.pattern.clone():null,patternCap:this.patternCap};return new f(a)};return g}(n.JSONSupport);c.__decorate([d.property(h.colorAndTransparencyProperty)],b.Symbol3DOutline.prototype,"color",void 0);c.__decorate([d.property(h.screenSizeProperty)],b.Symbol3DOutline.prototype,
"size",void 0);c.__decorate([d.property(r.symbol3dLinePatternProperty)],b.Symbol3DOutline.prototype,"pattern",void 0);c.__decorate([d.property({type:t.lineCaps,json:{default:"butt",write:{overridePolicy(){return{enabled:e.isSome(this.pattern)}}}}})],b.Symbol3DOutline.prototype,"patternCap",void 0);b.Symbol3DOutline=f=c.__decorate([q.subclass("esri.symbols.support.Symbol3DOutline")],b.Symbol3DOutline);Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});