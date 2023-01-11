// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe","../Extent","./aaBoundingRect"],function(d,u,x,C){function t(a=y){return[a[0],a[1],a[2],a[3],a[4],a[5]]}function z(a,b,c,f,e,h,k=t()){k[0]=a;k[1]=b;k[2]=c;k[3]=f;k[4]=e;k[5]=h;return k}function n(a){return a[0]>=a[3]?0:a[3]-a[0]}function p(a){return a[1]>=a[4]?0:a[4]-a[1]}function q(a){return a[2]>=a[5]?0:a[5]-a[2]}function A(a,b){return Math.max(b[0],a[0])<=Math.min(b[3],a[3])&&Math.max(b[1],a[1])<=Math.min(b[4],a[4])&&Math.max(b[2],a[2])<=Math.min(b[5],a[5])}
function B(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a}function v(a){return 6===a.length}const w=[Infinity,Infinity,Infinity,-Infinity,-Infinity,-Infinity],y=[0,0,0,0,0,0],D=t();d.NEGATIVE_INFINITY=w;d.POSITIVE_INFINITY=[-Infinity,-Infinity,-Infinity,Infinity,Infinity,Infinity];d.ZERO=y;d.allFinite=function(a){for(let b=0;6>b;b++)if(!isFinite(a[b]))return!1;return!0};d.center=function(a,b=[0,0,0]){b[0]=a[0]+n(a)/2;b[1]=a[1]+p(a)/2;b[2]=a[2]+q(a)/2;return b};d.contains=
function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[2]>=a[2]&&b[3]<=a[3]&&b[4]<=a[4]&&b[5]<=a[5]};d.containsPoint=function(a,b){return b[0]>=a[0]&&b[1]>=a[1]&&b[2]>=a[2]&&b[0]<=a[3]&&b[1]<=a[4]&&b[2]<=a[5]};d.containsPointWithMargin=function(a,b,c){return b[0]>=a[0]-c&&b[1]>=a[1]-c&&b[2]>=a[2]-c&&b[0]<=a[3]+c&&b[1]<=a[4]+c&&b[2]<=a[5]+c};d.create=t;d.depth=p;d.diameter=function(a){const b=n(a),c=q(a);a=p(a);return Math.sqrt(b*b+c*c+a*a)};d.empty=function(a){return a?B(a,w):t(w)};d.equals=function(a,b,
c){if(u.isNone(a)||u.isNone(b))return a===b;if(!v(a)||!v(b))return!1;if(c)for(let f=0;f<a.length;f++){if(!c(a[f],b[f]))return!1}else for(c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};d.expandWithAABB=function(a,b){a[0]=Math.min(a[0],b[0]);a[1]=Math.min(a[1],b[1]);a[2]=Math.min(a[2],b[2]);a[3]=Math.max(a[3],b[3]);a[4]=Math.max(a[4],b[4]);a[5]=Math.max(a[5],b[5])};d.expandWithBuffer=function(a,b,c=0,f=b.length/3){let e=a[0],h=a[1],k=a[2],l=a[3],m=a[4],r=a[5];for(let g=0;g<f;g++)e=Math.min(e,
b[c+3*g]),h=Math.min(h,b[c+3*g+1]),k=Math.min(k,b[c+3*g+2]),l=Math.max(l,b[c+3*g]),m=Math.max(m,b[c+3*g+1]),r=Math.max(r,b[c+3*g+2]);a[0]=e;a[1]=h;a[2]=k;a[3]=l;a[4]=m;a[5]=r};d.expandWithNestedArray=function(a,b,c){const f=b.length;let e=a[0],h=a[1],k=a[2],l=a[3],m=a[4],r=a[5];if(c)for(c=0;c<f;c++){var g=b[c];e=Math.min(e,g[0]);h=Math.min(h,g[1]);k=Math.min(k,g[2]);l=Math.max(l,g[0]);m=Math.max(m,g[1]);r=Math.max(r,g[2])}else for(c=0;c<f;c++)g=b[c],e=Math.min(e,g[0]),h=Math.min(h,g[1]),l=Math.max(l,
g[0]),m=Math.max(m,g[1]);a[0]=e;a[1]=h;a[2]=k;a[3]=l;a[4]=m;a[5]=r};d.expandWithOffset=function(a,b,c,f){a[0]=Math.min(a[0],a[0]+b);a[3]=Math.max(a[3],a[3]+b);a[1]=Math.min(a[1],a[1]+c);a[4]=Math.max(a[4],a[4]+c);a[2]=Math.min(a[2],a[2]+f);a[5]=Math.max(a[5],a[5]+f)};d.expandWithRect=function(a,b){a[0]=Math.min(a[0],b[0]);a[1]=Math.min(a[1],b[1]);a[3]=Math.max(a[3],b[2]);a[4]=Math.max(a[4],b[3])};d.expandWithVec3=function(a,b){a[0]=Math.min(a[0],b[0]);a[1]=Math.min(a[1],b[1]);a[2]=Math.min(a[2],b[2]);
a[3]=Math.max(a[3],b[0]);a[4]=Math.max(a[4],b[1]);a[5]=Math.max(a[5],b[2])};d.fromExtent=function(a,b=t()){b[0]=a.xmin;b[1]=a.ymin;b[2]=a.hasZ?a.zmin:-Infinity;b[3]=a.xmax;b[4]=a.ymax;b[5]=a.hasZ?a.zmax:Infinity;return b};d.fromMinMax=function(a,b,c=t()){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=b[0];c[4]=b[1];c[5]=b[2];return c};d.fromRect=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=Number.NEGATIVE_INFINITY;a[3]=b[2];a[4]=b[3];a[5]=Number.POSITIVE_INFINITY;return a};d.fromValues=z;d.getMax=function(a,b){b[0]=
a[3];b[1]=a[4];b[2]=a[5];return b};d.getMin=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};d.height=q;d.intersects=A;d.intersectsClippingArea=function(a,b){return u.isNone(b)?!0:A(a,b)};d.is=v;d.isPoint=function(a){return 0===n(a)&&0===p(a)&&0===q(a)};d.maximumDimension=function(a){return Math.max(n(a),q(a),p(a))};d.offset=function(a,b,c,f,e=a){e[0]=a[0]+b;e[1]=a[1]+c;e[2]=a[2]+f;e[3]=a[3]+b;e[4]=a[4]+c;e[5]=a[5]+f;return e};d.scale=function(a,b,c=a){const f=a[0]+n(a)/2,e=a[1]+p(a)/2,h=a[2]+
q(a)/2;c[0]=f+(a[0]-f)*b;c[1]=e+(a[1]-e)*b;c[2]=h+(a[2]-h)*b;c[3]=f+(a[3]-f)*b;c[4]=e+(a[4]-e)*b;c[5]=h+(a[5]-h)*b;return c};d.set=B;d.setMax=function(a,b,c=a){c[3]=b[0];c[4]=b[1];c[5]=b[2];c!==a&&(c[0]=a[0],c[1]=a[1],c[2]=a[2]);return a};d.setMin=function(a,b,c=a){c[0]=b[0];c[1]=b[1];c[2]=b[2];c!==a&&(c[3]=a[3],c[4]=a[4],c[5]=a[5]);return c};d.size=function(a,b=[0,0,0]){b[0]=n(a);b[1]=p(a);b[2]=q(a);return b};d.toExtent=function(a,b){return isFinite(a[2])||isFinite(a[5])?new x({xmin:a[0],xmax:a[3],
ymin:a[1],ymax:a[4],zmin:a[2],zmax:a[5],spatialReference:b}):new x({xmin:a[0],xmax:a[3],ymin:a[1],ymax:a[4],spatialReference:b})};d.toRect=function(a,b){b||(b=C.create());b[0]=a[0];b[1]=a[1];b[2]=a[3];b[3]=a[4];return b};d.width=n;d.wrap=function(a,b,c,f,e,h){return z(a,b,c,f,e,h,D)};Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});