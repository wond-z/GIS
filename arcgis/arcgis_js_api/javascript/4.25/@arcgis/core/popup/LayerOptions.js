/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";var e;let p=e=class extends s{constructor(o){super(o),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};o([r({type:Boolean,json:{write:!0}})],p.prototype,"returnTopmostRaster",void 0),o([r({type:Boolean,json:{write:!0}})],p.prototype,"showNoDataRecords",void 0),p=e=o([t("esri.popup.LayerOptions")],p);const c=p;export{c as default};
