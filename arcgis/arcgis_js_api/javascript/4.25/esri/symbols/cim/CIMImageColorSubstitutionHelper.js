// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["../../Color"],function(v){return function(){function h(){}var k=h.prototype;k.applyColorSubstituition=function(a,b){if(!b)return a;this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));const {width:e,height:f}=a,d=this._rasterizationCanvas,g=d.getContext("2d");a!==d&&(d.width=e,d.height=f,g.drawImage(a,0,0,e,f));a=g.getImageData(0,0,e,f).data;if(b)for(var c of b)if(c&&c.oldColor&&4===c.oldColor.length&&c.newColor&&4===c.newColor.length){const [l,m,n,p]=c.oldColor,
[q,r,t,u]=c.newColor;if(l!==q||m!==r||n!==t||p!==u)for(b=0;b<a.length;b+=4)l===a[b]&&m===a[b+1]&&n===a[b+2]&&p===a[b+3]&&(a[b]=q,a[b+1]=r,a[b+2]=t,a[b+3]=u)}c=new ImageData(a,e,f);g.putImageData(c,0,0);return d};k.tintImageData=function(a,b){if(!b)return a;this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));const {width:e,height:f}=a,d=this._rasterizationCanvas,g=d.getContext("2d");a!==d&&(d.width=e,d.height=f,g.drawImage(a,0,0,e,f));a=g.getImageData(0,0,e,f);a=
new Uint8Array(a.data);b=new v(b);b=[b.r/255,b.g/255,b.b/255,b.a];for(let c=0;c<a.length;c+=4)a[c+0]*=b[0],a[c+1]*=b[1],a[c+2]*=b[2],a[c+3]*=b[3];a=new ImageData(new Uint8ClampedArray(a.buffer),e,f);g.putImageData(a,0,0);return d};return h}()});