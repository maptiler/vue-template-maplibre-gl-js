(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={index:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02a8":function(e,t,n){},"0383":function(e,t,n){},"3ea2":function(e,t,n){"use strict";n("7869")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app"};function o(e,t,n,o,c,u){var i=Object(r["k"])("Navbar"),l=Object(r["k"])("Map");return Object(r["h"])(),Object(r["b"])("div",a,[Object(r["d"])(i),Object(r["d"])(l)])}var c=function(e){return Object(r["j"])("data-v-12ff8789"),e=e(),Object(r["i"])(),e},u={class:"heading"},i=c((function(){return Object(r["c"])("h1",null,"This is my map App",-1)})),l=[i];function p(e,t,n,a,o,c){return Object(r["h"])(),Object(r["b"])("div",u,l)}var s={name:"Navbar"},f=(n("3ea2"),n("6b0d")),b=n.n(f);const d=b()(s,[["render",p],["__scopeId","data-v-12ff8789"]]);var v=d,j=function(e){return Object(r["j"])("data-v-cf3ae544"),e=e(),Object(r["i"])(),e},O={class:"map-wrap"},m=j((function(){return Object(r["c"])("a",{href:"https://www.maptiler.com",class:"watermark"},[Object(r["c"])("img",{src:"https://api.maptiler.com/resources/logo.svg",alt:"MapTiler logo"})],-1)})),h={class:"map",ref:"mapContainer"};function g(e,t,n,a,o,c){return Object(r["h"])(),Object(r["b"])("div",O,[m,Object(r["c"])("div",h,null,512)])}var y=n("b7d4"),w={name:"Map",setup:function(){var e=Object(r["l"])(null),t=Object(r["l"])(null);return Object(r["f"])((function(){var n="dr1MVIVb840BbU3dGpV8";if(null==n)throw new Error("You need to configure env VUE_APP_API_KEY first, see README");var a={lng:139.753,lat:35.6844,zoom:14};t.value=Object(r["e"])(new y["Map"]({container:e.value,style:"https://api.maptiler.com/maps/streets/style.json?key=".concat(n),center:[a.lng,a.lat],zoom:a.zoom})),t.value.addControl(new y["NavigationControl"],"top-right"),new y["Marker"]({color:"#FF0000"}).setLngLat([139.7525,35.6841]).addTo(t.value)})),Object(r["g"])((function(){var e;null===(e=t.value)||void 0===e||e.remove()})),{map:t,mapContainer:e}}};n("6363");const _=b()(w,[["render",g],["__scopeId","data-v-cf3ae544"]]);var M=_,P={name:"App",components:{Navbar:v,Map:M}};n("6404");const k=b()(P,[["render",o]]);var x=k;Object(r["a"])(x).mount("#app")},6363:function(e,t,n){"use strict";n("02a8")},6404:function(e,t,n){"use strict";n("0383")},7869:function(e,t,n){}});
//# sourceMappingURL=index.0688a65d.js.map