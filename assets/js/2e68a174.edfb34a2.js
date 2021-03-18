(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{122:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?i.a.createElement(f,a(a({ref:n},l),{},{components:t})):i.a.createElement(f,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return l}));var r=t(3),i=(t(0),t(122));const o={id:"plugin_debounce",title:"Debounce Plugin",sidebar_label:"Debounce Plugin",slug:"/plugin-debounce"},c={unversionedId:"plugin_debounce",id:"version-2.x/plugin_debounce",isDocsHomePage:!1,title:"Debounce Plugin",description:"Use cases",source:"@site/versioned_docs/version-2.x/plugin_debounce.md",slug:"/plugin-debounce",permalink:"/react-rocketjump/docs/plugin-debounce",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/plugin_debounce.md",version:"2.x",sidebar_label:"Debounce Plugin",sidebar:"version-2.x/someSidebar",previous:{title:"Map Plugin",permalink:"/react-rocketjump/docs/plugin-map"},next:{title:"Writing Plugins",permalink:"/react-rocketjump/docs/plugin-write"}},a=[{value:"Use cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Actions",id:"actions",children:[]}],u={toc:a};function l({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"use-cases"},"Use cases"),Object(i.b)("p",null,"This plugin acts on the spawn process of effect executions, applying a debouncing function. This is useful to throttle the rate at which task execution are spawned, expecially if you are dealing with APIs that have a rate limit or that are billed basing on the number of invocations"),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"This plugin takes exactly one argument of type ",Object(i.b)("inlineCode",{parentName:"p"},"int"),", that corresponds to the debouncing time."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjDebounce from 'react-rocketjump/plugins/debounce'\n\nconst state = rj(rjDebounce(200), {\n  effect: fetchUsers,\n})()\n")),Object(i.b)("h2",{id:"actions"},"Actions"),Object(i.b)("p",null,"This plugin injects in the ",Object(i.b)("inlineCode",{parentName:"p"},"actions")," bag the following action creators:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"runDebounced"),": functionally equivalent, debounced version of ",Object(i.b)("inlineCode",{parentName:"li"},"run")," predefined action")))}l.isMDXComponent=!0}}]);