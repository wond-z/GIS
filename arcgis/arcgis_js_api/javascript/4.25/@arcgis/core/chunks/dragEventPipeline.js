/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../core/Accessor.js";import{L as a}from"./Logger.js";import{i as n,a as r,u as i}from"./maybe.js";import{createResolver as o}from"../core/promiseUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{clone as l}from"../core/lang.js";import"./ensureType.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import{E as u}from"./interfaces3.js";import h from"../core/Collection.js";import"../geometry.js";import{c as p}from"./mathUtils.js";import{c as d}from"./screenUtils.js";import{f as m}from"./vec3.js";import{project as f}from"../geometry/projection.js";import{h as y}from"./hydratedFeatures.js";import{d as v}from"./elevationInfoUtils.js";import{V as g}from"./ViewingMode.js";import{m as E}from"./drawUtils.js";import b from"../geometry/Point.js";var _;!function(t){t[t.WhenToolEditable=0]="WhenToolEditable",t[t.WhenToolNotEditable=1]="WhenToolNotEditable",t[t.Always=2]="Always"}(_||(_={}));class M{constructor(){this._isToolEditable=!0,this._manipulators=new h,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t,e=_.WhenToolEditable){this.addMany([t],e)}addMany(t,e=_.WhenToolEditable){for(const a of t){const t={manipulator:a,visibilityPredicate:e,attached:!1};this._manipulators.add(t),this._attached&&this._updateManipulatorAttachment(t)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.getItemAt(e).manipulator===t){const t=this._manipulators.splice(e,1)[0];this._detachManipulator(t);break}}removeAll(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._manipulators.removeAll()}attach(){this._manipulators.forEach((t=>{this._updateManipulatorAttachment(t)})),this._attached=!0}detach(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach((({manipulator:t})=>{t.destroy&&t.destroy()})),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,(t=>{e(t)}))}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach((e=>t.push(e.manipulator))),t}intersect(t,e){let a=null,r=Number.MAX_VALUE;return this._manipulators.forEach((({manipulator:i,attached:o})=>{if(!o||!i.interactive)return;const s=i.intersectionDistance(t,e);n(s)&&s<r&&(r=s,a=i)})),a}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return;const e=t.manipulator;e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===_.Always||(this._isToolEditable?t.visibilityPredicate===_.WhenToolEditable:t.visibilityPredicate===_.WhenToolNotEditable)}}let x=class extends e{constructor(t){super(t),this.manipulators=new M,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[u.MANAGER,!0],[u.USER,!0]]),this._creationFinishedResolver=o()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(u.USER)}set editable(t){this.setEditableFlag(u.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){r(this.view)?a.getLogger(this.declaredClass).error("Can't activate tool if view is not defined."):(this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===u.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){return this._editableFlags.get(t)}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(u.USER)&&this.getEditableFlag(u.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};function S(t,e){return t.events.on("drag",function(t,e){let a=null,i=null;return o=>{if("cancel"===o.action)return void(n(i)&&(i.execute({action:"cancel"}),a=null,i=null));const s={action:o.action,screenStart:o.start,screenEnd:o.screenPoint};"start"===o.action&&r(a)&&(a=new D,i=new D,e(t,a,i,o.pointerType,s)),n(a)&&a.execute(s),"end"===o.action&&n(a)&&(a=null,i=null)}}(t,e))}function A(t,e){const a=[t.x,t.y,t.z],n=e,r=[Math.cos(n),Math.sin(n)],i=Math.sqrt(r[0]*r[0]+r[1]*r[1]);if(0===i)return null;r[0]/=i,r[1]/=i;const o=t=>{const e=(t.x-a[0])*r[0]+(t.y-a[1])*r[1];t.x=a[0]+e*r[0],t.y=a[1]+e*r[1]};return t=>(o(t.mapStart),o(t.mapEnd),{...t,axis:r})}function w(t,e){let a=null;return i=>{if("start"===i.action&&(a=function(t,e,a){const i=t.geometry,o=y(e);if(r(i))return null;if("mesh"===i.type)return function(t,e,a,i){if(n(e.transform))return function(t,e,a,i){const o=j(a.getOriginPoint(e.spatialReference),i),s=e.spatialReference;return r(o)?null:{move:(e,r,i)=>{const l=E(o.clone(),e,r,i);if(l.spatialReference.equals(s))a.origin=m(l.x,l.y,l.z);else{const t=f(l,s);n(t)&&(a.origin=m(t.x,t.y,t.z))}t.notifyMeshTransformChanged(),t.notifyGeometryChanged()}}}(t,e,e.transform,a);if(!e.spatialReference.equals(a))return null;let o=0,s=0,l=0;return{move:(a,n,r)=>{const c=a-o,u=n-s,h=r-l;if(c||u||h){const p=new b(e.origin.x+c,e.origin.y+u,e.origin.z+h,e.origin.spatialReference);e.centerAt(p,{geographic:i===g.Global}),t.notifyGeometryChanged(),o=a,s=n,l=r}}}}(t,i,o,a);const s=j(i,o),l=i.spatialReference;return r(s)?null:{move:(e,a,n)=>{const r=E(s.clone(),e,a,n);r.spatialReference.equals(l)?t.geometry=r:t.geometry=f(r,l)}}}(t,i.mapStart.spatialReference,e)),r(a))return null;const o=i.mapEnd.x-i.mapStart.x,s=i.mapEnd.y-i.mapStart.y,l=i.mapEnd.z-i.mapStart.z;return a.move(o,s,l),{...i,translationX:o,translationY:s,translationZ:l}}}function j(t,e){return r(t)?null:t.spatialReference.equals(e)?t.clone():f(t,e)}function R(t,e=null,a){let i=null;const o=n(e)&&!t.spatialReference.equals(e)?t=>n(t)?f(t,e):t:t=>t,s={exclude:[],...a};return e=>{if("start"===e.action&&(i=o(t.toMap(e.screenStart,s))),r(i))return null;const a=o(t.toMap(e.screenEnd,s));return n(a)?{...e,mapStart:i,mapEnd:a}:null}}function C(t,e){const a=t.map((t=>i(w(t,e)))).filter((t=>n(t)));return t=>{const e=t.mapEnd.x-t.mapStart.x,n=t.mapEnd.y-t.mapStart.y,r=t.mapEnd.z-t.mapStart.z;return a.forEach((e=>e(t))),{...t,translationX:e,translationY:n,translationZ:r}}}function T(t,e){const a=new Map;for(const n of e)a.set(n,l(t[n]));return e=>(a.forEach(((e,a)=>{t[a]=e})),e)}function F(t){return n(t.geometry)&&"mesh"===t.geometry.type?function(t,e){const a=n(e.transform)?e.transform.clone():null,r=e.vertexAttributes.clonePositional();return n=>(e.transform=a,e.vertexAttributes=r,t.notifyGeometryChanged(),n)}(t,t.geometry):T(t,["geometry"])}function z(t){const e=t.map((t=>i(F(t)))).filter((t=>n(t)));return t=>(e.forEach((e=>e(t))),t)}function I(){let t=0,e=0,a=0;return n=>{"start"===n.action&&(t=n.mapStart.x,e=n.mapStart.y,a=n.mapStart.z);const r=n.mapEnd.x-t,i=n.mapEnd.y-e,o=n.mapEnd.z-a;return t=n.mapEnd.x,e=n.mapEnd.y,a=n.mapEnd.z,{...n,mapDeltaX:r,mapDeltaY:i,mapDeltaZ:o,mapDeltaSpatialReference:n.mapStart.spatialReference}}}function G(){let t=0,e=0;return a=>{"start"===a.action&&(t=a.screenStart.x,e=a.screenStart.y);const n=a.screenEnd.x-t,r=a.screenEnd.y-e;return t=a.screenEnd.x,e=a.screenEnd.y,{...a,screenDeltaX:n,screenDeltaY:r}}}function U(t,e){let a=null,n=0,r=0;return i=>{if("start"===i.action&&(a=t.toScreen(e),a.x<0||a.x>t.width||a.y<0||a.y>t.height?a=null:(n=i.screenStart.x-a.x,r=i.screenStart.y-a.y)),null==a)return null;const o=p(i.screenEnd.x-n,0,t.width),s=p(i.screenEnd.y-r,0,t.height),l=d(o,s);return i.screenStart=a,i.screenEnd=l,i}}t([s({constructOnly:!0})],x.prototype,"view",void 0),t([s({readOnly:!0})],x.prototype,"active",null),t([s({value:!0})],x.prototype,"visible",null),t([s({value:!0})],x.prototype,"editable",null),t([s({readOnly:!0})],x.prototype,"manipulators",void 0),t([s({readOnly:!0})],x.prototype,"updating",null),t([s()],x.prototype,"cursor",null),t([s({readOnly:!0})],x.prototype,"automaticManipulatorSelection",void 0),t([s()],x.prototype,"hasFocusedManipulators",null),t([s()],x.prototype,"hasGrabbedManipulators",void 0),t([s()],x.prototype,"hasHoveredManipulators",void 0),t([s()],x.prototype,"firstGrabbedManipulator",void 0),t([s({readOnly:!0})],x.prototype,"created",void 0),t([s({readOnly:!0})],x.prototype,"removeIncompleteOnCancel",void 0),x=t([c("esri.views.interactive.InteractiveToolBase")],x);class D{constructor(){this.execute=()=>{}}next(t,e=new D){return n(t)&&(this.execute=a=>{const r=t(a);n(r)&&e.execute(r)}),e}}function O(t,e,a=[]){if("2d"===t.type)return t=>t;let r=null;return i=>{"start"===i.action&&(r=t.toMap(i.screenStart,{exclude:a}),n(r)&&(r.z=v(r,t,e)));const o=t.toMap(i.screenEnd,{exclude:a});n(o)&&(o.z=v(o,t,e));const s=n(r)&&n(o)?{sceneStart:r,sceneEnd:o}:null;return{...i,scenePoints:s}}}export{D as E,x as I,M,R as a,F as b,S as c,w as d,U as e,A as f,G as g,I as h,C as i,z as j,T as r,O as s};
