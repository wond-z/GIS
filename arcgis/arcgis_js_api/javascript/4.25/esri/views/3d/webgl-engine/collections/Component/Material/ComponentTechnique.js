// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../ViewingMode ./ComponentTechniqueConfiguration ../../../../../../chunks/ComponentShader.glsl ../../../core/shaderLibrary/ShaderOutput ../../../core/shaderLibrary/util/DoublePrecision.glsl ../../../core/shaderTechnique/ReloadableShaderModule ../../../core/shaderTechnique/ShaderTechnique ../../../lib/basicInterfaces ../../../lib/OrderIndependentTransparency ../../../lib/Program ../../../lib/StencilUtils ../../../lib/TransparencyPassType ../../../lib/VertexAttribute ../../../../../webgl/context-util ../../../../../webgl/renderState".split(" "),
function(v,l,w,x,y,z,p,A,B,e,C,f,D,m,q,c,E,g){e=function(h){function d(){return h.apply(this,arguments)||this}w._inheritsLoose(d,h);var k=d.prototype;k.initializeConfiguration=function(b,a){a.hasWebGL2Context=b.rctx.type===E.ContextType.WEBGL2;a.spherical=b.viewingMode===x.ViewingMode.Global;a.doublePrecisionRequiresObfuscation=A.doublePrecisionRequiresObfuscation(b.rctx)};k.initializeProgram=function(b){return new D.Program(b.rctx,d.shader.get().build(this.configuration),r)};k._setPipelineState=
function(b){const a=this.configuration,t=a.integratedMeshMode!==y.IntegratedMeshMode.None,n=b===q.TransparencyPassType.NONE,u=b===q.TransparencyPassType.FrontFace;return g.makePipelineState({blending:a.output!==p.ShaderOutput.Color&&a.output!==p.ShaderOutput.Alpha||!a.blendingEnabled?null:n?f.blendingDefault:f.oitBlending(b),culling:g.cullingParams(a.cullFace),depthTest:{func:f.oitDepthTest(b)},depthWrite:n||u?g.defaultDepthWriteParams:null,colorWrite:g.defaultColorWriteParams,stencilWrite:t||a.hasOccludees?
m.stencilWriteMaskOn:null,stencilTest:t?m.replaceBitWhenDepthTestPasses(C.StencilBits.IntegratedMeshMaskExcluded):a.hasOccludees?m.stencilBaseAllZerosParams:null,polygonOffset:n||u?a.hasPolygonOffset?{factor:2,units:2}:null:f.OITPolygonOffset})};k.initializePipeline=function(){return this._setPipelineState(this.configuration.transparencyPassType)};return d}(e.ShaderTechnique);e.shader=new B.ReloadableShaderModule(z.ComponentShader,()=>new Promise((h,d)=>v(["./shader/ComponentShader.glsl"],h,d)));
const r=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.NORMAL,1],[c.VertexAttribute.NORMALCOMPRESSED,1],[c.VertexAttribute.COLOR,2],[c.VertexAttribute.UV0,3],[c.VertexAttribute.UVREGION,4],[c.VertexAttribute.COMPONENTINDEX,5]]);l.ComponentTechnique=e;l.attributeLocations=r;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});