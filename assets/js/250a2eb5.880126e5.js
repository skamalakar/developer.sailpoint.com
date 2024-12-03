"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["61784"],{57284:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>c});var n=JSON.parse('{"id":"api/v3/public-identities-config","title":"Public Identities Config","description":"Public Identities Config","source":"@site/docs/api/v3/public-identities-config.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/public-identities-config","permalink":"/docs/api/v3/public-identities-config","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"public-identities-config","title":"Public Identities Config","description":"Public Identities Config","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"Get list of public identities","permalink":"/docs/api/v3/get-public-identities"},"next":{"title":"Get the Public Identities Configuration","permalink":"/docs/api/v3/get-public-identity-config"}}'),r=i("85893"),a=i("50065"),s=i("75493"),o=i("45043");let c={id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},l=void 0,d={},u=[];function p(e){let t={a:"a",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Use this API to implement public identity configuration functionality.\nWith this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions.\nThis can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."}),"\n",(0,r.jsx)(t.p,{children:"By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager.\nHowever, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.\nAdministrators can use this API to make those necessary identity attributes public to non-administrators."}),"\n",(0,r.jsxs)(t.p,{children:["For example, a non-administrator deciding whether to approve another identity's request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department.\nIf an administrator has used ",(0,r.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/update-public-identity-config/",children:"Update Public Identity Config"}),' to make the "department" attribute public, the approver can see the department and make a decision without requesting any more information.']}),"\n","\n",(0,r.jsx)(s.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75493:function(e,t,i){i.d(t,{Z:()=>y});var n=i("85893");i("67294");var r=i("67026"),a=i("69369"),s=i("83012"),o=i("43115"),c=i("63150"),l=i("96025"),d=i("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=i("62163"),m=i("97596");function f(e){let{href:t,children:i}=e;return(0,n.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function h(e){let{href:t,icon:i,title:a,description:s}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:a,children:[i," ",a]}),s&&(0,n.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e,i=(0,a.LM)(t),r=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,n.jsx)(h,{href:i,icon:(0,n.jsx)(p.G,{icon:m.cC_,className:u.docCardIcon}),title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e,i=(0,c.Z)(t.href)?(0,n.jsx)(p.G,{icon:m.FL8,className:u.docCardIcon}):(0,n.jsx)(p.G,{icon:m.wlW,className:u.docCardIcon}),r=(0,a.xz)(t.docId??void 0);return(0,n.jsx)(h,{href:t.href,icon:i,title:t.label,description:t.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:t.label})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(b,{item:t});case"category":return(0,n.jsx)(g,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e,i=(0,a.jA)();return(0,n.jsx)(y,{items:i.items,className:t})}function y(e){let{items:t,className:i}=e;if(!t)return(0,n.jsx)(x,{...e});let s=(0,a.MN)(t);return(0,n.jsx)("section",{className:(0,r.Z)("row",i),children:s.map((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(v,{item:e})},t))})}}}]);