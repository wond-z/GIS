// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ./DirtyMap ./DisplayRecordStore ./WGLBuffers ./WGLTile".split(" "),function(v,w,x,y,A,t){t=function(u){function q(){var a=u.apply(this,arguments)||this;a._data=null;a._displayList=null;a._lastCommitTime=0;a._hasData=!1;a._invalidated=!1;a._wglBuffers=null;a._dirtyMap=new x;return a}w._inheritsLoose(q,u);var l=q.prototype;l.destroy=function(){u.prototype.destroy.call(this);this.clear()};l.getGeometry=function(a){return this._wglBuffers&&
this._wglBuffers.has(a)?this._wglBuffers.get(a):null};l.getDisplayList=function(){return this._displayList};l.patch=function(a){if(!0===a.clear)this.clear(),this._hasData=!1;else{var h=a.addOrUpdate,c=a.remove;!this._data&&h&&h.tileDisplayData.displayObjects.length?(h.tileDisplayData.computeDisplayList(),this._dirtyMap=new x,this._dispRecStore=y.fromTileData(h,this._dirtyMap),this._data=h,this._dirtyMap.markAllDirty(),this._hasData=!0,a.end&&this.ready()):this._data?h&&h.tileDisplayData.displayObjects.length||
c.length?this._doPatchData(a):a.end&&this.ready():a.end&&this.ready();a.end&&!this._data&&this.clear();this.requestRender();this.emit("change")}};l.commit=function(a){if(!a.time||a.time!==this._lastCommitTime)if(this._lastCommitTime=a.time,this.visible&&this._data&&(this._wglBuffers||(this._wglBuffers=new A(a.context)),this._dirtyMap.hasDirty()||this._invalidated))this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),
this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._dirtyMap.markAllClean()};l.clear=function(){this._dispRecStore=this._displayList=this._data=null;this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)};l._doPatchData=function(a){this._invalidated=!0;this._patchData(a)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=y.fromTileData(this._data,this._dirtyMap));this.requestRender()};l._patchData=function(a){let h=!0;var c=a.addOrUpdate&&
a.addOrUpdate.tileDisplayData&&a.addOrUpdate.tileDisplayData.displayObjects||[],d=(a.remove||[]).slice();for(var b of c)null!=b.insertAfter&&d.push(b.id);let r;0<d.length&&(r=new Set(d));for(var e of d)if(d=this._data.tileDisplayData.displayObjectRegistry.get(e)){this._data.tileDisplayData.displayList.removeFromList(d.displayRecords);for(var f of d.displayRecords)this._dispRecStore.delete(f);this._data.tileDisplayData.displayObjectRegistry.delete(e)}r&&r.size&&(this._data.tileDisplayData.displayObjects=
this._data.tileDisplayData.displayObjects.filter(g=>!r.has(g.id)));for(const g of c){c=this._data.tileDisplayData.displayObjectRegistry.get(g.id);let k;if(c){e=c.displayRecords;c.set(g);c.displayRecords=e;e=c.displayRecords.length;for(f=0;f<e;++f)if(d=c.displayRecords[f],b=g.displayRecords[f],f>=g.displayRecords.length||d.geometryType!==b.geometryType||d.symbolLevel!==b.symbolLevel||d.zOrder!==b.zOrder||d.materialKey!==b.materialKey)this._dispRecStore.delete(c.displayRecords[f]),f<g.displayRecords.length&&
(c.displayRecords[f]=void 0);c.displayRecords.length=g.displayRecords.length}else if(c=g.copy(),c.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(g.id,c),e=this._data.tileDisplayData.displayObjects,null!=c.insertAfter?(k={},0<=c.insertAfter?(f=this._data.tileDisplayData.displayObjectRegistry.get(c.insertAfter))?(b=e.indexOf(f)+1,b<e.length?e.splice(b,0,c):(e.push(c),b=e.length)):(e.push(c),b=e.length):(e.unshift(c),b=0)):(e.push(c),b=e.length),k)for(f=0<g.displayRecords.length?
1:0,d=0,--b;0<=b&&d<f;--b)for(var m=e[b].displayRecords.length-1;0<=m&&d<f;--m){var p=e[b].displayRecords[m],n=this._data.tileDisplayData.displayList.getDPInfoType();k[n]||(k[n]=p,++d)}e=g.displayRecords.length;for(f=0;f<e;++f){d=g.displayRecords[f];(b=c.displayRecords[f])?(b.meshData=d.meshData,b.materialKey=d.materialKey):(b=d.copy(),b.vertexFrom=void 0,b.indexFrom=void 0,c.displayRecords[f]=b);p=d.geometryType;m=this._data.tileDisplayData.displayList.getDPInfoType();n=a.addOrUpdate.tileBufferData.geometries[p];
p=n.vertexBuffer;n=n.indexBuffer;let z=void 0;k&&(z=k[m]?this._data.tileDisplayData.displayList.splitAfter(k[m]):-1);h=this._dispRecStore.setMeshData(b,d,p,n,z)&&h;k&&null!=b.indexFrom&&null!=b.indexFrom&&(k[m]=b)}}return h};w._createClass(q,[{key:"hasData",get:function(){return!!this._hasData}},{key:"displayObjects",get:function(){return this._displayObjects??[]}}]);return q}(t.WGLTile);v.GraphicTile=t;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});