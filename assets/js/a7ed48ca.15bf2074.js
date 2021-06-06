(self.webpackChunkcamunda_exercises=self.webpackChunkcamunda_exercises||[]).push([[211],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5422:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},l={unversionedId:"gateways/inclusive-gateway",id:"gateways/inclusive-gateway",isDocsHomePage:!1,title:"Inclusive Gateway",description:"Your task is to identify the information, which is relevant to execute the following process, and add the information by setting and catching process variables.",source:"@site/docs/gateways/inclusive-gateway.mdx",sourceDirName:"gateways",slug:"/gateways/inclusive-gateway",permalink:"/exercises/gateways/inclusive-gateway",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Parallel Gateway",permalink:"/exercises/gateways/parallel-gateway"},next:{title:"Call Activity",permalink:"/exercises/call-activity/call-activity"}},c=[{value:"1. Add a form",id:"1-add-a-form",children:[]},{value:"2. Use the variables",id:"2-use-the-variables",children:[]}],u={toc:c};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Your task is to identify the information, which is relevant to execute the following process, and add the information by setting and catching process variables."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Process Diagram",src:r(7239).Z})),(0,o.kt)("p",null,"You can download the bpmn diagram ",(0,o.kt)("a",{target:"_blank",href:"/assets/docs/gateways/inclusive-gateway/inclusive-gateway.bpmn",download:"inclusive-gateway.bpmn"},"here"),"."),(0,o.kt)("p",null,"The process starts as soon as you require some kind of groceries. You first have to go to the supermarket and then decide whether you buy apples, steaks or noodles. After you have bought everything, you bring the groceries home and you're done."),(0,o.kt)("p",null,"At which point should the information about which groceries are required enter the process?\nCreate a form that let's you add the information and utilize the process variables by using Expressions."),(0,o.kt)("h2",{id:"1-add-a-form"},"1. Add a form"),(0,o.kt)("p",null,"The process should be started by setting the information about which groceries are required. So, in order to create your shopping list, set three different form fields (",(0,o.kt)("em",{parentName:"p"},"apples"),", ",(0,o.kt)("em",{parentName:"p"},"steak")," and ",(0,o.kt)("em",{parentName:"p"},"noodles"),") of type ",(0,o.kt)("em",{parentName:"p"},"boolean")," at the start-event."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Form",src:r(3762).Z})),(0,o.kt)("h2",{id:"2-use-the-variables"},"2. Use the variables"),(0,o.kt)("p",null,"You are only supposed to buy apples, if you initially wrote them on your shopping list. That means you have to add the boolean expression to the corresponding flow. Click the arrow and add an Expression with the corresponding process variable name."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:r(4921).Z})),(0,o.kt)("p",null,"Repeat this step for the steak- and noodels- path.\nDeploy the process and make sure the engine creates tasks for all the groceries you have put on your shopping list. What happens if you start the process with ",(0,o.kt)("em",{parentName:"p"},"false")," values for all the items on your shopping list? How could you improve the process? Is it feasible to extend the usability of the process and allow unlimited options (e.g. by using ",(0,o.kt)("em",{parentName:"p"},"string")," values as input?"))}p.isMDXComponent=!0},4921:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Flow_Apples-3c6c4497e67b181b62c9761e1e179a16.png"},3762:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Form_StartEvent-6bef824d2de327f6bd8b2f58504708ed.png"},7239:function(e,t,r){"use strict";t.Z=r.p+"assets/images/Process_Groceries-094abea3b861c94dc2188aeeb6ee3634.png"}}]);