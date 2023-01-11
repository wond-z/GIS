// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],function(k,m,f){f=function(l){function g(b,c,d){var a=l.call(this,!0)||this;a.view=b;a.keys=c;a._pressed=!1;a._keyToDirection={[c.clockwiseOption1]:"clockwise",[c.clockwiseOption2]:"clockwise",[c.counterClockwiseOption1]:"counterClockwise",[c.counterClockwiseOption2]:"counterClockwise",[c.resetOption1]:"reset",[c.resetOption2]:"reset"};a.registerIncoming("key-down",d,h=>a._handleKeyDown(h));a.registerIncoming("key-up",
d,h=>a._handleKeyUp(h));a.registerIncoming("blur",d,()=>a._handleBlur());return a}m._inheritsLoose(g,l);var e=g.prototype;e._handleKeyDown=function(b){b.data.repeat||this._handleKey(b,!0)};e._handleKeyUp=function(b){this._handleKey(b,!1)};e._handleBlur=function(){this._pressed&&(this._pressed=!1,this.view.mapViewNavigation.stop())};e._handleKey=function(b,c){var d=b.modifiers;if(!(0<d.size&&!d.has("Shift")||!this.view.constraints.rotationEnabled)&&(d=this._keyToDirection[b.data.key],this._pressed=
null!=d)){if(c)switch(this.view.mapViewNavigation.begin(),d){case "clockwise":this.view.mapViewNavigation.continousRotateClockwise();break;case "counterClockwise":this.view.mapViewNavigation.continousRotateCounterclockwise();break;case "reset":this.view.mapViewNavigation.resetRotation()}else this._pressed=!1,this.view.mapViewNavigation.stop();b.stopPropagation()}};return g}(f.InputHandler);k.KeyRotate=f;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});