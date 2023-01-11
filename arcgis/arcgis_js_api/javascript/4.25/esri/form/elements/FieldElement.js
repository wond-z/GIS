// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Element ./support/inputs ../../layers/support/domains".split(" "),function(k,c,d,a,p,l,m,n,g){var e;a=e=function(h){function f(b){b=h.call(this,b)||this;b.domain=null;b.editable=!0;b.editableExpression=null;b.fieldName=null;b.hint=null;b.input=null;b.requiredExpression=null;
b.type="field";b.valueExpression=null;return b}k._inheritsLoose(f,h);f.prototype.clone=function(){return new e({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})};return f}(m);c.__decorate([d.property({types:g.types,json:{read:{reader:g.fromJSON},
write:!0}})],a.prototype,"domain",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0}})],a.prototype,"editable",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"editableExpression",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"fieldName",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"hint",void 0);c.__decorate([d.property({types:n.types,json:{read:{source:"inputType"},write:{target:"inputType"}}})],
a.prototype,"input",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"requiredExpression",void 0);c.__decorate([d.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);return a=e=c.__decorate([l.subclass("esri.form.elements.FieldElement")],a)});