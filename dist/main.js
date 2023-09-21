(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(252),n.b),l=c()(r()),p=s()(d);l.push([e.id,`* {\n    margin: 0px;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(${p});\n    gap: 50px;\n}\n\nheader,\nfooter {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    background-color: orange;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%;\n    height: 47px;\n}\n\n.page {\n    font-size: 2em;\n    background-color: rgb(240, 204, 137);\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.page:hover {\n    border: 2px solid rgb(192, 131, 0);\n    cursor: pointer;\n}\n\n#content {\n    background-color: rgb(240, 204, 137);\n    border-radius: 50px;\n    display: flex;\n    flex-direction:column;\n    align-items: center;\n    justify-self: center;\n    gap: 2em;\n    padding: 20px;\n    max-width: 1000px;\n    width: 80vw;\n    min-width: 600px;\n}\n\nfooter {\n    align-items: center;\n}\n\n.titleStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 10px;\n    border-radius: 100px; \n    text-align: center;\n    font-size: 35px;\n}\n\n.homeContainterStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 20px;\n    border-radius: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    font-size: 20px\n}\n.homeContainterStyle > h4 {\n    font-size: 30px;\n}\n\n.menuContainerStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 20px;\n    border-radius: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    text-align: center;\n    font-size: 20px;\n    gap: 10px;\n}\n\n.menuContainerStyle > img {\n    width: 20em;\n    border-radius: 20px;\n    border: 2px solid yellow;\n}\n`,""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},252:(e,t,n)=>{e.exports=n.p+"6f8b31ca656afd6c9449.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};function f(){const e=document.createElement("h1");e.textContent="Resturante de Naranja",e.classList.add("titleStyle");const t=document.createElement("div");t.classList.add("homeContainterStyle");const n=document.createElement("h4");n.textContent="Location";const o=document.createElement("p");o.textContent="1800 orange grotto, Juice, Florida",t.appendChild(n),t.appendChild(o);const r=document.createElement("div");r.classList.add("homeContainterStyle");const a=document.createElement("h4");a.textContent="Hours";const c=document.createElement("p"),i=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p");c.textContent="Monday: 10am - 10pm",i.textContent="Tuesday: 10am - 10pm",s.textContent="Wednesday: 10am - 10pm",d.textContent="Thursday: 10am - 10pm",l.textContent="Friday: 10am - 10pm",p.textContent="Saturday: 11am - 9pm",u.textContent="Sunday: Closed",r.append(a,c,i,s,d,l,p,u);const m=document.createElement("div");m.classList.add("homeContainterStyle");const h=document.createElement("p");return h.textContent="This is the most wonderous resturant in the world. We serve the best oranges that will get you wnating to come back for more and more! Come down to Resturante de Naranja to partake in our supreme cuisine.",m.appendChild(h),{title:e,statementContainer:m,locationContainer:t,hoursContainer:r}}function g(){const e=document.createElement("h1");e.textContent="Menu",e.classList.add("titleStyle");const t=document.createElement("div");t.classList.add("menuContainerStyle");const n=document.createElement("h4");n.textContent="The Classic Orange";const o=document.createElement("img");o.src="../src/oranges.jpg",o.alt="oranges";const r=document.createElement("p");r.textContent="The classic orange everyone knows and loves. Our oranges are locally grown and are the most fresh and juicy fruits you will ever soak your teeth in.";const a=document.createElement("h5");a.textContent="Price: $10",t.append(n,r,a,o);const c=document.createElement("div");c.classList.add("menuContainerStyle");const i=document.createElement("h4");i.textContent="Sicilian Whole Orange Cake";const s=document.createElement("img");s.src="../src/orangeCake.jpeg",s.alt="orangeCake";const d=document.createElement("p");d.textContent="A cake made out of oranges with a divine smell";const l=document.createElement("h5");return l.textContent="Price: $25",c.append(i,d,l,s),{title:e,orangesContainer:t,cakeContainer:c}}function C(){const e=document.createElement("h1");e.textContent="Contact",e.classList.add("titleStyle");const t=document.createElement("div");t.classList.add("menuContainerStyle");const n=document.createElement("h4");n.textContent="Store Contact";const o=document.createElement("p");o.textContent="Number: (305)-454-2901";const r=document.createElement("p");r.textContent="naranjaRes@gmail.com";const a=document.createElement("img");a.src="../src/mcDonalds.jpeg",a.alt="image",t.append(n,o,r,a);const c=document.createElement("div");c.classList.add("menuContainerStyle");const i=document.createElement("h4");i.textContent="Owner Contact";const s=document.createElement("p");s.textContent="Number: (305)-431-0945";const d=document.createElement("p");d.textContent="JynxBlack@gmail.com";const l=document.createElement("img");return l.src="../src/owner.jpg",l.alt="owner",c.append(i,s,d,l),{title:e,storeContactContainer:t,ownerContainer:c}}h.styleTagTransform=u(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,n.p,n.p,n.p,n.p;const x=document.querySelector("#content");x.appendChild(f().title),x.appendChild(f().statementContainer),x.appendChild(f().hoursContainer),x.appendChild(f().locationContainer),document.querySelectorAll(".page").forEach((e=>{e.addEventListener("click",(()=>{for(;x.firstChild;)x.removeChild(x.firstChild);"Home"==e.textContent?(x.appendChild(f().title),x.appendChild(f().statementContainer),x.appendChild(f().hoursContainer),x.appendChild(f().locationContainer)):"Menu"==e.textContent?(x.appendChild(g().title),x.appendChild(g().orangesContainer),x.appendChild(g().cakeContainer)):(x.appendChild(C().title),x.appendChild(C().storeContactContainer),x.appendChild(C().ownerContainer))}))}))})()})();