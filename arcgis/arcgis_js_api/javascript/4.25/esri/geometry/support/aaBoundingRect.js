// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/mathUtils","../../core/maybe","../Extent"],function(d,E,n,w,B){function p(a=z){return[a[0],a[1],a[2],a[3]]}function q(a,b){a!==b&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3]);return a}function r(a){return w.isNone(a)||a[0]>=a[2]?0:a[2]-a[0]}function t(a){return a[1]>=a[3]?0:a[3]-a[1]}function x(a,b,c){return b>=a[0]&&c>=a[1]&&b<=a[2]&&c<=a[3]}function u(a){return null!=a&&4===a.length}const y=[Infinity,Infinity,-Infinity,-Infinity],z=[0,0,0,0];d.NEGATIVE_INFINITY=
y;d.POSITIVE_INFINITY=[-Infinity,-Infinity,Infinity,Infinity];d.UNIT=[0,0,1,1];d.ZERO=z;d.allFinite=function(a){for(let b=0;4>b;b++)if(!isFinite(a[b]))return!1;return!0};d.area=function(a){return r(a)*t(a)};d.center=function(a,b=[0,0]){b[0]=(a[0]+a[2])/2;b[1]=(a[1]+a[3])/2;return b};d.clone=function(a){return[a[0],a[1],a[2],a[3]]};d.contains=function(a,b){return b[0]>=a[0]&&b[2]<=a[2]&&b[1]>=a[1]&&b[3]<=a[3]};d.containsPoint=function(a,b){return x(a,b[0],b[1])};d.containsPointObject=function(a,b){return x(a,
b.x,b.y)};d.containsPointWithMargin=function(a,b,c){return b[0]>=a[0]-c&&b[1]>=a[1]-c&&b[0]<=a[2]+c&&b[1]<=a[3]+c};d.containsXY=x;d.containsXYWithMargin=function(a,b,c,e){return b>=a[0]-e&&c>=a[1]-e&&b<=a[2]+e&&c<=a[3]+e};d.copy=q;d.create=p;d.distance=function(a,b){const c=(a[1]+a[3])/2,e=Math.max(Math.abs(b[0]-(a[0]+a[2])/2)-r(a)/2,0);a=Math.max(Math.abs(b[1]-c)-t(a)/2,0);return Math.sqrt(e*e+a*a)};d.empty=function(a){return a?q(a,y):p(y)};d.equals=function(a,b){return u(a)&&u(b)?a[0]===b[0]&&a[1]===
b[1]&&a[2]===b[2]&&a[3]===b[3]:a===b};d.expand=function(a,b,c){if(w.isNone(b))q(c,a);else if("length"in b)if(u(b))c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.max(a[2],b[2]),c[3]=Math.max(a[3],b[3]);else{if(2===b.length||3===b.length)c[0]=Math.min(a[0],b[0]),c[1]=Math.min(a[1],b[1]),c[2]=Math.max(a[2],b[0]),c[3]=Math.max(a[3],b[1])}else switch(b.type){case "extent":c[0]=Math.min(a[0],b.xmin);c[1]=Math.min(a[1],b.ymin);c[2]=Math.max(a[2],b.xmax);c[3]=Math.max(a[3],b.ymax);break;case "point":c[0]=
Math.min(a[0],b.x),c[1]=Math.min(a[1],b.y),c[2]=Math.max(a[2],b.x),c[3]=Math.max(a[3],b.y)}};d.expandPointInPlace=function(a,b){b[0]<a[0]&&(a[0]=b[0]);b[0]>a[2]&&(a[2]=b[0]);b[1]<a[1]&&(a[1]=b[1]);b[1]>a[3]&&(a[3]=b[1])};d.expandWithNestedArray=function(a,b,c=a){const e=b.length;let f=a[0],g=a[1],k=a[2];a=a[3];for(let l=0;l<e;l++){const h=b[l];f=Math.min(f,h[0]);g=Math.min(g,h[1]);k=Math.max(k,h[0]);a=Math.max(a,h[1])}c[0]=f;c[1]=g;c[2]=k;c[3]=a;return c};d.fromExtent=function(a,b=p()){b[0]=a.xmin;
b[1]=a.ymin;b[2]=a.xmax;b[3]=a.ymax;return b};d.fromValues=function(a,b,c,e,f=p()){f[0]=a;f[1]=b;f[2]=c;f[3]=e;return f};d.height=t;d.intersection=function(a,b,c){if(w.isNone(b))return q(c,a);const e=b[0],f=b[1],g=b[2];b=b[3];c[0]=n.clamp(a[0],e,g);c[1]=n.clamp(a[1],f,b);c[2]=n.clamp(a[2],e,g);c[3]=n.clamp(a[3],f,b);return c};d.intersects=function(a,b){return Math.max(b[0],a[0])<=Math.min(b[2],a[2])&&Math.max(b[1],a[1])<=Math.min(b[3],a[3])};d.intersectsSegment=function(a,b,c){const e=a[0],f=a[1],
g=a[2];a=a[3];const {x:k,y:l}=b,{x:h,y:v}=c;var m=(C,D)=>0>(v-l)*C+(k-h)*D+(h*l-k*v);b=m(e,a);c=m(g,a);const A=m(g,f);m=m(e,f);return b===c&&c===A&&A===m&&m===b||k<e&&h<e||k>g&&h>g||l>a&&v>a||l<f&&v<f?!1:!0};d.intersectsSphere=function(a,b){const c=b[3];var e=Math.abs(b[0]-.5*(a[0]+a[2]));const f=.5*(a[2]-a[0]);if(e>c+f)return!1;var g=.5*(a[3]-a[1]);a=Math.abs(b[1]-.5*(a[1]+a[3]));if(a>c+g)return!1;if(e<f||a<g)return!0;e-=f;g=a-g;return e*e+g*g<=c*c};d.is=u;d.isPoint=function(a){return(0===r(a)||
!isFinite(a[0]))&&(0===t(a)||!isFinite(a[1]))};d.offset=function(a,b,c,e=a){e[0]=a[0]+b;e[1]=a[1]+c;e[2]=a[2]+b;e[3]=a[3]+c;return e};d.pad=function(a,b,c=a){c[0]=a[0]-b;c[1]=a[1]-b;c[2]=a[2]+b;c[3]=a[3]+b;return c};d.setMax=function(a,b,c=a){c[2]=b[0];c[3]=b[1];c!==a&&(c[0]=a[0],c[1]=a[1]);return a};d.setMin=function(a,b,c=a){c[0]=b[0];c[1]=b[1];c!==a&&(c[2]=a[2],c[3]=a[3]);return c};d.size=function(a,b){b[0]=a[2]-a[0];b[1]=a[3]-a[1]};d.toExtent=function(a,b){return new B({xmin:a[0],ymin:a[1],xmax:a[2],
ymax:a[3],spatialReference:b})};d.width=r;Object.defineProperties(d,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});