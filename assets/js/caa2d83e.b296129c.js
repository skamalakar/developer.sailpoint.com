"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["33717"],{60528:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>u,frontMatter:()=>r});var s=JSON.parse('{"id":"tools/ui-development-kit/udk-explore","title":"Getting Started","description":"Develop custom user interfaces.","source":"@site/docs/tools/ui-development-kit/getting-started.mdx","sourceDirName":"tools/ui-development-kit","slug":"/tools/ui-development-kit/getting-started","permalink":"/docs/tools/ui-development-kit/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/getting-started.mdx","tags":[{"inline":true,"label":"UI","permalink":"/docs/tags/ui"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":1,"frontMatter":{"id":"udk-explore","title":"Getting Started","pagination_label":"UDK","sidebar_label":"Getting Started","sidebar_position":1,"sidebar_class_name":"rudk","keywords":["UI","development","kit"],"description":"Develop custom user interfaces.","slug":"/tools/ui-development-kit/getting-started","tags":["UI"]},"sidebar":"openApiSidebar","previous":{"title":"UDK","permalink":"/docs/tools/ui-development-kit"},"next":{"title":"UDK","permalink":"/docs/tools/ui-development-kit/accounts-list"}}'),i=n("85893"),a=n("50065"),o=n("20398"),l=n("5525");let r={id:"udk-explore",title:"Getting Started",pagination_label:"UDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/getting-started",tags:["UI"]},d=void 0,c={},u=[{value:"Change your custom UI name",id:"change-your-custom-ui-name",level:2},{value:"Update the sidebar",id:"update-the-sidebar",level:2},{value:"Add route and new page",id:"add-route-and-new-page",level:2},{value:"Discuss",id:"discuss",level:2}];function p(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Read this guide to learn about the UI Development Kit and how to use it. Once you have read this guide, you will be able to do the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#change-your-custom-ui-name",children:"Change your custom user interface (UI) name"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#update-the-sidebar",children:"Update your sidebar to include new items"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#add-route-and-new-page",children:"Add route and new page"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"change-your-custom-ui-name",children:"Change your custom UI name"}),"\n",(0,i.jsx)(t.p,{children:"By default, the name of this project is 'UI Development Kit'. To update the name of your custom UI, you must update the code in two different places."}),"\n",(0,i.jsxs)(t.p,{children:["Update the Electron application window name. To do so, update the text in ",(0,i.jsx)(t.code,{children:"src/app.html"})," on line 7:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<title>UI Development Kit</title>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Update the home page. To do so, change the text in ",(0,i.jsx)(t.code,{children:"src/routes/+layout.svelte"})," on line 124:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<p class="text-xl lg:!block hidden">UI Development Kit</p>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"update-the-sidebar",children:"Update the sidebar"}),"\n",(0,i.jsxs)(t.p,{children:["The sidebar is located at ",(0,i.jsx)(t.code,{children:"src/lib/sidebar/navigation.ts"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To add a new sidebar item, add this code snippet to the file under the ",(0,i.jsx)(t.code,{children:"content"})," array:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import HomeSvg from '$lib/Components/SVGs/HomeSVG.svelte';\nimport ReportsSvg from '$lib/Components/SVGs/ReportsSVG.svelte';\n\nexport const navigation = [\n  {\n    name: 'Main',\n    content: [\n      ...\n      {\n        url: '/home/account-list',\n        name: 'Account List',\n        description:\n          'an example showcasing how to list accounts',\n        icon: ReportsSvg,\n      },\n    ],\n  },\n];\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can add a custom SVG icon for each sidebar item. Save and import your icon svg under ",(0,i.jsx)(t.code,{children:"lib/Components/SVGs/*"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"You now have a new sidebar link, but it points to a route that doesn't exist yet. If you click the link, you will encounter a 404 error."}),"\n",(0,i.jsxs)(t.p,{children:["To learn how to add a route and page for the new sidebar item, refer to ",(0,i.jsx)(t.a,{href:"#add-route-and-new-page",children:"Add route and new page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"add-route-and-new-page",children:"Add route and new page"}),"\n",(0,i.jsxs)(t.p,{children:["To create new routes, you can create new folders and pages for those routes under ",(0,i.jsx)(t.code,{children:"src/routes"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of how to create a new route:"}),"\n",(0,i.jsxs)(t.p,{children:["The route ",(0,i.jsx)(t.code,{children:"/home/example-pages"})," takes you to ",(0,i.jsx)(t.code,{children:"src/routes/home/example-pages/+page.svelte"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The route ",(0,i.jsx)(t.code,{children:"/home/example-pages/list-of-identities"})," takes you to ",(0,i.jsx)(t.code,{children:"src/routes/home/example-pages/list-of-identities/+page.svelte"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:".\n\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251C\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251C\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n"})}),"\n",(0,i.jsx)(t.p,{children:"With this information, you can create a new route for an accounts landing page and a page that lists accounts."}),"\n",(0,i.jsx)(t.p,{children:"The new project structure would look like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"\u251C\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 routes\n\u2502\xa0\xa0     \u251C\u2500\u2500 home\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251C\u2500\u2500 example-pages\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 +page.svelte\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 inactive-identities-with-access\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 list-of-identities\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 missing-cloud-life-cycle-state\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 reports.ts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u251C\u2500\u2500 source-aggregations\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 source-owner-configured\n\u2502\xa0\xa0     \u251C\u2500\u2500 accounts\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251C\u2500\u2500 +page.svelte # Root accounts page at route `accounts`\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 account-list\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u251C\u2500\u2500 +page.server.ts # Server side code for the account list page\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 +page.svelte # Account list page at route `accounts/account-list`\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can now update those files with this content so that they display correctly:"}),"\n","\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(l.default,{value:"accounts_page",label:"+page.svelte",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div class="flex justify-center flex-col align-middle gap-2">\n	<div class="card p-4">\n		<p class="text-2xl text-center">Accounts Homepage</p>\n	</div>\n</div>\n\n'})})}),(0,i.jsx)(l.default,{value:"accounts_list_server",label:"accounts-list/+page.server.ts",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<div class="flex justify-center flex-col align-middle gap-2">\n	<div class="card p-4">\n		<p class="text-2xl text-center">List of all Accounts</p>\n	</div>\n</div>\n'})})})]}),"\n",(0,i.jsx)(t.p,{children:"To see the new sidebar item, as well as its new route and page, restart the project."}),"\n",(0,i.jsx)(t.p,{children:"To restart the project, run this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you have run the command, the new sidebar item, as well as its new route and page, will display."}),"\n",(0,i.jsxs)(t.p,{children:["Now that you have the new sidebar item, its new route, and its new page, you can implement the page. To continue following this example and learn how to implement an accounts list page, refer to ",(0,i.jsx)(t.a,{href:"/docs/tools/ui-development-kit/accounts-list",children:"Accounts List"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsx)(t.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,i.jsx)(t.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},20398:function(e,t,n){n.d(t,{Z:()=>m});var s=n("85893"),i=n("67294"),a=n("67026"),o=n("69599"),l=n("33057"),r=n("7227");let d="tabList__CuJ",c="tabItem_LNqP";function u(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:r}=e,d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{let t=e.currentTarget,n=r[d.indexOf(t)].value;n!==i&&(u(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{let n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{let n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1]}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:r.map(e=>{let{value:t,label:n,attributes:o}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>d.push(e),onKeyDown:h,onClick:p,...o,className:(0,a.Z)("tabs__item",c,o?.className,{"tabs__item--active":i===t}),children:n??t},t)})})}function p(e){let{lazy:t,children:n,selectedValue:o}=e,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){let e=l.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o}))})}function h(e){let t=(0,l.Y)(e);return(0,s.jsxs)("div",{className:(0,a.Z)("tabs-container",d),children:[(0,s.jsx)(u,{...t,...e}),(0,s.jsx)(p,{...t,...e})]})}function m(e){let t=(0,r.default)();return(0,s.jsx)(h,{...e,children:(0,l.h)(e.children)},String(t))}}}]);