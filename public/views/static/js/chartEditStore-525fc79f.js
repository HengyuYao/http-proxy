var F=Object.defineProperty,K=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(t,e,s)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,H=(t,e)=>{for(var s in e||(e={}))Y.call(e,s)&&U(t,s,e[s]);if(G)for(var s of G(e))W.call(e,s)&&U(t,s,e[s]);return t},y=(t,e)=>K(t,V(e));var f=(t,e,s)=>(U(t,typeof e!="symbol"?e+"":e,s),s);import{aP as j,aQ as X,aR as z,aS as $,aT as J,aU as Q,M as m,aV as Z,ae as R,aW as B,aX as tt,a4 as et,aY as st,aZ as rt,a_ as at,a$ as ot,b0 as it,b1 as nt,b2 as M,b3 as N,ac as w,ad as ct,b4 as ht}from"./index-5531d778.js";import{a as C,b as n,l as S}from"./plugin-7a93f679.js";var q=(t=>(t.ECHARTS="echarts",t.NAIVE_UI="naiveUI",t.COMMON="common",t.STATIC="static",t))(q||{});const Rt=[{label:"正常",value:"normal"},{label:"正片叠底",value:"multiply"},{label:"叠加",value:"overlay"},{label:"滤色",value:"screen"},{label:"变暗",value:"darken"},{label:"变亮",value:"lighten"},{label:"颜色减淡",value:"color-dodge"},{label:"颜色加深",value:"color-burn;"},{label:"强光",value:"hard-light"},{label:"柔光",value:"soft-light"},{label:"差值",value:"difference"},{label:"排除",value:"exclusion"},{label:"色相",value:"hue"},{label:"饱和度",value:"saturation"},{label:"颜色",value:"color"},{label:"亮度",value:"luminosity"}];var lt=(t=>(t.CHARTS="Charts",t.TABLES="Tables",t.INFORMATIONS="Informations",t.PHOTOS="Photos",t.ICONS="Icons",t.DECORATES="Decorates",t))(lt||{}),ut=(t=>(t.CHARTS="图表",t.TABLES="列表",t.INFORMATIONS="信息",t.PHOTOS="图片",t.ICONS="图标",t.DECORATES="小组件",t))(ut||{}),ft=(t=>(t[t.VIEW=0]="VIEW",t[t.CONFIG=1]="CONFIG",t))(ft||{}),_=(t=>(t.ON_CLICK="click",t.ON_DBL_CLICK="dblclick",t.ON_MOUSE_ENTER="mouseenter",t.ON_MOUSE_LEAVE="mouseleave",t))(_||{}),dt=(t=>(t.CLICK="click",t.CHANGE="change",t))(dt||{});const _t="componentInteractEventKey";var x=(t=>(t.VNODE_MOUNTED="vnodeMounted",t.VNODE_BEFORE_MOUNT="vnodeBeforeMount",t))(x||{});const gt={requestDataType:j.STATIC,requestHttpType:X.GET,requestUrl:"",requestInterval:void 0,requestIntervalUnit:z.SECOND,requestContentType:$.DEFAULT,requestParamsBodyType:J.NONE,requestSQLContent:{sql:"select * from  where"},requestParams:{Body:{"form-data":{},"x-www-form-urlencoded":{},json:"",xml:""},Header:{},Params:{}}};class Ct{constructor(){f(this,"id",m());f(this,"isGroup",!1);f(this,"attr",y(H({},Z),{zIndex:-1}));f(this,"styles",{filterShow:!1,hueRotate:0,saturate:1,contrast:1,brightness:1,opacity:1,rotateZ:0,rotateX:0,rotateY:0,skewX:0,skewY:0,blendMode:"normal",animations:[]});f(this,"preview",{overFlowHidden:!1});f(this,"status",{lock:!1,hide:!1});f(this,"request",R(gt));f(this,"filter");f(this,"events",{baseEvent:{[_.ON_CLICK]:void 0,[_.ON_DBL_CLICK]:void 0,[_.ON_MOUSE_ENTER]:void 0,[_.ON_MOUSE_LEAVE]:void 0},advancedEvents:{[x.VNODE_MOUNTED]:void 0,[x.VNODE_BEFORE_MOUNT]:void 0},interactEvents:[]})}}class pt extends Ct{constructor(){super(...arguments);f(this,"isGroup",!0);f(this,"chartConfig",{key:"group",chartKey:"group",conKey:"group",category:"group",categoryName:"group",package:"group",chartFrame:q.COMMON,title:Q,image:""});f(this,"groupList",[]);f(this,"key","group");f(this,"option",{});f(this,"id",m());f(this,"attr",{w:0,h:0,x:0,y:0,offsetX:0,offsetY:0,zIndex:-1})}}var o=(t=>(t.ADD="add",t.DELETE="delete",t.UPDATE="update",t.MOVE="move",t.COPY="copy",t.CUT="cut",t.PASTE="paste",t.TOP="top",t.BOTTOM="bottom",t.UP="up",t.DOWN="down",t.GROUP="group",t.UN_GROUP="unGroup",t.LOCK="lock",t.UNLOCK="unLock",t.HIDE="hide",t.SHOW="show",t))(o||{}),d=(t=>(t.CANVAS="canvas",t.CHART="chart",t))(d||{}),St=(t=>(t.BACK_STACK="backStack",t.FORWARD_STACK="forwardStack",t))(St||{}),D=(t=>(t.ID="id",t.TARGET_TYPE="targetType",t.ACTION_TYPE="actionType",t.HISTORY_DATA="historyData",t))(D||{});const Tt=B({id:"useChartHistoryStore",state:()=>({backStack:[],forwardStack:[]}),getters:{getBackStack(){return this.backStack},getForwardStack(){return this.forwardStack}},actions:{createStackItem(t,e,s=d.CHART){this.pushBackStackItem(Object.freeze({[D.ID]:new Date().getTime().toString(),[D.HISTORY_DATA]:t,[D.ACTION_TYPE]:e,[D.TARGET_TYPE]:s}))},canvasInit(t){this.createStackItem([t],o.ADD,d.CANVAS)},pushBackStackItem(t,e=!1){t instanceof Array?this.backStack=[...this.backStack,...t]:this.backStack.push(t),this.backStack.splice(0,this.backStack.length-tt),!e&&this.clearForwardStack()},pushForwardStack(t){t instanceof Array?this.forwardStack=[...this.forwardStack,...t]:this.forwardStack.push(t)},popBackStackItem(){if(this.backStack.length>0)return this.backStack.pop()},popForwardStack(){if(this.forwardStack.length>0)return this.forwardStack.pop()},clearForwardStack(){this.forwardStack=[]},clearBackStack(){const t=this.getBackStack[0];this.backStack=[t]},backAction(){try{if(C(),this.getBackStack.length>1){const t=this.popBackStackItem();if(!t){n();return}return this.pushForwardStack(t),n(),t}n()}catch(t){S()}},forwardAction(){try{if(C(),this.getForwardStack.length){const t=this.popForwardStack();if(!t){n();return}return this.pushBackStackItem(t,!0),n(),t}n()}catch(t){S()}},createAddHistory(t){this.createStackItem(t,o.ADD,d.CHART)},createUpdateHistory(t){this.createStackItem(t,o.UPDATE,d.CHART)},createDeleteHistory(t){this.createStackItem(t,o.DELETE,d.CHART)},createMoveHistory(t){this.createStackItem(t,o.MOVE,d.CHART)},createLayerHistory(t,e){this.createStackItem(t,e,d.CHART)},createPasteHistory(t){this.createStackItem(t,o.CUT,d.CHART)},createGroupHistory(t){this.createStackItem(t,o.GROUP,d.CHART)},createUnGroupHistory(t){this.createStackItem(t,o.UN_GROUP,d.CHART)},createLockHistory(t){this.createStackItem(t,o.LOCK,d.CHART)},createUnLockHistory(t){this.createStackItem(t,o.UNLOCK,d.CHART)},createHideHistory(t){this.createStackItem(t,o.HIDE,d.CHART)},createShowHistory(t){this.createStackItem(t,o.SHOW,d.CHART)}}});var Lt=(t=>(t.PROJECT_ID="projectId",t.PROJECT_NAME="projectName",t.REMARKS="remarks",t.THUMBNAIL="thumbnail",t.RELEASE="release",t))(Lt||{}),P=(t=>(t.EDIT_LAYOUT_DOM="editLayoutDom",t.EDIT_CONTENT_DOM="editContentDom",t.OFFSET="offset",t.SCALE="scale",t.USER_SCALE="userScale",t.LOCK_SCALE="lockScale",t.SAVE_STATUS="saveStatus",t.IS_CREATE="isCreate",t.IS_DRAG="isDrag",t.IS_SELECT="isSelect",t.IS_CODE_EDIT="isCodeEdit",t))(P||{}),Ot=(t=>(t.PROJECT_NAME="projectName",t.WIDTH="width",t.HEIGHT="height",t.CHART_THEME_COLOR="chartThemeColor",t.CHART_CUSTOM_THEME_COLOR_INFO="chartCustomThemeColorInfo",t.CHART_THEME_SETTING="chartThemeSetting",t.BACKGROUND="background",t.BACKGROUND_IMAGE="backgroundImage",t.SELECT_COLOR="selectColor",t.PREVIEW_SCALE_TYPE="previewScaleType",t))(Ot||{}),P=(t=>(t.START_X="startX",t.START_Y="startY",t.X="x",t.Y="y",t))(P||{}),b=(t=>(t.PROJECT_INFO="projectInfo",t.EDIT_RANGE="editRange",t.EDIT_CANVAS="editCanvas",t.RIGHT_MENU_SHOW="rightMenuShow",t.MOUSE_POSITION="mousePosition",t.TARGET_CHART="targetChart",t.RECORD_CHART="recordChart",t.EDIT_CANVAS_CONFIG="editCanvasConfig",t.REQUEST_GLOBAL_CONFIG="requestGlobalConfig",t.COMPONENT_LIST="componentList",t))(b||{});const g=Tt(),It=et(),Dt=B({id:"useChartEditStore",state:()=>({projectInfo:{projectId:"",projectName:"",remarks:"",thumbnail:"",release:!1},editCanvas:{editLayoutDom:null,editContentDom:null,offset:20,scale:1,userScale:1,lockScale:!1,isCreate:!1,isDrag:!1,isSelect:!1,saveStatus:st.PENDING,isCodeEdit:!1},rightMenuShow:!1,mousePosition:{startX:0,startY:0,x:0,y:0},targetChart:{hoverId:void 0,selectId:[]},recordChart:void 0,editCanvasConfig:{projectName:void 0,width:1920,height:1080,filterShow:!1,hueRotate:0,saturate:1,contrast:1,brightness:1,opacity:1,rotateZ:0,rotateX:0,rotateY:0,skewX:0,skewY:0,blendMode:"normal",background:void 0,backgroundImage:void 0,selectColor:!0,chartThemeColor:rt,chartCustomThemeColorInfo:void 0,chartThemeSetting:at,previewScaleType:ot},requestGlobalConfig:{requestDataPond:[],requestOriginUrl:"",requestInterval:it,requestIntervalUnit:nt,requestParams:{Body:{"form-data":{},"x-www-form-urlencoded":{},json:"",xml:""},Header:{},Params:{}}},componentList:[]}),getters:{getProjectInfo(){return this.projectInfo},getMousePosition(){return this.mousePosition},getRightMenuShow(){return this.rightMenuShow},getEditCanvas(){return this.editCanvas},getEditCanvasConfig(){return this.editCanvasConfig},getTargetChart(){return this.targetChart},getRecordChart(){return this.recordChart},getRequestGlobalConfig(){return this.requestGlobalConfig},getComponentList(){return this.componentList}},actions:{getStorageInfo(){return{[b.EDIT_CANVAS_CONFIG]:this.getEditCanvasConfig,[b.COMPONENT_LIST]:this.getComponentList,[b.REQUEST_GLOBAL_CONFIG]:this.getRequestGlobalConfig}},getSelectIdSortList(t){if(!this.getTargetChart.selectId.length&&!t)return[];const e=[];return this.getComponentList.forEach(s=>{t?t.forEach(r=>{s.id===r&&e.push(r)}):this.getTargetChart.selectId.forEach(r=>{s.id===r&&e.push(r)})}),e},setEditCanvas(t,e){this.editCanvas[t]=e},setEditCanvasConfig(t,e){this.editCanvasConfig[t]=e},setProjectInfo(t,e){this.projectInfo[t]=e},setRightMenuShow(t){this.rightMenuShow=t},setTargetHoverChart(t){this.targetChart.hoverId=t},setTargetSelectChart(t,e=!1){if(!this.targetChart.selectId.find(s=>s===t)){if(!t){this.targetChart.selectId=[];return}if(e){if(M(t)){this.targetChart.selectId.push(t);return}if(N(t)){this.targetChart.selectId.push(...t);return}}else{if(M(t)){this.targetChart.selectId=[t];return}if(N(t)){this.targetChart.selectId=t;return}}}},setRecordChart(t){this.recordChart=R(t)},setMousePosition(t,e,s,r){t&&(this.mousePosition.x=t),e&&(this.mousePosition.y=e),s&&(this.mousePosition.startX=s),r&&(this.mousePosition.startY=r)},fetchTargetIndex(t){const e=t||this.getTargetChart.selectId.length&&this.getTargetChart.selectId[0]||void 0;if(!e)return n(),-1;const s=this.componentList.findIndex(r=>r.id===e);if(s!==-1)return s;{const r=this.getComponentList.length;for(let a=0;a<r;a++)if(this.getComponentList[a].isGroup){for(const h of this.getComponentList[a].groupList)if(h.id===e)return a}}return-1},idPreFormat(t){const e=[];return t?(M(t)&&e.push(t),N(t)&&e.push(...t),e):(e.push(...this.getTargetChart.selectId),e)},addComponentList(t,e=!1,s=!1){if(t instanceof Array){t.forEach(r=>{this.addComponentList(r,e,s)});return}if(s&&g.createAddHistory([t]),e){this.componentList.unshift(t);return}this.componentList.push(t)},removeComponentList(t,e=!0){try{const s=this.idPreFormat(t),r=[];if(!s.length)return;C(),s.forEach(a=>{const h=this.fetchTargetIndex(a);h!==-1&&(r.push(this.getComponentList[h]),this.componentList.splice(h,1))}),e&&g.createDeleteHistory(r),n();return}catch(s){S()}},resetComponentPosition(t,e){const s=this.fetchTargetIndex(t.id);if(s>-1){const r=this.getComponentList[s];e?r.attr=Object.assign(r.attr,{x:t.attr.x+t.attr.offsetX,y:t.attr.y+t.attr.offsetY}):r.attr=Object.assign(r.attr,{x:t.attr.x,y:t.attr.y})}},moveComponentList(t){g.createMoveHistory(t)},updateComponentList(t,e){t<1&&t>this.getComponentList.length||(this.componentList[t]=e)},setPageStyle(t,e){const s=this.getEditCanvas.editContentDom;s&&(s.style[t]=e)},setBothEnds(t=!1,e=!0){try{if(this.getTargetChart.selectId.length>1)return;C();const s=this.getComponentList.length;if(s<2){n();return}const r=this.fetchTargetIndex(),a=this.getComponentList[r];if(r!==-1){if(t&&r===0||!t&&r===s-1){n();return}const h=(u,i)=>{const c=R(u);return c.attr.zIndex=i,c};e&&g.createLayerHistory([h(a,r)],t?o.BOTTOM:o.TOP),this.addComponentList(a,t),this.getComponentList.splice(t?r+1:r,1),n();return}}catch(s){S()}},setTop(t=!0){this.setBothEnds(!1,t)},setBottom(t=!0){this.setBothEnds(!0,t)},wrap(t=!1,e=!0){try{if(this.getTargetChart.selectId.length>1)return;C();const s=this.getComponentList.length;if(s<2){n();return}const r=this.fetchTargetIndex();if(r!==-1){if(t&&r===0||!t&&r===s-1){n();return}const a=t?r-1:r+1,h=this.getComponentList[r],u=this.getComponentList[a];e&&g.createLayerHistory([h],t?o.DOWN:o.UP),this.updateComponentList(r,u),this.updateComponentList(a,h),n();return}}catch(s){S()}},setUp(t=!0){this.wrap(!1,t)},setDown(t=!0){this.wrap(!0,t)},setCopy(t=!1){try{if(this.getTargetChart.selectId.length>1||document.getElementsByClassName("n-modal-body-wrapper").length)return;C();const e=this.fetchTargetIndex();if(e!==-1){const s={charts:this.getComponentList[e],type:t?o.CUT:o.COPY};this.setRecordChart(s),window.$message.success(t?"剪切图表成功":"复制图表成功！"),n()}}catch(e){S()}},setCut(){this.setCopy(!0)},setParse(){try{C();const t=this.getRecordChart;if(t===void 0){n();return}const e=a=>(a=R(a),a.attr.x=this.getMousePosition.startX,a.attr.y=this.getMousePosition.startY,a.id=m(),a.isGroup&&a.groupList.forEach(h=>{h.id=m()}),a),s=t.type===o.CUT;(Array.isArray(t.charts)?t.charts:[t.charts]).forEach(a=>{this.addComponentList(e(a),void 0,!0),s&&(this.setTargetSelectChart(a.id),this.removeComponentList(void 0,!0))}),s&&this.setRecordChart(void 0),n()}catch(t){S()}},setBackAndSetForwardHandle(t,e=!1){if(t.targetType===d.CANVAS){this.editCanvas=t.historyData[0];return}this.setTargetSelectChart();let s=t.historyData;N(s)&&s.forEach(l=>{this.setTargetSelectChart(l.id,!0)});const r=t.actionType===o.ADD,a=t.actionType===o.DELETE;if(r||a){if(r&&e||a&&!e){s.forEach(l=>{this.addComponentList(l)});return}s.forEach(l=>{this.removeComponentList(l.id,!1)});return}if(t.actionType===o.MOVE){s.forEach(l=>{this.resetComponentPosition(l,e)});return}const u=t.actionType===o.TOP,i=t.actionType===o.BOTTOM;if(u||i){if(!e){u&&this.getComponentList.pop(),i&&this.getComponentList.shift(),this.getComponentList.splice(s[0].attr.zIndex,0,s[0]);return}u&&this.setTop(!1),i&&this.setBottom(!1)}const c=t.actionType===o.UP,L=t.actionType===o.DOWN;if(c||L){if(c&&e||L&&!e){this.setUp(!1);return}this.setDown(!1);return}const O=t.actionType===o.GROUP,p=t.actionType===o.UN_GROUP;if(O||p){if(O&&e||p&&!e){const l=[];s.length>1?s.forEach(A=>{l.push(A.id)}):s[0].groupList.forEach(E=>{l.unshift(E.id)}),this.setGroup(l,!1);return}s.length>1?this.setUnGroup([s[0].id],void 0,!1):this.setUnGroup([s[0].groupList[0].id],void 0,!1);return}const T=t.actionType===o.LOCK,I=t.actionType===o.UNLOCK;if(T||I){if(T&&e||I&&!e){s.forEach(l=>{this.setLock(!l.status.lock,!1)});return}s.forEach(l=>{this.setUnLock(!1)});return}const v=t.actionType===o.HIDE,k=t.actionType===o.SHOW;if(v||k){if(v&&e||k&&!e){s.forEach(l=>{this.setHide(!l.status.hide,!1)});return}s.forEach(l=>{this.setShow(!1)});return}},setBack(){try{C();const t=g.backAction();if(!t){n();return}this.setBackAndSetForwardHandle(t),n()}catch(t){S()}},setForward(){try{C();const t=g.forwardAction();if(!t){n();return}this.setBackAndSetForwardHandle(t,!0),n()}catch(t){S()}},setMove(t){const e=this.fetchTargetIndex();if(e===-1)return;const s=this.getComponentList[e].attr,r=It.getChartMoveDistance;switch(t){case w.ARROW_UP:s.y-=r;break;case w.ARROW_RIGHT:s.x+=r;break;case w.ARROW_DOWN:s.y+=r;break;case w.ARROW_LEFT:s.x-=r;break}},setGroup(t,e=!0){try{let s=this.idPreFormat(t)||this.getTargetChart.selectId;if(s=this.getSelectIdSortList(s),s.length<2)return;C();const r=new pt,a=[],h=[],u=[];s.forEach(c=>{const L=this.fetchTargetIndex(c);L!==-1&&this.getComponentList[L].isGroup?this.setUnGroup([c],O=>{O.forEach(p=>{this.addComponentList(p),u.push(p.id)})},!1):L!==-1&&u.push(c)});const i={l:0,t:0,r:0,b:0};u.forEach((c,L)=>{const O=this.componentList.splice(this.fetchTargetIndex(c),1)[0],{x:p,y:T,w:I,h:v}=O.attr;if(L===0)i.l=p,i.t=T,i.r=p+I,i.b=T+v;else{const{l:k,t:l,r:A,b:E}=i;i.l=k>p?p:k,i.t=l>T?T:l,i.r=A<p+I?p+I:A,i.b=E<T+v?T+v:E}a.push(O),h.push(ct(O))}),e&&g.createGroupHistory(h),a.forEach(c=>{c.attr.x=c.attr.x-i.l,c.attr.y=c.attr.y-i.t,r.groupList.push(c)}),r.attr.x=i.l,r.attr.y=i.t,r.attr.w=i.r-i.l,r.attr.h=i.b-i.t,this.addComponentList(r),this.setTargetSelectChart(r.id),n()}catch(s){console.log(s),window.$message.error("创建分组失败，请联系管理员"),n()}},setUnGroup(t,e,s=!0){try{const r=t||this.getTargetChart.selectId;if(r.length!==1)return;C();const a=u=>{const i=this.getComponentList[u];i.isGroup&&(s&&g.createUnGroupHistory(R([i])),i.groupList.forEach(c=>{c.attr.x=c.attr.x+i.attr.x,c.attr.y=c.attr.y+i.attr.y,e||this.addComponentList(c)}),this.setTargetSelectChart(i.id),this.removeComponentList(i.id,!1),e&&e(i.groupList))},h=this.fetchTargetIndex(r[0]);h!==-1&&a(h),n()}catch(r){console.log(r),window.$message.error("解除分组失败，请联系管理员"),n()}},setLock(t=!0,e=!0){try{if(this.getTargetChart.selectId.length>1)return;C();const s=this.fetchTargetIndex();if(s!==-1){const r=this.getComponentList[s];r.status.lock=t,e&&(t?g.createLockHistory([r]):g.createUnLockHistory([r])),this.updateComponentList(s,r),t&&this.setTargetSelectChart(void 0),n();return}}catch(s){S()}},setUnLock(t=!0){this.setLock(!1,t)},setHide(t=!0,e=!0){try{if(this.getTargetChart.selectId.length>1)return;C();const s=this.fetchTargetIndex();if(s!==-1){const r=this.getComponentList[s];r.status.hide=t,e&&(t?g.createHideHistory([r]):g.createShowHistory([r])),this.updateComponentList(s,r),n(),t&&this.setTargetSelectChart(void 0)}}catch(s){S()}},setShow(t=!0){this.setHide(!1,t)},setPageSize(t){this.setPageStyle("height",`${this.editCanvasConfig.height*t}px`),this.setPageStyle("width",`${this.editCanvasConfig.width*t}px`)},computedScale(){if(this.getEditCanvas.editLayoutDom){const t=this.getEditCanvas.editLayoutDom.clientWidth-this.getEditCanvas.offset*2-5,e=this.getEditCanvas.editLayoutDom.clientHeight-this.getEditCanvas.offset*4,s=this.editCanvasConfig.width,r=this.editCanvasConfig.height,a=parseFloat((s/r).toFixed(5));if(parseFloat((t/e).toFixed(5))>a){const u=parseFloat((e*a/s).toFixed(5));this.setScale(u>1?1:u)}else{const u=parseFloat((t/a/r).toFixed(5));this.setScale(u>1?1:u)}}else window.$message.warning("请先创建画布，再进行缩放")},listenerScale(){const t=ht(this.computedScale,200);return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},setScale(t,e=!1){(!this.getEditCanvas.lockScale||e)&&(this.setPageSize(t),this.getEditCanvas.userScale=t,this.getEditCanvas.scale=t)}}});export{_ as B,b as C,Ot as E,ft as F,St as H,dt as I,Lt as P,Tt as a,lt as b,ut as c,q as d,Ct as e,x as f,P as g,pt as h,_t as i,o as j,d as k,Rt as l,gt as r,Dt as u};