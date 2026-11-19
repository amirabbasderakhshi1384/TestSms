(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2614],{9005:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(30772).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},15561:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(30772).A)("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]])},23464:(e,t,r)=>{Promise.resolve().then(r.bind(r,29938))},29938:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(95155),a=r(63956),i=r(12115),o=r(84286),n=r(25494),l=r(15561),d=r(68562),c=r(9005),u=r(9383),p=r(38434),m=r(47504);function f(){let[e,t]=(0,i.useState)(!1),[r,f]=(0,i.useState)([]),[h,b]=(0,i.useState)({subject:"",message:"",priority:1,department:1}),x=async e=>{if(e.preventDefault(),!h.subject.trim()||!h.message.trim())return void p.Ay.error("لطفا موضوع و پیام را وارد کنید");t(!0);try{let e=new FormData;e.append("Subject",h.subject),e.append("Priority",String(h.priority)),e.append("Department",String(h.department)),e.append("MessageText",h.message),r.forEach(t=>{e.append("File",t)});let t=await m.Ay.post("user/Tickets",e,{headers:{"Content-Type":"multipart/form-data"}});if(!t.data.isSuccess)return void p.Ay.error(t.data.message);p.Ay.success(t.data.message),b({subject:"",message:"",priority:1,department:1}),f([])}catch(e){p.Ay.error((0,a.SU)(e,"خطا در ثبت تیکت"))}finally{t(!1)}};return(0,s.jsx)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"p-6",children:(0,s.jsxs)("div",{className:"mx-auto max-w-3xl",children:[(0,s.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,s.jsx)("div",{className:"flex justify-center items-center bg-blue-100 rounded-xl w-12 h-12",children:(0,s.jsx)(n.A,{className:"w-6 h-6 text-blue-600"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"font-bold text-gray-800 text-2xl",children:"ایجاد تیکت جدید"}),(0,s.jsx)("p",{className:"text-gray-500 text-sm",children:"تیکت شما به دپارتمان مشخص شده ارسال خواهد شد"})]})]}),(0,s.jsx)("div",{className:"bg-white shadow-lg p-6 rounded-xl",children:(0,s.jsxs)("form",{onSubmit:x,className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:["موضوع:",(0,s.jsx)("span",{className:"mr-1 text-red-500",children:"*"})]}),(0,s.jsx)("input",{type:"text",value:h.subject,onChange:e=>b({...h,subject:e.target.value}),placeholder:"موضوع تیکت را وارد کنید...",className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"اولویت:"}),(0,s.jsxs)("select",{value:h.priority,onChange:e=>b({...h,priority:Number(e.target.value)}),className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full",children:[(0,s.jsx)("option",{value:1,children:"کم"}),(0,s.jsx)("option",{value:2,children:"معمولی"}),(0,s.jsx)("option",{value:3,children:"بالا"}),(0,s.jsx)("option",{value:4,children:"فوری"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"دپارتمان:"}),(0,s.jsxs)("select",{value:h.department,onChange:e=>b({...h,department:Number(e.target.value)}),className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full",children:[(0,s.jsx)("option",{value:1,children:"پشتیبانی فنی"}),(0,s.jsx)("option",{value:2,children:"امور مالی"}),(0,s.jsx)("option",{value:3,children:"فروش و تمدید"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:["پیام:",(0,s.jsx)("span",{className:"mr-1 text-red-500",children:"*"})]}),(0,s.jsx)("textarea",{value:h.message,onChange:e=>b({...h,message:e.target.value}),placeholder:"پیام خود را بنویسید...",rows:6,className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full resize-none"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"block mb-3 font-medium text-gray-700 text-sm",children:[(0,s.jsx)(l.A,{className:"inline-block ml-1 w-4 h-4"}),"پیوست‌ها (اختیاری)"]}),(0,s.jsxs)("label",{className:"flex justify-center items-center gap-2 hover:bg-gray-50 p-4 border-2 border-gray-300 border-dashed rounded-xl transition cursor-pointer",children:[(0,s.jsx)(d.A,{className:"w-5 h-5"}),(0,s.jsx)("span",{children:"انتخاب فایل"}),(0,s.jsx)("input",{type:"file",multiple:!0,className:"hidden",onChange:e=>{e.target.files&&(Array.from(e.target.files).forEach(e=>{f(t=>[...t,e])}),e.target.value="")}})]}),r.length>0&&(0,s.jsx)("div",{className:"space-y-2 mt-3",children:r.map((e,t)=>(0,s.jsxs)("div",{className:"flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,s.jsx)(l.A,{className:"w-4 h-4"}),(0,s.jsx)("span",{className:"truncate",children:e.name})]}),(0,s.jsx)("button",{type:"button",onClick:()=>{f(e=>e.filter((e,r)=>r!==t))},className:"text-red-500",children:(0,s.jsx)(c.A,{className:"w-4 h-4"})})]},t))}),(0,s.jsx)("p",{className:"mt-2 text-gray-400 text-xs",children:"می‌توانید هر تعداد فایل انتخاب کنید."})]}),(0,s.jsx)("div",{className:"pt-4",children:(0,s.jsx)("button",{type:"submit",disabled:e,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-70 px-6 py-3 rounded-xl text-white transition-colors",children:e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin"}),(0,s.jsx)("span",{children:"در حال ارسال..."})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.A,{className:"w-5 h-5"}),(0,s.jsx)("span",{children:"ارسال تیکت"})]})})})]})})]})})}},38434:(e,t,r)=>{"use strict";let s,a;r.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>M});var i,o=r(12115);let n={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let r="",s="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":s+="f"==i[1]?u(o,i):i+"{"+u(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=u(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=u.p?u.p(i,o):i+":"+o+";")}return r+(t&&a?t+"{"+a+"}":a)+s},p={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e};function f(e){let t,r,s=this||{},a=e.call?e(s.p):e;return((e,t,r,s,a)=>{var i;let o=m(e),n=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[n]){let t=o!==e?e:(e=>{let t,r,s=[{}];for(;t=l.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(r=t[3].replace(c," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(c," ").trim();return s[0]})(e);p[n]=u(a?{["@keyframes "+n]:t}:t,r?"":"."+n)}let f=r&&p.g;return r&&(p.g=p[n]),i=p[n],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),n})(a.unshift?a.raw?(t=[].slice.call(arguments,1),r=s.p,a.reduce((e,s,a)=>{let i=t[a];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(s.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(s.target),s.g,s.o,s.k)}f.bind({g:1});let h,b,x,y=f.bind({k:1});function g(e,t){let r=this||{};return function(){let s=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;r.p=Object.assign({theme:b&&b()},n),r.o=/go\d/.test(l),n.className=f.apply(r,s)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),x&&d[0]&&x(n),h(d,n)}return t?t(a):a}}var v=(e,t)=>"function"==typeof e?e(t):e,j=(s=0,()=>(++s).toString()),w=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},N="default",k=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},$=(e,t=N)=>{C[t]=k(C[t]||E,e),A.forEach(([e,r])=>{e===t&&r(C[t])})},D=e=>Object.keys(C).forEach(t=>$(e,t)),O=(e=N)=>t=>{$(t,e)},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=e=>(t,r)=>{let s,a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}))(t,e,r);return O(a.toasterId||(s=a.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===s))))({type:2,toast:a}),a.id},M=(e,t)=>_("blank")(e,t);M.error=_("error"),M.success=_("success"),M.loading=_("loading"),M.custom=_("custom"),M.dismiss=(e,t)=>{let r={type:3,toastId:e};t?O(t)(r):D(r)},M.dismissAll=e=>M.dismiss(void 0,e),M.remove=(e,t)=>{let r={type:4,toastId:e};t?O(t)(r):D(r)},M.removeAll=e=>M.remove(void 0,e),M.promise=(e,t,r)=>{let s=M.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?v(t.success,e):void 0;return a?M.success(a,{id:s,...r,...null==r?void 0:r.success}):M.dismiss(s),e}).catch(e=>{let a=t.error?v(t.error,e):void 0;a?M.error(a,{id:s,...r,...null==r?void 0:r.error}):M.dismiss(s)}),e};var z=1e3,I=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
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
    animation: ${T} 0.15s ease-out forwards;
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
`,L=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,R=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=y`
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
}`,q=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
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
`,B=g("div")`
  position: absolute;
`,Y=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Z=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,G=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(G,null,t):t:"blank"===r?null:o.createElement(Y,null,o.createElement(L,{...s}),"loading"!==r&&o.createElement(B,null,"error"===r?o.createElement(F,{...s}):o.createElement(q,{...s})))},K=g("div")`
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
`,Q=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=o.memo(({toast:e,position:t,style:r,children:s})=>{let a=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[s,a]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(J,{toast:e}),n=o.createElement(Q,{...e.ariaProps},v(e.message,e));return o.createElement(K,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,u.p=void 0,h=i,b=void 0,x=void 0;var W=({id:e,className:t,style:r,onHeightUpdate:s,children:a})=>{let i=o.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:r},a)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:a,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:r,pausedAt:s}=((e={},t=N)=>{let[r,s]=(0,o.useState)(C[t]||E),a=(0,o.useRef)(C[t]);(0,o.useEffect)(()=>(a.current!==C[t]&&s(C[t]),A.push([t,s]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:i}})(e,t),a=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=z)=>{if(a.has(e))return;let r=setTimeout(()=>{a.delete(e),n({type:4,toastId:e})},t);a.set(e,r)},[]);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let s=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(s<0){r.visible&&M.dismiss(r.id);return}return setTimeout(()=>M.dismiss(r.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,s,t]);let n=(0,o.useCallback)(O(t),[t]),l=(0,o.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,o.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,o.useCallback)(()=>{s&&n({type:6,time:Date.now()})},[s,n]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:i}=t||{},o=r.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,o.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}})(r,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(r=>{let i,n,l=r.position||t,d=c.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}),u=(i=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return o.createElement(W,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?X:"",style:u},"custom"===r.type?v(r.message,r):a?a(r):o.createElement(V,{toast:r,position:l}))}))},et=M},63956:(e,t,r)=>{"use strict";r.d(t,{HN:()=>l,SU:()=>o,wo:()=>n});var s=r(61766);function a(e){return"object"!=typeof e||null===e||Array.isArray(e)?null:e}function i(e){return s.A.isAxiosError(e)?e.response?.data:void 0}function o(e,t){let r=a(i(e)),s=r?.message??r?.error;return"string"==typeof s&&s.trim()?s:e instanceof Error&&e.message.trim()?e.message:t}function n(e){let t=a(i(e));return function e(t){if("string"==typeof t)return t.trim()?[t]:[];if(Array.isArray(t))return t.flatMap(e);let r=a(t);return r?Object.values(r).flatMap(e):[]}(t?.errors)}function l(e){return i(e)??e}},68562:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(30772).A)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]])}},e=>{e.O(0,[3986,5228,4286,7504,8441,3794,7358],()=>e(e.s=23464)),_N_E=e.O()}]);