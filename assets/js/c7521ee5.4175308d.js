"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["58888"],{34920:function(e,s,r){r.r(s),r.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>p,frontMatter:()=>c});var t=JSON.parse('{"id":"api/v3/access-request-approvals","title":"Access Request Approvals","description":"Access Request Approvals","source":"@site/docs/api/v3/access-request-approvals.tag.mdx","sourceDirName":"api/v3","slug":"/api/v3/access-request-approvals","permalink":"/docs/api/v3/access-request-approvals","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"access-request-approvals","title":"Access Request Approvals","description":"Access Request Approvals","custom_edit_url":null},"sidebar":"isc_v3_sidebar","previous":{"title":"List Access Profile\'s Entitlements","permalink":"/docs/api/v3/get-access-profile-entitlements"},"next":{"title":"Pending Access Request Approvals List","permalink":"/docs/api/v3/list-pending-approvals"}}'),a=r("85893"),n=r("50065"),i=r("75493"),o=r("45043");let c={id:"access-request-approvals",title:"Access Request Approvals",description:"Access Request Approvals",custom_edit_url:null},l=void 0,d={},p=[];function u(e){let s={a:"a",br:"br",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Use this API to implement and customize access request approval functionality.\nWith this functionality in place, administrators can delegate qualified users to review users' requests for access or managers' requests to revoke team members' access to applications, entitlements, or roles.",(0,a.jsx)(s.br,{}),"\n","This enables more qualified users to review access requests and the others to spend their time on other tasks."]}),"\n",(0,a.jsxs)(s.p,{children:["In Identity Security Cloud, users can request access to applications, entitlements, and roles, and managers can request that team members' access be revoked.",(0,a.jsx)(s.br,{}),"\n","For applications and entitlements, administrators can set access profiles to require approval from the access profile owner, the application owner, the source owner, the requesting user's manager, or a governance group for access to be granted or revoked.",(0,a.jsx)(s.br,{}),"\n","For roles, administrators can also set roles to allow access requests and require approval from the role owner, the requesting user's manager, or a governance group for access to be granted or revoked.",(0,a.jsx)(s.br,{}),"\n","If the administrator designates a governance group as the required approver, any governance group member can approve the requests."]}),"\n",(0,a.jsx)(s.p,{children:"When a user submits an access request, Identity Security Cloud sends the first required approver in the queue an email notification, based on the access request configuration's approval and reminder escalation configuration."}),"\n",(0,a.jsxs)(s.p,{children:["In Approvals in Identity Security Cloud, required approvers can view pending access requests under the Requested tab and approve or deny them, or the approvers can reassign the requests to different reviewers for approval.",(0,a.jsx)(s.br,{}),"\n","If the required approver approves the request and is the only reviewer required, Identity Security Cloud grants or revokes access, based on the request.",(0,a.jsx)(s.br,{}),"\n","If multiple reviewers are required, Identity Security Cloud sends the request to the next reviewer in the queue, based on the access request configuration's approval reminder and escalation configuration.",(0,a.jsx)(s.br,{}),"\n","The required approver can then view any completed access requests under the Reviewed tab."]}),"\n",(0,a.jsxs)(s.p,{children:["Refer to ",(0,a.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/help/requests/index.html",children:"Access Requests"})," for more information about access request approvals."]}),"\n","\n",(0,a.jsx)(i.Z,{items:(0,o.useCurrentSidebarCategory)().items})]})}function m(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},75493:function(e,s,r){r.d(s,{Z:()=>j});var t=r("85893");r("67294");var a=r("67026"),n=r("69369"),i=r("83012"),o=r("43115"),c=r("63150"),l=r("96025"),d=r("34403");let p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=r("62163"),m=r("97596");function h(e){let{href:s,children:r}=e;return(0,t.jsx)(i.Z,{href:s,className:(0,a.Z)("card padding--lg",p.cardContainer),children:r})}function v(e){let{href:s,icon:r,title:n,description:i}=e;return(0,t.jsxs)(h,{href:s,children:[(0,t.jsxs)(d.default,{as:"h2",className:(0,a.Z)("text--truncate",p.cardTitle),title:n,children:[r," ",n]}),i&&(0,t.jsx)("p",{className:(0,a.Z)("text--truncate",p.cardDescription),title:i,children:i})]})}function f(e){let{item:s}=e,r=(0,n.LM)(s),a=function(){let{selectMessage:e}=(0,o.c)();return s=>e(s,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s}))}();return r?(0,t.jsx)(v,{href:r,icon:(0,t.jsx)(u.G,{icon:m.cC_,className:p.docCardIcon}),title:s.label,description:s.description??a(s.items.length)}):null}function q(e){let{item:s}=e,r=(0,c.Z)(s.href)?(0,t.jsx)(u.G,{icon:m.FL8,className:p.docCardIcon}):(0,t.jsx)(u.G,{icon:m.wlW,className:p.docCardIcon}),a=(0,n.xz)(s.docId??void 0);return(0,t.jsx)(v,{href:s.href,icon:r,title:s.label,description:s.description??(a?.description!="<Heading"&&a?.description!="<span")?a?.description:s.label})}function g(e){let{item:s}=e;switch(s.type){case"link":return(0,t.jsx)(q,{item:s});case"category":return(0,t.jsx)(f,{item:s});default:throw Error(`unknown item type ${JSON.stringify(s)}`)}}function x(e){let{className:s}=e,r=(0,n.jA)();return(0,t.jsx)(j,{items:r.items,className:s})}function j(e){let{items:s,className:r}=e;if(!s)return(0,t.jsx)(x,{...e});let i=(0,n.MN)(s);return(0,t.jsx)("section",{className:(0,a.Z)("row",r),children:i.map((e,s)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(g,{item:e})},s))})}}}]);