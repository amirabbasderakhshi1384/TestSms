(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7122],{15298:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]])},19462:(e,t,s)=>{Promise.resolve().then(s.bind(s,65890))},30772:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var a=s(12115),r=s(30907);let i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o=s(71265);let l=(e,t)=>{let s=(0,a.forwardRef)(({className:s,...l},n)=>(0,a.createElement)(o.default,{ref:n,iconNode:t,className:(0,r.z)(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,s),...l}));return s.displayName=i(e),s}},30907:(e,t,s)=>{"use strict";s.d(t,{z:()=>a});let a=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()},38434:(e,t,s)=>{"use strict";let a,r;s.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>S});var i,o=s(12115);let l={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?u(o,i):i+"{"+u(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=u(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function f(e){let t,s,a=this||{},r=e.call?e(a.p):e;return((e,t,s,a,r)=>{var i;let o=m(e),l=p[o]||(p[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!p[l]){let t=o!==e?e:(e=>{let t,s,a=[{}];for(;t=n.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(c," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);p[l]=u(r?{["@keyframes "+l]:t}:t,s?"":"."+l)}let f=s&&p.g;return s&&(p.g=p[l]),i=p[l],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),l})(r.unshift?r.raw?(t=[].slice.call(arguments,1),s=a.p,r.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l})(a.target),a.g,a.o,a.k)}f.bind({g:1});let h,x,b,y=f.bind({k:1});function g(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;s.p=Object.assign({theme:x&&x()},l),s.o=/go\d/.test(n),l.className=f.apply(s,a)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),b&&d[0]&&b(l),h(d,l)}return t?t(r):r}}var v=(e,t)=>"function"==typeof e?e(t):e,w=(a=0,()=>(++a).toString()),j=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},N="default",k=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},$=(e,t=N)=>{E[t]=k(E[t]||C,e),A.forEach(([e,s])=>{e===t&&s(E[t])})},O=e=>Object.keys(E).forEach(t=>$(e,t)),z=(e=N)=>t=>{$(t,e)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=e=>(t,s)=>{let a,r=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||w()}))(t,e,s);return z(r.toasterId||(a=r.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},S=(e,t)=>M("blank")(e,t);S.error=M("error"),S.success=M("success"),S.loading=M("loading"),S.custom=M("custom"),S.dismiss=(e,t)=>{let s={type:3,toastId:e};t?z(t)(s):O(s)},S.dismissAll=e=>S.dismiss(void 0,e),S.remove=(e,t)=>{let s={type:4,toastId:e};t?z(t)(s):O(s)},S.removeAll=e=>S.remove(void 0,e),S.promise=(e,t,s)=>{let a=S.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?v(t.success,e):void 0;return r?S.success(r,{id:a,...s,...null==s?void 0:s.success}):S.dismiss(a),e}).catch(e=>{let r=t.error?v(t.error,e):void 0;r?S.error(r,{id:a,...s,...null==s?void 0:s.error}):S.dismiss(a)}),e};var P=1e3,_=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,F=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=y`
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
}`,U=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
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
`,V=g("div")`
  position: absolute;
`,Z=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===s?null:o.createElement(Z,null,o.createElement(R,{...a}),"loading"!==s&&o.createElement(V,null,"error"===s?o.createElement(T,{...a}):o.createElement(U,{...a})))},G=g("div")`
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
`,J=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,K=o.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(Y,{toast:e}),l=o.createElement(J,{...e.ariaProps},v(e.message,e));return o.createElement(G,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))});i=o.createElement,u.p=void 0,h=i,x=void 0,b=void 0;var Q=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let i=o.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:s},r)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,toasterId:i,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:a}=((e={},t=N)=>{let[s,a]=(0,o.useState)(E[t]||C),r=(0,o.useRef)(E[t]);(0,o.useEffect)(()=>(r.current!==E[t]&&a(E[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=s.toasts.map(t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...s,toasts:i}})(e,t),r=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=P)=>{if(r.has(e))return;let s=setTimeout(()=>{r.delete(e),l({type:4,toastId:e})},t);r.set(e,s)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=s.map(s=>{if(s.duration===1/0)return;let a=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(a<0){s.visible&&S.dismiss(s.id);return}return setTimeout(()=>S.dismiss(s.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let l=(0,o.useCallback)(z(t),[t]),n=(0,o.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,o.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,o.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[s]);return(0,o.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}})(s,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let i,l,n=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(i=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...l});return o.createElement(Q,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?X:"",style:u},"custom"===s.type?v(s.message,s):r?r(s):o.createElement(K,{toast:s,position:n}))}))},et=S},65890:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var a=s(95155),r=s(12115),i=s(98500),o=s.n(i),l=s(88074),n=s(15298);let d=(0,s(30772).A)("tags",[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]);var c=s(81402),u=s(38434);function p(){let[e,t]=(0,r.useState)("اس‌ام‌اس نگار (SMS Negar)"),[s,i]=(0,r.useState)("021-88990011"),[p,m]=(0,r.useState)(5e3),[f,h]=(0,r.useState)(!0),[x,b]=(0,r.useState)(!0);return(0,a.jsxs)("div",{className:"max-w-4xl mx-auto space-y-6 text-slate-200",children:[(0,a.jsx)("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1",children:[(0,a.jsx)(l.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"پیکربندی کلان سیستم"})]}),(0,a.jsx)("h1",{className:"text-2xl font-black text-white",children:"تنظیمات عمومی سامانه"}),(0,a.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"پیکربندی پارامترهای سرور، احراز هویت دو مرحله‌ای و تنظیمات زیرساخت"})]})}),(0,a.jsxs)("div",{className:"p-5 rounded-2xl bg-gradient-to-l from-cyan-950/60 via-[#11192e] to-[#0c1322] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,a.jsx)("div",{className:"w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0",children:(0,a.jsx)(n.A,{className:"w-5 h-5"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{className:"font-bold text-sm text-white flex items-center gap-2",children:[(0,a.jsx)("span",{children:"تنظیم متن و قالب پیامک‌های سیستمی"}),(0,a.jsx)("span",{className:"px-2 py-0.2 rounded text-[10px] bg-cyan-500/20 text-cyan-300 font-bold",children:"IP / OTP / فیش‌ها"})]}),(0,a.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"پیکربندی متن پیامک‌های ورود (با پارامتر IP)، تایید و رد فیش، تیکت‌ها و هشدارهای مصرف"})]})]}),(0,a.jsx)(o(),{href:"/admin/settings/sms-templates",className:"flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all shrink-0",children:(0,a.jsx)("span",{children:"مدیریت قالب‌های پیامک"})})]}),(0,a.jsxs)("div",{className:"p-5 rounded-2xl bg-gradient-to-l from-amber-950/40 via-[#11192e] to-[#0c1322] border border-amber-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3.5",children:[(0,a.jsx)("div",{className:"w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0",children:(0,a.jsx)(d,{className:"w-5 h-5"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-bold text-sm text-white",children:"قیمت پایه پیامک هر خط"}),(0,a.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"نرخ مبنای سوپرادمین را مدیریت کنید تا کف تعرفه قابل ثبت توسط ایجنت‌ها باشد."})]})]}),(0,a.jsx)(o(),{href:"/admin/settings/sms-prices",className:"flex items-center justify-center px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/15 transition-all shrink-0",children:"مدیریت تعرفه پایه خطوط"})]}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),u.Ay.success("تنظیمات کلی سامانه با موفقیت ذخیره گردید.")},className:"p-6 sm:p-8 rounded-2xl bg-[#11192e] border border-slate-800 shadow-xl space-y-6 text-xs",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[(0,a.jsxs)("div",{className:"space-y-1.5",children:[(0,a.jsx)("label",{className:"font-bold text-slate-300",children:"عنوان تجاری سامانه"}),(0,a.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-cyan-500"})]}),(0,a.jsxs)("div",{className:"space-y-1.5",children:[(0,a.jsx)("label",{className:"font-bold text-slate-300",children:"تلفن پشتیبانی مرکزی"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>i(e.target.value),className:"w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 font-mono focus:outline-none focus:border-cyan-500"})]})]}),(0,a.jsxs)("div",{className:"space-y-1.5",children:[(0,a.jsx)("label",{className:"font-bold text-slate-300",children:"حداکثر سقف ارسال همزمان پیامک در ثانیه (Throttle TPS)"}),(0,a.jsx)("input",{type:"number",value:p,onChange:e=>m(Number(e.target.value)),className:"w-full h-11 px-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 font-mono focus:outline-none focus:border-cyan-500"})]}),(0,a.jsxs)("div",{className:"space-y-3 pt-2 border-t border-slate-800",children:[(0,a.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer text-slate-300",children:[(0,a.jsx)("input",{type:"checkbox",checked:f,onChange:e=>h(e.target.checked),className:"w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500"}),(0,a.jsx)("span",{children:"اجباری بودن احراز هویت دو مرحله‌ای (2FA OTP) برای کلیه مدیران سیستم"})]}),(0,a.jsxs)("label",{className:"flex items-center gap-2 cursor-pointer text-slate-300",children:[(0,a.jsx)("input",{type:"checkbox",checked:x,onChange:e=>b(e.target.checked),className:"w-4 h-4 rounded border-slate-700 bg-slate-900 text-cyan-500"}),(0,a.jsx)("span",{children:"ارسال خودکار گزارش تحویل DLR به کال‌بک سرور نمایندگان"})]})]}),(0,a.jsx)("div",{className:"flex items-center justify-end pt-4 border-t border-slate-800",children:(0,a.jsxs)("button",{type:"submit",className:"flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-l from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all cursor-pointer",children:[(0,a.jsx)(c.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{children:"ذخیره تنظیمات"})]})})]})]})}},71265:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(12115),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=s(30907);let o=(0,a.createContext)({}),l=(0,a.forwardRef)(({color:e,size:t,strokeWidth:s,absoluteStrokeWidth:l,className:n="",children:d,iconNode:c,...u},p)=>{let{size:m=24,strokeWidth:f=2,absoluteStrokeWidth:h=!1,color:x="currentColor",className:b=""}=(0,a.useContext)(o)??{},y=l??h?24*Number(s??f)/Number(t??m):s??f;return(0,a.createElement)("svg",{ref:p,...r,width:t??m??r.width,height:t??m??r.height,stroke:e??x,strokeWidth:y,className:(0,i.z)("lucide",b,n),...!d&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(d)?d:[d]])})},81402:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},88074:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])}},e=>{e.O(0,[8500,8441,3794,7358],()=>e(e.s=19462)),_N_E=e.O()}]);