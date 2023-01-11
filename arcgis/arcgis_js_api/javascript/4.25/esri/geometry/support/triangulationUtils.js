// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/earcut","./coordsUtils","./meshUtils/deduplicate"],function(m,y,z,A){function B(a,g,d){if(1===a.length)return a[0];g=new Float64Array(g);d=new Uint32Array(d);let e=0,b=0,l=0;for(const h of a){for(a=0;a<h.position.length;a++)g[e++]=h.position[a];for(a=0;a<h.faces.length;a++)d[b++]=h.faces[a]+l;l=e/3}return{position:g,faces:d}}function x(a,g,d){const e=a.length,b=Array(e),l=Array(e),h=Array(e);let k=0,n=0,t=0;var p=0;for(var f=0;f<e;++f)p+=a[f].length;p=new Float64Array(3*
p);f=0;for(let v=e-1;0<=v;v--){var c=a[v],q=d===m.CounterClockwiseMode.CCW_IS_HOLE?!z.isClockwise(c,!1,!1):!1;if(q&&1!==e)b[k++]=c;else{var r=c.length;for(let w=0;w<k;++w)r+=b[w].length;r={index:f,pathLengths:Array(k+1),count:r,holeIndices:Array(k)};r.pathLengths[0]=c.length;0<c.length&&(h[t++]={index:f,count:c.length});f=q?u(c,c.length-1,-1,p,f,c.length,g):u(c,0,1,p,f,c.length,g);for(c=0;c<k;++c)q=b[c],r.holeIndices[c]=f,r.pathLengths[c+1]=q.length,0<q.length&&(h[t++]={index:f,count:q.length}),f=
u(q,0,1,p,f,q.length,g);k=0;0<r.count&&(l[n++]=r)}}for(a=0;a<k;++a)d=b[a],0<d.length&&(h[t++]={index:f,count:d.length}),f=u(d,0,1,p,f,d.length,g);l.length=n;h.length=t;return{position:p,polygons:l,outlines:h}}function u(a,g,d,e,b,l,h){b*=3;for(let k=0;k<l;++k){const n=a[g];e[b++]=n[0];e[b++]=n[1];e[b++]=h?n[2]:0;g+=d}return b/3}m.CounterClockwiseMode=void 0;(function(a){a[a.NONE=0]="NONE";a[a.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(m.CounterClockwiseMode||(m.CounterClockwiseMode={}));m.pathsToTriangulationInfo=
x;m.triangulate=function(a){a=x(a.rings,a.hasZ,m.CounterClockwiseMode.CCW_IS_HOLE);const g=[];let d=0,e=0;for(var b of a.polygons){const h=b.index,k=new Float64Array(a.position.buffer,3*h*a.position.BYTES_PER_ELEMENT,3*b.count);var l=b.holeIndices.map(n=>n-h);l=new Uint32Array(y.earcut(k,l,3));g.push({position:k,faces:l});d+=k.length;e+=l.length}b=B(g,d,e);a=A.deduplicate(b.position.buffer,6,{originalIndices:b.faces});b.position=new Float64Array(a.buffer);b.faces=a.indices;return b};Object.defineProperties(m,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});