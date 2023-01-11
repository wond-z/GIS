// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../../../../chunks/ColorMaterial.glsl ../../../webgl/context-util ../../../webgl/renderState".split(" "),function(t,n,u,p,v,g,w,h,x,l,q,y,z,k){g=function(e){function c(){return e.apply(this,
arguments)||this}u._inheritsLoose(c,e);var f=c.prototype;f.initializeConfiguration=function(a,d){d.hasWebGL2Context=a.rctx.type===z.ContextType.WEBGL2};f.initializeProgram=function(a){return new x.Program(a.rctx,c.shader.get().build(this.configuration),w.Default3D)};f._createPipeline=function(a,d){const b=this.configuration,m=a===q.TransparencyPassType.NONE,r=a===q.TransparencyPassType.FrontFace;return k.makePipelineState({blending:b.output!==p.ShaderOutput.Color&&b.output!==p.ShaderOutput.Alpha||
!b.transparent?null:m?h.blendingDefault:h.oitBlending(a),culling:k.cullingParams(b.cullFace),depthTest:{func:h.oitDepthTest(a)},depthWrite:m||r?b.writeDepth&&k.defaultDepthWriteParams:null,colorWrite:k.defaultColorWriteParams,stencilWrite:b.hasOccludees?l.stencilWriteMaskOn:null,stencilTest:b.hasOccludees?d?l.stencilToolMaskBaseParams:l.stencilBaseAllZerosParams:null,polygonOffset:m||r?b.polygonOffset&&A:h.getOITPolygonOffset(b.enableOffset)})};f.initializePipeline=function(){this._occludeePipelineState=
this._createPipeline(this.configuration.transparencyPassType,!0);return this._createPipeline(this.configuration.transparencyPassType,!1)};f.getPipelineState=function(a,d){return d?this._occludeePipelineState:e.prototype.getPipelineState.call(this,a,d)};return c}(g.ShaderTechnique);g.shader=new v.ReloadableShaderModule(y.ColorMaterial,()=>new Promise((e,c)=>t(["./ColorMaterial.glsl"],e,c)));const A={factor:1,units:1};n.ColorMaterialTechnique=g;Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});