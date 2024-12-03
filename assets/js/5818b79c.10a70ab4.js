"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["97328"],{80875:function(e,s,t){t.r(s),t.d(s,{metadata:()=>i,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>p,frontMatter:()=>o});var i=JSON.parse('{"id":"api/v2024/access-profiles","title":"Access Profiles","description":"Access Profiles","source":"@site/docs/api/v2024/access-profiles.tag.mdx","sourceDirName":"api/v2024","slug":"/api/v2024/access-profiles","permalink":"/docs/api/v2024/access-profiles","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"access-profiles","title":"Access Profiles","description":"Access Profiles","custom_edit_url":null},"sidebar":"isc_2024_sidebar","previous":{"title":"Get Access Model Metadata Value","permalink":"/docs/api/v2024/get-access-model-metadata-attribute-value"},"next":{"title":"List Access Profiles","permalink":"/docs/api/v2024/list-access-profiles"}}'),n=t("85893"),c=t("50065"),r=t("75493"),a=t("45043");let o={id:"access-profiles",title:"Access Profiles",description:"Access Profiles",custom_edit_url:null},l=void 0,d={},p=[];function u(e){let s={a:"a",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Use this API to implement and customize access profile functionality.\nWith this functionality in place, administrators can create access profiles and configure them for use throughout Identity Security Cloud, enabling users to get the access they need quickly and securely."}),"\n",(0,n.jsx)(s.p,{children:"Access profiles group entitlements, which represent access rights on sources."}),"\n",(0,n.jsx)(s.p,{children:"For example, an Active Directory source in Identity Security Cloud can have multiple entitlements: the first, 'Employees,' may represent the access all employees have at the organization, and a second, 'Developers,' may represent the access all developers have at the organization."}),"\n",(0,n.jsx)(s.p,{children:"An administrator can then create a broader set of access in the form of an access profile, 'AD Developers' grouping the 'Employees' entitlement with the 'Developers' entitlement."}),"\n",(0,n.jsx)(s.p,{children:"When users only need Active Directory employee access, they can request access to the 'Employees' entitlement."}),"\n",(0,n.jsx)(s.p,{children:"When users need both Active Directory employee and developer access, they can request access to the 'AD Developers' access profile."}),"\n",(0,n.jsx)(s.p,{children:"Access profiles are the most important units of access in Identity Security Cloud. Identity Security Cloud uses access profiles in many features, including the following:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Provisioning: When you use the Provisioning Service, lifecycle states and roles both grant access to users in the form of access profiles."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Certifications: You can approve or revoke access profiles in certification campaigns, just like entitlements."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Access Requests: You can assign access profiles to applications, and when a user requests access to the app associated with an access profile and someone approves the request, access is granted to both the application and its associated access profile."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Roles: You can group one or more access profiles into a role to quickly assign access items based on an identity's role."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In Identity Security Cloud, administrators can use the Access drop-down menu and select Access Profiles to view, configure, and delete existing access profiles, as well as create new ones.\nAdministrators can enable and disable an access profile, and they can also make the following configurations:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Manage Entitlements: Manage the profile's access by adding and removing entitlements."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Access Requests: Configure access profiles to be requestable and establish an approval process for any requests that the access profile be granted or revoked.\nDo not configure an access profile to be requestable without first establishing a secure access request approval process for the access profile."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Multiple Account Options: Define the logic Identity Security Cloud uses to provision access to an identity with multiple accounts on the source."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Refer to ",(0,n.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/help/access/access-profiles.html",children:"Managing Access Profiles"})," for more information about access profiles."]}),"\n","\n",(0,n.jsx)(r.Z,{items:(0,a.useCurrentSidebarCategory)().items})]})}function h(e={}){let{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},75493:function(e,s,t){t.d(s,{Z:()=>v});var i=t("85893");t("67294");var n=t("67026"),c=t("69369"),r=t("83012"),a=t("43115"),o=t("63150"),l=t("96025"),d=t("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=t("62163"),h=t("97596");function f(e){let{href:s,children:t}=e;return(0,i.jsx)(r.Z,{href:s,className:(0,n.Z)("card padding--lg",p.cardContainer),children:t})}function m(e){let{href:s,icon:t,title:c,description:r}=e;return(0,i.jsxs)(f,{href:s,children:[(0,i.jsxs)(d.default,{as:"h2",className:(0,n.Z)("text--truncate",p.cardTitle),title:c,children:[t," ",c]}),r&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",p.cardDescription),title:r,children:r})]})}function g(e){let{item:s}=e,t=(0,c.LM)(s),n=function(){let{selectMessage:e}=(0,a.c)();return s=>e(s,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return t?(0,i.jsx)(m,{href:t,icon:(0,i.jsx)(u.G,{icon:h.cC_,className:p.docCardIcon}),title:s.label,description:s.description??n(s.items.length)}):null}function x(e){let{item:s}=e,t=(0,o.Z)(s.href)?(0,i.jsx)(u.G,{icon:h.FL8,className:p.docCardIcon}):(0,i.jsx)(u.G,{icon:h.wlW,className:p.docCardIcon}),n=(0,c.xz)(s.docId??void 0);return(0,i.jsx)(m,{href:s.href,icon:t,title:s.label,description:s.description??(n?.description!="<Heading"&&n?.description!="<span")?n?.description:s.label})}function y(e){let{item:s}=e;switch(s.type){case"link":return(0,i.jsx)(x,{item:s});case"category":return(0,i.jsx)(g,{item:s});default:throw Error(`unknown item type ${JSON.stringify(s)}`)}}function j(e){let{className:s}=e,t=(0,c.jA)();return(0,i.jsx)(v,{items:t.items,className:s})}function v(e){let{items:s,className:t}=e;if(!s)return(0,i.jsx)(j,{...e});let r=(0,c.MN)(s);return(0,i.jsx)("section",{className:(0,n.Z)("row",t),children:r.map((e,s)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:e})},s))})}}}]);