// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/maybe","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../Point"],function(q,t,h,p,v){const w=p.create(),x=p.create(),y=p.create(),k=p.create();q.computeOrigin=function(a){return t.isSome(a.transform)?a.transform.getOriginPoint(a.spatialReference):new v({x:a.extent.xmax-a.extent.width/2,y:a.extent.ymax-a.extent.height/2,z:a.extent.zmin,spatialReference:a.extent.spatialReference})};q.smoothNormals=function(a,z){if(a.components)for(const r of a.components)if(r.faces&&
"smooth"===r.shading){a=r;var l=z;t.isNone(l.normal)&&(l.normal=new Float32Array(l.position.length));a=a.faces;const {position:d,normal:b}=l;l=a.length/3;for(let m=0;m<l;++m){const e=3*a[3*m],f=3*a[3*m+1],g=3*a[3*m+2];var c=h.set(w,d[e+0],d[e+1],d[e+2]),n=h.set(x,d[f+0],d[f+1],d[f+2]);const u=h.set(y,d[g+0],d[g+1],d[g+2]);n=h.subtract(n,n,c);c=h.subtract(u,u,c);c=h.cross(n,n,c);b[e+0]+=c[0];b[e+1]+=c[1];b[e+2]+=c[2];b[f+0]+=c[0];b[f+1]+=c[1];b[f+2]+=c[2];b[g+0]+=c[0];b[g+1]+=c[1];b[g+2]+=c[2]}for(a=
0;a<b.length;a+=3)h.set(k,b[a],b[a+1],b[a+2]),h.normalize(k,k),b[a+0]=k[0],b[a+1]=k[1],b[a+2]=k[2]}};Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});