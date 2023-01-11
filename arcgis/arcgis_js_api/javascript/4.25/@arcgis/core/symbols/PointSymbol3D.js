/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import o from"../core/Collection.js";import{clone as r}from"../core/lang.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{e}from"../chunks/enumeration.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import m from"./IconSymbol3DLayer.js";import l from"./ObjectSymbol3DLayer.js";import p from"./Symbol3D.js";import a from"./TextSymbol3DLayer.js";import{h as c,a as n,c as u}from"../chunks/calloutUtils.js";import j from"./support/Symbol3DVerticalOffset.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/jsonMap.js";import"../core/urlUtils.js";import"./Symbol3DLayer.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../chunks/colors.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/reader.js";import"../chunks/persistableUrlUtils.js";import"../chunks/materialUtils.js";import"../chunks/screenUtils.js";import"../chunks/opacityUtils.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/collectionUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../portal/Portal.js";import"../kernel.js";import"../request.js";import"../core/Loadable.js";import"../core/Promise.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./ExtrudeSymbol3DLayer.js";import"../chunks/utils2.js";import"./edges/Edges3D.js";import"./edges/SketchEdges3D.js";import"./edges/SolidEdges3D.js";import"./FillSymbol3DLayer.js";import"./patterns/LineStylePattern3D.js";import"./patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"./LineSymbol3DLayer.js";import"./LineStyleMarker3D.js";import"../core/Clonable.js";import"../chunks/lineMarkers.js";import"./PathSymbol3DLayer.js";import"./Symbol.js";import"./WaterSymbol3DLayer.js";import"./support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"./Font.js";import"./callouts/Callout3D.js";import"./callouts/LineCallout3D.js";var y;const h=o.ofType({base:null,key:"type",typeMap:{icon:m,object:l,text:a}});let b=y=class extends p{constructor(t){super(t),this.verticalOffset=null,this.callout=null,this.symbolLayers=new h,this.type="point-3d"}supportsCallout(){if((this.symbolLayers?this.symbolLayers.length:0)<1)return!1;for(const t of this.symbolLayers.items)switch(t.type){case"icon":case"text":case"object":continue;default:return!1}return!0}hasVisibleCallout(){return c(this)}hasVisibleVerticalOffset(){return n(this)}clone(){return new y({verticalOffset:r(this.verticalOffset),callout:r(this.callout),styleOrigin:r(this.styleOrigin),symbolLayers:r(this.symbolLayers),thumbnail:r(this.thumbnail)})}static fromSimpleMarkerSymbol(t){return new y({symbolLayers:[m.fromSimpleMarkerSymbol(t)]})}static fromPictureMarkerSymbol(t){return new y({symbolLayers:[m.fromPictureMarkerSymbol(t)]})}static fromCIMSymbol(t){const o=t.data?.symbol?.type;if("CIMPointSymbol"!==o)return null;const r=t.data.symbol;return new y(r?.callout?{symbolLayers:[m.fromCIMSymbol(t)],callout:{type:"line",size:.5,color:[0,0,0]},verticalOffset:{screenLength:40}}:{symbolLayers:[m.fromCIMSymbol(t)]})}static fromTextSymbol(t){return new y({symbolLayers:[a.fromTextSymbol(t)]})}};t([s({type:j,json:{write:!0}})],b.prototype,"verticalOffset",void 0),t([s(u)],b.prototype,"callout",void 0),t([s({type:h,json:{origins:{"web-scene":{write:!0}}}})],b.prototype,"symbolLayers",void 0),t([e({PointSymbol3D:"point-3d"},{readOnly:!0})],b.prototype,"type",void 0),b=y=t([i("esri.symbols.PointSymbol3D")],b);const k=b;export{k as default};
