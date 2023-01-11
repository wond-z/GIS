// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/_rollupPluginBabelHelpers ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ./DefaultVertexAttributeLocations ./Program ../../../../chunks/EdgeDetect.glsl ../../../webgl/renderState".split(" "),function(g,d,h,k,b,l,m,n,e){b=function(c){function a(){return c.apply(this,arguments)||this}h._inheritsLoose(a,c);var f=a.prototype;f.initializeProgram=function(p){return new m.Program(p.rctx,a.shader.get().build(),l.Default3D)};
f.initializePipeline=function(){return e.makePipelineState({colorWrite:e.defaultColorWriteParams})};return a}(b.ShaderTechnique);b.shader=new k.ReloadableShaderModule(n.EdgeDetect,()=>new Promise((c,a)=>g(["../shaders/EdgeDetect.glsl"],c,a)));d.EdgeDetectTechnique=b;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});