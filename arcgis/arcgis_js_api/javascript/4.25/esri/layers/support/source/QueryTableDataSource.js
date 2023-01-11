// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass ../../../geometry/SpatialReference ../../../geometry/support/typeUtils".split(" "),function(a,k,b,w,l,d,x,y,g,m,n,p){var e;a.QueryTableDataSource=e=function(h){function f(c){c=
h.call(this,c)||this;c.type="query-table";return c}k._inheritsLoose(f,h);f.prototype.clone=function(){const {workspaceId:c,query:q,oidFields:r,spatialReference:t,geometryType:u}=this,v={workspaceId:c,query:q,oidFields:r,spatialReference:t?.clone()??void 0,geometryType:u};return new e(v)};return f}(l.JSONSupport);b.__decorate([g.enumeration({queryTable:"query-table"})],a.QueryTableDataSource.prototype,"type",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.QueryTableDataSource.prototype,
"workspaceId",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.QueryTableDataSource.prototype,"query",void 0);b.__decorate([d.property({type:String,json:{write:!0}})],a.QueryTableDataSource.prototype,"oidFields",void 0);b.__decorate([d.property({type:n,json:{write:!0}})],a.QueryTableDataSource.prototype,"spatialReference",void 0);b.__decorate([g.enumeration(p.featureGeometryTypeKebabDictionary)],a.QueryTableDataSource.prototype,"geometryType",void 0);a.QueryTableDataSource=e=b.__decorate([m.subclass("esri.layers.support.source.QueryTableDataSource")],
a.QueryTableDataSource);Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});