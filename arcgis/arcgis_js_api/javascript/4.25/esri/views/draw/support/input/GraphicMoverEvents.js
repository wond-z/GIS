// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){let p=function(){function a(b,c,d,e,g,h,k,l,m,n){this.graphic=b;this.allGraphics=c;this.index=d;this.x=e;this.y=g;this.dx=h;this.dy=k;this.totalDx=l;this.totalDy=m;this.viewEvent=n;this.defaultPrevented=!1;this.type="graphic-move-start"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}(),q=function(){function a(b,c,d,e,g,h,k,l,m,n){this.graphic=b;this.allGraphics=c;this.index=d;this.x=e;this.y=g;this.dx=h;this.dy=k;this.totalDx=l;this.totalDy=
m;this.viewEvent=n;this.defaultPrevented=!1;this.type="graphic-move"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}(),r=function(){function a(b,c,d,e,g,h,k,l,m,n){this.graphic=b;this.allGraphics=c;this.index=d;this.x=e;this.y=g;this.dx=h;this.dy=k;this.totalDx=l;this.totalDy=m;this.viewEvent=n;this.defaultPrevented=!1;this.type="graphic-move-stop"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}();f.GraphicClickEvent=function(a,b,c,d,e){this.graphic=
a;this.index=b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-click"};f.GraphicDoubleClickEvent=function(a,b,c,d,e){this.graphic=a;this.index=b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-double-click"};f.GraphicMoveEvent=q;f.GraphicMoveStartEvent=p;f.GraphicMoveStopEvent=r;f.GraphicPointerDownEvent=function(a,b,c,d,e){this.graphic=a;this.index=b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-pointer-down"};f.GraphicPointerOutEvent=function(a,b,c,d,e){this.graphic=a;this.index=
b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-pointer-out"};f.GraphicPointerOverEvent=function(a,b,c,d,e){this.graphic=a;this.index=b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-pointer-over"};f.GraphicPointerUpEvent=function(a,b,c,d,e){this.graphic=a;this.index=b;this.x=c;this.y=d;this.viewEvent=e;this.type="graphic-pointer-up"};Object.defineProperties(f,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});