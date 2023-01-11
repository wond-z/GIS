// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Error ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../rest/support/Query ../../../symbols/support/utils ./graphics/elevationAlignPointsInFeatures ./graphics/Graphics3DFeatureProcessor ./graphics/QueryEngine ./graphics/queryForSymbologySnapping ./support/HeatmapFeatureProcessor ./support/projectExtentUtils ../webgl-engine/lib/basicInterfaces ../../support/Scheduler".split(" "),
function(q,l,e,p,h,r,f,H,I,t,u,v,w,x,y,z,A,B,C,D,E,F){q.FeatureLikeLayerView3D=d=>{d=function(m){function n(){var a=m.apply(this,arguments)||this;a.controller=null;a.updatePolicy=E.UpdatePolicy.SYNC;a.suspendResumeExtentMode="computed";a.slicePlaneEnabled=!1;a.fullExtentInLocalViewSpatialReference=null;a.suspendResumeExtent=null;a._controllerCreated=!1;a.clippingExtent=null;a.supportsHeightUnitConversion=!0;a._pendingController=null;a.queryEngine=null;return a}l._inheritsLoose(n,m);var c=n.prototype;
c.initialize=function(){var a=this;const b=this.layer;if("isTable"in b&&b.isTable)this.addResolvingPromise(Promise.reject(new p("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:b})));else{this.addResolvingPromise(this._validateGeometryType());this.updatingHandles.add(()=>this.layer.renderer,k=>this._recreateProcessor(k),r.initial);this.addResolvingPromise(l._asyncToGenerator(function*(){const k=yield D.toViewIfLocal(a);a.fullExtentInLocalViewSpatialReference=
k;yield a._initializeController()})());this.updatingHandles.add(()=>this.updatePolicy,k=>this.processor.preferredUpdatePolicy=k);var g=()=>this.processor.featureStore;this.queryEngine=new A.QueryEngine({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return g()},hasZ:this.hasZ,hasM:this.hasM},priority:F.TaskPriority.FEATURE_QUERY_ENGINE});this.notifyChange("updating")}};c.destroy=function(){this._destroyPendingController();
this.controller=h.destroyMaybe(this.controller);this._set("processor",h.destroyMaybe(this.processor));this.queryEngine=h.destroyMaybe(this.queryEngine);this.loadedGraphics=null};c._destroyPendingController=function(){this._pendingController=h.destroyMaybe(this._pendingController)};c.getHit=function(a){let b=null;this.loadedGraphics?.forEach(g=>{g.uid===a&&(b=u.hydrateGraphic(g,this.layer))});return b?{type:"graphic",graphic:b,layer:b.layer}:null};c.whenGraphicBounds=function(a,b){return this.processor?.whenGraphicBounds(a,
b)};c.computeAttachmentOrigin=function(a,b){return this.processor?.computeAttachmentOrigin(a,b)};c.elevationAlignPointsInFeatures=function(){var a=l._asyncToGenerator(function*(b,g){const k=this.graphics3DProcessor;if(h.isNone(k))throw new p("featurelayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");return y.elevationAlignPointsInFeatures(this.view,this.layer,G=>k.getGraphics3DGraphicByObjectId(G),b,g)});return function(b,g){return a.apply(this,arguments)}}();
c.queryForSymbologySnapping=function(){var a=l._asyncToGenerator(function*(b,g){return this.symbologySnappingSupported?B.queryForSymbologySnapping(this.graphics3DProcessor,b,g):{candidates:[],sourceCandidateIndices:[]}});return function(b,g){return a.apply(this,arguments)}}();c.queryFeatures=function(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),h.get(b,"signal"))};c.queryObjectIds=function(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),h.get(b,"signal"))};c.queryFeatureCount=
function(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),h.get(b,"signal"))};c.queryExtent=function(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),h.get(b,"signal"))};c._ensureQuery=function(a){return h.isNone(a)?this.createQuery():w.from(a)};c.highlight=function(a){return this.processor.highlight(a,this.layer.objectIdField)};c.maskOccludee=function(a){return this.processor.maskOccludee(a)};c.canResume=function(){return m.prototype.canResume.call(this)&&
!this.processor?.scaleVisibilitySuspended};c.getSuspendInfo=function(){const a=m.prototype.getSuspendInfo.call(this);return this.processor?{...a,...this.processor.suspendInfo}:a};c.isUpdating=function(){return!this.processor||this.processor.destroyed?!1:!(this._controllerCreated&&!this.controller?.updating&&this.view?.basemapTerrain?.ready&&!this.processor.updating)};c._initializeController=function(){var a=l._asyncToGenerator(function*(){const b=this.createController();this._pendingController=b;
yield b.when();this._setControllerWhenInitialized(b)});return function(){return a.apply(this,arguments)}}();c._setControllerWhenInitialized=function(){var a=l._asyncToGenerator(function*(b){try{yield this.when()}catch(g){}this._controllerCreated=!0;this.notifyChange("updating");!this.isResolved()||this.destroyed?this._destroyPendingController():(yield r.whenOnce(()=>this.view?.basemapTerrain?.ready),this.beforeSetController(b),this._pendingController=null,this.controller=b,this.loadedGraphics=b.graphics,
this.notifyChange("updating"))});return function(b){return a.apply(this,arguments)}}();c._updateClippingExtent=function(a){this.clippingExtent=a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=a,!0}};c._validateGeometryType=function(){var a=l._asyncToGenerator(function*(){switch(this.layer.geometryType){case "multipatch":case "multipoint":throw new p("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",
{geometryType:this.layer.geometryType});}});return function(){return a.apply(this,arguments)}}();c._recreateProcessor=function(a){var b="heatmap"===a?.type;const g="heatmap"===this.processor?.type;a=this.processor;a&&b===g||(b=b?new C.HeatmapFeatureProcessor({owner:this}):new z({owner:this,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.updatePolicy,updateClippingExtent:k=>
this._updateClippingExtent(k)}),this._set("processor",b),a?.destroy(),this.queryEngine?.clear(),this.addResolvingPromise(b.initializePromise))};c._getResourceInfo=function(){const a=this.controller instanceof v.FeatureTileController3D?this.controller:null;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:a?.maximumNumberOfFeatures??-1,totalNumberOfFeatures:a?.serviceDataCount??-1,nodes:0,...this.processor.performanceInfo}};l._createClass(n,[{key:"legendEnabled",get:function(){return this.canResume()&&
this.processor?.legendEnabled}},{key:"graphics3DProcessor",get:function(){return"graphics-3d"===this.processor?.type?this.processor:null}},{key:"heatmapProcessor",get:function(){return"heatmap"===this.processor?.type?this.processor:null}},{key:"symbologySnappingSupported",get:function(){return this.layer?.renderer?.getSymbols()?.some(x.symbolHasExtrudeSymbolLayer)??!1}},{key:"performanceInfo",get:function(){return this._getResourceInfo()}}]);return n}(d);e.__decorate([f.property()],d.prototype,"loadedGraphics",
void 0);e.__decorate([f.property()],d.prototype,"suspended",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"legendEnabled",null);e.__decorate([f.property()],d.prototype,"updating",void 0);e.__decorate([f.property()],d.prototype,"controller",void 0);e.__decorate([f.property()],d.prototype,"processor",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"updatePolicy",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspendResumeExtentMode",void 0);e.__decorate([f.property({type:Boolean})],
d.prototype,"slicePlaneEnabled",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"suspendInfo",void 0);e.__decorate([f.property()],d.prototype,"graphics3DProcessor",null);e.__decorate([f.property()],d.prototype,"heatmapProcessor",null);e.__decorate([f.property()],d.prototype,"symbologySnappingSupported",null);return d=e.__decorate([t.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],d)};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});