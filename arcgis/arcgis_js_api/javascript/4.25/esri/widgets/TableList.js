// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Collection ../core/events ../core/Handles ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/decorators/cast ../core/accessorSupport/decorators/subclass ./Widget ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ./TableList/ListItem ./TableList/TableListViewModel ./TableList/support/tableListUtils ../chunks/sortable.esm".split(" "),
function(v,k,g,A,B,m,n,J,C,D,E,t,w,F,h,K,G,x,u,H){const I=g.ofType(G),y={statusIndicators:!0,errors:!1};g=function(z){function r(a,b){a=z.call(this,a,b)||this;a._handles=new B;a._sortable=null;a._sortableNode=null;a._focusSortUid=null;a.visibleItems=null;a.iconClass="esri-icon-table";a.messages=null;a.messagesCommon=null;a.multipleSelectionEnabled=!1;a.selectionEnabled=!1;a.selectedItems=new I;a.viewModel=new x;a.visibleElements={...y};return a}v._inheritsLoose(r,z);var e=r.prototype;e.initialize=
function(){this._setVisibleItems(this.tableItems);this.addHandles([m.watch(()=>this.visibleElements,()=>this._itemsChanged()),m.on(()=>this.viewModel.tableItems,"change",()=>this._itemsChanged()),m.watch(()=>this.selectionEnabled,()=>this._toggleSorting(),m.initial)])};e.destroy=function(){this._destroySortable();this._handles.destroy();this._handles=null};e.castVisibleElements=function(a){return{...y,...a}};e.triggerAction=function(a,b){return this.viewModel.triggerAction(a,b)};e.render=function(){const {visibleItems:a}=
this,b=this.viewModel?.state;return h.tsx("div",{class:this.classes("esri-table-list","esri-widget","esri-widget--panel",{["esri-hidden"]:"loading"===b,["esri-disabled"]:"disabled"===b})},a?.length?this.renderList():this.renderNoItems())};e.renderNoItems=function(){return h.tsx("div",{class:"esri-table-list__no-items"},this.messages.noItemsToDisplay)};e.renderList=function(){const {visibleItems:a,messages:b,selectionEnabled:c}=this;return h.tsx("ul",{"aria-label":b.widgetLabel,role:c?"listbox":void 0,
afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"data-node-ref":"_sortableNode",bind:this,class:this.classes("esri-table-list__list","esri-table-list__list--root")},a.map(d=>this.renderItem(d)).toArray())};e.renderItem=function(a){const {id:b,selectionEnabled:c,selectedItems:d}=this,f=`${`${b}_${a.uid}`}__title`,p={["esri-table-list__item--has-message"]:!!this._hasMessage(a),["esri-table-list__item--selectable"]:c};if(c){const l={["data-layer-uid"]:a.layer?.uid};return h.tsx("li",
{key:`item-with-selection-${a.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes("esri-table-list__item",p),"aria-labelledby":f,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":a,tabIndex:0,"aria-selected":u.findSelectedItem(a,d)?"true":"false",role:"option",...l},this.renderItemContent(a,f))}return h.tsx("li",{key:`item-no-selection-${a.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes("esri-table-list__item",
p),"aria-labelledby":f},this.renderItemContent(a,f))};e.renderActionsMenuIcon=function(a,b){const {messagesCommon:c}=this;return h.tsx("div",{key:"actions-menu-toggle","data-item":a,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes("esri-table-list__item-actions-menu-item",{["esri-table-list__item-actions-menu-item--active"]:a.actionsOpen}),tabindex:"0",role:"button","aria-controls":b,"aria-label":c.options,title:c.options},h.tsx("span",{"aria-hidden":"true",
class:"esri-icon-handle-horizontal"}))};e.renderActionsMenu=function(a,b,c,d){const f=(b=1===c&&this._getSingleActionButton(b))?this.renderAction({item:a,action:b,singleAction:!0}):null;return(a=!b&&c?this.renderActionsMenuIcon(a,d):null)||b?h.tsx("div",{key:"actions-menu",class:"esri-table-list__item-actions-menu"},f,a):null};e.renderItemMessage=function(a){return a.error?h.tsx("div",{key:"esri-table-list__error",class:"esri-table-list__item-message",role:"alert"},h.tsx("span",{"aria-hidden":"true",
class:"esri-icon-notice-triangle"}),this.messages.tableError):null};e.renderItemStatus=function(a){const {visibleElements:b}=this;if(!b.statusIndicators)return null;({publishing:a}=a);return h.tsx("span",{class:this.classes({["esri-table-list__publishing"]:a}),key:"layer-item-status"})};e.renderItemContent=function(a,b){var {id:c}=this;c=`${`${c}_${a.uid}`}_actions`;const d=this._filterActions(a.actionsSections),f=this._countActions(d);return[h.tsx("div",{key:"list-item-container",class:"esri-table-list__item-container"},
this.renderTitle(a,b),this.renderItemStatus(a),this.renderActionsMenu(a,d,f,c)),this.renderItemMessage(a),f?this.renderActionsSections(a,d,c):null]};e.renderTitle=function(a,b){const {messages:c}=this;return h.tsx("span",{key:"layer-title-container",id:b,class:"esri-table-list__item-title"},a.title||c.untitledTable)};e.renderActionsSections=function(a,b,c){b=b.toArray().map((d,f)=>h.tsx("ul",{key:`${a}-action-section-${f}`,class:"esri-table-list__item-actions-list"},this.renderActionSection(a,d)));
return h.tsx("div",{role:"group","aria-expanded":a.actionsOpen?"true":"false",key:"actions-section",id:c,class:"esri-table-list__item-actions",hidden:a.actionsOpen?null:!0},b)};e.renderActionSection=function(a,b){return(b&&b.toArray()).map(c=>this.renderAction({item:a,action:c}))};e.renderActionIcon=function(a){const {active:b,className:c}=a,d=this._getIconImageStyles(a);a="button"!==a.type||a.image||c?c:"esri-icon-default-action";const f={["esri-table-list__item-action-image"]:!b&&!!d["background-image"],
["esri-icon-loading-indicator"]:b,["esri-rotating"]:b};a&&!b&&(f[a]=!0);return h.tsx("span",{key:"action-icon","aria-hidden":"true",class:this.classes("esri-table-list__item-action-icon",f),styles:d})};e.renderActionTitle=function(a,b){return b?null:h.tsx("span",{key:"action-title",class:"esri-table-list__item-action-title"},a)};e.renderAction=function(a){const {item:b,action:c,singleAction:d}=a,{active:f,disabled:p,title:l}=c;a={["esri-table-list__item-actions-menu-item"]:d&&"button"===c.type,["esri-table-list__item-action"]:f||
!d&&"toggle"!==c.type,["esri-table-list__action-toggle"]:!f&&"toggle"===c.type,["esri-table-list__action-toggle--on"]:!f&&"toggle"===c.type&&c.value,["esri-disabled-element"]:p};const q=[this.renderActionIcon(c),this.renderActionTitle(l,d)];return d?h.tsx("div",{bind:this,"data-item":b,"data-action":c,role:"button",key:`single-action-${c.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",title:l,"aria-label":l},q):h.tsx("li",{bind:this,"data-item":b,"data-action":c,
key:`action-${c.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",role:"button",title:l,"aria-label":l},q)};e._hasMessage=function(a){return!!a.error};e._filterActions=function(a){return a.map(b=>b.filter(c=>c.visible))};e._setVisibleItems=function(a){this.visibleItems=a?.filter(b=>!b.hidden&&(this.visibleElements.errors||!b.error))};e._destroySortable=function(){const {_sortable:a}=this;a&&a.destroy();this._sortable=null};e._toggleSorting=function(){const {_sortable:a,
_sortableNode:b,selectionEnabled:c}=this;if(b)if(a)a.option("disabled",!c);else{const d=H.Sortable.create(b,{dataIdAttr:"data-layer-uid",group:"root-tables",fallbackTolerance:4,disabled:!c,onSort:()=>this._sortTablesToItems(d.toArray()),chosenClass:"esri-table-list__item--chosen"});this._sortable=d}};e._sortNodeCreated=function(a){this._sortableNode=a;this._toggleSorting()};e._sortTablesToItems=function(a){const b=this.map?.tables;b&&b.sort((c,d)=>{c=a.indexOf(c.uid);d=a.indexOf(d.uid);return c>d?
-1:c<d?1:0})};e._getSingleActionButton=function(a){return a.reduce(b=>b).filter(b=>b&&"button"===b.type).getItemAt(0)};e._focusListItem=function(a){const {_focusSortUid:b}=this;a&&b&&a["data-item"].layer?.uid===b&&(a.focus(),this._focusSortUid=null)};e._watchActionSectionChanges=function(a,b){const c="action-section"+b;this._handles.add(a.on("change",()=>this.scheduleRender()),c);a.forEach(d=>this._renderOnActionChanges(d,b))};e._renderOnActionChanges=function(a,b){b="actions"+b;const c=()=>this.scheduleRender();
"toggle"===a.type?this._handles.add([m.watch(()=>[a.className,a.image,a.id,a.title,a.visible,a.value],c,m.initial)],b):"slider"===a.type?this._handles.add([m.watch(()=>[a.className,a.id,a.title,a.visible,a.value,a.displayValueEnabled,a.max,a.min,a.step],c,m.initial)],b):this._handles.add([m.watch(()=>[a.className,a.image,a.id,a.title,a.visible],c,m.initial)],b)};e._renderOnItemChanges=function(a){const b=a.uid,c="items"+b,d=()=>this.scheduleRender();this._handles.add([m.watch(()=>[a.actionsOpen,a.title,
a.error,a.publishing],d,m.initial),m.watch(()=>[a.hidden,a.error],()=>this._setVisibleItems(this.tableItems)),a.actionsSections.on("change",d)],c);a.actionsSections.forEach(f=>this._watchActionSectionChanges(f,b))};e._itemsChanged=function(){const {tableItems:a}=this.viewModel;this._setVisibleItems(a);this._handles.removeAll();a.forEach(b=>this._renderOnItemChanges(b));this.scheduleRender()};e._countActions=function(a){return a.reduce((b,c)=>b+c.length,0)};e._getIconImageStyles=function(a){a="esri.support.Action.ActionButton"===
a.declaredClass||"esri.support.Action.ActionToggle"===a.declaredClass?a.image:null;return{"background-image":a?`url("${a}")`:null}};e._selectionKeydown=function(a){var b=A.eventKey(a);if(["ArrowDown","ArrowUp"].includes(b)){a.stopPropagation();var c=a.currentTarget["data-item"],{_sortable:d,selectedItems:f}=this,p=u.findSelectedItem(c,f),l=d.toArray();a=l.indexOf(a.target.dataset.layerUid);if(-1!==a){if("ArrowDown"===b){const q=a+1;if(q>=l.length)return;p?(l.splice(q,0,l.splice(a,1)[0]),d.sort(l),
this._sortTablesToItems(d.toArray()),this._focusSortUid=c.layer?.uid):(this._focusSortUid=c.layer?.uid,this.scheduleRender())}"ArrowUp"===b&&(b=a-1,-1>=b||(p?(l.splice(b,0,l.splice(a,1)[0]),d.sort(l),this._sortTablesToItems(d.toArray()),this._focusSortUid=c.layer?.uid):(this._focusSortUid=c.layer?.uid,this.scheduleRender())))}}else this._toggleSelection(a)};e._toggleActionsOpen=function(a){const b=a.currentTarget["data-item"];var {actionsOpen:c}=b;(c=!c)&&this.tableItems.forEach(d=>{const {actionsOpen:f}=
d;f&&(d.actionsOpen=!1)});b.actionsOpen=c;a.stopPropagation()};e._triggerAction=function(a){var b=a.currentTarget;const c=b["data-action"];b=b["data-item"];"toggle"===c.type&&(c.value=!c.value);this.triggerAction(c,b);a.stopPropagation()};e._toggleSelection=function(a){a.stopPropagation();const {multipleSelectionEnabled:b,selectedItems:c}=this,d=b&&(a.metaKey||a.ctrlKey);a=a.currentTarget["data-item"];const f=u.findSelectedItem(a,c),{length:p}=c,l=f&&1===p;d?f?c.remove(f):c.add(a):p&&!l?(c.removeAll(),
c.add(a)):f?c.remove(f):c.add(a)};v._createClass(r,[{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"listItemCreatedFunction",get:function(){return this.viewModel.listItemCreatedFunction},set:function(a){this.viewModel.listItemCreatedFunction=a}},{key:"map",get:function(){return this.viewModel.map},set:function(a){this.viewModel.map=a}},{key:"tableItems",get:function(){return this.viewModel.tableItems}}]);return r}(E);k.__decorate([n.property()],
g.prototype,"visibleItems",void 0);k.__decorate([n.property()],g.prototype,"iconClass",void 0);k.__decorate([n.property()],g.prototype,"label",null);k.__decorate([n.property()],g.prototype,"listItemCreatedFunction",null);k.__decorate([n.property()],g.prototype,"map",null);k.__decorate([n.property(),w.messageBundle("esri/widgets/TableList/t9n/TableList")],g.prototype,"messages",void 0);k.__decorate([n.property(),w.messageBundle("esri/t9n/common")],g.prototype,"messagesCommon",void 0);k.__decorate([n.property()],
g.prototype,"multipleSelectionEnabled",void 0);k.__decorate([n.property()],g.prototype,"selectionEnabled",void 0);k.__decorate([n.property()],g.prototype,"selectedItems",void 0);k.__decorate([n.property({readOnly:!0})],g.prototype,"tableItems",null);k.__decorate([F.vmEvent("trigger-action"),n.property({type:x})],g.prototype,"viewModel",void 0);k.__decorate([n.property()],g.prototype,"visibleElements",void 0);k.__decorate([C.cast("visibleElements")],g.prototype,"castVisibleElements",null);k.__decorate([t.accessibleHandler()],
g.prototype,"_toggleActionsOpen",null);k.__decorate([t.accessibleHandler()],g.prototype,"_triggerAction",null);k.__decorate([t.accessibleHandler()],g.prototype,"_toggleSelection",null);return g=k.__decorate([D.subclass("esri.widgets.TableList")],g)});