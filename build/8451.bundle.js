"use strict";(self.webpackChunkwsfs=self.webpackChunkwsfs||[]).push([[8451,832],{60832:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var n=t(23132),o=t(68664),c=t.n(o),i=["cdnSuffix","cdnUrl","countryCode","style","svg"];function l(){return l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e){e.cdnSuffix;var r=e.cdnUrl,t=e.countryCode,o=e.style,c=e.svg,s=f(e,i);if("string"!=typeof t)return null;if(c){var u="".concat(r).concat(t.toLowerCase(),".").concat("svg");return n.createElement("img",l({},s,{src:u,style:a({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},o)}))}var p=t.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)}));return n.createElement("span",l({role:"img"},s,{style:a({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},o)}),p)}p.propTypes={cdnUrl:c().string,countryCode:c().string.isRequired,style:c().object,svg:c().bool},p.defaultProps={cdnUrl:"https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/",svg:!1};const b=p}}]);