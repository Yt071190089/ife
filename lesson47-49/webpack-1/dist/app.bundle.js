!function(I){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!A[e]||!f[e])return;for(var n in f[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(q[n]=t[n]);0==--u&&0===l&&v()}(e,t),n&&n(e,t)};var i,r=!0,T="b0ea70b94216ad491c1c",t=1e4,D={},E=[],o=[];function s(t){var n=Q[t];if(!n)return R;var r=function(e){return n.hot.active?(Q[e]?-1===Q[e].parents.indexOf(t)&&Q[e].parents.push(t):(E=[t],i=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),E=[]),R(e)},e=function(t){return{configurable:!0,enumerable:!0,get:function(){return R[t]},set:function(e){R[t]=e}}};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,e(o));return r.e=function(e){return"ready"===C&&S("prepare"),l++,R.e(e).then(t,function(e){throw t(),e});function t(){l--,"prepare"===C&&(d[e]||h(e),0===l&&0===u&&v())}},r.t=function(e,t){return 1&t&&(e=r(e)),R.t(e,-2&t)},r}var c=[],C="idle";function S(e){C=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var a,q,L,u=0,l=0,d={},f={},A={};function W(e){return+e+""===e?+e:e}function p(e){if("idle"!==C)throw new Error("check() is only allowed in idle status");return r=e,S("check"),(i=t,i=i||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=R.p+""+T+".hot-update.json";r.open("GET",o,!0),r.timeout=i,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})).then(function(e){if(!e)return S("idle"),null;f={},d={},A=e.c,L=e.h,S("prepare");var t=new Promise(function(e,t){a={resolve:e,reject:t}});q={};return h("app"),"prepare"===C&&0===l&&0===u&&v(),t});var i}function h(e){var t,n;A[e]?(f[e]=!0,u++,t=e,(n=document.createElement("script")).charset="utf-8",n.src=R.p+""+t+"."+T+".hot-update.js",document.head.appendChild(n)):d[e]=!0}function v(){S("ready");var t=a;if(a=null,t)if(r)Promise.resolve().then(function(){return m(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in q)Object.prototype.hasOwnProperty.call(q,n)&&e.push(W(n));t.resolve(e)}}function m(n){if("ready"!==C)throw new Error("apply() is only allowed in ready status");var e,t,r,l,o;function i(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});0<r.length;){var o=r.pop(),i=o.id,s=o.chain;if((l=Q[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var c=0;c<l.parents.length;c++){var a=l.parents[c],u=Q[a];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([a]),moduleId:i,parentId:a};-1===t.indexOf(a)&&(u.hot._acceptedDependencies[i]?(n[a]||(n[a]=[]),d(n[a],[i])):(delete n[a],t.push(a),r.push({chain:s.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var s={},c=[],a={},u=function(){console.warn("[HMR] unexpected require("+p.moduleId+") to disposed module")};for(var f in q)if(Object.prototype.hasOwnProperty.call(q,f)){var p;o=W(f);var h=!1,v=!1,m=!1,y="";switch((p=q[f]?i(o):{type:"disposed",moduleId:f}).chain&&(y="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+p.moduleId+y));break;case"declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+y));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(p),n.ignoreUnaccepted||(h=new Error("Aborted because "+o+" is not accepted"+y));break;case"accepted":n.onAccepted&&n.onAccepted(p),v=!0;break;case"disposed":n.onDisposed&&n.onDisposed(p),m=!0;break;default:throw new Error("Unexception type "+p.type)}if(h)return S("abort"),Promise.reject(h);if(v)for(o in a[o]=q[o],d(c,p.outdatedModules),p.outdatedDependencies)Object.prototype.hasOwnProperty.call(p.outdatedDependencies,o)&&(s[o]||(s[o]=[]),d(s[o],p.outdatedDependencies[o]));m&&(d(c,[p.moduleId]),a[o]=u)}var g,j=[];for(t=0;t<c.length;t++)o=c[t],Q[o]&&Q[o].hot._selfAccepted&&j.push({module:o,errorHandler:Q[o].hot._selfAccepted});S("dispose"),Object.keys(A).forEach(function(e){!1===A[e]&&delete installedChunks[e]});for(var b,w,_=c.slice();0<_.length;)if(o=_.pop(),l=Q[o]){var O={},k=l.hot._disposeHandlers;for(r=0;r<k.length;r++)(e=k[r])(O);for(D[o]=O,l.hot.active=!1,delete Q[o],delete s[o],r=0;r<l.children.length;r++){var M=Q[l.children[r]];M&&(0<=(g=M.parents.indexOf(o))&&M.parents.splice(g,1))}}for(o in s)if(Object.prototype.hasOwnProperty.call(s,o)&&(l=Q[o]))for(w=s[o],r=0;r<w.length;r++)b=w[r],0<=(g=l.children.indexOf(b))&&l.children.splice(g,1);for(o in S("apply"),T=L,a)Object.prototype.hasOwnProperty.call(a,o)&&(I[o]=a[o]);var P=null;for(o in s)if(Object.prototype.hasOwnProperty.call(s,o)&&(l=Q[o])){w=s[o];var H=[];for(t=0;t<w.length;t++)if(b=w[t],e=l.hot._acceptedDependencies[b]){if(-1!==H.indexOf(e))continue;H.push(e)}for(t=0;t<H.length;t++){e=H[t];try{e(w)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:o,dependencyId:w[t],error:e}),n.ignoreErrored||P||(P=e)}}}for(t=0;t<j.length;t++){var x=j[t];o=x.module,E=[o];try{R(o)}catch(t){if("function"==typeof x.errorHandler)try{x.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:o,error:e,originalError:t}),n.ignoreErrored||P||(P=e),P||(P=t)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:o,error:t}),n.ignoreErrored||P||(P=t)}}return P?(S("fail"),Promise.reject(P)):(S("idle"),new Promise(function(e){e(c)}))}var Q={};function R(e){if(Q[e])return Q[e].exports;var t,r,n=Q[e]={i:e,l:!1,exports:{},hot:(t=e,r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:i!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:p,apply:m,status:function(e){if(!e)return C;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);0<=t&&c.splice(t,1)},data:D[t]},i=void 0,r),parents:(o=E,E=[],o),children:[]};return I[e].call(n.exports,n,n.exports,s(e)),n.l=!0,n.exports}R.m=I,R.c=Q,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(t,e){if(1&e&&(t=R(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)R.d(n,r,function(e){return t[e]}.bind(null,r));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="",R.h=function(){return T},s("./src/index.js")(R.s="./src/index.js")}({"./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */function(e,t,n){},"./src/images/customer.jpg":
/*!*********************************!*\
  !*** ./src/images/customer.jpg ***!
  \*********************************/
/*! no static exports found */function(e,t,n){e.exports=n.p+"images/8fca4796eac7822c776d8c346d9b60db.jpg"},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! ./js/iferestaurant.js */"./src/js/iferestaurant.js"),o=(n(/*! ./js/open.js */"./src/js/open.js"),n(/*! ./js/dom.js */"./src/js/dom.js")),i=n(/*! ./js/animate.js */"./src/js/animate.js");n(/*! ./css/index.css */"./src/css/index.css");var s=new r.IfeRestaurant({cash:1e6,seats:1,staff:[]}),c=r.singleCook.getCook("老李",1e4),a=r.singleWaiter.getWaiter("小王",8e3),u=document.querySelector("#btn");s.hire(c),s.hire(a),(0,o.createDomQueue)(),u.onclick=i.customerIn},"./src/js/animate.js":
/*!***************************!*\
  !*** ./src/js/animate.js ***!
  \***************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.waiterBack=t.waiterMove=t.customerOut=t.customerIn=void 0;var o=n(/*! ./open.js */"./src/js/open.js");function i(){var e=document.querySelector("#waiter");e.style.left="330px",e.style.top="350px"}t.customerIn=function(){var e=document.querySelectorAll("#queue img");if(e[0]){e[0].style.position="absolute";var t=e[0].offsetLeft,n=e[0].offsetTop,r=setInterval(function(){470!==t&&(t+=1,e[0].style.left=t+"px"),40!==n&&(e[0].style.top=n+++"px"),470===t&&40===n&&(i(),(0,o.operating)(),clearInterval(r))},10)}},t.customerOut=function(){var e=document.querySelectorAll("#queue img"),t=document.querySelector("#content"),n=document.querySelector("#queue");if(e[0]){var r=e[0];r.style.top="300px",n.removeChild(r),t.appendChild(r);var o=r.offsetTop;setInterval(function(){o<640?r.style.top=o+++"px":t.contains(r)&&t.removeChild(r)},5)}},t.waiterMove=i,t.waiterBack=function(){var e=document.querySelector("#waiter");console.log("i am back"),e.style.left="310px",e.style.top="50px"}},"./src/js/customerQueue.js":
/*!*********************************!*\
  !*** ./src/js/customerQueue.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.customerQueue=void 0;var r=n(/*! ./iferestaurant.js */"./src/js/iferestaurant.js"),o=[new r.Customer,new r.Customer,new r.Customer,new r.Customer];t.customerQueue=o},"./src/js/delay.js":
/*!*************************!*\
  !*** ./src/js/delay.js ***!
  \*************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=function(t){return new Promise(function(e){setTimeout(e,t)})}},"./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createDomQueue=void 0;var r=n(/*! ./customerQueue.js */"./src/js/customerQueue.js"),o=n(/*! ../images/customer.jpg */"./src/images/customer.jpg"),i=document.querySelector("#queue");t.createDomQueue=function(){for(var e in r.customerQueue){var t=document.createElement("img");t.src=o,t.style.width="80px",i.appendChild(t)}}},"./src/js/iferestaurant.js":
/*!*********************************!*\
  !*** ./src/js/iferestaurant.js ***!
  \*********************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.menu=t.Customer=t.Dishes=t.singleCook=t.singleWaiter=t.Staff=t.IfeRestaurant=void 0;var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=n(/*! ./delay.js */"./src/js/delay.js");function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(e){a(this,t),this.cash=e.cash||1e6,this.seats=e.seats||1,this.staff=e.staff||[]}return r(t,[{key:"hire",value:function(e){this.staff.push(e)}},{key:"fire",value:function(t){this.staff=this.staff.filter(function(e){return e.name!==t})}}]),t}(),u=1,l=function(){function n(e,t){a(this,n),this.name=e,this.salery=t,this.id=u++}return r(n,[{key:"finishWork",value:function(){}}]),n}(),d=function(e){function o(e,t,n){a(this,o);var r=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t,u));return r.status="空闲中",r}return c(o,l),r(o,[{key:"finishWork",value:function(e){var n=e.shift(),r=this;return Promise.resolve().then(function(){if(n){console.log("烹饪中......");var e=n.cookingTime,t=setInterval(function(){r.status="正在做"+n.name+",还需要"+(e-1)+"s",0===--e&&clearInterval(t)},1e3)}return(0,i.delay)(1e3*n.cookingTime)}).then(function(){return console.log(n.name+"做好了，上菜！"),r.status="空闲中",f.getWaiter().finishWork(n.name),(0,i.delay)(50)})}}],[{key:"getCook",value:function(e,t){return this.instance||(this.instance=new o(e,t)),this.instance}}]),o}(),f=function(e){function n(e,t){return a(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t,u))}return c(n,l),r(n,[{key:"finishWork",value:function(e){if(Array.isArray(e)){var t=[];for(var n in e)t.push(e[n].name);var r=t.join(",");console.log("顾客点了一份"+r),console.log("服务员：大厨，做一份"+r)}else console.log(e+"来了")}}],[{key:"getWaiter",value:function(e,t){return this.instance||(this.instance=new n(e,t)),this.instance}}]),n}(),p=function e(t,n,r,o){a(this,e),this.name=t,this.cost=n,this.price=r,this.cookingTime=o},h=[new p("麻辣小龙虾",30,58,5),new p("酸辣土豆丝",8,15,3),new p("肉末茄子",12,25,3),new p("水煮肉片",18,38,4),new p("酸菜鱼",25,52,4)];var v=function(){var e=[];for(var t in h){var n={};n.name=h[t].name,n.price=h[t].price,n.cookingTime=h[t].cookingTime,e.push(n)}return e}(),m=function(){function e(){a(this,e),this.dishes=[],this.needPay=0,this.count=[],this.eaten=0}return r(e,[{key:"order",value:function(){for(var e=Math.floor(5*Math.random())+1,t=0;t<e;t++){var n=Math.floor(Math.random()*v.length);this.dishes.push(v[n])}console.log("点餐中......")}},{key:"eat",value:function(){var e=this;this.eaten||console.log("顾客开始用餐......"),Promise.resolve().then(function(){return(0,i.delay)(3e3)}).then(function(){e.count.shift()}),e.eaten++}},{key:"pay",value:function(e){for(var t in e)this.needPay+=e[t].price;console.log("小二，结账"),console.log("一共"+this.needPay+"元"),console.log("-------顾客离开了-------")}}]),e}();t.IfeRestaurant=o,t.Staff=l,t.singleWaiter=f,t.singleCook=d,t.Dishes=p,t.Customer=m,t.menu=v},"./src/js/open.js":
/*!************************!*\
  !*** ./src/js/open.js ***!
  \************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.operating=t.waiter=t.cook=void 0;var r=n(/*! ./iferestaurant.js */"./src/js/iferestaurant.js"),l=n(/*! ./customerQueue.js */"./src/js/customerQueue.js"),d=n(/*! ./delay.js */"./src/js/delay.js"),f=n(/*! ./animate.js */"./src/js/animate.js"),p=new r.IfeRestaurant({cash:1e6,seats:1,staff:[]}),i=r.singleCook.getCook("老李",1e4),o=r.singleWaiter.getWaiter("小王",8e3),h=document.querySelector("#cash"),v=document.querySelector("#spare-seats"),s=document.querySelector("#cook-status"),m=document.querySelector("#todoList"),y=document.querySelector("#speak"),g=document.querySelector("#cus-status");p.hire(i),p.hire(o),t.cook=i,t.waiter=o,t.operating=function(){var u=l.customerQueue.shift();Promise.resolve().then(function(){u.order(),g.innerHTML="点餐中，还有3s点好";var r=3,o=setInterval(function(){if(--r)g.innerHTML="点餐中，还有"+r+"s点好";else{g.innerHTML="";var e=document.createElement("ul");e.textContent="点菜列表";for(var t=0;t<u.dishes.length;t++){var n=document.createElement("li");n.innerHTML=u.dishes[t].name,e.appendChild(n)}g.appendChild(e),clearInterval(o)}},1e3);return p.seats-=1,v.innerHTML="seats:"+p.seats,(0,d.delay)(3e3)}).then(function(){return o.finishWork(u.dishes),(0,f.waiterBack)(),(0,d.delay)(500)}).then(function(){var c=[].concat(u.dishes),a=document.createElement("ul");a.setAttribute("id","eat-list"),g.appendChild(a),function r(){for(var e in console.log("zuo cai la"),i.finishWork(u.dishes).then(function(){var i=c.shift();c.push(i),y.innerHTML=i.name+"来了";var s=g.querySelector("ul"),e=document.querySelectorAll("#seats ul li"),t=document.createElement("li");if((0,f.waiterMove)(),t.textContent=i.name+"(等待吃)",s.removeChild(e[0]),a.appendChild(t),setTimeout(function(){y.innerHTML=""},500),u.count.push(i),1<=u.count.length&&(function(){for(var o=document.querySelectorAll("#eat-list li"),e=function(e){var t=o[0],n=3;t.innerHTML=i.name+"...正在吃，剩余3s吃完";var r=setInterval(function(){--n?t.innerHTML=i.name+"...正在吃，剩余"+n+"吃完":(t.innerHTML=i.name+"...吃完了",t.parentNode===a&&a.removeChild(t),s.appendChild(t),clearInterval(r))},1e3)},t=0;t<o.length;t++)e()}(),u.eat()),0===u.dishes.length)var n=setInterval(function(){0===u.count.length&&(u.pay(c),g.innerHTML="顾客支付了"+u.needPay+"元然后离开了",Promise.resolve().then(function(){return(0,d.delay)(300)}).then(function(){g.innerHTML=""}),(0,f.customerOut)(),p.cash+=u.needPay,p.seats+=1,h.innerHTML="cash:"+p.cash,v.innerHTML="seats:"+p.seats,1<=p.seats&&l.customerQueue.length&&(0,f.customerIn)(),clearInterval(n))},500);else u.dishes.length&&(Promise.resolve().then(function(){return(0,d.delay)(500)}).then(function(){y.innerHTML="",(0,f.waiterBack)()}),r())}),m.innerHTML="代做菜品：",u.dishes){var t=document.createElement("li"),n=u.dishes[e].name;t.innerHTML=n,m.appendChild(t)}var o=setInterval(function(){s.innerHTML=i.status,l.customerQueue.length||clearInterval(o)},200)}()})}}});