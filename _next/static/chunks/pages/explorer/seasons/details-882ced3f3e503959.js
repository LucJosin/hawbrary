(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{3645:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explorer/seasons/details",function(){return t(6545)}])},5752:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(5893),s=t(618),r=t(7426),c=t(1709),i=t.n(c);function o(e){let{title:n,target:t,data:c}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:n}),(0,a.jsx)("div",{className:i().reference,children:c.map((e,c)=>(0,a.jsx)(r.r.Secondary,{href:(0,s.oC)(t,e),name:"".concat(n.slice(0,-2)," ").concat(c+1),isLocal:!0},c))})]})}},8424:function(e,n,t){"use strict";t.d(n,{I:function(){return o}});var a=t(5893),s=t(1534),r=t(6527),c=t(4984),i=t.n(c);function o(e){let{uuid:n,href:t,createdAt:c,updatedAt:o}=e,u=new Date(c).toLocaleDateString(),l=new Date(o).toLocaleDateString();return(0,a.jsx)("div",{className:i().info,children:(0,a.jsxs)(r.v.Root,{title:"API Info:",children:[(0,a.jsx)(r.v.Item,{icon:"mdi:map-marker-path",name:"UUID",value:n}),(0,a.jsx)(r.v.Item,{icon:"mdi:map-marker-path",name:"Href",value:t}),(0,a.jsx)(r.v.Item,{icon:"mdi:clock-outline",name:"Created At",value:"".concat(u," (").concat((0,s.xp)(c)," days ago)")}),(0,a.jsx)(r.v.Item,{icon:"mdi:update",name:"Updated At",value:"".concat(l," (").concat((0,s.xp)(o)," days ago)")})]})})}},6527:function(e,n,t){"use strict";t.d(n,{v:function(){return u}});var a=t(5893),s=t(3654),r=t(1005),c=t.n(r),i=t(5012),o=t.n(i);let u={Item:function(e){let{icon:n,name:t,value:r}=e;return(0,a.jsxs)("span",{className:c().item,children:[(0,a.jsx)(s.Icon,{icon:n}),"".concat(t,": ").concat(r)]})},Root:function(e){let{title:n,children:t}=e;return(0,a.jsxs)("div",{className:o().infobox,children:[(0,a.jsx)("h3",{children:n}),t]})}}},1211:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});var a=t(5893),s=t(7426),r=t(2626),c=t.n(r);function i(e){let{sources:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{children:"Sources:"}),(0,a.jsx)("div",{className:c().sources,children:n.map((e,n)=>{let t=new URL(e);return(0,a.jsx)(s.r.Secondary,{href:e,name:t.host},n)})})]})}},1534:function(e,n,t){"use strict";function a(e,n){let t=new Date(e),a=n?new Date(n):new Date;return Math.floor((a.getTime()-t.getTime())/31556952e3)}function s(e){let n=new Date(e),t=new Date;return Math.round((t.getTime()-n.getTime())/864e5)}function r(e){let n=[],t=Math.trunc(e/36e5);t>0&&(n.push(t+"h"),e-=36e5*t);let a=Math.trunc(e/6e4);a>0&&(n.push(a+"m"),e-=6e4*a);let s=Math.trunc(e/1e3);return s>0&&n.push(s+"s"),n.join(" ")}t.d(n,{Ay:function(){return a},qE:function(){return r},xp:function(){return s}})},618:function(e,n,t){"use strict";function a(e,n){let t=function(e){let n=e.split("/");return n.pop()}(n);return s(e,null!=t?t:"")}function s(e,n){return"/explorer/".concat(e,"/details/?uuid=").concat(n)}t.d(n,{jG:function(){return s},oC:function(){return a}})},119:function(e,n,t){"use strict";t.d(n,{I:function(){return s},c:function(){return r}});let a={"pt-BR":"BRL","en-US":"USD"};function s(e){return 0===e?"Not known":1===e?"Male":2===e?"Female":void 0}function r(e,n){let t=a[n];return e.toLocaleString(n,{style:"currency",currency:t,minimumFractionDigits:2})}},6545:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var a=t(5893),s=t(7426),r=t(667),c=t(5752),i=t(8424),o=t(914),u=t(6527),l=t(1211),d=t(3188),m=t(1534),f=t(618),h=t(119),x=t(3612),j=t(2156),p=t.n(j),v=t(5675),g=t.n(v),_=t(1163),N=t(7294),w=t(9734);function S(){return(0,a.jsx)(d.Z,{children:(0,a.jsx)("div",{className:p().container,children:(0,a.jsx)(I,{})})})}function I(){var e,n;let[t,d]=(0,N.useState)(!1),[j,v]=(0,N.useState)("en-US"),S=(0,_.useRouter)(),{uuid:I}=S.query;(0,N.useEffect)(()=>{let e=window.sessionStorage.getItem("language")||j;v(e)},[j]);let{data:D,error:y,isLoading:b}=(0,w.ZP)(I,x.$T);return y?(0,a.jsx)(o.Z,{}):!b&&(null==D?void 0:D.data)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:p().image,style:{height:t?"fit-content":"30rem",cursor:t?"zoom-out":"zoom-in"},onClick:()=>{d(!t)},children:(0,a.jsx)(g(),{src:D.data.thumbnail,alt:D.data.title,className:p().thumbnail,height:0,width:0})}),(0,a.jsxs)("div",{className:p().info,children:[(0,a.jsx)("h1",{className:p().title,children:D.data.title}),(0,a.jsx)("p",{className:p().description,children:D.data.description}),(0,a.jsx)("span",{className:p().genres,children:D.data.genres.map((e,n)=>(0,a.jsx)("span",{className:p().genre,children:e},n))}),(0,a.jsxs)(u.v.Root,{title:"About:",children:[(0,a.jsx)(u.v.Item,{icon:"system-uicons:episodes",name:"Season",value:"".concat(D.data.season_num)}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-access-time",name:"Watch time",value:"".concat((0,m.qE)(null!==(e=D.data.duration_total)&&void 0!==e?e:0))}),(0,a.jsx)(u.v.Item,{icon:"ic:baseline-attach-money",name:"Budget",value:"".concat((0,h.c)(null!==(n=D.data.budget)&&void 0!==n?n:0,j))})]}),(0,a.jsx)(c.Z,{title:"Episodes:",target:"episodes",data:D.data.episodes}),(0,a.jsxs)("div",{className:p().seasons,children:[(0,a.jsx)("h3",{children:"Seasons: "}),(0,a.jsxs)("span",{className:p().seas,children:[D.data.prev_season&&(0,a.jsx)(s.r.Secondary,{href:(0,f.oC)("seasons",D.data.prev_season),name:"Prev season",isLocal:!0}),D.data.next_season&&(0,a.jsx)(s.r.Secondary,{href:(0,f.oC)("seasons",D.data.next_season),name:"Next season",isLocal:!0})]})]}),(0,a.jsx)(l.F,{sources:D.data.sources}),(0,a.jsx)(i.I,{uuid:D.data.uuid,href:D.data.href,createdAt:D.data.created_at,updatedAt:D.data.updated_at})]})]}):(0,a.jsx)(r.Z,{})}},1709:function(e){e.exports={reference:"hwDqMG"}},4984:function(){},1005:function(e){e.exports={item:"BsQWOj"}},5012:function(e){e.exports={infobox:"rMjdRQ"}},2626:function(e){e.exports={sources:"z70jdV"}},2156:function(e){e.exports={container:"V9gbHl",image:"_2oQZkW",thumbnail:"hD1QDS",info:"_xebdD",genres:"fJrOOq",genre:"Ehm_S3",seasons:"_5huoHh",seas:"C5IGM_"}}},function(e){e.O(0,[981,675,460,774,888,179],function(){return e(e.s=3645)}),_N_E=e.O()}]);