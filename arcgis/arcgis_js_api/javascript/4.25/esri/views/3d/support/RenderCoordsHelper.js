// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/mathUtils ../../../core/maybe ../../../core/unitUtils ../../../chunks/mat4 ../../../chunks/vec3 ../../../core/libs/gl-matrix-2/types/vec3 ../../../geometry/projection ../../../geometry/support/Axis ../../../geometry/support/coordinateSystem ../../../geometry/support/plane ../../../geometry/support/vector ../../../geometry/support/vectorStacks ../../../layers/graphics/dehydratedFeatureUtils ../../ViewingMode ../../support/spatialReferenceSupport".split(" "),
function(n,u,v,w,p,x,q,y,l,m,d,z,A,h,r,k,B){function t(e){if(B.isSpatialReferenceSupported(e,k.ViewingMode.Global))return 1;e=d.renderSRFromViewSR(!1,e);return p.getMetersPerUnitForSR(e)}let C=function(){function e(a,b,c,g){this.viewingMode=a;this.spatialReference=b;this.unitInMeters=c;this._coordinateSystem=g;this._tmpCoordinateSystem=d.create(g)}var f=e.prototype;f.getAltitude=function(a){return d.altitudeAt(this._coordinateSystem,a)};f.setAltitude=function(a,b,c=a){return d.setAltitudeAt(this._coordinateSystem,
c,b,a)};f.setAltitudeOfTransformation=function(a,b){d.setAltitudeOfTransformation(this._coordinateSystem,b,a,b)};f.worldUpAtPosition=function(a,b){return d.normalAt(this._coordinateSystem,a,b)};f.worldBasisAtPosition=function(a,b,c){return d.axisAt(this._coordinateSystem,a,b,c)};f.basisMatrixAtPosition=function(a,b){const c=this.worldBasisAtPosition(a,m.Axis.X,h.sv3d.get()),g=this.worldBasisAtPosition(a,m.Axis.Y,h.sv3d.get());a=this.worldBasisAtPosition(a,m.Axis.Z,h.sv3d.get());x.set(b,c[0],c[1],
c[2],0,g[0],g[1],g[2],0,a[0],a[1],a[2],0,0,0,0,1);return b};f.headingAtPosition=function(a,b){const c=this.worldUpAtPosition(a,h.sv3d.get());a=this.worldBasisAtPosition(a,m.Axis.Y,h.sv3d.get());b=A.angleAroundAxis(b,a,c);return v.rad2deg(b)};f.intersectManifoldClosestSilhouette=function(a,b,c){d.elevate(this._coordinateSystem,b,this._tmpCoordinateSystem);d.intersectRayClosestSilhouette(this._tmpCoordinateSystem,a,c);return c};f.intersectManifold=function(a,b,c){d.elevate(this._coordinateSystem,b,
this._tmpCoordinateSystem);b=h.sv3d.get();return d.intersectRay(this._tmpCoordinateSystem,a,b)?q.copy(c,b):null};f.intersectInfiniteManifold=function(a,b,c){if(this.viewingMode===k.ViewingMode.Global)return this.intersectManifold(a,b,c);d.elevate(this._coordinateSystem,b,this._tmpCoordinateSystem);b=this._tmpCoordinateSystem.value;const g=h.sv3d.get();return z.intersectRay(b.plane,a,g)?q.copy(c,g):null};f.toRenderCoords=function(a,b,c){return r.isDehydratedPoint(a)?l.projectPointToVector(a,b,this.spatialReference):
l.projectVectorToVector(a,b,c,this.spatialReference)};f.fromRenderCoords=function(a,b,c=null){return r.isDehydratedPoint(b)?(w.isSome(c)&&(b.spatialReference=c),l.projectVectorToDehydratedPoint(a,this.spatialReference,b)):y.isVec3(b)?l.projectVectorToVector(a,this.spatialReference,b,c)?b:null:l.projectVectorToPoint(a,this.spatialReference,b)};e.create=function(a,b){switch(a){case k.ViewingMode.Local:return new e(k.ViewingMode.Local,b,p.getMetersPerUnitForSR(b),d.createLocal());case k.ViewingMode.Global:return new e(k.ViewingMode.Global,
b,1,d.createGlobal(b))}};e.renderUnitScaleFactor=function(a,b){return t(a)/t(b)};u._createClass(e,[{key:"extent",set:function(a){a&&d.setExtent(this._coordinateSystem,a,this._coordinateSystem)}}]);return e}();n.RenderCoordsHelper=C;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});