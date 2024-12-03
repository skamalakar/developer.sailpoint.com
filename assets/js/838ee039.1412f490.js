"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["69172"],{84065:function(e,t,i){i.r(t),i.d(t,{metadata:()=>n,contentTitle:()=>d,default:()=>c,assets:()=>o,toc:()=>l,frontMatter:()=>s});var n=JSON.parse('{"id":"extensibility/event-triggers/available/identity-attribute-changed","title":"Identity Attributes Changed","description":"Fires after one or more identity attributes changed.","source":"@site/docs/extensibility/event-triggers/available/identity-attribute-changed.md","sourceDirName":"extensibility/event-triggers/available","slug":"/extensibility/event-triggers/triggers/identity-attribute-changed","permalink":"/docs/extensibility/event-triggers/triggers/identity-attribute-changed","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/identity-attribute-changed.md","tags":[{"inline":true,"label":"Event Triggers","permalink":"/docs/tags/event-triggers"},{"inline":true,"label":"Available Event Triggers","permalink":"/docs/tags/available-event-triggers"},{"inline":true,"label":"Fire and Forget","permalink":"/docs/tags/fire-and-forget"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"identity-attribute-changed","title":"Identity Attributes Changed","pagination_label":"Identity Attributes Changed","sidebar_label":"Identity Attributes Changed","sidebar_class_name":"identityAttributesChanged","keywords":["event","trigger","identity","attributes","changed","available"],"description":"Fires after one or more identity attributes changed.","slug":"/extensibility/event-triggers/triggers/identity-attribute-changed","tags":["Event Triggers","Available Event Triggers","Fire and Forget"]},"sidebar":"openApiSidebar","previous":{"title":"Form Submitted","permalink":"/docs/extensibility/event-triggers/triggers/form-submitted"},"next":{"title":"Identity Created","permalink":"/docs/extensibility/event-triggers/triggers/identity-created"}}'),r=i("85893"),a=i("50065");let s={id:"identity-attribute-changed",title:"Identity Attributes Changed",pagination_label:"Identity Attributes Changed",sidebar_label:"Identity Attributes Changed",sidebar_class_name:"identityAttributesChanged",keywords:["event","trigger","identity","attributes","changed","available"],description:"Fires after one or more identity attributes changed.",slug:"/extensibility/event-triggers/triggers/identity-attribute-changed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},d=void 0,o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function g(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Flow",src:i(88528).Z+"",width:"1195",height:"237"})}),"\n",(0,r.jsxs)(t.p,{children:["Identity Attribute Changed events occur when any attributes aggegrated from an authoritative source differ from the current attributes for an identity during an identity refresh. See ",(0,r.jsx)(t.a,{href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045",children:"Configuring Correlation"})," for more information."]}),"\n",(0,r.jsx)(t.p,{children:"This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This event trigger doesn't detect an identity's change in lifecycle state from 'null' to 'active', so it's recommended that you set an identity's lifecycle state when it's created. You can then use the ",(0,r.jsx)(t.a,{href:"/docs/extensibility/event-triggers/triggers/identity-created",children:"Identity Created"})," trigger to detect that change to 'active' for Joiners."]})}),"\n",(0,r.jsx)(t.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Notify an administrator or system to take the appropriate provisioning actions as part of the Mover workflow."}),"\n",(0,r.jsx)(t.li,{children:"Notify a system to trigger another action, like triggering a certification campaign when an identity's manager changes, for example."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "changes": [\n    {\n      "attribute": "department",\n      "oldValue": "sales",\n      "newValue": "marketing"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,r.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},88528:function(e,t,i){i.d(t,{Z:function(){return n}});let n=i.p+"assets/images/trigger-path-a49a87df200b8fea737b95faf2eac61a.png"}}]);