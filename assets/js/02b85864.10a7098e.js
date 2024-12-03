"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["29046"],{73142:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>d,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"tools/sdk/go/go-sdk-create","title":"Creating resources with the Go SDK","description":"Learn how to create new resources the Golang SDK in this guide.","source":"@site/docs/tools/sdk/go/creating-resources.md","sourceDirName":"tools/sdk/go","slug":"/tools/sdk/go/create","permalink":"/docs/tools/sdk/go/create","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/creating-resources.md","tags":[{"inline":true,"label":"SDK","permalink":"/docs/tags/sdk"},{"inline":true,"label":"Software Development Kit","permalink":"/docs/tags/software-development-kit"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":2,"frontMatter":{"id":"go-sdk-create","title":"Creating resources with the Go SDK","pagination_label":"Go SDK","sidebar_label":"Create a resource","sidebar_position":2,"sidebar_class_name":"gosdk","keywords":["go","golang","sdk","create"],"description":"Learn how to create new resources the Golang SDK in this guide.","slug":"/tools/sdk/go/create","tags":["SDK","Software Development Kit"]},"sidebar":"openApiSidebar","previous":{"title":"Go SDK","permalink":"/docs/tools/sdk/go/getting-started"},"next":{"title":"Go SDK","permalink":"/docs/tools/sdk/go/update"}}'),r=o("85893"),s=o("50065");let i={id:"go-sdk-create",title:"Creating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Create a resource",sidebar_position:2,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","create"],description:"Learn how to create new resources the Golang SDK in this guide.",slug:"/tools/sdk/go/create",tags:["SDK","Software Development Kit"]},a=void 0,d={},l=[];function c(e){let n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'Here is an example create workgroup script from the beta APIs you can copy into your "sdk.go" instance to try it out:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",metastring:"showLineNumbers",children:'package main\n\nimport (\n "context"\n "encoding/json"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n "github.com/sailpoint-oss/golang-sdk/beta"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, _, err := apiClient.V3.PublicIdentitiesApi.GetPublicIdentities(ctx).Limit(1).Execute()\n\n identity := "IDENTITY"\n workgroupName := "DB Access Governance Group"\n workgroupDescription := "Description of the Governance Group"\n\n workgroup := beta.WorkgroupDto{\n  Name:        &workgroupName,\n  Description: &workgroupDescription,\n  Owner: &beta.OwnerDto{\n   Id:   resp[0].Id,\n   Name: resp[0].Name,\n   Type: &identity,\n  },\n }\n\n newWorkgroup, request, errMessage := apiClient.Beta.GovernanceGroupsApi.CreateWorkgroup(ctx).WorkgroupDto(workgroup).Execute()\n\n if errMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `GovernanceGroupsApi.CreateWorkgroup``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", request)\n }\n\n b, _ := json.MarshalIndent(newWorkgroup, "", "  ")\n fmt.Fprint(os.Stdout, string(b))\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The example uses the ",(0,r.jsx)(n.code,{children:"GetPublicIdentities"})," method from the ",(0,r.jsx)(n.code,{children:"PublicIdentitiesApi"})," to pull an identity needed to be the owner of the Workgroup."]}),"\n",(0,r.jsxs)(n.p,{children:["On lines 20-32 the new workgroup object is initialized and sent to the ",(0,r.jsx)(n.code,{children:"CreateWorkgroup"})," method on line 34."]}),"\n",(0,r.jsx)(n.p,{children:"To run the code, run this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"go run sdk.go\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The WorkGroup is assigned to the ",(0,r.jsx)(n.code,{children:"newWorkgroup"})," variable and the details are printed out:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "created": null,\n  "description": "Description of the Governance Group",\n  "modified": null,\n  "name": "DB Access Governance Group",\n  "owner": {\n    "displayName": "Brian Mendoza",\n    "emailAddress": null,\n    "id": "0003c25c365e492381d4e557b6159f9b",\n    "name": "Brian Mendoza",\n    "type": "IDENTITY"\n  }\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);