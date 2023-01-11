/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"../../renderers/PointCloudClassBreaksRenderer.js";import"../../renderers/PointCloudRenderer.js";import"../../renderers/PointCloudRGBRenderer.js";import"../../renderers/PointCloudStretchRenderer.js";import s from"../../renderers/PointCloudUniqueValueRenderer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/SimpleRenderer.js";import e from"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import o from"../../core/Error.js";import{clone as r}from"../../core/lang.js";import{i as t}from"../../chunks/maybe.js";import{f as i}from"../../chunks/messages.js";import{L as p}from"../../chunks/LegendOptions.js";import{a as n,b as l}from"../../chunks/utils15.js";import{o as m,h as a,v as u,j as c,b as j,p as y,q as d,n as h,d as b}from"../../chunks/utils16.js";import f from"../heuristics/sizeRange.js";import k from"../statistics/uniqueValues.js";import{v as g}from"../../chunks/binningUtils.js";import{g as S,F as v}from"../../chunks/utils11.js";import{b as w,f as U,c as C,g as I,L as T}from"../../chunks/layerUtils2.js";import{cloneScheme as V,getSchemes as M}from"../symbology/type.js";import"../../chunks/tslib.es6.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/ensureType.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/tracking.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/PointSizeSplatAlgorithm.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/writer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/reader.js";import"../../layers/support/fieldUtils.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils3.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../chunks/aaBoundingRect.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../core/urlUtils.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/locale.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalGroup.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/number.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/unitUtils.js";import"../../chunks/projectionEllipsoid.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties2.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/symbolConversion.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4f64.js";import"../../core/reactiveUtils.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils2.js";import"../../chunks/numberUtils.js";import"../../intl.js";import"../../chunks/assets.js";import"../../chunks/utils6.js";import"../../chunks/asyncUtils.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/ItemCache.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/scaleUtils.js";import"../../chunks/spatialStatistics.js";import"../statistics/classBreaks.js";import"../../chunks/statsWorker.js";import"../../chunks/quantizationUtils.js";import"../../chunks/utils13.js";import"../../chunks/generateRendererUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/fieldType.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/FullTextSearch.js";import"../../rest/support/StatisticDefinition.js";import"../statistics/support/predominanceUtils.js";import"../../chunks/utils12.js";import"../../chunks/executeQuery.js";import"../../chunks/executeQueryJSON.js";import"../../chunks/utils4.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils5.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../rest/support/TopFeaturesQuery.js";import"../../rest/support/TopFilter.js";import"../../chunks/Task.js";import"../statistics/summaryStatistics.js";import"../../views/support/colorUtils.js";import"../heuristics/scaleRange.js";import"../../chunks/colors2.js";import"../../chunks/symbologyUtils.js";import"../../chunks/utils17.js";function x(s){if(s.name?.toLowerCase()?.includes(":insufficient-info"))return null;throw s}async function E(s){let e=s.typeScheme,o=null,r=null;const i=await b(s.basemap,s.view);if(o=t(i.basemapId)?i.basemapId:null,r=t(i.basemapTheme)?i.basemapTheme:null,e)return{scheme:V(e),basemapId:o,basemapTheme:r};const p=M({basemap:o,basemapTheme:r,geometryType:s.geometryType,theme:s.theme,worldScale:s.worldScale,view:s.view});return p&&(e=p.primaryScheme,o=p.basemapId,r=p.basemapTheme),{scheme:e,basemapId:o,basemapTheme:r}}function D(s,e){let o;return o=s.label<e.label?-1:s.label>e.label?1:0,o}function P(s,e){let o;return o=s.value<e.value?-1:s.value>e.value?1:0,o}function R(s,e){let o=e.count-s.count;return 0===o&&(o=D(s,e)),o}function z(s,e){let o=e.count-s.count;return 0===o&&(o=P(s,e)),o}function L(s,e,o){let r;"count"===e?(r=z,o&&o.codedValues&&(r=R)):"value"===e&&(r=P,o&&o.codedValues&&(r=D)),r&&s.sort(r)}async function q(s,e){const o=s.uniqueValueInfos,r=await E({basemap:"gray",theme:"point-cloud-class",geometryType:"point",typeScheme:e}),t=r&&r.scheme,i="point-cloud-class"===t.theme,p=i?t.colors:j(t.colors,o.length);return L(o,"value"),o.map(((s,e)=>{const o=s.value;let r=null;return i?(r=p[o],r||(r=p[p.length-1])):r=p[e],{values:[o],color:r,label:s.label}}))}async function F(s){const a=await async function(s){if(!s||!s.layer||!s.field&&!s.valueExpression)throw new o("type-renderer:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(s.valueExpression&&!s.view)throw new o("type-renderer:missing-parameters","View is required when 'valueExpression' is specified");s.forBinning&&g(s,"type-renderer");const e={...s};e.symbolType=e.symbolType||"2d",e.numTypes=null==e.numTypes?10:e.numTypes,e.defaultSymbolEnabled=null==e.defaultSymbolEnabled||e.defaultSymbolEnabled,e.sortBy=null==e.sortBy?"count":e.sortBy,e.sortEnabled=null==e.sortEnabled||e.sortEnabled,e.statistics=r(e.statistics);const i=s.forBinning?w:U,p=C(e.layer,i,s.forBinning);if(e.layer=p,!p)throw new o("type-renderer:invalid-parameters","'layer' must be one of these types: "+I(i).join(", "));const n=t(e.signal)?{signal:e.signal}:null;await p.load(n);const l=p.geometryType;if(e.outlineOptimizationEnabled="polygon"===l&&e.outlineOptimizationEnabled,e.sizeOptimizationEnabled=("point"===l||"multipoint"===l||"polyline"===l)&&e.sizeOptimizationEnabled,"mesh"===l)e.symbolType="3d-volumetric",e.colorMixMode=e.colorMixMode||"replace",e.edgesType=e.edgesType||"none";else{if("3d-volumetric-uniform"===e.symbolType&&"point"!==l)throw new o("type-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(e.symbolType.includes("3d-volumetric")&&(!e.view||"3d"!==e.view.type))throw new o("type-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}const m=await S({field:e.field,field2:e.field2,field3:e.field3,valueExpression:e.valueExpression}),a=u(p,m,"type-renderer:invalid-parameters");if(a)throw a;return e}(s),{layer:c,view:b,signal:T}=a,M={layer:c,field:a.field,field2:a.field2,field3:a.field3,valueExpression:a.valueExpression,returnAllCodedValues:a.returnAllCodedValues,view:b,signal:T},[D,P,R]=await Promise.all([null!=a.statistics?a.statistics:k(M),a.outlineOptimizationEnabled?m({layer:c,view:b,signal:T}).catch(x):null,a.sizeOptimizationEnabled?f({layer:c,view:b,signal:T}).catch(x):null]);return async function(s,o,r,t){const m=await i("esri/smartMapping/t9n/smartMapping"),{field:a,field2:u,field3:c}=o,b=s.uniqueValueInfos,f=o.layer,k=a?f.getField(a):null,g=k?f.getFieldDomain(k.name):null,S=-1===o.numTypes?b.length:o.numTypes,w=f.geometryType,U=await E({basemap:o.basemap,geometryType:w,typeScheme:o.typeScheme,worldScale:o.symbolType.includes("3d-volumetric"),view:o.view}),C=U.scheme,I=new e({field:a,field2:u,field3:c,fieldDelimiter:a&&u?v:null}),T=[],M=[],x={value:null,domain:g,fieldInfo:k};b.forEach(((s,e)=>{x.value=s.value,s.label=n(x);const o=s.value;(null===o||"string"==typeof o&&o.toLowerCase().includes("<null>"))&&T.unshift(e)}));for(const s of T)M.unshift(b.splice(s,1)[0]);if(!1!==o.sortEnabled&&L(b,o.sortBy,g),k&&"date"===k.type){const s=b.filter(((s,e)=>e<S)).map((s=>s.value));x.dateFormatInterval=l(s)}const D=r&&r.opacity;let P=j(C.colors,b.length);const R=y(C,w),z=d(C,w,D);b.forEach(((s,e)=>{x.value=s.value,s.label=n(x),s.symbol=h(w,{type:o.symbolType,color:P[e],size:R,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})),o.valueExpression&&(I.valueExpression=o.valueExpression,I.valueExpressionTitle=o.valueExpressionTitle),o.legendOptions&&(I.legendOptions=new p(o.legendOptions)),P=j(C.colors,S);for(let s=0;s<S;s++){const e=b[s];e&&I.addUniqueValueInfo({value:e.value,label:e.label,symbol:h(w,{type:o.symbolType,color:P[s],size:R,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}})})}o.defaultSymbolEnabled&&(I.defaultSymbol=h(w,{type:o.symbolType,color:C.noDataColor,size:R,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),I.defaultLabel=m.other);for(const s of M)s.symbol=h(w,{type:o.symbolType,color:C.noDataColor,size:R,outline:z,meshInfo:{colorMixMode:o.colorMixMode,edgesType:o.edgesType}}),b.push(s);const q=[],F=I.uniqueValueInfos.length===b.length?-1:I.uniqueValueInfos.length;if(F>-1)for(let s=F;s<b.length;s++)q.push({...b[s]});return r&&r.visualVariables&&r.visualVariables.length&&(I.visualVariables=r.visualVariables.map((s=>s.clone()))),t&&t.minSize&&(I.visualVariables?I.visualVariables.push(t.minSize):I.visualVariables=[t.minSize]),{renderer:I,uniqueValueInfos:b,excludedUniqueValueInfos:q,typeScheme:V(C),basemapId:U.basemapId,basemapTheme:U.basemapTheme}}(D,a,P,R)}async function O(e){const i=await async function(s){if(!(s&&s.layer&&s.field))throw new o("type-point-cloud-class-renderer:missing-parameters","'layer' and 'field' parameters are required");const e={...s};e.statistics=r(e.statistics);const i=[T.PointCloudLayer],p=C(e.layer,i);if(e.layer=p,e.density=e.density||25,e.size=e.size||"100%",!c(e.size))throw new o("type-point-cloud-class-renderer:invalid-parameters","Invalid 'size' parameter. It should be a string of the form '100%'");if(!p)throw new o("type-point-cloud-class-renderer:invalid-parameters","'layer' must be one of these types: "+I(i).join(", "));const n=t(e.signal)?{signal:e.signal}:null;await p.load(n);const l=await S({field:e.field}),m=u(p,l,"type-point-cloud-class-renderer:invalid-parameters");if(m)throw m;return e}(e),p=null!=i.statistics?i.statistics:await k({layer:i.layer,field:i.field,signal:i.signal});return{renderer:new s({field:i.field,pointsPerInch:i.density,pointSizeAlgorithm:a(i.size),colorUniqueValueInfos:await q(p,i.typeScheme)})}}export{O as createPCClassRenderer,F as createRenderer};
