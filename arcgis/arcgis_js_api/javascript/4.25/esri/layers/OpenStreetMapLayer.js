// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../geometry ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/Point ./WebTileLayer ./support/LOD ./support/TileInfo ../portal/PortalItem ../geometry/SpatialReference ../geometry/Extent".split(" "),function(h,c,b,d,t,u,m,n,p,a,k,q,f,r){b=function(l){function g(...e){e=l.call(this,...e)||this;e.portalItem=null;e.isReference=null;e.tileInfo=
new k({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new n({x:-2.0037508342787E7,y:2.0037508342787E7,spatialReference:f.WebMercator}),spatialReference:f.WebMercator,lods:[new a({level:0,scale:5.91657527591555E8,resolution:156543.033928}),new a({level:1,scale:2.95828763795777E8,resolution:78271.5169639999}),new a({level:2,scale:1.47914381897889E8,resolution:39135.7584820001}),new a({level:3,scale:7.3957190948944E7,resolution:19567.8792409999}),new a({level:4,scale:3.6978595474472E7,
resolution:9783.93962049996}),new a({level:5,scale:1.8489297737236E7,resolution:4891.96981024998}),new a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new a({level:8,scale:2311162.217155,resolution:611.49622628138}),new a({level:9,scale:1155581.108577,resolution:305.748113140558}),new a({level:10,scale:577790.554289,resolution:152.874056570411}),new a({level:11,scale:288895.277144,resolution:76.4370282850732}),new a({level:12,
scale:144447.638572,resolution:38.2185141425366}),new a({level:13,scale:72223.819286,resolution:19.1092570712683}),new a({level:14,scale:36111.909643,resolution:9.55462853563415}),new a({level:15,scale:18055.954822,resolution:4.77731426794937}),new a({level:16,scale:9027.977411,resolution:2.38865713397468}),new a({level:17,scale:4513.988705,resolution:1.19432856685505}),new a({level:18,scale:2256.994353,resolution:.597164283559817}),new a({level:19,scale:1128.497176,resolution:.298582141647617})]});
e.subDomains=["a","b","c"];e.fullExtent=new r(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,f.WebMercator);e.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png";e.operationalLayerType="OpenStreetMap";e.type="open-street-map";e.copyright="Map data \x26copy; OpenStreetMap contributors, CC-BY-SA";return e}h._inheritsLoose(g,l);h._createClass(g,[{key:"refreshInterval",get:function(){return 0}}]);return g}(p);c.__decorate([d.property({type:q,json:{read:!1,
write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"portalItem",void 0);c.__decorate([d.property({type:Boolean,json:{read:!1,write:!1}})],b.prototype,"isReference",void 0);c.__decorate([d.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],b.prototype,"refreshInterval",null);c.__decorate([d.property({type:k,json:{write:!1}})],b.prototype,"tileInfo",void 0);c.__decorate([d.property({type:["show","hide"]})],b.prototype,"listMode",
void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"subDomains",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],b.prototype,"fullExtent",void 0);c.__decorate([d.property({readOnly:!0,json:{read:!1,write:!1}})],b.prototype,"urlTemplate",void 0);c.__decorate([d.property({type:["OpenStreetMap"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([d.property({json:{read:!1}})],b.prototype,"type",void 0);c.__decorate([d.property({json:{read:!1,
write:!1}})],b.prototype,"copyright",void 0);c.__decorate([d.property({json:{read:!1,write:!1}})],b.prototype,"wmtsInfo",void 0);return b=c.__decorate([m.subclass("esri.layers.OpenStreetMapLayer")],b)});