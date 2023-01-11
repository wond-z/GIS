// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/promiseUtils ../../../../chunks/vec4f64 ../lib/AutoDisposable ../lib/basicInterfaces ../../../support/screenshotUtils ../../../webgl/enums ../../../webgl/FramebufferObject ../../../../core/imageUtils".split(" "),function(t,x,y,A,B,u,v,C,m,z,w){u=function(r){function q(b,a,d,c){var f=r.call(this)||this;f._rctx=b;f._renderFunctions=a;f._forceCameraHook=d;f._disposeOffscreenBuffers=c;f.supersample=!0;
f._screenshotQueue=[];return f}x._inheritsLoose(q,r);var l=q.prototype;l.dispose=function(){this._rctx=null};l.takeScreenshot=function(){var b=x._asyncToGenerator(function*(a){yield this._renderFunctions.prepareOverlay();this._renderFunctions.requestRenderScene(v.RenderRequestType.BACKGROUND);const d=A.createResolver();this._screenshotQueue.push({settings:a,resolver:d});return d.promise});return function(a){return b.apply(this,arguments)}}();l.update=function(b,a){for(const d of this._screenshotQueue){if(this.isDisposed){d.resolver.reject();
continue}const c=this._renderScreenshot(b,{...d.settings,pixelRatio:d.settings.pixelRatio*b.viewCamera.pixelRatio},a);d.resolver(c)}this._screenshotQueue.length=0};l._renderScreenshotOverlay=function(b,a,d){b.width=a.width;b.height=a.height;const c=b.getContext("2d"),f=d.pixelRatio;c.save();c.translate(0,a.height);c.scale(1,-1);d.region&&c.translate(-d.region.x,-d.region.y);c.scale(f,f);a=this._renderFunctions.renderOverlay(b,a);c.restore();return a};l._readbackScreenshot=function(b,a){return b.resample?
this._readbackScreenshotResampled(b,a):this._readbackScreenshotImmediate(b,a)};l._readbackScreenshotResampled=function(b,a){const {framebufferWidth:d,framebufferHeight:c,region:f,resample:g}=b,p=this._ensureScreenshotEncodeCanvas();let n=w.createEmptyImageData(d,c,p);this._rctx.gl.readPixels(0,0,d,c,m.PixelFormat.RGBA,m.DataType.UNSIGNED_BYTE,new Uint8Array(n.data.buffer));a();n=this._renderScreenshotOverlay(p,n,{...b,region:null});b=w.createEmptyImageData(f.width,f.height,p);return C.resampleHermite(n,
b,!0,g.region.x,c-(g.region.y+g.region.height),g.region.width,g.region.height)};l._readbackScreenshotImmediate=function(b,a){const {framebufferHeight:d,region:c}=b,f=this._ensureScreenshotEncodeCanvas(),g=w.createEmptyImageData(c.width,c.height,f);this._rctx.gl.readPixels(c.x,d-(c.y+c.height),c.width,c.height,m.PixelFormat.RGBA,m.DataType.UNSIGNED_BYTE,new Uint8Array(g.data.buffer));a();return this._renderScreenshotOverlay(f,g,b)};l._renderScreenshot=function(b,a,d){let c=null,f=null;const g=b.viewCamera,
{framebufferWidth:p,framebufferHeight:n}=a;var k=!1;b=a.disableDecorations&&b.frameHasDecorations;var e=a.ignorePadding&&g.pixelRatio!==a.pixelRatio;b=p!==g.fullWidth||n!==g.fullHeight||b||e||a.objectAndLayerIdColor;a.objectAndLayerIdColor&&(f=new z.FramebufferObject(this._rctx,{width:p,height:n,colorTarget:m.TargetType.TEXTURE,depthStencilTarget:m.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER}));if(b){e=g.clone();if(a.ignorePadding){k=B.clone(e.padding);for(var h=0;4>h;h++)k[h]=Math.round(k[h]/
e.pixelRatio*a.pixelRatio);e.padding=k}e.fullWidth=p;e.fullHeight=n;e.pixelRatio=a.pixelRatio;k=g.fovX-e.fovX;h=g.fovY-e.fovY;0>k&&k<h?e.fovX=g.fovX:0>h&&h<k&&(e.fovY=g.fovY);this._forceCameraHook(e);k=!0;c=new z.FramebufferObject(this._rctx,{width:e.fullWidth,height:e.fullHeight,colorTarget:m.TargetType.TEXTURE,depthStencilTarget:m.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER});this._renderFunctions.renderScene(c,f,e,a.disableDecorations?v.Decorations.OFF:v.Decorations.ON,d);this._disposeOffscreenBuffers()}e=
()=>{this._rctx.bindFramebuffer(null);y.disposeMaybe(c)};d=this._readbackScreenshot(a,e);e();e=null;a.objectAndLayerIdColor&&(h=()=>{this._rctx.bindFramebuffer(null);y.disposeMaybe(f)},this._rctx.bindFramebuffer(f),e=this._readbackScreenshot(a,h),this._rctx.bindFramebuffer(null),h());if(b&&!this._rctx.contextAttributes.alpha)for(a=3;a<d.data.length;a+=4)d.data[a]=255;if(e&&!this._rctx.contextAttributes.alpha)for(a=3;a<e.data.length;a+=4)e.data[a]=255;k&&this._forceCameraHook(g);return[d,e]};l._ensureScreenshotEncodeCanvas=
function(){this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas"));return this._screenshotEncodeCanvas};return q}(u.AutoDisposable);t.ScreenshotContext=function(r,q){this.viewCamera=r;this.frameHasDecorations=q};t.ScreenshotManager=u;Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});