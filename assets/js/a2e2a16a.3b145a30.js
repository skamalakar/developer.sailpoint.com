"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["87132"],{36618:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>f,default:()=>x,assets:()=>j,toc:()=>b,frontMatter:()=>h});var a=JSON.parse('{"id":"api/nerm/v1/get-role","title":"get-role","description":"<Heading","source":"@site/docs/api/nerm/v1/get-role.api.mdx","sourceDirName":"api/nerm/v1","slug":"/api/nerm/v1/get-role","permalink":"/docs/api/nerm/v1/get-role","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to \'Find role by id\' (get-role)","tags":[],"version":"current","frontMatter":{"id":"get-role","sidebar_label":"Find role by id","hide_title":true,"hide_table_of_contents":true,"api":"eJydVm1v2zYQ/isEv2wD/JbE2TpjG5Bh6eCiTYok25fCCE7SyWYjkSpfXAuC/vvuSDux4SBt5g+2RN4dn7vnuaM7aRq04JXR80LO5BL9jalQDmSBLreq4R1an+vSiNJYAcI1mKtS5SI4tMImaw9LJ2efJL86uRjIBizU6NHycic1vVAYVZCt4oAN+NXxKX8JUwq/QmGyz5h74Y2w6K3CNQ5EaArw9EsoCqwoNvlb/BKURYLubcCBdPkKa5CzTvq24RMdeeslWRL4GjythBBR4AbqpmKTk9Ppz8Wb7GwI+emvw+nk5Hz45uR8OiwQptOzKfxyVoLs+wWf5hqjHWVIB5xOJvxzmMHlhqrjsRA7U04BxBoqxWtfAjpPh+dGe9Se/aFpKpVHBsafHQfpjrNI5SDHxjJfXiUIsfjftKJ0v6MeFqG41lWbKtkPZHjer1b6PeolsTc7O6VX2Oy/HkbZr3Ish7HuPoKm+EkSxwc8udxuXdh6aU1o3J49WAstq8lj7V6OA8V9dL+PR/Y9hfPKx60o9j5+BnL6HKN/QiFuEnFiKIKGrIqk5oajexy9hk6j8bqMDfEyZWitsfHhMYm5TiJ6d3t9JVyrPWxG4mOFQBqj+PmDaE2w2x0BuhDetgKWoPRI7qe8DfSOwfWD/4Hkjvrzt2T+hyhBVSR3Lghx73GcupQpi67uwJfq44mfLHgOlIP+wYsMRVaBfjgk5l/GGMt4mcL0i0TS+XMkzan+VkMlbtGuaSpFH6KLhkewmvAZTdStqCoMFjc5Rk/3KvK+s1CHyC5Ejc7BEkVaz0icccIl+wO5G0uMOUNjc8VWXwmV+GoNqbnfSZT3zHZQMwSeojM5jmN33Kmip0UXa5DmbrAV7a+8b9xsPO4oUdD+itqgH2kSI51sWsQRiXkMjSLnNVjFEk8t9WieEishVDwyIK8xN0fj+y6aC+4yAc6ppd4qIzhPWVlOY8H48mCVbyPADMGivQicx6fF/vYtFz7h2Dd65IGTktuJz+/JiFbSw9vdfLszD6gJBn3/HlskPsaWUHSrcUQuV0rhZDQZTeSTDK8ubz6Ii4/z41yJwt2mICGzjOlCjPlCnhPnsQdrU6iyFVxVExzfCoSAdoXSqV9RrxVRXBPXLEaSH9KtwaC2V+aH+V3E2hjna9B7O28VHcDMi6wVcYYfQOyelP3t6zuV1OPGj5uKRgb3b9ROt9XY7mofyBkdRTStCA8vd11GI+gfW/U9L9OgtMzs4klKkedCOX4m6ZZQOXwB64832zv9J/H6/wPPJrK7MXQbBV4FfqPHB2zTfxKaLZQQXV2kHwabNi5yHhN7LkfjgeX62JF/XzJR/wGcsjOs","sidebar_class_name":"get api-method","info_path":"docs/api/nerm/v1/nerm-api","custom_edit_url":"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to \'Find role by id\' (get-role)"},"sidebar":"nermSideBar","previous":{"title":"Create a new role","permalink":"/docs/api/nerm/v1/post-role"},"next":{"title":"Update an existing role","permalink":"/docs/api/nerm/v1/patch-role"}}'),r=i("85893"),s=i("50065"),o=i("47936"),n=i("44039"),l=i.n(n),p=i("40218"),d=i.n(p),c=i("69141"),m=i.n(c);i("61142"),i("5525");var u=i("34403");let h={id:"get-role",sidebar_label:"Find role by id",hide_title:!0,hide_table_of_contents:!0,api:"eJydVm1v2zYQ/isEv2wD/JbE2TpjG5Bh6eCiTYok25fCCE7SyWYjkSpfXAuC/vvuSDux4SBt5g+2RN4dn7vnuaM7aRq04JXR80LO5BL9jalQDmSBLreq4R1an+vSiNJYAcI1mKtS5SI4tMImaw9LJ2efJL86uRjIBizU6NHycic1vVAYVZCt4oAN+NXxKX8JUwq/QmGyz5h74Y2w6K3CNQ5EaArw9EsoCqwoNvlb/BKURYLubcCBdPkKa5CzTvq24RMdeeslWRL4GjythBBR4AbqpmKTk9Ppz8Wb7GwI+emvw+nk5Hz45uR8OiwQptOzKfxyVoLs+wWf5hqjHWVIB5xOJvxzmMHlhqrjsRA7U04BxBoqxWtfAjpPh+dGe9Se/aFpKpVHBsafHQfpjrNI5SDHxjJfXiUIsfjftKJ0v6MeFqG41lWbKtkPZHjer1b6PeolsTc7O6VX2Oy/HkbZr3Ish7HuPoKm+EkSxwc8udxuXdh6aU1o3J49WAstq8lj7V6OA8V9dL+PR/Y9hfPKx60o9j5+BnL6HKN/QiFuEnFiKIKGrIqk5oajexy9hk6j8bqMDfEyZWitsfHhMYm5TiJ6d3t9JVyrPWxG4mOFQBqj+PmDaE2w2x0BuhDetgKWoPRI7qe8DfSOwfWD/4Hkjvrzt2T+hyhBVSR3Lghx73GcupQpi67uwJfq44mfLHgOlIP+wYsMRVaBfjgk5l/GGMt4mcL0i0TS+XMkzan+VkMlbtGuaSpFH6KLhkewmvAZTdStqCoMFjc5Rk/3KvK+s1CHyC5Ejc7BEkVaz0icccIl+wO5G0uMOUNjc8VWXwmV+GoNqbnfSZT3zHZQMwSeojM5jmN33Kmip0UXa5DmbrAV7a+8b9xsPO4oUdD+itqgH2kSI51sWsQRiXkMjSLnNVjFEk8t9WieEishVDwyIK8xN0fj+y6aC+4yAc6ppd4qIzhPWVlOY8H48mCVbyPADMGivQicx6fF/vYtFz7h2Dd65IGTktuJz+/JiFbSw9vdfLszD6gJBn3/HlskPsaWUHSrcUQuV0rhZDQZTeSTDK8ubz6Ii4/z41yJwt2mICGzjOlCjPlCnhPnsQdrU6iyFVxVExzfCoSAdoXSqV9RrxVRXBPXLEaSH9KtwaC2V+aH+V3E2hjna9B7O28VHcDMi6wVcYYfQOyelP3t6zuV1OPGj5uKRgb3b9ROt9XY7mofyBkdRTStCA8vd11GI+gfW/U9L9OgtMzs4klKkedCOX4m6ZZQOXwB64832zv9J/H6/wPPJrK7MXQbBV4FfqPHB2zTfxKaLZQQXV2kHwabNi5yHhN7LkfjgeX62JF/XzJR/wGcsjOs",sidebar_class_name:"get api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role by id' (get-role)"},f=void 0,j={},b=[];function g(e){let t={p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Find role by id"}),"\n",(0,r.jsx)(o.Z,{method:"get",path:"/roles/{id}",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Info for a specific user role"}),"\n",(0,r.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"id",in:"path",description:"ID of the object to retrieve, update, or delete",required:!0,schema:{type:"string",format:"uuid",example:"1246d8b3-ac29-4015-8154-dea4434a73fa"}}]}),"\n",(0,r.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{role:{type:"object",properties:{id:{type:"string",format:"uuid",readOnly:!0},uid:{type:"string",minLength:32,maxLength:32,readOnly:!0,example:"sponsors_role"},name:{type:"string",example:"Sponsors"},groups:{type:"array",items:{type:"string",example:"ad_group_name"}}},title:"Role"}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}},title:"InvalidJson"},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}},title:"ValidationErrors"}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}}})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);