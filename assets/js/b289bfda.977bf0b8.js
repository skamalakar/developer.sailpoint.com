"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["98109"],{72715:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"extensibility/rules/cloud-rules/buildmap-rule","title":"BuildMap Rule","description":"This rule manipulates raw input data provided by the rows and columns in a file.","source":"@site/docs/extensibility/rules/cloud-rules/build_map_rule.md","sourceDirName":"extensibility/rules/cloud-rules","slug":"/extensibility/rules/cloud-rules/buildmap-rule","permalink":"/docs/extensibility/rules/cloud-rules/buildmap-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/build_map_rule.md","tags":[{"inline":true,"label":"Rules","permalink":"/docs/tags/rules"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"buildmap-rule","title":"BuildMap Rule","pagination_label":"BuildMap Rule","sidebar_label":"BuildMap Rule","sidebar_class_name":"buildMapRule","keywords":["cloud","rules"],"description":"This rule manipulates raw input data provided by the rows and columns in a file.","slug":"/extensibility/rules/cloud-rules/buildmap-rule","tags":["Rules"]},"sidebar":"openApiSidebar","previous":{"title":"Before Provisioning Rule","permalink":"/docs/extensibility/rules/cloud-rules/before-provisioning-rule"},"next":{"title":"Correlation Rule","permalink":"/docs/extensibility/rules/cloud-rules/correlation-rule"}}'),t=i("85893"),r=i("50065");let s={id:"buildmap-rule",title:"BuildMap Rule",pagination_label:"BuildMap Rule",sidebar_label:"BuildMap Rule",sidebar_class_name:"buildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file.",slug:"/extensibility/rules/cloud-rules/buildmap-rule",tags:["Rules"]},o="BuildMap Rule",a={},d=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Connector Rule JSON Template",id:"connector-rule-json-template",level:2},{value:"Connector Rule Example",id:"connector-rule-example",level:2},{value:"Cloud Rule XML Template",id:"cloud-rule-xml-template",level:2},{value:"Cloud Rule Example",id:"cloud-rule-example",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"buildmap-rule",children:"BuildMap Rule"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data. Use this rule to create a new value by combining two columns together. For example, if one column was ",(0,t.jsx)(n.code,{children:"access"})," and another ",(0,t.jsx)(n.code,{children:"permissions"})," you could combine these together to create an entitlement ",(0,t.jsx)(n.code,{children:"admin-read"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"This rule runs in the cloud, but it's really a connector rule because it executes against the DelimitedFileConnector."})]}),"\n",(0,t.jsx)(n.h2,{id:"execution",children:"Execution"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and has read-only access to the records from the Delimited File being imported. However, it doesn't have access to on-premise sources or connectors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Rule Execution",src:i(49382).Z+"",width:"1594",height:"635"})}),"\n",(0,t.jsx)(n.h2,{id:"input",children:"Input"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Argument"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Purpose"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cols"}),(0,t.jsx)(n.td,{children:"java.util.List"}),(0,t.jsx)(n.td,{children:"Ordered list of the column names from the file\u2019s header records or specified columns list."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"record"}),(0,t.jsx)(n.td,{children:"java.util.List"}),(0,t.jsx)(n.td,{children:"Ordered list of the values for the current record, parsed based on the specified delimiter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"application"}),(0,t.jsx)(n.td,{children:"System.Collections.Hashtable"}),(0,t.jsx)(n.td,{children:"Map of the application configuration."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"schema"}),(0,t.jsx)(n.td,{children:"sailpoint.object.Schema"}),(0,t.jsx)(n.td,{children:"Reference to the schema object for the delimited file source being read."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"connector-rule-json-template",children:"Connector Rule JSON Template"}),"\n",(0,t.jsx)(n.p,{children:"This template is used for the connector rule development process which is supported for the delimited file connector. Note the BeanShell code is escaped in the $.sourceCode.script attribute. The example, unescaped and formatted for readability, follows."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\n    "name": "Sample BuildMapRule",\n    "type": "BuildMap",\n    "signature": {\n        "input": [\n            {\n                "name": "cols",\n                "description": "An ordered list of the column names from the file\u2019s header record or specified Columns list.",\n                "type": null\n            },\n            {\n                "name": "record",\n                "description": "An ordered list of the values for the current record (parsed based on the specified delimiter)",\n                "type": null\n            },\n            {\n                "name": "application",\n                "description": "The source object sent to the connector from IdentityNow.",\n                "type": null\n            },\n            {\n                "name": "schema",\n                "description": "A reference to the Schema object for the Delimited File source being read.",\n                "type": null\n            }\n        ],\n        "output": null\n    },\n    "sourceCode": {\n        "version": "1.0",\n        "script": "import sailpoint.connector.DelimitedFileConnector;\\n\\nMap map = DelimitedFileConnector.defaultBuildMap( cols, record );\\nString access = (String) map.get( \\"access\\" );\\nString permission = (String) map.get( \\"permission\\" );\\n\\nif ( access != null && permission != null ) {\\n     map.remove(\\"access\\");\\n     map.remove(\\"permission\\");\\n     map.put(\\"access\\", access + \\" - \\" + permission);\\n}\\nreturn map;"\n    },\n    "attributes": {\n        "sourceVersion": "1.0"\n    },\n    "description": "This basic rule performs the combines 2 values into a single attribute."\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"connector-rule-example",children:"Connector Rule Example"}),"\n",(0,t.jsx)(n.p,{children:"This is the unescaped BeanShell code from the $.sourceCode.script attribute above."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:' import sailpoint.connector.DelimitedFileConnector;\n\n Map map = DelimitedFileConnector.defaultBuildMap( cols, record );\n String access = (String) map.get( "access" );\n String permission = (String) map.get( "permission" );\n\n if ( access != null && permission != null ) {\n      map.remove("access");\n      map.remove("permission");\n      map.put("access", access + " - " + permission);\n }\n return map;\n'})}),"\n",(0,t.jsx)(n.h2,{id:"cloud-rule-xml-template",children:"Cloud Rule XML Template"}),"\n",(0,t.jsx)(n.p,{children:"This template is used for the cloud rule deployement process which is NOT requried for buildmap rules but is still supported."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>Describe your rule here.</Description>\n  <Signature>\n    <Inputs>\n      <Argument name="log"/>\n      <Argument name="cols" type="List"/>\n      <Argument name="record" type="List"/>\n      <Argument name="application"/>\n      <Argument name="schema"/>\n    </Inputs>\n  </Signature>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"cloud-rule-example",children:"Cloud Rule Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="BuildMap">\n  <Description>This basic rule performs the combines 2 values into a single attribute.</Description>\n  <Signature>\n    <Inputs>\n      <Argument name="log"/>\n      <Argument name="cols" type="List"/>\n      <Argument name="record" type="List"/>\n      <Argument name="application"/>\n      <Argument name="schema"/>\n    </Inputs>\n  </Signature>\n  <Source><![CDATA[\n\n     import sailpoint.connector.DelimitedFileConnector;\n\n     Map map = DelimitedFileConnector.defaultBuildMap( cols, record );\n     String access = (String) map.get( "access" );\n     String permission = (String) map.get( "permission" );\n\n     if ( access != null && permission != null ) {\n          map.remove("access");\n          map.remove("permission");\n          map.put("access", access + " - " + permission);\n     }\n     return map;\n\n  ]]></Source>\n</Rule>\n'})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},49382:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);