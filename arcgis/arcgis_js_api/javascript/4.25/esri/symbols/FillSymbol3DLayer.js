// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/maybe ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol3DLayer ./edges/utils ./patterns/LineStylePattern3D ./patterns/StylePattern3D ./patterns/utils ./support/colors ./support/Symbol3DFillMaterial ./support/Symbol3DOutline".split(" "),function(p,c,e,d,b,z,q,r,t,u,v,w,x,h,k,y){var f;
b=f=function(l){function g(a){a=l.call(this,a)||this;a.type="fill";a.material=null;a.pattern=null;a.castShadows=!0;a.outline=null;a.edges=null;return a}p._inheritsLoose(g,l);g.prototype.clone=function(){const a={edges:e.isSome(this.edges)?this.edges.clone():null,enabled:this.enabled,material:e.isSome(this.material)?this.material.clone():null,pattern:e.isSome(this.pattern)?this.pattern.clone():null,castShadows:this.castShadows,outline:e.isSome(this.outline)?this.outline.clone():null};return new f(a)};
g.fromSimpleFillSymbol=function(a){const m=a.outline&&a.outline.style&&"inside-frame"!==a.outline.style&&"solid"!==a.outline.style?new v({style:a.outline.style}):null,n={size:a.outline?.width??0,color:(a.outline?.color??h.white).clone(),pattern:m};m&&a.outline?.cap&&(n.patternCap=a.outline.cap);return new f({material:new k.Symbol3DFillMaterial({color:(a.color??h.transparentWhite).clone()}),pattern:a.style&&"solid"!==a.style?new w({style:a.style}):null,outline:n})};return g}(t);c.__decorate([q.enumeration({Fill:"fill"},
{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:k.Symbol3DFillMaterial,json:{write:!0}})],b.prototype,"material",void 0);c.__decorate([d.property(x.symbol3dPatternProperty)],b.prototype,"pattern",void 0);c.__decorate([d.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],b.prototype,"castShadows",void 0);c.__decorate([d.property({type:y.Symbol3DOutline,json:{write:!0}})],b.prototype,"outline",void 0);c.__decorate([d.property(u.symbol3dEdgesProperty)],b.prototype,
"edges",void 0);return b=f=c.__decorate([r.subclass("esri.symbols.FillSymbol3DLayer")],b)});