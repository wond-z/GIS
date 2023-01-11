// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/maybe ../../../core/reactiveUtils ../../../core/timeUtils ../../../core/uuid ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../intl/number ../../Slider ../../Widget ../css ./Label ./LabeledColorPicker ../../support/widgetUtils ../../support/decorators/messageBundle ../../support/jsxFactory".split(" "),
function(v,c,p,e,w,q,m,r,g,E,F,x,y,z,A,t,B,C,G,D,n){c.ThresholdConfigurator=function(u){function h(d){var a=u.call(this,d)||this;a.colorPickerVisible=!0;a._valueSliderId=`value-slider-${r.generateUUID()}`;a._colorPickerId=`color-picker-${r.generateUUID()}`;a._valueSlider=new z({visibleElements:{labels:!1,rangeLabels:!1},steps:m.convertTime(30,"minutes","milliseconds"),labelFormatFunction:(b,f)=>{b=m.convertTime(b,"milliseconds","hours");return"tick"===f?y.formatNumber(b,{maximumFractionDigits:0}):
""}});a._onColorChange=b=>{a.options.color=b};return a}p._inheritsLoose(h,u);var k=h.prototype;k.initialize=function(){const d=({value:a})=>{this.options.value=a};this.addHandles([q.watch(()=>{const {value:a,minValue:b,maxValue:f}=this.options;return{value:a,minValue:b,maxValue:f}},({value:a,minValue:b,maxValue:f})=>{const l=this._valueSlider;l.min=b;l.max=f;l.values=[a];a=Math.floor(m.convertTime(f-b,"milliseconds","hours"));l.tickConfigs=[{mode:"count",values:2*a+1,labelsVisible:!1},{mode:"count",
values:a+1,labelsVisible:!0}]},q.syncAndInitial),this._valueSlider.on("thumb-change",d),this._valueSlider.on("thumb-drag",d)])};k.loadDependencies=function(){return new Promise((d,a)=>v(["../../../chunks/calcite-label"],d,a))};k.destroy=function(){this._valueSlider=w.destroyMaybe(this._valueSlider)};k.render=function(){const d=this._messages.threshold,{color:a}=this.options;return n.tsx("div",{class:t.THRESHOLD_CONFIGURATOR_CSS.base},n.tsx(B.Label,{class:t.THRESHOLD_CONFIGURATOR_CSS.valueLabel,for:this._valueSliderId,
label:d.valueLabel},this._valueSlider.render()),this.colorPickerVisible&&n.tsx(C.LabeledColorPicker,{id:this._colorPickerId,label:d.colorLabel,value:a,onChange:this._onColorChange}))};p._createClass(h,[{key:"testData",get:function(){return{valueSlider:this._valueSlider}}}]);return h}(A);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"options",void 0);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"colorPickerVisible",void 0);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,
"testData",null);e.__decorate([g.property()],c.ThresholdConfigurator.prototype,"_valueSlider",void 0);e.__decorate([g.property(),D.messageBundle("esri/widgets/ShadowCast/t9n/ShadowCast")],c.ThresholdConfigurator.prototype,"_messages",void 0);c.ThresholdConfigurator=e.__decorate([x.subclass("esri.widgets.ShadowCast.components.ThresholdConfigurator")],c.ThresholdConfigurator);Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});