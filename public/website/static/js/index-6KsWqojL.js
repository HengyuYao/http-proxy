import{i as t,d as r,V as y,S as $,h as c,s as g,F as C,t as a}from"./index-0waYaqfW.js";var L=a("<div style=font-weight:600;font-family:微软雅黑;font-size:14px;>相关附件："),O=a('<div class="detail-content ejright"><div class=xx_tit></div><div class=xx_data><div class=xx-timel><span></span><span> 来源：</span></div><ul class=xx-rightd><li>【责任编辑：<!>】</li></ul></div><div class=article-detail><div>'),p=a("<div class=div_mp4><video id=my_video_1 class=mp4_css controls><source type=video/mp4>"),F=a("<div class=div_mp4><a style=color:#00f;font-size:13px;line-height:25px;>");function A(e){return(()=>{var h=O(),f=h.firstChild,_=f.nextSibling,v=_.firstChild,u=v.firstChild,m=u.nextSibling;m.firstChild;var S=v.nextSibling,o=S.firstChild,w=o.firstChild,x=w.nextSibling;x.nextSibling;var l=_.nextSibling,d=l.firstChild;return t(f,()=>e.title),t(u,()=>e.showTime),t(m,()=>e.source,null),t(o,()=>e.author,x),t(l,r($,{get when(){return e.showCover&&e.cover},get children(){return r(y,{get src(){return"/file/showFile?fileId="+e.cover},get previewList(){return e.srcList},style:"text-align: center"})}}),d),t(l,r(C,{get each(){return JSON.parse(e.fileList??"[]").filter(i=>i.name.indexOf("mp4")!==-1)},children:i=>(()=>{var n=p(),s=n.firstChild,b=s.firstChild;return c(()=>g(b,"src",i.url)),n})()}),d),t(l,r($,{get when(){return e.showAttachmentLabel},get children(){return L()}}),null),t(l,r(C,{get each(){return JSON.parse(e.fileList??"[]").filter(i=>i.name.indexOf("mp4")===-1)},children:i=>(()=>{var n=F(),s=n.firstChild;return t(s,()=>i.name),c(()=>g(s,"href",i.url)),n})()}),null),c(()=>d.innerHTML=e?.content??""),h})()}export{A as S};