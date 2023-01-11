// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Collection ../../core/loadAll ../../core/Warning ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./BuildingComponentSublayer ./BuildingSublayer".split(" "),function(p,g,k,q,r,l,w,x,t,u,v){function m(c,f,a){if(c&&Array.isArray(c))return new k(c.map(b=>{var d="group"===b.layerType?e:u;if(d)return d=new d,d.read(b,a),
d;a&&a.messages&&b&&a.messages.push(new r("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(b.type||"unknown")+"' are not supported",{definition:b,context:a}));return null}))}var h;const n={type:k,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:m}}},read:!1}};let e=h=function(c){function f(a){a=c.call(this,a)||this;a.type="building-group";a.listMode="show";a.sublayers=null;return a}p._inheritsLoose(f,c);f.prototype.loadAll=function(){return q.loadAllChildren(this,
a=>h.forEachSublayer(this.sublayers,b=>{"building-group"!==b.type&&a(b)}))};return f}(v);g.__decorate([l.property({type:["hide","show","hide-children"],json:{write:!0}})],e.prototype,"listMode",void 0);g.__decorate([l.property(n)],e.prototype,"sublayers",void 0);e=h=g.__decorate([t.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],e);(function(c){function f(a,b){a.forEach(d=>{b(d);"building-group"===d.type&&f(d.sublayers,b)})}c.sublayersProperty=n;c.readSublayers=m;c.forEachSublayer=
f})(e||(e={}));return e});