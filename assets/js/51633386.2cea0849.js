"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["2390"],{59913:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>c,assets:()=>E,toc:()=>h,frontMatter:()=>T});var a=JSON.parse('{"id":"reporting/access-intelligence-center/access-intelligence-center-er-diagram","title":"Access Intelligence Center ER Diagram","description":"Access Intelligence Center ER Diagram","source":"@site/docs/reporting/access-intelligence-center/identity-er-diagram.md","sourceDirName":"reporting/access-intelligence-center","slug":"/reporting/aic-er-diagram","permalink":"/docs/reporting/aic-er-diagram","draft":false,"unlisted":false,"editUrl":"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/access-intelligence-center/identity-er-diagram.md","tags":[{"inline":true,"label":"AccessIntelligenceCenter","permalink":"/docs/tags/access-intelligence-center"},{"inline":true,"label":"AIC","permalink":"/docs/tags/aic"}],"version":"current","lastUpdatedBy":"GitHub Action Bot","lastUpdatedAt":1733246545000,"sidebarPosition":1,"frontMatter":{"id":"access-intelligence-center-er-diagram","title":"Access Intelligence Center ER Diagram","pagination_label":"Access Intelligence Center ER Diagram","sidebar_label":"Entity Relationship Diagram","sidebar_position":1,"sidebar_class_name":"AccessIntelligenceCenter","keywords":["data listing","data share","secure data sharing"],"description":"Access Intelligence Center ER Diagram","slug":"/reporting/aic-er-diagram","tags":["AccessIntelligenceCenter","AIC"],"hide_table_of_contents":true},"sidebar":"openApiSidebar","previous":{"title":"Access Intelligence Center","permalink":"/docs/reporting/access-intelligence-center"},"next":{"title":"Access Intelligence Center Audit ER Diagram","permalink":"/docs/reporting/aic-audit-er-diagram"}}'),n=i("85893"),r=i("50065"),I=i("23762");let T={id:"access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",pagination_label:"Access Intelligence Center ER Diagram",sidebar_label:"Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center ER Diagram",slug:"/reporting/aic-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},s="Access Intelligence Center ER Diagram",E={},h=[];function o(e){let t={h1:"h1",header:"header",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"access-intelligence-center-er-diagram",children:"Access Intelligence Center ER Diagram"})}),"\n",(0,n.jsx)(I.Z,{diagram:'erDiagram\nIDENTITY_ATRIBUTE {\nvarchar IDENTITY_ID "This contains the unique identifier for the identity"\nvarchar City "Identity\u2019s City"\nvarchar Cloud_Lifecycle_State "Identity\u2019s Cloud Lifecycle State"\nvarchar Company "Identity Company"\nvarchar CompanyName "Identity CompanyName"\nvarchar Cost_Center "Identity Cost Center"\nvarchar Country "Identity Country"\nvarchar Department "Identity Department"\nvarchar Job "Identity Job"\nvarchar Location "Identity Location"\nvarchar Postal_Code "Identity Postal Code"\nvarchar Region "Identity Region"\nvarchar State "Identity State"\nvarchar Title "Identity Title"\n}\nIDENTITY_ROLES_FULL {\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\nvarchar ROLE_ID "This is the unique identifier for the Role"\nvarchar ROLE_NAME "This is the human-readable name of the Role"\nvarchar ROLE_DISPLAY_NAME "This is the user friendly label for the Role"\n}\nIDENTITY {\nvarchar ID PK "This is the primary key"\nvarchar TENANT_ID "This is the unique identifier of customer organization"\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\ntimestamp IDENTITY_CREATED "This is the Identity created date"\ntimestamp IDENTITY_UPDATED "This is the Identity modified date"\nvarchar NAME "This is the human-readable name of the Identity"\nvarchar DISPLAY_NAME "This is the user friendly label for the Identity; usually First Name Last Name"\nvarchar MANAGERS_NAME "This is the managers name for the Identity"\nvarchar EMAIL "This is the Identity email"\nvarchar STATUS "This is the Identity status"\nvarchar JOB_TITLE "This is the Identity job title"\nvarchar LOCATION "This is the Identity location"\nvarchar LOCATION_CODE "This is the Identity location code"\nvarchar DEPARTMENT "This is the Identity department"\nvarchar IDENTITY_CREATED_MONTH_SORT "This is the field to sort charts based on the month an Identity was created"\nnumber IDENTITY_CREATED_WEEK_SORT "This is the field to sort charts based on the week an Identity was created"\ntimestamp SYNC_DATE "This is the date the data was synced to the table"\n}\nACCESS_PROFILES_FULL {\nvarchar IDENTITY_ID\xa0"This is the unique identifier for the Identity"\nvarchar ACCESS_PROFILE_ID "This is the unique identifier for Access Profile"\nvarchar ACCESS_PROFILE_NAME "This is the human-readable name of the Access Profile"\nvarchar ACCESS_PROFILE_DISPLAY_NAME "This is the user friendly label for the Access Profile"\nvarchar ACCESS_PROFILE_DESCRIPTION "This is a short description for the Access Profile"\n}\nIDENTITY_ACCOUNTS_FULL {\nvarchar IDENTITY_ID\xa0"This is the unique identifier for the Identity"\nvarchar ACCOUNT_ID "This is the unique identifier for the Account"\nvarchar NATIVE_IDENTITY "This is the name of the native Identity"\nvarchar ACCOUNT_DISPLAY_NAME\xa0"This is the user friendly label for the Account"\nvarchar ACCOUNT_SOURCE_ID "This is the unique identifier for the Account source"\nvarchar ACCOUNT_SOURCE__DISPLAY_NAME "This is the user friendly label for the Account source"\nvarchar ACCOUNT_SOURCE_TYPE "This is the type of the Account source"\n}\nIDENTITY_APPS_FULL {\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\nvarchar APP_ID\xa0"This is the unique identifier for the App"\nvarchar APP_DISPLAY_NAME\xa0"This is the user friendly label for the App"\n}\nIDENTITY_ENTITLEMENTS_FULL {\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\nvarchar ENTITLEMENT_ID\xa0"This is the unique identifier for the Entitlement"\nvarchar ENTITLEMENT_DISPLAY_NAME\xa0"This is the user friendly label for the Entitlement"\ntimestamp ENTITLEMENT_CREATED_DATE\xa0"This is the Entitlement created date"\ntimestamp ENTITLEMENT_UPDATED_DATE "This is the Entitlement modified date"\nvarchar ENTITLEMENT_ATTRIBUTE\xa0"This is the attribute associated with the Entitlement"\nvarchar ENTITLEMENT_VALUE\xa0"This is the actual value of the attribute associated with the Entitlement"\nvarchar ENTITLEMENT_SOURCE_DISPLAY_NAME\xa0"This is the user friendly label for the Entitlement source"\n}   \nACCESS_REQUEST_DURATION {\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\nvarchar DURATION_HOURS "This is the duration in hours from the create date to the end date of an Identity Access Request"\n} \nCERTIFICATION_STATS {\nvarchar CERTIFICATION_ID "This is the unique identifier for the Certification"\ntimestamp DUE_DATE "This is the date a Certification is due"\ntimestamp FINISHED_DATE "This is the date a Certification was completed"\nnumber DAYS_LATE "This is the number of days after the due date that a Certification was completed"\nnumber HOURS_LATE "This is the number of hours after the due date that a Certification was completed"\nvarchar CERTIFIER_DISPLAY_NAME "This is the user friendly label for the Certifier"\n}   \nCERTIFICATION_ITEM {\nvarchar CERTIFICATION_ID "This is the unique identifier for the Certification"\nvarchar REVIEWER_ID "This is the Identity ID of the Certifier"\nvarchar IDENTITY_ID "This is the unique identifier for the Identity"\nvarchar ID "This is the unique identifier for the Certification Item"\ntimestamp CREATED_DATE "This is the date a Certification Item was created"\ntimestamp UPDATED_DATE "This is the date a Certification Item was last updated"\ntimestamp DELETED_DATE "This is the date a Certification Item was deleted"\nvarchar APPLICATION_ID "This is the unique identifier for the Application"\nvarchar REVIEWED_ID "This is the unique identifier of the reviewed Identity"\nvarchar REVIEWED_TYPE "This is the reviewed element of the Certification"\nvarchar TYPE "This contains the type of the Certification Item, if any"\nvarchar SUB_TYPE "This contains the sub type of the Certification Item, if any"\ntimestamp COMPLETED_DATE "This is the date a Certification Item is completed"\ntimestamp DECISION_DATE "This is the date a Certification Item reaches a decision"\nvarchar APPROVED "This is the date a Certification Item is approved"\nvarchar CERTIFICATION_ITEM_STATUS "This is the status of the Certification Item"\nvarchar DECISION "This is the decision made on the Certification Item"\nvarchar BULK "This is the bulk nature of the Certification Item"\nvarchar REMEDIATED "This tells if the Certification Item was remediated or not"\nvarchar PRIVILEGED "This tells if the Certification Item was privileged or not"\nvarchar REMEDIATION_ACTION "This is the remediated action on the Certification Item"\nvarchar MITIGATION_EXPIRATION "This shows if the mitigation for the Certification Item has expired or not"\nvarchar INSTANCE "This is the instance of the Certifier Item"\nvarchar ACCOUNT_ONLY "This tells if the Cerification Item is account_only or not"\nvarchar NEW_ACCESS "This tells if the Cerification Item has new_access properties"\nvarchar POLICY_NAME "This is the name of the policy associated with the Cerification Item"\nvarchar CONSTRAINT_NAME "This shows constraints associated with the Cerification Item"\ntimestamp SYNC_DATE "This is the date the data was synced to the table"\n} \nCERTIFICATION_IDENTITY_FULL {\nvarchar CERT_ID "This is the unique identifier for the Certification"\nvarchar NAME "This is the human-readable name of the Certification"\nvarchar ORIGINAL_CERTIFICATION_ID "This is the original unique identifier of the Certification"\nvarchar CERTIFICATION_CAMPAIGN_ID "This is the unique identifier of a Certification campaign"\nvarchar CERTIFICATION_CAMPAIGN_STATUS "This is the status of a Certification campaign"\nvarchar CERTIFICATION_CAMPAIGN_DEADLINE "This is the deadline of a Certification ampaign"\nvarchar CERTIFICATION_CAMPAIGN_TYPE "This is the type of a Certification campaign"\nvarchar SIGNER_ID "This is the unique Identity ID of the signer of a Certification"\nvarchar MANAGER_ID "This is the unique Identity ID for the manager of a Certification"\nvarchar CERTIFIER_ID "This is the unique Identity ID for the certifier of a Certification"\nboolean REJECTED "This is a boolean value for the rejection status of a Certification"\n} \nIDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL {\nvarchar IDENTITY_REQUEST_ITEM_APPROVER_ID "This is the unique Identity ID of the Identity Request approver"\nvarchar IDENTITY_REQUEST_ITEM_REQUEST_ID "This is the unique Identity Item Request id"\nvarchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "This is the unique Identity ID of the Identity Request requester"\nvarchar IDENTITY_ID "This is the unique identifier for the target Identity"\nvarchar IDENTITY_REQUEST_ITEM_ID "This is the unique identifier for the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_INSTANCE "This is the instance name of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_NATIVE_IDENTITY "This is the native identity name for the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_DISPLAY_NAME "The human-readable name for the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_NAME "This is the name for the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_VALUE "This is the value of the identity request item"\nvarchar IDENTITY_REQUEST_ITEM_ANNOTATION "This is the annotation of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_OPERATION "This is the operation of the Identity Request Item"\ntimestamp IDENTITY_REQUEST_ITEM_START_DATE "This is the date the Identity Request Item started"\ntimestamp IDENTITY_REQUEST_ITEM_END_DATE "This is the date of the identity request item ended"\nvarchar IDENTITY_REQUEST_ITEM_APPROVED "This is the approved of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_REJECTED "This is the rejected of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_PROVISIONING_STATE "This is the state of the Identity Request Item provisioning"\nvarchar IDENTITY_REQUEST_ITEM_COMPILATION_STATUS "This is the status of the Identity Request Item compilation"\nvarchar IDENTITY_REQUEST_ITEM_EXPANSION_CAUSE "This is the cause of the Identity Request Item expansion"\nnumber IDENTITY_REQUEST_ITEM_RETRIES "This is the retries of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_PROVISIONING_ENGINE "This is the engine of the Identity Request Item provisioning"\ntimestamp IDENTITY_REQUEST_ITEM_CREATED_DATE "This is the date of the Identity Request Item created"\nvarchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_ID "This is the id of the Identity Request Item access request"\nvarchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_TYPE "This is the type of the Identity Request Item access request"\ntimestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_CREATED_DATE "This is the date of the Identity Request Item access request created"\ntimestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_END_DATE "This is the date of the Identity Request Item access request end"\nvarchar IDENTITY_REQUEST_ITEM_EXECUTION_STATUS "This is the status of the eIdentity Request Item execution"\nvarchar IDENTITY_REQUEST_ITEM_COMPLETION_STATUS "This is the status of the Identity Request Item completion"\nvarchar IDENTITY_REQUEST_ITEM_PRIORITY "This is the priority of the Identity Request Item"\nvarchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_REQUESTER "This is the requester of the Identity Request Item access request"\nvarchar IDENTITY_REQUEST_ITEM_APP_ID "This is the id of the Identity Request Item app"\nvarchar IDENTITY_REQUEST_ITEM_APP_DISPLAY_NAME "This is the name of the Identity Request Item app display"\ntimestamp IDENTITY_REQUEST_ITEM_REQUESTER_CREATED_DATE "This is the date of the Identity Request Item requester created"\ntimestamp IDENTITY_REQUEST_ITEM_REQUESTER_UPDATE_DATE "This is the date of the Identity Request Item requester update"\nvarchar IDENTITY_REQUEST_ITEM_TARGET_DISPLAY_NAME "This is the name of the Identity Request Item target display"\ntimestamp IDENTITY_REQUEST_ITEM_TARGET_CREATED_DATE "This is the date of the Identity Request Item target created"\ntimestamp IDENTITY_REQUEST_ITEM_TARGET_UPDATE_DATE "This is the date of the Identity Request Item target update"\ntimestamp IDENTITY_REQUEST_ITEM_APPROVER_CREATED_DATE "This is the date of the Identity Request Item approver created"\ntimestamp IDENTITY_REQUEST_ITEM_APPROVER_UPDATED_DATE "This is the date of the Identity Request Item approver updated"\nvarchar IDENTITY_REQUEST_ITEM_APPROVER_DISPLAY_NAME "This is the name of the Identity Request Item approver display"\nvarchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_ID "This is the id of the Identity Request Item entitlement"\nvarchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_VALUE "This is the value of the Identity Request Item entitlement"\nvarchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_DISPLAY_NAME "This is the name of the Identity Request Item entitlement display"\nvarchar IDENTITY_REQUEST_ITEM_ROLE_ID "This is the id of the Identity Request Item role"\nvarchar IDENTITY_REQUEST_ITEM_ROLE_NAME "This is the name of the Identity Request Item role"\nvarchar IDENTITY_REQUEST_ITEM_ROLE_DISPLAY_NAME "This is the name of the Identity Request Item role display"\n} \nIDENTITY_ITEM_APPROVER {\nvarchar IDENTITY_REQUEST_ITEM_APPROVER_ID "This is the unique Identity ID of the Identity Request Approver"\ntimestamp APPROVER_IDENTITY_CREATED "This is the date that the Identity Item Approver was created"\ntimestamp APPROVER_IDENTITY_UPDATED "This is the date that the Identity Item Approver was updated"\nvarchar APPROVER_NAME "This is the name for the Identity Item Approver"\nvarchar APPROVER_DISPLAY_NAME "The human-readable name for the Identity Item Approver"\nvarchar APPROVER_MANAGERS_NAME "The managers name for the Identity Item Approver"\nvarchar APPROVER_EMAIL "The email for the Identity Item Approver"\nvarchar APPROVER_STATUS "The status of the Identity Item Approver"\nvarchar APPROVER_JOB_TITLE "The job title for the Identity Item Approver"\nvarchar APPROVER_LOCATION "The location of the Identity Item Approver" \nvarchar APPROVER_LOCATION_CODE "The location code of the Identity Item Approver"\nvarchar APPROVER_DEPARTMENT "The department of the Identity Item Approver"   \ntimestamp APPROVER_SYNC_DATE "This is the date the data was synced to the table"\n}\nIDENTITY_ITEM_REQUESTER {\nvarchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "This is the unique Identity ID of the Identity Item Requester"\ntimestamp REQUESTER_IDENTITY_CREATED "This is the date that the Identity Item Requester was created"\ntimestamp REQUESTER_IDENTITY_UPDATED "This is the date that the Identity Item Requester was updated"\nvarchar REQUESTER_NAME "This is the name for the Identity Item Requester"\nvarchar REQUESTER_DISPLAY_NAME "The human-readable name for the Identity Item Requester"\nvarchar REQUESTER_MANAGERS_NAME "The managers name for the Identity Item Requester"\nvarchar REQUESTER_EMAIL "The email for the Identity Item Requester"\nvarchar REQUESTER_STATUS "The status of the Identity Item Requester"\nvarchar REQUESTER_JOB_TITLE "The job title for the Identity Item Requester" \nvarchar REQUESTER_LOCATION "The location of the Identity Item Requester" \nvarchar REQUESTER_LOCATION_CODE "The location code of the Identity Item Requester" \nvarchar REQUESTER_DEPARTMENT "The department of the Identity Item Requester"   \ntimestamp REQUESTER_SYNC_DATE "This is the date the data was synced to the table"\n}\nCERTIFICATION_ITEM_REVIEWER {\nvarchar REVIEWER_ID "This is the unique Identity ID of the Identity Certification Item Reviewer"\ntimestamp REVIEWER_IDENTITY_CREATED "This is the date that the Identity Certification Item Reviewer was created"\ntimestamp REVIEWER_IDENTITY_UPDATED "This is the date that the Identity Certification Item Reviewer was updated"\nvarchar REVIEWER_NAME "This is the name for the Identity Certification Item Reviewer"\nvarchar REVIEWER_DISPLAY_NAME "The human-readable name for the Identity Certification Item Reviewer"\nvarchar REVIEWER_MANAGERS_NAME "The managers name for the Identity Certification Item Reviewer"\nvarchar REVIEWER_EMAIL "The email for the Identity Certification Item Reviewer"\nvarchar REVIEWER_STATUS "The status of the Identity Certification Item Reviewer"\nvarchar REVIEWER_JOB_TITLE "The job title for the Identity Certification Item Reviewer" \nvarchar REVIEWER_LOCATION "The location of the Identity Certification Item Reviewer" \nvarchar REVIEWER_LOCATION_CODE "The location code of the Identity Certification Item Reviewer" \nvarchar REVIEWER_DEPARTMENT "The department of the Identity Certification Item Reviewer"   \ntimestamp REVIEWER_SYNC_DATE "This is the date the data was synced to the table"\n}\nCERTIFICATION_CERTIFIER {\nvarchar CERTIFICATION_CERTIFIER_ID "This is the unique Identity ID of the Identity Certification Certifier"\ntimestamp CERTIFICATION_CERTIFIER_IDENTITY_CREATED "This is the date that the Identity Certification Certifier was created"\ntimestamp CERTIFICATION_CERTIFIER_IDENTITY_UPDATED "This is the date that the Identity Certification Certifier was updated"\nvarchar CERTIFICATION_CERTIFIER_NAME "This is the name for the Identity Certification Certifier"\nvarchar CERTIFICATION_CERTIFIER_DISPLAY_NAME "The human-readable name for the Identity Certification Certifier"\nvarchar CERTIFICATION_CERTIFIER_MANAGERS_NAME "The managers name for the Identity Certification Certifier"\nvarchar CERTIFICATION_CERTIFIER_EMAIL "The email for the Identity Certification Certifier"\nvarchar CERTIFICATION_CERTIFIER_STATUS "The status of the Identity Certification Certifier"\nvarchar CERTIFICATION_CERTIFIER_JOB_TITLE "The job title for the Identity Certification Certifier" \nvarchar CERTIFICATION_CERTIFIER_LOCATION "The location of the Identity Certification Certifier" \nvarchar CERTIFICATION_CERTIFIER_LOCATION_CODE "The location code of the Identity Certification Certifier" \nvarchar CERTIFICATION_CERTIFIER_DEPARTMENT "The department of the Identity Certification Certifier"   \ntimestamp CERTIFICATION_CERTIFIER_SYNC_DATE "This is the date the data was synced to the table"\n}\nCERTIFICATION_MANAGER {\nvarchar CERTIFICATION_MANAGER_ID "This is the unique Identity ID of the Identity Certification Manager"\ntimestamp CERTIFICATION_MANAGER_IDENTITY_CREATED "This is the date that the Identity Certification Manager was created"\ntimestamp CERTIFICATION_MANAGER_IDENTITY_UPDATED "This is the date that the Identity Certification Manager was updated"\nvarchar CERTIFICATION_MANAGER_NAME "This is the name for the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_DISPLAY_NAME "The human-readable name for the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_MANAGERS_NAME "The managers name for the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_EMAIL "The email for the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_STATUS "The status of the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_JOB_TITLE "The job title for the Identity Certification Manager" \nvarchar CERTIFICATION_MANAGER_LOCATION "The location of the Identity Certification Manager"\nvarchar CERTIFICATION_MANAGER_LOCATION_CODE "The location code of the Identity Certification Manager" \nvarchar CERTIFICATION_MANAGER_DEPARTMENT "The department of the Identity Certification Manager"   \ntimestamp CERTIFICATION_MANAGER_SYNC_DATE "This is the date the data was synced to the table"\n}\nCERTIFICATION_SIGNER {\nvarchar CERTIFICATION_SIGNER_ID "This is the unique Identity ID of the Identity Certification Signer"\ntimestamp CERTIFICATION_SIGNER_IDENTITY_CREATED "This is the date that the Identity Certification Signer was created"\ntimestamp CERTIFICATION_SIGNER_IDENTITY_UPDATED "This is the date that the Identity Certification Signer was updated"\nvarchar CERTIFICATION_SIGNER_NAME "This is the name for the Identity Certification Signer"\nvarchar CERTIFICATION_SIGNER_DISPLAY_NAME "The human-readable name for the Identity Certification Signer"\nvarchar CERTIFICATION_SIGNER_MANAGERS_NAME "The managers name for the Identity Certification Signer"\nvarchar CERTIFICATION_SIGNER_EMAIL "The email for the Identity Certification Signer"\nvarchar CERTIFICATION_SIGNER_STATUS "The status of the Identity Certification Signer"\nvarchar CERTIFICATION_SIGNER_JOB_TITLE "The job title for the Identity Certification Signer" \nvarchar CERTIFICATION_SIGNER_LOCATION "The location of the Identity Certification Signer" \nvarchar CERTIFICATION_SIGNER_LOCATION_CODE "The location code of the Identity Certification Signer" \nvarchar CERTIFICATION_SIGNER_DEPARTMENT "The department of the Identity Certification Signer"   \ntimestamp CERTIFICATION_SIGNER_SYNC_DATE "This is the date the data was synced to the table"\n}\nIDENTITY ||--o{ IDENTITY_ATRIBUTE : "associated to and owns"\nIDENTITY ||--o{ IDENTITY_ROLES_FULL : "associated to and owns"\nIDENTITY ||--o{ ACCESS_PROFILES_FULL: "associated to and owns"\nIDENTITY ||--o{ IDENTITY_ACCOUNTS_FULL : "associated to and owns"\nIDENTITY ||--o{ IDENTITY_APPS_FULL : "associated to and owns"\nIDENTITY ||--o{ IDENTITY_ENTITLEMENTS_FULL : "associated to and owns"\nIDENTITY ||--o{ CERTIFICATION_ITEM : "associated to and owns"\nCERTIFICATION_ITEM ||--o{ CERTIFICATION_STATS : "associated to and owns"\nCERTIFICATION_ITEM ||--o{ CERTIFICATION_ITEM_REVIEWER : "associated to and owns"\nCERTIFICATION_ITEM ||--o{ CERTIFICATION_IDENTITY_FULL : "associated to and owns"\nCERTIFICATION_IDENTITY_FULL ||--o{ CERTIFICATION_CERTIFIER  : "associated to and owns"\nCERTIFICATION_IDENTITY_FULL ||--o{ CERTIFICATION_MANAGER  : "associated to and owns"\nCERTIFICATION_IDENTITY_FULL ||--o{ CERTIFICATION_SIGNER  : "associated to and owns"\nIDENTITY ||--o{ IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL : "associated to and owns"\nIDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL ||--o{ IDENTITY_ITEM_APPROVER : "associated to and owns"\nIDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL ||--o{ IDENTITY_ITEM_REQUESTER : "associated to and owns"'})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},23762:function(e,t,i){i.d(t,{Z:()=>E});var a=i("85893"),n=i("67294"),r=i("41213"),I=i("4757");let T="zoomIn_Zi5X",s="mermaidContainer_KO9S";function E(e){let t,i,{children:E,diagram:h}=e;r.N.contentLoaded();let[o,c]=n.useState(0),[_,d]=n.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[R,A]=n.useState({x:0,y:0}),[C,N]=n.useState(!1);function f(e){e.screenX?d({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:R.x,offsetY:R.y}):d({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:R.x,offsetY:R.y}),A({x:R.x,y:R.y})}function m(e){d({cursor:"grab",clickX:0,clickY:0})}function D(e){"grabbing"===_.cursor&&(e.screenX?A({x:_.clickX-e.screenX+_.offsetX,y:_.clickY-e.screenY+_.offsetY}):A({x:_.clickX-e.changedTouches[0].screenX+_.offsetX,y:_.clickY-e.changedTouches[0].screenY+_.offsetY}))}return n.useEffect(()=>{let e=!1;return setTimeout(()=>{!e&&N(!0)},100),()=>{e=!0}}),!0===C?(i=(0,a.jsx)("div",{}),t=(0,a.jsx)("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-R.y+"px",left:-R.x+"px",width:"calc(100% + "+o+"px)",maxHeight:"1000px"},children:h})):(i=(0,a.jsx)("div",{children:"Diagram Loading ..."}),t=(0,a.jsx)("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-R.y+"px",left:-R.x+"px",width:"calc(100% + "+o+"px)",maxHeight:"1000px"},children:h})),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{className:T,onClick:e=>{var t;return t=0,void c(o+300)},src:(0,I.default)("/icons/magnifying-glass-plus-regular.svg")}),(0,a.jsx)("img",{className:T,onClick:e=>{var t;return t=e,void(c(0),d({cursor:"grab",clickX:t.screenX,clickY:t.screenY,offsetX:0,offsetY:0}),A({x:0,y:0}))},src:(0,I.default)("/icons/house-regular.svg")}),(0,a.jsx)("img",{className:T,onClick:e=>{var t;return t=0,void c(o-300)},src:(0,I.default)("/icons/magnifying-glass-minus-regular.svg")}),(0,a.jsxs)("div",{style:{cursor:_.cursor},className:s,onMouseMove:e=>D(e),onTouchMove:e=>D(e),onMouseDown:e=>f(e),onTouchStart:e=>f(e),onMouseUp:e=>m(e),onTouchEnd:e=>m(e),onMouseLeave:e=>m(e),children:[i,t]})]})}}}]);