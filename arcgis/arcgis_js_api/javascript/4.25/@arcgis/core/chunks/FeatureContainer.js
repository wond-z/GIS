/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{d as t,m as e}from"./mat2d.js";import{c as s}from"./mat2df32.js";import{s as i,m as r}from"./mat3.js";import{c as a}from"./mat3f32.js";import{k as n,x as o,A as h,c as d,d as u,e as l,f as _,g as c,h as p,Z as E,_ as x,p as f,o as m,$ as R}from"./definitions.js";import{T as g}from"./TiledDisplayObject.js";import{i as v,a as T,v as b,g as y,u as S,t as k,m as z,e as C}from"./maybe.js";import{createResolver as w}from"../core/promiseUtils.js";import{Q as M}from"./Queue.js";import D from"../core/Error.js";import{h as O}from"./object.js";import{L as F}from"./Logger.js";import{f as P,h as V,g as A}from"./visualVariablesUtils.js";import{g as L,E as N,F as U,i as I}from"./Utils18.js";import{b as j,P as q,a as B,c as K,T as Y,g as Q,h as G}from"./enums3.js";import{F as $}from"./FramebufferObject.js";import{T as X}from"./Texture.js";import{T as Z}from"./TileContainer.js";import{a as H}from"./screenUtils.js";import{e as W}from"./unitUtils.js";import{m as J}from"./lengthUtils.js";import{T as tt,b as et}from"./utils19.js";import{g as st}from"./capabilities2.js";class it extends g{constructor(t,e,s,i){super(t,e,s,i,n,n)}destroy(){super.destroy(),this._transforms&&it.TransformCache.release(this.key.hash)}setTransform(a){const n=this.resolution/a.resolution,o=this.transforms.tileMat3,[h,d]=a.toScreenNoRotation([0,0],[this.x,this.y]),u=this.width/this.rangeX*n,l=this.height/this.rangeY*n;i(o,u,0,0,0,l,0,h,d,1),r(this.transforms.dvs,a.displayViewMat3,o);const _=this.transforms.labelMat2d,c=window.devicePixelRatio,p=t(s(),u*c,0,0,l*c,h*c,d*c);e(_,a.viewMat2d,p)}_createTransforms(){return it.TransformCache.acquire(this.key.hash)}}it.TransformCache=new class{acquire(t){return{refCount:1,version:-1,labelMat2d:a(),tileMat3:a(),dvs:a()}}release(t){}};class rt{constructor(t){this._head=t,this._cursor=t}static from(t,e=0,s=t.byteLength/at.BYTES_PER_RECORD-e){const i=new at(new Int32Array(t,e*at.BYTES_PER_RECORD,s*at.ELEMENTS_PER_RECORD));return new rt(i)}size(){let t=this._cursor,e=0;for(;t;)e+=t.size(),t=t._link;return e}get id(){return this._cursor.id}set id(t){this._cursor.id=t}get materialKey(){return this._cursor.materialKey}set materialKey(t){this._cursor.materialKey=t}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(t){this._cursor.indexFrom=t}get indexCount(){return this._cursor.indexCount}set indexCount(t){this._cursor.indexCount=t}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(t){this._cursor.vertexFrom=t}get vertexCount(){return this._cursor.vertexCount}set vertexCount(t){this._cursor.vertexCount=t}get sortKey(){return this._cursor.sortKey}set sortKey(t){this._cursor.sortKey=t}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(t){let e=t;for(this._cursor=this._head;this._cursor;){const t=this._cursor.size();if(e<t)return this._cursor._index=e,!0;e-=t,this._cursor=this._cursor._link}return!1}forEach(t){const e=this.getCursor();for(;e.next();)t(e)}link(t){if(!this._head)return void(this._head=t._head);let e=this._head;for(;e._link;)e=e._link;e._link=t._head,e._link._indexStart=e._indexStart+e.size()}getCursor(){return this.copy()}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){const t=new rt(this._head?.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(v(s)&&(s._link=e._link),e===this._head&&(this._head=e._link),e===this._cursor&&(this._cursor=e._link)),!0;s=e,e=e._link}return!1}}rt.ELEMENTS_PER_RECORD=o,rt.BYTES_PER_RECORD=rt.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;class at{constructor(t){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=t}static from(t,e=0,s=t.byteLength/this.BYTES_PER_RECORD-e){return new at(new Int32Array(t,e*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(t){const e=this._index,s=this.lookup(t);if(s)for(this.id=2147483647,++this._deletedCount;this.next()&&this.id===t;)this.id=2147483647,++this._deletedCount;return this._index=e,s}isEmpty(){return this._deletedCount===this.size()}link(t){this._link?this._link.link(t):this._link=t}lookup(t){if(T(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._index=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._index),e=t.id)}if(!this._offsets.instance.has(t))return!1;const e=this._index;return this._index=this._offsets.instance.get(t),2147483647!==this.id||(this._index=e,!1)}get id(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD]}set id(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD]=t}get materialKey(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+1]}set materialKey(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+1]=t}get insertAfter(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+3]}set indexFrom(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+3]=t}get indexCount(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+4]}set indexCount(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+4]=t}get vertexFrom(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+5]}set vertexFrom(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+5]=t}get vertexCount(){return this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+6]}set vertexCount(t){this._packedRecords[this._index*at.ELEMENTS_PER_RECORD+6]=t}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*at.ELEMENTS_PER_RECORD+7]}set sortKey(t){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*at.ELEMENTS_PER_RECORD+7]=t}get index(){return this._index}size(){return this._packedRecords.length/at.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&2147483647===this.id;);return this._index<this.size()}peekId(){const t=(this._index+1)*at.ELEMENTS_PER_RECORD;return t>=this._packedRecords.length?0:this._packedRecords[t]}getCursor(){return this.copy()}copy(){const t=new at(this._packedRecords);return t._indexStart=this._indexStart,t._link=this._link,t._index=this._index,t._offsets=this._offsets,t._deletedCount=this._deletedCount,t}}at.ELEMENTS_PER_RECORD=o,at.BYTES_PER_RECORD=at.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;const nt=F.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),ot=P(V,nt);class ht{constructor(t,e,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:a}=t,n=L(r);this.shared=s,this.pixelType=r,this.size=e,this.textureOnly=a,a||(this.data=new n(S(i))),this._resetRange()}destroy(){y(this._texture,(t=>t.dispose()));for(const t in this._fbos)y(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:Y.TEXTURE_2D,wrapMode:j.CLAMP_TO_EDGE,pixelFormat:q.RGBA,dataType:this.pixelType,samplingMode:K.NEAREST,width:this.size,height:this.size}}setData(t,e,s){const i=A(t),r=S(this.data),a=i*this.texelSize+e;!r||a>=r.length||(r[a]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(t,e){if(T(this.data))return null;const s=A(t)*this.texelSize+e;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return C(this._texture,(()=>this._initTexture(t)))}getFBO(t,e=0){if(T(this._fbos[e])){const s={colorTarget:Q.TEXTURE,depthStencilTarget:G.NONE},i=0===e?this.getTexture(t):this._textureDesc;this._fbos[e]=new $(t,s,i)}return this._fbos[e]}get locked(){return!(this.pixelType!==B.UNSIGNED_BYTE||!this.shared||this.textureOnly||!O("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){if(!this.locked){try{const e=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const i=S(this.data).buffer,r=this.getTexture(t),a=4,n=(e-e%this.size)/this.size,o=(s-s%this.size)/this.size,h=n,d=this.size,u=o,l=n*this.size*a,_=(d+u*this.size)*a-l,c=L(this.pixelType),p=new c(i,l*c.BYTES_PER_ELEMENT,_),E=this.size,x=u-h+1;if(x>this.size)return void nt.error(new D("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,h,E,x,p)}catch(t){}e()}}update(t){const{data:e,start:s,end:i}=t;if(v(e)){const i=this.data,r=s*this.texelSize;for(let s=0;s<e.length;s++){const a=1<<s%this.texelSize;t.layout&a&&(i[r+s]=e[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(t,e){const s=this.size;if(this.size=e,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=L(this.pixelType);this.destroy(),this.data=new i(S(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new X(t,this._textureDesc,C(this.data,void 0));if(v(this._lastTexture)&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,n=this.getFBO(t),o=N(r),h=new(L(r))(new ArrayBuffer(s*i*o*this.texelSize)),d=t.getBoundFramebufferObject(),{x:u,y:l,width:_,height:c}=t.getViewport();t.bindFramebuffer(n),n.readPixels(0,0,s,i,a,r,h),e.updateData(0,0,0,2*s,i/2,h),t.setViewport(u,l,_,c),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class dt{constructor(t){this._onUpdate=t,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:e,shared:s,size:i}=t;if(this.shared=s,this.size=i,ot("Initializing AttributeStoreView",t),T(this._data))this._data=b(e,(t=>new ht(t,i,s)));else for(let t=0;t<this._data.length;t++){const r=this._data[t],a=e[t];v(a)&&(T(r)?this._data[t]=new ht(a,i,s):r.resize(a,i))}this._initialized=!0}destroy(){y(this._data,(t=>b(t,(t=>t.destroy())))),y(this._defaultTexture,(t=>t.dispose()))}isEmpty(){const t=this._data;return T(t)}isUpdating(){const t=v(this._pendingAttributeUpdate),e=t;return O("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${e}\n  -> hasPendingUpdate ${t}`),e}getBlock(t){return T(this._data)?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,h,0,0)}getData(t,e,s,i){if(!this._data)return 0;const r=S(this._data)[e];if(T(r))return 0;const a=r.getData(t,s);return v(a)?a:i}setData(t,e,s,i){const r=S(this._data)[e];S(r).setData(t,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void nt.error(new D("mapview-webgl","Tried to update attribute data with a pending update"));const e=w();return ot("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},this._onUpdate(),e.promise}update(){if(this._initialized&&v(this._pendingAttributeUpdate)){O("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:t,resolver:e}=this._pendingAttributeUpdate,s=S(this._data);for(let e=0;e<t.blocks.length;e++){const i=t.blocks[e],r=s[e];y(r,(t=>y(i,(s=>{ot(`Updating block ${e}`,s),t.update(s)}))))}this._pendingAttributeUpdate=null,e(),this._onUpdate()}}bindTextures(t,e=!0){const s=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(s,d),void(e&&(t.bindTexture(s,u),t.bindTexture(s,l),t.bindTexture(s,_),t.bindTexture(s,c),t.bindTexture(s,p),t.bindTexture(s,E)));const i=S(this._data);this._locked&&!this._forceNextUpload||(k(i,(e=>e.updateTexture(t,(()=>this._onUpdate())))),this._forceNextUpload=!1),t.bindTexture(z(i[x],s,(e=>e.getTexture(t))),d),e&&(t.bindTexture(z(i[f],s,(e=>e.getTexture(t))),E),t.bindTexture(z(i[m],s,(e=>e.getTexture(t))),u),t.bindTexture(z(i[h],s,(e=>e.getTexture(t))),l),t.bindTexture(z(i[R],s,(e=>e.getTexture(t))),_),t.bindTexture(z(i[c],s,(e=>e.getTexture(t))),c),t.bindTexture(z(i[p],s,(e=>e.getTexture(t))),p))}_getDefaultTexture(t){if(T(this._defaultTexture)){const e={wrapMode:j.CLAMP_TO_EDGE,pixelFormat:q.RGBA,dataType:B.UNSIGNED_BYTE,samplingMode:K.NEAREST,width:1,height:1};this._defaultTexture=new X(t,e,new Uint8Array(4))}return this._defaultTexture}}function ut(t,e){const s=e.length;if(t<e[0].value||1===s)return e[0].size;for(let i=1;i<s;i++)if(t<e[i].value){const s=(t-e[i-1].value)/(e[i].value-e[i-1].value);return e[i-1].size+s*(e[i].size-e[i-1].size)}return e[s-1].size}class lt{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1},this._technique=tt}getSizeVVFieldStops(t){const e=this._vvSizeFieldStops;switch(e.type){case"static":return e;case"level-dependent":return C(e.levels[t],(()=>{let s=1/0,i=0;for(const r in e.levels){const e=parseFloat(r),a=Math.abs(t-e);a<s&&(s=a,i=e)}if(s===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const r=2**((t-i)/2),a=S(e.levels[i]),n=new Float32Array(a.values);return n[2]*=r,n[3]*=r,{sizes:S(a.sizes),values:n}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(t){v(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,t)}setInfo(t,e,s){this._updateEffects(s),this._vvInfo=e,this._technique=et(t),this.rendererSchema=this._technique.createOrUpdateRendererSchema(this.rendererSchema,t)}getVariation(){return{...this._technique.getVariation(this.rendererSchema),outsideLabelsVisible:this.outsideLabelsVisible,supportsTextureFloat:st("2d").supportsTextureFloat}}getVariationHash(){return this._technique.getVariationHash(this.rendererSchema)<<1|(this.outsideLabelsVisible?1:0)}_updateEffects(t){v(t)?this.outsideLabelsVisible=t.excludedLabelsVisible:this.outsideLabelsVisible=!1}_updateVisualVariables(t,e){const s=this._vvMaterialParameters;if(s.vvOpacityEnabled=!1,s.vvSizeEnabled=!1,s.vvColorEnabled=!1,s.vvRotationEnabled=!1,!t)return;const i=t.size;if(i){if(s.vvSizeEnabled=!0,i.minMaxValue){const t=i.minMaxValue;let s,r;if(U(t.minSize)&&U(t.maxSize))if(I(t.minSize)&&I(t.maxSize))s=H(t.minSize),r=H(t.maxSize);else{const i=e.scale;s=H(ut(i,t.minSize.stops)),r=H(ut(i,t.maxSize.stops))}this.vvSizeMinMaxValue.set([t.minDataValue,t.maxDataValue,s,r])}if(i.scaleStops&&(this.vvSizeScaleStopsValue=H(ut(e.scale,i.scaleStops.stops))),i.unitValue){const t=W(e.spatialReference)/J[i.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=t/e.resolution}i.fieldStops&&(this._vvSizeFieldStops=i.fieldStops)}const r=t.color;r&&(s.vvColorEnabled=!0,this.vvColorValues.set(r.values),this.vvColors.set(r.colors));const a=t.opacity;a&&(s.vvOpacityEnabled=!0,this.vvOpacityValues.set(a.values),this.vvOpacities.set(a.opacities));const n=t.rotation;n&&(s.vvRotationEnabled=!0,s.vvRotationType=n.type)}}class _t extends Z{constructor(t){super(t),this._rendererInfo=new lt,this._materialItemsRequestQueue=new M,this.attributeView=new dt((()=>this.onAttributeStoreUpdate()))}destroy(){this.children.forEach((t=>t.destroy())),this.removeAllChildren(),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(t,e,s){this._rendererInfo.setInfo(t,e,s),this.requestRender()}async getMaterialItems(t,e){if(!t||0===t.length)return null;const s=w();return this._materialItemsRequestQueue.push({items:t,abortOptions:e,resolver:s}),this.requestRender(),s.promise}doRender(t){if(t.context.capabilities.enable("textureFloat"),t.context.capabilities.enable("vao"),this._materialItemsRequestQueue.length>0){let e=this._materialItemsRequestQueue.pop();for(;e;)this._processMaterialItemRequest(t,e),e=this._materialItemsRequestQueue.pop()}super.doRender(t)}renderChildren(t){for(const e of this.children)e.commit(t);this._rendererInfo.update(t.state),super.renderChildren(t)}updateTransforms(t){if(this.children.some((t=>t.hasData)))for(const e of this.children)e.setTransform(t)}createRenderParams(t){const e=super.createRenderParams(t);return e.rendererInfo=this._rendererInfo,e.attributeView=this.attributeView,e}onAttributeStoreUpdate(){}_processMaterialItemRequest(t,{items:e,abortOptions:s,resolver:i}){const{painter:r,pixelRatio:a}=t,n=e.map((t=>r.textureManager.rasterizeItem(t.symbol,a,t.glyphIds,s)));Promise.all(n).then((t=>{if(!this.stage)return void i.reject();const s=t.map(((t,s)=>({id:e[s].id,mosaicItem:t})));i.resolve(s)}),i.reject)}}export{rt as D,_t as F,it as W};
