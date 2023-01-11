// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry ../../../core/compilerUtils ../../../core/Evented ../../../core/mathUtils ../../../core/maybe ../../../core/screenUtils ../../../core/accessorSupport/utils ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../../../geometry/support/lineSegment ../../../geometry/support/plane ../../../geometry/support/ray ../../../geometry/support/vectorStacks ../../../layers/graphics/hydratedFeatures ../support/ElevationProvider ../support/geometryUtils/ray ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Camera ../webgl-engine/lib/Object3D ../webgl-engine/lib/WebGLLayer ../../interactive/interfaces ../../../geometry/Point".split(" "),
function(K,W,L,X,Y,M,k,t,Z,N,aa,u,y,ba,l,q,z,ca,da,v,w,ea,A,G,H,I,fa,ha,ia,ja,p,B){function O(r){return 0!==r[12]||0!==r[13]||0!==r[14]}L=function(){function r(a){this._camera=new ha.Camera;this._elevation={offset:0,override:null};this.collisionType={type:"point"};this.collisionPriority=0;this._renderObjects=[];this._available=this.autoScaleRenderObjects=!0;this._noDisplayCount=0;this._radius=10;this._worldSized=!1;this.focusMultiplier=2;this.touchMultiplier=2.5;this.worldOriented=!1;this._modelTransform=
y.create();this._worldFrame=null;this._renderLocation=q.create();this._renderLocationDirty=!0;this._location=new B({x:0,y:0,z:0});this._elevationAlignedLocation=new B;this.interactive=this._elevationAlignedLocationDirty=!0;this.selectable=!1;this.grabbable=!0;this.grabCursor=this.cursor=null;this._selected=this._hovering=this.dragging=this._grabbing=!1;this._state=p.ManipulatorStateCustomFlags.None;this._focused=!1;this.events=new Y.EventEmitter;this._screenLocation={screenPointArray:t.createScreenPointArray(),
renderScreenPointArray:t.createRenderScreenPointArray3(),pixelSize:0};this._screenLocationDirty=!0;this._applyObjectTransform=null;this._engineResourcesAddedToStage=!1;this._engineResources=null;this._attached=!1;this._materialIdReferences=this._engineLayer=null;this._location.spatialReference=a.view.spatialReference;for(const b in a)this[b]=a[b];this.view.state&&this.view.state.camera&&this._camera.copyFrom(this.view.state.camera)}var h=r.prototype;h.destroy=function(){this._removeResourcesFromStage();
this._camera=this.view=this._engineResources=null};h.disableDisplay=function(){this._noDisplayCount++;1===this._noDisplayCount&&this._updateEngineObject();return{remove:Z.once(()=>{this._noDisplayCount--;0===this._noDisplayCount&&this._updateEngineObject()})}};h._updateElevationAlignedLocation=function(){this._elevationAlignedLocation.x=this.location.x;this._elevationAlignedLocation.y=this.location.y;const a=k.isSome(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=
a+this._elevation.offset;this._elevationAlignedLocation.spatialReference=G.hydratedSpatialReference(this.location.spatialReference);this._screenLocationDirty=this._renderLocationDirty=!0;this._elevationAlignedLocationDirty=!1};h.grabbableForEvent=function(){return!0};h.updateStateEnabled=function(a,b){this.state=b?this.state|a:this.state&~a};h._setFocused=function(a){a!==this._focused&&(this._focused=a,this.events.emit("focus-changed",{action:!0===a?"focus":"unfocus"}))};h._ensureScreenLocation=function(){if(this._screenLocationDirty){this._screenLocation.pixelSize=
this._camera.computeScreenPixelSizeAt(this.renderLocation);this._screenLocationDirty=!1;if(O(this._modelTransform)){var a=this._calculateModelTransformOffset(ka);a=l.add(a,a,this.renderLocation)}else a=this.renderLocation;this._camera.projectToRenderScreen(a,this._screenLocation.renderScreenPointArray);this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}};h.intersectionDistance=function(a,b){if(!this.available)return null;a=t.screenPointObjectToArray(a,
la);var d=this._getCollisionRadius(b);b=-1*this.collisionPriority;switch(this.collisionType.type){case "point":if(ba.squaredDistance(this.screenLocation.screenPointArray,a)<d*d)return this.screenLocation.renderScreenPointArray[2]+b;break;case "line":var f=this.collisionType.paths,c=this._getWorldToScreenObjectScale();c=this._calculateObjectTransform(c,C);d*=this.screenLocation.pixelSize;a=I.fromScreen(this._camera,a,J);if(k.isNone(a))break;for(var g of f)if(0!==g.length){f=l.transformMat4(x,g[0],
c);for(var e=1;e<g.length;e++){var m=l.transformMat4(P,g[e],c),n=v.closestRayDistance2(v.fromPoints(f,m,Q),a);if(null!=n&&n<d*d)return c=l.add(A.sv3d.get(),f,m),l.scale(c,c,.5),a=t.castRenderScreenPointArray(A.sv3d.get()),this._camera.projectToRenderScreen(c,a),a[2]+b;l.copy(f,m)}}break;case "disc":f=this.collisionType.direction;c=this.collisionType.offset??q.ZEROS;g=this._getWorldToScreenObjectScale();e=this._calculateObjectTransform(g,C);g=d*this.screenLocation.pixelSize;a=I.fromScreen(this._camera,
a,J);if(k.isNone(a))break;d=N.fromMat4(R,e);d=l.transformMat3(S,f,d);c=l.transformMat4(T,c,e);w.fromPositionAndNormal(c,d,D);d=U;if(w.intersectRay(D,a,d)&&l.squaredDistance(d,c)<g*g)return this.screenLocation.renderScreenPointArray[2]+b;break;case "ribbon":const {paths:E,direction:F}=this.collisionType;g=this._getWorldToScreenObjectScale();g=this._calculateObjectTransform(g,C);d*=this._camera.computeScreenPixelSizeAt(this.renderLocation);f=I.fromScreen(this._camera,a,J);if(k.isNone(f))break;a=N.fromMat4(R,
g);a=l.transformMat3(S,F,a);e=this._calculateModelTransformPosition(T);w.fromPositionAndNormal(e,a,D);a=U;if(!w.intersectRay(D,f,a))break;for(c of E)if(0!==c.length)for(f=l.transformMat4(x,c[0],g),e=1;e<c.length;e++){m=l.transformMat4(P,c[e],g);n=v.distance2(v.fromPoints(f,m,Q),a);if(null!=n&&n<d*d)return c=l.add(A.sv3d.get(),f,m),l.scale(c,c,.5),a=t.castRenderScreenPointArray(A.sv3d.get()),this._camera.projectToRenderScreen(c,a),a[2]+b;l.copy(f,m)}break;default:X.neverReached(this.collisionType)}return null};
h.attach=function(a={manipulator3D:{}}){if(this.view._stage){a=a.manipulator3D;if(k.isNone(a.engineLayerId)){const b=new ja.WebGLLayer({isPickable:!1,updatePolicy:fa.UpdatePolicy.SYNC});this.view._stage.add(b);a.engineLayerId=b.id;this._engineLayer=b}else this.view._stage?.getObject&&(this._engineLayer=this.view._stage.getObject(a.engineLayerId));a.engineLayerReferences=(a.engineLayerReferences||0)+1;this._materialIdReferences=a.materialIdReferences;k.isNone(this._materialIdReferences)&&(this._materialIdReferences=
new Map,a.materialIdReferences=this._materialIdReferences);this._camera.copyFrom(this.view.state.camera);this._attached=!0;this._updateEngineObject();z.canProjectWithoutEngine(this._location.spatialReference,this.view.spatialReference)||(this.location=new B({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}};h.detach=function(a={manipulator3D:{}}){a=a.manipulator3D;a.engineLayerReferences--;const b=0===a.engineLayerReferences;b&&(a.engineLayerId=null);this._removeResourcesFromStage(b);this._materialIdReferences=
this._engineLayer=this._engineResources=null;this._attached=!1};h.onViewChange=function(){this._camera.copyFrom(this.view.state.camera);this._screenLocationDirty=!0;this._updateEngineObject()};h.onElevationChange=function(a){z.projectPoint(this.location,V,a.spatialReference);da.containsPointObject(a.extent,V)&&(this.location=this._location)};h._evaluateElevationAlignment=function(a=this.location){if(k.isNone(this.elevationInfo))return!1;let b=null,d=0;const f=k.unwrapOr(this.elevationInfo.offset,
0);switch(this.elevationInfo.mode){case "on-the-ground":b=k.unwrapOr(H.getElevationAtPoint(this.view.elevationProvider,a,"ground"),0);break;case "relative-to-ground":d=k.unwrapOr(H.getElevationAtPoint(this.view.elevationProvider,a,"ground"),0)+f;break;case "relative-to-scene":d=k.unwrapOr(H.getElevationAtPoint(this.view.elevationProvider,a,"scene"),0)+f;break;case "absolute-height":d=f}return d!==this._elevation.offset||b!==this._elevation.override?(this._elevation.offset=d,this._elevation.override=
b,!0):!1};h._updateEngineObject=function(){if(this._attached)if(this.available){var a=this._getWorldToScreenObjectScale(),b=C;!0===this.autoScaleRenderObjects?(a*=this._getFocusedSize(this._radius,this.focused),this._calculateObjectTransform(a,b)):this._calculateObjectTransform(a,b);var {objectsByState:d}=this._ensureEngineResources();a=(this.focused?p.ManipulatorStateFlags.Focused:p.ManipulatorStateFlags.Unfocused)|(this.selected?p.ManipulatorStateFlags.Selected:p.ManipulatorStateFlags.Unselected);
var f=0<this._noDisplayCount;for(const {stateMask:c,objects:g}of d)if(f)for(const e of g)e.setVisible(!1);else if(d=(c&p.ManipulatorStateCustomFlags.All)===p.ManipulatorStateCustomFlags.None||(this.state&c)===(c&p.ManipulatorStateCustomFlags.All),(c&p.ManipulatorStateFlags.All)!==p.ManipulatorStateFlags.None&&(a&c)!==(c&p.ManipulatorStateFlags.All)||!d)for(const e of g)e.setVisible(!1);else for(const e of g)e.setVisible(!0),e.transformation=b}else this._removeResourcesFromStage()};h._ensureEngineResources=
function(){if(k.isNone(this._engineResources)){const a=k.unwrap(this._engineLayer),b=[],d=new Set;this.renderObjects.forEach(({material:e})=>{d.has(e)||(b.push(e),d.add(e))});const f=(e,m)=>{const {geometry:n,material:E,transform:F}=m;Array.isArray(n)?n.forEach(ma=>e.addGeometry(ma,E,F)):e.addGeometry(n,E,F)},c=new Map;this._renderObjects.forEach(e=>{const m=new ia.Object3D({castShadow:!1});f(m,e);e=e.stateMask||0;const n=c.get(e)||[];n.push(m);c.set(e,n)});const g=[];c.forEach((e,m)=>g.push({stateMask:m,
objects:e}));this._engineResources={objectsByState:g,layer:a,materials:b}}this._addResourcesToStage();return this._engineResources};h._addResourcesToStage=function(){if(!this._engineResourcesAddedToStage&&!k.isNone(this._engineResources)){var {objectsByState:a,layer:b,materials:d}=this._engineResources;d.forEach(f=>{const c=k.unwrap(this._materialIdReferences),g=c.get(f.id)||0;0===g&&this.view._stage.add(f);c.set(f.id,g+1)});a.forEach(({objects:f})=>{b.addMany(f);this.view._stage.addMany(f)});this._engineResourcesAddedToStage=
!0}};h._removeResourcesFromStage=function(a=!1){if(this._engineResourcesAddedToStage&&!k.isNone(this._engineResources)&&this.view._stage){var {objectsByState:b,layer:d,materials:f}=this._engineResources;b.forEach(({objects:c})=>{d.removeMany(c);this.view._stage.removeMany(c)});f.forEach(c=>{const g=k.unwrap(this._materialIdReferences),e=g.get(c.id);1===e?(this.view._stage.remove(c),g.delete(c.id)):g.set(c.id,e-1)});a&&this.view._stage.remove(d);this._engineResourcesAddedToStage=!1}};h._getCollisionRadius=
function(a){return this._getFocusedSize(this.radius,!0)*("touch"===a?this.touchMultiplier:1)};h._getFocusedSize=function(a,b){return a*(b?this.focusMultiplier:1)};h._getWorldToScreenObjectScale=function(){return this._worldSized?1:this.screenLocation.pixelSize};h._calculateModelTransformPosition=function(a){var b=this._getWorldToScreenObjectScale();b=this._calculateObjectTransform(b,na);return l.set(a,b[12],b[13],b[14])};h._calculateModelTransformOffset=function(a){const b=this._calculateModelTransformPosition(a);
return l.subtract(a,b,this.renderLocation)};h._calculateObjectTransform=function(a,b){u.set(b,a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1);this._worldFrame&&u.multiply(b,b,this._worldFrame);u.multiply(b,b,this._modelTransform);b[12]+=this.renderLocation[0];b[13]+=this.renderLocation[1];b[14]+=this.renderLocation[2];b[15]=1;k.isSome(this._applyObjectTransform)&&this._applyObjectTransform(b);return b};W._createClass(r,[{key:"elevationInfo",get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=
a;this._renderLocationDirty=this._elevationAlignedLocationDirty=!0;this._updateEngineObject()}},{key:"renderObjects",get:function(){return this._renderObjects},set:function(a){this._removeResourcesFromStage();this._engineResources=null;this._renderObjects=a.slice();this._updateEngineObject()}},{key:"available",get:function(){return this._available},set:function(a){a!==this._available&&(this._available=a,this._updateEngineObject())}},{key:"radius",get:function(){return this._radius},set:function(a){a!==
this._radius&&(this._radius=a,this._updateEngineObject())}},{key:"worldSized",get:function(){return this._worldSized},set:function(a){a!==this._worldSized&&(this._worldSized=a,this._updateEngineObject())}},{key:"modelTransform",get:function(){return this._modelTransform},set:function(a){O(a)&&(this._screenLocationDirty=!0);u.copy(this._modelTransform,a);this._updateEngineObject()}},{key:"renderLocation",get:function(){if(this._renderLocationDirty)if(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,
this._renderLocation),this.worldOriented){this._worldFrame||(this._worldFrame=y.create());a:{var a=this.view,b=this._renderLocation,d=this._worldFrame;switch(a.viewingMode){case "local":u.identity(d);break a;case "global":a=ca.getReferenceEllipsoid(a.renderCoordsHelper.spatialReference),z.sphericalPCPFtoLonLatElevation(b,0,x,0,a.radius),z.computeENUToSphericalPCPFLocalRotation(M.deg2rad(x[0]),M.deg2rad(x[1]),d)}}}else this._worldFrame&&(this._worldFrame=null);return this._renderLocation},set:function(a){this.view.renderCoordsHelper.fromRenderCoords(a,
this._location);this.elevationAlignedLocation=this._location}},{key:"location",get:function(){return this._location},set:function(a){G.clonePoint(a,this._location);this._elevationAlignedLocationDirty=this._screenLocationDirty=this._renderLocationDirty=!0;this._updateEngineObject();this.events.emit("location-update",{location:this._location})}},{key:"elevationAlignedLocation",get:function(){if(!this._elevationAlignedLocationDirty)return this._elevationAlignedLocation;this._evaluateElevationAlignment();
this._updateElevationAlignedLocation();return this._elevationAlignedLocation},set:function(a){G.clonePoint(a,this._location);this._evaluateElevationAlignment();this._location.z-=this._elevation.offset;this._updateElevationAlignedLocation();this._updateEngineObject();this.events.emit("location-update",{location:this._location})}},{key:"grabbing",get:function(){return this._grabbing},set:function(a){a!==this._grabbing&&(this._grabbing=a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},
{key:"hovering",get:function(){return this._hovering},set:function(a){a!==this._hovering&&(this._hovering=a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}},{key:"selected",get:function(){return this._selected},set:function(a){a!==this._selected&&(this._selected=a,this._updateEngineObject(),this.events.emit("select-changed",{action:a?"select":"deselect"}))}},{key:"state",get:function(){return this._state},set:function(a){a!==this._state&&(this._state=a,this._updateEngineObject())}},
{key:"focused",get:function(){return this._focused}},{key:"screenLocation",get:function(){this._ensureScreenLocation();return this._screenLocation}},{key:"applyObjectTransform",get:function(){return this._applyObjectTransform},set:function(a){this._applyObjectTransform=a;this._screenLocationDirty=!0;this._updateEngineObject()}},{key:"attached",get:function(){return this._attached}},{key:"test",get:function(){let a=!1;if(k.isSome(this._engineResources))for(const b in this._engineResources.objectsByState){const d=
this._engineResources.objectsByState[b];for(const f of d.objects)if(f.isVisible){a=!0;break}if(a)break}return{areAnyResourcesVisible:a}}}]);return r}();const la=t.createScreenPointArray(),Q=v.create(),J=ea.create(),R=aa.create(),na=y.create(),C=y.create(),D=w.create(),x=q.create(),P=q.create(),U=q.create(),S=q.create(),T=q.create(),ka=q.create(),V=new B({x:0,y:0,z:0,spatialReference:null});K.Manipulator3D=L;Object.defineProperties(K,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});