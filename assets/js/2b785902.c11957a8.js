"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["27945"],{23129:function(e,t,o){o.r(t),o.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>p,frontMatter:()=>a});var s=JSON.parse('{"id":"tools","title":"Tools","description":"ISC developer tools.","source":"@site/docs/tools.md","sourceDirName":".","slug":"/tools","permalink":"/docs/tools","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools.md","tags":[{"inline":true,"label":"tools","permalink":"/docs/tags/tools"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":1,"frontMatter":{"id":"tools","title":"Tools","pagination_label":"Tools","sidebar_label":"Tools","sidebar_position":1,"sidebar_class_name":"tools","keywords":["tools"],"description":"ISC developer tools.","slug":"/tools","tags":["tools"]},"sidebar":"openApiSidebar","previous":{"title":"Testing","permalink":"/docs/connectivity/saas-connectivity/in-depth/testing"},"next":{"title":"Command Line Interface","permalink":"/docs/tools/cli"}}'),i=o("85893"),r=o("50065"),n=o("75493"),l=o("45043");let a={id:"tools",title:"Tools",pagination_label:"Tools",sidebar_label:"Tools",sidebar_position:1,sidebar_class_name:"tools",keywords:["tools"],description:"ISC developer tools.",slug:"/tools",tags:["tools"]},c=void 0,d={},p=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}];function u(e){let t={a:"a",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"The SailPoint Developer Relations Team has built some useful tools that improve the experience for developers building on the Identity Security Cloud (ISC) platform. These tools make it easier for developers to leverage the ISC APIs, extensibility options, and connectivity."}),"\n","\n",(0,i.jsx)(n.Z,{items:(0,l.useCurrentSidebarCategory)().items}),"\n",(0,i.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about ISC tools and discuss them with SailPoint Developer Community members, go to the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/isc/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},75493:function(e,t,o){o.d(t,{Z:()=>j});var s=o("85893");o("67294");var i=o("67026"),r=o("69369"),n=o("83012"),l=o("43115"),a=o("63150"),c=o("96025"),d=o("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=o("62163"),m=o("97596");function h(e){let{href:t,children:o}=e;return(0,s.jsx)(n.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer),children:o})}function v(e){let{href:t,icon:o,title:r,description:n}=e;return(0,s.jsxs)(h,{href:t,children:[(0,s.jsxs)(d.default,{as:"h2",className:(0,i.Z)("text--truncate",p.cardTitle),title:r,children:[o," ",r]}),n&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e,o=(0,r.LM)(t),i=function(){let{selectMessage:e}=(0,l.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,s.jsx)(v,{href:o,icon:(0,s.jsx)(u.G,{icon:m.cC_,className:p.docCardIcon}),title:t.label,description:t.description??i(t.items.length)}):null}function x(e){let{item:t}=e,o=(0,a.Z)(t.href)?(0,s.jsx)(u.G,{icon:m.FL8,className:p.docCardIcon}):(0,s.jsx)(u.G,{icon:m.wlW,className:p.docCardIcon}),i=(0,r.xz)(t.docId??void 0);return(0,s.jsx)(v,{href:t.href,icon:o,title:t.label,description:t.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:t.label})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(x,{item:t});case"category":return(0,s.jsx)(f,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e,o=(0,r.jA)();return(0,s.jsx)(j,{items:o.items,className:t})}function j(e){let{items:t,className:o}=e;if(!t)return(0,s.jsx)(b,{...e});let n=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",o),children:n.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(g,{item:e})},t))})}}}]);