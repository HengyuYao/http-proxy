var f=Object.defineProperty,c=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var a=(i,o,t)=>o in i?f(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,e=(i,o)=>{for(var t in o||(o={}))C.call(o,t)&&a(i,t,o[t]);if(p)for(var t of p(o))g.call(o,t)&&a(i,t,o[t]);return i},m=(i,o)=>c(i,l(o));var r=(i,o,t)=>(a(i,typeof o!="symbol"?o+"":o,t),t);import{aV as d,ae as n}from"./index-5531d778.js";import{e as I}from"./chartEditStore-525fc79f.js";import{I as s}from"./index-1690038a.js";import"./plugin-7a93f679.js";import"./icon-625a16eb.js";import"./SettingItem-aa3a5453.js";/* empty css                                                                      */import"./SettingItemBox-987e6286.js";import"./CollapseItem.vue_vue_type_script_setup_true_lang-db13620c.js";import"./index.esm.min-2b03ba21.js";import"./fileTypeEnum-21359a08.js";const h={dataset:"uim:apple",color:"#03A9F4",size:64,rotate:0};class j extends I{constructor(){super(...arguments);r(this,"key",s.key);r(this,"attr",m(e({},d),{w:64,h:64,zIndex:1}));r(this,"chartConfig",n(s));r(this,"option",n(h))}}export{j as default,h as option};
