// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../CIMCursor","../CurveHelper"],function(k,m,n,p){let l=function(){function d(){}d.local=function(){null===d.instance&&(d.instance=new d);return d.instance};d.prototype.execute=function(h,a,b,c){return new q(h,a,b)};return d}();l.instance=null;let q=function(d){function h(a,b,c){a=d.call(this,a,!0,!0)||this;a._curveHelper=new p.CurveHelper;a._beginCut=(void 0!==b.beginCut?b.beginCut:1)*c;a._endCut=(void 0!==b.endCut?b.endCut:1)*c;a._middleCut=
(void 0!==b.middleCut?b.middleCut:0)*c;a._invert=void 0!==b.invert?b.invert:!1;0>a._beginCut&&(a._beginCut=0);0>a._endCut&&(a._endCut=0);0>a._middleCut&&(a._middleCut=0);return a}m._inheritsLoose(h,d);h.prototype.processPath=function(a){var b=this._beginCut;const c=this._endCut,f=this._middleCut,g=this._curveHelper.calculatePathLength(a),e=[];if(!this._invert)0===b&&0===c&&0===f?e.push(a):b+c+f>=g||(0===f?(a=this._curveHelper.getSubCurve(a,b,g-c))&&e.push(a):((b=this._curveHelper.getSubCurve(a,b,
.5*(g-f)))&&e.push(b),(b=this._curveHelper.getSubCurve(a,.5*(g+f),g-c))&&e.push(b)));else if(0!==b||0!==c||0!==f)b+c+f>=g?e.push(a):((b=this._curveHelper.getSubCurve(a,0,b))&&e.push(b),(b=this._curveHelper.getSubCurve(a,.5*(g-f),.5*(g+f)))&&e.push(b),(b=this._curveHelper.getSubCurve(a,g-c,c))&&e.push(b));return 0===e.length?null:{paths:e}};return h}(n.PathGeometryCursor);k.EffectCut=l;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});