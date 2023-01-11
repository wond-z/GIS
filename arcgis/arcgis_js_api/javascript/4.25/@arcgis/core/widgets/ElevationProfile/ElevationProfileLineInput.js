/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{h as o}from"../../chunks/handleUtils.js";import{a as s,g as r,e as i}from"../../chunks/maybe.js";import{m as n}from"../../chunks/memoize.js";import{watch as p,on as a}from"../../core/reactiveUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{GeometryDescriptor as l}from"../../chunks/ElevationQuery2.js";import{b as u}from"../../chunks/elevationInfoUtils.js";import j from"./ElevationProfileLine.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/watch.js";import"../../chunks/ArrayPool.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../chunks/metadata.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/projectionEllipsoid.js";import"../../geometry/SpatialReference.js";import"../../core/JSONSupport.js";import"../../chunks/writer.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../geometry/projection.js";import"../../chunks/SimpleObservable.js";import"../../chunks/mat4.js";import"../../chunks/pe.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Polygon.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../layers/support/ElevationSampler.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/TileKey.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../core/Evented.js";import"../../chunks/uuid.js";import"../../chunks/vec4f64.js";import"../../chunks/Material.js";import"../../chunks/VertexAttribute.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/basicInterfaces.js";import"../../chunks/ViewingMode.js";import"../../chunks/Util2.js";import"../../chunks/vec2f64.js";import"../../chunks/utils20.js";import"../../chunks/mat4f64.js";import"../../chunks/doublePrecisionUtils.js";let h=class extends j{constructor(e){super(e),this.type="input",this.color=new t("#00c8c8"),this.viewVisualizationEnabled=!1,this.numSamplesForPreview=50,this.numSamplesPerChunk=500,this.chartFillEnabled=!1,this.chartStrokeOffsetY=-1,this._getQueryElevationDependencies=n(((e,t,o,s,i)=>r(e,(e=>({elevationInfo:e,visibleLayers:t,view:o,stationary:s,spatialReference:i})))))}get queryElevationDependencies(){const e=this._viewModel.view;return s(e)?null:this._getQueryElevationDependencies(this._elevationInfo,this._visibleLayers,e,e.stationary,e.spatialReference)}get available(){return!this._viewModel.inputIsSketched}get _elevationInfo(){return r(this._viewModel.input,u)}get _visibleLayers(){const e=this._viewModel?.view,t=r(e,(e=>e.map?.allLayers?.filter((e=>e.visible)).toArray()));return i(t,[])}async queryElevation(e,{noDataValue:t,signal:o}){const r=this.queryElevationDependencies;if(s(r))throw new Error("ElevationProfileLineInput: no dependencies");const{view:n,elevationInfo:p,spatialReference:a}=r;if("on-the-ground"===p.mode&&"3d"===n.type){const s=await l.fromGeometry(e).project(a,o),r=n.elevationProvider;return s.coordinates.forEach((e=>{e.z=i(r.getElevation(e.x,e.y,0,a,"ground"),0)})),{geometry:s.export(),noDataValue:t}}return{geometry:e,noDataValue:t}}attach(e){const t=()=>this._onChange();return o([super.attach(e),p((()=>this.queryElevationDependencies),t),a((()=>e.elevationProvider),"elevation-change",t,{onListenerAdd:t,onListenerRemove:t})])}};e([c({type:t,nonNullable:!0})],h.prototype,"color",void 0),e([c()],h.prototype,"viewVisualizationEnabled",void 0),e([c()],h.prototype,"queryElevationDependencies",null),e([c()],h.prototype,"available",null),e([c()],h.prototype,"_elevationInfo",null),e([c()],h.prototype,"_visibleLayers",null),h=e([m("esri.widgets.ElevationProfile.ElevationProfileLineInput")],h);const k=h;export{k as default};
