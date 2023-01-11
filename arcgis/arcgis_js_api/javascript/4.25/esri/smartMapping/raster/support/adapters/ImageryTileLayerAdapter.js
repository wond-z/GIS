// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Error ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../layers/support/rasterFunctions/stretchUtils ./RasterLayerAdapter".split(" "),function(q,r,u,v,w,h,B,x,y,z,A){h=function(t){function m(){return t.apply(this,
arguments)||this}q._inheritsLoose(m,t);var f=m.prototype;f.generateRasterInfo=function(b){return Promise.resolve(this.rasterInfo)};f.estimateStatisticsHistograms=function(){var b=q._asyncToGenerator(function*(a){if(null!==this._statsCache)return this._statsCache;const {raster:g}=this.layer,{extent:n,width:c,height:d}=this._getSamplePixelBlockDescriptor(g.rasterInfo);({pixelBlock:a}=yield g.fetchPixels(n,c,d,a));if(v.isNone(a))throw new u("raster-layer-adapter","Unable to estimate histograms");return this._statsCache=
z.estimateStatisticsHistograms(a)});return function(a){return b.apply(this,arguments)}}();f.supportsMultidirectionalHillshade=function(){return!0};f.load=function(b){this.addResolvingPromise(this.layer.load(b).then(()=>this.rasterInfo=this.layer.raster.rasterInfo));return Promise.resolve(this)};f._getSamplePixelBlockDescriptor=function(b,a=1E3){const {pyramidScalingFactor:g,maximumPyramidLevel:n}=b.storageInfo;let {extent:c,width:d,height:e,pixelSize:k}=b,p=Math.ceil(Math.log(Math.max(d,e)/a)/Math.log(g))-
1,l=b=0;p<=n?(a=g**p,d=Math.floor(d/a),e=Math.floor(e/a)):(p=0,d=Math.min(d,a),e=Math.min(e,a),b=Math.max(Math.floor(d/2-500),0),l=Math.max(Math.floor(e/2-500),0),c=new y({xmin:c.xmin+b*k.x,xmax:Math.min(c.xmax,c.xmin+b*k.x*a),ymin:c.ymin+l*k.y,ymax:Math.min(c.ymax,c.ymin+l*k.y*a)}));return{extent:c,width:d,height:e,origin:{x:b,y:l}}};return m}(A);r.__decorate([w.property()],h.prototype,"layer",void 0);return h=r.__decorate([x.subclass("esri.smartMapping.support.adapters.ImageryTileLayerAdapter")],
h)});