// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/sphere ../../../support/mathUtils ../Octree".split(" "),function(f,l,m,n,g,p,c){c=function(h){function d(b,e){var a=h.call(this,q=>g.wrap(a._instanceData.view.boundingSphere.getVec(q,a._tmpSphere)),{maximumDepth:25})||this;a._tmpSphere=g.create();a._tmpMat4=m.create();a._instanceData=b;a._boundingSphere=e;return a}l._inheritsLoose(d,h);var k=d.prototype;k.addInstance=
function(b){const e=this._instanceData.view.boundingSphere,a=this._instanceData.getCombinedModelTransform(b,this._tmpMat4);n.transformMat4(this._tmpSphere,this._boundingSphere.center,a);this._tmpSphere[3]=this._boundingSphere.radius*p.maxScale(a);e.setVec(b,this._tmpSphere);this.add([b])};k.removeInstance=function(b){this.remove([b])};return d}(c);f.InstanceOctree=c;Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});