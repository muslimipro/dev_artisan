import{B as s,o as e,c as r,f as g,v as t,R as i,h as c,x as l,e as d,t as p,y as u}from"./index-BKSt4GOk.js";var y=function(o){var n=o.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},b={root:function(o){var n=o.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},f=s.extend({name:"tag",theme:y,classes:b}),m={name:"BaseTag",extends:u,props:{value:null,severity:null,rounded:Boolean,icon:String},style:f,provide:function(){return{$pcTag:this,$parentInstance:this}}},v={name:"Tag",extends:m,inheritAttrs:!1};function k(a,o,n,h,$,w){return e(),r("span",t({class:a.cx("root")},a.ptmi("root")),[a.$slots.icon?(e(),g(i(a.$slots.icon),t({key:0,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(e(),r("span",t({key:1,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):c("",!0),a.value!=null||a.$slots.default?l(a.$slots,"default",{key:2},function(){return[d("span",t({class:a.cx("label")},a.ptm("label")),p(a.value),17)]}):c("",!0)],16)}v.render=k;export{v as s};
