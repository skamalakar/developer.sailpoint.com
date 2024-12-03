"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["91075"],{43053:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>l});var n=JSON.parse('{"id":"api/v3/managed-clusters","title":"Managed Clusters","description":"Managed Clusters","source":"@site/docs/api/v3/managed-clusters.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/managed-clusters","permalink":"/docs/api/v3/managed-clusters","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"managed-clusters","title":"Managed Clusters","description":"Managed Clusters","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"Get Managed Client Status.","permalink":"/docs/api/v3/get-managed-client-status"},"next":{"title":"Retrieve all Managed Clusters.","permalink":"/docs/api/v3/get-managed-clusters"}}'),a=r("85893"),s=r("50065"),i=r("75493"),c=r("45043");let l={id:"managed-clusters",title:"Managed Clusters",description:"Managed Clusters",custom_edit_url:null},o=void 0,d={},u=[];function p(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Read and create pperations for client Clusters, including Log Configuration"}),"\n","\n",(0,a.jsx)(i.Z,{items:(0,c.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},75493:function(e,t,r){r.d(t,{Z:()=>v});var n=r("85893");r("67294");var a=r("67026"),s=r("69369"),i=r("83012"),c=r("43115"),l=r("63150"),o=r("96025"),d=r("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=r("62163"),m=r("97596");function g(e){let{href:t,children:r}=e;return(0,n.jsx)(i.Z,{href:t,className:(0,a.Z)("card padding--lg",u.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:s,description:i}=e;return(0,n.jsxs)(g,{href:t,children:[(0,n.jsxs)(d.default,{as:"h2",className:(0,a.Z)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),i&&(0,n.jsx)("p",{className:(0,a.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e,r=(0,s.LM)(t),a=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,o.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(f,{href:r,icon:(0,n.jsx)(p.G,{icon:m.cC_,className:u.docCardIcon}),title:t.label,description:t.description??a(t.items.length)}):null}function x(e){let{item:t}=e,r=(0,l.Z)(t.href)?(0,n.jsx)(p.G,{icon:m.FL8,className:u.docCardIcon}):(0,n.jsx)(p.G,{icon:m.wlW,className:u.docCardIcon}),a=(0,s.xz)(t.docId??void 0);return(0,n.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??(a?.description!="<Heading"&&a?.description!="<span")?a?.description:t.label})}function C(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(x,{item:t});case"category":return(0,n.jsx)(h,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,r=(0,s.jA)();return(0,n.jsx)(v,{items:r.items,className:t})}function v(e){let{items:t,className:r}=e;if(!t)return(0,n.jsx)(j,{...e});let i=(0,s.MN)(t);return(0,n.jsx)("section",{className:(0,a.Z)("row",r),children:i.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(C,{item:e})},t))})}}}]);