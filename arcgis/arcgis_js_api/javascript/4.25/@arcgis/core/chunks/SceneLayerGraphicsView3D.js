/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Graphic.js";import{f as r}from"../core/lang.js";import{L as s}from"./Logger.js";import{d as i,a as o,i as p,u as a}from"./maybe.js";import{initial as n,watch as m}from"../core/reactiveUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{f as u,a as j,d as c}from"./vec3.js";import{projectBuffer as h,projectVectorToVector as g}from"../geometry/projection.js";import{f as y}from"../geometry/Extent.js";import{g as b}from"./zscale.js";import{f}from"../widgets/Popup/PopupViewModel.js";import{m as _,e as v}from"./dehydratedFeatures.js";import{b as S}from"./hydratedFeatures.js";import{G as w,I,b as x}from"./I3SOverrides.js";import C from"../layers/support/FeatureFilter.js";import E from"../rest/support/Query.js";import{W as D}from"./WorkerHandle.js";import{L as U}from"./LayerView3D.js";import{G as F,Q as L}from"./FeatureLikeLayerView3D.js";import{S as V,c as O,a as A,d as M,b as T}from"./SceneLayerView.js";import{R,S as P,w as N,T as G,v as B}from"./I3SUtil.js";import{D as k}from"./DefinitionExpressionSceneLayerView.js";import{P as q}from"./PopupSceneLayerView.js";import{d as H}from"./debugFlags.js";import{u as Q}from"../views/SceneView.js";import{U as z}from"./basicInterfaces.js";import{T as W}from"./Scheduler.js";import"../geometry.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./object.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"./string.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"./jsonMap.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../core/urlUtils.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../layers/Layer.js";import"../symbols/support/symbolUtils.js";import"./utils6.js";import"./asyncUtils.js";import"./jsonUtils.js";import"./parser.js";import"./mat4f32.js";import"./_commonjsHelpers.js";import"./ItemCache.js";import"./MemCache.js";import"../symbols/support/cimSymbolUtils.js";import"./utils7.js";import"./colorUtils2.js";import"./projector.js";import"./widgetUtils.js";import"./mat2df32.js";import"./mat2d.js";import"./jsxFactory.js";import"./jsxWidgetSupport.js";import"./InputManager.js";import"./Queue.js";import"./ObservableValue.js";import"./layerViewUtils.js";import"../widgets/Feature/FeatureViewModel.js";import"./throttle.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../intl.js";import"./messages.js";import"../core/HandleOwner.js";import"./WatchUpdatingTracking.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./executeQueryJSON.js";import"./utils4.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils5.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"../rest/support/FeatureSet.js";import"./featureConversionUtils.js";import"../rest/support/RelationshipQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../TimeExtent.js";import"./timeUtils.js";import"../rest/support/TopFilter.js";import"../rest/support/StatisticDefinition.js";import"../layers/FeatureLayer.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"./compilerUtils.js";import"./lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties2.js";import"../symbols/support/jsonUtils.js";import"./symbolConversion.js";import"../renderers/DictionaryRenderer.js";import"./DictionaryLoader.js";import"./LRUCache.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"./heatmapUtils.js";import"./vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"./styleUtils2.js";import"../renderers/support/jsonUtils.js";import"./MultiOriginJSONSupport.js";import"../core/sql.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../core/workers/RemoteClient.js";import"./editsZScale.js";import"../layers/mixins/APIKeyMixin.js";import"./ArcGISService.js";import"./arcgisLayerUrl.js";import"../layers/mixins/BlendLayer.js";import"../layers/mixins/CustomParametersMixin.js";import"./EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"./FullTextSearch.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"./commonProperties.js";import"../support/timeUtils.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"./FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"./labelUtils.js";import"./defaults.js";import"./defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"./clusterUtils.js";import"./OperationalLayer.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../layers/support/TimeReference.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"./fieldProperties.js";import"../layers/support/FieldsIndex.js";import"./labelingInfo.js";import"./versionUtils.js";import"./styleUtils.js";import"../support/popupUtils.js";import"./actions.js";import"./AnchorElementViewModel.js";import"../widgets/support/GoTo.js";import"./byteSizeEstimations.js";import"./quantizationUtils.js";import"./ViewingMode.js";import"./I3SNode.js";import"./sphere.js";import"./vector.js";import"./ray.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./I3SBinaryReader.js";import"./VertexAttribute.js";import"./RenderTexture.js";import"./SSAOHelper.js";import"./bufferWriterUtils.js";import"./Util2.js";import"./Material.js";import"./utils20.js";import"./doublePrecisionUtils.js";import"./triangle.js";import"./lineSegment.js";import"./Indices.js";import"./ShaderTechniqueConfiguration.js";import"./RenderSlot.js";import"./vec3f32.js";import"./requestImageUtils.js";import"./enums3.js";import"./Texture.js";import"./context-util.js";import"./FramebufferObject.js";import"./VertexElementDescriptor.js";import"./vec2.js";import"./BufferView.js";import"./OrderIndependentTransparency.js";import"./CameraSpace.glsl.js";import"./frustum.js";import"./plane.js";import"./mathUtils2.js";import"./MultipassGeometryTest.glsl.js";import"./ElevationProvider.js";import"./graphicUtils.js";import"./ElevationQuery.js";import"./vec2f32.js";import"./InterleavedLayout.js";import"./types.js";import"./HUDMaterial.js";import"./mat3.js";import"./VisualVariables.glsl.js";import"./GLTextureMaterial.js";import"./DefaultBufferWriter.js";import"./Octree.js";import"./floatRGBA.js";import"./OutputHighlight.glsl.js";import"./edgeUtils.js";import"./earcut.js";import"./vec32.js";import"./SnappingCandidate.js";import"./triangulationUtils.js";import"./deduplicate.js";import"./line2.js";import"./interfaces4.js";import"./NestedMap.js";import"./Camera.js";import"./Intersector.js";import"./boundedPlane.js";import"./verticalOffsetUtils.js";import"./quat.js";import"./glUtil.js";import"./objectResourceUtils.js";import"./devEnvironmentUtils.js";import"./DefaultMaterial_COLOR_GAMMA.js";import"./Version.js";import"./mat3f32.js";import"./symbolColorUtils.js";import"./VertexColor.glsl.js";import"./callExpressionWithFeature.js";import"./GeometryUtil.js";import"./line.js";import"./lineStippleUtils.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"./imageUtils.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"./projection.js";import"./NativeLineMaterial.js";import"./ColorMaterial.js";import"./featureQueryAll.js";import"./FeatureLayerView3D.js";import"./FeatureLayerViewBase3D.js";import"./EventedSet.js";import"./FeatureLayerView.js";import"./floorFilterUtils.js";import"./popupUtils.js";import"../views/layers/LayerView.js";import"./RefreshableLayerView.js";import"./geometryServiceUtils.js";import"./project.js";import"../rest/support/ProjectParameters.js";import"./dehydratedFeatureComparison.js";import"../Camera.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"./GraphicsCollection.js";import"./RenderCoordsHelper.js";import"./spatialReferenceSupport.js";import"./scaleUtils.js";import"./layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"./writeUtils.js";import"../Ground.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"./basemapUtils.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces3.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./heightModelInfoUtils.js";import"./debugFlags2.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../widgets/Popup.js";import"../widgets/Feature.js";import"../widgets/Widget.js";import"./uuid.js";import"../widgets/Attachments.js";import"./unitFormatUtils.js";import"./messageBundle.js";import"./Heading.js";import"../widgets/support/widget.js";import"./accessibleHandler.js";import"./vmEvent.js";import"./themeUtils.js";import"./uriUtils.js";import"./utils15.js";import"./numberUtils.js";import"./chartUtils.js";import"./Spinner.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../views/GroundView.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"./TileKey.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"../views/ViewAnimation.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"../views/3d/environment/SunnyWeather.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./axisAngleDegrees.js";import"./earthUtils.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"./viewpointUtils.js";import"./ray2.js";import"./resources.js";import"./labelFormatUtils.js";import"./FeatureTileDescriptor3D.js";import"./vec4f32.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./terrainUtils.js";import"./ElevationQueryTileCache.js";import"./LercDecoder.js";import"./VectorTile.js";import"./enums2.js";import"./config.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./TileKey2.js";import"./ElevationSamplerData.js";import"./DefaultVertexAttributeLayouts.js";import"../views/2d/ViewState.js";import"./mat2df64.js";import"./edgeProcessing.js";import"./EdgeWorkerHandle.js";import"./workerHelper.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./Program.js";import"./intersectorUtilsConversions.js";import"./hitTestSelectUtils.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../widgets/Attribution.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"./queryForSymbologySnapping.js";import"./elevationInfoUtils.js";import"./hash.js";import"./Graphics3DObjectStates.js";import"./rendererConversion.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"./PooledRBush.js";import"./quickselect.js";import"./QueryEngine.js";import"./QueryEngineResult.js";import"../core/sql/WhereClause.js";import"./utils13.js";import"./generateRendererUtils.js";import"./projectionSupport.js";import"./json.js";import"./utils21.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./FeatureStore.js";import"./BoundsStore.js";import"./heatmapTextureUtils.js";import"./projectExtentUtils.js";class Z extends D{constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:e=>[e.geometryBuffer]},e,{hasInitialize:!0})}}const K=M();let J=class extends(k(q(U(T)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._nodesAddedToStage=new Map,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new w,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){const e=this.layer;this.addResolvingPromise(e.indexInfo),this._i3sOverrides=new I({view:this.view,layer:this.layer,memoryController:this.view.resourceController?.memoryController}),R(e,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new V({layerView:this}),this.updatingHandles.add((()=>e.rangeInfos),(e=>this._rangeInfosChanged(e)),n),this.updatingHandles.add((()=>e.renderer),((e,t)=>this._rendererChange(e,t))),this.updatingHandles.add((()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted]),(()=>this._filterChange())),this.handles.add(m((()=>H.I3S_TREE_SHOW_TILES),(e=>{if(e&&!this._treeDebugger){const e=this._controller.crsIndex;import("./I3STreeDebugger.js").then((({I3STreeDebugger:t})=>{!this._treeDebugger&&H.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new t({lv:this,view:this.view,nodeSR:e}))}))}else e||!this._treeDebugger||H.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}),n)),this._set("processor",new F({owner:this,preferredUpdatePolicy:z.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:e.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),this.processor.elevationAlignment?.events.on("invalidate-elevation",(e=>this._controller.updateElevationChanged(e.extent,e.spatialReference))),this.supportsHeightUnitConversion&&(this._verticalScale=b("point",e.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(e.uid),this._controller=new x({layerView:this,scaleVisibilityEnabled:!1}),P(this.layer.geometryDefinitions)&&(this._worker=new Z((e=>this.view.resourceController.schedule(e)))),this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e)))),this.when((()=>{const e=()=>this.processor.featureStore;this._queryEngine=new L({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:W.FEATURE_QUERY_ENGINE}),this.updatingHandles.add((()=>this.maximumNumberOfFeatures),(e=>this._controller.featureTarget=e),n),this.updatingHandles.add((()=>this.suspended),(e=>{e&&this._removeAllNodeData()}))}))}destroy(){this._treeDebugger=i(this._treeDebugger),this._i3sOverrides=i(this._i3sOverrides),this._set("processor",i(this.processor)),this._controller=i(this._controller),this._queryEngine=i(this._queryEngine),this._worker=i(this._worker),this._memCache=i(this._memCache),this._nodesAddedToStage.clear(),this._fieldsHelper=i(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??1}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get maximumNumberOfFeatures(){const e=this.processor?.graphicsCore?.displayFeatureLimit;return e?.maximumNumberOfFeatures??0}set maximumNumberOfFeatures(e){null!=e?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){return!this.suspended&&!!this._controller?.useMaximumNumberOfFeatures&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort(((e,t)=>e-t)):null}get lodFactor(){return"Labels"===this.layer.semantic?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return N(this.layer,e,this._getObjectIdField(),t,(()=>[...this._nodesAddedToStage.values()]))}getHit(e){if(!this.loadedGraphics)return null;const t=S(this.loadedGraphics.find((t=>t.uid===e)),this.layer),r=this._getObjectIdField();return t&&t.attributes&&t.attributes[r]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){return!!(this._controller?.updating||this.processor?.updating||this._fieldsHelper?.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return O(this._attributeEditingContext,e)}async _extractBinaryPointData(e,t){const r={geometryBuffer:e.geometryBuffer};return o(this._worker)&&(this._worker=new Z((e=>this.view.resourceController.schedule(e)))),this._worker.invoke(r,t).then((e=>{if(p(e))return{positionData:e.positions,featureIds:e.featureIds};throw new Error("Failed to decompress Draco point data")}))}_checkExtent(e,t){e&&!y(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&s.getLogger(this.declaredClass).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&s.getLogger(this.declaredClass).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,r){if(!X(t)&&!$(t))throw new Error;if(this._nodesAddedToStage.has(e.index))return void s.getLogger(this.declaredClass).error("I3S node "+e.id+" already added");const i=p(this.layer.fullExtent)?(l=.5,(m=this.layer.fullExtent.clone()).xmin-=l,m.ymin-=l,m.xmax+=l,m.ymax+=l,m.hasZ&&(m.zmin-=l,m.zmax+=l),m.hasM&&(m.mmin-=l,m.mmax+=l),m):null,o=this._controller.crsVertex,a=[],n={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};var m,l;if(X(t)?await this._addNodeBinaryPointData(e,n,t,i,a,r):$(t)&&this._addNodeLegacyPointData(e,n,t,i,a),await this._i3sOverrides.apply(n.featureIds,t.attributeDataInfo,r),e.numFeatures=n.graphics.length,this._updateNodeMemory(e),ee(n),a.length>0&&(this._computeObb(e,a,o),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(n);if(p(this._verticalScale))for(const e of n.graphics)this._verticalScale(e.geometry);const d=this.view._stage.renderView._objectAndLayerIdRenderHelper;if(d)for(let e=0;e<n.featureIds.length;e++){const t=n.featureIds[e];d.setUidToObjectAndLayerId(t,n.graphics[e].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled,n.node.resources.attributes,e)}this._nodesAddedToStage.set(e.index,n),this.loadedGraphics.addMany(n.graphics),this._controller.updateLoadStatus(e.index,!0),this._filterNode(n),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,r){const s=this._controller.crsIndex,i=s.isGeographic?this.view.renderSpatialReference:s;h(t,r,0,t,i,0,t.length/3);const o={data:t,size:3};e.serviceObb=G(o),s.isGeographic&&g(e.serviceObb.center,i,e.serviceObb.center,s)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,r,s,i,o,n){const m=await this._extractBinaryPointData(s,n);if(null==m)throw new Error;const l=this._getObjectIdField(),d=this._controller.crsVertex,c=this.view.spatialReference,g=this.processor.graphicsCore,{positionData:y,featureIds:b}=m,f=y.length/3,v=new Array,S=p(e.serviceObb)?e.serviceObb.center:[0,0,0],w=Math.abs(S[2])*2**-20;for(let r=0;r<f;r++){const s=3*r,n=u(y[s+0],y[s+1],y[s+2]);j(n,n,S),Math.abs(n[2])<w&&(n[2]=0),e.serviceObb||o.push(n[0],n[1],n[2]),p(i)&&this._checkExtent(i,n);const m=b[r],f={};null!=m&&(f[l]=m);const I=m??t.generateUID();h(n,d,0,re,c,0,1);const x=_(re[0],re[1],re[2],c),C=this.loadedGraphics.get(I);if(p(C))C.level<e.level&&(se.property="geometry",se.graphic=C,se.oldValue=a(C.geometry),se.newValue=x,C.geometry=x,g.graphicUpdateHandler(se)),v.push(C);else{const r=t.generateUID();v.push({objectId:I,uid:r,geometry:x,attributes:f,visible:!0,level:e.level})}}r.graphics=v,r.featureIds=Array.from(b)}_addNodeLegacyPointData(e,r,s,i,o){const a=this._getObjectIdField(),n=this._controller.crsVertex,m=this.view.spatialReference,l=[0,0,0],d=new Array,u=new Array;for(const r of s.pointData){const s=r.featureDataPosition,j=s.length,c=r.geometries&&r.geometries[0]||te[j],g=r.featureIds[0];if("points"!==c.params.type)continue;p(i)&&this._checkExtent(i,s);const y={};null!=g&&(y[a]=g);const b=g??t.generateUID();let f;"Embedded"===c.type&&(f=c.params.vertexAttributes.position);for(let r=0;r<f.length;r+=j){for(let e=0;e<j;e++)l[e]=s[e]+f[r+e];const i=3===j;e.serviceObb||o.push(l[0],l[1],i?l[2]:0),h(l,n,0,re,m,0,1);const a=_(re[0],re[1],i?re[2]:void 0,m),d=this.loadedGraphics.get(b);p(d)?u.push(d):u.push({objectId:b,uid:t.generateUID(),geometry:a,attributes:y,visible:!0})}d.push(g)}r.graphics=u,r.featureIds=d}_updateNodeMemory(e){e.memory=4096+(p(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce(((e,t)=>v(t)+e),512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach(((e,t)=>{if(e){const t=e.node;this._updateNodeMemory(t),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)})),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,r,i){this._nodesAddedToStage.has(e.index)?s.getLogger(this.declaredClass).error("I3S node "+e.id+" already added"):(this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),await this.updateAttributes(e.index,r,i),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach((t=>e.push(t.node.id))),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach((t=>e.push(t.node))),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach(((t,r)=>e.push(r)))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&p(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&p(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const r=this._nodesAddedToStage.get(e);r&&!o(r.attributeInfo)&&(r.attributeInfo.attributeData=t,this._attributeValuesChanged(r))}async updateAttributes(e,t,r){const s=this._nodesAddedToStage.get(e);s&&(await this._i3sOverrides.apply(s.featureIds,t,r),s.attributeInfo=t,this._attributeValuesChanged(s))}_attributeValuesChanged(e){if(ee(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map((e=>e.uid));this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||f}async _rendererChange(e,t){const{layer:{fieldsIndex:r}}=this,s=new Set;let i,o;e?(await e.collectRequiredFields(s,r),i=Array.from(s).sort()):i=[],s.clear(),t?(await t.collectRequiredFields(s,r),o=Array.from(s).sort()):o=[],i.length===o.length&&i.every(((e,t)=>i[t]===o[t]))||this._reloadAllNodes()}_rangeInfosChanged(e){null!=e&&e.length>0&&s.getLogger(this.declaredClass).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach((e=>this._filterNode(e)))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,s=this._excludeObjectIdsSorted,i=this._getObjectIdField();for(const p of e.graphics){const e=p.visible,a=!t||this._evaluateClause(t,p),n=o(s)||r(s,p.attributes[i])<0;p.visible=a&&n,e!==p.visible&&(se.graphic=p,se.property="visible",se.oldValue=e,se.newValue=p.visible,this.processor.graphicsCore.graphicUpdateHandler(se))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return p(this.filter)?this.filter.createQuery(e):new E(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t?.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t?.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t?.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t?.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(o(e)?this.createQuery():E.from(e))}getUsedMemory(){return this.processor?.graphicsCore?.usedMemory??0}getUnloadedMemory(){return.8*((this._controller?.unloadedMemoryEstimate??0)+(this.processor?.graphicsCore?.unprocessedMemoryEstimate??0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){A(this._attributeEditingContext,e)}get _attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:e=>this._nodesAddedToStage.forEach((t=>e(t.node,t.featureIds))),attributeStorageInfo:this.i3slayer.attributeStorageInfo,i3sOverrides:this._i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(t,r,s)=>{this._setAttributeData(t,r);const i=this._nodesAddedToStage.get(t);if(p(s)){const t=this.loadedGraphics.get(s.attributes[e]);p(t)&&this.processor.graphicsCore.recreateGraphics([t])}else p(i)&&this.processor.graphicsCore.recreateGraphics(i.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,loadedGraphics:this.loadedGraphics}}};e([l()],J.prototype,"processor",void 0),e([l({type:C})],J.prototype,"filter",void 0),e([l()],J.prototype,"loadedGraphics",void 0),e([l()],J.prototype,"i3slayer",null),e([l()],J.prototype,"_controller",void 0),e([l()],J.prototype,"updating",void 0),e([l()],J.prototype,"suspended",void 0),e([l()],J.prototype,"holeFilling",void 0),e([l(Q)],J.prototype,"updatingProgress",void 0),e([l()],J.prototype,"updatingProgressValue",null),e([l(K.requiredFields)],J.prototype,"requiredFields",null),e([l(K.availableFields)],J.prototype,"availableFields",void 0),e([l()],J.prototype,"_fieldsHelper",void 0),e([l({type:Number})],J.prototype,"maximumNumberOfFeatures",null),e([l({readOnly:!0})],J.prototype,"maximumNumberOfFeaturesExceeded",null),e([l()],J.prototype,"_excludeObjectIdsSorted",null),e([l({readOnly:!0})],J.prototype,"lodFactor",null),e([l({readOnly:!0})],J.prototype,"hasM",null),e([l({readOnly:!0})],J.prototype,"hasZ",null),J=e([d("esri.views.3d.layers.SceneLayerGraphicsView3D")],J);const Y=J;function $(e){return"pointData"in e}function X(e){return"geometryBuffer"in e&&null!==e.geometryBuffer}function ee(e){const t=e.attributeInfo;for(let r=0;r<e.graphics.length;r++){const s=e.graphics[r];if(s.attributes||(s.attributes={}),p(t)&&p(t.loadedAttributes))for(const{name:e}of t.loadedAttributes)t.attributeData[e]&&(s.attributes[e]=B(t.attributeData[e],r))}}const te={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},re=c(),se={graphic:null,property:null,oldValue:null,newValue:null};export{Y as default};
