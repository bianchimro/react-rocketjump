(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=(n(0),n(122));const r={id:"plugin_list",title:"List Plugin",sidebar_label:"List Plugin",slug:"/plugin-list"},o={unversionedId:"plugin_list",id:"version-2.x/plugin_list",isDocsHomePage:!1,title:"List Plugin",description:"Use cases",source:"@site/versioned_docs/version-2.x/plugin_list.md",slug:"/plugin-list",permalink:"/react-rocketjump/docs/plugin-list",editUrl:"https://github.com/inmagik/react-rocketjump/edit/master/website/versioned_docs/version-2.x/plugin_list.md",version:"2.x",sidebar_label:"List Plugin",sidebar:"version-2.x/someSidebar",previous:{title:"Plugins",permalink:"/react-rocketjump/docs/plugins"},next:{title:"PlainList Plugin",permalink:"/react-rocketjump/docs/plugin-plainlist"}},l=[{value:"Use cases",id:"use-cases",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Computed properties",id:"computed-properties",children:[]},{value:"Pagination Adapters",id:"pagination-adapters",children:[]},{value:"Provided plugins",id:"provided-plugins",children:[]}],s={toc:l};function p({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"use-cases"},"Use cases"),Object(i.b)("p",null,"When interacting with a paginated REST API:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the API returns only a page of the collection at the time, with metadata specifying the position of the page and the total number of pages or objects in the collection."),Object(i.b)("li",{parentName:"ul"},"some parameters are passed to API requests to identify the page we want to load")),Object(i.b)("p",null,"This plugins adds pagination state management and related selectors to get:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"current, next and previous pages references"),Object(i.b)("li",{parentName:"ul"},"total items count")),Object(i.b)("p",null,"Since pagination parametrization and metadata can be implemented with different strategies (page number pagination, limit-offset pagination, token-based pagination, etc.), this plugin offers the possibility to use different adapters. Some common adapters are provided, specifically implemented for django-rest-framework pagination classes, but that may be used as a reference for other pagination adapters."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"This plugin supports some configuration options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pagination"),": the pagination adapter to be used (required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"pageSize"),": number of items in a page (required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"customListReducer"),": custom reducer for the list"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"customPaginationReducer"),": custom reducer for the pagination information")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { rj } from 'react-rocketjump'\nimport rjList, { nextPreviousPaginationAdapter } from 'react-rocketjump/plugins/list'\n\nconst GET_ITEMS = 'GET_ITEMS'\n\nconst listState = rj(\n        rjList({\n            pageSize: 50,\n            pagination: nextPreviousPaginationAdapter\n        }),\n        {\n            effect: page => fetch(`http://example.com/items?page=${page}`)\n                .then(response => response.json())\n        }\n    )\n")),Object(i.b)("h2",{id:"selectors"},"Selectors"),Object(i.b)("p",null,"This plugin injects in the ",Object(i.b)("inlineCode",{parentName:"p"},"selectors")," bag the following selectors:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getList"),": returns the items contained in the page that is currently loaded (as an array)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getCount"),": returns the total number of items in the collection (not in the single page)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getNumPages"),": returns the overall number of pages in the collection"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hasNext"),": returns a boolean indicating whether this page is the last one (",Object(i.b)("inlineCode",{parentName:"li"},"false"),") or not (",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hasPrev"),": returns a boolean indicating whether this page is the first one (",Object(i.b)("inlineCode",{parentName:"li"},"false"),") or not (",Object(i.b)("inlineCode",{parentName:"li"},"true"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getNext"),": returns the information that is necessary to inject as params in the ",Object(i.b)("inlineCode",{parentName:"li"},"run")," call to load the next page. The content of this key depends on the pagination adapter (see later)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getPrev"),": returns the information that is necessary to inject as params in the ",Object(i.b)("inlineCode",{parentName:"li"},"run")," call to load the previous page. The content of this key depends on the pagination adapter (see later)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"getCurrent"),": returns the information that was injected in the ",Object(i.b)("inlineCode",{parentName:"li"},"run")," call to load the current page. The content of this key depends on the pagination adapter (see later)")),Object(i.b)("h2",{id:"computed-properties"},"Computed properties"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This plugin uses ",Object(i.b)("a",{parentName:"p",href:"/react-rocketjump/docs/api-rj"},"computed properties"))),Object(i.b)("p",null,"Properties exposed on the shadow state"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"{\n    error: 'getError',\n    loading: 'isLoading',\n    list: 'getList',\n    pagination: 'getPagination',\n}\n")),Object(i.b)("h2",{id:"pagination-adapters"},"Pagination Adapters"),Object(i.b)("p",null,"A pagination adapter is simply a JavaScript object that describes how to extract pagination information from the output of a task (the response of the REST API, usually). Each property can either be a property path or a function that is called with the output of the task as a parameter (except for the ",Object(i.b)("inlineCode",{parentName:"p"},"current")," property, which is passed the pagination information the user injected in the ",Object(i.b)("inlineCode",{parentName:"p"},"run")," call corresponding to the response)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"{\n    list,           // Should point to (or directly return, in case of functions)\n                    //    the actual list, the data returned by the REST endpoint\n    count,          // Should point to (or directly return, in case of functions)\n                    //    the total number of items in the collection\n    current,        // Should point to (or directly return, in case of functions)\n                    //    the pagination params used to load current page\n    next,           // Should point to (or directly return, in case of functions)\n                    //    the pagination params to be used to load the next page\n    previous        // Should point to (or directly return, in case of functions)\n                    //    the pagination params to be used to load the previous page\n}\n")),Object(i.b)("p",null,"The library already provides some pagination adapters, which are designed to work well with django-rest-framework, but they are indeed quite reusable"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"nextPrevPaginationAdapter: pagination is based on ",Object(i.b)("inlineCode",{parentName:"li"},"next")," and ",Object(i.b)("inlineCode",{parentName:"li"},"prev")," references"),Object(i.b)("li",{parentName:"ul"},"limitOffsetPaginationAdapter: pagination is based on the concepts of ",Object(i.b)("inlineCode",{parentName:"li"},"limit")," and ",Object(i.b)("inlineCode",{parentName:"li"},"offset"))),Object(i.b)("h2",{id:"provided-plugins"},"Provided plugins"),Object(i.b)("p",null,"This plugin already embeds List Insert Plugin, List Update Plugin and List Delete Plugin, so you don't have to add them manually unless you need to perform some customization on them"))}p.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);