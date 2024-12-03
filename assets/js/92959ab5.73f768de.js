"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["88863"],{64853:function(e,s,i){i.r(s),i.d(s,{metadata:()=>r,contentTitle:()=>t,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"tools/cli/cli-search","title":"Search","description":"Learn how to use the CLI to search your ISC tenant in this guide.","source":"@site/docs/tools/cli/search.md","sourceDirName":"tools/cli","slug":"/tools/cli/search","permalink":"/docs/tools/cli/search","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/search.md","tags":[{"inline":true,"label":"CLI","permalink":"/docs/tags/cli"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":3,"frontMatter":{"id":"cli-search","title":"Search","pagination_label":"CLI-Search","sidebar_label":"Search","sidebar_position":3,"sidebar_class_name":"cli","keywords":["cli","search"],"description":"Learn how to use the CLI to search your ISC tenant in this guide.","slug":"/tools/cli/search","tags":["CLI"]},"sidebar":"openApiSidebar","previous":{"title":"CLI-Sanitize","permalink":"/docs/tools/cli/sanitize"},"next":{"title":"CLI-Set","permalink":"/docs/tools/cli/set"}}'),n=i("85893"),l=i("50065");let a={id:"cli-search",title:"Search",pagination_label:"CLI-Search",sidebar_label:"Search",sidebar_position:3,sidebar_class_name:"cli",keywords:["cli","search"],description:"Learn how to use the CLI to search your ISC tenant in this guide.",slug:"/tools/cli/search",tags:["CLI"]},t=void 0,c={},d=[{value:"Query",id:"query",level:2},{value:"Command",id:"command",level:3},{value:"Flags",id:"flags",level:3},{value:"Indices",id:"indices",level:4},{value:"Sort",id:"sort",level:4},{value:"Folder Path",id:"folder-path",level:4},{value:"Template",id:"template",level:2},{value:"Command",id:"command-1",level:3},{value:"Flags",id:"flags-1",level:3},{value:"Folder Path",id:"folder-path-1",level:4}];function o(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Learn how to use the CLI to search your ISC tenant in this guide."}),"\n",(0,n.jsxs)(s.p,{children:["In Identity Security Cloud (ISC), you can search across all the sources connected to your tenant and return virtually any information you have access to. The ",(0,n.jsx)(s.code,{children:"search"})," command allows you to access ISC search functionality within the CLI. For more information about search in ISC, refer to ",(0,n.jsx)(s.a,{href:"../../api/v3/search",children:"Search"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["In Identity Security Cloud, you can search all the sources connected to your tenant and return virtually any information you have access to. To learn more about search in Identity Security Cloud, refer to ",(0,n.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/help/search/index.html",children:"Search"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"search"})," command makes it easy to search in Identity Security Cloud with the SailPoint CLI. Read this guide to learn how to use the ",(0,n.jsx)(s.code,{children:"query"})," and ",(0,n.jsx)(s.code,{children:"template"})," commands to search Identity Security Cloud with the CLI."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#query",children:"Query"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#command",children:"Command"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#flags",children:"Flags"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#indices",children:"Indices"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#sort",children:"Sort"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#folder-path",children:"Folder Path"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#template",children:"Template"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#command-1",children:"Command"})}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#flags-1",children:"Flags"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#folder-path-1",children:"Folder Path"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"query",children:"Query"}),"\n",(0,n.jsxs)(s.p,{children:["Search queries in Identity Security Cloud are flexible - they can be very broad or very narrow, and you can further narrow your results by using Identity Security Cloud's specific syntax to structure your queries. To learn about structuring search queries, refer to ",(0,n.jsx)(s.a,{href:"https://documentation.sailpoint.com/saas/help/search/building-query.html",children:"Building a Search Query"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"query"})," command allows you to search Identity Security Cloud for a query you specify."]}),"\n",(0,n.jsxs)(s.p,{children:["To use the ",(0,n.jsx)(s.code,{children:"query"})," command to search Identity Security Cloud, you must understand how to format your search queries."]}),"\n",(0,n.jsxs)(s.p,{children:['The basic format of a query is "field',":term",'", so an example ',(0,n.jsx)(s.code,{children:"query"})," command would like this:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The CLI will use the ",(0,n.jsx)(s.a,{href:"https://developer.sailpoint.com/docs/api/v3/search-post",children:"V3 Search endpoint"}),' to search for all identities starting with names starting with the letter "a". The CLI will then generate a JSON file containing the search results. This JSON file will be located in a folder titled "search_results", within the current working directory, unless a folder path is specified.']}),"\n",(0,n.jsx)(s.h3,{id:"command",children:"Command"}),"\n",(0,n.jsxs)(s.p,{children:["This example can help you understand the ",(0,n.jsx)(s.code,{children:"query"})," command structure:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail search query <search query string> --indices <index to search>\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You must start your search query with ",(0,n.jsx)(s.code,{children:"sail search query"}),", and you must specify a query string to search for and a set of indices to search."]}),"\n",(0,n.jsx)(s.h3,{id:"flags",children:"Flags"}),"\n",(0,n.jsxs)(s.p,{children:["You can append a number of flags to the ",(0,n.jsx)(s.code,{children:"query"})," command to refine it:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The first flag, ",(0,n.jsx)(s.code,{children:"indices"}),", is required. It specifies the indices to run the search operation on."]}),"\n",(0,n.jsxs)(s.li,{children:["The second possible flag, ",(0,n.jsx)(s.code,{children:"sort"}),", allows you to specify the sort strings to use for the search query, as well as the sorting arrangement for the results."]}),"\n",(0,n.jsxs)(s.li,{children:["The third possible flag, ",(0,n.jsx)(s.code,{children:"folderPath"}),", allows you to specify the folder path where you want to save the search query result files."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"indices",children:"Indices"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"indices"})," flag to specify the indices you want to search. The ",(0,n.jsx)(s.code,{children:"indices"})," flag is required to use the ",(0,n.jsx)(s.code,{children:"query"})," command."]}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"query"})," command with specified ",(0,n.jsx)(s.code,{children:"indices"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can search multiple indices."}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"query"})," command with multiple specified ",(0,n.jsx)(s.code,{children:"indices"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities --indices accessprofiles\n'})}),"\n",(0,n.jsx)(s.h4,{id:"sort",children:"Sort"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"sort"})," flag to specify the sort strings you want to use to determine the sorting arrangement of your search query results. When you specify a string to sort by, like ",(0,n.jsx)(s.code,{children:"name"}),", the CLI sorts results by ",(0,n.jsx)(s.code,{children:"name"}),' in ascending order. If you add a "-" before the sort string, like ',(0,n.jsx)(s.code,{children:"-name"}),", the CLI will sort the results in descending order instead."]}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"query"})," command that sorts the results in descending order based on the identities' ",(0,n.jsx)(s.code,{children:"created"})," dates:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities --sort "-created"\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can specify multiple sort strings for your search queries."}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"query"})," command that sorts the results in ascending order based on ",(0,n.jsx)(s.code,{children:"name"}),", as well as in descending order based on the identities' ",(0,n.jsx)(s.code,{children:"created"})," dates:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities --sort name --sort "-created"\n'})}),"\n",(0,n.jsx)(s.h4,{id:"folder-path",children:"Folder Path"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"folderPath"})," flag to specify the folder path to save the search results in. If you don't specify a ",(0,n.jsx)(s.code,{children:"folderPath"}),', the results will save to a folder called "search_results", located within your current working directory.']}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"query"})," command that specifies a ",(0,n.jsx)(s.code,{children:"folderPath"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:'sail search query "name:a*" --indices identities --folderPath ./local/folder/path\n'})}),"\n",(0,n.jsx)(s.h2,{id:"template",children:"Template"}),"\n",(0,n.jsx)(s.p,{children:"For more detailed search queries, you can provide a predefined template instead of constructing the whole query every time. This allows you to run very detailed search queries quickly and easily."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"template"})," command allows you to use predefined templates to search Identity Security Cloud."]}),"\n",(0,n.jsx)(s.h3,{id:"command-1",children:"Command"}),"\n",(0,n.jsxs)(s.p,{children:["This example shows the essential ",(0,n.jsx)(s.code,{children:"template"})," command structure:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail search template all-provisioning-events-90-days\n"})}),"\n",(0,n.jsx)(s.p,{children:"The specified template file will give the CLI all the information it needs to perform its search in Identity Security Cloud."}),"\n",(0,n.jsx)(s.h3,{id:"flags-1",children:"Flags"}),"\n",(0,n.jsxs)(s.p,{children:["You can append one flag to the ",(0,n.jsx)(s.code,{children:"template"})," command to refine it:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The flag, ",(0,n.jsx)(s.code,{children:"folderPath"}),", allows you to specify the folder path where you want to save the search query result files."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"folder-path-1",children:"Folder Path"}),"\n",(0,n.jsxs)(s.p,{children:["Use the ",(0,n.jsx)(s.code,{children:"folderPath"})," flag to specify the folder path to save the search results in. If you don't specify a ",(0,n.jsx)(s.code,{children:"folderPath"}),', the results will save to a folder called "search_results", located within your current working directory.']}),"\n",(0,n.jsxs)(s.p,{children:["Here is an example of a ",(0,n.jsx)(s.code,{children:"template"})," command that specifies a ",(0,n.jsx)(s.code,{children:"folderPath"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sail search template all-provisioning-events-90-days --folderPath ./local/folder/path\n"})})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);