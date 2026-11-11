(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1354],{11221:(e,t,s)=>{Promise.resolve().then(s.bind(s,95230))},14577:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]])},38434:(e,t,s)=>{"use strict";let a,r;s.d(t,{Toaster:()=>ee,Ay:()=>et,oR:()=>L});var i,l=s(12115);let n={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let s="",a="",r="";for(let i in e){let l=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+l+";":a+="f"==i[1]?u(l,i):i+"{"+u(l,"k"==i[1]?"":t)+"}":"object"==typeof l?a+=u(l,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=l&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(i,l):i+":"+l+";")}return s+(t&&r?t+"{"+r+"}":r)+a},m={},p=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+p(e[s]);return t}return e};function f(e){let t,s,a=this||{},r=e.call?e(a.p):e;return((e,t,s,a,r)=>{var i;let l=p(e),n=m[l]||(m[l]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(l));if(!m[n]){let t=l!==e?e:(e=>{let t,s,a=[{}];for(;t=o.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(c," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);m[n]=u(r?{["@keyframes "+n]:t}:t,s?"":"."+n)}let f=s&&m.g;return s&&(m.g=m[n]),i=m[n],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n})(r.unshift?r.raw?(t=[].slice.call(arguments,1),s=a.p,r.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"")):r.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):r,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(a.target),a.g,a.o,a.k)}f.bind({g:1});let x,h,b,g=f.bind({k:1});function y(e,t){let s=this||{};return function(){let a=arguments;function r(i,l){let n=Object.assign({},i),o=n.className||r.className;s.p=Object.assign({theme:h&&h()},n),s.o=/go\d/.test(o),n.className=f.apply(s,a)+(o?" "+o:""),t&&(n.ref=l);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),x(d,n)}return t?t(r):r}}var v=(e,t)=>"function"==typeof e?e(t):e,j=(a=0,()=>(++a).toString()),N=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w="default",k=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},A=[],C={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},S=(e,t=w)=>{E[t]=k(E[t]||C,e),A.forEach(([e,s])=>{e===t&&s(E[t])})},I=e=>Object.keys(E).forEach(t=>S(e,t)),$=(e=w)=>t=>{S(t,e)},D={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=e=>(t,s)=>{let a,r=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||j()}))(t,e,s);return $(r.toasterId||(a=r.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:r}),r.id},L=(e,t)=>O("blank")(e,t);L.error=O("error"),L.success=O("success"),L.loading=O("loading"),L.custom=O("custom"),L.dismiss=(e,t)=>{let s={type:3,toastId:e};t?$(t)(s):I(s)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let s={type:4,toastId:e};t?$(t)(s):I(s)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,s)=>{let a=L.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?v(t.success,e):void 0;return r?L.success(r,{id:a,...s,...null==s?void 0:s.success}):L.dismiss(a),e}).catch(e=>{let r=t.error?v(t.error,e):void 0;r?L.error(r,{id:a,...s,...null==s?void 0:s.error}):L.dismiss(a)}),e};var _=1e3,z=g`
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
}`,P=g`
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

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=g`
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
  animation: ${T} 1s linear infinite;
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
`,J=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?l.createElement(G,null,t):t:"blank"===s?null:l.createElement(Y,null,l.createElement(H,{...a}),"loading"!==s&&l.createElement(B,null,"error"===s?l.createElement(F,{...a}):l.createElement(U,{...a})))},K=y("div")`
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
`,V=l.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,r]=N()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=l.createElement(J,{toast:e}),n=l.createElement(Q,{...e.ariaProps},v(e.message,e));return l.createElement(K,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:n}):l.createElement(l.Fragment,null,i,n))});i=l.createElement,u.p=void 0,x=i,h=void 0,b=void 0;var W=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let i=l.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return l.createElement("div",{ref:i,className:t,style:s},r)},X=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,toasterId:i,containerStyle:n,containerClassName:o})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:a}=((e={},t=w)=>{let[s,a]=(0,l.useState)(E[t]||C),r=(0,l.useRef)(E[t]);(0,l.useEffect)(()=>(r.current!==E[t]&&a(E[t]),A.push([t,a]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let i=s.toasts.map(t=>{var s,a,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||D[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...s,toasts:i}})(e,t),r=(0,l.useRef)(new Map).current,i=(0,l.useCallback)((e,t=_)=>{if(r.has(e))return;let s=setTimeout(()=>{r.delete(e),n({type:4,toastId:e})},t);r.set(e,s)},[]);(0,l.useEffect)(()=>{if(a)return;let e=Date.now(),r=s.map(s=>{if(s.duration===1/0)return;let a=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(a<0){s.visible&&L.dismiss(s.id);return}return setTimeout(()=>L.dismiss(s.id,t),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[s,a,t]);let n=(0,l.useCallback)($(t),[t]),o=(0,l.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,l.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,l.useCallback)(()=>{a&&n({type:6,time:Date.now()})},[a,n]),u=(0,l.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=t||{},l=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=l.findIndex(t=>t.id===e.id),o=l.filter((e,t)=>t<n&&e.visible).length;return l.filter(e=>e.visible).slice(...a?[o+1]:[0,o]).reduce((e,t)=>e+(t.height||0)+r,0)},[s]);return(0,l.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[s,i]),{toasts:s,handlers:{updateHeight:d,startPause:o,endPause:c,calculateOffset:u}}})(s,i);return l.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let i,n,o=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}),u=(i=o.includes("top"),n=o.includes("center")?{justifyContent:"center"}:o.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:N()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return l.createElement(W,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?X:"",style:u},"custom"===s.type?v(s.message,s):r?r(s):l.createElement(V,{toast:s,position:o}))}))},et=L},38651:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var a=s(95155);function r({value:e,onChange:t,lines:s,className:i="bg-primary-50 border-2 border-primary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 rounded-xl px-4 py-2.5 w-full font-bold text-primary-700 appearance-none outline-none transition-all text-sm",placeholder:l="انتخاب شماره فرستنده",disabled:n}){return(0,a.jsxs)("select",{value:e,onChange:e=>t(e.target.value),className:i,dir:"ltr",disabled:n,children:[0===s.length&&(0,a.jsx)("option",{value:"",children:l}),s.map(e=>(0,a.jsx)("option",{value:String(e.id),children:e.number},e.id))]})}},62286:(e,t,s)=>{"use strict";s.d(t,{F:()=>l});var a=s(12115),r=s(47504);function i(e,t){for(let s of t)if(null!=e[s]&&""!==e[s])return e[s]}function l(){let[e,t]=(0,a.useState)([]),[s,l]=(0,a.useState)(""),[n,o]=(0,a.useState)(!0);(0,a.useEffect)(()=>{let e=!1;return r.Ay.get("user/DedicatedSmsLines").then(s=>{var a;if(e)return;let r=(Array.isArray(a=s.data?.data??s.data)?a:Array.isArray(a?.items)?a.items:Array.isArray(a?.data)?a.data:[]).map(e=>{if(!e||"object"!=typeof e)return null;let t=Number(i(e,["id","Id","dedicatedSmsLineId","DedicatedSmsLineId"])??0),s=String(i(e,["number","Number","lineNumber","LineNumber","smsLineNumber","SmsLineNumber","senderNumber","SenderNumber"])??"").trim();return Number.isFinite(t)&&!(t<=0)&&s?{id:t,number:s}:null}).filter(e=>null!==e);t(r),l(e=>e||(r[0]?String(r[0].id):""))}).catch(()=>{e||t([])}).finally(()=>{e||o(!1)}),()=>{e=!0}},[]);let d=e.find(e=>String(e.id)===s)??null,c=s?Number(s):0;return{lines:e,isLoading:n,selectedId:s,setSelectedId:l,selectedLine:d,dedicatedSmsLineId:c}}},67033:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});let a=(0,s(30772).A)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},95230:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var a=s(95155),r=s(12115),i=s(84286),l=s(67033),n=s(14577),o=s(25182),d=s(2125),c=s(65738),u=s(38434),m=s(26875),p=s(62286),f=s(38651);let x=[{id:1,name:"تهران"},{id:2,name:"اصفهان"},{id:3,name:"فارس"},{id:4,name:"خراسان رضوی"},{id:5,name:"آذربایجان شرقی"},{id:6,name:"خوزستان"},{id:7,name:"مازندران"},{id:8,name:"گیلان"},{id:9,name:"کرمان"},{id:10,name:"البرز"}];function h(){let[e,t]=(0,r.useState)(""),{lines:s,selectedId:h,setSelectedId:b}=(0,p.F)(),[g,y]=(0,r.useState)("تهران"),[v,j]=(0,r.useState)("-----------"),[N,w]=(0,r.useState)(""),[k,A]=(0,r.useState)(null),[C,E]=(0,r.useState)(""),[S,I]=(0,r.useState)(""),[$,D]=(0,r.useState)([]),{charCount:O,smsCount:L}=(0,m.Hw)(e);return(0,a.jsx)("div",{className:"mx-auto max-w-6xl",children:(0,a.jsxs)(i.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"card",children:[(0,a.jsx)("div",{className:"bg-linear-to-r from-yellow-500 to-orange-600 p-4 rounded-t-xl text-white",children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:"flex justify-center items-center bg-white/20 rounded-xl w-10 h-10",children:(0,a.jsx)(l.A,{className:"w-5 h-5"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-bold text-lg",children:"ارسال پیامک به شهر و استان ایرانسل"}),(0,a.jsx)("p",{className:"text-white/80 text-xs",children:"ارسال پیامک منطقه ای به شماره های ایرانسل"})]})]})}),(0,a.jsx)("div",{className:"bg-blue-50 m-4 p-4 border border-blue-100 rounded-lg",children:(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(n.A,{className:"mt-0.5 w-5 h-5 text-blue-500"}),(0,a.jsxs)("div",{className:"text-blue-800 text-sm",children:[(0,a.jsx)("p",{className:"font-medium",children:"راهنمای استفاده"}),(0,a.jsx)("p",{className:"mt-1 text-blue-700",children:"استان و شهرستان مورد نظر را انتخاب کنید، سپس پیش شماره و تعداد را مشخص کنید. پس از مشاهده تعداد شماره‌ها، تعداد مورد نظر را وارد کرده و افزوده شود را بزنید."})]})]})}),(0,a.jsxs)("div",{className:"gap-4 grid grid-cols-1 lg:grid-cols-2 p-4",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-primary-600 text-sm",children:"شماره فرستنده:"}),(0,a.jsx)(f.A,{value:h,onChange:b,lines:s})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"متن پیامک:"}),(0,a.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),rows:8,className:"text-sm resize-none input-field",placeholder:"متن پیامک خود را وارد کنید..."}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-2 text-surface-500 text-xs",children:[(0,a.jsxs)("span",{children:[O," کاراکتر"]}),(0,a.jsxs)("span",{children:[L," پیام"]})]})]})]}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"gap-2 grid grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"استان:"}),(0,a.jsx)("select",{value:g,onChange:e=>y(e.target.value),className:"text-sm input-field",children:x.map(e=>(0,a.jsx)("option",{value:e.name,children:e.name},e.id))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"شهرستان:"}),(0,a.jsxs)("select",{value:v,onChange:e=>j(e.target.value),className:"text-sm input-field",children:[(0,a.jsx)("option",{children:"-----------"}),(0,a.jsx)("option",{children:"مرکزی"}),(0,a.jsx)("option",{children:"شمالی"}),(0,a.jsx)("option",{children:"جنوبی"})]})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"پیش شماره:"}),(0,a.jsx)("input",{type:"text",value:N,onChange:e=>w(e.target.value),className:"text-sm input-field",placeholder:"مثال: 09351 یا 9351",dir:"ltr"}),(0,a.jsx)("p",{className:"mt-1 text-surface-500 text-xs",children:"مثال: 09351 یا 9351"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4 bg-surface-50 p-3 rounded-lg",children:[(0,a.jsxs)("button",{onClick:()=>{A(Math.floor(5e4*Math.random()+5e3))},className:"flex items-center gap-2 text-sm btn-secondary",children:[(0,a.jsx)(o.A,{className:"w-4 h-4"}),"مشاهده تعداد شماره"]}),(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"text-surface-500",children:"تعداد: "}),(0,a.jsx)("span",{className:"font-bold text-primary-600",children:k?k.toLocaleString("fa-IR"):"----"})]})]}),(0,a.jsxs)("div",{className:"gap-2 grid grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"از ردیف:"}),(0,a.jsx)("input",{type:"number",value:C,onChange:e=>E(e.target.value),className:"text-sm input-field",placeholder:"از ردیف..."})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-1.5 font-medium text-surface-700 text-sm",children:"تعداد:"}),(0,a.jsx)("input",{type:"number",value:S,onChange:e=>I(e.target.value),className:"text-sm input-field",placeholder:"تعداد"})]})]}),(0,a.jsxs)("button",{onClick:()=>{S?(D([...$,{province:g,city:v,prefix:N,fromRow:C,count:parseInt(S)}]),I(""),A(null),E(""),u.Ay.success("افزوده شد")):u.Ay.error("تعداد را وارد کنید")},className:"flex justify-center items-center gap-2 py-2.5 w-full btn-primary",children:[(0,a.jsx)(d.A,{className:"w-4 h-4"}),"افزوده شود"]}),$.length>0&&(0,a.jsxs)("div",{className:"border border-surface-200 rounded-lg overflow-hidden",children:[(0,a.jsx)("div",{className:"bg-surface-50 px-3 py-2 font-medium text-surface-700 text-sm",children:"موارد اضافه شده"}),(0,a.jsx)("div",{className:"max-h-40 overflow-y-auto",children:$.map((e,t)=>(0,a.jsxs)("div",{className:"flex justify-between items-center px-3 py-2 border-surface-100 border-b last:border-b-0",children:[(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"text-surface-800",children:e.province}),(0,a.jsx)("span",{className:"mx-1 text-surface-500",children:"|"}),(0,a.jsx)("span",{className:"text-surface-600",children:e.city}),e.prefix&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mx-1 text-surface-500",children:"|"}),(0,a.jsx)("span",{className:"text-surface-600",dir:"ltr",children:e.prefix})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"text-surface-600 text-sm",children:e.count.toLocaleString("fa-IR")}),(0,a.jsx)("button",{onClick:()=>{D($.filter((e,s)=>s!==t))},className:"hover:bg-red-50 p-1 rounded text-red-500",children:(0,a.jsx)(c.A,{className:"w-4 h-4"})})]})]},t))})]})]})]}),(0,a.jsx)("div",{className:"p-4 border-surface-100 border-t",children:(0,a.jsx)("button",{className:"py-3 w-full btn-primary",children:"ثبت نهایی"})})]})})}}},e=>{e.O(0,[3986,5228,4286,7504,8441,3794,7358],()=>e(e.s=11221)),_N_E=e.O()}]);