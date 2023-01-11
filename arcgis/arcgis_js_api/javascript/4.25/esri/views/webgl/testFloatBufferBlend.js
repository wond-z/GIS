// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../3d/webgl-engine/lib/OrderIndependentTransparency ./BufferObject ./context-util ./enums ./FramebufferObject ./renderState ./VertexArrayObject ./VertexElementDescriptor".split(" "),function(P,R,S,T,r,U,V,W,X){var Q={exports:{}};(function(g){(function(v){v=v();void 0!==v&&(g.exports=v)})(function(){function v(a){if(null==x){x={};z={};for(var e in a)"number"==typeof a[e]&&(x[a[e]]=e,z[e]=a[e])}}function F(){if(null==x)throw"WebGLDebugUtils.init(ctx) not called";}function y(a){F();var e=
x[a];return void 0!==e?"gl."+e:"/*UNKNOWN WebGL ENUM*/ 0x"+a.toString(16)}function D(a,e,h,d){a=L[a];if(void 0!==a&&(a=a[e],void 0!==a&&a[h])){if("object"===typeof a[h]&&void 0!==a[h].enumBitwiseOr){e=a[h].enumBitwiseOr;h=0;a=[];for(var q=0;q<e.length;++q){var t=z[e[q]];0!==(d&t)&&(h|=t,a.push(y(t)))}return h===d?a.join(" | "):y(d)}return y(d)}return null===d?"null":void 0===d?"undefined":d.toString()}function H(a,e,h){a.__defineGetter__(h,function(){return e[h]});a.__defineSetter__(h,function(d){e[h]=
d})}function I(a,e,h,d){function q(p,f){return function(){h&&h(f,arguments);var A=p[f].apply(p,arguments),l=d.getError();0!=l&&(t[l]=!0,e(l,f,arguments));return A}}d=d||a;v(a);e=e||function(p,f,A){for(var l="",E=A.length,w=0;w<E;++w)l+=(0==w?"":", ")+D(f,E,w,A[w]);p="WebGL error "+y(p)+" in "+f+"("+l+")";window.console&&window.console.error?window.console.error(p):window.console&&window.console.log&&window.console.log(p)};var t={},B={},k;for(k in a)if("function"==typeof a[k])if("getExtension"!=k)B[k]=
q(a,k);else{var J=q(a,k);B[k]=function(){var p=J.apply(a,arguments);return I(p,e,h,d)}}else H(B,a,k);B.getError=function(){for(var p in t)if(t.hasOwnProperty(p)&&t[p])return t[p]=!1,p;return a.NO_ERROR};return B}function K(a){var e=a.getParameter(a.MAX_VERTEX_ATTRIBS),h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h);for(var d=0;d<e;++d)a.disableVertexAttribArray(d),a.vertexAttribPointer(d,4,a.FLOAT,!1,0,0),a.vertexAttrib1f(d,0);a.deleteBuffer(h);e=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);for(d=
0;d<e;++d)a.activeTexture(a.TEXTURE0+d),a.bindTexture(a.TEXTURE_CUBE_MAP,null),a.bindTexture(a.TEXTURE_2D,null);a.activeTexture(a.TEXTURE0);a.useProgram(null);a.bindBuffer(a.ARRAY_BUFFER,null);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null);a.bindFramebuffer(a.FRAMEBUFFER,null);a.bindRenderbuffer(a.RENDERBUFFER,null);a.disable(a.BLEND);a.disable(a.CULL_FACE);a.disable(a.DEPTH_TEST);a.disable(a.DITHER);a.disable(a.SCISSOR_TEST);a.blendColor(0,0,0,0);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.ONE,a.ZERO);
a.clearColor(0,0,0,0);a.clearDepth(1);a.clearStencil(-1);a.colorMask(!0,!0,!0,!0);a.cullFace(a.BACK);a.depthFunc(a.LESS);a.depthMask(!0);a.depthRange(0,1);a.frontFace(a.CCW);a.hint(a.GENERATE_MIPMAP_HINT,a.DONT_CARE);a.lineWidth(1);a.pixelStorei(a.PACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_ALIGNMENT,4);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);a.UNPACK_COLORSPACE_CONVERSION_WEBGL&&a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL);
a.polygonOffset(0,0);a.sampleCoverage(1,!1);a.scissor(0,0,a.canvas.width,a.canvas.height);a.stencilFunc(a.ALWAYS,0,4294967295);a.stencilMask(4294967295);a.stencilOp(a.KEEP,a.KEEP,a.KEEP);a.viewport(0,0,a.canvas.width,a.canvas.height);for(a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);a.getError(););}var L={enable:{1:{0:!0}},disable:{1:{0:!0}},getParameter:{1:{0:!0}},drawArrays:{3:{0:!0}},drawElements:{4:{0:!0,2:!0}},createShader:{1:{0:!0}},getShaderParameter:{2:{1:!0}},getProgramParameter:{2:{1:!0}},
getShaderPrecisionFormat:{2:{0:!0,1:!0}},getVertexAttrib:{2:{1:!0}},vertexAttribPointer:{6:{2:!0}},bindTexture:{2:{0:!0}},activeTexture:{1:{0:!0}},getTexParameter:{2:{0:!0,1:!0}},texParameterf:{3:{0:!0,1:!0}},texParameteri:{3:{0:!0,1:!0,2:!0}},texImage2D:{9:{0:!0,2:!0,6:!0,7:!0},6:{0:!0,2:!0,3:!0,4:!0}},texSubImage2D:{9:{0:!0,6:!0,7:!0},7:{0:!0,4:!0,5:!0}},copyTexImage2D:{8:{0:!0,2:!0}},copyTexSubImage2D:{8:{0:!0}},generateMipmap:{1:{0:!0}},compressedTexImage2D:{7:{0:!0,2:!0}},compressedTexSubImage2D:{8:{0:!0,
6:!0}},bindBuffer:{2:{0:!0}},bufferData:{3:{0:!0,2:!0}},bufferSubData:{3:{0:!0}},getBufferParameter:{2:{0:!0,1:!0}},pixelStorei:{2:{0:!0,1:!0}},readPixels:{7:{4:!0,5:!0}},bindRenderbuffer:{2:{0:!0}},bindFramebuffer:{2:{0:!0}},checkFramebufferStatus:{1:{0:!0}},framebufferRenderbuffer:{4:{0:!0,1:!0,2:!0}},framebufferTexture2D:{5:{0:!0,1:!0,2:!0}},getFramebufferAttachmentParameter:{3:{0:!0,1:!0,2:!0}},getRenderbufferParameter:{2:{0:!0,1:!0}},renderbufferStorage:{4:{0:!0,1:!0}},clear:{1:{0:{enumBitwiseOr:["COLOR_BUFFER_BIT",
"DEPTH_BUFFER_BIT","STENCIL_BUFFER_BIT"]}}},depthFunc:{1:{0:!0}},blendFunc:{2:{0:!0,1:!0}},blendFuncSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},blendEquation:{1:{0:!0}},blendEquationSeparate:{2:{0:!0,1:!0}},stencilFunc:{3:{0:!0}},stencilFuncSeparate:{4:{0:!0,1:!0}},stencilMaskSeparate:{2:{0:!0}},stencilOp:{3:{0:!0,1:!0,2:!0}},stencilOpSeparate:{4:{0:!0,1:!0,2:!0,3:!0}},cullFace:{1:{0:!0}},frontFace:{1:{0:!0}},drawArraysInstancedANGLE:{4:{0:!0}},drawElementsInstancedANGLE:{5:{0:!0,2:!0}},blendEquationEXT:{1:{0:!0}}},
x=null,z=null;return{init:v,mightBeEnum:function(a){F();return void 0!==x[a]},glEnumToString:y,glFunctionArgToString:D,glFunctionArgsToString:function(a,e){for(var h="",d=e.length,q=0;q<d;++q)h+=(0==q?"":", ")+D(a,d,q,e[q]);return h},makeDebugContext:I,makeLostContextSimulatingCanvas:function(a){function e(c){return"function"==typeof c?c:function(b){c.handleEvent(b)}}function h(){for(var c=Object.keys(C),b=0;b<c.length;++b)delete C[c]}function d(){++G;l||w==G&&a.loseContext()}function q(c,b){var m=
c[b];return function(){d();if(!l)return m.apply(c,arguments)}}function t(c){return{statusMessage:c,preventDefault:function(){M=!0}}}function B(c){for(var b in c)"function"==typeof c[b]?f[b]=q(c,b):H(f,c,b);f.getError=function(){d();if(!l)for(var n;n=k.getError();)C[n]=!0;for(n in C)if(C[n])return delete C[n],n;return f.NO_ERROR};var m="createBuffer createFramebuffer createProgram createRenderbuffer createShader createTexture".split(" ");for(b=0;b<m.length;++b){var u=m[b];f[u]=function(n){return function(){d();
if(l)return null;var N=n.apply(c,arguments);N.__webglDebugContextLostId__=A;E.push(N);return N}}(c[u])}m="getActiveAttrib getActiveUniform getBufferParameter getContextAttributes getAttachedShaders getFramebufferAttachmentParameter getParameter getProgramParameter getProgramInfoLog getRenderbufferParameter getShaderParameter getShaderInfoLog getShaderSource getTexParameter getUniform getUniformLocation getVertexAttrib".split(" ");for(b=0;b<m.length;++b)u=m[b],f[u]=function(n){return function(){d();
return l?null:n.apply(c,arguments)}}(f[u]);m="isBuffer isEnabled isFramebuffer isProgram isRenderbuffer isShader isTexture".split(" ");for(b=0;b<m.length;++b)u=m[b],f[u]=function(n){return function(){d();return l?!1:n.apply(c,arguments)}}(f[u]);f.checkFramebufferStatus=function(n){return function(){d();return l?f.FRAMEBUFFER_UNSUPPORTED:n.apply(c,arguments)}}(f.checkFramebufferStatus);f.getAttribLocation=function(n){return function(){d();return l?-1:n.apply(c,arguments)}}(f.getAttribLocation);f.getVertexAttribOffset=
function(n){return function(){d();return l?0:n.apply(c,arguments)}}(f.getVertexAttribOffset);f.isContextLost=function(){return l};return f}var k,J=[],p=[];var f={};var A=1,l=!1,E=[],w=0,G=0,M=!1,O=0,C={};a.getContext=function(c){return function(){var b=c.apply(a,arguments);if(b instanceof WebGLRenderingContext){if(b!=k){if(k)throw"got different context";k=b;f=B(k)}return f}return b}}(a.getContext);(function(c){var b=c.addEventListener;c.addEventListener=function(m,u,n){switch(m){case "webglcontextlost":J.push(e(u));
break;case "webglcontextrestored":p.push(e(u));break;default:b.apply(c,arguments)}}})(a);a.loseContext=function(){if(!l){l=!0;w=0;for(++A;k.getError(););h();C[k.CONTEXT_LOST_WEBGL]=!0;var c=t("context lost"),b=J.slice();setTimeout(function(){for(var m=0;m<b.length;++m)b[m](c);0<=O&&setTimeout(function(){a.restoreContext()},O)},0)}};a.restoreContext=function(){l&&p.length&&setTimeout(function(){if(!M)throw"can not restore. webglcontestlost listener did not call event.preventDefault";for(var c=0;c<
E.length;++c){var b=E[c];b instanceof WebGLBuffer?k.deleteBuffer(b):b instanceof WebGLFramebuffer?k.deleteFramebuffer(b):b instanceof WebGLProgram?k.deleteProgram(b):b instanceof WebGLRenderbuffer?k.deleteRenderbuffer(b):b instanceof WebGLShader?k.deleteShader(b):b instanceof WebGLTexture&&k.deleteTexture(b)}K(k);l=!1;G=0;M=!1;c=p.slice();b=t("context restored");for(var m=0;m<c.length;++m)c[m](b)},0)};a.loseContextInNCalls=function(c){if(l)throw"You can not ask a lost contet to be lost";w=G+c};a.getNumCalls=
function(){return G};a.setRestoreTimeout=function(c){O=c};return a},resetToInitialState:K}})})(Q);P.testFloatBufferBlend=function(g){if(!g.gl)return!1;if(g.type===T.ContextType.WEBGL1)return!(!g.capabilities.textureFloat?.textureFloat||!g.capabilities.colorBufferFloat?.textureFloat);if(!(g.capabilities.textureFloat?.textureFloat&&g.capabilities.colorBufferFloat?.textureFloat&&g.capabilities.colorBufferFloat?.floatBlend))return!1;const v=new U.FramebufferObject(g,{colorTarget:r.TargetType.TEXTURE,
depthStencilTarget:r.DepthStencilTargetType.NONE},{target:r.TextureType.TEXTURE_2D,wrapMode:r.TextureWrapMode.CLAMP_TO_EDGE,pixelFormat:r.PixelFormat.RGBA,dataType:r.PixelType.FLOAT,internalFormat:r.SizedPixelFormat.RGBA32F,samplingMode:r.TextureSamplingMode.NEAREST,width:1,height:1}),F=S.BufferObject.createVertex(g,r.Usage.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),y=new W.VertexArrayObject(g,new Map([["a_pos",0]]),{geometry:[new X.VertexElementDescriptor("a_pos",2,r.DataType.UNSIGNED_SHORT,
0,4)]},{geometry:F}),D=g.programCache.acquire("\n  precision highp float;\n  attribute vec2 a_pos;\n\n  void main() {\n    gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n   precision highp float;\n\n   void main() {\n    gl_FragColor \x3d vec4(0.5, 0.5, 0.5, 0.5);\n   }\n  ",new Map([["a_pos",0]]));g.useProgram(D);const H=g.getBoundFramebufferObject(),{x:I,y:K,width:L,height:x}=g.getViewport();g.bindFramebuffer(v);g.setViewport(0,0,1,1);g.bindVAO(y);g.drawArrays(r.PrimitiveType.TRIANGLE_STRIP,
0,4);var z=V.makePipelineState({blending:R.blendingAlpha});g.setPipelineState(z);g.drawArrays(r.PrimitiveType.TRIANGLE_STRIP,0,4);Q.exports.init(g);z=g.gl.getError();g.setViewport(I,K,L,x);g.bindFramebuffer(H);D.dispose();y.dispose(!1);F.dispose();v.dispose();return 1282===z?(console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."),!1):!0};Object.defineProperties(P,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});