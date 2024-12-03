"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["50919"],{38504:function(n,t,e){e.r(t),e.d(t,{metadata:()=>c,contentTitle:()=>l,default:()=>r,assets:()=>s,toc:()=>u,frontMatter:()=>a});var c=JSON.parse('{"id":"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock-customizer","title":"Account Unlock","description":"Intercept the account unlock command.","source":"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md","sourceDirName":"connectivity/saas-connectivity/connector-customizers/customizer-commands","slug":"/connectivity/saas-connectivity/customizers/commands/account-unlock","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/account-unlock","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-unlock.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"account-unlock-customizer","title":"Account Unlock","pagination_label":"Account Unlock","sidebar_label":"Account Unlock","keywords":["connectivity","connectors","Account Unlock"],"description":"Intercept the account unlock command.","slug":"/connectivity/saas-connectivity/customizers/commands/account-unlock","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Account Read","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/account-read"},"next":{"title":"Account Update","permalink":"/docs/connectivity/saas-connectivity/customizers/commands/account-update"}}'),o=e("85893"),i=e("50065");let a={id:"account-unlock-customizer",title:"Account Unlock",pagination_label:"Account Unlock",sidebar_label:"Account Unlock",keywords:["connectivity","connectors","Account Unlock"],description:"Intercept the account unlock command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-unlock",tags:["Connectivity","Connector Command"]},l=void 0,s={},u=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountUnlockInput",id:"example-stdaccountunlockinput",level:3},{value:"Example StdAccountUnlockOutput",id:"example-stdaccountunlockoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-unlock command",id:"before-account-unlock-command",level:3},{value:"After account-unlock command",id:"after-account-unlock-command",level:3}];function d(n){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,o.jsx)(t.a,{href:"../../commands/account-unlock",children:"account-unlock"})," command."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUnlockInput"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountUnlockOutput"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"example-stdaccountunlockinput",children:"Example StdAccountUnlockInput"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"example-stdaccountunlockoutput",children:"Example StdAccountUnlockOutput"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.h3,{id:"before-account-unlock-command",children:"Before account-unlock command"}),"\n",(0,o.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdAccountUnlock(async (context: Context, input: StdAccountUnlockInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,o.jsx)(t.h3,{id:"after-account-unlock-command",children:"After account-unlock command"}),"\n",(0,o.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"    .afterStdAccountUnlock(async (context: Context, output: StdAccountUnlockOutput) => {\n        logger.info(`Running after account unlock for account ${output.identity}`)\n        return output\n    })\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function r(n={}){let{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}}}]);