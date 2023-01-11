// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../core/arrayUtils ../../../intl/messages ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/RelationshipContent ../../../popup/content/TextContent ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../renderers/support/utils ../../../renderers/visualVariables/support/visualVariableUtils ../../support/adapters/support/utils".split(" "),
function(n,x,y,z,r,C,L,M,N,O,D,P,Q,E,F,A,G,H,I){function B(a){return"hasVisualVariables"in a&&a.hasVisualVariables()?a.visualVariables.filter(b=>H.viewScaleRE.test(b.valueExpression)||"target"in b&&"outline"===b.target?!1:!0):[]}function p(a,b){return b?I.getFeatureReductionFields(a)?.find(l=>l.name.toLowerCase()===b.toLowerCase()):null}function q(a,b,l){let d=null;if(l){const e=a.featureReduction;e&&"popupTemplate"in e&&e.popupTemplate&&(d=e.popupTemplate.fieldInfos)}else"popupTemplate"in a&&a.popupTemplate&&
(d=a.popupTemplate.fieldInfos);const g=l?p(a,b):a.getField(b);let f=null;d&&d.some(e=>e&&e.fieldName.toLowerCase()===g.name.toLowerCase()?(f=e.clone(),!0):!1);f||(a=C.numericTypes.includes(g.type),b="integer"===g.type||"small-integer"===g.type,f=new A({fieldName:g.name,isEditable:g.editable,visible:!0,format:a?{places:b?0:2,digitSeparator:!0}:null}));f.label||(f.label=g.alias);return f}function t(a){const {expression:b,title:l,returnType:d}=a;return new F({name:`expr${J++}`,expression:b,title:l,returnType:d})}
function u(a){return new A({fieldName:`${"expression/"}${a.name}`,visible:!0,format:"number"===a.returnType?{places:2,digitSeparator:!0}:null})}function v(){v=x._asyncToGenerator(function*(a){const b=yield z.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{renderer:l,layer:d,normFieldExpressionTemplate:g,isFeatureReduction:f}=a;a=[];const e=[];var k=G.getAttributes(l,B);for(const c of k)if("field"===c.type)a.push(q(d,c.field,f));else if("normalized-field"===c.type){var h=f?p(d,c.field):d.getField(c.field);
const m=f?p(d,c.normalizationField):d.getField(c.normalizationField);k=`\n      $feature["${h.name}"];\n      $feature["${m.name}"];\n      ${"percentage"===g?`($feature["${h.name}"] / $feature["${m.name}"]) * 100;`:`$feature["${h.name}"] / $feature["${m.name}"];`}\n      `;h="percentage"===g?r.substitute(b.normFieldLabelAsPercent,{expression1:h.alias,expression2:m.alias}):r.substitute(b.normFieldLabel,{expression1:h.alias,expression2:m.alias});k=t({type:"expression",expression:k,title:h,returnType:"number"});
a.push(u(k),q(d,c.field,f),q(d,c.normalizationField,f));e.push(k)}else"expression"===c.type&&(k=t(c),a.push(u(k)),e.push(k));return{fieldInfos:y.unique(a,(c,m)=>c.fieldName===m.fieldName),expressionInfos:y.unique(e,(c,m)=>c.expression===m.expression)}});return v.apply(this,arguments)}function w(){w=x._asyncToGenerator(function*(a,b,l){const {fieldInfos:d,expressionInfos:g}=b;b=yield z.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");if(2<d.length)return[new D({fieldInfos:d})];const f=[];for(const k of d){const h=
k.fieldName;let c=k.label;if(!c){var e=l?p(a,h):a.getField(h);if(e)c=e.alias||h;else if(g){const m=h.split("expression/")[1];(e=g[g.findIndex(K=>K.name===m)])&&(c=e.title||e.name)}}f.push(new E({text:r.substitute(b.fieldInfo,{fieldLabel:c,fieldValue:`{${h}}`})}))}return f});return w.apply(this,arguments)}let J=0;n.expressionFieldPrefix="expression/";n.getContentFromFieldInfos=function(a,b,l){return w.apply(this,arguments)};n.getExpressionInfo=t;n.getFieldAndExpressionInfos=function(a){return v.apply(this,
arguments)};n.getFieldInfo=q;n.getFieldInfoFromExpressionInfo=u;n.getPrimaryVisualVariables=B;n.hasNormalizedField=function(a){return"normalizationField"in a&&a.normalizationField?!0:"hasVisualVariables"in a&&a.hasVisualVariables()&&a.visualVariables.some(b=>!!("normalizationField"in b&&b.normalizationField))};Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});