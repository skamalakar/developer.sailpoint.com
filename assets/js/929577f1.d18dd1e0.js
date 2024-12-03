"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["15514"],{45755:function(t,e,n){n.r(e),n.d(e,{metadata:()=>a,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>l,frontMatter:()=>i});var a=JSON.parse('{"id":"connectivity/saas-connectivity/connector-commands/account-list","title":"Account List","description":"Aggregate all accounts from the source into Identity Security Cloud.","source":"@site/docs/connectivity/saas-connectivity/connector-commands/account-list.md","sourceDirName":"connectivity/saas-connectivity/connector-commands","slug":"/connectivity/saas-connectivity/commands/account-list","permalink":"/docs/connectivity/saas-connectivity/commands/account-list","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-list.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"account-list","title":"Account List","pagination_label":"Account List","sidebar_label":"Account List","keywords":["connectivity","connectors","account list"],"description":"Aggregate all accounts from the source into Identity Security Cloud.","slug":"/connectivity/saas-connectivity/commands/account-list","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Account Enable","permalink":"/docs/connectivity/saas-connectivity/commands/account-enable"},"next":{"title":"Account Read","permalink":"/docs/connectivity/saas-connectivity/commands/account-read"}}'),o=n("85893"),s=n("50065");let i={id:"account-list",title:"Account List",pagination_label:"Account List",sidebar_label:"Account List",keywords:["connectivity","connectors","account list"],description:"Aggregate all accounts from the source into Identity Security Cloud.",slug:"/connectivity/saas-connectivity/commands/account-list",tags:["Connectivity","Connector Command"]},c=void 0,r={},l=[{value:"Example StdAccountListInput",id:"example-stdaccountlistinput",level:3},{value:"Example StdAccountListOutput",id:"example-stdaccountlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Delta Aggregation (State)",id:"delta-aggregation-state",level:2}];function d(t){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,o.jsx)(e.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Input"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:"StdAccountListInput"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{style:{textAlign:"left"},children:"Output"}),(0,o.jsx)(e.td,{style:{textAlign:"center"},children:"StdAccountListOutput"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"example-stdaccountlistinput",children:"Example StdAccountListInput"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'"state": {"date": "1686341338871"},\n"stateful": true\n'})}),"\n",(0,o.jsx)(e.h3,{id:"example-stdaccountlistoutput",children:"Example StdAccountListOutput"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"The account list command aggregates all accounts from the target source into Identity Security Cloud. ISC calls this command during a manual or scheduled account aggregation."}),"\n",(0,o.jsxs)(e.p,{children:["To use this command, you must specify this value in the ",(0,o.jsx)(e.code,{children:"commands"})," array: ",(0,o.jsx)(e.code,{children:"std:account:list"})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Account List",src:n(31411).Z+"",width:"2500",height:"846"})}),"\n",(0,o.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsxs)(e.p,{children:["For you to be able to implement this endpoint, the web service must expose an API for listing user accounts and entitlements (i.e. roles or groups). Sometimes, a target source\u2019s API has a single endpoint providing all the attributes and entitlements a source account contains. However, some APIs may break these attributes and entitlements into separate API endpoints, requiring you to make multiple calls to gather all an account's necessary data. The following code from ",(0,o.jsx)(e.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"})," shows the necessary steps to create a complete account from the various endpoints the API offers:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"async getAllAccounts(): Promise<AirtableAccount[]> {\n    return this.airTableBase('Users').select({\n        view: 'Grid view'\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError('error while getting accounts: ' + err)\n    })\n}\n"})}),"\n",(0,o.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(e.p,{children:["ISC will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to ISC as it's retrieved from your source system. For more details and an example, refer to ",(0,o.jsx)(e.a,{href:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts",children:"Connector Timeouts"}),"."]})}),"\n",(0,o.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(e.p,{children:["ISC supports ",(0,o.jsx)(e.a,{href:"#delta-aggregation-state",children:"delta aggregation"}),". If your source has a large number of accounts that will be syncronized with ISC, then it is highly recommended to utilize ",(0,o.jsx)(e.a,{href:"#delta-aggregation-state",children:"delta aggregation"})," for the source."]})}),"\n",(0,o.jsxs)(e.p,{children:["The following code snippet from ",(0,o.jsx)(e.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts",children:"index.ts"})," shows how to register the account list command on the connector object:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK or implement own client as necessary to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdAccountList(async (context: Context, input: undefined, res: Response<StdAccountListOutput>) => {\n            const accounts = await airtable.getAllAccounts()\n\n            for (const account of accounts) {\n                res.send(account.toStdAccountListOutput())\n            }\n        })\n...\n"})}),"\n",(0,o.jsx)(e.p,{children:"ISC expects each user in the target source to be converted into a format ISC understands. The specific attributes the web service returns depend on what your source provides."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:"public toStdAccountListOutput(): StdAccountListOutput {\n    return this.buildStandardObject();\n}\n\nprivate buildStandardObject(): StdAccountListOutput | StdAccountCreateOutput | StdAccountReadOutput | StdAccountListOutput {\n    return {\n        key: SimpleKey(this.id),\n        disabled: !this.enabled,\n        locked: this.locked,\n        attributes: {\n            id: this.id,\n            displayName: this.displayName,\n            department: this.department,\n            firstName: this.firstName,\n            lastName: this.lastName,\n            email: this.email,\n            entitlements: this.entitlments,\n        },\n    }\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"The result of the account list command is not an array of objects but several individual objects. This is the format ISC expects, so if you see something like the following result while testing, it is normal:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "department": "sailpoint admins",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n{\n    "key": {\n        "simple": {\n            "id": "john"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john",\n        "displayName": "John Doe External",\n        "department": "external",\n        "firstName": "John",\n        "lastName": "Doe",\n        "email": "example@gmail.com",\n        "entitlements": [\n            "administrator"\n        ]\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"delta-aggregation-state",children:"Delta Aggregation (State)"}),"\n",(0,o.jsx)(e.p,{children:"If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["In your connector-spec.json file, the feature needs to be enabled by adding the following key: ",(0,o.jsx)(e.code,{children:'"supportsStatefulCommands": true,'})," and in the sourceConfig section, a checkbox needs to be added to enable state with the key ",(0,o.jsx)(e.code,{children:"spConnEnableStatefulCommands"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'"supportsStatefulCommands": true,\n...\n{\n    "key": "spConnEnableStatefulCommands",\n    "label": "Stateful",\n    "required": true,\n    "type": "checkbox"\n}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsxs)(e.li,{children:["In the ",(0,o.jsx)(e.code,{children:"stdAccountList"})," command, when you are done sending accounts, you need to also send the state to ISC so it knows where to start the next time it sends a list request:"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'const state = {"data": Date.now().toString()}\n...\nres.saveState(state)\n'})}),"\n",(0,o.jsx)(e.p,{children:"In the above example, I am capturing the date, but you can use any value you want to store the state"}),"\n",(0,o.jsx)(e.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(e.p,{children:["The state that you send using the ",(0,o.jsx)(e.code,{children:"saveState"})," command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state."]})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsxs)(e.li,{children:["In the ",(0,o.jsx)(e.code,{children:"stdAccountList"})," command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-javascript",children:'.stdAccountList(async (context: Context, input: StdAccountListInput, res: Response<StdAccountListOutput>) => {\n    let accounts = []\n    const state = {"data": Date.now().toString()}\n    if (!input.state && input.stateful) {\n        logger.info(input, "No state provided, fetching all accounts")\n        accounts = await airtable.getAllAccounts()\n    } else if (input.state && input.stateful) {\n        logger.info(input ,"Current state provided, only fetching accounts after that state")\n        accounts = await airtable.getAllStatefulAccounts(new Date(Number(input.state?.data)))\n    } else {\n        logger.info(input.state ,"Source is not stateful, getting all acounts")\n        accounts = await airtable.getAllAccounts()\n    }\n    logger.info(accounts, "fetched the following accounts from Airtable")\n    for (const account of accounts) {\n        res.send(account.toStdAccountListOutput())\n    }\n    res.saveState(state)\n})\n'})})]})}function u(t={}){let{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},31411:function(t,e,n){n.d(e,{Z:function(){return a}});let a=n.p+"assets/images/account_list_idn-85ebe702c2bd034283e898d73b72e7fe.png"}}]);