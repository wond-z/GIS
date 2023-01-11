/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import{c as t}from"./asyncUtils.js";import s from"../core/Error.js";import{L as i}from"./Logger.js";import{i as r}from"./maybe.js";import{isAbortError as o}from"../core/promiseUtils.js";import{getJsonType as n}from"../geometry/support/jsonUtils.js";import{W as a,e as p}from"../geometry/SpatialReference.js";import{b as l,a as m,n as u,o as d,p as c}from"./featureConversionUtils.js";import{F as y}from"./FeatureStore.js";import{c as h,p as j}from"./projectionSupport.js";import{Q as g}from"./QueryEngine.js";import{i as f,c as _,v as I}from"./geojson.js";import{a as E,d as b,b as F}from"./clientSideDefaults.js";import{l as T,m as w,c as S,a as q,s as x}from"./sourceUtils.js";import R from"../layers/support/FieldsIndex.js";import{k as C}from"./fieldType.js";import{getFieldDefaultValue as O}from"../layers/support/fieldUtils.js";import"../config.js";import"./object.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"./string.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./ArrayPool.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../core/Evented.js";import"./aaBoundingBox.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./common.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./centroid.js";import"../geometry/projection.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./SimpleObservable.js";import"./mat4.js";import"./pe.js";import"./assets.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./json.js";import"./MemCache.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils4.js";import"./utils5.js";import"./QueryEngineResult.js";import"./quantizationUtils.js";import"./ItemCache.js";import"../core/sql/WhereClause.js";import"./_commonjsHelpers.js";import"./utils13.js";import"./generateRendererUtils.js";import"./colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"./colorUtils.js";import"./enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../symbols/Symbol.js";import"./SnappingCandidate.js";import"./utils21.js";import"./arcadeOnDemand.js";import"./QueryEngineCapabilities.js";import"./timeSupport.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"./ObservableValue.js";import"./debugFlags2.js";import"./defaultsJSON.js";const k={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class U{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let r=null;e.url&&(r=await this._fetch(t?.signal));const o=f(r,{geometryType:e.geometryType}),n=e.fields||o.fields||[],p=null!=e.hasZ?e.hasZ:o.hasZ,l=o.geometryType;let m=e.objectIdField||o.objectIdFieldName||"__OBJECTID";const u=e.spatialReference||a;let d=e.timeInfo;n===o.fields&&o.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}});let c=new R(n).get(m);c?("esriFieldTypeString"!==c.type&&(c.type="esriFieldTypeOID"),c.editable=!1,c.nullable=!1,m=c.name):(c={alias:m,name:m,type:"string"===o.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},n.unshift(c));const h={};for(const e of n){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new s("geojson-layer:invalid-field-name","field name is missing",{field:e});if(!C.jsonValues.includes(e.type))throw new s("geojson-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});if(e.name!==c.name){const t=O(e);void 0!==t&&(h[e.name]=t)}}this._fieldsIndex=new R(n);const j=this._fieldsIndex.requiredFields.indexOf(c);if(j>-1&&this._fieldsIndex.requiredFields.splice(j,1),d){if(d.startTimeField){const e=this._fieldsIndex.get(d.startTimeField);e?(d.startTimeField=e.name,e.type="esriFieldTypeDate"):d.startTimeField=null}if(d.endTimeField){const e=this._fieldsIndex.get(d.endTimeField);e?(d.endTimeField=e.name,e.type="esriFieldTypeDate"):d.endTimeField=null}if(d.trackIdField){const e=this._fieldsIndex.get(d.trackIdField);e?d.trackIdField=e.name:(d.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:d}}))}d.startTimeField||d.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:d}}),d=null)}const _=l?E(l):null,I={warnings:i,featureErrors:[],layerDefinition:{...k,drawingInfo:_,templates:b(h),extent:null,geometryType:l,objectIdField:m,fields:n,hasZ:!!p,timeInfo:d}};this._queryEngine=new g({fields:n,geometryType:l,hasM:!1,hasZ:p,objectIdField:m,spatialReference:u,timeInfo:d,featureStore:new y({geometryType:l,hasM:!1,hasZ:p}),cacheSpatialQueries:!0}),this._createDefaultAttributes=F(h,m);const T=await this._createFeatures(r);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const w=this._normalizeFeatures(T,I.warnings,I.featureErrors);if(this._queryEngine.featureStore.addMany(w),I.layerDefinition.extent=this._queryEngine.fullExtent,I.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;I.layerDefinition.timeInfo.timeExtent=[e,t]}return I}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([T(t,s),h(e.adds,t),h(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=t(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),o(e)||i.getLogger("esri.layers.GeoJSONLayer").error(new s("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,o=_(e,{geometryType:t,hasZ:s,objectIdField:i});if(!p(this._queryEngine.spatialReference,a))for(const e of o)r(e.geometry)&&(e.geometry=l(j(m(e.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),a,this._queryEngine.spatialReference)));return o}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:s,customParameters:i}=this._loadOptions,r=(await e(s,{responseType:"json",query:{...i},signal:t})).data;return await I(r),r}_normalizeFeatures(e,t,s){const{objectIdField:i}=this._queryEngine,r=[];for(const o of e){const e=this._createDefaultAttributes(),n=w(this._fieldsIndex,e,o.attributes,!0,t);n?s?.push(n):(this._assignObjectId(e,o.attributes,!0),o.attributes=e,o.objectId=e[i],r.push(o))}return r}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push(S(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:o,hasZ:a,objectIdField:p,spatialReference:l,featureStore:m}=this._queryEngine,d=[];for(const o of t){if(o.geometry&&i!==n(o.geometry)){s.push(q("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=w(this._fieldsIndex,t,o.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[p];e.uidToObjectId[o.uid]=t}if(r(o.geometry)){const e=o.geometry.spatialReference??l;o.geometry=j(x(o.geometry,e),e,l)}d.push(o),s.push(S(o.attributes[p]))}}m.addMany(u([],d,i,a,o,p))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:o,objectIdField:a,spatialReference:p,featureStore:l}=this._queryEngine;for(const m of t){const{attributes:t,geometry:u}=m,y=t&&t[a];if(null==y){e.push(q(`Identifier field ${a} missing`));continue}if(!l.has(y)){e.push(q(`Feature with object id ${y} missing`));continue}const h=d(l.getFeature(y),s,o,i);if(r(u)){if(s!==n(u)){e.push(q("Incorrect geometry type."));continue}const t=u.spatialReference??p;h.geometry=j(x(u,t),t,p)}if(t){const s=w(this._fieldsIndex,h.attributes,t);if(s){e.push(s);continue}}l.add(c(h,s,o,i,a)),e.push(S(y))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===s.type)return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const e of t)e.objectId&&(i=Math.max(i,e.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await h(a,e)}catch{throw new s("geojson-layer","Projection not supported")}}}export{U as default};
