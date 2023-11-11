(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},7426:function(e,n,t){"use strict";t.d(n,{c2:function(){return c},_p:function(){return d},DO:function(){return m}});var r=t(5893),i=t(1664),s=t.n(i),a=t(7442),o=t.n(a);function c(e){let{href:n,name:t,isLocal:i=!1}=e;return(0,r.jsx)(s(),{href:n,target:i?void 0:"_blank",children:(0,r.jsx)("div",{className:o().button,children:t})})}var l=t(1093),u=t(6790),h=t.n(u);function d(e){let{href:n,name:t,isLocal:i=!1}=e;return(0,r.jsx)(s(),{href:n,target:i?void 0:"_blank",children:(0,r.jsxs)("div",{className:h().button,children:[t,!i&&(0,r.jsx)(l.Z,{icon:"mdi:open-in-new"})]})})}var p=t(834),f=t.n(p);function m(e){let{href:n,name:t,isLocal:i=!1,showIcon:a=!0,iconSize:o="15"}=e;return(0,r.jsxs)(s(),{href:n,className:f().link,target:i?void 0:"_blank",children:[t,!i&&a&&(0,r.jsx)(l.Z,{icon:"mdi:open-in-new",size:o})]})}},667:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(2620),s=t.n(i);function a(e){let{borderSize:n="0.4rem",size:t="3.5rem",margin:i}=e;return(0,r.jsx)("div",{className:s().container,children:(0,r.jsx)("div",{className:s().loading,style:{border:"".concat(n," solid #00000091"),borderTop:"".concat(n," solid red"),height:t,width:t,margin:i}})})}},1093:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(3654);function s(e){let{icon:n,size:t="18",margin:s="0 0.2rem"}=e;return(0,r.jsx)(i.Icon,{icon:n,width:t,style:{display:"flex",alignItems:"center",margin:s}})}},3644:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),i=t(6024),s=t.n(i);function a(e){let{title:n,size:t}=e;return(0,r.jsx)("h1",{className:s().title,style:{fontSize:t},children:n})}},3188:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var r=t(5893),i=t(7294),s=t(1093),a=t(4184),o=t.n(a);function c(e){let{id:n,children:t}=e,[a,c]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{c(!!sessionStorage.getItem("alert:"+n))},[n]),a)?null:(0,r.jsxs)("div",{className:o().banner,children:[(0,r.jsx)("span",{className:o().message,children:t}),(0,r.jsx)("span",{className:o().close,onClick:function(){sessionStorage.setItem("alert:"+n,"true"),c(!0)},children:(0,r.jsx)(s.Z,{icon:"mdi:close",size:"18"})})]})}var l=t(296),u=t.n(l);function h(){return(0,r.jsx)("span",{className:u().background,children:"Hello"})}var d=t(7426),p=t(9008),f=t.n(p),m=t(667),x=t(3644),g=t(3612),j=t(1664),w=t.n(j),y=t(9734),v=t(9086),b=t.n(v);function A(){let[e,n]=(0,i.useState)(null),{mutate:t}=(0,y.kY)();(0,i.useEffect)(()=>{let e=window.sessionStorage.getItem("language");e||(e="en-US",window.sessionStorage.setItem("language",e)),n(e)},[]);let a=async e=>{window.sessionStorage.setItem("language",e.target.value),await (0,g.m0)(e.target.value),await t(()=>!0,void 0,{revalidate:!0})};return(0,r.jsxs)("header",{className:b().header,children:[(0,r.jsx)(w(),{href:"/",children:(0,r.jsx)(x.Z,{title:"Hawbrary",size:"1.2rem"})}),(0,r.jsxs)("div",{className:b().links,children:[(0,r.jsx)(w(),{href:"/explorer/",children:"Explorer"}),"|",(0,r.jsx)(w(),{href:"/explorer/actors/",children:"Actors"}),(0,r.jsx)(w(),{href:"/explorer/characters/",children:"Characters"}),(0,r.jsx)(w(),{href:"/explorer/episodes/",children:"Episodes"}),(0,r.jsx)(w(),{href:"/explorer/seasons/",children:"Seasons"}),(0,r.jsx)(w(),{href:"/explorer/locations/",children:"Locations"}),(0,r.jsx)(w(),{href:"/explorer/games/",children:"Games"})]}),(0,r.jsxs)("div",{className:b().selection,children:[e?(0,r.jsxs)("select",{name:"languages",id:"languages",className:b().select,onChange:a,defaultValue:null!=e?e:"en-US",children:[(0,r.jsx)("option",{value:"en-US",children:"en-US"}),(0,r.jsx)("option",{value:"pt-BR",children:"pt-BR"})]}):(0,r.jsx)(m.Z,{borderSize:"0.2rem",size:"1.8rem",margin:"1rem"}),(0,r.jsx)(s.Z,{icon:"tabler:language",size:"20"})]})]})}var N=t(8300),_=t.n(N);function I(e){let{children:n,isCentered:t,metadata:i={name:"Hawbrary",title:"Home | Hawbrary - A showcase for the HawAPI project",description:"A showcase for the HawAPI - A Free and Open Source API for Stranger Things. This library includes actors, characters, episodes, locations, seasons and all its information.",tags:"stranger things, stranger, things, stranger-things, api, github, git, hawapi, haw api, haw-api, HawAPI/HawAPI, theproject id, theproject.id, hawapi.theproject.id, netflix, watch, showcase, free, open source",url:"https://hawbrary.theproject.id",author:"Lucas Josino",social:"@LucJosin"}}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f(),{children:[(0,r.jsx)("meta",{httpEquiv:"content-language",content:"en-US"}),(0,r.jsx)("meta",{httpEquiv:"content-type",content:"text/html"}),(0,r.jsx)("meta",{name:"copyright",content:"\xa9 2023, Lucas Josino. All Rights Reserved."}),(0,r.jsx)("meta",{name:"description",content:i.description}),(0,r.jsx)("meta",{name:"author",content:i.author}),(0,r.jsx)("meta",{name:"tags",content:i.tags}),(0,r.jsx)("meta",{name:"keywords",content:i.tags}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"robots",content:"index,nofollow"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:creator",content:i.social}),(0,r.jsx)("meta",{name:"twitter:site",content:i.social}),(0,r.jsx)("meta",{name:"twitter:domain",content:i.url}),(0,r.jsx)("meta",{name:"twitter:title",content:i.title}),(0,r.jsx)("meta",{name:"twitter:description",property:"og:description",itemProp:"description",content:i.description}),(0,r.jsx)("meta",{property:"twitter:image",itemProp:"image primaryImageOfPage",content:"".concat(i.url,"/images/banner.png")}),(0,r.jsx)("meta",{property:"og:url",content:i.url}),(0,r.jsx)("meta",{property:"og:title",content:i.name}),(0,r.jsx)("meta",{property:"og:site_name",content:i.name}),(0,r.jsx)("meta",{property:"og:description",content:i.description}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(i.url,"/images/banner.png")}),(0,r.jsx)("link",{rel:"canonical",href:i.url}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(i.url,"/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(i.url,"/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(i.url,"/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("title",{children:i.title})]}),(0,r.jsxs)("main",{className:_().main,children:[(0,r.jsx)(A,{}),(0,r.jsxs)(c,{id:"poweredBy",children:[(0,r.jsx)(s.Z,{icon:"mdi:information",size:"18"}),"This library is powered by the"," ",(0,r.jsx)(d.DO,{href:"https://hawapi.theproject.id/",name:"HawAPI - A Free and Open Source API for Stranger Things"})]}),(0,r.jsxs)("div",{className:_().container,style:{height:t?"92vh":void 0,justifyContent:t?"center":void 0},children:[(0,r.jsx)(h,{}),n]})]})]})}},85:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(7426),s=t(3644),a=t(3188),o=t(1755),c=t.n(o);function l(){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{title:"Hawbrary"}),(0,r.jsxs)("p",{className:c().description,children:["A Showcase for the"," ",(0,r.jsx)(i.DO,{showIcon:!1,href:"https://github.com/HawAPI/HawAPI",name:"HawAPI"})," ","project"]}),(0,r.jsxs)("span",{className:c().links,children:[(0,r.jsx)(i.c2,{href:"/explorer",isLocal:!0,name:"Explore"}),(0,r.jsx)(i._p,{href:"https://github.com/LucJosin/hawbrary",name:"Github"})]})]})}},3612:function(e,n,t){"use strict";t.d(n,{_F:function(){return c},f_:function(){return u},NU:function(){return f},U:function(){return j},hI:function(){return x},IV:function(){return d},YT:function(){return o},dD:function(){return l},Cz:function(){return h},yn:function(){return m},z7:function(){return w},s$:function(){return g},$T:function(){return p},m0:function(){return a}});var r=t(4878);let i=new r.Rm({inMemoryCache:!1,endpoint:"https://hawapi.theproject.id/api",size:12}),s=(0,r.eI)(i);async function a(e){await s.setLanguage(e)}async function o(){return await s.getOverview()}async function c(e,n){return await s.getAll("actors",n,e)}async function l(e){return await s.getBy("actors",e)}async function u(e,n){return await s.getAll("characters",n,e)}async function h(e){return await s.getBy("characters",e)}async function d(e,n){return await s.getAll("seasons",n,e)}async function p(e){return await s.getBy("seasons",e)}async function f(e,n){return await s.getAll("episodes",n,e)}async function m(e){return await s.getBy("episodes",e)}async function x(e,n){return await s.getAll("locations",n,e)}async function g(e){return await s.getBy("locations",e)}async function j(e,n){return await s.getAll("games",n,e)}async function w(e){return await s.getBy("games",e)}},4184:function(e){e.exports={banner:"dl0pxxe8",message:"_1qiDYbRs",close:"Ah90kYrS"}},296:function(e){e.exports={background:"HgdEoP5X"}},7442:function(e){e.exports={button:"PEeaJPU4"}},6790:function(e){e.exports={button:"xY1fFXiS"}},834:function(e){e.exports={link:"dfjijBpY"}},2620:function(e){e.exports={container:"BE200Ulf",loading:"qia8NtIp",spin:"NsAGWRh9"}},6024:function(e){e.exports={title:"xc38lWDn"}},9086:function(e){e.exports={header:"_4r_QO9az",title:"hGrSfhTh",links:"iCSw1Fr0",selection:"OpKExAP6",select:"UJ8lFMiM"}},8300:function(e){e.exports={main:"OVq6e_2r",container:"Z7yenFYC"}},1755:function(e){e.exports={main:"I6LdmVIm",description:"APi6fjgZ",links:"zmzEe0xH"}}},function(e){e.O(0,[981,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);