// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass".split(" "),function(l,h,m,n,p,q,r,u,v,t){function k(e,g,f){if(e)for(let b=0,c=e.length;b<c;b++){var d=e.getItemAt(b);if(d[g]===f||"group"===d?.type&&(d=k(d.tables,g,f)))return d}}l.TablesMixin=e=>{e=function(g){function f(...b){var c=
g.call(this,...b)||this;c.tables=new n;c.tables.on("after-add",a=>{a=a.item;a.parent&&a.parent!==h._assertThisInitialized(c)&&"tables"in a.parent&&a.parent.tables.remove(a);a.parent=h._assertThisInitialized(c);"feature"!==a.type&&q.getLogger(c.declaredClass).error(`Layer 'title:${a.title}, id:${a.id}' of type '${a.type}' is not supported as a table and will therefore be ignored.`)});c.tables.on("after-remove",a=>{a.item.parent=null});return c}h._inheritsLoose(f,g);var d=f.prototype;d.destroy=function(){const b=
this.tables.removeAll();for(const c of b)c.destroy();this.tables.destroy()};d.findTableById=function(b){return k(this.tables,"id",b)};d.findTableByUid=function(b){return k(this.tables,"uid",b)};h._createClass(f,[{key:"tables",set:function(b){this._set("tables",p.referenceSetter(b,this._get("tables")))}}]);return f}(e);m.__decorate([r.property()],e.prototype,"tables",null);return e=m.__decorate([t.subclass("esri.support.TablesMixin")],e)};Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});