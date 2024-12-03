"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["60731"],{11033:function(t,e,n){n.r(e),n.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>d,assets:()=>a,toc:()=>m,frontMatter:()=>c});var i=JSON.parse('{"id":"connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list-customizer","title":"Entitlement List","description":"Intercept the entitlement list command.","source":"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list.md","sourceDirName":"connectivity/saas-connectivity/connector-customizers/customizer-commands","slug":"/connectivity/saas-connectivity/customizers/commands/entitlement-list","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-list","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-list.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"entitlement-list-customizer","title":"Entitlement List","pagination_label":"Entitlement List","sidebar_label":"Entitlement List","keywords":["connectivity","connectors","Entitlement List"],"description":"Intercept the entitlement list command.","slug":"/connectivity/saas-connectivity/customizers/commands/entitlement-list","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Change Password","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/change-password"},"next":{"title":"Entitlement Read","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read"}}'),s=n("85893"),l=n("50065");let c={id:"entitlement-list-customizer",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","Entitlement List"],description:"Intercept the entitlement list command.",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-list",tags:["Connectivity","Connector Command"]},o=void 0,a={},m=[{value:"Overview",id:"overview",level:2},{value:"Example StdEntitlementListInput",id:"example-stdentitlementlistinput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before entitlement-list command",id:"before-entitlement-list-command",level:3},{value:"After entitlement-list command",id:"after-entitlement-list-command",level:3}];function r(t){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(e.p,{children:["Use these commands to intercept the ",(0,s.jsx)(e.a,{href:"../../commands/entitlement-list",children:"entitlement-list"})," command."]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,s.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,s.jsx)(e.td,{style:{textAlign:"center"},children:"StdEntitlementListInput"})]})})]}),"\n",(0,s.jsx)(e.h3,{id:"example-stdentitlementlistinput",children:"Example StdEntitlementListInput"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'{\n    "type": "group"\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(e.h3,{id:"before-entitlement-list-command",children:"Before entitlement-list command"}),"\n",(0,s.jsx)(e.p,{children:"Use this logic to implement the command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"    .beforeStdEntitlementList(async (context: Context, input: StdEntitlementListInput) => {\n        logger.info(`Running before entitlement list for account. State ${input.state}`)\n        return input\n    })\n"})}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,s.jsx)(e.h3,{id:"after-entitlement-list-command",children:"After entitlement-list command"}),"\n",(0,s.jsxs)(e.p,{children:["After entitlement-list is not available for customization at this time. If you need to modify the values of the response, it is recommended that you use ",(0,s.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/extensibility/transforms/",children:"Transforms"}),"."]})]})}function d(t={}){let{wrapper:e}={...(0,l.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(r,{...t})}):r(t)}}}]);