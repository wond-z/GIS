// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/Error ../../../core/events ../../../core/has ../../../core/maybe ../../../core/reactiveUtils ../../../core/scheduling ../../../chunks/mat3f32 ../../../symbols/cim/CIMResourceManager ./Container ./webgl/BufferPool ./webgl/enums ./webgl/Painter ./webgl/Profiler ../support/Timeline ../../support/screenshotUtils ../../webgl/context-util ../../webgl/enums ../../webgl/FramebufferObject ../../webgl/RenderingContext ../../../core/imageUtils".split(" "),
function(r,l,x,y,u,z,v,A,B,C,w,D,m,E,F,G,H,I,n,J,K,L){let M=function(t){function p(c,b){var a=t.call(this)||this;a._trash=new Set;a._renderRemainingTime=0;a._lastFrameRenderTime=0;a.renderRequested=!1;a.stage=l._assertThisInitialized(a);a._stationary=!0;const {canvas:d=document.createElement("canvas"),alpha:e=!0,stencil:g=!0,contextOptions:h={}}=b;a._canvas=d;const k=I.createContextOrErrorHTML("2d",d,{alpha:e,antialias:!1,depth:!0,stencil:g});a.context=new K.RenderingContext(z.isSome(k)?k:null,h);
a.resourceManager=new C;a.painter=new E(a.context,l._assertThisInitialized(a),a.resourceManager);u("esri-2d-profiler")&&(a._debugOutput=document.createElement("div"),a._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),c.appendChild(a._debugOutput));a._renderParameters={drawPhase:0,state:a.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:a.context,painter:a.painter,
timeline:b.timeline||new G.Timeline,renderingOptions:b.renderingOptions,requestRender:()=>a.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new F.Profiler(a.context,a._debugOutput),dataUploadCounter:0};a._taskHandle=A.addFrameTask({render:q=>a.renderFrame(q)});a._taskHandle.pause();a._lostWebGLContextHandle=y.on(d,"webglcontextlost",()=>{a.emit("webgl-error",{error:new x("webgl-context-lost")})});a._bufferPool=new D.BufferPool;d.setAttribute("style","width: 100%; height:100%; display:block;");
c.appendChild(d);return a}l._inheritsLoose(p,t);var f=p.prototype;f.destroy=function(){this.removeAllChildren();this._emptyTrash();this._taskHandle.remove();this._taskHandle=null;this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null);this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas);this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput);this._bufferPool.destroy();this.highlightOptions=
null;this.resourceManager.destroy();this.painter.dispose();this.context.dispose();this._canvas=null};f.trashDisplayObject=function(c){this._trash.add(c);this.requestRender()};f.untrashDisplayObject=function(c){return this._trash.delete(c)};f.requestRender=function(){this._renderRemainingTime=2E3;this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())};f.renderFrame=function(c){this._renderRemainingTime-=this._lastFrameRenderTime?c.time-this._lastFrameRenderTime:
0;0>=this._renderRemainingTime&&this._taskHandle.pause();this._lastFrameRenderTime=c.time;this.renderRequested=!1;this._renderParameters.state=this._state;this._renderParameters.stationary=this.stationary;this._renderParameters.pixelRatio=window.devicePixelRatio;this._renderParameters.globalOpacity=1;this._renderParameters.time=c.time;this._renderParameters.deltaTime=c.deltaTime;this._renderParameters.effects=null;this.processRender(this._renderParameters);this._emptyTrash();this.emit("post-render")};
f._createTransforms=function(){return{dvs:B.create()}};f.renderChildren=function(c){for(const b of this.children)b.beforeRender(c);this._renderChildren(this.children,c);for(const b of this.children)b.afterRender(c)};f._renderChildren=function(c,b){const a=this.context;this.painter.textureUploadManager.upload();a.resetInfo();b.profiler.recordStart("drawLayers");b.dataUploadCounter=0;b.drawPhase=m.WGLDrawPhase.MAP;this.painter.beforeRenderLayers(a,this.background);for(const d of c)d.processRender(b);
this.painter.prepareDisplay(b,this.background,this.state.padding);this.painter.renderLayers(a);b.drawPhase=m.WGLDrawPhase.HIGHLIGHT;this.painter.beforeRenderLayers(a);for(const d of c)d.processRender(b);this.painter.renderLayers(a);if(this._isLabelDrawPhaseRequired(c)){b.drawPhase=m.WGLDrawPhase.LABEL;this.painter.beforeRenderLayers(a);for(const d of c)d.processRender(b);this.painter.renderLayers(a)}if(u("esri-tiles-debug")){b.drawPhase=m.WGLDrawPhase.DEBUG;this.painter.beforeRenderLayers(a);for(const d of c)d.processRender(b);
this.painter.renderLayers(a)}b.profiler.recordEnd("drawLayers");a.logInfo()};f.doRender=function(c){const b=this.context,{state:a,pixelRatio:d}=c;this._resizeCanvas(c);b.setViewport(0,0,d*a.size[0],d*a.size[1]);b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);t.prototype.doRender.call(this,c)};f.takeScreenshot=function(){var c=l._asyncToGenerator(function*(b){const {framebufferWidth:a,framebufferHeight:d}={framebufferWidth:Math.round(this.state.size[0]*b.resolutionScale),framebufferHeight:Math.round(this.state.size[1]*
b.resolutionScale)};var e=this.context,g=this._state.clone();if(null!=b.rotation){var h=g.viewpoint;g.viewpoint.rotation=b.rotation;g.viewpoint=h}var k={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:g,pixelRatio:1,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1};const q=new J.FramebufferObject(e,{colorTarget:n.TargetType.TEXTURE,depthStencilTarget:n.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER,width:a,height:d});g=e.getBoundFramebufferObject();
h=e.getViewport();e.bindFramebuffer(q);e.setViewport(0,0,a,d);this._renderChildren(b.children,k);k=this._readbackScreenshot(q,{...b.cropArea,y:d-(b.cropArea.y+b.cropArea.height)});e.bindFramebuffer(g);e.setViewport(h.x,h.y,h.width,h.height);this.requestRender();e=yield k;1===b.outputScale?b=e:(b=new ImageData(Math.round(e.width*b.outputScale),Math.round(e.height*b.outputScale)),H.resampleHermite(e,b,!0));return b});return function(b){return c.apply(this,arguments)}}();f._readbackScreenshot=function(){var c=
l._asyncToGenerator(function*(b,a){const d=L.createEmptyImageData(a.width,a.height,document.createElement("canvas"));yield b.readPixelsAsync(a.x,a.y,a.width,a.height,n.PixelFormat.RGBA,n.PixelType.UNSIGNED_BYTE,new Uint8Array(d.data.buffer));return d});return function(b,a){return c.apply(this,arguments)}}();f._resizeCanvas=function(c){const b=this._canvas,a=b.style,{state:{size:d},pixelRatio:e}=c;c=d[0];const g=d[1],h=Math.round(c*e),k=Math.round(g*e);if(b.width!==h||b.height!==k)b.width=h,b.height=
k;a.width=c+"px";a.height=g+"px"};f._emptyTrash=function(){for(;0<this._trash.size;){const c=Array.from(this._trash);this._trash.clear();for(const b of c)b.processDetach()}};f._isLabelDrawPhaseRequired=function(c){let b=!1;for(const a of c){if(!(a instanceof w.Container)){b=b||!1;break}if(a.hasLabels)return!0;b=b||this._isLabelDrawPhaseRequired(a.children)}return b};l._createClass(p,[{key:"background",get:function(){return this._background},set:function(c){this._background=c;this.requestRender()}},
{key:"bufferPool",get:function(){return this._bufferPool}},{key:"highlightOptions",get:function(){return this._highlightOptions},set:function(c){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null);if(this._highlightOptions=c)this._highlightOptionsHandle=v.watch(()=>this._highlightOptions?.version,()=>{this.painter.setHighlightOptions(c);this.requestRender()},v.initial)}},{key:"renderingOptions",get:function(){return this._renderingOptions},set:function(c){this._renderingOptions=
c;this.requestRender()}},{key:"state",get:function(){return this._state},set:function(c){this._state=c;this.requestRender()}},{key:"stationary",get:function(){return this._stationary},set:function(c){this._stationary!==c&&(this._stationary=c,this.requestRender())}}]);return p}(w.Container);r.EXTRA_RENDER_TIME=2E3;r.Stage=M;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});