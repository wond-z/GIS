// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../core/Evented ../../../../../core/maybe ./config ./core ./jobs ./SymbolDeclutterer ./SymbolRepository ./util ../style/StyleDefinition".split(" "),function(k,l,h,m,n,q,r,t,u,v,w){h=function(p){function g(a,d){var b=p.call(this)||this;b.styleRepository=a;b._tileToHandle=new Map;b._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]};b._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]};b._completed=!1;b._symbolRepository=
new u.SymbolRepository(4096,d,()=>new q.VTLUniqueSymbol);b._symbolDeclutterer=new t.SymbolDeclutterer(d,b._symbolRepository,(c,f,x)=>new r.CollisionJob(c,f,x,b.styleRepository,b._zoom,b._viewState.rotation),(c,f)=>{c.allSymbolsFadingOut=!0;c.lastOpacityUpdate=f;v.writeOpacityToBuffers(c,f,!0);c.decluttered=!0;c.requestRender()},(c,f)=>b.styleRepository.getStyleLayerByUID(c.styleLayerUID).z-b.styleRepository.getStyleLayerByUID(f.styleLayerUID).z,c=>{c=b.styleRepository.getStyleLayerByUID(c);return b._zoom+
1E-6<c.minzoom||b._zoom-1E-6>=c.maxzoom?!1:(c=c.getLayoutProperty("visibility"))&&c.getValue()===w.Visibility.NONE?!1:!0});return b}l._inheritsLoose(g,p);var e=g.prototype;e.addTile=function(a){a.decluttered=!1;this._tileToHandle.set(a,a.on("symbols-changed",()=>{this._symbolRepository.add(a);this.restartDeclutter()}));this._symbolRepository.add(a);this.restartDeclutter()};e.removeTile=function(a){const d=this._tileToHandle.get(a);d&&(this._symbolRepository.removeTile(a),this.restartDeclutter(),d.remove(),
this._tileToHandle.delete(a))};e.update=function(a,d){this._zoom=a;this._viewState={scale:d.scale,rotation:d.rotation,center:[d.center[0],d.center[1]],size:[d.size[0],d.size[1]]};this._continueDeclutter();return this._completed};e.restartDeclutter=function(){this._completed=!1;this._symbolDeclutterer.restart();this._notifyUnstable()};e.clear=function(){this._completed=!1;this._symbolRepository=null;this._symbolDeclutterer.restart();this._tileToHandle.forEach(a=>a.remove());this._tileToHandle.clear()};
e.deleteStyleLayers=function(a){this._symbolRepository.deleteStyleLayers(a)};e._continueDeclutter=function(){if(!this._completed||this.stale)this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=
this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),(this._completed=this._symbolDeclutterer.continue(n.DECLUTTER_BUDGET))&&this._scheduleNotifyStable()};e._scheduleNotifyStable=function(){m.isSome(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle);this._stableNotificationHandle=setTimeout(()=>{this._stableNotificationHandle=null;this.emit("fade-complete")},1.5*n.FADE_DURATION)};
e._notifyUnstable=function(){m.isSome(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null);this.emit("fade-start")};l._createClass(g,[{key:"stale",get:function(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}}]);
return g}(h);k.SymbolFader=h;Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});