import{s as Fe}from"./index-CDf8eZgd.js";import{u as P}from"./editor-store-DDVxmyrP.js";import{s as xe}from"./index-7N8pAeDB.js";import{b as de,a as ot,s as ee}from"./index-Ljzkmy5v.js";import{B as oe,o as r,c as y,e as m,x as L,I as J,v as we,U as Pe,ay as lt,au as at,F as E,i as G,f as _,J as Te,as as be,W as Oe,an as ke,ao as it,ap as je,h as V,t as Q,az as re,aq as ve,H as $e,aA as st,w as $,d as z,p as pe,n as Ce,ah as X,r as k,m as H,Q as F,j as v,b as u,aB as ge,K as rt,s as A,g as Y,aC as ct,L as ne,k as Ue,ag as ut,a as dt,ai as pt,u as gt,N as mt,av as ft}from"./index-CD-RZOao.js";import{s as De}from"./index-BYgAk61S.js";import{s as ht}from"./index-CYFlAKNq.js";import{a as Me,L as vt}from"./logo-DmpzTU2D.js";import{a as ce,t as bt}from"./types-BFkr_7U1.js";import{a as ue,t as yt}from"./types-DJ0WXos9.js";import{a as U}from"./index-B30go9wG.js";import{q as Re,_ as Ee}from"./index-CRPTfEZ2.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as D}from"./index-D7vQivom.js";import{s as Se}from"./index-DBBDKR6P.js";import{s as Ve}from"./index-idliys3V.js";import{s as Ie,a as Be}from"./index-BPDWqoRL.js";import{s as _t}from"./index-Bud1m6Kw.js";import{s as qe}from"./index--GUMkJdz.js";import{b as ye,_ as xt,c as wt,M as kt,d as $t,e as Ct}from"./QuestionStep.vue_vue_type_script_setup_true_lang-CbKTwjD_.js";import{_ as St}from"./LocaleSwitcher.vue_vue_type_script_setup_true_lang-g5WItcu9.js";import{_ as Vt}from"./SavedCloud.vue_vue_type_script_setup_true_lang-CtSeIUxQ.js";import{u as It,m as Bt}from"./useSortable-2mXvMU8g.js";import"./index-CuINv_ZP.js";import"./index-DBceM-0I.js";import"./index-CHdp4beW.js";import"./index-DL9t1mXc.js";import"./index-Br50DpRh.js";var Lt=function(n){var e=n.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: `).concat(e("toggleswitch.handle.background"),`;
    color: `).concat(e("toggleswitch.handle.color"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    inset-inline-start: `).concat(e("toggleswitch.gap"),`;
    margin-block-start: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", inset-inline-start ").concat(e("toggleswitch.slide.duration"),", box-shadow ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.color"),`;
    inset-inline-start: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
    color: `).concat(e("toggleswitch.handle.checked.hover.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},zt={root:{position:"relative"}},Pt={root:function(n){var e=n.instance,i=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":i.disabled,"p-invalid":e.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Tt=oe.extend({name:"toggleswitch",theme:Lt,classes:Pt,inlineStyles:zt}),Ot={name:"BaseToggleSwitch",extends:de,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Tt,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},Le={name:"ToggleSwitch",extends:Ot,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.writeValue(e,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var e,i;this.$emit("blur",n),(e=(i=this.formField).onBlur)===null||e===void 0||e.call(i,n)}},computed:{checked:function(){return this.d_value===this.trueValue}}},At=["data-p-checked","data-p-disabled"],Ft=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function jt(t,n,e,i,l,o){return r(),y("div",L({class:t.cx("root"),style:t.sx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-disabled":t.disabled}),[m("input",L({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:o.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":o.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||(n[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:n[2]||(n[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,Ft),m("div",L({class:t.cx("slider")},o.getPTOptions("slider")),[m("div",L({class:t.cx("handle")},o.getPTOptions("handle")),[J(t.$slots,"handle",{checked:o.checked})],16)],16)],16,At)}Le.render=jt;var Ke={name:"BanIcon",extends:we};function Ut(t,n,e,i,l,o){return r(),y("svg",L({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[m("path",{d:"M7 0C5.61553 0 4.26215 0.410543 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532846 4.32122C0.00303296 5.6003 -0.13559 7.00776 0.134506 8.36563C0.404603 9.7235 1.07129 10.9708 2.05026 11.9497C3.02922 12.9287 4.2765 13.5954 5.63437 13.8655C6.99224 14.1356 8.3997 13.997 9.67879 13.4672C10.9579 12.9373 12.0511 12.0401 12.8203 10.889C13.5895 9.73785 14 8.38447 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM1.16667 7C1.16549 5.65478 1.63303 4.35118 2.48889 3.31333L10.6867 11.5111C9.83309 12.2112 8.79816 12.6544 7.70243 12.789C6.60669 12.9236 5.49527 12.744 4.49764 12.2713C3.50001 11.7986 2.65724 11.0521 2.06751 10.1188C1.47778 9.18558 1.16537 8.10397 1.16667 7ZM11.5111 10.6867L3.31334 2.48889C4.43144 1.57388 5.84966 1.10701 7.29265 1.1789C8.73565 1.2508 10.1004 1.85633 11.1221 2.87795C12.1437 3.89956 12.7492 5.26435 12.8211 6.70735C12.893 8.15034 12.4261 9.56856 11.5111 10.6867Z",fill:"currentColor"},null,-1)]),16)}Ke.render=Ut;var He={name:"StarIcon",extends:we};function Dt(t,n,e,i,l,o){return r(),y("svg",L({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[m("path",{d:"M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z",fill:"currentColor"},null,-1)]),16)}He.render=Dt;var Ne={name:"StarFillIcon",extends:we};function Mt(t,n,e,i,l,o){return r(),y("svg",L({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),n[0]||(n[0]=[m("path",{d:"M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z",fill:"currentColor"},null,-1)]),16)}Ne.render=Mt;var Rt=function(n){var e=n.dt;return`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: `.concat(e("rating.gap"),`;
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background `).concat(e("rating.transition.duration"),", color ").concat(e("rating.transition.duration"),", border-color ").concat(e("rating.transition.duration"),", outline-color ").concat(e("rating.transition.duration"),", box-shadow ").concat(e("rating.transition.duration"),`;
}

.p-rating-option.p-focus-visible {
    box-shadow: `).concat(e("rating.focus.ring.shadow"),`;
    outline: `).concat(e("rating.focus.ring.width")," ").concat(e("rating.focus.ring.style")," ").concat(e("rating.focus.ring.color"),`;
    outline-offset: `).concat(e("rating.focus.ring.offset"),`;
}

.p-rating-icon {
    color: `).concat(e("rating.icon.color"),`;
    transition: background `).concat(e("rating.transition.duration"),", color ").concat(e("rating.transition.duration"),", border-color ").concat(e("rating.transition.duration"),", outline-color ").concat(e("rating.transition.duration"),", box-shadow ").concat(e("rating.transition.duration"),`;
    font-size: `).concat(e("rating.icon.size"),`;
    width: `).concat(e("rating.icon.size"),`;
    height: `).concat(e("rating.icon.size"),`;
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: `).concat(e("rating.icon.hover.color"),`;
}

.p-rating-option-active .p-rating-icon {
    color: `).concat(e("rating.icon.active.color"),`;
}

.p-rating-icon.p-invalid { /* @todo */
    stroke: `).concat(e("rating.invalid.icon.color"),`;
}
`)},Et={root:function(n){var e=n.props;return["p-rating",{"p-readonly":e.readonly,"p-disabled":e.disabled}]},option:function(n){var e=n.instance,i=n.value;return["p-rating-option",{"p-rating-option-active":i<=e.d_value,"p-focus-visible":i===e.focusedOptionIndex&&e.isFocusVisibleItem}]},onIcon:function(n){var e=n.instance;return["p-rating-icon p-rating-on-icon",{"p-invalid":e.$invalid}]},offIcon:function(n){var e=n.instance;return["p-rating-icon p-rating-off-icon",{"p-invalid":e.$invalid}]}},qt=oe.extend({name:"rating",theme:Rt,classes:Et}),Kt={name:"BaseRating",extends:de,props:{readonly:{type:Boolean,default:!1},stars:{type:Number,default:5},onIcon:{type:String,default:void 0},offIcon:{type:String,default:void 0}},style:qt,provide:function(){return{$pcRating:this,$parentInstance:this}}},Ge={name:"Rating",extends:Kt,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{d_name:this.name,focusedOptionIndex:-1,isFocusVisibleItem:!0}},watch:{name:function(n){this.d_name=n||Pe()}},mounted:function(){this.d_name=this.d_name||Pe()},methods:{getPTOptions:function(n,e){return this.ptm(n,{context:{active:e<=this.d_value,focused:e===this.focusedOptionIndex}})},onOptionClick:function(n,e){if(!this.readonly&&!this.disabled){this.onOptionSelect(n,e),this.isFocusVisibleItem=!1;var i=lt(n.currentTarget);i&&at(i)}},onFocus:function(n,e){this.focusedOptionIndex=e,this.$emit("focus",n)},onBlur:function(n){var e,i;this.focusedOptionIndex=-1,this.$emit("blur",n),(e=(i=this.formField).onBlur)===null||e===void 0||e.call(i)},onChange:function(n,e){this.onOptionSelect(n,e),this.isFocusVisibleItem=!0},onOptionSelect:function(n,e){this.focusedOptionIndex===e||this.d_value===e?(this.focusedOptionIndex=-1,this.updateModel(n,null)):(this.focusedOptionIndex=e,this.updateModel(n,e||null))},updateModel:function(n,e){this.writeValue(e,n),this.$emit("change",{originalEvent:n,value:e})},starAriaLabel:function(n){return n===1?this.$primevue.config.locale.aria.star:this.$primevue.config.locale.aria.stars.replace(/{star}/g,n)}},components:{StarFillIcon:Ne,StarIcon:He,BanIcon:Ke}},Ht=["onClick","data-p-active","data-p-focused"],Nt=["value","name","checked","disabled","readonly","aria-label","onFocus","onChange"];function Gt(t,n,e,i,l,o){return r(),y("div",L({class:t.cx("root")},t.ptmi("root")),[(r(!0),y(E,null,G(t.stars,function(a){return r(),y("div",L({key:a,class:t.cx("option",{value:a}),onClick:function(d){return o.onOptionClick(d,a)},ref_for:!0},o.getPTOptions("option",a),{"data-p-active":a<=t.d_value,"data-p-focused":a===l.focusedOptionIndex}),[m("span",L({class:"p-hidden-accessible",ref_for:!0},t.ptm("hiddenOptionInputContainer"),{"data-p-hidden-accessible":!0}),[m("input",L({type:"radio",value:a,name:l.d_name,checked:t.d_value===a,disabled:t.disabled,readonly:t.readonly,"aria-label":o.starAriaLabel(a),onFocus:function(d){return o.onFocus(d,a)},onBlur:n[0]||(n[0]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:function(d){return o.onChange(d,a)},ref_for:!0},t.ptm("hiddenOptionInput")),null,16,Nt)],16),a<=t.d_value?J(t.$slots,"onicon",{key:0,value:a,class:be(t.cx("onIcon"))},function(){return[(r(),_(Te(t.onIcon?"span":"StarFillIcon"),L({class:[t.cx("onIcon"),t.onIcon],ref_for:!0},t.ptm("onIcon")),null,16,["class"]))]}):J(t.$slots,"officon",{key:1,value:a,class:be(t.cx("offIcon"))},function(){return[(r(),_(Te(t.offIcon?"span":"StarIcon"),L({class:[t.cx("offIcon"),t.offIcon],ref_for:!0},t.ptm("offIcon")),null,16,["class"]))]})],16,Ht)}),128))],16)}Ge.render=Gt;var Zt=function(n){var e=n.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(e("togglebutton.color"),`;
    background: `).concat(e("togglebutton.background"),`;
    border: 1px solid `).concat(e("togglebutton.border.color"),`;
    padding: `).concat(e("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(e("togglebutton.transition.duration"),", color ").concat(e("togglebutton.transition.duration"),", border-color ").concat(e("togglebutton.transition.duration"),`,
        outline-color `).concat(e("togglebutton.transition.duration"),", box-shadow ").concat(e("togglebutton.transition.duration"),`;
    border-radius: `).concat(e("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(e("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(e("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(e("togglebutton.transition.duration"),", color ").concat(e("togglebutton.transition.duration"),", border-color ").concat(e("togglebutton.transition.duration"),`,
            outline-color `).concat(e("togglebutton.transition.duration"),", box-shadow ").concat(e("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(e("togglebutton.content.left"),`;
    inset-block-start: `).concat(e("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(e("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(e("togglebutton.content.top"),`));
    border-radius: `).concat(e("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(e("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(e("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(e("togglebutton.hover.background"),`;
    color: `).concat(e("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(e("togglebutton.checked.background"),`;
    border-color: `).concat(e("togglebutton.checked.border.color"),`;
    color: `).concat(e("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(e("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(e("togglebutton.focus.ring.width")," ").concat(e("togglebutton.focus.ring.style")," ").concat(e("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(e("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(e("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(e("togglebutton.disabled.background"),`;
    border-color: `).concat(e("togglebutton.disabled.border.color"),`;
    color: `).concat(e("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(e("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(e("togglebutton.sm.padding"),`;
    font-size: `).concat(e("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(e("togglebutton.lg.padding"),`;
    font-size: `).concat(e("togglebutton.lg.font.size"),`;
}
`)},Wt={root:function(n){var e=n.instance,i=n.props;return["p-togglebutton p-component",{"p-togglebutton-checked":e.active,"p-invalid":e.$invalid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Yt=oe.extend({name:"togglebutton",theme:Zt,classes:Wt}),Jt={name:"BaseToggleButton",extends:de,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Yt,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},Ze={name:"ToggleButton",extends:Jt,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{active:this.active,disabled:this.disabled}})},onChange:function(n){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,n),this.$emit("change",n))},onBlur:function(n){var e,i;(e=(i=this.formField).onBlur)===null||e===void 0||e.call(i,n)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return Oe(this.onLabel)&&Oe(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:ke}},Qt=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function Xt(t,n,e,i,l,o){var a=it("ripple");return je((r(),y("button",L({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:n[0]||(n[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":t.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":t.disabled}),[m("span",L({class:t.cx("content")},o.getPTOptions("content")),[J(t.$slots,"default",{},function(){return[J(t.$slots,"icon",{value:t.d_value,class:be(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(r(),y("span",L({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},o.getPTOptions("icon")),null,16)):V("",!0)]}),m("span",L({class:t.cx("label")},o.getPTOptions("label")),Q(o.label),17)]})],16)],16,Qt)),[[a]])}Ze.render=Xt;var en=function(n){var e=n.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(e("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(e("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(e("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(e("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},tn={root:function(n){var e=n.instance;return["p-selectbutton p-component",{"p-invalid":e.$invalid}]}},nn=oe.extend({name:"selectbutton",theme:en,classes:tn}),on={name:"BaseSelectButton",extends:de,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:nn,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function ln(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=We(t))||n){e&&(t=e);var i=0,l=function(){};return{s:l,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(c){throw c},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,a=!0,p=!1;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return a=c.done,c},e:function(c){p=!0,o=c},f:function(){try{a||e.return==null||e.return()}finally{if(p)throw o}}}}function an(t){return cn(t)||rn(t)||We(t)||sn()}function sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(t,n){if(t){if(typeof t=="string")return _e(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_e(t,n):void 0}}function rn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function cn(t){if(Array.isArray(t))return _e(t)}function _e(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,i=Array(n);e<n;e++)i[e]=t[e];return i}var Ye={name:"SelectButton",extends:on,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(n){return this.optionLabel?re(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?re(n,this.optionValue):n},getOptionRenderKey:function(n){return this.dataKey?re(n,this.dataKey):this.getOptionLabel(n)},isOptionDisabled:function(n){return this.optionDisabled?re(n,this.optionDisabled):!1},onOptionSelect:function(n,e,i){var l=this;if(!(this.disabled||this.isOptionDisabled(e))){var o=this.isSelected(e);if(!(o&&!this.allowEmpty)){var a=this.getOptionValue(e),p;this.multiple?o?p=this.d_value.filter(function(d){return!ve(d,a,l.equalityKey)}):p=this.d_value?[].concat(an(this.d_value),[a]):[a]:p=o?null:a,this.writeValue(p,n),this.$emit("change",{event:n,value:p})}}},isSelected:function(n){var e=!1,i=this.getOptionValue(n);if(this.multiple){if(this.d_value){var l=ln(this.d_value),o;try{for(l.s();!(o=l.n()).done;){var a=o.value;if(ve(a,i,this.equalityKey)){e=!0;break}}}catch(p){l.e(p)}finally{l.f()}}}else e=ve(this.d_value,i,this.equalityKey);return e}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:ke},components:{ToggleButton:Ze}},un=["aria-labelledby"];function dn(t,n,e,i,l,o){var a=$e("ToggleButton");return r(),y("div",L({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root")),[(r(!0),y(E,null,G(t.options,function(p,d){return r(),_(a,{key:o.getOptionRenderKey(p),modelValue:o.isSelected(p),onLabel:o.getOptionLabel(p),offLabel:o.getOptionLabel(p),disabled:t.disabled||o.isOptionDisabled(p),unstyled:t.unstyled,size:t.size,onChange:function(h){return o.onOptionSelect(h,p,d)},pt:t.ptm("pcToggleButton")},st({_:2},[t.$slots.option?{name:"default",fn:$(function(){return[J(t.$slots,"option",{option:p,index:d},function(){return[m("span",L({ref_for:!0},t.ptm("pcToggleButton").label),Q(o.getOptionLabel(p)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","onChange","pt"])}),128))],16,un)}Ye.render=dn;var pn=function(n){var e=n.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},gn={root:function(n){var e=n.instance,i=n.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":i.autoResize,"p-textarea-sm p-inputfield-sm":i.size==="small","p-textarea-lg p-inputfield-lg":i.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},mn=oe.extend({name:"textarea",theme:pn,classes:gn}),fn={name:"BaseTextarea",extends:ot,props:{autoResize:Boolean},style:mn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},Je={name:"Textarea",extends:fn,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){n.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return L(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},hn=["value","disabled","aria-invalid"];function vn(t,n,e,i,l,o){return r(),y("textarea",L({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:n[0]||(n[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,hn)}Je.render=vn;const bn={class:"p-4 h-full overflow-y-scroll"},yn={key:0},_n={key:1,class:"flex flex-col gap-4"},xn={class:"relative flex flex-grow justify-center items-center dashed-border h-48"},wn={key:0,class:"flex justify-end"},kn={key:2,class:"flex justify-start gap-2"},$n=z({__name:"LessonCard",setup(t){const{locale:n}=pe(),e=Ce(),i=P(),{lesson:l}=X(i),{setCardSaving:o}=i,a=k(null),p=k(null),d=k(["freemium","premium","hackaton","demo"]);H(()=>{var g;a.value=((g=l.value)==null?void 0:g.cover_image)??""}),F([()=>{var g;return(g=l.value)==null?void 0:g.title},()=>{var g;return(g=l.value)==null?void 0:g.description},()=>{var g;return(g=l.value)==null?void 0:g.level},a,()=>{var g;return(g=l.value)==null?void 0:g.is_guidable},()=>{var g;return(g=l.value)==null?void 0:g.access_type}],()=>{o(!0),h()},{deep:!0});async function c(g){const f=g.files[0],b=new FormData;b.append("file",f);try{const{data:I}=await U.uploadFile(b);a.value=I.presigned_url,p.value=I.full_gif_url}catch(I){console.log(I)}}const h=Re(()=>{s()},1e3,{maxWait:5e3});async function s(){var g,f;o(!0);try{e.name=="project-edit"?(await ce.updateProjectByID(l.value.id,((g=a.value)==null?void 0:g.toString())??"",p.value??"",l.value.is_guidable,l.value.access_type,l.value.level),await ce.updateProjectTranslationByID(l.value.id,n.value,l.value.title,l.value.description)):e.name=="module-edit"&&(await ue.updateModuleByID(l.value.id,((f=a.value)==null?void 0:f.toString())??"",l.value.access_type),await ue.updateModuleTranslationByID(l.value.id,n.value,l.value.title))}catch(b){console.log(b)}finally{o(!1)}}return(g,f)=>{const b=Me,I=ht,O=Ge,j=ee,q=De,M=Je,Z=Le,S=xe;return r(),y("div",bn,[v(l)?(r(),y("div",_n,[m("div",xn,[a.value?(r(),_(b,{key:0,src:a.value.toString(),alt:"Image",class:"absolute top-0 left-0 rounded-xl object-cover h-48 w-full"},null,8,["src"])):V("",!0),u(I,{mode:"basic",onSelect:c,customUpload:"",auto:"",severity:"secondary","choose-icon":a.value==null?"pi pi-plus":"pi pi-pencil","choose-label":a.value==null?"Choose":"Edit",class:"p-button-outlined absolute top-0 left-0"},null,8,["choose-icon","choose-label"])]),v(e).name=="project-edit"?(r(),y("div",wn,[u(O,{id:"level",modelValue:v(l).level,"onUpdate:modelValue":f[0]||(f[0]=x=>v(l).level=x)},null,8,["modelValue"])])):V("",!0),u(q,{variant:"on",class:"w-full"},{default:$(()=>[f[5]||(f[5]=m("label",{for:"title"},"Title",-1)),u(j,{id:"title",modelValue:v(l).title,"onUpdate:modelValue":f[1]||(f[1]=x=>v(l).title=x),class:"w-full",size:"small"},null,8,["modelValue"])]),_:1}),v(e).name=="project-edit"?(r(),_(q,{key:1,variant:"on",class:"w-full"},{default:$(()=>[f[6]||(f[6]=m("label",{for:"description"},"Description",-1)),u(M,{id:"description",modelValue:v(l).description,"onUpdate:modelValue":f[2]||(f[2]=x=>v(l).description=x),rows:"3",class:"w-full"},null,8,["modelValue"])]),_:1})):V("",!0),v(e).name=="project-edit"?(r(),y("div",kn,[u(Z,{modelValue:v(l).is_guidable,"onUpdate:modelValue":f[3]||(f[3]=x=>v(l).is_guidable=x)},null,8,["modelValue"]),f[7]||(f[7]=m("div",{class:"text-base"},"Guidable",-1))])):V("",!0),u(S,{modelValue:v(l).access_type,"onUpdate:modelValue":f[4]||(f[4]=x=>v(l).access_type=x),options:d.value,placeholder:"Set Access",class:"w-full",size:"small"},null,8,["modelValue","options"])])):(r(),y("div",yn,"Null"))])}}}),Cn=le($n,[["__scopeId","data-v-3a965ebc"]]),Sn={class:"flex items-center"},Vn=z({__name:"AnswerPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ge(t,"modelValue");return(e,i)=>{const l=ee,o=D;return r(),_(o,{header:"Answer"},{default:$(()=>[m("div",Sn,[u(l,{id:"answer",modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>n.value=a),placeholder:"Enter answer",class:"w-full",size:"small"},null,8,["modelValue"])])]),_:1})}}}),In={class:"flex items-start"},Bn=z({__name:"MdEditor",props:{content:{},index:{}},setup(t){const n=P(),{saveContent:e,removeContent:i}=n,l=t,o=k(""),a=()=>{i(l.index)};H(()=>{o.value=l.content.text??"none"}),F(o,()=>{e(o.value,null,l.index)});const p=rt({title:{title:"Title",icon:"v-md-icon-tip",action(c){c.insert(h=>{const s="# <center>",g="</center>",b=h||"Title";return{text:`${s}${b}${g}`,selected:b}})}},icons:{title:"icons",icon:"v-md-icon-tip",menus:[{name:"Attention",text:"Attention",action(c){c.insert(()=>{const h='<span style="font-size: 20px">',s="</span>",g="⚠️";return{text:`${h}${g}${s}`,selected:g}})}},{name:"PiBody",text:"PiBody",action(c){c.insert(()=>{const h="<b>",s="</b>",g='<span style="color: #FF3F85"> Pi</span>Body';return{text:`${h}${g}${s}`,selected:g}})}},{name:"Run",text:"Run",action(c){c.insert(()=>({text:"▶️<b>Run</b>"}))}}]},style:{title:"Style",icon:"v-md-icon-tip",action(c){c.insert(h=>{const s='<span style="">',g="</span>",b=h||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},underline:{title:"Underline",icon:"v-md-icon-under-line",action(c){c.insert(h=>{const s='<span style="text-decoration: underline">',g="</span>",b=h||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},tip:{title:"Tip",icon:"v-md-icon-tip",action(c){c.insert(h=>{const s='<div style="background-color:#F3F5F7; padding: 20px; border-left: solid 8px #42B983">',g="</div>",b=h||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}},note:{title:"Note",icon:"v-md-icon-tip",action(c){c.insert(h=>{const s='<div style="background-color:#F3F5F7; padding: 15px; border-left: solid 8px #FFCD6B; margin-bottom: 15px">',g="</div>",b=h||"placeholder";return{text:`${s}${b}${g}`,selected:b}})}}});async function d(c,h,s){const g=s[0],f=new FormData;f.append("file",g);try{const{data:b}=await U.uploadFile(f),I=b.presigned_url;h({url:I,desc:"desc",width:"auto",height:"auto"})}catch(b){console.log(b)}}return(c,h)=>{const s=$e("v-md-editor"),g=A;return r(),y("div",In,[u(s,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=f=>o.value=f),mode:"edit","left-toolbar":"undo redo clear | tip emoji todo-list | h bold italic strikethrough quote ul ol table hr link code image | title icons style underline tip note","right-toolbar":"",toolbar:p,"disabled-menus":[],onUploadImage:d},null,8,["modelValue","toolbar"]),u(g,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",class:"ml-2",onClick:a})])}}}),Ln=le(Bn,[["__scopeId","data-v-2e4065c3"]]),zn={class:"flex items-center"},Pn=z({__name:"VideoEditor",props:{content:{},index:{}},setup(t){const n=t,e=P(),{saveContent:i,removeContent:l}=e,o=k(""),a=()=>{l(n.index)};return H(()=>{o.value=n.content.text??""}),F(o,()=>{i(o.value,null,n.index)}),(p,d)=>{const c=ee,h=A;return r(),y("div",zn,[u(c,{id:"video",modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=s=>o.value=s),placeholder:"Enter video url",class:"w-full mr-2",size:"small"},null,8,["modelValue"]),u(h,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:a})])}}}),Tn={class:"flex flex-col gap-2"},On=z({__name:"ContentsPanel",props:{contents:{},stepType:{}},setup(t){const n=t,e=P(),{addContent:i}=e,l=k(),o=k([{label:"Text",icon:"pi pi-align-left",command:()=>{i("text")}},{label:"Video",icon:"pi pi-play",command:()=>{i("video")}}]),a=p=>{l.value.toggle(p)};return(p,d)=>{const c=A,h=Ve,s=D;return r(),_(s,{header:"Contents"},{default:$(()=>[m("div",Tn,[(r(!0),y(E,null,G(n.contents,(g,f)=>(r(),y("div",{key:g.id},[g.type=="text"?(r(),_(Ln,{key:0,content:g,index:f},null,8,["content","index"])):g.type=="video"?(r(),_(Pn,{key:1,content:g,index:f},null,8,["content","index"])):V("",!0)]))),128))]),u(c,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:a,"aria-haspopup":"true","aria-controls":"overlay_menu"}),u(h,{ref_key:"menu",ref:l,id:"overlay_menu",model:o.value,popup:!0},null,8,["model"])]),_:1})}}}),An={class:"flex items-center"},Fn=z({__name:"OptionEditor",props:{option:{},index:{}},setup(t){const n=P(),{saveOption:e,removeOption:i}=n,l=t,o=k(""),a=k(!1),p=()=>{i(l.index)};return H(()=>{o.value=l.option.text??"",a.value=l.option.correct}),F([o,a],()=>{e(o.value,a.value,l.index)}),(d,c)=>{const h=_t,s=Ie,g=ee,f=Be,b=A;return r(),y("div",An,[u(f,null,{default:$(()=>[u(s,null,{default:$(()=>[u(h,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=I=>a.value=I),binary:!0},null,8,["modelValue"])]),_:1}),u(g,{placeholder:"Option",modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=I=>o.value=I),size:"small"},null,8,["modelValue"])]),_:1}),u(b,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),jn={class:"flex flex-col gap-2"},Ae=z({__name:"OptionsPanel",props:{options:{},guidable:{type:Boolean}},setup(t){const n=t,e=P(),{addOption:i}=e;return(l,o)=>{const a=Se,p=A,d=D;return r(),_(d,{header:n.guidable?"Checklist":"Options"},{default:$(()=>[n.guidable?V("",!0):(r(),_(a,{key:0,size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:$(()=>o[0]||(o[0]=[Y("*Create options and select correct ones ")])),_:1})),m("div",jn,[(r(!0),y(E,null,G(n.options,(c,h)=>(r(),y("div",{key:c.id},[u(Fn,{option:c,index:h},null,8,["option","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(i)},null,8,["onClick"])]),_:1},8,["header"])}}}),Un={class:"flex items-center"},Dn=z({__name:"PairEditor",props:{pair:{},index:{}},setup(t){const n=P(),{savePair:e,removePair:i}=n,l=t,o=k(""),a=k(""),p=()=>{i(l.index)};return H(()=>{o.value=l.pair.key,a.value=l.pair.value}),F([o,a],()=>{e(o.value,a.value,l.index)}),(d,c)=>{const h=ee,s=Ie,g=Be,f=A;return r(),y("div",Un,[u(g,null,{default:$(()=>[u(h,{placeholder:"Key",modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=b=>o.value=b),size:"small"},null,8,["modelValue"]),u(s,null,{default:$(()=>c[2]||(c[2]=[m("div",null,"=",-1)])),_:1}),u(h,{placeholder:"Value",modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=b=>a.value=b),size:"small"},null,8,["modelValue"])]),_:1}),u(f,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),Mn={class:"flex flex-col gap-2"},Rn=z({__name:"PairsPanel",props:{pairs:{}},setup(t){const n=t,e=P(),{addPair:i}=e;return(l,o)=>{const a=Se,p=A,d=D;return r(),_(d,{header:"Pairs"},{default:$(()=>[u(a,{size:"small",severity:"warn",variant:"simple",class:"mb-2"},{default:$(()=>o[0]||(o[0]=[Y("*Create matching pairs")])),_:1}),m("div",Mn,[(r(!0),y(E,null,G(n.pairs,(c,h)=>(r(),y("div",{key:c.id},[u(Dn,{pair:c,index:h},null,8,["pair","index"])]))),128))]),u(p,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(i)},null,8,["onClick"])]),_:1})}}}),En={class:"flex-grow dashed-border"},qn=z({__name:"SolutionPanel",props:ct({skipSubmit:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const n=ge(t,"modelValue"),e=t;return F(()=>e.skipSubmit,()=>{e.skipSubmit&&(n.value="")}),(i,l)=>{const o=D;return r(),_(o,{header:"Solution code"},{default:$(()=>[m("div",En,[u(Ee,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a)},null,8,["modelValue"])])]),_:1})}}}),Kn=le(qn,[["__scopeId","data-v-5f094cb3"]]),Hn={class:"flex-grow dashed-border"},Nn=z({__name:"StartingPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ge(t,"modelValue");return(e,i)=>{const l=D;return r(),_(l,{header:"Starting code"},{default:$(()=>[m("div",Hn,[u(Ee,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o)},null,8,["modelValue"])])]),_:1})}}}),Gn=le(Nn,[["__scopeId","data-v-c3c10a28"]]),Zn={class:"flex flex-col gap-2"},Wn={class:"flex items-center"},Yn={class:"flex items-center"},Jn=z({__name:"ActionsPanel",props:{userActions:{},platformActions:{}},setup(t){const n=t,e=P(),{saveUserActions:i,savePlatformActions:l}=e,o=k(null),a=k(null),p=k(["put-module","run-code"]),d=k(["code2ide","light-up","auto-run","auto-put","hide-ide","hide-sim"]);return H(()=>{o.value=n.userActions||null,a.value=n.platformActions||null}),F([o,a],()=>{i(o.value),l(a.value)}),F([()=>n.userActions,()=>n.platformActions],()=>{o.value=n.userActions||null,a.value=n.platformActions||null}),(c,h)=>{const s=qe,g=D;return r(),_(g,{header:"Actions"},{default:$(()=>[m("div",Zn,[m("div",Wn,[u(s,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=f=>o.value=f),display:"chip",options:p.value,placeholder:"Select user actions",class:"w-full"},null,8,["modelValue","options"])]),m("div",Yn,[u(s,{modelValue:a.value,"onUpdate:modelValue":h[1]||(h[1]=f=>a.value=f),display:"chip",options:d.value,placeholder:"Select platform actions",class:"w-full"},null,8,["modelValue","options"])])])]),_:1})}}}),Qn={class:"flex items-center"},Xn=z({__name:"HighlightEditor",props:{highlight:{},index:{}},setup(t){const n=P(),{saveHighlight:e,removeHighlight:i}=n,l=t,o=k(null),a=k(null),p=()=>{i(l.index)};H(()=>{o.value=l.highlight.module,a.value=l.highlight.slot}),F([o,a],()=>{o.value==null||a.value==null||e(o.value,a.value,l.index)});const d=k(["A","B","C","D","E","F"]),c=k(["8","9"]),h=k(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]),s=ne(()=>o.value?o.value==="servo"?c.value:d.value:[...d.value,...c.value]),g=ne(()=>a.value?a.value==="8"||a.value==="9"?["servo"]:h.value.filter(f=>f!=="servo"):h.value);return(f,b)=>{const I=xe,O=Ie,j=Be,q=A;return r(),y("div",Qn,[u(j,null,{default:$(()=>[u(I,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=M=>o.value=M),options:g.value,placeholder:"Select module",class:"place-content-center",size:"small"},null,8,["modelValue","options"]),u(O,{class:"h-[35px]"},{default:$(()=>b[2]||(b[2]=[m("div",null,"=>",-1)])),_:1}),u(I,{modelValue:a.value,"onUpdate:modelValue":b[1]||(b[1]=M=>a.value=M),options:s.value,placeholder:"Select slot",size:"small"},null,8,["modelValue","options"])]),_:1}),u(q,{icon:"pi pi-trash",variant:"text",severity:"danger","aria-label":"Remove",onClick:p,class:"ml-2"})])}}}),eo={class:"flex flex-col gap-2"},to=z({__name:"HighlightPanel",props:{highlights:{}},setup(t){const n=t,e=P(),{addHighlight:i}=e;return(l,o)=>{const a=A,p=D;return r(),_(p,{header:"Highlight slots & modules"},{default:$(()=>[m("div",eo,[(r(!0),y(E,null,G(n.highlights,(d,c)=>(r(),y("div",{key:d.id},[u(Xn,{highlight:d,index:c},null,8,["highlight","index"])]))),128))]),u(a,{icon:"pi pi-plus",variant:"text","aria-label":"Add",class:"self-center mt-2",onClick:v(i)},null,8,["onClick"])]),_:1})}}}),no=z({__name:"ModulesPanel",props:{modelValue:{required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(t){const n=ge(t,"modelValue"),e=k(["LED","switch","push-button","light-sensor","touch-sensor","potentiometer","encoder","motion-detector","microphone","climate-sensor","gyro-accel","buzzer","color-sensor","joystick","distance-sensor","servo"]);return(i,l)=>{const o=qe,a=D;return r(),_(a,{header:"Modules"},{default:$(()=>[u(o,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=p=>n.value=p),display:"chip",options:e.value,placeholder:"Select modules",class:"w-full"},null,8,["modelValue","options"])]),_:1})}}}),oo={class:"font-bold"},lo={class:"flex gap-2 flex-wrap"},ao=z({__name:"TestsPanel",props:{tests:{}},setup(t){const n=P(),e=t,i=Ue(),{lesson:l,stepIndex:o}=X(n),a=()=>{var d;if(o.value==null)return;const p=(d=l.value)==null?void 0:d.steps[o.value].id;i.push({path:`/tester/${p}/`})};return(p,d)=>{const c=A,h=D;return r(),_(h,{header:"Tests"},{header:$(()=>[m("div",oo,[d[0]||(d[0]=Y(" Tests ")),u(c,{icon:"pi pi-pen-to-square",severity:"info",variant:"text",rounded:"","aria-label":"Edit",onClick:a})])]),default:$(()=>[m("div",lo,[(r(!0),y(E,null,G(e.tests,s=>(r(),y("div",{key:s.url,class:"border p-2 px-4 rounded shadow"},Q(s.name),1))),128))])]),_:1})}}}),io={class:"flex items-center justify-between w-full"},so={class:"flex flex-col gap-2"},ro={class:"flex items-center"},co={class:"flex justify-between"},uo={class:"flex gap-2"},po={class:"flex justify-between items-center gap-4"},go={class:"flex items-center justify-end gap-2 mb-8 mt-4"},mo=z({__name:"StepEditor",setup(t){const{locale:n}=pe(),e=ut(),i=P(),{lesson:l,stepIndex:o}=X(i),{removeStep:a,setStepSaving:p,setStep:d}=i,c=k(!1),h=k(["freemium","premium","hackaton","demo"]),s=ne(()=>{var S;return o.value==null?null:((S=l.value)==null?void 0:S.steps[o.value])??null}),g=Re(()=>{f()},1e3,{maxWait:5e3});F(s,(S,x)=>{S==null||x==null||S.id==x.id&&(p(!0),g())},{deep:!0});async function f(){if(s.value!=null){p(!0);try{await U.updateStepTranslationByID(s.value.id,n.value,s.value.title,s.value.inner),await U.updateStepByID(s.value.id,s.value.access_type,s.value.skip_submit,s.value.type)}catch(S){console.log(S)}finally{p(!1)}}}function b(){e.require({message:"Are you sure you want to Delete?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Delete",severity:"danger"},accept:()=>{I()}})}async function I(){if(!(c.value||s.value==null)){c.value=!0;try{await U.deleteStepByID(s.value.id),a()}catch(S){console.log(S)}finally{c.value=!1}}}function O(S){e.require({message:"Are you sure you want to Copy step?",header:"Confirmation",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptProps:{label:"Copy"},accept:()=>j(S)})}async function j(S){var N;if(s.value==null)return;const x=await ye({id:(N=s.value)==null?void 0:N.id,last_edited_time:"",step_type:s.value.type,last_edited_by:0,access_type:s.value.access_type,skip_submit:s.value.skip_submit},S,!1);d(x),f()}const q=k(),M=ne(()=>[n.value==="en"?null:{label:"Copy this step from ENG",icon:"pi pi-clone",command:()=>O("en")},n.value==="ru"?null:{label:"Copy this step from RUS",icon:"pi pi-clone",command:()=>O("ru")},n.value==="kk"?null:{label:"Copy this step from KAZ",icon:"pi pi-clone",command:()=>O("kk")}].filter(S=>S!==null)),Z=S=>{q.value.toggle(S)};return(S,x)=>{var w,K;const N=A,me=Ve,ae=ee,fe=De,te=Se,ie=Le,se=Ye,C=D;return s.value?(r(),y("div",{class:"flex flex-col gap-2 overflow-scroll h-full p-4",key:s.value.id},[u(C,{header:"Info",class:"mb-2"},{header:$(()=>[m("div",io,[x[7]||(x[7]=m("span",{class:"font-semibold"},"Info",-1)),u(N,{icon:"pi pi-download",variant:"text",onClick:Z}),u(me,{ref_key:"menu",ref:q,id:"overlay_menu",model:M.value,popup:!0},null,8,["model"])])]),default:$(()=>[m("div",so,[m("div",ro,[u(fe,{variant:"on",class:"w-full"},{default:$(()=>[x[8]||(x[8]=m("label",{for:"title"},"Title",-1)),u(ae,{id:"title",modelValue:s.value.title,"onUpdate:modelValue":x[0]||(x[0]=B=>s.value.title=B),"aria-describedby":"username-help",class:"w-full",size:"small"},null,8,["modelValue"])]),_:1})]),m("div",co,[u(te,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>[Y(Q(s.value.type),1)]),_:1}),m("div",uo,[u(te,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>x[9]||(x[9]=[Y("skip submit")])),_:1}),u(ie,{modelValue:s.value.skip_submit,"onUpdate:modelValue":x[1]||(x[1]=B=>s.value.skip_submit=B)},null,8,["modelValue"])])]),m("div",po,[u(te,{size:"small",severity:"secondary",variant:"simple"},{default:$(()=>x[10]||(x[10]=[Y("step access")])),_:1}),u(se,{modelValue:s.value.access_type,"onUpdate:modelValue":x[2]||(x[2]=B=>s.value.access_type=B),options:h.value,size:"small"},null,8,["modelValue","options"])])])]),_:1}),u(v(On),{contents:s.value.inner.contents,"step-type":s.value.type,class:"mb-2"},null,8,["contents","step-type"]),s.value.type=="code"?(r(),_(v(Gn),{key:0,modelValue:s.value.inner.starting,"onUpdate:modelValue":x[3]||(x[3]=B=>s.value.inner.starting=B),class:"mb-2"},null,8,["modelValue"])):V("",!0),s.value.type=="code"?(r(),_(v(Kn),{key:1,modelValue:s.value.inner.solution,"onUpdate:modelValue":x[4]||(x[4]=B=>s.value.inner.solution=B),"skip-submit":s.value.skip_submit,class:"mb-2"},null,8,["modelValue","skip-submit"])):V("",!0),s.value.type=="code"?(r(),_(v(ao),{key:2,tests:s.value.inner.tests,class:"mb-2"},null,8,["tests"])):V("",!0),s.value.type=="question"?(r(),_(v(Ae),{key:3,options:s.value.inner.options,guidable:!1,class:"mb-2"},null,8,["options"])):V("",!0),s.value.type=="matching"?(r(),_(v(Rn),{key:4,pairs:s.value.inner.pairs,class:"mb-2"},null,8,["pairs"])):V("",!0),s.value.type=="open"?(r(),_(v(Vn),{key:5,modelValue:s.value.inner.answer,"onUpdate:modelValue":x[5]||(x[5]=B=>s.value.inner.answer=B),class:"mb-2"},null,8,["modelValue"])):V("",!0),(w=v(l))!=null&&w.is_guidable?V("",!0):(r(),_(v(no),{key:6,modelValue:s.value.inner.modules,"onUpdate:modelValue":x[6]||(x[6]=B=>s.value.inner.modules=B),guidable:!0,class:"mb-2"},null,8,["modelValue"])),(K=v(l))!=null&&K.is_guidable?V("",!0):(r(),_(v(Ae),{key:7,options:s.value.inner.options,guidable:!0,class:"mb-2"},null,8,["options"])),u(v(to),{highlights:s.value.inner.highlights,class:"mb-2"},null,8,["highlights"]),u(v(Jn),{"user-actions":s.value.inner.userActions,"platform-actions":s.value.inner.platformActions},null,8,["user-actions","platform-actions"]),m("div",go,[u(N,{label:"Remove",icon:"pi pi-trash",severity:"danger",size:"small",onClick:b,loading:c.value,disabled:c.value},null,8,["loading","disabled"])])])):V("",!0)}}}),fo={class:"mx-auto flex items-center justify-between p-2 px-6 w-full bg-white"},ho={class:"flex flex-1 items-center"},vo={class:"flex flex-1 justify-end items-center gap-2"},bo={class:"relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 rounded-none cursor-pointer transition-colors duration-200"},yo={class:"inline-flex flex-col items-start"},_o={class:"font-bold"},xo={class:"text-sm"},wo={class:"flex justify-between items-center mb-8"},ko={class:"flex justify-end gap-2"},$o=z({__name:"EditorHeader",setup(t){var se;const{locale:n,t:e}=pe(),i=Ue(),l=Ce(),o=dt(),{user:a}=X(o),p=P(),{lesson:d,stepIndex:c}=X(p),{changeStep:h,addStep:s,setSteps:g}=p,f=k(!1),b=k(!1),I=k(!1),O=k(!1),j=k(null),q=k(["article","code","matching","open","question"]),M=pt("el"),Z=gt(),S=k([]);It(M,S,{disabled:((se=d.value)==null?void 0:se.editing_status)=="published",onUpdate:C=>{var w;((w=d.value)==null?void 0:w.editing_status)!="published"&&(Bt(S.value,C.oldIndex,C.newIndex,C),mt(async()=>{const K=[];S.value.map(B=>{const R=parseInt(B.id,10);K.push(R)});try{await U.changeStepsOrder(K),Z.add({severity:"success",summary:"Steps order saved!",life:2e3})}catch(B){Z.add({severity:"error",summary:"Order set error!",detail:B,life:2e3})}}))}});function x(C,w){switch(C){case"article":return"pi pi-align-left";case"code":return w?"pi pi-hashtag":"pi pi-code";case"question":return"pi pi-question";case"matching":return"pi pi-arrows-h";case"open":return"pi pi-pencil";default:return"pi pi-align-left"}}async function N(){if(!b.value){b.value=!0;try{const{data:C}=await(l.name==="project-edit"?U.getProjectStepsByID(l.params.id.toString()):U.getModuleStepsByID(l.params.id.toString())),w=[];for(const K of C){const B=await ye(K,n.value,!1);w.push(B)}S.value=w,g(w)}catch(C){console.log(C)}finally{b.value=!1}}}H(N),F(n,N,{immediate:!0});async function me(){if(j.value){I.value=!0;try{const{data:C}=await U.createStep(j.value),w=await ye(C,n.value,!0);l.name=="project-edit"?await U.linkStepToProjectByID(l.params.id.toString(),C.id):l.name=="module-edit"&&await U.linkStepToModuleByID(l.params.id.toString(),C.id),s(j.value,w)}catch(C){console.log(C)}finally{I.value=!1,f.value=!1}}}const ae=k(),fe=k([{label:e("logOut"),icon:"pi pi-sign-out",command:()=>{o.logout(),i.replace({name:"login"})}}]),te=C=>{ae.value.toggle(C)};async function ie(C){O.value=!0;try{l.name=="project-edit"?await ce.updateProjectEditingStatus(l.params.id.toString(),C):l.name=="module-edit"&&await ue.updateModuleEditingStatus(l.params.id.toString(),C),window.location.reload()}catch(w){console.log(w)}finally{O.value=!1}}return(C,w)=>{var ze;const K=Me,B=$e("RouterLink"),R=A,Qe=Fe,Xe=Ve,et=xe,tt=ft,nt=ke;return r(),y(E,null,[m("div",fo,[m("div",ho,[u(B,{to:"/",class:"hover:opacity-80 transition"},{default:$(()=>[u(K,{src:v(vt),width:"32"},null,8,["src"])]),_:1}),w[7]||(w[7]=m("p",{class:"text-xl font-semibold px-2 mr-4"},"Artisan",-1)),u(R,{icon:"pi pi-angle-left",label:C.$t("back"),severity:"secondary",variant:"text",onClick:w[0]||(w[0]=T=>v(i).go(-1)),size:"small"},null,8,["label"])]),b.value||v(d)==null?(r(),_(Qe,{key:0,shape:"circle",size:"2rem",class:"mr-2"})):V("",!0),m("div",{ref_key:"el",ref:M,class:"flex items-center gap-1"},[(r(!0),y(E,null,G(S.value,(T,W)=>(r(),_(R,{key:T.id,icon:x(T.type,T.skip_submit),rounded:"",severity:v(c)==W?void 0:"secondary",variant:v(c)==W?void 0:"outlined",onClick:he=>v(h)(W),class:"h-8 w-8"},null,8,["icon","severity","variant","onClick"]))),128)),u(R,{rounded:"",variant:"outlined",icon:"pi pi-plus",class:"h-8 w-8",onClick:w[1]||(w[1]=T=>f.value=!0)})],512),m("div",vo,[u(Vt,{class:"mr-4"}),((ze=v(d))==null?void 0:ze.editing_status)=="inreview"?(r(),_(R,{key:0,label:"Publish",icon:"pi pi-send",size:"small",onClick:w[2]||(w[2]=T=>ie("published")),disabled:O.value,loading:O.value},null,8,["disabled","loading"])):(r(),_(R,{key:1,label:"Hide",icon:"pi pi-eye-slash",severity:"danger",size:"small",onClick:w[3]||(w[3]=T=>ie("inreview")),disabled:O.value,loading:O.value},null,8,["disabled","loading"])),u(St),u(R,{type:"button",icon:"pi pi-ellipsis-v",onClick:te,"aria-haspopup":"true","aria-controls":"overlay_menu",size:"small",variant:"outlined",severity:"secondary",class:"border border-slate-300 bg-slate-50",style:{width:"34px"}}),u(Xe,{ref_key:"menu",ref:ae,id:"overlay_menu",model:fe.value,popup:!0},{start:$(()=>{var T,W,he;return[je((r(),y("button",bo,[m("span",yo,[m("span",_o,Q((T=v(a))==null?void 0:T.email),1),m("span",xo,Q(((W=v(a))==null?void 0:W.user_type)=="student"?C.$t("student"):((he=v(a))==null?void 0:he.user_type)=="teacher"?C.$t("teacher"):C.$t("editor")),1)])])),[[nt]])]}),_:1},8,["model"])])]),u(tt,{visible:f.value,"onUpdate:visible":w[6]||(w[6]=T=>f.value=T),modal:"",header:"Add new Step!",style:{width:"20rem"},closable:!1},{default:$(()=>[m("div",wo,[w[8]||(w[8]=m("span",{class:"text-surface-500 dark:text-surface-400"},"Choose type:",-1)),u(et,{modelValue:j.value,"onUpdate:modelValue":w[4]||(w[4]=T=>j.value=T),options:q.value,placeholder:"Select Type"},null,8,["modelValue","options"])]),m("div",ko,[u(R,{type:"button",label:"Cancel",severity:"secondary",onClick:w[5]||(w[5]=T=>f.value=!1)}),u(R,{type:"button",label:"+ Add",onClick:me,loading:I.value,disabled:I.value},null,8,["loading","disabled"])])]),_:1},8,["visible"])],64)}}}),Co={class:"flex flex-col p-4 gap-4 overflow-scroll h-full justify-between bg-white"},So={key:1,class:"flex"},Vo=z({__name:"LessonPreview",setup(t){const n=P(),{lesson:e,stepIndex:i}=X(n),{changeStep:l}=n,o=ne(()=>{var d;return i.value==null?null:((d=e.value)==null?void 0:d.steps[i.value])??null});async function a(){i.value!=null&&l(i.value-1)}async function p(){i.value!=null&&l(i.value+1)}return(d,c)=>{const h=A;return r(),y("div",Co,[o.value?(r(),y("div",{key:o.value.id},[o.value.type=="article"?(r(),_(v(xt),{key:0,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="code"?(r(),_(v(wt),{key:1,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="matching"?(r(),_(v(kt),{key:2,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="open"?(r(),_(v($t),{key:3,step:o.value,isPreview:!0},null,8,["step"])):o.value.type=="question"?(r(),_(v(Ct),{key:4,step:o.value,isPreview:!0},null,8,["step"])):V("",!0)])):V("",!0),v(e)!=null&&v(e).steps!=null&&v(e).steps.length>0&&o.value&&v(i)!=null?(r(),y("div",So,[v(i)!==0?(r(),_(h,{key:0,label:d.$t("previous"),icon:"pi pi-angle-left",size:"small",onClick:a},null,8,["label"])):V("",!0),v(i)<v(e).steps.length-1?(r(),_(h,{key:1,label:d.$t("next"),icon:"pi pi-angle-right",iconPos:"right",size:"small",class:"ml-auto self-end",onClick:p},null,8,["label"])):V("",!0)])):V("",!0)])}}}),Io={key:1,class:"h-[51px]"},Bo={class:"flex border-t bg-slate-50",style:{height:"calc(100vh - 52px)"}},Lo={class:"max-w-[320px] w-full bg-white"},zo={key:0,class:"p-4"},Po={class:"flex-grow border-l"},To={class:"border-l max-w-[400px] w-full"},Oo=z({__name:"EditorView",setup(t){const{locale:n}=pe(),e=Ce(),i=P(),{setLesson:l}=i,o=k(!1);async function a(){if(!o.value){o.value=!0;try{if(e.name=="project-edit"){const{data:p}=await ce.getProjectByID(e.params.id.toString()),d=await bt(p,n.value);l(d)}else if(e.name=="module-edit"){const{data:p}=await ue.getModuleByID(e.params.id.toString()),d=await yt(p,n.value);l(d)}}catch(p){console.log(p)}finally{o.value=!1}}}return H(a),F(n,a),(p,d)=>{const c=Fe;return r(),y(E,null,[o.value?(r(),y("div",Io)):(r(),_($o,{key:0})),m("div",Bo,[m("div",Lo,[o.value?(r(),y("div",zo,[u(c,{height:"192px"}),d[0]||(d[0]=m("br",null,null,-1)),u(c,{height:"32px"}),d[1]||(d[1]=m("br",null,null,-1)),u(c,{height:"32px"})])):(r(),_(Cn,{key:1}))]),m("div",Po,[o.value?V("",!0):(r(),_(mo,{key:0}))]),m("div",To,[o.value?V("",!0):(r(),_(Vo,{key:0}))])])],64)}}}),cl=le(Oo,[["__scopeId","data-v-f260a524"]]);export{cl as default};
