"use strict";(self.webpackChunkwsfs=self.webpackChunkwsfs||[]).push([[3872],{64236:(e,t,r)=>{r.d(t,{c:()=>V,U:()=>z});var a=r(32612),o=r(45072),n=(r(68664),r(76460),r(52052));function i(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}function c(e){var t=function(t){var r=e(t);return t.css?(0,o.c)({},(0,n.c)(r,e((0,o.c)({theme:t.theme},t.css))),i(t.css,[e.filterProps])):t.sx?(0,o.c)({},(0,n.c)(r,e((0,o.c)({theme:t.theme},t.sx))),i(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat((0,a.c)(e.filterProps)),t}const l=c;const s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?(0,n.c)(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a};var u=r(52536),d=r(94756);function p(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}const m=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,o=e.themeKey,n=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=p(e.theme,o)||{};return(0,d.l)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=p(i,e)||e,n&&(t=n(t))),!1===a?t:(0,u.c)({},a,t)}))};return i.propTypes={},i.filterProps=[t],i};function f(e){return"number"!=typeof e?e:"".concat(e,"px solid")}const v=s(m({prop:"border",themeKey:"borders",transform:f}),m({prop:"borderTop",themeKey:"borders",transform:f}),m({prop:"borderRight",themeKey:"borders",transform:f}),m({prop:"borderBottom",themeKey:"borders",transform:f}),m({prop:"borderLeft",themeKey:"borders",transform:f}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"}));const h=s(m({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"}));const g=s(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"}));const b=s(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"}));const y=s(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"}));const x=s(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}));const k=m({prop:"boxShadow",themeKey:"shadows"});function w(e){return e<=1?"".concat(100*e,"%"):e}var C=m({prop:"width",transform:w}),E=m({prop:"maxWidth",transform:w}),L=m({prop:"minWidth",transform:w}),S=m({prop:"height",transform:w}),R=m({prop:"maxHeight",transform:w}),A=m({prop:"minHeight",transform:w});m({prop:"size",cssProperty:"width",transform:w}),m({prop:"size",cssProperty:"height",transform:w});const I=s(C,E,L,S,R,A,m({prop:"boxSizing"}));var N=r(50670);const $=s(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"}));var T=r(41968),z=l(s(v,h,g,b,y,x,k,I,N.c,$));const V=(0,T.c)("div")(z,{name:"MuiBox"})},34192:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(45072),o=r(31024),n=r(23132),i=(r(68664),r(14971)),c=r(45472),l=r(19028),s=n.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,l=e.classes,s=e.className,u=e.component,d=void 0===u?"hr":u,p=e.flexItem,m=void 0!==p&&p,f=e.light,v=void 0!==f&&f,h=e.orientation,g=void 0===h?"horizontal":h,b=e.role,y=void 0===b?"hr"!==d?"separator":void 0:b,x=e.variant,k=void 0===x?"fullWidth":x,w=(0,o.c)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(d,(0,a.c)({className:(0,i.default)(l.root,s,"fullWidth"!==k&&l[k],c&&l.absolute,m&&l.flexItem,v&&l.light,"vertical"===g&&l.vertical),role:y,ref:t},w))}));const u=(0,c.c)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,l.W4)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},57712:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(45072),o=r(31024),n=r(23132),i=(r(68664),r(14971)),c=r(45472),l=r(8428),s=n.forwardRef((function(e,t){var r=e.classes,c=e.className,s=(0,o.c)(e,["classes","className"]),u=n.useContext(l.c);return n.createElement("div",(0,a.c)({className:(0,i.default)(r.root,c,"flex-start"===u.alignItems&&r.alignItemsFlexStart),ref:t},s))}));const u=(0,c.c)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(s)},87032:(e,t,r)=>{r.d(t,{c:()=>x});var a=r(45072),o=r(31024),n=r(23132),i=(r(68664),r(14971)),c=(r(76460),r(95051)),l=r(95280);const s=(0,l.c)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=(0,l.c)(n.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var d=r(45472);const p=(0,d.c)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,r=e.classes,a=e.fontSize;return n.createElement("div",{className:(0,i.default)(r.root,t&&r.checked)},n.createElement(s,{fontSize:a}),n.createElement(u,{fontSize:a,className:r.layer}))}));var m=r(19028),f=r(84056),v=r(67652),h=r(30156),g=n.createElement(p,{checked:!0}),b=n.createElement(p,null),y=n.forwardRef((function(e,t){var r=e.checked,l=e.classes,s=e.color,u=void 0===s?"secondary":s,d=e.name,p=e.onChange,m=e.size,y=void 0===m?"medium":m,x=(0,o.c)(e,["checked","classes","color","name","onChange","size"]),k=(0,h.c)(),w=r,C=(0,v.c)(p,k&&k.onChange),E=d;return k&&(void 0===w&&(w=k.value===e.value),void 0===E&&(E=k.name)),n.createElement(c.c,(0,a.c)({color:u,type:"radio",icon:n.cloneElement(b,{fontSize:"small"===y?"small":"medium"}),checkedIcon:n.cloneElement(g,{fontSize:"small"===y?"small":"medium"}),classes:{root:(0,i.default)(l.root,l["color".concat((0,f.c)(u))]),checked:l.checked,disabled:l.disabled},name:E,checked:w,onChange:C,ref:t},x))}));const x=(0,d.c)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,m.W4)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,m.W4)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(y)},49316:(e,t,r)=>{r.d(t,{c:()=>p});var a=r(45072),o=r(32920),n=r(31024),i=r(23132),c=(r(68664),r(16872)),l=r(54539),s=r(22260),u=r(82880),d=r(88668);const p=i.forwardRef((function(e,t){var r=e.actions,p=e.children,m=e.name,f=e.value,v=e.onChange,h=(0,n.c)(e,["actions","children","name","value","onChange"]),g=i.useRef(null),b=(0,s.c)({controlled:f,default:e.defaultValue,name:"RadioGroup"}),y=(0,o.c)(b,2),x=y[0],k=y[1];i.useImperativeHandle(r,(function(){return{focus:function(){var e=g.current.querySelector("input:not(:disabled):checked");e||(e=g.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var w=(0,l.c)(t,g),C=(0,d.c)(m);return i.createElement(u.c.Provider,{value:{name:C,onChange:function(e){k(e.target.value),v&&v(e,e.target.value)},value:x}},i.createElement(c.c,(0,a.c)({role:"radiogroup",ref:w},h),p))}))},82880:(e,t,r)=>{r.d(t,{c:()=>o});var a=r(23132);const o=a.createContext()},30156:(e,t,r)=>{r.d(t,{c:()=>n});var a=r(23132),o=r(82880);function n(){return a.useContext(o.c)}},73876:(e,t,r)=>{r.d(t,{c:()=>N});var a=r(32612),o=r(32920),n=r(31024),i=r(45072),c=r(23132),l=(r(68664),r(14971)),s=(r(76460),r(45472)),u=r(59128),d=r(19028),p=r(7480),m=r(45704),f=r(74988),v=r(54539),h=r(84056),g=r(22260);const b=(0,s.c)((function(e){return{thumb:{"&$open":{"& $offset":{transform:"scale(1) translateY(-10px)"}}},open:{},offset:(0,i.c)({zIndex:1},e.typography.body2,{fontSize:e.typography.pxToRem(12),lineHeight:1.2,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),top:-34,transformOrigin:"bottom center",transform:"scale(0)",position:"absolute"}),circle:{display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:"50% 50% 50% 0",backgroundColor:"currentColor",transform:"rotate(-45deg)"},label:{color:e.palette.primary.contrastText,transform:"rotate(45deg)"}}}),{name:"PrivateValueLabel"})((function(e){var t=e.children,r=e.classes,a=e.className,o=e.open,n=e.value,i=e.valueLabelDisplay;return"off"===i?t:c.cloneElement(t,{className:(0,l.default)(t.props.className,(o||"on"===i)&&r.open,r.thumb)},c.createElement("span",{className:(0,l.default)(r.offset,a)},c.createElement("span",{className:r.circle},c.createElement("span",{className:r.label},n))))}));function y(e,t){return e-t}function x(e,t,r){return Math.min(Math.max(t,e),r)}function k(e,t){return e.reduce((function(e,r,a){var o=Math.abs(t-r);return null===e||o<e.distance||o===e.distance?{distance:o,index:a}:e}),null).index}function w(e,t){if(void 0!==t.current&&e.changedTouches){for(var r=0;r<e.changedTouches.length;r+=1){var a=e.changedTouches[r];if(a.identifier===t.current)return{x:a.clientX,y:a.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function C(e,t,r){return 100*(e-t)/(r-t)}function E(e,t,r){var a=Math.round((e-r)/t)*t+r;return Number(a.toFixed(function(e){if(Math.abs(e)<1){var t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}var a=e.toString().split(".")[1];return a?a.length:0}(t)))}function L(e){var t=e.values,r=e.source,a=e.newValue,o=e.index;if(t[o]===a)return r;var n=t.slice();return n[o]=a,n}function S(e){var t=e.sliderRef,r=e.activeIndex,a=e.setActive;t.current.contains(document.activeElement)&&Number(document.activeElement.getAttribute("data-index"))===r||t.current.querySelector('[role="slider"][data-index="'.concat(r,'"]')).focus(),a&&a(r)}var R={horizontal:{offset:function(e){return{left:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},"horizontal-reverse":{offset:function(e){return{right:"".concat(e,"%")}},leap:function(e){return{width:"".concat(e,"%")}}},vertical:{offset:function(e){return{bottom:"".concat(e,"%")}},leap:function(e){return{height:"".concat(e,"%")}}}},A=function(e){return e},I=c.forwardRef((function(e,t){var r=e["aria-label"],s=e["aria-labelledby"],d=e["aria-valuetext"],I=e.classes,N=e.className,$=e.color,T=void 0===$?"primary":$,z=e.component,V=void 0===z?"span":z,P=e.defaultValue,M=e.disabled,K=void 0!==M&&M,D=e.getAriaLabel,W=e.getAriaValueText,O=e.marks,B=void 0!==O&&O,F=e.max,j=void 0===F?100:F,H=e.min,G=void 0===H?0:H,U=e.name,Y=e.onChange,q=e.onChangeCommitted,X=e.onMouseDown,Z=e.orientation,J=void 0===Z?"horizontal":Z,Q=e.scale,_=void 0===Q?A:Q,ee=e.step,te=void 0===ee?1:ee,re=e.ThumbComponent,ae=void 0===re?"span":re,oe=e.track,ne=void 0===oe?"normal":oe,ie=e.value,ce=e.ValueLabelComponent,le=void 0===ce?b:ce,se=e.valueLabelDisplay,ue=void 0===se?"off":se,de=e.valueLabelFormat,pe=void 0===de?A:de,me=(0,n.c)(e,["aria-label","aria-labelledby","aria-valuetext","classes","className","color","component","defaultValue","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","scale","step","ThumbComponent","track","value","ValueLabelComponent","valueLabelDisplay","valueLabelFormat"]),fe=(0,u.c)(),ve=c.useRef(),he=c.useState(-1),ge=he[0],be=he[1],ye=c.useState(-1),xe=ye[0],ke=ye[1],we=(0,g.c)({controlled:ie,default:P,name:"Slider"}),Ce=(0,o.c)(we,2),Ee=Ce[0],Le=Ce[1],Se=Array.isArray(Ee),Re=Se?Ee.slice().sort(y):[Ee];Re=Re.map((function(e){return x(e,G,j)}));var Ae=!0===B&&null!==te?(0,a.c)(Array(Math.floor((j-G)/te)+1)).map((function(e,t){return{value:G+te*t}})):B||[],Ie=(0,p.c)(),Ne=Ie.isFocusVisible,$e=Ie.onBlurVisible,Te=Ie.ref,ze=c.useState(-1),Ve=ze[0],Pe=ze[1],Me=c.useRef(),Ke=(0,v.c)(Te,Me),De=(0,v.c)(t,Ke),We=(0,f.c)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));Ne(e)&&Pe(t),ke(t)})),Oe=(0,f.c)((function(){-1!==Ve&&(Pe(-1),$e()),ke(-1)})),Be=(0,f.c)((function(e){var t=Number(e.currentTarget.getAttribute("data-index"));ke(t)})),Fe=(0,f.c)((function(){ke(-1)})),je="rtl"===fe.direction,He=(0,f.c)((function(e){var t,r=Number(e.currentTarget.getAttribute("data-index")),a=Re[r],o=(j-G)/10,n=Ae.map((function(e){return e.value})),i=n.indexOf(a),c=je?"ArrowLeft":"ArrowRight",l=je?"ArrowRight":"ArrowLeft";switch(e.key){case"Home":t=G;break;case"End":t=j;break;case"PageUp":te&&(t=a+o);break;case"PageDown":te&&(t=a-o);break;case c:case"ArrowUp":t=te?a+te:n[i+1]||n[n.length-1];break;case l:case"ArrowDown":t=te?a-te:n[i-1]||n[0];break;default:return}if(e.preventDefault(),te&&(t=E(t,te,G)),t=x(t,G,j),Se){var s=t;t=L({values:Re,source:Ee,newValue:t,index:r}).sort(y),S({sliderRef:Me,activeIndex:t.indexOf(s)})}Le(t),Pe(r),Y&&Y(e,t),q&&q(e,t)})),Ge=c.useRef(),Ue=J;je&&"vertical"!==J&&(Ue+="-reverse");var Ye=function(e){var t,r,a=e.finger,o=e.move,n=void 0!==o&&o,i=e.values,c=e.source,l=Me.current.getBoundingClientRect(),s=l.width,u=l.height,d=l.bottom,p=l.left;if(t=0===Ue.indexOf("vertical")?(d-a.y)/u:(a.x-p)/s,-1!==Ue.indexOf("-reverse")&&(t=1-t),r=function(e,t,r){return(r-t)*e+t}(t,G,j),te)r=E(r,te,G);else{var m=Ae.map((function(e){return e.value}));r=m[k(m,r)]}r=x(r,G,j);var f=0;if(Se){var v=r;f=(r=L({values:i,source:c,newValue:r,index:f=n?Ge.current:k(i,r)}).sort(y)).indexOf(v),Ge.current=f}return{newValue:r,activeIndex:f}},qe=(0,f.c)((function(e){var t=w(e,ve);if(t){var r=Ye({finger:t,move:!0,values:Re,source:Ee}),a=r.newValue,o=r.activeIndex;S({sliderRef:Me,activeIndex:o,setActive:be}),Le(a),Y&&Y(e,a)}})),Xe=(0,f.c)((function(e){var t=w(e,ve);if(t){var r=Ye({finger:t,values:Re,source:Ee}).newValue;be(-1),"touchend"===e.type&&ke(-1),q&&q(e,r),ve.current=void 0;var a=(0,m.c)(Me.current);a.removeEventListener("mousemove",qe),a.removeEventListener("mouseup",Xe),a.removeEventListener("touchmove",qe),a.removeEventListener("touchend",Xe)}})),Ze=(0,f.c)((function(e){e.preventDefault();var t=e.changedTouches[0];null!=t&&(ve.current=t.identifier);var r=w(e,ve),a=Ye({finger:r,values:Re,source:Ee}),o=a.newValue,n=a.activeIndex;S({sliderRef:Me,activeIndex:n,setActive:be}),Le(o),Y&&Y(e,o);var i=(0,m.c)(Me.current);i.addEventListener("touchmove",qe),i.addEventListener("touchend",Xe)}));c.useEffect((function(){var e=Me.current;e.addEventListener("touchstart",Ze);var t=(0,m.c)(e);return function(){e.removeEventListener("touchstart",Ze),t.removeEventListener("mousemove",qe),t.removeEventListener("mouseup",Xe),t.removeEventListener("touchmove",qe),t.removeEventListener("touchend",Xe)}}),[Xe,qe,Ze]);var Je=(0,f.c)((function(e){X&&X(e),e.preventDefault();var t=w(e,ve),r=Ye({finger:t,values:Re,source:Ee}),a=r.newValue,o=r.activeIndex;S({sliderRef:Me,activeIndex:o,setActive:be}),Le(a),Y&&Y(e,a);var n=(0,m.c)(Me.current);n.addEventListener("mousemove",qe),n.addEventListener("mouseup",Xe)})),Qe=C(Se?Re[0]:G,G,j),_e=C(Re[Re.length-1],G,j)-Qe,et=(0,i.c)({},R[Ue].offset(Qe),R[Ue].leap(_e));return c.createElement(V,(0,i.c)({ref:De,className:(0,l.default)(I.root,I["color".concat((0,h.c)(T))],N,K&&I.disabled,Ae.length>0&&Ae.some((function(e){return e.label}))&&I.marked,!1===ne&&I.trackFalse,"vertical"===J&&I.vertical,"inverted"===ne&&I.trackInverted),onMouseDown:Je},me),c.createElement("span",{className:I.rail}),c.createElement("span",{className:I.track,style:et}),c.createElement("input",{value:Re.join(","),name:U,type:"hidden"}),Ae.map((function(e,t){var r,a=C(e.value,G,j),o=R[Ue].offset(a);return r=!1===ne?-1!==Re.indexOf(e.value):"normal"===ne&&(Se?e.value>=Re[0]&&e.value<=Re[Re.length-1]:e.value<=Re[0])||"inverted"===ne&&(Se?e.value<=Re[0]||e.value>=Re[Re.length-1]:e.value>=Re[0]),c.createElement(c.Fragment,{key:e.value},c.createElement("span",{style:o,"data-index":t,className:(0,l.default)(I.mark,r&&I.markActive)}),null!=e.label?c.createElement("span",{"aria-hidden":!0,"data-index":t,style:o,className:(0,l.default)(I.markLabel,r&&I.markLabelActive)},e.label):null)})),Re.map((function(e,t){var a=C(e,G,j),o=R[Ue].offset(a);return c.createElement(le,{key:t,valueLabelFormat:pe,valueLabelDisplay:ue,className:I.valueLabel,value:"function"==typeof pe?pe(_(e),t):pe,index:t,open:xe===t||ge===t||"on"===ue,disabled:K},c.createElement(ae,{className:(0,l.default)(I.thumb,I["thumbColor".concat((0,h.c)(T))],ge===t&&I.active,K&&I.disabled,Ve===t&&I.focusVisible),tabIndex:K?null:0,role:"slider",style:o,"data-index":t,"aria-label":D?D(t):r,"aria-labelledby":s,"aria-orientation":J,"aria-valuemax":_(j),"aria-valuemin":_(G),"aria-valuenow":_(e),"aria-valuetext":W?W(_(e),t):d,onKeyDown:He,onFocus:We,onBlur:Oe,onMouseOver:Be,onMouseLeave:Fe}))})))}));const N=(0,s.c)((function(e){return{root:{height:2,width:"100%",boxSizing:"content-box",padding:"13px 0",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:e.palette.primary.main,WebkitTapHighlightColor:"transparent","&$disabled":{pointerEvents:"none",cursor:"default",color:e.palette.grey[400]},"&$vertical":{width:2,height:"100%",padding:"0 13px"},"@media (pointer: coarse)":{padding:"20px 0","&$vertical":{padding:"0 20px"}},"@media print":{colorAdjust:"exact"}},colorPrimary:{},colorSecondary:{color:e.palette.secondary.main},marked:{marginBottom:20,"&$vertical":{marginBottom:"auto",marginRight:20}},vertical:{},disabled:{},rail:{display:"block",position:"absolute",width:"100%",height:2,borderRadius:1,backgroundColor:"currentColor",opacity:.38,"$vertical &":{height:"100%",width:2}},track:{display:"block",position:"absolute",height:2,borderRadius:1,backgroundColor:"currentColor","$vertical &":{width:2}},trackFalse:{"& $track":{display:"none"}},trackInverted:{"& $track":{backgroundColor:"light"===e.palette.type?(0,d.IV)(e.palette.primary.main,.62):(0,d.sP)(e.palette.primary.main,.5)},"& $rail":{opacity:1}},thumb:{position:"absolute",width:12,height:12,marginLeft:-6,marginTop:-5,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow"],{duration:e.transitions.duration.shortest}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",left:-15,top:-15,right:-15,bottom:-15},"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat((0,d.W4)(e.palette.primary.main,.16)),"@media (hover: none)":{boxShadow:"none"}},"&$active":{boxShadow:"0px 0px 0px 14px ".concat((0,d.W4)(e.palette.primary.main,.16))},"&$disabled":{width:8,height:8,marginLeft:-4,marginTop:-3,"&:hover":{boxShadow:"none"}},"$vertical &":{marginLeft:-5,marginBottom:-6},"$vertical &$disabled":{marginLeft:-3,marginBottom:-4}},thumbColorPrimary:{},thumbColorSecondary:{"&$focusVisible,&:hover":{boxShadow:"0px 0px 0px 8px ".concat((0,d.W4)(e.palette.secondary.main,.16))},"&$active":{boxShadow:"0px 0px 0px 14px ".concat((0,d.W4)(e.palette.secondary.main,.16))}},active:{},focusVisible:{},valueLabel:{left:"calc(-50% - 4px)"},mark:{position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},markActive:{backgroundColor:e.palette.background.paper,opacity:.8},markLabel:(0,i.c)({},e.typography.body2,{color:e.palette.text.secondary,position:"absolute",top:26,transform:"translateX(-50%)",whiteSpace:"nowrap","$vertical &":{top:"auto",left:26,transform:"translateY(50%)"},"@media (pointer: coarse)":{top:40,"$vertical &":{left:31}}}),markLabelActive:{color:e.palette.text.primary}}}),{name:"MuiSlider"})(I)}}]);