// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../../../../../chunks/_rollupPluginBabelHelpers ../../../../../../core/maybe ../../../../../../core/screenUtils ../../color ../../definitions ../../GeometryUtils ../../number ../../materialKey/MaterialKey ./util ./WGLBaseFillTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(A,B,p,x,n,y,q,C,k,D,E,F){return function(z){function u(a,c,r){var b=z.call(this,a)||this;b._minMaxZoom=q.i1616to32(Math.round(c*n.MIN_MAX_ZOOM_PRECISION_FACTOR),Math.round(r*n.MIN_MAX_ZOOM_PRECISION_FACTOR));
k.isFunction(a.color)?b._dynamicPropertyMap.set("fillColor",(d,f,g)=>(d=a.color(d,f,g))&&x.premultiplyAlphaRGBA(d)||0):(c=a.color,b.fillColor=c&&x.premultiplyAlphaRGBA(c)||0);const h="CIMMarkerPlacementInsidePolygon"===a.cim.placement?.type&&a.cim.placement.shiftOddRows?2:1,e=a.height;k.isFunction(e)?b._dynamicPropertyMap.set("_height",(d,f,g)=>e(d,f,g)*h):b._height=(e||0)*h;const l=a.offsetX;k.isFunction(l)?b._dynamicPropertyMap.set("_offsetX",(d,f,g)=>p.pt2px(l(d,f,g))):b._offsetX=p.pt2px(l||0);
const m=a.offsetY;k.isFunction(m)?b._dynamicPropertyMap.set("_offsetY",(d,f,g)=>p.pt2px(-m(d,f,g))):b._offsetY=p.pt2px(-m||0);c=a.scaleX;k.isFunction(c)?b._dynamicPropertyMap.set("_scaleX",c):b._scaleX=c||1;const t=a.angle;k.isFunction(t)?b._dynamicPropertyMap.set("_angle",(d,f,g)=>y.degToByte(t(d,f,g))):b._angle=y.degToByte(t)||0;B.isSome(a.effects)&&(c=a.effects,k.isFunction(c)?b._dynamicPropertyMap.set("_effects",c):b._effects=c);b._cimFillLayer=a;b._bitset=(a.colorLocked?n.BITSET_GENERIC_LOCK_COLOR:
0)|(a.applyRandomOffset?n.BITSET_FILL_RANDOM_PATTERN_OFFSET:0)|(a.sampleAlphaOnly?n.BITSET_GENERIC_CONSIDER_ALPHA_ONLY:0);b._fillMaterialKey=a.materialKey;return b}A._inheritsLoose(u,z);u.fromCIMFill=function(a,c){const [r,b]=k.getMinMaxZoom(a.scaleInfo,c);return new u(a,r,b)};u.prototype.bindFeature=function(a,c,r){const b=a.readLegacyFeature();this._dynamicPropertyMap.forEach((l,m)=>{this[m]=l(b,c,r)});a=C.FillMaterialKey.load(this._fillMaterialKey);var h=this._materialCache,e=this._cimFillLayer.materialHash;
e=e(b,c,r);e=h.get(e);h=null;e&&F.ok(e.spriteMosaicItem)&&(h=e.spriteMosaicItem);if(h){const {rect:l,width:m,height:t}=h;e=l.x+n.SPRITE_PADDING;const d=l.y+n.SPRITE_PADDING,f=e+m,g=d+t;let v=Math.round(p.pt2px(this._height));0>=v&&(v=g-d);let w=Math.round(p.pt2px(this._height/t*m||0));0>=w&&(w=f-e);const G=this._scaleX;this.tl=q.i1616to32(e,d);this.br=q.i1616to32(f,g);this.aux21=q.i1616to32(w,v);this.aux22=q.i1616to32(this._offsetX,this._offsetY);this.aux3=q.i8888to32(128*G,128,this._angle,0);a.sdf=
h.sdf;a.pattern=!0;a.textureBinding=h.textureBinding}else this.aux3=this.aux22=this.aux21=this.br=this.tl=0,a.sdf=!1,a.pattern=!1,a.textureBinding=0;this._materialKey=a.data};return u}(D(E))});