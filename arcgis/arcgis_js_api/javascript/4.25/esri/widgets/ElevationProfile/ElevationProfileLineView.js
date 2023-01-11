// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/handleUtils ../../core/maybe ../../core/memoize ../../core/reactiveUtils ../../core/SetUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/vec3 ../../chunks/vec4f64 ../../geometry/projectionEllipsoid ../../geometry/support/ray ../../layers/support/ElevationQuery ../../views/3d/webgl-engine/lib/Intersector ../../views/3d/webgl-engine/lib/IntersectorInterfaces ../../views/3d/webgl-engine/lib/intersectorUtilsConversions ./ElevationProfileLine".split(" "),
function(v,d,B,H,e,I,C,J,K,f,c,X,L,M,D,N,E,O,P,Q,R,S){function T({view:g,inputGraphicUid:h,maxIntersectionDistance:r},a){for(const b of a)if(!(b.distanceInRenderSpace>r)&&(a=R.toGraphic(b,g),e.isNone(a)||F(a)!==h))return b;return null}function F(g){if(g.layer&&"objectIdField"in g.layer){const h=g.attributes[g.layer.objectIdField];if(h)return`o-${g.layer.id}-${h}`}return`u-${g.uid}`}c=function(g){function h(a){a=g.call(this,a)||this;a.type="view";a.color=new B("#cf4ccf");a.viewVisualizationEnabled=
!0;a.include=null;a.exclude=null;a.numSamplesForPreview=50;a.numSamplesPerChunk=25;a._getQueryElevationDependencies=I.memoize((b,k,l,m,n,w,t)=>({inputGraphicUid:e.isSome(b)?F(b):null,visibleLayers:k,maxIntersectionDistance:l,intersectOptions:m,view:n,stationary:w,spatialReference:t}));a._vecA=D.create();a._vecB=D.create();a._ray=E.create();return a}v._inheritsLoose(h,g);var r=h.prototype;r.queryElevation=function(){var a=v._asyncToGenerator(function*(b,{noDataValue:k,signal:l}){const m=this.queryElevationDependencies;
if(e.isNone(m))throw Error("ElevationProfileLineInput: no dependencies");const n=this._intersector;if(e.isNone(n))throw Error("ElevationProfileLineInput: no view");const {intersectOptions:w,view:t,spatialReference:x}=m,y=t.renderCoordsHelper,U=t.sceneIntersectionHelper,G=this._vecA,u=this._vecA,p=this._vecB,V=this._ray;b=yield O.GeometryDescriptor.fromGeometry(b).project(x,l);l=b.coordinates;const W=l.length;for(let z=0;z<W;++z){const q=l[z];M.set(p,q.x,q.y,q.z??0);y.toRenderCoords(p,x,p);y.setAltitude(G,
2E5,p);var A=E.fromPoints(G,p,V);U.computeIntersection(A,n,w);(A=T(m,n.results.all))?(A.getIntersectionPoint(u),y.fromRenderCoords(u,u,x),q.z=u[2]):q.z=k}return{geometry:b.export(),noDataValue:k}});return function(b,k){return a.apply(this,arguments)}}();r.attach=function(a){const b=()=>this._onChange();return H.handlesGroup([g.prototype.attach.call(this,a),C.watch(()=>this.queryElevationDependencies,b),C.on(()=>a.elevationProvider,"elevation-change",b,{onListenerAdd:b,onListenerRemove:b})])};v._createClass(h,
[{key:"minDemResolution",get:function(){const a=this._viewModel?.view;if(e.isNone(a)||"3d"!==a.type)return null;const b=a.pointsOfInterest?.focus?.renderLocation;return b?a.state.camera.computeRenderPixelSizeAt(b)*K.getMetersPerVerticalUnitForSR(a.spatialReference):null}},{key:"queryElevationDependencies",get:function(){return e.applySome(this._view,a=>this._getQueryElevationDependencies(this._viewModel.input,this._visibleLayers,this._maxIntersectionDistance,this._intersectOptions,a,a.stationary,
a.spatialReference))}},{key:"_visibleLayers",get:function(){const a=e.applySome(this._view,b=>b.map?.allLayers?.filter(k=>k.visible).toArray());return e.unwrapOr(a,[])}},{key:"_intersectOptions",get:function(){var a=this._view;if(e.isNone(a))return{};const b=a.externalToInternalIntersectOptions({include:this.include,exclude:this.exclude});a=a.externalToInternalIntersectOptions({exclude:this._pointCloudLayers});b.exclude=J.union(b.exclude,a.exclude);return b}},{key:"_pointCloudLayers",get:function(){const a=
this._view;return e.isNone(a)?[]:a.allLayerViews.toArray().filter(b=>"point-cloud"===b.layer?.type).map(b=>b.layer)}},{key:"_view",get:function(){const a=this._viewModel.view;return e.isSome(a)&&"3d"===a.type?a:null}},{key:"_maxIntersectionDistance",get:function(){const a=this._view;return e.isNone(a)||!a.renderCoordsHelper?Number.POSITIVE_INFINITY:N.getReferenceEllipsoid(a.spatialReference).radius/a.renderCoordsHelper.unitInMeters}},{key:"_intersector",get:function(){var a=this._view;if(e.isNone(a))return null;
a=P.newIntersector(a.state.viewingMode);const b=a.options;b.hud=!1;b.invisibleTerrain=!1;b.backfacesTerrain=!1;b.selectionMode=!1;b.store=Q.StoreResults.ALL;return a}}]);return h}(S);d.__decorate([f.property({type:B,nonNullable:!0})],c.prototype,"color",void 0);d.__decorate([f.property()],c.prototype,"viewVisualizationEnabled",void 0);d.__decorate([f.property()],c.prototype,"include",void 0);d.__decorate([f.property()],c.prototype,"exclude",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,
"minDemResolution",null);d.__decorate([f.property()],c.prototype,"queryElevationDependencies",null);d.__decorate([f.property()],c.prototype,"_visibleLayers",null);d.__decorate([f.property()],c.prototype,"_intersectOptions",null);d.__decorate([f.property()],c.prototype,"_pointCloudLayers",null);d.__decorate([f.property()],c.prototype,"_view",null);d.__decorate([f.property()],c.prototype,"_maxIntersectionDistance",null);d.__decorate([f.property()],c.prototype,"_intersector",null);return c=d.__decorate([L.subclass("esri.widgets.ElevationProfile.ElevationProfileLineView")],
c)});