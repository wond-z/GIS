// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./constants ../../support/AnchorElementViewModel".split(" "),function(g,t,k,u,v,m,n,p,A,B,w,x,y){g.HoveredPoints=function(q){function l(a){a=q.call(this,a)||
this;a._hoveredPoints=new v;return a}t._inheritsLoose(l,q);var h=l.prototype;h.initialize=function(){this._updateScreenLocationsHandle=n.watch(()=>this._hoveredPoints.toArray().map(({anchor:a,element:b})=>({screenLocation:a.screenLocation,element:b})),a=>{for(const {screenLocation:b,element:d}of a)m.applySome(b,({x:e,y:f})=>{d.style.transform=`translate(${e}px, ${f}px)`})},n.syncAndInitial)};h.destroy=function(){this._updateScreenLocationsHandle=m.removeMaybe(this._updateScreenLocationsHandle);this._hoveredPoints.drain(a=>
this._destroyHoveredPoint(a))};h.update=function(a){var b=this.view;const d=this._hoveredPoints,e=a.length;for(;this._hoveredPoints.length>e;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<e;){var f=this._makeHoveredPoint();d.push(f);b.surface.appendChild(f.element)}for(b=0;b<e;++b)f=d.getItemAt(e-1-b),this._updateHoveredPoint(f,a[b])};h._makeHoveredPoint=function(){const {size:a,borderStyle:b,borderColor:d,borderWidth:e,boxShadow:f}=x.getConfig().hoveredPointsStyle,
z=new y({view:this.view,screenLocationEnabled:!0}),r=document.createElement("div"),c=r.style;c.position="absolute";c.top="0";c.left="0";c.contain="strict";c.boxSizing="border-box";c.width=`${a}px`;c.height=`${a}px`;c.marginTop=`-${a/2}px`;c.marginLeft=`-${a/2}px`;c.border=`${b} ${e}px ${d}`;c.borderRadius=`${a}px`;c.boxShadow=f;return{anchor:z,element:r}};h._updateHoveredPoint=function({anchor:a,element:b},d){a.screenLocationEnabled=!0;a.location=d.hoveredPoint;a=b.style;a.display="block";a.background=
d.color.toCss()};h._destroyHoveredPoint=function({anchor:a,element:b}){a.destroy();this.view.surface.removeChild(b)};return l}(u);k.__decorate([p.property()],g.HoveredPoints.prototype,"view",void 0);k.__decorate([p.property()],g.HoveredPoints.prototype,"_hoveredPoints",void 0);g.HoveredPoints=k.__decorate([w.subclass("esri.widgets.ElevationProfile.support.HoveredPoints")],g.HoveredPoints);Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});