"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["25149"],{20675:function(e,t,i){i.r(t),i.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>f,assets:()=>d,toc:()=>u,frontMatter:()=>c});var r=JSON.parse('{"id":"api/iiq/launched-workflows","title":"LaunchedWorkflows","description":"LaunchedWorkflows","source":"@site/docs/api/iiq/launched-workflows.tag.mdx","sourceDirName":"api/iiq","slug":"/api/iiq/launched-workflows","permalink":"/docs/api/iiq/launched-workflows","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"launched-workflows","title":"LaunchedWorkflows","description":"LaunchedWorkflows","custom_edit_url":null},"sidebar":"iiqApiSideBar","previous":{"title":"Returns an Entitlement resource based on id.","permalink":"/docs/api/iiq/get-entitlement-by-id"},"next":{"title":"Returns all LaunchedWorkflow resources.","permalink":"/docs/api/iiq/launched-workflows-get"}}'),n=i("85893"),o=i("50065"),s=i("75493"),a=i("45043");let c={id:"launched-workflows",title:"LaunchedWorkflows",description:"LaunchedWorkflows",custom_edit_url:null},l=void 0,d={},u=[];function p(e){return(0,n.jsx)(s.Z,{items:(0,a.useCurrentSidebarCategory)().items})}function f(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75493:function(e,t,i){i.d(t,{Z:()=>g});var r=i("85893");i("67294");var n=i("67026"),o=i("69369"),s=i("83012"),a=i("43115"),c=i("63150"),l=i("96025"),d=i("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i("62163"),f=i("97596");function h(e){let{href:t,children:i}=e;return(0,r.jsx)(s.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:o,description:s}=e;return(0,r.jsxs)(h,{href:t,children:[(0,r.jsxs)(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:o,children:[i," ",o]}),s&&(0,r.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function w(e){let{item:t}=e,i=(0,o.LM)(t),n=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,r.jsx)(m,{href:i,icon:(0,r.jsx)(p.G,{icon:f.cC_,className:u.docCardIcon}),title:t.label,description:t.description??n(t.items.length)}):null}function x(e){let{item:t}=e,i=(0,c.Z)(t.href)?(0,r.jsx)(p.G,{icon:f.FL8,className:u.docCardIcon}):(0,r.jsx)(p.G,{icon:f.wlW,className:u.docCardIcon}),n=(0,o.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??(n?.description!="<Heading"&&n?.description!="<span")?n?.description:t.label})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(x,{item:t});case"category":return(0,r.jsx)(w,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,i=(0,o.jA)();return(0,r.jsx)(g,{items:i.items,className:t})}function g(e){let{items:t,className:i}=e;if(!t)return(0,r.jsx)(j,{...e});let s=(0,o.MN)(t);return(0,r.jsx)("section",{className:(0,n.Z)("row",i),children:s.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(k,{item:e})},t))})}}}]);