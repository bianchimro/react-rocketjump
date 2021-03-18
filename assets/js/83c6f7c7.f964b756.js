(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(121)),a={id:"connect_generalities",title:"Connecting RJ Objects",sidebar_label:"Generalities",slug:"/connect-generalities"},i={unversionedId:"connect_generalities",id:"version-2.x/connect_generalities",isDocsHomePage:!1,title:"Connecting RJ Objects",description:"Connecting a RocketJump Object within a React component means:",source:"@site/versioned_docs/version-2.x/connect_generalities.md",slug:"/connect-generalities",permalink:"/react-rocketjump/docs/connect-generalities",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/connect_generalities.md",version:"2.x",sidebar_label:"Generalities",sidebar:"version-2.x/someSidebar",previous:{title:"Mutations",permalink:"/react-rocketjump/docs/api-mutations"},next:{title:"useRj",permalink:"/react-rocketjump/docs/connect-userj"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Connecting a RocketJump Object within a React component means:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"creating a state object to hold the result of the task"),Object(o.b)("li",{parentName:"ul"},"creating selectors for easy access to the state object"),Object(o.b)("li",{parentName:"ul"},"instantiating a reducer to manage the state object"),Object(o.b)("li",{parentName:"ul"},"creating action creators to manage the task and the state object"),Object(o.b)("li",{parentName:"ul"},"start a side effect pipeline")),Object(o.b)("p",null,"Once a RockerJump Object is connected to a component, you get back two useful objects"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"state")," object, which contains data produced by your side effect"),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"action")," bag, which contains a bunch of action dispatchers you can use to control the RocketJump object")),Object(o.b)("p",null,"You can read more about ",Object(o.b)("inlineCode",{parentName:"p"},"state")," and ",Object(o.b)("inlineCode",{parentName:"p"},"action")," in the following section, now let's focus with the main alternatives the library offers to connect the ",Object(o.b)("em",{parentName:"p"},"rocketjump")," world and the ",Object(o.b)("em",{parentName:"p"},"react")," world"),Object(o.b)("p",null,"You can choose several options to instantiate a RocketJump Object:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/react-rocketjump/docs/connect-userj"},"useRj hook"),", which is the most simple (and most customizable)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/react-rocketjump/docs/connect-userunrj"},"useRunRj hook"),", which is a very descriptive and powerful solution for many common cases"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/react-rocketjump/docs/connect-connectrj"},"connectRj HOC"),", which is a legacy solution to work with class based components")))}u.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,j=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return n?c.a.createElement(j,i(i({ref:t},l),{},{components:n})):c.a.createElement(j,i({ref:t},l))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);