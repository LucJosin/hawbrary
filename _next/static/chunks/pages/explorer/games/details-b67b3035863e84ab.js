(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[961],{4741:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explorer/games/details",function(){return n(4062)}])},89:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var a=n(5893),i=n(6333),s=n.n(i);function r(e){let{value:t,children:n,textAlign:i="initial",fontSize:r="1em"}=e;return(0,a.jsx)("p",{className:s().description,style:{textAlign:i,fontSize:r},children:null!=t?t:n})}},582:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5893),i=n(3240),s=n.n(i);function r(e){let{value:t,children:n,fontSize:i="1em",margin:r}=e;return(0,a.jsx)("h2",{className:s().title,style:{fontSize:i,margin:r},children:null!=t?t:n})}},8424:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var a=n(5893),i=n(1534),s=n(6527),r=n(4984),c=n.n(r);function o(e){let{uuid:t,href:n,createdAt:r,updatedAt:o}=e,l=new Date(r).toLocaleDateString(),u=new Date(o).toLocaleDateString();return(0,a.jsx)("div",{className:c().info,children:(0,a.jsxs)(s.v.Root,{title:"API Info:",children:[(0,a.jsx)(s.v.Item,{icon:"mdi:map-marker-path",name:"UUID",value:t}),(0,a.jsx)(s.v.Item,{icon:"mdi:map-marker-path",name:"Href",value:n}),(0,a.jsx)(s.v.Item,{icon:"mdi:clock-outline",name:"Created At",value:"".concat(l," (").concat((0,i.xp)(r)," days ago)")}),(0,a.jsx)(s.v.Item,{icon:"mdi:update",name:"Updated At",value:"".concat(u," (").concat((0,i.xp)(o)," days ago)")})]})})}},6527:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var a=n(5893),i=n(1093),s=n(1005),r=n.n(s),c=n(5012),o=n.n(c);let l={Item:function(e){let{icon:t,name:n,value:s}=e;return(0,a.jsxs)("span",{className:r().item,children:[(0,a.jsx)(i.Z,{icon:t,size:"20"}),"".concat(n,": ").concat(s)]})},Root:function(e){let{title:t,children:n}=e;return(0,a.jsxs)("div",{className:o().infobox,children:[(0,a.jsx)("h3",{children:t}),n]})}}},4623:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var a=n(5893),i=n(5625),s=n.n(i),r=n(1451),c=n.n(r),o=n(582),l=n(7173),u=n.n(l);let d={Grid:function(e){let{children:t,gridRepeat:n="auto-fit",gridMin:i}=e;return(0,a.jsx)("div",{className:c()["section-grid"],style:{gridTemplateColumns:"repeat(".concat(n,", minmax(").concat(i,", 1fr))")},children:t})},Flex:function(e){let{children:t}=e;return(0,a.jsx)("div",{className:s()["section-flex"],children:t})},Root:function(e){let{title:t,children:n}=e;return(0,a.jsxs)("div",{className:u()["section-container"],children:[(0,a.jsx)(o.Z,{value:t,fontSize:"1.2em",margin:"0 0 1rem 0"}),(0,a.jsx)("div",{className:u()["section-items"],children:n})]})}}},1211:function(e,t,n){"use strict";n.d(t,{F:function(){return c}});var a=n(5893),i=n(7426),s=n(2626),r=n.n(s);function c(e){let{sources:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Sources:"}),(0,a.jsx)("div",{className:r().sources,children:t.map((e,t)=>{let n=new URL(e);return(0,a.jsx)(i._p,{href:e,name:n.host},t)})})]})}},1534:function(e,t,n){"use strict";function a(e,t){let n=new Date(e),a=t?new Date(t):new Date;return Math.floor((a.getTime()-n.getTime())/31556952e3)}function i(e){let t=new Date(e),n=new Date;return Math.round((n.getTime()-t.getTime())/864e5)}function s(e){let t=[],n=Math.trunc(e/36e5);n>0&&(t.push(n+"h"),e-=36e5*n);let a=Math.trunc(e/6e4);a>0&&(t.push(a+"m"),e-=6e4*a);let i=Math.trunc(e/1e3);return i>0&&t.push(i+"s"),t.join(" ")}n.d(t,{Ay:function(){return a},qE:function(){return s},xp:function(){return i}})},4062:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(5893),i=n(89),s=n(7426),r=n(667),c=n(5365),o=n(8424),l=n(914),u=n(6527),d=n(4623),m=n(1211),f=n(3188),x=n(1534),h=n(3612),p=n(1236),j=n.n(p),v=n(5675),g=n.n(v),w=n(1163),N=n(7294),b=n(9734);function _(){return(0,a.jsx)(f.Z,{children:(0,a.jsx)("div",{className:j().container,children:(0,a.jsx)(I,{})})})}function I(){var e;let[t,n]=(0,N.useState)(!1),[f,p]=(0,N.useState)("en-US"),v=(0,w.useRouter)(),{uuid:_}=v.query;(0,N.useEffect)(()=>{let e=window.sessionStorage.getItem("language")||f;p(e)},[f]);let{data:I,error:y,isLoading:R}=(0,b.ZP)(_,h.z7);return y?(0,a.jsx)(l.Z,{}):!R&&(null==I?void 0:I.data)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:j().image,style:{height:t?"fit-content":"30rem",cursor:t?"zoom-out":"zoom-in"},onClick:()=>{n(!t)},children:(0,a.jsx)(g(),{src:I.data.thumbnail,alt:I.data.name,className:j().thumbnail,height:0,width:0})}),(0,a.jsxs)("div",{className:j().info,children:[(0,a.jsx)(c.Z,{value:I.data.name}),(0,a.jsx)(i.d,{value:I.data.description}),(0,a.jsxs)(u.v.Root,{title:"About:",children:[(0,a.jsx)(u.v.Item,{icon:"mingcute:game-2-fill",name:"Mode",value:"".concat(I.data.modes.join(", "))}),I.data.playtime&&(0,a.jsx)(u.v.Item,{icon:"ic:baseline-access-time",name:"Play time",value:"".concat((0,x.qE)(null!==(e=I.data.playtime)&&void 0!==e?e:0))}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-device-unknown",name:"Platforms",value:"".concat(I.data.platforms.join(", "))}),(0,a.jsx)(u.v.Item,{icon:"tabler:rating-12-plus",name:"Age rating",value:I.data.age_rating}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-developer-board",name:"Developers",value:I.data.developers.join(", ")}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-publish",name:"Publishers",value:I.data.publishers.join(", ")}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-date-range",name:"Release date",value:I.data.release_date})]}),I.data.genres&&(0,a.jsx)(d.$.Root,{title:"Genres:",children:(0,a.jsx)(d.$.Flex,{children:I.data.genres.map((e,t)=>(0,a.jsx)("span",{className:j().genre,children:e},t))})}),I.data.tags&&(0,a.jsx)(d.$.Root,{title:"Tags:",children:(0,a.jsx)(d.$.Flex,{children:I.data.tags.map((e,t)=>(0,a.jsx)("span",{className:j().genre,children:e},t))})}),I.data.stores&&(0,a.jsx)(d.$.Root,{title:"Stores:",children:(0,a.jsx)(d.$.Grid,{gridMin:"10rem",children:I.data.stores.map((e,t)=>{let n=new URL(e);return(0,a.jsx)(s._p,{href:e,name:n.host},t)})})}),I.data.trailer&&(0,a.jsx)("iframe",{width:"560",height:"315",src:(e=>{let t=new URL(e).searchParams;return"https://www.youtube.com/embed/"+t.get("v")})(I.data.trailer),title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,a.jsx)(m.F,{sources:I.data.sources}),(0,a.jsx)(o.I,{uuid:I.data.uuid,href:I.data.href,createdAt:I.data.created_at,updatedAt:I.data.updated_at})]})]}):(0,a.jsx)(r.Z,{})}},6333:function(e){e.exports={description:"E8Ia68GU"}},3240:function(){},4984:function(){},1005:function(e){e.exports={item:"BsQWOjwi"}},5012:function(e){e.exports={infobox:"rMjdRQnL"}},5625:function(e){e.exports={"section-flex":"NpydwdpF"}},1451:function(e){e.exports={"section-grid":"GQGX7I_c"}},7173:function(){},2626:function(e){e.exports={sources:"z70jdV32"}},1236:function(e){e.exports={container:"hnMZYc1g",image:"swRcnQIi",thumbnail:"_2oU46JKN",info:"XjYQYpwi",genre:"CEa02W_H",seas:"NsyUkdui",stores:"kErXB_x5"}}},function(e){e.O(0,[981,675,398,774,888,179],function(){return e(e.s=4741)}),_N_E=e.O()}]);