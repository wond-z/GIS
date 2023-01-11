/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{i as o}from"./maybe.js";import{throwIfAborted as r,whenOrAbort as i}from"../core/promiseUtils.js";import{watch as s,initial as p}from"../core/reactiveUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{m,h as l}from"./elevationInfoUtils.js";import{m as j,g as c}from"./RightAngleSnappingHint.js";import{c as g,m as y}from"./queryEngineUtils.js";import{g as u,a as d,b as h}from"./symbologySnappingCandidates.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./object.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/Error.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"./writer.js";import"./Ellipsoid.js";import"./vec3.js";import"./common.js";import"./SnappingManager.js";import"../core/Evented.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"../geometry/projection.js";import"./mathUtils.js";import"./SimpleObservable.js";import"./mat4.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"./pe.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./vec2.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"../geometry/support/jsonUtils.js";import"./ItemCache.js";import"./MemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./projectionSupport.js";import"./json.js";import"./SnappingCandidate.js";import"./utils21.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils4.js";import"./utils5.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"./vec2f64.js";import"./Settings2.js";import"./geometry2dUtils.js";import"./viewUtils.js";import"./screenUtils.js";import"../core/Collection.js";import"./shared.js";import"../views/interactive/snapping/SnappingOptions.js";import"../views/interactive/snapping/FeatureSnappingLayerSource.js";import"./VertexSnappingCandidate.js";import"./PointSnappingHint.js";import"./LRUCache.js";let S=class extends e{constructor(t){super(t),this.view=null,this._layerView3D=null}get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:t}=this,{layer:e}=this.layerSource,r=o(t)&&"3d"===t.type;return r&&"subtype-group"!==e.type?u(r,{elevationInfo:e.elevationInfo,alignPointsInFeatures:async(o,r)=>(await i(t.whenLayerView(e),r)).elevationAlignPointsInFeatures(o,r),spatialReference:t.spatialReference}):u()}get _snappingElevationFilter(){const{view:t}=this,e=o(t)&&"3d"===t.type&&"subtype-group"!==this.layerSource.layer.type;return d(e)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:e}=this.layerSource;return o(t)&&"3d"===t.type&&"subtype-group"!==e.type?h(this._symbologySnappingSupported,(async(o,i)=>{const s=await t.whenLayerView(e);return r(i),s.queryForSymbologySnapping({candidates:o,spatialReference:t.spatialReference},i)})):h()}get _symbologySnappingSupported(){return o(this._layerView3D)&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:t}=this,{layer:e}=this.layerSource;o(t)&&"3d"===t.type&&"subtype-group"!==e.type&&(t.whenLayerView(e).then((t=>this._layerView3D=t)),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:o}=e;m(t,o)&&this._snappingElevationAligner.notifyElevationSourceChange()})),s((()=>e.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),p),s((()=>o(this._layerView3D)?this._layerView3D.processor?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),p)]))}refresh(){}async fetchCandidates(t,e){const{layer:o}=this.layerSource,{coordinateHelper:i,elevationInfo:s}=t,p=o.source;if(!p.querySnapping)return[];const n=j(o),a=c(t,n),m=await p.querySnapping(a,{signal:e});r(e);const y=await this._snappingElevationAligner.alignCandidates(m.candidates,e);r(e);const u=await this._symbologySnappingFetcher.fetch(y,e);r(e);const d=0===u.length?y:[...y,...u],h=this._snappingElevationFilter.filter(a,d),S=i.hasZ()?l:s,v=this._getGroundElevation;return h.map((t=>g(t,i,S,v)))}get _getGroundElevation(){return y(this.view)}};t([n({constructOnly:!0})],S.prototype,"layerSource",void 0),t([n({constructOnly:!0})],S.prototype,"view",void 0),t([n()],S.prototype,"_snappingElevationAligner",null),t([n()],S.prototype,"_snappingElevationFilter",null),t([n()],S.prototype,"_symbologySnappingFetcher",null),t([n()],S.prototype,"_layerView3D",void 0),t([n()],S.prototype,"_symbologySnappingSupported",null),t([n()],S.prototype,"_getGroundElevation",null),S=t([a("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],S);export{S as FeatureCollectionSnappingSource};
