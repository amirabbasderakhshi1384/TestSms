(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2614],{9005:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},15561:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]])},23464:(e,t,s)=>{Promise.resolve().then(s.bind(s,29938))},29938:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(95155),r=s(12115),i=s(84286),o=s(25494),l=s(15561),n=s(68562),d=s(9005),c=s(9383),u=s(38434),p=s(47504);function m(){let[e,t]=(0,r.useState)(!1),[s,m]=(0,r.useState)([]),[f,h]=(0,r.useState)({subject:"",message:"",priority:1,department:1}),b=async e=>{if(e.preventDefault(),!f.subject.trim()||!f.message.trim())return void u.Ay.error("لطفا موضوع و پیام را وارد کنید");t(!0);try{let e=new FormData;e.append("Subject",f.subject),e.append("Priority",String(f.priority)),e.append("Department",String(f.department)),e.append("MessageText",f.message),s.forEach(t=>{e.append("File",t)});let t=await p.Ay.post("user/Tickets",e,{headers:{"Content-Type":"multipart/form-data"}});if(!t.data.isSuccess)return void u.Ay.error(t.data.message);u.Ay.success(t.data.message),h({subject:"",message:"",priority:1,department:1}),m([])}catch(e){u.Ay.error(e.response?.data?.message||"خطا در ثبت تیکت")}finally{t(!1)}};return(0,a.jsx)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"p-6",children:(0,a.jsxs)("div",{className:"mx-auto max-w-3xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-6",children:[(0,a.jsx)("div",{className:"flex justify-center items-center bg-blue-100 rounded-xl w-12 h-12",children:(0,a.jsx)(o.A,{className:"w-6 h-6 text-blue-600"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"font-bold text-gray-800 text-2xl",children:"ایجاد تیکت جدید"}),(0,a.jsx)("p",{className:"text-gray-500 text-sm",children:"تیکت شما به دپارتمان مشخص شده ارسال خواهد شد"})]})]}),(0,a.jsx)("div",{className:"bg-white shadow-lg p-6 rounded-xl",children:(0,a.jsxs)("form",{onSubmit:b,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:["موضوع:",(0,a.jsx)("span",{className:"mr-1 text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"text",value:f.subject,onChange:e=>h({...f,subject:e.target.value}),placeholder:"موضوع تیکت را وارد کنید...",className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"اولویت:"}),(0,a.jsxs)("select",{value:f.priority,onChange:e=>h({...f,priority:Number(e.target.value)}),className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full",children:[(0,a.jsx)("option",{value:1,children:"کم"}),(0,a.jsx)("option",{value:2,children:"معمولی"}),(0,a.jsx)("option",{value:3,children:"بالا"}),(0,a.jsx)("option",{value:4,children:"فوری"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:"دپارتمان:"}),(0,a.jsxs)("select",{value:f.department,onChange:e=>h({...f,department:Number(e.target.value)}),className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full",children:[(0,a.jsx)("option",{value:1,children:"پشتیبانی فنی"}),(0,a.jsx)("option",{value:2,children:"امور مالی"}),(0,a.jsx)("option",{value:3,children:"فروش و تمدید"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block mb-2 font-medium text-gray-700 text-sm",children:["پیام:",(0,a.jsx)("span",{className:"mr-1 text-red-500",children:"*"})]}),(0,a.jsx)("textarea",{value:f.message,onChange:e=>h({...f,message:e.target.value}),placeholder:"پیام خود را بنویسید...",rows:6,className:"px-4 py-3 border border-gray-200 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500 w-full resize-none"})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"block mb-3 font-medium text-gray-700 text-sm",children:[(0,a.jsx)(l.A,{className:"inline-block ml-1 w-4 h-4"}),"پیوست‌ها (اختیاری)"]}),(0,a.jsxs)("label",{className:"flex justify-center items-center gap-2 hover:bg-gray-50 p-4 border-2 border-gray-300 border-dashed rounded-xl transition cursor-pointer",children:[(0,a.jsx)(n.A,{className:"w-5 h-5"}),(0,a.jsx)("span",{children:"انتخاب فایل"}),(0,a.jsx)("input",{type:"file",multiple:!0,className:"hidden",onChange:e=>{e.target.files&&(Array.from(e.target.files).forEach(e=>{m(t=>[...t,e])}),e.target.value="")}})]}),s.length>0&&(0,a.jsx)("div",{className:"space-y-2 mt-3",children:s.map((e,t)=>(0,a.jsxs)("div",{className:"flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,a.jsx)(l.A,{className:"w-4 h-4"}),(0,a.jsx)("span",{className:"truncate",children:e.name})]}),(0,a.jsx)("button",{type:"button",onClick:()=>{m(e=>e.filter((e,s)=>s!==t))},className:"text-red-500",children:(0,a.jsx)(d.A,{className:"w-4 h-4"})})]},t))}),(0,a.jsx)("p",{className:"mt-2 text-gray-400 text-xs",children:"می‌توانید هر تعداد فایل انتخاب کنید."})]}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)("button",{type:"submit",disabled:e,className:"flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-70 px-6 py-3 rounded-xl text-white transition-colors",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin"}),(0,a.jsx)("span",{children:"در حال ارسال..."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{className:"w-5 h-5"}),(0,a.jsx)("span",{children:"ارسال تیکت"})]})})})]})})]})})}},38434:(e,t,s)=>{"use strict";let a,r;s.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>z});var i,o=s(12115);let l={data:""},n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?u(o,i):i+"{"+u(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=u(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function f(e){let t,s,a=this||{},r=e.call?e(a.p):e;return((e,t,s,a,r)=>{var i;let o=m(e),l=p[o]||(p[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!p[l]){let t=o!==e?e:(e=>{let t,s,a=[{}];for(;t=n.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(c," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);p[l]=u(r?{["@keyframes "+l]:t}:t,s?"":"."+l)}let f=s&&p.g;return s&&(p.g=p[l]),i=p[l],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),l})(r.unshift?r.raw?(t=[].slice.call(arguments,1),s=a.p,r.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l})(a.target),a.g,a.o,a.k)}f.bind({g:1});let h,b,x,g=f.bind({k:1});function y(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;s.p=Object.assign({theme:b&&b()},l),s.o=/go\d/.test(n),l.className=f.apply(s,a)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),x&&d[0]&&x(l),h(d,l)}return t?t(r):r}}var v=(e,t)=>"function"==typeof e?e(t):e,j=(a=0,()=>(++a).toString()),w=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},N="default",k=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},C={},$=(e,t=N)=>{C[t]=k(C[t]||E,e),A.forEach(([e,s])=>{e===t&&s(C[t])})},D=e=>Object.keys(C).forEach(t=>$(e,t)),O=(e=N)=>t=>{$(t,e)},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=e=>(t,s)=>{let a,r=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||j()}))(t,e,s);return O(r.toasterId||(a=r.id,Object.keys(C).find(e=>C[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},z=(e,t)=>_("blank")(e,t);z.error=_("error"),z.success=_("success"),z.loading=_("loading"),z.custom=_("custom"),z.dismiss=(e,t)=>{let s={type:3,toastId:e};t?O(t)(s):D(s)},z.dismissAll=e=>z.dismiss(void 0,e),z.remove=(e,t)=>{let s={type:4,toastId:e};t?O(t)(s):D(s)},z.removeAll=e=>z.remove(void 0,e),z.promise=(e,t,s)=>{let a=z.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?v(t.success,e):void 0;return r?z.success(r,{id:a,...s,...null==s?void 0:s.success}):z.dismiss(a),e}).catch(e=>{let r=t.error?v(t.error,e):void 0;r?z.error(r,{id:a,...s,...null==s?void 0:s.error}):z.dismiss(a)}),e};var I=1e3,P=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
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
`,H=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${H} 1s linear infinite;
`,R=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,q=g`
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
}`,U=y("div")`
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
    animation: ${q} 0.2s ease-out forwards;
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
`,B=y("div")`
  position: absolute;
`,Y=y("div")`
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
}`,G=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(G,null,t):t:"blank"===s?null:o.createElement(Y,null,o.createElement(L,{...a}),"loading"!==s&&o.createElement(B,null,"error"===s?o.createElement(F,{...a}):o.createElement(U,{...a})))},K=y("div")`
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
`,Q=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,V=o.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=w()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(J,{toast:e}),l=o.createElement(Q,{...e.ariaProps},v(e.message,e));return o.createElement(K,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))});i=o.createElement,u.p=void 0,h=i,b=void 0,x=void 0;var W=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let i=o.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:s},r)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,toasterId:i,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:a}=((e={},t=N)=>{let[s,a]=(0,o.useState)(C[t]||E),r=(0,o.useRef)(C[t]);(0,o.useEffect)(()=>(r.current!==C[t]&&a(C[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=s.toasts.map(t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...s,toasts:i}})(e,t),r=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=I)=>{if(r.has(e))return;let s=setTimeout(()=>{r.delete(e),l({type:4,toastId:e})},t);r.set(e,s)},[]);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=s.map(s=>{if(s.duration===1/0)return;let a=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(a<0){s.visible&&z.dismiss(s.id);return}return setTimeout(()=>z.dismiss(s.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let l=(0,o.useCallback)(O(t),[t]),n=(0,o.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,o.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,o.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[s]);return(0,o.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}})(s,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let i,l,n=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(i=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:w()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...l});return o.createElement(W,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?X:"",style:u},"custom"===s.type?v(s.message,s):r?r(s):o.createElement(V,{toast:s,position:n}))}))},et=z},68562:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]])}},e=>{e.O(0,[3986,5228,4286,7504,8441,3794,7358],()=>e(e.s=23464)),_N_E=e.O()}]);