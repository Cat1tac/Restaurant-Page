(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(252),t.b),l=i()(o()),p=s()(d);l.push([e.id,`* {\n    margin: 0px;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(${p});\n    gap: 50px;\n}\n\nheader,\nfooter {\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    background-color: orange;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%;\n    height: 47px;\n}\n\n.page {\n    font-size: 2em;\n    background-color: rgb(240, 204, 137);\n    padding: 5px;\n    border-radius: 10px;\n}\n\n.page:hover {\n    border: 2px solid rgb(192, 131, 0);\n    cursor: pointer;\n}\n\n#content {\n    background-color: rgb(240, 204, 137);\n    border-radius: 50px;\n    display: flex;\n    flex-direction:column;\n    align-items: center;\n    justify-self: center;\n    gap: 2em;\n    padding: 20px;\n    max-width: 1000px;\n    width: 80vw;\n    min-width: 600px;\n}\n\nfooter {\n    align-items: center;\n}\n\n.titleStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 10px;\n    border-radius: 100px; \n    text-align: center;\n    font-size: 35px;\n}\n\n.homeContainterStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 20px;\n    border-radius: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    font-size: 20px\n}\n.homeContainterStyle > h4 {\n    font-size: 30px;\n}\n\n.menuContainerStyle {\n    border: 5px solid rgb(255, 166, 0);\n    background-color: rgb(222, 224, 76);\n    width: 400px;\n    height: fit-content;\n    padding: 20px;\n    border-radius: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    text-align: center;\n    font-size: 20px;\n    gap: 10px;\n}\n\n.menuContainerStyle > img {\n    width: 20em;\n    border-radius: 20px;\n    border: 2px solid yellow;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},252:(e,n,t)=>{e.exports=t.p+"6f8b31ca656afd6c9449.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};function h(){const e=document.createElement("h1");e.textContent="Resturante de Naranja",e.classList.add("titleStyle");const n=document.createElement("div");n.classList.add("homeContainterStyle");const t=document.createElement("h4");t.textContent="Location";const r=document.createElement("p");r.textContent="1800 orange grotto, Juice, Florida",n.appendChild(t),n.appendChild(r);const o=document.createElement("div");o.classList.add("homeContainterStyle");const a=document.createElement("h4");a.textContent="Hours";const i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p"),l=document.createElement("p"),p=document.createElement("p"),u=document.createElement("p");i.textContent="Monday: 10am - 10pm",c.textContent="Tuesday: 10am - 10pm",s.textContent="Wednesday: 10am - 10pm",d.textContent="Thursday: 10am - 10pm",l.textContent="Friday: 10am - 10pm",p.textContent="Saturday: 11am - 9pm",u.textContent="Sunday: Closed",o.append(a,i,c,s,d,l,p,u);const m=document.createElement("div");m.classList.add("homeContainterStyle");const f=document.createElement("p");return f.textContent="This is the most wonderous resturant in the world. We serve the best oranges that will get you wnating to come back for more and more! Come down to Resturante de Naranja to partake in our supreme cuisine.",m.appendChild(f),{title:e,statementContainer:m,locationContainer:n,hoursContainer:o}}function g(){const e=document.createElement("h1");e.textContent="Menu",e.classList.add("titleStyle");const n=document.createElement("div");n.classList.add("menuContainerStyle");const t=document.createElement("h4");t.textContent="The Classic Orange";const r=document.createElement("img");r.src="../src/oranges.jpg";const o=document.createElement("p");o.textContent="The classic orange everyone knows and loves. Our oranges are locally grown and are the most fresh and juicy fruits you will ever soak your teeth in.";const a=document.createElement("h5");a.textContent="Price: $10",n.append(t,o,a,r);const i=document.createElement("div");i.classList.add("menuContainerStyle");const c=document.createElement("h4");c.textContent="Sicilian Whole Orange Cake";const s=document.createElement("img");s.src="../src/orangeCake.jpeg";const d=document.createElement("p");d.textContent="A cake made out of oranges with a divine smell";const l=document.createElement("h5");return l.textContent="Price: $25",i.append(c,d,l,s),{title:e,orangesContainer:n,cakeContainer:i}}f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const x=document.querySelector("#content");x.appendChild(h().title),x.appendChild(h().statementContainer),x.appendChild(h().hoursContainer),x.appendChild(h().locationContainer),document.querySelectorAll(".page").forEach((e=>{e.addEventListener("click",(()=>{for(;x.firstChild;)x.removeChild(x.firstChild);"Home"==e.textContent?(x.appendChild(h().title),x.appendChild(h().statementContainer),x.appendChild(h().hoursContainer),x.appendChild(h().locationContainer)):"Menu"==e.textContent&&(x.appendChild(g().title),x.appendChild(g().orangesContainer),x.appendChild(g().cakeContainer))}))}))})()})();