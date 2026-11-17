(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7618],{11440:(e,t,a)=>{Promise.resolve().then(a.bind(a,79062))},30772:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(12115),s=a(30907);let i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var o=a(71265);let n=(e,t)=>{let a=(0,r.forwardRef)(({className:a,...n},l)=>(0,r.createElement)(o.default,{ref:l,iconNode:t,className:(0,s.z)(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...n}));return a.displayName=i(e),a}},30907:(e,t,a)=>{"use strict";a.d(t,{z:()=>r});let r=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim()},38434:(e,t,a)=>{"use strict";let r,s;a.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>M});var i,o=a(12115);let n={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let a="",r="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":r+="f"==i[1]?u(o,i):i+"{"+u(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=u(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=u.p?u.p(i,o):i+":"+o+";")}return a+(t&&s?t+"{"+s+"}":s)+r},p={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e};function f(e){let t,a,r=this||{},s=e.call?e(r.p):e;return((e,t,a,r,s)=>{var i;let o=m(e),n=p[o]||(p[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!p[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=l.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(c," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(c," ").trim();return r[0]})(e);p[n]=u(s?{["@keyframes "+n]:t}:t,a?"":"."+n)}let f=a&&p.g;return a&&(p.g=p[n]),i=p[n],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n})(s.unshift?s.raw?(t=[].slice.call(arguments,1),a=r.p,s.reduce((e,r,s)=>{let i=t[s];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(r.target),r.g,r.o,r.k)}f.bind({g:1});let h,y,b,g=f.bind({k:1});function x(e,t){let a=this||{};return function(){let r=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;a.p=Object.assign({theme:y&&y()},n),a.o=/go\d/.test(l),n.className=f.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),h(d,n)}return t?t(s):s}}var v=(e,t)=>"function"==typeof e?e(t):e,w=(r=0,()=>(++r).toString()),k=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j="default",N=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return N(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},E=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},A={},$=(e,t=j)=>{A[t]=N(A[t]||C,e),E.forEach(([e,a])=>{e===t&&a(A[t])})},O=e=>Object.keys(A).forEach(t=>$(e,t)),z=(e=j)=>t=>{$(t,e)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=e=>(t,a)=>{let r,s=((e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||w()}))(t,e,a);return z(s.toasterId||(r=s.id,Object.keys(A).find(e=>A[e].toasts.some(e=>e.id===r))))({type:2,toast:s}),s.id},M=(e,t)=>_("blank")(e,t);M.error=_("error"),M.success=_("success"),M.loading=_("loading"),M.custom=_("custom"),M.dismiss=(e,t)=>{let a={type:3,toastId:e};t?z(t)(a):O(a)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let a={type:4,toastId:e};t?z(t)(a):O(a)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?v(t.success,e):void 0;return s?M.success(s,{id:r,...a,...null==a?void 0:a.success}):M.dismiss(r),e}).catch(e=>{let s=t.error?v(t.error,e):void 0;s?M.error(s,{id:r,...a,...null==a?void 0:a.error}):M.dismiss(r)}),e};var I=1e3,L=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,S=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S} 0.15s ease-out forwards;
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
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,T=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,H=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=g`
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
}`,U=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,B=x("div")`
  position: absolute;
`,V=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===a?null:o.createElement(V,null,o.createElement(T,{...r}),"loading"!==a&&o.createElement(B,null,"error"===a?o.createElement(F,{...r}):o.createElement(U,{...r})))},X=x("div")`
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
`,Y=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=o.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?((e,t)=>{let a=e.includes("top")?1:-1,[r,s]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*a}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*a}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(K,{toast:e}),n=o.createElement(Y,{...e.ariaProps},v(e.message,e));return o.createElement(X,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,u.p=void 0,h=i,y=void 0,b=void 0;var J=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let i=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:a},s)},Q=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:a,pausedAt:r}=((e={},t=j)=>{let[a,r]=(0,o.useState)(A[t]||C),s=(0,o.useRef)(A[t]);(0,o.useEffect)(()=>(s.current!==A[t]&&r(A[t]),E.push([t,r]),()=>{let e=E.findIndex(([e])=>e===t);e>-1&&E.splice(e,1)}),[t]);let i=a.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...a,toasts:i}})(e,t),s=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=I)=>{if(s.has(e))return;let a=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,a)},[]);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),s=a.map(a=>{if(a.duration===1/0)return;let r=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(r<0){a.visible&&M.dismiss(a.id);return}return setTimeout(()=>M.dismiss(a.id,t),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[a,r,t]);let n=(0,o.useCallback)(z(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,o.useCallback)(()=>{r&&n({type:6,time:Date.now()})},[r,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:i}=t||{},o=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[a]);return(0,o.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}})(a,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let i,n,l=a.position||t,d=c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}),u=(i=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return o.createElement(J,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?Q:"",style:u},"custom"===a.type?v(a.message,a):s?s(a):o.createElement(G,{toast:a,position:l}))}))},et=M},44083:(e,t,a)=>{"use strict";a.d(t,{Cf:()=>i,DB:()=>n,Oe:()=>s,Xt:()=>o,t$:()=>r});let r={id:"ADM-001",username:"admin",displayName:"مدیر ارشد سامانه (Super Admin)",email:"superadmin@smsnegar.ir",role:"Super Admin",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",lastLogin:"-",permissions:["finance.view","finance.create","finance.edit","finance.delete","finance.approve","lines.view","lines.create","lines.edit","lines.delete","tickets.view","tickets.reply","tickets.assign","tickets.close","admin.manage"]},s=[],i=[],o=[],n=[]},50825:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(30772).A)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]])},71265:(e,t,a)=>{"use strict";a.d(t,{default:()=>n});var r=a(12115),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=a(30907);let o=(0,r.createContext)({}),n=(0,r.forwardRef)(({color:e,size:t,strokeWidth:a,absoluteStrokeWidth:n,className:l="",children:d,iconNode:c,...u},p)=>{let{size:m=24,strokeWidth:f=2,absoluteStrokeWidth:h=!1,color:y="currentColor",className:b=""}=(0,r.useContext)(o)??{},g=n??h?24*Number(a??f)/Number(t??m):a??f;return(0,r.createElement)("svg",{ref:p,...s,width:t??m??s.width,height:t??m??s.height,stroke:e??y,strokeWidth:g,className:(0,i.z)("lucide",b,l),...!d&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(u)&&{"aria-hidden":"true"},...u},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(d)?d:[d]])})},79062:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var r=a(95155);a(12115);var s=a(94774),i=a(50825),o=a(1728),n=a(48035),l=a(28408),d=a(32539),c=a(59656),u=a(5501),p=a(45140),m=a(44083),f=a(38434);function h(){return(0,r.jsxs)("div",{className:"space-y-6 text-slate-200",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1",children:[(0,r.jsx)(s.A,{className:"w-4 h-4"}),(0,r.jsx)("span",{children:"مرکز آمار و تحلیل داده‌ها"})]}),(0,r.jsx)("h1",{className:"text-2xl font-black text-white",children:"گزارش‌های جامع آماری"}),(0,r.jsx)("p",{className:"text-xs text-slate-400 mt-0.5",children:"تحلیل نرخ موفقیت، مصرف اپراتورها و کارایی مالی سیستم"})]}),(0,r.jsxs)("button",{onClick:()=>f.Ay.success("فایل گزارش دوره‌ای آماده دریافت شد"),className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-bold border border-cyan-500/30 transition-colors",children:[(0,r.jsx)(i.A,{className:"w-4 h-4"}),(0,r.jsx)("span",{children:"خروجی جامع آماری (PDF)"})]})]}),(0,r.jsxs)("div",{className:"p-6 rounded-2xl bg-[#11192e] border border-slate-800 shadow-xl",children:[(0,r.jsx)("h3",{className:"font-bold text-sm text-white mb-1",children:"حجم ترافیک ارسال پیامک در ۳۰ روز اخیر"}),(0,r.jsx)("p",{className:"text-xs text-slate-400 mb-4",children:"آمار تفکیکی پیامک‌های پردازش شده در سرورهای مرکزی"}),(0,r.jsx)("div",{className:"h-72 w-full",dir:"ltr",children:(0,r.jsx)(o.u,{width:"100%",height:"100%",children:(0,r.jsxs)(n.E,{data:m.Oe,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",stroke:"#1e293b"}),(0,r.jsx)(d.W,{dataKey:"day",stroke:"#64748b",fontSize:9}),(0,r.jsx)(c.h,{stroke:"#64748b",fontSize:9,tickFormatter:e=>`${(e/1e3).toFixed(0)}k`}),(0,r.jsx)(u.m,{contentStyle:{backgroundColor:"#0f172a",borderColor:"#334155",borderRadius:"10px"},formatter:e=>[`${Number(e).toLocaleString("fa-IR")} پیامک`,"ترافیک"]}),(0,r.jsx)(p.yP,{dataKey:"smsCount",fill:"#22d3ee",radius:[4,4,0,0]})]})})})]})]})}},94774:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});let r=(0,a(30772).A)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]])}},e=>{e.O(0,[7093,7731,8441,3794,7358],()=>e(e.s=11440)),_N_E=e.O()}]);