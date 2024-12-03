"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([["37283"],{45185:function(e,t,a){a.d(t,{Z:function(){return r}});let r={colabContainer:"colabContainer_iwZU",filterContainer:"filterContainer_x9jY",cardContainer:"cardContainer_hv9a"}},56456:function(e,t,a){a.d(t,{Z:()=>c});var r=a("85893"),i=a("67294");let n={toggleContainer:"toggleContainer_E6f3",toggleWrapper:"toggleWrapper_PUZL",toggleCheckbox:"toggleCheckbox_EZBx",toggleLabel:"toggleLabel_mody",toggleBackground:"toggleBackground_OJVR",toggleTextLeft:"toggleTextLeft_kole",toggleTextRight:"toggleTextRight_BV8x"};var s=a("18061");function c(e){let{filterCallback:t,defaultValue:a}=e,[c,l]=i.useState(),[o,d]=i.useState("Identityiq"===a),u=async()=>{let e=await (0,s.NJ)(),t=[];for(let a of e.extras.tag_groups)if(45===a.id)for(let e of a.tags)t.push(e.text);l(t)};return(i.useEffect(()=>{u()},[]),c)?(0,r.jsx)("div",{className:n.toggleContainer,children:(0,r.jsxs)("div",{className:n.toggleWrapper,children:[(0,r.jsx)("input",{type:"checkbox",id:"product-toggle",className:n.toggleCheckbox,checked:o,onChange:()=>{d(!o);t(o?"identity-security-cloud":"Identityiq")}}),(0,r.jsxs)("label",{htmlFor:"product-toggle",className:n.toggleLabel,children:[(0,r.jsx)("div",{className:n.toggleBackground}),(0,r.jsx)("span",{className:n.toggleTextLeft,children:"Identity Security Cloud"}),(0,r.jsx)("span",{className:n.toggleTextRight,children:"IdentityIQ"})]})]})}):(0,r.jsx)("div",{})}},72294:function(e,t,a){a.d(t,{Z:()=>s});var r=a("85893");a("67294");let i="titleContainer_shlt";var n=a("83012");function s(){return(0,r.jsx)(n.Z,{to:"/colab",children:(0,r.jsx)("div",{className:i})})}},23512:function(e,t,a){a.d(t,{Z:()=>x});var r=a("85893"),i=a("67294");let n={featuredGridContainer:"featuredGridContainer_JObN",multipleGridContainer:"multipleGridContainer_g6gp",gridContainer:"gridContainer_KFdq",center:"center_gcgr",space:"space_AM5c",noFound:"noFound_mX9x",cardExit:"cardExit_MTVV",featuredSpinnerCenter:"featuredSpinnerCenter_zus4",spinnerCenterMultiple:"spinnerCenterMultiple_e6Tx",spinnerCenterSingle:"spinnerCenterSingle_GQ9J"},s={card:"card_lIUR",featuredCard:"featuredCard_vS7R",featuredCardImage:"featuredCardImage_TngV",cardText:"cardText_iMvO",cardImage:"cardImage_Ks_l",split:"split_d3LL",featuredCardTitle:"featuredCardTitle_bBYM",cardTitle:"cardTitle_f5JS",cardUser:"cardUser_migz",featuredCardFace:"featuredCardFace_a02g",cardFace:"cardFace_oiXQ",cardName:"cardName_wy_u",cardCreatorTitle:"cardCreatorTitle_EIN7",cardBadge:"cardBadge_Wgdi",cardBadgeImage:"cardBadgeImage_bSy6",cardBadgeText:"cardBadgeText_ihfQ",cardBadgeCertified:"cardBadgeCertified_S23p",docCardIcon:"docCardIcon_pXmA",badgeContainer:"badgeContainer_vUw8"};var c=a("4757"),l=a("62163"),o=a("53840"),d=a("83012");function u(e){let{post:t,featured:a}=e,i=(0,r.jsx)("div",{});return t.tags.includes("sailpoint-developed")?i=(0,r.jsxs)("div",{className:s.cardBadge,children:[(0,r.jsx)("img",{className:s.cardBadgeImage,src:(0,c.default)("/icons/SailPoint-LogoIcon-RGB-Color.svg")}),(0,r.jsx)("span",{className:s.cardBadgeText,children:"SailPoint Developed"})]}):t.tags.includes("sailpoint-certified")&&(i=(0,r.jsx)("div",{className:s.badgeContainer,children:(0,r.jsx)("div",{title:"SailPoint Certified",className:s.cardBadgeCertified,children:(0,r.jsx)(l.G,{icon:o.ip0,className:s.docCardIcon,size:"2x"})})})),(0,r.jsx)(d.Z,{to:t.link,children:(0,r.jsxs)("div",{className:a?s.featuredCard:s.card,children:[(0,r.jsxs)("div",{className:s.cardText,children:[(0,r.jsx)("img",{className:a?s.featuredCardImage:s.cardImage,src:(0,c.default)(t.image)}),(0,r.jsx)("div",{className:s.split}),(0,r.jsx)("div",{className:a?s.featuredCardTitle:s.cardTitle,children:t.title}),(0,r.jsxs)("div",{className:s.cardUser,children:[(0,r.jsx)("img",{className:a?s.featuredCardFace:s.cardFace,src:(0,c.default)(t.creatorImage)}),(0,r.jsx)("div",{className:s.cardName,children:t.creatorName}),(0,r.jsx)("div",{className:s.cardCreatorTitle,children:t.creatorTitle}),(0,r.jsx)("div",{})]})]}),i]})})}var g=a("83253"),f=a.n(g),p=a("2764"),m=a("45121"),h=a("18061");function x(e){let{filterCallback:t,featured:a,limit:s,multiple:l}=e,[o,d]=i.useState(),[g,m]=i.useState(!1),[x,v]=i.useState(""),[_,C]=i.useState(!0);(0,c.default)("/icons/circle-xmark-regular.svg");let y=async()=>{let e=t.tags;a&&(e=["featured"]);let r=await (0,h.FO)(e?e.join("+"):"",t.category),i=[],n=[];if(r.topic_list){for(let e of r.topic_list.topics)if(e.tags.length>0){let t={};for(let a of e.posters)if(a.description.includes("Original Poster")){for(let e of r.users)if(e.id===a.user_id){if(n.find(t=>t.group===e.primary_group_name))e.title=n.find(t=>t.group===e.primary_group_name).title;else{let t=await (0,h.vw)(e.primary_group_name);void 0===t.group?n.push({group:e.primary_group_name,title:""}):(n.push({group:e.primary_group_name,title:t.group.title||""}),e.title=t.group.title)}t=e}}i.push(await j(e,t))}s?d(i.slice(0,s)):d(i)}else d(void 0);C(!1)},N=async e=>{let t=await (0,h.RS)(e.id);v({data:e,raw:t})},b=e=>{v({data:void 0,raw:void 0}),N(e),m(!0)};return i.useEffect(()=>{},[g,x]),f().setAppElement("#__docusaurus"),i.useEffect(()=>{y(),d(void 0),C(!0)},[t]),(0,r.jsx)("div",{className:a?n.featuredCenter:n.center,children:_?(0,r.jsx)("div",{children:a?(0,r.jsx)("div",{className:n.featuredSpinnerCenter,children:(0,r.jsx)(p.Z,{})}):(0,r.jsx)("div",{className:l?n.spinnerCenterMultiple:n.spinnerCenterSingle,children:(0,r.jsx)(p.Z,{})})}):o&&o.length>0?(0,r.jsx)(r.Fragment,{children:l?(0,r.jsx)("div",{className:n.multipleGridContainer,children:o.map(function(e,t){return(0,r.jsx)(u,{featured:a,post:e,openDialogFunc:b},t+e.link)})}):(0,r.jsx)("div",{className:a?n.featuredGridContainer:n.gridContainer,children:o.map(function(e,t){return(0,r.jsx)(u,{featured:a,post:e,openDialogFunc:b},t+e.link)})})}):(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:n.noFound,children:[" ","Hey there, looks like no integrations match your search criteria. Check out our"," ",(0,r.jsx)("a",{href:"https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230",children:"getting started guide"}),", and consider being the first to contribute this integration!"]})})})}async function j(e,t){var a,r;return{id:e.id,creatorName:t.name,excerpt:(a=function(e){if(!e)return"";{let t=(e=e.replace(/:[^:]*:/g,"")).match(/Description([\s\S]*?)Legal Agreement/);return(t&&(e=t[1].trim()),e.length>150)?e.slice(0,100)+"...":e.replace("&hellip;","")}}(e.excerpt)).length>93?a.substring(0,93)+"...":a,creatorImage:function(e){return e.includes((0,m.gK)())?"https://"+(0,m.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}(t.avatar_template),creatorTitle:t.title,tags:e.tags,image:e.image_url,link:(0,m.O$)()+"t/"+e.slug+"/"+e.id,title:(r=e.title).length>63?r.substring(0,62)+"...":r,views:e.views,liked:e.like_count,replies:e.posts_count,solution:e.has_accepted_answer,readTime:parseInt(5)}}},2764:function(e,t,a){a.d(t,{Z:()=>s});var r=a("85893");a("67294");let i="container_hkNt",n="line_KXFO";function s(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n}),(0,r.jsx)("div",{className:n})]})})}},74653:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(85893),i=a(67294),n=a(77196),s=a(45185),c=a(56456),l=a(23512),o=a(72294);function d(){let[e,t]=i.useState({category:"colab-rules",tags:["identity-security-cloud"]});return(0,r.jsx)(n.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions.",children:(0,r.jsxs)("main",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsxs)("div",{className:s.Z.container,children:[(0,r.jsx)("div",{className:s.Z.filterContainer,children:(0,r.jsx)(c.Z,{filterCallback:e=>{var a=[];let r=a.indexOf(e);-1!==r?a.splice(r,1):a.push(e),t({category:"colab-rules",tags:a})},isChecked:!0})}),(0,r.jsx)("div",{className:s.Z.cardContainer,children:(0,r.jsx)(l.Z,{filterCallback:e})})]})]})})}},18061:function(e,t,a){a.d(t,{F2:function(){return l},FO:function(){return g},IN:function(){return s},KG:function(){return n},NJ:function(){return p},RS:function(){return f},ZS:function(){return c},cz:function(){return u},u3:function(){return o},vw:function(){return d}});var r=a(45121),i=a(25108);async function n(){try{let e=await fetch((0,r.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function s(e,t,a){try{if(e){let e=await fetch((0,r.O$)()+"groups/expert_ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}{let e=await fetch((0,r.O$)()+"groups/ambassadors/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(e){return[]}}async function c(e){try{let t=await fetch((0,r.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(e){return[]}}async function l(){try{let e=await fetch((0,r.O$)()+"leaderboard/14.json");return await e.json()}catch(e){return[]}}async function o(e){let t="",a={users:[],topic_list:{topics:[]}};t=e.length<1?(0,r.O$)()+"c/content/community-blog/125.json":(0,r.O$)()+`tags/c/content/community-blog/${e}.json`;try{let r=0;for(;;){let i=0===r?t:`${t}`,n=await fetch(i),s=await n.json();if(a.topic_list.topics=a.topic_list.topics.concat(s.topic_list.topics),a.users=a.users.concat(s.users),s.topic_list.topics.length<30||"identity-security-cloud"===e)break;r++}return a}catch(e){return[]}}async function d(e){let t=(0,r.O$)()+"g/"+e+".json";try{let e=await fetch(t);return await e.json()}catch(e){return i.log(e),[]}}async function u(e){let t="",a={users:[],topic_list:{topics:[]}};e?(e.length<1&&(t=(0,r.O$)()+"c/content/video-library/127.json"),1===e.length&&(t=(0,r.O$)()+`/tags/c/content/video-library/127/${e}.json`),2===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}`),3===e.length&&(t=(0,r.O$)()+`filter.json?q=category%3Avideo-library%20tag%3A${e[0]}%2B${e[1]}%2B${e[2]}`)):t=(0,r.O$)()+"c/content/video-library/l/latest.json";try{let r=0;for(;;){let i=0===r?t:`${t}${e.length>1?"&":"?"}page=${r}`,n=await fetch(i),s=await n.json();if(a.topic_list.topics=a.topic_list.topics.concat(s.topic_list.topics),a.users=a.users.concat(s.users),s.topic_list.topics.length<30)break;r++}return a}catch(e){return[]}}async function g(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let i="";i=e?(0,r.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,r.O$)()+"c/"+a+"/l/latest.json";try{let e=await fetch(i);return await e.json()}catch(e){return[]}}async function f(e){try{let t=await fetch((0,r.O$)()+"raw/"+e+".json");return await t.text()}catch(e){return[]}}async function p(){try{let e=await fetch((0,r.O$)()+"tags.json");return await e.json()}catch(e){return[]}}},45121:function(e,t,a){function r(e){let t=e.split(".");return t[0]+"-dark."+t[1]}function i(){return"https://developer.sailpoint.com/discuss/"}function n(){return"developer.sailpoint.com"}a.d(t,{O$:function(){return i},ZT:function(){return r},gK:function(){return n}}),a(34155)}}]);