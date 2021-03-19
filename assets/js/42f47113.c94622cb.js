(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),i=(n(0),n(123)),r={id:"motivation",title:"Motivation",sidebar_label:"Motivation",slug:"/"},c={unversionedId:"motivation",id:"version-2.x/motivation",isDocsHomePage:!1,title:"Motivation",description:"When should I use React-Rocketjump?",source:"@site/versioned_docs/version-2.x/motivation.md",slug:"/",permalink:"/react-rocketjump/docs/",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/motivation.md",version:"2.x",sidebar_label:"Motivation",sidebar:"version-2.x/someSidebar",next:{title:"Installation",permalink:"/react-rocketjump/docs/installation"}},s=[{value:"When should I use React-Rocketjump?",id:"when-should-i-use-react-rocketjump",children:[]},{value:"A but of history",id:"a-but-of-history",children:[]},{value:"What about Redux-Rocketjump?",id:"what-about-redux-rocketjump",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"when-should-i-use-react-rocketjump"},"When should I use React-Rocketjump?"),Object(i.b)("p",null,"React-Rocketjump is great in managing side effects of any type you could think of, especially with REST api integration. The tools provided by React-Rocketjump will help you integrate custom side effects inside React Components. Usually, the challanges that asynchronous tasks (or side effects) bring to React components are"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"task management",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"starting a task"),Object(i.b)("li",{parentName:"ul"},"being able to cancel it before completion"),Object(i.b)("li",{parentName:"ul"},"being notified when it ends"),Object(i.b)("li",{parentName:"ul"},"keeping its result as long as we need it"))),Object(i.b)("li",{parentName:"ul"},"quickly setup an action-reducer based state management",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"create a state"),Object(i.b)("li",{parentName:"ul"},"define actions"),Object(i.b)("li",{parentName:"ul"},"create the reducer"),Object(i.b)("li",{parentName:"ul"},"create memoized selectors"))),Object(i.b)("li",{parentName:"ul"},"managing side-effects scheduling",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"enqueue tasks"),Object(i.b)("li",{parentName:"ul"},"keep only last invocation of a task"),Object(i.b)("li",{parentName:"ul"},"keep all the invocations of a task"),Object(i.b)("li",{parentName:"ul"},"managing tasks groups")))),Object(i.b)("h2",{id:"a-but-of-history"},"A but of history"),Object(i.b)("p",null,"The journey of React-RocketJump started in 2018 under the name of Redux-Rocketjump, when React had still no hooks and Redux was the greatest tool for state management.Redux is pretty good in doing his job, but it has a great problem: verbosity."),Object(i.b)("p",null,"Actions\u2019 and reducers\u2019 definitions can require many lines of code (if you care about readability, of course), and this usually ends up in writing code via copy - paste - adapt. Moreover, there are recurrent patterns, like pagination, which are not straightforward to implement starting from scratch and that are needed in a great number of projects. Again, this ends up in copypasting stuff, which is, at the end, a bad practice."),Object(i.b)("p",null,"Redux-RocketJump tries to bridge this gap promoting better code organization and automating common tasks without losing control of what you are doing. In detail, it focuses on"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"generating all you need for state management (actions, reducers, side effect management) from a single function call"),Object(i.b)("li",{parentName:"ul"},"easing out extension and composition of common data-related patterns"),Object(i.b)("li",{parentName:"ul"},"organizing redux folders by functionality instead of by type")),Object(i.b)("p",null,"Redux-RocketJump helps in this scenario, providing tools to reduce verbosity and reuse functionalities across composition. In detail, Redux-RocketJump focuses on"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"generating all you need for state management (actions, reducers, side effect management) from a single function call"),Object(i.b)("li",{parentName:"ul"},"easing out extension and composition of common data-related patterns"),Object(i.b)("li",{parentName:"ul"},"organizing redux folders by functionality instead of by type")),Object(i.b)("p",null,"While Redux-Rocketjump is still in many cases a good solution, there are still some limitations, mainly due to Redux itself. In effect, Redux mantains a unique, monolithic, global state objects, which is through in various gateways (called connected components) spread in the application. Using Redux-Rockejump in our projects, we realized that the global state was not the ideal fitting for Redux-Rocketjump. In particular, since state is unique and monolithic and each RocketJump is bound to a subtree in the state, it was not possible to use a RocketJump to store two entities without duplicating it or relying on a list-based storage."),Object(i.b)("p",null,"React-Rocketjump has been designed starting from Redux-Rocketjump and trying to instill in it our daily usage experience. React-Rocketjump is as powerful as our good old Redux-Rocketjump, but much more flexible: state management is no more monolithic, but distributed, and each component encapsulates its state. This is possible because we can now leverage the full power of React Hooks API, which allows to write powerful yet local code."),Object(i.b)("h2",{id:"what-about-redux-rocketjump"},"What about Redux-Rocketjump?"),Object(i.b)("p",null,"Redux-Rocketjump is still mantained and widely useful when Redux is in the loop for other reasons, or when the benefits of a centralized state overcome its limitations. Moreover, you can use Redux-Rocketjump and React-Rocketjump side by side, so to take the best of both. Beware, however, to be coherent in the usage: if you use Redux-Rocketjump, include plugins from Redux-Rocketjump, and the same for React-Rocketjump. Mixing up a core library with the plugins of the other one will probably lead to unexpected and tricky results."))}l.isMDXComponent=!0}}]);