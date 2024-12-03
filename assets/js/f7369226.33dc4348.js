"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["266"],{16397:function(t,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>u,frontMatter:()=>c});var r=JSON.parse('{"id":"api/beta/custom-password-instructions","title":"Custom Password Instructions","description":"Custom Password Instructions","source":"@site/docs/api/beta/custom-password-instructions.tag.mdx","sourceDirName":"api/beta","slug":"/api/beta/custom-password-instructions","permalink":"/docs/api/beta/custom-password-instructions","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"custom-password-instructions","title":"Custom Password Instructions","description":"Custom Password Instructions","custom_edit_url":null},"sidebar":"isc_beta_sidebar","previous":{"title":"List predefined select options.","permalink":"/docs/api/beta/search-pre-defined-select-options"},"next":{"title":"Create Custom Password Instructions","permalink":"/docs/api/beta/create-custom-password-instructions"}}'),i=s("85893"),n=s("50065"),o=s("75493"),a=s("45043");let c={id:"custom-password-instructions",title:"Custom Password Instructions",description:"Custom Password Instructions",custom_edit_url:null},d=void 0,l={},u=[];function p(t){let e={a:"a",code:"code",p:"p",...(0,n.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Use this API to implement custom password instruction functionality.\nWith this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.\nThis allows administrators to emphasize password policies or provide organization-specific instructions."}),"\n",(0,i.jsxs)(e.p,{children:["Administrators must first use ",(0,i.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/beta/put-password-org-config/",children:"Update Password Org Config"})," to set ",(0,i.jsx)(e.code,{children:"customInstructionsEnabled"})," to ",(0,i.jsx)(e.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["Once they have enabled custom instructions, they can use ",(0,i.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/beta/create-custom-password-instructions/",children:"Create Custom Password Instructions"})," to create custom page content for the specific pageId they select."]}),"\n",(0,i.jsxs)(e.p,{children:["For example, an administrator can use the pageId forget-username",":user-email"," to set the custom text for the case when users forget their usernames and must enter their emails."]}),"\n",(0,i.jsxs)(e.p,{children:["Refer to ",(0,i.jsx)(e.a,{href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text",children:"Creating Custom Instruction Text"})," for more information about creating custom password instructions."]}),"\n","\n",(0,i.jsx)(o.Z,{items:(0,a.useCurrentSidebarCategory)().items})]})}function m(t={}){let{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},75493:function(t,e,s){s.d(e,{Z:()=>C});var r=s("85893");s("67294");var i=s("67026"),n=s("69369"),o=s("83012"),a=s("43115"),c=s("63150"),d=s("96025"),l=s("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var p=s("62163"),m=s("97596");function h(t){let{href:e,children:s}=t;return(0,r.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",u.cardContainer),children:s})}function f(t){let{href:e,icon:s,title:n,description:o}=t;return(0,r.jsxs)(h,{href:e,children:[(0,r.jsxs)(l.default,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:n,children:[s," ",n]}),o&&(0,r.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function x(t){let{item:e}=t,s=(0,n.LM)(e),i=function(){let{selectMessage:t}=(0,a.c)();return e=>t(e,(0,d.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return s?(0,r.jsx)(f,{href:s,icon:(0,r.jsx)(p.G,{icon:m.cC_,className:u.docCardIcon}),title:e.label,description:e.description??i(e.items.length)}):null}function w(t){let{item:e}=t,s=(0,c.Z)(e.href)?(0,r.jsx)(p.G,{icon:m.FL8,className:u.docCardIcon}):(0,r.jsx)(p.G,{icon:m.wlW,className:u.docCardIcon}),i=(0,n.xz)(e.docId??void 0);return(0,r.jsx)(f,{href:e.href,icon:s,title:e.label,description:e.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:e.label})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,r.jsx)(w,{item:e});case"category":return(0,r.jsx)(x,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function j(t){let{className:e}=t,s=(0,n.jA)();return(0,r.jsx)(C,{items:s.items,className:e})}function C(t){let{items:e,className:s}=t;if(!e)return(0,r.jsx)(j,{...t});let o=(0,n.MN)(e);return(0,r.jsx)("section",{className:(0,i.Z)("row",s),children:o.map((t,e)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:t})},e))})}}}]);