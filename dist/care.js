!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define("care",["vue"],n):"object"==typeof exports?exports.care=n(require("vue")):e.care=n(e.Vue)}(this,function(e){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="D:\\mine\\vue-care\\dist",n(n.s=0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),s=r(o),i=t(2),a=r(i),u=[a.default],d=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e._care_installed||(e._care_installed=!0,u.map(function(n){e.component(n.name,n)}))},c={version:"0.0.1",install:d};s.default.use(c),n.default=c},function(n,t){n.exports=e},function(e,n,t){"use strict";function r(e){a||t(3)}Object.defineProperty(n,"__esModule",{value:!0});var o=t(9),s=t.n(o),i=t(10),a=!1,u=t(8),d=r,c=u(s.a,i.a,d,null,null);c.options.__file="src\\components\\progress-bar.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] progress-bar.vue: functional components are not supported with templates, they should use render functions."),n.default=c.exports},function(e,n,t){var r=t(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(6)("5c8c518d",r,!1)},function(e,n,t){n=e.exports=t(5)(void 0),n.push([e.i,"\n.progress-bar {\n  display: inline-block;\n  width: 110px;\n  height: 110px;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.progress-bar>div {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.progress-bar>.similar-num {\n  width: 90px;\n  height: 90px;\n  line-height: 90px;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 50%;\n  overflow: hidden;\n  top: 10px;\n  left: 10px;\n  z-index: 2;\n}\n",""])},function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var s=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),n.push(i))}},n}},function(e,n,t){function r(e){for(var n=0;n<e.length;n++){var t=e[n],r=c[t.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](t.parts[o]);for(;o<t.parts.length;o++)r.parts.push(s(t.parts[o]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{for(var i=[],o=0;o<t.parts.length;o++)i.push(s(t.parts[o]));c[t.id]={id:t.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function s(e){var n,t,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(g){var s=l++;r=f||(f=o()),n=i.bind(null,r,s,!1),t=i.bind(null,r,s,!0)}else r=o(),n=a.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}function i(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var s=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(s,i[n]):e.appendChild(s)}}function a(e,n){var t=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=t(7),c={},p=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,l=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){v=t;var o=d(e,n);return r(o),function(n){for(var t=[],s=0;s<o.length;s++){var i=o[s],a=c[i.id];a.refs--,t.push(a)}n?(o=d(e,n),r(o)):o=[];for(var s=0;s<t.length;s++){var a=t[s];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){e.exports=function(e,n){for(var t=[],r={},o=0;o<n.length;o++){var s=n[o],i=s[0],a=s[1],u=s[2],d=s[3],c={id:e+":"+o,css:a,media:u,sourceMap:d};r[i]?r[i].parts.push(c):t.push(r[i]={id:i,parts:[c]})}return t}},function(e,n){e.exports=function(e,n,t,r,o){var s,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,i=e.default);var u="function"==typeof i?i.options:i;n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),r&&(u._scopeId=r);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=d):t&&(d=t),d){var c=u.functional,p=c?u.render:u.beforeCreate;c?u.render=function(e,n){return d.call(n),p(e,n)}:u.beforeCreate=p?[].concat(p,d):[d]}return{esModule:s,exports:i,options:u}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"progress-bar",data:function(){return{}},props:{progress:{type:Number,default:0,required:!0,validator:function(e){return e<=100&&e>=0}}}}},function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"progress-bar"},[t("div",{style:{borderLeft:"55px solid #2b2b2b",background:"transparent",zIndex:e.progress>50?0:1}}),e._v(" "),t("div",{style:{borderRight:"55px solid "+(e.progress>50?"rgb("+(130+parseInt(e.progress))+",85,91)":"#2b2b2b"),background:"transparent"}}),e._v(" "),t("div",{style:{borderLeft:"55px solid rgb("+(130+parseInt(e.progress))+",85,91)",background:"transparent",transform:"rotate("+3.6*e.progress+"deg)"}}),e._v(" "),t("div",{staticClass:"similar-num",style:{background:"#404040"}},[e._v(e._s(e.progress)+"%")])])},o=[];r._withStripped=!0,n.a={render:r,staticRenderFns:o}}])});