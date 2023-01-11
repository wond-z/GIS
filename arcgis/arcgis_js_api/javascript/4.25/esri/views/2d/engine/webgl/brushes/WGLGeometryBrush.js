// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/maybe ../definitions ./WGLBrush ../materialKey/MaterialKey ../../../../webgl/enums".split(" "),function(u,q,k,v,w,h){return function(r){function n(){var a=r.apply(this,arguments)||this;a._computeDesc=new Map;return a}u._inheritsLoose(n,r);var l=n.prototype;l.prepareState=function({context:a},c){c&&c.includes("hittest")?a.setBlendFunctionSeparate(h.BlendFactor.ONE,h.BlendFactor.ONE,h.BlendFactor.ONE,h.BlendFactor.ONE):a.setBlendFunctionSeparate(h.BlendFactor.ONE,
h.BlendFactor.ONE_MINUS_SRC_ALPHA,h.BlendFactor.ONE,h.BlendFactor.ONE_MINUS_SRC_ALPHA);a.setBlendingEnabled(!0);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!0)};l.draw=function(a,c,b){var d=this.getGeometryType();c.commit(a);d=c.getGeometry(d);q.isNone(d)||(a.timeline.begin(this.name),a.attributeView.bindTextures(a.context),a.context.setStencilFunction(h.CompareFunction.EQUAL,c.stencilRef,255),d.forEachCommand(e=>{const g=w.MaterialKeyBase.load(e.materialKey).symbologyType;
this.supportsSymbology(g)&&this.drawGeometry(a,c,e,b)}))};l._setSharedUniforms=function(a,c,b){const {displayLevel:d,pixelRatio:e,state:g,passOptions:f}=c;q.isSome(f)&&"hittest"===f.type&&(a.setUniform2fv("u_hittestPos",f.position),a.setUniform1f("u_hittestDist",f.distance));a.setUniform1f("u_pixelRatio",e);a.setUniformMatrix3fv("u_tileMat3",b.transforms.tileMat3);a.setUniformMatrix3fv("u_viewMat3",g.viewMat3);a.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);a.setUniformMatrix3fv("u_displayViewMat3",
g.displayViewMat3);a.setUniform1f("u_currentZoom",Math.round(d*k.MIN_MAX_ZOOM_PRECISION_FACTOR));a.setUniform1i("u_attributeTextureSize",c.attributeView.size);a.setUniform1i("u_attributeData0",k.TEXTURE_BINDING_ATTRIBUTE_DATA_0);a.setUniform1i("u_attributeData1",k.TEXTURE_BINDING_ATTRIBUTE_DATA_1);a.setUniform1i("u_attributeData2",k.TEXTURE_BINDING_ATTRIBUTE_DATA_2);a.setUniform1i("u_attributeData3",k.TEXTURE_BINDING_ATTRIBUTE_DATA_3);a.setUniform1i("u_attributeData4",k.TEXTURE_BINDING_ATTRIBUTE_DATA_4);
a.setUniform1i("u_attributeData5",k.TEXTURE_BINDING_ATTRIBUTE_DATA_5)};l._setSizeVVUniforms=function(a,c,b,d){a.vvSizeMinMaxValue&&c.setUniform4fv("u_vvSizeMinMaxValue",b.vvSizeMinMaxValue);a.vvSizeScaleStops&&c.setUniform1f("u_vvSizeScaleStopsValue",b.vvSizeScaleStopsValue);a.vvSizeFieldStops&&(d=b.getSizeVVFieldStops(d.key.level),c.setUniform1fv("u_vvSizeFieldStopsValues",d.values),c.setUniform1fv("u_vvSizeFieldStopsSizes",d.sizes));a.vvSizeUnitValue&&c.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",
b.vvSizeUnitValueToPixelsRatio)};l._setColorAndOpacityVVUniforms=function(a,c,b){a.vvColor&&(c.setUniform1fv("u_vvColorValues",b.vvColorValues),c.setUniform4fv("u_vvColors",b.vvColors));a.vvOpacity&&(c.setUniform1fv("u_vvOpacityValues",b.vvOpacityValues),c.setUniform1fv("u_vvOpacities",b.vvOpacities))};l._setRotationVVUniforms=function(a,c,b){a.vvRotation&&c.setUniform1f("u_vvRotationType","geographic"===b.vvMaterialParameters.vvRotationType?0:1)};l._getTriangleDesc=function(a,c,b=["a_pos"]){const d=
c.bufferLayouts.geometry;b=b.map(f=>d.findIndex(m=>m.name===f));a=`${a}-${b.join("-")}`;var e=this._computeDesc.get(a);if(!e){e=c.strides;const f=c.strides.geometry,m=new Map(c.attributes);var g=d.map(p=>({...p}));c=Math.max(...c.attributes.values());g={geometry:g};let t=0;for(const p of b)b=d[p],g.geometry.push({count:b.count,name:b.name+"1",divisor:b.divisor,normalized:b.normalized,offset:f+b.offset,stride:f,type:b.type}),g.geometry.push({count:b.count,name:b.name+"2",divisor:b.divisor,normalized:b.normalized,
offset:2*f+b.offset,stride:f,type:b.type}),m.set(b.name+"1",c+ ++t),m.set(b.name+"2",c+ ++t);e={bufferLayouts:g,attributes:m,strides:e};this._computeDesc.set(a,e)}return e};return n}(v)});