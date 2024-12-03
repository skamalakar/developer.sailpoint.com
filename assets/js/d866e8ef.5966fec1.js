"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["1802"],{66391:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>h,default:()=>T,assets:()=>R,toc:()=>f,frontMatter:()=>d});var r=JSON.parse('{"id":"api/iiq/get-resource-types","title":"get-resource-types","description":"<Heading","source":"@site/docs/api/iiq/get-resource-types.api.mdx","sourceDirName":"api/iiq","slug":"/api/iiq/get-resource-types","permalink":"/docs/api/iiq/get-resource-types","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to \'Returns all ResourceType resources.\' (get-resource-types)","tags":[],"version":"current","frontMatter":{"id":"get-resource-types","sidebar_label":"Returns all ResourceType resources.","hide_title":true,"hide_table_of_contents":true,"api":"eJztWM9v2zoM/lcEXXJYEGd9l8K3bC32AmzDXpqeuhwUm0m0J1uuJAcLAv/vIyU7sVOnXYdeBiSH2PpFfiQ/kpD3XBdghJM6n6Y85mtwM7C6NAnMdwVYPuROrC2PH3h3fjHkKdjEyILO4smJUqy9hZl6YJkwwJS0DlImc+Y2fq3QuYURm+Mo0Vmmc7aSoFLLVtowEMmmKw1yZ3Ze0gDytNAyd4MhG8iU/nORAT1biGhokw1kYsBEnjaD258OcovrdjBC2xocaOCeX43H9OiaNQNXmhxtOGseyUl0jnIdHRdFoWTiPRr9sCRjz4NueisM+dvJoNFpJxRKLZWzT1V/LbMlGKZX5/xqPDZICYHDJTyDboE1GJyAnyIrFM69v66GNYIeJeT/TmSZC0oK1IMmYcyWO3Y/+8pKi+8UHLeR9hjBo25hjNjhUDrIgnlh3joj8zWvWpgeOAKPJbhVXAgjMhvbRGaxKGScgbViDTa+Go3jz8iaWa2JL1BCA7Ut/5xevfwBicOFrtNl+tQL0xtyszvxRcu22oaWCfzeop8REpGvJ3g4++cyG4q/HK+BZf/O59+YSFNDnlsqypVwGoOkkIhbYE57IB+EBYzl5+dBRJMjhS2h6SA4BXRzHP2ZvWySJLrM3YgfeNpvdmFkJswuWpIVYSMaM3291l7u1RkSWyGV9178HgnYBOS0ejxFOPEljsAgJtsHCkNVo4aDnOfS55gtxwryPPaD3Jgy16DDLPg88mZQuXsspQFMAGdKqIa/K7fHJ0+ELSp0UwauJ3hfcDYVTrwQqTP5qnSgYj8pmtXXs2DjXBFHEQlQG21dfD2+HkdSPkZke7S9ijp1MWqoYFqz/ZjuPk6/HMq0r6fPI2nr4VX1UrmuSRRKMfQ3hzctyw0NEm0CnTqAMfD+N+y0Pjr47q36312w+O07Xy340vIuLe/S8i4t79LyLi3vNS2vqgmw0fXdmSIp3IYqyuk1Gl25BWM9tUujzkcjRSJLtzsGhZ9etaf1lul/we9BNKMiQdr9fde/YA2cfJtilVmQ/qQ0eMgDwK0ymZSE9GHRXvUNMZCwtefgQILM61jR2O/h5AWZr3RPkzkind3ezdltU6anlKwrgVy50UmZ4a5AaYow2fQ9RzXkryDnevQPRVc6T55T+71oNJQCW6AjM+EzJ3Sp37zBnxT8w4X+7/yuUYfLYXWMCiVkTq7xrNvXBO35nkMcpIX9nph0b1RV0fRjCYZYg69bYSS1W88aPAAixQJBhPofduSrJIGCkmArVOkT8fRjCHHtkDCfbufInV8qpH8L","sidebar_class_name":"get api-method","info_path":"docs/api/iiq/identityiq-scim-rest-api","custom_edit_url":"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to \'Returns all ResourceType resources.\' (get-resource-types)"},"sidebar":"iiqApiSideBar","previous":{"title":"ResourceTypes","permalink":"/docs/api/iiq/resource-types"},"next":{"title":"Returns a ResourceType resource based on ID.","permalink":"/docs/api/iiq/get-resource-type-by-id"}}'),i=t("85893"),o=t("50065"),p=t("47936"),a=t("44039"),n=t.n(a),c=t("40218"),u=t.n(c),m=t("69141"),l=t.n(m);t("61142"),t("5525");var y=t("34403");let d={id:"get-resource-types",sidebar_label:"Returns all ResourceType resources.",hide_title:!0,hide_table_of_contents:!0,api:"eJztWM9v2zoM/lcEXXJYEGd9l8K3bC32AmzDXpqeuhwUm0m0J1uuJAcLAv/vIyU7sVOnXYdeBiSH2PpFfiQ/kpD3XBdghJM6n6Y85mtwM7C6NAnMdwVYPuROrC2PH3h3fjHkKdjEyILO4smJUqy9hZl6YJkwwJS0DlImc+Y2fq3QuYURm+Mo0Vmmc7aSoFLLVtowEMmmKw1yZ3Ze0gDytNAyd4MhG8iU/nORAT1biGhokw1kYsBEnjaD258OcovrdjBC2xocaOCeX43H9OiaNQNXmhxtOGseyUl0jnIdHRdFoWTiPRr9sCRjz4NueisM+dvJoNFpJxRKLZWzT1V/LbMlGKZX5/xqPDZICYHDJTyDboE1GJyAnyIrFM69v66GNYIeJeT/TmSZC0oK1IMmYcyWO3Y/+8pKi+8UHLeR9hjBo25hjNjhUDrIgnlh3joj8zWvWpgeOAKPJbhVXAgjMhvbRGaxKGScgbViDTa+Go3jz8iaWa2JL1BCA7Ut/5xevfwBicOFrtNl+tQL0xtyszvxRcu22oaWCfzeop8REpGvJ3g4++cyG4q/HK+BZf/O59+YSFNDnlsqypVwGoOkkIhbYE57IB+EBYzl5+dBRJMjhS2h6SA4BXRzHP2ZvWySJLrM3YgfeNpvdmFkJswuWpIVYSMaM3291l7u1RkSWyGV9178HgnYBOS0ejxFOPEljsAgJtsHCkNVo4aDnOfS55gtxwryPPaD3Jgy16DDLPg88mZQuXsspQFMAGdKqIa/K7fHJ0+ELSp0UwauJ3hfcDYVTrwQqTP5qnSgYj8pmtXXs2DjXBFHEQlQG21dfD2+HkdSPkZke7S9ijp1MWqoYFqz/ZjuPk6/HMq0r6fPI2nr4VX1UrmuSRRKMfQ3hzctyw0NEm0CnTqAMfD+N+y0Pjr47q36312w+O07Xy340vIuLe/S8i4t79LyLi3vNS2vqgmw0fXdmSIp3IYqyuk1Gl25BWM9tUujzkcjRSJLtzsGhZ9etaf1lul/we9BNKMiQdr9fde/YA2cfJtilVmQ/qQ0eMgDwK0ymZSE9GHRXvUNMZCwtefgQILM61jR2O/h5AWZr3RPkzkind3ezdltU6anlKwrgVy50UmZ4a5AaYow2fQ9RzXkryDnevQPRVc6T55T+71oNJQCW6AjM+EzJ3Sp37zBnxT8w4X+7/yuUYfLYXWMCiVkTq7xrNvXBO35nkMcpIX9nph0b1RV0fRjCYZYg69bYSS1W88aPAAixQJBhPofduSrJIGCkmArVOkT8fRjCHHtkDCfbufInV8qpH8L",sidebar_class_name:"get api-method",info_path:"docs/api/iiq/identityiq-scim-rest-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Returns all ResourceType resources.' (get-resource-types)"},h=void 0,R={},f=[];function g(e){let s={p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Returns all ResourceType resources."}),"\n",(0,i.jsx)(p.Z,{method:"get",path:"/ResourceTypes",context:"endpoint"}),"\n",(0,i.jsx)(s.p,{children:"All ResourceType resources are listed in the response. The common fields for each ResourceType entry are 'endpoint', 'id', 'name', 'description', 'schema' and 'schemaExtensions'."}),"\n",(0,i.jsx)(n(),{parameters:void 0}),"\n",(0,i.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"Returns all ResourceType resources.",content:{"application/json":{schema:{properties:{totalResults:{description:"Number of ResourceType resources returned.",type:"integer",example:18},schemas:{description:"The ResourceTypes type represented by URN used for this response.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:api:messages:2.0:ListResponse"]},Resources:{type:"array",items:{type:"object",properties:{id:{description:"ID of the ResourceType.",type:"string",example:"User"},name:{description:"Name of the ResourceType.",type:"string",example:"User"},endpoint:{description:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",type:"string",example:"/Applications"},description:{description:"Description of the ResourceType.",type:"string",example:"User Account."},schema:{description:"The primary/base schema URI of the ResourceType.",type:"string",example:"urn:ietf:params:scim:schemas:sailpoint:1.0:User"},schemaExtensions:{description:"A list of URIs of the ResourceType's schema extensions.",type:"array",items:{example:[{schema:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",required:!0},{schema:"urn:ietf:params:scim:schemas:sailpoint:1.0:User",required:!0}]}},meta:{description:"Metadata of the ResourceType.",type:"object",properties:{location:{description:"The location of the ResourceType.",type:"string",example:"http://localhost:8080/iiq/scim/v2/ResourceTypes/User"},resourceType:{description:"The SCIM resource type.",type:"string",example:"ResourceType"}}},schemas:{description:"The schema for the ResourceType resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]}}}}}}},"application/scim+json":{schema:{properties:{totalResults:{description:"Number of Schema resources returned.",type:"integer",example:18},schemas:{description:"The Schema type represented by URN used for this response.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:api:messages:2.0:ListResponse"]},Resources:{type:"array",items:{type:"object",properties:{id:{description:"ID of the ResourceType.",type:"string",example:"User"},name:{description:"Name of the ResourceType.",type:"string",example:"User"},endpoint:{description:"The ResourceType's HTTP addressable endpoint relative to the Base URL.",type:"string",example:"/Applications"},description:{description:"Description of the ResourceType.",type:"string",example:"User Account."},schema:{description:"The primary/base schema URI of the ResourceType.",type:"string",example:"urn:ietf:params:scim:schemas:sailpoint:1.0:User"},schemaExtensions:{description:"A list of URIs of the ResourceType's schema extensions.",type:"array",items:{example:[{schema:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",required:!0},{schema:"urn:ietf:params:scim:schemas:sailpoint:1.0:User",required:!0}]}},meta:{description:"Metadata of the ResourceType.",type:"object",properties:{location:{description:"The location of the ResourceType.",type:"string",example:"http://localhost:8080/iiq/scim/v2/ResourceTypes/User"},resourceType:{description:"The SCIM resource type.",type:"string",example:"ResourceType"}}},schemas:{description:"The schema for the ResourceType resource.",type:"array",items:{type:"string"},example:["urn:ietf:params:scim:schemas:core:2.0:ResourceType"]}}}}}}}}}}})]})}function T(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}}}]);