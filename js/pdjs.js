var PagerDuty;(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t,o=r.queryParameters,c=r.requestTimeout,a=void 0===c?3e4:c,p=u(r,["queryParameters","requestTimeout"]);return e=f(e=new URL(e.toString()),o),t=l(t,a),i(e.toString(),3,n(n({},p),{},{headers:new Headers(n({"Content-Type":"application/json; charset=utf-8"},p.headers))}))}function i(e,t,r){return new Promise((function(n,o){fetch(e,r).then((function(u){if(0===t)return n(u);if(429===u.status){var c=r.retryTimeout;a(void 0===c?2e4:c).then((function(){i(e,t-1,r).then(n).catch(o)}))}else n(u)})).catch(o)}))}e.r(t),e.d(t,{acknowledge:()=>q,api:()=>P,change:()=>R,event:()=>E,resolve:()=>_,trigger:()=>D});var a=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function f(e,t){if(!t)return e;for(var r=e.searchParams,n=function(){var e=u[o],n=t[e];Array.isArray(n)?n.forEach((function(t){r.append(e,t)})):r.append(e,n)},o=0,u=Object.keys(t);o<u.length;o++)n();return e.search=r.toString(),e}function l(e,t){if(!t)return e;var r=new AbortController;return setTimeout((function(){return r.abort()}),t),n(n({},e),{},{signal:r.signal})}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){s=function(e,t){return new u(e,void 0,t)};var r=b(RegExp),n=RegExp.prototype,o=new WeakMap;function u(e,t,n){var u=r.call(this,e,t);return o.set(u,n||o.get(e)),u}function c(e,t){var r=o.get(t);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return y(u,r),u.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=c(t,this)),t},u.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=o.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+r[t]})))}if("function"==typeof t){var u=this;return n[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==p(e[e.length-1])&&e.push(c(e,u)),t.apply(this,e)}))}return n[Symbol.replace].call(this,e,t)},s.apply(this,arguments)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function b(e){var t="function"==typeof Map?new Map:void 0;return(b=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return O(e,arguments,g(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)})(e)}function O(e,t,r){return(O=v()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){if(!e.endpoint&&!e.url)return function(e){var t=e,r=function(e){return P(m(m({},t),e))},n=function(e){return function(r,n){return P(m(m({endpoint:r,method:e},t),n))}};return r.get=n("get"),r.post=n("post"),r.put=n("put"),r.patch=n("patch"),r.delete=n("delete"),r.all=function(e,r){function n(e){var t=e[e.length-1];return t.next?t.next().then((function(t){return n(e.concat([t]))})):Promise.resolve(e)}return P(m(m({endpoint:e,method:"get"},t),r)).then((function(e){return n([e])})).then((function(e){return function(e){var t=e.shift();return t.data=[t.data],e.forEach((function(e){t.data=t.data.concat(e.data),t.resource=t.resource.concat(e.resource)})),Promise.resolve(t)}(e)}))},r}(e);var t,r,n,o=e.endpoint,u=e.server,c=void 0===u?"api.pagerduty.com":u,i=e.token,a=e.tokenType,f=void 0===a?e.tokenType||"token":a,l=e.url,p=e.version,s=void 0===p?2:p,y=e.data,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["endpoint","server","token","tokenType","url","version","data"]),O=m(m({method:"GET"},b),{},{headers:m({Accept:"application/vnd.pagerduty+json;version=".concat(s),Authorization:"".concat({bearer:"Bearer ",token:"Token token="}[f]).concat(i)},b.headers)});return r=O.method,!["PUT","POST","DELETE","PATCH"].includes(null!==(n=r.toUpperCase())&&void 0!==n?n:"GET")&&y?O.queryParameters=null!==(t=O.queryParameters)&&void 0!==t?t:y:O.body=JSON.stringify(y),w(null!=l?l:"https://".concat(c,"/").concat(o.replace(/^\/+/,"")),O)}function w(e,t){return c(e,t).then((function(r){var n=r;return n.response=r,204===r.status?Promise.resolve(n):r.json().then((function(r){var o=function(e){var t=e.match(s(/.+.com\/([0-9A-Z_a-z]+)/,{resource:1}));return t?t[1]:null}(e);return n.next=function(e,t,r){if(function(e){return void 0!==e.offset}(r)){if(null!=r&&r.more&&void 0!==p(r.offset)&&r.limit)return function(){return w(e,m(m({},t),{},{queryParameters:m(m({},t.queryParameters),{},{limit:r.limit.toString(),offset:(r.limit+r.offset).toString()})}))}}else if(function(e){return void 0!==e.cursor}(r)&&null!=r&&r.cursor)return function(){return w(e,m(m({},t),{},{queryParameters:m(m({},t.queryParameters),{},{cursor:r.cursor,limit:r.limit.toString()})}))}}(e,t,r),n.data=r,n.resource=o?r[o]:null,n})).catch((function(){return Promise.reject(n)}))}))}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=e.server,r=void 0===t?"events.pagerduty.com":t,n=e.type,o=void 0===n?"event":n,u=e.data,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["server","type","data"]),a="https://".concat(r,"/v2/enqueue");return"change"===o&&(a="https://".concat(r,"/v2/change/enqueue")),function(e,t){return c(e,t).then((function(e){var t=e;return e.json().then((function(r){return t.data=r,t.response=e,t}))}))}(a,T({method:"POST",body:JSON.stringify(u)},i))}var x=function(e){return function(t){return E(T(T({},t),{},{data:T(T({},t.data),{},k({},"event_action",e))}))}},D=x("trigger"),q=x("acknowledge"),_=x("resolve"),R=function(e){return E(T(T({},e),{},{type:"change"}))};PagerDuty=t})();
//# sourceMappingURL=pdjs.js.map