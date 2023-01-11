// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../chunks/common ../../geometry/Extent ../../geometry/Polygon ./GeoreferenceBase".split(" "),function(n,k,p,m,g,z,q,r,t,u,v){function w(h,d,a){a=r.toRadian(a);const c=Math.cos(a),e=Math.sin(a);return(f,l)=>[c*(f-h)+e*(l-d)+h,c*(l-d)-e*(f-h)+d]}g=function(h){function d(a){a=
h.call(this,a)||this;a.extent=null;a.rotation=0;a.type="extent-and-rotation";return a}n._inheritsLoose(d,h);n._createClass(d,[{key:"coords",get:function(){if(p.isNone(this.extent))return null;const {xmin:a,ymin:c,xmax:e,ymax:f,spatialReference:l}=this.extent;if(this.rotation){const {x,y}=this.extent.center;var b=w(x,y,this.rotation);b=[b(a,c),b(a,f),b(e,f),b(e,c)];b.push(b[0])}else b=[[a,c],[a,f],[e,f],[e,c],[a,c]];return new u({rings:[b],spatialReference:l})}}]);return d}(v);k.__decorate([m.property({readOnly:!0})],
g.prototype,"coords",null);k.__decorate([m.property({type:t})],g.prototype,"extent",void 0);k.__decorate([m.property({type:Number})],g.prototype,"rotation",void 0);return g=k.__decorate([q.subclass("esri.layers.support.ExtentAndRotationGeoreference")],g)});