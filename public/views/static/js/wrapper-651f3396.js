var ne=Object.defineProperty,re=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var R=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&R(e,n,t[n]);if(T)for(var n of T(t))ie.call(t,n)&&R(e,n,t[n]);return e},K=(e,t)=>re(e,se(t));var C=(e,t,n)=>new Promise((r,c)=>{var i=s=>{try{p(n.next(s))}catch(d){c(d)}},u=s=>{try{p(n.throw(s))}catch(d){c(d)}},p=s=>s.done?r(s.value):Promise.resolve(s.value).then(i,u);p((n=n.apply(e,t)).next())});import{g as X}from"./storage-df1e67b0.js";import"./querySelectorAll-a1c431d2.js";import{ax as ce,d as g,o as l,c as y,F,q as H,X as S,u as o,ay as M,aw as h,az as Y,E as f,aA as V,aB as j,aC as b,aD as z,G as J,h as L,a5 as x,aE as le,m as de,j as W,aF as ue,aG as pe,aH as B,n as ye,b as A,W as O,w as me,aI as he,aJ as P,aK as fe,am as ge}from"./index-5531d778.js";import{u as ve,f as we,a as _e}from"./index-1690038a.js";import{u as Q}from"./useLifeHandler.hook-659efc47.js";import{u as k,C as Ce}from"./chartEditStore-525fc79f.js";import{l as G}from"./listen-92ff7612.js";import"./project.api-0de940dc.js";import"./SettingItem-aa3a5453.js";/* empty css                                                                      */import"./SettingItemBox-987e6286.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js";import"./icon-625a16eb.js";import"./index.esm.min-2b03ba21.js";import"./plugin-7a93f679.js";import"./fileTypeEnum-21359a08.js";const U=(e,t)=>({zIndex:t+1,left:`${e.x}px`,top:`${e.y}px`}),E=(e,t)=>({width:`${t?t*e.w:e.w}px`,height:`${t?t*e.h:e.h}px`}),Z=e=>({display:e.hide?"none":"block"}),ee=e=>{const t={};return e&&e.overFlowHidden&&(t.overflow="hidden"),t},Se=e=>{const t=e.selectColor?{background:e.background}:{background:`url(${e.backgroundImage}) center center / cover no-repeat !important`};return a({position:"relative",width:e.width?`${e.width||100}px`:"100%",height:e.height?`${e.height}px`:"100%"},t)},be=()=>{window.$KeyboardActive={ctrl:!1,space:!1},document.onkeydown=e=>{const{keyCode:t}=e;if(t==32&&e.target==document.body&&e.preventDefault(),[17,32].includes(t)&&window.$KeyboardActive)switch(t){case 17:window.$KeyboardActive.ctrl=!0;break;case 32:window.$KeyboardActive.space=!0;const n=document.querySelector(".go-preview");n&&n.style.position==="absolute"&&(n.style.cursor="move");break}},document.onkeyup=e=>{const{keyCode:t}=e;if(t==32&&e.target==document.body&&e.preventDefault(),[17,32].includes(t)&&window.$KeyboardActive)switch(t){case 17:window.$KeyboardActive.ctrl=!1;break;case 32:window.$KeyboardActive.space=!1;break}const n=document.querySelector(".go-preview");n&&(n.style.cursor="default")}};let D=[0,0],I=[0,0];const q=e=>{var u,p;const t=document.querySelector(".go-preview");if(!t||t.style.position!=="absolute"||!((u=window.$KeyboardActive)!=null&&u.space))return;e.preventDefault(),e.stopPropagation(),(p=document.activeElement)==null||p.blur();const n=e.screenX,r=e.screenY,c=G(window,"mousemove",ce(s=>{const d=s.screenX-n,v=s.screenY-r,[m,w]=D,[$,_]=I;if(D=[w,d],I=[_,v],t){const te=t.style.left?Number(t.style.left.split("px")[0]):0,oe=t.style.top?Number(t.style.top.split("px")[0]):0;t.style.left=te+(w>m?Math.abs(w-m):-Math.abs(w-m))+"px",t.style.top=oe+(_>$?Math.abs(_-$):-Math.abs(_-$))+"px"}},20)),i=G(window,"mouseup",()=>{D=[0,0],I=[0,0],c(),i()})},xe=g({__name:"index",props:{groupData:{type:Object,required:!0},themeSetting:{type:Object,required:!0},themeColor:{type:Object,required:!0},groupIndex:{type:Number,required:!0}},setup(e){return(t,n)=>(l(),y("div",{class:S(o(M)(e.groupData.styles.animations)),style:h(a(a({},o(E)(e.groupData.attr)),o(b)(e.groupData.styles)))},[(l(!0),y(F,null,H(e.groupData.groupList,r=>(l(),y("div",{class:S(["chart-item",o(M)(r.styles.animations)]),key:r.id,style:h(a(a(a(a({},o(U)(r.attr,e.groupIndex)),o(Z)(r.status)),o(ee)(r.preview)),o(Y)(r.styles)))},[(l(),f(J(r.chartConfig.chartKey),V({id:r.id,chartConfig:r,themeSetting:e.themeSetting,themeColor:e.themeColor,style:a(a(a({},o(E)(r.attr)),o(b)(r.styles)),o(z)(r.styles))},j(o(Q)(r))),null,16,["id","chartConfig","themeSetting","themeColor","style"]))],6))),128))],6))}});const ke=L(xe,[["__scopeId","data-v-6e91b444"]]),Ee=["id"],$e=g({__name:"index",setup(e){const{initDataPond:t,clearMittDataPondMap:n}=ve(),r=k(),c=x(()=>r.editCanvasConfig.chartThemeSetting),i=x(()=>le(r.editCanvasConfig.chartCustomThemeColorInfo)[r.editCanvasConfig.chartThemeColor]);return n(),de(()=>{t(k)}),(u,p)=>(l(!0),y(F,null,H(o(r).componentList,(s,d)=>(l(),y("div",{class:S(["chart-item",o(M)(s.styles.animations)]),id:s.id,key:s.id,style:h(a(a(a(a(a(a({},o(U)(s.attr,d)),o(z)(s.styles)),o(Z)(s.status)),o(ee)(s.preview)),o(Y)(s.styles)),o(E)(s.attr)))},[s.isGroup?(l(),f(o(ke),{key:0,groupData:s,groupIndex:d,themeSetting:o(c),themeColor:o(i)},null,8,["groupData","groupIndex","themeSetting","themeColor"])):(l(),f(J(s.chartConfig.chartKey),V({key:1,id:s.id,chartConfig:s,themeSetting:o(c),themeColor:o(i),style:a(a({},o(E)(s.attr)),o(b)(s.styles))},j(o(Q)(s))),null,16,["id","chartConfig","themeSetting","themeColor","style"]))],14,Ee))),128))}});const N=L($e,[["__scopeId","data-v-ada58e47"]]),De=e=>{const t=W(!1),n=setInterval(()=>{var r;if((r=window.$vue)!=null&&r.component){clearInterval(n);const c=i=>{window.$vue.component(i.chartConfig.chartKey)||window.$vue.component(i.chartConfig.chartKey,we(i.chartConfig))};e.componentList.forEach(i=>C(void 0,null,function*(){i.isGroup?i.groupList.forEach(u=>{c(u)}):c(i)})),t.value=!0}},200);return{show:t}},Ie=e=>{const t=k();t.requestGlobalConfig=e[Ce.REQUEST_GLOBAL_CONFIG]},Me=g({__name:"suspenseIndex",setup(e){return C(this,null,function*(){let t,n;[t,n]=ue(()=>X()),yield t,n();const r=k();pe(`预览-${r.editCanvasConfig.projectName}`);const c=x(()=>a(a({overflow:"hidden"},Se(r.editCanvasConfig)),b(r.editCanvasConfig))),i=x(()=>{const d=r.editCanvasConfig.previewScaleType;return d===B.SCROLL_Y||d===B.SCROLL_X});Ie(r);const{entityRef:u,previewRef:p}=_e(r),{show:s}=De(r);return be(),(d,v)=>(l(),y("div",{class:S(`go-preview ${o(r).editCanvasConfig.previewScaleType}`),onMousedown:v[0]||(v[0]=(...m)=>o(q)&&o(q)(...m))},[o(i)?(l(),y("div",{key:0,ref_key:"entityRef",ref:u,class:"go-preview-entity"},[ye("div",{ref_key:"previewRef",ref:p,class:"go-preview-scale"},[o(s)?(l(),y("div",{key:0,style:h(o(c))},[A(o(N))],4)):O("",!0)],512)],512)):(l(),y("div",{key:1,ref_key:"previewRef",ref:p,class:"go-preview-scale"},[o(s)?(l(),y("div",{key:0,style:h(o(c))},[A(o(N))],4)):O("",!0)],512))],34))})}});const Ae=L(Me,[["__scopeId","data-v-c8c8cb5b"]]),Le=g({__name:"index",setup(e){return(t,n)=>(l(),f(he,null,{default:me(()=>[A(Ae)]),_:1}))}}),We=g({__name:"wrapper",setup(e){let t=W(Date.now());try{[P.JSON,P.CHART_TO_PREVIEW].forEach(r=>{!window.opener||!window.opener.addEventListener||window.opener.addEventListener(r,c=>C(this,null,function*(){const i=yield X();fe(ge.GO_CHART_STORAGE_LIST,[K(a({},c.detail),{id:i.id})]),t.value=Date.now()}))})}catch(n){console.log(n)}return(n,r)=>(l(),f(Le,{key:o(t)}))}});export{We as default};