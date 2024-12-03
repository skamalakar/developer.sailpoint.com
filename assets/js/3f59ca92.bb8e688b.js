"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["69579"],{92955:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>o});var s=JSON.parse('{"id":"api/v3/accounts","title":"Accounts","description":"Accounts","source":"@site/docs/api/v3/accounts.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/accounts","permalink":"/docs/api/v3/accounts","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"accounts","title":"Accounts","description":"Accounts","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"Returns account usage insights","permalink":"/docs/api/v3/get-usages-by-account-id"},"next":{"title":"Accounts List","permalink":"/docs/api/v3/list-accounts"}}'),i=n("85893"),c=n("50065"),a=n("75493"),r=n("45043");let o={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},l=void 0,d={},u=[];function h(e){let t={a:"a",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Use this API to implement and customize account functionality.\nWith this functionality in place, administrators can manage users' access across sources in Identity Security Cloud."}),"\n",(0,i.jsx)(t.p,{children:"In Identity Security Cloud, an account refers to a user's account on a supported source.\nThis typically includes a unique identifier for the user, a unique password, a set of permissions associated with the source and a set of attributes. Identity Security Cloud loads accounts through the creation of sources in Identity Security Cloud."}),"\n",(0,i.jsx)(t.p,{children:"Administrators can correlate users' identities with the users' accounts on the different sources they use.\nThis allows Identity Security Cloud to govern the access of identities and all their correlated accounts securely and cohesively."}),"\n",(0,i.jsx)(t.p,{children:"To view the accounts on a source and their correlated identities, administrators can use the Connections drop-down menu, select Sources, select the relevant source, and select its Account tab."}),"\n",(0,i.jsx)(t.p,{children:"To view and edit source account statuses for an identity in Identity Security Cloud, administrators can use the Identities drop-down menu, select Identity List, select the relevant identity, and select its Accounts tab.\nAdministrators can toggle an account's Actions to aggregate the account, enable/disable it, unlock it, or remove it from the identity."}),"\n",(0,i.jsx)(t.p,{children:"Accounts can have the following statuses:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enabled: The account is enabled. The user can access it."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Disabled: The account is disabled, and the user cannot access it, but the identity is not disabled in Identity Security Cloud. This can occur when an administrator disables the account or when the user's lifecycle state changes."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Locked: The account is locked. This may occur when someone has entered an incorrect password for the account too many times."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Pending: The account is currently updating. This status typically lasts seconds."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Administrators can select the source account to view its attributes, entitlements, and the last time the account's password was changed."}),"\n",(0,i.jsxs)(t.p,{children:["Refer to ",(0,i.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts",children:"Managing User Accounts"})," for more information about accounts."]}),"\n","\n",(0,i.jsx)(a.Z,{items:(0,r.useCurrentSidebarCategory)().items})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},75493:function(e,t,n){n.d(t,{Z:()=>v});var s=n("85893");n("67294");var i=n("67026"),c=n("69369"),a=n("83012"),r=n("43115"),o=n("63150"),l=n("96025"),d=n("34403");let u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var h=n("62163"),p=n("97596");function m(e){let{href:t,children:n}=e;return(0,s.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:c,description:a}=e;return(0,s.jsxs)(m,{href:t,children:[(0,s.jsxs)(d.default,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),a&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function x(e){let{item:t}=e,n=(0,c.LM)(t),i=function(){let{selectMessage:e}=(0,r.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,s.jsx)(f,{href:n,icon:(0,s.jsx)(h.G,{icon:p.cC_,className:u.docCardIcon}),title:t.label,description:t.description??i(t.items.length)}):null}function y(e){let{item:t}=e,n=(0,o.Z)(t.href)?(0,s.jsx)(h.G,{icon:p.FL8,className:u.docCardIcon}):(0,s.jsx)(h.G,{icon:p.wlW,className:u.docCardIcon}),i=(0,c.xz)(t.docId??void 0);return(0,s.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??(i?.description!="<Heading"&&i?.description!="<span")?i?.description:t.label})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,s.jsx)(y,{item:t});case"category":return(0,s.jsx)(x,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e,n=(0,c.jA)();return(0,s.jsx)(v,{items:n.items,className:t})}function v(e){let{items:t,className:n}=e;if(!t)return(0,s.jsx)(j,{...e});let a=(0,c.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",n),children:a.map((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(g,{item:e})},t))})}}}]);