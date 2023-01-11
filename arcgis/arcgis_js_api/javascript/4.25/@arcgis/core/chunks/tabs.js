/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{p as t,H as e,h as i,F as o}from"../widgets/Widget.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const a=t(class extends e{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.layout="inline",this.position="top",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}render(){return i(o,null,i("slot",{name:"tab-nav"}),i("section",null,i("slot",null)))}calciteInternalTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter((e=>e!==t.detail)),this.registryHandler(),t.stopPropagation()}calciteInternalTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter((e=>e!==t.detail)),this.registryHandler(),t.stopPropagation()}async registryHandler(){let t,e;if(this.tabs.some((t=>t.tab))||this.titles.some((t=>t.tab)))t=this.tabs.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id)),e=this.titles.sort(((t,e)=>t.tab.localeCompare(e.tab))).map((t=>t.id));else{const i=await Promise.all(this.tabs.map((t=>t.getTabIndex()))),o=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=i.reduce(((t,e,i)=>(t[e]=this.tabs[i].id,t)),[]),e=o.reduce(((t,e,i)=>(t[e]=this.titles[i].id,t)),[])}this.tabs.forEach((i=>i.updateAriaInfo(t,e))),this.titles.forEach((i=>i.updateAriaInfo(t,e)))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=below])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position=below]) ::slotted(calcite-tab-nav){margin-block-start:-1px}:host([bordered][position=below]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=below]){flex-direction:column-reverse}:host([position=bottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position=below]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position=below]:not([bordered])) section{border-block-end-style:solid}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=below][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}"}},[1,"calcite-tabs",{layout:[513],position:[513],scale:[513],bordered:[1540],titles:[32],tabs:[32]},[[0,"calciteInternalTabTitleRegister","calciteInternalTabTitleRegister"],[16,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteInternalTabRegister","calciteInternalTabRegister"],[16,"calciteTabUnregister","calciteTabUnregister"]]]);function r(){"undefined"!=typeof customElements&&["calcite-tabs"].forEach((t=>{"calcite-tabs"===t&&(customElements.get(t)||customElements.define(t,a))}))}r();export{a as T,r as d};
