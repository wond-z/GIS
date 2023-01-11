/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../core/Handles.js";import{L as t}from"./Logger.js";import{r as s,i}from"./maybe.js";import{a as r,P as a,M as n}from"../core/scheduling.js";import{isAborted as h,createAbortError as u,isPromiseLike as _,when as o}from"../core/promiseUtils.js";import{watch as d,initial as l,when as c}from"../core/reactiveUtils.js";import{O as E}from"./ObservableValue.js";import{d as T}from"./debugFlags2.js";class g{constructor(){this._tasks=new Array,this._running=new E(!1)}get length(){return this._tasks.length}get running(){return this._running.get()}destroy(){this.cancelAll()}runTask(e){for(;!e.done&&this._process(e);)e.madeProgress()}push(e,t,s){return this._running.set(!0),new Promise(((i,r)=>this._tasks.push(new m(i,r,e,t,s))))}unshift(e,t,s){return this._running.set(!0),new Promise(((i,r)=>this._tasks.unshift(new m(i,r,e,t,s))))}_process(e){if(0===this._tasks.length)return!1;const t=this._tasks.shift();try{const s=h(t.signal);if(s&&!t.abortCallback)t.reject(u());else{const i=s?t.abortCallback?.(u()):t.callback(e);_(i)?i.then(t.resolve,t.reject):t.resolve(i)}}catch(e){t.reject(e)}return this._running.set(this._tasks.length>0),!0}cancelAll(){const e=u();for(const t of this._tasks)if(t.abortCallback){const s=t.abortCallback(e);t.resolve(s)}else t.reject(e);this._tasks.length=0,this._running.set(!1)}}class m{constructor(e,t,s,i,r){this.resolve=e,this.reject=t,this.callback=s,this.signal=i,this.abortCallback=r}}var I,R;function f(){return new O.Scheduler}!function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(I||(I={})),function(e){e.RESOURCE_CONTROLLER="schedule",e.SLIDE="slide",e.STREAM_DATA_LOADER="stream loader",e.ELEVATION_QUERY="elevation query",e.TERRAIN_SURFACE="terrain",e.SURFACE_GEOMETRY_UPDATES="surface geometry updates",e.GRAPHICS_CORE="Graphics3D",e.I3S_CONTROLLER="I3S",e.POINT_CLOUD_LAYER="point cloud",e.FEATURE_TILE_FETCHER="feature fetcher",e.OVERLAY="overlay",e.STAGE="stage",e.GRAPHICS_DECONFLICTOR="graphics deconflictor",e.FILTER_VISIBILITY="Graphics3D filter visibility",e.SCALE_VISIBILITY="Graphics3D scale visibility",e.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",e.POINT_OF_INTEREST_FREQUENT="POI frequent",e.POINT_OF_INTEREST_INFREQUENT="POI infrequent",e.LABELER="labeler",e.FEATURE_QUERY_ENGINE="feature query",e.FEATURE_TILE_TREE="feature tile tree",e.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",e.ELEVATION_ALIGNMENT="elevation alignment",e.TEXT_TEXTURE_ATLAS="text texture atlas",e.TEXTURE_UNLOAD="texture unload",e.LINE_OF_SIGHT_TOOL="line of sight tool",e.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",e.ELEVATION_PROFILE="elevation profile",e.SNAPPING="snapping",e.SHADOW_ACCUMULATOR="shadow accumulator",e.CLOUDS_GENERATOR="cloud generator",e[e.TEST_PRIO=1]="TEST_PRIO"}(R||(R={}));const A=new Map([[R.RESOURCE_CONTROLLER,0],[R.SLIDE,0],[R.STREAM_DATA_LOADER,0],[R.ELEVATION_QUERY,0],[R.TERRAIN_SURFACE,1],[R.SURFACE_GEOMETRY_UPDATES,1],[R.GRAPHICS_CORE,2],[R.I3S_CONTROLLER,2],[R.POINT_CLOUD_LAYER,2],[R.FEATURE_TILE_FETCHER,2],[R.OVERLAY,4],[R.STAGE,4],[R.GRAPHICS_DECONFLICTOR,4],[R.FILTER_VISIBILITY,4],[R.SCALE_VISIBILITY,4],[R.FRUSTUM_VISIBILITY,4],[R.CLOUDS_GENERATOR,4],[R.POINT_OF_INTEREST_FREQUENT,6],[R.POINT_OF_INTEREST_INFREQUENT,30],[R.LABELER,8],[R.FEATURE_QUERY_ENGINE,8],[R.FEATURE_TILE_TREE,16],[R.FEATURE_TILE_TREE_ACTIVE,0],[R.ELEVATION_ALIGNMENT,12],[R.TEXT_TEXTURE_ATLAS,12],[R.TEXTURE_UNLOAD,12],[R.LINE_OF_SIGHT_TOOL,16],[R.LINE_OF_SIGHT_TOOL_INTERACTIVE,0],[R.SNAPPING,0],[R.SHADOW_ACCUMULATOR,30]]);function p(e){return A.has(e)?A.get(e):"number"==typeof e?e:1}const b=n(6.5),k=n(1),L=n(30),S=n(1e3/30),N=n(100);var O,U;!function(h){h.Scheduler=class{constructor(){this._updating=new E(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new r("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new _,this._state=I.INTERACTING,this._tasks=new a,this._runQueue=new a,this._load=0,this._idleStateCallbacks=new a,this._idleUpdatesStartFired=!1,this._maxReschedule=32,this._forceTask=!1,this._debug=!1,this._debugHandle=d((()=>T.SCHEDULER_LOG_SLOW_TASKS),(e=>this._debug=e),l);for(const e of Object.keys(R))this.performanceInfo.tasks.set(R[e],new r(R[e]));const e=this;this._test={FRAME_SAFETY_BUDGET:b,INTERACTING_BUDGET:S,IDLE_BUDGET:N,get availableBudget(){return e._budget.budget},usedBudget:0,getBudget:()=>e._budget,setBudget:t=>e._budget=t,updateTask:e=>this._updateTask(e),getState:e=>this._getState(e),getRuntime:e=>this._getRuntime(e),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}get updating(){return this._updating.get()}set updating(e){this._updating.set(e)}destroy(){this._tasks.toArray().forEach((e=>e.remove())),this._tasks.clear(),s(this._debugHandle),this._microTaskQueued=!1,this._updating.set(!1)}activate(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask((()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=32,this._schedule(),this.frame()))})))}registerTask(e,t){const s=p(e),i=new u(this,e,t,s);return this._tasks.push(i),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new r(e)),i}registerIdleStateCallbacks(e,t){const s={idleBegin:e,idleEnd:t};this._idleStateCallbacks.push(s),this.state===I.IDLE&&this._idleUpdatesStartFired&&s.idleBegin();const i=this;return{remove:()=>this._removeIdleStateCallbacks(s),set idleBegin(e){i._idleUpdatesStartFired&&(s.idleEnd(),i._state===I.IDLE&&e()),s.idleBegin=e},set idleEnd(e){s.idleEnd=e}}}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,this.state!==I.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll((e=>e.idleEnd()))))}get state(){return this._state}updateBudget(e){this._test.usedBudget=0,++this._frameNumber;let t=b,s=e.frameDuration,i=k;switch(this.state){case I.IDLE:t=n(0),s=n(Math.max(N,e.frameDuration)),i=L;break;case I.INTERACTING:s=n(Math.max(S,e.frameDuration));case I.ANIMATING:}return s=n(s-e.elapsedFrameTime-t),this.state!==I.IDLE&&s<k&&!this._forceTask?(this._forceTask=!0,!1):(s=n(Math.max(s,i)),this._budget.reset(s,this.state),this._maxReschedule=32,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case I.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll((e=>e.idleBegin()))),this._runIdle();break;case I.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(n(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e)}_updateTask(e){this._tasks.forAll((t=>{t.name===e&&t.setPriority(e)}))}_getState(e){if(this._runQueue.some((t=>t.name===e)))return U.SCHEDULED;let t=U.IDLE;return this._tasks.forAll((s=>{s.name===e&&s.needsUpdate&&(s.schedulePriority<=1?t=U.READY:t!==U.READY&&(t=U.WAITING))})),t}_getRuntime(e){let t=0;return this._tasks.forAll((s=>{s.name===e&&(t+=s.runtime)})),t}_resetRuntimes(){this._tasks.forAll((e=>e.runtime=0))}_getRunning(){const e=new Map;if(this._tasks.forAll((t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)})),0===e.size)return null;let t="";return e.forEach(((e,s)=>{t+=e>1?` ${e}x ${s}`:` ${s}`})),t}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce(((e,t)=>t.needsUpdate?++e:e),0);this._load=.9*this._load+e*(1-.9)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace((e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1))),this._tasks.forAll((e=>{0===e.basePriority&&e.needsUpdate&&!this._runQueue.includes(e)&&this._runQueue.unshift(e)}));0===this._runQueue.length;){let e=!1,t=0;if(this._tasks.forAll((s=>{!s.needsUpdate||0===s.schedulePriority||0===s.basePriority||s.task.runOncePerFrame&&s.lastFrameRun===this._frameNumber||(e=!0,t=Math.max(t,s.basePriority),1===s.schedulePriority?(s.schedulePriority=0,this._runQueue.push(s)):--s.schedulePriority)})),!e)return this._updating.set(!1),!1;--this._maxReschedule}return this._updating.set(!0),!0}_run(){const e=this._budget.now();this._startFrameTaskTimes();do{for(;this._runQueue.length>0;){const s=this._budget.now(),i=this._runQueue.pop();this._budget.resetProgress();try{i.task.runTask(this._budget)}catch(e){t.getLogger("esri.views.support.Scheduler").error(`Exception in task "${i.name}"`,e)}i.schedulePriority=i.basePriority,i.lastFrameRun=this._frameNumber;const r=this._budget.now()-s;if(i.runtime+=r,this._frameTaskTimes.set(i.priority,this._frameTaskTimes.get(i.priority)+r),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",i.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updating.set(this._tasks.some((e=>e.needsUpdate))),void this._recordFrameTaskTimes(this._budget.now()-e)}}while(this._schedule());this._updating.set(this._tasks.some((e=>e.needsUpdate))),this._recordFrameTaskTimes(this._budget.now()-e)}_startFrameTaskTimes(){for(const e of Object.keys(R))this._frameTaskTimes.set(R[e],0)}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach(((e,t)=>this.performanceInfo.tasks.get(t).record(e))),this.performanceInfo.total.record(e)}get test(){return this._test}};class u{constructor(t,s,r,a){this._scheduler=t,this.name=s,this._basePriority=a,this.lastFrameRun=0,this.runtime=0,this._queue=new g,this._handles=new e,this.schedulePriority=this._basePriority,this._task=new E(i(r)?r:this._queue),this._handles.add(c((()=>this.task.running),(()=>t.activate())))}get task(){return this._task.get()}get updating(){return this._queue.running}remove(){this.processQueue(P),this._scheduler.removeTask(this),this.schedule=C.schedule,this.reschedule=C.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(e){this.name=e;const t=p(e);0!==this._basePriority&&0===this.schedulePriority||(this.schedulePriority=t),this._basePriority=t}get priority(){return this.name}set priority(e){this.setPriority(e)}get needsUpdate(){return this.updating||this.task.running}schedule(e,t,s){return this._queue.push(e,t,s)}reschedule(e,t,s){return this._queue.unshift(e,t,s)}processQueue(e){this._queue.runTask(e)}}class _{constructor(){this._begin="undefined"!=typeof performance?performance.now():0,this._budget=0,this._state=I.IDLE,this._done=!1,this._enabled=!0}run(e){return!this.done&&(!0===e()&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){this._done=this.elapsed>=this._budget&&this._enabled}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,t){this._begin=this.now(),this._budget=e,this._state=t,this._done=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return performance.now()-this._begin}resetProgress(){this._done=!1}get hasProgressed(){return this._done}}h.Budget=_}(O||(O={})),function(e){e.SCHEDULED="s",e.READY="r",e.WAITING="w",e.IDLE="i"}(U||(U={}));const P=(()=>{const e=new O.Budget;return e.enabled=!1,e})(),C=new class{remove(){}processQueue(){}schedule(e,t,s){try{if(h(t)){const e=u();return s?Promise.resolve(s(e)):Promise.reject(e)}return o(e(P))}catch(e){return Promise.reject(e)}}reschedule(e,t,s){return this.schedule(e,t,s)}};export{C as I,g as P,I as R,R as T,f as a,P as n};
