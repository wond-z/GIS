// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/string ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../layers/support/fieldUtils ./Symbol".split(" "),function(l,c,p,q,m,b,r,t,u,v,w,x){var h;b=h=function(n){function k(a){a=n.call(this,a)||this;a.data=null;
a.type="cim";return a}l._inheritsLoose(k,n);var e=k.prototype;e.readData=function(a,d){return d};e.writeData=function(a,d){if(a)for(const f in a)d[f]=a[f]};e.collectRequiredFields=function(){var a=l._asyncToGenerator(function*(d,f){if("CIMSymbolReference"===this.data?.type){var g=this.data.primitiveOverrides;g&&(g=g.map(y=>w.collectArcadeFieldNames(d,f,y.valueExpressionInfo.expression)),yield Promise.all(g))}});return function(d,f){return a.apply(this,arguments)}}();e.clone=function(){return new h({data:p.clone(this.data)})};
e.hash=function(){return q.numericHash(JSON.stringify(this.data)).toString()};return k}(x);c.__decorate([m.property({json:{write:!1}})],b.prototype,"color",void 0);c.__decorate([m.property({json:{write:!0}})],b.prototype,"data",void 0);c.__decorate([t.reader("data",["symbol"])],b.prototype,"readData",null);c.__decorate([v.writer("data",{})],b.prototype,"writeData",null);c.__decorate([r.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],b.prototype,"type",void 0);return b=h=c.__decorate([u.subclass("esri.symbols.CIMSymbol")],
b)});