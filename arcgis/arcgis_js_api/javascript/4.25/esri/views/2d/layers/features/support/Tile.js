// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/ArrayPool ../../../../../geometry/Extent ../../../../../geometry/support/aaBoundingRect ../../../../../rest/support/QuantizationParameters ../../../tiling/TileKey".split(" "),function(e,g,h,k,l,m,n){let p=function(){function c(b,a){this.key=new n(0,0,0,0);this.bounds=l.create();this.objectIds=new Set;this.key.set(a);a=b.getLODInfoAt(this.key);this.tileInfoView=b;this.tileInfoView.getTileBounds(this.bounds,this.key,
!0);this.resolution=a.resolution;this.scale=a.scale;this.level=a.level}var f=c.prototype;f.createChildTiles=function(){const b=this.key.getChildKeys(),a=h.acquire();for(let d=0;d<b.length;d++)a[d]=new c(this.tileInfoView,b[d]);return a};f.getQuantizationParameters=function(){return m.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})};
g._createClass(c,[{key:"id",get:function(){return this.key.id}},{key:"extent",get:function(){return k.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}},{key:"transform",get:function(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}}]);return c}();e.Tile=p;Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});