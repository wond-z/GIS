// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../chunks/vec2 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ./DefaultVertexAttributeLocations ./DefaultVertexBufferLayouts ./glUtil3D ./VertexArrayObject ../shaders/HighlightApplyTechnique ../../../../chunks/HighlightBlur.glsl ../shaders/HighlightBlurTechnique ../../../../chunks/HighlightDownsample.glsl ../shaders/HighlightDownsampleTechnique ../shaders/HighlightPassParameters ../../../webgl/BufferObject ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Util".split(" "),
function(v,x,n,r,y,z,A,B,C,D,E,F,G,H,I,w,J,h,t,q){let K=function(){function u(c,e){this._techniqueRep=c;this._rctx=e;this._viewportToRestore=z.create();this._passParameters=new w.HighlightPassParameters;this._downsampleDrawParameters=new H.HighlightDownsampleDrawParameters;this._blurDrawParameters=new F.HighlightBlurDrawParameters;this._grid={coverageMipmap:null,vao:null,verticalCellCount:0,horizontalCellCount:0,cellPixelSize:0,mipmapLevels:0,viewportWidth:0,viewportHeight:0}}var p=u.prototype;p._assertResources=
function(){if(!this._quadVAO){this._quadVAO=C.createQuadVAO(this._rctx);var c={colorTarget:h.TargetType.TEXTURE,depthStencilTarget:h.DepthStencilTargetType.NONE,width:0,height:0},e={target:h.TextureType.TEXTURE_2D,pixelFormat:h.PixelFormat.RGBA,dataType:h.PixelType.UNSIGNED_BYTE,samplingMode:h.TextureSamplingMode.LINEAR,wrapMode:h.TextureWrapMode.CLAMP_TO_EDGE,width:0,height:0};this._blur0Fbo=new t.FramebufferObject(this._rctx,c,e);this._blur1Fbo=new t.FramebufferObject(this._rctx,c,e);this._blurTechnique=
this._techniqueRep.acquire(G.HighlightBlurTechnique);this._downsampleTechnique=this._techniqueRep.acquire(I.HighlightDownsampleTechnique);this._applyTechnique=this._techniqueRep.acquire(E.HighlightApplyTechnique)}};p.dispose=function(){this._blurTechnique=n.releaseMaybe(this._blurTechnique);this._downsampleTechnique=n.releaseMaybe(this._downsampleTechnique);this._applyTechnique=n.releaseMaybe(this._applyTechnique);if(this._grid.coverageMipmap)for(let c=1;c<this._grid.coverageMipmap.length;c++)this._grid.coverageMipmap[c].dispose();
this._grid.vao&&this._grid.vao.dispose(!0);this._quadVAO&&(this._quadVAO.dispose(!0),this._quadVAO=null);this._blur0Fbo=n.disposeMaybe(this._blur0Fbo);this._blur1Fbo=n.disposeMaybe(this._blur1Fbo)};p.setDefaultOptions=function(c){this._passParameters={...(new w.HighlightPassParameters),...c}};p.render=function(c,e,m){this._passParameters.highlightColorTexture=e.colorTexture;this._assertResources();var b=c.camera;y.copy(this._viewportToRestore,b.fullViewport);var a=b.pixelRatio;const g=Math.ceil(b.fullWidth/
a);b=Math.ceil(b.fullHeight/a);this._blur0Fbo.resize(g,b);this._blur1Fbo.resize(g,b);a=this._rctx;a.bindVAO(this._quadVAO);let d=null;this._gridUpdateResources(e,32);this._gridComputeMipmap(c);this._passParameters.coverageTexture=this._grid.coverageMipmap[this._grid.mipmapLevels].colorTexture;d=this._grid.vao;const f=a.bindTechnique(this._blurTechnique,this._passParameters,c);a.bindVAO(d);a.bindFramebuffer(this._blur0Fbo);a.setViewport(0,0,g,b);a.setClearColor(0,0,0,0);a.clear(h.ClearBufferBit.COLOR_BUFFER_BIT);
this._blurDrawParameters.blurInputTexture=e.colorTexture;r.set(this._blurDrawParameters.blurSize,1/g,0);f.bindDraw(this._blurDrawParameters,c,this._passParameters);a.drawArrays(this._blurTechnique.primitiveType,0,q.vertexCount(d,"geometry"));a.bindFramebuffer(this._blur1Fbo);a.clear(h.ClearBufferBit.COLOR_BUFFER_BIT);this._blurDrawParameters.blurInputTexture=this._blur0Fbo.colorTexture;r.set(this._blurDrawParameters.blurSize,0,1/b);f.bindDraw(this._blurDrawParameters,c,this._passParameters);a.drawArrays(this._blurTechnique.primitiveType,
0,q.vertexCount(d,"geometry"));a.bindFramebuffer(m);a.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3]);this._passParameters.blurColorTexture=this._blur1Fbo.colorTexture;a.bindTechnique(this._applyTechnique,this._passParameters,c);a.drawArrays(this._applyTechnique.primitiveType,0,q.vertexCount(d,"geometry"));a.bindVAO(null)};p._gridUpdateResources=function(c,e){const m=this._rctx,b=this._grid;var a=!1;null===b.coverageMipmap&&
(b.coverageMipmap=[c],a=!0);if(b.viewportWidth!==c.width||b.viewportHeight!==c.height)a=!0,b.viewportWidth=c.width,b.viewportHeight=c.height;b.coverageMipmap[0]=c;b.cellPixelSize!==e&&(b.cellPixelSize=e,a=!0);if(a){for(e=1;e<b.coverageMipmap.length;e++)b.coverageMipmap[e].dispose();b.mipmapLevels=Math.ceil(Math.log(b.cellPixelSize)*Math.LOG2E);b.coverageMipmap.length=b.mipmapLevels+1;for(e=0;e<b.mipmapLevels;e++)a=b.coverageMipmap[e],b.coverageMipmap[e+1]=new t.FramebufferObject(m,{colorTarget:h.TargetType.TEXTURE,
depthStencilTarget:h.DepthStencilTargetType.NONE,width:Math.ceil(a.width/2),height:Math.ceil(a.height/2)},{target:h.TextureType.TEXTURE_2D,pixelFormat:h.PixelFormat.RGB,dataType:h.PixelType.UNSIGNED_SHORT_5_6_5,samplingMode:h.TextureSamplingMode.LINEAR,wrapMode:h.TextureWrapMode.CLAMP_TO_EDGE,width:Math.ceil(a.width/2),height:Math.ceil(a.height/2)})}a=Math.ceil(c.height/b.cellPixelSize);var g=Math.ceil(c.width/b.cellPixelSize);if(!b.vao||b.verticalCellCount!==a||b.horizontalCellCount!==g){b.verticalCellCount=
a;b.horizontalCellCount=g;c=a+1;e=g+1;a=1/a;g=1/g;const d=new Float32Array(24*c*e);let f=0;for(let k=0;k<c;k++)for(let l=0;l<e;l++)d[f+0]=(l-.5)*g*2-1,d[f+1]=(k-.5)*a*2-1,d[f+2]=l*g,d[f+3]=k*a,d[f+4]=(l+.5)*g*2-1,d[f+5]=(k-.5)*a*2-1,d[f+6]=l*g,d[f+7]=k*a,d[f+8]=(l-.5)*g*2-1,d[f+9]=(k+.5)*a*2-1,d[f+10]=l*g,d[f+11]=k*a,d[f+12]=(l-.5)*g*2-1,d[f+13]=(k+.5)*a*2-1,d[f+14]=l*g,d[f+15]=k*a,d[f+16]=(l+.5)*g*2-1,d[f+17]=(k-.5)*a*2-1,d[f+18]=l*g,d[f+19]=k*a,d[f+20]=(l+.5)*g*2-1,d[f+21]=(k+.5)*a*2-1,d[f+22]=
l*g,d[f+23]=k*a,f+=24;b.vao&&b.vao.dispose(!0);b.vao=new D.VertexArrayObject(m,A.Default3D,{geometry:B.Pos2Tex},{geometry:J.BufferObject.createVertex(m,h.Usage.STATIC_DRAW,d)})}};p._gridComputeMipmap=function(c){const e=this._rctx,m=this._grid,b=e.bindTechnique(this._downsampleTechnique,this._passParameters,c);e.bindVAO(this._quadVAO);for(let a=0;a<m.mipmapLevels;a++){e.bindFramebuffer(m.coverageMipmap[a+1]);const g=m.coverageMipmap[a+1].width,d=m.coverageMipmap[a+1].height;this._downsampleDrawParameters.inputTexture=
m.coverageMipmap[a].colorTexture;r.set(this._downsampleDrawParameters.invFramebufferDim,1/g,1/d);b.bindDraw(this._downsampleDrawParameters,c,this._passParameters);e.setViewport(0,0,g,d);e.drawArrays(h.PrimitiveType.TRIANGLE_STRIP,0,q.vertexCount(this._quadVAO,"geometry"))}};x._createClass(u,[{key:"gpuMemoryUsage",get:function(){let c=(n.isSome(this._blur0Fbo)?this._blur0Fbo.gpuMemoryUsage:0)+(n.isSome(this._blur1Fbo)?this._blur1Fbo.gpuMemoryUsage:0);if(this._grid.coverageMipmap)for(const e of this._grid.coverageMipmap)c+=
e.gpuMemoryUsage;return c}},{key:"test",get:function(){return{coverage:this._grid.coverageMipmap,blur:[this._blur0Fbo,this._blur1Fbo]}}}]);return u}();v.Highlight=K;Object.defineProperties(v,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});