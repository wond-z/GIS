// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/Error","../../../../../core/Logger","../../../../../core/maybe"],function(l,n,z,p,q){const v=p.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");p=function(){function b(){this._includedModules=new Map}b.prototype.include=function(e,a){if(this._includedModules.has(e)){const d=this._includedModules.get(e);if(d!==a){v.error("Trying to include shader module multiple times with different sets of options.");
a=new Set;for(const c of Object.keys(d))d[c]!==e[c]&&a.add(c);for(const c of Object.keys(e))d[c]!==e[c]&&a.add(c);a.forEach(c=>console.error(`  ${c}: current ${d[c]} new ${e[c]}`))}}else this._includedModules.set(e,a),e(this.builder,a)};return b}();let D=function(b){function e(){var d=b.apply(this,arguments)||this;d.vertex=new r;d.fragment=new r;d.attributes=new A;d.varyings=new B;d.extensions=new t;d.constants=new w;return d}n._inheritsLoose(e,b);var a=e.prototype;a.generate=function(d){const c=
this.extensions.generateSource(d),f=this.attributes.generateSource(d),m=this.varyings.generateSource();var k="vertex"===d?this.vertex:this.fragment;const g=k.uniforms.generateSource(),h=k.code.generateSource();d="vertex"===d?"precision highp float;\nprecision highp sampler2D;":"#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif";k=this.constants.generateSource().concat(k.constants.generateSource());
return`\n${c.join("\n")}\n\n${d}\n\n${k.join("\n")}\n\n${g.join("\n")}\n\n${f.join("\n")}\n\n${m.join("\n")}\n\n${h.join("\n")}`};a.generateBind=function(d,c){const f=new Map;this.vertex.uniforms.entries.forEach(g=>{const h=g.bind[d];q.isSome(h)&&f.set(g.name,h)});this.fragment.uniforms.entries.forEach(g=>{const h=g.bind[d];q.isSome(h)&&f.set(g.name,h)});const m=Array.from(f.values()),k=m.length;return(g,h,C)=>{for(let u=0;u<k;++u)m[u](c,g,h,C)}};n._createClass(e,[{key:"fragmentUniforms",get:function(){return this.fragment.uniforms.entries}},
{key:"builder",get:function(){return this}}]);return e}(p),x=function(){function b(){this._entries=new Map}var e=b.prototype;e.add=function(a){if(!Array.isArray(a))return this._add(a);for(const d of a)this._add(d)};e.get=function(a){return this._entries.get(a)};e._add=function(a){if(q.isNone(a))v.error(`Trying to add null Uniform from ${Error().stack}.`);else{if(this._entries.has(a.name)&&!this._entries.get(a.name).equals(a))throw new z(`Duplicate uniform name ${a.name} for different uniform type`);
this._entries.set(a.name,a)}};e.generateSource=function(){return Array.from(this._entries.values()).map(a=>q.isSome(a.arraySize)?`uniform ${a.type} ${a.name}[${a.arraySize}];`:`uniform ${a.type} ${a.name};`)};n._createClass(b,[{key:"entries",get:function(){return Array.from(this._entries.values())}}]);return b}(),y=function(){function b(){this._entries=[]}var e=b.prototype;e.add=function(a){this._entries.push(a)};e.generateSource=function(){return this._entries};return b}(),r=function(b){function e(){var a=
b.apply(this,arguments)||this;a.uniforms=new x;a.code=new y;a.constants=new w;return a}n._inheritsLoose(e,b);n._createClass(e,[{key:"builder",get:function(){return this}}]);return e}(p),A=function(){function b(){this._entries=[]}var e=b.prototype;e.add=function(a,d){this._entries.push([a,d])};e.generateSource=function(a){return"fragment"===a?[]:this._entries.map(d=>`attribute ${d[1]} ${d[0]};`)};return b}(),B=function(){function b(){this._entries=[]}var e=b.prototype;e.add=function(a,d){this._entries.push([a,
d])};e.generateSource=function(){return this._entries.map(a=>`varying ${a[1]} ${a[0]};`)};return b}(),t=function(){function b(){this._entries=new Set}var e=b.prototype;e.add=function(a){this._entries.add(a)};e.generateSource=function(a){const d="vertex"===a?b.ALLOWLIST_VERTEX:b.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(c=>d.includes(c)).map(c=>`#extension ${c} : enable`)};return b}();t.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"];t.ALLOWLIST_VERTEX=
[];let w=function(){function b(){this._entries=new Set}var e=b.prototype;e.add=function(a,d,c){let f="ERROR_CONSTRUCTOR_STRING";switch(d){case "float":f=b._numberToFloatStr(c);break;case "int":f=b._numberToIntStr(c);break;case "bool":f=c.toString();break;case "vec2":f=`vec2(${b._numberToFloatStr(c[0])},                            ${b._numberToFloatStr(c[1])})`;break;case "vec3":f=`vec3(${b._numberToFloatStr(c[0])},                            ${b._numberToFloatStr(c[1])},                            ${b._numberToFloatStr(c[2])})`;
break;case "vec4":f=`vec4(${b._numberToFloatStr(c[0])},                            ${b._numberToFloatStr(c[1])},                            ${b._numberToFloatStr(c[2])},                            ${b._numberToFloatStr(c[3])})`;break;case "ivec2":f=`ivec2(${b._numberToIntStr(c[0])},                             ${b._numberToIntStr(c[1])})`;break;case "ivec3":f=`ivec3(${b._numberToIntStr(c[0])},                             ${b._numberToIntStr(c[1])},                             ${b._numberToIntStr(c[2])})`;
break;case "ivec4":f=`ivec4(${b._numberToIntStr(c[0])},                             ${b._numberToIntStr(c[1])},                             ${b._numberToIntStr(c[2])},                             ${b._numberToIntStr(c[3])})`;break;case "mat2":case "mat3":case "mat4":f=`${d}(${Array.prototype.map.call(c,m=>b._numberToFloatStr(m)).join(", ")})`}this._entries.add(`const ${d} ${a} = ${f};`);return this};b._numberToIntStr=function(a){return a.toFixed(0)};b._numberToFloatStr=function(a){return Number.isInteger(a)?
a.toFixed(1):a.toString()};e.generateSource=function(){return Array.from(this._entries)};return b}();l.Code=y;l.Includes=p;l.ShaderBuilder=D;l.Stage=r;l.Uniforms=x;Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});