// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../symbols/cim/enums","./definitions"],function(ha,t,ka){function ia(f,l){return f.x===l.x&&f.y===l.y}function N(f,l){f.x=l.y;f.y=-l.x;return f}function K(f,l){f.x=-l.y;f.y=l.x;return f}function ja(f,l){f.x=l.x;f.y=l.y;return f}function da(f,l){f.x=-l.x;f.y=-l.y;return f}function ea(f){return Math.sqrt(f.x*f.x+f.y*f.y)}function W(f,l,e,c){f.x=l.x*e+l.y*c;f.y=l.x*c-l.y*e;return f}let na=function(){function f(e,c,u){this._writeVertex=e;this._writeTriangle=c;this._canUseThinTessellation=
u;this._prevNormal={x:void 0,y:void 0};this._nextNormal={x:void 0,y:void 0};this._textureNormalLeft={x:0,y:1};this._textureNormalRight={x:0,y:-1};this._textureNormal={x:void 0,y:void 0};this._joinNormal={x:void 0,y:void 0};this._inner={x:void 0,y:void 0};this._outer={x:void 0,y:void 0};this._roundStart={x:void 0,y:void 0};this._roundEnd={x:void 0,y:void 0};this._startBreak={x:void 0,y:void 0};this._endBreak={x:void 0,y:void 0};this._innerPrev={x:void 0,y:void 0};this._innerNext={x:void 0,y:void 0};
this._bevelStart={x:void 0,y:void 0};this._bevelEnd={x:void 0,y:void 0};this._bevelMiddle={x:void 0,y:void 0}}var l=f.prototype;l.tessellate=function(e,c){if(e){var u=e.length;if(!(1>=u)){var I=0;for(let B=1;B<u;B++)ia(e[B],e[I])||++I===B||(e[I]=e[B]);e.length=I+1}}this._canUseThinTessellation&&c.halfWidth<ka.THIN_LINE_HALF_WIDTH_THRESHOLD&&!c.offset?this._tessellateThin(e,c):this._tessellate(e,c)};l._tessellateThin=function(e,c){if(!(2>e.length)){var u=c.wrapDistance||65535;c=c.initialDistance||
0;var I=!1,B=e[0].x,E=e[0].y,aa=e.length;for(let L=1;L<aa;++L){I&&(I=!1,c=0);let d=e[L].x,b=e[L].y;var C=d-B;let a=b-E;var O=Math.sqrt(C*C+a*a);C/=O;a/=O;if(c+O>u){I=!0;var S=(u-c)/O;O=u-c;d=(1-S)*B+S*d;b=(1-S)*E+S*b;--L}S=this._writeVertex(B,E,0,0,C,a,a,-C,0,-1,c);B=this._writeVertex(B,E,0,0,C,a,-a,C,0,1,c);c+=O;O=this._writeVertex(d,b,0,0,C,a,a,-C,0,-1,c);C=this._writeVertex(d,b,0,0,C,a,-a,C,0,1,c);this._writeTriangle(S,B,O);this._writeTriangle(B,O,C);B=d;E=b}}};l._tessellate=function(e,c){var u=
e[e.length-1];const I=ia(e[0],u);if(!(e.length<(I?3:2))){var B=c.pixelCoordRatio,E=null!=c.capType?c.capType:t.CapType.BUTT,aa=null!=c.joinType?c.joinType:t.JoinType.MITER,C=null!=c.miterLimit?Math.min(c.miterLimit,4):2,O=null!=c.roundLimit?Math.min(c.roundLimit,1.05):1.05,S=null!=c.halfWidth?c.halfWidth:2,L=!!c.textured,d=null,b=this._prevNormal,a=this._nextNormal,X=-1,T=-1,h=this._joinNormal,ba=this._textureNormalLeft,ca=this._textureNormalRight,y=this._textureNormal,q=-1,r=-1,fa=c.wrapDistance||
65535,n=c.initialDistance||0,la=this._writeVertex,ma=this._writeTriangle;c=(D,P,Q,Y,U,V)=>{D=la(z,A,v,w,Q,Y,D,P,U,V,n);0<=q&&0<=r&&0<=D&&ma(q,r,D);q=r;return r=D};if(I){var R=e[e.length-2];a.x=u.x-R.x;a.y=u.y-R.y;T=ea(a);a.x/=T;a.y/=T}u=!1;for(let D=0;D<e.length;++D){u&&(u=!1,n=0);R&&(b.x=-a.x,b.y=-a.y,X=T,n+X>fa&&(u=!0));u?(d=(fa-n)/X,X=fa-n,R={x:(1-d)*R.x+d*e[D].x,y:(1-d)*R.y+d*e[D].y},--D):R=e[D];var z=R.x;var A=R.y;var g=0>=D&&!u,p=D===e.length-1;g||(n+=X);(d=p?I?e[1]:null:e[D+1])?(a.x=d.x-z,
a.y=d.y-A,T=ea(a),a.x/=T,a.y/=T):(a.x=void 0,a.y=void 0);if(!I){if(g){K(h,a);var v=h.x;var w=h.y;E===t.CapType.SQUARE&&(c(-a.y-a.x,a.x-a.y,a.x,a.y,0,-1),c(a.y-a.x,-a.x-a.y,a.x,a.y,0,1));E===t.CapType.ROUND&&(c(-a.y-a.x,a.x-a.y,a.x,a.y,-1,-1),c(a.y-a.x,-a.x-a.y,a.x,a.y,-1,1));if(E===t.CapType.ROUND||E===t.CapType.BUTT)c(-a.y,a.x,a.x,a.y,0,-1),c(a.y,-a.x,a.x,a.y,0,1);continue}if(p){N(h,b);v=h.x;w=h.y;if(E===t.CapType.ROUND||E===t.CapType.BUTT)c(b.y,-b.x,-b.x,-b.y,0,-1),c(-b.y,b.x,-b.x,-b.y,0,1);E===
t.CapType.SQUARE&&(c(b.y-b.x,-b.x-b.y,-b.x,-b.y,0,-1),c(-b.y-b.x,b.x-b.y,-b.x,-b.y,0,1));E===t.CapType.ROUND&&(c(b.y-b.x,-b.x-b.y,-b.x,-b.y,1,-1),c(-b.y-b.x,b.x-b.y,-b.x,-b.y,1,1));continue}}var m=void 0;g=-(b.x*a.y-b.y*a.x);.01>Math.abs(g)?0<b.x*a.x+b.y*a.y?(h.x=b.x,h.y=b.y,g=1,m=Number.MAX_VALUE,d=!0):(K(h,a),m=g=1,d=!1):(h.x=(b.x+a.x)/g,h.y=(b.y+a.y)/g,m=ea(h),d=(m-1)*S*B,d=4<m||d>X&&d>T);v=h.x;w=h.y;var k=aa;switch(aa){case t.JoinType.BEVEL:1.05>m&&(k=t.JoinType.MITER);break;case t.JoinType.ROUND:m<
O&&(k=t.JoinType.MITER);break;case t.JoinType.MITER:m>C&&(k=t.JoinType.BEVEL)}switch(k){case t.JoinType.MITER:c(h.x,h.y,-b.x,-b.y,0,-1);c(-h.x,-h.y,-b.x,-b.y,0,1);if(p)break;L&&(d=u?0:n,q=this._writeVertex(z,A,v,w,a.x,a.y,h.x,h.y,0,-1,d),r=this._writeVertex(z,A,v,w,a.x,a.y,-h.x,-h.y,0,1,d));break;case t.JoinType.BEVEL:g=0>g;var F=void 0;g?(k=q,q=r,r=k,F=ba,k=ca):(F=ca,k=ba);var G=void 0,M=void 0;d?(G=g?K(this._innerPrev,b):N(this._innerPrev,b),M=g?N(this._innerNext,a):K(this._innerNext,a)):G=M=g?
da(this._inner,h):ja(this._inner,h);m=g?N(this._bevelStart,b):K(this._bevelStart,b);c(G.x,G.y,-b.x,-b.y,F.x,F.y);G=c(m.x,m.y,-b.x,-b.y,k.x,k.y);if(p)break;p=g?K(this._bevelEnd,a):N(this._bevelEnd,a);d?(d=this._writeVertex(z,A,v,w,-b.x,-b.y,0,0,0,0,n),q=this._writeVertex(z,A,v,w,a.x,a.y,M.x,M.y,F.x,F.y,n),r=this._writeVertex(z,A,v,w,a.x,a.y,p.x,p.y,k.x,k.y,n),this._writeTriangle(G,d,r)):(L?(d=this._bevelMiddle,d.x=(m.x+p.x)/2,d.y=(m.y+p.y)/2,W(y,d,-b.x,-b.y),c(d.x,d.y,-b.x,-b.y,y.x,y.y),W(y,d,a.x,
a.y),q=this._writeVertex(z,A,v,w,a.x,a.y,d.x,d.y,y.x,y.y,n),r=this._writeVertex(z,A,v,w,a.x,a.y,M.x,M.y,F.x,F.y,n)):(d=q,q=r,r=d),c(p.x,p.y,a.x,a.y,k.x,k.y));g&&(d=q,q=r,r=d);break;case t.JoinType.ROUND:g=0>g;var J=void 0;g?(k=q,q=r,r=k,k=ba,J=ca):(k=ca,J=ba);var x=g?da(this._inner,h):ja(this._inner,h);d?(M=g?K(this._innerPrev,b):N(this._innerPrev,b),F=g?N(this._innerNext,a):K(this._innerNext,a)):F=M=x;G=g?N(this._roundStart,b):K(this._roundStart,b);var Z=g?K(this._roundEnd,a):N(this._roundEnd,a);
M=c(M.x,M.y,-b.x,-b.y,k.x,k.y);G=c(G.x,G.y,-b.x,-b.y,J.x,J.y);if(p)break;p=this._writeVertex(z,A,v,w,-b.x,-b.y,0,0,0,0,n);d||this._writeTriangle(q,r,p);x=da(this._outer,x);J=this._writeVertex(z,A,v,w,a.x,a.y,Z.x,Z.y,J.x,J.y,n);let P,Q;if(Z=2<m){var H=void 0;m!==Number.MAX_VALUE?(x.x/=m,x.y/=m,H=b.x*x.x+b.y*x.y,H=(m*(H*H-1)+1)/H):H=-1;P=g?N(this._startBreak,b):K(this._startBreak,b);P.x+=b.x*H;P.y+=b.y*H;Q=g?K(this._endBreak,a):N(this._endBreak,a);Q.x+=a.x*H;Q.y+=a.y*H}W(y,x,-b.x,-b.y);m=this._writeVertex(z,
A,v,w,-b.x,-b.y,x.x,x.y,y.x,y.y,n);W(y,x,a.x,a.y);x=L?this._writeVertex(z,A,v,w,a.x,a.y,x.x,x.y,y.x,y.y,n):m;H=p;const Y=L?this._writeVertex(z,A,v,w,a.x,a.y,0,0,0,0,n):p;let U=-1,V=-1;Z&&(W(y,P,-b.x,-b.y),U=this._writeVertex(z,A,v,w,-b.x,-b.y,P.x,P.y,y.x,y.y,n),W(y,Q,a.x,a.y),V=this._writeVertex(z,A,v,w,a.x,a.y,Q.x,Q.y,y.x,y.y,n));L?Z?(this._writeTriangle(H,G,U),this._writeTriangle(H,U,m),this._writeTriangle(Y,x,V),this._writeTriangle(Y,V,J)):(this._writeTriangle(H,G,m),this._writeTriangle(Y,x,J)):
Z?(this._writeTriangle(p,G,U),this._writeTriangle(p,U,V),this._writeTriangle(p,V,J)):(this._writeTriangle(p,G,m),this._writeTriangle(p,x,J));d?q=this._writeVertex(z,A,v,w,a.x,a.y,F.x,F.y,k.x,k.y,n):(q=L?this._writeVertex(z,A,v,w,a.x,a.y,F.x,F.y,k.x,k.y,n):M,this._writeTriangle(q,Y,J));r=J;g&&(d=q,q=r,r=d)}}}};return f}();ha.LineTessellation=na;Object.defineProperties(ha,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});