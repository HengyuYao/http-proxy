import{d as Z,a3 as $,ag as i,j as R,a5 as tt,L as et,a as c,o,E as a,w as t,b as n,u,c as D,q as L,n as S,t as x,G as p,F as N,W as H,h as ot}from"./index-5531d778.js";import{l as _}from"./index-d3140803.js";import{i as nt}from"./icon-625a16eb.js";import{C as at}from"./index-773acd65.js";import{u as G,C as V}from"./chartLayoutStore-6a0b58af.js";import{u as st}from"./chartEditStore-525fc79f.js";import"./plugin-7a93f679.js";var s=(r=>(r.PAGE_SETTING="pageSetting",r.CHART_SETTING="chartSetting",r.CHART_ANIMATION="chartAnimation",r.CHART_DATA="chartData",r.CHART_EVENT="chartEvent",r))(s||{});const rt=Z({__name:"index",setup(r){const{getDetails:A}=$(G()),{setItem:C}=G(),m=st(),{ConstructIcon:P,FlashIcon:w,DesktopOutlineIcon:O,LeafIcon:z,RocketIcon:B}=nt.ionicons5,F=_(()=>i(()=>import("./index-5eeb2ed3.js"),["./index-5eeb2ed3.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./index-96a8f629.js","./index-d3140803.js","./icon-625a16eb.js","..\\css\\index-97afe312.css","./index.vue_vue_type_script_setup_true_lang-31057ca3.js","..\\css\\index-dc86d379.css","./chartEditStore-525fc79f.js","./plugin-7a93f679.js","..\\css\\index-f4c427ee.css","./index-1690038a.js","./SettingItem-aa3a5453.js","..\\css\\StylesSetting-7ca7a4ce.css","./SettingItemBox-987e6286.js","./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js","./index.esm.min-2b03ba21.js","./fileTypeEnum-21359a08.js","..\\css\\index-0301d9d5.css","./useKeyboard.hook-7cb89d49.js","./useSync.hook-540a79d6.js","./chartLayoutStore-6a0b58af.js","./project.api-0de940dc.js","./index-773acd65.js","..\\css\\index-366d23c6.css","./querySelectorAll-a1c431d2.js","./listen-92ff7612.js","./useSyncUpdate.hook-51b89d8f.js","..\\css\\index-5397678c.css"],import.meta.url)),M=_(()=>i(()=>import("./index-7d754844.js"),["./index-7d754844.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./fileTypeEnum-21359a08.js","./chartEditStore-525fc79f.js","./plugin-7a93f679.js","./icon-625a16eb.js","./index-d3140803.js","..\\css\\index-97afe312.css","./StylesSetting-752454e8.js","./SettingItem-aa3a5453.js","..\\css\\StylesSetting-7ca7a4ce.css","./SettingItemBox-987e6286.js","./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js","./logo-9c330988.js","./project.api-0de940dc.js","..\\css\\index-31ccc328.css"],import.meta.url)),j=_(()=>i(()=>import("./index-b6e209b8.js"),["./index-b6e209b8.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./chartEditStore-525fc79f.js","./plugin-7a93f679.js","./icon-625a16eb.js","./SettingItemBox-987e6286.js","..\\css\\StylesSetting-7ca7a4ce.css","./StylesSetting-752454e8.js","./SettingItem-aa3a5453.js","./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js","./logo-9c330988.js","./useTargetData.hook-65bd908b.js","..\\css\\index-5d29981d.css"],import.meta.url)),q=_(()=>i(()=>import("./index-465df889.js").then(d=>d.i),["./index-465df889.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./index-d3140803.js","./icon-625a16eb.js","..\\css\\index-97afe312.css","./SettingItemBox-987e6286.js","..\\css\\StylesSetting-7ca7a4ce.css","./chartEditStore-525fc79f.js","./plugin-7a93f679.js","./useTargetData.hook-65bd908b.js"],import.meta.url)),U=_(()=>i(()=>import("./index-ea0edc87.js"),["./index-ea0edc87.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./SettingItem-aa3a5453.js","..\\css\\StylesSetting-7ca7a4ce.css","./SettingItemBox-987e6286.js","./plugin-7a93f679.js","./icon-625a16eb.js","./chartEditStore-525fc79f.js","./noData-e5cefb25.js","./useTargetData.hook-65bd908b.js","./EditorWorker-76586c13.js","./editorWorker-43a98755.js","..\\css\\EditorWorker-eb2c5524.css","./useLifeHandler.hook-659efc47.js","..\\css\\index-95a11081.css"],import.meta.url)),W=_(()=>i(()=>import("./index-bd770e99.js"),["./index-bd770e99.js","./index-5531d778.js","..\\css\\index-79930e9d.css","./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js","./chartEditStore-525fc79f.js","./plugin-7a93f679.js","./icon-625a16eb.js","./useTargetData.hook-65bd908b.js","..\\css\\index-9f094ae1.css","..\\css\\StylesSetting-7ca7a4ce.css"],import.meta.url)),T=R(A.value),f=R(s.CHART_SETTING),E=()=>{T.value=!0,C(V.DETAILS,!0)},h=()=>{T.value=!1,C(V.DETAILS,!1)},y=tt(()=>{if(m.getTargetChart.selectId.length!==1)return;const l=m.componentList[m.fetchTargetIndex()];return l!=null&&l.isGroup&&(f.value=s.CHART_SETTING),l});et(A,d=>{d?E():h()});const J=[{key:s.PAGE_SETTING,title:"页面配置",icon:O,render:M}],v=[{key:s.CHART_SETTING,title:"定制",icon:P,render:j},{key:s.CHART_ANIMATION,title:"动画",icon:z,render:W}],K=[...v,{key:s.CHART_DATA,title:"数据",icon:w,render:q},{key:s.CHART_EVENT,title:"事件",icon:B,render:U}];return(d,l)=>{const Q=c("n-layout-content"),I=c("n-icon"),g=c("n-space"),b=c("n-tab-pane"),k=c("n-tabs"),X=c("n-layout-sider"),Y=c("n-layout");return o(),a(Y,{"has-sider":"","sider-placement":"right"},{default:t(()=>[n(Q,null,{default:t(()=>[n(u(F))]),_:1}),n(X,{"collapse-mode":"transform","collapsed-width":0,width:350,collapsed:T.value,"native-scrollbar":!1,"show-trigger":"bar",onCollapse:E,onExpand:h},{default:t(()=>[n(u(at),{class:"go-content-configurations go-boderbox","show-top":!1,depth:2},{default:t(()=>[u(y)?H("",!0):(o(),a(k,{key:0,class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(o(),D(N,null,L(J,e=>n(b,{key:e.key,name:e.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[n(g,null,{default:t(()=>[S("span",null,x(e.title),1),n(I,{size:"16",class:"icon-position"},{default:t(()=>[(o(),a(p(e.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(o(),a(p(e.render)))]),_:2},1032,["name"])),64))]),_:1})),u(y)?(o(),a(k,{key:1,value:f.value,"onUpdate:value":l[0]||(l[0]=e=>f.value=e),class:"tabs-box",size:"small",type:"segment"},{default:t(()=>[(o(!0),D(N,null,L(u(y).isGroup?v:K,e=>(o(),a(b,{key:e.key,name:e.key,size:"small","display-directive":"show:lazy"},{tab:t(()=>[n(g,null,{default:t(()=>[S("span",null,x(e.title),1),n(I,{size:"16",class:"icon-position"},{default:t(()=>[(o(),a(p(e.icon)))]),_:2},1024)]),_:2},1024)]),default:t(()=>[(o(),a(p(e.render)))]),_:2},1032,["name"]))),128))]),_:1},8,["value"])):H("",!0)]),_:1})]),_:1},8,["collapsed"])]),_:1})}}});const mt=ot(rt,[["__scopeId","data-v-25cb5d01"]]);export{mt as default};