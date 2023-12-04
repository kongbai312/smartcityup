import{d as b,r as L,o as d,c as _,a as e,F as A,b as z,u as m,t as p,e as y,p as w,f as C,n as k,i as D,g as I,h as Q,j as O,k as x,l as R}from"./index-b3ceeb5c.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const S=t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),M=(t,o,a)=>{let i=document.getElementsByClassName(a)[0],s=t.init(i);return s.setOption(o),window.addEventListener("resize",function(){s.resize()}),s},j=t=>(w("data-v-4d77bd17"),t=t(),C(),t),Z={class:"device_count"},J={class:"inner"},K={class:"text"},X={class:"name"},Y=j(()=>e("i",{class:"icon-dot"},null,-1)),ee=b({__name:"DeviceCount",setup(t){let o=L([{count:2190,name:"设备总数"},{count:190,name:"季度新增"},{count:3001,name:"运营设备"},{count:108,name:"异常设备"}]);return(a,i)=>(d(),_("div",Z,[e("div",J,[(d(!0),_(A,null,z(m(o),(s,n)=>(d(),_("div",{class:"innerItem",key:n},[e("h4",K,p(m(S)(s.count)),1),e("span",X,[Y,y(p(s.name),1)])]))),128))])]))}});const te=g(ee,[["__scopeId","data-v-4d77bd17"]]),E=t=>(w("data-v-f9c25a8a"),t=t(),C(),t),ae={class:"faulty_equipment"},se={class:"inner"},oe={class:"tabs"},ne={class:"content"},ce=E(()=>e("div",{class:"header"},[e("span",{class:"col"},"异常时间"),e("span",{class:"col"},"设备地址"),e("span",{class:"col"},"异常代码")],-1)),le={class:"equipment-info"},ie={class:"rolling"},re=E(()=>e("span",{class:"col"},"20180701",-1)),de=E(()=>e("span",{class:"col",title:"深圳市南山区西丽万科云城C号楼4层512"},"深圳市南山区西丽万科云城C号楼4层512",-1)),_e=E(()=>e("span",{class:"col"},"1000001",-1)),ue=E(()=>e("span",{class:"icon-dot"},null,-1)),me=[re,de,_e,ue],he=b({__name:"FaultyEquipment",setup(t){let o=L("faulty");const a=i=>{i!==o.value&&(o.value=i)};return(i,s)=>(d(),_("div",ae,[e("div",se,[e("div",oe,[e("span",{class:k(["text",{actived:m(o)==="faulty"}]),onClick:s[0]||(s[0]=n=>a("faulty"))},"故障设备监控 ",2),e("span",{class:k(["text",{actived:m(o)==="abnormal"}]),onClick:s[1]||(s[1]=n=>a("abnormal"))},"异常设备监控",2)]),e("div",ne,[ce,e("div",le,[e("div",ie,[(d(),_(A,null,z(20,(n,h)=>e("div",{class:"row",key:h},me)),64))])])])])]))}});const fe=g(he,[["__scopeId","data-v-f9c25a8a"]]),B=t=>(w("data-v-8dca650c"),t=t(),C(),t),ve={class:"point_statistics"},pe={class:"inner"},ye=B(()=>e("h3",{class:"title"},"点位分布统计",-1)),be={class:"echarts"},ge=B(()=>e("div",{class:"echarts_point_main"},null,-1)),$e={class:"data"},xe={class:"dataItem"},Se={class:"number"},we=B(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("点位总数")],-1)),Ce={class:"dataItem"},Ie={class:"number"},ke=B(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("本月新增")],-1)),Fe=b({__name:"PointStatistics",setup(t){const o=D("$echarts"),a=[{value:20,name:"云南"},{value:26,name:"北京"},{value:24,name:"山东"},{value:25,name:"河北"},{value:20,name:"江苏"},{value:25,name:"浙江"},{value:30,name:"四川"},{value:42,name:"湖北"}],i=["#006cff","#60cda0","#ed8884","#ff9f7f","#0096ff","#9fe6b8","#32c5e9","#1d9dff"];let s={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},color:i,series:[{name:"面积模式",type:"pie",radius:["10%","70%"],center:["50%","50%"],roseType:"radius",label:{fontSize:10},labelLine:{length:6,length2:8},data:a.map((n,h)=>({...n,label:{color:i[h]}}))}]};return I(()=>{M(o,s,"echarts_point_main")}),(n,h)=>(d(),_("div",ve,[e("div",pe,[ye,e("div",be,[ge,e("div",$e,[e("div",xe,[e("h4",Se,p(m(S)(32011)),1),we]),e("div",Ce,[e("h4",Ie,p(m(S)(418)),1),ke])])])])]))}});const Te=g(Fe,[["__scopeId","data-v-8dca650c"]]),V=t=>(w("data-v-8fced839"),t=t(),C(),t),Le={class:"map_region"},Ae=V(()=>e("div",{class:"header"},[e("i",{class:"icon-cube"}),y("设备数据统计")],-1)),ze=V(()=>e("div",{class:"echarts"},[e("div",{class:"echarts_map_main"})],-1)),De=[Ae,ze],Me=b({__name:"MapRegion",setup(t){const o=D("$echarts");let a={黑龙江:[127.9688,45.368],内蒙古:[110.3467,41.4899],吉林:[125.8154,44.2584],北京市:[116.4551,40.2539],辽宁:[123.1238,42.1216],河北:[114.4995,38.1006],天津:[117.4219,39.4189],山西:[112.3352,37.9413],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],宁夏:[106.3586,38.1775],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],西藏:[91.11,29.97],四川:[103.9526,30.7617],重庆:[108.384366,30.439702],山东:[117.1582,36.8701],河南:[113.4668,34.6234],江苏:[118.8062,31.9208],安徽:[117.29,32.0581],湖北:[114.3896,30.6628],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],江西:[116.0046,28.6633],湖南:[113.0823,28.2568],贵州:[106.6992,26.7682],云南:[102.9199,25.4663],广东:[113.12244,23.009505],广西:[108.479,23.1152],海南:[110.3893,19.8516],上海:[121.4648,31.2891]},i=[[{name:"黑龙江",value:500}],[{name:"内蒙古",value:300}],[{name:"北京市",value:200}],[{name:"吉林",value:300}],[{name:"辽宁",value:500}],[{name:"河北",value:600}],[{name:"天津",value:500}],[{name:"山西",value:700}],[{name:"陕西",value:600}],[{name:"甘肃",value:500}],[{name:"宁夏",value:500}],[{name:"青海",value:700}],[{name:"新疆",value:300}],[{name:"西藏",value:300}],[{name:"四川",value:1e3}],[{name:"重庆",value:900}],[{name:"广东",value:300}],[{name:"山东",value:600}],[{name:"河南",value:1800}],[{name:"江苏",value:1e3}],[{name:"安徽",value:900}],[{name:"湖北",value:3200}],[{name:"浙江",value:1600}],[{name:"福建",value:900}],[{name:"湖南",value:2400}],[{name:"贵州",value:800}],[{name:"广西",value:700}],[{name:"海南",value:700}],[{name:"上海",value:170}],[{name:"江西",value:170}],[{name:"云南",value:500}]];const s=function(c){let l=[];for(let r=0;r<c.length;r++){let f=c[r],$=[114.3896,30.6628],u=a[f[0].name];$&&u&&l.push({coords:[$,u],value:f[0].value})}return l};let n=[];[["广东",i]].forEach(function(c,l){n.push({type:"lines",zlevel:1,effect:{show:!0,period:4,trailLength:.02,symbol:"arrow",symbolSize:5},lineStyle:{width:1,opacity:1,curveness:.3},data:s(c[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:4,brushType:"stroke",scale:4},label:{show:!0,position:"right",offset:[5,0],formatter:function(r){return r.data.name},fontSize:10},emphasis:{label:{show:!0}},symbol:"circle",symbolSize:function(r){return 3+r[2]/150*1},itemStyle:{show:!1,color:"#FFA54F"},data:c[1].map(function(r){return{name:r[0].name,value:a[r[0].name].concat([r[0].value]),label:{color:"#00eaff"}}})},{type:"scatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:4,brushType:"stroke",scale:4},label:{show:!0,position:"right",color:"#0f0",formatter:"{b}"},emphasis:{show:!0,label:{color:"#FFA54F"}},symbol:"pin",symbolSize:30,data:[{name:c[0],value:a[c[0]].concat([10])}]})});let h={tooltip:{trigger:"item",backgroundColor:"rgba(166, 200, 76, 0.82)",borderColor:"#FFFFCC",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100",formatter:function(c,l,r){let f="",$=c.name,u=c.value[c.seriesIndex+1];return f="<span style='color:#fff;'>"+$+"</span><br/>数据："+u,f}},backgroundColor:"transparent",visualMap:{min:1,max:4e3,calculable:!0,show:!0,orient:"horizontal",textStyle:{color:"#fff"},color:["#f44336","#fc9700","#ffde00","#ffde00","#00eaff"],label:{color:"#fff"}},geo:{map:"china",zoom:1.2,roam:!0,itemStyle:{color:"transparent",borderColor:"#00ffff",borderWidth:1},emphasis:{label:{show:!1},itemStyle:{color:"rgba(37, 43, 61, .5)"}}},series:n};return I(()=>{M(o,h,"echarts_map_main")}),(c,l)=>(d(),_("div",Le,De))}});const qe=g(Me,[["__scopeId","data-v-8fced839"]]),N=t=>(w("data-v-28eb8db4"),t=t(),C(),t),Ee={class:"user_statistics"},Be={class:"inner"},Ne=N(()=>e("h3",{class:"title"},"全国用户总量统计",-1)),Ge={class:"echarts"},Oe=N(()=>e("div",{class:"echarts_user_main"},null,-1)),Pe={class:"data"},Qe={class:"dataItem"},Ve={class:"number"},He=N(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("用户总量")],-1)),We={class:"dataItem"},Ue={class:"number"},Re=N(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("本月新增")],-1)),P=6,je=b({__name:"UserStatistics",setup(t){const o=D("$echarts");let a=["上海","广州","北京","深圳","合肥","","......","","杭州","厦门","济南","成都","重庆"],i=[2100,1900,1700,1560,1400,1200,1200,1200,900,750,600,480,240],s={name:"",value:1200,itemStyle:{color:"#254065"},emphasis:{itemStyle:{color:"#254065"}},tooltip:{extraCssText:"opacity: 0"}},n=i.map(l=>l===1200?s:l),h={title:{show:!1,text:"全国用户总量统计"},xAxis:{type:"category",data:a,axisLabel:{color:"#4c9bfd"},axisTick:{alignWithLabel:!1,show:!1},axisLine:{lineStyle:{color:"rgba(0, 240, 255, 0.3)"}}},yAxis:[{type:"value",axisTick:{alignWithLabel:!1,show:!1},axisLabel:{color:"#4c9bfd"},axisLine:{lineStyle:{color:"rgba(0, 240, 255, 0.3)"}},splitLine:{lineStyle:{color:"rgba(0, 240, 255, 0.3)"}}}],dataZoom:[{type:"inside"}],tooltip:{trigger:"item"},grid:{left:"0%",right:"3%",bottom:"3%",top:"4%",containLabel:!0,show:!0,borderColor:"rgba(0, 240, 255, 0.3)"},series:[{type:"bar",showBackground:!0,name:"直接访问",barWidth:"60%",itemStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00fffb"},{offset:1,color:"#0061ce"}])},emphasis:{trigger:"item",itemStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:n}]};const c=l=>{l.on("click",function(r){l.dispatchAction({type:"dataZoom",startValue:a[Math.max(r.dataIndex-P/2,0)],endValue:a[Math.min(r.dataIndex+P/2,i.length-1)]})})};return I(()=>{let l=M(o,h,"echarts_user_main");c(l)}),(l,r)=>(d(),_("div",Ee,[e("div",Be,[Ne,e("div",Ge,[Oe,e("div",Pe,[e("div",Qe,[e("span",Ve,p(m(S)(120899)),1),He]),e("div",We,[e("span",Ue,p(m(S)(248)),1),Re])])])])]))}});const Ze=g(je,[["__scopeId","data-v-28eb8db4"]]),H=t=>(w("data-v-6cbcaf4f"),t=t(),C(),t),Je={class:"inner"},Ke={class:"tabs"},Xe=["onClick"],Ye={class:"data"},et={class:"dataItem"},tt={class:"number"},at=H(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("订单量")],-1)),st={class:"dataItem"},ot={class:"number"},nt=H(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("销售额（万元）")],-1)),ct=b({__name:"Order",setup(t){let o=L([{id:1,time:"365天",orders:20301987,amount:99834},{id:2,time:"90天",orders:301987,amount:9834},{id:3,time:"30天",orders:1987,amount:3834},{id:4,time:"24小时",orders:987,amount:834}]),a=L(1),i=Q(()=>o.value.find(f=>f.id===a.value));const s=f=>{a.value=f};let n,h=5e3;const c=()=>{n=null,a.value<4?a.value++:a.value=1,s(a.value),n=setTimeout(c,h)},l=()=>{n=setTimeout(c,h)},r=()=>{clearTimeout(n)};return I(()=>{l()}),O(()=>{r()}),(f,$)=>(d(),_("div",{class:"order_container",onMouseenter:r,onMouseleave:l},[e("div",Je,[e("div",Ke,[(d(!0),_(A,null,z(m(o),u=>(d(),_("span",{class:k(["tab",{active:m(a)===u.id}]),onClick:F=>s(u.id),key:u.id},p(u.time),11,Xe))),128))]),e("div",Ye,[e("div",et,[e("span",tt,p(m(S)(m(i).orders)),1),at]),e("div",st,[e("span",ot,p(m(S)(m(i).amount)),1),nt])])])],32))}});const lt=g(ct,[["__scopeId","data-v-6cbcaf4f"]]),W=t=>(w("data-v-cd3aa6bc"),t=t(),C(),t),it={class:"inner"},rt={class:"tabs"},dt=W(()=>e("h3",{class:"title"},"销售额统计",-1)),_t=["onClick"],ut=W(()=>e("div",{class:"echarts"},[e("div",{class:"echarts_sales_main"})],-1)),mt=b({__name:"SalesStatistics",setup(t){const o=D("$echarts");let a={year:{id:"year",name:"年",expected:[24,40,101,134,90,230,210,230,120,230,210,120],actual:[40,64,191,324,290,330,310,213,180,200,180,79]},quarter:{id:"quarter",name:"季",expected:[23,75,12,97,21,67,98,21,43,64,76,38],actual:[43,31,65,23,78,21,82,64,43,60,19,34]},month:{id:"month",name:"月",expected:[34,87,32,76,98,12,32,87,39,36,29,36],actual:[56,43,98,21,56,87,43,12,43,54,12,98]},week:{id:"week",name:"周",expected:[43,73,62,54,91,54,84,43,86,43,54,53],actual:[32,54,34,87,32,45,62,68,93,54,54,24]}},i=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],s=L("year"),n={color:["#00f2f1","#ed3f35"],tooltip:{trigger:"axis"},legend:{right:"10%",textStyle:{color:"#4c9bfd"}},grid:{top:"20%",left:"3%",right:"4%",bottom:"3%",show:!0,borderColor:"#012f4a",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:i,axisTick:{show:!1},axisLabel:{color:"#4c9bfd"},axisLine:{show:!1}},yAxis:{type:"value",name:"单位：万元",nameGap:10,nameTextStyle:{fontSize:10,color:"#4996f5"},axisTick:{show:!1},axisLabel:{color:"#4c9bfd"},splitLine:{lineStyle:{color:"#012f4a"}}},series:[{name:"预期销售额",type:"line",stack:"总量",smooth:!0,data:a.year.expected},{name:"实际销售额",type:"line",stack:"总量",smooth:!0,data:a.year.actual}]},h;I(()=>{h=M(o,n,"echarts_sales_main")});const c=v=>{s.value=v,n.series[0].data=a[s.value].expected,n.series[1].data=a[s.value].actual,h.setOption(n)};let l,r=5e3,f=["year","quarter","month","week"];const $=()=>{l=null;let v=f.findIndex(T=>T===s.value);v===f.length-1?s.value=f[0]:s.value=f[v+1],c(s.value),l=setTimeout($,r)},u=()=>{l=setTimeout($,r)},F=()=>{clearTimeout(l)};return I(()=>{u()}),O(()=>{F()}),(v,T)=>(d(),_("div",{class:"sales_statistics",onMouseenter:F,onMouseleave:u},[e("div",it,[e("div",rt,[dt,(d(!0),_(A,null,z(m(a),q=>(d(),_("span",{class:k(["tab",{active:m(s)===q.id}]),key:q.id,onClick:sa=>c(q.id)},p(q.name),11,_t))),128))]),ut])],32))}});const ht=g(mt,[["__scopeId","data-v-cd3aa6bc"]]),ft=t=>(w("data-v-2a65937b"),t=t(),C(),t),vt={class:"channels_container"},pt=ft(()=>e("div",{class:"inner"},[e("h3",{class:"title"},"渠道分布"),e("div",{class:"echarts"},[e("div",{class:"echarts_channels_main"})])],-1)),yt=[pt],bt=b({__name:"Channels",setup(t){const o=D("$echarts");var a=[{name:"机场",max:100},{name:"商场",max:100},{name:"火车站",max:100},{name:"汽车站",max:100},{name:"地铁",max:100}];let n={backgroundColor:"transparent",color:["#4A99FF","#4BFFFC"],radar:{shape:"circle",axisName:{color:"#4c9bfd",fontSize:10},axisNameGap:4,indicator:a,splitArea:{show:!0,areaStyle:{color:["rgba(255,255,255,0)","rgba(255,255,255,0)"]}},axisLine:{lineStyle:{color:"#153269"}},splitLine:{lineStyle:{color:"#113865",width:1}}},tooltip:{show:!0,position:["60%","10%"]},series:[{name:"北京",type:"radar",symbolSize:5,data:[{value:[90,37,56,66,34],itemStyle:{lineStyle:{color:"#4A99FF",shadowBlur:10}},areaStyle:{color:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#4A99FF"},{offset:.5,color:"rgba(0,0,0,0)"},{offset:1,color:"#4A99FF"}],globalCoord:!1},opacity:1}}],symbol:"circle",label:{position:"bottom",show:!0,fontSize:10,color:"#fff"}}]};return I(()=>{M(o,n,"echarts_channels_main")}),(h,c)=>(d(),_("div",vt,yt))}});const gt=g(bt,[["__scopeId","data-v-2a65937b"]]),G=t=>(w("data-v-0b6ff793"),t=t(),C(),t),$t={class:"quarter_container"},xt={class:"inner"},St=G(()=>e("h3",{class:"title"},"一季度销售进度",-1)),wt=G(()=>e("div",{class:"echarts"},[e("div",{class:"echarts_quarter_main"})],-1)),Ct={class:"data"},It={class:"dataItem"},kt={class:"number"},Ft=G(()=>e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("销售额(万元)")],-1)),Tt=G(()=>e("div",{class:"dataItem"},[e("h4",{class:"number"},"150%"),e("span",{class:"text"},[e("i",{class:"icon-dot"}),y("同比增长")])],-1)),Lt=b({__name:"Quarter",setup(t){const o=D("$echarts");let a={title:{text:"80%",x:"46%",y:"46%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"16",fontFamily:"SourceHanSansCN-Medium",color:"#66FFFF"}},series:[{name:"销售进度",type:"pie",radius:["120%","140%"],center:["50%","80%"],labelLine:{show:!1},startAngle:180,hoverOffset:0,data:[{value:100,itemStyle:{color:new o.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00c9e0"},{offset:1,color:"#005fc1"}])}},{value:100,itemStyle:{color:"#12274d"}},{value:200,itemStyle:{color:"transparent"}}]}]};return I(()=>{M(o,a,"echarts_quarter_main")}),(i,s)=>(d(),_("div",$t,[e("div",xt,[St,wt,e("div",Ct,[e("div",It,[e("h4",kt,p(m(S)(1321)),1),Ft]),Tt])])]))}});const At=g(Lt,[["__scopeId","data-v-0b6ff793"]]),zt={class:"channels_quarter"},Dt=b({__name:"ChannelsAndQuarter",setup(t){return(o,a)=>(d(),_("div",zt,[x(gt),x(At)]))}});const Mt=g(Dt,[["__scopeId","data-v-d448a4a4"]]),U=t=>(w("data-v-7cad31fe"),t=t(),C(),t),qt={class:"hot_list"},Et={class:"inner"},Bt=R('<div class="all_nation" data-v-7cad31fe><h3 class="title" data-v-7cad31fe>全国热榜</h3><div class="data" data-v-7cad31fe><div class="dataItem" data-v-7cad31fe><i class="icon-cup1" style="color:#d93f36;" data-v-7cad31fe></i>可爱多</div><div class="dataItem" data-v-7cad31fe><i class="icon-cup2" style="color:#68d8fe;" data-v-7cad31fe></i>娃哈啥</div><div class="dataItem" data-v-7cad31fe><i class="icon-cup3" style="color:#4c9bfd;" data-v-7cad31fe></i>喜之郎</div></div></div>',1),Nt={class:"province"},Gt=U(()=>e("h3",{class:"title"},"各省热销",-1)),Ot={class:"data"},Pt=["onMouseenter"],Qt={class:"text"},Vt={class:"number"},Ht={class:"date_month"},Wt=U(()=>e("h3",{class:"title"},"// 近30日 //",-1)),Ut={class:"data"},Rt={class:"text"},jt={class:"number"},Zt=b({__name:"HotList",setup(t){let o=[{city:"北京",sales:25179,flag:!0,brands:[{name:"可爱多",num:9086,flag:!0},{name:"娃哈哈",num:8341,flag:!0},{name:"喜之郎",num:7407,flag:!1},{name:"八喜",num:6080,flag:!1},{name:"小洋人",num:6724,flag:!1},{name:"好多鱼",num:2170,flag:!0}]},{city:"河北",sales:23252,flag:!1,brands:[{name:"可爱多",num:3457,flag:!1},{name:"娃哈哈",num:2124,flag:!0},{name:"喜之郎",num:8907,flag:!1},{name:"八喜",num:6080,flag:!0},{name:"小洋人",num:1724,flag:!1},{name:"好多鱼",num:1170,flag:!1}]},{city:"上海",sales:20760,flag:!0,brands:[{name:"可爱多",num:2345,flag:!0},{name:"娃哈哈",num:7109,flag:!0},{name:"喜之郎",num:3701,flag:!1},{name:"八喜",num:6080,flag:!1},{name:"小洋人",num:2724,flag:!1},{name:"好多鱼",num:2998,flag:!0}]},{city:"江苏",sales:23252,flag:!1,brands:[{name:"可爱多",num:2156,flag:!1},{name:"娃哈哈",num:2456,flag:!0},{name:"喜之郎",num:9737,flag:!0},{name:"八喜",num:2080,flag:!0},{name:"小洋人",num:8724,flag:!0},{name:"好多鱼",num:1770,flag:!1}]},{city:"山东",sales:20760,flag:!0,brands:[{name:"可爱多",num:9567,flag:!0},{name:"娃哈哈",num:2345,flag:!1},{name:"喜之郎",num:9037,flag:!1},{name:"八喜",num:1080,flag:!0},{name:"小洋人",num:4724,flag:!1},{name:"好多鱼",num:9999,flag:!0}]}],a=L(o[0].city);const i=u=>{a.value=u};let s=Q(()=>o.find(u=>u.city===a.value).brands),n,h=5e3,c=["北京","河北","上海","江苏","山东"];const l=()=>{n=null;let u=c.findIndex(F=>F===a.value);u===c.length-1?a.value=c[0]:a.value=c[u+1],i(a.value),n=setTimeout(l,h)},r=u=>{$(),i(u)},f=()=>{n=setTimeout(l,h)},$=()=>{clearTimeout(n)};return I(()=>{f()}),O(()=>{$()}),(u,F)=>(d(),_("div",qt,[e("div",Et,[Bt,e("div",Nt,[Gt,e("div",Ot,[(d(!0),_(A,null,z(m(o),(v,T)=>(d(),_("div",{class:k(["dataItem",{active:v.city===m(a)}]),key:T,onMouseenter:q=>r(v.city),onMouseleave:f},[e("span",Qt,p(v.city),1),e("span",Vt,[y(p(m(S)(v.sales))+" ",1),e("i",{class:k({"icon-up":v.flag,"icon-down":!v.flag})},null,2)])],42,Pt))),128))])]),e("div",Ht,[Wt,e("div",Ut,[(d(!0),_(A,null,z(m(s),(v,T)=>(d(),_("div",{class:"dataItem",key:T},[e("span",Rt,p(v.name),1),e("span",jt,[y(p(m(S)(v.num))+" ",1),e("i",{class:k({"icon-up":v.flag,"icon-down":!v.flag})},null,2)])]))),128))])])])]))}});const Jt=g(Zt,[["__scopeId","data-v-7cad31fe"]]),Kt={class:"monitor monitor_size_px"},Xt={class:"container"},Yt={class:"left"},ea={class:"center"},ta={class:"right"},aa=b({__name:"index",setup(t){return(o,a)=>(d(),_("div",Kt,[e("div",Xt,[e("div",Yt,[x(te),x(fe),x(Te)]),e("div",ea,[x(qe),x(Ze)]),e("div",ta,[x(lt),x(ht),x(Mt),x(Jt)])])]))}});const ca=g(aa,[["__scopeId","data-v-eb1bd22a"]]);export{ca as default};
