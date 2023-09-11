(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},7426:function(e,n,t){"use strict";t.d(n,{r:function(){return p}});var r=t(5893),i=t(1664),a=t.n(i),s=t(7442),o=t.n(s),c=t(3654),l=t(6790),u=t.n(l),h=t(834),d=t.n(h);let p={Primary:function(e){let{href:n,name:t,isLocal:i=!1}=e;return(0,r.jsx)(a(),{href:n,target:i?void 0:"_blank",children:(0,r.jsx)("div",{className:o().button,children:t})})},Secondary:function(e){let{href:n,name:t,isLocal:i=!1}=e;return(0,r.jsx)(a(),{href:n,target:i?void 0:"_blank",children:(0,r.jsxs)("div",{className:u().button,children:[t,!i&&(0,r.jsx)(c.Icon,{icon:"mdi:open-in-new",width:"16"})]})})},Simple:function(e){let{href:n,name:t,isLocal:i=!1,showIcon:s=!0}=e;return(0,r.jsxs)(a(),{href:n,className:d().link,target:i?void 0:"_blank",children:[t,!i&&s&&(0,r.jsx)(c.Icon,{icon:"mdi:open-in-new",width:"15"})]})}}},667:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(2620),a=t.n(i);function s(e){let{borderSize:n="0.4rem",size:t="3.5rem",margin:i}=e;return(0,r.jsx)("div",{className:a().container,children:(0,r.jsx)("div",{className:a().loading,style:{border:"".concat(n," solid #00000091"),borderTop:"".concat(n," solid red"),height:t,width:t,margin:i}})})}},6214:function(e,n,t){"use strict";t.d(n,{D:function(){return c}});var r=t(5893),i=t(6024),a=t.n(i),s=t(7058),o=t.n(s);let c={Effect:function(e){let{title:n,size:t}=e;return(0,r.jsx)("h1",{className:a().title,style:{fontSize:t},children:n})},Simple:function(e){let{text:n}=e;return(0,r.jsx)("h1",{className:o().title,children:n})}}},3188:function(e,n,t){"use strict";t.d(n,{Z:function(){return A}});var r=t(5893),i=t(3654),a=t(7294),s=t(4184),o=t.n(s);function c(e){let{id:n,children:t}=e,[s,c]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{c(!!sessionStorage.getItem("alert:"+n))},[n]),s)?null:(0,r.jsxs)("div",{className:o().banner,children:[(0,r.jsx)("span",{className:o().message,children:t}),(0,r.jsx)("span",{className:o().close,onClick:function(){sessionStorage.setItem("alert:"+n,"true"),c(!0)},children:(0,r.jsx)(i.Icon,{icon:"mdi:close",width:"18"})})]})}var l=t(296),u=t.n(l);function h(){return(0,r.jsx)("span",{className:u().background,children:"Hello"})}var d=t(7426),p=t(9008),m=t.n(p),f=t(667),x=t(6214),g=t(3612),j=t(1664),w=t.n(j),y=t(9734),v=t(9086),b=t.n(v);function S(){let[e,n]=(0,a.useState)(null),{mutate:t}=(0,y.kY)();(0,a.useEffect)(()=>{let e=window.sessionStorage.getItem("language");e||(e="en-US",window.sessionStorage.setItem("language",e)),n(e)},[]);let s=async e=>{window.sessionStorage.setItem("language",e.target.value),await (0,g.m0)(e.target.value),await t(()=>!0,void 0,{revalidate:!0})};return(0,r.jsxs)("header",{className:b().header,children:[(0,r.jsx)(w(),{href:"/",children:(0,r.jsx)(x.D.Effect,{title:"Hawbrary",size:"1.2rem"})}),(0,r.jsxs)("div",{className:b().links,children:[(0,r.jsx)(w(),{href:"/explorer/actors/",children:"Actors"}),(0,r.jsx)(w(),{href:"/explorer/characters/",children:"Characters"}),(0,r.jsx)(w(),{href:"/explorer/episodes/",children:"Episodes"}),(0,r.jsx)(w(),{href:"/explorer/seasons/",children:"Seasons"}),(0,r.jsx)(w(),{href:"/explorer/locations/",children:"Locations"})]}),(0,r.jsxs)("div",{className:b().selection,children:[e?(0,r.jsxs)("select",{name:"languages",id:"languages",className:b().select,onChange:s,defaultValue:null!=e?e:"en-US",children:[(0,r.jsx)("option",{value:"en-US",children:"en-US"}),(0,r.jsx)("option",{value:"pt-BR",children:"pt-BR"})]}):(0,r.jsx)(f.Z,{borderSize:"0.2rem",size:"1.8rem",margin:"1rem"}),(0,r.jsx)(i.Icon,{icon:"tabler:language",width:"20"})]})]})}var I=t(8300),N=t.n(I);function A(e){let{children:n,isCentered:t,metadata:a={name:"Hawbrary",title:"Home | Hawbrary - A showcase for the HawAPI project",description:"A showcase for the HawAPI - A Free and Open Source API for Stranger Things. This library includes actors, characters, episodes, locations, seasons and all its information.",tags:"stranger things, stranger, things, stranger-things, api, github, git, hawapi, haw api, haw-api, HawAPI/HawAPI, theproject id, theproject.id, hawapi.theproject.id, netflix, watch, showcase, free, open source",url:"https://hawbrary.theproject.id",author:"Lucas Josino",social:"@LucJosin"}}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m(),{children:[(0,r.jsx)("meta",{httpEquiv:"content-language",content:"en-US"}),(0,r.jsx)("meta",{httpEquiv:"content-type",content:"text/html"}),(0,r.jsx)("meta",{name:"copyright",content:"\xa9 2023, Lucas Josino. All Rights Reserved."}),(0,r.jsx)("meta",{name:"description",content:a.description}),(0,r.jsx)("meta",{name:"author",content:a.author}),(0,r.jsx)("meta",{name:"tags",content:a.tags}),(0,r.jsx)("meta",{name:"keywords",content:a.tags}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{name:"robots",content:"index,nofollow"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:creator",content:a.social}),(0,r.jsx)("meta",{name:"twitter:site",content:a.social}),(0,r.jsx)("meta",{name:"twitter:domain",content:a.url}),(0,r.jsx)("meta",{name:"twitter:title",content:a.title}),(0,r.jsx)("meta",{name:"twitter:description",property:"og:description",itemProp:"description",content:a.description}),(0,r.jsx)("meta",{property:"twitter:image",itemProp:"image primaryImageOfPage",content:"".concat(a.url,"/images/banner.png")}),(0,r.jsx)("meta",{property:"og:url",content:a.url}),(0,r.jsx)("meta",{property:"og:title",content:a.name}),(0,r.jsx)("meta",{property:"og:site_name",content:a.name}),(0,r.jsx)("meta",{property:"og:description",content:a.description}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:image",content:"".concat(a.url,"/images/banner.png")}),(0,r.jsx)("link",{rel:"canonical",href:a.url}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat(a.url,"/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(a.url,"/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(a.url,"/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("title",{children:a.title})]}),(0,r.jsxs)("main",{className:N().main,children:[(0,r.jsx)(S,{}),(0,r.jsxs)(c,{id:"poweredBy",children:[(0,r.jsx)(i.Icon,{icon:"mdi:information"}),"This library is powered by the"," ",(0,r.jsx)(d.r.Simple,{href:"https://hawapi.theproject.id/",name:"HawAPI - A Free and Open Source API for Stranger Things"})]}),(0,r.jsxs)("div",{className:N().container,style:{height:t?"92vh":void 0,justifyContent:t?"center":void 0},children:[(0,r.jsx)(h,{}),n]})]})]})}},85:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(7426),a=t(6214),s=t(3188),o=t(1755),c=t.n(o);function l(){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.D.Effect,{title:"Hawbrary"}),(0,r.jsxs)("p",{className:c().description,children:["A Showcase for the"," ",(0,r.jsx)(i.r.Simple,{showIcon:!1,href:"https://github.com/HawAPI/HawAPI",name:"HawAPI"})," ","project"]}),(0,r.jsxs)("span",{className:c().links,children:[(0,r.jsx)(i.r.Primary,{href:"/explorer",isLocal:!0,name:"Explore"}),(0,r.jsx)(i.r.Secondary,{href:"https://github.com/LucJosin/hawbrary",name:"Github"})]})]})}},3612:function(e,n,t){"use strict";t.d(n,{_F:function(){return c},f_:function(){return u},NU:function(){return m},hI:function(){return x},IV:function(){return d},YT:function(){return o},dD:function(){return l},Cz:function(){return h},yn:function(){return f},s$:function(){return g},$T:function(){return p},m0:function(){return s}});var r=t(4878);let i=new r.Rm({inMemoryCache:!1,endpoint:"https://hawapi.theproject.id/api",size:12}),a=(0,r.eI)(i);async function s(e){await a.setLanguage(e)}async function o(){return await a.getOverview()}async function c(e,n){return await a.getAll("actors",n,e)}async function l(e){return await a.getBy("actors",e)}async function u(e,n){return await a.getAll("characters",n,e)}async function h(e){return await a.getBy("characters",e)}async function d(e,n){return await a.getAll("seasons",n,e)}async function p(e){return await a.getBy("seasons",e)}async function m(e,n){return await a.getAll("episodes",n,e)}async function f(e){return await a.getBy("episodes",e)}async function x(e,n){return await a.getAll("locations",n,e)}async function g(e){return await a.getBy("locations",e)}},4184:function(e){e.exports={banner:"dl0pxx",message:"_1qiDYb",close:"Ah90kY"}},296:function(e){e.exports={background:"HgdEoP"}},7442:function(e){e.exports={button:"PEeaJP"}},6790:function(e){e.exports={button:"xY1fFX"}},834:function(e){e.exports={link:"dfjijB"}},2620:function(e){e.exports={container:"BE200U",loading:"qia8Nt",spin:"NsAGWR"}},6024:function(e){e.exports={title:"xc38lW"}},7058:function(e){e.exports={title:"I4Spm_"}},9086:function(e){e.exports={header:"_4r_QO9",title:"hGrSfh",links:"iCSw1F",selection:"OpKExA",select:"UJ8lFM"}},8300:function(e){e.exports={main:"OVq6e_",container:"Z7yenF"}},1755:function(e){e.exports={main:"I6LdmV",description:"APi6fj",links:"zmzEe0"}}},function(e){e.O(0,[981,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);