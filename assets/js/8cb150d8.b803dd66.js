"use strict";(self.webpackChunkcamunda_exercises=self.webpackChunkcamunda_exercises||[]).push([[323],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7824:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},c={unversionedId:"camunda-7/events/message-event",id:"camunda-7/events/message-event",isDocsHomePage:!1,title:"Message Event",description:"Message events can be used to start, interrupt or end messages. Additionally, they can used as non-interrupting events, e.g. if one of your customer requests some additional information without wanting to interrupt a process. The event always provides a name/ topic and carries a payload, basically like every simple email.",source:"@site/docs/camunda-7/events/message-event.mdx",sourceDirName:"camunda-7/events",slug:"/camunda-7/events/message-event",permalink:"/exercises/camunda-7/events/message-event",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Timer Event",permalink:"/exercises/camunda-7/events/timer-event"},next:{title:"Event-based-Gateway",permalink:"/exercises/camunda-7/events/event-based-gateway"}},u=[{value:"Set up the communication",id:"set-up-the-communication",children:[]},{value:"Add a interrupting message event in a event subprocess",id:"add-a-interrupting-message-event-in-a-event-subprocess",children:[]}],l={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Message events can be used to start, interrupt or end messages. Additionally, they can used as non-interrupting events, e.g. if one of your customer requests some additional information without wanting to interrupt a process. The event always provides a name/ topic and carries a payload, basically like every simple email."),(0,s.kt)("p",null,"Let us consider a simple Ordering Process:\n",(0,s.kt)("img",{alt:"process_event",src:n(9524).Z})),(0,s.kt)("p",null,"You can download the bpmn diagram ",(0,s.kt)("a",{target:"_blank",href:"/assets/docs/events/message-event/process-message-event.bpmn",download:"message-event-process.bpmn"},"here"),"."),(0,s.kt)("p",null,"Once an order is placed by the customer, an employee reviews the order, waits for payment to be received, and then ships the ordered product.\nSo far so good, but how can we trigger the event? In production, messages come, for example, from customers in the form of emails, which are processed by components of the backend. In our case we will simulate the customer request by an API call using ",(0,s.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman"),". A documentation of the Message API from Camunda can be found ",(0,s.kt)("a",{parentName:"p",href:"https://docs.camunda.org/manual/7.15/reference/rest/message/post-message/"},"here")),(0,s.kt)("h2",{id:"set-up-the-communication"},"Set up the communication"),(0,s.kt)("p",null,"Familiarize yourself with the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.camunda.org/manual/7.15/reference/rest/message/post-message/"},"Message API")," and configure the Message event. You need to correlate the message to the process instance. This is done by using Correlation keys. In our case those keys could be the ordered product and a customer ID.\nAs soon as the process engine receives the message about the succeeded payment, the content of the message is mapped to a process variable. When corellating a message the following variables can be set:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"amount (string)"),(0,s.kt)("li",{parentName:"ul"},"paymentType (String)")),(0,s.kt)("p",null,'Define the variables as readonly form fields in the "Deliver Product"-task.'),(0,s.kt)("p",null,"The payload of your POST-request should contain all the required information to do this. A sample payload looks like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n"messageName" : "yourMessageName",\n"correlationKeys" : {\n"customer" : {\n    "value" : "yourCustomerInput",\n    "type": "String"}\n},\n"processVariables" : {\n    "amount" : {\n        "value" : "100",\n        "type": "String"\n        },\n    "paymentType" : {\n        "value" : "credit",\n        "type": "String"\n        }\n}\n}\n')),(0,s.kt)("p",null,"Please create a POST-request in Postman with all required properties and make sure that the request is successfully accepted by the process engine. By fetching the process variables in the camunda web surface, you should be able to see your provided process variables."),(0,s.kt)("h2",{id:"add-a-interrupting-message-event-in-a-event-subprocess"},"Add a interrupting message event in a event subprocess"),(0,s.kt)("p",null,"A customer can cancel the order anytime. This cancellation process should be triggered by the customer's email, after which an employee must take care of canceling and deleting the order. Model this termination process as a subprocess and then create a corresponding POST-Request. The message from the customer should include the reason for the cancellation. The cancellation is also checked by an employee to whom the reason is shown."))}p.isMDXComponent=!0},9524:function(e,t,n){t.Z=n.p+"assets/images/process-message-event-8f955f576779d105b1537566afcd65b5.png"}}]);