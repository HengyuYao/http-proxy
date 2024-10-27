var f=Object.defineProperty;var i=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(e,n,t)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&E(e,t,n[t]);if(i)for(var t of i(n))O.call(n,t)&&E(e,t,n[t]);return e};import{f as r}from"./chartEditStore-525fc79f.js";import{cw as p}from"./index-5531d778.js";const u={},m={echarts:p},y=e=>{if(!e.events)return{};const n={};for(const o in e.events.baseEvent){const s=e.events.baseEvent[o];s&&(n[o]=N(s))}const t=e.events.advancedEvents||{},v={[r.VNODE_BEFORE_MOUNT](o){u[e.id]=o.component;const s=(t[r.VNODE_BEFORE_MOUNT]||"").trim();a(s,o)},[r.VNODE_MOUNTED](o){const s=(t[r.VNODE_MOUNTED]||"").trim();a(s,o)}};return c(c({},n),v)};function N(e){try{return new Function(`
      return (
        async function(components,mouseEvent){
          ${e}
        }
      )`)().bind(void 0,u)}catch(n){console.error(n)}}function a(e,n){try{Function(`
      "use strict";
      return (
        async function(e, components, node_modules){
          const {${Object.keys(m).join()}} = node_modules;
          ${e}
        }
      )`)().bind(n==null?void 0:n.component)(n,u,m)}catch(t){console.error(t)}}export{m as n,y as u};
