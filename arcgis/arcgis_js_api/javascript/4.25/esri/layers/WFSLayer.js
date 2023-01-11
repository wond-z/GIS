// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/graphics/sources/WFSSource":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/HandleOwner ../../../core/has ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/typeUtils ./support/clientSideDefaults ../../ogc/wfsUtils ../../../rest/support/FeatureSet ../../../geometry/Extent".split(" "),
function(r,g,D,w,p,A,K,S,H,L,I,F,aa,V,E,m,Q,N,a,h){r.WFSSource=function(q){function v(){var n=q.apply(this,arguments)||this;n._connection=null;n.capabilities=Q.createCapabilities(!1,!1);n.type="wfs";n.refresh=L.debounce(function(){var k=g._asyncToGenerator(function*(t){yield n.load();({extent:t}=yield n._connection.invoke("refresh",t));t&&(n.sourceJSON.extent=t);return{dataChanged:!0,updates:{extent:n.sourceJSON.extent}}});return function(t){return k.apply(this,arguments)}}());return n}g._inheritsLoose(v,
q);var z=v.prototype;z.load=function(n){n=H.isSome(n)?n.signal:null;this.addResolvingPromise(this._startWorker({signal:n}));return Promise.resolve(this)};z.destroy=function(){this._connection?.close();this._connection=null};z.openPorts=function(){var n=g._asyncToGenerator(function*(){yield this.load();return this._connection.openPorts()});return function(){return n.apply(this,arguments)}}();z.queryFeatures=function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);k=yield this._connection.invoke("queryFeatures",
k?k.toJSON():null,t);return a.fromJSON(k)});return function(k){return n.apply(this,arguments)}}();z.queryFeaturesJSON=function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryFeatures",k?k.toJSON():null,t)});return function(k){return n.apply(this,arguments)}}();z.queryFeatureCount=function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryFeatureCount",k?k.toJSON():null,t)});return function(k){return n.apply(this,
arguments)}}();z.queryObjectIds=function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("queryObjectIds",k?k.toJSON():null,t)});return function(k){return n.apply(this,arguments)}}();z.queryExtent=function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);k=yield this._connection.invoke("queryExtent",k?k.toJSON():null,t);return{count:k.count,extent:h.fromJSON(k.extent)}});return function(k){return n.apply(this,arguments)}}();z.querySnapping=
function(){var n=g._asyncToGenerator(function*(k,t={}){yield this.load(t);return this._connection.invoke("querySnapping",k,t)});return function(k){return n.apply(this,arguments)}}();z._createLoadOptions=function(){var n=g._asyncToGenerator(function*(k){const {url:t,customParameters:B,name:x,namespaceUri:G,spatialReference:P,fields:O,geometryType:M,swapXY:C}=this.layer;if(!t)throw new p("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=yield N.getCapabilities(t,
{customParameters:B,...k}));k="fields geometryType name namespaceUri spatialReference swapXY".split(" ").some(W=>null==this.layer[W])?yield N.getWFSLayerInfo(this.wfsCapabilities,x,G,{spatialReference:P,customParameters:B,signal:k?.signal}):{...N.prepareWFSLayerFields(O??[]),geometryType:M,name:x,namespaceUri:G,spatialReference:P,swapXY:C};const X=H.unwrap(N.findFeatureType(this.wfsCapabilities.readFeatureTypes(),k.name,k.namespaceUri)),ba=m.featureGeometryTypeKebabDictionary.toJSON(k.geometryType);
return{customParameters:B,featureType:X,fields:k.fields?.map(W=>W.toJSON())??[],geometryField:k.geometryField,geometryType:ba,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:k.objectIdField,spatialReference:k.spatialReference.toJSON(),swapXY:!!k.swapXY}});return function(k){return n.apply(this,arguments)}}();z._startWorker=function(){var n=g._asyncToGenerator(function*(k){const [t,B]=yield L.eachAlways([this._createLoadOptions(k),
I.open("WFSSourceWorker",{...k,strategy:K("feature-layers-workers")?"dedicated":"local"})]);var x=t.error||B.error||null;const G=B.value||null;if(x)throw G&&G.close(),x;x=t.value;this._connection=B.value;({extent:k}=yield this._connection.invoke("load",x,k));this.sourceJSON={extent:k,fields:x.fields,geometryType:x.geometryType,objectIdField:x.objectIdField,geometryField:x.geometryField,drawingInfo:Q.createDrawingInfo(x.geometryType),name:x.featureType.title,wfsInfo:{name:x.featureType.name,featureUrl:x.getFeatureUrl,
maxFeatures:3E3,swapXY:x.swapXY,supportedSpatialReferences:x.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:x.featureType.namespaceUri}}});return function(k){return n.apply(this,arguments)}}();return v}(A.HandleOwnerMixin(S));D.__decorate([F.property()],r.WFSSource.prototype,"capabilities",void 0);D.__decorate([F.property({constructOnly:!0})],r.WFSSource.prototype,"layer",void 0);D.__decorate([F.property()],r.WFSSource.prototype,"sourceJSON",void 0);D.__decorate([F.property()],
r.WFSSource.prototype,"type",void 0);D.__decorate([F.property()],r.WFSSource.prototype,"wfsCapabilities",void 0);r.WFSSource=D.__decorate([E.subclass("esri.layers.graphics.sources.WFSSource")],r.WFSSource);Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/layers/ogc/wfsUtils":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../geometry ../../request ../../core/Error ../../core/iteratorUtils ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../geometry/projection ../../geometry/support/spatialReferenceUtils ../../geometry/support/typeUtils ../graphics/sources/geojson/geojson ./dateUtils ./xmlUtils ../support/Field ../../geometry/SpatialReference ../../geometry/Extent".split(" "),
function(r,g,D,w,p,A,K,S,H,L,I,F,aa,V,E,m,Q,N){function a(){a=g._asyncToGenerator(function*(c,d){d=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:"2.0.0",...d?.customParameters},signal:d?.signal});d=h(d.data);H.isHTTPSProtocol(c)&&(H.hasSameOrigin(c,d.operations.DescribeFeatureType.url,!0)&&(d.operations.DescribeFeatureType.url=H.toHTTPS(d.operations.DescribeFeatureType.url)),H.hasSameOrigin(c,d.operations.GetFeature.url,!0)&&(d.operations.GetFeature.url=H.toHTTPS(d.operations.GetFeature.url)));
return d});return a.apply(this,arguments)}function h(c){c=Y(c);ia(c);U(c);c=c.firstElementChild;const d=A.cache(v(c));return{operations:q(c),get featureTypes(){return Array.from(d())},readFeatureTypes:d}}function q(c){let d=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};E.visitXML(c,{OperationsMetadata:{Operation:l=>{switch(l.getAttribute("name")){case "GetCapabilities":return{DCP:{HTTP:{Get:f=>{e.GetCapabilities.url=
f.getAttribute("xlink:href")}}}};case "DescribeFeatureType":return{DCP:{HTTP:{Get:f=>{e.DescribeFeatureType.url=f.getAttribute("xlink:href")}}}};case "GetFeature":return{DCP:{HTTP:{Get:f=>{e.GetFeature.url=f.getAttribute("xlink:href")}}},Parameter:f=>{if("outputFormat"===f.getAttribute("name"))return{AllowedValues:{Value:b=>{(b=b.textContent)&&ja.has(b.toLowerCase())&&(e.GetFeature.outputFormat=b)}}}}}}},Constraint:l=>{switch(l.getAttribute("name")){case "KVPEncoding":return{DefaultValue:f=>{d="true"===
f.textContent.toLowerCase()}};case "ImplementsResultPaging":return{DefaultValue:f=>{e.GetFeature.supportsPagination="true"===f.textContent.toLowerCase()}}}}}});if(!d)throw new p("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(K.isNone(e.GetFeature.outputFormat))throw new p("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return e}function v(c){return E.iterateXML(c,{FeatureTypeList:{FeatureType:d=>{const e=
{typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},l=new Set([4326]),f=b=>{b=parseInt(b.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(b)||l.add(b)};E.visitXML(d,{Name:b=>{const {name:u,prefix:y}=Z(b.textContent);e.typeName=`${y}:${u}`;e.name=u;e.namespacePrefix=y;e.namespaceUri=b.lookupNamespaceURI(y)},Abstract:b=>{e.description=b.textContent},Title:b=>{e.title=b.textContent},WGS84BoundingBox:b=>
{e.extent=z(b)},DefaultSRS:f,DefaultCRS:f,OtherSRS:f,OtherCRS:f});e.title||(e.title=e.name);e.supportedSpatialReferences.push(...l);return e}}})}function z(c){let d,e,l,f;for(const b of c.children)switch(b.localName){case "LowerCorner":[d,e]=b.textContent.split(" ").map(u=>Number.parseFloat(u));break;case "UpperCorner":[l,f]=b.textContent.split(" ").map(u=>Number.parseFloat(u))}return{xmin:d,ymin:e,xmax:l,ymax:f,spatialReference:I.WGS84}}function n(c,d,e){return A.find(c,l=>e?l.name===d&&l.namespaceUri===
e:l.typeName===d||l.name===d)}function k(){k=g._asyncToGenerator(function*(c,d,e,l={}){const {featureType:f,extent:b}=yield t(c,d,e,l),{fields:u,geometryType:y,swapXY:J,objectIdField:T,geometryField:ca}=yield x(c,f.typeName,l);return{url:c.operations.GetCapabilities.url,name:f.name,namespaceUri:f.namespaceUri,fields:u,geometryField:ca,geometryType:y,objectIdField:T,spatialReference:l.spatialReference??Q.WGS84,extent:b,swapXY:J,wfsCapabilities:c,customParameters:l.customParameters}});return k.apply(this,
arguments)}function t(c,d,e){return B.apply(this,arguments)}function B(){B=g._asyncToGenerator(function*(c,d,e,l={}){const {spatialReference:f=Q.WGS84}=l;c=c.readFeatureTypes();e=d?n(c,d,e):c.next().value;if(K.isNone(e)){if(d)throw new p("wfs-layer:feature-type-not-found",`The type '${d}' could not be found in the service`);throw new p("wfs-layer:empty-service","The service is empty");}d=new N({...e.extent,spatialReference:f});if(!I.equals(f,I.WGS84))try{yield L.initializeProjection(I.WGS84,f,void 0,
l),d=L.project(d,I.WGS84)}catch{throw new p("wfs-layer:unsupported-spatial-reference","Projection not supported");}return{extent:d,spatialReference:f,featureType:e}});return B.apply(this,arguments)}function x(c,d){return G.apply(this,arguments)}function G(){G=g._asyncToGenerator(function*(c,d,e={}){const [l,f]=yield S.eachAlways([C(c.operations.DescribeFeatureType.url,d,e),O(c,d,e)]);if(l.error||f.error)throw new p("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${d}'`,
{error:l.error||f.error});const {fields:b,errors:u}=l.value??{};c=l.value?.geometryType||f.value?.geometryType;e=f.value?.swapXY??!1;if(K.isNone(c))throw new p("wfs-layer:unknown-geometry-type",`The geometry type could not be determined for type '${d}`,{typeName:d,geometryType:c,fields:b,errors:u});return{...P(b??[]),geometryType:c,swapXY:e}});return G.apply(this,arguments)}function P(c){const d=c.find(l=>"geometry"===l.type);let e=c.find(l=>"oid"===l.type);c=c.filter(l=>"geometry"!==l.type);e||(e=
new m({name:"__esri_wfs_id__",type:"oid",alias:"__esri_wfs_id__"}),c.unshift(e));return{geometryField:d?.name??null,objectIdField:e.name,fields:c}}function O(c,d){return M.apply(this,arguments)}function M(){M=g._asyncToGenerator(function*(c,d,e={}){let l,f=!1;const [b,u]=yield Promise.all([fa(c.operations.GetFeature.url,d,c.operations.GetFeature.outputFormat,{...e,count:1}),w(c.operations.GetFeature.url,{responseType:"text",query:da(d,void 0,{...e,count:1}),signal:e?.signal})]);if(c="FeatureCollection"===
b.type&&b.features[0]?.geometry){l=F.featureGeometryTypeKebabDictionary.fromJSON(aa.getGeometryType(c.type));switch(c.type){case "Point":var y=c.coordinates;break;case "LineString":case "MultiPoint":y=c.coordinates[0];break;case "MultiLineString":case "Polygon":y=c.coordinates[0][0];break;case "MultiPolygon":y=c.coordinates[0][0][0]}if(d=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data))c=y[0].toFixed(3),y=y[1].toFixed(3),e=parseFloat(d[1]).toFixed(3),d=parseFloat(d[2]).toFixed(3),
c===d&&y===e&&(f=!0)}return{geometryType:l,swapXY:f}});return M.apply(this,arguments)}function C(c,d,e){return X.apply(this,arguments)}function X(){X=g._asyncToGenerator(function*(c,d,e){c=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:"2.0.0",TYPENAME:d,...e?.customParameters},signal:e?.signal});return ba(d,c.data)});return X.apply(this,arguments)}function ba(c,d){const {name:e}=Z(c);d=Y(d);U(d);const l=A.find(E.iterateXML(d.firstElementChild,{element:f=>
({name:f.getAttribute("name"),typeName:Z(f.getAttribute("type")).name})}),({name:f})=>f===e);if(K.isSome(l)){const f=A.find(E.iterateXML(d.firstElementChild,{complexType:b=>b}),b=>b.getAttribute("name")===l.typeName);if(K.isSome(f))return W(f)}throw new p("wfs-layer:feature-type-not-found",`Type '${c}' not found in document`,{document:(new XMLSerializer).serializeToString(d)});}function W(c){const d=[],e=[];let l=void 0;var f=E.iterateXML(c,{complexContent:{extension:{sequence:{element:b=>b}}}});
for(const b of f){f=b.getAttribute("name");if(!f)continue;let u,y;b.hasAttribute("type")?u=Z(b.getAttribute("type")).name:E.visitXML(b,{simpleType:{restriction:ca=>{u=Z(ca.getAttribute("base")).name;return{maxLength:ka=>{y=+ka.getAttribute("value")}}}}});if(!u)continue;const J="true"===b.getAttribute("nillable");let T=!1;switch(u.toLowerCase()){case "integer":case "nonpositiveinteger":case "negativeinteger":case "long":case "int":case "short":case "byte":case "nonnegativeinteger":case "unsignedlong":case "unsignedint":case "unsignedshort":case "unsignedbyte":case "positiveinteger":e.push(new m({name:f,
alias:f,type:"integer",nullable:J}));break;case "float":case "double":case "decimal":e.push(new m({name:f,alias:f,type:"double",nullable:J}));break;case "boolean":case "string":case "gyearmonth":case "gyear":case "gmonthday":case "gday":case "gmonth":case "anyuri":case "qname":case "notation":case "normalizedstring":case "token":case "language":case "idrefs":case "entities":case "nmtoken":case "nmtokens":case "name":case "ncname":case "id":case "idref":case "entity":case "duration":case "time":e.push(new m({name:f,
alias:f,type:"string",nullable:J,length:y??255}));break;case "datetime":case "date":e.push(new m({name:f,alias:f,type:"date",nullable:J,length:y??36}));break;case "pointpropertytype":l="point";T=!0;break;case "multipointpropertytype":l="multipoint";T=!0;break;case "curvepropertytype":case "multicurvepropertytype":case "multilinestringpropertytype":l="polyline";T=!0;break;case "surfacepropertytype":case "multisurfacepropertytype":case "multipolygonpropertytype":l="polygon";T=!0;break;case "geometrypropertytype":case "multigeometrypropertytype":T=
!0;d.push(new p("wfs-layer:unknown-geometry-type",`geometry type '${u}' is not supported`,{type:(new XMLSerializer).serializeToString(c)}));break;default:d.push(new p("wfs-layer:unknown-field-type",`Unknown field type '${u}'`,{type:(new XMLSerializer).serializeToString(c)}))}T&&e.push(new m({name:f,alias:f,type:"geometry",nullable:J}))}for(const b of e)if("integer"===b.type&&!b.nullable&&ha.has(b.name.toLowerCase())){b.type="oid";break}return{geometryType:l,fields:e,errors:d}}function fa(c,d,e,l){return R.apply(this,
arguments)}function R(){R=g._asyncToGenerator(function*(c,d,e,l){({data:c}=yield w(c,{responseType:"text",query:da(d,e,l),signal:l?.signal}));c=c.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(l?.dateFields?.length){const f=new Set(l.dateFields);return JSON.parse(c,(b,u)=>f.has(b)?V.parseDate(u):u)}return JSON.parse(c)}catch(f){throw new p("wfs-layer:malformed-json","Error while parsing the\u00a0response",{response:c,error:f});}});return R.apply(this,arguments)}function da(c,d,e){return{SERVICE:"WFS",
REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:c,OUTPUTFORMAT:d,SRSNAME:"EPSG:4326",STARTINDEX:e?.startIndex,COUNT:e?.count,...e?.customParameters}}function ea(){ea=g._asyncToGenerator(function*(c,d,e){c=yield w(c,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:"2.0.0",TYPENAMES:d,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal});c=Y(c.data);U(c);c=Number.parseFloat(c.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(c)?0:c});return ea.apply(this,
arguments)}function Y(c){return(new DOMParser).parseFromString(c.trim(),"text/xml")}function Z(c){const [d,e]=c.split(":");return{prefix:e?d:"",name:e??d}}function ia(c){if((c=c.firstElementChild?.getAttribute("version"))&&"2.0.0"!==c)throw new p("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${c}. Supported version: ${"2.0.0"}`);}function U(c){let d="",e="";E.visitXML(c.firstElementChild,{Exception:l=>{d=l.getAttribute("exceptionCode");return{ExceptionText:f=>{e=f.textContent}}}});
if(d)throw new p(`wfs-layer:${d}`,e);}const ja=new Set(["json","application/json","geojson","application/json; subtype\x3dgeojson"]),ha=new Set(["objectid","fid"]);r.WFS_OID_FIELD_NAME="__esri_wfs_id__";r.describeFeatureType=C;r.findFeatureType=n;r.getCapabilities=function(c,d){return a.apply(this,arguments)};r.getFeature=fa;r.getFeatureCount=function(c,d,e){return ea.apply(this,arguments)};r.getFeatureTypeInfo=t;r.getWFSLayerInfo=function(c,d,e){return k.apply(this,arguments)};r.parseDescribeFeatureTypeResponse=
ba;r.parseGetCapabilitiesResponse=h;r.prepareWFSLayerFields=P;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/layers/graphics/sources/geojson/geojson":function(){define(["exports","../../../../core/Error","../../OptimizedFeature","../../OptimizedGeometry","../../../support/fieldUtils"],function(r,g,D,w,p){function*A(a){switch(a.type){case "Feature":yield a;break;case "FeatureCollection":for(const h of a.features)h&&(yield h)}}function*K(a){if(!a)return null;
switch(a.type){case "Point":yield a.coordinates;break;case "LineString":case "MultiPoint":yield*a.coordinates;break;case "MultiLineString":case "Polygon":for(const h of a.coordinates)yield*h;break;case "MultiPolygon":for(const h of a.coordinates)for(const q of h)yield*q}}function*S(a,h={}){const {geometryType:q,objectIdField:v}=h;for(const z of a){const {geometry:n,properties:k,id:t}=z;if(n&&N[n.type]!==q)continue;a=k||{};let B=a[v]??null;v&&null!=t&&!a[v]&&(a[v]=B=t);yield new D.OptimizedFeature(n?
F(new w,n,h):null,a,null,B)}}function H(a){for(const h of a)if(2<h.length)return!0;return!1}function L(a){let h=0;for(let q=0;q<a.length;q++){const v=a[q],z=a[(q+1)%a.length];h+=v[0]*z[1]-z[0]*v[1]}return 0>=h}function I(a){const h=a[0],q=a[a.length-1];h[0]===q[0]&&h[1]===q[1]&&h[2]===q[2]||a.push(h);return a}function F(a,h,q){switch(h.type){case "LineString":return E(a,h.coordinates,q),a;case "MultiLineString":for(const z of h.coordinates)E(a,z,q);return a;case "MultiPoint":return E(a,h.coordinates,
q),a;case "MultiPolygon":for(var v of h.coordinates)for(aa(a,v[0],q),h=1;h<v.length;h++)V(a,v[h],q);return a;case "Point":return Q(a,h.coordinates,q),a;case "Polygon":v=h.coordinates;aa(a,v[0],q);for(h=1;h<v.length;h++)V(a,v[h],q);return a}}function aa(a,h,q){h=I(h);L(h)?E(a,h,q):m(a,h,q)}function V(a,h,q){h=I(h);L(h)?m(a,h,q):E(a,h,q)}function E(a,h,q){for(const v of h)Q(a,v,q);a.lengths.push(h.length)}function m(a,h,q){for(let v=h.length-1;0<=v;v--)Q(a,h[v],q);a.lengths.push(h.length)}function Q(a,
h,q){const [v,z,n]=h;a.coords.push(v,z);q.hasZ&&a.coords.push(n||0)}const N={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};r.createOptimizedFeatures=function(a,h){return Array.from(S(A(a),h))};r.getGeometryType=function(a){return N[a]};r.inferLayerProperties=function(a,h={}){const q=[];var v=new Set;const z=new Set;var n=!1;let k=null,t=!1,B=void 0;
({geometryType:h=null}=h);var x=!1;for(const G of A(a)){const {geometry:P,properties:O,id:M}=G;if(P&&(h||(h=N[P.type]),N[P.type]!==h))continue;n||(n=K(P),n=H(n));!t&&(t=null!=M)&&(B=typeof M,k=Object.keys(O).filter(C=>O[C]===M));t&&null!=M&&(1<k.length?k=k.filter(C=>O[C]===M):1===k.length&&(k=O[k[0]]===M?k:[]));if(!x&&O){a=!0;for(const C in O)if(!v.has(C))if(x=O[C],null==x)a=!1,z.add(C);else{a:switch(typeof x){case "string":x="esriFieldTypeString";break a;case "number":x="esriFieldTypeDouble";break a;
default:x="unknown"}"unknown"===x?z.add(C):(z.delete(C),v.add(C),q.push({name:p.normalizeFieldName(C),alias:C,type:x}))}x=a}}if(v=p.normalizeFieldName(1===k?.length&&k[0]||null))for(const G of q)if(G.name===v&&p.isNumericField(G)){G.type="esriFieldTypeOID";break}return{fields:q,geometryType:h,hasZ:n,objectIdFieldName:v,objectIdFieldType:B,unknownFields:Array.from(z)}};r.validateGeoJSON=function(a){if(!a)throw new g("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==
a.type)throw new g("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:a});({crs:a}=a);if(a){var h="string"===typeof a?a:"name"===a.type?a.properties.name:"EPSG"===a.type?a.properties.code:null,q=RegExp(".*(CRS84H?|4326)$","i");if(!h||!q.test(h))throw new g("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/layers/ogc/dateUtils":function(){define(["exports"],
function(r){function g(w){w=(new Date(w)).getTime();return Number.isNaN(w)?null:w}const D=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;r.parseDate=function(w){var p=D.exec(w);if(p?.groups){p=p.groups;var A=+p.year,K=+p.month-1,S=+p.day,H=+(p.hours??0),L=+(p.minutes??0),I=+(p.seconds??0);if(23<H||59<L||59<I)p=null;else{var F=p.ms??
"0";F=F?+F.padEnd(3,"0").substring(0,3):0;p=p.isUTC?Date.UTC(A,K,S,H,L,I,F):p.offsetSign?6E4*("+"===p.offsetSign?-1:1)*(60*+p.offsetHours+ +p.offsetMinutes)+Date.UTC(A,K,S,H,L,I,F):(new Date(A,K,S,H,L,I,F)).getTime();p=Number.isNaN(p)?null:p}}else p=null;return p??g(w)};r.parseJSDate=g;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"esri/layers/ogc/xmlUtils":function(){define(["exports"],function(r){function g(w,p){if(w&&p)for(const A of w.children)A.localName in
p&&(w=p[A.localName],"function"===typeof w?(w=w(A))&&g(A,w):g(A,w))}function*D(w,p){for(const A of w.children)A.localName in p&&(w=p[A.localName],"function"===typeof w?yield w(A):yield*D(A,w))}r.iterateXML=D;r.visitXML=g;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"*noref":1}});
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../PopupTemplate ../renderers/ClassBreaksRenderer ../renderers/DictionaryRenderer ../renderers/DotDensityRenderer ../renderers/HeatmapRenderer ../renderers/PieChartRenderer ../renderers/Renderer ../renderers/SimpleRenderer ../renderers/UniqueValueRenderer ../renderers/support/jsonUtils ../renderers/support/types ../core/maybe ../core/MultiOriginJSONSupport ../core/object ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/support/typeUtils ./Layer ./graphics/sources/WFSSource ./mixins/BlendLayer ./mixins/CustomParametersMixin ./mixins/FeatureEffectLayer ./mixins/FeatureReductionLayer ./mixins/OperationalLayer ./mixins/OrderedLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./mixins/TemporalLayer ./ogc/wfsUtils ./support/commonProperties ./support/Field ./support/fieldProperties ./support/fieldUtils ./support/LabelClass ./support/labelingInfo ../rest/support/Query ../support/popupUtils ../geometry/SpatialReference ../geometry/Extent".split(" "),function(r,
g,D,w,p,A,K,S,H,L,I,F,aa,V,E,m,Q,N,a,h,q,v,z,n,k,t,B,x,G,P,O,M,C,X,ba,W,fa,R,da,ea,Y,Z,ia,U,ja,ha,c){var d;D=ea.defineFieldProperties();m=d=function(e){function l(b){b=e.call(this,b)||this;b.copyright=null;b.customParameters=null;b.definitionExpression=null;b.displayField=null;b.elevationInfo=null;b.featureUrl=void 0;b.fields=null;b.fieldsIndex=null;b.fullExtent=null;b.geometryType=null;b.labelsVisible=!0;b.labelingInfo=null;b.legendEnabled=!0;b.objectIdField=null;b.operationalLayerType="WFS";b.maxFeatures=
3E3;b.mode=0;b.name=null;b.namespaceUri=null;b.outFields=null;b.popupEnabled=!0;b.popupTemplate=null;b.screenSizePerspectiveEnabled=!0;b.source=new t.WFSSource({layer:r._assertThisInitialized(b)});b.spatialReference=ha.WGS84;b.spatialReferences=[4326];b.swapXY=void 0;b.title="WFS";b.type="wfs";b.url=null;b.version=void 0;return b}r._inheritsLoose(l,e);l.fromWFSLayerInfo=function(b){const {customParameters:u,fields:y,geometryField:J,geometryType:T,name:ca,namespaceUri:ka,objectIdField:la,spatialReference:ma,
swapXY:na,url:oa,wfsCapabilities:pa}=b;return new d({customParameters:u,fields:y,geometryField:J,geometryType:T,name:ca,namespaceUri:ka,objectIdField:la,spatialReference:ma,swapXY:na,url:oa,wfsCapabilities:pa})};var f=l.prototype;f.destroy=function(){this.source?.destroy()};f.load=function(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},b).then(()=>this.source.load(b)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl});this.revert("objectIdField fields timeInfo spatialReference name namespaceUri".split(" "),
"service");Y.fixRendererFields(this.renderer,this.fieldsIndex);Y.fixTimeInfoFields(this.timeInfo,this.fieldsIndex)}));return Promise.resolve(this)};f.writeFields=function(b,u,y){b=b.filter(J=>J.name!==fa.WFS_OID_FIELD_NAME);this.geometryField&&b.unshift(new da({name:this.geometryField,alias:this.geometryField,type:"geometry"}));Q.setDeepValue(y,b.map(J=>J.toJSON()),u)};f.createPopupTemplate=function(b){return ja.createPopupTemplate(this,b)};f.createQuery=function(){const b=new U;b.returnGeometry=
!0;b.outFields=["*"];b.where=this.definitionExpression||"1\x3d1";const {timeOffset:u,timeExtent:y}=this;b.timeExtent=null!=u&&null!=y?y.offset(-u.value,u.unit):y||null;return b};f.getFieldDomain=function(b,u){return this.getField(b)?.domain};f.getField=function(b){return this.fieldsIndex?.get(b)};f.queryFeatures=function(b,u){return this.load().then(()=>this.source.queryFeatures(U.from(b)||this.createQuery(),u)).then(y=>{if(y?.features)for(const J of y.features)J.layer=J.sourceLayer=this;return y})};
f.queryObjectIds=function(b,u){return this.load().then(()=>this.source.queryObjectIds(U.from(b)||this.createQuery(),u))};f.queryFeatureCount=function(b,u){return this.load().then(()=>this.source.queryFeatureCount(U.from(b)||this.createQuery(),u))};f.queryExtent=function(b,u){return this.load().then(()=>this.source.queryExtent(U.from(b)||this.createQuery(),u))};f.hasDataChanged=function(){var b=r._asyncToGenerator(function*(){try{const {dataChanged:u,updates:y}=yield this.source.refresh(this.customParameters);
E.isSome(y)&&this.read(y,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0});return u}catch{}return!1});return function(){return b.apply(this,arguments)}}();r._createClass(l,[{key:"capabilities",get:function(){return this.source?.capabilities}},{key:"createQueryVersion",get:function(){this.commitProperty("definitionExpression");this.commitProperty("timeExtent");this.commitProperty("timeOffset");this.commitProperty("geometryType");this.commitProperty("capabilities");return(this._get("createQueryVersion")||
0)+1}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"parsedUrl",get:function(){return N.urlToObject(this.url)}},{key:"renderer",set:function(b){Y.fixRendererFields(b,this.fieldsIndex);this._set("renderer",b)}},{key:"wfsCapabilities",get:function(){return this.source?.wfsCapabilities},set:function(b){this.source&&(this.source.wfsCapabilities=b)}}]);return l}(M.OrderedLayer(x.CustomParametersMixin(P.FeatureReductionLayer(G.FeatureEffectLayer(B.BlendLayer(W.TemporalLayer(X.RefreshableLayer(ba.ScaleRangeLayer(O.OperationalLayer(C.PortalLayer(m.MultiOriginJSONMixin(k))))))))))));
g.__decorate([a.property({readOnly:!0})],m.prototype,"capabilities",null);g.__decorate([a.property({type:String})],m.prototype,"copyright",void 0);g.__decorate([a.property({readOnly:!0})],m.prototype,"createQueryVersion",null);g.__decorate([a.property({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],m.prototype,"customParameters",void 0);g.__decorate([a.property({readOnly:!0})],m.prototype,"defaultPopupTemplate",null);g.__decorate([a.property({type:String,json:{name:"layerDefinition.definitionExpression",
write:{enabled:!0,allowNull:!0}}})],m.prototype,"definitionExpression",void 0);g.__decorate([a.property({type:String})],m.prototype,"displayField",void 0);g.__decorate([a.property(R.elevationInfo)],m.prototype,"elevationInfo",void 0);g.__decorate([a.property({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"featureUrl",void 0);g.__decorate([a.property({type:[da],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},
origins:{service:{name:"fields"}}}})],m.prototype,"fields",void 0);g.__decorate([z.writer("fields")],m.prototype,"writeFields",null);g.__decorate([a.property(D.fieldsIndex)],m.prototype,"fieldsIndex",void 0);g.__decorate([a.property({type:c,json:{name:"extent"}})],m.prototype,"fullExtent",void 0);g.__decorate([a.property()],m.prototype,"geometryField",void 0);g.__decorate([a.property({type:String,json:{read:{source:"layerDefinition.geometryType",reader:n.featureGeometryTypeKebabDictionary.read},write:{target:"layerDefinition.geometryType",
writer:n.featureGeometryTypeKebabDictionary.write,ignoreOrigin:!0},origins:{service:{read:n.featureGeometryTypeKebabDictionary.read}}}})],m.prototype,"geometryType",void 0);g.__decorate([a.property({type:String})],m.prototype,"id",void 0);g.__decorate([a.property(R.labelsVisible)],m.prototype,"labelsVisible",void 0);g.__decorate([a.property({type:[Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ia.reader},write:!0}})],m.prototype,"labelingInfo",void 0);g.__decorate([a.property(R.legendEnabled)],
m.prototype,"legendEnabled",void 0);g.__decorate([a.property({type:["show","hide"]})],m.prototype,"listMode",void 0);g.__decorate([a.property({type:String})],m.prototype,"objectIdField",void 0);g.__decorate([a.property({type:["WFS"]})],m.prototype,"operationalLayerType",void 0);g.__decorate([a.property({type:q.Integer,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"maxFeatures",void 0);g.__decorate([a.property({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,
isRequired:!0}}}}})],m.prototype,"mode",void 0);g.__decorate([a.property({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"name",void 0);g.__decorate([a.property({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"namespaceUri",void 0);g.__decorate([a.property(R.opacityDrawingInfo)],m.prototype,"opacity",void 0);g.__decorate([a.property(D.outFields)],m.prototype,"outFields",void 0);g.__decorate([a.property({readOnly:!0})],
m.prototype,"parsedUrl",null);g.__decorate([a.property(R.popupEnabled)],m.prototype,"popupEnabled",void 0);g.__decorate([a.property({type:w,json:{name:"popupInfo",write:!0}})],m.prototype,"popupTemplate",void 0);g.__decorate([a.property({types:V.rendererTypes,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:V.webSceneRendererTypes,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],m.prototype,"renderer",
null);g.__decorate([a.property(R.screenSizePerspectiveEnabled)],m.prototype,"screenSizePerspectiveEnabled",void 0);g.__decorate([a.property({readOnly:!0})],m.prototype,"source",void 0);g.__decorate([a.property({type:ha,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],m.prototype,"spatialReference",void 0);g.__decorate([a.property({readOnly:!0,type:[q.Integer],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,
isRequired:!0}}})],m.prototype,"spatialReferences",void 0);g.__decorate([a.property({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"swapXY",void 0);g.__decorate([a.property({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],m.prototype,"title",void 0);g.__decorate([a.property({json:{read:!1},readOnly:!0})],m.prototype,"type",void 0);g.__decorate([a.property(R.url)],m.prototype,"url",void 0);g.__decorate([a.property({type:String,
readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"version",void 0);g.__decorate([a.property()],m.prototype,"wfsCapabilities",null);return m=d=g.__decorate([v.subclass("esri.layers.WFSLayer")],m)});