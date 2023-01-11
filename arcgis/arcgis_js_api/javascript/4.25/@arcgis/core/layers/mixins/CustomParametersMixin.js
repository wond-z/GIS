/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";const o=o=>{let e=class extends o{constructor(){super(...arguments),this.customParameters=null}};return s([r({type:Object,json:{write:{overridePolicy:s=>({enabled:!!(s&&Object.keys(s).length>0)})}}})],e.prototype,"customParameters",void 0),e=s([t("esri.layers.mixins.CustomParametersMixin")],e),e};export{o as CustomParametersMixin};
