/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"./tslib.es6.js";import{c as t}from"./asyncUtils.js";import i from"../core/Handles.js";import{i as e,g as n,f as a,a as r,d as o}from"./maybe.js";import{throwIfAborted as l,isAbortError as c,isAborted as h}from"../core/promiseUtils.js";import{watch as y,sync as w,syncAndInitial as p,whenOnce as _}from"../core/reactiveUtils.js";import{property as V}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{I as d}from"./InteractiveToolViewModel.js";class m{constructor(s,t=null){this.screenPoint=s,this.result=t}}class v{constructor(s,t){this.scenePoint=s,this.mapPoint=t}}var O;!function(s){s[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING"}(O||(O={}));let A=class extends d{constructor(s={}){super(s),this.analysisView=null,this._reconnectViewTask=null,this._analysisBaseHandles=new i,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const t=s?.analysis;e(t)?this.analysis=t:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(s){const{analysis:t,...i}=s;return i}initialize(){this._analysisBaseHandles.add([y((()=>n(this.analysis,(({parent:s})=>s))),(s=>{this._parentChangeFromReconnect||s===this.view||this._set("isAnalysisOwner",!1);const t=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,t&&this._scheduleViewReconnect()}),w),y((()=>({view:this.view,ready:e(this.view)&&this.view.ready,supported:this.supported})),(({view:s},{view:t})=>{s!==t&&(this._startUserOperation=a(this._startUserOperation),this._disconnectFromView(t)),this._scheduleViewReconnect()}),p),y((()=>this.analysis.isEditable),((s,t)=>{r(this.analysisView)||(s&&!t&&r(this.tool)?this.createTool():!s&&t&&e(this.tool)&&!this.tool.active&&this.removeTool())}))])}destroy(){this._analysisBaseHandles=o(this._analysisBaseHandles),this._reconnectViewTask=a(this._reconnectViewTask),this._startUserOperation=a(this._startUserOperation),e(this.analysisView)&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),e(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(s){s!==this._get("analysis")&&(this._startUserOperation=a(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(s),this._scheduleViewReconnect())}get ready(){return e(this.analysisView)&&!this.connectingToView}get connectingToView(){return e(this._reconnectViewTask)}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(s){this._set("visible",s),e(this.analysisView)&&(this.analysisView.visible=s)}async start(){this.clear();const s={task:null,abort:null,state:O.PENDING},i=t((async t=>{s.state=O.WAIT_FOR_VIEW_READY,await _((()=>this.ready),t),s.state=O.RUNNING,this.createTool({interactive:!0})}));return s.task=i,s.abort=()=>i.abort(),this._startUserOperation=s,i.promise}clear(){this._startUserOperation=a(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(s){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=a(this._reconnectViewTask);const s=t((async t=>{try{await this._reconnectView(t)}catch(s){if(l(t),!c(s))return void this.logger.warn("Failed to use analysis in view model",s);throw s}finally{s===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=s}async _reconnectView(s){const{view:t}=this,i=e(t)&&t.ready&&this.supported,n=this.analysis;if(this._startUserOperation=T(this._startUserOperation),this._disconnectFromView(t),i&&!r(t)&&!r(n)){if(this.isAnalysisOwner){if(e(n.parent))return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,t.analyses.add(n)}this.analysisView=await t.whenAnalysisView(n),h(s)?this._startUserOperation=T(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(s){this.removeTool(),e(s)&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,s.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(s){e(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",s),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function T(s){return e(s)&&s.state>=O.RUNNING?(s.abort(),null):s}s([V({nonNullable:!0})],A.prototype,"analysis",null),s([V()],A.prototype,"analysisView",void 0),s([V()],A.prototype,"ready",null),s([V()],A.prototype,"connectingToView",null),s([V({readOnly:!0})],A.prototype,"isAnalysisOwner",null),s([V({type:Boolean,value:!0})],A.prototype,"visible",null),s([V()],A.prototype,"_reconnectViewTask",void 0),A=s([u("esri.widgets.support.InteractiveAnalysisViewModel")],A);export{A as I,v as P,m as a};
