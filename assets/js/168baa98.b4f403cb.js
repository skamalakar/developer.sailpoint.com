"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["42679"],{14026:function(e,r,t){t.r(r),t.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"extensibility/transforms/operations/rule","title":"Rule","description":"Reuse rule logic that has already been written for a previous use case.","source":"@site/docs/extensibility/transforms/operations/rule.md","sourceDirName":"extensibility/transforms/operations","slug":"/extensibility/transforms/operations/rule","permalink":"/docs/extensibility/transforms/operations/rule","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/rule.md","tags":[{"inline":true,"label":"Transforms","permalink":"/docs/tags/transforms"},{"inline":true,"label":"Transform Operations","permalink":"/docs/tags/transform-operations"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"frontMatter":{"id":"rule","title":"Rule","pagination_label":"Rule","sidebar_label":"Rule","sidebar_class_name":"rule","keywords":["transforms","operations","rule"],"description":"Reuse rule logic that has already been written for a previous use case.","slug":"/extensibility/transforms/operations/rule","tags":["Transforms","Transform Operations"]},"sidebar":"openApiSidebar","previous":{"title":"Right Pad","permalink":"/docs/extensibility/transforms/operations/right-pad"},"next":{"title":"Split","permalink":"/docs/extensibility/transforms/operations/split"}}'),n=t("85893"),i=t("50065");let a={id:"rule",title:"Rule",pagination_label:"Rule",sidebar_label:"Rule",sidebar_class_name:"rule",keywords:["transforms","operations","rule"],description:"Reuse rule logic that has already been written for a previous use case.",slug:"/extensibility/transforms/operations/rule",tags:["Transforms","Transform Operations"]},o=void 0,l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function u(e){let r={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(r.p,{children:"Like the reference transform, the rule transform allows you to reuse logic that has already been written for a previous use case. However, you can use the rule transform to reuse code contained within a Transform rule that either is not possible through only transforms or is too complex to maintain with Seaspray."}),"\n",(0,n.jsx)(r.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,n.jsxs)(r.p,{children:["In addition to the standard ",(0,n.jsx)(r.code,{children:"type"})," and ",(0,n.jsx)(r.code,{children:"name"})," attributes, the structure of a rule transform requires the ",(0,n.jsx)(r.code,{children:"name"})," of the rule you want to reference:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Transform Calculation Rule"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Required Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"type"})," - This must always be set to ",(0,n.jsx)(r.code,{children:"rule"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"attributes.name"})," - This is the name of the Transform rule the transform must invoke."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Optional Attributes"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"The rule transform can implement variables within the attributes list. These variables can be defined as static string values or even as the results of other transforms. Any variables defined here are passed to the Transform rule and are available for calculation within that code."}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,n.jsx)(r.code,{children:"true"})," or ",(0,n.jsx)(r.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.p,{children:'If you had a "Generate Random Number" rule that produced a random integer value, this transform would invoke that rule and return the output of the code contained within it.'}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Generate Random Number"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)("p",{children:"\xa0"}),"\n",(0,n.jsxs)(r.p,{children:["This transform shows a more complex use case in which you have a Transform rule written to perform various string manipulation tasks. If the manner the rule code uses to determine which task to run is passed to it by the ",(0,n.jsx)(r.code,{children:"operation"})," variable and the operation is intended to get the last n characters of a string, n can be provided to the rule via the ",(0,n.jsx)(r.code,{children:"numChars"})," variable. This transform invokes rule code to get the last three characters of the string passed to it with the UI configuration."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getEndOfString",\n    "input": {\n      "type": "trim"\n    },\n    "numChars": "3"\n  },\n  "type": "rule",\n  "name": "Rule Transform"\n}\n'})})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);