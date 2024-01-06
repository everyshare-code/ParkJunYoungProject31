(function(){"use strict";var t={522:function(t,e,n){var r=n(9242),a=n(3396);function i(t,e,n,r,i,o){const s=(0,a.up)("MainView");return(0,a.wg)(),(0,a.j4)(s)}var o=n(7139);const s=t=>((0,a.dD)("data-v-1b6c236a"),t=t(),(0,a.Cn)(),t),c=s((()=>(0,a._)("nav",{class:"navbar bg-body-tertiary px-3"},[(0,a._)("div",{class:"container-fluid"},[(0,a._)("a",{class:"navbar-brand",href:"#"},"서울시 코로나19 주요뉴스")])],-1))),l={class:"container"},u={class:"row mt-3"},d=["onClick"],v={key:0,class:"container mt-3"};function f(t,e,n,i,s,f){const p=(0,a.up)("LoadingView"),g=(0,a.up)("ContentView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[c,s.modal?((0,a.wg)(),(0,a.j4)(p,{key:0})):(0,a.kq)("",!0),(0,a._)("div",l,[(0,a._)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.categories,((t,e)=>((0,a.wg)(),(0,a.iD)("a",{key:t,class:(0,o.C_)(["col btn rounded me-2 d-flex align-items-center justify-content-center",[s.isActive[e]?"btn-secondary":"btn-outline-secondary"]]),onClick:(0,r.iM)((t=>f.fetchNews(e)),["prevent"])},(0,o.zw)(t),11,d)))),128))]),s.complete?((0,a.wg)(),(0,a.iD)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.contents,(t=>((0,a.wg)(),(0,a.j4)(g,{key:t,"content-data":t},null,8,["content-data"])))),128))])):(0,a.kq)("",!0)])],64)}var p=n(1076);const g={class:"row g-0"},h={class:"col-md-4"},m=["src"],w={class:"col-md-8"},b={class:"card-body"},y={class:"card-title"},_={class:"card-text"};function k(t,e,n,i,s,c){return n.contentData&&n.contentData.title&&n.contentData.img?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"card mb-3 mt-3",onClick:e[0]||(e[0]=(0,r.iM)((t=>c.detailView(n.contentData.link)),["prevent"]))},[(0,a._)("div",g,[(0,a._)("div",h,[(0,a._)("img",{src:n.contentData.img,class:"w-100 h-100 object-fit-cover",alt:""},null,8,m)]),(0,a._)("div",w,[(0,a._)("div",b,[(0,a._)("h5",y,[(0,a._)("b",null,(0,o.zw)(n.contentData.title),1)]),(0,a._)("p",_,(0,o.zw)(n.contentData.summary),1)])])])])):(0,a.kq)("",!0)}var j={props:{contentData:{type:Object,required:!1}},methods:{detailView(t){window.location.href=t}}},D=n(89);const O=(0,D.Z)(j,[["render",k],["__scopeId","data-v-5b1266b8"]]);var x=O;const C={class:"modal-backdrop justify-content-center align-items-center d-flex"},A={class:"progress w-50",role:"progressbar","aria-label":"Animated striped example","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"};function V(t,e,n,r,i,s){return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",A,[(0,a._)("div",{class:"progress-bar progress-bar-striped progress-bar-animated",style:(0,o.j5)({width:i.progress+"%"})}," Crawling... ",4)])])}var M={data(){return{progress:0,interval:null}},mounted(){this.startProgress()},methods:{startProgress(){this.interval=setInterval((()=>{this.progress<100?this.progress+=6:clearInterval(this.interval)}),500)}}};const P=(0,D.Z)(M,[["render",V],["__scopeId","data-v-641ae502"]]);var z=P,I={components:{ContentView:x,LoadingView:z},data(){return{isActive:[],complete:!1,modal:!0,categories:["전체","재택치료/외래진료","백신접종","경제지원","코로나19 생활정보","코로나검사치료","온라인문화생활","사회적거리두기"],contents:null}},methods:{fetchNews(t){this.isActive.fill(!1),this.isActive[t]=!0,this.modal=!0,console.log(this.categories[t]),p.Z.get("http://192.168.0.49:5001/corona",{params:{category:t?t+1:null}}).then((t=>{this.contents=t.data,this.complete=!0,this.modal=!1})).catch((t=>console.log(t)))},initialize(){this.fetchNews(null)}},mounted(){this.isActive=new Array(8).fill(!1),this.initialize()}};const S=(0,D.Z)(I,[["render",f],["__scopeId","data-v-1b6c236a"]]);var Z=S,q={name:"App",components:{MainView:Z}};const T=(0,D.Z)(q,[["render",i]]);var H=T;(0,r.ri)(H).mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var l=a();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(e&&e(r);l<o.length;l++)i=o[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(522)}));r=n.O(r)})();
//# sourceMappingURL=app.5932ae37.js.map