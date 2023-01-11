/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"../geometry.js";import e from"../Graphic.js";import s from"../request.js";import r from"../TimeExtent.js";import o from"../core/Error.js";import{h as a,s as i}from"./object.js";import{J as n}from"./jsonMap.js";import l from"../core/Loadable.js";import{a as u,i as p,u as m}from"./maybe.js";import{whenOrAbort as d,debounce as c}from"../core/promiseUtils.js";import{join as y,dataComponents as h}from"../core/urlUtils.js";import{property as f}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import b from"../geometry/Extent.js";import{fromJSON as g}from"../geometry/support/jsonUtils.js";import{a as F}from"./clientSideDefaults.js";import{D as S}from"./DataLayerSource.js";import{a as R}from"./executeQueryJSON.js";import{a as I}from"./executeQueryPBF.js";import O from"../rest/support/FeatureSet.js";import q from"../rest/support/Query.js";import{a as D,b as _,c as E,e as w,d as x,f as T,g as A,h as C,p as U}from"./executeForTopCount.js";import{a as M,e as J}from"./executeForIds.js";import N from"../rest/support/RelationshipQuery.js";import{T as Q}from"./Task.js";import{i as v}from"./arcgisLayerUrl.js";import{u as P}from"./editsZScale.js";import L from"../geometry/SpatialReference.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./Logger.js";import"../config.js";import"./string.js";import"./ArrayPool.js";import"./tracking.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"./writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../layers/support/fieldUtils.js";import"./arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"./locale.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"./colorUtils.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils2.js";import"../symbols/edges/Edges3D.js";import"./screenUtils.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils3.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"./persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../kernel.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../core/Promise.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./timeUtils.js";import"./QueryEngineCapabilities.js";import"./defaultsJSON.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./utils4.js";import"./query.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"./utils5.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedFeature.js";import"./unitUtils.js";import"./projectionEllipsoid.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";import"./featureConversionUtils.js";import"./FullTextSearch.js";import"../rest/support/StatisticDefinition.js";import"../rest/query/support/AttachmentInfo.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";var k;!function(t){t[t.PROJECT_VERTICES=1]="PROJECT_VERTICES"}(k||(k={}));let V=class extends Q{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}async execute(t,e){const s=await this.executeJSON(t,e);return this.featureSetFromJSON(t,s,e)}async executeJSON(t,e){const s={...this.requestOptions,...e},r=this._normalizeQuery(t),o=null!=t.outStatistics?.[0],i=a("featurelayer-pbf-statistics"),n=!o||i;let l;if("pbf"===this.format&&n)try{l=await I(this.url,r,s)}catch(t){if("query:parsing-pbf"!==t.name)throw t;this.format="json"}return"json"!==this.format&&n||(l=await R(this.url,r,s)),this._normalizeFields(l.fields),l}async featureSetFromJSON(t,e,s){if(!this._queryIs3DObjectFormat(t)||u(this.infoFor3D)||!e.assetMaps||!e.features||!e.features.length)return O.fromJSON(e);const{meshFeatureSetFromJSON:r}=await d(import("./meshFeatureSet.js"),s);return r(t,this.infoFor3D,e)}executeForCount(t,e){const s={...this.requestOptions,...e},r=this._normalizeQuery(t);return M(this.url,r,s)}executeForExtent(t,e){const s={...this.requestOptions,...e},r=this._normalizeQuery(t);return D(this.url,r,s)}executeForIds(t,e){const s={...this.requestOptions,...e},r=this._normalizeQuery(t);return J(this.url,r,s)}executeRelationshipQuery(t,e){t=N.from(t);const s={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),_(this.url,t,s)}executeRelationshipQueryForCount(t,e){t=N.from(t);const s={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),E(this.url,t,s)}executeAttachmentQuery(t,e){const s={...this.requestOptions,...e};return w(this.url,t,s)}executeTopFeaturesQuery(t,e){const s={...this.requestOptions,...e};return x(this.parsedUrl,t,this.sourceSpatialReference,s)}executeForTopIds(t,e){const s={...this.requestOptions,...e};return T(this.parsedUrl,t,s)}executeForTopExtents(t,e){const s={...this.requestOptions,...e};return A(this.parsedUrl,t,s)}executeForTopCount(t,e){const s={...this.requestOptions,...e};return C(this.parsedUrl,t,s)}_normalizeQuery(t){let e=q.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?S.from(t.dynamicDataSource):this.dynamicDataSource),p(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const t of this.infoFor3D.queryFormats){if("3D_glb"===t){e.formatOf3DObjects=t;break}"3D_gltf"!==t||e.formatOf3DObjects||(e.formatOf3DObjects=t)}if(!e.formatOf3DObjects)throw new o("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(u(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,u(e.outFields)&&(e.outFields=[]);const{originX:s,originY:r,originZ:o,translationX:a,translationY:i,translationZ:n,scaleX:l,scaleY:p,scaleZ:m,rotationX:d,rotationY:c,rotationZ:y,rotationDeg:h}=this.infoFor3D.transformFieldRoles;e.outFields.push(s,r,o,a,i,n,l,p,m,d,c,y,h)}}return e}_normalizeFields(t){if(p(this.fieldsIndex)&&p(t))for(const e of t){const t=this.fieldsIndex.get(e.name);t&&Object.assign(e,t.toJSON())}}_queryIs3DObjectFormat(t){return p(this.infoFor3D)&&t.returnGeometry&&"xyFootprint"!==t.multipatchOption&&!t.outStatistics}};t([f({type:S})],V.prototype,"dynamicDataSource",void 0),t([f()],V.prototype,"fieldsIndex",void 0),t([f()],V.prototype,"format",void 0),t([f()],V.prototype,"gdbVersion",void 0),t([f()],V.prototype,"infoFor3D",void 0),t([f()],V.prototype,"sourceSpatialReference",void 0),V=t([j("esri.tasks.QueryTask")],V);const z=V,G=new n({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function B(t){return"string"==typeof t?h(t)||{data:t}:new Promise(((e,s)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(h(r.result)),r.onerror=t=>s(t)}))}const Z=new Set(["Feature Layer","Table"]),X=new n({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let Y=class extends l{constructor(){super(...arguments),this.type="feature-layer",this.refresh=c((async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(null==t)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}))}load(t){const e=p(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:s,infoFor3D:r,gdbVersion:o,spatialReference:i,fieldsIndex:n}=this.layer,l=a("featurelayer-pbf")&&t&&u(r)?"pbf":"json";return new z({url:e.path,format:l,fieldsIndex:n,infoFor3D:r,dynamicDataSource:s,gdbVersion:o,sourceSpatialReference:i})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,a.query);try{const t=await s(o,{body:i});return this._createFeatureEditResult(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}async updateAttachment(t,e,r){await this.load();const o=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+o+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(r,i.query);try{const t=await s(a,{body:n});return this._createFeatureEditResult(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(o,t)}}async applyEdits(t,e){await this.load();const r=this.layer.infoFor3D,o=p(r),a=o||e?.globalIdUsed,i=t.addFeatures.map((t=>this._serializeFeature(t,r))),n=t.updateFeatures.map((t=>this._serializeFeature(t,r))),l=this._getFeatureIds(t.deleteFeatures,a);P(i,n,this.layer.spatialReference);const u=[],d=[],c=[...t.deleteAttachments];for(const e of t.addAttachments)u.push(await this._serializeAttachment(e));for(const e of t.updateAttachments)d.push(await this._serializeAttachment(e));const y=u.length||d.length||c.length?{adds:u,updates:d,deletes:c}:null;let h,f=null;if(o){f=new Map;const e=[];for(const s of t.addAssets)e.push(this._serializeAssetMapEditAndUploadAssets(s,f));const s=await Promise.all(e);h=s.length?{adds:s,updates:[],deletes:[]}:void 0}const j={gdbVersion:e?.gdbVersion||this.layer.gdbVersion,rollbackOnFailure:e?.rollbackOnFailureEnabled,useGlobalIds:a,returnEditMoment:e?.returnEditMoment,usePreviousEditMoment:e?.usePreviousEditMoment,sessionId:e?.sessionId};e?.returnServiceEditsOption?(j.edits=JSON.stringify([{id:this.layer.layerId,adds:i,updates:n,deletes:l,attachments:y,assetMaps:m(h)}]),j.returnServiceEditsOption=G.toJSON(e?.returnServiceEditsOption),j.returnServiceEditsInSourceSR=e?.returnServiceEditsInSourceSR):(j.adds=i.length?JSON.stringify(i):null,j.updates=n.length?JSON.stringify(n):null,j.deletes=l.length?a?JSON.stringify(l):l.join(","):null,j.attachments=y&&JSON.stringify(y),j.assetMaps=p(h)?JSON.stringify(h):void 0);const b=this._getLayerRequestOptions({method:"post",query:j}),g=e?.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,F=await s(g+"/applyEdits",b);if(o&&null!=F.data&&null!=F.data.assetMaps){const t=F.data,e=this.layer.objectIdField,r=[];for(const e of t.addResults)e.success&&r.push(e.objectId);for(const e of t.updateResults)e.success&&r.push(e.objectId);const o=this._createRequestQueryOptions(),a=await s(g+"/query",{...o,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${r.join(",")})`,outFields:`${e}`}});if(a&&a.data&&a.data.assetMaps&&p(f)){const t=a.data.assetMaps;for(const e of t){const t=f.get(e.parentGlobalId).geometry;p(t)&&"mesh"===t.type&&t.updateExternalSource({source:[{name:e.assetName,source:e.assetName}],extent:t.extent})}}}return this._createEditsResult(F)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],o=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await s(o,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:o,url:a}=this.layer,{data:i}=await s(`${a}/${o}`,e),{id:n,extent:l,fullExtent:u,timeExtent:p}=i,m=l||u;return{id:n,fullExtent:m&&b.fromJSON(m),timeExtent:p&&r.fromJSON({start:p[0],end:p[1]})}}))}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,o=r.path;await this.load();const a=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:e}=t,r=[];for(const t of e){const e=o+"/"+t+"/attachments";r.push(s(e,a))}return Promise.all(r).then((t=>e.map(((e,s)=>({parentObjectId:e,attachmentInfos:t[s].data.attachmentInfos}))))).then((t=>U(t,o)))}return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!v(this.layer.url))return"unavailable";const t=y(this.layer.url,"status"),e=await s(t,{query:{f:"json"}});return X.fromJSON(e.data.status)}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:r}=await s(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!Z.has(r))throw new o("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const e=F(t.geometryType).renderer;i("drawingInfo.renderer",e,t)}return"esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t,e){const{geometry:s,attributes:r}=t;if(p(e)&&p(t.geometry)&&"mesh"===t.geometry.type){const s={...r},o=t.geometry,a=o.origin,i=o.transform;if(s[e.transformFieldRoles.originX]=a.x,s[e.transformFieldRoles.originY]=a.y,s[e.transformFieldRoles.originZ]=a.z,p(i)){const t=i.translation,r=i.scale,o=i.rotation;s[e.transformFieldRoles.translationX]=t[0],s[e.transformFieldRoles.translationY]=t[1],s[e.transformFieldRoles.translationZ]=t[2],s[e.transformFieldRoles.scaleX]=r[0],s[e.transformFieldRoles.scaleY]=r[1],s[e.transformFieldRoles.scaleZ]=r[2],s[e.transformFieldRoles.rotationX]=o[0],s[e.transformFieldRoles.rotationY]=o[1],s[e.transformFieldRoles.rotationZ]=o[2],s[e.transformFieldRoles.rotationDeg]=o[3]}return{geometry:null,attributes:s}}return u(s)?{attributes:r}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:s}=t,{globalId:r,name:o,contentType:a,data:i,uploadId:n}=s,l={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(l.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),n)l.uploadId=n;else if(i){const t=await B(i);l.contentType=t.mediaType,l.data=t.data,i instanceof File&&(l.name=i.name)}return o&&(l.name=o),a&&(l.contentType=a),l}async _serializeAssetMapEditAndUploadAssets(t,e){const r=this.layer.url;let a=null;try{const e=new Blob([t.data],{type:t.mimeType}),i=new FormData;i.append("f","json"),i.append("file",e,`${t.assetName}`);const n={body:i,method:"post",responseType:"json"},{data:l}=await s(`${r}/uploads/upload`,n);if(!l.success)throw new o("feature-layer-source:upload-failure","Expected upload to be successfull.");a={assetType:t.assetType,assetUploadId:l.item.itemID}}catch(t){a=null}if(u(a)){const e=await B(new Blob([t.data]));if(!e.isBase64)throw new o("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");a={assetType:t.assetType,assetData:e.data}}if(u(a))throw new o("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const i={method:"post",query:{f:"json",assets:JSON.stringify([a])},responseType:"json"},n=await s(y(this.layer.parsedUrl.path,"uploadAssets"),i);if(1!==n.data.uploadResults.length||!n.data.uploadResults[0].success)throw new o("feature-layer-source:uploadAssets-failure","Bad response.");const l=n.data.uploadResults[0].assetHash,p=[];t.flags&k.PROJECT_VERTICES&&p.push("PROJECT_VERTICES");const m={globalId:t.assetMapGlobalId,parentGlobalId:t.featureGlobalId,assetName:t.assetName,assetHash:l,flags:p};return e.set(t.featureGlobalId,t.feature),m}_getFeatureIds(t,e){const s=t[0];return s?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map((t=>t.attributes&&t.attributes[e]))}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map((t=>t.objectId))}_getGlobalIdsFromFeatureIdentifier(t){return t.map((t=>t.globalId))}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,r=[];let o=null;if(Array.isArray(e))for(const t of e)r.push({id:t.id,editedFeatures:t.editedFeatures}),t.id===s&&(o={addResults:t.addResults,updateResults:t.updateResults,deleteResults:t.deleteResults,attachments:t.attachments,editMoment:t.editMoment});else o=e;const a=o?.attachments,i={addFeatureResults:o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]};if(o.editMoment&&(i.editMoment=o.editMoment),r.length>0){i.editedFeatureResults=[];for(const t of r){const{adds:e,updates:s,deletes:r,spatialReference:o}=t.editedFeatures,a=o?new L(o):null;i.editedFeatureResults.push({layerId:t.id,editedFeatures:{adds:e?.map((t=>this._createEditedFeature(t,a)))||[],updates:s?.map((t=>({original:this._createEditedFeature(t[0],a),current:this._createEditedFeature(t[1],a)})))||[],deletes:r?.map((t=>this._createEditedFeature(t,a)))||[],spatialReference:a}})}}return i}_createEditedFeature(t,s){return new e({attributes:t.attributes,geometry:g({...t.geometry,spatialReference:s})})}_createFeatureEditResult(t){const e=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new o("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const s=e.details.messages&&e.details.messages[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new o("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const t in e){const r=e[t];null!=r&&(s.set?s.set(t,r):s.append(t,r))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:r}=this.layer;return{...t,query:{gdbVersion:s,layer:r?JSON.stringify({source:r}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};t([f()],Y.prototype,"type",void 0),t([f({constructOnly:!0})],Y.prototype,"layer",void 0),t([f({readOnly:!0})],Y.prototype,"queryTask",null),Y=t([j("esri.layers.graphics.sources.FeatureLayerSource")],Y);const $=Y;export{$ as default};
