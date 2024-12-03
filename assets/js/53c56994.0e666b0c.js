"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["85117"],{69762:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"extensibility/rules/connector-rules/jdbc-buildmap-rule","title":"JDBC BuildMap Rule","description":"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.","source":"@site/docs/extensibility/rules/connector-rules/jdbc_build_map_rule.md","sourceDirName":"extensibility/rules/connector-rules","slug":"/extensibility/rules/connector-rules/jdbc-buildmap-rule","permalink":"/docs/extensibility/rules/connector-rules/jdbc-buildmap-rule","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/connector-rules/jdbc_build_map_rule.md","tags":[{"inline":true,"label":"Rules","permalink":"/docs/tags/rules"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"jdbc-buildmap-rule","title":"JDBC BuildMap Rule","pagination_label":"JDBC BuildMap Rule","sidebar_label":"JDBC BuildMap Rule","sidebar_class_name":"jdbcBuildMapRule","keywords":["cloud","rules"],"description":"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.","slug":"/extensibility/rules/connector-rules/jdbc-buildmap-rule","tags":["Rules"]},"sidebar":"openApiSidebar","previous":{"title":"Before and After Operations","permalink":"/docs/extensibility/rules/connector-rules/before-and-after-rule-operations"},"next":{"title":"JDBC Provision Rule","permalink":"/docs/extensibility/rules/connector-rules/jdbc-provisioning-rule"}}'),l=n("85893"),r=n("50065");let s={id:"jdbc-buildmap-rule",title:"JDBC BuildMap Rule",pagination_label:"JDBC BuildMap Rule",sidebar_label:"JDBC BuildMap Rule",sidebar_class_name:"jdbcBuildMapRule",keywords:["cloud","rules"],description:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data.",slug:"/extensibility/rules/connector-rules/jdbc-buildmap-rule",tags:["Rules"]},a=void 0,d={},o=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(t.p,{children:"This rule manipulates raw input data provided by the rows and columns in a file and builds a map from the incoming data."}),"\n",(0,l.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Connector Execution"})," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Logging"})," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Rule Execution",src:n(8e3).Z+"",width:"1525",height:"618"})}),"\n",(0,l.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Argument"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Purpose"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"result"}),(0,l.jsx)(t.td,{children:"java.sql.ResultSet"}),(0,l.jsx)(t.td,{children:"Current ResultSet from the JDBC Connector."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"connection"}),(0,l.jsx)(t.td,{children:"java.sql.Connection"}),(0,l.jsx)(t.td,{children:"Reference to the current SQL connection."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"state"}),(0,l.jsx)(t.td,{children:"java.util.Map"}),(0,l.jsx)(t.td,{children:"Map that can be used to store and share data between executions of this rule during a single aggregation run."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"application"}),(0,l.jsx)(t.td,{children:"sailpoint.object.Application"}),(0,l.jsx)(t.td,{children:"Reference to the source JDBC Application."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"schema"}),(0,l.jsx)(t.td,{children:"sailpoint.object.Schema"}),(0,l.jsx)(t.td,{children:"Reference to the schema object for the JDBC source being read."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Argument"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Purpose"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"map"}),(0,l.jsx)(t.td,{children:"java.util.Map"}),(0,l.jsx)(t.td,{children:"Map of names/values representing a row of data from the JDBC resource."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCBuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,l.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="JDBCBuildMap">\n  <Description>\nThis basic rule performs the default mapping and then replaces the \u201Cstatus\u201D value read from the database with a\nBoolean \u201Cinactive\u201D attribute in the map.\n</Description>\n  <Source><![CDATA[\n\n     import sailpoint.connector.*;\n\n     Map map = JDBCConnector.buildMapFromResultSet(result, schema);\n\n     String status = (String) map.get("status");\n\n     if( "inactive".equals(status) ) {\n\n          map.put("inactive", true);\n\n     } else {\n\n          map.put("inactive", false);\n\n     }\n\n     map.remove("status");\n\n     return map;\n\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,l.jsx)(t.h2,{id:"attach-to-source",children:"Attach to Source"}),"\n",(0,l.jsxs)(t.p,{children:["Refer to ",(0,l.jsx)(t.a,{href:"/docs/extensibility/rules/connector-rules#jdbcbuildmap-rule",children:"Attaching Connector-Related Rules to Sources"})," for details on how to attach your rule to your source."]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8e3:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);