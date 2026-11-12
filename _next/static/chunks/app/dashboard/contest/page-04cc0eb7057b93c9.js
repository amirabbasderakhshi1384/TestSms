(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5770],{23032:(e,t,r)=>{"use strict";r.d(t,{A:()=>u,V:()=>c});var s=r(95155),a=r(12115),i=r(73321),n=r(47504),l=r(73536),o=r(47399);let d=(0,a.createContext)(null),c=()=>(0,a.useContext)(d);function u({children:e}){let t=(0,l.n)(e=>e.token),r=(0,i.usePathname)(),[c,m]=(0,a.useState)(null);return((0,a.useEffect)(()=>{let e=!0;m(null);let r=async()=>{try{let t={};try{let e=(await n.Ay.get("user/Me/permissions")).data;if(Array.isArray(e)){for(let r of e)if("string"==typeof r){t[r]=!0;let e=r.charAt(0).toLowerCase()+r.slice(1);if(t[e]=!0,e.startsWith("user")){let r=e.slice(4);r&&(t[r.charAt(0).toLowerCase()+r.slice(1)]=!0)}}}else if(e&&"object"==typeof e){let r=e.data??e.Data??(e.isSuccess?e:null);if(Array.isArray(r)){for(let e of r)if("string"==typeof e){t[e]=!0;let r=e.charAt(0).toLowerCase()+e.slice(1);if(t[r]=!0,r.startsWith("user")){let e=r.slice(4);e&&(t[e.charAt(0).toLowerCase()+e.slice(1)]=!0)}}}else if(r&&"object"==typeof r)for(let[e,s]of Object.entries(r)){let r=!!s;t[e]=r,t[e.charAt(0).toUpperCase()+e.slice(1)]=r;let a=e.charAt(0).toLowerCase()+e.slice(1);if(t[a]=r,a.startsWith("user")){let e=a.slice(4);e&&(t[e.charAt(0).toLowerCase()+e.slice(1)]=r)}}}}catch{try{let e=await n.Ay.get("user/Me"),r=e.data?.data??e.data;if(r&&"object"==typeof r)for(let[e,s]of Object.entries(r)){let r=!!s;t[e]=r,t[e.charAt(0).toLowerCase()+e.slice(1)]=r,t[e.charAt(0).toUpperCase()+e.slice(1)]=r}}catch{}}e&&m(t)}catch{e&&m({})}};t?r():m({});let s=setInterval(()=>{t&&r()},15e3),a=()=>{t&&r()};return window.addEventListener("focus",a),()=>{e=!1,clearInterval(s),window.removeEventListener("focus",a)}},[t,r]),c)?(0,o.B)(c,r)?(0,s.jsx)(d.Provider,{value:c,children:e}):(0,s.jsx)("div",{className:"min-h-[60vh] flex flex-col items-center justify-center p-8 text-center",children:(0,s.jsxs)("div",{className:"bg-rose-50 border border-rose-200 text-rose-800 p-6 rounded-2xl max-w-md shadow-sm",children:[(0,s.jsx)("p",{className:"font-black text-sm mb-2",children:"عدم دسترسی به این بخش"}),(0,s.jsx)("p",{className:"text-xs text-rose-600",children:"این بخش توسط نماینده برای حساب شما غیرفعال شده است."})]})}):(0,s.jsx)("div",{className:"p-8 font-bold text-gray-500",children:"در حال دریافت دسترسی‌ها…"})}},38434:(e,t,r)=>{"use strict";let s,a;r.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>O});var i,n=r(12115);let l={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let r="",s="",a="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+n+";":s+="f"==i[1]?u(n,i):i+"{"+u(n,"k"==i[1]?"":t)+"}":"object"==typeof n?s+=u(n,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=u.p?u.p(i,n):i+":"+n+";")}return r+(t&&a?t+"{"+a+"}":a)+s},m={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e};function f(e){let t,r,s=this||{},a=e.call?e(s.p):e;return((e,t,r,s,a)=>{var i;let n=p(e),l=m[n]||(m[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,r,s=[{}];for(;t=o.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(r=t[3].replace(c," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);m[l]=u(a?{["@keyframes "+l]:t}:t,r?"":"."+l)}let f=r&&m.g;return r&&(m.g=m[l]),i=m[l],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),l})(a.unshift?a.raw?(t=[].slice.call(arguments,1),r=s.p,a.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l})(s.target),s.g,s.o,s.k)}f.bind({g:1});let h,x,g,b=f.bind({k:1});function y(e,t){let r=this||{};return function(){let s=arguments;function a(i,n){let l=Object.assign({},i),o=l.className||a.className;r.p=Object.assign({theme:x&&x()},l),r.o=/go\d/.test(o),l.className=f.apply(r,s)+(o?" "+o:""),t&&(l.ref=n);let d=e;return e[0]&&(d=l.as||e,delete l.as),g&&d[0]&&g(l),h(d,l)}return t?t(a):a}}var v=(e,t)=>"function"==typeof e?e(t):e,j=(s=0,()=>(++s).toString()),w=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},N="default",S=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return S(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},C=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},k={},E=(e,t=N)=>{k[t]=S(k[t]||A,e),C.forEach(([e,r])=>{e===t&&r(k[t])})},L=e=>Object.keys(k).forEach(t=>E(e,t)),$=(e=N)=>t=>{E(t,e)},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=e=>(t,r)=>{let s,a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}))(t,e,r);return $(a.toasterId||(s=a.id,Object.keys(k).find(e=>k[e].toasts.some(e=>e.id===s))))({type:2,toast:a}),a.id},O=(e,t)=>P("blank")(e,t);O.error=P("error"),O.success=P("success"),O.loading=P("loading"),O.custom=P("custom"),O.dismiss=(e,t)=>{let r={type:3,toastId:e};t?$(t)(r):L(r)},O.dismissAll=e=>O.dismiss(void 0,e),O.remove=(e,t)=>{let r={type:4,toastId:e};t?$(t)(r):L(r)},O.removeAll=e=>O.remove(void 0,e),O.promise=(e,t,r)=>{let s=O.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?v(t.success,e):void 0;return a?O.success(a,{id:s,...r,...null==r?void 0:r.success}):O.dismiss(s),e}).catch(e=>{let a=t.error?v(t.error,e):void 0;a?O.error(a,{id:s,...r,...null==r?void 0:r.error}):O.dismiss(s)}),e};var R=1e3,D=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,M=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,H=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${_} 1s linear infinite;
`,U=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,T=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,W=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${T} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=y("div")`
  position: absolute;
`,q=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?n.createElement(G,null,t):t:"blank"===r?null:n.createElement(q,null,n.createElement(H,{...s}),"loading"!==r&&n.createElement(V,null,"error"===r?n.createElement(z,{...s}):n.createElement(W,{...s})))},Z=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,J=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=n.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[s,a]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(Y,{toast:e}),l=n.createElement(J,{...e.ariaProps},v(e.message,e));return n.createElement(Z,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:l}):n.createElement(n.Fragment,null,i,l))});i=n.createElement,u.p=void 0,h=i,x=void 0,g=void 0;var Q=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=n.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return n.createElement("div",{ref:i,className:t,style:r},a)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:i,containerStyle:l,containerClassName:o})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:s}=((e={},t=N)=>{let[r,s]=(0,n.useState)(k[t]||A),a=(0,n.useRef)(k[t]);(0,n.useEffect)(()=>(a.current!==k[t]&&s(k[t]),C.push([t,s]),()=>{let e=C.findIndex(([e])=>e===t);e>-1&&C.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:i}})(e,t),a=(0,n.useRef)(new Map).current,i=(0,n.useCallback)((e,t=R)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),l({type:4,toastId:e})},t);a.set(e,r)},[]);(0,n.useEffect)(()=>{if(s)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(s<0){r.visible&&O.dismiss(r.id);return}return setTimeout(()=>O.dismiss(r.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,s,t]);let l=(0,n.useCallback)($(t),[t]),o=(0,n.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,n.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,n.useCallback)(()=>{s&&l({type:6,time:Date.now()})},[s,l]),u=(0,n.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=t||{},n=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=n.findIndex(t=>t.id===e.id),o=n.filter((e,t)=>t<l&&e.visible).length;return n.filter(e=>e.visible).slice(...s?[o+1]:[0,o]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,n.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:o,endPause:c,calculateOffset:u}}})(r,i);return n.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i,l,o=r.position||t,d=c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}),u=(i=o.includes("top"),l=o.includes("center")?{justifyContent:"center"}:o.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...l});return n.createElement(Q,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?X:"",style:u},"custom"===r.type?v(r.message,r):a?a(r):n.createElement(K,{toast:r,position:o}))}))},et=O},38651:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var s=r(95155);function a({value:e,onChange:t,lines:r,className:i="bg-primary-50 border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-xl px-4 py-2.5 w-full font-bold text-primary-700 appearance-none outline-none transition-all text-sm",placeholder:n="انتخاب شماره فرستنده",disabled:l}){return(0,s.jsxs)("select",{value:e,onChange:e=>t(e.target.value),className:i,dir:"ltr",disabled:l,children:[0===r.length&&(0,s.jsx)("option",{value:"",children:n}),r.map(e=>(0,s.jsx)("option",{value:String(e.id),children:e.number},e.id))]})}},44682:(e,t,r)=>{Promise.resolve().then(r.bind(r,89498))},47399:(e,t,r)=>{"use strict";function s(e,t){if(!(e?.userStatus??e?.UserStatus))return!1;let r=t.split("?")[0].replace(/\/$/,"");return"/dashboard/finance"===r?!!(e.userOnlineCreditPurchase??e.onlineCreditPurchase??e.UserOnlineCreditPurchase??e.OnlineCreditPurchase):r.startsWith("/dashboard/voice-sms")?!!(e.userVoiceSmsSending??e.voiceSmsSending??e.UserVoiceSmsSending??e.VoiceSmsSending):!r.includes("refund")||!!(e.userRefundCapability??e.refundCapability??e.UserRefundCapability??e.RefundCapability)}function a(e,t){if(!(e?.userStatus??e?.UserStatus))return!1;let r=String(t).replace(/^\+/,"").replace(/^98/,""),s=[["50001","userSendFromLine50001","sendFromLine50001"],["50002","userSendFromLine50002","sendFromLine50002"],["1000","userSendFromLine1000","sendFromLine1000"],["2000","userSendFromLine2000","sendFromLine2000"],["3000","userSendFromLine3000","sendFromLine3000"],["021","userSendFromLine021","sendFromLine021"],["21","userSendFromLine021","sendFromLine021"]].find(([e])=>r.startsWith(e));if(!s)return!0;let[,a,i]=s;return!0===e[a]||!0===e[i]||!0===e[a.charAt(0).toUpperCase()+a.slice(1)]||!0===e[i.charAt(0).toUpperCase()+i.slice(1)]}r.d(t,{B:()=>s,j:()=>a})},62286:(e,t,r)=>{"use strict";r.d(t,{F:()=>o});var s=r(12115),a=r(47504),i=r(23032),n=r(47399);function l(e,t){for(let r of t)if(null!=e[r]&&""!==e[r])return e[r]}function o(){let e=(0,i.V)(),[t,r]=(0,s.useState)([]),[o,d]=(0,s.useState)(""),[c,u]=(0,s.useState)(!0);(0,s.useEffect)(()=>{let e=!1;return a.Ay.get("user/DedicatedSmsLines").then(t=>{var s;if(e)return;let a=(Array.isArray(s=t.data?.data??t.data)?s:Array.isArray(s?.items)?s.items:Array.isArray(s?.data)?s.data:[]).map(e=>{if(!e||"object"!=typeof e)return null;let t=Number(l(e,["id","Id","dedicatedSmsLineId","DedicatedSmsLineId"])??0),r=String(l(e,["number","Number","lineNumber","LineNumber","smsLineNumber","SmsLineNumber","senderNumber","SenderNumber"])??"").trim();return Number.isFinite(t)&&!(t<=0)&&r?{id:t,number:r}:null}).filter(e=>null!==e);r(a),d(e=>e||(a[0]?String(a[0].id):""))}).catch(()=>{e||r([])}).finally(()=>{e||u(!1)}),()=>{e=!0}},[]);let m=t.filter(t=>(0,n.j)(e,t.number)),p=m.some(e=>String(e.id)===o)?o:m[0]?String(m[0].id):"",f=m.find(e=>String(e.id)===p)??null,h=p?Number(p):0;return{lines:m,isLoading:c,selectedId:p,setSelectedId:d,selectedLine:f,dedicatedSmsLineId:h}}},73321:(e,t,r)=>{"use strict";var s=r(74645);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},81047:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var s=r(95155),a=r(12115),i=r(47650),n=r(80642),l=r(84286),o=r(64577),d=r(6923);function c(e){let t=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];return String(e).replace(/\d/g,e=>t[parseInt(e)])}function u({value:e,onChange:t,placeholder:r="انتخاب ساعت"}){let[m,p]=(0,a.useState)(!1),[f,h]=(0,a.useState)(!1),[x,g]=(0,a.useState)({top:0,left:0}),b=(0,a.useRef)(null),y=(0,a.useRef)(null),v=(0,a.useRef)(null),[j,w]=e?e.split(":").map(Number):[8,0],[N,S]=(0,a.useState)(Number.isFinite(j)?j:8),[C,A]=(0,a.useState)(Number.isFinite(w)?w:0);(0,a.useEffect)(()=>{h(!0)},[]),(0,a.useEffect)(()=>{let[t,r]=e?e.split(":").map(Number):[8,0];S(Number.isFinite(t)?t:8),A(Number.isFinite(r)?r:0)},[e]);let k=()=>{let e=y.current,t=v.current;if(!e)return;let r=e.getBoundingClientRect(),s=t?.offsetHeight??340,a=Math.min(328,window.innerWidth-24),i=r.right-a;i+a>window.innerWidth-12&&(i=window.innerWidth-12-a),i<12&&(i=12);let n=window.innerHeight-r.bottom-12,l=r.top-12,o=n<s&&l>n?r.top-s-8:r.bottom+8;g({top:o=Math.min(Math.max(12,o),window.innerHeight-12-Math.min(s,window.innerHeight-24)),left:i})};(0,a.useLayoutEffect)(()=>{if(!m)return;k();let e=requestAnimationFrame(k),t=()=>k();return window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),()=>{cancelAnimationFrame(e),window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0)}},[m]),(0,a.useEffect)(()=>{let e=e=>{let t=e.target;b.current?.contains(t)||v.current?.contains(t)||p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let E=Array.from({length:24},(e,t)=>t),L=Array.from({length:60},(e,t)=>t),$=e?`${c(String(j).padStart(2,"0"))}:${c(String(w).padStart(2,"0"))}`:r,F=e=>`rounded-md text-center transition-colors ${e?"bg-primary-500 text-white":"hover:bg-surface-100 text-surface-700"}`,P=(0,s.jsx)(n.N,{children:m&&(0,s.jsxs)(l.P.div,{ref:v,initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},style:{top:x.top,left:x.left,width:"min(328px, calc(100vw - 24px))"},className:"fixed z-200 overflow-hidden bg-white shadow-xl p-3 border border-surface-200 rounded-xl",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-1 text-surface-500 text-[11px] text-center font-bold",children:"ساعت"}),(0,s.jsx)("div",{className:"grid grid-cols-8 gap-0.5",children:E.map(e=>(0,s.jsx)("button",{type:"button",onClick:()=>S(e),className:`h-7 text-[11px] font-medium ${F(N===e)}`,children:c(String(e).padStart(2,"0"))},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-1 text-surface-500 text-[11px] text-center font-bold",children:"دقیقه"}),(0,s.jsx)("div",{className:"grid grid-cols-10 gap-0.5",children:L.map(e=>(0,s.jsx)("button",{type:"button",onClick:()=>A(e),className:`h-6 text-[10px] font-medium ${F(C===e)}`,children:c(String(e).padStart(2,"0"))},e))})]})]}),(0,s.jsxs)("button",{type:"button",onClick:()=>{let e=String(N).padStart(2,"0"),r=String(C).padStart(2,"0");t(`${e}:${r}`),p(!1)},className:"flex justify-center items-center gap-2 mt-2.5 py-2 w-full text-sm btn-primary",children:[(0,s.jsx)(o.A,{className:"w-4 h-4"}),"تایید"]})]})});return(0,s.jsxs)("div",{className:"relative",ref:b,children:[(0,s.jsxs)("button",{ref:y,type:"button",onClick:()=>p(!m),className:"flex items-center gap-2 bg-white px-3 py-2 border border-surface-200 hover:border-primary-300 rounded-lg text-sm transition-colors",children:[(0,s.jsx)(d.A,{className:"w-4 h-4 text-surface-500"}),(0,s.jsx)("span",{className:e?"text-surface-800":"text-surface-400",children:$})]}),f?(0,i.createPortal)(P,document.body):null]})}},81402:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(30772).A)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},89498:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(95155),a=r(12115),i=r(84286),n=r(2125),l=r(65738),o=r(81402),d=r(93988),c=r(81047),u=r(47504),m=r(38434),p=r(62286),f=r(38651);function h(){let{lines:e,selectedId:t,setSelectedId:r,dedicatedSmsLineId:h}=(0,p.F)(),[x,g]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[v,j]=(0,a.useState)(""),[w,N]=(0,a.useState)(""),[S,C]=(0,a.useState)(""),[A,k]=(0,a.useState)(""),[E,L]=(0,a.useState)(!1),[$,F]=(0,a.useState)(1),[P,O]=(0,a.useState)(!1),[R,D]=(0,a.useState)(!1),[I,M]=(0,a.useState)(""),[z,_]=(0,a.useState)([]),[H,U]=(0,a.useState)(!1),T=(e,t,r)=>{_(z.map(s=>s.id===e?{...s,[t]:r}:s))},W=async()=>{if(!x.trim())return void m.Ay.error("نام مسابقه را وارد کنید");if(!B)return void m.Ay.error("گروه مخاطبین را انتخاب کنید");U(!0);try{let e={name:x,smsStartWith:b,dedicatedSmsLineId:h,startDate:v,startTime:w?`${w}:00`:w,endDate:S,endTime:A?`${A}:00`:A,isActive:E,separatorType:Y(String($)),allowMultipleResponsesFromSameNumber:P,isCaseSensitive:!0,sendAutoReply:R,minSendReply:0,questions:z.map(e=>({text:e.title,options:[{title:e.title,keyword:e.keyword}]})),contactGroupId:B};console.log("chi mire",e);let t=await u.Ay.post("user/Messages/quizzes",e);t.data?.isSuccess?(m.Ay.success("مسابقه با موفقیت ایجاد شد"),g(""),y(""),_([]),G("")):m.Ay.error(t.data?.message||"خطا در ایجاد مسابقه")}catch(e){console.log(e.response)}finally{U(!1)}},[V,q]=(0,a.useState)([]),[B,G]=(0,a.useState)("");(0,a.useEffect)(()=>{(async()=>{try{let e=await u.Ay.get("user/ContactGroups");q(e.data.data||[])}catch(e){console.log(e)}})()},[]);let Y=e=>{switch(e){case"space":default:return 1;case"comma":return 2;case"dash":return 3;case"none":return 4}};return(0,s.jsx)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"p-6",children:(0,s.jsxs)("div",{className:"mx-auto max-w-5xl",children:[(0,s.jsx)("h1",{className:"mb-6 font-bold text-gray-800 text-2xl",children:"ایجاد مسابقه جدید"}),(0,s.jsxs)("div",{className:"space-y-6 bg-white shadow-lg p-6 rounded-xl",children:[(0,s.jsxs)("div",{className:"gap-6 grid grid-cols-1 md:grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"شماره خط"}),(0,s.jsx)(f.A,{value:t,onChange:r,lines:e,className:"bg-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"نام مسابقه"}),(0,s.jsx)("input",{type:"text",value:x,onChange:e=>g(e.target.value),className:"bg-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800",placeholder:"نام مسابقه را وارد کنید"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"سوال مسابقه"}),(0,s.jsx)("textarea",{value:b,onChange:e=>y(e.target.value),className:"bg-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800",rows:3,placeholder:"سوال مسابقه را وارد کنید"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"گروه مخاطبین"}),(0,s.jsxs)("div",{className:"space-y-1.5 max-h-48 overflow-y-auto border border-surface-200 rounded-xl p-2 bg-white",children:[V.map(e=>(0,s.jsxs)("label",{onClick:()=>G(e.id),className:`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all ${B===e.id?"bg-primary-50 border border-primary-200":"bg-surface-50 hover:bg-surface-100 border border-transparent"}`,children:[(0,s.jsx)("div",{className:`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${B===e.id?"bg-primary-500 border-primary-500":"border-gray-300"}`,children:B===e.id&&(0,s.jsx)("div",{className:"w-2 h-2 bg-white rounded-full"})}),(0,s.jsx)("span",{className:"text-sm font-medium text-surface-800",children:e.name})]},e.id)),0===V.length&&(0,s.jsx)("p",{className:"text-center text-surface-400 text-xs py-4",children:"دفترچه‌ای وجود ندارد"})]})]}),(0,s.jsxs)("div",{className:"gap-6 grid grid-cols-1 md:grid-cols-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"تاریخ شروع"}),(0,s.jsx)(d.A,{value:v,onChange:e=>j(e??""),disablePastDates:!0,placeholder:"انتخاب تاریخ شروع"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"زمان شروع"}),(0,s.jsx)(c.A,{value:w,onChange:N,placeholder:"انتخاب ساعت شروع"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"تاریخ پایان"}),(0,s.jsx)(d.A,{value:S,disablePastDates:!0,onChange:e=>C(e??""),placeholder:"انتخاب تاریخ پایان"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"زمان پایان"}),(0,s.jsx)(c.A,{value:A,onChange:k,placeholder:"انتخاب ساعت پایان"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"وضعیت مسابقه"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"status",checked:!0===E,onChange:()=>L(!0),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"فعال"})]}),(0,s.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"status",checked:!1===E,onChange:()=>L(!1),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"غیرفعال"})]})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"جداکننده"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("select",{value:$,onChange:e=>F(Number(e.target.value)),className:"bg-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full md:w-48 text-gray-800 appearance-none",children:[{value:"space",label:"فاصله"},{value:"comma",label:"کاما"},{value:"dash",label:"خط تیره"},{value:"none",label:"بدون جداکننده"}].map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))})})]}),(0,s.jsxs)("div",{className:"space-y-3 bg-gray-50 p-4 rounded-lg",children:[(0,s.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"multipleReplies",checked:!P,onChange:()=>O(!1),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"دریافت چند پاسخ از یک شماره: خیر"})]}),(0,s.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"multipleReplies",checked:P,onChange:()=>O(!0),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"دریافت چند پاسخ از یک شماره: بله"})]}),(0,s.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"sendAfterReceive",checked:!R,onChange:()=>D(!1),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"ارسال متن پس از دریافت پیامک: خیر"})]}),(0,s.jsxs)("label",{className:"flex items-center gap-3 cursor-pointer",children:[(0,s.jsx)("input",{type:"radio",name:"sendAfterReceive",checked:R,onChange:()=>D(!0),className:"focus:ring-blue-500 w-4 h-4 text-blue-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"ارسال متن پس از دریافت پیامک: بله"})]})]}),(0,s.jsxs)("div",{className:"bg-gray-50 p-4 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,s.jsx)("h3",{className:"font-medium text-gray-700 text-sm",children:"کلمات کلیدی"}),(0,s.jsxs)("button",{onClick:()=>{_([...z,{id:Date.now().toString(),title:"",keyword:"",condition:"exact"}])},className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white transition-colors",children:[(0,s.jsx)(n.A,{className:"w-4 h-4"}),"افزودن کلمه کلیدی"]})]}),0===z.length?(0,s.jsx)("div",{className:"py-8 text-gray-500 text-center",children:"کلمه کلیدی ثبت نشده است."}):(0,s.jsx)("div",{className:"space-y-3",children:z.map((e,t)=>(0,s.jsxs)("div",{className:"bg-white p-4 border border-gray-200 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[(0,s.jsxs)("span",{className:"font-medium text-gray-600 text-sm",children:["کلمه کلیدی ",t+1]}),(0,s.jsx)("button",{onClick:()=>{var t;return t=e.id,void _(z.filter(e=>e.id!==t))},className:"text-red-500 hover:text-red-600",children:(0,s.jsx)(l.A,{className:"w-4 h-4"})})]}),(0,s.jsxs)("div",{className:"gap-3 grid grid-cols-1 md:grid-cols-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-1 text-gray-500 text-xs",children:"عنوان"}),(0,s.jsx)("input",{type:"text",value:e.title,onChange:t=>T(e.id,"title",t.target.value),className:"bg-white px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800",placeholder:"عنوان"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-1 text-gray-500 text-xs",children:"کلمه کلیدی"}),(0,s.jsx)("input",{type:"text",value:e.keyword,onChange:t=>T(e.id,"keyword",t.target.value),className:"bg-white px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800",placeholder:"کلمه کلیدی"})]})]})]},e.id))})]}),(0,s.jsx)("div",{className:"flex justify-end gap-4",children:(0,s.jsx)("button",{onClick:W,disabled:H,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 px-6 py-2 rounded-lg text-white transition-colors",children:H?(0,s.jsx)("span",{children:"در حال ذخیره..."}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{className:"w-5 h-5"}),"ثبت"]})})})]})]})})}}},e=>{e.O(0,[3986,5228,4286,913,7504,3988,8441,3794,7358],()=>e(e.s=44682)),_N_E=e.O()}]);