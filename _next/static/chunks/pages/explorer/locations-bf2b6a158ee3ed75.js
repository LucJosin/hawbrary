(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{5103:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explorer/locations",function(){return t(95)}])},6820:function(n,e,t){"use strict";t.d(e,{Lj:function(){return f},m1:function(){return j},sF:function(){return N},ZR:function(){return Z}});var i=t(5893),s=t(618),r=t(5675),c=t.n(r),a=t(1664),o=t.n(a),l=t(89),u=t(8850),d=t.n(u);function f(n){let{uuid:e,target:t,title:r,description:a,thumbnail:u}=n;return(0,i.jsx)(o(),{href:(0,s.jG)(t,e),children:(0,i.jsxs)("div",{className:d().card,children:[(0,i.jsxs)("div",{className:d().info,children:[(0,i.jsx)("h2",{children:r}),(0,i.jsx)(l.d,{value:a})]}),(0,i.jsx)(c(),{src:u,height:0,width:0,alt:r,className:d().image})]})})}var x=t(582),m=t(3846),h=t.n(m);function j(n){let{uuid:e,target:t,name:r,description:a,thumbnail:l}=n;return(0,i.jsx)(o(),{href:(0,s.jG)(t,e),children:(0,i.jsxs)("div",{className:h().card,children:[(0,i.jsx)(c(),{src:l,height:0,width:0,alt:r,className:h().image}),(0,i.jsxs)("div",{className:h().container,children:[(0,i.jsx)(x.Z,{value:r}),a.map((n,e)=>(0,i.jsx)("span",{className:h().description,children:n},e))]})]})})}var p=t(4949),v=t.n(p);function N(n){let{uuid:e,target:t,title:r,description:a,thumbnail:l}=n;return(0,i.jsx)(o(),{href:(0,s.jG)(t,e),children:(0,i.jsxs)("div",{className:v().card,children:[(0,i.jsx)(c(),{src:l,height:0,width:0,alt:r,className:v().image}),(0,i.jsxs)("div",{className:v().container,children:[(0,i.jsx)(x.Z,{value:r}),(0,i.jsx)("p",{className:v().description,children:a})]})]})})}var g=t(2136),_=t.n(g);function Z(n){return(0,i.jsxs)("div",{className:_().card,children:[(0,i.jsx)(c(),{src:n.thumbnail,height:0,width:0,alt:n.title,className:_().image}),(0,i.jsxs)("div",{className:_().more,children:[(0,i.jsxs)("div",{className:_().info,children:[(0,i.jsx)("h3",{className:_().title,children:n.title}),(0,i.jsx)("p",{className:_().description,children:n.description})]}),(0,i.jsx)("div",{className:_().routers,children:n.children})]})]})}},89:function(n,e,t){"use strict";t.d(e,{d:function(){return c}});var i=t(5893),s=t(6333),r=t.n(s);function c(n){let{value:e,children:t,textAlign:s="initial",fontSize:c="1em"}=n;return(0,i.jsx)("p",{className:r().description,style:{textAlign:s,fontSize:c},children:null!=e?e:t})}},582:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(5893),s=t(3240),r=t.n(s);function c(n){let{value:e,children:t,fontSize:s="1em",margin:c}=n;return(0,i.jsx)("h2",{className:r().title,style:{fontSize:s,margin:c},children:null!=e?e:t})}},1603:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(5893),s=t(1026),r=t.n(s);function c(n){let{children:e,min:t="20rem"}=n;return(0,i.jsx)("div",{className:r().items,style:{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t,", 1fr))")},children:e})}},221:function(n,e,t){"use strict";t.d(e,{t:function(){return l}});var i=t(5893),s=t(1093),r=t(5184),c=t.n(r),a=t(1367),o=t.n(a);let l={Item:function(n){let{name:e,icon:t,isSelected:r=!1,onClick:a}=n;return(0,i.jsx)("span",{className:r?c().selectedBox:c().box,onClick:a,children:e||(0,i.jsx)(s.Z,{icon:t,size:"16"})})},Root:function(n){let{page:e,data:t,setPage:s}=n;return(0,i.jsxs)("div",{className:o().pagination,children:[(0,i.jsx)(l.Item,{icon:"ic:round-navigate-before",onClick:()=>{1!==e&&s(e-1)}}),(()=>{var n;let e=[];for(let s=0;s<(null!==(n=null==t?void 0:t.page_total)&&void 0!==n?n:0);s++){let n=s+1;e.push((0,i.jsx)(l.Item,{name:"".concat(n),isSelected:(null==t?void 0:t.page)===n},n))}return e})(),(0,i.jsx)(l.Item,{icon:"ic:round-navigate-next",onClick:()=>{e!==(null==t?void 0:t.page_total)&&s(e+1)}})]})}}},618:function(n,e,t){"use strict";function i(n,e){let t=function(n){let e=n.split("/");return e.pop()}(e);return t?s(n,null!=t?t:""):null}function s(n,e){return"/explorer/".concat(n,"/details/?uuid=").concat(e)}t.d(e,{jG:function(){return s},oC:function(){return i}})},95:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var i=t(5893),s=t(6820),r=t(667),c=t(5365),a=t(914),o=t(1603),l=t(221),u=t(3188),d=t(3612),f=t(9229),x=t.n(f),m=t(7294),h=t(9734);function j(){return(0,i.jsx)(u.Z,{children:(0,i.jsxs)("div",{className:x().container,children:[(0,i.jsx)(c.Z,{value:"Locations"}),(0,i.jsx)(p,{})]})})}function p(){var n;let[e,t]=(0,m.useState)(1),{data:c,error:u,isLoading:f}=(0,h.ZP)("locations?page=".concat(e),()=>(0,d.hI)({page:e}));return u?(0,i.jsx)(a.Z,{}):f?(0,i.jsx)(r.Z,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{min:"32rem",children:null==c?void 0:null===(n=c.data)||void 0===n?void 0:n.map((n,e)=>(0,i.jsx)(s.Lj,{uuid:n.uuid,target:"locations",title:n.name,description:n.description,thumbnail:n.thumbnail},e))}),c&&(0,i.jsx)(l.t.Root,{page:e,data:c,setPage:t})]})}},8850:function(n){n.exports={card:"hnyq81eC",image:"_5QfyldKN",info:"mbZIK3B_"}},3846:function(n){n.exports={card:"W1b08JLI",container:"bUeOm9XF",description:"Auq9bXPL",image:"FRW7VTdv",name:"br5KRbGp"}},4949:function(n){n.exports={card:"O_1HXD8O",container:"_00YkZ8J8",description:"GLgbcXNs",image:"_8uSHj1Rx",title:"tWW274fd"}},2136:function(n){n.exports={card:"YR6yf0dF",image:"vj29FcVA",more:"RF5_fnPx",info:"omqUp8h9",description:"suzi3VMo",routers:"snPVCsdk"}},6333:function(n){n.exports={description:"E8Ia68GU"}},3240:function(){},1026:function(n){n.exports={items:"_1tOrkyTv"}},5184:function(n){n.exports={box:"Zigye_B5",selectedBox:"_92yjUAsh Zigye_B5"}},1367:function(n){n.exports={pagination:"QMvSooDl"}},9229:function(n){n.exports={container:"TLvPSu6a"}}},function(n){n.O(0,[981,675,398,774,888,179],function(){return n(n.s=5103)}),_N_E=n.O()}]);