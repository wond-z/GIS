// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../request ../../geometry/Point ../../geometry/projection ../../layers/support/rasterFunctions/rasterProjectionHelper ../2d/engine/Bitmap ../2d/engine/webgl/VertexStream ../2d/engine/webgl/shaders/MaterialPrograms ../webgl/enums ../webgl/FramebufferObject ../webgl/rasterUtils ../webgl/RenderingContext ../webgl/Texture".split(" "),function(p,x,y,q,z,r,t,A,B,c,C,D,E,u){let w=function(){function h(a){if(a)this._ownsRctx=!1,this._rctx=a;else{if(h._instance)return h._instanceRefCount++,
h._instance;h._instanceRefCount=1;h._instance=this;this._ownsRctx=!0;a=document.createElement("canvas").getContext("webgl");a.getExtension("OES_texture_float");this._rctx=new E.RenderingContext(a,{})}a=B.createProgramTemplate("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes);this._rctx.useProgram(this._program);this._program.setUniform1f("u_opacity",
1);this._program.setUniform1i("u_image",0);this._program.setUniform1i("u_flipY",0);this._program.setUniform1i("u_transformGrid",1);this._quad=new A(this._rctx,[0,0,1,0,0,1,1,1])}var l=h.prototype;l.reprojectTexture=function(a,b,e=!1){const d=z.project(a.extent,b);var f=new q({x:(a.extent.xmax-a.extent.xmin)/a.texture.descriptor.width,y:(a.extent.ymax-a.extent.ymin)/a.texture.descriptor.height,spatialReference:a.extent.spatialReference});const {x:m,y:F}=r.projectResolution(f,b,a.extent);var g=(m+F)/
2;b=Math.round((d.xmax-d.xmin)/g);f=Math.round((d.ymax-d.ymin)/g);g=(d.width/b+d.height/f)/2;g=new q({x:g,y:g,spatialReference:d.spatialReference});const n=r.getProjectionOffsetGrid({projectedExtent:d,srcBufferExtent:a.extent,pixelSize:g,hasWrapAround:!0,spacing:[16,16]}),v=D.createTransformTexture(this._rctx,n);g=new u.Texture(this._rctx,{width:b,height:f,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,
hasMipmap:!1});const k=new C.FramebufferObject(this._rctx,{colorTarget:c.TargetType.TEXTURE,depthStencilTarget:c.DepthStencilTargetType.NONE,width:b,height:f},g);this._rctx.bindFramebuffer(k);this._rctx.setViewport(0,0,b,f);this._rctx.useProgram(this._program);this._rctx.bindTexture(a.texture,0);this._rctx.bindTexture(v,1);this._quad.bind();this._program.setUniform2f("u_srcImageSize",a.texture.descriptor.width,a.texture.descriptor.height);this._program.setUniform2fv("u_transformSpacing",n.spacing);
this._program.setUniform2fv("u_transformGridSize",n.size);this._program.setUniform2f("u_targetImageSize",b,f);this._quad.draw();this._quad.unbind();this._rctx.useProgram(null);this._rctx.bindFramebuffer(null);v.dispose();if(e)return a=new ImageData(k.descriptor.width,k.descriptor.height),k.readPixels(0,0,k.descriptor.width,k.descriptor.height,c.PixelFormat.RGBA,c.PixelType.UNSIGNED_BYTE,a.data),k.detachColorTexture(c.ColorAttachment.COLOR_ATTACHMENT0),k.dispose(),{texture:g,extent:d,imageData:a};
k.detachColorTexture(c.ColorAttachment.COLOR_ATTACHMENT0);k.dispose();return{texture:g,extent:d}};l.reprojectBitmapData=function(a,b){var e=t.isImageSource(a.bitmapData)?t.rasterize(a.bitmapData):a.bitmapData;e=new u.Texture(this._rctx,{width:a.bitmapData.width,height:a.bitmapData.height,pixelFormat:c.PixelFormat.RGBA,dataType:c.PixelType.UNSIGNED_BYTE,wrapMode:c.TextureWrapMode.CLAMP_TO_EDGE,samplingMode:c.TextureSamplingMode.LINEAR,hasMipmap:!1},e);a=this.reprojectTexture({texture:e,extent:a.extent},
b,!0);a.texture.dispose();b=document.createElement("canvas");b.width=a.imageData.width;b.height=a.imageData.height;b.getContext("2d").putImageData(a.imageData,0,0);return{bitmapData:b,extent:a.extent}};l.loadAndReprojectBitmapData=function(){var a=x._asyncToGenerator(function*(b,e,d){b=(yield y(b,{responseType:"image"})).data;const f=document.createElement("canvas");f.width=b.width;f.height=b.height;const m=f.getContext("2d");m.drawImage(b,0,0);b=m.getImageData(0,0,f.width,f.height);if(e.spatialReference.equals(d))return{bitmapData:b,
extent:e};e=this.reprojectBitmapData({bitmapData:b,extent:e},d);return{bitmapData:e.bitmapData,extent:e.extent}});return function(b,e,d){return a.apply(this,arguments)}}();l.destroy=function(){this._ownsRctx?(h._instanceRefCount--,0===h._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),h._instance=null)):(this._quad.dispose(),this._program.dispose())};return h}();w._instanceRefCount=0;p.ImageReprojector=w;Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});