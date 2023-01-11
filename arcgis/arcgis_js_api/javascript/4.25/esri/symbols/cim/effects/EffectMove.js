// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/lang","../../../geometry/support/jsonUtils"],function(k,h,f){let l=function(){function b(){}b.local=function(){null===b.instance&&(b.instance=new b);return b.instance};b.prototype.execute=function(g,a,c,d){return new m(g,a,c)};return b}();l.instance=null;let m=function(){function b(a,c,d){this._inputGeometries=a;this._offsetX=void 0!==c.offsetX?c.offsetX*d:0;this._offsetY=void 0!==c.offsetY?-c.offsetY*d:0}var g=b.prototype;g.next=function(){for(var a=this._inputGeometries.next();a;){if(f.isExtent(a))return{xmin:a.xmin+
this._offsetX,xmax:a.xmax+this._offsetX,ymin:a.ymin+this._offsetY,ymax:a.ymax+this._offsetY};if(f.isPolygon(a))return a=h.clone(a),this._moveMultipath(a.rings,this._offsetX,this._offsetY),a;if(f.isPolyline(a))return a=h.clone(a),this._moveMultipath(a.paths,this._offsetX,this._offsetY),a;if(f.isMultipoint(a))return a=h.clone(a),this._movePath(a.points,this._offsetX,this._offsetY),a;if(f.isPoint(a))return{x:a.x+this._offsetX,y:a.y+this._offsetY};a=this._inputGeometries.next()}return null};g._moveMultipath=
function(a,c,d){if(a)for(const e of a)this._movePath(e,c,d)};g._movePath=function(a,c,d){if(a)for(const e of a)e[0]+=c,e[1]+=d};return b}();k.EffectMove=l;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});