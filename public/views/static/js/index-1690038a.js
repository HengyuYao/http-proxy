      38, ${r(i)-11} 41, ${r(i)-8} 73, ${r(i)-8} 75, ${r(i)-10} 81, ${r(i)-10}
      85, ${r(i)-6} ${r(n)-85}, ${r(i)-6} ${r(n)-81}, ${r(i)-10} ${r(n)-75}, ${r(i)-10}
      ${r(n)-73}, ${r(i)-8} ${r(n)-41}, ${r(i)-8} ${r(n)-38}, ${r(i)-11}
      ${r(n)-24}, ${r(i)-11} ${r(n)-13}, ${r(i)-21} ${r(n)-13}, ${r(i)-24}
      ${r(n)-10}, ${r(i)-27} ${r(n)-10}, 27 ${r(n)-13}, 25 ${r(n)-13}, 21
      ${r(n)-24}, 11 ${r(n)-38}, 11 ${r(n)-41}, 8 ${r(n)-73}, 8 ${r(n)-75}, 10
      ${r(n)-81}, 10 ${r(n)-85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`},null,8,fg)],8,dg)),(R(),Q(x1,null,j1(t,f=>V("svg",{width:r(n),height:r(i),key:f,class:k5(`border-item ${f}`)},[V("polygon",{fill:r(a)[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[V("animate",{attributeName:"fill",values:`${r(a)[0]};${r(a)[1]};${r(a)[0]}`,dur:`${r(s)}s`,begin:"0s",repeatCount:"indefinite"},null,8,mg)],8,hg),V("polygon",{fill:r(a)[1],points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"},[V("animate",{attributeName:"fill",values:`${r(a)[1]};${r(a)[0]};${r(a)[1]}`,dur:`${r(s)}s`,begin:"0s",repeatCount:"indefinite"},null,8,vg)],8,gg),V("polygon",{fill:r(a)[0],points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[V("animate",{attributeName:"fill",values:`${r(a)[0]};${r(a)[1]};transparent`,dur:`${r(s)+1}s`,begin:"0s",repeatCount:"indefinite"},null,8,yg)],8,_g)],10,pg)),64))]))}});const xg=u2(bg,[["__scopeId","data-v-708ac670"]]),Sg=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),Mg={class:"go-border-box"},Ag=["width","height"],wg=["fill","stroke","d"],Cg=["stroke"],Tg=["stroke"],Eg=["stroke","d"],Dg=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",Mg,[(R(),Q("svg",{width:r(t),height:r(n)},[V("path",{fill:r(a),stroke:r(i)[0],d:`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${r(t)-20} 10 L ${r(t)-5} 25
          L ${r(t)-5} ${r(n)-5} L 20 ${r(n)-5}
          L 5 ${r(n)-20} L 5 20
        `},null,8,wg),V("path",{fill:"transparent","stroke-w":"3","stroke-linecap":"round","stroke-dasharray":"10, 5",stroke:r(i)[0],d:"M 16 9 L 61 9"},null,8,Cg),V("path",{fill:"transparent",stroke:r(i)[1],d:"M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"},null,8,Tg),V("path",{fill:"transparent",stroke:r(i)[1],d:`M ${r(t)-5} ${r(n)-30} L ${r(t)-5} ${r(n)-5} L ${r(t)-30} ${r(n)-5}`},null,8,Eg)],8,Ag))]))}});const Rg=u2(Dg,[["__scopeId","data-v-fc7dd111"]]),Ig=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),e6=o=>(v0("data-v-b07bae32"),o=o(),_0(),o),Og={class:"go-border-box"},Lg=["width","height"],zg=e6(()=>V("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null,-1)),Pg=e6(()=>V("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null,-1)),kg=["flood-color"],Ug=["values"],Ng=e6(()=>V("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),Fg=e6(()=>V("feMerge",null,[V("feMergeNode",{in:"softGlowColored"}),V("feMergeNode",{in:"SourceGraphic"})],-1)),Bg=["fill","stroke","d"],Gg=["filter","stroke"],Vg=["filter","stroke","d"],jg=["filter","stroke","d"],Wg=["filter","stroke","d"],Hg=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-03-filterId-${N4()}`,{w:n,h:i}=S1(e.chartConfig.attr),{colors:a,backgroundColor:s}=S1(e.chartConfig.option);return(l,u)=>(R(),Q("div",Og,[(R(),Q("svg",{width:r(n),height:r(i)},[V("defs",null,[V("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[zg,Pg,V("feFlood",{"flood-color":r(Y5)(r(a)[1],.7),result:"glowColor"},[V("animate",{attributeName:"flood-color",values:`
                ${r(Y5)(r(a)[1],.7)};
                ${r(Y5)(r(a)[1],.3)};
                ${r(Y5)(r(a)[1],.7)};
              `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null,8,Ug)],8,kg),Ng,Fg])]),r(n)&&r(i)?(R(),Q("path",{key:0,fill:r(s),"stroke-width":"2",stroke:r(a)[0],d:`
          M15 5 L ${r(n)-15} 5 Q ${r(n)-5} 5, ${r(n)-5} 15
          L ${r(n)-5} ${r(i)-15} Q ${r(n)-5} ${r(i)-5}, ${r(n)-15} ${r(i)-5}
          L 15, ${r(i)-5} Q 5 ${r(i)-5} 5 ${r(i)-15} L 5 15
          Q 5 5 15 5
        `},null,8,Bg)):l2("",!0),V("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:r(a)[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null,8,Gg),V("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:r(a)[1],d:`M ${r(n)-20} 5 L ${r(n)-15} 5 Q ${r(n)-5} 5 ${r(n)-5} 15 L ${r(n)-5} 20`},null,8,Vg),V("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:r(a)[1],d:`
          M ${r(n)-20} ${r(i)-5} L ${r(n)-15} ${r(i)-5}
          Q ${r(n)-5} ${r(i)-5} ${r(n)-5} ${r(i)-15}
          L ${r(n)-5} ${r(i)-20}
        `},null,8,jg),V("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${t})`,stroke:r(a)[1],d:`
          M 20 ${r(i)-5} L 15 ${r(i)-5}
          Q 5 ${r(i)-5} 5 ${r(i)-15}
          L 5 ${r(i)-20}
        `},null,8,Wg)],8,Lg))]))}});const $g=u2(Hg,[["__scopeId","data-v-b07bae32"]]),Yg=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),M4=o=>(v0("data-v-4dd6360b"),o=o(),_0(),o),Jg={class:"go-border-box"},Zg=["width","height"],qg=M4(()=>V("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),Xg=M4(()=>V("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),Qg=["flood-color"],Kg=M4(()=>V("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),ev=M4(()=>V("feMerge",null,[V("feMergeNode",{in:"softGlowColored"}),V("feMergeNode",{in:"SourceGraphic"})],-1)),tv=["fill","points"],nv=["fill","stroke","filter","points"],iv=["stroke","points"],ov=["stroke","points"],av=["stroke","fill","filter","points"],rv=["filter","fill","points"],sv=M4(()=>V("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),lv=[sv],uv=["filter","fill","points"],cv=M4(()=>V("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),dv=[cv],fv=["filter","fill","points"],pv=M4(()=>V("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),hv=[pv],mv=["filter","fill","points"],gv=M4(()=>V("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),vv=[gv],_v=["filter","fill","points"],yv=M4(()=>V("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),bv=[yv],xv=["filter","fill","points"],Sv=M4(()=>V("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Mv=[Sv],Av=["x","y","fill","font-size"],wv=["fill","filter","points"],Cv=["fill","filter","points"],Tv=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-04-filterId-${N4()}`,{w:n,h:i}=S1(e.chartConfig.attr),{colors:a,borderTitle:s,borderTitleColor:l,borderTitleSize:u,borderTitleHeight:d,borderTitleWidth:f,backgroundColor:h}=S1(e.chartConfig.option);return(p,g)=>(R(),Q("div",Jg,[(R(),Q("svg",{width:r(n),height:r(i)},[V("defs",null,[V("filter",{id:t,height:"150%",width:"150%",x:"-25%",y:"-25%"},[qg,Xg,V("feFlood",{"flood-color":r(a)[1],result:"glowColor"},null,8,Qg),Kg,ev])]),V("polygon",{fill:r(h),points:`
        20, 32 ${r(n)*.5-r(f)/2}, 32 ${r(n)*.5-r(f)/2+20}, 53
        ${r(n)*.5+r(f)/2-20}, 53 ${r(n)*.5+r(f)/2}, 32
        ${r(n)-20}, 32 ${r(n)-8}, 48 ${r(n)-8}, ${r(i)-25} ${r(n)-20}, ${r(i)-8}
        20, ${r(i)-8} 8, ${r(i)-25} 8, 50
      `},null,8,tv),V("polyline",{fill:r(h),stroke:r(a)[0],filter:`url(#${t})`,points:`
          ${(r(n)-r(f))/2}, 30
          20, 30 7, 50 7, ${50+(r(i)-167)/2}
          13, ${55+(r(i)-167)/2} 13, ${135+(r(i)-167)/2}
          7, ${140+(r(i)-167)/2} 7, ${r(i)-27}
          20, ${r(i)-7} ${r(n)-20}, ${r(i)-7} ${r(n)-7}, ${r(i)-27}
          ${r(n)-7}, ${140+(r(i)-167)/2} ${r(n)-13}, ${135+(r(i)-167)/2}
          ${r(n)-13}, ${55+(r(i)-167)/2} ${r(n)-7}, ${50+(r(i)-167)/2}
          ${r(n)-7}, 50 ${r(n)-20}, 30 ${(r(n)+r(f))/2}, 30
          ${(r(n)+r(f))/2-20}, 7 ${(r(n)-r(f))/2+20}, 7
          ${(r(n)-r(f))/2}, 30 ${(r(n)-r(f))/2+20}, 52
          ${(r(n)+r(f))/2-20}, 52 ${(r(n)+r(f))/2}, 30
        `},null,8,nv),V("polygon",{stroke:r(a)[0],fill:"transparent",points:`
          ${(r(n)+r(f))/2-5}, 30 ${(r(n)+r(f))/2-21}, 11
          ${(r(n)+r(f))/2-27}, 11 ${(r(n)+r(f))/2-8}, 34
        `},null,8,iv),V("polygon",{stroke:r(a)[0],fill:"transparent",points:`
          ${(r(n)-r(f))/2+5}, 30 ${(r(n)-r(f))/2+22}, 49
          ${(r(n)-r(f))/2+28}, 49 ${(r(n)-r(f))/2+8}, 26
        `},null,8,ov),V("polygon",{stroke:r(a)[0],fill:r(a)[1],filter:`url(#${t})`,points:`
          ${(r(n)+r(f))/2-11}, 37 ${(r(n)+r(f))/2-32}, 11
          ${(r(n)-r(f))/2+23}, 11 ${(r(n)-r(f))/2+11}, 23
          ${(r(n)-r(f))/2+33}, 49 ${(r(n)+r(f))/2-22}, 49
        `},null,8,av),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"1",points:`
          ${(r(n)-r(f))/2-10}, 37 ${(r(n)-r(f))/2-31}, 37
          ${(r(n)-r(f))/2-25}, 46 ${(r(n)-r(f))/2-4}, 46
        `},lv,8,rv),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"0.7",points:`
          ${(r(n)-r(f))/2-40}, 37 ${(r(n)-r(f))/2-61}, 37
          ${(r(n)-r(f))/2-55}, 46 ${(r(n)-r(f))/2-34}, 46
        `},dv,8,uv),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"0.5",points:`
          ${(r(n)-r(f))/2-70}, 37 ${(r(n)-r(f))/2-91}, 37
          ${(r(n)-r(f))/2-85}, 46 ${(r(n)-r(f))/2-64}, 46
        `},hv,8,fv),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"1",points:`
          ${(r(n)+r(f))/2+30}, 37 ${(r(n)+r(f))/2+9}, 37
          ${(r(n)+r(f))/2+3}, 46 ${(r(n)+r(f))/2+24}, 46
        `},vv,8,mv),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"0.7",points:`
          ${(r(n)+r(f))/2+60}, 37 ${(r(n)+r(f))/2+39}, 37
          ${(r(n)+r(f))/2+33}, 46 ${(r(n)+r(f))/2+54}, 46
        `},bv,8,_v),V("polygon",{filter:`url(#${t})`,fill:r(a)[0],opacity:"0.5",points:`
          ${(r(n)+r(f))/2+90}, 37 ${(r(n)+r(f))/2+69}, 37
          ${(r(n)+r(f))/2+63}, 46 ${(r(n)+r(f))/2+84}, 46
        `},Mv,8,xv),V("text",{x:`${r(n)/2}`,y:r(d),fill:r(l),"font-size":r(u),"text-anchor":"middle","dominant-baseline":"middle"},T2(r(s)),9,Av),V("polygon",{fill:r(a)[0],filter:`url(#${t})`,points:`
          7, ${53+(r(i)-167)/2} 11, ${57+(r(i)-167)/2}
          11, ${133+(r(i)-167)/2} 7, ${137+(r(i)-167)/2}
        `},null,8,wv),V("polygon",{fill:r(a)[0],filter:`url(#${t})`,points:`
          ${r(n)-7}, ${53+(r(i)-167)/2} ${r(n)-11}, ${57+(r(i)-167)/2}
          ${r(n)-11}, ${133+(r(i)-167)/2} ${r(n)-7}, ${137+(r(i)-167)/2}
        `},null,8,Cv)],8,Zg))]))}});const Ev=u2(Tv,[["__scopeId","data-v-4dd6360b"]]),Dv=Object.freeze(Object.defineProperty({__proto__:null,default:Ev},Symbol.toStringTag,{value:"Module"})),Rv=["width","height"],Iv=["fill","points"],Ov=["width","height"],Lv=["fill"],zv=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=["left-top","right-top","left-bottom","right-bottom"],{w:n,h:i}=S1(e.chartConfig.attr),{colors:a,backgroundColor:s}=S1(e.chartConfig.option);return(l,u)=>(R(),Q("div",{class:"go-border-box",style:f2(`box-shadow: inset 0 0 25px 3px ${r(a)[0]}`)},[(R(),Q("svg",{width:r(n),height:r(i)},[V("polygon",{fill:r(s),points:`
        4, 0 ${r(n)-4}, 0 ${r(n)}, 4 ${r(n)}, ${r(i)-4} ${r(n)-4}, ${r(i)}
        4, ${r(i)} 0, ${r(i)-4} 0, 4
      `},null,8,Iv)],8,Rv)),(R(),Q(x1,null,j1(t,d=>V("svg",{width:r(n),height:r(i),key:d,class:k5(`border-item ${d}`)},[V("polygon",{fill:r(a)[1],points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"},null,8,Lv)],10,Ov)),64))],4))}});const Pv=u2(zv,[["__scopeId","data-v-37a601de"]]),kv=Object.freeze(Object.defineProperty({__proto__:null,default:Pv},Symbol.toStringTag,{value:"Module"})),Uv=["width","height"],Nv=["stroke"],Fv=["stroke","points"],Bv=["stroke","points"],Gv=["stroke","points"],Vv=["stroke"],jv=["stroke","points"],Wv=["stroke","points"],Hv=["stroke","points"],$v=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",{class:"go-border-box",style:f2(`
      box-shadow: inset 0 0 40px ${r(i)[0]}; 
      border: 1px solid ${r(i)[1]};
      background-color: ${r(a)};
    `)},[(R(),Q("svg",{width:r(t),height:r(n)},[V("polyline",{class:"go-border-line-w-2",stroke:r(i)[0],points:"0, 25 0, 0 25, 0"},null,8,Nv),V("polyline",{class:"go-border-line-w-2",stroke:r(i)[0],points:`${r(t)-25}, 0 ${r(t)}, 0 ${r(t)}, 25`},null,8,Fv),V("polyline",{class:"go-border-line-w-2",stroke:r(i)[0],points:`${r(t)-25}, ${r(n)} ${r(t)}, ${r(n)} ${r(t)}, ${r(n)-25}`},null,8,Bv),V("polyline",{class:"go-border-line-w-2",stroke:r(i)[0],points:`0, ${r(n)-25} 0, ${r(n)} 25, ${r(n)}`},null,8,Gv),V("polyline",{class:"go-border-line-w-5",stroke:r(i)[1],points:"0, 10 0, 0 10, 0"},null,8,Vv),V("polyline",{class:"go-border-line-w-5",stroke:r(i)[1],points:`${r(t)-10}, 0 ${r(t)}, 0 ${r(t)}, 10`},null,8,jv),V("polyline",{class:"go-border-line-w-5",stroke:r(i)[1],points:`${r(t)-10}, ${r(n)} ${r(t)}, ${r(n)} ${r(t)}, ${r(n)-10}`},null,8,Wv),V("polyline",{class:"go-border-line-w-5",stroke:r(i)[1],points:`0, ${r(n)-10} 0, ${r(n)} 10, ${r(n)}`},null,8,Hv)],8,Uv))],4))}});const Yv=u2($v,[["__scopeId","data-v-9d777740"]]),Jv=Object.freeze(Object.defineProperty({__proto__:null,default:Yv},Symbol.toStringTag,{value:"Module"})),Ca=o=>(v0("data-v-1e74db59"),o=o(),_0(),o),Zv={class:"go-border-box"},qv=["width","height"],Xv=Ca(()=>V("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),Qv=Ca(()=>V("animate",{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),Kv=["stop-color"],e_=["values"],t_=["stop-color"],n_=["values"],i_=["points"],o_=["points"],a_=["points"],r_=["points"],s_=["points"],l_=["points"],u_=["points"],c_=["points"],d_=["points"],f_=["fill","points"],p_=["width","height","fill","mask"],h_=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-07-filter-${N4()}`,n=`border-box-07-mask-${N4()}`,{w:i,h:a}=S1(e.chartConfig.attr),{colors:s,backgroundColor:l}=S1(e.chartConfig.option);return(u,d)=>(R(),Q("div",Zv,[(R(),Q("svg",{width:r(i),height:r(a)},[V("defs",null,[V("linearGradient",{id:t,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[Xv,Qv,V("stop",{offset:"0%","stop-color":r(s)[0]},[V("animate",{attributeName:"stop-color",values:`${r(s)[0]};${r(s)[1]};${r(s)[0]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,e_)],8,Kv),V("stop",{offset:"100%","stop-color":r(s)[1]},[V("animate",{attributeName:"stop-color",values:`${r(s)[1]};${r(s)[0]};${r(s)[1]}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,n_)],8,t_)]),V("mask",{id:n},[V("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${r(a)*.4} 8, 3, ${r(i)*.4+7}, 3`},null,8,i_),V("polyline",{fill:"#fff",points:`8, ${r(a)*.15} 8, 3, ${r(i)*.1+7}, 3
              ${r(i)*.1}, 8 14, 8 14, ${r(a)*.15-7}
            `},null,8,o_),V("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${r(i)*.5}, 3 ${r(i)-3}, 3, ${r(i)-3}, ${r(a)*.25}`},null,8,a_),V("polyline",{fill:"#fff",points:`
              ${r(i)*.52}, 3 ${r(i)*.58}, 3
              ${r(i)*.58-7}, 9 ${r(i)*.52+7}, 9
            `},null,8,r_),V("polyline",{fill:"#fff",points:`
              ${r(i)*.9}, 3 ${r(i)-3}, 3 ${r(i)-3}, ${r(a)*.1}
              ${r(i)-9}, ${r(a)*.1-7} ${r(i)-9}, 9 ${r(i)*.9+7}, 9
            `},null,8,s_),V("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${r(a)*.5} 8, ${r(a)-3} ${r(i)*.3+7}, ${r(a)-3}`},null,8,l_),V("polyline",{fill:"#fff",points:`
              8, ${r(a)*.55} 8, ${r(a)*.7}
              2, ${r(a)*.7-7} 2, ${r(a)*.55+7}
            `},null,8,u_),V("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${r(i)*.35}, ${r(a)-3} ${r(i)-3}, ${r(a)-3} ${r(i)-3}, ${r(a)*.35}`},null,8,c_),V("polyline",{fill:"#fff",points:`
              ${r(i)*.92}, ${r(a)-3} ${r(i)-3}, ${r(a)-3} ${r(i)-3}, ${r(a)*.8}
              ${r(i)-9}, ${r(a)*.8+7} ${r(i)-9}, ${r(a)-9} ${r(i)*.92+7}, ${r(a)-9}
            `},null,8,d_)])]),V("polygon",{fill:r(l),points:`
        15, 9 ${r(i)*.1+1}, 9 ${r(i)*.1+4}, 6 ${r(i)*.52+2}, 6
        ${r(i)*.52+6}, 10 ${r(i)*.58-7}, 10 ${r(i)*.58-2}, 6
        ${r(i)*.9+2}, 6 ${r(i)*.9+6}, 10 ${r(i)-10}, 10 ${r(i)-10}, ${r(a)*.1-6}
        ${r(i)-6}, ${r(a)*.1-1} ${r(i)-6}, ${r(a)*.8+1} ${r(i)-10}, ${r(a)*.8+6}
        ${r(i)-10}, ${r(a)-10} ${r(i)*.92+7}, ${r(a)-10}  ${r(i)*.92+2}, ${r(a)-6}
        11, ${r(a)-6} 11, ${r(a)*.15-2} 15, ${r(a)*.15-7}
      `},null,8,f_),V("rect",{x:"0",y:"0",width:r(i),height:r(a),fill:`url(#${t})`,mask:`url(#${n})`},null,8,p_)],8,qv))]))}});const m_=u2(h_,[["__scopeId","data-v-1e74db59"]]),g_=Object.freeze(Object.defineProperty({__proto__:null,default:m_},Symbol.toStringTag,{value:"Module"})),Ta=o=>(v0("data-v-966367ac"),o=o(),_0(),o),v_={class:"go-border-box"},__=["width","height"],y_=["d"],b_=Ta(()=>V("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null,-1)),x_=Ta(()=>V("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)),S_=[b_,x_],M_=["fill"],A_=["dur","path"],w_=["fill","points"],C_=["stroke","xlink:href"],T_=["stroke","xlink:href","mask"],E_=["from","to","dur"],D_=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=`border-box-08-path-${N4()}`,n=`border-box-08-gradient-${N4()}`,i=`border-box-08-mask-${N4()}`,{w:a,h:s}=S1(e.chartConfig.attr),{colors:l,dur:u,backgroundColor:d,reverse:f}=S1(e.chartConfig.option),h=Z1(()=>(a.value+s.value-5)*2),p=Z1(()=>f.value?`M 2.5, 2.5 L 2.5, ${s.value-2.5} L ${a.value-2.5}, ${s.value-2.5} L ${a.value-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${a.value-2.5}, 2.5 L${a.value-2.5}, ${s.value-2.5} L2.5, ${s.value-2.5} L2.5, 2.5`);return(g,y)=>(R(),Q("div",v_,[(R(),Q("svg",{width:r(a),height:r(s)},[V("defs",null,[V("path",{id:t,d:r(p),fill:"transparent"},null,8,y_),V("radialGradient",{id:n,cx:"50%",cy:"50%",r:"50%"},S_),V("mask",{id:i},[V("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${n})`},[V("animateMotion",{dur:`${r(u)}s`,path:r(p),rotate:"auto",repeatCount:"indefinite"},null,8,A_)],8,M_)])]),V("polygon",{fill:r(d),points:`5, 5 ${r(a)-5}, 5 ${r(a)-5} ${r(s)-5} 5, ${r(s)-5}`},null,8,w_),V("use",{stroke:r(l)[0],"stroke-width":"1","xlink:href":`#${t}`},null,8,C_),V("use",{stroke:r(l)[1],"stroke-width":"3","xlink:href":`#${t}`,mask:`url(#${i})`},[V("animate",{attributeName:"stroke-dasharray",from:`0, ${r(h)}`,to:`${r(h)}, 0`,dur:`${r(u)}s`,repeatCount:"indefinite"},null,8,E_)],8,T_)],8,__))]))}});const R_=u2(D_,[["__scopeId","data-v-966367ac"]]),I_=Object.freeze(Object.defineProperty({__proto__:null,default:R_},Symbol.toStringTag,{value:"Module"})),O_={class:"go-border-box"},L_=["width","height"],z_=["fill","points"],P_=["fill"],k_=["fill","cx"],U_=["fill","cx","cy"],N_=["fill","cy"],F_=["stroke","points"],B_=["stroke","points"],G_=["stroke","points"],V_=["stroke","points"],j_=["stroke"],W_=["stroke"],H_=["stroke","points"],$_=["stroke","points"],Y_=["stroke","points"],J_=["stroke","points"],Z_=["stroke","points"],q_=["stroke","points"],X_=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",O_,[(R(),Q("svg",{width:r(t),height:r(n)},[V("polygon",{fill:r(a),points:` 9, 7 ${r(t)-9}, 7 ${r(t)-9}, ${r(n)-7} 9, ${r(n)-7}`},null,8,z_),V("circle",{fill:r(i)[1],cx:"5",cy:"5",r:"2"},null,8,P_),V("circle",{fill:r(i)[1],cx:r(t)-5,cy:"5",r:"2"},null,8,k_),V("circle",{fill:r(i)[1],cx:r(t)-5,cy:r(n)-5,r:"2"},null,8,U_),V("circle",{fill:r(i)[1],cx:"5",cy:r(n)-5,r:"2"},null,8,N_),V("polyline",{stroke:r(i)[0],points:`10, 4 ${r(t)-10}, 4`},null,8,F_),V("polyline",{stroke:r(i)[0],points:`10, ${r(n)-4} ${r(t)-10}, ${r(n)-4}`},null,8,B_),V("polyline",{stroke:r(i)[0],points:`5, 70 5, ${r(n)-70}`},null,8,G_),V("polyline",{stroke:r(i)[0],points:`${r(t)-5}, 70 ${r(t)-5}, ${r(n)-70}`},null,8,V_),V("polyline",{stroke:r(i)[0],points:"3, 10, 3, 50"},null,8,j_),V("polyline",{stroke:r(i)[0],points:"7, 30 7, 80"},null,8,W_),V("polyline",{stroke:r(i)[0],points:`${r(t)-3}, 10 ${r(t)-3}, 50`},null,8,H_),V("polyline",{stroke:r(i)[0],points:`${r(t)-7}, 30 ${r(t)-7}, 80`},null,8,$_),V("polyline",{stroke:r(i)[0],points:`3, ${r(n)-10} 3, ${r(n)-50}`},null,8,Y_),V("polyline",{stroke:r(i)[0],points:`7, ${r(n)-30} 7, ${r(n)-80}`},null,8,J_),V("polyline",{stroke:r(i)[0],points:`${r(t)-3}, ${r(n)-10} ${r(t)-3}, ${r(n)-50}`},null,8,Z_),V("polyline",{stroke:r(i)[0],points:`${r(t)-7}, ${r(n)-30} ${r(t)-7}, ${r(n)-80}`},null,8,q_)],8,L_))]))}});const Q_=u2(X_,[["__scopeId","data-v-a43eb02e"]]),K_=Object.freeze(Object.defineProperty({__proto__:null,default:Q_},Symbol.toStringTag,{value:"Module"})),ey={class:"go-border-box"},ty=["width","height"],ny=["fill","points"],iy=["stroke","points"],oy=["stroke","points"],ay=["stroke","points"],ry=["stroke"],sy=["stroke"],ly=["stroke"],uy=["stroke"],cy=["stroke"],dy=["stroke","points"],fy=["stroke","points"],py=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",ey,[(R(),Q("svg",{width:r(t),height:r(n)},[V("polygon",{fill:r(a),points:`
        ${r(t)-15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${r(n)-32} 41, ${r(n)-7} ${r(t)-15}, ${r(n)-7}
      `},null,8,ny),V("polyline",{class:"go-border-line-1",stroke:r(i)[0],points:`145, ${r(n)-5} 40, ${r(n)-5} 10, ${r(n)-35}
          10, 40 40, 5 150, 5 170, 20 ${r(t)-15}, 20`},null,8,iy),V("polyline",{stroke:r(i)[1],class:"go-border-line-2",points:`245, ${r(n)-1} 36, ${r(n)-1} 14, ${r(n)-23}
          14, ${r(n)-100}`},null,8,oy),V("polyline",{class:"go-border-line-3",stroke:r(i)[0],points:`7, ${r(n)-40} 7, ${r(n)-75}`},null,8,ay),V("polyline",{class:"go-border-line-4",stroke:r(i)[0],points:"28, 24 13, 41 13, 64"},null,8,ry),V("polyline",{class:"go-border-line-5",stroke:r(i)[0],points:"5, 45 5, 140"},null,8,sy),V("polyline",{class:"go-border-line-6",stroke:r(i)[1],points:"14, 75 14, 180"},null,8,ly),V("polyline",{class:"go-border-line-7",stroke:r(i)[1],points:"55, 11 147, 11 167, 26 250, 26"},null,8,uy),V("polyline",{class:"go-border-line-8",stroke:r(i)[1],points:"158, 5 173, 16"},null,8,cy),V("polyline",{class:"go-border-line-9",stroke:r(i)[0],points:`200, 17 ${r(t)-10}, 17`},null,8,dy),V("polyline",{class:"go-border-line-10",stroke:r(i)[1],points:`385, 17 ${r(t)-10}, 17`},null,8,fy)],8,ty))]))}});const hy=u2(py,[["__scopeId","data-v-03a8a229"]]),my=Object.freeze(Object.defineProperty({__proto__:null,default:hy},Symbol.toStringTag,{value:"Module"})),gy={class:"go-border-box"},vy=["width","height"],_y=["fill","points"],yy=["stroke","points"],by=["stroke","points"],xy=["stroke","points"],Sy=["stroke","points"],My=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",gy,[(R(),Q("svg",{class:"bv-border-svg-container",width:r(t),height:r(n)},[V("polygon",{fill:r(a),points:`
        23, 23 ${r(t)-24}, 23 ${r(t)-24}, ${r(n)-24} 23, ${r(n)-24}
      `},null,8,_y),V("polyline",{class:"go-border-line-1",stroke:r(i)[0],points:`4, 4 ${r(t)-22} ,4 ${r(t)-22}, ${r(n)-22} 4, ${r(n)-22} 4, 4`},null,8,yy),V("polyline",{class:"go-border-line-3",stroke:r(i)[1],points:`10, 10 ${r(t)-16}, 10 ${r(t)-16}, ${r(n)-16} 10, ${r(n)-16} 10, 10`},null,8,by),V("polyline",{class:"go-border-line-3",stroke:r(i)[1],points:`16, 16 ${r(t)-10}, 16 ${r(t)-10}, ${r(n)-10} 16, ${r(n)-10} 16, 16`},null,8,xy),V("polyline",{class:"go-border-line-3",stroke:r(i)[1],points:`22, 22 ${r(t)-4}, 22 ${r(t)-4}, ${r(n)-4} 22, ${r(n)-4} 22, 22`},null,8,Sy)],8,vy))]))}});const Ay=u2(My,[["__scopeId","data-v-454ad1b3"]]),wy=Object.freeze(Object.defineProperty({__proto__:null,default:Ay},Symbol.toStringTag,{value:"Module"})),Cy={class:"go-border-box"},Ty=["width","height"],Ey=["fill","points"],Dy=["stroke","points"],Ry=["stroke","points"],Iy=["stroke","points"],Oy=["stroke","points"],Ly=["stroke","points"],zy=["stroke","points"],Py=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",Cy,[(R(),Q("svg",{width:r(t),height:r(n)},[V("polygon",{fill:r(a),points:`
        10, 22 ${r(t)-22}, 22 ${r(t)-22}, ${r(n)-86} ${r(t)-84}, ${r(n)-24} 10, ${r(n)-24}
      `},null,8,Ey),V("polyline",{class:"bv-bb5-line-1",stroke:r(i)[0],points:`8, 5 ${r(t)-5}, 5 ${r(t)-5}, ${r(n)-100}
          ${r(t)-100}, ${r(n)-5} 8, ${r(n)-5} 8, 5`},null,8,Dy),V("polyline",{class:"bv-bb5-line-2",stroke:r(i)[1],points:`3, 5 ${r(t)-20}, 5 ${r(t)-20}, ${r(n)-60}
          ${r(t)-74}, ${r(n)-5} 3, ${r(n)-5} 3, 5`},null,8,Ry),V("polyline",{class:"bv-bb5-line-3",stroke:r(i)[1],points:`50, 13 ${r(t)-35}, 13`},null,8,Iy),V("polyline",{class:"bv-bb5-line-4",stroke:r(i)[1],points:`15, 20 ${r(t)-35}, 20`},null,8,Oy),V("polyline",{class:"bv-bb5-line-5",stroke:r(i)[1],points:`15, ${r(n)-20} ${r(t)-110}, ${r(n)-20}`},null,8,Ly),V("polyline",{class:"bv-bb5-line-6",stroke:r(i)[1],points:`15, ${r(n)-13} ${r(t)-110}, ${r(n)-13}`},null,8,zy)],8,Ty))]))}});const ky=u2(Py,[["__scopeId","data-v-80c70916"]]),Uy=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),Ny={class:"go-border-box"},Fy=["width","height"],By=["fill","points"],Gy=["stroke","points"],Vy=["stroke","points"],jy=["fill"],Wy=["fill","cx"],Hy=["fill","cx","cy"],$y=["fill","cy"],Yy=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,backgroundColor:a}=S1(e.chartConfig.option);return(s,l)=>(R(),Q("div",Ny,[(R(),Q("svg",{width:r(t),height:r(n)},[V("polygon",{fill:r(a),points:`
        7, 7 ${r(t)-7}, 7 ${r(t)-7}, ${r(n)-7} 7, ${r(n)-7}
      `},null,8,By),V("polyline",{stroke:r(i)[0],points:`2, 2 ${r(t)-2} ,2 ${r(t)-2}, ${r(n)-2} 2, ${r(n)-2} 2, 2`},null,8,Gy),V("polyline",{stroke:r(i)[1],points:`6, 6 ${r(t)-6}, 6 ${r(t)-6}, ${r(n)-6} 6, ${r(n)-6} 6, 6`},null,8,Vy),V("circle",{fill:r(i)[0],cx:"11",cy:"11",r:"1"},null,8,jy),V("circle",{fill:r(i)[0],cx:r(t)-11,cy:"11",r:"1"},null,8,Wy),V("circle",{fill:r(i)[0],cx:r(t)-11,cy:r(n)-11,r:"1"},null,8,Hy),V("circle",{fill:r(i)[0],cx:"11",cy:r(n)-11,r:"1"},null,8,$y)],8,Fy))]))}});const Jy=u2(Yy,[["__scopeId","data-v-e5e18ea8"]]),Zy=Object.freeze(Object.defineProperty({__proto__:null,default:Jy},Symbol.toStringTag,{value:"Module"})),qy=["width","height"],Xy=["x","y","width","height","fill"],Qy=["to","dur"],Ky=["x","y","width","height","fill"],eb=["to","dur"],tb=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,dur:a,endWidth:s,lineHeight:l}=S1(e.chartConfig.option),u=Z1(()=>0),d=Z1(()=>n.value/2);return(f,h)=>(R(),Q("svg",{width:r(t),height:r(n)},[V("rect",{x:r(u),y:r(d),width:r(t),height:r(l),fill:r(i)[0]},[V("animate",{attributeName:"width",from:"0",to:r(t),dur:`${r(a)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:".42,0,.58,1",repeatCount:"indefinite"},null,8,Qy)],8,Xy),V("rect",{x:r(u),y:r(d),width:r(s),height:r(l),fill:r(i)[1]},[V("animate",{attributeName:"x",from:"0",to:r(t),dur:`${r(a)}s`,calcMode:"spline",keyTimes:"0;1",keySplines:"0.42,0,0.58,1",repeatCount:"indefinite"},null,8,eb)],8,Ky)],8,qy))}}),nb=Object.freeze(Object.defineProperty({__proto__:null,default:tb},Symbol.toStringTag,{value:"Module"})),ib=["width"],ob=["stroke","points"],ab=["stroke","points"],rb=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,dur:a,lineHeight:s}=S1(e.chartConfig.option);return(l,u)=>(R(),Q("div",{class:"go-decorates-2",style:f2(`width:${r(t)}px; height: ${r(s)}px animation-duration:${r(a)}s`)},[(R(),Q("svg",{width:r(t),height:3},[V("polyline",{stroke:r(i)[0],points:`0, 2.5 ${r(t)}, 2.5`},null,8,ob),V("polyline",{stroke:r(i)[1],"stroke-width":"3","stroke-dasharray":"20, 80","stroke-dashoffset":"-30",points:`0, 2.5 ${r(t)}, 2.5`},null,8,ab)],8,ib))],4))}});const sb=u2(rb,[["__scopeId","data-v-bf54f1e3"]]),lb=Object.freeze(Object.defineProperty({__proto__:null,default:sb},Symbol.toStringTag,{value:"Module"})),ub={width:20,height:20},cb=["stroke"],db=["stroke"],fb={width:20,height:20},pb=["stroke"],hb=["stroke"],mb=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,dataset:a,textSize:s,textColor:l}=S1(e.chartConfig.option);return(u,d)=>(R(),Q("div",{class:"go-border-03",style:f2(`width: ${r(t)}px; height: ${r(n)}px`)},[(R(),Q("svg",ub,[V("polyline",{"stroke-width":"4",fill:"transparent",stroke:r(i)[0],points:"10, 0 19, 10 10, 20"},null,8,cb),V("polyline",{"stroke-width":"2",fill:"transparent",stroke:r(i)[1],points:"2, 0 11, 10 2, 20"},null,8,db)])),V("span",{style:f2(`color: ${r(l)};font-size: ${r(s)}px`)},T2(r(a)),5),(R(),Q("svg",fb,[V("polyline",{"stroke-width":"4",fill:"transparent",stroke:r(i)[0],points:"11, 0 2, 10 11, 20"},null,8,pb),V("polyline",{"stroke-width":"2",fill:"transparent",stroke:r(i)[1],points:"19, 0 10, 10 19, 20"},null,8,hb)]))],4))}});const gb=u2(mb,[["__scopeId","data-v-a4359992"]]),vb=Object.freeze(Object.defineProperty({__proto__:null,default:gb},Symbol.toStringTag,{value:"Module"})),_b={class:"go-border-04"},yb=["width","height"],bb=["stroke","points"],xb=["stroke","points"],Sb=["stroke","points"],Mb=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,reverse:a}=S1(e.chartConfig.option),s=l=>a.value?t.value-l:l;return(l,u)=>(R(),Q("div",_b,[(R(),Q("svg",{width:r(t),height:r(n)},[V("polyline",{stroke:r(i)[0],"stroke-width":"2",fill:"transparent",points:`${s(0)}, 0 ${s(30)}, ${r(n)/2}`},null,8,bb),V("polyline",{stroke:r(i)[0],"stroke-width":"2",fill:"transparent",points:`${s(20)}, 0 ${s(50)}, ${r(n)/2} ${s(r(t))}, ${r(n)/2}`},null,8,xb),V("polyline",{stroke:r(i)[1],fill:"transparent","stroke-width":"3",points:`${s(0)}, ${r(n)-3}, ${s(200)}, ${r(n)-3}`},null,8,Sb)],8,yb))]))}});const Ab=u2(Mb,[["__scopeId","data-v-8a13a421"]]),wb=Object.freeze(Object.defineProperty({__proto__:null,default:Ab},Symbol.toStringTag,{value:"Module"})),Cb={class:"go-border-05"},Tb=["width","height"],Eb=["stroke","points"],Db=["stroke","points","stroke-dasharray"],Rb=["values","dur","begin"],Ib=["values","begin"],Ob=["stroke","points","stroke-dasharray"],Lb=["values","dur","begin"],zb=["values","begin"],Pb=["stroke","points","stroke-dasharray"],kb=["values","dur","begin"],Ub=["values","begin"],Nb=["cy","fill"],Fb=["values","begin"],Bb=["cx","cy","fill"],Gb=["values","begin"],Vb=["values","begin"],jb=["cx","cy","fill"],Wb=["values","begin"],Hb=["values","begin"],$b=["cx","cy","fill"],Yb=["values","begin"],Jb=["values","begin"],Zb=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=N4(),{w:n,h:i}=S1(e.chartConfig.attr),{colors:a,dur:s}=S1(e.chartConfig.option),l=`d10ani1${t}`,u=`d10ani2${t}`,d=`d10ani3${t}`,f=`d10ani4${t}`,h=`d10ani5${t}`,p=`d10ani6${t}`,g=`d10ani7${t}`;return(y,v)=>(R(),Q("div",Cb,[(R(),Q("svg",{width:r(n),height:r(i)},[V("polyline",{stroke:r(a)[1],"stroke-width":"2",points:`0, ${r(i)/2} ${r(n)}, ${r(i)/2}`},null,8,Eb),V("polyline",{stroke:r(a)[0],"stroke-width":"2",points:`5, ${r(i)/2} ${r(n)*.2-3}, ${r(i)/2}`,"stroke-dasharray":`0, ${r(n)*.2}`,fill:"freeze"},[V("animate",{id:u,attributeName:"stroke-dasharray",values:`0, ${r(n)*.2};${r(n)*.2}, 0;`,dur:r(s),begin:`${l}.end`,fill:"freeze"},null,8,Rb),V("animate",{attributeName:"stroke-dasharray",values:`${r(n)*.2}, 0;0, ${r(n)*.2}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,Ib)],8,Db),V("polyline",{stroke:r(a)[0],"stroke-width":"2",points:`${r(n)*.2+3}, ${r(i)/2} ${r(n)*.8-3}, ${r(i)/2}`,"stroke-dasharray":`0, ${r(n)*.6}`},[V("animate",{id:f,attributeName:"stroke-dasharray",values:`0, ${r(n)*.6};${r(n)*.6}, 0`,dur:r(s),begin:`${d}.end + 1s`,fill:"freeze"},null,8,Lb),V("animate",{attributeName:"stroke-dasharray",values:`${r(n)*.6}, 0;0, ${r(n)*.6}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,zb)],8,Ob),V("polyline",{stroke:r(a)[0],"stroke-width":"2",points:`${r(n)*.8+3}, ${r(i)/2} ${r(n)-5}, ${r(i)/2}`,"stroke-dasharray":`0, ${r(n)*.2}`},[V("animate",{id:p,attributeName:"stroke-dasharray",values:`0, ${r(n)*.2};${r(n)*.2}, 0`,dur:r(s),begin:`${h}.end + 1s`,fill:"freeze"},null,8,kb),V("animate",{attributeName:"stroke-dasharray",values:`${r(n)*.2}, 0;0, ${r(n)*.3}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,Ub)],8,Pb),V("circle",{cx:"2",cy:r(i)/2,r:"2",fill:r(a)[1]},[V("animate",{id:l,attributeName:"fill",values:`${r(a)[1]};${r(a)[0]}`,begin:`0s;${g}.end`,dur:"0.3s",fill:"freeze"},null,8,Fb)],8,Nb),V("circle",{cx:r(n)*.2,cy:r(i)/2,r:"2",fill:r(a)[1]},[V("animate",{id:d,attributeName:"fill",values:`${r(a)[1]};${r(a)[0]}`,begin:`${u}.end`,dur:"0.3s",fill:"freeze"},null,8,Gb),V("animate",{attributeName:"fill",values:`${r(a)[1]};${r(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,Vb)],8,Bb),V("circle",{cx:r(n)*.8,cy:r(i)/2,r:"2",fill:r(a)[1]},[V("animate",{id:h,attributeName:"fill",values:`${r(a)[1]};${r(a)[0]}`,begin:`${f}.end`,dur:"0.3s",fill:"freeze"},null,8,Wb),V("animate",{attributeName:"fill",values:`${r(a)[1]};${r(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,Hb)],8,jb),V("circle",{cx:r(n)-2,cy:r(i)/2,r:"2",fill:r(a)[1]},[V("animate",{id:g,attributeName:"fill",values:`${r(a)[1]};${r(a)[0]}`,begin:`${p}.end`,dur:"0.3s",fill:"freeze"},null,8,Yb),V("animate",{attributeName:"fill",values:`${r(a)[1]};${r(a)[1]}`,dur:"0.01s",begin:`${g}.end`,fill:"freeze"},null,8,Jb)],8,$b)],8,Tb))]))}});const qb=u2(Zb,[["__scopeId","data-v-33f0e0ac"]]),Xb=Object.freeze(Object.defineProperty({__proto__:null,default:qb},Symbol.toStringTag,{value:"Module"})),Qb={class:"go-border-06"},Kb=["width","height"],ex=["points"],tx=["points"],nx=["points"],ix=["points"],ox=["points"],ax=["points"],rx=["points"],sx={class:"text"},lx=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(u=>({"30f2c0b4":r(i)[0],"30f2c076":r(i)[1],32016584:r(l),f68b5eba:r(s)+"px"})),N4();const{w:t,h:n}=S1(e.chartConfig.attr),{colors:i,dataset:a,textSize:s,textColor:l}=S1(e.chartConfig.option);return(u,d)=>(R(),Q("div",Qb,[(R(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",width:r(t),height:r(n)},[V("polygon",{class:"stroke fill",points:"15.5 6.5 20.5 0.5 50.5 0.5 55.5 6.5 15.5 6.5"},null,8,ex),V("polygon",{class:"stroke fill",points:`15.5 ${r(n)-6.5} 20.5 ${r(n)-.5} 50.5 ${r(n)-.5} 55.5 ${r(n)-6.5} 15.5 ${r(n)-6.5}`},null,8,tx),V("polygon",{class:"stroke fill",points:`${r(t)-15.5} 6.5 ${r(t)-20.5} 0.5 ${r(t)-50.5} 0.5 ${r(t)-55.5} 6.5 ${r(t)-15.5} 6.5`},null,8,nx),V("polygon",{class:"stroke fill",points:`${r(t)-15.5} ${r(n)-6.5} ${r(t)-20.5} ${r(n)-.5} ${r(t)-50.5} ${r(n)-.5} ${r(t)-55.5} ${r(n)-6.5} ${r(t)-15.5} ${r(n)-6.5}`},null,8,ix),V("polygon",{class:"stroke fill",points:`15.5 6.5 0.5 ${r(n)/2} 15.5 ${r(n)-6.5} ${r(t)-15.5} ${r(n)-6.5} ${r(t)-.5} ${r(n)/2} ${r(t)-15.5} 6.5 15.5 6.5`},null,8,ox),V("polyline",{class:"stroke fill-none",points:`20.5 14.5 8.5 ${r(n)/2} 20.5 ${r(n)-14.5}`},null,8,ax),V("polyline",{class:"stroke fill-none",points:`${r(t)-20.5} 14.5 ${r(t)-8.5} ${r(n)/2} ${r(t)-20.5} ${r(n)-14.5}`},null,8,rx)],8,Kb)),V("span",sx,T2(r(a)),1)]))}});const ux=u2(lx,[["__scopeId","data-v-db506cc9"]]),cx=Object.freeze(Object.defineProperty({__proto__:null,default:ux},Symbol.toStringTag,{value:"Module"})),dx=["width","height"],fx=["stroke-width","points","stroke"],px=["stroke-width","points","stroke"],hx=["stroke-width","points","stroke"],mx=["stroke-width","points","stroke"],gx=["stroke-width","points","stroke"],vx=["stroke-width","points","stroke"],_x=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{lineNum:i,lineNumUp:a,lineWidth:s,backgroundCol:l,animateCol:u}=S1(e.chartConfig.option),d=(f,h)=>{const p=t.value/2,g=n.value/(a.value+i.value)-s.value/(a.value+i.value);if(f===-1&&h==="")return`0,${n.value/2} ${p},${n.value/2} ${p*2},${n.value/2}`;if(f!==-1&&h==="down")return`0,${n.value/2} ${p},${n.value/2} ${p},${n.value/2+f*g},${p*2},${n.value/2+f*g}`;if(f!==-1&&h==="up")return`0,${n.value/2} ${p},${n.value/2} ${p},${n.value/2-f*g},${p*2},${n.value/2-f*g}`};return(f,h)=>(R(),Q("svg",{width:r(t),height:r(n)},[V("polyline",{"stroke-width":r(s),points:d(-1,""),stroke:r(l),fill:"none"},null,8,fx),V("polyline",{"stroke-width":r(s),class:"g-dashed-line",points:d(-1,""),stroke:r(u),fill:"none"},null,8,px),(R(!0),Q(x1,null,j1(r(i),(p,g)=>(R(),Q("polyline",{"stroke-width":r(s),key:g,points:d(g+1,"down"),stroke:r(l),fill:"none"},null,8,hx))),128)),(R(!0),Q(x1,null,j1(r(i),(p,g)=>(R(),Q("polyline",{"stroke-width":r(s),class:"g-dashed-line",key:g,points:d(g+1,"down"),stroke:r(u),fill:"none"},null,8,mx))),128)),(R(!0),Q(x1,null,j1(r(a),(p,g)=>(R(),Q("polyline",{"stroke-width":r(s),key:g,points:d(g+1,"up"),stroke:r(l),fill:"none"},null,8,gx))),128)),(R(!0),Q(x1,null,j1(r(a),(p,g)=>(R(),Q("polyline",{"stroke-width":r(s),class:"g-dashed-line",key:g,points:d(g+1,"up"),stroke:r(u),fill:"none"},null,8,vx))),128))],8,dx))}});const yx=u2(_x,[["__scopeId","data-v-a9d0aef4"]]),bx=Object.freeze(Object.defineProperty({__proto__:null,default:yx},Symbol.toStringTag,{value:"Module"})),xx=["width","height"],Sx=V("defs",null,[V("filter",{id:"blurFilter",x:"-20%",y:"-20%",width:"140%",height:"140%"},[V("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"1"})])],-1),Mx=["cx","cy","r","fill"],Ax=["cx","cy","r","stroke","stroke-width"],wx=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{outCircle:i,inCircle:a,outCircleColor:s,inCircleColor:l,outCircleWidth:u}=S1(e.chartConfig.option);return(d,f)=>(R(),Q("svg",{width:r(t),height:r(n)},[Sx,V("circle",{cx:r(t)/2,cy:r(n)/2,r:r(a),fill:r(l),filter:"url(#blurFilter)"},null,8,Mx),V("circle",{cx:r(t)/2,cy:r(n)/2,r:r(i),fill:"none",stroke:r(s),"stroke-width":r(u)},null,8,Ax)],8,xx))}}),Cx=Object.freeze(Object.defineProperty({__proto__:null,default:wx},Symbol.toStringTag,{value:"Module"})),Tx=o=>(v0("data-v-b4d0ec68"),o=o(),_0(),o),Ex={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"},Dx=Ws('<filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%" data-v-b4d0ec68><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" data-v-b4d0ec68></feGaussianBlur><feOffset in="blur" dx="2.5" dy="2.5" data-v-b4d0ec68></feOffset></filter><g data-v-b4d0ec68><circle id="shadow" style="fill:rgba(0, 0, 0, 0.1);" cx="100" cy="100" r="87" filter="url(#innerShadow)" data-v-b4d0ec68></circle><circle id="circle" class="clock-border" cx="100" cy="100" r="80" data-v-b4d0ec68></circle></g>',2),Rx={x1:"100",y1:"100",x2:"100",y2:"55",style:{"stroke-width":"3px"},class:"clock-line"},Ix=["from","to"],Ox={x1:"100",y1:"100",x2:"100",y2:"40",style:{"stroke-width":"4px"},class:"clock-line"},Lx=["from","to"],zx={x1:"100",y1:"100",x2:"100",y2:"30",style:{"stroke-width":"2px"},class:"clock-line"},Px=["from","to"],kx=Tx(()=>V("circle",{id:"center",style:{fill:"#128a86",stroke:"#c1efed","stroke-width":"2px"},cx:"100",cy:"100",r:"3"},null,-1)),Ux=["transform"],Nx=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(f=>({"47fe3763":r(a),46891283:r(t)+"px","7239e62c":r(i),"67e7692f":r(n)}));let{border:t,color:n,bgColor:i,borderColor:a}=S1(e.chartConfig.option);const s=new Date,l=360*s.getHours()/12+s.getMinutes()/2,u=360*s.getMinutes()/60,d=360*s.getSeconds()/60;return(f,h)=>(R(),Q("svg",Ex,[Dx,V("g",null,[V("line",Rx,[V("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"43200s",repeatCount:"indefinite",from:`${l} 100 100`,to:`${l+360} 100 100`},null,8,Ix)]),V("line",Ox,[V("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"3600s",repeatCount:"indefinite",from:`${u} 100 100`,to:`${u+360} 100 100`},null,8,Lx)]),V("line",zx,[V("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"60s",repeatCount:"indefinite",from:`${d} 100 100`,to:`${d+360} 100 100`},null,8,Px)])]),kx,(R(),Q(x1,null,j1(12,p=>V("line",{x1:"100",y1:"30",x2:"100",y2:"40",class:"clock-line",transform:`rotate(${(p+1)*360/12} 100 100)`,key:`line_${p+1}`},null,8,Ux)),64))]))}});const Fx=u2(Nx,[["__scopeId","data-v-b4d0ec68"]]),Bx=Object.freeze(Object.defineProperty({__proto__:null,default:Fx},Symbol.toStringTag,{value:"Module"})),Gx=["data-front"],Vx=["data-back"],jx=l1({__name:"index",props:{flipType:{type:String,default:()=>"down"},count:{type:[Number,String],default:0},duration:{type:Number,default:600},width:{type:Number,default:60},height:{type:Number,default:100},radius:{type:Number,default:10},frontColor:{type:String,default:"#ffffff"},backColor:{type:String,default:"#000000"},borderWidth:{type:Number,default:2}},setup(o){const e=o;a4(l=>({"06b40856":e.frontColor,"39840b7e":e.backColor,ddd97676:`${e.radius}px`,43622609:`${e.width}px`,"4281d24c":`${e.height}px`,"45eb2214":`${e.height*2}px`,"6026284e":`${e.borderWidth*2}px`,"76a98bc6":`${e.duration/1e3}s`}));const t=H1(!1),n=H1(e.count||0),i=H1(e.count||0);let a=0;const s=(l,u)=>O2(this,null,function*(){if(t.value){t.value=!1,clearTimeout(a),yield Y0(),yield s(l,u);return}i.value=u,n.value=l,t.value=!0,a=setTimeout(()=>{t.value=!1,n.value=u},e.duration)});return P1(()=>e.count,(l,u)=>{s(u,l)},{immediate:!0}),(l,u)=>(R(),Q("div",{class:k5(["go-flipper",[o.flipType,{go:t.value}]])},[V("div",{class:"digital front","data-front":n.value},null,8,Gx),V("div",{class:"digital back","data-back":i.value},null,8,Vx)],2))}});const f5=u2(jx,[["__scopeId","data-v-ce6b5020"]]),Wx={key:0},Hx={key:1},$x={key:1},Yx={key:2},Jx={key:3},Zx={key:4},qx={key:5},Xx=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(X=>({a0c42b24:`${r(t)}px`,a26aec42:`${r(n)}px`,"225bc0d6":`${r(h)}px`,bd636264:`${r(p)}px`,"48414a19":r(f)}));const{w:t,h:n}=S1(e.chartConfig.attr),{dataset:i,useEndDate:a,endDate:s,style:l,showDay:u,flipperBgColor:d,flipperTextColor:f,flipperWidth:h,flipperHeight:p,flipperRadius:g,flipperGap:y,flipperType:v,flipperSpeed:_}=S1(e.chartConfig.option),S=H1(),x=H1(!1),M=H1(i.value*1e3),b=H1([]),C=H1([]),w=H1([]),I=H1([]),T=X=>{const B=Math.max(X.toString().length,2);return X.toString().padStart(B,"0").split("")},E=(X,B,O)=>{const F=Math.floor(X/24);b.value=T(F),C.value=T(u.value?X%24:X),w.value=T(B),I.value=T(O)},z=({hours:X,minutes:B,seconds:O})=>{E(X,B,O)},W=()=>{var X,B;try{x.value=!1,M.value=a.value?s.value-new Date().getTime():i.value*1e3,(X=S.value)!=null&&X.reset&&((B=S.value)==null||B.reset()),x.value=!0}catch(O){console.log(O)}};return P1(()=>e.chartConfig.option.dataset,()=>{W()},{immediate:!0}),P1(()=>e.chartConfig.option.endDate,()=>{W()},{immediate:!0}),P1(()=>e.chartConfig.option.useEndDate,()=>{W()},{immediate:!0}),g0(()=>{W()}),(X,B)=>{const O=L("n-countdown"),F=L("n-space");return R(),Q("div",null,[Hs(c(O,{ref_key:"countdownRef",ref:S,duration:M.value,render:z,active:x.value},null,8,["duration","active"]),[[$s,!1]]),c(F,{class:"go-decorates-more-countdown",size:r(y),align:"center",justify:"center"},{default:m(()=>[r(u)?(R(),Q(x1,{key:0},[(R(!0),Q(x1,null,j1(b.value,(Y,H)=>(R(),c1(r(f5),{count:Y,width:r(h),height:r(p),"front-color":r(f),"back-color":r(d),radius:r(g),"flip-type":r(v),duration:r(_),key:H,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),r(l)==="时分秒"?(R(),Q("div",Wx,"天")):(R(),Q("div",Hx,":"))],64)):l2("",!0),(R(!0),Q(x1,null,j1(C.value,(Y,H)=>(R(),c1(r(f5),{count:Y,width:r(h),height:r(p),"front-color":r(f),"back-color":r(d),radius:r(g),"flip-type":r(v),duration:r(_),key:H,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),r(l)==="时分秒"?(R(),Q("div",$x,"时")):(R(),Q("div",Yx,":")),(R(!0),Q(x1,null,j1(w.value,(Y,H)=>(R(),c1(r(f5),{count:Y,width:r(h),height:r(p),"front-color":r(f),"back-color":r(d),radius:r(g),"flip-type":r(v),duration:r(_),key:H,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),r(l)==="时分秒"?(R(),Q("div",Jx,"分")):(R(),Q("div",Zx,":")),(R(!0),Q(x1,null,j1(I.value,(Y,H)=>(R(),c1(r(f5),{count:Y,width:r(h),height:r(p),"front-color":r(f),"back-color":r(d),radius:r(g),"flip-type":r(v),duration:r(_),key:H,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration"]))),128)),r(l)==="时分秒"?(R(),Q("div",qx,"秒")):l2("",!0)]),_:1},8,["size"])])}}});const Qx=u2(Xx,[["__scopeId","data-v-c49213a2"]]),Kx=Object.freeze(Object.defineProperty({__proto__:null,default:Qx},Symbol.toStringTag,{value:"Module"})),eS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(S=>({"0aa6998a":`${r(t)}px`,"09d338fb":`${r(n)}px`}));const{w:t,h:n}=S1(e.chartConfig.attr),{flipperLength:i,flipperBgColor:a,flipperTextColor:s,flipperWidth:l,flipperHeight:u,flipperRadius:d,flipperGap:f,flipperType:h,flipperSpeed:p,flipperBorderWidth:g}=S1(e.chartConfig.option),y=H1([]),v=S=>S.toString().padStart(i.value,"0").split("").slice(i.value*-1),_=S=>{y.value=v(S)};return P1(()=>e.chartConfig.option,S=>{try{_(S.dataset)}catch(x){console.log(x)}},{immediate:!0,deep:!0}),p2(e.chartConfig,q1,S=>{_(S)}),(S,x)=>{const M=L("n-space");return R(),c1(M,{class:"go-decorates-flipper-number",size:r(f),align:"center",justify:"center"},{default:m(()=>[(R(!0),Q(x1,null,j1(y.value,(b,C)=>(R(),c1(r(f5),{count:b,width:r(l),height:r(u),"front-color":r(s),"back-color":r(a),radius:r(d),"flip-type":r(h),duration:r(p),"border-width":r(g),key:C,class:"go-d-block"},null,8,["count","width","height","front-color","back-color","radius","flip-type","duration","border-width"]))),128))]),_:1},8,["size"])}}});const tS=u2(eS,[["__scopeId","data-v-a957e66d"]]),nS=Object.freeze(Object.defineProperty({__proto__:null,default:tS},Symbol.toStringTag,{value:"Module"})),Ea=o=>(v0("data-v-f1e3bbdb"),o=o(),_0(),o),iS=Ea(()=>V("path",{d:"M665.6 1017.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h268.8l6.4-268.8c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v294.4c0 32-25.6 51.2-51.2 51.2h-300.8zM51.2 396.8c-19.2 0-38.4-19.2-38.4-38.4V64C12.8 32 38.4 12.8 64 12.8h294.4c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H89.6v268.8c0 19.2-19.2 38.4-38.4 38.4zM64 1017.6c-32 0-51.2-25.6-51.2-51.2v-294.4c0-19.2 19.2-38.4 38.4-38.4s38.4 19.2 38.4 38.4v217.6l198.4-198.4c6.4-6.4 19.2-12.8 25.6-12.8s19.2 6.4 25.6 12.8c6.4 6.4 12.8 19.2 12.8 25.6 0 12.8-6.4 19.2-12.8 25.6l-198.4 198.4h217.6c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4H64z m915.2-620.8c-19.2 0-38.4-19.2-38.4-38.4V140.8l-198.4 198.4c-6.4 6.4-19.2 12.8-25.6 12.8-12.8 0-19.2-6.4-25.6-12.8-12.8-12.8-12.8-38.4 0-51.2l198.4-198.4h-217.6c-19.2 0-38.4-19.2-38.4-38.4s19.2-38.4 38.4-38.4h294.4c32 0 51.2 25.6 51.2 51.2v294.4c0 19.2-19.2 38.4-38.4 38.4z",class:"fullScreen-border"},null,-1)),oS=[iS],aS=Ea(()=>V("path",{d:"M379.336 697.237L153.362 921.55c-14.11 14.007-36.905 13.922-50.912-0.188-14.007-14.11-13.922-36.905 0.188-50.912l227.6-225.927H138.645c-18.99 0-34.385-15.446-34.385-34.5 0-19.053 15.395-34.5 34.385-34.5H413.72c18.99 0 34.384 15.447 34.384 34.5v276c0 9.15-3.622 17.926-10.07 24.396a34.326 34.326 0 0 1-24.314 10.104 34.326 34.326 0 0 1-24.314-10.104 34.559 34.559 0 0 1-10.071-24.396V697.237z m263.395-366.88l227.813-227.813c14.059-14.059 36.853-14.059 50.912 0 14.059 14.059 14.059 36.853 0 50.912l-225.18 225.18h187.147c18.99 0 34.385 15.445 34.385 34.5 0 19.053-15.395 34.5-34.385 34.5H608.346c-18.99 0-34.384-15.447-34.384-34.5v-276c0-9.15 3.622-17.926 10.07-24.396a34.326 34.326 0 0 1 24.314-10.105c9.12 0 17.865 3.635 24.314 10.105a34.559 34.559 0 0 1 10.07 24.395v193.223zM99.385 410a34.326 34.326 0 0 1-24.314-10.105A34.559 34.559 0 0 1 65 375.5v-276C65 80.446 80.395 65 99.385 65h275.077c18.99 0 34.384 15.446 34.384 34.5 0 19.054-15.394 34.5-34.384 34.5H133.769v241.5c0 9.15-3.622 17.925-10.07 24.395A34.326 34.326 0 0 1 99.384 410z m825.23 552H649.538c-18.99 0-34.384-15.446-34.384-34.5 0-19.054 15.394-34.5 34.384-34.5h240.693V651.5c0-19.054 15.394-34.5 34.384-34.5 18.99 0 34.385 15.446 34.385 34.5v276c0 19.054-15.395 34.5-34.385 34.5z",class:"fullScreen-border"},null,-1)),rS=[aS],sS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(f=>({"5591d40a":r(i),"541caf2a":r(t)+"px",ead5d5de:r(n)}));let{border:t,bgColor:n,borderColor:i}=S1(e.chartConfig.option);const a=H1(!1),s=()=>{a.value=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)};s();const l=f=>{f.requestFullscreen?f.requestFullscreen():document.mozRequestFullScreen?document.mozRequestFullScreen():document.webkitRequestFullscreen?document.webkitRequestFullscreen():document.msRequestFullscreen&&document.msRequestFullscreen()},u=()=>{document.fullscreenElement&&document.exitFullscreen?document.exitFullscreen():document.mozFullScreenElement&&document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitFullscreenElement&&document.webkitExitFullscreen?document.webkitExitFullscreen():document.msFullscreenElement&&document.msExitFullscreen&&document.msExitFullscreen()},d=()=>{a.value?u():l(document.documentElement),a.value=!a.value,setTimeout(()=>{s()},1e3)};return g0(()=>{document.addEventListener("fullscreenchange",s),document.addEventListener("webkitfullscreenchange",s),document.addEventListener("mozfullscreenchange",s),document.addEventListener("MSFullscreenChange",s)}),n0(()=>{document.removeEventListener("fullscreenchange",s),document.removeEventListener("webkitfullscreenchange",s),document.removeEventListener("mozfullscreenchange",s),document.removeEventListener("MSFullscreenChange",s)}),(f,h)=>a.value?(R(),Q("svg",{key:1,onClick:d,viewBox:"0 0 1024 1024"},rS)):(R(),Q("svg",{key:0,onClick:d,viewBox:"0 0 1024 1024"},oS))}});const lS=u2(sS,[["__scopeId","data-v-f1e3bbdb"]]),uS=Object.freeze(Object.defineProperty({__proto__:null,default:lS},Symbol.toStringTag,{value:"Module"})),cS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=V3({from:0,dataset:0});S1(e.chartConfig.attr);let{dur:n,showSeparator:i,prefixText:a,prefixColor:s,suffixText:l,suffixColor:u,precision:d,numberSize:f,numberColor:h}=S1(e.chartConfig.option);const p=g=>{t.from=t.dataset,t.dataset=g};return P1(()=>e.chartConfig.option.from,()=>{t.from=e.chartConfig.option.from},{immediate:!0}),P1(()=>e.chartConfig.option.dataset,()=>{t.dataset=e.chartConfig.option.dataset},{immediate:!0,deep:!1}),p2(e.chartConfig,q1,p),(g,y)=>{const v=L("n-number-animation"),_=L("n-statistic");return R(),c1(_,{"tabular-nums":"",class:"go-decorates-number"},{prefix:m(()=>[V("span",{style:f2(`color:${r(s)};font-size:${r(f)}px`)},T2(r(a)),5)]),suffix:m(()=>[V("span",{style:f2(`color:${r(u)};font-size:${r(f)}px`)},T2(r(l)),5)]),default:m(()=>[V("span",{style:f2(`color:${r(h)};font-size:${r(f)}px`)},[c(v,{from:t.from,to:t.dataset,duration:r(n)*1e3,"show-separator":r(i),precision:r(d)},null,8,["from","to","duration","show-separator","precision"])],4)]),_:1})}}});const dS=u2(cS,[["__scopeId","data-v-58b96eba"]]),fS=Object.freeze(Object.defineProperty({__proto__:null,default:dS},Symbol.toStringTag,{value:"Module"})),pS={class:"go-decorates-line"},hS=["width","height"],mS=["y1","x2","y2","stroke","stroke-width"],gS=["y1","x2","y2","stroke","stroke-width"],vS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{o_color:i,i_color:a,line_class:s}=S1(e.chartConfig.option);return(l,u)=>(R(),Q("div",pS,[(R(),Q("svg",{width:r(t),height:r(n)},[V("line",{x1:0,y1:r(n)/2,x2:r(t),y2:r(n)/2,stroke:r(i),"stroke-width":r(n)},null,8,mS),V("line",{x1:0,y1:r(n)/2,x2:r(t),y2:r(n)/2,stroke:r(a),"stroke-width":r(n)/2,class:k5(r(s))},null,10,gS)],8,hS))]))}});const _S=u2(vS,[["__scopeId","data-v-08b081bc"]]),yS=Object.freeze(Object.defineProperty({__proto__:null,default:_S},Symbol.toStringTag,{value:"Module"})),bS={class:"go-decorates-line"},xS=["width","height"],SS=["x1","x2","y2","stroke","stroke-width"],MS=["x1","x2","y2","stroke","stroke-width"],AS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{o_color:i,i_color:a,line_class:s}=S1(e.chartConfig.option);return(l,u)=>(R(),Q("div",bS,[(R(),Q("svg",{width:r(t),height:r(n)},[V("line",{x1:r(t)/2,y1:0,x2:r(t)/2,y2:r(n),stroke:r(i),"stroke-width":r(t)},null,8,SS),V("line",{x1:r(t)/2,y1:0,x2:r(t)/2,y2:r(n),stroke:r(a),"stroke-width":r(t)/2,class:k5(r(s))},null,10,MS)],8,xS))]))}});const wS=u2(AS,[["__scopeId","data-v-8d16a9c4"]]),CS=Object.freeze(Object.defineProperty({__proto__:null,default:wS},Symbol.toStringTag,{value:"Module"})),TS=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;let t=H1("2021-2-3"),n=H1("08:00:00"),i=H1("2021-2-3 08:00:00"),a=H1("none"),s=null;const{w:l,h:u}=S1(e.chartConfig.attr);let{timeColor:d,timeSize:f,timeLineHeight:h,timeTextIndent:p,fontWeight:g,showShadow:y,hShadow:v,vShadow:_,blurShadow:S,colorShadow:x}=S1(e.chartConfig.option);return P1(e.chartConfig.option,()=>{try{e.chartConfig.option.showShadow?a.value=`${e.chartConfig.option.hShadow}px ${e.chartConfig.option.vShadow}px ${e.chartConfig.option.blurShadow}px ${e.chartConfig.option.colorShadow}`:a.value="none"}catch(M){console.log(M)}},{immediate:!0}),g0(()=>{s=setInterval(()=>{var M=new Date,b=M.getFullYear(),C=M.getMonth()+1<10?"0"+(M.getMonth()+1):M.getMonth()+1,w=M.getDate()<10?"0"+M.getDate():M.getDate(),I=M.getHours(),T=M.getMinutes(),E=M.getSeconds();let z="";I<10&&(z+="0"),z+=I+":",T<10&&(z+="0"),z+=T+":",E<10&&(z+="0"),z+=E,t.value=`${b}-${C}-${w}`,n.value=z,i.value=t.value+" "+n.value},500)}),n0(()=>{clearInterval(s)}),p2(e.chartConfig,q1),(M,b)=>(R(),Q("div",{class:"go-decorates-number",style:f2(`width:${r(l)}px;height:${r(u)}px;`)},[V("div",{style:f2(`color:${r(d)};font-size:${r(f)}px;line-height:${r(h)}px;
      letter-spacing:${r(p)}px;font-weight:${r(g)};
      text-shadow: ${r(a)}`)},T2(r(i)),5)],4))}});const ES=u2(TS,[["__scopeId","data-v-c7a246c7"]]),DS=Object.freeze(Object.defineProperty({__proto__:null,default:ES},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jt="145",e9={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t9={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RS=0,Pn=1,IS=2,Da=1,OS=2,p5=3,N9=0,n4=1,_4=2,l0=0,U0=1,kn=2,Un=3,Nn=4,LS=5,S9=100,zS=101,PS=102,Fn=103,Bn=104,kS=200,US=201,NS=202,FS=203,Ra=204,Ia=205,BS=206,GS=207,VS=208,jS=209,WS=210,HS=0,$S=1,YS=2,fe=3,JS=4,ZS=5,qS=6,XS=7,Oa=0,QS=1,KS=2,F4=0,eM=1,tM=2,nM=3,iM=4,oM=5,La=300,F9=301,B9=302,pe=303,he=304,t6=306,me=1e3,d4=1001,ge=1002,x3=1003,Gn=1004,Vn=1005,Z3=1006,aM=1007,n6=1008,j0=1009,rM=1010,sM=1011,za=1012,lM=1013,O0=1014,L0=1015,C5=1016,uM=1017,cM=1018,L9=1020,dM=1021,fM=1022,y4=1023,pM=1024,hM=1025,N0=1026,G9=1027,mM=1028,gM=1029,vM=1030,_M=1031,yM=1033,y6=33776,b6=33777,x6=33778,S6=33779,jn=35840,Wn=35841,Hn=35842,$n=35843,bM=36196,Yn=37492,Jn=37496,Zn=37808,qn=37809,Xn=37810,Qn=37811,Kn=37812,ei=37813,ti=37814,ni=37815,ii=37816,oi=37817,ai=37818,ri=37819,si=37820,li=37821,ui=36492,W0=3e3,F2=3001,xM=3200,SM=3201,MM=0,AM=1,I4="srgb",z0="srgb-linear",M6=7680,wM=519,ve=35044,ci="300 es",_e=1035;class J0{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const p3=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],A6=Math.PI/180,di=180/Math.PI;function u0(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(p3[o&255]+p3[o>>8&255]+p3[o>>16&255]+p3[o>>24&255]+"-"+p3[e&255]+p3[e>>8&255]+"-"+p3[e>>16&15|64]+p3[e>>24&255]+"-"+p3[t&63|128]+p3[t>>8&255]+"-"+p3[t>>16&255]+p3[t>>24&255]+p3[n&255]+p3[n>>8&255]+p3[n>>16&255]+p3[n>>24&255]).toLowerCase()}function m3(o,e,t){return Math.max(e,Math.min(t,o))}function CM(o,e){return(o%e+e)%e}function w6(o,e,t){return(1-t)*o+t*e}function fi(o){return(o&o-1)===0&&o!==0}function ye(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function i0(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function w2(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class G1{constructor(e=0,t=0){G1.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class X3{constructor(){X3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,a,s,l,u,d){const f=this.elements;return f[0]=e,f[1]=i,f[2]=l,f[3]=t,f[4]=a,f[5]=u,f[6]=n,f[7]=s,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[3],u=n[6],d=n[1],f=n[4],h=n[7],p=n[2],g=n[5],y=n[8],v=i[0],_=i[3],S=i[6],x=i[1],M=i[4],b=i[7],C=i[2],w=i[5],I=i[8];return a[0]=s*v+l*x+u*C,a[3]=s*_+l*M+u*w,a[6]=s*S+l*b+u*I,a[1]=d*v+f*x+h*C,a[4]=d*_+f*M+h*w,a[7]=d*S+f*b+h*I,a[2]=p*v+g*x+y*C,a[5]=p*_+g*M+y*w,a[8]=p*S+g*b+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],u=e[6],d=e[7],f=e[8];return t*s*f-t*l*d-n*a*f+n*l*u+i*a*d-i*s*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],u=e[6],d=e[7],f=e[8],h=f*s-l*d,p=l*u-f*a,g=d*a-s*u,y=t*h+n*p+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=h*v,e[1]=(i*d-f*n)*v,e[2]=(l*n-i*s)*v,e[3]=p*v,e[4]=(f*t-i*u)*v,e[5]=(i*a-l*t)*v,e[6]=g*v,e[7]=(n*u-d*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,l){const u=Math.cos(a),d=Math.sin(a);return this.set(n*u,n*d,-n*(u*s+d*l)+s+e,-i*d,i*u,-i*(-d*s+u*l)+l+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],d=i[4],f=i[7];return i[0]=t*a+n*u,i[3]=t*s+n*d,i[6]=t*l+n*f,i[1]=-n*a+t*u,i[4]=-n*s+t*d,i[7]=-n*l+t*f,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Pa(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function T5(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function F0(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function D8(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const C6={[I4]:{[z0]:F0},[z0]:{[I4]:D8}},s4={legacyMode:!0,get workingColorSpace(){return z0},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(C6[e]&&C6[e][t]!==void 0){const n=C6[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Q2={r:0,g:0,b:0},l4={h:0,s:0,l:0},K5={h:0,s:0,l:0};function T6(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function e8(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class _2{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=I4){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,s4.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=z0){return this.r=e,this.g=t,this.b=n,s4.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=z0){if(e=CM(e,1),t=m3(t,0,1),n=m3(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=T6(s,a,e+1/3),this.g=T6(s,a,e),this.b=T6(s,a,e-1/3)}return s4.toWorkingColorSpace(this,i),this}setStyle(e,t=I4){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],l=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,s4.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,s4.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const u=parseFloat(a[1])/360,d=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return n(a[4]),this.setHSL(u,d,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,s4.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,s4.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=I4){const n=ka[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=F0(e.r),this.g=F0(e.g),this.b=F0(e.b),this}copyLinearToSRGB(e){return this.r=D8(e.r),this.g=D8(e.g),this.b=D8(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=I4){return s4.fromWorkingColorSpace(e8(this,Q2),e),m3(Q2.r*255,0,255)<<16^m3(Q2.g*255,0,255)<<8^m3(Q2.b*255,0,255)<<0}getHexString(e=I4){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=z0){s4.fromWorkingColorSpace(e8(this,Q2),t);const n=Q2.r,i=Q2.g,a=Q2.b,s=Math.max(n,i,a),l=Math.min(n,i,a);let u,d;const f=(l+s)/2;if(l===s)u=0,d=0;else{const h=s-l;switch(d=f<=.5?h/(s+l):h/(2-s-l),s){case n:u=(i-a)/h+(i<a?6:0);break;case i:u=(a-n)/h+2;break;case a:u=(n-i)/h+4;break}u/=6}return e.h=u,e.s=d,e.l=f,e}getRGB(e,t=z0){return s4.fromWorkingColorSpace(e8(this,Q2),t),e.r=Q2.r,e.g=Q2.g,e.b=Q2.b,e}getStyle(e=I4){return s4.fromWorkingColorSpace(e8(this,Q2),e),e!==I4?`color(${e} ${Q2.r} ${Q2.g} ${Q2.b})`:`rgb(${Q2.r*255|0},${Q2.g*255|0},${Q2.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(l4),l4.h+=e,l4.s+=t,l4.l+=n,this.setHSL(l4.h,l4.s,l4.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(l4),e.getHSL(K5);const n=w6(l4.h,K5.h,t),i=w6(l4.s,K5.s,t),a=w6(l4.l,K5.l,t);return this.setHSL(n,i,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}_2.NAMES=ka;let n9;class Ua{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{n9===void 0&&(n9=T5("canvas")),n9.width=e.width,n9.height=e.height;const n=n9.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=n9}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=T5("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=F0(a[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(F0(t[n]/255)*255):t[n]=F0(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Na{constructor(e=null){this.isSource=!0,this.uuid=u0(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?a.push(E6(i[s].image)):a.push(E6(i[s]))}else a=E6(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function E6(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Ua.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TM=0;class i4 extends J0{constructor(e=i4.DEFAULT_IMAGE,t=i4.DEFAULT_MAPPING,n=d4,i=d4,a=Z3,s=n6,l=y4,u=j0,d=1,f=W0){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=u0(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new G1(0,0),this.repeat=new G1(1,1),this.center=new G1(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==La)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case me:e.x=e.x-Math.floor(e.x);break;case d4:e.x=e.x<0?0:1;break;case ge:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case me:e.y=e.y-Math.floor(e.y);break;case d4:e.y=e.y<0?0:1;break;case ge:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}i4.DEFAULT_IMAGE=null;i4.DEFAULT_MAPPING=La;class c3{constructor(e=0,t=0,n=0,i=1){c3.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const u=e.elements,d=u[0],f=u[4],h=u[8],p=u[1],g=u[5],y=u[9],v=u[2],_=u[6],S=u[10];if(Math.abs(f-p)<.01&&Math.abs(h-v)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+v)<.1&&Math.abs(y+_)<.1&&Math.abs(d+g+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(d+1)/2,b=(g+1)/2,C=(S+1)/2,w=(f+p)/4,I=(h+v)/4,T=(y+_)/4;return M>b&&M>C?M<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(M),i=w/n,a=I/n):b>C?b<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(b),n=w/i,a=T/i):C<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(C),n=I/a,i=T/a),this.set(n,i,a,t),this}let x=Math.sqrt((_-y)*(_-y)+(h-v)*(h-v)+(p-f)*(p-f));return Math.abs(x)<.001&&(x=1),this.x=(_-y)/x,this.y=(h-v)/x,this.z=(p-f)/x,this.w=Math.acos((d+g+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H0 extends J0{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new c3(0,0,e,t),this.scissorTest=!1,this.viewport=new c3(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new i4(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Z3,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fa extends i4{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=x3,this.minFilter=x3,this.wrapR=d4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class EM extends i4{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=x3,this.minFilter=x3,this.wrapR=d4,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B4{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,l){let u=n[i+0],d=n[i+1],f=n[i+2],h=n[i+3];const p=a[s+0],g=a[s+1],y=a[s+2],v=a[s+3];if(l===0){e[t+0]=u,e[t+1]=d,e[t+2]=f,e[t+3]=h;return}if(l===1){e[t+0]=p,e[t+1]=g,e[t+2]=y,e[t+3]=v;return}if(h!==v||u!==p||d!==g||f!==y){let _=1-l;const S=u*p+d*g+f*y+h*v,x=S>=0?1:-1,M=1-S*S;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,S*x);_=Math.sin(_*w)/C,l=Math.sin(l*w)/C}const b=l*x;if(u=u*_+p*b,d=d*_+g*b,f=f*_+y*b,h=h*_+v*b,_===1-l){const C=1/Math.sqrt(u*u+d*d+f*f+h*h);u*=C,d*=C,f*=C,h*=C}}e[t]=u,e[t+1]=d,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,a,s){const l=n[i],u=n[i+1],d=n[i+2],f=n[i+3],h=a[s],p=a[s+1],g=a[s+2],y=a[s+3];return e[t]=l*y+f*h+u*g-d*p,e[t+1]=u*y+f*p+d*h-l*g,e[t+2]=d*y+f*g+l*p-u*h,e[t+3]=f*y-l*h-u*p-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,a=e._z,s=e._order,l=Math.cos,u=Math.sin,d=l(n/2),f=l(i/2),h=l(a/2),p=u(n/2),g=u(i/2),y=u(a/2);switch(s){case"XYZ":this._x=p*f*h+d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h-p*g*y;break;case"YXZ":this._x=p*f*h+d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h+p*g*y;break;case"ZXY":this._x=p*f*h-d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h-p*g*y;break;case"ZYX":this._x=p*f*h-d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h+p*g*y;break;case"YZX":this._x=p*f*h+d*g*y,this._y=d*g*h+p*f*y,this._z=d*f*y-p*g*h,this._w=d*f*h-p*g*y;break;case"XZY":this._x=p*f*h-d*g*y,this._y=d*g*h-p*f*y,this._z=d*f*y+p*g*h,this._w=d*f*h+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],l=t[5],u=t[9],d=t[2],f=t[6],h=t[10],p=n+l+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-u)*g,this._y=(a-d)*g,this._z=(s-i)*g}else if(n>l&&n>h){const g=2*Math.sqrt(1+n-l-h);this._w=(f-u)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(a+d)/g}else if(l>h){const g=2*Math.sqrt(1+l-n-h);this._w=(a-d)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+h-n-l);this._w=(s-i)/g,this._x=(a+d)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(m3(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,l=t._x,u=t._y,d=t._z,f=t._w;return this._x=n*f+s*l+i*d-a*u,this._y=i*f+s*u+a*l-n*d,this._z=a*f+s*d+n*u-i*l,this._w=s*f-n*l-i*u-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let l=s*e._w+n*e._x+i*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(u),f=Math.atan2(d,l),h=Math.sin((1-t)*f)/d,p=Math.sin(t*f)/d;return this._w=s*h+this._w*p,this._x=n*h+this._x*p,this._y=i*h+this._y*p,this._z=a*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pi.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,l=e.z,u=e.w,d=u*t+s*i-l*n,f=u*n+l*t-a*i,h=u*i+a*n-s*t,p=-a*t-s*n-l*i;return this.x=d*u+p*-a+f*-l-h*-s,this.y=f*u+p*-s+h*-a-d*-l,this.z=h*u+p*-l+d*-s-f*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,l=t.y,u=t.z;return this.x=i*u-a*l,this.y=a*s-n*u,this.z=n*l-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return D6.copy(this).projectOnVector(e),this.sub(D6)}reflect(e){return this.sub(D6.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(m3(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-bn(e,2));return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const D6=new Z,pi=new B4;class N5{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,a=-1/0,s=-1/0,l=-1/0;for(let u=0,d=e.length;u<d;u+=3){const f=e[u],h=e[u+1],p=e[u+2];f<t&&(t=f),h<n&&(n=h),p<i&&(i=p),f>a&&(a=f),h>s&&(s=h),p>l&&(l=p)}return this.min.set(t,n,i),this.max.set(a,s,l),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,a=-1/0,s=-1/0,l=-1/0;for(let u=0,d=e.count;u<d;u++){const f=e.getX(u),h=e.getY(u),p=e.getZ(u);f<t&&(t=f),h<n&&(n=h),p<i&&(i=p),f>a&&(a=f),h>s&&(s=h),p>l&&(l=p)}return this.min.set(t,n,i),this.max.set(a,s,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=M0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,l=a.count;s<l;s++)M0.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(M0)}else n.boundingBox===null&&n.computeBoundingBox(),R6.copy(n.boundingBox),R6.applyMatrix4(e.matrixWorld),this.union(R6);const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,M0),M0.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(i5),t8.subVectors(this.max,i5),i9.subVectors(e.a,i5),o9.subVectors(e.b,i5),a9.subVectors(e.c,i5),Y4.subVectors(o9,i9),J4.subVectors(a9,o9),A0.subVectors(i9,a9);let t=[0,-Y4.z,Y4.y,0,-J4.z,J4.y,0,-A0.z,A0.y,Y4.z,0,-Y4.x,J4.z,0,-J4.x,A0.z,0,-A0.x,-Y4.y,Y4.x,0,-J4.y,J4.x,0,-A0.y,A0.x,0];return!I6(t,i9,o9,a9,t8)||(t=[1,0,0,0,1,0,0,0,1],!I6(t,i9,o9,a9,t8))?!1:(n8.crossVectors(Y4,J4),t=[n8.x,n8.y,n8.z],I6(t,i9,o9,a9,t8))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return M0.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(M0).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(C4[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),C4[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),C4[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),C4[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),C4[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),C4[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),C4[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),C4[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(C4),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const C4=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],M0=new Z,R6=new N5,i9=new Z,o9=new Z,a9=new Z,Y4=new Z,J4=new Z,A0=new Z,i5=new Z,t8=new Z,n8=new Z,w0=new Z;function I6(o,e,t,n,i){for(let a=0,s=o.length-3;a<=s;a+=3){w0.fromArray(o,a);const l=i.x*Math.abs(w0.x)+i.y*Math.abs(w0.y)+i.z*Math.abs(w0.z),u=e.dot(w0),d=t.dot(w0),f=n.dot(w0);if(Math.max(-Math.max(u,d,f),Math.min(u,d,f))>l)return!1}return!0}const DM=new N5,hi=new Z,i8=new Z,O6=new Z;class F5{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):DM.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;O6.subVectors(e,this.center);const t=O6.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(O6.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?i8.set(0,0,1).multiplyScalar(e.radius):i8.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hi.copy(e.center).add(i8)),this.expandByPoint(hi.copy(e.center).sub(i8)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const T4=new Z,L6=new Z,o8=new Z,Z4=new Z,z6=new Z,a8=new Z,P6=new Z;class Wt{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,T4)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=T4.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(T4.copy(this.direction).multiplyScalar(t).add(this.origin),T4.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){L6.copy(e).add(t).multiplyScalar(.5),o8.copy(t).sub(e).normalize(),Z4.copy(this.origin).sub(L6);const a=e.distanceTo(t)*.5,s=-this.direction.dot(o8),l=Z4.dot(this.direction),u=-Z4.dot(o8),d=Z4.lengthSq(),f=Math.abs(1-s*s);let h,p,g,y;if(f>0)if(h=s*u-l,p=s*l-u,y=a*f,h>=0)if(p>=-y)if(p<=y){const v=1/f;h*=v,p*=v,g=h*(h+s*p+2*l)+p*(s*h+p+2*u)+d}else p=a,h=Math.max(0,-(s*p+l)),g=-h*h+p*(p+2*u)+d;else p=-a,h=Math.max(0,-(s*p+l)),g=-h*h+p*(p+2*u)+d;else p<=-y?(h=Math.max(0,-(-s*a+l)),p=h>0?-a:Math.min(Math.max(-a,-u),a),g=-h*h+p*(p+2*u)+d):p<=y?(h=0,p=Math.min(Math.max(-a,-u),a),g=p*(p+2*u)+d):(h=Math.max(0,-(s*a+l)),p=h>0?a:Math.min(Math.max(-a,-u),a),g=-h*h+p*(p+2*u)+d);else p=s>0?-a:a,h=Math.max(0,-(s*p+l)),g=-h*h+p*(p+2*u)+d;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(o8).multiplyScalar(p).add(L6),g}intersectSphere(e,t){T4.subVectors(e.center,this.origin);const n=T4.dot(this.direction),i=T4.dot(T4)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),l=n-s,u=n+s;return l<0&&u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,l,u;const d=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,i=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,i=(e.min.x-p.x)*d),f>=0?(a=(e.min.y-p.y)*f,s=(e.max.y-p.y)*f):(a=(e.max.y-p.y)*f,s=(e.min.y-p.y)*f),n>s||a>i||((a>n||n!==n)&&(n=a),(s<i||i!==i)&&(i=s),h>=0?(l=(e.min.z-p.z)*h,u=(e.max.z-p.z)*h):(l=(e.max.z-p.z)*h,u=(e.min.z-p.z)*h),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,T4)!==null}intersectTriangle(e,t,n,i,a){z6.subVectors(t,e),a8.subVectors(n,e),P6.crossVectors(z6,a8);let s=this.direction.dot(P6),l;if(s>0){if(i)return null;l=1}else if(s<0)l=-1,s=-s;else return null;Z4.subVectors(this.origin,e);const u=l*this.direction.dot(a8.crossVectors(Z4,a8));if(u<0)return null;const d=l*this.direction.dot(z6.cross(Z4));if(d<0||u+d>s)return null;const f=-l*Z4.dot(P6);return f<0?null:this.at(f/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class j2{constructor(){j2.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,a,s,l,u,d,f,h,p,g,y,v,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=i,S[1]=a,S[5]=s,S[9]=l,S[13]=u,S[2]=d,S[6]=f,S[10]=h,S[14]=p,S[3]=g,S[7]=y,S[11]=v,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new j2().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/r9.setFromMatrixColumn(e,0).length(),a=1/r9.setFromMatrixColumn(e,1).length(),s=1/r9.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),l=Math.sin(n),u=Math.cos(i),d=Math.sin(i),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const p=s*f,g=s*h,y=l*f,v=l*h;t[0]=u*f,t[4]=-u*h,t[8]=d,t[1]=g+y*d,t[5]=p-v*d,t[9]=-l*u,t[2]=v-p*d,t[6]=y+g*d,t[10]=s*u}else if(e.order==="YXZ"){const p=u*f,g=u*h,y=d*f,v=d*h;t[0]=p+v*l,t[4]=y*l-g,t[8]=s*d,t[1]=s*h,t[5]=s*f,t[9]=-l,t[2]=g*l-y,t[6]=v+p*l,t[10]=s*u}else if(e.order==="ZXY"){const p=u*f,g=u*h,y=d*f,v=d*h;t[0]=p-v*l,t[4]=-s*h,t[8]=y+g*l,t[1]=g+y*l,t[5]=s*f,t[9]=v-p*l,t[2]=-s*d,t[6]=l,t[10]=s*u}else if(e.order==="ZYX"){const p=s*f,g=s*h,y=l*f,v=l*h;t[0]=u*f,t[4]=y*d-g,t[8]=p*d+v,t[1]=u*h,t[5]=v*d+p,t[9]=g*d-y,t[2]=-d,t[6]=l*u,t[10]=s*u}else if(e.order==="YZX"){const p=s*u,g=s*d,y=l*u,v=l*d;t[0]=u*f,t[4]=v-p*h,t[8]=y*h+g,t[1]=h,t[5]=s*f,t[9]=-l*f,t[2]=-d*f,t[6]=g*h+y,t[10]=p-v*h}else if(e.order==="XZY"){const p=s*u,g=s*d,y=l*u,v=l*d;t[0]=u*f,t[4]=-h,t[8]=d*f,t[1]=p*h+v,t[5]=s*f,t[9]=g*h-y,t[2]=y*h-g,t[6]=l*f,t[10]=v*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,IM)}lookAt(e,t,n){const i=this.elements;return O3.subVectors(e,t),O3.lengthSq()===0&&(O3.z=1),O3.normalize(),q4.crossVectors(n,O3),q4.lengthSq()===0&&(Math.abs(n.z)===1?O3.x+=1e-4:O3.z+=1e-4,O3.normalize(),q4.crossVectors(n,O3)),q4.normalize(),r8.crossVectors(O3,q4),i[0]=q4.x,i[4]=r8.x,i[8]=O3.x,i[1]=q4.y,i[5]=r8.y,i[9]=O3.y,i[2]=q4.z,i[6]=r8.z,i[10]=O3.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[4],u=n[8],d=n[12],f=n[1],h=n[5],p=n[9],g=n[13],y=n[2],v=n[6],_=n[10],S=n[14],x=n[3],M=n[7],b=n[11],C=n[15],w=i[0],I=i[4],T=i[8],E=i[12],z=i[1],W=i[5],X=i[9],B=i[13],O=i[2],F=i[6],Y=i[10],H=i[14],U=i[3],k=i[7],G=i[11],i1=i[15];return a[0]=s*w+l*z+u*O+d*U,a[4]=s*I+l*W+u*F+d*k,a[8]=s*T+l*X+u*Y+d*G,a[12]=s*E+l*B+u*H+d*i1,a[1]=f*w+h*z+p*O+g*U,a[5]=f*I+h*W+p*F+g*k,a[9]=f*T+h*X+p*Y+g*G,a[13]=f*E+h*B+p*H+g*i1,a[2]=y*w+v*z+_*O+S*U,a[6]=y*I+v*W+_*F+S*k,a[10]=y*T+v*X+_*Y+S*G,a[14]=y*E+v*B+_*H+S*i1,a[3]=x*w+M*z+b*O+C*U,a[7]=x*I+M*W+b*F+C*k,a[11]=x*T+M*X+b*Y+C*G,a[15]=x*E+M*B+b*H+C*i1,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],l=e[5],u=e[9],d=e[13],f=e[2],h=e[6],p=e[10],g=e[14],y=e[3],v=e[7],_=e[11],S=e[15];return y*(+a*u*h-i*d*h-a*l*p+n*d*p+i*l*g-n*u*g)+v*(+t*u*g-t*d*p+a*s*p-i*s*g+i*d*f-a*u*f)+_*(+t*d*h-t*l*g-a*s*h+n*s*g+a*l*f-n*d*f)+S*(-i*l*f-t*u*h+t*l*p+i*s*h-n*s*p+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],u=e[6],d=e[7],f=e[8],h=e[9],p=e[10],g=e[11],y=e[12],v=e[13],_=e[14],S=e[15],x=h*_*d-v*p*d+v*u*g-l*_*g-h*u*S+l*p*S,M=y*p*d-f*_*d-y*u*g+s*_*g+f*u*S-s*p*S,b=f*v*d-y*h*d+y*l*g-s*v*g-f*l*S+s*h*S,C=y*h*u-f*v*u-y*l*p+s*v*p+f*l*_-s*h*_,w=t*x+n*M+i*b+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=x*I,e[1]=(v*p*a-h*_*a-v*i*g+n*_*g+h*i*S-n*p*S)*I,e[2]=(l*_*a-v*u*a+v*i*d-n*_*d-l*i*S+n*u*S)*I,e[3]=(h*u*a-l*p*a-h*i*d+n*p*d+l*i*g-n*u*g)*I,e[4]=M*I,e[5]=(f*_*a-y*p*a+y*i*g-t*_*g-f*i*S+t*p*S)*I,e[6]=(y*u*a-s*_*a-y*i*d+t*_*d+s*i*S-t*u*S)*I,e[7]=(s*p*a-f*u*a+f*i*d-t*p*d-s*i*g+t*u*g)*I,e[8]=b*I,e[9]=(y*h*a-f*v*a-y*n*g+t*v*g+f*n*S-t*h*S)*I,e[10]=(s*v*a-y*l*a+y*n*d-t*v*d-s*n*S+t*l*S)*I,e[11]=(f*l*a-s*h*a-f*n*d+t*h*d+s*n*g-t*l*g)*I,e[12]=C*I,e[13]=(f*v*i-y*h*i+y*n*p-t*v*p-f*n*_+t*h*_)*I,e[14]=(y*l*i-s*v*i-y*n*u+t*v*u+s*n*_-t*l*_)*I,e[15]=(s*h*i-f*l*i+f*n*u-t*h*u-s*n*p+t*l*p)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,l=e.y,u=e.z,d=a*s,f=a*l;return this.set(d*s+n,d*l-i*u,d*u+i*l,0,d*l+i*u,f*l+n,f*u-i*s,0,d*u-i*l,f*u+i*s,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,l=t._z,u=t._w,d=a+a,f=s+s,h=l+l,p=a*d,g=a*f,y=a*h,v=s*f,_=s*h,S=l*h,x=u*d,M=u*f,b=u*h,C=n.x,w=n.y,I=n.z;return i[0]=(1-(v+S))*C,i[1]=(g+b)*C,i[2]=(y-M)*C,i[3]=0,i[4]=(g-b)*w,i[5]=(1-(p+S))*w,i[6]=(_+x)*w,i[7]=0,i[8]=(y+M)*I,i[9]=(_-x)*I,i[10]=(1-(p+v))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=r9.set(i[0],i[1],i[2]).length();const s=r9.set(i[4],i[5],i[6]).length(),l=r9.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],u4.copy(this);const d=1/a,f=1/s,h=1/l;return u4.elements[0]*=d,u4.elements[1]*=d,u4.elements[2]*=d,u4.elements[4]*=f,u4.elements[5]*=f,u4.elements[6]*=f,u4.elements[8]*=h,u4.elements[9]*=h,u4.elements[10]*=h,t.setFromRotationMatrix(u4),n.x=a,n.y=s,n.z=l,this}makePerspective(e,t,n,i,a,s){const l=this.elements,u=2*a/(t-e),d=2*a/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),p=-(s+a)/(s-a),g=-2*s*a/(s-a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,a,s){const l=this.elements,u=1/(t-e),d=1/(n-i),f=1/(s-a),h=(t+e)*u,p=(n+i)*d,g=(s+a)*f;return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=-2*f,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const r9=new Z,u4=new j2,RM=new Z(0,0,0),IM=new Z(1,1,1),q4=new Z,r8=new Z,O3=new Z,mi=new j2,gi=new B4;class B5{constructor(e=0,t=0,n=0,i=B5.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],l=i[8],u=i[1],d=i[5],f=i[9],h=i[2],p=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(m3(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-m3(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(m3(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-m3(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(m3(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-m3(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mi.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mi,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gi.setFromEuler(this),this.setFromQuaternion(gi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}B5.DefaultOrder="XYZ";B5.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const vi=new Z,s9=new B4,E4=new j2,s8=new Z,o5=new Z,LM=new Z,zM=new B4,_i=new Z(1,0,0),yi=new Z(0,1,0),bi=new Z(0,0,1),PM={type:"added"},xi={type:"removed"};class v3 extends J0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=u0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=v3.DefaultUp.clone();const e=new Z,t=new B5,n=new B4,i=new Z(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new j2},normalMatrix:{value:new X3}}),this.matrix=new j2,this.matrixWorld=new j2,this.matrixAutoUpdate=v3.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=v3.DefaultMatrixWorldAutoUpdate,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return s9.setFromAxisAngle(e,t),this.quaternion.multiply(s9),this}rotateOnWorldAxis(e,t){return s9.setFromAxisAngle(e,t),this.quaternion.premultiply(s9),this}rotateX(e){return this.rotateOnAxis(_i,e)}rotateY(e){return this.rotateOnAxis(yi,e)}rotateZ(e){return this.rotateOnAxis(bi,e)}translateOnAxis(e,t){return vi.copy(e).applyQuaternion(this.quaternion),this.position.add(vi.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_i,e)}translateY(e){return this.translateOnAxis(yi,e)}translateZ(e){return this.translateOnAxis(bi,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(E4.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?s8.copy(e):s8.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),o5.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?E4.lookAt(o5,s8,this.up):E4.lookAt(s8,o5,this.up),this.quaternion.setFromRotationMatrix(E4),i&&(E4.extractRotation(i.matrixWorld),s9.setFromRotationMatrix(E4),this.quaternion.premultiply(s9.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(PM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xi)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xi)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),E4.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),E4.multiply(e.parent.matrixWorld)),e.applyMatrix4(E4),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o5,e,LM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(o5,zM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const l=i[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let d=0,f=u.length;d<f;d++){const h=u[d];a(e.shapes,h)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(a(e.materials,this.material[u]));i.material=l}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(a(e.animations,u))}}if(t){const l=s(e.geometries),u=s(e.materials),d=s(e.textures),f=s(e.images),h=s(e.shapes),p=s(e.skeletons),g=s(e.animations),y=s(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function s(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}v3.DefaultUp=new Z(0,1,0);v3.DefaultMatrixAutoUpdate=!0;v3.DefaultMatrixWorldAutoUpdate=!0;const c4=new Z,D4=new Z,k6=new Z,R4=new Z,l9=new Z,u9=new Z,Si=new Z,U6=new Z,N6=new Z,F6=new Z;class g4{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),c4.subVectors(e,t),i.cross(c4);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){c4.subVectors(i,t),D4.subVectors(n,t),k6.subVectors(e,t);const s=c4.dot(c4),l=c4.dot(D4),u=c4.dot(k6),d=D4.dot(D4),f=D4.dot(k6),h=s*d-l*l;if(h===0)return a.set(-2,-1,-1);const p=1/h,g=(d*u-l*f)*p,y=(s*f-l*u)*p;return a.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,R4),R4.x>=0&&R4.y>=0&&R4.x+R4.y<=1}static getUV(e,t,n,i,a,s,l,u){return this.getBarycoord(e,t,n,i,R4),u.set(0,0),u.addScaledVector(a,R4.x),u.addScaledVector(s,R4.y),u.addScaledVector(l,R4.z),u}static isFrontFacing(e,t,n,i){return c4.subVectors(n,t),D4.subVectors(e,t),c4.cross(D4).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return c4.subVectors(this.c,this.b),D4.subVectors(this.a,this.b),c4.cross(D4).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return g4.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return g4.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return g4.getUV(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return g4.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return g4.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,l;l9.subVectors(i,n),u9.subVectors(a,n),U6.subVectors(e,n);const u=l9.dot(U6),d=u9.dot(U6);if(u<=0&&d<=0)return t.copy(n);N6.subVectors(e,i);const f=l9.dot(N6),h=u9.dot(N6);if(f>=0&&h<=f)return t.copy(i);const p=u*h-f*d;if(p<=0&&u>=0&&f<=0)return s=u/(u-f),t.copy(n).addScaledVector(l9,s);F6.subVectors(e,a);const g=l9.dot(F6),y=u9.dot(F6);if(y>=0&&g<=y)return t.copy(a);const v=g*d-u*y;if(v<=0&&d>=0&&y<=0)return l=d/(d-y),t.copy(n).addScaledVector(u9,l);const _=f*y-g*h;if(_<=0&&h-f>=0&&g-y>=0)return Si.subVectors(a,i),l=(h-f)/(h-f+(g-y)),t.copy(i).addScaledVector(Si,l);const S=1/(_+v+p);return s=v*S,l=p*S,t.copy(n).addScaledVector(l9,s).addScaledVector(u9,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kM=0;class Z0 extends J0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=u0(),this.name="",this.type="Material",this.blending=U0,this.side=N9,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ra,this.blendDst=Ia,this.blendEquation=S9,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fe,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=M6,this.stencilZFail=M6,this.stencilZPass=M6,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==U0&&(n.blending=this.blending),this.side!==N9&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(a){const s=[];for(const l in a){const u=a[l];delete u.metadata,s.push(u)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P4 extends Z0{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _2(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const J2=new Z,l8=new G1;class N3{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ve,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)l8.fromBufferAttribute(this,t),l8.applyMatrix3(e),this.setXY(t,l8.x,l8.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)J2.fromBufferAttribute(this,t),J2.applyMatrix3(e),this.setXYZ(t,J2.x,J2.y,J2.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)J2.fromBufferAttribute(this,t),J2.applyMatrix4(e),this.setXYZ(t,J2.x,J2.y,J2.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)J2.fromBufferAttribute(this,t),J2.applyNormalMatrix(e),this.setXYZ(t,J2.x,J2.y,J2.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)J2.fromBufferAttribute(this,t),J2.transformDirection(e),this.setXYZ(t,J2.x,J2.y,J2.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=i0(t,this.array)),t}setX(e,t){return this.normalized&&(t=w2(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=i0(t,this.array)),t}setY(e,t){return this.normalized&&(t=w2(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=i0(t,this.array)),t}setZ(e,t){return this.normalized&&(t=w2(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=i0(t,this.array)),t}setW(e,t){return this.normalized&&(t=w2(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array),i=w2(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array),i=w2(i,this.array),a=w2(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ve&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ga extends N3{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Va extends N3{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class M3 extends N3{constructor(e,t,n){super(new Float32Array(e),t,n)}}let UM=0;const $3=new j2,B6=new v3,c9=new Z,L3=new N5,a5=new N5,a3=new Z;class R3 extends J0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=u0(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pa(e)?Va:Ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new X3().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $3.makeRotationFromQuaternion(e),this.applyMatrix4($3),this}rotateX(e){return $3.makeRotationX(e),this.applyMatrix4($3),this}rotateY(e){return $3.makeRotationY(e),this.applyMatrix4($3),this}rotateZ(e){return $3.makeRotationZ(e),this.applyMatrix4($3),this}translate(e,t,n){return $3.makeTranslation(e,t,n),this.applyMatrix4($3),this}scale(e,t,n){return $3.makeScale(e,t,n),this.applyMatrix4($3),this}lookAt(e){return B6.lookAt(e),B6.updateMatrix(),this.applyMatrix4(B6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(c9).negate(),this.translate(c9.x,c9.y,c9.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new M3(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new N5);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];L3.setFromBufferAttribute(a),this.morphTargetsRelative?(a3.addVectors(this.boundingBox.min,L3.min),this.boundingBox.expandByPoint(a3),a3.addVectors(this.boundingBox.max,L3.max),this.boundingBox.expandByPoint(a3)):(this.boundingBox.expandByPoint(L3.min),this.boundingBox.expandByPoint(L3.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new F5);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(L3.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];a5.setFromBufferAttribute(l),this.morphTargetsRelative?(a3.addVectors(L3.min,a5.min),L3.expandByPoint(a3),a3.addVectors(L3.max,a5.max),L3.expandByPoint(a3)):(L3.expandByPoint(a5.min),L3.expandByPoint(a5.max))}L3.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)a3.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(a3));if(t)for(let a=0,s=t.length;a<s;a++){const l=t[a],u=this.morphTargetsRelative;for(let d=0,f=l.count;d<f;d++)a3.fromBufferAttribute(l,d),u&&(c9.fromBufferAttribute(e,d),a3.add(c9)),i=Math.max(i,n.distanceToSquared(a3))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new N3(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,d=[],f=[];for(let z=0;z<l;z++)d[z]=new Z,f[z]=new Z;const h=new Z,p=new Z,g=new Z,y=new G1,v=new G1,_=new G1,S=new Z,x=new Z;function M(z,W,X){h.fromArray(i,z*3),p.fromArray(i,W*3),g.fromArray(i,X*3),y.fromArray(s,z*2),v.fromArray(s,W*2),_.fromArray(s,X*2),p.sub(h),g.sub(h),v.sub(y),_.sub(y);const B=1/(v.x*_.y-_.x*v.y);isFinite(B)&&(S.copy(p).multiplyScalar(_.y).addScaledVector(g,-v.y).multiplyScalar(B),x.copy(g).multiplyScalar(v.x).addScaledVector(p,-_.x).multiplyScalar(B),d[z].add(S),d[W].add(S),d[X].add(S),f[z].add(x),f[W].add(x),f[X].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let z=0,W=b.length;z<W;++z){const X=b[z],B=X.start,O=X.count;for(let F=B,Y=B+O;F<Y;F+=3)M(n[F+0],n[F+1],n[F+2])}const C=new Z,w=new Z,I=new Z,T=new Z;function E(z){I.fromArray(a,z*3),T.copy(I);const W=d[z];C.copy(W),C.sub(I.multiplyScalar(I.dot(W))).normalize(),w.crossVectors(T,W);const B=w.dot(f[z])<0?-1:1;u[z*4]=C.x,u[z*4+1]=C.y,u[z*4+2]=C.z,u[z*4+3]=B}for(let z=0,W=b.length;z<W;++z){const X=b[z],B=X.start,O=X.count;for(let F=B,Y=B+O;F<Y;F+=3)E(n[F+0]),E(n[F+1]),E(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new N3(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const i=new Z,a=new Z,s=new Z,l=new Z,u=new Z,d=new Z,f=new Z,h=new Z;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),v=e.getX(p+1),_=e.getX(p+2);i.fromBufferAttribute(t,y),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),f.subVectors(s,a),h.subVectors(i,a),f.cross(h),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,_),l.add(f),u.add(f),d.add(f),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z),n.setXYZ(_,d.x,d.y,d.z)}else for(let p=0,g=t.count;p<g;p+=3)i.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),f.subVectors(s,a),h.subVectors(i,a),f.cross(h),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)a3.fromBufferAttribute(e,t),a3.normalize(),e.setXYZ(t,a3.x,a3.y,a3.z)}toNonIndexed(){function e(l,u){const d=l.array,f=l.itemSize,h=l.normalized,p=new d.constructor(u.length*f);let g=0,y=0;for(let v=0,_=u.length;v<_;v++){l.isInterleavedBufferAttribute?g=u[v]*l.data.stride+l.offset:g=u[v]*f;for(let S=0;S<f;S++)p[y++]=d[g++]}return new N3(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new R3,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],d=e(u,n);t.setAttribute(l,d)}const a=this.morphAttributes;for(const l in a){const u=[],d=a[l];for(let f=0,h=d.length;f<h;f++){const p=d[f],g=e(p,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,u=s.length;l<u;l++){const d=s[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const d=n[u];e.data.attributes[u]=d.toJSON(e.data)}const i={};let a=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],f=[];for(let h=0,p=d.length;h<p;h++){const g=d[h];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const d in i){const f=i[d];this.setAttribute(d,f.clone(t))}const a=e.morphAttributes;for(const d in a){const f=[],h=a[d];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(t));this.morphAttributes[d]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let d=0,f=s.length;d<f;d++){const h=s[d];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mi=new j2,d9=new Wt,G6=new F5,X4=new Z,Q4=new Z,K4=new Z,V6=new Z,j6=new Z,W6=new Z,u8=new Z,c8=new Z,d8=new Z,f8=new G1,p8=new G1,h8=new G1,H6=new Z,m8=new Z;class u3 extends v3{constructor(e=new R3,t=new P4){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),G6.copy(n.boundingSphere),G6.applyMatrix4(a),e.ray.intersectsSphere(G6)===!1)||(Mi.copy(a).invert(),d9.copy(e.ray).applyMatrix4(Mi),n.boundingBox!==null&&d9.intersectsBox(n.boundingBox)===!1))return;let s;const l=n.index,u=n.attributes.position,d=n.morphAttributes.position,f=n.morphTargetsRelative,h=n.attributes.uv,p=n.attributes.uv2,g=n.groups,y=n.drawRange;if(l!==null)if(Array.isArray(i))for(let v=0,_=g.length;v<_;v++){const S=g[v],x=i[S.materialIndex],M=Math.max(S.start,y.start),b=Math.min(l.count,Math.min(S.start+S.count,y.start+y.count));for(let C=M,w=b;C<w;C+=3){const I=l.getX(C),T=l.getX(C+1),E=l.getX(C+2);s=g8(this,x,e,d9,u,d,f,h,p,I,T,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),_=Math.min(l.count,y.start+y.count);for(let S=v,x=_;S<x;S+=3){const M=l.getX(S),b=l.getX(S+1),C=l.getX(S+2);s=g8(this,i,e,d9,u,d,f,h,p,M,b,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(i))for(let v=0,_=g.length;v<_;v++){const S=g[v],x=i[S.materialIndex],M=Math.max(S.start,y.start),b=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let C=M,w=b;C<w;C+=3){const I=C,T=C+1,E=C+2;s=g8(this,x,e,d9,u,d,f,h,p,I,T,E),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),_=Math.min(u.count,y.start+y.count);for(let S=v,x=_;S<x;S+=3){const M=S,b=S+1,C=S+2;s=g8(this,i,e,d9,u,d,f,h,p,M,b,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function NM(o,e,t,n,i,a,s,l){let u;if(e.side===n4?u=n.intersectTriangle(s,a,i,!0,l):u=n.intersectTriangle(i,a,s,e.side!==_4,l),u===null)return null;m8.copy(l),m8.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(m8);return d<t.near||d>t.far?null:{distance:d,point:m8.clone(),object:o}}function g8(o,e,t,n,i,a,s,l,u,d,f,h){X4.fromBufferAttribute(i,d),Q4.fromBufferAttribute(i,f),K4.fromBufferAttribute(i,h);const p=o.morphTargetInfluences;if(a&&p){u8.set(0,0,0),c8.set(0,0,0),d8.set(0,0,0);for(let y=0,v=a.length;y<v;y++){const _=p[y],S=a[y];_!==0&&(V6.fromBufferAttribute(S,d),j6.fromBufferAttribute(S,f),W6.fromBufferAttribute(S,h),s?(u8.addScaledVector(V6,_),c8.addScaledVector(j6,_),d8.addScaledVector(W6,_)):(u8.addScaledVector(V6.sub(X4),_),c8.addScaledVector(j6.sub(Q4),_),d8.addScaledVector(W6.sub(K4),_)))}X4.add(u8),Q4.add(c8),K4.add(d8)}o.isSkinnedMesh&&(o.boneTransform(d,X4),o.boneTransform(f,Q4),o.boneTransform(h,K4));const g=NM(o,e,t,n,X4,Q4,K4,H6);if(g){l&&(f8.fromBufferAttribute(l,d),p8.fromBufferAttribute(l,f),h8.fromBufferAttribute(l,h),g.uv=g4.getUV(H6,X4,Q4,K4,f8,p8,h8,new G1)),u&&(f8.fromBufferAttribute(u,d),p8.fromBufferAttribute(u,f),h8.fromBufferAttribute(u,h),g.uv2=g4.getUV(H6,X4,Q4,K4,f8,p8,h8,new G1));const y={a:d,b:f,c:h,normal:new Z,materialIndex:0};g4.getNormal(X4,Q4,K4,y.normal),g.face=y}return g}class G5 extends R3{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const l=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const u=[],d=[],f=[],h=[];let p=0,g=0;y("z","y","x",-1,-1,n,t,e,s,a,0),y("z","y","x",1,-1,n,t,-e,s,a,1),y("x","z","y",1,1,e,n,t,i,s,2),y("x","z","y",1,-1,e,n,-t,i,s,3),y("x","y","z",1,-1,e,t,n,i,a,4),y("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(u),this.setAttribute("position",new M3(d,3)),this.setAttribute("normal",new M3(f,3)),this.setAttribute("uv",new M3(h,2));function y(v,_,S,x,M,b,C,w,I,T,E){const z=b/I,W=C/T,X=b/2,B=C/2,O=w/2,F=I+1,Y=T+1;let H=0,U=0;const k=new Z;for(let G=0;G<Y;G++){const i1=G*W-B;for(let q=0;q<F;q++){const $=q*z-X;k[v]=$*x,k[_]=i1*M,k[S]=O,d.push(k.x,k.y,k.z),k[v]=0,k[_]=0,k[S]=w>0?1:-1,f.push(k.x,k.y,k.z),h.push(q/I),h.push(1-G/T),H+=1}}for(let G=0;G<T;G++)for(let i1=0;i1<I;i1++){const q=p+i1+F*G,$=p+i1+F*(G+1),n1=p+(i1+1)+F*(G+1),r1=p+(i1+1)+F*G;u.push(q,$,r1),u.push($,n1,r1),U+=6}l.addGroup(g,U,E),g+=U,p+=H}}static fromJSON(e){return new G5(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function V9(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function h3(o){const e={};for(let t=0;t<o.length;t++){const n=V9(o[t]);for(const i in n)e[i]=n[i]}return e}function FM(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const BM={clone:V9,merge:h3};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class G4 extends Z0{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=V9(e.uniforms),this.uniformsGroups=FM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ja extends v3{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new j2,this.projectionMatrix=new j2,this.projectionMatrixInverse=new j2}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class q3 extends ja{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(A6*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return di*2*Math.atan(Math.tan(A6*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(A6*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const u=s.fullWidth,d=s.fullHeight;a+=s.offsetX*i/u,t-=s.offsetY*n/d,i*=s.width/u,n*=s.height/d}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const f9=90,p9=1;class jM extends v3{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new q3(f9,p9,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Z(1,0,0)),this.add(i);const a=new q3(f9,p9,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new Z(-1,0,0)),this.add(a);const s=new q3(f9,p9,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new Z(0,1,0)),this.add(s);const l=new q3(f9,p9,e,t);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new Z(0,-1,0)),this.add(l);const u=new q3(f9,p9,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new Z(0,0,1)),this.add(u);const d=new q3(f9,p9,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new Z(0,0,-1)),this.add(d)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,a,s,l,u,d]=this.children,f=e.getRenderTarget(),h=e.toneMapping,p=e.xr.enabled;e.toneMapping=F4,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,d),e.setRenderTarget(f),e.toneMapping=h,e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Wa extends i4{constructor(e,t,n,i,a,s,l,u,d,f){e=e!==void 0?e:[],t=t!==void 0?t:F9,super(e,t,n,i,a,s,l,u,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WM extends H0{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Z3}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new G5(5,5,5),a=new G4({name:"CubemapFromEquirect",uniforms:V9(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:n4,blending:l0});a.uniforms.tEquirect.value=t;const s=new u3(i,a),l=t.minFilter;return t.minFilter===n6&&(t.minFilter=Z3),new jM(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const $6=new Z,HM=new Z,$M=new X3;class E0{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$6.subVectors(n,t).cross(HM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta($6),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$M.getNormalMatrix(e),i=this.coplanarPoint($6).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const h9=new F5,v8=new Z;class Ha{constructor(e=new E0,t=new E0,n=new E0,i=new E0,a=new E0,s=new E0){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(a),l[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],a=n[1],s=n[2],l=n[3],u=n[4],d=n[5],f=n[6],h=n[7],p=n[8],g=n[9],y=n[10],v=n[11],_=n[12],S=n[13],x=n[14],M=n[15];return t[0].setComponents(l-i,h-u,v-p,M-_).normalize(),t[1].setComponents(l+i,h+u,v+p,M+_).normalize(),t[2].setComponents(l+a,h+d,v+g,M+S).normalize(),t[3].setComponents(l-a,h-d,v-g,M-S).normalize(),t[4].setComponents(l-s,h-f,v-y,M-x).normalize(),t[5].setComponents(l+s,h+f,v+y,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),h9.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(h9)}intersectsSprite(e){return h9.center.set(0,0,0),h9.radius=.7071067811865476,h9.applyMatrix4(e.matrixWorld),this.intersectsSphere(h9)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(v8.x=i.normal.x>0?e.max.x:e.min.x,v8.y=i.normal.y>0?e.max.y:e.min.y,v8.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(v8)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $a(){let o=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function YM(o,e){const t=e.isWebGL2,n=new WeakMap;function i(d,f){const h=d.array,p=d.usage,g=o.createBuffer();o.bindBuffer(f,g),o.bufferData(f,h,p),d.onUploadCallback();let y;if(h instanceof Float32Array)y=5126;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(h instanceof Int16Array)y=5122;else if(h instanceof Uint32Array)y=5125;else if(h instanceof Int32Array)y=5124;else if(h instanceof Int8Array)y=5120;else if(h instanceof Uint8Array)y=5121;else if(h instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,h){const p=f.array,g=f.updateRange;o.bindBuffer(h,d),g.count===-1?o.bufferSubData(h,0,p):(t?o.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):o.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1)}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=n.get(d);f&&(o.deleteBuffer(f.buffer),n.delete(d))}function u(d,f){if(d.isGLBufferAttribute){const p=n.get(d);(!p||p.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=n.get(d);h===void 0?n.set(d,i(d,f)):h.version<d.version&&(a(h.buffer,d,f),h.version=d.version)}return{get:s,remove:l,update:u}}class X9 extends R3{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,l=Math.floor(n),u=Math.floor(i),d=l+1,f=u+1,h=e/l,p=t/u,g=[],y=[],v=[],_=[];for(let S=0;S<f;S++){const x=S*p-s;for(let M=0;M<d;M++){const b=M*h-a;y.push(b,-x,0),v.push(0,0,1),_.push(M/l),_.push(1-S/u)}}for(let S=0;S<u;S++)for(let x=0;x<l;x++){const M=x+d*S,b=x+d*(S+1),C=x+1+d*(S+1),w=x+1+d*S;g.push(M,b,w),g.push(b,C,w)}this.setIndex(g),this.setAttribute("position",new M3(y,3)),this.setAttribute("normal",new M3(v,3)),this.setAttribute("uv",new M3(_,2))}static fromJSON(e){return new X9(e.width,e.height,e.widthSegments,e.heightSegments)}}var JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eA="vec3 transformed = vec3( position );",tA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nA=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,OA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,kA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UA=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,NA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,VA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,jA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WA=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$A=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,YA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tw=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ew=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ow=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Nw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Bw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ww=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oC=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_C=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,SC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,d2={alphamap_fragment:JM,alphamap_pars_fragment:ZM,alphatest_fragment:qM,alphatest_pars_fragment:XM,aomap_fragment:QM,aomap_pars_fragment:KM,begin_vertex:eA,beginnormal_vertex:tA,bsdfs:nA,iridescence_fragment:iA,bumpmap_pars_fragment:oA,clipping_planes_fragment:aA,clipping_planes_pars_fragment:rA,clipping_planes_pars_vertex:sA,clipping_planes_vertex:lA,color_fragment:uA,color_pars_fragment:cA,color_pars_vertex:dA,color_vertex:fA,common:pA,cube_uv_reflection_fragment:hA,defaultnormal_vertex:mA,displacementmap_pars_vertex:gA,displacementmap_vertex:vA,emissivemap_fragment:_A,emissivemap_pars_fragment:yA,encodings_fragment:bA,encodings_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:MA,envmap_pars_fragment:AA,envmap_pars_vertex:wA,envmap_physical_pars_fragment:UA,envmap_vertex:CA,fog_vertex:TA,fog_pars_vertex:EA,fog_fragment:DA,fog_pars_fragment:RA,gradientmap_pars_fragment:IA,lightmap_fragment:OA,lightmap_pars_fragment:LA,lights_lambert_fragment:zA,lights_lambert_pars_fragment:PA,lights_pars_begin:kA,lights_toon_fragment:NA,lights_toon_pars_fragment:FA,lights_phong_fragment:BA,lights_phong_pars_fragment:GA,lights_physical_fragment:VA,lights_physical_pars_fragment:jA,lights_fragment_begin:WA,lights_fragment_maps:HA,lights_fragment_end:$A,logdepthbuf_fragment:YA,logdepthbuf_pars_fragment:JA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:qA,map_fragment:XA,map_pars_fragment:QA,map_particle_fragment:KA,map_particle_pars_fragment:ew,metalnessmap_fragment:tw,metalnessmap_pars_fragment:nw,morphcolor_vertex:iw,morphnormal_vertex:ow,morphtarget_pars_vertex:aw,morphtarget_vertex:rw,normal_fragment_begin:sw,normal_fragment_maps:lw,normal_pars_fragment:uw,normal_pars_vertex:cw,normal_vertex:dw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:pw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,output_fragment:vw,packing:_w,premultiplied_alpha_fragment:yw,project_vertex:bw,dithering_fragment:xw,dithering_pars_fragment:Sw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:Aw,shadowmap_pars_fragment:ww,shadowmap_pars_vertex:Cw,shadowmap_vertex:Tw,shadowmask_pars_fragment:Ew,skinbase_vertex:Dw,skinning_pars_vertex:Rw,skinning_vertex:Iw,skinnormal_vertex:Ow,specularmap_fragment:Lw,specularmap_pars_fragment:zw,tonemapping_fragment:Pw,tonemapping_pars_fragment:kw,transmission_fragment:Uw,transmission_pars_fragment:Nw,uv_pars_fragment:Fw,uv_pars_vertex:Bw,uv_vertex:Gw,uv2_pars_fragment:Vw,uv2_pars_vertex:jw,uv2_vertex:Ww,worldpos_vertex:Hw,background_vert:$w,background_frag:Yw,cube_vert:Jw,cube_frag:Zw,depth_vert:qw,depth_frag:Xw,distanceRGBA_vert:Qw,distanceRGBA_frag:Kw,equirect_vert:eC,equirect_frag:tC,linedashed_vert:nC,linedashed_frag:iC,meshbasic_vert:oC,meshbasic_frag:aC,meshlambert_vert:rC,meshlambert_frag:sC,meshmatcap_vert:lC,meshmatcap_frag:uC,meshnormal_vert:cC,meshnormal_frag:dC,meshphong_vert:fC,meshphong_frag:pC,meshphysical_vert:hC,meshphysical_frag:mC,meshtoon_vert:gC,meshtoon_frag:vC,points_vert:_C,points_frag:yC,shadow_vert:bC,shadow_frag:xC,sprite_vert:SC,sprite_frag:MC},R1={common:{diffuse:{value:new _2(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new X3},uv2Transform:{value:new X3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new G1(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _2(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _2(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new X3}},sprite:{diffuse:{value:new _2(16777215)},opacity:{value:1},center:{value:new G1(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new X3}}},m4={basic:{uniforms:h3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.fog]),vertexShader:d2.meshbasic_vert,fragmentShader:d2.meshbasic_frag},lambert:{uniforms:h3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,R1.lights,{emissive:{value:new _2(0)}}]),vertexShader:d2.meshlambert_vert,fragmentShader:d2.meshlambert_frag},phong:{uniforms:h3([R1.common,R1.specularmap,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,R1.lights,{emissive:{value:new _2(0)},specular:{value:new _2(1118481)},shininess:{value:30}}]),vertexShader:d2.meshphong_vert,fragmentShader:d2.meshphong_frag},standard:{uniforms:h3([R1.common,R1.envmap,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.roughnessmap,R1.metalnessmap,R1.fog,R1.lights,{emissive:{value:new _2(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:d2.meshphysical_vert,fragmentShader:d2.meshphysical_frag},toon:{uniforms:h3([R1.common,R1.aomap,R1.lightmap,R1.emissivemap,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.gradientmap,R1.fog,R1.lights,{emissive:{value:new _2(0)}}]),vertexShader:d2.meshtoon_vert,fragmentShader:d2.meshtoon_frag},matcap:{uniforms:h3([R1.common,R1.bumpmap,R1.normalmap,R1.displacementmap,R1.fog,{matcap:{value:null}}]),vertexShader:d2.meshmatcap_vert,fragmentShader:d2.meshmatcap_frag},points:{uniforms:h3([R1.points,R1.fog]),vertexShader:d2.points_vert,fragmentShader:d2.points_frag},dashed:{uniforms:h3([R1.common,R1.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:d2.linedashed_vert,fragmentShader:d2.linedashed_frag},depth:{uniforms:h3([R1.common,R1.displacementmap]),vertexShader:d2.depth_vert,fragmentShader:d2.depth_frag},normal:{uniforms:h3([R1.common,R1.bumpmap,R1.normalmap,R1.displacementmap,{opacity:{value:1}}]),vertexShader:d2.meshnormal_vert,fragmentShader:d2.meshnormal_frag},sprite:{uniforms:h3([R1.sprite,R1.fog]),vertexShader:d2.sprite_vert,fragmentShader:d2.sprite_frag},background:{uniforms:{uvTransform:{value:new X3},t2D:{value:null}},vertexShader:d2.background_vert,fragmentShader:d2.background_frag},cube:{uniforms:h3([R1.envmap,{opacity:{value:1}}]),vertexShader:d2.cube_vert,fragmentShader:d2.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:d2.equirect_vert,fragmentShader:d2.equirect_frag},distanceRGBA:{uniforms:h3([R1.common,R1.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:d2.distanceRGBA_vert,fragmentShader:d2.distanceRGBA_frag},shadow:{uniforms:h3([R1.lights,R1.fog,{color:{value:new _2(0)},opacity:{value:1}}]),vertexShader:d2.shadow_vert,fragmentShader:d2.shadow_frag}};m4.physical={uniforms:h3([m4.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new G1(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new _2(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new G1},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new _2(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new _2(1,1,1)},specularColorMap:{value:null}}]),vertexShader:d2.meshphysical_vert,fragmentShader:d2.meshphysical_frag};function AC(o,e,t,n,i,a){const s=new _2(0);let l=i===!0?0:1,u,d,f=null,h=0,p=null;function g(v,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=e.get(x));const M=o.xr,b=M.getSession&&M.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?y(s,l):x&&x.isColor&&(y(x,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===t6)?(d===void 0&&(d=new u3(new G5(1,1,1),new G4({name:"BackgroundCubeMaterial",uniforms:V9(m4.cube.uniforms),vertexShader:m4.cube.vertexShader,fragmentShader:m4.cube.fragmentShader,side:n4,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(f!==x||h!==x.version||p!==o.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,p=o.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new u3(new X9(2,2),new G4({name:"BackgroundMaterial",uniforms:V9(m4.background.uniforms),vertexShader:m4.background.vertexShader,fragmentShader:m4.background.fragmentShader,side:N9,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==o.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=o.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function y(v,_){t.buffers.color.setClear(v.r,v.g,v.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(v,_=1){s.set(v),l=_,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,y(s,l)},render:g}}function wC(o,e,t,n){const i=o.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,l={},u=_(null);let d=u,f=!1;function h(O,F,Y,H,U){let k=!1;if(s){const G=v(H,Y,F);d!==G&&(d=G,g(d.object)),k=S(O,H,Y,U),k&&x(O,H,Y,U)}else{const G=F.wireframe===!0;(d.geometry!==H.id||d.program!==Y.id||d.wireframe!==G)&&(d.geometry=H.id,d.program=Y.id,d.wireframe=G,k=!0)}U!==null&&t.update(U,34963),(k||f)&&(f=!1,T(O,F,Y,H),U!==null&&o.bindBuffer(34963,t.get(U).buffer))}function p(){return n.isWebGL2?o.createVertexArray():a.createVertexArrayOES()}function g(O){return n.isWebGL2?o.bindVertexArray(O):a.bindVertexArrayOES(O)}function y(O){return n.isWebGL2?o.deleteVertexArray(O):a.deleteVertexArrayOES(O)}function v(O,F,Y){const H=Y.wireframe===!0;let U=l[O.id];U===void 0&&(U={},l[O.id]=U);let k=U[F.id];k===void 0&&(k={},U[F.id]=k);let G=k[H];return G===void 0&&(G=_(p()),k[H]=G),G}function _(O){const F=[],Y=[],H=[];for(let U=0;U<i;U++)F[U]=0,Y[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:H,object:O,attributes:{},index:null}}function S(O,F,Y,H){const U=d.attributes,k=F.attributes;let G=0;const i1=Y.getAttributes();for(const q in i1)if(i1[q].location>=0){const n1=U[q];let r1=k[q];if(r1===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(r1=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(r1=O.instanceColor)),n1===void 0||n1.attribute!==r1||r1&&n1.data!==r1.data)return!0;G++}return d.attributesNum!==G||d.index!==H}function x(O,F,Y,H){const U={},k=F.attributes;let G=0;const i1=Y.getAttributes();for(const q in i1)if(i1[q].location>=0){let n1=k[q];n1===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(n1=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(n1=O.instanceColor));const r1={};r1.attribute=n1,n1&&n1.data&&(r1.data=n1.data),U[q]=r1,G++}d.attributes=U,d.attributesNum=G,d.index=H}function M(){const O=d.newAttributes;for(let F=0,Y=O.length;F<Y;F++)O[F]=0}function b(O){C(O,0)}function C(O,F){const Y=d.newAttributes,H=d.enabledAttributes,U=d.attributeDivisors;Y[O]=1,H[O]===0&&(o.enableVertexAttribArray(O),H[O]=1),U[O]!==F&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,F),U[O]=F)}function w(){const O=d.newAttributes,F=d.enabledAttributes;for(let Y=0,H=F.length;Y<H;Y++)F[Y]!==O[Y]&&(o.disableVertexAttribArray(Y),F[Y]=0)}function I(O,F,Y,H,U,k){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(O,F,Y,U,k):o.vertexAttribPointer(O,F,Y,H,U,k)}function T(O,F,Y,H){if(n.isWebGL2===!1&&(O.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const U=H.attributes,k=Y.getAttributes(),G=F.defaultAttributeValues;for(const i1 in k){const q=k[i1];if(q.location>=0){let $=U[i1];if($===void 0&&(i1==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),i1==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),$!==void 0){const n1=$.normalized,r1=$.itemSize,e1=t.get($);if(e1===void 0)continue;const h1=e1.buffer,g1=e1.type,v1=e1.bytesPerElement;if($.isInterleavedBufferAttribute){const p1=$.data,F1=p1.stride,D1=$.offset;if(p1.isInstancedInterleavedBuffer){for(let M1=0;M1<q.locationSize;M1++)C(q.location+M1,p1.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=p1.meshPerAttribute*p1.count)}else for(let M1=0;M1<q.locationSize;M1++)b(q.location+M1);o.bindBuffer(34962,h1);for(let M1=0;M1<q.locationSize;M1++)I(q.location+M1,r1/q.locationSize,g1,n1,F1*v1,(D1+r1/q.locationSize*M1)*v1)}else{if($.isInstancedBufferAttribute){for(let p1=0;p1<q.locationSize;p1++)C(q.location+p1,$.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let p1=0;p1<q.locationSize;p1++)b(q.location+p1);o.bindBuffer(34962,h1);for(let p1=0;p1<q.locationSize;p1++)I(q.location+p1,r1/q.locationSize,g1,n1,r1*v1,r1/q.locationSize*p1*v1)}}else if(G!==void 0){const n1=G[i1];if(n1!==void 0)switch(n1.length){case 2:o.vertexAttrib2fv(q.location,n1);break;case 3:o.vertexAttrib3fv(q.location,n1);break;case 4:o.vertexAttrib4fv(q.location,n1);break;default:o.vertexAttrib1fv(q.location,n1)}}}}w()}function E(){X();for(const O in l){const F=l[O];for(const Y in F){const H=F[Y];for(const U in H)y(H[U].object),delete H[U];delete F[Y]}delete l[O]}}function z(O){if(l[O.id]===void 0)return;const F=l[O.id];for(const Y in F){const H=F[Y];for(const U in H)y(H[U].object),delete H[U];delete F[Y]}delete l[O.id]}function W(O){for(const F in l){const Y=l[F];if(Y[O.id]===void 0)continue;const H=Y[O.id];for(const U in H)y(H[U].object),delete H[U];delete Y[O.id]}}function X(){B(),f=!0,d!==u&&(d=u,g(d.object))}function B(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:X,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:z,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:b,disableUnusedAttributes:w}}function CC(o,e,t,n){const i=n.isWebGL2;let a;function s(d){a=d}function l(d,f){o.drawArrays(a,d,f),t.update(f,a,1)}function u(d,f,h){if(h===0)return;let p,g;if(i)p=o,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,d,f,h),t.update(f,a,h)}this.setMode=s,this.render=l,this.renderInstances=u}function TC(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){if(I==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const u=a(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=s||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),p=o.getParameter(35660),g=o.getParameter(3379),y=o.getParameter(34076),v=o.getParameter(34921),_=o.getParameter(36347),S=o.getParameter(36348),x=o.getParameter(36349),M=p>0,b=s||e.has("OES_texture_float"),C=M&&b,w=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:d,getMaxAnisotropy:i,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:w}}function EC(o){const e=this;let t=null,n=0,i=!1,a=!1;const s=new E0,l=new X3,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p,g){const y=h.length!==0||p||n!==0||i;return i=p,t=f(h,g,0),n=h.length,y},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,d()},this.setState=function(h,p,g){const y=h.clippingPlanes,v=h.clipIntersection,_=h.clipShadows,S=o.get(h);if(!i||y===null||y.length===0||a&&!_)a?f(null):d();else{const x=a?0:n,M=x*4;let b=S.clippingState||null;u.value=b,b=f(y,p,M,g);for(let C=0;C!==M;++C)b[C]=t[C];S.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,p,g,y){const v=h!==null?h.length:0;let _=null;if(v!==0){if(_=u.value,y!==!0||_===null){const S=g+v*4,x=p.matrixWorldInverse;l.getNormalMatrix(x),(_===null||_.length<S)&&(_=new Float32Array(S));for(let M=0,b=g;M!==v;++M,b+=4)s.copy(h[M]).applyMatrix4(x,l),s.normal.toArray(_,b),_[b+3]=s.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function DC(o){let e=new WeakMap;function t(s,l){return l===pe?s.mapping=F9:l===he&&(s.mapping=B9),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const l=s.mapping;if(l===pe||l===he)if(e.has(s)){const u=e.get(s).texture;return t(u,s.mapping)}else{const u=s.image;if(u&&u.height>0){const d=new WM(u.height/2);return d.fromEquirectangularTexture(o,s),e.set(s,d),s.addEventListener("dispose",i),t(d.texture,s.mapping)}else return null}}return s}function i(s){const l=s.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class RC extends ja{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,s=a+d*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const D9=4,Ai=[.125,.215,.35,.446,.526,.582],I0=20,Y6=new RC,wi=new _2;let J6=null;const D0=(1+Math.sqrt(5))/2,m9=1/D0,Ci=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,D0,m9),new Z(0,D0,-m9),new Z(m9,0,D0),new Z(-m9,0,D0),new Z(D0,m9,0),new Z(-D0,m9,0)];class Ti{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){J6=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ri(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Di(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(J6),e.scissorTest=!1,_8(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===F9||e.mapping===B9?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),J6=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Z3,minFilter:Z3,generateMipmaps:!1,type:C5,format:y4,encoding:W0,depthBuffer:!1},i=Ei(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ei(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IC(a)),this._blurMaterial=OC(a,e,t)}return i}_compileMaterial(e){const t=new u3(this._lodPlanes[0],e);this._renderer.compile(t,Y6)}_sceneToCubeUV(e,t,n,i){const l=new q3(90,1,t,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(wi),f.toneMapping=F4,f.autoClear=!1;const g=new P4({name:"PMREM.Background",side:n4,depthWrite:!1,depthTest:!1}),y=new u3(new G5,g);let v=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,v=!0):(g.color.copy(wi),v=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,u[S],0),l.lookAt(d[S],0,0)):x===1?(l.up.set(0,0,u[S]),l.lookAt(0,d[S],0)):(l.up.set(0,u[S],0),l.lookAt(0,0,d[S]));const M=this._cubeSize;_8(i,x*M,S>2?M:0,M,M),f.setRenderTarget(i),v&&f.render(y,l),f.render(e,l)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===F9||e.mapping===B9;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ri()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Di());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new u3(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const u=this._cubeSize;_8(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(s,Y6)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ci[(i-1)%Ci.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,l){const u=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new u3(this._lodPlanes[i],d),p=d.uniforms,g=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*I0-1),v=a/y,_=isFinite(a)?1+Math.floor(f*v):I0;_>I0&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${I0}`);const S=[];let x=0;for(let I=0;I<I0;++I){const T=I/v,E=Math.exp(-T*T/2);S.push(E),I===0?x+=E:I<_&&(x+=2*E)}for(let I=0;I<S.length;I++)S[I]=S[I]/x;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=S,p.latitudinal.value=s==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:M}=this;p.dTheta.value=y,p.mipInt.value=M-n;const b=this._sizeLods[i],C=3*b*(i>M-D9?i-M+D9:0),w=4*(this._cubeSize-b);_8(t,C,w,3*b,2*b),u.setRenderTarget(t),u.render(h,Y6)}}function IC(o){const e=[],t=[],n=[];let i=o;const a=o-D9+1+Ai.length;for(let s=0;s<a;s++){const l=Math.pow(2,i);t.push(l);let u=1/l;s>o-D9?u=Ai[s-o+D9-1]:s===0&&(u=0),n.push(u);const d=1/(l-2),f=-d,h=1+d,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,v=3,_=2,S=1,x=new Float32Array(v*y*g),M=new Float32Array(_*y*g),b=new Float32Array(S*y*g);for(let w=0;w<g;w++){const I=w%3*2/3-1,T=w>2?0:-1,E=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];x.set(E,v*y*w),M.set(p,_*y*w);const z=[w,w,w,w,w,w];b.set(z,S*y*w)}const C=new R3;C.setAttribute("position",new N3(x,v)),C.setAttribute("uv",new N3(M,_)),C.setAttribute("faceIndex",new N3(b,S)),e.push(C),i>D9&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ei(o,e,t){const n=new H0(o,e,t);return n.texture.mapping=t6,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _8(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function OC(o,e,t){const n=new Float32Array(I0),i=new Z(0,1,0);return new G4({name:"SphericalGaussianBlur",defines:{n:I0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ht(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:l0,depthTest:!1,depthWrite:!1})}function Di(){return new G4({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ht(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:l0,depthTest:!1,depthWrite:!1})}function Ri(){return new G4({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ht(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:l0,depthTest:!1,depthWrite:!1})}function Ht(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LC(o){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,d=u===pe||u===he,f=u===F9||u===B9;if(d||f)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let h=e.get(l);return t===null&&(t=new Ti(o)),h=d?t.fromEquirectangular(l,h):t.fromCubemap(l,h),e.set(l,h),h.texture}else{if(e.has(l))return e.get(l).texture;{const h=l.image;if(d&&h&&h.height>0||f&&h&&i(h)){t===null&&(t=new Ti(o));const p=d?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,p),l.addEventListener("dispose",a),p.texture}else return null}}}return l}function i(l){let u=0;const d=6;for(let f=0;f<d;f++)l[f]!==void 0&&u++;return u===d}function a(l){const u=l.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function zC(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PC(o,e,t,n){const i={},a=new WeakMap;function s(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",s),delete i[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(h,p){return i[p.id]===!0||(p.addEventListener("dispose",s),i[p.id]=!0,t.memory.geometries++),p}function u(h){const p=h.attributes;for(const y in p)e.update(p[y],34962);const g=h.morphAttributes;for(const y in g){const v=g[y];for(let _=0,S=v.length;_<S;_++)e.update(v[_],34962)}}function d(h){const p=[],g=h.index,y=h.attributes.position;let v=0;if(g!==null){const x=g.array;v=g.version;for(let M=0,b=x.length;M<b;M+=3){const C=x[M+0],w=x[M+1],I=x[M+2];p.push(C,w,w,I,I,C)}}else{const x=y.array;v=y.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const C=M+0,w=M+1,I=M+2;p.push(C,w,w,I,I,C)}}const _=new(Pa(p)?Va:Ga)(p,1);_.version=v;const S=a.get(h);S&&e.remove(S),a.set(h,_)}function f(h){const p=a.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&d(h)}else d(h);return a.get(h)}return{get:l,update:u,getWireframeAttribute:f}}function kC(o,e,t,n){const i=n.isWebGL2;let a;function s(p){a=p}let l,u;function d(p){l=p.type,u=p.bytesPerElement}function f(p,g){o.drawElements(a,g,l,p*u),t.update(g,a,1)}function h(p,g,y){if(y===0)return;let v,_;if(i)v=o,_="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](a,g,l,p*u,y),t.update(g,a,y)}this.setMode=s,this.setIndex=d,this.render=f,this.renderInstances=h}function UC(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,l){switch(t.calls++,s){case 4:t.triangles+=l*(a/3);break;case 1:t.lines+=l*(a/2);break;case 3:t.lines+=l*(a-1);break;case 2:t.lines+=l*a;break;case 0:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function NC(o,e){return o[0]-e[0]}function FC(o,e){return Math.abs(e[1])-Math.abs(o[1])}function BC(o,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new c3,l=[];for(let d=0;d<8;d++)l[d]=[d,0];function u(d,f,h,p){const g=d.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=y!==void 0?y.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let F=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let E=0;M===!0&&(E=1),b===!0&&(E=2),C===!0&&(E=3);let z=f.attributes.position.count*E,W=1;z>e.maxTextureSize&&(W=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const X=new Float32Array(z*W*4*v),B=new Fa(X,z,W,v);B.type=L0,B.needsUpdate=!0;const O=E*4;for(let Y=0;Y<v;Y++){const H=w[Y],U=I[Y],k=T[Y],G=z*W*4*Y;for(let i1=0;i1<H.count;i1++){const q=i1*O;M===!0&&(s.fromBufferAttribute(H,i1),X[G+q+0]=s.x,X[G+q+1]=s.y,X[G+q+2]=s.z,X[G+q+3]=0),b===!0&&(s.fromBufferAttribute(U,i1),X[G+q+4]=s.x,X[G+q+5]=s.y,X[G+q+6]=s.z,X[G+q+7]=0),C===!0&&(s.fromBufferAttribute(k,i1),X[G+q+8]=s.x,X[G+q+9]=s.y,X[G+q+10]=s.z,X[G+q+11]=k.itemSize===4?s.w:1)}}_={count:v,texture:B,size:new G1(z,W)},a.set(f,_),f.addEventListener("dispose",F)}let S=0;for(let M=0;M<g.length;M++)S+=g[M];const x=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(o,"morphTargetBaseInfluence",x),p.getUniforms().setValue(o,"morphTargetInfluences",g),p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const y=g===void 0?0:g.length;let v=n[f.id];if(v===void 0||v.length!==y){v=[];for(let b=0;b<y;b++)v[b]=[b,0];n[f.id]=v}for(let b=0;b<y;b++){const C=v[b];C[0]=b,C[1]=g[b]}v.sort(FC);for(let b=0;b<8;b++)b<y&&v[b][1]?(l[b][0]=v[b][0],l[b][1]=v[b][1]):(l[b][0]=Number.MAX_SAFE_INTEGER,l[b][1]=0);l.sort(NC);const _=f.morphAttributes.position,S=f.morphAttributes.normal;let x=0;for(let b=0;b<8;b++){const C=l[b],w=C[0],I=C[1];w!==Number.MAX_SAFE_INTEGER&&I?(_&&f.getAttribute("morphTarget"+b)!==_[w]&&f.setAttribute("morphTarget"+b,_[w]),S&&f.getAttribute("morphNormal"+b)!==S[w]&&f.setAttribute("morphNormal"+b,S[w]),i[b]=I,x+=I):(_&&f.hasAttribute("morphTarget"+b)===!0&&f.deleteAttribute("morphTarget"+b),S&&f.hasAttribute("morphNormal"+b)===!0&&f.deleteAttribute("morphNormal"+b),i[b]=0)}const M=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:u}}function GC(o,e,t,n){let i=new WeakMap;function a(u){const d=n.render.frame,f=u.geometry,h=e.get(u,f);return i.get(h)!==d&&(e.update(h),i.set(h,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),h}function s(){i=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:s}}const Ya=new i4,Ja=new Fa,Za=new EM,qa=new Wa,Ii=[],Oi=[],Li=new Float32Array(16),zi=new Float32Array(9),Pi=new Float32Array(4);function Q9(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let a=Ii[i];if(a===void 0&&(a=new Float32Array(i),Ii[i]=a),e!==0){n.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=t,o[s].toArray(a,l)}return a}function t3(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function n3(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function i6(o,e){let t=Oi[e];t===void 0&&(t=new Int32Array(e),Oi[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function VC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function jC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(t3(t,e))return;o.uniform2fv(this.addr,e),n3(t,e)}}function WC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(t3(t,e))return;o.uniform3fv(this.addr,e),n3(t,e)}}function HC(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(t3(t,e))return;o.uniform4fv(this.addr,e),n3(t,e)}}function $C(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(t3(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),n3(t,e)}else{if(t3(t,n))return;Pi.set(n),o.uniformMatrix2fv(this.addr,!1,Pi),n3(t,n)}}function YC(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(t3(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),n3(t,e)}else{if(t3(t,n))return;zi.set(n),o.uniformMatrix3fv(this.addr,!1,zi),n3(t,n)}}function JC(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(t3(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),n3(t,e)}else{if(t3(t,n))return;Li.set(n),o.uniformMatrix4fv(this.addr,!1,Li),n3(t,n)}}function ZC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function qC(o,e){const t=this.cache;t3(t,e)||(o.uniform2iv(this.addr,e),n3(t,e))}function XC(o,e){const t=this.cache;t3(t,e)||(o.uniform3iv(this.addr,e),n3(t,e))}function QC(o,e){const t=this.cache;t3(t,e)||(o.uniform4iv(this.addr,e),n3(t,e))}function KC(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function eT(o,e){const t=this.cache;t3(t,e)||(o.uniform2uiv(this.addr,e),n3(t,e))}function tT(o,e){const t=this.cache;t3(t,e)||(o.uniform3uiv(this.addr,e),n3(t,e))}function nT(o,e){const t=this.cache;t3(t,e)||(o.uniform4uiv(this.addr,e),n3(t,e))}function iT(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ya,i)}function oT(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Za,i)}function aT(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qa,i)}function rT(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ja,i)}function sT(o){switch(o){case 5126:return VC;case 35664:return jC;case 35665:return WC;case 35666:return HC;case 35674:return $C;case 35675:return YC;case 35676:return JC;case 5124:case 35670:return ZC;case 35667:case 35671:return qC;case 35668:case 35672:return XC;case 35669:case 35673:return QC;case 5125:return KC;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return rT}}function lT(o,e){o.uniform1fv(this.addr,e)}function uT(o,e){const t=Q9(e,this.size,2);o.uniform2fv(this.addr,t)}function cT(o,e){const t=Q9(e,this.size,3);o.uniform3fv(this.addr,t)}function dT(o,e){const t=Q9(e,this.size,4);o.uniform4fv(this.addr,t)}function fT(o,e){const t=Q9(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function pT(o,e){const t=Q9(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hT(o,e){const t=Q9(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function mT(o,e){o.uniform1iv(this.addr,e)}function gT(o,e){o.uniform2iv(this.addr,e)}function vT(o,e){o.uniform3iv(this.addr,e)}function _T(o,e){o.uniform4iv(this.addr,e)}function yT(o,e){o.uniform1uiv(this.addr,e)}function bT(o,e){o.uniform2uiv(this.addr,e)}function xT(o,e){o.uniform3uiv(this.addr,e)}function ST(o,e){o.uniform4uiv(this.addr,e)}function MT(o,e,t){const n=this.cache,i=e.length,a=i6(t,i);t3(n,a)||(o.uniform1iv(this.addr,a),n3(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Ya,a[s])}function AT(o,e,t){const n=this.cache,i=e.length,a=i6(t,i);t3(n,a)||(o.uniform1iv(this.addr,a),n3(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Za,a[s])}function wT(o,e,t){const n=this.cache,i=e.length,a=i6(t,i);t3(n,a)||(o.uniform1iv(this.addr,a),n3(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||qa,a[s])}function CT(o,e,t){const n=this.cache,i=e.length,a=i6(t,i);t3(n,a)||(o.uniform1iv(this.addr,a),n3(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ja,a[s])}function TT(o){switch(o){case 5126:return lT;case 35664:return uT;case 35665:return cT;case 35666:return dT;case 35674:return fT;case 35675:return pT;case 35676:return hT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return vT;case 35669:case 35673:return _T;case 5125:return yT;case 36294:return bT;case 36295:return xT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return AT;case 35680:case 36300:case 36308:case 36293:return wT;case 36289:case 36303:case 36311:case 36292:return CT}}class ET{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sT(t.type)}}class DT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=TT(t.type)}}class RT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const l=i[a];l.setValue(e,t[l.id],n)}}}const Z6=/(\w+)(\])?(\[|\.)?/g;function ki(o,e){o.seq.push(e),o.map[e.id]=e}function IT(o,e,t){const n=o.name,i=n.length;for(Z6.lastIndex=0;;){const a=Z6.exec(n),s=Z6.lastIndex;let l=a[1];const u=a[2]==="]",d=a[3];if(u&&(l=l|0),d===void 0||d==="["&&s+2===i){ki(t,d===void 0?new ET(l,o,e):new DT(l,o,e));break}else{let h=t.map[l];h===void 0&&(h=new RT(l),ki(t,h)),t=h}}}class R8{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);IT(a,s,this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const l=t[a],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ui(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let OT=0;function LT(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const l=s+1;n.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return n.join(`
`)}function zT(o){switch(o){case W0:return["Linear","( value )"];case F2:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Ni(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+LT(o.getShaderSource(e),s)}else return i}function PT(o,e){const t=zT(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kT(o,e){let t;switch(e){case eM:t="Linear";break;case tM:t="Reinhard";break;case nM:t="OptimizedCineon";break;case iM:t="ACESFilmic";break;case oM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function UT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(h5).join(`
`)}function NT(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FT(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const a=o.getActiveAttrib(e,i),s=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),t[s]={type:a.type,location:o.getAttribLocation(e,s),locationSize:l}}return t}function h5(o){return o!==""}function Fi(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bi(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function be(o){return o.replace(BT,GT)}function GT(o,e){const t=d2[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return be(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gi(o){return o.replace(VT,jT)}function jT(o,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Vi(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Da?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===OS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===p5&&(e="SHADOWMAP_TYPE_VSM"),e}function HT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case F9:case B9:e="ENVMAP_TYPE_CUBE";break;case t6:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $T(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case B9:e="ENVMAP_MODE_REFRACTION";break}return e}function YT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Oa:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function JT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ZT(o,e,t,n){const i=o.getContext(),a=t.defines;let s=t.vertexShader,l=t.fragmentShader;const u=WT(t),d=HT(t),f=$T(t),h=YT(t),p=JT(t),g=t.isWebGL2?"":UT(t),y=NT(a),v=i.createProgram();let _,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[y].filter(h5).join(`
`),_.length>0&&(_+=`
`),S=[g,y].filter(h5).join(`
`),S.length>0&&(S+=`
`)):(_=[Vi(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(h5).join(`
`),S=[g,Vi(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==F4?"#define TONE_MAPPING":"",t.toneMapping!==F4?d2.tonemapping_pars_fragment:"",t.toneMapping!==F4?kT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",d2.encodings_pars_fragment,PT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(h5).join(`
`)),s=be(s),s=Fi(s,t),s=Bi(s,t),l=be(l),l=Fi(l,t),l=Bi(l,t),s=Gi(s),l=Gi(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===ci?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ci?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=x+_+s,b=x+S+l,C=Ui(i,35633,M),w=Ui(i,35632,b);if(i.attachShader(v,C),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),o.debug.checkShaderErrors){const E=i.getProgramInfoLog(v).trim(),z=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(w).trim();let X=!0,B=!0;if(i.getProgramParameter(v,35714)===!1){X=!1;const O=Ni(i,C,"vertex"),F=Ni(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+E+`
`+O+`
`+F)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(z===""||W==="")&&(B=!1);B&&(this.diagnostics={runnable:X,programLog:E,vertexShader:{log:z,prefix:_},fragmentShader:{log:W,prefix:S}})}i.deleteShader(C),i.deleteShader(w);let I;this.getUniforms=function(){return I===void 0&&(I=new R8(i,v)),I};let T;return this.getAttributes=function(){return T===void 0&&(T=FT(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let qT=0;class XT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new QT(e),t.set(e,n)),n}}class QT{constructor(e){this.id=qT++,this.code=e,this.usedTimes=0}}function KT(o,e,t,n,i,a,s){const l=new Ba,u=new XT,d=[],f=i.isWebGL2,h=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T,E,z,W,X){const B=W.fog,O=X.geometry,F=T.isMeshStandardMaterial?W.environment:null,Y=(T.isMeshStandardMaterial?t:e).get(T.envMap||F),H=Y&&Y.mapping===t6?Y.image.height:null,U=y[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const k=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,G=k!==void 0?k.length:0;let i1=0;O.morphAttributes.position!==void 0&&(i1=1),O.morphAttributes.normal!==void 0&&(i1=2),O.morphAttributes.color!==void 0&&(i1=3);let q,$,n1,r1;if(U){const F1=m4[U];q=F1.vertexShader,$=F1.fragmentShader}else q=T.vertexShader,$=T.fragmentShader,u.update(T),n1=u.getVertexShaderID(T),r1=u.getFragmentShaderID(T);const e1=o.getRenderTarget(),h1=T.alphaTest>0,g1=T.clearcoat>0,v1=T.iridescence>0;return{isWebGL2:f,shaderID:U,shaderName:T.type,vertexShader:q,fragmentShader:$,defines:T.defines,customVertexShaderID:n1,customFragmentShaderID:r1,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:p,outputEncoding:e1===null?o.outputEncoding:e1.isXRRenderTarget===!0?e1.texture.encoding:W0,map:!!T.map,matcap:!!T.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:H,lightMap:!!T.lightMap,aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===AM,tangentSpaceNormalMap:T.normalMapType===MM,decodeVideoTexture:!!T.map&&T.map.isVideoTexture===!0&&T.map.encoding===F2,clearcoat:g1,clearcoatMap:g1&&!!T.clearcoatMap,clearcoatRoughnessMap:g1&&!!T.clearcoatRoughnessMap,clearcoatNormalMap:g1&&!!T.clearcoatNormalMap,iridescence:v1,iridescenceMap:v1&&!!T.iridescenceMap,iridescenceThicknessMap:v1&&!!T.iridescenceThicknessMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,specularIntensityMap:!!T.specularIntensityMap,specularColorMap:!!T.specularColorMap,opaque:T.transparent===!1&&T.blending===U0,alphaMap:!!T.alphaMap,alphaTest:h1,gradientMap:!!T.gradientMap,sheen:T.sheen>0,sheenColorMap:!!T.sheenColorMap,sheenRoughnessMap:!!T.sheenRoughnessMap,transmission:T.transmission>0,transmissionMap:!!T.transmissionMap,thicknessMap:!!T.thicknessMap,combine:T.combine,vertexTangents:!!T.normalMap&&!!O.attributes.tangent,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.iridescenceMap||!!T.iridescenceThicknessMap||!!T.displacementMap||!!T.transmissionMap||!!T.thicknessMap||!!T.specularIntensityMap||!!T.specularColorMap||!!T.sheenColorMap||!!T.sheenRoughnessMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.iridescenceMap||T.iridescenceThicknessMap||T.transmission>0||T.transmissionMap||T.thicknessMap||T.specularIntensityMap||T.specularColorMap||T.sheen>0||T.sheenColorMap||T.sheenRoughnessMap)&&!!T.displacementMap,fog:!!B,useFog:T.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:i1,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:T.toneMapped?o.toneMapping:F4,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_4,flipSided:T.side===n4,useDepthPacking:!!T.depthPacking,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function _(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)E.push(z),E.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(E,T),x(E,T),E.push(o.outputEncoding)),E.push(T.customProgramCacheKey),E.join()}function S(T,E){T.push(E.precision),T.push(E.outputEncoding),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.combine),T.push(E.vertexUvs),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){l.disableAll(),E.isWebGL2&&l.enable(0),E.supportsVertexTextures&&l.enable(1),E.instancing&&l.enable(2),E.instancingColor&&l.enable(3),E.map&&l.enable(4),E.matcap&&l.enable(5),E.envMap&&l.enable(6),E.lightMap&&l.enable(7),E.aoMap&&l.enable(8),E.emissiveMap&&l.enable(9),E.bumpMap&&l.enable(10),E.normalMap&&l.enable(11),E.objectSpaceNormalMap&&l.enable(12),E.tangentSpaceNormalMap&&l.enable(13),E.clearcoat&&l.enable(14),E.clearcoatMap&&l.enable(15),E.clearcoatRoughnessMap&&l.enable(16),E.clearcoatNormalMap&&l.enable(17),E.iridescence&&l.enable(18),E.iridescenceMap&&l.enable(19),E.iridescenceThicknessMap&&l.enable(20),E.displacementMap&&l.enable(21),E.specularMap&&l.enable(22),E.roughnessMap&&l.enable(23),E.metalnessMap&&l.enable(24),E.gradientMap&&l.enable(25),E.alphaMap&&l.enable(26),E.alphaTest&&l.enable(27),E.vertexColors&&l.enable(28),E.vertexAlphas&&l.enable(29),E.vertexUvs&&l.enable(30),E.vertexTangents&&l.enable(31),E.uvsVertexOnly&&l.enable(32),T.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.skinning&&l.enable(4),E.morphTargets&&l.enable(5),E.morphNormals&&l.enable(6),E.morphColors&&l.enable(7),E.premultipliedAlpha&&l.enable(8),E.shadowMapEnabled&&l.enable(9),E.physicallyCorrectLights&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.specularIntensityMap&&l.enable(15),E.specularColorMap&&l.enable(16),E.transmission&&l.enable(17),E.transmissionMap&&l.enable(18),E.thicknessMap&&l.enable(19),E.sheen&&l.enable(20),E.sheenColorMap&&l.enable(21),E.sheenRoughnessMap&&l.enable(22),E.decodeVideoTexture&&l.enable(23),E.opaque&&l.enable(24),T.push(l.mask)}function M(T){const E=y[T.type];let z;if(E){const W=m4[E];z=BM.clone(W.uniforms)}else z=T.uniforms;return z}function b(T,E){let z;for(let W=0,X=d.length;W<X;W++){const B=d[W];if(B.cacheKey===E){z=B,++z.usedTimes;break}}return z===void 0&&(z=new ZT(o,E,T,a),d.push(z)),z}function C(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function w(T){u.remove(T)}function I(){u.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:M,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:d,dispose:I}}function eE(){let o=new WeakMap;function e(a){let s=o.get(a);return s===void 0&&(s={},o.set(a,s)),s}function t(a){o.delete(a)}function n(a,s,l){o.get(a)[s]=l}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ji(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Wi(){const o=[];let e=0;const t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function s(h,p,g,y,v,_){let S=o[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:g,groupOrder:y,renderOrder:h.renderOrder,z:v,group:_},o[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=g,S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=v,S.group=_),e++,S}function l(h,p,g,y,v,_){const S=s(h,p,g,y,v,_);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function u(h,p,g,y,v,_){const S=s(h,p,g,y,v,_);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function d(h,p){t.length>1&&t.sort(h||tE),n.length>1&&n.sort(p||ji),i.length>1&&i.sort(p||ji)}function f(){for(let h=e,p=o.length;h<p;h++){const g=o[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:l,unshift:u,finish:f,sort:d}}function nE(){let o=new WeakMap;function e(n,i){const a=o.get(n);let s;return a===void 0?(s=new Wi,o.set(n,[s])):i>=a.length?(s=new Wi,a.push(s)):s=a[i],s}function t(){o=new WeakMap}return{get:e,dispose:t}}function iE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new _2};break;case"SpotLight":t={position:new Z,direction:new Z,color:new _2,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new _2,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new _2,groundColor:new _2};break;case"RectAreaLight":t={color:new _2,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=t,t}}}function oE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G1};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G1};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G1,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let aE=0;function rE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function sE(o,e){const t=new iE,n=oE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new Z);const a=new Z,s=new j2,l=new j2;function u(f,h){let p=0,g=0,y=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let v=0,_=0,S=0,x=0,M=0,b=0,C=0,w=0,I=0,T=0;f.sort(rE);const E=h!==!0?Math.PI:1;for(let W=0,X=f.length;W<X;W++){const B=f[W],O=B.color,F=B.intensity,Y=B.distance,H=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=O.r*F*E,g+=O.g*F*E,y+=O.b*F*E;else if(B.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(B.sh.coefficients[U],F);else if(B.isDirectionalLight){const U=t.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){const k=B.shadow,G=n.get(B);G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.directionalShadow[v]=G,i.directionalShadowMap[v]=H,i.directionalShadowMatrix[v]=B.shadow.matrix,b++}i.directional[v]=U,v++}else if(B.isSpotLight){const U=t.get(B);U.position.setFromMatrixPosition(B.matrixWorld),U.color.copy(O).multiplyScalar(F*E),U.distance=Y,U.coneCos=Math.cos(B.angle),U.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),U.decay=B.decay,i.spot[S]=U;const k=B.shadow;if(B.map&&(i.spotLightMap[I]=B.map,I++,k.updateMatrices(B),B.castShadow&&T++),i.spotLightMatrix[S]=k.matrix,B.castShadow){const G=n.get(B);G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.spotShadow[S]=G,i.spotShadowMap[S]=H,w++}S++}else if(B.isRectAreaLight){const U=t.get(B);U.color.copy(O).multiplyScalar(F),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=U,x++}else if(B.isPointLight){const U=t.get(B);if(U.color.copy(B.color).multiplyScalar(B.intensity*E),U.distance=B.distance,U.decay=B.decay,B.castShadow){const k=B.shadow,G=n.get(B);G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=B.shadow.matrix,C++}i.point[_]=U,_++}else if(B.isHemisphereLight){const U=t.get(B);U.skyColor.copy(B.color).multiplyScalar(F*E),U.groundColor.copy(B.groundColor).multiplyScalar(F*E),i.hemi[M]=U,M++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=R1.LTC_FLOAT_1,i.rectAreaLTC2=R1.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=R1.LTC_HALF_1,i.rectAreaLTC2=R1.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=y;const z=i.hash;(z.directionalLength!==v||z.pointLength!==_||z.spotLength!==S||z.rectAreaLength!==x||z.hemiLength!==M||z.numDirectionalShadows!==b||z.numPointShadows!==C||z.numSpotShadows!==w||z.numSpotMaps!==I)&&(i.directional.length=v,i.spot.length=S,i.rectArea.length=x,i.point.length=_,i.hemi.length=M,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+I-T,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=T,z.directionalLength=v,z.pointLength=_,z.spotLength=S,z.rectAreaLength=x,z.hemiLength=M,z.numDirectionalShadows=b,z.numPointShadows=C,z.numSpotShadows=w,z.numSpotMaps=I,i.version=aE++)}function d(f,h){let p=0,g=0,y=0,v=0,_=0;const S=h.matrixWorldInverse;for(let x=0,M=f.length;x<M;x++){const b=f[x];if(b.isDirectionalLight){const C=i.directional[p];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),p++}else if(b.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(S),y++}else if(b.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),l.identity(),s.copy(b.matrixWorld),s.premultiply(S),l.extractRotation(s),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),v++}else if(b.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),g++}else if(b.isHemisphereLight){const C=i.hemi[_];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),_++}}}return{setup:u,setupView:d,state:i}}function Hi(o,e){const t=new sE(o,e),n=[],i=[];function a(){n.length=0,i.length=0}function s(h){n.push(h)}function l(h){i.push(h)}function u(h){t.setup(n,h)}function d(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:d,pushLight:s,pushShadow:l}}function lE(o,e){let t=new WeakMap;function n(a,s=0){const l=t.get(a);let u;return l===void 0?(u=new Hi(o,e),t.set(a,[u])):s>=l.length?(u=new Hi(o,e),l.push(u)):u=l[s],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class uE extends Z0{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Z0{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pE(o,e,t){let n=new Ha;const i=new G1,a=new G1,s=new c3,l=new uE({depthPacking:SM}),u=new cE,d={},f=t.maxTextureSize,h={0:n4,1:N9,2:_4},p=new G4({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G1},radius:{value:4}},vertexShader:dE,fragmentShader:fE}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new R3;y.setAttribute("position",new N3(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new u3(y,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Da,this.render=function(b,C,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const I=o.getRenderTarget(),T=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),z=o.state;z.setBlending(l0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let W=0,X=b.length;W<X;W++){const B=b[W],O=B.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const F=O.getFrameExtents();if(i.multiply(F),a.copy(O.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/F.x),i.x=a.x*F.x,O.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/F.y),i.y=a.y*F.y,O.mapSize.y=a.y)),O.map===null){const H=this.type!==p5?{minFilter:x3,magFilter:x3}:{};O.map=new H0(i.x,i.y,H),O.map.texture.name=B.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const Y=O.getViewportCount();for(let H=0;H<Y;H++){const U=O.getViewport(H);s.set(a.x*U.x,a.y*U.y,a.x*U.z,a.y*U.w),z.viewport(s),O.updateMatrices(B,H),n=O.getFrustum(),M(C,w,O.camera,B,this.type)}O.isPointLightShadow!==!0&&this.type===p5&&S(O,w),O.needsUpdate=!1}_.needsUpdate=!1,o.setRenderTarget(I,T,E)};function S(b,C){const w=e.update(v);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new H0(i.x,i.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(C,null,w,p,v,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(C,null,w,g,v,null)}function x(b,C,w,I,T,E){let z=null;const W=w.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(W!==void 0?z=W:z=w.isPointLight===!0?u:l,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0){const X=z.uuid,B=C.uuid;let O=d[X];O===void 0&&(O={},d[X]=O);let F=O[B];F===void 0&&(F=z.clone(),O[B]=F),z=F}return z.visible=C.visible,z.wireframe=C.wireframe,E===p5?z.side=C.shadowSide!==null?C.shadowSide:C.side:z.side=C.shadowSide!==null?C.shadowSide:h[C.side],z.alphaMap=C.alphaMap,z.alphaTest=C.alphaTest,z.clipShadows=C.clipShadows,z.clippingPlanes=C.clippingPlanes,z.clipIntersection=C.clipIntersection,z.displacementMap=C.displacementMap,z.displacementScale=C.displacementScale,z.displacementBias=C.displacementBias,z.wireframeLinewidth=C.wireframeLinewidth,z.linewidth=C.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(w.matrixWorld),z.nearDistance=I,z.farDistance=T),z}function M(b,C,w,I,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===p5)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,b.matrixWorld);const W=e.update(b),X=b.material;if(Array.isArray(X)){const B=W.groups;for(let O=0,F=B.length;O<F;O++){const Y=B[O],H=X[Y.materialIndex];if(H&&H.visible){const U=x(b,H,I,w.near,w.far,T);o.renderBufferDirect(w,null,W,U,b,Y)}}}else if(X.visible){const B=x(b,X,I,w.near,w.far,T);o.renderBufferDirect(w,null,W,B,b,null)}}const z=b.children;for(let W=0,X=z.length;W<X;W++)M(z[W],C,w,I,T)}}function hE(o,e,t){const n=t.isWebGL2;function i(){let t1=!1;const z1=new c3;let E1=null;const m1=new c3(0,0,0,0);return{setMask:function(I1){E1!==I1&&!t1&&(o.colorMask(I1,I1,I1,I1),E1=I1)},setLocked:function(I1){t1=I1},setClear:function(I1,Q1,E2,G2,H4){H4===!0&&(I1*=G2,Q1*=G2,E2*=G2),z1.set(I1,Q1,E2,G2),m1.equals(z1)===!1&&(o.clearColor(I1,Q1,E2,G2),m1.copy(z1))},reset:function(){t1=!1,E1=null,m1.set(-1,0,0,0)}}}function a(){let t1=!1,z1=null,E1=null,m1=null;return{setTest:function(I1){I1?h1(2929):g1(2929)},setMask:function(I1){z1!==I1&&!t1&&(o.depthMask(I1),z1=I1)},setFunc:function(I1){if(E1!==I1){switch(I1){case HS:o.depthFunc(512);break;case $S:o.depthFunc(519);break;case YS:o.depthFunc(513);break;case fe:o.depthFunc(515);break;case JS:o.depthFunc(514);break;case ZS:o.depthFunc(518);break;case qS:o.depthFunc(516);break;case XS:o.depthFunc(517);break;default:o.depthFunc(515)}E1=I1}},setLocked:function(I1){t1=I1},setClear:function(I1){m1!==I1&&(o.clearDepth(I1),m1=I1)},reset:function(){t1=!1,z1=null,E1=null,m1=null}}}function s(){let t1=!1,z1=null,E1=null,m1=null,I1=null,Q1=null,E2=null,G2=null,H4=null;return{setTest:function(k2){t1||(k2?h1(2960):g1(2960))},setMask:function(k2){z1!==k2&&!t1&&(o.stencilMask(k2),z1=k2)},setFunc:function(k2,A4,W3){(E1!==k2||m1!==A4||I1!==W3)&&(o.stencilFunc(k2,A4,W3),E1=k2,m1=A4,I1=W3)},setOp:function(k2,A4,W3){(Q1!==k2||E2!==A4||G2!==W3)&&(o.stencilOp(k2,A4,W3),Q1=k2,E2=A4,G2=W3)},setLocked:function(k2){t1=k2},setClear:function(k2){H4!==k2&&(o.clearStencil(k2),H4=k2)},reset:function(){t1=!1,z1=null,E1=null,m1=null,I1=null,Q1=null,E2=null,G2=null,H4=null}}}const l=new i,u=new a,d=new s,f=new WeakMap,h=new WeakMap;let p={},g={},y=new WeakMap,v=[],_=null,S=!1,x=null,M=null,b=null,C=null,w=null,I=null,T=null,E=!1,z=null,W=null,X=null,B=null,O=null;const F=o.getParameter(35661);let Y=!1,H=0;const U=o.getParameter(7938);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=H>=2);let k=null,G={};const i1=o.getParameter(3088),q=o.getParameter(2978),$=new c3().fromArray(i1),n1=new c3().fromArray(q);function r1(t1,z1,E1){const m1=new Uint8Array(4),I1=o.createTexture();o.bindTexture(t1,I1),o.texParameteri(t1,10241,9728),o.texParameteri(t1,10240,9728);for(let Q1=0;Q1<E1;Q1++)o.texImage2D(z1+Q1,0,6408,1,1,0,6408,5121,m1);return I1}const e1={};e1[3553]=r1(3553,3553,1),e1[34067]=r1(34067,34069,6),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),h1(2929),u.setFunc(fe),n2(!1),K1(Pn),h1(2884),$1(l0);function h1(t1){p[t1]!==!0&&(o.enable(t1),p[t1]=!0)}function g1(t1){p[t1]!==!1&&(o.disable(t1),p[t1]=!1)}function v1(t1,z1){return g[t1]!==z1?(o.bindFramebuffer(t1,z1),g[t1]=z1,n&&(t1===36009&&(g[36160]=z1),t1===36160&&(g[36009]=z1)),!0):!1}function p1(t1,z1){let E1=v,m1=!1;if(t1)if(E1=y.get(z1),E1===void 0&&(E1=[],y.set(z1,E1)),t1.isWebGLMultipleRenderTargets){const I1=t1.texture;if(E1.length!==I1.length||E1[0]!==36064){for(let Q1=0,E2=I1.length;Q1<E2;Q1++)E1[Q1]=36064+Q1;E1.length=I1.length,m1=!0}}else E1[0]!==36064&&(E1[0]=36064,m1=!0);else E1[0]!==1029&&(E1[0]=1029,m1=!0);m1&&(t.isWebGL2?o.drawBuffers(E1):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(E1))}function F1(t1){return _!==t1?(o.useProgram(t1),_=t1,!0):!1}const D1={[S9]:32774,[zS]:32778,[PS]:32779};if(n)D1[Fn]=32775,D1[Bn]=32776;else{const t1=e.get("EXT_blend_minmax");t1!==null&&(D1[Fn]=t1.MIN_EXT,D1[Bn]=t1.MAX_EXT)}const M1={[kS]:0,[US]:1,[NS]:768,[Ra]:770,[WS]:776,[VS]:774,[BS]:772,[FS]:769,[Ia]:771,[jS]:775,[GS]:773};function $1(t1,z1,E1,m1,I1,Q1,E2,G2){if(t1===l0){S===!0&&(g1(3042),S=!1);return}if(S===!1&&(h1(3042),S=!0),t1!==LS){if(t1!==x||G2!==E){if((M!==S9||w!==S9)&&(o.blendEquation(32774),M=S9,w=S9),G2)switch(t1){case U0:o.blendFuncSeparate(1,771,1,771);break;case kn:o.blendFunc(1,1);break;case Un:o.blendFuncSeparate(0,769,0,1);break;case Nn:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",t1);break}else switch(t1){case U0:o.blendFuncSeparate(770,771,1,771);break;case kn:o.blendFunc(770,1);break;case Un:o.blendFuncSeparate(0,769,0,1);break;case Nn:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",t1);break}b=null,C=null,I=null,T=null,x=t1,E=G2}return}I1=I1||z1,Q1=Q1||E1,E2=E2||m1,(z1!==M||I1!==w)&&(o.blendEquationSeparate(D1[z1],D1[I1]),M=z1,w=I1),(E1!==b||m1!==C||Q1!==I||E2!==T)&&(o.blendFuncSeparate(M1[E1],M1[m1],M1[Q1],M1[E2]),b=E1,C=m1,I=Q1,T=E2),x=t1,E=null}function e2(t1,z1){t1.side===_4?g1(2884):h1(2884);let E1=t1.side===n4;z1&&(E1=!E1),n2(E1),t1.blending===U0&&t1.transparent===!1?$1(l0):$1(t1.blending,t1.blendEquation,t1.blendSrc,t1.blendDst,t1.blendEquationAlpha,t1.blendSrcAlpha,t1.blendDstAlpha,t1.premultipliedAlpha),u.setFunc(t1.depthFunc),u.setTest(t1.depthTest),u.setMask(t1.depthWrite),l.setMask(t1.colorWrite);const m1=t1.stencilWrite;d.setTest(m1),m1&&(d.setMask(t1.stencilWriteMask),d.setFunc(t1.stencilFunc,t1.stencilRef,t1.stencilFuncMask),d.setOp(t1.stencilFail,t1.stencilZFail,t1.stencilZPass)),N1(t1.polygonOffset,t1.polygonOffsetFactor,t1.polygonOffsetUnits),t1.alphaToCoverage===!0?h1(32926):g1(32926)}function n2(t1){z!==t1&&(t1?o.frontFace(2304):o.frontFace(2305),z=t1)}function K1(t1){t1!==RS?(h1(2884),t1!==W&&(t1===Pn?o.cullFace(1029):t1===IS?o.cullFace(1028):o.cullFace(1032))):g1(2884),W=t1}function i2(t1){t1!==X&&(Y&&o.lineWidth(t1),X=t1)}function N1(t1,z1,E1){t1?(h1(32823),(B!==z1||O!==E1)&&(o.polygonOffset(z1,E1),B=z1,O=E1)):g1(32823)}function Y1(t1){t1?h1(3089):g1(3089)}function r2(t1){t1===void 0&&(t1=33984+F-1),k!==t1&&(o.activeTexture(t1),k=t1)}function N(t1,z1,E1){E1===void 0&&(k===null?E1=33984+F-1:E1=k);let m1=G[E1];m1===void 0&&(m1={type:void 0,texture:void 0},G[E1]=m1),(m1.type!==t1||m1.texture!==z1)&&(k!==E1&&(o.activeTexture(E1),k=E1),o.bindTexture(t1,z1||e1[t1]),m1.type=t1,m1.texture=z1)}function D(){const t1=G[k];t1!==void 0&&t1.type!==void 0&&(o.bindTexture(t1.type,null),t1.type=void 0,t1.texture=void 0)}function u1(){try{o.compressedTexImage2D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function b1(){try{o.texSubImage2D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function A1(){try{o.texSubImage3D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function O1(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function V1(){try{o.texStorage2D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function J(){try{o.texStorage3D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function o1(){try{o.texImage2D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function k1(){try{o.texImage3D.apply(o,arguments)}catch(t1){console.error("THREE.WebGLState:",t1)}}function B1(t1){$.equals(t1)===!1&&(o.scissor(t1.x,t1.y,t1.z,t1.w),$.copy(t1))}function U1(t1){n1.equals(t1)===!1&&(o.viewport(t1.x,t1.y,t1.z,t1.w),n1.copy(t1))}function W1(t1,z1){let E1=h.get(z1);E1===void 0&&(E1=new WeakMap,h.set(z1,E1));let m1=E1.get(t1);m1===void 0&&(m1=o.getUniformBlockIndex(z1,t1.name),E1.set(t1,m1))}function t2(t1,z1){const m1=h.get(z1).get(t1);f.get(t1)!==m1&&(o.uniformBlockBinding(z1,m1,t1.__bindingPointIndex),f.set(t1,m1))}function v2(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},k=null,G={},g={},y=new WeakMap,v=[],_=null,S=!1,x=null,M=null,b=null,C=null,w=null,I=null,T=null,E=!1,z=null,W=null,X=null,B=null,O=null,$.set(0,0,o.canvas.width,o.canvas.height),n1.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:h1,disable:g1,bindFramebuffer:v1,drawBuffers:p1,useProgram:F1,setBlending:$1,setMaterial:e2,setFlipSided:n2,setCullFace:K1,setLineWidth:i2,setPolygonOffset:N1,setScissorTest:Y1,activeTexture:r2,bindTexture:N,unbindTexture:D,compressedTexImage2D:u1,texImage2D:o1,texImage3D:k1,updateUBOMapping:W1,uniformBlockBinding:t2,texStorage2D:V1,texStorage3D:J,texSubImage2D:b1,texSubImage3D:A1,compressedTexSubImage2D:O1,scissor:B1,viewport:U1,reset:v2}}function mE(o,e,t,n,i,a,s){const l=i.isWebGL2,u=i.maxTextures,d=i.maxCubemapSize,f=i.maxTextureSize,h=i.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(N){}function x(N,D){return S?new OffscreenCanvas(N,D):T5("canvas")}function M(N,D,u1,b1){let A1=1;if((N.width>b1||N.height>b1)&&(A1=b1/Math.max(N.width,N.height)),A1<1||D===!0)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap){const O1=D?ye:Math.floor,V1=O1(A1*N.width),J=O1(A1*N.height);v===void 0&&(v=x(V1,J));const o1=u1?x(V1,J):v;return o1.width=V1,o1.height=J,o1.getContext("2d").drawImage(N,0,0,V1,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+V1+"x"+J+")."),o1}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function b(N){return fi(N.width)&&fi(N.height)}function C(N){return l?!1:N.wrapS!==d4||N.wrapT!==d4||N.minFilter!==x3&&N.minFilter!==Z3}function w(N,D){return N.generateMipmaps&&D&&N.minFilter!==x3&&N.minFilter!==Z3}function I(N){o.generateMipmap(N)}function T(N,D,u1,b1,A1=!1){if(l===!1)return D;if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let O1=D;return D===6403&&(u1===5126&&(O1=33326),u1===5131&&(O1=33325),u1===5121&&(O1=33321)),D===33319&&(u1===5126&&(O1=33328),u1===5131&&(O1=33327),u1===5121&&(O1=33323)),D===6408&&(u1===5126&&(O1=34836),u1===5131&&(O1=34842),u1===5121&&(O1=b1===F2&&A1===!1?35907:32856),u1===32819&&(O1=32854),u1===32820&&(O1=32855)),(O1===33325||O1===33326||O1===33327||O1===33328||O1===34842||O1===34836)&&e.get("EXT_color_buffer_float"),O1}function E(N,D,u1){return w(N,u1)===!0||N.isFramebufferTexture&&N.minFilter!==x3&&N.minFilter!==Z3?Math.log2(Math.max(D.width,D.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?D.mipmaps.length:1}function z(N){return N===x3||N===Gn||N===Vn?9728:9729}function W(N){const D=N.target;D.removeEventListener("dispose",W),B(D),D.isVideoTexture&&y.delete(D)}function X(N){const D=N.target;D.removeEventListener("dispose",X),F(D)}function B(N){const D=n.get(N);if(D.__webglInit===void 0)return;const u1=N.source,b1=_.get(u1);if(b1){const A1=b1[D.__cacheKey];A1.usedTimes--,A1.usedTimes===0&&O(N),Object.keys(b1).length===0&&_.delete(u1)}n.remove(N)}function O(N){const D=n.get(N);o.deleteTexture(D.__webglTexture);const u1=N.source,b1=_.get(u1);delete b1[D.__cacheKey],s.memory.textures--}function F(N){const D=N.texture,u1=n.get(N),b1=n.get(D);if(b1.__webglTexture!==void 0&&(o.deleteTexture(b1.__webglTexture),s.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let A1=0;A1<6;A1++)o.deleteFramebuffer(u1.__webglFramebuffer[A1]),u1.__webglDepthbuffer&&o.deleteRenderbuffer(u1.__webglDepthbuffer[A1]);else{if(o.deleteFramebuffer(u1.__webglFramebuffer),u1.__webglDepthbuffer&&o.deleteRenderbuffer(u1.__webglDepthbuffer),u1.__webglMultisampledFramebuffer&&o.deleteFramebuffer(u1.__webglMultisampledFramebuffer),u1.__webglColorRenderbuffer)for(let A1=0;A1<u1.__webglColorRenderbuffer.length;A1++)u1.__webglColorRenderbuffer[A1]&&o.deleteRenderbuffer(u1.__webglColorRenderbuffer[A1]);u1.__webglDepthRenderbuffer&&o.deleteRenderbuffer(u1.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let A1=0,O1=D.length;A1<O1;A1++){const V1=n.get(D[A1]);V1.__webglTexture&&(o.deleteTexture(V1.__webglTexture),s.memory.textures--),n.remove(D[A1])}n.remove(D),n.remove(N)}let Y=0;function H(){Y=0}function U(){const N=Y;return N>=u&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u),Y+=1,N}function k(N){const D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.encoding),D.join()}function G(N,D){const u1=n.get(N);if(N.isVideoTexture&&Y1(N),N.isRenderTargetTexture===!1&&N.version>0&&u1.__version!==N.version){const b1=N.image;if(b1===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b1.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{g1(u1,N,D);return}}t.bindTexture(3553,u1.__webglTexture,33984+D)}function i1(N,D){const u1=n.get(N);if(N.version>0&&u1.__version!==N.version){g1(u1,N,D);return}t.bindTexture(35866,u1.__webglTexture,33984+D)}function q(N,D){const u1=n.get(N);if(N.version>0&&u1.__version!==N.version){g1(u1,N,D);return}t.bindTexture(32879,u1.__webglTexture,33984+D)}function $(N,D){const u1=n.get(N);if(N.version>0&&u1.__version!==N.version){v1(u1,N,D);return}t.bindTexture(34067,u1.__webglTexture,33984+D)}const n1={[me]:10497,[d4]:33071,[ge]:33648},r1={[x3]:9728,[Gn]:9984,[Vn]:9986,[Z3]:9729,[aM]:9985,[n6]:9987};function e1(N,D,u1){if(u1?(o.texParameteri(N,10242,n1[D.wrapS]),o.texParameteri(N,10243,n1[D.wrapT]),(N===32879||N===35866)&&o.texParameteri(N,32882,n1[D.wrapR]),o.texParameteri(N,10240,r1[D.magFilter]),o.texParameteri(N,10241,r1[D.minFilter])):(o.texParameteri(N,10242,33071),o.texParameteri(N,10243,33071),(N===32879||N===35866)&&o.texParameteri(N,32882,33071),(D.wrapS!==d4||D.wrapT!==d4)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(N,10240,z(D.magFilter)),o.texParameteri(N,10241,z(D.minFilter)),D.minFilter!==x3&&D.minFilter!==Z3&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const b1=e.get("EXT_texture_filter_anisotropic");if(D.type===L0&&e.has("OES_texture_float_linear")===!1||l===!1&&D.type===C5&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||n.get(D).__currentAnisotropy)&&(o.texParameterf(N,b1.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,i.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy)}}function h1(N,D){let u1=!1;N.__webglInit===void 0&&(N.__webglInit=!0,D.addEventListener("dispose",W));const b1=D.source;let A1=_.get(b1);A1===void 0&&(A1={},_.set(b1,A1));const O1=k(D);if(O1!==N.__cacheKey){A1[O1]===void 0&&(A1[O1]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,u1=!0),A1[O1].usedTimes++;const V1=A1[N.__cacheKey];V1!==void 0&&(A1[N.__cacheKey].usedTimes--,V1.usedTimes===0&&O(D)),N.__cacheKey=O1,N.__webglTexture=A1[O1].texture}return u1}function g1(N,D,u1){let b1=3553;D.isDataArrayTexture&&(b1=35866),D.isData3DTexture&&(b1=32879);const A1=h1(N,D),O1=D.source;t.bindTexture(b1,N.__webglTexture,33984+u1);const V1=n.get(O1);if(O1.version!==V1.__version||A1===!0){t.activeTexture(33984+u1),o.pixelStorei(37440,D.flipY),o.pixelStorei(37441,D.premultiplyAlpha),o.pixelStorei(3317,D.unpackAlignment),o.pixelStorei(37443,0);const J=C(D)&&b(D.image)===!1;let o1=M(D.image,J,!1,f);o1=r2(D,o1);const k1=b(o1)||l,B1=a.convert(D.format,D.encoding);let U1=a.convert(D.type),W1=T(D.internalFormat,B1,U1,D.encoding,D.isVideoTexture);e1(b1,D,k1);let t2;const v2=D.mipmaps,t1=l&&D.isVideoTexture!==!0,z1=V1.__version===void 0||A1===!0,E1=E(D,o1,k1);if(D.isDepthTexture)W1=6402,l?D.type===L0?W1=36012:D.type===O0?W1=33190:D.type===L9?W1=35056:W1=33189:D.type===L0&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===N0&&W1===6402&&D.type!==za&&D.type!==O0&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=O0,U1=a.convert(D.type)),D.format===G9&&W1===6402&&(W1=34041,D.type!==L9&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=L9,U1=a.convert(D.type))),z1&&(t1?t.texStorage2D(3553,1,W1,o1.width,o1.height):t.texImage2D(3553,0,W1,o1.width,o1.height,0,B1,U1,null));else if(D.isDataTexture)if(v2.length>0&&k1){t1&&z1&&t.texStorage2D(3553,E1,W1,v2[0].width,v2[0].height);for(let m1=0,I1=v2.length;m1<I1;m1++)t2=v2[m1],t1?t.texSubImage2D(3553,m1,0,0,t2.width,t2.height,B1,U1,t2.data):t.texImage2D(3553,m1,W1,t2.width,t2.height,0,B1,U1,t2.data);D.generateMipmaps=!1}else t1?(z1&&t.texStorage2D(3553,E1,W1,o1.width,o1.height),t.texSubImage2D(3553,0,0,0,o1.width,o1.height,B1,U1,o1.data)):t.texImage2D(3553,0,W1,o1.width,o1.height,0,B1,U1,o1.data);else if(D.isCompressedTexture){t1&&z1&&t.texStorage2D(3553,E1,W1,v2[0].width,v2[0].height);for(let m1=0,I1=v2.length;m1<I1;m1++)t2=v2[m1],D.format!==y4?B1!==null?t1?t.compressedTexSubImage2D(3553,m1,0,0,t2.width,t2.height,B1,t2.data):t.compressedTexImage2D(3553,m1,W1,t2.width,t2.height,0,t2.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t1?t.texSubImage2D(3553,m1,0,0,t2.width,t2.height,B1,U1,t2.data):t.texImage2D(3553,m1,W1,t2.width,t2.height,0,B1,U1,t2.data)}else if(D.isDataArrayTexture)t1?(z1&&t.texStorage3D(35866,E1,W1,o1.width,o1.height,o1.depth),t.texSubImage3D(35866,0,0,0,0,o1.width,o1.height,o1.depth,B1,U1,o1.data)):t.texImage3D(35866,0,W1,o1.width,o1.height,o1.depth,0,B1,U1,o1.data);else if(D.isData3DTexture)t1?(z1&&t.texStorage3D(32879,E1,W1,o1.width,o1.height,o1.depth),t.texSubImage3D(32879,0,0,0,0,o1.width,o1.height,o1.depth,B1,U1,o1.data)):t.texImage3D(32879,0,W1,o1.width,o1.height,o1.depth,0,B1,U1,o1.data);else if(D.isFramebufferTexture){if(z1)if(t1)t.texStorage2D(3553,E1,W1,o1.width,o1.height);else{let m1=o1.width,I1=o1.height;for(let Q1=0;Q1<E1;Q1++)t.texImage2D(3553,Q1,W1,m1,I1,0,B1,U1,null),m1>>=1,I1>>=1}}else if(v2.length>0&&k1){t1&&z1&&t.texStorage2D(3553,E1,W1,v2[0].width,v2[0].height);for(let m1=0,I1=v2.length;m1<I1;m1++)t2=v2[m1],t1?t.texSubImage2D(3553,m1,0,0,B1,U1,t2):t.texImage2D(3553,m1,W1,B1,U1,t2);D.generateMipmaps=!1}else t1?(z1&&t.texStorage2D(3553,E1,W1,o1.width,o1.height),t.texSubImage2D(3553,0,0,0,B1,U1,o1)):t.texImage2D(3553,0,W1,B1,U1,o1);w(D,k1)&&I(b1),V1.__version=O1.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function v1(N,D,u1){if(D.image.length!==6)return;const b1=h1(N,D),A1=D.source;t.bindTexture(34067,N.__webglTexture,33984+u1);const O1=n.get(A1);if(A1.version!==O1.__version||b1===!0){t.activeTexture(33984+u1),o.pixelStorei(37440,D.flipY),o.pixelStorei(37441,D.premultiplyAlpha),o.pixelStorei(3317,D.unpackAlignment),o.pixelStorei(37443,0);const V1=D.isCompressedTexture||D.image[0].isCompressedTexture,J=D.image[0]&&D.image[0].isDataTexture,o1=[];for(let m1=0;m1<6;m1++)!V1&&!J?o1[m1]=M(D.image[m1],!1,!0,d):o1[m1]=J?D.image[m1].image:D.image[m1],o1[m1]=r2(D,o1[m1]);const k1=o1[0],B1=b(k1)||l,U1=a.convert(D.format,D.encoding),W1=a.convert(D.type),t2=T(D.internalFormat,U1,W1,D.encoding),v2=l&&D.isVideoTexture!==!0,t1=O1.__version===void 0||b1===!0;let z1=E(D,k1,B1);e1(34067,D,B1);let E1;if(V1){v2&&t1&&t.texStorage2D(34067,z1,t2,k1.width,k1.height);for(let m1=0;m1<6;m1++){E1=o1[m1].mipmaps;for(let I1=0;I1<E1.length;I1++){const Q1=E1[I1];D.format!==y4?U1!==null?v2?t.compressedTexSubImage2D(34069+m1,I1,0,0,Q1.width,Q1.height,U1,Q1.data):t.compressedTexImage2D(34069+m1,I1,t2,Q1.width,Q1.height,0,Q1.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v2?t.texSubImage2D(34069+m1,I1,0,0,Q1.width,Q1.height,U1,W1,Q1.data):t.texImage2D(34069+m1,I1,t2,Q1.width,Q1.height,0,U1,W1,Q1.data)}}}else{E1=D.mipmaps,v2&&t1&&(E1.length>0&&z1++,t.texStorage2D(34067,z1,t2,o1[0].width,o1[0].height));for(let m1=0;m1<6;m1++)if(J){v2?t.texSubImage2D(34069+m1,0,0,0,o1[m1].width,o1[m1].height,U1,W1,o1[m1].data):t.texImage2D(34069+m1,0,t2,o1[m1].width,o1[m1].height,0,U1,W1,o1[m1].data);for(let I1=0;I1<E1.length;I1++){const E2=E1[I1].image[m1].image;v2?t.texSubImage2D(34069+m1,I1+1,0,0,E2.width,E2.height,U1,W1,E2.data):t.texImage2D(34069+m1,I1+1,t2,E2.width,E2.height,0,U1,W1,E2.data)}}else{v2?t.texSubImage2D(34069+m1,0,0,0,U1,W1,o1[m1]):t.texImage2D(34069+m1,0,t2,U1,W1,o1[m1]);for(let I1=0;I1<E1.length;I1++){const Q1=E1[I1];v2?t.texSubImage2D(34069+m1,I1+1,0,0,U1,W1,Q1.image[m1]):t.texImage2D(34069+m1,I1+1,t2,U1,W1,Q1.image[m1])}}}w(D,B1)&&I(34067),O1.__version=A1.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function p1(N,D,u1,b1,A1){const O1=a.convert(u1.format,u1.encoding),V1=a.convert(u1.type),J=T(u1.internalFormat,O1,V1,u1.encoding);n.get(D).__hasExternalTextures||(A1===32879||A1===35866?t.texImage3D(A1,0,J,D.width,D.height,D.depth,0,O1,V1,null):t.texImage2D(A1,0,J,D.width,D.height,0,O1,V1,null)),t.bindFramebuffer(36160,N),N1(D)?p.framebufferTexture2DMultisampleEXT(36160,b1,A1,n.get(u1).__webglTexture,0,i2(D)):o.framebufferTexture2D(36160,b1,A1,n.get(u1).__webglTexture,0),t.bindFramebuffer(36160,null)}function F1(N,D,u1){if(o.bindRenderbuffer(36161,N),D.depthBuffer&&!D.stencilBuffer){let b1=33189;if(u1||N1(D)){const A1=D.depthTexture;A1&&A1.isDepthTexture&&(A1.type===L0?b1=36012:A1.type===O0&&(b1=33190));const O1=i2(D);N1(D)?p.renderbufferStorageMultisampleEXT(36161,O1,b1,D.width,D.height):o.renderbufferStorageMultisample(36161,O1,b1,D.width,D.height)}else o.renderbufferStorage(36161,b1,D.width,D.height);o.framebufferRenderbuffer(36160,36096,36161,N)}else if(D.depthBuffer&&D.stencilBuffer){const b1=i2(D);u1&&N1(D)===!1?o.renderbufferStorageMultisample(36161,b1,35056,D.width,D.height):N1(D)?p.renderbufferStorageMultisampleEXT(36161,b1,35056,D.width,D.height):o.renderbufferStorage(36161,34041,D.width,D.height),o.framebufferRenderbuffer(36160,33306,36161,N)}else{const b1=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let A1=0;A1<b1.length;A1++){const O1=b1[A1],V1=a.convert(O1.format,O1.encoding),J=a.convert(O1.type),o1=T(O1.internalFormat,V1,J,O1.encoding),k1=i2(D);u1&&N1(D)===!1?o.renderbufferStorageMultisample(36161,k1,o1,D.width,D.height):N1(D)?p.renderbufferStorageMultisampleEXT(36161,k1,o1,D.width,D.height):o.renderbufferStorage(36161,o1,D.width,D.height)}}o.bindRenderbuffer(36161,null)}function D1(N,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),G(D.depthTexture,0);const b1=n.get(D.depthTexture).__webglTexture,A1=i2(D);if(D.depthTexture.format===N0)N1(D)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,b1,0,A1):o.framebufferTexture2D(36160,36096,3553,b1,0);else if(D.depthTexture.format===G9)N1(D)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,b1,0,A1):o.framebufferTexture2D(36160,33306,3553,b1,0);else throw new Error("Unknown depthTexture format")}function M1(N){const D=n.get(N),u1=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!D.__autoAllocateDepthBuffer){if(u1)throw new Error("target.depthTexture not supported in Cube render targets");D1(D.__webglFramebuffer,N)}else if(u1){D.__webglDepthbuffer=[];for(let b1=0;b1<6;b1++)t.bindFramebuffer(36160,D.__webglFramebuffer[b1]),D.__webglDepthbuffer[b1]=o.createRenderbuffer(),F1(D.__webglDepthbuffer[b1],N,!1)}else t.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=o.createRenderbuffer(),F1(D.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function $1(N,D,u1){const b1=n.get(N);D!==void 0&&p1(b1.__webglFramebuffer,N,N.texture,36064,3553),u1!==void 0&&M1(N)}function e2(N){const D=N.texture,u1=n.get(N),b1=n.get(D);N.addEventListener("dispose",X),N.isWebGLMultipleRenderTargets!==!0&&(b1.__webglTexture===void 0&&(b1.__webglTexture=o.createTexture()),b1.__version=D.version,s.memory.textures++);const A1=N.isWebGLCubeRenderTarget===!0,O1=N.isWebGLMultipleRenderTargets===!0,V1=b(N)||l;if(A1){u1.__webglFramebuffer=[];for(let J=0;J<6;J++)u1.__webglFramebuffer[J]=o.createFramebuffer()}else{if(u1.__webglFramebuffer=o.createFramebuffer(),O1)if(i.drawBuffers){const J=N.texture;for(let o1=0,k1=J.length;o1<k1;o1++){const B1=n.get(J[o1]);B1.__webglTexture===void 0&&(B1.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&N.samples>0&&N1(N)===!1){const J=O1?D:[D];u1.__webglMultisampledFramebuffer=o.createFramebuffer(),u1.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,u1.__webglMultisampledFramebuffer);for(let o1=0;o1<J.length;o1++){const k1=J[o1];u1.__webglColorRenderbuffer[o1]=o.createRenderbuffer(),o.bindRenderbuffer(36161,u1.__webglColorRenderbuffer[o1]);const B1=a.convert(k1.format,k1.encoding),U1=a.convert(k1.type),W1=T(k1.internalFormat,B1,U1,k1.encoding,N.isXRRenderTarget===!0),t2=i2(N);o.renderbufferStorageMultisample(36161,t2,W1,N.width,N.height),o.framebufferRenderbuffer(36160,36064+o1,36161,u1.__webglColorRenderbuffer[o1])}o.bindRenderbuffer(36161,null),N.depthBuffer&&(u1.__webglDepthRenderbuffer=o.createRenderbuffer(),F1(u1.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(A1){t.bindTexture(34067,b1.__webglTexture),e1(34067,D,V1);for(let J=0;J<6;J++)p1(u1.__webglFramebuffer[J],N,D,36064,34069+J);w(D,V1)&&I(34067),t.unbindTexture()}else if(O1){const J=N.texture;for(let o1=0,k1=J.length;o1<k1;o1++){const B1=J[o1],U1=n.get(B1);t.bindTexture(3553,U1.__webglTexture),e1(3553,B1,V1),p1(u1.__webglFramebuffer,N,B1,36064+o1,3553),w(B1,V1)&&I(3553)}t.unbindTexture()}else{let J=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(l?J=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,b1.__webglTexture),e1(J,D,V1),p1(u1.__webglFramebuffer,N,D,36064,J),w(D,V1)&&I(J),t.unbindTexture()}N.depthBuffer&&M1(N)}function n2(N){const D=b(N)||l,u1=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let b1=0,A1=u1.length;b1<A1;b1++){const O1=u1[b1];if(w(O1,D)){const V1=N.isWebGLCubeRenderTarget?34067:3553,J=n.get(O1).__webglTexture;t.bindTexture(V1,J),I(V1),t.unbindTexture()}}}function K1(N){if(l&&N.samples>0&&N1(N)===!1){const D=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],u1=N.width,b1=N.height;let A1=16384;const O1=[],V1=N.stencilBuffer?33306:36096,J=n.get(N),o1=N.isWebGLMultipleRenderTargets===!0;if(o1)for(let k1=0;k1<D.length;k1++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+k1,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),o.framebufferTexture2D(36009,36064+k1,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let k1=0;k1<D.length;k1++){O1.push(36064+k1),N.depthBuffer&&O1.push(V1);const B1=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(B1===!1&&(N.depthBuffer&&(A1|=256),N.stencilBuffer&&(A1|=1024)),o1&&o.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[k1]),B1===!0&&(o.invalidateFramebuffer(36008,[V1]),o.invalidateFramebuffer(36009,[V1])),o1){const U1=n.get(D[k1]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,U1,0)}o.blitFramebuffer(0,0,u1,b1,0,0,u1,b1,A1,9728),g&&o.invalidateFramebuffer(36008,O1)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),o1)for(let k1=0;k1<D.length;k1++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+k1,36161,J.__webglColorRenderbuffer[k1]);const B1=n.get(D[k1]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),o.framebufferTexture2D(36009,36064+k1,3553,B1,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function i2(N){return Math.min(h,N.samples)}function N1(N){const D=n.get(N);return l&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Y1(N){const D=s.render.frame;y.get(N)!==D&&(y.set(N,D),N.update())}function r2(N,D){const u1=N.encoding,b1=N.format,A1=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===_e||u1!==W0&&(u1===F2?l===!1?e.has("EXT_sRGB")===!0&&b1===y4?(N.format=_e,N.minFilter=Z3,N.generateMipmaps=!1):D=Ua.sRGBToLinear(D):(b1!==y4||A1!==j0)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",u1)),D}this.allocateTextureUnit=U,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=i1,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=$1,this.setupRenderTarget=e2,this.updateRenderTargetMipmap=n2,this.updateMultisampleRenderTarget=K1,this.setupDepthRenderbuffer=M1,this.setupFrameBufferTexture=p1,this.useMultisampledRTT=N1}function gE(o,e,t){const n=t.isWebGL2;function i(a,s=null){let l;if(a===j0)return 5121;if(a===uM)return 32819;if(a===cM)return 32820;if(a===rM)return 5120;if(a===sM)return 5122;if(a===za)return 5123;if(a===lM)return 5124;if(a===O0)return 5125;if(a===L0)return 5126;if(a===C5)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===dM)return 6406;if(a===y4)return 6408;if(a===pM)return 6409;if(a===hM)return 6410;if(a===N0)return 6402;if(a===G9)return 34041;if(a===mM)return 6403;if(a===fM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===_e)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===gM)return 36244;if(a===vM)return 33319;if(a===_M)return 33320;if(a===yM)return 36249;if(a===y6||a===b6||a===x6||a===S6)if(s===F2)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===y6)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===b6)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===x6)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===S6)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===y6)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===b6)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===x6)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===S6)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===jn||a===Wn||a===Hn||a===$n)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===jn)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Wn)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hn)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$n)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===bM)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Yn||a===Jn)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Yn)return s===F2?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Jn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Zn||a===qn||a===Xn||a===Qn||a===Kn||a===ei||a===ti||a===ni||a===ii||a===oi||a===ai||a===ri||a===si||a===li)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Zn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Qn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Kn)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ei)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ti)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ni)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ii)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===oi)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ai)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ri)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===si)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===li)return s===F2?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ui)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===ui)return s===F2?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===L9?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):o[a]!==void 0?o[a]:null}return{convert:i}}class vE extends q3{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class k4 extends v3{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _E={type:"move"};class q6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new k4,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new k4,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new k4,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const l=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){s=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n);if(d.joints[v.jointName]===void 0){const x=new k4;x.matrixAutoUpdate=!1,x.visible=!1,d.joints[v.jointName]=x,d.add(x)}const S=d.joints[v.jointName];_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=_.radius),S.visible=_!==null}const f=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,y=.005;d.inputState.pinching&&p>g+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=g-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=s!==null),this}}class yE extends i4{constructor(e,t,n,i,a,s,l,u,d,f){if(f=f!==void 0?f:N0,f!==N0&&f!==G9)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===N0&&(n=O0),n===void 0&&f===G9&&(n=L9),super(null,i,a,s,l,u,f,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:x3,this.minFilter=u!==void 0?u:x3,this.flipY=!1,this.generateMipmaps=!1}}class bE extends J0{constructor(e,t){super();const n=this;let i=null,a=1,s=null,l="local-floor",u=null,d=null,f=null,h=null,p=null,g=null;const y=t.getContextAttributes();let v=null,_=null;const S=[],x=[],M=new q3;M.layers.enable(1),M.viewport=new c3;const b=new q3;b.layers.enable(2),b.viewport=new c3;const C=[M,b],w=new vE;w.layers.enable(1),w.layers.enable(2);let I=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=S[k];return G===void 0&&(G=new q6,S[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=S[k];return G===void 0&&(G=new q6,S[k]=G),G.getGripSpace()},this.getHand=function(k){let G=S[k];return G===void 0&&(G=new q6,S[k]=G),G.getHandSpace()};function E(k){const G=x.indexOf(k.inputSource);if(G===-1)return;const i1=S[G];i1!==void 0&&i1.dispatchEvent({type:k.type,data:k.inputSource})}function z(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",W);for(let k=0;k<S.length;k++){const G=x[k];G!==null&&(x[k]=null,S[k].disconnect(G))}I=null,T=null,e.setRenderTarget(v),p=null,h=null,f=null,i=null,_=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){l=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=function(k){return O2(this,null,function*(){if(i=k,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",z),i.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&(yield t.makeXRCompatible()),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:p}),_=new H0(p.framebufferWidth,p.framebufferHeight,{format:y4,type:j0,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let G=null,i1=null,q=null;y.depth&&(q=y.stencil?35056:33190,G=y.stencil?G9:N0,i1=y.stencil?L9:O0);const $={colorFormat:32856,depthFormat:q,scaleFactor:a};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer($),i.updateRenderState({layers:[h]}),_=new H0(h.textureWidth,h.textureHeight,{format:y4,type:j0,depthTexture:new yE(h.textureWidth,h.textureHeight,i1,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const n1=e.properties.get(_);n1.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),u=null,s=yield i.requestReferenceSpace(l),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})};function W(k){for(let G=0;G<k.removed.length;G++){const i1=k.removed[G],q=x.indexOf(i1);q>=0&&(x[q]=null,S[q].dispatchEvent({type:"disconnected",data:i1}))}for(let G=0;G<k.added.length;G++){const i1=k.added[G];let q=x.indexOf(i1);if(q===-1){for(let n1=0;n1<S.length;n1++)if(n1>=x.length){x.push(i1),q=n1;break}else if(x[n1]===null){x[n1]=i1,q=n1;break}if(q===-1)break}const $=S[q];$&&$.dispatchEvent({type:"connected",data:i1})}}const X=new Z,B=new Z;function O(k,G,i1){X.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(i1.matrixWorld);const q=X.distanceTo(B),$=G.projectionMatrix.elements,n1=i1.projectionMatrix.elements,r1=$[14]/($[10]-1),e1=$[14]/($[10]+1),h1=($[9]+1)/$[5],g1=($[9]-1)/$[5],v1=($[8]-1)/$[0],p1=(n1[8]+1)/n1[0],F1=r1*v1,D1=r1*p1,M1=q/(-v1+p1),$1=M1*-v1;G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX($1),k.translateZ(M1),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const e2=r1+M1,n2=e1+M1,K1=F1-$1,i2=D1+(q-$1),N1=h1*e1/n2*e2,Y1=g1*e1/n2*e2;k.projectionMatrix.makePerspective(K1,i2,N1,Y1,e2,n2)}function F(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;w.near=b.near=M.near=k.near,w.far=b.far=M.far=k.far,(I!==w.near||T!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),I=w.near,T=w.far);const G=k.parent,i1=w.cameras;F(w,G);for(let $=0;$<i1.length;$++)F(i1[$],G);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),k.matrix.copy(w.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const q=k.children;for(let $=0,n1=q.length;$<n1;$++)q[$].updateMatrixWorld(!0);i1.length===2?O(w,M,b):w.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Y=null;function H(k,G){if(d=G.getViewerPose(u||s),g=G,d!==null){const i1=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let q=!1;i1.length!==w.cameras.length&&(w.cameras.length=0,q=!0);for(let $=0;$<i1.length;$++){const n1=i1[$];let r1=null;if(p!==null)r1=p.getViewport(n1);else{const h1=f.getViewSubImage(h,n1);r1=h1.viewport,$===0&&(e.setRenderTargetTextures(_,h1.colorTexture,h.ignoreDepthValues?void 0:h1.depthStencilTexture),e.setRenderTarget(_))}let e1=C[$];e1===void 0&&(e1=new q3,e1.layers.enable($),e1.viewport=new c3,C[$]=e1),e1.matrix.fromArray(n1.transform.matrix),e1.projectionMatrix.fromArray(n1.projectionMatrix),e1.viewport.set(r1.x,r1.y,r1.width,r1.height),$===0&&w.matrix.copy(e1.matrix),q===!0&&w.cameras.push(e1)}}for(let i1=0;i1<S.length;i1++){const q=x[i1],$=S[i1];q!==null&&$!==void 0&&$.update(q,G,u||s)}Y&&Y(k,G),g=null}const U=new $a;U.setAnimationLoop(H),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}function xE(o,e){function t(v,_){v.fogColor.value.copy(_.color),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function n(v,_,S,x,M){_.isMeshBasicMaterial||_.isMeshLambertMaterial?i(v,_):_.isMeshToonMaterial?(i(v,_),f(v,_)):_.isMeshPhongMaterial?(i(v,_),d(v,_)):_.isMeshStandardMaterial?(i(v,_),h(v,_),_.isMeshPhysicalMaterial&&p(v,_,M)):_.isMeshMatcapMaterial?(i(v,_),g(v,_)):_.isMeshDepthMaterial?i(v,_):_.isMeshDistanceMaterial?(i(v,_),y(v,_)):_.isMeshNormalMaterial?i(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&s(v,_)):_.isPointsMaterial?l(v,_,S,x):_.isSpriteMaterial?u(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function i(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.bumpMap&&(v.bumpMap.value=_.bumpMap,v.bumpScale.value=_.bumpScale,_.side===n4&&(v.bumpScale.value*=-1)),_.displacementMap&&(v.displacementMap.value=_.displacementMap,v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap),_.normalMap&&(v.normalMap.value=_.normalMap,v.normalScale.value.copy(_.normalScale),_.side===n4&&v.normalScale.value.negate()),_.specularMap&&(v.specularMap.value=_.specularMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const S=e.get(_).envMap;if(S&&(v.envMap.value=S,v.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap){v.lightMap.value=_.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;v.lightMapIntensity.value=_.lightMapIntensity*b}_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity);let x;_.map?x=_.map:_.specularMap?x=_.specularMap:_.displacementMap?x=_.displacementMap:_.normalMap?x=_.normalMap:_.bumpMap?x=_.bumpMap:_.roughnessMap?x=_.roughnessMap:_.metalnessMap?x=_.metalnessMap:_.alphaMap?x=_.alphaMap:_.emissiveMap?x=_.emissiveMap:_.clearcoatMap?x=_.clearcoatMap:_.clearcoatNormalMap?x=_.clearcoatNormalMap:_.clearcoatRoughnessMap?x=_.clearcoatRoughnessMap:_.iridescenceMap?x=_.iridescenceMap:_.iridescenceThicknessMap?x=_.iridescenceThicknessMap:_.specularIntensityMap?x=_.specularIntensityMap:_.specularColorMap?x=_.specularColorMap:_.transmissionMap?x=_.transmissionMap:_.thicknessMap?x=_.thicknessMap:_.sheenColorMap?x=_.sheenColorMap:_.sheenRoughnessMap&&(x=_.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),v.uvTransform.value.copy(x.matrix));let M;_.aoMap?M=_.aoMap:_.lightMap&&(M=_.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),v.uv2Transform.value.copy(M.matrix))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity}function s(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function l(v,_,S,x){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*S,v.scale.value=x*.5,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let M;_.map?M=_.map:_.alphaMap&&(M=_.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),v.uvTransform.value.copy(M.matrix))}function u(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map),_.alphaMap&&(v.alphaMap.value=_.alphaMap),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);let S;_.map?S=_.map:_.alphaMap&&(S=_.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),v.uvTransform.value.copy(S.matrix))}function d(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function f(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function h(v,_){v.roughness.value=_.roughness,v.metalness.value=_.metalness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function p(v,_,S){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),v.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===n4&&v.clearcoatNormalScale.value.negate())),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=S.texture,v.transmissionSamplerSize.value.set(S.width,S.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap)}function g(v,_){_.matcap&&(v.matcap.value=_.matcap)}function y(v,_){v.referencePosition.value.copy(_.referencePosition),v.nearDistance.value=_.nearDistance,v.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function SE(o,e,t,n){let i={},a={},s=[];const l=t.isWebGL2?o.getParameter(35375):0;function u(x,M){const b=M.program;n.uniformBlockBinding(x,b)}function d(x,M){let b=i[x.id];b===void 0&&(y(x),b=f(x),i[x.id]=b,x.addEventListener("dispose",_));const C=M.program;n.updateUBOMapping(x,C);const w=e.render.frame;a[x.id]!==w&&(p(x),a[x.id]=w)}function f(x){const M=h();x.__bindingPointIndex=M;const b=o.createBuffer(),C=x.__size,w=x.usage;return o.bindBuffer(35345,b),o.bufferData(35345,C,w),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,b),b}function h(){for(let x=0;x<l;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const M=i[x.id],b=x.uniforms,C=x.__cache;o.bindBuffer(35345,M);for(let w=0,I=b.length;w<I;w++){const T=b[w];if(g(T,w,C)===!0){const E=T.value,z=T.__offset;typeof E=="number"?(T.__data[0]=E,o.bufferSubData(35345,z,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):E.toArray(T.__data),o.bufferSubData(35345,z,T.__data))}}o.bindBuffer(35345,null)}function g(x,M,b){const C=x.value;if(b[M]===void 0)return typeof C=="number"?b[M]=C:b[M]=C.clone(),!0;if(typeof C=="number"){if(b[M]!==C)return b[M]=C,!0}else{const w=b[M];if(w.equals(C)===!1)return w.copy(C),!0}return!1}function y(x){const M=x.uniforms;let b=0;const C=16;let w=0;for(let I=0,T=M.length;I<T;I++){const E=M[I],z=v(E);if(E.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,I>0){w=b%C;const W=C-w;w!==0&&W-z.boundary<0&&(b+=C-w,E.__offset=b)}b+=z.storage}return w=b%C,w>0&&(b+=C-w),x.__size=b,x.__cache={},this}function v(x){const M=x.value,b={boundary:0,storage:0};return typeof M=="number"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function _(x){const M=x.target;M.removeEventListener("dispose",_);const b=s.indexOf(M.__bindingPointIndex);s.splice(b,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete a[M.id]}function S(){for(const x in i)o.deleteBuffer(i[x]);s=[],i={},a={}}return{bind:u,update:d,dispose:S}}function ME(){const o=T5("canvas");return o.style.display="block",o}function Xa(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:ME(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,a=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,u=o.powerPreference!==void 0?o.powerPreference:"default",d=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=o.alpha!==void 0?o.alpha:!1;let h=null,p=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=W0,this.physicallyCorrectLights=!1,this.toneMapping=F4,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const v=this;let _=!1,S=0,x=0,M=null,b=-1,C=null;const w=new c3,I=new c3;let T=null,E=e.width,z=e.height,W=1,X=null,B=null;const O=new c3(0,0,E,z),F=new c3(0,0,E,z);let Y=!1;const H=new Ha;let U=!1,k=!1,G=null;const i1=new j2,q=new G1,$=new Z,n1={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function r1(){return M===null?W:1}let e1=t;function h1(P,s1){for(let d1=0;d1<P.length;d1++){const a1=P[d1],f1=e.getContext(a1,s1);if(f1!==null)return f1}return null}try{const P={alpha:!0,depth:n,stencil:i,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jt}`),e.addEventListener("webglcontextlost",W1,!1),e.addEventListener("webglcontextrestored",t2,!1),e.addEventListener("webglcontextcreationerror",v2,!1),e1===null){const s1=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&s1.shift(),e1=h1(s1,P),e1===null)throw h1(s1)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}e1.getShaderPrecisionFormat===void 0&&(e1.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let g1,v1,p1,F1,D1,M1,$1,e2,n2,K1,i2,N1,Y1,r2,N,D,u1,b1,A1,O1,V1,J,o1,k1;function B1(){g1=new zC(e1),v1=new TC(e1,g1,o),g1.init(v1),J=new gE(e1,g1,v1),p1=new hE(e1,g1,v1),F1=new UC,D1=new eE,M1=new mE(e1,g1,p1,D1,v1,J,F1),$1=new DC(v),e2=new LC(v),n2=new YM(e1,v1),o1=new wC(e1,g1,n2,v1),K1=new PC(e1,n2,F1,o1),i2=new GC(e1,K1,n2,F1),A1=new BC(e1,v1,M1),D=new EC(D1),N1=new KT(v,$1,e2,g1,v1,o1,D),Y1=new xE(v,D1),r2=new nE,N=new lE(g1,v1),b1=new AC(v,$1,p1,i2,f,s),u1=new pE(v,i2,v1),k1=new SE(e1,F1,v1,p1),O1=new CC(e1,g1,F1,v1),V1=new kC(e1,g1,F1,v1),F1.programs=N1.programs,v.capabilities=v1,v.extensions=g1,v.properties=D1,v.renderLists=r2,v.shadowMap=u1,v.state=p1,v.info=F1}B1();const U1=new bE(v,e1);this.xr=U1,this.getContext=function(){return e1},this.getContextAttributes=function(){return e1.getContextAttributes()},this.forceContextLoss=function(){const P=g1.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=g1.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(E,z,!1))},this.getSize=function(P){return P.set(E,z)},this.setSize=function(P,s1,d1){if(U1.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=P,z=s1,e.width=Math.floor(P*W),e.height=Math.floor(s1*W),d1!==!1&&(e.style.width=P+"px",e.style.height=s1+"px"),this.setViewport(0,0,P,s1)},this.getDrawingBufferSize=function(P){return P.set(E*W,z*W).floor()},this.setDrawingBufferSize=function(P,s1,d1){E=P,z=s1,W=d1,e.width=Math.floor(P*d1),e.height=Math.floor(s1*d1),this.setViewport(0,0,P,s1)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(O)},this.setViewport=function(P,s1,d1,a1){P.isVector4?O.set(P.x,P.y,P.z,P.w):O.set(P,s1,d1,a1),p1.viewport(w.copy(O).multiplyScalar(W).floor())},this.getScissor=function(P){return P.copy(F)},this.setScissor=function(P,s1,d1,a1){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,s1,d1,a1),p1.scissor(I.copy(F).multiplyScalar(W).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(P){p1.setScissorTest(Y=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){B=P},this.getClearColor=function(P){return P.copy(b1.getClearColor())},this.setClearColor=function(){b1.setClearColor.apply(b1,arguments)},this.getClearAlpha=function(){return b1.getClearAlpha()},this.setClearAlpha=function(){b1.setClearAlpha.apply(b1,arguments)},this.clear=function(P=!0,s1=!0,d1=!0){let a1=0;P&&(a1|=16384),s1&&(a1|=256),d1&&(a1|=1024),e1.clear(a1)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W1,!1),e.removeEventListener("webglcontextrestored",t2,!1),e.removeEventListener("webglcontextcreationerror",v2,!1),r2.dispose(),N.dispose(),D1.dispose(),$1.dispose(),e2.dispose(),i2.dispose(),o1.dispose(),k1.dispose(),N1.dispose(),U1.dispose(),U1.removeEventListener("sessionstart",Q1),U1.removeEventListener("sessionend",E2),G&&(G.dispose(),G=null),G2.stop()};function W1(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function t2(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const P=F1.autoReset,s1=u1.enabled,d1=u1.autoUpdate,a1=u1.needsUpdate,f1=u1.type;B1(),F1.autoReset=P,u1.enabled=s1,u1.autoUpdate=d1,u1.needsUpdate=a1,u1.type=f1}function v2(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function t1(P){const s1=P.target;s1.removeEventListener("dispose",t1),z1(s1)}function z1(P){E1(P),D1.remove(P)}function E1(P){const s1=D1.get(P).programs;s1!==void 0&&(s1.forEach(function(d1){N1.releaseProgram(d1)}),P.isShaderMaterial&&N1.releaseShaderCache(P))}this.renderBufferDirect=function(P,s1,d1,a1,f1,J1){s1===null&&(s1=n1);const o2=f1.isMesh&&f1.matrixWorld.determinant()<0,c2=hs(P,s1,d1,a1,f1);p1.setMaterial(a1,o2);let a2=d1.index;const S2=d1.attributes.position;if(a2===null){if(S2===void 0||S2.count===0)return}else if(a2.count===0)return;let m2=1;a1.wireframe===!0&&(a2=K1.getWireframeAttribute(d1),m2=2),o1.setup(f1,a1,c2,d1,a2);let g2,U2=O1;a2!==null&&(g2=n2.get(a2),U2=V1,U2.setIndex(g2));const x0=a2!==null?a2.count:S2.count,X0=d1.drawRange.start*m2,Q0=d1.drawRange.count*m2,h4=J1!==null?J1.start*m2:0,x2=J1!==null?J1.count*m2:1/0,K0=Math.max(X0,h4),Y2=Math.min(x0,X0+Q0,h4+x2)-1,H3=Math.max(0,Y2-K0+1);if(H3!==0){if(f1.isMesh)a1.wireframe===!0?(p1.setLineWidth(a1.wireframeLinewidth*r1()),U2.setMode(1)):U2.setMode(4);else if(f1.isLine){let $4=a1.linewidth;$4===void 0&&($4=1),p1.setLineWidth($4*r1()),f1.isLineSegments?U2.setMode(1):f1.isLineLoop?U2.setMode(2):U2.setMode(3)}else f1.isPoints?U2.setMode(0):f1.isSprite&&U2.setMode(4);if(f1.isInstancedMesh)U2.renderInstances(K0,H3,f1.count);else if(d1.isInstancedBufferGeometry){const $4=Math.min(d1.instanceCount,d1._maxInstanceCount);U2.renderInstances(K0,H3,$4)}else U2.render(K0,H3)}},this.compile=function(P,s1){function d1(a1,f1,J1){a1.transparent===!0&&a1.side===_4?(a1.side=n4,a1.needsUpdate=!0,H5(a1,f1,J1),a1.side=N9,a1.needsUpdate=!0,H5(a1,f1,J1),a1.side=_4):H5(a1,f1,J1)}p=N.get(P),p.init(),y.push(p),P.traverseVisible(function(a1){a1.isLight&&a1.layers.test(s1.layers)&&(p.pushLight(a1),a1.castShadow&&p.pushShadow(a1))}),p.setupLights(v.physicallyCorrectLights),P.traverse(function(a1){const f1=a1.material;if(f1)if(Array.isArray(f1))for(let J1=0;J1<f1.length;J1++){const o2=f1[J1];d1(o2,P,a1)}else d1(f1,P,a1)}),y.pop(),p=null};let m1=null;function I1(P){m1&&m1(P)}function Q1(){G2.stop()}function E2(){G2.start()}const G2=new $a;G2.setAnimationLoop(I1),typeof self!="undefined"&&G2.setContext(self),this.setAnimationLoop=function(P){m1=P,U1.setAnimationLoop(P),P===null?G2.stop():G2.start()},U1.addEventListener("sessionstart",Q1),U1.addEventListener("sessionend",E2),this.render=function(P,s1){if(s1!==void 0&&s1.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),s1.parent===null&&s1.matrixWorldAutoUpdate===!0&&s1.updateMatrixWorld(),U1.enabled===!0&&U1.isPresenting===!0&&(U1.cameraAutoUpdate===!0&&U1.updateCamera(s1),s1=U1.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,s1,M),p=N.get(P,y.length),p.init(),y.push(p),i1.multiplyMatrices(s1.projectionMatrix,s1.matrixWorldInverse),H.setFromProjectionMatrix(i1),k=this.localClippingEnabled,U=D.init(this.clippingPlanes,k,s1),h=r2.get(P,g.length),h.init(),g.push(h),H4(P,s1,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(X,B),U===!0&&D.beginShadows();const d1=p.state.shadowsArray;if(u1.render(d1,P,s1),U===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),b1.render(h,P),p.setupLights(v.physicallyCorrectLights),s1.isArrayCamera){const a1=s1.cameras;for(let f1=0,J1=a1.length;f1<J1;f1++){const o2=a1[f1];k2(h,P,o2,o2.viewport)}}else k2(h,P,s1);M!==null&&(M1.updateMultisampleRenderTarget(M),M1.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(v,P,s1),o1.resetDefaultState(),b=-1,C=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function H4(P,s1,d1,a1){if(P.visible===!1)return;if(P.layers.test(s1.layers)){if(P.isGroup)d1=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(s1);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){a1&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(i1);const o2=i2.update(P),c2=P.material;c2.visible&&h.push(P,o2,c2,d1,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==F1.render.frame&&(P.skeleton.update(),P.skeleton.frame=F1.render.frame),!P.frustumCulled||H.intersectsObject(P))){a1&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(i1);const o2=i2.update(P),c2=P.material;if(Array.isArray(c2)){const a2=o2.groups;for(let S2=0,m2=a2.length;S2<m2;S2++){const g2=a2[S2],U2=c2[g2.materialIndex];U2&&U2.visible&&h.push(P,o2,U2,d1,$.z,g2)}}else c2.visible&&h.push(P,o2,c2,d1,$.z,null)}}const J1=P.children;for(let o2=0,c2=J1.length;o2<c2;o2++)H4(J1[o2],s1,d1,a1)}function k2(P,s1,d1,a1){const f1=P.opaque,J1=P.transmissive,o2=P.transparent;p.setupLightsView(d1),J1.length>0&&A4(f1,s1,d1),a1&&p1.viewport(w.copy(a1)),f1.length>0&&W3(f1,s1,d1),J1.length>0&&W3(J1,s1,d1),o2.length>0&&W3(o2,s1,d1),p1.buffers.depth.setTest(!0),p1.buffers.depth.setMask(!0),p1.buffers.color.setMask(!0),p1.setPolygonOffset(!1)}function A4(P,s1,d1){const a1=v1.isWebGL2;G===null&&(G=new H0(1,1,{generateMipmaps:!0,type:g1.has("EXT_color_buffer_half_float")?C5:j0,minFilter:n6,samples:a1&&a===!0?4:0})),v.getDrawingBufferSize(q),a1?G.setSize(q.x,q.y):G.setSize(ye(q.x),ye(q.y));const f1=v.getRenderTarget();v.setRenderTarget(G),v.clear();const J1=v.toneMapping;v.toneMapping=F4,W3(P,s1,d1),v.toneMapping=J1,M1.updateMultisampleRenderTarget(G),M1.updateRenderTargetMipmap(G),v.setRenderTarget(f1)}function W3(P,s1,d1){const a1=s1.isScene===!0?s1.overrideMaterial:null;for(let f1=0,J1=P.length;f1<J1;f1++){const o2=P[f1],c2=o2.object,a2=o2.geometry,S2=a1===null?o2.material:a1,m2=o2.group;c2.layers.test(d1.layers)&&ps(c2,s1,d1,a2,S2,m2)}}function ps(P,s1,d1,a1,f1,J1){P.onBeforeRender(v,s1,d1,a1,f1,J1),P.modelViewMatrix.multiplyMatrices(d1.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),f1.onBeforeRender(v,s1,d1,a1,P,J1),f1.transparent===!0&&f1.side===_4?(f1.side=n4,f1.needsUpdate=!0,v.renderBufferDirect(d1,s1,a1,f1,P,J1),f1.side=N9,f1.needsUpdate=!0,v.renderBufferDirect(d1,s1,a1,f1,P,J1),f1.side=_4):v.renderBufferDirect(d1,s1,a1,f1,P,J1),P.onAfterRender(v,s1,d1,a1,f1,J1)}function H5(P,s1,d1){s1.isScene!==!0&&(s1=n1);const a1=D1.get(P),f1=p.state.lights,J1=p.state.shadowsArray,o2=f1.state.version,c2=N1.getParameters(P,f1.state,J1,s1,d1),a2=N1.getProgramCacheKey(c2);let S2=a1.programs;a1.environment=P.isMeshStandardMaterial?s1.environment:null,a1.fog=s1.fog,a1.envMap=(P.isMeshStandardMaterial?e2:$1).get(P.envMap||a1.environment),S2===void 0&&(P.addEventListener("dispose",t1),S2=new Map,a1.programs=S2);let m2=S2.get(a2);if(m2!==void 0){if(a1.currentProgram===m2&&a1.lightsStateVersion===o2)return vn(P,c2),m2}else c2.uniforms=N1.getUniforms(P),P.onBuild(d1,c2,v),P.onBeforeCompile(c2,v),m2=N1.acquireProgram(c2,a2),S2.set(a2,m2),a1.uniforms=c2.uniforms;const g2=a1.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(g2.clippingPlanes=D.uniform),vn(P,c2),a1.needsLights=gs(P),a1.lightsStateVersion=o2,a1.needsLights&&(g2.ambientLightColor.value=f1.state.ambient,g2.lightProbe.value=f1.state.probe,g2.directionalLights.value=f1.state.directional,g2.directionalLightShadows.value=f1.state.directionalShadow,g2.spotLights.value=f1.state.spot,g2.spotLightShadows.value=f1.state.spotShadow,g2.rectAreaLights.value=f1.state.rectArea,g2.ltc_1.value=f1.state.rectAreaLTC1,g2.ltc_2.value=f1.state.rectAreaLTC2,g2.pointLights.value=f1.state.point,g2.pointLightShadows.value=f1.state.pointShadow,g2.hemisphereLights.value=f1.state.hemi,g2.directionalShadowMap.value=f1.state.directionalShadowMap,g2.directionalShadowMatrix.value=f1.state.directionalShadowMatrix,g2.spotShadowMap.value=f1.state.spotShadowMap,g2.spotLightMatrix.value=f1.state.spotLightMatrix,g2.spotLightMap.value=f1.state.spotLightMap,g2.pointShadowMap.value=f1.state.pointShadowMap,g2.pointShadowMatrix.value=f1.state.pointShadowMatrix);const U2=m2.getUniforms(),x0=R8.seqWithValue(U2.seq,g2);return a1.currentProgram=m2,a1.uniformsList=x0,m2}function vn(P,s1){const d1=D1.get(P);d1.outputEncoding=s1.outputEncoding,d1.instancing=s1.instancing,d1.skinning=s1.skinning,d1.morphTargets=s1.morphTargets,d1.morphNormals=s1.morphNormals,d1.morphColors=s1.morphColors,d1.morphTargetsCount=s1.morphTargetsCount,d1.numClippingPlanes=s1.numClippingPlanes,d1.numIntersection=s1.numClipIntersection,d1.vertexAlphas=s1.vertexAlphas,d1.vertexTangents=s1.vertexTangents,d1.toneMapping=s1.toneMapping}function hs(P,s1,d1,a1,f1){s1.isScene!==!0&&(s1=n1),M1.resetTextureUnits();const J1=s1.fog,o2=a1.isMeshStandardMaterial?s1.environment:null,c2=M===null?v.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:W0,a2=(a1.isMeshStandardMaterial?e2:$1).get(a1.envMap||o2),S2=a1.vertexColors===!0&&!!d1.attributes.color&&d1.attributes.color.itemSize===4,m2=!!a1.normalMap&&!!d1.attributes.tangent,g2=!!d1.morphAttributes.position,U2=!!d1.morphAttributes.normal,x0=!!d1.morphAttributes.color,X0=a1.toneMapped?v.toneMapping:F4,Q0=d1.morphAttributes.position||d1.morphAttributes.normal||d1.morphAttributes.color,h4=Q0!==void 0?Q0.length:0,x2=D1.get(a1),K0=p.state.lights;if(U===!0&&(k===!0||P!==C)){const I3=P===C&&a1.id===b;D.setState(a1,P,I3)}let Y2=!1;a1.version===x2.__version?(x2.needsLights&&x2.lightsStateVersion!==K0.state.version||x2.outputEncoding!==c2||f1.isInstancedMesh&&x2.instancing===!1||!f1.isInstancedMesh&&x2.instancing===!0||f1.isSkinnedMesh&&x2.skinning===!1||!f1.isSkinnedMesh&&x2.skinning===!0||x2.envMap!==a2||a1.fog===!0&&x2.fog!==J1||x2.numClippingPlanes!==void 0&&(x2.numClippingPlanes!==D.numPlanes||x2.numIntersection!==D.numIntersection)||x2.vertexAlphas!==S2||x2.vertexTangents!==m2||x2.morphTargets!==g2||x2.morphNormals!==U2||x2.morphColors!==x0||x2.toneMapping!==X0||v1.isWebGL2===!0&&x2.morphTargetsCount!==h4)&&(Y2=!0):(Y2=!0,x2.__version=a1.version);let H3=x2.currentProgram;Y2===!0&&(H3=H5(a1,s1,f1));let $4=!1,K9=!1,c6=!1;const y3=H3.getUniforms(),S0=x2.uniforms;if(p1.useProgram(H3.program)&&($4=!0,K9=!0,c6=!0),a1.id!==b&&(b=a1.id,K9=!0),$4||C!==P){if(y3.setValue(e1,"projectionMatrix",P.projectionMatrix),v1.logarithmicDepthBuffer&&y3.setValue(e1,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),C!==P&&(C=P,K9=!0,c6=!0),a1.isShaderMaterial||a1.isMeshPhongMaterial||a1.isMeshToonMaterial||a1.isMeshStandardMaterial||a1.envMap){const I3=y3.map.cameraPosition;I3!==void 0&&I3.setValue(e1,$.setFromMatrixPosition(P.matrixWorld))}(a1.isMeshPhongMaterial||a1.isMeshToonMaterial||a1.isMeshLambertMaterial||a1.isMeshBasicMaterial||a1.isMeshStandardMaterial||a1.isShaderMaterial)&&y3.setValue(e1,"isOrthographic",P.isOrthographicCamera===!0),(a1.isMeshPhongMaterial||a1.isMeshToonMaterial||a1.isMeshLambertMaterial||a1.isMeshBasicMaterial||a1.isMeshStandardMaterial||a1.isShaderMaterial||a1.isShadowMaterial||f1.isSkinnedMesh)&&y3.setValue(e1,"viewMatrix",P.matrixWorldInverse)}if(f1.isSkinnedMesh){y3.setOptional(e1,f1,"bindMatrix"),y3.setOptional(e1,f1,"bindMatrixInverse");const I3=f1.skeleton;I3&&(v1.floatVertexTextures?(I3.boneTexture===null&&I3.computeBoneTexture(),y3.setValue(e1,"boneTexture",I3.boneTexture,M1),y3.setValue(e1,"boneTextureSize",I3.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const d6=d1.morphAttributes;if((d6.position!==void 0||d6.normal!==void 0||d6.color!==void 0&&v1.isWebGL2===!0)&&A1.update(f1,d1,a1,H3),(K9||x2.receiveShadow!==f1.receiveShadow)&&(x2.receiveShadow=f1.receiveShadow,y3.setValue(e1,"receiveShadow",f1.receiveShadow)),a1.isMeshGouraudMaterial&&a1.envMap!==null&&(S0.envMap.value=a2,S0.flipEnvMap.value=a2.isCubeTexture&&a2.isRenderTargetTexture===!1?-1:1),K9&&(y3.setValue(e1,"toneMappingExposure",v.toneMappingExposure),x2.needsLights&&ms(S0,c6),J1&&a1.fog===!0&&Y1.refreshFogUniforms(S0,J1),Y1.refreshMaterialUniforms(S0,a1,W,z,G),R8.upload(e1,x2.uniformsList,S0,M1)),a1.isShaderMaterial&&a1.uniformsNeedUpdate===!0&&(R8.upload(e1,x2.uniformsList,S0,M1),a1.uniformsNeedUpdate=!1),a1.isSpriteMaterial&&y3.setValue(e1,"center",f1.center),y3.setValue(e1,"modelViewMatrix",f1.modelViewMatrix),y3.setValue(e1,"normalMatrix",f1.normalMatrix),y3.setValue(e1,"modelMatrix",f1.matrixWorld),a1.isShaderMaterial||a1.isRawShaderMaterial){const I3=a1.uniformsGroups;for(let f6=0,vs=I3.length;f6<vs;f6++)if(v1.isWebGL2){const _n=I3[f6];k1.update(_n,H3),k1.bind(_n,H3)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return H3}function ms(P,s1){P.ambientLightColor.needsUpdate=s1,P.lightProbe.needsUpdate=s1,P.directionalLights.needsUpdate=s1,P.directionalLightShadows.needsUpdate=s1,P.pointLights.needsUpdate=s1,P.pointLightShadows.needsUpdate=s1,P.spotLights.needsUpdate=s1,P.spotLightShadows.needsUpdate=s1,P.rectAreaLights.needsUpdate=s1,P.hemisphereLights.needsUpdate=s1}function gs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,s1,d1){D1.get(P.texture).__webglTexture=s1,D1.get(P.depthTexture).__webglTexture=d1;const a1=D1.get(P);a1.__hasExternalTextures=!0,a1.__hasExternalTextures&&(a1.__autoAllocateDepthBuffer=d1===void 0,a1.__autoAllocateDepthBuffer||g1.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),a1.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,s1){const d1=D1.get(P);d1.__webglFramebuffer=s1,d1.__useDefaultFramebuffer=s1===void 0},this.setRenderTarget=function(P,s1=0,d1=0){M=P,S=s1,x=d1;let a1=!0;if(P){const a2=D1.get(P);a2.__useDefaultFramebuffer!==void 0?(p1.bindFramebuffer(36160,null),a1=!1):a2.__webglFramebuffer===void 0?M1.setupRenderTarget(P):a2.__hasExternalTextures&&M1.rebindTextures(P,D1.get(P.texture).__webglTexture,D1.get(P.depthTexture).__webglTexture)}let f1=null,J1=!1,o2=!1;if(P){const a2=P.texture;(a2.isData3DTexture||a2.isDataArrayTexture)&&(o2=!0);const S2=D1.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(f1=S2[s1],J1=!0):v1.isWebGL2&&P.samples>0&&M1.useMultisampledRTT(P)===!1?f1=D1.get(P).__webglMultisampledFramebuffer:f1=S2,w.copy(P.viewport),I.copy(P.scissor),T=P.scissorTest}else w.copy(O).multiplyScalar(W).floor(),I.copy(F).multiplyScalar(W).floor(),T=Y;if(p1.bindFramebuffer(36160,f1)&&v1.drawBuffers&&a1&&p1.drawBuffers(P,f1),p1.viewport(w),p1.scissor(I),p1.setScissorTest(T),J1){const a2=D1.get(P.texture);e1.framebufferTexture2D(36160,36064,34069+s1,a2.__webglTexture,d1)}else if(o2){const a2=D1.get(P.texture),S2=s1||0;e1.framebufferTextureLayer(36160,36064,a2.__webglTexture,d1||0,S2)}b=-1},this.readRenderTargetPixels=function(P,s1,d1,a1,f1,J1,o2){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let c2=D1.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&o2!==void 0&&(c2=c2[o2]),c2){p1.bindFramebuffer(36160,c2);try{const a2=P.texture,S2=a2.format,m2=a2.type;if(S2!==y4&&J.convert(S2)!==e1.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const g2=m2===C5&&(g1.has("EXT_color_buffer_half_float")||v1.isWebGL2&&g1.has("EXT_color_buffer_float"));if(m2!==j0&&J.convert(m2)!==e1.getParameter(35738)&&!(m2===L0&&(v1.isWebGL2||g1.has("OES_texture_float")||g1.has("WEBGL_color_buffer_float")))&&!g2){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}s1>=0&&s1<=P.width-a1&&d1>=0&&d1<=P.height-f1&&e1.readPixels(s1,d1,a1,f1,J.convert(S2),J.convert(m2),J1)}finally{const a2=M!==null?D1.get(M).__webglFramebuffer:null;p1.bindFramebuffer(36160,a2)}}},this.copyFramebufferToTexture=function(P,s1,d1=0){const a1=Math.pow(2,-d1),f1=Math.floor(s1.image.width*a1),J1=Math.floor(s1.image.height*a1);M1.setTexture2D(s1,0),e1.copyTexSubImage2D(3553,d1,0,0,P.x,P.y,f1,J1),p1.unbindTexture()},this.copyTextureToTexture=function(P,s1,d1,a1=0){const f1=s1.image.width,J1=s1.image.height,o2=J.convert(d1.format),c2=J.convert(d1.type);M1.setTexture2D(d1,0),e1.pixelStorei(37440,d1.flipY),e1.pixelStorei(37441,d1.premultiplyAlpha),e1.pixelStorei(3317,d1.unpackAlignment),s1.isDataTexture?e1.texSubImage2D(3553,a1,P.x,P.y,f1,J1,o2,c2,s1.image.data):s1.isCompressedTexture?e1.compressedTexSubImage2D(3553,a1,P.x,P.y,s1.mipmaps[0].width,s1.mipmaps[0].height,o2,s1.mipmaps[0].data):e1.texSubImage2D(3553,a1,P.x,P.y,o2,c2,s1.image),a1===0&&d1.generateMipmaps&&e1.generateMipmap(3553),p1.unbindTexture()},this.copyTextureToTexture3D=function(P,s1,d1,a1,f1=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const J1=P.max.x-P.min.x+1,o2=P.max.y-P.min.y+1,c2=P.max.z-P.min.z+1,a2=J.convert(a1.format),S2=J.convert(a1.type);let m2;if(a1.isData3DTexture)M1.setTexture3D(a1,0),m2=32879;else if(a1.isDataArrayTexture)M1.setTexture2DArray(a1,0),m2=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}e1.pixelStorei(37440,a1.flipY),e1.pixelStorei(37441,a1.premultiplyAlpha),e1.pixelStorei(3317,a1.unpackAlignment);const g2=e1.getParameter(3314),U2=e1.getParameter(32878),x0=e1.getParameter(3316),X0=e1.getParameter(3315),Q0=e1.getParameter(32877),h4=d1.isCompressedTexture?d1.mipmaps[0]:d1.image;e1.pixelStorei(3314,h4.width),e1.pixelStorei(32878,h4.height),e1.pixelStorei(3316,P.min.x),e1.pixelStorei(3315,P.min.y),e1.pixelStorei(32877,P.min.z),d1.isDataTexture||d1.isData3DTexture?e1.texSubImage3D(m2,f1,s1.x,s1.y,s1.z,J1,o2,c2,a2,S2,h4.data):d1.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),e1.compressedTexSubImage3D(m2,f1,s1.x,s1.y,s1.z,J1,o2,c2,a2,h4.data)):e1.texSubImage3D(m2,f1,s1.x,s1.y,s1.z,J1,o2,c2,a2,S2,h4),e1.pixelStorei(3314,g2),e1.pixelStorei(32878,U2),e1.pixelStorei(3316,x0),e1.pixelStorei(3315,X0),e1.pixelStorei(32877,Q0),f1===0&&a1.generateMipmaps&&e1.generateMipmap(m2),p1.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?M1.setTextureCube(P,0):P.isData3DTexture?M1.setTexture3D(P,0):P.isDataArrayTexture?M1.setTexture2DArray(P,0):M1.setTexture2D(P,0),p1.unbindTexture()},this.resetState=function(){S=0,x=0,M=null,p1.reset(),o1.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class AE extends Xa{}AE.prototype.isWebGL1Renderer=!0;class wE extends v3{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class CE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ve,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=u0()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=u0()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=u0()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const b3=new Z;class F8{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)b3.fromBufferAttribute(this,t),b3.applyMatrix4(e),this.setXYZ(t,b3.x,b3.y,b3.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)b3.fromBufferAttribute(this,t),b3.applyNormalMatrix(e),this.setXYZ(t,b3.x,b3.y,b3.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)b3.fromBufferAttribute(this,t),b3.transformDirection(e),this.setXYZ(t,b3.x,b3.y,b3.z);return this}setX(e,t){return this.normalized&&(t=w2(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=w2(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=w2(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=w2(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=i0(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=i0(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=i0(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=i0(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array),i=w2(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=w2(t,this.array),n=w2(n,this.array),i=w2(i,this.array),a=w2(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new N3(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new F8(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qa extends Z0{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _2(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let g9;const r5=new Z,v9=new Z,_9=new Z,y9=new G1,s5=new G1,Ka=new j2,y8=new Z,l5=new Z,b8=new Z,$i=new G1,X6=new G1,Yi=new G1;class TE extends v3{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",g9===void 0){g9=new R3;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new CE(t,5);g9.setIndex([0,1,2,0,2,3]),g9.setAttribute("position",new F8(n,3,0,!1)),g9.setAttribute("uv",new F8(n,2,3,!1))}this.geometry=g9,this.material=e!==void 0?e:new Qa,this.center=new G1(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),v9.setFromMatrixScale(this.matrixWorld),Ka.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_9.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&v9.multiplyScalar(-_9.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const s=this.center;x8(y8.set(-.5,-.5,0),_9,s,v9,i,a),x8(l5.set(.5,-.5,0),_9,s,v9,i,a),x8(b8.set(.5,.5,0),_9,s,v9,i,a),$i.set(0,0),X6.set(1,0),Yi.set(1,1);let l=e.ray.intersectTriangle(y8,l5,b8,!1,r5);if(l===null&&(x8(l5.set(-.5,.5,0),_9,s,v9,i,a),X6.set(0,1),l=e.ray.intersectTriangle(y8,b8,l5,!1,r5),l===null))return;const u=e.ray.origin.distanceTo(r5);u<e.near||u>e.far||t.push({distance:u,point:r5.clone(),uv:g4.getUV(r5,y8,l5,b8,$i,X6,Yi,new G1),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function x8(o,e,t,n,i,a){y9.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(s5.x=a*y9.x-i*y9.y,s5.y=i*y9.x+a*y9.y):s5.copy(y9),o.copy(e),o.x+=s5.x,o.y+=s5.y,o.applyMatrix4(Ka)}class er extends Z0{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _2(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ji=new Z,Zi=new Z,qi=new j2,Q6=new Wt,S8=new F5;class EE extends v3{constructor(e=new R3,t=new er){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Ji.fromBufferAttribute(t,i-1),Zi.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ji.distanceTo(Zi);e.setAttribute("lineDistance",new M3(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),S8.copy(n.boundingSphere),S8.applyMatrix4(i),S8.radius+=a,e.ray.intersectsSphere(S8)===!1)return;qi.copy(i).invert(),Q6.copy(e.ray).applyMatrix4(qi);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=new Z,f=new Z,h=new Z,p=new Z,g=this.isLineSegments?2:1,y=n.index,_=n.attributes.position;if(y!==null){const S=Math.max(0,s.start),x=Math.min(y.count,s.start+s.count);for(let M=S,b=x-1;M<b;M+=g){const C=y.getX(M),w=y.getX(M+1);if(d.fromBufferAttribute(_,C),f.fromBufferAttribute(_,w),Q6.distanceSqToSegment(d,f,p,h)>u)continue;p.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(p);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,s.start),x=Math.min(_.count,s.start+s.count);for(let M=S,b=x-1;M<b;M+=g){if(d.fromBufferAttribute(_,M),f.fromBufferAttribute(_,M+1),Q6.distanceSqToSegment(d,f,p,h)>u)continue;p.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(p);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}class $t extends Z0{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _2(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xi=new j2,xe=new Wt,M8=new F5,A8=new Z;class tr extends v3{constructor(e=new R3,t=new $t){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),M8.copy(n.boundingSphere),M8.applyMatrix4(i),M8.radius+=a,e.ray.intersectsSphere(M8)===!1)return;Xi.copy(i).invert(),xe.copy(e.ray).applyMatrix4(Xi);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let y=p,v=g;y<v;y++){const _=d.getX(y);A8.fromBufferAttribute(h,_),Qi(A8,_,u,i,e,t,this)}}else{const p=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let y=p,v=g;y<v;y++)A8.fromBufferAttribute(h,y),Qi(A8,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const l=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Qi(o,e,t,n,i,a,s){const l=xe.distanceSqToPoint(o);if(l<t){const u=new Z;xe.closestPointToPoint(o,u),u.applyMatrix4(n);const d=i.ray.origin.distanceTo(u);if(d<i.near||d>i.far)return;a.push({distance:d,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,object:s})}}class W4{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),a+=n.distanceTo(i),t.push(a),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const a=n.length;let s;t?s=t:s=e*n[a-1];let l=0,u=a-1,d;for(;l<=u;)if(i=Math.floor(l+(u-l)/2),d=n[i]-s,d<0)l=i+1;else if(d>0)u=i-1;else{u=i;break}if(i=u,n[i]===s)return i/(a-1);const f=n[i],p=n[i+1]-f,g=(s-f)/p;return(i+g)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const s=this.getPoint(i),l=this.getPoint(a),u=t||(s.isVector2?new G1:new Z);return u.copy(l).sub(s).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Z,i=[],a=[],s=[],l=new Z,u=new j2;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new Z)}a[0]=new Z,s[0]=new Z;let d=Number.MAX_VALUE;const f=Math.abs(i[0].x),h=Math.abs(i[0].y),p=Math.abs(i[0].z);f<=d&&(d=f,n.set(1,0,0)),h<=d&&(d=h,n.set(0,1,0)),p<=d&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],l),s[0].crossVectors(i[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),s[g]=s[g-1].clone(),l.crossVectors(i[g-1],i[g]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(m3(i[g-1].dot(i[g]),-1,1));a[g].applyMatrix4(u.makeRotationAxis(l,y))}s[g].crossVectors(i[g],a[g])}if(t===!0){let g=Math.acos(m3(a[0].dot(a[e]),-1,1));g/=e,i[0].dot(l.crossVectors(a[0],a[e]))>0&&(g=-g);for(let y=1;y<=e;y++)a[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),s[y].crossVectors(i[y],a[y])}return{tangents:i,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nr extends W4{constructor(e=0,t=0,n=1,i=1,a=0,s=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=l,this.aRotation=u}getPoint(e,t){const n=t||new G1,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(s?a=0:a=i),this.aClockwise===!0&&!s&&(a===i?a=-i:a=a-i);const l=this.aStartAngle+e*a;let u=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=u-this.aX,g=d-this.aY;u=p*f-g*h+this.aX,d=p*h+g*f+this.aY}return n.set(u,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Yt extends nr{constructor(e,t,n,i,a,s){super(e,t,n,n,i,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Jt(){let o=0,e=0,t=0,n=0;function i(a,s,l,u){o=a,e=l,t=-3*a+3*s-2*l-u,n=2*a-2*s+l+u}return{initCatmullRom:function(a,s,l,u,d){i(s,l,d*(l-a),d*(u-s))},initNonuniformCatmullRom:function(a,s,l,u,d,f,h){let p=(s-a)/d-(l-a)/(d+f)+(l-s)/f,g=(l-s)/f-(u-s)/(f+h)+(u-l)/h;p*=f,g*=f,i(s,l,p,g)},calc:function(a){const s=a*a,l=s*a;return o+e*a+t*s+n*l}}}const w8=new Z,K6=new Jt,e7=new Jt,t7=new Jt;class ir extends W4{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new Z){const n=t,i=this.points,a=i.length,s=(a-(this.closed?0:1))*e;let l=Math.floor(s),u=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:u===0&&l===a-1&&(l=a-2,u=1);let d,f;this.closed||l>0?d=i[(l-1)%a]:(w8.subVectors(i[0],i[1]).add(i[0]),d=w8);const h=i[l%a],p=i[(l+1)%a];if(this.closed||l+2<a?f=i[(l+2)%a]:(w8.subVectors(i[a-1],i[a-2]).add(i[a-1]),f=w8),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(d.distanceToSquared(h),g),v=Math.pow(h.distanceToSquared(p),g),_=Math.pow(p.distanceToSquared(f),g);v<1e-4&&(v=1),y<1e-4&&(y=v),_<1e-4&&(_=v),K6.initNonuniformCatmullRom(d.x,h.x,p.x,f.x,y,v,_),e7.initNonuniformCatmullRom(d.y,h.y,p.y,f.y,y,v,_),t7.initNonuniformCatmullRom(d.z,h.z,p.z,f.z,y,v,_)}else this.curveType==="catmullrom"&&(K6.initCatmullRom(d.x,h.x,p.x,f.x,this.tension),e7.initCatmullRom(d.y,h.y,p.y,f.y,this.tension),t7.initCatmullRom(d.z,h.z,p.z,f.z,this.tension));return n.set(K6.calc(u),e7.calc(u),t7.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ki(o,e,t,n,i){const a=(n-e)*.5,s=(i-t)*.5,l=o*o,u=o*l;return(2*t-2*n+a+s)*u+(-3*t+3*n-2*a-s)*l+a*o+t}function DE(o,e){const t=1-o;return t*t*e}function RE(o,e){return 2*(1-o)*o*e}function IE(o,e){return o*o*e}function y5(o,e,t,n){return DE(o,e)+RE(o,t)+IE(o,n)}function OE(o,e){const t=1-o;return t*t*t*e}function LE(o,e){const t=1-o;return 3*t*t*o*e}function zE(o,e){return 3*(1-o)*o*o*e}function PE(o,e){return o*o*o*e}function b5(o,e,t,n,i){return OE(o,e)+LE(o,t)+zE(o,n)+PE(o,i)}class kE extends W4{constructor(e=new G1,t=new G1,n=new G1,i=new G1){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new G1){const n=t,i=this.v0,a=this.v1,s=this.v2,l=this.v3;return n.set(b5(e,i.x,a.x,s.x,l.x),b5(e,i.y,a.y,s.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class UE extends W4{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,a=this.v1,s=this.v2,l=this.v3;return n.set(b5(e,i.x,a.x,s.x,l.x),b5(e,i.y,a.y,s.y,l.y),b5(e,i.z,a.z,s.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NE extends W4{constructor(e=new G1,t=new G1){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new G1){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new G1;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class FE extends W4{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class BE extends W4{constructor(e=new G1,t=new G1,n=new G1){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G1){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(y5(e,i.x,a.x,s.x),y5(e,i.y,a.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class or extends W4{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,a=this.v1,s=this.v2;return n.set(y5(e,i.x,a.x,s.x),y5(e,i.y,a.y,s.y),y5(e,i.z,a.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GE extends W4{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new G1){const n=t,i=this.points,a=(i.length-1)*e,s=Math.floor(a),l=a-s,u=i[s===0?s:s-1],d=i[s],f=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(Ki(l,u.x,d.x,f.x,h.x),Ki(l,u.y,d.y,f.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new G1().fromArray(i))}return this}}var VE=Object.freeze({__proto__:null,ArcCurve:Yt,CatmullRomCurve3:ir,CubicBezierCurve:kE,CubicBezierCurve3:UE,EllipseCurve:nr,LineCurve:NE,LineCurve3:FE,QuadraticBezierCurve:BE,QuadraticBezierCurve3:or,SplineCurve:GE});class t0 extends R3{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:s,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(s+l,Math.PI);let d=0;const f=[],h=new Z,p=new Z,g=[],y=[],v=[],_=[];for(let S=0;S<=n;S++){const x=[],M=S/n;let b=0;S==0&&s==0?b=.5/t:S==n&&u==Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(i+w*a)*Math.sin(s+M*l),h.y=e*Math.cos(s+M*l),h.z=e*Math.sin(i+w*a)*Math.sin(s+M*l),y.push(h.x,h.y,h.z),p.copy(h).normalize(),v.push(p.x,p.y,p.z),_.push(w+b,1-M),x.push(d++)}f.push(x)}for(let S=0;S<n;S++)for(let x=0;x<t;x++){const M=f[S][x+1],b=f[S][x],C=f[S+1][x],w=f[S+1][x+1];(S!==0||s>0)&&g.push(M,b,w),(S!==n-1||u<Math.PI)&&g.push(b,C,w)}this.setIndex(g),this.setAttribute("position",new M3(y,3)),this.setAttribute("normal",new M3(v,3)),this.setAttribute("uv",new M3(_,2))}static fromJSON(e){return new t0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zt extends R3{constructor(e=new or(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),t=64,n=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const l=new Z,u=new Z,d=new G1;let f=new Z;const h=[],p=[],g=[],y=[];v(),this.setIndex(y),this.setAttribute("position",new M3(h,3)),this.setAttribute("normal",new M3(p,3)),this.setAttribute("uv",new M3(g,2));function v(){for(let M=0;M<t;M++)_(M);_(a===!1?t:0),x(),S()}function _(M){f=e.getPointAt(M/t,f);const b=s.normals[M],C=s.binormals[M];for(let w=0;w<=i;w++){const I=w/i*Math.PI*2,T=Math.sin(I),E=-Math.cos(I);u.x=E*b.x+T*C.x,u.y=E*b.y+T*C.y,u.z=E*b.z+T*C.z,u.normalize(),p.push(u.x,u.y,u.z),l.x=f.x+n*u.x,l.y=f.y+n*u.y,l.z=f.z+n*u.z,h.push(l.x,l.y,l.z)}}function S(){for(let M=1;M<=t;M++)for(let b=1;b<=i;b++){const C=(i+1)*(M-1)+(b-1),w=(i+1)*M+(b-1),I=(i+1)*M+b,T=(i+1)*(M-1)+b;y.push(C,w,T),y.push(w,I,T)}}function x(){for(let M=0;M<=t;M++)for(let b=0;b<=i;b++)d.x=M/t,d.y=b/i,g.push(d.x,d.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zt(new VE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const eo={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class ar{constructor(e,t,n){const i=this;let a=!1,s=0,l=0,u;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){l++,a===!1&&i.onStart!==void 0&&i.onStart(f,s,l),a=!0},this.itemEnd=function(f){s++,i.onProgress!==void 0&&i.onProgress(f,s,l),s===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,h){return d.push(f,h),this},this.removeHandler=function(f){const h=d.indexOf(f);return h!==-1&&d.splice(h,2),this},this.getHandler=function(f){for(let h=0,p=d.length;h<p;h+=2){const g=d[h],y=d[h+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const jE=new ar;class rr{constructor(e){this.manager=e!==void 0?e:jE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class WE extends rr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=eo.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const l=T5("img");function u(){f(),eo.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(h){f(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function f(){l.removeEventListener("load",u,!1),l.removeEventListener("error",d,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class HE extends rr{constructor(e){super(e)}load(e,t,n,i){const a=new i4,s=new WE(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class to{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(m3(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jt}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jt);const no={type:"change"},n7={type:"start"},io={type:"end"};class $E extends J0{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:e9.ROTATE,MIDDLE:e9.DOLLY,RIGHT:e9.PAN},this.touches={ONE:t9.ROTATE,TWO:t9.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(J){J.addEventListener("keydown",r2),this._domElementKeyEvents=J},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(no),n.update(),a=i.NONE},this.update=function(){const J=new Z,o1=new B4().setFromUnitVectors(e.up,new Z(0,1,0)),k1=o1.clone().invert(),B1=new Z,U1=new B4,W1=2*Math.PI;return function(){const v2=n.object.position;J.copy(v2).sub(n.target),J.applyQuaternion(o1),l.setFromVector3(J),n.autoRotate&&a===i.NONE&&E(I()),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let t1=n.minAzimuthAngle,z1=n.maxAzimuthAngle;return isFinite(t1)&&isFinite(z1)&&(t1<-Math.PI?t1+=W1:t1>Math.PI&&(t1-=W1),z1<-Math.PI?z1+=W1:z1>Math.PI&&(z1-=W1),t1<=z1?l.theta=Math.max(t1,Math.min(z1,l.theta)):l.theta=l.theta>(t1+z1)/2?Math.max(t1,l.theta):Math.min(z1,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=d,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),J.setFromSpherical(l),J.applyQuaternion(k1),v2.copy(n.target).add(J),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),d=1,h||B1.distanceToSquared(n.object.position)>s||8*(1-U1.dot(n.object.quaternion))>s?(n.dispatchEvent(no),B1.copy(n.object.position),U1.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",u1),n.domElement.removeEventListener("pointerdown",$1),n.domElement.removeEventListener("pointercancel",K1),n.domElement.removeEventListener("wheel",Y1),n.domElement.removeEventListener("pointermove",e2),n.domElement.removeEventListener("pointerup",n2),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",r2)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,l=new to,u=new to;let d=1;const f=new Z;let h=!1;const p=new G1,g=new G1,y=new G1,v=new G1,_=new G1,S=new G1,x=new G1,M=new G1,b=new G1,C=[],w={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function E(J){u.theta-=J}function z(J){u.phi-=J}const W=function(){const J=new Z;return function(k1,B1){J.setFromMatrixColumn(B1,0),J.multiplyScalar(-k1),f.add(J)}}(),X=function(){const J=new Z;return function(k1,B1){n.screenSpacePanning===!0?J.setFromMatrixColumn(B1,1):(J.setFromMatrixColumn(B1,0),J.crossVectors(n.object.up,J)),J.multiplyScalar(k1),f.add(J)}}(),B=function(){const J=new Z;return function(k1,B1){const U1=n.domElement;if(n.object.isPerspectiveCamera){const W1=n.object.position;J.copy(W1).sub(n.target);let t2=J.length();t2*=Math.tan(n.object.fov/2*Math.PI/180),W(2*k1*t2/U1.clientHeight,n.object.matrix),X(2*B1*t2/U1.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(k1*(n.object.right-n.object.left)/n.object.zoom/U1.clientWidth,n.object.matrix),X(B1*(n.object.top-n.object.bottom)/n.object.zoom/U1.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(J){n.object.isPerspectiveCamera?d/=J:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*J)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(J){n.object.isPerspectiveCamera?d*=J:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/J)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(J){p.set(J.clientX,J.clientY)}function H(J){x.set(J.clientX,J.clientY)}function U(J){v.set(J.clientX,J.clientY)}function k(J){g.set(J.clientX,J.clientY),y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const o1=n.domElement;E(2*Math.PI*y.x/o1.clientHeight),z(2*Math.PI*y.y/o1.clientHeight),p.copy(g),n.update()}function G(J){M.set(J.clientX,J.clientY),b.subVectors(M,x),b.y>0?O(T()):b.y<0&&F(T()),x.copy(M),n.update()}function i1(J){_.set(J.clientX,J.clientY),S.subVectors(_,v).multiplyScalar(n.panSpeed),B(S.x,S.y),v.copy(_),n.update()}function q(J){J.deltaY<0?F(T()):J.deltaY>0&&O(T()),n.update()}function $(J){let o1=!1;switch(J.code){case n.keys.UP:B(0,n.keyPanSpeed),o1=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),o1=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),o1=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),o1=!0;break}o1&&(J.preventDefault(),n.update())}function n1(){if(C.length===1)p.set(C[0].pageX,C[0].pageY);else{const J=.5*(C[0].pageX+C[1].pageX),o1=.5*(C[0].pageY+C[1].pageY);p.set(J,o1)}}function r1(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const J=.5*(C[0].pageX+C[1].pageX),o1=.5*(C[0].pageY+C[1].pageY);v.set(J,o1)}}function e1(){const J=C[0].pageX-C[1].pageX,o1=C[0].pageY-C[1].pageY,k1=Math.sqrt(J*J+o1*o1);x.set(0,k1)}function h1(){n.enableZoom&&e1(),n.enablePan&&r1()}function g1(){n.enableZoom&&e1(),n.enableRotate&&n1()}function v1(J){if(C.length==1)g.set(J.pageX,J.pageY);else{const k1=V1(J),B1=.5*(J.pageX+k1.x),U1=.5*(J.pageY+k1.y);g.set(B1,U1)}y.subVectors(g,p).multiplyScalar(n.rotateSpeed);const o1=n.domElement;E(2*Math.PI*y.x/o1.clientHeight),z(2*Math.PI*y.y/o1.clientHeight),p.copy(g)}function p1(J){if(C.length===1)_.set(J.pageX,J.pageY);else{const o1=V1(J),k1=.5*(J.pageX+o1.x),B1=.5*(J.pageY+o1.y);_.set(k1,B1)}S.subVectors(_,v).multiplyScalar(n.panSpeed),B(S.x,S.y),v.copy(_)}function F1(J){const o1=V1(J),k1=J.pageX-o1.x,B1=J.pageY-o1.y,U1=Math.sqrt(k1*k1+B1*B1);M.set(0,U1),b.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),O(b.y),x.copy(M)}function D1(J){n.enableZoom&&F1(J),n.enablePan&&p1(J)}function M1(J){n.enableZoom&&F1(J),n.enableRotate&&v1(J)}function $1(J){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(J.pointerId),n.domElement.addEventListener("pointermove",e2),n.domElement.addEventListener("pointerup",n2)),b1(J),J.pointerType==="touch"?N(J):i2(J))}function e2(J){n.enabled!==!1&&(J.pointerType==="touch"?D(J):N1(J))}function n2(J){A1(J),C.length===0&&(n.domElement.releasePointerCapture(J.pointerId),n.domElement.removeEventListener("pointermove",e2),n.domElement.removeEventListener("pointerup",n2)),n.dispatchEvent(io),a=i.NONE}function K1(J){A1(J)}function i2(J){let o1;switch(J.button){case 0:o1=n.mouseButtons.LEFT;break;case 1:o1=n.mouseButtons.MIDDLE;break;case 2:o1=n.mouseButtons.RIGHT;break;default:o1=-1}switch(o1){case e9.DOLLY:if(n.enableZoom===!1)return;H(J),a=i.DOLLY;break;case e9.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(n.enablePan===!1)return;U(J),a=i.PAN}else{if(n.enableRotate===!1)return;Y(J),a=i.ROTATE}break;case e9.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(n.enableRotate===!1)return;Y(J),a=i.ROTATE}else{if(n.enablePan===!1)return;U(J),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(n7)}function N1(J){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;k(J);break;case i.DOLLY:if(n.enableZoom===!1)return;G(J);break;case i.PAN:if(n.enablePan===!1)return;i1(J);break}}function Y1(J){n.enabled===!1||n.enableZoom===!1||a!==i.NONE||(J.preventDefault(),n.dispatchEvent(n7),q(J),n.dispatchEvent(io))}function r2(J){n.enabled===!1||n.enablePan===!1||$(J)}function N(J){switch(O1(J),C.length){case 1:switch(n.touches.ONE){case t9.ROTATE:if(n.enableRotate===!1)return;n1(),a=i.TOUCH_ROTATE;break;case t9.PAN:if(n.enablePan===!1)return;r1(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case t9.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;h1(),a=i.TOUCH_DOLLY_PAN;break;case t9.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;g1(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(n7)}function D(J){switch(O1(J),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;v1(J),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;p1(J),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D1(J),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;M1(J),n.update();break;default:a=i.NONE}}function u1(J){n.enabled!==!1&&J.preventDefault()}function b1(J){C.push(J)}function A1(J){delete w[J.pointerId];for(let o1=0;o1<C.length;o1++)if(C[o1].pointerId==J.pointerId){C.splice(o1,1);return}}function O1(J){let o1=w[J.pointerId];o1===void 0&&(o1=new G1,w[J.pointerId]=o1),o1.set(J.pageX,J.pageY)}function V1(J){const o1=J.pointerId===C[0].pointerId?C[1]:C[0];return w[o1.pointerId]}n.domElement.addEventListener("contextmenu",u1),n.domElement.addEventListener("pointerdown",$1),n.domElement.addEventListener("pointercancel",K1),n.domElement.addEventListener("wheel",Y1,{passive:!1}),this.update()}}class YE{constructor(e){K(this,"scene");K(this,"camera");K(this,"renderer");K(this,"controls");K(this,"dom");this.dom=e,this.initScenes(),this.setControls()}initScenes(){this.scene=new wE,this.camera=new q3(45,window.innerWidth/window.innerHeight,1,1e5),this.camera.position.set(0,30,-250),this.renderer=new Xa({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.dom.appendChild(this.renderer.domElement)}setControls(){this.controls=new $E(this.camera,this.renderer.domElement),this.controls.autoRotateSpeed=3,this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.enableZoom=!0,this.controls.minDistance=100,this.controls.maxDistance=300,this.controls.enablePan=!1}}const JE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA/CAYAAAC8aKvcAAAOHElEQVRogb2b268dVR3Hv3Pb+1zYqR7hGBCIgqg0LdbwgGJU5MEoMSQSfdEQJSbGBFFfjDz4D5AYDQneEh4wchENkcgDii8QUxBKEUpRaAqFFmlt6UG6z+m+zMwas37ru9asmT2zz96nhWmms8/ec1mf9fut322tCVAUeAe24Cze8qw2MD6Da2eF2gq8D9l2/ZY6YisSbmtA/ft20Ee9366Z2vD6b23nzgwxD3ATQND42QL1Gq5ZbPhuUGtw3/u72iFtn5t+b4GYDXia9MxnH9JCdbzzXp9BtS9kg8c82o6wHVDCz9MJtYZvDtwG2wyqIS1cl3/rLdkEOK3BjlBIB/jwVfAtQc8LPAlbB7WQGnCNR4h5NMd+A3iPjcxQCPgK/04FUjlwX+KT0p4Jeh7g6bAnEDrQPkIB1HAx94jXnW4AXkKB3INehKrAb0BVJG6lXYU+K8CTsFaFVwlopbqMUCS6iBADAmvIEUI56n3Aay28hVzkMRcg5TpgCCXwGrwHJbDn8bhF6GnAzbB1Fe4hFIkmAhRiAaFAdhBiTNiUx5C7vyk2TB8TKAHt8Kjhu1AOXEP70n4bagr0XMD1cTsJq1V4mbB10ByRQCYIkSEUyBghUgTyr74VAlsgg0Is6qwEXgN35LscI0IPCF4f21dCzSLpOnCTRa7CHkfoVLgvEBG6AhaJRJX8HckxF8mG7pgR2JeyEtxCrsjkqhLadJ3ZxwSvS9uq+HGoWdTbB54N1qqwHau6OYuuWQZU22SNoHcfOKe0rZQLNiQkdg6FgHdJ5exc5B7ys36Cht5Avgl0HdhBt8XSJXwbbCpgZt+QEWrsseLn2APXMoUbwWHlKQUNlIHO3TEWfcjlOnBgiIDYYbpD+tI+4AQg0D0RkPbTE6D2aVbCzb5WS9daYztmBzI+I1HhnHDgHrhjgpTQhbfrRhcO2OAqwipKN5SxmNFBZe6z3vVdR8ixjAwDSjxBXpF0acjsmPahi7qEJy1y3UCl0uAqrDZPEJkk/JwIbsbfIzomJchaOcsOjgTajFe43UKm0k0Fh1cq/wfYALAs0ZfpFr0toBCvsSr+v3AdWuObnh4uOtcTOAOVU4192EycUoJI+jsRncjlO3OOkqOVdFgzWlqyRro5YSMXdhiNyDlgQjlfx+gF3Vch3bnBqKwr3wU11a7Ax43Gypdul9FTJg80bmZIiYWeCofiSDpsRofRc8epOxiKFByLdrPqDFFno8a5dK3RCCVXGXnHDsCYO0XwBdEB5WKDUsqoSzqsgDZJt0PpDuhnc7oda6SyCmxXfjVpw4JWtINX49aHrsANn1jGqjiUAEsSTOo9kBhraVcPqw/uxFcOXo0fy3WBIJj7QEKPDiJ03LNGNI6KGjdi+/p0maWUJ3z+5BiuS9dY5cAZnCFVWnkSziVsMI0qCM5c6T0Rzv/yebjyunNxw/4NPH/XG3jq9sM4qMfiDy7Gpd88H1ftXMaOMEB0coyjMhqN9TfRWU6pFpQiOATsv658Zz1Am5SdpKeP4Q5H14BuBYIYMoqKZAQF4npiSjlxUoEZUfvW8eLnV3CBBrriHOz62Uew6ycfwpq+/UqCFf9x+zbwEoGtCwJNViGmzQLHMtojicJSOrUlIhspG9DJsVxRabiTrDontWwn5Rj2gws7hgMaKzN+u1bK1z6Dh395BA8qMwphQX3YvEB+xxH8+dq9+CuUAHedLSicAUwq9qAQ02baYpOUAWP6DveG6orvE0udt+oM5q/6hmPGxoXYYhM2+g3IKeEqvEDffAD7btyPe09lWK834FSO9Rv3475bDmC/gNrrAsLa+ykPWLfB+nircZEnHLRXWCYl7G9rvIFN8TIvRLQBBdxjSott8p2EDkSg7z2KN297FX+vP+K2Q9h933GcdGPfQvqwQU2yftgasnttZoZadaVWV5scw349SjGUy+h5lah1QEmHdCplA6pRV8JHW8l3xqaDKtvYXN9hyGhHrqLTySTIDOnHfV9uDZVi7q2vPM32DrzKS61A2CzhujpolKGXz2YCbx4WUNohpV3frZQKJKoBWJm7J57qxtSOqFGqNloLvfaMvcJC3KDKnnuartKxdyM/gbf/lJH0P6/Cd+7ejmu3L+EcRkdlNFaUDW8FVpWILPY6L7r8HPR+uwPX7L0K3yZswEA0ZBJh2hQ1j9lJpLYt8VS56s1sPuvAP7SEHbt6uO7r5yN/+TQOPHwS//75Ybx8aMDuMncJi2Kygwuwuca/iqpesoCl71+EHV96Hz522TIuDYDorbHoXfncQqKvZsjEq5bODDzH9t8hXtu2jIt1wz68hMtvWcLlN18I9a/TeO2hN/HKr47gP0cGKIp6eUcDG40ILlrEwnc/gEuvX8UHty/hojCods6xDK+6Dp+llD5uPkunh0HFLel00Oa+OttJGWCk6CAWn9hhcLCADAuIsKTLbvfsxBe/topvJNr71TZVQD23jqMnUoy+sIJL/F8fWcOhc2Ms7Orh/XVIvaUFBvccxf03vYBHxCyFUuQ5LSW+BENJGHWtJcFYYnCbaXWRN6SLxXTgIWH1rm+f0HUoxsq5lAIkHtYx8ue24YI7t+NbWspnQ3MODPDSTftx9+Nv4w2BVQQOcRrAUHbtNDOMERO4EDHlFWBT75KkY9JoDVgRtFvmZSSKhbaIJZnQpXb6b/XYW1i77An8+heH8cBI1xa3uOlrbz+CBz+6G3c+fgprrIIolzsX/Ke423Rxie1eaVd6H7h60pgZqQXORc5KHIyFtQ0JJGPNGern3zuAJz+zB3e8sI5X5kXev4FDn96D3/zwReyRlFG5aoiSCNqmk2Gt4LfINtpZjJE3TdMAXJ2s0ieOWPXvUYk77NvcA8xZobBHrySz5xTWdjyBe376Gv4y1DXHTbahwvi2V/G3nf/AH/b2JbnIK+Udv1P1nslTlcuJcwrHlg7s1t8s8PBPSL2b5HIjW5lQ8sCqZLNKacakGumPDuKZTz2Nu55fx+E25H3rOPzJp/C7Ww/iWXmKKdqlrvrRBB1RwiGj+LE3PTPmsKxPw7YGHgNvHsdCj1kcjydUuCy2hXJ2yupTah//7CmcvOJJ/PH+Y6Kmle33x/D0x5/En55bF6mOJW4yOmafnk4U9eyzQ5G00b6uVC2NVvrqXCvbhhMF67pa91j47rK+kLk4p1ThyGtYwMYGtV1hvG9dEvyqdPs4BmPgxuxWe33Ke6WuIyMPHmKbq9IdcB7KGt3+pIT9wKNwZR57or7wBKGP03BELKermhqHkorbINRWRAIXP+lqg1HTagPMdyMBNKAlfCntVFBCT8LV4rwxYtpwrUFhW8OqggbgctNS3sv+HdHsL9Iih5zcCpksKmlARkmUsLZWEbhyu4oxCRyZ8T7iuB8LvOmAMbXGSDeu1ajH4muNdG12pbz5pnKSrQJeBy4rfXUpp/TBxmCErGBmrG+lrEimXqoRsJ5s7htAxUGLhHXUVHA4WFhIFm4kXdqGdunGjKjGjcZqohBf1KqWhdSBHuXcrYlYTIpY0BEMpQKSy6i20LGrI5fJuC2nauAmlQ4o4cBBjd2YNuAppV+VbswJNivdrptCbZVum0pX4ctlBgorMseksMxxbBpgZiIsbOFmF+CSQVNFzpMGCXeMFIesSY+pLeX4DRgyBtwjWuvI8xQLMm5Viyq3+uH69KK5sE8VuZBLD+xcrZ0vLJhiGKMylt2qY87xCFHZYaNKG38tv3vjd+SptLlv7FnokNIdenPFk1OmTUyNY7hZtSGKFsgDhgIauNqDlXTBPo+oaFahI5F3nGAy4uJ3Q28uKXWQih1osyArWXj7Bg3V27Mtf5hW8SgmJL3KnuyxdweeL04o5Vjck2lo4CQsUt59Ci/WG7L7f1KLLjOfnBK2sMqZy9QBx96s4chb+oDK3iTlmdZ4wKWPexFiG0KZTVTMleHKMho5YWXYTrDFlXpygfDhXbj+s+/FV/VNH3sLD1z3HB4SQwgXtaWVYaLkrqkDXkIqE+KryLAmRzVlInwCbtZVPGC+HLbmy+AxJWDYUDi3RTh/nYc/N+yHqhY8qUVXTQm+l+9Og8UMJR5/Bs4EJI9CYRUQN2UjsGWO6dwMSrlu5M0FgXGXseYGLeAESsDz2hMRG75WrXLfCzBmWL0zK3BTb5lar/XNZs2FqTUtUjELzi4pzgkpzgVFTrpVYDB4yGrQoZsvNuM25NqODdqTQcVQbQo7D3C5GSmbgKQvbsGYG22qBvI9XHasGI4qNwFmgCNX/jXnRdIlilFTLnbZrgjwF7KYQq7t7CbpbrptZfnwpAHzlzCZWb1yrVaXk16xt2Yr9cZwwqJCIipqoFJvyVJXJGokuyALWVSLoZoJZB4JV310XxIK09snuJqm7+5qCgbLTCLhql9mGtQvx2dMTqz6Q2yCcXkxF6uUS5TK8LFs01zbVuvShRvLYP2oQ/+soTdY9Bvw+wXOPnYZj9e3gFJeZnAZsJqRcHarvh6reTXtTNtWgA2sHctgRvU6i7c9fhfTuQQiLZNIQlbwVYHtAtOI58YMYXtM6K1kR62Z0FzQ877z0L7gVI9nf720XXDatoy4Dm29b88dlatPNa+gndkVnQlwHXrzheJ9hq+JN7PnLxJvWhxuQdvXSNdB3zVgtEKD065NrwGsecD+6nd4tbT2VfBNkO8o8HRoNLzo4c83dxtUeuRVV1B7yaP5PYctweIsADd/rr/G4y8uaZrG9GcINn+TZcuwOANgzPRqD2ovZTW9x4SGcurs7yq9q8CY4eWttnOmbbO6nS01/EwnxKvZ1Bk0pOW+8/626fZOvF06r0Q3285eAwH8H5voqTrwCB3hAAAAAElFTkSuQmCC",ZE=Object.freeze(Object.defineProperty({__proto__:null,default:JE},Symbol.toStringTag,{value:"Module"})),qE=""+new URL("../png/label.png",import.meta.url).href,XE=Object.freeze(Object.defineProperty({__proto__:null,default:qE},Symbol.toStringTag,{value:"Module"})),QE=""+new URL("../png/earth.png",import.meta.url).href,KE=Object.freeze(Object.defineProperty({__proto__:null,default:QE},Symbol.toStringTag,{value:"Module"})),eD=""+new URL("../png/glow.png",import.meta.url).href,tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD=""+new URL("../png/gradient.png",import.meta.url).href,iD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),oD=""+new URL("../png/label-old.png",import.meta.url).href,aD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),rD=""+new URL("../png/label.png",import.meta.url).href,sD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),lD=""+new URL("../png/light_column.png",import.meta.url).href,uD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),cD=""+new URL("../png/redCircle.png",import.meta.url).href,dD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),sr=[],oo=Object.assign({"../../images/earth/aircraft.png":ZE,"../../images/earth/aperture.png":XE,"../../images/earth/earth.png":KE,"../../images/earth/glow.png":tD,"../../images/earth/gradient.png":iD,"../../images/earth/label-old.png":aD,"../../images/earth/label.png":sD,"../../images/earth/light_column.png":uD,"../../images/earth/redCircle.png":dD});for(let o in oo){const e=o.split("/").pop();e&&sr.push({name:e.split(".")[0],url:oo[o].default})}const fD={textures:sr};class pD{constructor(e){K(this,"manager");K(this,"callback");K(this,"textureLoader");K(this,"textures");this.callback=e,this.textures={},this.setLoadingManager(),this.loadResources()}setLoadingManager(){this.manager=new ar,this.manager.onStart=()=>{el()},this.manager.onLoad=()=>{this.callback()},this.manager.onProgress=e=>{tl()},this.manager.onError=e=>{nl(),window.$message.error("数据加载失败，请刷新重试！")}}loadResources(){var e;this.textureLoader=new HE(this.manager),(e=fD.textures)==null||e.forEach(t=>{this.textureLoader.load(t.url,n=>{this.textures[t.name]=n})})}}const E5=(o,e,t)=>{let n=e*Math.PI/180;const i=t*Math.PI/180;n=-n;const a=o*Math.cos(i)*Math.cos(n),s=o*Math.sin(i),l=o*Math.cos(i)*Math.sin(n);return new Z(a,s,l)},ao=o=>{const e=new X9(1,1),t=o.textures.aperture,n=new P4({color:15310696,map:t,transparent:!0,opacity:1,depthWrite:!1}),i=new u3(e,n),a=E5(o.radius*1.001,o.lon,o.lat),s=o.radius*.12;i.scale.set(s,s,s),i.userData.size=s,i.userData.scale=Math.random()*1,i.position.set(a.x,a.y,a.z);const l=new Z(a.x,a.y,a.z).normalize(),u=new Z(0,0,1);return i.quaternion.setFromUnitVectors(u,l),i},ro=o=>{const e=o.radius*.3,t=new X9(o.radius*.05,e);t.rotateX(Math.PI/2),t.translate(0,0,e/2);const n=new P4({map:o.textures.light_column,color:o.index==0?o.punctuation.lightColumn.startColor:o.punctuation.lightColumn.endColor,transparent:!0,side:_4,depthWrite:!1}),i=new u3(t,n),a=new k4;a.add(i,i.clone().rotateZ(Math.PI/2));const s=E5(o.radius,o.lon,o.lat);a.position.set(s.x,s.y,s.z);const l=new Z(s.x,s.y,s.z).normalize(),u=new Z(0,0,1);return a.quaternion.setFromUnitVectors(u,l),a},so=o=>{const e=new X9(1,1),t=new u3(e,o.material),n=E5(o.radius*1.001,o.lon,o.lat),i=o.radius*.05;t.scale.set(i,i,i),t.position.set(n.x,n.y,n.z);const a=new Z(n.x,n.y,n.z).normalize(),s=new Z(0,0,1);return t.quaternion.setFromUnitVectors(s,a),t},hD=o=>{const e=[];for(let t=0;t<2*Math.PI-.1;t+=2*Math.PI/(o.number||100))e.push([parseFloat((Math.cos(t)*(o.radius||10)).toFixed(2)),0,parseFloat((Math.sin(t)*(o.radius||10)).toFixed(2))]);return o.closed&&e.push(e[0]),e},mD=o=>{const e=[];o.pointList.forEach(i=>e.push(new Z(i[0],i[1],i[2])));const t=new ir(e),n=new Zt(t,o.number||50,o.radius||1,o.radialSegments);return new u3(n,o.material)};function O4(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function lr(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var F3={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},j9={duration:.5,overwrite:!1,delay:0},qt,A3,Z2,Q3=1e8,M2=1/Q3,Se=Math.PI*2,gD=Se/4,vD=0,ur=Math.sqrt,_D=Math.cos,yD=Math.sin,s3=function(e){return typeof e=="string"},B2=function(e){return typeof e=="function"},V4=function(e){return typeof e=="number"},Xt=function(e){return typeof e=="undefined"},S4=function(e){return typeof e=="object"},w3=function(e){return e!==!1},cr=function(){return typeof window!="undefined"},C8=function(e){return B2(e)||s3(e)},dr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_3=Array.isArray,Me=/(?:-?\.?\d|\.)+/gi,fr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,R9=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,i7=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,pr=/[+-]=-?[.\d]+/,hr=/[^,'"\[\]\s]+/gi,bD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,L2,J3,Ae,Qt,B3={},B8={},mr,gr=function(e){return(B8=$0(e,B3))&&G3},Kt=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},G8=function(e,t){return!t&&console.warn(e)},vr=function(e,t){return e&&(B3[e]=t)&&B8&&(B8[e]=t)||B3},D5=function(){return 0},xD={suppressEvents:!0,isStart:!0,kill:!1},I8={suppressEvents:!0,kill:!1},SD={suppressEvents:!0},en={},c0=[],we={},_r,k3={},o7={},lo=30,O8=[],tn="",nn=function(e){var t=e[0],n,i;if(S4(t)||B2(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=O8.length;i--&&!O8[i].targetTest(t););n=O8[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Br(e[i],n)))||e.splice(i,1);return e},B0=function(e){return e._gsap||nn(K3(e))[0]._gsap},yr=function(e,t,n){return(n=e[t])&&B2(n)?e[t]():Xt(n)&&e.getAttribute&&e.getAttribute(t)||n},C3=function(e,t){return(e=e.split(",")).forEach(t)||e},V2=function(e){return Math.round(e*1e5)/1e5||0},l3=function(e){return Math.round(e*1e7)/1e7||0},z9=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},MD=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},V8=function(){var e=c0.length,t=c0.slice(0),n,i;for(we={},c0.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},br=function(e,t,n,i){c0.length&&V8(),e.render(t,n,i||A3&&t<0&&(e._initted||e._startAt)),c0.length&&V8()},xr=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hr).length<2?t:s3(e)?e.trim():e},Sr=function(e){return e},o4=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},AD=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$0=function(e,t){for(var n in t)e[n]=t[n];return e},uo=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=S4(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},j8=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},x5=function(e){var t=e.parent||L2,n=e.keyframes?AD(_3(e.keyframes)):o4;if(w3(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},wD=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mr=function(e,t,n,i,a){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],l;if(a)for(l=t[a];s&&s[a]>l;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},o6=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t._prev,s=t._next;a?a._next=s:e[n]===t&&(e[n]=s),s?s._prev=a:e[i]===t&&(e[i]=a),t._next=t._prev=t.parent=null},p0=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},G0=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},CD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ce=function(e,t,n,i){return e._startAt&&(A3?e._startAt.revert(I8):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},TD=function o(e){return!e||e._ts&&o(e.parent)},co=function(e){return e._repeat?W9(e._tTime,e=e.duration()+e._rDelay)*e:0},W9=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},W8=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},a6=function(e){return e._end=l3(e._start+(e._tDur/Math.abs(e._ts||e._rts||M2)||0))},r6=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=l3(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),a6(e),n._dirty||G0(n,e)),e},Ar=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=W8(e.rawTime(),t),(!t._dur||V5(0,t.totalDuration(),n)-t._tTime>M2)&&t.render(n,!0)),G0(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-M2}},v4=function(e,t,n,i){return t.parent&&p0(t),t._start=l3((V4(n)?n:n||e!==L2?Y3(e,n,t):e._time)+t._delay),t._end=l3(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mr(e,t,"_first","_last",e._sort?"_start":0),Te(t)||(e._recent=t),i||Ar(e,t),e._ts<0&&r6(e,e._tTime),e},wr=function(e,t){return(B3.ScrollTrigger||Kt("scrollTrigger",t))&&B3.ScrollTrigger.create(t,e)},Cr=function(e,t,n,i,a){if(an(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!A3&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_r!==U3.frame)return c0.push(e),e._lazy=[a,i],1},ED=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Te=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DD=function(e,t,n,i){var a=e.ratio,s=t<0||!t&&(!e._start&&ED(e)&&!(!e._initted&&Te(e))||(e._ts<0||e._dp._ts<0)&&!Te(e))?0:1,l=e._rDelay,u=0,d,f,h;if(l&&e._repeat&&(u=V5(0,e._tDur,t),f=W9(u,l),e._yoyo&&f&1&&(s=1-s),f!==W9(e._tTime,l)&&(a=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==a||A3||i||e._zTime===M2||!t&&e._zTime){if(!e._initted&&Cr(e,t,i,n,u))return;for(h=e._zTime,e._zTime=t||(n?M2:0),n||(n=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=u,d=e._pt;d;)d.r(s,d.d),d=d._next;t<0&&Ce(e,t,n,!0),e._onUpdate&&!n&&e4(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&e4(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&p0(e,1),!n&&!A3&&(e4(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},RD=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},H9=function(e,t,n,i){var a=e._repeat,s=l3(t)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=a?a<0?1e10:l3(s*(a+1)+e._rDelay*a):s,l>0&&!i&&r6(e,e._tTime=e._tDur*l),e.parent&&a6(e),n||G0(e.parent,e),e},fo=function(e){return e instanceof S3?G0(e):H9(e,e._dur)},ID={_start:0,endTime:D5,totalDuration:D5},Y3=function o(e,t,n){var i=e.labels,a=e._recent||ID,s=e.duration()>=Q3?a.endTime(!1):e._dur,l,u,d;return s3(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),d=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(l<0?a:n).totalDuration()/100:1)):l<0?(t in i||(i[t]=s),i[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),d&&n&&(u=u/100*(_3(n)?n[0]:n).totalDuration()),l>1?o(e,t.substr(0,l-1),n)+u:s+u)):t==null?s:+t},S5=function(e,t,n){var i=V4(t[1]),a=(i?2:1)+(e<2?0:1),s=t[a],l,u;if(i&&(s.duration=t[1]),s.parent=n,e){for(l=s,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=w3(u.vars.inherit)&&u.parent;s.immediateRender=w3(l.immediateRender),e<2?s.runBackwards=1:s.startAt=t[a-1]}return new e3(t[0],s,t[a+1])},b0=function(e,t){return e||e===0?t(e):t},V5=function(e,t,n){return n<e?e:n>t?t:n},g3=function(e,t){return!s3(e)||!(t=bD.exec(e))?"":t[1]},OD=function(e,t,n){return b0(n,function(i){return V5(e,t,i)})},Ee=[].slice,Tr=function(e,t){return e&&S4(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&S4(e[0]))&&!e.nodeType&&e!==J3},LD=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var a;return s3(i)&&!t||Tr(i,1)?(a=n).push.apply(a,K3(i)):n.push(i)})||n},K3=function(e,t,n){return Z2&&!t&&Z2.selector?Z2.selector(e):s3(e)&&!n&&(Ae||!$9())?Ee.call((t||Qt).querySelectorAll(e),0):_3(e)?LD(e,n):Tr(e)?Ee.call(e,0):e?[e]:[]},De=function(e){return e=K3(e)[0]||G8("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return K3(t,n.querySelectorAll?n:n===e?G8("Invalid scope")||Qt.createElement("div"):e)}},Er=function(e){return e.sort(function(){return .5-Math.random()})},Dr=function(e){if(B2(e))return e;var t=S4(e)?e:{each:e},n=V0(t.ease),i=t.from||0,a=parseFloat(t.base)||0,s={},l=i>0&&i<1,u=isNaN(i)||l,d=t.axis,f=i,h=i;return s3(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!l&&u&&(f=i[0],h=i[1]),function(p,g,y){var v=(y||t).length,_=s[v],S,x,M,b,C,w,I,T,E;if(!_){if(E=t.grid==="auto"?0:(t.grid||[1,Q3])[1],!E){for(I=-Q3;I<(I=y[E++].getBoundingClientRect().left)&&E<v;);E--}for(_=s[v]=[],S=u?Math.min(E,v)*f-.5:i%E,x=E===Q3?0:u?v*h/E-.5:i/E|0,I=0,T=Q3,w=0;w<v;w++)M=w%E-S,b=x-(w/E|0),_[w]=C=d?Math.abs(d==="y"?b:M):ur(M*M+b*b),C>I&&(I=C),C<T&&(T=C);i==="random"&&Er(_),_.max=I-T,_.min=T,_.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(E>v?v-1:d?d==="y"?v/E:E:Math.max(E,v/E))||0)*(i==="edges"?-1:1),_.b=v<0?a-v:a,_.u=g3(t.amount||t.each)||0,n=n&&v<0?Ur(n):n}return v=(_[p]-_.min)/_.max||0,l3(_.b+(n?n(v):v)*_.v)+_.u}},Re=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=l3(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(V4(n)?0:g3(n))}},Rr=function(e,t){var n=_3(e),i,a;return!n&&S4(e)&&(i=n=e.radius||Q3,e.values?(e=K3(e.values),(a=!V4(e[0]))&&(i*=i)):e=Re(e.increment)),b0(t,n?B2(e)?function(s){return a=e(s),Math.abs(a-s)<=i?a:s}:function(s){for(var l=parseFloat(a?s.x:s),u=parseFloat(a?s.y:0),d=Q3,f=0,h=e.length,p,g;h--;)a?(p=e[h].x-l,g=e[h].y-u,p=p*p+g*g):p=Math.abs(e[h]-l),p<d&&(d=p,f=h);return f=!i||d<=i?e[f]:s,a||f===s||V4(s)?f:f+g3(s)}:Re(e))},Ir=function(e,t,n,i){return b0(_3(e)?!t:n===!0?!!(n=0):!i,function(){return _3(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zD=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(a,s){return s(a)},i)}},PD=function(e,t){return function(n){return e(parseFloat(n))+(t||g3(n))}},kD=function(e,t,n){return Lr(e,t,0,1,n)},Or=function(e,t,n){return b0(n,function(i){return e[~~t(i)]})},UD=function o(e,t,n){var i=t-e;return _3(e)?Or(e,o(0,e.length),t):b0(n,function(a){return(i+(a-e)%i)%i+e})},ND=function o(e,t,n){var i=t-e,a=i*2;return _3(e)?Or(e,o(0,e.length-1),t):b0(n,function(s){return s=(a+(s-e)%a)%a||0,e+(s>i?a-s:s)})},R5=function(e){for(var t=0,n="",i,a,s,l;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),l=e.charAt(i+7)==="[",a=e.substr(i+7,s-i-7).match(l?hr:Me),n+=e.substr(t,i-t)+Ir(l?a:+a[0],l?0:+a[1],+a[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},Lr=function(e,t,n,i,a){var s=t-e,l=i-n;return b0(a,function(u){return n+((u-e)/s*l||0)})},FD=function o(e,t,n,i){var a=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!a){var s=s3(e),l={},u,d,f,h,p;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(_3(e)&&!_3(t)){for(f=[],h=e.length,p=h-2,d=1;d<h;d++)f.push(o(e[d-1],e[d]));h--,a=function(y){y*=h;var v=Math.min(p,~~y);return f[v](y-v)},n=t}else i||(e=$0(_3(e)?[]:{},e));if(!f){for(u in t)on.call(l,e,u,"get",t[u]);a=function(y){return ln(y,l)||(s?e.p:e)}}}return b0(n,a)},po=function(e,t,n){var i=e.labels,a=Q3,s,l,u;for(s in i)l=i[s]-t,l<0==!!n&&l&&a>(l=Math.abs(l))&&(u=s,a=l);return u},e4=function(e,t,n){var i=e.vars,a=i[t],s=Z2,l=e._ctx,u,d,f;if(a)return u=i[t+"Params"],d=i.callbackScope||e,n&&c0.length&&V8(),l&&(Z2=l),f=u?a.apply(d,u):a.call(d),Z2=s,f},m5=function(e){return p0(e),e.scrollTrigger&&e.scrollTrigger.kill(!!A3),e.progress()<1&&e4(e,"onInterrupt"),e},I9,BD=function(e){e=!e.name&&e.default||e;var t=e.name,n=B2(e),i=t&&!n&&e.init?function(){this._props=[]}:e,a={init:D5,render:ln,add:on,kill:nR,modifier:tR,rawVars:0},s={targetTest:0,get:0,getSetter:sn,aliases:{},register:0};if($9(),e!==i){if(k3[t])return;o4(i,o4(j8(e,a),s)),$0(i.prototype,$0(a,j8(e,s))),k3[i.prop=t]=i,e.targetTest&&(O8.push(i),en[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vr(t,i),e.register&&e.register(G3,i,T3)},A2=255,g5={aqua:[0,A2,A2],lime:[0,A2,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,A2],navy:[0,0,128],white:[A2,A2,A2],olive:[128,128,0],yellow:[A2,A2,0],orange:[A2,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[A2,0,0],pink:[A2,192,203],cyan:[0,A2,A2],transparent:[A2,A2,A2,0]},a7=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*A2+.5|0},zr=function(e,t,n){var i=e?V4(e)?[e>>16,e>>8&A2,e&A2]:0:g5.black,a,s,l,u,d,f,h,p,g,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),g5[e])i=g5[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+a+a+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&A2,i&A2,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&A2,e&A2]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Me),!t)u=+i[0]%360/360,d=+i[1]/100,f=+i[2]/100,s=f<=.5?f*(d+1):f+d-f*d,a=f*2-s,i.length>3&&(i[3]*=1),i[0]=a7(u+1/3,a,s),i[1]=a7(u,a,s),i[2]=a7(u-1/3,a,s);else if(~e.indexOf("="))return i=e.match(fr),n&&i.length<4&&(i[3]=1),i}else i=e.match(Me)||g5.transparent;i=i.map(Number)}return t&&!y&&(a=i[0]/A2,s=i[1]/A2,l=i[2]/A2,h=Math.max(a,s,l),p=Math.min(a,s,l),f=(h+p)/2,h===p?u=d=0:(g=h-p,d=f>.5?g/(2-h-p):g/(h+p),u=h===a?(s-l)/g+(s<l?6:0):h===s?(l-a)/g+2:(a-s)/g+4,u*=60),i[0]=~~(u+.5),i[1]=~~(d*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},Pr=function(e){var t=[],n=[],i=-1;return e.split(d0).forEach(function(a){var s=a.match(R9)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},ho=function(e,t,n){var i="",a=(e+i).match(d0),s=t?"hsla(":"rgba(",l=0,u,d,f,h;if(!a)return e;if(a=a.map(function(p){return(p=zr(p,t,1))&&s+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(f=Pr(e),u=n.c,u.join(i)!==f.c.join(i)))for(d=e.replace(d0,"1").split(R9),h=d.length-1;l<h;l++)i+=d[l]+(~u.indexOf(l)?a.shift()||s+"0,0,0,0)":(f.length?f:a.length?a:n).shift());if(!d)for(d=e.split(d0),h=d.length-1;l<h;l++)i+=d[l]+a[l];return i+d[h]},d0=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in g5)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),GD=/hsl[a]?\(/,kr=function(e){var t=e.join(" "),n;if(d0.lastIndex=0,d0.test(t))return n=GD.test(t),e[1]=ho(e[1],n),e[0]=ho(e[0],n,Pr(e[1])),!0},I5,U3=function(){var o=Date.now,e=500,t=33,n=o(),i=n,a=1e3/240,s=a,l=[],u,d,f,h,p,g,y=function v(_){var S=o()-i,x=_===!0,M,b,C,w;if(S>e&&(n+=S-t),i+=S,C=i-n,M=C-s,(M>0||x)&&(w=++h.frame,p=C-h.time*1e3,h.time=C=C/1e3,s+=M+(M>=a?4:a-M),b=1),x||(u=d(v)),b)for(g=0;g<l.length;g++)l[g](C,p,w,_)};return h={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return p/(1e3/(_||60))},wake:function(){mr&&(!Ae&&cr()&&(J3=Ae=window,Qt=J3.document||{},B3.gsap=G3,(J3.gsapVersions||(J3.gsapVersions=[])).push(G3.version),gr(B8||J3.GreenSockGlobals||!J3.gsap&&J3||{}),f=J3.requestAnimationFrame),u&&h.sleep(),d=f||function(_){return setTimeout(_,s-h.time*1e3+1|0)},I5=1,y(2))},sleep:function(){(f?J3.cancelAnimationFrame:clearTimeout)(u),I5=0,d=D5},lagSmoothing:function(_,S){e=_||1/M2,t=Math.min(S,e,0)},fps:function(_){a=1e3/(_||240),s=h.time*1e3+a},add:function(_,S,x){var M=S?function(b,C,w,I){_(b,C,w,I),h.remove(M)}:_;return h.remove(_),l[x?"unshift":"push"](M),$9(),M},remove:function(_,S){~(S=l.indexOf(_))&&l.splice(S,1)&&g>=S&&g--},_listeners:l},h}(),$9=function(){return!I5&&U3.wake()},h2={},VD=/^[\d.\-M][\d.\-,\s]/,jD=/["']/g,WD=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],a=1,s=n.length,l,u,d;a<s;a++)u=n[a],l=a!==s-1?u.lastIndexOf(","):u.length,d=u.substr(0,l),t[i]=isNaN(d)?d.replace(jD,"").trim():+d,i=u.substr(l+1).trim();return t},HD=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$D=function(e){var t=(e+"").split("("),n=h2[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[WD(t[1])]:HD(e).split(",").map(xr)):h2._CE&&VD.test(e)?h2._CE("",e):n},Ur=function(e){return function(t){return 1-e(1-t)}},Nr=function o(e,t){for(var n=e._first,i;n;)n instanceof S3?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},V0=function(e,t){return e&&(B2(e)?e:h2[e]||$D(e))||t},q0=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:i},s;return C3(e,function(l){h2[l]=B3[l]=a,h2[s=l.toLowerCase()]=n;for(var u in a)h2[s+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=h2[l+"."+u]=a[u]}),a},Fr=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},r7=function o(e,t,n){var i=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),s=a/Se*(Math.asin(1/i)||0),l=function(f){return f===1?1:i*Math.pow(2,-10*f)*yD((f-s)*a)+1},u=e==="out"?l:e==="in"?function(d){return 1-l(1-d)}:Fr(l);return a=Se/a,u.config=function(d,f){return o(e,d,f)},u},s7=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Fr(n);return i.config=function(a){return o(e,a)},i};C3("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;q0(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});h2.Linear.easeNone=h2.none=h2.Linear.easeIn;q0("Elastic",r7("in"),r7("out"),r7());(function(o,e){var t=1/e,n=2*t,i=2.5*t,a=function(l){return l<t?o*l*l:l<n?o*Math.pow(l-1.5/e,2)+.75:l<i?o*(l-=2.25/e)*l+.9375:o*Math.pow(l-2.625/e,2)+.984375};q0("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75);q0("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});q0("Circ",function(o){return-(ur(1-o*o)-1)});q0("Sine",function(o){return o===1?1:-_D(o*gD)+1});q0("Back",s7("in"),s7("out"),s7());h2.SteppedEase=h2.steps=B3.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),a=t?1:0,s=1-M2;return function(l){return((i*V5(0,s,l)|0)+a)*n}}};j9.ease=h2["quad.out"];C3("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return tn+=o+","+o+"Params,"});var Br=function(e,t){this.id=vD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:yr,this.set=t?t.getSetter:sn},Y9=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,H9(this,+t.duration,1,1),this.data=t.data,Z2&&(this._ctx=Z2,Z2.data.push(this)),I5||U3.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,H9(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($9(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(r6(this,n),!a._dp||a.parent||Ar(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&v4(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===M2||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),br(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+co(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+co(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,i):this._repeat?W9(this._tTime,a)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-M2?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?W8(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-M2?0:this._rts,this.totalTime(V5(-this._delay,this._tDur,i),!0),a6(this),CD(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($9(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==M2&&(this._tTime-=M2)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&v4(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(w3(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?W8(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=SD);var i=A3;return A3=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),A3=i,this},e.globalTime=function(n){for(var i=this,a=arguments.length?n:i.rawTime();i;)a=i._start+a/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fo(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fo(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Y3(this,n),w3(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,w3(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-M2:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-M2,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=i&&a<this.endTime(!0)-M2)},e.eventCallback=function(n,i,a){var s=this.vars;return arguments.length>1?(i?(s[n]=i,a&&(s[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(a){var s=B2(n)?n:Sr,l=function(){var d=i.then;i.then=null,B2(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=d),a(s),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){m5(this)},o}();o4(Y9.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-M2,_prom:0,_ps:!1,_rts:1});var S3=function(o){lr(e,o);function e(n,i){var a;return n===void 0&&(n={}),a=o.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=w3(n.sortChildren),L2&&v4(n.parent||L2,O4(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&wr(O4(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(i,a,s){return S5(0,arguments,this),this},t.from=function(i,a,s){return S5(1,arguments,this),this},t.fromTo=function(i,a,s,l){return S5(2,arguments,this),this},t.set=function(i,a,s){return a.duration=0,a.parent=this,x5(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new e3(i,a,Y3(this,s),1),this},t.call=function(i,a,s){return v4(this,e3.delayedCall(0,i,a),s)},t.staggerTo=function(i,a,s,l,u,d,f){return s.duration=a,s.stagger=s.stagger||l,s.onComplete=d,s.onCompleteParams=f,s.parent=this,new e3(i,s,Y3(this,u)),this},t.staggerFrom=function(i,a,s,l,u,d,f){return s.runBackwards=1,x5(s).immediateRender=w3(s.immediateRender),this.staggerTo(i,a,s,l,u,d,f)},t.staggerFromTo=function(i,a,s,l,u,d,f,h){return l.startAt=s,x5(l).immediateRender=w3(l.immediateRender),this.staggerTo(i,a,l,u,d,f,h)},t.render=function(i,a,s){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,d=this._dur,f=i<=0?0:l3(i),h=this._zTime<0!=i<0&&(this._initted||!d),p,g,y,v,_,S,x,M,b,C,w,I;if(this!==L2&&f>u&&i>=0&&(f=u),f!==this._tTime||s||h){if(l!==this._time&&d&&(f+=this._time-l,i+=this._time-l),p=f,b=this._start,M=this._ts,S=!M,h&&(d||(l=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,_=d+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,a,s);if(p=l3(f%_),f===u?(v=this._repeat,p=d):(v=~~(f/_),v&&v===f/_&&(p=d,v--),p>d&&(p=d)),C=W9(this._tTime,_),!l&&this._tTime&&C!==v&&(C=v),w&&v&1&&(p=d-p,I=1),v!==C&&!this._lock){var T=w&&C&1,E=T===(w&&v&1);if(v<C&&(T=!T),l=T?0:d,this._lock=1,this.render(l||(I?0:l3(v*_)),a,!d)._lock=0,this._tTime=f,!a&&this.parent&&e4(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),l&&l!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,u=this._tDur,E&&(this._lock=2,l=T?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;Nr(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=RD(this,l3(l),l3(p)),x&&(f-=p-(p=x._start))),this._tTime=f,this._time=p,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&p&&!a&&(e4(this,"onStart"),this._tTime!==f))return this;if(p>=l&&i>=0)for(g=this._first;g;){if(y=g._next,(g._act||p>=g._start)&&g._ts&&x!==g){if(g.parent!==this)return this.render(i,a,s);if(g.render(g._ts>0?(p-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(p-g._start)*g._ts,a,s),p!==this._time||!this._ts&&!S){x=0,y&&(f+=this._zTime=-M2);break}}g=y}else{g=this._last;for(var z=i<0?i:p;g;){if(y=g._prev,(g._act||z<=g._end)&&g._ts&&x!==g){if(g.parent!==this)return this.render(i,a,s);if(g.render(g._ts>0?(z-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(z-g._start)*g._ts,a,s||A3&&(g._initted||g._startAt)),p!==this._time||!this._ts&&!S){x=0,y&&(f+=this._zTime=z?-M2:M2);break}}g=y}}if(x&&!a&&(this.pause(),x.render(p>=l?0:-M2)._zTime=p>=l?1:-1,this._ts))return this._start=b,a6(this),this.render(i,a,s);this._onUpdate&&!a&&e4(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&l)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!d)&&(f===u&&this._ts>0||!f&&this._ts<0)&&p0(this,1),!a&&!(i<0&&!l)&&(f||l||!u)&&(e4(this,f===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,a){var s=this;if(V4(a)||(a=Y3(this,a,i)),!(i instanceof Y9)){if(_3(i))return i.forEach(function(l){return s.add(l,a)}),this;if(s3(i))return this.addLabel(i,a);if(B2(i))i=e3.delayedCall(0,i);else return this}return this!==i?v4(this,i,a):this},t.getChildren=function(i,a,s,l){i===void 0&&(i=!0),a===void 0&&(a=!0),s===void 0&&(s=!0),l===void 0&&(l=-Q3);for(var u=[],d=this._first;d;)d._start>=l&&(d instanceof e3?a&&u.push(d):(s&&u.push(d),i&&u.push.apply(u,d.getChildren(!0,a,s)))),d=d._next;return u},t.getById=function(i){for(var a=this.getChildren(1,1,1),s=a.length;s--;)if(a[s].vars.id===i)return a[s]},t.remove=function(i){return s3(i)?this.removeLabel(i):B2(i)?this.killTweensOf(i):(o6(this,i),i===this._recent&&(this._recent=this._last),G0(this))},t.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=l3(U3.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},t.addLabel=function(i,a){return this.labels[i]=Y3(this,a),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,a,s){var l=e3.delayedCall(0,a||D5,s);return l.data="isPause",this._hasPause=1,v4(this,l,Y3(this,i))},t.removePause=function(i){var a=this._first;for(i=Y3(this,i);a;)a._start===i&&a.data==="isPause"&&p0(a),a=a._next},t.killTweensOf=function(i,a,s){for(var l=this.getTweensOf(i,s),u=l.length;u--;)o0!==l[u]&&l[u].kill(i,a);return this},t.getTweensOf=function(i,a){for(var s=[],l=K3(i),u=this._first,d=V4(a),f;u;)u instanceof e3?MD(u._targets,l)&&(d?(!o0||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&s.push(u):(f=u.getTweensOf(l,a)).length&&s.push.apply(s,f),u=u._next;return s},t.tweenTo=function(i,a){a=a||{};var s=this,l=Y3(s,i),u=a,d=u.startAt,f=u.onStart,h=u.onStartParams,p=u.immediateRender,g,y=e3.to(s,o4({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:a.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale())||M2,onStart:function(){if(s.pause(),!g){var _=a.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale());y._dur!==_&&H9(y,_,0,1).render(y._time,!0,!0),g=1}f&&f.apply(y,h||[])}},a));return p?y.render(0):y},t.tweenFromTo=function(i,a,s){return this.tweenTo(a,o4({startAt:{time:Y3(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),po(this,Y3(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),po(this,Y3(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+M2)},t.shiftChildren=function(i,a,s){s===void 0&&(s=0);for(var l=this._first,u=this.labels,d;l;)l._start>=s&&(l._start+=i,l._end+=i),l=l._next;if(a)for(d in u)u[d]>=s&&(u[d]+=i);return G0(this)},t.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,s;a;)s=a._next,this.remove(a),a=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),G0(this)},t.totalDuration=function(i){var a=0,s=this,l=s._last,u=Q3,d,f,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),f=l._start,f>u&&s._sort&&l._ts&&!s._lock?(s._lock=1,v4(s,l,f-l._delay,1)._lock=0):u=f,f<0&&l._ts&&(a-=f,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=f/s._ts,s._time-=f,s._tTime-=f),s.shiftChildren(-f,!1,-1/0),u=0),l._end>a&&l._ts&&(a=l._end),l=d;H9(s,s===L2&&s._time>a?s._time:a,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(L2._ts&&(br(L2,W8(i,L2)),_r=U3.frame),U3.frame>=lo){lo+=F3.autoSleep||120;var a=L2._first;if((!a||!a._ts)&&F3.autoSleep&&U3._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||U3.sleep()}}},e}(Y9);o4(S3.prototype,{_lock:0,_hasPause:0,_forcing:0});var YD=function(e,t,n,i,a,s,l){var u=new T3(this._pt,e,t,0,1,$r,null,a),d=0,f=0,h,p,g,y,v,_,S,x;for(u.b=n,u.e=i,n+="",i+="",(S=~i.indexOf("random("))&&(i=R5(i)),s&&(x=[n,i],s(x,e,t),n=x[0],i=x[1]),p=n.match(i7)||[];h=i7.exec(i);)y=h[0],v=i.substring(d,h.index),g?g=(g+1)%5:v.substr(-5)==="rgba("&&(g=1),y!==p[f++]&&(_=parseFloat(p[f-1])||0,u._pt={_next:u._pt,p:v||f===1?v:",",s:_,c:y.charAt(1)==="="?z9(_,y)-_:parseFloat(y)-_,m:g&&g<4?Math.round:0},d=i7.lastIndex);return u.c=d<i.length?i.substring(d,i.length):"",u.fp=l,(pr.test(i)||S)&&(u.e=0),this._pt=u,u},on=function(e,t,n,i,a,s,l,u,d,f){B2(i)&&(i=i(a||0,e,s));var h=e[t],p=n!=="get"?n:B2(h)?d?e[t.indexOf("set")||!B2(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():h,g=B2(h)?d?QD:Wr:rn,y;if(s3(i)&&(~i.indexOf("random(")&&(i=R5(i)),i.charAt(1)==="="&&(y=z9(p,i)+(g3(p)||0),(y||y===0)&&(i=y))),!f||p!==i||Ie)return!isNaN(p*i)&&i!==""?(y=new T3(this._pt,e,t,+p||0,i-(p||0),typeof h=="boolean"?eR:Hr,0,g),d&&(y.fp=d),l&&y.modifier(l,this,e),this._pt=y):(!h&&!(t in e)&&Kt(t,i),YD.call(this,e,t,p,i,g,u||F3.stringFilter,d))},JD=function(e,t,n,i,a){if(B2(e)&&(e=M5(e,a,t,n,i)),!S4(e)||e.style&&e.nodeType||_3(e)||dr(e))return s3(e)?M5(e,a,t,n,i):e;var s={},l;for(l in e)s[l]=M5(e[l],a,t,n,i);return s},Gr=function(e,t,n,i,a,s){var l,u,d,f;if(k3[e]&&(l=new k3[e]).init(a,l.rawVars?t[e]:JD(t[e],i,a,s,n),n,i,s)!==!1&&(n._pt=u=new T3(n._pt,a,e,0,1,l.render,l,0,l.priority),n!==I9))for(d=n._ptLookup[n._targets.indexOf(a)],f=l._props.length;f--;)d[l._props[f]]=u;return l},o0,Ie,an=function o(e,t,n){var i=e.vars,a=i.ease,s=i.startAt,l=i.immediateRender,u=i.lazy,d=i.onUpdate,f=i.onUpdateParams,h=i.callbackScope,p=i.runBackwards,g=i.yoyoEase,y=i.keyframes,v=i.autoRevert,_=e._dur,S=e._startAt,x=e._targets,M=e.parent,b=M&&M.data==="nested"?M.vars.targets:x,C=e._overwrite==="auto"&&!qt,w=e.timeline,I,T,E,z,W,X,B,O,F,Y,H,U,k;if(w&&(!y||!a)&&(a="none"),e._ease=V0(a,j9.ease),e._yEase=g?Ur(V0(g===!0?a:g,j9.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!w&&!!i.runBackwards,!w||y&&!i.stagger){if(O=x[0]?B0(x[0]).harness:0,U=O&&i[O.prop],I=j8(i,en),S&&(S._zTime<0&&S.progress(1),t<0&&p&&l&&!v?S.render(-1,!0):S.revert(p&&_?I8:xD),S._lazy=0),s){if(p0(e._startAt=e3.set(x,o4({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:w3(u),startAt:null,delay:0,onUpdate:d,onUpdateParams:f,callbackScope:h,stagger:0},s))),e._startAt._dp=0,t<0&&(A3||!l&&!v)&&e._startAt.revert(I8),l&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&_&&!S){if(t&&(l=!1),E=o4({overwrite:!1,data:"isFromStart",lazy:l&&w3(u),immediateRender:l,stagger:0,parent:M},I),U&&(E[O.prop]=U),p0(e._startAt=e3.set(x,E)),e._startAt._dp=0,t<0&&(A3?e._startAt.revert(I8):e._startAt.render(-1,!0)),e._zTime=t,!l)o(e._startAt,M2,M2);else if(!t)return}for(e._pt=e._ptCache=0,u=_&&w3(u)||u&&!_,T=0;T<x.length;T++){if(W=x[T],B=W._gsap||nn(x)[T]._gsap,e._ptLookup[T]=Y={},we[B.id]&&c0.length&&V8(),H=b===x?T:b.indexOf(W),O&&(F=new O).init(W,U||I,e,H,b)!==!1&&(e._pt=z=new T3(e._pt,W,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){Y[G]=z}),F.priority&&(X=1)),!O||U)for(E in I)k3[E]&&(F=Gr(E,I,e,H,W,b))?F.priority&&(X=1):Y[E]=z=on.call(e,W,E,"get",I[E],H,b,0,i.stringFilter);e._op&&e._op[T]&&e.kill(W,e._op[T]),C&&e._pt&&(o0=e,L2.killTweensOf(W,Y,e.globalTime(t)),k=!e.parent,o0=0),e._pt&&u&&(we[B.id]=1)}X&&Yr(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!k,y&&t<=0&&w.render(Q3,!0,!0)},ZD=function(e,t,n,i,a,s,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(d=h[p][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Ie=1,e.vars[t]="+=0",an(e,l),Ie=0,1;u.push(d)}for(p=u.length;p--;)f=u[p],d=f._pt||f,d.s=(i||i===0)&&!a?i:d.s+(i||0)+s*d.c,d.c=n-d.s,f.e&&(f.e=V2(n)+g3(f.e)),f.b&&(f.b=d.s+g3(f.b))},qD=function(e,t){var n=e[0]?B0(e[0]).harness:0,i=n&&n.aliases,a,s,l,u;if(!i)return t;a=$0({},t);for(s in i)if(s in a)for(u=i[s].split(","),l=u.length;l--;)a[u[l]]=a[s];return a},XD=function(e,t,n,i){var a=t.ease||i||"power1.inOut",s,l;if(_3(t))l=n[e]||(n[e]=[]),t.forEach(function(u,d){return l.push({t:d/(t.length-1)*100,v:u,e:a})});else for(s in t)l=n[s]||(n[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:t[s],e:a})},M5=function(e,t,n,i,a){return B2(e)?e.call(t,n,i,a):s3(e)&&~e.indexOf("random(")?R5(e):e},Vr=tn+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",jr={};C3(Vr+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return jr[o]=1});var e3=function(o){lr(e,o);function e(n,i,a,s){var l;typeof i=="number"&&(a.duration=i,i=a,a=null),l=o.call(this,s?i:x5(i))||this;var u=l.vars,d=u.duration,f=u.delay,h=u.immediateRender,p=u.stagger,g=u.overwrite,y=u.keyframes,v=u.defaults,_=u.scrollTrigger,S=u.yoyoEase,x=i.parent||L2,M=(_3(n)||dr(n)?V4(n[0]):"length"in i)?[n]:K3(n),b,C,w,I,T,E,z,W;if(l._targets=M.length?nn(M):G8("GSAP target "+n+" not found. https://greensock.com",!F3.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||p||C8(d)||C8(f)){if(i=l.vars,b=l.timeline=new S3({data:"nested",defaults:v||{},targets:x&&x.data==="nested"?x.vars.targets:M}),b.kill(),b.parent=b._dp=O4(l),b._start=0,p||C8(d)||C8(f)){if(I=M.length,z=p&&Dr(p),S4(p))for(T in p)~Vr.indexOf(T)&&(W||(W={}),W[T]=p[T]);for(C=0;C<I;C++)w=j8(i,jr),w.stagger=0,S&&(w.yoyoEase=S),W&&$0(w,W),E=M[C],w.duration=+M5(d,O4(l),C,E,M),w.delay=(+M5(f,O4(l),C,E,M)||0)-l._delay,!p&&I===1&&w.delay&&(l._delay=f=w.delay,l._start+=f,w.delay=0),b.to(E,w,z?z(C,E,M):0),b._ease=h2.none;b.duration()?d=f=0:l.timeline=0}else if(y){x5(o4(b.vars.defaults,{ease:"none"})),b._ease=V0(y.ease||i.ease||"none");var X=0,B,O,F;if(_3(y))y.forEach(function(Y){return b.to(M,Y,">")}),b.duration();else{w={};for(T in y)T==="ease"||T==="easeEach"||XD(T,y[T],w,y.easeEach);for(T in w)for(B=w[T].sort(function(Y,H){return Y.t-H.t}),X=0,C=0;C<B.length;C++)O=B[C],F={ease:O.e,duration:(O.t-(C?B[C-1].t:0))/100*d},F[T]=O.v,b.to(M,F,X),X+=F.duration;b.duration()<d&&b.to({},{duration:d-b.duration()})}}d||l.duration(d=b.duration())}else l.timeline=0;return g===!0&&!qt&&(o0=O4(l),L2.killTweensOf(M),o0=0),v4(x,O4(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(h||!d&&!y&&l._start===l3(x._time)&&w3(h)&&TD(O4(l))&&x.data!=="nested")&&(l._tTime=-M2,l.render(Math.max(0,-f)||0)),_&&wr(O4(l),_),l}var t=e.prototype;return t.render=function(i,a,s){var l=this._time,u=this._tDur,d=this._dur,f=i<0,h=i>u-M2&&!f?u:i<M2?0:i,p,g,y,v,_,S,x,M,b;if(!d)DD(this,i,a,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(p=h,M=this.timeline,this._repeat){if(v=d+this._rDelay,this._repeat<-1&&f)return this.totalTime(v*100+i,a,s);if(p=l3(h%v),h===u?(y=this._repeat,p=d):(y=~~(h/v),y&&y===h/v&&(p=d,y--),p>d&&(p=d)),S=this._yoyo&&y&1,S&&(b=this._yEase,p=d-p),_=W9(this._tTime,v),p===l&&!s&&this._initted)return this._tTime=h,this;y!==_&&(M&&this._yEase&&Nr(M,S),this.vars.repeatRefresh&&!S&&!this._lock&&(this._lock=s=1,this.render(l3(v*y),!0).invalidate()._lock=0))}if(!this._initted){if(Cr(this,f?i:p,s,a,h))return this._tTime=0,this;if(l!==this._time)return this;if(d!==this._dur)return this.render(i,a,s)}if(this._tTime=h,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(b||this._ease)(p/d),this._from&&(this.ratio=x=1-x),p&&!l&&!a&&(e4(this,"onStart"),this._tTime!==h))return this;for(g=this._pt;g;)g.r(x,g.d),g=g._next;M&&M.render(i<0?i:!p&&S?-M2:M._dur*M._ease(p/this._dur),a,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(f&&Ce(this,i,a,s),e4(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!a&&this.parent&&e4(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&Ce(this,i,!0,!0),(i||!d)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&p0(this,1),!a&&!(f&&!l)&&(h||l||S)&&(e4(this,h===u?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,a,s,l){I5||U3.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||an(this,u),d=this._ease(u/this._dur),ZD(this,i,a,s,l,d,u)?this.resetTo(i,a,s,l):(r6(this,0),this.parent||Mr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?m5(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,o0&&o0.vars.overwrite!==!0)._first||m5(this),this.parent&&s!==this.timeline.totalDuration()&&H9(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,u=i?K3(i):l,d=this._ptLookup,f=this._pt,h,p,g,y,v,_,S;if((!a||a==="all")&&wD(l,u))return a==="all"&&(this._pt=0),m5(this);for(h=this._op=this._op||[],a!=="all"&&(s3(a)&&(v={},C3(a,function(x){return v[x]=1}),a=v),a=qD(l,a)),S=l.length;S--;)if(~u.indexOf(l[S])){p=d[S],a==="all"?(h[S]=a,y=p,g={}):(g=h[S]=h[S]||{},y=a);for(v in y)_=p&&p[v],_&&((!("kill"in _.d)||_.d.kill(v)===!0)&&o6(this,_,"_pt"),delete p[v]),g!=="all"&&(g[v]=1)}return this._initted&&!this._pt&&f&&m5(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return S5(1,arguments)},e.delayedCall=function(i,a,s,l){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(i,a,s){return S5(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,s){return L2.killTweensOf(i,a,s)},e}(Y9);o4(e3.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});C3("staggerTo,staggerFrom,staggerFromTo",function(o){e3[o]=function(){var e=new S3,t=Ee.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var rn=function(e,t,n){return e[t]=n},Wr=function(e,t,n){return e[t](n)},QD=function(e,t,n,i){return e[t](i.fp,n)},KD=function(e,t,n){return e.setAttribute(t,n)},sn=function(e,t){return B2(e[t])?Wr:Xt(e[t])&&e.setAttribute?KD:rn},Hr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},eR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$r=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ln=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},tR=function(e,t,n,i){for(var a=this._pt,s;a;)s=a._next,a.p===i&&a.modifier(e,t,n),a=s},nR=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?o6(this,t,"_pt"):t.dep||(n=1),t=i;return!n},iR=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yr=function(e){for(var t=e._pt,n,i,a,s;t;){for(n=t._next,i=a;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:a=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=a},T3=function(){function o(t,n,i,a,s,l,u,d,f){this.t=n,this.s=a,this.c=s,this.p=i,this.r=l||Hr,this.d=u||this,this.set=d||rn,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,a){this.mSet=this.mSet||this.set,this.set=iR,this.m=n,this.mt=a,this.tween=i},o}();C3(tn+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return en[o]=1});B3.TweenMax=B3.TweenLite=e3;B3.TimelineLite=B3.TimelineMax=S3;L2=new S3({sortChildren:!1,defaults:j9,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});F3.stringFilter=kr;var J9=[],L8={},oR=[],mo=0,l7=function(e){return(L8[e]||oR).map(function(t){return t()})},Oe=function(){var e=Date.now(),t=[];e-mo>2&&(l7("matchMediaInit"),J9.forEach(function(n){var i=n.queries,a=n.conditions,s,l,u,d;for(l in i)s=J3.matchMedia(i[l]).matches,s&&(u=1),s!==a[l]&&(a[l]=s,d=1);d&&(n.revert(),u&&t.push(n))}),l7("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),mo=e,l7("matchMedia"))},Jr=function(){function o(t,n){this.selector=n&&De(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,a){B2(n)&&(a=i,i=n,n=B2);var s=this,l=function(){var d=Z2,f=s.selector,h;return d&&d!==s&&d.data.push(s),a&&(s.selector=De(a)),Z2=s,h=i.apply(s,arguments),B2(h)&&s._r.push(h),Z2=d,s.selector=f,s.isReverted=!1,h};return s.last=l,n===B2?l(s):n?s[n]=l:l},e.ignore=function(n){var i=Z2;Z2=null,n(this),Z2=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof e3&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var a=this;if(n){var s=this.getTweens();this.data.forEach(function(u){u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}))}),s.map(function(u){return{g:u.globalTime(0),t:u}}).sort(function(u,d){return d.g-u.g||-1}).forEach(function(u){return u.t.revert(n)}),this.data.forEach(function(u){return!(u instanceof Y9)&&u.revert&&u.revert(n)}),this._r.forEach(function(u){return u(n,a)}),this.isReverted=!0}else this.data.forEach(function(u){return u.kill&&u.kill()});if(this.clear(),i){var l=J9.indexOf(this);~l&&J9.splice(l,1)}},e.revert=function(n){this.kill(n||{})},o}(),aR=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,a){S4(n)||(n={matches:n});var s=new Jr(0,a||this.scope),l=s.conditions={},u,d,f;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(d in n)d==="all"?f=1:(u=J3.matchMedia(n[d]),u&&(J9.indexOf(s)<0&&J9.push(s),(l[d]=u.matches)&&(f=1),u.addListener?u.addListener(Oe):u.addEventListener("change",Oe)));return f&&i(s),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),H8={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return BD(i)})},timeline:function(e){return new S3(e)},getTweensOf:function(e,t){return L2.getTweensOf(e,t)},getProperty:function(e,t,n,i){s3(e)&&(e=K3(e)[0]);var a=B0(e||{}).get,s=n?Sr:xr;return n==="native"&&(n=""),e&&(t?s((k3[t]&&k3[t].get||a)(e,t,n,i)):function(l,u,d){return s((k3[l]&&k3[l].get||a)(e,l,u,d))})},quickSetter:function(e,t,n){if(e=K3(e),e.length>1){var i=e.map(function(f){return G3.quickSetter(f,t,n)}),a=i.length;return function(f){for(var h=a;h--;)i[h](f)}}e=e[0]||{};var s=k3[t],l=B0(e),u=l.harness&&(l.harness.aliases||{})[t]||t,d=s?function(f){var h=new s;I9._pt=0,h.init(e,n?f+n:f,I9,0,[e]),h.render(1,h),I9._pt&&ln(1,I9)}:l.set(e,u);return s?d:function(f){return d(e,u,n?f+n:f,l,1)}},quickTo:function(e,t,n){var i,a=G3.to(e,$0((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),s=function(u,d,f){return a.resetTo(t,u,d,f)};return s.tween=a,s},isTweening:function(e){return L2.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=V0(e.ease,j9.ease)),uo(j9,e||{})},config:function(e){return uo(F3,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,a=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!k3[l]&&!B3[l]&&G8(t+" effect requires "+l+" plugin.")}),o7[t]=function(l,u,d){return n(K3(l),o4(u||{},a),d)},s&&(S3.prototype[t]=function(l,u,d){return this.add(o7[t](l,S4(u)?u:(d=u)&&{},this),d)})},registerEase:function(e,t){h2[e]=V0(t)},parseEase:function(e,t){return arguments.length?V0(e,t):h2},getById:function(e){return L2.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new S3(e),i,a;for(n.smoothChildTiming=w3(e.smoothChildTiming),L2.remove(n),n._dp=0,n._time=n._tTime=L2._time,i=L2._first;i;)a=i._next,(t||!(!i._dur&&i instanceof e3&&i.vars.onComplete===i._targets[0]))&&v4(n,i,i._start-i._delay),i=a;return v4(L2,n,0),n},context:function(e,t){return e?new Jr(e,t):Z2},matchMedia:function(e){return new aR(e)},matchMediaRefresh:function(){return J9.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oe()},addEventListener:function(e,t){var n=L8[e]||(L8[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=L8[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:UD,wrapYoyo:ND,distribute:Dr,random:Ir,snap:Rr,normalize:kD,getUnit:g3,clamp:OD,splitColor:zr,toArray:K3,selector:De,mapRange:Lr,pipe:zD,unitize:PD,interpolate:FD,shuffle:Er},install:gr,effects:o7,ticker:U3,updateRoot:S3.updateRoot,plugins:k3,globalTimeline:L2,core:{PropTween:T3,globals:vr,Tween:e3,Timeline:S3,Animation:Y9,getCache:B0,_removeLinkedListItem:o6,reverting:function(){return A3},context:function(e){return e&&Z2&&(Z2.data.push(e),e._ctx=Z2),Z2},suppressOverwrites:function(e){return qt=e}}};C3("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return H8[o]=e3[o]});U3.add(S3.updateRoot);I9=H8.to({},{duration:0});var rR=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},sR=function(e,t){var n=e._targets,i,a,s;for(i in t)for(a=n.length;a--;)s=e._ptLookup[a][i],s&&(s=s.d)&&(s._pt&&(s=rR(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[a],i))},u7=function(e,t){return{name:e,rawVars:1,init:function(i,a,s){s._onInit=function(l){var u,d;if(s3(a)&&(u={},C3(a,function(f){return u[f]=1}),a=u),t){u={};for(d in a)u[d]=t(a[d]);a=u}sR(l,a)}}}},G3=H8.registerPlugin({name:"attr",init:function(e,t,n,i,a){var s,l,u;this.tween=n;for(s in t)u=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(u||0)+"",t[s],i,a,0,0,s),l.op=s,l.b=u,this._props.push(s)},render:function(e,t){for(var n=t._pt;n;)A3?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},u7("roundProps",Re),u7("modifiers"),u7("snap",Rr))||H8;e3.version=S3.version=G3.version="3.11.3";mr=1;cr()&&$9();h2.Power0;h2.Power1;h2.Power2;h2.Power3;h2.Power4;h2.Linear;h2.Quad;h2.Cubic;h2.Quart;h2.Quint;h2.Strong;h2.Elastic;h2.Back;h2.SteppedEase;h2.Bounce;h2.Sine;h2.Expo;h2.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var go,a0,P9,un,P0,vo,cn,lR=function(){return typeof window!="undefined"},j4={},R0=180/Math.PI,k9=Math.PI/180,b9=Math.atan2,_o=1e8,dn=/([A-Z])/g,uR=/(left|right|width|margin|padding|x)/i,cR=/[\s,\(]\S/,U4={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Le=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pR=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qr=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},hR=function(e,t,n){return e.style[t]=n},mR=function(e,t,n){return e.style.setProperty(t,n)},gR=function(e,t,n){return e._gsap[t]=n},vR=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_R=function(e,t,n,i,a){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(a,s)},yR=function(e,t,n,i,a){var s=e._gsap;s[t]=n,s.renderTransform(a,s)},z2="transform",f4=z2+"Origin",bR=function(e,t){var n=this,i=this.target,a=i.style;if(e in j4){if(this.tfm=this.tfm||{},e!=="transform"&&(e=U4[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return n.tfm[s]=z4(i,s)}):this.tfm[e]=i._gsap.x?i._gsap[e]:z4(i,e)),this.props.indexOf(z2)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(f4,t,"")),e=z2}(a||t)&&this.props.push(e,t,a[e])},Xr=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xR=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,a,s;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].replace(dn,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=cn(),a&&!a.isStart&&!n[z2]&&(Xr(n),i.uncache=1)}},Qr=function(e,t){var n={target:e,props:[],revert:xR,save:bR};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Kr,ze=function(e,t){var n=a0.createElementNS?a0.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):a0.createElement(e);return n.style?n:a0.createElement(e)},x4=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(dn,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Z9(t)||t,1)||""},yo="O,Moz,ms,Ms,Webkit".split(","),Z9=function(e,t,n){var i=t||P0,a=i.style,s=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(yo[s]+e in a););return s<0?null:(s===3?"ms":s>=0?yo[s]:"")+e},Pe=function(){lR()&&window.document&&(go=window,a0=go.document,P9=a0.documentElement,P0=ze("div")||{style:{}},ze("div"),z2=Z9(z2),f4=z2+"Origin",P0.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kr=!!Z9("perspective"),cn=G3.core.reverting,un=1)},c7=function o(e){var t=ze("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText,s;if(P9.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch(l){}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),P9.removeChild(t),this.style.cssText=a,s},bo=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},es=function(e){var t;try{t=e.getBBox()}catch(n){t=c7.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===c7||(t=c7.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+bo(e,["x","cx","x1"])||0,y:+bo(e,["y","cy","y1"])||0,width:0,height:0}:t},ts=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&es(e))},O5=function(e,t){if(t){var n=e.style;t in j4&&t!==f4&&(t=z2),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(dn,"-$1").toLowerCase())):n.removeAttribute(t)}},r0=function(e,t,n,i,a,s){var l=new T3(e._pt,t,n,0,1,s?qr:Zr);return e._pt=l,l.b=i,l.e=a,e._props.push(n),l},xo={deg:1,rad:1,turn:1},SR={grid:1,flex:1},h0=function o(e,t,n,i){var a=parseFloat(n)||0,s=(n+"").trim().substr((a+"").length)||"px",l=P0.style,u=uR.test(t),d=e.tagName.toLowerCase()==="svg",f=(d?"client":"offset")+(u?"Width":"Height"),h=100,p=i==="px",g=i==="%",y,v,_,S;return i===s||!a||xo[i]||xo[s]?a:(s!=="px"&&!p&&(a=o(e,t,n,"px")),S=e.getCTM&&ts(e),(g||s==="%")&&(j4[t]||~t.indexOf("adius"))?(y=S?e.getBBox()[u?"width":"height"]:e[f],V2(g?a/y*h:a/100*y)):(l[u?"width":"height"]=h+(p?s:i),v=~t.indexOf("adius")||i==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===a0||!v.appendChild)&&(v=a0.body),_=v._gsap,_&&g&&_.width&&u&&_.time===U3.time&&!_.uncache?V2(a/_.width*h):((g||s==="%")&&!SR[x4(v,"display")]&&(l.position=x4(e,"position")),v===e&&(l.position="static"),v.appendChild(P0),y=P0[f],v.removeChild(P0),l.position="absolute",u&&g&&(_=B0(v),_.time=U3.time,_.width=v[f]),V2(p?y*a/h:y&&a?h/y*a:0))))},z4=function(e,t,n,i){var a;return un||Pe(),t in U4&&t!=="transform"&&(t=U4[t],~t.indexOf(",")&&(t=t.split(",")[0])),j4[t]&&t!=="transform"?(a=z5(e,i),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Y8(x4(e,f4))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=$8[t]&&$8[t](e,t,n)||x4(e,t)||yr(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?h0(e,t,a,n)+n:a},MR=function(e,t,n,i){if(!n||n==="none"){var a=Z9(t,e,1),s=a&&x4(e,a,1);s&&s!==n?(t=a,n=s):t==="borderColor"&&(n=x4(e,"borderTopColor"))}var l=new T3(this._pt,e.style,t,0,1,$r),u=0,d=0,f,h,p,g,y,v,_,S,x,M,b,C;if(l.b=n,l.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=x4(e,t)||i,e.style[t]=n),f=[n,i],kr(f),n=f[0],i=f[1],p=n.match(R9)||[],C=i.match(R9)||[],C.length){for(;h=R9.exec(i);)_=h[0],x=i.substring(u,h.index),y?y=(y+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(y=1),_!==(v=p[d++]||"")&&(g=parseFloat(v)||0,b=v.substr((g+"").length),_.charAt(1)==="="&&(_=z9(g,_)+b),S=parseFloat(_),M=_.substr((S+"").length),u=R9.lastIndex-M.length,M||(M=M||F3.units[t]||b,u===i.length&&(i+=M,l.e+=M)),b!==M&&(g=h0(e,t,v,M)||0),l._pt={_next:l._pt,p:x||d===1?x:",",s:g,c:S-g,m:y&&y<4||t==="zIndex"?Math.round:0});l.c=u<i.length?i.substring(u,i.length):""}else l.r=t==="display"&&i==="none"?qr:Zr;return pr.test(i)&&(l.e=0),this._pt=l,l},So={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AR=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=So[n]||n,t[1]=So[i]||i,t.join(" ")},wR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,a=t.u,s=n._gsap,l,u,d;if(a==="all"||a===!0)i.cssText="",u=1;else for(a=a.split(","),d=a.length;--d>-1;)l=a[d],j4[l]&&(u=1,l=l==="transformOrigin"?f4:z2),O5(n,l);u&&(O5(n,z2),s&&(s.svg&&n.removeAttribute("transform"),z5(n,1),s.uncache=1,Xr(i)))}},$8={clearProps:function(e,t,n,i,a){if(a.data!=="isFromStart"){var s=e._pt=new T3(e._pt,t,n,0,0,wR);return s.u=i,s.pr=-10,s.tween=a,e._props.push(n),1}}},L5=[1,0,0,1,0,0],ns={},is=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mo=function(e){var t=x4(e,z2);return is(t)?L5:t.substr(7).match(fr).map(V2)},fn=function(e,t){var n=e._gsap||B0(e),i=e.style,a=Mo(e),s,l,u,d;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?L5:a):(a===L5&&!e.offsetParent&&e!==P9&&!n.svg&&(u=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(d=1,l=e.nextElementSibling,P9.appendChild(e)),a=Mo(e),u?i.display=u:O5(e,"display"),d&&(l?s.insertBefore(e,l):s?s.appendChild(e):P9.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},ke=function(e,t,n,i,a,s){var l=e._gsap,u=a||fn(e,!0),d=l.xOrigin||0,f=l.yOrigin||0,h=l.xOffset||0,p=l.yOffset||0,g=u[0],y=u[1],v=u[2],_=u[3],S=u[4],x=u[5],M=t.split(" "),b=parseFloat(M[0])||0,C=parseFloat(M[1])||0,w,I,T,E;n?u!==L5&&(I=g*_-y*v)&&(T=b*(_/I)+C*(-v/I)+(v*x-_*S)/I,E=b*(-y/I)+C*(g/I)-(g*x-y*S)/I,b=T,C=E):(w=es(e),b=w.x+(~M[0].indexOf("%")?b/100*w.width:b),C=w.y+(~(M[1]||M[0]).indexOf("%")?C/100*w.height:C)),i||i!==!1&&l.smooth?(S=b-d,x=C-f,l.xOffset=h+(S*g+x*v)-S,l.yOffset=p+(S*y+x*_)-x):l.xOffset=l.yOffset=0,l.xOrigin=b,l.yOrigin=C,l.smooth=!!i,l.origin=t,l.originIsAbsolute=!!n,e.style[f4]="0px 0px",s&&(r0(s,l,"xOrigin",d,b),r0(s,l,"yOrigin",f,C),r0(s,l,"xOffset",h,l.xOffset),r0(s,l,"yOffset",p,l.yOffset)),e.setAttribute("data-svg-origin",b+" "+C)},z5=function(e,t){var n=e._gsap||new Br(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,a=n.scaleX<0,s="px",l="deg",u=getComputedStyle(e),d=x4(e,f4)||"0",f,h,p,g,y,v,_,S,x,M,b,C,w,I,T,E,z,W,X,B,O,F,Y,H,U,k,G,i1,q,$,n1,r1;return f=h=p=v=_=S=x=M=b=0,g=y=1,n.svg=!!(e.getCTM&&ts(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[z2]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[z2]!=="none"?u[z2]:"")),i.scale=i.rotate=i.translate="none"),I=fn(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),d=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ke(e,H||d,!!H||n.originIsAbsolute,n.smooth!==!1,I)),C=n.xOrigin||0,w=n.yOrigin||0,I!==L5&&(W=I[0],X=I[1],B=I[2],O=I[3],f=F=I[4],h=Y=I[5],I.length===6?(g=Math.sqrt(W*W+X*X),y=Math.sqrt(O*O+B*B),v=W||X?b9(X,W)*R0:0,x=B||O?b9(B,O)*R0+v:0,x&&(y*=Math.abs(Math.cos(x*k9))),n.svg&&(f-=C-(C*W+w*B),h-=w-(C*X+w*O))):(r1=I[6],$=I[7],G=I[8],i1=I[9],q=I[10],n1=I[11],f=I[12],h=I[13],p=I[14],T=b9(r1,q),_=T*R0,T&&(E=Math.cos(-T),z=Math.sin(-T),H=F*E+G*z,U=Y*E+i1*z,k=r1*E+q*z,G=F*-z+G*E,i1=Y*-z+i1*E,q=r1*-z+q*E,n1=$*-z+n1*E,F=H,Y=U,r1=k),T=b9(-B,q),S=T*R0,T&&(E=Math.cos(-T),z=Math.sin(-T),H=W*E-G*z,U=X*E-i1*z,k=B*E-q*z,n1=O*z+n1*E,W=H,X=U,B=k),T=b9(X,W),v=T*R0,T&&(E=Math.cos(T),z=Math.sin(T),H=W*E+X*z,U=F*E+Y*z,X=X*E-W*z,Y=Y*E-F*z,W=H,F=U),_&&Math.abs(_)+Math.abs(v)>359.9&&(_=v=0,S=180-S),g=V2(Math.sqrt(W*W+X*X+B*B)),y=V2(Math.sqrt(Y*Y+r1*r1)),T=b9(F,Y),x=Math.abs(T)>2e-4?T*R0:0,b=n1?1/(n1<0?-n1:n1):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!is(x4(e,z2)),H&&e.setAttribute("transform",H))),Math.abs(x)>90&&Math.abs(x)<270&&(a?(g*=-1,x+=v<=0?180:-180,v+=v<=0?180:-180):(y*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=p+s,n.scaleX=V2(g),n.scaleY=V2(y),n.rotation=V2(v)+l,n.rotationX=V2(_)+l,n.rotationY=V2(S)+l,n.skewX=x+l,n.skewY=M+l,n.transformPerspective=b+s,(n.zOrigin=parseFloat(d.split(" ")[2])||0)&&(i[f4]=Y8(d)),n.xOffset=n.yOffset=0,n.force3D=F3.force3D,n.renderTransform=n.svg?TR:Kr?os:CR,n.uncache=0,n},Y8=function(e){return(e=e.split(" "))[0]+" "+e[1]},d7=function(e,t,n){var i=g3(t);return V2(parseFloat(t)+parseFloat(h0(e,"x",n+"px",i)))+i},CR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,os(e,t)},C0="0deg",u5="0px",T0=") ",os=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,l=n.y,u=n.z,d=n.rotation,f=n.rotationY,h=n.rotationX,p=n.skewX,g=n.skewY,y=n.scaleX,v=n.scaleY,_=n.transformPerspective,S=n.force3D,x=n.target,M=n.zOrigin,b="",C=S==="auto"&&e&&e!==1||S===!0;if(M&&(h!==C0||f!==C0)){var w=parseFloat(f)*k9,I=Math.sin(w),T=Math.cos(w),E;w=parseFloat(h)*k9,E=Math.cos(w),s=d7(x,s,I*E*-M),l=d7(x,l,-Math.sin(w)*-M),u=d7(x,u,T*E*-M+M)}_!==u5&&(b+="perspective("+_+T0),(i||a)&&(b+="translate("+i+"%, "+a+"%) "),(C||s!==u5||l!==u5||u!==u5)&&(b+=u!==u5||C?"translate3d("+s+", "+l+", "+u+") ":"translate("+s+", "+l+T0),d!==C0&&(b+="rotate("+d+T0),f!==C0&&(b+="rotateY("+f+T0),h!==C0&&(b+="rotateX("+h+T0),(p!==C0||g!==C0)&&(b+="skew("+p+", "+g+T0),(y!==1||v!==1)&&(b+="scale("+y+", "+v+T0),x.style[z2]=b||"translate(0, 0)"},TR=function(e,t){var n=t||this,i=n.xPercent,a=n.yPercent,s=n.x,l=n.y,u=n.rotation,d=n.skewX,f=n.skewY,h=n.scaleX,p=n.scaleY,g=n.target,y=n.xOrigin,v=n.yOrigin,_=n.xOffset,S=n.yOffset,x=n.forceCSS,M=parseFloat(s),b=parseFloat(l),C,w,I,T,E;u=parseFloat(u),d=parseFloat(d),f=parseFloat(f),f&&(f=parseFloat(f),d+=f,u+=f),u||d?(u*=k9,d*=k9,C=Math.cos(u)*h,w=Math.sin(u)*h,I=Math.sin(u-d)*-p,T=Math.cos(u-d)*p,d&&(f*=k9,E=Math.tan(d-f),E=Math.sqrt(1+E*E),I*=E,T*=E,f&&(E=Math.tan(f),E=Math.sqrt(1+E*E),C*=E,w*=E)),C=V2(C),w=V2(w),I=V2(I),T=V2(T)):(C=h,T=p,w=I=0),(M&&!~(s+"").indexOf("px")||b&&!~(l+"").indexOf("px"))&&(M=h0(g,"x",s,"px"),b=h0(g,"y",l,"px")),(y||v||_||S)&&(M=V2(M+y-(y*C+v*I)+_),b=V2(b+v-(y*w+v*T)+S)),(i||a)&&(E=g.getBBox(),M=V2(M+i/100*E.width),b=V2(b+a/100*E.height)),E="matrix("+C+","+w+","+I+","+T+","+M+","+b+")",g.setAttribute("transform",E),x&&(g.style[z2]=E)},ER=function(e,t,n,i,a){var s=360,l=s3(a),u=parseFloat(a)*(l&&~a.indexOf("rad")?R0:1),d=u-i,f=i+d+"deg",h,p;return l&&(h=a.split("_")[1],h==="short"&&(d%=s,d!==d%(s/2)&&(d+=d<0?s:-s)),h==="cw"&&d<0?d=(d+s*_o)%s-~~(d/s)*s:h==="ccw"&&d>0&&(d=(d-s*_o)%s-~~(d/s)*s)),e._pt=p=new T3(e._pt,t,n,i,d,dR),p.e=f,p.u="deg",e._props.push(n),p},Ao=function(e,t){for(var n in t)e[n]=t[n];return e},DR=function(e,t,n){var i=Ao({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",s=n.style,l,u,d,f,h,p,g,y;i.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),s[z2]=t,l=z5(n,1),O5(n,z2),n.setAttribute("transform",d)):(d=getComputedStyle(n)[z2],s[z2]=t,l=z5(n,1),s[z2]=d);for(u in j4)d=i[u],f=l[u],d!==f&&a.indexOf(u)<0&&(g=g3(d),y=g3(f),h=g!==y?h0(n,u,d,y):parseFloat(d),p=parseFloat(f),e._pt=new T3(e._pt,l,u,h,p-h,Le),e._pt.u=y||0,e._props.push(u));Ao(l,i)};C3("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",a="Left",s=(e<3?[t,n,i,a]:[t+a,t+n,i+n,i+a]).map(function(l){return e<2?o+l:"border"+l+o});$8[e>1?"border"+o:o]=function(l,u,d,f,h){var p,g;if(arguments.length<4)return p=s.map(function(y){return z4(l,y,d)}),g=p.join(" "),g.split(p[0]).length===5?p[0]:g;p=(f+"").split(" "),g={},s.forEach(function(y,v){return g[y]=p[v]=p[v]||p[(v-1)/2|0]}),l.init(u,g,h)}});var as={name:"css",register:Pe,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,a){var s=this._props,l=e.style,u=n.vars.startAt,d,f,h,p,g,y,v,_,S,x,M,b,C,w,I,T;un||Pe(),this.styles=this.styles||Qr(e),T=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(f=t[v],!(k3[v]&&Gr(v,t,n,i,e,a)))){if(g=typeof f,y=$8[v],g==="function"&&(f=f.call(n,i,e,a),g=typeof f),g==="string"&&~f.indexOf("random(")&&(f=R5(f)),y)y(this,e,v,f,n)&&(I=1);else if(v.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(v)+"").trim(),f+="",d0.lastIndex=0,d0.test(d)||(_=g3(d),S=g3(f)),S?_!==S&&(d=h0(e,v,d,S)+S):_&&(f+=_),this.add(l,"setProperty",d,f,i,a,0,0,v),s.push(v),T.push(v,0,l[v]);else if(g!=="undefined"){if(u&&v in u?(d=typeof u[v]=="function"?u[v].call(n,i,e,a):u[v],s3(d)&&~d.indexOf("random(")&&(d=R5(d)),g3(d+"")||(d+=F3.units[v]||g3(z4(e,v))||""),(d+"").charAt(1)==="="&&(d=z4(e,v))):d=z4(e,v),p=parseFloat(d),x=g==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),h=parseFloat(f),v in U4&&(v==="autoAlpha"&&(p===1&&z4(e,"visibility")==="hidden"&&h&&(p=0),T.push("visibility",0,l.visibility),r0(this,l,"visibility",p?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=U4[v],~v.indexOf(",")&&(v=v.split(",")[0]))),M=v in j4,M){if(this.styles.save(v),b||(C=e._gsap,C.renderTransform&&!t.parseTransform||z5(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,b=this._pt=new T3(this._pt,l,z2,0,1,C.renderTransform,C,0,-1),b.dep=1),v==="scale")this._pt=new T3(this._pt,C,"scaleY",p,(x?z9(p,x+h):h)-p||0,Le),this._pt.u=0,s.push("scaleY",v),v+="X";else if(v==="transformOrigin"){T.push(f4,0,l[f4]),f=AR(f),C.svg?ke(e,f,0,w,0,this):(S=parseFloat(f.split(" ")[2])||0,S!==C.zOrigin&&r0(this,C,"zOrigin",C.zOrigin,S),r0(this,l,v,Y8(d),Y8(f)));continue}else if(v==="svgOrigin"){ke(e,f,1,w,0,this);continue}else if(v in ns){ER(this,C,v,p,x?z9(p,x+f):f);continue}else if(v==="smoothOrigin"){r0(this,C,"smooth",C.smooth,f);continue}else if(v==="force3D"){C[v]=f;continue}else if(v==="transform"){DR(this,f,e);continue}}else v in l||(v=Z9(v)||v);if(M||(h||h===0)&&(p||p===0)&&!cR.test(f)&&v in l)_=(d+"").substr((p+"").length),h||(h=0),S=g3(f)||(v in F3.units?F3.units[v]:_),_!==S&&(p=h0(e,v,d,S)),this._pt=new T3(this._pt,M?C:l,v,p,(x?z9(p,x+h):h)-p,!M&&(S==="px"||v==="zIndex")&&t.autoRound!==!1?pR:Le),this._pt.u=S||0,_!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=fR);else if(v in l)MR.call(this,e,v,d,x?x+f:f);else if(v in e)this.add(e,v,d||e[v],x?x+f:f,i,a);else{Kt(v,f);continue}M||(v in l?T.push(v,0,l[v]):T.push(v,1,d||e[v])),s.push(v)}}I&&Yr(this)},render:function(e,t){if(t.tween._time||!cn())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:z4,aliases:U4,getSetter:function(e,t,n){var i=U4[t];return i&&i.indexOf(",")<0&&(t=i),t in j4&&t!==f4&&(e._gsap.x||z4(e,"x"))?n&&vo===n?t==="scale"?vR:gR:(vo=n||{})&&(t==="scale"?_R:yR):e.style&&!Xt(e.style[t])?hR:~t.indexOf("-")?mR:sn(e,t)},core:{_removeProperty:O5,_getMatrix:fn}};G3.utils.checkPrefix=Z9;G3.core.getStyleSaver=Qr;(function(o,e,t,n){var i=C3(o+","+e+","+t,function(a){j4[a]=1});C3(e,function(a){F3.units[a]="deg",ns[a]=1}),U4[i[13]]=o+","+e,C3(n,function(a){var s=a.split(":");U4[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");C3("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){F3.units[o]="px"});G3.registerPlugin(as);var rs=G3.registerPlugin(as)||G3;rs.core.Tween;function RR(o,e,t,n){const i=new R3,s=new Yt(0,0,o,e,t,!1).getSpacedPoints(100);i.setFromPoints(s);const l=[];for(let g=0;g<s.length;g++)l.push(g/s.length);const u=new N3(new Float32Array(l),1);i.attributes.percent=u;const d=[];for(let g=0;g<s.length;g++){const y=new _2(15503171),v=new _2(15969910),_=y.lerp(v,g/s.length);d.push(_.r,_.g,_.b)}i.attributes.color=new N3(new Float32Array(d),3);const f=1.3,h=new $t({size:f,transparent:!0,depthWrite:!1});h.onBeforeCompile=function(g){g.vertexShader=g.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),g.vertexShader=g.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`))};const p=new tr(i,h);return h.color=new _2(n),p.name="飞行线",p}function IR(o,e,t,n,i,a){const s=E5(o,e,t),l=new Z(s.x,s.y,s.z),u=E5(o,n,i),d=new Z(u.x,u.y,u.z),f=OR(l,d),h=LR(o,f.startPoint,f.endPoint,a);return h.quaternion.multiply(f.quaternion),h}function OR(o,e){const t=new Z(0,0,0),n=o.clone().sub(t),i=e.clone().sub(t),a=n.clone().cross(i).normalize(),s=new Z(0,0,1),l=new B4().setFromUnitVectors(a,s),u=o.clone().applyQuaternion(l),d=e.clone().applyQuaternion(l),h=u.clone().add(d).multiplyScalar(.5).clone().sub(t).normalize(),p=new Z(0,1,0),g=new B4().setFromUnitVectors(h,p),y=u.clone().applyQuaternion(g),v=d.clone().applyQuaternion(g);return{quaternion:l.clone().invert().multiply(g.clone().invert()),startPoint:y,endPoint:v}}function LR(o,e,t,n){const a=new Z().addVectors(e,t).multiplyScalar(.5).clone().normalize(),s=wo(e,t,new Z(0,0,0)),l=a.multiplyScalar(o+s*o*.2),u=PR(e,t,l),d=Math.abs(u.y-l.y),f=wo(e,new Z(0,-1,0),u),h=-Math.PI/2+f,p=Math.PI-h,g=zR(u.x,u.y,d,h,p,n.color);g.center=u,g.topCoord=l;const y=(p-h)/7,v=RR(d,h,h+y,n.flyLineColor);return v.position.y=u.y,g.add(v),v.flyEndAngle=p-h-y,v.startAngle=h,v.AngleZ=g.flyEndAngle*Math.random(),g.userData.flyLine=v,g}function wo(o,e,t){const n=o.clone().sub(t).normalize(),i=e.clone().sub(t).normalize(),a=n.clone().dot(i);return Math.acos(a)}function zR(o,e,t,n,i,a){const s=new R3,u=new Yt(o,e,t,n,i,!1).getSpacedPoints(80);s.setFromPoints(u);const d=new er({color:a||13731143});return new EE(s,d)}function PR(o,e,t){const n=o.lengthSq(),i=e.lengthSq(),a=t.lengthSq(),s=o.x,l=o.y,u=e.x,d=e.y,f=t.x,h=t.y,p=s*d+u*h+f*l-s*h-u*l-f*d,g=(i*h+n*d+a*l-i*l-a*d-n*h)/p/2,y=(a*u+i*s+n*f-n*u-i*f-a*s)/p/2;return new Z(g,y,0)}const kR=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vp;
varying vec3 vPositionNormal;
void main(void){
  vUv = uv;
  vNormal = normalize( normalMatrix * normal ); // 转换到视图空间
  vp = position;
  vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UR=`uniform vec3 glowColor;
uniform float bias;
uniform float power;
uniform float time;
varying vec3 vp;
varying vec3 vNormal;
varying vec3 vPositionNormal;
uniform float scale;
// 获取纹理
uniform sampler2D map;
// 纹理坐标
varying vec2 vUv;

void main(void){
  float a = pow( bias + scale * abs(dot(vNormal, vPositionNormal)), power );
  if(vp.y > time && vp.y < time + 20.0) {
    float t =  smoothstep(0.0, 0.8,  (1.0 - abs(0.5 - (vp.y - time) / 20.0)) / 3.0  );
    gl_FragColor = mix(gl_FragColor, vec4(glowColor, 1.0), t * t );
  }
  gl_FragColor = mix(gl_FragColor, vec4( glowColor, 1.0 ), a);
  float b = 0.8;
  gl_FragColor = gl_FragColor + texture2D( map, vUv );
}`;class NR{constructor(e){K(this,"group");K(this,"earthGroup");K(this,"around");K(this,"aroundPoints");K(this,"options");K(this,"uniforms");K(this,"timeValue");K(this,"earth");K(this,"punctuationMaterial");K(this,"markupPoint");K(this,"waveMeshArr");K(this,"circleLineList");K(this,"circleList");K(this,"x");K(this,"n");K(this,"isRotation");K(this,"flyLineArcGroup");this.options=e,this.group=new k4,this.group.name="group",this.group.scale.set(0,0,0),this.earthGroup=new k4,this.group.add(this.earthGroup),this.earthGroup.name="EarthGroup",this.markupPoint=new k4,this.markupPoint.name="markupPoint",this.waveMeshArr=[],this.circleLineList=[],this.circleList=[],this.x=0,this.n=0,this.isRotation=this.options.earth.isRotation,this.timeValue=200,this.uniforms={glowColor:{value:new _2(840171)},scale:{type:"f",value:-1},bias:{type:"f",value:1},power:{type:"f",value:3.3},time:{type:"f",value:this.timeValue},isHover:{value:!1},map:{value:void 0}}}init(){return O2(this,null,function*(){return new Promise(e=>{(()=>O2(this,null,function*(){this.createEarth(),this.createEarthGlow(),this.createEarthAperture(),yield this.createMarkupPoint(),this.createAnimateCircle(),this.createFlyLine(),this.show(),e()}))()})})}createEarth(){const e=new t0(this.options.earth.radius,50,50),t=new t0(this.options.earth.radius+10,60,60),n=new $t({color:8519679,transparent:!0,sizeAttenuation:!0,opacity:.1,vertexColors:!1,size:.2}),i=new tr(t,n);this.earthGroup.add(i),this.uniforms.map.value=this.options.textures.earth;const a=new G4({uniforms:this.uniforms,vertexShader:kR,fragmentShader:UR});a.needsUpdate=!0,this.earth=new u3(e,a),this.earth.name="earth",this.earthGroup.add(this.earth)}createEarthGlow(){const e=this.options.earth.radius,t=this.options.textures.glow,n=new Qa({map:t,color:4427985,transparent:!0,opacity:.7,depthWrite:!1}),i=new TE(n);i.scale.set(e*3,e*3,1),this.earthGroup.add(i)}createEarthAperture(){const e=["varying vec3	vVertexWorldPosition;","varying vec3	vVertexNormal;","varying vec4	vFragColor;","void main(){","	vVertexNormal	= normalize(normalMatrix * normal);","	vVertexWorldPosition	= (modelMatrix * vec4(position, 1.0)).xyz;","	// set gl_Position","	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),t={uniforms:{coeficient:{type:"f",value:1},power:{type:"f",value:3},glowColor:{type:"c",value:new _2(4427985)}},vertexShader:e,fragmentShader:["uniform vec3	glowColor;","uniform float	coeficient;","uniform float	power;","varying vec3	vVertexNormal;","varying vec3	vVertexWorldPosition;","varying vec4	vFragColor;","void main(){","	vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;","	vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;","	viewCameraToVertex= normalize(viewCameraToVertex);","	float intensity	= pow(coeficient + dot(vVertexNormal, viewCameraToVertex), power);","	gl_FragColor = vec4(glowColor, intensity);","}"].join(`
`)},n=new G4({uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,blending:U0,transparent:!0,depthWrite:!1}),i=new t0(this.options.earth.radius+0,50,50),a=new u3(i,n);this.earthGroup.add(a)}createMarkupPoint(){return O2(this,null,function*(){yield Promise.all(this.options.data.map(e=>O2(this,null,function*(){const t=this.options.earth.radius,n=e.startArray.E,i=e.startArray.N;this.punctuationMaterial=new P4({color:this.options.punctuation.circleColor,map:this.options.textures.label,transparent:!0,depthWrite:!1});const a=so({radius:t,lon:n,lat:i,material:this.punctuationMaterial});this.markupPoint.add(a);const s=ro({radius:this.options.earth.radius,lon:n,lat:i,index:0,textures:this.options.textures,punctuation:this.options.punctuation});this.markupPoint.add(s);const l=ao({radius:t,lon:n,lat:i,textures:this.options.textures});this.markupPoint.add(l),this.waveMeshArr.push(l),yield Promise.all(e.endArray.map(u=>{const d=u.E,f=u.N,h=so({radius:t,lon:d,lat:f,material:this.punctuationMaterial});this.markupPoint.add(h);const p=ro({radius:this.options.earth.radius,lon:d,lat:f,index:1,textures:this.options.textures,punctuation:this.options.punctuation});this.markupPoint.add(p);const g=ao({radius:t,lon:d,lat:f,textures:this.options.textures});this.markupPoint.add(g),this.waveMeshArr.push(g)})),this.earthGroup.add(this.markupPoint)})))})}createAnimateCircle(){const e=hD({radius:this.options.earth.radius+15,number:150,closed:!0}),t=new P4({color:"#0c3172",transparent:!0,opacity:.4,side:_4}),n=mD({pointList:e,material:t,number:100,radius:.1});this.earthGroup.add(n);const i=n.clone();i.scale.set(1.2,1.2,1.2),i.rotateZ(Math.PI/6),this.earthGroup.add(i);const a=n.clone();a.scale.set(.8,.8,.8),a.rotateZ(-Math.PI/6),this.earthGroup.add(a);const s=new u3(new t0(this.options.satellite.size,32,32),new P4({color:"#e0b187"})),l=new u3(new t0(this.options.satellite.size,32,32),new P4({color:"#628fbb"})),u=new u3(new t0(this.options.satellite.size,32,32),new P4({color:"#806bdf"}));this.circleLineList.push(n,i,a),s.name=l.name=u.name="卫星";for(let d=0;d<this.options.satellite.number;d++){const f=s.clone(),h=Math.floor(e.length/this.options.satellite.number);f.position.set(e[h*(d+1)][0]*1,e[h*(d+1)][1]*1,e[h*(d+1)][2]*1),n.add(f);const p=l.clone(),g=Math.floor(e.length/this.options.satellite.number);p.position.set(e[g*(d+1)][0]*1,e[g*(d+1)][1]*1,e[g*(d+1)][2]*1),i.add(p);const y=l.clone(),v=Math.floor(e.length/this.options.satellite.number);y.position.set(e[v*(d+1)][0]*1,e[v*(d+1)][1]*1,e[v*(d+1)][2]*1),a.add(y)}}createFlyLine(){this.flyLineArcGroup=new k4,this.flyLineArcGroup.userData.flyLineArray=[],this.earthGroup.add(this.flyLineArcGroup),this.options.data.forEach(e=>{e.endArray.forEach(t=>{const n=IR(this.options.earth.radius,e.startArray.E,e.startArray.N,t.E,t.N,this.options.flyLine);this.flyLineArcGroup.add(n),this.flyLineArcGroup.userData.flyLineArray.push(n.userData.flyLine)})})}show(){rs.to(this.group.scale,{x:1,y:1,z:1,duration:2,ease:"Quadratic"})}render(){var e,t;(t=(e=this.flyLineArcGroup)==null?void 0:e.userData.flyLineArray)==null||t.forEach(n=>{n.rotation.z+=this.options.flyLine.speed,n.rotation.z>=n.flyEndAngle&&(n.rotation.z=0)}),this.isRotation&&(this.earthGroup.rotation.y+=this.options.earth.rotateSpeed),this.circleLineList.forEach(n=>{n.rotateY(this.options.satellite.rotateSpeed)}),this.uniforms.time.value=this.uniforms.time.value<-this.timeValue?this.timeValue:this.uniforms.time.value-1,this.waveMeshArr.length&&this.waveMeshArr.forEach(n=>{n.userData.scale+=.007,n.scale.set(n.userData.size*n.userData.scale,n.userData.size*n.userData.scale,n.userData.size*n.userData.scale),n.userData.scale<=1.5?n.material.opacity=(n.userData.scale-1)*2:n.userData.scale>1.5&&n.userData.scale<=2?n.material.opacity=1-(n.userData.scale-1.5)*2:n.userData.scale=1})}}class FR{constructor(e){K(this,"basic");K(this,"scene");K(this,"camera");K(this,"renderer");K(this,"controls");K(this,"material");K(this,"resources");K(this,"option");K(this,"earth");this.option=e,this.basic=new YE(e.dom),this.scene=this.basic.scene,this.renderer=this.basic.renderer,this.controls=this.basic.controls,this.camera=this.basic.camera,this.updateSize(),this.resources=new pD(()=>O2(this,null,function*(){yield this.createEarth(),this.render()}))}createEarth(e){return O2(this,null,function*(){this.earth=new NR({data:e||this.option.data,dom:this.option.dom,textures:this.resources.textures,earth:{radius:50,rotateSpeed:.002,isRotation:!0},satellite:{show:!0,rotateSpeed:-.01,size:1,number:2},punctuation:{circleColor:3707647,lightColumn:{startColor:14942335,endColor:16777215}},flyLine:{color:15969910,flyLineColor:16742164,speed:.004}}),this.scene.add(this.earth.group),yield this.earth.init()})}render(){requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera),this.controls&&this.controls.update(),this.earth&&this.earth.render()}updateSize(e,t){let n=e||this.option.width,i=t||this.option.height;n<i?i=n:n=i,this.renderer.setSize(n,i),this.camera.aspect=n/i,this.camera.updateProjectionMatrix()}updateData(e){this.earth.group&&(this.scene.remove(this.earth.group),this.earth.group.traverse(t=>{t.type==="Mesh"&&(t.geometry.dispose(),t.material.dispose())}),this.createEarth(e))}}const BR=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=q1(),n=H1(),{w:i,h:a}=S1(e.chartConfig.attr);let s;const l=()=>{const d=n.value;d&&(s=new FR({dom:d,data:e.chartConfig.option.dataset,width:i.value,height:a.value}))},u=d=>{try{s.updateData(d)}catch(f){console.log(f)}};return P1(()=>[i.value,a.value],P5(([d],[f])=>{s.updateSize(d,f)},100)),P1(()=>e.chartConfig.option.dataset,d=>{u(d)},{deep:!1}),g0(()=>{try{if(navigator.userAgent.indexOf("Chrome")<-1||navigator.userAgent.indexOf("Edg")<-1){window.$message.error("三维地图组件仅在【谷歌】浏览器上能正常展示！"),t.removeComponentList(void 0,!1);return}l()}catch(d){console.log(d)}}),p2(e.chartConfig,q1,u),(d,f)=>(R(),Q("div",{ref_key:"chartRef",ref:n},null,512))}}),GR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"})),VR=["icon","rotate","width"],jR=l1({__name:"index",props:{icon:{type:String,required:!0},color:{type:String,default:"#999999",required:!1},width:{type:[String,Number],default:"20",required:!1},rotate:{type:[String,Number],default:"0",required:!1}},setup(o){return(e,t)=>(R(),Q("iconify-icon",{icon:o.icon,rotate:`${o.rotate}deg`,width:o.width,style:f2({color:o.color})},null,12,VR))}}),WR={class:"go-icon-box"},HR=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(u=>({"3bc652fc":`${r(t)}px`,"3af2f26d":`${r(n)}px`}));const{w:t,h:n}=S1(e.chartConfig.attr),{dataset:i,color:a,size:s,rotate:l}=S1(e.chartConfig.option);return(u,d)=>(R(),Q("div",WR,[c(r(jR),{icon:r(i)||"",color:r(a),width:r(s),rotate:r(l)},null,8,["icon","color","width","rotate"])]))}});const $R=u2(HR,[["__scopeId","data-v-3b4ced5c"]]),YR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"}));var ss={exports:{}};(function(o,e){(function(t,n){o.exports=n()})(q8,function(){var t="month",n="quarter";return function(i,a){var s=a.prototype;s.quarter=function(d){return this.$utils().u(d)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(d-1))};var l=s.add;s.add=function(d,f){return d=Number(d),this.$utils().p(f)===n?this.add(3*d,t):l.bind(this)(d,f)};var u=s.startOf;s.startOf=function(d,f){var h=this.$utils(),p=!!h.u(f)||f;if(h.p(d)===n){var g=this.quarter()-1;return p?this.month(3*g).startOf(t).startOf("day"):this.month(3*g+2).endOf(t).endOf("day")}return u.bind(this)(d,f)}}})})(ss);var JR=ss.exports;const ZR=X8(JR),qR=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(u=>({"22ea0f84":r(n)+"px"}));const{w:t,h:n}=S1(e.chartConfig.attr);H1();const i=j3({dataset:e.chartConfig.option.dataset}),a=Z1(()=>e.chartConfig.option.componentInteractEventKey.endsWith("range")),s=u=>{if(a.value){let d=null,f=null,h=null;u instanceof Array&&(d=u[0],f=u[1],h=`${u[0]}-${u[1]}`),U9(e.chartConfig,q1,{[d5.DATE_START]:d,[d5.DATE_END]:f,[d5.DATE_RANGE]:h},p4.CHANGE)}else U9(e.chartConfig,q1,{[d5.DATE]:u},p4.CHANGE)},l=(u,d)=>{switch(_5.extend(ZR),u){case r3.DATE:case r3.DATE_RANGE:d=d.startOf("day");break;case r3.MONTH:case r3.MONTH_RANGE:d=d.startOf("month");break;case r3.YEAR:case r3.YEAR_RANGE:d=d.startOf("year");break;case r3.QUARTER:case r3.QUARTER_RANGE:d=d.startOf("quarter");break}return d};return P1(()=>({type:e.chartConfig.option.componentInteractEventKey,defaultType:e.chartConfig.option.defaultType,differValue:e.chartConfig.option.differValue,differUnit:e.chartConfig.option.differUnit,dataset:e.chartConfig.option.dataset}),(u,d)=>{const f=u.type!==(d==null?void 0:d.type),h=u.defaultType!==(d==null?void 0:d.defaultType),p=u.differValue!==(d==null?void 0:d.differValue),g=u.differUnit!==(d==null?void 0:d.differUnit);if(f||h||p||g){if(u.defaultType===L4.NONE)e.chartConfig.option.dataset=null;else if(u.defaultType===L4.DYNAMIC){let y=_5();a.value?e.chartConfig.option.dataset=[l(u.type,y.add(u.differValue[0],u.differUnit[0])).valueOf(),l(u.type,y.add(u.differValue[1],u.differUnit[1])).valueOf()]:e.chartConfig.option.dataset=l(u.type,y.add(u.differValue[0],u.differUnit[0])).valueOf()}}i.dataset=e.chartConfig.option.dataset,s(i.dataset)},{immediate:!0}),(u,d)=>{const f=L("n-date-picker");return R(),c1(f,{value:r(i).dataset,"onUpdate:value":[d[0]||(d[0]=h=>r(i).dataset=h),s],clearable:"",panel:!!o.chartConfig.option.isPanel,type:o.chartConfig.option.componentInteractEventKey,style:f2(`width:${r(t)}px;`)},null,8,["value","panel","type","style"])}}});const XR=u2(qR,[["__scopeId","data-v-62617a46"]]),QR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"}));var KR=(o=>(o.DATA="data",o))(KR||{}),ls=(o=>(o.DATA="data",o))(ls||{});const iU=[{interactType:p4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],eI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),i=j3({value:{inputValue:e.chartConfig.option.inputValue,dataset:e.chartConfig.option.dataset}}),a=s=>{s!=null&&U9(e.chartConfig,q1,{[ls.DATA]:s},p4.CHANGE)};return P1(()=>e.chartConfig.option,s=>{i.value=s,a(s.inputValue)},{immediate:!0,deep:!0}),(s,l)=>{const u=L("n-input");return R(),Q("div",null,[c(u,{style:f2(`width:${r(t)}px;`),type:"text",value:r(i).value.dataset,"onUpdate:value":l[0]||(l[0]=d=>r(i).value.dataset=d),placeholder:"请输入",onChange:a},null,8,["style","value"])])}}}),tI=Object.freeze(Object.defineProperty({__proto__:null,default:eI},Symbol.toStringTag,{value:"Module"}));var nI=(o=>(o.DATA="data",o))(nI||{}),Ue=(o=>(o.DATA="data",o.DATA2="data2",o))(Ue||{});const oU=[{interactType:p4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"页数"},{value:"data2",label:"每页条数"}]}}],iI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),i=j3({value:{pageValue:e.chartConfig.option.pageValue,dataset:e.chartConfig.option.dataset,sizeValue:e.chartConfig.option.sizeValue,pageSize:e.chartConfig.option.pageSize}}),a=(s,l)=>{s!=null&&U9(e.chartConfig,q1,{[Ue.DATA]:s,[Ue.DATA2]:l},p4.CHANGE)};return P1(()=>e.chartConfig.option,s=>{i.value=s,a(s.pageValue,s.pageSize)},{immediate:!0,deep:!0}),(s,l)=>{const u=L("n-pagination");return R(),Q("div",null,[c(u,{"onOnUpdate:page":a,style:f2(`width:${r(t)}px;`),page:r(i).value.pageValue,"onUpdate:page":l[0]||(l[0]=d=>r(i).value.pageValue=d),"page-count":r(i).value.dataset,"page-slot":7,"show-size-picker":"","page-sizes":r(i).value.sizeValue,"page-size":r(i).value.pageSize,"onUpdate:page-size":l[1]||(l[1]=d=>r(i).value.pageSize=d)},null,8,["style","page","page-count","page-sizes","page-size"])])}}}),oI=Object.freeze(Object.defineProperty({__proto__:null,default:iI},Symbol.toStringTag,{value:"Module"}));var aI=(o=>(o.DATA="data",o))(aI||{}),us=(o=>(o.DATA="data",o))(us||{});const aU=[{interactType:p4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],rI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(s=>({"15a61728":r(n)+"px"}));const{w:t,h:n}=S1(e.chartConfig.attr),i=j3({value:{selectValue:e.chartConfig.option.selectValue,dataset:e.chartConfig.option.dataset}}),a=s=>{U9(e.chartConfig,q1,{[us.DATA]:s},p4.CHANGE)};return P1(()=>e.chartConfig.option,s=>{i.value=s,a(s.selectValue)},{immediate:!0,deep:!0}),(s,l)=>{const u=L("n-select");return R(),c1(u,{value:r(i).value.selectValue,"onUpdate:value":[l[0]||(l[0]=d=>r(i).value.selectValue=d),a],options:r(i).value.dataset,style:f2(`width:${r(t)}px;`)},null,8,["value","options","style"])}}});const sI=u2(rI,[["__scopeId","data-v-8b33eaf1"]]),lI=Object.freeze(Object.defineProperty({__proto__:null,default:sI},Symbol.toStringTag,{value:"Module"}));var uI=(o=>(o.DATA="data",o))(uI||{}),cs=(o=>(o.DATA="data",o))(cs||{});const rU=[{interactType:p4.CHANGE,interactName:"选择完成",componentEmitEvents:{data:[{value:"data",label:"选择项"}]}}],cI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;S1(e.chartConfig.attr);const t=j3({value:T1(e.chartConfig.option)}),n=i=>{if(i===void 0)return;const a=t.value.dataset.find(s=>s.label===i);U9(e.chartConfig,q1,{[cs.DATA]:a.value},p4.CHANGE)};return P1(()=>e.chartConfig.option,i=>{t.value=i,n(i.tabValue)},{immediate:!0,deep:!0}),(i,a)=>{const s=L("n-tab"),l=L("n-tabs");return R(),c1(l,{type:r(t).value.tabType,"onUpdate:value":n,"default-value":r(t).value.tabLabel},{default:m(()=>[(R(!0),Q(x1,null,j1(r(t).value.dataset,(u,d)=>(R(),c1(s,{name:u.label,key:d},{default:m(()=>[w1(T2(u.label),1)]),_:2},1032,["name"]))),128))]),_:1},8,["type","default-value"])}}}),dI=Object.freeze(Object.defineProperty({__proto__:null,default:cI},Symbol.toStringTag,{value:"Module"})),fI=["src","width","height"],pI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{borderRadius:i}=S1(e.chartConfig.option),a=j3({dataset:""}),s=l=>({borderRadius:`${l}px`,overflow:"hidden"});return P1(()=>e.chartConfig.option.dataset,l=>{a.dataset=l},{immediate:!0}),p2(e.chartConfig,q1,l=>{a.dataset=l}),(l,u)=>(R(),Q("div",{style:f2(s(r(i)))},[V("iframe",{src:r(a).dataset,width:r(t),height:r(n),style:{"border-width":"0"}},null,8,fI)],4))}}),hI=Object.freeze(Object.defineProperty({__proto__:null,default:pI},Symbol.toStringTag,{value:"Module"})),mI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{dataset:i,fit:a,borderRadius:s}=S1(e.chartConfig.option),l=j3({dataset:""}),u=d=>({borderRadius:`${d}px`,overflow:"hidden"});return P1(()=>e.chartConfig.option.dataset,d=>{l.dataset=d},{immediate:!0}),p2(e.chartConfig,q1,d=>{l.dataset=d}),(d,f)=>{const h=L("n-image");return R(),Q("div",{style:f2(u(r(s)))},[c(h,{"object-fit":r(a),"preview-disabled":"",src:r(l).dataset,"fallback-src":r(Fo)(),width:r(t),height:r(n),lazy:""},null,8,["object-fit","src","fallback-src","width","height"])],4)}}}),gI=Object.freeze(Object.defineProperty({__proto__:null,default:mI},Symbol.toStringTag,{value:"Module"})),Ne={key:"ImageCarousel",chartKey:"VImageCarousel",conKey:"VCImageCarousel",title:"轮播图",category:E3.MORE,categoryName:D3.MORE,package:C1.INFORMATIONS,chartFrame:L1.NAIVE_UI,image:"photo_carousel.png"},pn={dataset:["https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg","https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg","https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"],autoplay:!0,interval:5e3,slidesPerview:1,direction:"horizontal",draggable:!0,centeredSlides:!1,effect:"slide",showDots:!0,dotType:"dot",dotPlacement:"bottom",showArrow:!1,fit:"contain"};let vI=class extends X1{constructor(){super(...arguments);K(this,"key",Ne.key);K(this,"chartConfig",T1(Ne));K(this,"option",T1(pn))}};const _I=Object.freeze(Object.defineProperty({__proto__:null,default:vI,option:pn},Symbol.toStringTag,{value:"Module"})),yI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=j3({dataset:pn.dataset}),{w:n,h:i}=S1(e.chartConfig.attr),{autoplay:a,interval:s,slidesPerview:l,direction:u,draggable:d,centeredSlides:f,effect:h,dotType:p,dotPlacement:g,showArrow:y,showDots:v,fit:_}=S1(e.chartConfig.option);return P1(()=>e.chartConfig.option.dataset,S=>{t.dataset=S},{immediate:!0,deep:!1}),p2(e.chartConfig,q1,S=>{t.dataset=S}),(S,x)=>{const M=L("n-image"),b=L("n-carousel");return R(),Q("div",null,[c(b,{autoplay:r(a),interval:r(s),"centered-slides":r(f),direction:r(u),"dot-placement":r(g),"dot-type":r(p),draggable:r(d),effect:r(h),"slides-per-view":r(l),"show-arrow":r(y),"show-dots":r(v)},{default:m(()=>[(R(!0),Q(x1,null,j1(r(t).dataset,(C,w)=>(R(),c1(M,{"preview-disabled":"",key:w,"object-fit":r(_),src:C,"fallback-src":r(Fo)(),width:r(n),height:r(i)},null,8,["object-fit","src","fallback-src","width","height"]))),128))]),_:1},8,["autoplay","interval","centered-slides","direction","dot-placement","dot-type","draggable","effect","slides-per-view","show-arrow","show-dots"])])}}}),bI=Object.freeze(Object.defineProperty({__proto__:null,default:yI},Symbol.toStringTag,{value:"Module"})),Fe={key:"Video",chartKey:"VVideo",conKey:"VCVideo",title:"视频",category:E3.MORE,categoryName:D3.MORE,package:C1.INFORMATIONS,chartFrame:L1.COMMON,image:"video.png"},xI=""+new URL("../mp4/earth-1d58aa0e.mp4",import.meta.url).href,hn={dataset:xI,loop:!0,muted:!0,fit:"contain",borderRadius:10};let SI=class extends X1{constructor(){super(...arguments);K(this,"key",Fe.key);K(this,"chartConfig",T1(Fe));K(this,"option",T1(hn))}};const MI=Object.freeze(Object.defineProperty({__proto__:null,default:SI,option:hn},Symbol.toStringTag,{value:"Module"})),AI=["loop","muted","width","height","src"],wI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(s=>({eeeaf024:r(i).fit}));const{w:t,h:n}=S1(e.chartConfig.attr);let i=j3(s2({},hn));const a=H1(null);return p2(e.chartConfig,q1,s=>{i.dataset=s}),P1(()=>e.chartConfig.option,s=>{if(i=s,!a.value)return;const l=a.value;l.loop=i.loop,l.muted=i.muted,l.play()},{immediate:!0,deep:!0}),(s,l)=>(R(),Q("video",{ref_key:"vVideoRef",ref:a,class:"go-video",preload:"auto",crossOrigin:"anonymous",playsinline:"",autoplay:"",loop:r(i).loop,muted:r(i).muted,width:r(t),height:r(n),src:r(i).dataset},null,8,AI))}});const CI=u2(wI,[["__scopeId","data-v-2f9899c0"]]),TI=Object.freeze(Object.defineProperty({__proto__:null,default:CI},Symbol.toStringTag,{value:"Module"}));Lo({type:"series.wordCloud",visualStyleAccessPath:"textStyle",visualStyleMapper:function(o){return{fill:o.get("color")}},visualDrawType:"fill",optionUpdated:function(){var o=this.option;o.gridSize=Math.max(Math.floor(o.gridSize),4)},getInitialData:function(o,e){var t=zo(o.data,{coordDimensions:["value"]}),n=new Po(t,this);return n.initData(o.data),n},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{fontWeight:"normal"}}});ko({type:"wordCloud",render:function(o,e,t){var n=this.group;n.removeAll();var i=o.getData(),a=o.get("gridSize");o.layoutInstance.ondraw=function(s,l,u,d){var f=i.getItemModel(u),h=f.getModel("textStyle"),p=new h7({style:T8(h),scaleX:1/d.info.mu,scaleY:1/d.info.mu,x:(d.gx+d.info.gw/2)*a,y:(d.gy+d.info.gh/2)*a,rotation:d.rot});p.setStyle({x:d.info.fillTextOffsetX,y:d.info.fillTextOffsetY+l*.5,text:s,verticalAlign:"middle",fill:i.getItemVisual(u,"style").fill,fontSize:l}),n.add(p),i.setItemGraphicEl(u,p),p.ensureState("emphasis").style=T8(f.getModel(["emphasis","textStyle"]),{state:"emphasis"}),p.ensureState("blur").style=T8(f.getModel(["blur","textStyle"]),{state:"blur"}),Uo(p,f.get(["emphasis","focus"]),f.get(["emphasis","blurScope"])),p.stateTransition={duration:o.get("animation")?o.get(["stateAnimation","duration"]):0,easing:o.get(["stateAnimation","easing"])},p.__highDownDispatcher=!0},this._model=o},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}});/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],n="zero-timeout-message",i=function(s){var l=t.length;return t.push(s),window.postMessage(n+l.toString(36),"*"),l};return window.addEventListener("message",function(s){if(!(typeof s.data!="string"||s.data.substr(0,n.length)!==n)){s.stopImmediatePropagation();var l=parseInt(s.data.substr(n.length),36);t[l]&&(t[l](),t[l]=void 0)}},!0),window.clearImmediate=function(s){t[s]&&(t[s]=void 0)},i}()||function(t){window.setTimeout(t,0)}}());window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}}());var mn=function(){var e=document.createElement("canvas");if(!e||!e.getContext)return!1;var t=e.getContext("2d");return!(!t.getImageData||!t.fillText||!Array.prototype.some||!Array.prototype.push)}(),Be=function(){if(mn){for(var e=document.createElement("canvas").getContext("2d"),t=20,n,i;t;){if(e.font=t.toString(10)+"px sans-serif",e.measureText("Ｗ").width===n&&e.measureText("m").width===i)return t+1;n=e.measureText("Ｗ").width,i=e.measureText("m").width,t--}return 0}}(),EI=function(e){for(var t,n,i=e.length;i;t=Math.floor(Math.random()*i),n=e[--i],e[i]=e[t],e[t]=n);return e},s6=function(e,t){if(!mn)return;Array.isArray(e)||(e=[e]),e.forEach(function(q,$){if(typeof q=="string"){if(e[$]=document.getElementById(q),!e[$])throw"The element id specified is not found."}else if(!q.tagName&&!q.appendChild)throw"You must pass valid HTML elements, or ID of the element."});var n={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,layoutAnimation:!0,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(t)for(var i in t)i in n&&(n[i]=t[i]);if(typeof n.weightFactor!="function"){var a=n.weightFactor;n.weightFactor=function($){return $*a}}if(typeof n.shape!="function")switch(n.shape){case"circle":default:n.shape="circle";break;case"cardioid":n.shape=function($){return 1-Math.sin($)};break;case"diamond":case"square":n.shape=function($){var n1=$%(2*Math.PI/4);return 1/(Math.cos(n1)+Math.sin(n1))};break;case"triangle-forward":n.shape=function($){var n1=$%(2*Math.PI/3);return 1/(Math.cos(n1)+Math.sqrt(3)*Math.sin(n1))};break;case"triangle":case"triangle-upright":n.shape=function($){var n1=($+Math.PI*3/2)%(2*Math.PI/3);return 1/(Math.cos(n1)+Math.sqrt(3)*Math.sin(n1))};break;case"pentagon":n.shape=function($){var n1=($+.955)%(2*Math.PI/5);return 1/(Math.cos(n1)+.726543*Math.sin(n1))};break;case"star":n.shape=function($){var n1=($+.955)%(2*Math.PI/10);return($+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-n1)+3.07768*Math.sin(2*Math.PI/10-n1)):1/(Math.cos(n1)+3.07768*Math.sin(n1))};break}n.gridSize=Math.max(Math.floor(n.gridSize),4);var s=n.gridSize,l=s-n.maskGapWidth,u=Math.abs(n.maxRotation-n.minRotation),d=Math.min(n.maxRotation,n.minRotation),f=n.rotationStep,h,p,g,y,v,_,S;function x(q,$){return"hsl("+(Math.random()*360).toFixed()+","+(Math.random()*30+70).toFixed()+"%,"+(Math.random()*($-q)+q).toFixed()+"%)"}switch(n.color){case"random-dark":S=function(){return x(10,50)};break;case"random-light":S=function(){return x(50,90)};break;default:typeof n.color=="function"&&(S=n.color);break}var M=null;typeof n.classes=="function"&&(M=n.classes);var b=!1,C=[],w,I=function($){var n1=$.currentTarget,r1=n1.getBoundingClientRect(),e1,h1;$.touches?(e1=$.touches[0].clientX,h1=$.touches[0].clientY):(e1=$.clientX,h1=$.clientY);var g1=e1-r1.left,v1=h1-r1.top,p1=Math.floor(g1*(n1.width/r1.width||1)/s),F1=Math.floor(v1*(n1.height/r1.height||1)/s);return C[p1][F1]},T=function($){var n1=I($);if(w!==n1){if(w=n1,!n1){n.hover(void 0,void 0,$);return}n.hover(n1.item,n1.dimension,$)}},E=function($){var n1=I($);n1&&(n.click(n1.item,n1.dimension,$),$.preventDefault())},z=[],W=function($){if(z[$])return z[$];var n1=$*8,r1=n1,e1=[];for($===0&&e1.push([y[0],y[1],0]);r1--;){var h1=1;n.shape!=="circle"&&(h1=n.shape(r1/n1*2*Math.PI)),e1.push([y[0]+$*h1*Math.cos(-r1/n1*2*Math.PI),y[1]+$*h1*Math.sin(-r1/n1*2*Math.PI)*n.ellipticity,r1/n1*2*Math.PI])}return z[$]=e1,e1},X=function(){return n.abortThreshold>0&&new Date().getTime()-_>n.abortThreshold},B=function(){return n.rotateRatio===0||Math.random()>n.rotateRatio?0:u===0?d:d+Math.round(Math.random()*u/f)*f},O=function($,n1,r1){var e1=n.weightFactor(n1);if(e1<=n.minSize)return!1;var h1=1;e1<Be&&(h1=function(){for(var o1=2;o1*e1<Be;)o1+=2;return o1}());var g1=document.createElement("canvas"),v1=g1.getContext("2d",{willReadFrequently:!0});v1.font=n.fontWeight+" "+(e1*h1).toString(10)+"px "+n.fontFamily;var p1=v1.measureText($).width/h1,F1=Math.max(e1*h1,v1.measureText("m").width,v1.measureText("Ｗ").width)/h1,D1=p1+F1*2,M1=F1*3,$1=Math.ceil(D1/s),e2=Math.ceil(M1/s);D1=$1*s,M1=e2*s;var n2=-p1/2,K1=-F1*.4,i2=Math.ceil((D1*Math.abs(Math.sin(r1))+M1*Math.abs(Math.cos(r1)))/s),N1=Math.ceil((D1*Math.abs(Math.cos(r1))+M1*Math.abs(Math.sin(r1)))/s),Y1=N1*s,r2=i2*s;g1.setAttribute("width",Y1),g1.setAttribute("height",r2),v1.scale(1/h1,1/h1),v1.translate(Y1*h1/2,r2*h1/2),v1.rotate(-r1),v1.font=n.fontWeight+" "+(e1*h1).toString(10)+"px "+n.fontFamily,v1.fillStyle="#000",v1.textBaseline="middle",v1.fillText($,n2*h1,(K1+e1*.5)*h1);var N=v1.getImageData(0,0,Y1,r2).data;if(X())return!1;for(var D=[],u1=N1,b1,A1,O1,V1=[i2/2,N1/2,i2/2,N1/2];u1--;)for(b1=i2;b1--;){O1=s;e:for(;O1--;)for(A1=s;A1--;)if(N[((b1*s+O1)*Y1+(u1*s+A1))*4+3]){D.push([u1,b1]),u1<V1[3]&&(V1[3]=u1),u1>V1[1]&&(V1[1]=u1),b1<V1[0]&&(V1[0]=b1),b1>V1[2]&&(V1[2]=b1);break e}}return{mu:h1,occupied:D,bounds:V1,gw:N1,gh:i2,fillTextOffsetX:n2,fillTextOffsetY:K1,fillTextWidth:p1,fillTextHeight:F1,fontSize:e1}},F=function($,n1,r1,e1,h1){for(var g1=h1.length;g1--;){var v1=$+h1[g1][0],p1=n1+h1[g1][1];if(v1>=p||p1>=g||v1<0||p1<0){if(!n.drawOutOfBound)return!1;continue}if(!h[v1][p1])return!1}return!0},Y=function($,n1,r1,e1,h1,g1,v1,p1,F1){var D1=r1.fontSize,M1;S?M1=S(e1,h1,D1,g1,v1):M1=n.color;var $1;M?$1=M(e1,h1,D1,g1,v1):$1=n.classes;var e2=r1.bounds;($+e2[3])*s,(n1+e2[0])*s,(e2[1]-e2[3]+1)*s,(e2[2]-e2[0]+1)*s,e.forEach(function(n2){if(n2.getContext){var K1=n2.getContext("2d"),i2=r1.mu;K1.save(),K1.scale(1/i2,1/i2),K1.font=n.fontWeight+" "+(D1*i2).toString(10)+"px "+n.fontFamily,K1.fillStyle=M1,K1.translate(($+r1.gw/2)*s*i2,(n1+r1.gh/2)*s*i2),p1!==0&&K1.rotate(-p1),K1.textBaseline="middle",K1.fillText(e1,r1.fillTextOffsetX*i2,(r1.fillTextOffsetY+D1*.5)*i2),K1.restore()}else{var N1=document.createElement("span"),Y1="";Y1="rotate("+-p1/Math.PI*180+"deg) ",r1.mu!==1&&(Y1+="translateX(-"+r1.fillTextWidth/4+"px) scale("+1/r1.mu+")");var r2={position:"absolute",display:"block",font:n.fontWeight+" "+D1*r1.mu+"px "+n.fontFamily,left:($+r1.gw/2)*s+r1.fillTextOffsetX+"px",top:(n1+r1.gh/2)*s+r1.fillTextOffsetY+"px",width:r1.fillTextWidth+"px",height:r1.fillTextHeight+"px",lineHeight:D1+"px",whiteSpace:"nowrap",transform:Y1,webkitTransform:Y1,msTransform:Y1,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};M1&&(r2.color=M1),N1.textContent=e1;for(var N in r2)N1.style[N]=r2[N];if(F1)for(var D in F1)N1.setAttribute(D,F1[D]);$1&&(N1.className+=$1),n2.appendChild(N1)}})},H=function($,n1,r1,e1,h1){if(!($>=p||n1>=g||$<0||n1<0)){if(h[$][n1]=!1,r1){var g1=e[0].getContext("2d");g1.fillRect($*s,n1*s,l,l)}b&&(C[$][n1]={item:h1,dimension:e1})}},U=function($,n1,r1,e1,h1,g1){var v1=h1.occupied,p1=n.drawMask,F1;p1&&(F1=e[0].getContext("2d"),F1.save(),F1.fillStyle=n.maskColor);var D1;if(b){var M1=h1.bounds;D1={x:($+M1[3])*s,y:(n1+M1[0])*s,w:(M1[1]-M1[3]+1)*s,h:(M1[2]-M1[0]+1)*s}}for(var $1=v1.length;$1--;){var e2=$+v1[$1][0],n2=n1+v1[$1][1];e2>=p||n2>=g||e2<0||n2<0||H(e2,n2,p1,D1,g1)}p1&&F1.restore()},k=function($){var n1,r1,e1;Array.isArray($)?(n1=$[0],r1=$[1]):(n1=$.word,r1=$.weight,e1=$.attributes);var h1=B(),g1=O(n1,r1,h1);if(!g1||X())return!1;if(!n.drawOutOfBound){var v1=g1.bounds;if(v1[1]-v1[3]+1>p||v1[2]-v1[0]+1>g)return!1}for(var p1=v+1,F1=function(e2){var n2=Math.floor(e2[0]-g1.gw/2),K1=Math.floor(e2[1]-g1.gh/2),i2=g1.gw,N1=g1.gh;return F(n2,K1,i2,N1,g1.occupied)?(Y(n2,K1,g1,n1,r1,v-p1,e2[2],h1,e1),U(n2,K1,i2,N1,g1,$),{gx:n2,gy:K1,rot:h1,info:g1}):!1};p1--;){var D1=W(v-p1);n.shuffle&&(D1=[].concat(D1),EI(D1));for(var M1=0;M1<D1.length;M1++){var $1=F1(D1[M1]);if($1)return $1}}return null},G=function($,n1,r1){if(n1)return!e.some(function(e1){var h1=document.createEvent("CustomEvent");return h1.initCustomEvent($,!0,n1,r1||{}),!e1.dispatchEvent(h1)},this);e.forEach(function(e1){var h1=document.createEvent("CustomEvent");h1.initCustomEvent($,!0,n1,r1||{}),e1.dispatchEvent(h1)},this)},i1=function(){var $=e[0];if($.getContext)p=Math.ceil($.width/s),g=Math.ceil($.height/s);else{var n1=$.getBoundingClientRect();p=Math.ceil(n1.width/s),g=Math.ceil(n1.height/s)}if(G("wordcloudstart",!0)){y=n.origin?[n.origin[0]/s,n.origin[1]/s]:[p/2,g/2],v=Math.floor(Math.sqrt(p*p+g*g)),h=[];var r1,e1,h1;if(!$.getContext||n.clearCanvas)for(e.forEach(function(Y1){if(Y1.getContext){var r2=Y1.getContext("2d");r2.fillStyle=n.backgroundColor,r2.clearRect(0,0,p*(s+1),g*(s+1)),r2.fillRect(0,0,p*(s+1),g*(s+1))}else Y1.textContent="",Y1.style.backgroundColor=n.backgroundColor,Y1.style.position="relative"}),r1=p;r1--;)for(h[r1]=[],e1=g;e1--;)h[r1][e1]=!0;else{var g1=document.createElement("canvas").getContext("2d");g1.fillStyle=n.backgroundColor,g1.fillRect(0,0,1,1);var v1=g1.getImageData(0,0,1,1).data,p1=$.getContext("2d").getImageData(0,0,p*s,g*s).data;r1=p;for(var F1,D1;r1--;)for(h[r1]=[],e1=g;e1--;){D1=s;e:for(;D1--;)for(F1=s;F1--;)for(h1=4;h1--;)if(p1[((e1*s+D1)*p*s+(r1*s+F1))*4+h1]!==v1[h1]){h[r1][e1]=!1;break e}h[r1][e1]!==!1&&(h[r1][e1]=!0)}p1=g1=v1=void 0}if(n.hover||n.click){for(b=!0,r1=p+1;r1--;)C[r1]=[];n.hover&&$.addEventListener("mousemove",T),n.click&&($.addEventListener("click",E),$.addEventListener("touchstart",E),$.addEventListener("touchend",function(Y1){Y1.preventDefault()}),$.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),$.addEventListener("wordcloudstart",function Y1(){$.removeEventListener("wordcloudstart",Y1),$.removeEventListener("mousemove",T),$.removeEventListener("click",E),w=void 0})}h1=0;var M1,$1,e2=!0;n.layoutAnimation?n.wait!==0?(M1=window.setTimeout,$1=window.clearTimeout):(M1=window.setImmediate,$1=window.clearImmediate):(M1=function(Y1){Y1()},$1=function(){e2=!1});var n2=function(r2,N){e.forEach(function(D){D.addEventListener(r2,N)},this)},K1=function(r2,N){e.forEach(function(D){D.removeEventListener(r2,N)},this)},i2=function Y1(){K1("wordcloudstart",Y1),$1(N1)};n2("wordcloudstart",i2);var N1=(n.layoutAnimation?M1:setTimeout)(function Y1(){if(e2){if(h1>=n.list.length){$1(N1),G("wordcloudstop",!1),K1("wordcloudstart",i2);return}_=new Date().getTime();var r2=k(n.list[h1]),N=!G("wordclouddrawn",!0,{item:n.list[h1],drawn:r2});if(X()||N){$1(N1),n.abort(),G("wordcloudabort",!1),G("wordcloudstop",!1),K1("wordcloudstart",i2);return}h1++,N1=M1(Y1,n.wait)}},n.wait)}};i1()};s6.isSupported=mn;s6.minFontSize=Be;if(!s6.isSupported)throw new Error("Sorry your browser not support wordCloud");function DI(o){for(var e=o.getContext("2d"),t=e.getImageData(0,0,o.width,o.height),n=e.createImageData(t),i=0,a=0,s=0;s<t.data.length;s+=4){var l=t.data[s+3];if(l>128){var u=t.data[s]+t.data[s+1]+t.data[s+2];i+=u,++a}}for(var d=i/a,s=0;s<t.data.length;s+=4){var u=t.data[s]+t.data[s+1]+t.data[s+2],l=t.data[s+3];l<128||u>d?(n.data[s]=0,n.data[s+1]=0,n.data[s+2]=0,n.data[s+3]=0):(n.data[s]=255,n.data[s+1]=255,n.data[s+2]=255,n.data[s+3]=255)}e.putImageData(n,0,0)}Ys(function(o,e){o.eachSeriesByType("wordCloud",function(t){var n=Zs(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),i=t.getData(),a=document.createElement("canvas");a.width=n.width,a.height=n.height;var s=a.getContext("2d"),l=t.get("maskImage");if(l)try{s.drawImage(l,0,0,a.width,a.height),DI(a)}catch(y){console.error("Invalid mask image"),console.error(y.toString())}var u=t.get("sizeRange"),d=t.get("rotationRange"),f=i.getDataExtent("value"),h=Math.PI/180,p=t.get("gridSize");s6(a,{list:i.mapArray("value",function(y,v){var _=i.getItemModel(v);return[i.getName(v),_.get("textStyle.fontSize",!0)||qs(y,f,u),v]}).sort(function(y,v){return v[1]-y[1]}),fontFamily:t.get("textStyle.fontFamily")||t.get("emphasis.textStyle.fontFamily")||o.get("textStyle.fontFamily"),fontWeight:t.get("textStyle.fontWeight")||t.get("emphasis.textStyle.fontWeight")||o.get("textStyle.fontWeight"),gridSize:p,ellipticity:n.height/n.width,minRotation:d[0]*h,maxRotation:d[1]*h,clearCanvas:!l,rotateRatio:1,rotationStep:t.get("rotationStep")*h,drawOutOfBound:t.get("drawOutOfBound"),layoutAnimation:t.get("layoutAnimation"),shuffle:!1,shape:t.get("shape")});function g(y){var v=y.detail.item;y.detail.drawn&&t.layoutInstance.ondraw&&(y.detail.drawn.gx+=n.x/p,y.detail.drawn.gy+=n.y/p,t.layoutInstance.ondraw(v[0],v[1],v[2],y.detail.drawn))}a.addEventListener("wordclouddrawn",g),t.layoutInstance&&t.layoutInstance.dispose(),t.layoutInstance={ondraw:null,dispose:function(){a.removeEventListener("wordclouddrawn",g),a.addEventListener("wordclouddrawn",function(y){y.preventDefault()})}}})});Js(function(o){var e=(o||{}).series;!Xs(e)&&(e=e?[e]:[]);var t=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];En(e,function(i){if(i&&i.type==="wordCloud"){var a=i.textStyle||{};n(a.normal),n(a.emphasis)}});function n(i){i&&En(t,function(a){i.hasOwnProperty(a)&&(i["text"+Qs(a)]=i[a])})}});const RI=l1({__name:"index",props:{themeSetting:{type:Object,required:!0},themeColor:{type:Object,required:!0},chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=$2(e.chartConfig.option,e.themeSetting);D2([P2,q2,o3]);const n=H1(),i=Z1(()=>X2(e.chartConfig.option,e.themeSetting,At)),a=l=>{try{l&&(e.chartConfig.option.series[0].data=l),s.value&&C2()&&y0(s.value,e.chartConfig.option)}catch(u){console.log(u)}};P1(()=>e.chartConfig.option.dataset,l=>{a(l)},{deep:!1});const{vChartRef:s}=p2(e.chartConfig,q1,l=>{a(l)});return(l,u)=>(R(),c1(r(H2),{ref_key:"vChartRef",ref:s,"init-options":r(t),theme:o.themeColor,option:r(i),"manual-update":r(C2)(),"update-options":{replaceMerge:n.value},autoresize:""},null,8,["init-options","theme","option","manual-update","update-options"]))}}),II=Object.freeze(Object.defineProperty({__proto__:null,default:RI},Symbol.toStringTag,{value:"Module"})),OI={class:"go-text-box"},LI={class:"content"},zI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(p=>({ad835132:r(n),"770576e0":r(i)+"px","686ae446":r(a)+"px",bfc1ca18:r(s),"32dde9de":r(d),"0b3a081c":r(h)+"s","2bb5d1c0":r(l)+"s"}));const{w:t}=S1(e.chartConfig.attr),{fontColor:n,fontSize:i,letterSpacing:a,fontWeight:s,animationTime:l,animationSpeed:u,boxShadow:d}=S1(e.chartConfig.option),f=j3({dataset:wt.dataset});P1(()=>e.chartConfig.option.dataset,p=>{f.dataset=p},{immediate:!0,deep:!1}),P1(e.chartConfig.option,()=>{try{e.chartConfig.option.showShadow?d.value=`${e.chartConfig.option.hShadow}px ${e.chartConfig.option.vShadow}px ${e.chartConfig.option.blurShadow}px ${e.chartConfig.option.colorShadow}`:d.value="none"}catch(p){console.log(p)}},{immediate:!0});const h=Z1(()=>Math.floor(t.value/u.value));return p2(e.chartConfig,q1,p=>{f.dataset=p}),(p,g)=>(R(),Q("div",OI,[V("div",LI,[V("span",null,T2(r(f).dataset),1)])]))}});const PI=u2(zI,[["__scopeId","data-v-95986cc2"]]),kI=Object.freeze(Object.defineProperty({__proto__:null,default:PI},Symbol.toStringTag,{value:"Module"})),UI={class:"go-text-box"},NI={class:"content"},FI={key:1,style:{"white-space":"pre-wrap"}},BI=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o;a4(x=>({e8f9d918:r(d),"6db009f0":r(i),"90cb30a2":`${r(l)}px ${r(u)}px`,"14972c59":r(a)+"px","29c71bb4":r(s)+"px","74ad5f3b":r(g),"69e3b98b":r(v),"02f0c257":r(f)+"px","1000c8aa":r(p)+"px","4ab20d33":r(h),b190611e:r(y)}));const{linkHead:t,link:n,fontColor:i,fontSize:a,letterSpacing:s,paddingY:l,paddingX:u,textAlign:d,borderWidth:f,borderColor:h,borderRadius:p,writingMode:g,backgroundColor:y,fontWeight:v}=S1(e.chartConfig.option),_=j3({dataset:Ct.dataset});P1(()=>e.chartConfig.option.dataset,x=>{_.dataset=x},{immediate:!0,deep:!1}),p2(e.chartConfig,q1,x=>{_.dataset=x});const S=()=>{window.open(t.value+n.value)};return(x,M)=>(R(),Q("div",UI,[V("div",NI,[r(n)?(R(),Q("span",{key:0,style:{cursor:"pointer","white-space":"pre-wrap"},onClick:S},T2(r(_).dataset),1)):(R(),Q("span",FI,T2(r(_).dataset),1))])]))}});const GI=u2(BI,[["__scopeId","data-v-567ee41a"]]),VI=Object.freeze(Object.defineProperty({__proto__:null,default:GI},Symbol.toStringTag,{value:"Module"})),Ge={key:"TextGradient",chartKey:"VTextGradient",conKey:"VCTextGradient",title:"渐变文字",category:E3.TEXT,categoryName:D3.TEXT,package:C1.INFORMATIONS,chartFrame:L1.NAIVE_UI,image:"text_gradient.png"},gn={dataset:"我是渐变文本",size:20,gradient:{from:"#0000FFFF",to:"#00FF00FF",deg:45}};class jI extends X1{constructor(){super(...arguments);K(this,"key",Ge.key);K(this,"chartConfig",T1(Ge));K(this,"option",T1(gn))}}const WI=Object.freeze(Object.defineProperty({__proto__:null,default:jI,option:gn},Symbol.toStringTag,{value:"Module"})),HI={class:"go-text-box"},$I=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,t=j3({dataset:gn.dataset});S1(e.chartConfig.attr);const{size:n,gradient:i}=S1(e.chartConfig.option);return P1(()=>e.chartConfig.option.dataset,a=>{t.dataset=a},{immediate:!0,deep:!1}),p2(e.chartConfig,q1,a=>{t.dataset=a}),(a,s)=>{const l=L("n-gradient-text");return R(),Q("div",HI,[c(l,{size:r(n),gradient:r(i)},{default:m(()=>[w1(T2(r(t).dataset),1)]),_:1},8,["size","gradient"])])}}});const YI=u2($I,[["__scopeId","data-v-3835bf19"]]),JI=Object.freeze(Object.defineProperty({__proto__:null,default:YI},Symbol.toStringTag,{value:"Module"})),ZI=o=>(v0("data-v-c881aae3"),o=o(),_0(),o),qI={class:"ranking-info"},XI=["innerHTML"],QI=ZI(()=>V("div",{class:"shine"},null,-1)),KI=[QI],eO=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),{rowNum:i,unit:a,color:s,textColor:l,borderColor:u,indexFontSize:d,leftFontSize:f,rightFontSize:h}=S1(e.chartConfig.option),p=V3({mergedConfig:e.chartConfig.option,rowsData:[],rows:[{scroll:0,ranking:1,name:"",value:"",percent:0}],heights:[0],animationIndex:0,animationHandler:0,updater:0,avgHeight:0}),g=()=>{let{dataset:x,rowNum:M,sort:b}=p.mergedConfig;b&&x.sort(({value:W},{value:X})=>{if(W>X)return-1;if(W<X)return 1;if(W===X)return 0});const C=x.map(({value:W})=>W),w=Math.min(...C)||0,I=Math.abs(w),E=(Math.max(...C)||0)+I;x=x.map((W,X)=>N2(s2({},W),{ranking:X+1,percent:(W.value+I)/E*100}));const z=x.length;z>M&&z<2*M&&(x=[...x,...x]),x=x.map((W,X)=>N2(s2({},W),{scroll:X})),p.rowsData=x,p.rows=x},y=(x=!1)=>{const{rowNum:M,dataset:b}=p.mergedConfig,C=n.value/M;p.avgHeight=C,x||(p.heights=new Array(b.length).fill(C))},v=(x=!1)=>O2(this,null,function*(){let{avgHeight:M,animationIndex:b,mergedConfig:C,rowsData:w,updater:I}=p;const{waitTime:T,carousel:E,rowNum:z}=C,W=w.length;if(z>=W||x&&(yield new Promise(F=>setTimeout(F,T)),I!==p.updater))return;const X=E==="single"?1:z;let B=w.slice(b);if(B.push(...w.slice(0,b)),p.rows=B.slice(0,z+1),p.heights=new Array(W).fill(M),yield new Promise(F=>setTimeout(F,300)),I!==p.updater)return;p.heights.splice(0,X,...new Array(X).fill(0)),b+=X;const O=b-W;O>=0&&(b=O),p.animationIndex=b,p.animationHandler=setTimeout(v,T*1e3-300)}),_=()=>{p.updater=(p.updater+1)%999999,p.animationHandler&&clearTimeout(p.animationHandler)},S=()=>O2(this,null,function*(){try{if(!p.mergedConfig)return;let{dataset:x,rowNum:M,sort:b}=p.mergedConfig;_(),g();let C=!0;x.length<=M&&(C=!1),y(C),v(C)}catch(x){console.error(x)}});return S(),P1(()=>t.value,()=>{S()}),P1(()=>n.value,()=>{S()}),P1(()=>i.value,()=>{S()}),P1(()=>e.chartConfig.option.dataset,()=>{S()},{deep:!1}),p2(e.chartConfig,q1,x=>{e.chartConfig.option.dataset=x,S()}),n0(()=>{_()}),(x,M)=>(R(),Q("div",{class:"go-tables-rank",style:f2(`color: ${r(l)}`)},[(R(!0),Q(x1,null,j1(p.rows,(b,C)=>(R(),Q("div",{class:"row-item",key:b.toString()+b.scroll,style:f2(`height: ${p.heights[C]}px;`)},[V("div",qI,[V("div",{class:"rank",style:f2(`color: ${r(s)};font-size: ${r(d)}px`)},"No."+T2(b.ranking),5),V("div",{class:"info-name",style:f2(`font-size: ${r(f)}px`),innerHTML:b.name},null,12,XI),V("div",{class:"ranking-value",style:f2(`color: ${r(l)};font-size: ${r(h)}px`)},T2(p.mergedConfig.valueFormatter?p.mergedConfig.valueFormatter(b):b.value)+" "+T2(r(a)),5)]),V("div",{class:"ranking-column",style:f2(`border-color: ${r(u)}`)},[V("div",{class:"inside-column",style:f2(`width: ${b.percent}%;background-color: ${r(s)}`)},KI,4)],4)],4))),128))],4))}});const tO=u2(eO,[["__scopeId","data-v-c881aae3"]]),nO=Object.freeze(Object.defineProperty({__proto__:null,default:tO},Symbol.toStringTag,{value:"Module"})),iO={class:"dv-scroll-board"},oO=["align","innerHTML"],aO=["align","innerHTML"],rO=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{w:t,h:n}=S1(e.chartConfig.attr),i=V3({defaultConfig:{header:[],dataset:[],rowNum:5,headerBGC:"#00BAFF",oddRowBGC:"#003B51",evenRowBGC:"#0A2732",waitTime:2,headerHeight:35,columnWidth:[],align:[],index:!1,indexHeader:"#",carousel:"single",hoverPause:!0},mergedConfig:e.chartConfig.option,header:[],rowsData:[],rows:[{ceils:[],rowIndex:0,scroll:0}],widths:[],heights:[0],avgHeight:0,aligns:[],animationIndex:0,animationHandler:0,updater:0,needCalc:!1}),a=()=>{s(),l(),u(),d(),f(),h(),p(!0)};g0(()=>{a()});const s=()=>{i.mergedConfig=g6(T1(i.defaultConfig),e.chartConfig.option)},l=()=>{let{header:v,index:_,indexHeader:S}=i.mergedConfig;if(!v.length){i.header=[];return}v=[...v],_&&v.unshift(S),i.header=v},u=()=>{let{dataset:v,index:_,headerBGC:S,rowNum:x}=i.mergedConfig;_&&(v=v.map((b,C)=>{b=[...b];const w=`<span class="index" style="background-color: ${S};border-radius: 3px;padding: 0px 3px;">${C+1}</span>`;return b.unshift(w),b})),v=v.map((b,C)=>({ceils:b,rowIndex:C}));const M=v.length;M>x&&M<2*x&&(v=[...v,...v]),v=v.map((b,C)=>N2(s2({},b),{scroll:C})),i.rowsData=v,i.rows=v},d=()=>{const{mergedConfig:v,rowsData:_}=i,{columnWidth:S,header:x}=v,M=S.reduce((I,T)=>I+T,0);let b=0;_[0]?b=_[0].ceils.length:x.length&&(b=x.length);const C=(t.value-M)/(b-S.length),w=new Array(b).fill(C);i.widths=g6(w,S)},f=(v=!1)=>{const{mergedConfig:_,header:S}=i,{headerHeight:x,rowNum:M,dataset:b}=_;let C=n.value;S.length&&(C-=x);const w=C/M;i.avgHeight=w,v||(i.heights=new Array(b.length).fill(w))},h=()=>{const{header:v,mergedConfig:_}=i,S=v.length;let x=new Array(S).fill("left");const{align:M}=_;i.aligns=g6(x,M)},p=(v=!1)=>O2(this,null,function*(){const{needCalc:_}=i;_&&(u(),f(),i.needCalc=!1);let{avgHeight:S,animationIndex:x,mergedConfig:M,rowsData:b,updater:C}=i;const{waitTime:w,carousel:I,rowNum:T}=M,E=b.length;if(T>=E||v&&(yield new Promise(B=>setTimeout(B,w*1e3)),C!==i.updater))return;const z=I==="single"?1:T;let W=b.slice(x);if(W.push(...b.slice(0,x)),i.rows=W.slice(0,I==="page"?T*2:T+1),i.heights=new Array(E).fill(S),yield new Promise(B=>setTimeout(B,300)),C!==i.updater)return;i.heights.splice(0,z,...new Array(z).fill(0)),x+=z;const X=x-E;X>=0&&(x=X),i.animationIndex=x,i.animationHandler=setTimeout(p,w*1e3-300)}),g=()=>{i.updater=(i.updater+1)%999999,i.animationHandler&&clearTimeout(i.animationHandler)},y=()=>O2(this,null,function*(){try{if(!i.mergedConfig)return;g(),a()}catch(v){console.log(v)}});return P1(()=>t.value,()=>{y()}),P1(()=>n.value,()=>{y()}),P1(()=>e.chartConfig.option,()=>{y()},{deep:!0}),p2(e.chartConfig,q1,v=>{e.chartConfig.option.dataset=v,y()}),n0(()=>{g()}),(v,_)=>(R(),Q("div",iO,[i.header.length&&i.mergedConfig?(R(),Q("div",{key:0,class:"header",style:f2(`background-color: ${i.mergedConfig.headerBGC};`)},[(R(!0),Q(x1,null,j1(i.header,(S,x)=>(R(),Q("div",{class:"header-item",key:`${S}${x}`,style:f2(`
        height: ${i.mergedConfig.headerHeight}px;
        line-height: ${i.mergedConfig.headerHeight}px;
        width: ${i.widths[x]}px;
      `),align:i.aligns[x],innerHTML:S},null,12,oO))),128))],4)):l2("",!0),i.mergedConfig?(R(),Q("div",{key:1,class:"rows",style:f2(`height: ${r(n)-(i.header.length?i.mergedConfig.headerHeight:0)}px;`)},[(R(!0),Q(x1,null,j1(i.rows,(S,x)=>(R(),Q("div",{class:"row-item",key:`${S.toString()}${S.scroll}`,style:f2(`
        height: ${i.heights[x]}px;
        line-height: ${i.heights[x]}px;
        background-color: ${i.mergedConfig[S.rowIndex%2===0?"evenRowBGC":"oddRowBGC"]};
      `)},[(R(!0),Q(x1,null,j1(S.ceils,(M,b)=>(R(),Q("div",{class:"ceil",key:`${M}${x}${b}`,style:f2(`width: ${i.widths[b]}px;`),align:i.aligns[b],innerHTML:M},null,12,aO))),128))],4))),128))],4)):l2("",!0)]))}});const sO=u2(rO,[["__scopeId","data-v-a6b4b361"]]),lO=Object.freeze(Object.defineProperty({__proto__:null,default:sO},Symbol.toStringTag,{value:"Module"})),uO={class:"go-tables-basic"},cO=l1({__name:"index",props:{chartConfig:{type:Object,required:!0}},setup(o){const e=o,{SearchIcon:t}=Q8.ionicons5,n=H1(""),i=Z1(()=>{var h,p;return(p=(h=f==null?void 0:f.dataset)==null?void 0:h.source)==null?void 0:p.filter(g=>Object.values(g).some(y=>String(y).toLowerCase().includes(n.value.toLowerCase())))}),{align:a,pagination:s,inputShow:l}=S1(e.chartConfig.option);s.value.onChange=h=>{s.value.page=h};const{w:u,h:d}=S1(e.chartConfig.attr),f=V3({dataset:e.chartConfig.option.dataset,style:e.chartConfig.option.style});return P1(()=>e.chartConfig.option.dataset,h=>{var p,g;f.dataset=h,(g=(p=f==null?void 0:f.dataset)==null?void 0:p.dimensions)==null||g.forEach(y=>{y.align=a.value})},{immediate:!0,deep:!0}),(h,p)=>{const g=L("n-icon"),y=L("n-input"),v=L("n-data-table");return R(),Q("div",uO,[c(y,{value:n.value,"onUpdate:value":p[0]||(p[0]=_=>n.value=_),placeholder:"请输入信息",style:f2([`display: ${r(l)}`,{"margin-bottom":"5px",float:"right",width:"240px"}])},{prefix:m(()=>[c(g,{component:r(t)},null,8,["component"])]),_:1},8,["value","style"]),c(v,{style:f2(`
      width: ${r(u)}px;
      height: ${r(d)}px;
      font-size: ${f.style.fontSize}px;
      border-width: ${f.style.border==="on"?f.style.borderWidth:0}px;
      border-color: ${f.style.borderColor};