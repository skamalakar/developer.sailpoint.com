"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["77204"],{98406:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"connectivity/saas-connectivity/in-depth/error-handling","title":"Error Handling","description":"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.","source":"@site/docs/connectivity/saas-connectivity/in-depth/error-handling.md","sourceDirName":"connectivity/saas-connectivity/in-depth","slug":"/connectivity/saas-connectivity/in-depth/error-handling","permalink":"/docs/connectivity/saas-connectivity/in-depth/error-handling","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/in-depth/error-handling.md","tags":[{"inline":true,"label":"Connectivity","permalink":"/docs/tags/connectivity"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":3,"frontMatter":{"id":"error-handling","title":"Error Handling","pagination_label":"Error Handling","sidebar_label":"Error Handling","sidebar_position":3,"sidebar_class_name":"errorHandling","keywords":["connectivity","connectors","error handling"],"description":"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.","slug":"/connectivity/saas-connectivity/in-depth/error-handling","tags":["Connectivity"]},"sidebar":"openApiSidebar","previous":{"title":"Debugging","permalink":"/docs/connectivity/saas-connectivity/in-depth/debugging"},"next":{"title":"Linting","permalink":"/docs/connectivity/saas-connectivity/in-depth/linting"}}'),o=t("85893"),r=t("50065");let a={id:"error-handling",title:"Error Handling",pagination_label:"Error Handling",sidebar_label:"Error Handling",sidebar_position:3,sidebar_class_name:"errorHandling",keywords:["connectivity","connectors","error handling"],description:"If the code fails due to validation issues, connectivity, or configuration errors, you can handle the error and provide the user with information about what went wrong.",slug:"/connectivity/saas-connectivity/in-depth/error-handling",tags:["Connectivity"]},s=void 0,c={},d=[{value:"Connector Errors",id:"connector-errors",level:2},{value:"Not Found Error Type",id:"not-found-error-type",level:2},{value:"Custom Errors",id:"custom-errors",level:2},{value:"Recommended custom exceptions and examples of when to use them",id:"recommended-custom-exceptions-and-examples-of-when-to-use-them",level:2},{value:"InvalidConfigurationException",id:"invalidconfigurationexception",level:4},{value:"InsufficientPermissionException",id:"insufficientpermissionexception",level:4},{value:"InvalidRequestException",id:"invalidrequestexception",level:4},{value:"ObjectAlreadyExistsException",id:"objectalreadyexistsexception",level:4},{value:"InvalidResponseException",id:"invalidresponseexception",level:4},{value:"TimeoutException",id:"timeoutexception",level:4}];function l(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"If the code fails due to validation issues, connectivity or configuration errors, you can handle the error and provide the user with information about what went wrong. Properly handled errors make it easier to debug and identify what happened in your connector when something goes wrong."}),"\n",(0,o.jsx)(n.h2,{id:"connector-errors",children:"Connector Errors"}),"\n",(0,o.jsx)(n.p,{children:"The connector SDK has a built-in ConnectorError to use in your project to handle most generic errors:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { ConnectorError } from \"@sailpoint/connector-sdk\"\n\n...\n\nexport class AirtableClient {\n\n...\n\n    async getAllAccounts(): Promise<AirtableAccount[]> {\n        return this.airTableBase('Users').select({\n            view: 'Grid view'\n        }).firstPage().then(records => {\n            const recordArray: Array<AirtableAccount> = []\n            for (const record of records) {\n                recordArray.push(AirtableAccount.createWithRecords(record))\n            }\n            return recordArray\n        }).catch(err => {\n            throw new ConnectorError('error while getting accounts: ' + err)\n        })\n    }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"not-found-error-type",children:"Not Found Error Type"}),"\n",(0,o.jsxs)(n.p,{children:['The connector SDK offers a special error type of "Not Found". This error signals to ISC that the specific account is not in the source system. If the account should be in the source system, ISC will then call the connector ',(0,o.jsx)(n.code,{children:"std:account:create"})," command to create the account."]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'.stdAccountUpdate(async (context: Context, input: StdAccountUpdateInput, res: Response<StdAccountUpdateOutput>) => {\n    const account = await myClient.getAccount(input.identity)\n    if (!account) {\n        // account was not found, but identity now has the account and expects it to be there!\n        // Send an error message to Identity Security Cloud so the account is automatically created\n        if (!account) {\n            throw new ConnectorError("account is not found", ConnectorErrorType.NotFound)\n        }\n    }\n\n    ... perform normal account update logic below\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"custom-errors",children:"Custom Errors"}),"\n",(0,o.jsxs)(n.p,{children:["You can also create custom errors and use them in your code to give more meaningful and specific responses to error states. For example, when you are configuring your connector, it is recommended that you throw an ",(0,o.jsx)(n.code,{children:"InvalidConfigurationError"})," instead of a generic ConnectorError. To do this, create the custom error:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/errors/invalid-configuration-error.ts",children:"invalid-configuration-error.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import {ConnectorError, ConnectorErrorType} from '@sailpoint/connector-sdk';\n\n/**\n * Thrown when an application missing configuration during initialization\n */\n\nexport class InvalidConfigurationException extends ConnectorError {\n  /**\n   * Constructor\n   * @param message Error message\n   * @param type ConnectorErrorType they type of error\n   */\n  constructor(message: string, type?: ConnectorErrorType) {\n    super(message, type);\n    this.name = 'InvalidConfigurationException';\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then throw the error in your code:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts",children:"airtable.ts"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import { InvalidConfigurationException } from \"./errors/invalid-configuration-error\"\n\nexport class AirtableClient {\n    private readonly airTableBase: Airtable.Base\n    constructor(config: any) {\n        // Fetch necessary properties from config.\n        // Following properties actually do not exist in the config -- it just serves as an example.\n        if (config.apiKey == null) {\n            throw new InvalidConfigurationException('token must be provided from config')\n        }\n        if (config.airtableBase == null) {\n            throw new InvalidConfigurationException('airtableBase base id needed')\n        }\n        Airtable.configure({apiKey: config.apiKey})\n        this.airTableBase = Airtable.base(config.airtableBase)\n    }\n\n    ...\n\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"recommended-custom-exceptions-and-examples-of-when-to-use-them",children:"Recommended custom exceptions and examples of when to use them"}),"\n",(0,o.jsx)(n.h4,{id:"invalidconfigurationexception",children:"InvalidConfigurationException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use this exception during any operation if the connector requires a certain configuration to connect to the managed-system, but the configuration is either faulty or not provided. This could happen before sending a request to the managed system."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"insufficientpermissionexception",children:"InsufficientPermissionException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use this exception during any operation if the connector gets a known managed system exception indicating a lack of permission."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"invalidrequestexception",children:"InvalidRequestException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use this exception during any operation if the connector is creating messages to be sent to the managed system but is failing to create a message. This could happen before sending a request to the managed system."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"objectalreadyexistsexception",children:"ObjectAlreadyExistsException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use this exception during the provisioning operation of the type create(only) if the connector is trying to create an entity that already exists on the managed system."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"invalidresponseexception",children:"InvalidResponseException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use this exception during aggregation or in the getObject when the connector is unable to parse data received from managed system. This could happen if something fails when converting a managed system response to a ResourceObject."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"timeoutexception",children:"TimeoutException"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is intended for cases in which the connector receives timeout related error/exceptions from the managed system."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);