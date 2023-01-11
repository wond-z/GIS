// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../kernel ../../request ../../core/colorUtils ../../core/Error ../../core/has ../../libs/maquette/projection ../../libs/maquette/projector ./svgUtils ./utils".split(" "),function(t,w,x,u,y,z,G,A,B,C){function D(d,f,b){return d?x(d,{responseType:"image"}).then(g=>{g=g.data;const l=g.width,a=g.height,m=l/a;let h=f;b&&(h=Math.min(h,Math.max(l,a)));return{image:g,width:1>=m?Math.ceil(h*m):h,height:1>=m?h:Math.ceil(h/m)}}):Promise.reject(new y("renderUtils: imageDataSize","href not provided."))}
const E=A.createProjector();t.renderSymbol=function(d,f,b){const g=Math.ceil(f[0]);f=Math.ceil(f[1]);if(!d.some(a=>!!a.length))return null;const l=b&&b.node||document.createElement("div");null!=b.opacity&&(l.style.opacity=b.opacity.toString());null!=b.effectView&&(l.style.filter=C.getCSSFilterFromEffectList(b.effectView));E.append(l,B.renderSVG.bind(null,d,g,f,b));return l};t.tintImageWithColor=function(d,f,b,g,l){return D(d,f,l).then(a=>{const m=a.width?a.width:f,h=a.height?a.height:f;var e;if(e=
a.image)e=b&&"ignore"!==g?"multiply"===g&&255===b.r&&255===b.g&&255===b.b&&1===b.a?!1:!0:!1;if(e){var c=a.image.width,n=a.image.height;z("edge")&&/\.svg$/i.test(d)&&(--c,--n);e=Math.ceil(m);var p=Math.ceil(h);var k=document.createElement("canvas");k.width=e;k.height=p;k.style.width=e+"px";k.style.height=p+"px";k=k.getContext("2d");k.clearRect(0,0,e,p);e=k;e.drawImage(a.image,0,0,c,n,0,0,m,h);p=e.getImageData(0,0,m,h);k=[b.r/255,b.g/255,b.b/255,b.a];const F=u.toHSV(b);for(let v=0;v<p.data.length;v+=
4){a=p.data;c=v;n=k;var q=F;switch(g){case "multiply":a[c+0]*=n[0];a[c+1]*=n[1];a[c+2]*=n[2];a[c+3]*=n[3];break;default:const r=u.toHSV({r:a[c+0],g:a[c+1],b:a[c+2]});r.h=q.h;r.s=q.s;r.v=r.v/100*q.v;q=u.toRGB(r);a[c+0]=q.r;a[c+1]=q.g;a[c+2]=q.b;a[c+3]*=n[3]}}e.putImageData(p,0,0);d=e.canvas.toDataURL("image/png")}else(e=w.id&&w.id.findCredential(d))&&e.token&&(a=d.includes("?")?"\x26":"?",d=`${d}${a}token=${e.token}`);return{url:d,width:m,height:h}}).catch(()=>({url:d,width:f,height:f}))};Object.defineProperties(t,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});