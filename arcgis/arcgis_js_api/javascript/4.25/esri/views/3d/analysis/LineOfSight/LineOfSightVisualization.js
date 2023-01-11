// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../Color ../../../../core/Accessor ../../../../core/Handles ../../../../core/handleUtils ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../core/support/WatchUpdatingTracking ../../interactive/visualElements/LineVisualElement ../../interactive/visualElements/PointVisualElement".split(" "),
function(e,E,l,f,I,J,K,k,L,n,W,X,M,N,y,g,O,z,F){e.LineOfSightVisualization=function(G){function v(a){a=G.call(this,a)||this;a._lineOfSightVisualizations=[];a._computationHandles=new J;a._updatingHandles=new O.WatchUpdatingTracking;return a}E._inheritsLoose(v,G);var h=v.prototype;h.initialize=function(){this.addHandles(this._connectComputations());this._createObserverVisualization()};h.destroy=function(){this._updatingHandles=k.destroyMaybe(this._updatingHandles);this._computationHandles=k.destroyMaybe(this._computationHandles);
this._observerVisualElement=k.destroyMaybe(this._observerVisualElement)};h._createLineOfSightVisualization=function(){var a=this._configuration,b=this.view,c={view:b,attached:!0,width:a.outerWidth,innerWidth:a.innerWidth},d=f.toUnitRGBA(a.visibleOuterColor);const t=f.toUnitRGBA(a.visibleInnerColor);var u=f.toUnitRGBA(a.occludedOuterColor);const A=f.toUnitRGBA(a.occludedInnerColor),B=f.toUnitRGBA(a.undefinedOuterColor);a=f.toUnitRGBA(a.undefinedInnerColor);d=new z.LineVisualElement({...c,color:d,innerColor:t});
u=new z.LineVisualElement({...c,color:u,innerColor:A});c=new z.LineVisualElement({...c,color:B,innerColor:a});b=new F.PointVisualElement({view:b,attached:!0,...H,size:8});b={visibleLineVisualElement:d,occludedLineVisualElement:u,undefinedLineVisualElement:c,targetVisualElement:b};this._lineOfSightVisualizations.push(b);return b};h._destroyLineOfSightVisualization=function(a){a.visibleLineVisualElement=k.destroyMaybe(a.visibleLineVisualElement);a.occludedLineVisualElement=k.destroyMaybe(a.occludedLineVisualElement);
a.undefinedLineVisualElement=k.destroyMaybe(a.undefinedLineVisualElement);a.targetVisualElement=k.destroyMaybe(a.targetVisualElement);this._lineOfSightVisualizations.splice(this._lineOfSightVisualizations.indexOf(a),1)};h._updateLineOfSightVisualization=function(a,b,c){const d=this._configuration,{computationResult:t,inputPoints:u}=a,{start:A,end:B,intersection:P,isValid:Q,isTargetVisible:R}=t;var {observer:m}=u;const q=S;q[12]=m[0];q[13]=m[1];q[14]=m[2];const C=y.subtract(T,A,m),D=y.subtract(U,B,
m);m=y.subtract(V,P,m);const {visibleLineVisualElement:p,occludedLineVisualElement:w,undefinedLineVisualElement:x,targetVisualElement:r}=b;b=k.isNone(this.analysisViewData.elevationAlignedObserver)||k.isNone(a.elevationAlignedTargetLocation);b=this.visible&&!b;p.visible=b;w.visible=b;x.visible=b;r.visible=b;r.attached=!c.interactiveAndEditable;b&&(p.geometry=null,w.geometry=null,x.geometry=null,r.geometry=a.elevationAlignedTargetLocation,Q?R?(p.geometry=[[g.fromArray(C),g.fromArray(D)]],p.transform=
q,p.color=f.toUnitRGBA(d.visibleOuterColor),r.color=f.toUnitRGBA(d.visibleInnerColor)):(p.geometry=[[g.fromArray(C),g.fromArray(m)]],p.transform=q,p.color=f.toUnitRGBA(d.occludedOuterColor),w.geometry=[[g.fromArray(m),g.fromArray(D)]],w.transform=q,r.color=f.toUnitRGBA(d.occludedInnerColor)):(x.geometry=[[g.fromArray(C),g.fromArray(D)]],x.transform=q,r.color=f.toUnitRGBA(d.undefinedInnerColor)))};h._getLineOfSightVisualizationDependencies=function(a){({computationResult:a}=a);const {occludedOuterColor:b,
visibleOuterColor:c}=this._configuration;return{computationResult:a,occludedOuterColor:b,visibleOuterColor:c,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}};h._connectComputation=function(a){const b=this._computationHandles;if(!b.has(a)){var c=this._createLineOfSightVisualization();b.add([this._updatingHandles.add(()=>this._getLineOfSightVisualizationDependencies(a),d=>this._updateLineOfSightVisualization(a,c,d),{initial:!0,equals:()=>!1}),K.makeHandle(()=>this._destroyLineOfSightVisualization(c))],
a)}};h._disconnectComputation=function(a){this._computationHandles.remove(a)};h._connectComputations=function(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,a=>this._onComputationsCollectionChange(a),{initial:!0,final:!0})};h._onComputationsCollectionChange=function({added:a,removed:b}){for(const c of b)this._disconnectComputation(c);for(const c of a)this._connectComputation(c)};h._createObserverVisualization=function(){const a=f.toUnitRGBA(this._configuration.visibleInnerColor),
b=new F.PointVisualElement({view:this.view,attached:!1,color:a,...H});this._observerVisualElement=b;this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:c,interactiveAndEditable:d,visible:t})=>{k.isNone(c)||d||!t?b.attached=!1:(b.geometry=c,this._observerVisualElement.attached=!0)},L.initial))};E._createClass(v,[{key:"visible",get:function(){return this.analysisViewData.visible}},
{key:"updating",get:function(){return this._updatingHandles.updating}},{key:"interactiveAndEditable",get:function(){return this.analysisViewData.interactive&&this.analysisViewData.editable}},{key:"testInfo",get:function(){return{visualizations:this._lineOfSightVisualizations}}},{key:"_configuration",get:function(){return this.analysisViewData.configuration}}]);return v}(I);l.__decorate([n.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"analysis",void 0);l.__decorate([n.property({constructOnly:!0})],
e.LineOfSightVisualization.prototype,"analysisViewData",void 0);l.__decorate([n.property({constructOnly:!0})],e.LineOfSightVisualization.prototype,"view",void 0);l.__decorate([n.property({readOnly:!0})],e.LineOfSightVisualization.prototype,"visible",null);l.__decorate([n.property()],e.LineOfSightVisualization.prototype,"updating",null);l.__decorate([n.property()],e.LineOfSightVisualization.prototype,"interactiveAndEditable",null);l.__decorate([n.property()],e.LineOfSightVisualization.prototype,"testInfo",
null);l.__decorate([n.property()],e.LineOfSightVisualization.prototype,"_configuration",null);e.LineOfSightVisualization=l.__decorate([M.subclass("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],e.LineOfSightVisualization);const H={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},T=g.create(),U=g.create(),V=g.create(),S=N.create();Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});