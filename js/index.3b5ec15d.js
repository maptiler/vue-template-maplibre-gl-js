(function(e){function t(t){for(var a,i,c=t[0],l=t[1],u=t[2],p=0,b=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={index:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"078b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n={class:"app"};function o(e,t,r,o,i,c){var l=Object(a["l"])("Navbar"),u=Object(a["l"])("Map");return Object(a["i"])(),Object(a["b"])("div",n,[Object(a["e"])(l),Object(a["e"])(u)])}var i={class:"heading"},c=Object(a["d"])('<a href="https://documentation.maptiler.com/hc/en-us/articles/4413873409809-how-to-display-a-map-in-vue-js-using-maplibre-gl-js?utm_medium=referral&amp;utm_source=github&amp;utm_campaign=2022-05%20%7C%20js%20frameworks%20%7C%20vue.js%20" class="btn btn-primary tutorial-button" data-v-4be48be7><svg width="25" height="25" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4be48be7><path d="M13.1618 75.4536C2.1417 64.4335 2.14171 46.5664 13.1618 35.5463L35.9431 12.7651C46.9632 1.74497 64.8303 1.74498 75.8504 12.7651L98.6317 35.5464C109.652 46.5665 109.652 64.4335 98.6316 75.4536L75.8503 98.2349C64.8303 109.255 46.9632 109.255 35.9431 98.2349L13.1618 75.4536Z" fill="#3174ff" stroke="#fff" stroke-width="8" data-v-4be48be7></path><path d="M59.3986 52.5H29.3987V58.4999H59.3986V52.5ZM65.3986 40.5H29.3987V46.5H65.3986V40.5ZM29.3987 70.4999H53.3986V64.4999H29.3987V70.4999Z" fill="#fff" data-v-4be48be7></path><path d="M59.3911 64.875V70.5H65.0161L81.606 53.9101L75.9811 48.2851L59.3911 64.875ZM85.956 49.5601C86.541 48.9751 86.541 48.0301 85.956 47.4451L82.446 43.9351C81.861 43.3501 80.916 43.3501 80.3311 43.9351L77.5861 46.6801L83.211 52.3051L85.956 49.5601Z" fill="#fff" data-v-4be48be7></path></svg> Step-by-step tutorial </a><h1 data-v-4be48be7>This is my map App</h1><a href="https://github.com/maptiler/vue-template-maplibre-gl-js" class="github-corner" aria-label="View source on GitHub" data-v-4be48be7><svg width="50" height="50" viewBox="0 0 50 50" fill="none" style="position:absolute;top:14px;border:0;right:17px;" xmlns="http://www.w3.org/2000/svg" data-v-4be48be7><path d="M25 0C11.1937 0 0 11.1938 0 25C0 36.7146 8.06667 46.5167 18.9417 49.2292C18.825 48.8917 18.75 48.5 18.75 48.0146V43.7417C17.7354 43.7417 16.0354 43.7417 15.6083 43.7417C13.8979 43.7417 12.3771 43.0063 11.6396 41.6396C10.8208 40.1208 10.6792 37.7979 8.65 36.3771C8.04792 35.9042 8.50625 35.3646 9.2 35.4375C10.4812 35.8 11.5437 36.6792 12.5437 37.9833C13.5396 39.2896 14.0083 39.5854 15.8687 39.5854C16.7708 39.5854 18.1208 39.5333 19.3917 39.3333C20.075 37.5979 21.2562 36 22.7 35.2458C14.375 34.3896 10.4021 30.2479 10.4021 24.625C10.4021 22.2042 11.4333 19.8625 13.1854 17.8896C12.6104 15.9313 11.8875 11.9375 13.4062 10.4167C17.1521 10.4167 19.4167 12.8458 19.9604 13.5021C21.8271 12.8625 23.8771 12.5 26.0312 12.5C28.1896 12.5 30.2479 12.8625 32.1187 13.5063C32.6562 12.8542 34.9229 10.4167 38.6771 10.4167C40.2021 11.9396 39.4708 15.95 38.8896 17.9042C40.6312 19.8729 41.6562 22.2083 41.6562 24.625C41.6562 30.2438 37.6896 34.3833 29.3771 35.2438C31.6646 36.4375 33.3333 39.7917 33.3333 42.3188V48.0146C33.3333 48.2313 33.2854 48.3875 33.2604 48.5729C43.0021 45.1583 50 35.9083 50 25C50 11.1938 38.8062 0 25 0Z" fill="white" data-v-4be48be7></path></svg></a>',3),l=[c];function u(e,t,r,n,o,c){return Object(a["i"])(),Object(a["b"])("div",i,l)}var s={name:"Navbar"},p=(r("ed6f"),r("d959")),b=r.n(p);const f=b()(s,[["render",u],["__scopeId","data-v-4be48be7"]]);var d=f,v=function(e){return Object(a["k"])("data-v-cf3ae544"),e=e(),Object(a["j"])(),e},h={class:"map-wrap"},m=v((function(){return Object(a["c"])("a",{href:"https://www.maptiler.com",class:"watermark"},[Object(a["c"])("img",{src:"https://api.maptiler.com/resources/logo.svg",alt:"MapTiler logo"})],-1)})),g={class:"map",ref:"mapContainer"};function j(e,t,r,n,o,i){return Object(a["i"])(),Object(a["b"])("div",h,[m,Object(a["c"])("div",g,null,512)])}var w=r("b7d4"),C={name:"Map",setup:function(){var e=Object(a["m"])(null),t=Object(a["m"])(null);return Object(a["g"])((function(){var r="0FwjVpfoctS74Le98wMD";if(null==r)throw new Error("You need to configure env VUE_APP_API_KEY first, see README");var n={lng:139.753,lat:35.6844,zoom:14};t.value=Object(a["f"])(new w["Map"]({container:e.value,style:"https://api.maptiler.com/maps/streets/style.json?key=".concat(r),center:[n.lng,n.lat],zoom:n.zoom})),t.value.addControl(new w["NavigationControl"],"top-right"),new w["Marker"]({color:"#FF0000"}).setLngLat([139.7525,35.6841]).addTo(t.value)})),Object(a["h"])((function(){var e;null===(e=t.value)||void 0===e||e.remove()})),{map:t,mapContainer:e}}};r("6363");const O=b()(C,[["render",j],["__scopeId","data-v-cf3ae544"]]);var y=O,M={name:"App",components:{Navbar:d,Map:y}};r("6404");const _=b()(M,[["render",o]]);var L=_;Object(a["a"])(L).mount("#app")},6363:function(e,t,r){"use strict";r("078b")},6404:function(e,t,r){"use strict";r("bd81")},"7f3e":function(e,t,r){},bd81:function(e,t,r){},ed6f:function(e,t,r){"use strict";r("7f3e")}});
//# sourceMappingURL=index.3b5ec15d.js.map