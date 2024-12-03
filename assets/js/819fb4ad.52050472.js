"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["98307"],{19483:function(e,n,t){t.r(n),t.d(n,{metadata:()=>c,contentTitle:()=>r,default:()=>u,assets:()=>s,toc:()=>d,frontMatter:()=>a});var c=JSON.parse('{"id":"connectivity/saas-connectivity/connector-commands/account-read","title":"Account Read","description":"Aggregate a single account from the source into Identity Security Cloud.","source":"@site/docs/connectivity/saas-connectivity/connector-commands/account-read.md","sourceDirName":"connectivity/saas-connectivity/connector-commands","slug":"/connectivity/saas-connectivity/commands/account-read","permalink":"/docs/connectivity/saas-connectivity/commands/account-read","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/account-read.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"},{"inline":true,"label":"Connector Command","permalink":"/docs/tags/connector-command"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"account-read","title":"Account Read","pagination_label":"Account Read","sidebar_label":"Account Read","keywords":["connectivity","connectors","account read"],"description":"Aggregate a single account from the source into Identity Security Cloud.","slug":"/connectivity/saas-connectivity/commands/account-read","tags":["Connectivity","Connector Command"]},"sidebar":"openApiSidebar","previous":{"title":"Account List","permalink":"/docs/connectivity/saas-connectivity/commands/account-list"},"next":{"title":"Account Unlock","permalink":"/docs/connectivity/saas-connectivity/commands/account-unlock"}}'),o=t("85893"),i=t("50065");let a={id:"account-read",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","account read"],description:"Aggregate a single account from the source into Identity Security Cloud.",slug:"/connectivity/saas-connectivity/commands/account-read",tags:["Connectivity","Connector Command"]},r=void 0,s={},d=[{value:"Example StdAccountReadInput",id:"example-stdaccountreadinput",level:3},{value:"Example StdAccountReadOutput",id:"example-stdaccountreadoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,o.jsx)(n.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Input"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"StdAccountReadInput"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Output"}),(0,o.jsx)(n.td,{style:{textAlign:"center"},children:"StdAccountReadOutput"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"example-stdaccountreadinput",children:"Example StdAccountReadInput"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"example-stdaccountreadoutput",children:"Example StdAccountReadOutput"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"The account read command aggregates a single account from the target source into Identity Security Cloud. ISC can call this command during a \u201Cone-off\u201D account refresh, which you can trigger by aggregating an individual account in ISC."}),"\n",(0,o.jsxs)(n.p,{children:["To use this command, you must specify this value in the ",(0,o.jsx)(n.code,{children:"commands"})," array: ",(0,o.jsx)(n.code,{children:"std:account:read"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Account Read",src:t(3288).Z+"",width:"2558",height:"1308"})}),"\n",(0,o.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsxs)(n.p,{children:["Implementation of account read is similar to account list's implementation, except the code only needs to get one account, not all the accounts. The following snippet is from ",(0,o.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"async getAccount(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableAccount> {\n    const id = <SimpleKeyType>identity\n    let found = false\n\n    return this.airTableBase('Users').select({\n        view: 'Grid view',\n        filterByFormula: `({Id} = '${id.simple.id}')`\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            found = true\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray[0]\n    }).catch(err => {\n        throw new ConnectorError('error while getting account: ' + err)\n    }).finally(() => {\n        // if the account is not found, throw the special NotFound error type\n        if (!found) {\n            throw new ConnectorError(\"Account not found\", ConnectorErrorType.NotFound)\n        }\n    })\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["One special case of this command is the ",(0,o.jsx)(n.code,{children:"NotFound"})," type. On line 20, if an account is not found, the ",(0,o.jsx)(n.code,{children:"ConnectorError"})," is thrown with the ",(0,o.jsx)(n.code,{children:"ConnectorErrorType.NotFound"})," type. This tells ISC the account does not exist, and ISC then triggers the account create logic to generate the account."]}),"\n",(0,o.jsxs)(n.p,{children:["The following code snippet from ",(0,o.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts",children:"index.ts"})," shows how to register the account read command on the connector object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// Connector must be exported as module property named connector\nexport const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {\n            const account = await airtable.getAccount(input.key)\n\n            res.send(account.toStdAccountReadOutput())\n        })\n...\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3288:function(e,n,t){t.d(n,{Z:function(){return c}});let c=t.p+"assets/images/account_read_idn-4fc336ce24816010e43fdcd3858dd960.png"}}]);