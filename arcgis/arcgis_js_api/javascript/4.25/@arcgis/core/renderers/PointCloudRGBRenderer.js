/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e as t}from"../chunks/enumeration.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudRenderer.js";import"../chunks/maybe.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/string.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../chunks/PointSizeSplatAlgorithm.js";var p;let c=p=class extends i{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new p({...this.cloneProperties(),field:o(this.field)})}};r([t({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),r([s({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=p=r([e("esri.renderers.PointCloudRGBRenderer")],c);const n=c;export{n as default};
