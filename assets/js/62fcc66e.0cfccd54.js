"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["28360"],{93872:function(e,s,a){a.r(s),a.d(s,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>p,frontMatter:()=>l});var t=JSON.parse('{"id":"api/v3/password-management","title":"Password Management","description":"Password Management","source":"@site/docs/api/v3/password-management.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/password-management","permalink":"/docs/api/v3/password-management","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"password-management","title":"Password Management","description":"Password Management","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"Update Password Dictionary","permalink":"/docs/api/v3/put-password-dictionary"},"next":{"title":"Query Password Info","permalink":"/docs/api/v3/query-password-info"}}'),r=a("85893"),n=a("50065"),i=a("75493"),o=a("45043");let l={id:"password-management",title:"Password Management",description:"Password Management",custom_edit_url:null},c=void 0,d={},p=[];function u(e){let s={a:"a",br:"br",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Use this API to implement password management functionality.",(0,r.jsx)(s.br,{}),"\n","With this functionality in place, users can manage their identity passwords for all their applications."]}),"\n",(0,r.jsx)(s.p,{children:"In Identity Security Cloud, users can select their names in the upper right corner of the page and use the drop-down menu to select Password Manager.\nPassword Manager lists the user's identity's applications, possibly grouped to share passwords.\nUsers can then select 'Change Password' to update their passwords."}),"\n",(0,r.jsx)(s.p,{children:"Grouping passwords allows users to update their passwords more broadly, rather than requiring them to update each password individually.\nPassword Manager may list the applications and sources in the following groups:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Password Group: This refers to a group of applications that share a password.\nFor example, a user can use the same password for Google Drive, Google Mail, and YouTube.\nUpdating the password for the password group updates the password for all its included applications."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Multi-Application Source: This refers to a source with multiple applications that share a password.\nFor example, a user can have a source, G Suite, that includes the Google Calendar, Google Drive, and Google Mail applications.\nUpdating the password for the multi-application source updates the password for all its included applications."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Applications: These are applications that do not share passwords with other applications."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"An organization may require some authentication for users to update their passwords.\nUsers may be required to answer security questions or use a third-party authenticator before they can confirm their updates."}),"\n",(0,r.jsxs)(s.p,{children:["Refer to ",(0,r.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/user-help/accounts/passwords.html",children:"Managing Passwords"})," for more information about password management."]}),"\n","\n",(0,r.jsx)(i.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function h(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},75493:function(e,s,a){a.d(s,{Z:()=>y});var t=a("85893");a("67294");var r=a("67026"),n=a("69369"),i=a("83012"),o=a("43115"),l=a("63150"),c=a("96025"),d=a("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=a("62163"),h=a("97596");function m(e){let{href:s,children:a}=e;return(0,t.jsx)(i.Z,{href:s,className:(0,r.Z)("card padding--lg",p.cardContainer),children:a})}function g(e){let{href:s,icon:a,title:n,description:i}=e;return(0,t.jsxs)(m,{href:s,children:[(0,t.jsxs)(d.default,{as:"h2",className:(0,r.Z)("text--truncate",p.cardTitle),title:n,children:[a," ",n]}),i&&(0,t.jsx)("p",{className:(0,r.Z)("text--truncate",p.cardDescription),title:i,children:i})]})}function w(e){let{item:s}=e,a=(0,n.LM)(s),r=function(){let{selectMessage:e}=(0,o.c)();return s=>e(s,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return a?(0,t.jsx)(g,{href:a,icon:(0,t.jsx)(u.G,{icon:h.cC_,className:p.docCardIcon}),title:s.label,description:s.description??r(s.items.length)}):null}function f(e){let{item:s}=e,a=(0,l.Z)(s.href)?(0,t.jsx)(u.G,{icon:h.FL8,className:p.docCardIcon}):(0,t.jsx)(u.G,{icon:h.wlW,className:p.docCardIcon}),r=(0,n.xz)(s.docId??void 0);return(0,t.jsx)(g,{href:s.href,icon:a,title:s.label,description:s.description??(r?.description!="<Heading"&&r?.description!="<span")?r?.description:s.label})}function x(e){let{item:s}=e;switch(s.type){case"link":return(0,t.jsx)(f,{item:s});case"category":return(0,t.jsx)(w,{item:s});default:throw Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e,a=(0,n.jA)();return(0,t.jsx)(y,{items:a.items,className:s})}function y(e){let{items:s,className:a}=e;if(!s)return(0,t.jsx)(j,{...e});let i=(0,n.MN)(s);return(0,t.jsx)("section",{className:(0,r.Z)("row",a),children:i.map((e,s)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(x,{item:e})},s))})}}}]);