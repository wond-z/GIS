// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../core/maybe ../../core/quantityUtils ../../core/unitUtils ../../chunks/earcut ../../chunks/vec3 ../../chunks/vec3f64 ../../geometry/projection ../../geometry/support/plane ../../geometry/support/triangle ./measurementUtils".split(" "),function(h,A,B,C,x,r,u,D,t,E,F){function v(a,e,l=a.hasZ){const f=F.computeEuclideanMeasurementSR(a.spatialReference),m=C.areaUnitFromSpatialReference(f);if(A.isNone(m))return null;let n=0;for(const y of a.rings){var c=y.length;if(3>c)continue;const {positionsWorldCoords:b}=
e;for(;b.length<c;)b.push(u.create());var p=G,d=r.set(H,0,0,0),k=1/c;for(let q=0;q<c;q++){var g=y[q];2>g.length?g=!1:(r.set(p,g[0],g[1],l?g[2]||0:0),g=!0);if(!g||!D.projectVectorToVector(p,a.spatialReference,b[q],f))return null;r.scaleAndAdd(d,d,b[q],k)}p=t.fromPoints(b[0],b[1],d,t.wrap());if(0!==r.squaredLength(t.normal(p))){for(k=0;k<c;k++)t.projectPointLocal(p,d,b[k],b[k]);c=z(b);for(d=0;d<c.length;d+=3)n+=E.areaPoints2d(b[c[d]],b[c[d+1]],b[c[d+2]])}}return B.createArea(n,m)}function w(){return{positionsWorldCoords:[]}}
function z(a){var e=x.earcut;const l=new Float64Array(2*a.length);for(let f=0;f<a.length;++f){const m=a[f],n=2*f;l[n+0]=m[0];l[n+1]=m[1]}return e.call(x,l,[],2)}const G=u.create(),H=u.create();h.computeEuclideanPlanarArea=v;h.createEuclideanPlanarAreaCache=w;h.euclideanHorizontalPlanarArea=function(a,e=w()){return v(a,e,!1)};h.euclideanPlanarArea=function(a,e=w()){return v(a,e)};h.triangulate=z;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});