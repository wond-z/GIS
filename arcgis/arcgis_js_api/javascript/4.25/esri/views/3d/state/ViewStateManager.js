// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Camera ../../../Viewpoint ../../../core/Accessor ../../../core/Handles ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/scheduling ../../../core/screenUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/Extent ../../../geometry/Point ../../../geometry/support/webMercatorUtils ../../ViewingMode ../camera/constraintUtils ../camera/intersectionUtils ./ConstraintsManager ./Frustum ./GoToOperation ./controllers/SurfaceCollisionCorrectionController ../support/cameraUtils ../support/PropertiesPool ../support/viewpointUtils ../webgl-engine/lib/Camera ../../support/RenderState".split(" "),
function(e,w,g,t,z,G,H,p,l,q,I,J,h,ba,ca,K,L,M,B,N,C,O,P,Q,R,D,S,T,U,V,f,W,E,u,v){e.ViewStateManager=function(F){function x(a){var b=F.call(this,a)||this;b._propertiesPool=new W.PropertiesPool({frustum:T.Frustum},w._assertThisInitialized(b));b._handles=new H;b._cameraSetByUser=!1;b._gotoOperation=null;b.ready=!1;b._windowDevicePixelRatio=1;b._devicePixelRatioOverride=null;b._maximumPixelRatioOverride=null;b._cameraChangeTime=0;b.test={contentCameraResetState:new Map,setDevicePixelRatio:c=>b._devicePixelRatioOverride=
c,setMaximumPixelRatio:c=>b._maximumPixelRatioOverride=c,renderState:null};return b}w._inheritsLoose(x,F);var d=x.prototype;d.installContentCameraReset=function(a){this._handles.remove("contentCameraReset");this.test.contentCameraResetState.clear();if(!this.view.state.fixedContentCamera)return!1;const b=this.zoom,c=this.view.state.camera.distance**2,m=M.fromArray(this.view.state.camera.center),n=a.sticky?this.contentCamera.clone():null;this._handles.add([q.watch(()=>this.contentCamera,()=>{a.sticky||
(this._handles.remove("contentCameraReset"),this.test.contentCameraResetState.clear())}),q.watch(()=>this.zoom,k=>{this.test.contentCameraResetState.set("view.zoom",Math.abs(k-b)/2);2<Math.abs(k-b)?this.contentCamera=null:this.view.state.fixedContentCamera||(this.contentCamera=n)}),q.watch(()=>this.view.state.camera,k=>{k=L.squaredDistance(m,k.center);this.test.contentCameraResetState.set("camera.center",k/c);k>c?this.contentCamera=null:this.view.state.fixedContentCamera||(this.contentCamera=n)})],
"contentCameraReset");return!0};d._paddingToArray=function(a,b,c){a?B.set(c,a.top||0,a.right||0,a.bottom||0,a.left||0):B.set(c,0,0,0,0);for(a=0;4>a;a++)c[a]=Math.round(c[a]*b)};d.initialize=function(){this._cameraChangeTime=performance.now();this._handles.add([q.on(()=>this.view.state.events,"before-camera-change",a=>this._updateElevation(a.camera)),q.watch(()=>this.view.state?.camera,(a,b)=>this._cameraChangedHandler(a,b),q.sync)]);q.when(()=>this.view.state?.camera,a=>this._updateElevation(a),{once:!0,
sync:!0});this._handles.add([I.addFrameTask({prepare:()=>this._prepareFrame()}),q.watch(()=>this.view.state.cameraController,()=>{this._cameraSetByUser=!0;this._handles.remove("pending-initial-view")}),q.on(()=>this.view.state.events,"camera-projection-changed",()=>this.notifyChange("scale"))])};d.destroy=function(){this.exit();this._handles&&(this._handles.destroy(),this._handles=null);this._propertiesPool&&(this._propertiesPool.destroy(),this._propertiesPool=null)};d.init=function(){this.constraintsManager=
new S.ConstraintsManager({view:this.view});this._prepareFrame();var a=this._getInitialProperties();this._cameraSetByUser=!1;this._set("ready",!0);for(const b of a)this.set(b.name,b.value);this._cameraSetByUser||((a=this.view.get("map.initialViewProperties.viewpoint")||this.view.initialExtent)&&this.isCompatible(a)?this._setInitialView(a):this.view.state.viewingMode===Q.ViewingMode.Local&&this._handles.add(q.when(()=>this.view.basemapTerrain.ready,()=>{this._handles.remove("pending-initial-view");
this._setInitialView(this.view.dataExtent)},{once:!0,initial:!0}),"pending-initial-view"))};d.exit=function(){this._cancelGoToOperation();this.ready&&(this._override("padding",this.padding),this._set("ready",!1),this._clearOverride("hasInitialView"),this._cameraSetByUser=!1,this._handles.remove("pending-initial-view"),this.constraintsManager&&(this.constraintsManager.destroy(),this.constraintsManager=null))};d.goTo=function(){var a=w._asyncToGenerator(function*(b,c){c={animate:!0,...c};l.isSome(this._gotoOperation)&&
this._gotoOperation.abort(c.animate);this._gotoOperation=new U.GoToOperation(b,c,this.view);this.view.resourceController.scheduler.stopFrame();return this._gotoOperation});return function(b,c){return a.apply(this,arguments)}}();d.debugSetCameraOnContent=function(){this.setStateCamera(D.cameraOnContentAlongViewDirection(this.view),{applyConstraints:!1})};d.step=function(a){const b=this.view.state,c=b?.cameraController;c&&(b.updateCamera(m=>c.stepController(a,m)),c.steppingFinished&&c.finishController())};
d._cancelGoToOperation=function(){l.isSome(this._gotoOperation)&&(this._gotoOperation.abort(),this._gotoOperation=null)};d._getInitialProperties=function(){const a=new Set,b=[];for(const {propertyName:c,overrides:m}of X){const n=a.has(c),k=this._isOverridden(c);!n&&k&&b.push({name:c,value:this._get(c)});this._clearOverride(c);(n||k)&&m.forEach(Y=>a.add(Y))}return b};d._setInitialView=function(a){if(!l.isNone(a)&&!this._cameraSetByUser)if(a instanceof t)this.setStateCamera(f.externalToInternal(this.view,
a),{applyConstraints:!1});else if(a instanceof z)if(a.targetGeometry instanceof C){var b=f.fromExtent(this.view,a.targetGeometry,0,.5,f.OrientationMode.LOCKED);l.isSome(b)&&this.setStateCamera(f.externalToInternal(this.view,b),{applyConstraints:!0})}else b={applyConstraints:!a.camera},a=this._viewpointToCamera(a),this.setStateCamera(a,b);else b=f.fromExtent(this.view,a,0,.5,f.OrientationMode.LOCKED),l.isSome(b)&&this.setStateCamera(f.externalToInternal(this.view,b),{applyConstraints:!0})};d._updatePropertyBeforeReady=
function(a,b){if(this.ready)return!1;this._override(a,b);b&&Z.includes(a)&&this._override("hasInitialView",!0);return!0};d.isCompatible=function(a){return l.isNone(a)?!1:a instanceof z?a.camera?this.isCompatible(a.camera):this.isCompatible(a.targetGeometry):a instanceof t?this.isCompatible(a.position):a.spatialReference&&P.canProject(a.spatialReference,this.view.spatialReference)};d._getPreservingHeadingTilt=function(a=aa){this._cameraSetByUser?(a.heading=this.camera.heading,a.tilt=this.camera.tilt):
(a.heading=0,a.tilt=.5);return a};d._centerPointAtDistanceToCamera=function(a,b,c=r){const {heading:m,tilt:n}=this._getPreservingHeadingTilt();a=f.getObserverForPointAtDistance(this.view,m,n,a,b,f.OrientationMode.ADJUST);if(l.isNone(a))return null;c.copyFrom(this.view.state.camera);c.eye=a.eye;c.center=a.center;c.up=a.up;return c};d._centerToCamera=function(a){const b=this.view.pointsOfInterest.centerOnContent;b.runTask();return this._centerPointAtDistanceToCamera(a,b.distance)};d._extentToCamera=
function(a){const {heading:b,tilt:c}=this._getPreservingHeadingTilt();a=f.fromExtent(this.view,a,b,c,f.OrientationMode.ADJUST,A);return l.isSome(a)?f.externalToInternal(this.view,a):null};d._scaleToCamera=function(a){if(null==a)return null;const b=this.view.pointsOfInterest.centerOnContent;b.runTask();const c=b.renderLocation;a=f.scaleToDistance(this.view,a,b.location.latitude);return this._centerPointAtDistanceToCamera(c,a)};d._zoomToCamera=function(a){return this._scaleToCamera(f.zoomToScale(this.view,
a))};d._viewpointToCamera=function(a){return f.externalToInternal(this.view,E.toCamera(this.view,a))};d.setStateCamera=function(a,b){if(l.isNone(a)||!this.view.state.stopActiveCameraController())return!1;this._cameraSetByUser=!0;b.doNotCancelGoToOperation||this._cancelGoToOperation();this.view.state.updateCamera(c=>{b.positionAndOrientationOnly?(c.eye=a.eye,c.center=a.center,c.up=a.up):c.copyFrom(a);b.applyConstraints&&R.applyAll(this.view,c)});b.applyConstraints||(this.view.state.cameraController=
new V.SurfaceCollisionCorrectionController({view:this.view,desiredCamera:a}));return!0};d._prepareFrame=function(){const {surface:a,canvas:b}=this.view;if(a&&b){this._windowDevicePixelRatio=window.devicePixelRatio;var c=this._devicePixelRatio,m=Math.round(a.clientWidth*c),n=Math.round(a.clientHeight*c);if(0!==m&&0!==n){if(b.width!==m||b.height!==n)b.width=m,b.height=n;if(this.view.state){const k=this.view.state.camera;if(k.fullWidth!==m||k.fullHeight!==n||k.pixelRatio!==c)r.copyFrom(k),r.pixelRatio!==
c&&(this._paddingToArray(this.padding,c,y),r.padding=y),r.fullWidth=m,r.fullHeight=n,r.pixelRatio=c,this.view.state.camera=r;this._updateRenderState()}}}};d._updateElevation=function(a){var b=this.view.basemapTerrain&&this.view.basemapTerrain.spatialReference;const c=this.view.renderCoordsHelper?.getAltitude(a.eye)??0;b=b?D.surfaceElevationBelowRenderLocation(this.view,a.eye):0;a.relativeElevation=c-b};d._updateRenderState=function(){l.isSome(this.test.renderState)?this.view.state.mode=this.test.renderState:
this.view.animation?this.view.state.mode=v.RenderState.ANIMATING:this.view.interacting?this.view.state.mode=v.RenderState.INTERACTING:(this.view.state.mode===v.RenderState.ANIMATING&&(this._cameraChangeTime=0),300>=performance.now()-this._cameraChangeTime?this.view.state.mode=v.RenderState.INTERACTING:this.view.state.mode=v.RenderState.IDLE)};d._cameraChangedHandler=function(a,b){a&&b&&a.almostEquals(b)||(this._cameraChangeTime=performance.now(),this._updateRenderState())};w._createClass(x,[{key:"camera",
get:function(){const a=this._get("camera");if(!this.ready)return a;const b=f.internalToExternal(this.view,this.view.state.camera,A);return b&&a&&b.equals(a)?a:b.clone()},set:function(a){this._updatePropertyBeforeReady("camera",a)||(this.view.elevationProvider.enableElevationCache(!0),this.setStateCamera(f.externalToInternal(this.view,a),{applyConstraints:!1})||p.getLogger(this.declaredClass).error("#camera\x3d","Invalid camera",a),this.view.elevationProvider.enableElevationCache(!1))}},{key:"contentCamera",
get:function(){const a=this._get("contentCamera");if(!this.ready)return a;const b=f.internalToExternal(this.view,this.view.state.contentCamera,A);return b&&a&&b.equals(a)?a:b.clone()},set:function(a){this._updatePropertyBeforeReady("contentCamera",a)||(a=f.externalToInternal(this.view,a),l.isNone(a)?this.view.state.contentCamera=null:(this._updateElevation(a),this.view.state.contentCamera=a))}},{key:"center",get:function(){return this.ready?this.view.pointsOfInterest.centerOnContent.location:this._get("center")},
set:function(a){this._updatePropertyBeforeReady("center",a)||(a?this.isCompatible(a)?this.setStateCamera(this._centerToCamera(a),{applyConstraints:!0})?this.view.pointsOfInterest.centerOnContent.runTask():p.getLogger(this.declaredClass).error("#center\x3d","Invalid center",a):p.getLogger(this.declaredClass).error("#center\x3d","Center has an incompatible spatial reference (center: "+(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):p.getLogger(this.declaredClass).error("#center\x3d",
"Center may not be null or undefined"))}},{key:"extent",get:function(){if(!this.ready)return this._get("extent");var a=this.view;a=f.toExtent(a,a.state.camera,a.pointsOfInterest.centerOnContent.renderLocation);return l.isSome(a)?a:this._get("extent")},set:function(a){this._updatePropertyBeforeReady("extent",a)||(a?this.isCompatible(a)?this.setStateCamera(this._extentToCamera(a),{applyConstraints:!0})||p.getLogger(this.declaredClass).error("#extent\x3d","Invalid extent",a):p.getLogger(this.declaredClass).error("#extent\x3d",
"Extent has an incompatible spatial reference (extent: "+(a.spatialReference?a.spatialReference.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a):p.getLogger(this.declaredClass).error("#extent\x3d","Extent may not be null or undefined"))}},{key:"frustum",get:function(){const a=this._propertiesPool.get("frustum");a.renderCoordsHelper=this.view.renderCoordsHelper;a.update(this.view.state.camera);return a}},{key:"hasInitialView",get:function(){return!!this.view.get("map.initialViewProperties.viewpoint")}},
{key:"scale",get:function(){if(this.ready){const a=this.view.pointsOfInterest.centerOnContent;return f.distanceToScale(this.view,a.distance,a.location.latitude)}return this._get("scale")},set:function(a){this._updatePropertyBeforeReady("scale",a)||this.setStateCamera(this._scaleToCamera(a),{applyConstraints:!0})||p.getLogger(this.declaredClass).error("#scale\x3d","Invalid scale",a)}},{key:"padding",get:function(){if(!this.ready)return this._get("padding");var a=this.view.state.camera,b=a.padding;
const c=a.pixelRatio;a=this._get("padding");const m=Math.round(b[u.PaddingSide.TOP]/c),n=Math.round(b[u.PaddingSide.RIGHT]/c),k=Math.round(b[u.PaddingSide.BOTTOM]/c);b=Math.round(b[u.PaddingSide.LEFT]/c);return null!=a&&a.top===m&&a.right===n&&a.bottom===k&&a.left===b?a:{top:m,right:n,bottom:k,left:b}},set:function(a){this._updatePropertyBeforeReady("padding",a)||(this._paddingToArray(a,this.view.state.camera.pixelRatio,y),this.view.state.updateCamera(b=>b.padding=y))}},{key:"screenCenter",get:function(){const a=
this.padding;return J.createScreenPoint((this.view.width-(a.left+a.right))/2+a.left,(this.view.height-(a.top+a.bottom))/2+a.top)}},{key:"viewpoint",get:function(){return this.ready?E.fromCamera(this.view,this.camera):this._get("viewpoint")},set:function(a){if(!this._updatePropertyBeforeReady("viewpoint",a))if(a)if(this.isCompatible(a))this.setStateCamera(this._viewpointToCamera(a),{applyConstraints:!a.camera})||p.getLogger(this.declaredClass).error("#viewpoint\x3d","Invalid viewpoint",a);else{var b=
l.isSome(a.camera)?a.camera.position:a.targetGeometry;b=l.isSome(b)&&b.spatialReference;p.getLogger(this.declaredClass).error("#viewpoint\x3d","Viewpoint has an incompatible spatial reference (viewpoint: "+(b?b.wkid:"none")+", view: "+this.view.spatialReference.wkid+")",a)}else p.getLogger(this.declaredClass).error("#viewpoint\x3d","Viewpoint may not be null or undefined")}},{key:"zoom",get:function(){return this.ready?f.scaleToZoom(this.view,this.scale):this._get("zoom")},set:function(a){this._updatePropertyBeforeReady("zoom",
a)||this.setStateCamera(this._zoomToCamera(a),{applyConstraints:!0})||p.getLogger(this.declaredClass).error("#zoom\x3d","Invalid zoom",a)}},{key:"maximumPixelRatio",get:function(){if(l.isSome(this._maximumPixelRatioOverride))return this._maximumPixelRatioOverride;let a=Infinity;const {maximumPixelRatio:b,maximumRenderResolution:c}=this.view.qualitySettings;null!=b&&(a=Math.min(a,b));null!=c&&(a=Math.min(a,c/Math.max(this.view.width,this.view.height)));return a}},{key:"_devicePixelRatio",get:function(){return l.isNone(this._devicePixelRatioOverride)?
Math.min(this._windowDevicePixelRatio,this.maximumPixelRatio):this._devicePixelRatioOverride}}]);return x}(G);g.__decorate([h.property({type:t,dependsOn:["view.state.camera","ready"]})],e.ViewStateManager.prototype,"camera",null);g.__decorate([h.property({type:t,dependsOn:["view.state.contentCamera","ready"]})],e.ViewStateManager.prototype,"contentCamera",null);g.__decorate([h.property({type:O})],e.ViewStateManager.prototype,"center",null);g.__decorate([h.property({type:C})],e.ViewStateManager.prototype,
"extent",null);g.__decorate([h.property({readOnly:!0})],e.ViewStateManager.prototype,"frustum",null);g.__decorate([h.property({readOnly:!0})],e.ViewStateManager.prototype,"hasInitialView",null);g.__decorate([h.property({readOnly:!0,type:Boolean})],e.ViewStateManager.prototype,"ready",void 0);g.__decorate([h.property({type:Number})],e.ViewStateManager.prototype,"scale",null);g.__decorate([h.property()],e.ViewStateManager.prototype,"padding",null);g.__decorate([h.property({readOnly:!0})],e.ViewStateManager.prototype,
"screenCenter",null);g.__decorate([h.property({constructOnly:!0})],e.ViewStateManager.prototype,"view",void 0);g.__decorate([h.property({type:z})],e.ViewStateManager.prototype,"viewpoint",null);g.__decorate([h.property({type:Number})],e.ViewStateManager.prototype,"zoom",null);g.__decorate([h.property()],e.ViewStateManager.prototype,"maximumPixelRatio",null);g.__decorate([h.property()],e.ViewStateManager.prototype,"_devicePixelRatio",null);g.__decorate([h.property()],e.ViewStateManager.prototype,"_windowDevicePixelRatio",
void 0);g.__decorate([h.property()],e.ViewStateManager.prototype,"_devicePixelRatioOverride",void 0);g.__decorate([h.property()],e.ViewStateManager.prototype,"_maximumPixelRatioOverride",void 0);e.ViewStateManager=g.__decorate([K.subclass("esri.views.3d.state.ViewStateManager")],e.ViewStateManager);const Z="camera viewpoint extent scale center zoom".split(" "),X=[{propertyName:"camera",overrides:["viewpoint"]},{propertyName:"viewpoint",overrides:["extent"]},{propertyName:"extent",overrides:["center",
"scale"]},{propertyName:"center",overrides:[]},{propertyName:"scale",overrides:["zoom"]},{propertyName:"zoom",overrides:[]},{propertyName:"padding",overrides:[]}],aa={heading:0,tilt:0},A=new t,r=new u.Camera,y=N.create();e.INTERACTING_TIMEOUT=100;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});