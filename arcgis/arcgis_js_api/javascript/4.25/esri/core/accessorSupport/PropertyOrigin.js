// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../maybe"],function(b,e){function c(a){switch(a){case "defaults":return b.OriginId.DEFAULTS;case "service":return b.OriginId.SERVICE;case "portal-item":return b.OriginId.PORTAL_ITEM;case "web-scene":return b.OriginId.WEB_SCENE;case "web-map":return b.OriginId.WEB_MAP;case "user":return b.OriginId.USER;default:return null}}function d(a){switch(a){case b.OriginId.DEFAULTS:return"defaults";case b.OriginId.SERVICE:return"service";case b.OriginId.PORTAL_ITEM:return"portal-item";case b.OriginId.WEB_SCENE:return"web-scene";
case b.OriginId.WEB_MAP:return"web-map";case b.OriginId.USER:return"user"}return e.assumeNonNull(void 0)}b.OriginId=void 0;(function(a){a[a.DEFAULTS=0]="DEFAULTS";a[a.COMPUTED=1]="COMPUTED";a[a.SERVICE=2]="SERVICE";a[a.PORTAL_ITEM=3]="PORTAL_ITEM";a[a.WEB_SCENE=4]="WEB_SCENE";a[a.WEB_MAP=5]="WEB_MAP";a[a.USER=6]="USER"})(b.OriginId||(b.OriginId={}));b.OriginIdNum=b.OriginId.USER+1;b.idToName=d;b.idToReadableName=function(a){return d(a)};b.idToWritableName=function(a){return d(a)};b.nameToId=c;b.readableNameToId=
function(a){return c(a)};b.writableNameToId=function(a){return c(a)};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});