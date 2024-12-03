"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["30863"],{92387:function(e,t,i){i.r(t),i.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>p,frontMatter:()=>c});var s=JSON.parse('{"id":"api/v2024/password-policies","title":"Password Policies","description":"Password Policies","source":"@site/docs/api/v2024/password-policies.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/password-policies","permalink":"/docs/api/v2024/password-policies","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"password-policies","title":"Password Policies","description":"Password Policies","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Generate a digit token","permalink":"/docs/api/v2024/create-digit-token"},"next":{"title":"Get Password Policy by ID","permalink":"/docs/api/v2024/get-password-policy-by-id"}}'),o=i("85893"),r=i("50065"),n=i("75493"),a=i("45043");let c={id:"password-policies",title:"Password Policies",description:"Password Policies",custom_edit_url:null},l=void 0,d={},p=[];function u(e){let t={a:"a",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Use these APIs to implement password policies functionality.\nThese APIs allow you to define the policy parameters for choosing passwords."}),"\n",(0,o.jsx)(t.p,{children:"IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.\nIf you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org."}),"\n",(0,o.jsxs)(t.p,{children:["In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.\nRefer to ",(0,o.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html",children:"Managing Password Policies"})," for more information about password policies."]}),"\n","\n",(0,o.jsx)(n.Z,{items:(0,a.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},75493:function(e,t,i){i.d(t,{Z:()=>j});var s=i("85893");i("67294");var o=i("67026"),r=i("69369"),n=i("83012"),a=i("43115"),c=i("63150"),l=i("96025"),d=i("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=i("62163"),m=i("97596");function h(e){let{href:t,children:i}=e;return(0,s.jsx)(n.Z,{href:t,className:(0,o.Z)("card padding--lg",p.cardContainer),children:i})}function f(e){let{href:t,icon:i,title:r,description:n}=e;return(0,s.jsxs)(h,{href:t,children:[(0,s.jsxs)(d.default,{as:"h2",className:(0,o.Z)("text--truncate",p.cardTitle),title:r,children:[i," ",r]}),n&&(0,s.jsx)("p",{className:(0,o.Z)("text--truncate",p.cardDescription),title:n,children:n})]})}function w(e){let{item:t}=e,i=(0,r.LM)(t),o=function(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,s.jsx)(f,{href:i,icon:(0,s.jsx)(u.G,{icon:m.cC_,className:p.docCardIcon}),title:t.label,description:t.description??o(t.items.length)}):null}function g(e){let{item:t}=e,i=(0,c.Z)(t.href)?(0,s.jsx)(u.G,{icon:m.FL8,className:p.docCardIcon}):(0,s.jsx)(u.G,{icon:m.wlW,className:p.docCardIcon}),o=(0,r.xz)(t.docId??void 0);return(0,s.jsx)(f,{href:t.href,icon:i,title:t.label,description:t.description??(o?.description!="<Heading"&&o?.description!="<span")?o?.description:t.label})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(g,{item:t});case"category":return(0,s.jsx)(w,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e,i=(0,r.jA)();return(0,s.jsx)(j,{items:i.items,className:t})}function j(e){let{items:t,className:i}=e;if(!t)return(0,s.jsx)(y,{...e});let n=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,o.Z)("row",i),children:n.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(x,{item:e})},t))})}}}]);