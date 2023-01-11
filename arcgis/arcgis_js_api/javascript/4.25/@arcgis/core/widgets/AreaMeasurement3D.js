/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{ignoreAbortErrors as t}from"../core/promiseUtils.js";import{t as e}from"../chunks/unitUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import r from"./Widget.js";import n from"./AreaMeasurement3D/AreaMeasurement3DViewModel.js";import{a as p}from"../chunks/accessibleHandler.js";import{m}from"../chunks/messageBundle.js";import{t as l}from"../chunks/jsxFactory.js";import"../chunks/widgetUtils.js";import"../chunks/object.js";import"../core/Error.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/string.js";import"../chunks/jsonMap.js";import"../chunks/projectionEllipsoid.js";import"../geometry/SpatialReference.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/writer.js";import"../chunks/Ellipsoid.js";import"../intl.js";import"../chunks/number.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../analysis/AreaMeasurementAnalysis.js";import"../chunks/Analysis.js";import"../core/Clonable.js";import"../core/Identifiable.js";import"../geometry/Polygon.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/extentUtils.js";import"../chunks/zmUtils.js";import"../chunks/defaultUnit.js";import"../chunks/hydratedFeatures.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/dehydratedFeatures.js";import"../chunks/byteSizeEstimations.js";import"../chunks/quantizationUtils.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/measurementUtils.js";import"../geometry/geometryEngine.js";import"../chunks/geometryEngineBase.js";import"../chunks/hydrated.js";import"../geometry/projection.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../geometry/support/geodesicUtils.js";import"../chunks/mathUtils2.js";import"../chunks/dragEventPipeline3D.js";import"../chunks/plane.js";import"../chunks/vector.js";import"../chunks/ray.js";import"../chunks/mat3f64.js";import"../chunks/mat4f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/vec4f64.js";import"../chunks/elevationInfoUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/ray2.js";import"../chunks/vec2.js";import"../chunks/Intersector.js";import"../chunks/ViewingMode.js";import"../chunks/boundedPlane.js";import"../chunks/lineSegment.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/quat.js";import"../chunks/vec3f32.js";import"../chunks/sphere.js";import"../chunks/utils20.js";import"../chunks/Util2.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/dragEventPipeline.js";import"../chunks/interfaces3.js";import"../chunks/drawUtils.js";import"../chunks/analysisThemeUtils.js";import"../views/support/colorUtils.js";import"../chunks/manipulatorUtils.js";import"../chunks/compilerUtils.js";import"../chunks/ElevationProvider.js";import"../chunks/basicInterfaces.js";import"../chunks/Camera.js";import"../chunks/frustum.js";import"../chunks/DefaultBufferWriter.js";import"../chunks/Material.js";import"../chunks/VertexAttribute.js";import"../chunks/Octree.js";import"../chunks/InterleavedLayout.js";import"../chunks/BufferView.js";import"../chunks/types.js";import"../chunks/RenderSlot.js";import"../chunks/bufferWriterUtils.js";import"../chunks/triangle.js";import"../chunks/Indices.js";import"../chunks/ShaderTechniqueConfiguration.js";import"../chunks/mat4f32.js";import"../chunks/requestImageUtils.js";import"../chunks/enums3.js";import"../chunks/Texture.js";import"../chunks/context-util.js";import"../chunks/FramebufferObject.js";import"../chunks/VertexElementDescriptor.js";import"../chunks/OrderIndependentTransparency.js";import"../chunks/floatRGBA.js";import"../chunks/graphicUtils.js";import"../chunks/GeometryUtil.js";import"../chunks/ColorMaterial.js";import"../chunks/OutputHighlight.glsl.js";import"../chunks/VertexColor.glsl.js";import"../chunks/ImageMaterial.js";import"../chunks/GLTextureMaterial.js";import"../chunks/NativeLineMaterial.js";import"../chunks/InteractiveAnalysisViewModel.js";import"../chunks/asyncUtils.js";import"../chunks/InteractiveToolViewModel.js";import"../chunks/LaserlineVisualElement.js";import"../chunks/VisualElement.js";import"../chunks/glUtil.js";import"../chunks/CameraSpace.glsl.js";import"../chunks/AnalysisToolBase.js";import"../chunks/screenUtils2.js";const a="esri-area-measurement-3d",u={buttonDisabled:"esri-button--disabled",base:`${a} esri-widget esri-widget--panel`,container:`${a}__container`,hint:`${a}__hint`,hintText:`${a}__hint-text`,panelError:`${a}__panel--error`,measurement:`${a}__measurement`,measurementItem:`${a}__measurement-item`,measurementItemDisabled:`${a}__measurement-item--disabled`,measurementItemTitle:`${a}__measurement-item-title`,measurementItemValue:`${a}__measurement-item-value`,settings:`${a}__settings`,units:`${a}__units`,unitsLabel:`${a}__units-label`,unitsSelect:`${a}__units-select esri-select`,unitsSelectWrapper:`${a}__units-select-wrapper`,actionSection:`${a}__actions`,newMeasurementButton:`${a}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-area"};let c=class extends r{constructor(s,t){super(s,t),this.iconClass=u.widgetIcon,this.viewModel=new n}get view(){return this.viewModel.view}set view(s){this.viewModel.view=s}get visible(){return this.viewModel.visible}set visible(s){this.viewModel.visible=s}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(s){this.viewModel.analysis=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(s){this.viewModel.unitOptions=s}get unit(){return this.viewModel.unit}set unit(s){this.viewModel.unit=s}render(){const{messages:s,messagesUnits:t}=this,{supported:o,active:i,measurement:r,state:n,unit:p}=this.viewModel,m="disabled"===n,a="measuring"===n||"measured"===n,c=i&&"ready"===n?l("section",{key:"esri-area-measurement-3d__hint",class:u.hint},l("p",{class:u.hintText},s.hint)):null,j=o?null:l("section",{key:"esri-area-measurement-3d__unsupported",class:u.panelError},l("p",null,s.unsupported)),h=(t,e,o)=>{switch(e.state){case"available":return l("div",{key:`${o}-enabled`,class:u.measurementItem},l("span",{class:u.measurementItemTitle},t),l("span",{"aria-live":"polite",class:u.measurementItemValue},e.text));case"unavailable":return l("div",{key:`${o}-disabled`,class:this.classes(u.measurementItem,u.measurementItemDisabled)},l("span",{class:u.measurementItemTitle},t));case"invalid":return l("div",{key:`${o}-enabled`,class:u.measurementItem},l("span",{class:u.measurementItemTitle},t),l("span",{class:u.measurementItemValue},s.notApplicable))}},y=a?l("section",{key:"esri-area-measurement-3d__measurement",class:u.measurement},h(s.area,r.area,"area"),h(s.perimeterLength,r.perimeterLength,"perimeter-length")):null,k=`${this.id}__units`,d=l("label",{class:u.unitsLabel,for:k},s.unit),b=l("div",{class:u.unitsSelectWrapper},l("select",{class:u.unitsSelect,id:k,onchange:this._changeUnit,bind:this,value:p},this.viewModel.unitOptions.map((s=>l("option",{key:s,value:s},e(s)?t.systems[s]:t.units[s]?.pluralCapitalized))))),g=a?l("section",{key:"esri-area-measurement-3d__units",class:u.units},d,b):null,v=a?l("div",{key:"settings",class:u.settings},g):null,f=!o||i&&!a?null:l("div",{class:u.actionSection},l("button",{bind:this,class:this.classes(u.newMeasurementButton,m&&u.buttonDisabled),disabled:m,onclick:this._newMeasurement,type:"button"},s.newMeasurement)),S=this.visible?l("div",{class:u.container},j,c,v,y,f):null;return l("div",{"aria-label":s.widgetLabel,key:this,class:u.base,role:"presentation"},S)}_newMeasurement(){t(this.viewModel.start())}_changeUnit(s){const t=s.target,e=t.options[t.selectedIndex];e&&(this.unit=e.value)}};s([o()],c.prototype,"view",null),s([o()],c.prototype,"visible",null),s([o()],c.prototype,"active",null),s([o({constructOnly:!0,nonNullable:!0})],c.prototype,"analysis",null),s([o()],c.prototype,"iconClass",void 0),s([o()],c.prototype,"label",null),s([o(),m("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],c.prototype,"messages",void 0),s([o(),m("esri/core/t9n/Units")],c.prototype,"messagesUnits",void 0),s([o()],c.prototype,"uiStrings",void 0),s([o({type:n})],c.prototype,"viewModel",void 0),s([o()],c.prototype,"unitOptions",null),s([o()],c.prototype,"unit",null),s([p()],c.prototype,"_newMeasurement",null),s([p()],c.prototype,"_changeUnit",null),c=s([i("esri.widgets.AreaMeasurement3D")],c);const j=c;export{j as default};
