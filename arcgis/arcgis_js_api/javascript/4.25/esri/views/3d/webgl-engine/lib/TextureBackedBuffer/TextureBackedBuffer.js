// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry/support/buffer/BufferView","../../../../webgl/enums","../../../../webgl/Texture"],function(h,l,k,b,m){let q=function(){function e(a,c=1){this._rctx=a;this._fieldCount=c;this.textureWidth=4096;this._dirty=!0;this._texture=new m.Texture(this._rctx,{target:b.TextureType.TEXTURE_2D,pixelFormat:b.PixelFormat.RGBA,dataType:b.PixelType.UNSIGNED_BYTE,samplingMode:b.TextureSamplingMode.NEAREST,wrapMode:b.TextureWrapMode.CLAMP_TO_EDGE,
width:this.textureWidth,height:1,flipped:!1});this._data=new k.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}var d=e.prototype;d.dispose=function(){this._texture.dispose();this._data=this._texture=void 0};d.setData=function(a,c,f,g,n,p){a=a*this._fieldCount+c;this._dirty=!0;this._data.set(a,0,f);this._data.set(a,1,g);this._data.set(a,2,n);this._data.set(a,3,p)};d.setDataElement=function(a,c,f,g){a=a*this._fieldCount+c;this._dirty=!0;this._data.set(a,f,g)};d.resizeToFit=function(a){a*=this._fieldCount;
a>=this._data.count&&(a=new k.BufferViewVec4u8(new ArrayBuffer(Math.ceil((a+1)/this.textureWidth)*this.textureWidth*4)),a.typedBuffer.set(this._data.typedBuffer),this._data=a)};d.updateTexture=function(){if(this._dirty){var a=this._texture.descriptor.width;this._data.count>a*this._texture.descriptor.height&&this._texture.resize(a,this._data.count/a);this._texture.setData(this._data.typedBuffer);this._dirty=!1}};l._createClass(e,[{key:"texture",get:function(){return this._texture}}]);return e}();h.TextureBackedBuffer=
q;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});