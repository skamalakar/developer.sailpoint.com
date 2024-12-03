"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["77841"],{45529:function(t,e,a){a.r(e),a.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>u,frontMatter:()=>o});var i=JSON.parse('{"id":"api/v2024/ui-metadata","title":"UI Metadata","description":"UI Metadata","source":"@site/docs/api/v2024/ui-metadata.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/ui-metadata","permalink":"/docs/api/v2024/ui-metadata","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"ui-metadata","title":"UI Metadata","description":"UI Metadata","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Start a Test Invocation","permalink":"/docs/api/v2024/start-test-trigger-invocation"},"next":{"title":"Get a tenant UI metadata","permalink":"/docs/api/v2024/get-tenant-ui-metadata"}}'),r=a("85893"),n=a("50065"),s=a("75493"),c=a("45043");let o={id:"ui-metadata",title:"UI Metadata",description:"UI Metadata",custom_edit_url:null},d=void 0,l={},u=[];function m(t){let e={p:"p",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"API for managing UI Metadata. Use this API to manage metadata about your User Interface.\nFor example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant's login screen."}),"\n","\n",(0,r.jsx)(s.Z,{items:(0,c.useCurrentSidebarCategory)().items})]})}function p(t={}){let{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m(t)}},75493:function(t,e,a){a.d(e,{Z:()=>v});var i=a("85893");a("67294");var r=a("67026"),n=a("69369"),s=a("83012"),c=a("43115"),o=a("63150"),d=a("96025"),l=a("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=a("62163"),p=a("97596");function f(t){let{href:e,children:a}=t;return(0,i.jsx)(s.Z,{href:e,className:(0,r.Z)("card padding--lg",u.cardContainer),children:a})}function h(t){let{href:e,icon:a,title:n,description:s}=t;return(0,i.jsxs)(f,{href:e,children:[(0,i.jsxs)(l.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:n,children:[a," ",n]}),s&&(0,i.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function x(t){let{item:e}=t,a=(0,n.LM)(e),r=function(){let{selectMessage:t}=(0,c.c)();return e=>t(e,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return a?(0,i.jsx)(h,{href:a,icon:(0,i.jsx)(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:e.description??r(e.items.length)}):null}function g(t){let{item:e}=t,a=(0,o.Z)(e.href)?(0,i.jsx)(m.G,{icon:p.FL8,className:u.docCardIcon}):(0,i.jsx)(m.G,{icon:p.wlW,className:u.docCardIcon}),r=(0,n.xz)(e.docId??void 0);return(0,i.jsx)(h,{href:e.href,icon:a,title:e.label,description:e.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:e.label})}function j(t){let{item:e}=t;switch(e.type){case"link":return(0,i.jsx)(g,{item:e});case"category":return(0,i.jsx)(x,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function I(t){let{className:e}=t,a=(0,n.jA)();return(0,i.jsx)(v,{items:a.items,className:e})}function v(t){let{items:e,className:a}=t;if(!e)return(0,i.jsx)(I,{...t});let s=(0,n.MN)(e);return(0,i.jsx)("section",{className:(0,r.Z)("row",a),children:s.map((t,e)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(j,{item:t})},e))})}}}]);