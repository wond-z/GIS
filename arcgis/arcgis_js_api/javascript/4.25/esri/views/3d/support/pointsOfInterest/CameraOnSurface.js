// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/Point ../../../ViewingMode ../cameraUtils ../PropertiesPool ./PointOfInterest".split(" "),function(b,
h,c,r,t,d,A,B,u,k,n,p,v,w,x,y){const z=Array;b.CameraOnSurface=function(q){function g(a){a=q.call(this,a)||this;a._dirty=!1;a._propertiesPool=new x.PropertiesPool({location:p,renderLocation:z},h._assertThisInitialized(a));a._estimatedSurfaceAltitude=0;a._pendingElevationQueryController=null;a.cameraName="camera";a.renderLocation=n.create();a._tmpPoint=new p;return a}h._inheritsLoose(g,q);var e=g.prototype;e.initialize=function(){this.scheduler&&this.handles.add(this.scheduler.registerTask(this.task,
this));this.runTask();if(this.map){const a=()=>this._setDirty();this.handles.add(t.on(()=>this.map?.ground?.layers,"change",a,{onListenerAdd:a,onListenerRemove:a}))}this._updateRenderLocation()};e.destroy=function(){this._cancelPendingRequest();this._propertiesPool.destroy();this._propertiesPool=null};e.updateRenderLocation=function(){this._setDirty();this._updateRenderLocation()};e._setDirty=function(){this._dirty||(this._dirty=!0,this.notifyChange("updating"))};e._cancelPendingRequest=function(){const a=
this._pendingElevationQueryController;a&&(this._pendingElevationQueryController=null,a.abort(),this.notifyChange("updating"))};e.runTask=function(){this._cancelPendingRequest();this._dirty=!1;this.notifyChange("updating");if(this.map&&this.map.ground){var a=this.state.spatialReference;this.renderCoordsHelper.fromRenderCoords(this._camera.eye,this._tmpPoint,a);a=1E5<this._tmpPoint.z&&this.renderCoordsHelper.viewingMode===v.ViewingMode.Global&&(a.isWGS84||a.isWebMercator);var f=new AbortController;
this.map.ground.queryElevation(this._tmpPoint,{signal:f.signal,cache:this.cache,minDemResolution:a?1E6:0}).then(l=>this._updateSurfaceAltitude(l.geometry.z)).catch(l=>{r.isAbortError(l)||this._updateSurfaceAltitude(0)}).catch(()=>{}).then(()=>{this._pendingElevationQueryController===f&&(this._pendingElevationQueryController=null,this.notifyChange("updating"));f=null});this._pendingElevationQueryController=f}else this._updateSurfaceAltitude(0)};e._updateSurfaceAltitude=function(a){this._estimatedSurfaceAltitude!==
a&&(this._estimatedSurfaceAltitude=a,this._updateRenderLocation())};e._updateRenderLocation=function(){this.renderCoordsHelper.setAltitude(m,this._estimatedSurfaceAltitude,this._camera.eye);k.exactEquals(this._get("renderLocation"),m)||(this._set("renderLocation",k.copy(this._propertiesPool.get("renderLocation"),m)),this.notifyChange("renderLocation"))};h._createClass(g,[{key:"_camera",get:function(){return this.state[this.cameraName]}},{key:"location",get:function(){const a=this._propertiesPool.get("location");
this.renderCoordsHelper.fromRenderCoords(this.renderLocation,a,this.state.spatialReference);return a}},{key:"scale",get:function(){const a=this._camera,f=k.distance(a.eye,this.renderLocation);return w.distanceToScale({renderCoordsHelper:this.renderCoordsHelper,state:{camera:a}},f,0)}},{key:"updating",get:function(){return this._dirty||null!=this._pendingElevationQueryController}},{key:"running",get:function(){return!this._pendingElevationQueryController&&this._dirty}}]);return g}(y.PointOfInterest);
c.__decorate([d.property({constructOnly:!0})],b.CameraOnSurface.prototype,"scheduler",void 0);c.__decorate([d.property({constructOnly:!0})],b.CameraOnSurface.prototype,"cache",void 0);c.__decorate([d.property({constructOnly:!0})],b.CameraOnSurface.prototype,"task",void 0);c.__decorate([d.property({constructOnly:!0})],b.CameraOnSurface.prototype,"cameraName",void 0);c.__decorate([d.property({readOnly:!0})],b.CameraOnSurface.prototype,"location",null);c.__decorate([d.property({constructOnly:!0})],b.CameraOnSurface.prototype,
"map",void 0);c.__decorate([d.property({readOnly:!0})],b.CameraOnSurface.prototype,"renderLocation",void 0);c.__decorate([d.property({readOnly:!0})],b.CameraOnSurface.prototype,"scale",null);c.__decorate([d.property({readOnly:!0})],b.CameraOnSurface.prototype,"updating",null);b.CameraOnSurface=c.__decorate([u.subclass("esri.views.3d.support.CameraOnSurface")],b.CameraOnSurface);const m=n.create();Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});