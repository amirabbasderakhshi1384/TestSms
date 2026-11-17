(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9326],{57718:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>A});var a=r(95155),t=r(12115),n=r(73321),i=r(80642),o=r(84286),l=r(46844),c=r(40557),d=r(36483),u=r(28786),m=r(27423),p=r(64577),x=r(99314),g=r(82749),y=r(34018),h=r(1275),N=r(50626),f=r(19707),b=r(9383),w=r(61665),j=r(38434),v=r(47504);function A(){let e=(0,n.useRouter)(),s=(0,n.useSearchParams)().get("tab")||"api-key",[r,A]=(0,t.useState)(!1),[$,S]=(0,t.useState)(""),[_,T]=(0,t.useState)(!1),[P,M]=(0,t.useState)(null),[R,E]=(0,t.useState)("url"),[k,q]=(0,t.useState)("send"),[C,D]=(0,t.useState)("curl");(0,t.useEffect)(()=>{"api-key"===s&&U()},[s]);let U=async()=>{A(!0);try{try{let e=await v.Ay.get("user/Messages/api-key");if(e.data?.data)return void S("string"==typeof e.data.data?e.data.data:e.data.data.apiKey||e.data.data.key||"")}catch{let e=await v.Ay.get("user/Me/api-key");e.data?.data&&S("string"==typeof e.data.data?e.data.data:e.data.data.apiKey||e.data.data.key||"")}}catch(e){console.error("Failed to load API key",e)}finally{A(!1)}},O=async()=>{A(!0);try{let e=await v.Ay.put("user/Messages/api-key");if(e.data?.isSuccess){let s="string"==typeof e.data.data?e.data.data:e.data.data?.apiKey||e.data.data?.key||"";S(s),j.Ay.success(e.data?.message||"کلید API جدید با موفقیت تولید شد")}else j.Ay.error(e.data?.message||"خطا در تولید کلید API")}catch(e){j.Ay.error(e?.response?.data?.message||"خطا در تولید کلید API")}finally{A(!1)}},X=(e,s)=>{navigator.clipboard.writeText(s),M(e),j.Ay.success("کد کپی شد!"),setTimeout(()=>M(null),2e3)},I=[{id:"api-key",label:"ساخت API Key",icon:(0,a.jsx)(l.A,{className:"w-4 h-4"})},{id:"guide",label:"راهنمای متنی و مشخصات API",icon:(0,a.jsx)(c.A,{className:"w-4 h-4"})},{id:"docs",label:"نمونه کدهای کامل",icon:(0,a.jsx)(d.A,{className:"w-4 h-4"}),action:()=>e.push("/dashboard/programming/api-key/docs")}],K=(e,s,r)=>{let a=$||"YOUR_API_KEY",t="https://apis.smsnegar.com";if("url"===e&&"send"===s){let e=`${t}/api/v1/user/Messages/url/single?RecipientNumber=09172378789&Username=your_username&Password=your_password&DomainName=your_domain&SmsLineNumber=3000XXXX&MessageText=${encodeURIComponent("سلام، پیامک تستی")}&ApiKey=${a}`;switch(r){case"curl":return`curl -X GET "${e}"`;case"node":return`const axios = require('axios');

async function sendSingleSms() {
  try {
    const response = await axios.get('${t}/api/v1/user/Messages/url/single', {
      params: {
        RecipientNumber: '09172378789',
        Username: 'your_username',
        Password: 'your_password',
        DomainName: 'your_domain',
        SmsLineNumber: '3000XXXX',
        MessageText: 'سلام، پیامک تستی',
        ApiKey: '${a}'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

sendSingleSms();`;case"python":return`import requests

url = "${t}/api/v1/user/Messages/url/single"
params = {
    "RecipientNumber": "09172378789",
    "Username": "your_username",
    "Password": "your_password",
    "DomainName": "your_domain",
    "SmsLineNumber": "3000XXXX",
    "MessageText": "سلام، پیامک تستی",
    "ApiKey": "${a}"
}

response = requests.get(url, params=params)
print(response.json())`;case"php":return`<?php
$url = "${t}/api/v1/user/Messages/url/single?" . http_build_query([
    'RecipientNumber' => '09172378789',
    'Username'        => 'your_username',
    'Password'        => 'your_password',
    'DomainName'      => 'your_domain',
    'SmsLineNumber'   => '3000XXXX',
    'MessageText'     => 'سلام، پیامک تستی',
    'ApiKey'          => '${a}'
]);

$response = file_get_contents($url);
echo $response;`;case"csharp":return`using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${t}/api/v1/user/Messages/url/single" +
                     "?RecipientNumber=09172378789" +
                     "&Username=your_username" +
                     "&Password=your_password" +
                     "&DomainName=your_domain" +
                     "&SmsLineNumber=3000XXXX" +
                     "&MessageText=" + Uri.EscapeDataString("سلام، پیامک تستی") +
                     "&ApiKey=${a}";

        var response = await client.GetAsync(url);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}}if("url"===e&&"received"===s){let e=`${t}/api/v1/user/Messages/url/received?UserName=your_username&Password=your_password&DomainName=your_domain&ApiKey=${a}&IsAllMessage=true`;switch(r){case"curl":return`curl -X GET "${e}"`;case"node":return`const axios = require('axios');

async function getReceivedSms() {
  try {
    const response = await axios.get('${t}/api/v1/user/Messages/url/received', {
      params: {
        UserName: 'your_username',
        Password: 'your_password',
        DomainName: 'your_domain',
        ApiKey: '${a}',
        IsAllMessage: true,
        FromNumber: '', // اختیاری
        FromDate: '',   // اختیاری
        ToDate: ''      // اختیاری
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

getReceivedSms();`;case"python":return`import requests

url = "${t}/api/v1/user/Messages/url/received"
params = {
    "UserName": "your_username",
    "Password": "your_password",
    "DomainName": "your_domain",
    "ApiKey": "${a}",
    "IsAllMessage": True
}

response = requests.get(url, params=params)
print(response.json())`;case"php":return`<?php
$url = "${t}/api/v1/user/Messages/url/received?" . http_build_query([
    'UserName'     => 'your_username',
    'Password'     => 'your_password',
    'DomainName'   => 'your_domain',
    'ApiKey'       => '${a}',
    'IsAllMessage' => 'true'
]);

$response = file_get_contents($url);
echo $response;`;case"csharp":return`using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${t}/api/v1/user/Messages/url/received" +
                     "?UserName=your_username" +
                     "&Password=your_password" +
                     "&DomainName=your_domain" +
                     "&ApiKey=${a}" +
                     "&IsAllMessage=true";

        var response = await client.GetAsync(url);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}}if("rest"===e&&"send"===s){let e={recipientNumber:"09172378789",username:"your_username",password:"your_password",domainName:"your_domain",smsLineNumber:"3000XXXX",messageText:"سلام، پیامک تستی از REST API",apiKey:a},s=JSON.stringify(e,null,2);switch(r){case"curl":return`curl -X POST "${t}/api/v1/user/Messages/rest/single" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(e)}'`;case"node":return`const axios = require('axios');

async function sendRestSingle() {
  try {
    const payload = ${s};

    const response = await axios.post('${t}/api/v1/user/Messages/rest/single', payload);
    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

sendRestSingle();`;case"python":return`import requests

url = "${t}/api/v1/user/Messages/rest/single"
payload = ${s.replace(/true/g,"True").replace(/false/g,"False")}

response = requests.post(url, json=payload)
print(response.json())`;case"php":return`<?php
$url = "${t}/api/v1/user/Messages/rest/single";
$payload = json_encode([
    "recipientNumber" => "09172378789",
    "username"        => "your_username",
    "password"        => "your_password",
    "domainName"      => "your_domain",
    "smsLineNumber"   => "3000XXXX",
    "messageText"     => "سلام، پیامک تستی از REST API",
    "apiKey"          => "${a}"
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($payload)
]);

$result = curl_exec($ch);
curl_close($ch);
echo $result;`;case"csharp":return`using System;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${t}/api/v1/user/Messages/rest/single";
        string json = @"${s.replace(/"/g,'""')}";

        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}}if("rest"===e&&"received"===s){let e={userName:"your_username",password:"your_password",domainName:"your_domain",apiKey:a,isAllMessage:!0,fromNumber:"09123456789",fromDate:"1403/01/01",toDate:"1403/01/30"},s=JSON.stringify(e,null,2);switch(r){case"curl":return`curl -X POST "${t}/api/v1/user/Messages/rest/received" \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(e)}'`;case"node":return`const axios = require('axios');

async function getRestReceived() {
  try {
    const payload = ${s};

    const response = await axios.post('${t}/api/v1/user/Messages/rest/received', payload);
    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

getRestReceived();`;case"python":return`import requests

url = "${t}/api/v1/user/Messages/rest/received"
payload = ${s.replace(/true/g,"True").replace(/false/g,"False")}

response = requests.post(url, json=payload)
print(response.json())`;case"php":return`<?php
$url = "${t}/api/v1/user/Messages/rest/received";
$payload = json_encode([
    "userName"     => "your_username",
    "password"     => "your_password",
    "domainName"   => "your_domain",
    "apiKey"       => "${a}",
    "isAllMessage" => true,
    "fromNumber"   => "09123456789",
    "fromDate"     => "1403/01/01",
    "toDate"       => "1403/01/30"
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($payload)
]);

$result = curl_exec($ch);
curl_close($ch);
echo $result;`;case"csharp":return`using System;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${t}/api/v1/user/Messages/rest/received";
        string json = @"${s.replace(/"/g,'""')}";

        var content = new StringContent(json, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine(result);
    }
}`}}return""};return(0,a.jsxs)("div",{className:"space-y-6 mx-auto max-w-5xl",children:[(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between sm:items-center gap-4 bg-white shadow-sm p-6 border border-surface-100 rounded-3xl",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"flex justify-center items-center bg-primary-50 rounded-2xl w-12 h-12",children:(0,a.jsx)(u.A,{className:"w-6 h-6 text-primary-600"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"font-black text-surface-900 text-xl",children:"پنل برنامه‌نویسان"}),(0,a.jsx)("p",{className:"text-surface-500 text-sm",children:"مدیریت کلید احراز هویت API و مستندات توسعه‌دهندگان"})]})]}),(0,a.jsx)("div",{className:"flex flex-wrap bg-surface-50 p-1 border border-surface-100 rounded-2xl",children:I.map(r=>(0,a.jsxs)("button",{onClick:()=>r.action?r.action():e.push(`/dashboard/programming/api-key?tab=${r.id}`),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${s===r.id?"bg-white text-primary-600 shadow-sm":"text-surface-500 hover:text-surface-900"}`,children:[r.icon,r.label]},r.id))})]}),(0,a.jsx)(i.N,{mode:"wait",children:(0,a.jsxs)(o.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:["api-key"===s&&(0,a.jsx)("div",{className:"bg-white shadow-sm border border-surface-100 rounded-3xl min-h-100 overflow-hidden",children:r?(0,a.jsx)("div",{className:"flex justify-center items-center py-24",children:(0,a.jsx)("div",{className:"border-4 border-primary-100 border-t-primary-500 rounded-full w-10 h-10 animate-spin"})}):(0,a.jsxs)("div",{className:"space-y-8 p-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,a.jsx)(m.A,{className:"w-5 h-5 text-amber-500"}),(0,a.jsx)("h2",{className:"font-bold text-surface-900 text-lg",children:"ساخت و مدیریت API Key"})]}),(0,a.jsx)("p",{className:"max-w-2xl text-surface-500 text-sm leading-relaxed",children:"از این کلید اختصاصی برای احراز هویت در تمامی متدهای URL و REST API سامانه پیام کوتاه استفاده کنید. با هر بار تولید مجدد، کلید قبلی منقضی خواهد شد."}),(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col items-center gap-4",children:[(0,a.jsxs)("div",{className:"group relative flex-1 w-full",children:[(0,a.jsx)("input",{dir:"ltr",type:"text",readOnly:!0,value:$||"کلیدی یافت نشد، روی دکمه ساخت کلید کلیک کنید",className:"bg-surface-50 px-5 py-4 pr-12 border border-surface-200 rounded-2xl focus:outline-none w-full font-mono text-sm text-surface-800"}),(0,a.jsx)(l.A,{className:"top-1/2 right-4 absolute w-5 h-5 text-surface-400 group-hover:text-primary-500 transition-colors -translate-y-1/2"})]}),(0,a.jsxs)("div",{className:"flex gap-2 w-full sm:w-auto",children:[(0,a.jsxs)("button",{onClick:()=>{$&&(navigator.clipboard.writeText($),T(!0),j.Ay.success("کلید API کپی شد!"),setTimeout(()=>T(!1),2e3))},disabled:!$,className:"flex flex-1 sm:flex-none justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 shadow-lg shadow-primary-600/20 px-6 py-4 rounded-2xl font-bold text-white transition-colors cursor-pointer",children:[_?(0,a.jsx)(p.A,{className:"w-4 h-4"}):(0,a.jsx)(x.A,{className:"w-4 h-4"}),"کپی کلید"]}),(0,a.jsxs)("button",{onClick:O,className:"flex flex-1 sm:flex-none justify-center items-center gap-2 bg-surface-900 hover:bg-black px-6 py-4 rounded-2xl font-bold text-white transition-colors cursor-pointer",children:[(0,a.jsx)(g.A,{className:`w-4 h-4 ${r?"animate-spin":""}`}),$?"تولید مجدد (PUT)":"ساخت API Key"]})]})]}),(0,a.jsxs)("div",{className:"flex gap-4 bg-primary-50 p-5 border border-primary-100 rounded-2xl",children:[(0,a.jsx)(y.A,{className:"mt-0.5 w-5 h-5 text-primary-600 shrink-0"}),(0,a.jsxs)("div",{className:"font-medium text-primary-900 text-xs leading-relaxed",children:[(0,a.jsx)("span",{className:"font-bold",children:"نکته امنیتی و مشخصات فنی:"})," ساخت کلید با متد"," ",(0,a.jsx)("code",{className:"bg-primary-100 px-2 py-0.5 rounded font-mono text-primary-800",children:"PUT /api/v1/user/Messages/api-key"})," ","انجام می‌پذیرد. کلید اختصاصی را در اختیار افراد غیرمجاز قرار ندهید."]})]}),(0,a.jsx)("div",{className:"pt-4 border-t border-surface-100",children:(0,a.jsxs)("button",{onClick:()=>e.push("/dashboard/programming/api-key?tab=guide"),className:"inline-flex items-center gap-2 font-bold text-primary-600 text-sm hover:underline cursor-pointer",children:["مشاهده راهنمای پارامترها و نمونه کدهای API",(0,a.jsx)(h.A,{className:"w-4 h-4"})]})})]})}),"guide"===s&&(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between sm:items-center gap-4 bg-white p-6 border border-surface-100 rounded-3xl shadow-sm",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"font-black text-surface-900 text-lg",children:"انتخاب متد ارتباطی با API"}),(0,a.jsx)("p",{className:"text-surface-500 text-xs mt-1",children:"مشخصات پارامترها و نمونه کدهای پیاده‌سازی برای هر متد"})]}),(0,a.jsxs)("div",{className:"flex gap-2 bg-surface-100 p-1.5 rounded-2xl w-fit",children:[(0,a.jsxs)("button",{onClick:()=>E("url"),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm transition-all cursor-pointer ${"url"===R?"bg-white text-emerald-700 shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,a.jsx)(N.A,{className:"w-4 h-4 text-emerald-600"}),"متد URL (GET)"]}),(0,a.jsxs)("button",{onClick:()=>E("rest"),className:`flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-sm transition-all cursor-pointer ${"rest"===R?"bg-white text-blue-700 shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,a.jsx)(f.A,{className:"w-4 h-4 text-blue-600"}),"متد REST (POST)"]})]})]}),(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsxs)("button",{onClick:()=>q("send"),className:`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer border ${"send"===k?"bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/20":"bg-white text-surface-600 border-surface-200 hover:bg-surface-50"}`,children:[(0,a.jsx)(b.A,{className:"w-4 h-4"}),"ارسال تک پیامک (Single)"]}),(0,a.jsxs)("button",{onClick:()=>q("received"),className:`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer border ${"received"===k?"bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/20":"bg-white text-surface-600 border-surface-200 hover:bg-surface-50"}`,children:[(0,a.jsx)(w.A,{className:"w-4 h-4"}),"دریافت پیامک‌ها (Received)"]})]}),(0,a.jsxs)("div",{className:"bg-white shadow-sm border border-surface-100 rounded-3xl p-8 space-y-8",children:[(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h3",{className:"font-black text-surface-900 text-base",children:"آدرس Endpoint و متد درخواست"}),(0,a.jsx)("span",{className:"text-xs text-surface-400 font-mono",children:"url"===R?"Query String Parameters":"Application / JSON Body"})]}),(0,a.jsxs)("div",{dir:"ltr",className:"flex items-center gap-3 bg-surface-900 p-4 rounded-2xl overflow-x-auto",children:[(0,a.jsx)("span",{className:`px-3 py-1 rounded-lg font-black text-white text-xs ${"url"===R?"bg-emerald-600":"bg-blue-600"}`,children:"url"===R?"GET":"POST"}),(0,a.jsxs)("code",{className:"font-mono text-emerald-400 text-sm whitespace-nowrap",children:["url"===R&&"send"===k&&"/api/v1/user/Messages/url/single","url"===R&&"received"===k&&"/api/v1/user/Messages/url/received","rest"===R&&"send"===k&&"/api/v1/user/Messages/rest/single","rest"===R&&"received"===k&&"/api/v1/user/Messages/rest/received"]})]})]}),"rest"===R?(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h3",{className:"font-bold text-surface-900 text-sm",children:"بدنه درخواست (Request Body - JSON)"}),(0,a.jsxs)("button",{onClick:()=>{X("req-body","send"===k?JSON.stringify({recipientNumber:"09172378789",username:"string",password:"string",domainName:"string",smsLineNumber:"string",messageText:"string",apiKey:$||"string"},null,2):JSON.stringify({userName:"string",password:"string",domainName:"string",apiKey:$||"string",isAllMessage:!0,fromNumber:"string",fromDate:"string",toDate:"string"},null,2))},className:"flex items-center gap-1.5 text-xs text-primary-600 font-bold hover:underline cursor-pointer",children:["req-body"===P?(0,a.jsx)(p.A,{className:"w-3.5 h-3.5 text-emerald-600"}):(0,a.jsx)(x.A,{className:"w-3.5 h-3.5"}),"کپی قالب JSON"]})]}),(0,a.jsx)("pre",{dir:"ltr",className:"bg-surface-900 p-5 rounded-2xl overflow-auto text-emerald-400 font-mono text-xs leading-relaxed",children:"send"===k?`{
  "recipientNumber": "09172378789",
  "username": "string",
  "password": "string",
  "domainName": "string",
  "smsLineNumber": "string",
  "messageText": "string",
  "apiKey": "${$||"string"}"
}`:`{
  "userName": "string",
  "password": "string",
  "domainName": "string",
  "apiKey": "${$||"string"}",
  "isAllMessage": true,
  "fromNumber": "string",
  "fromDate": "string",
  "toDate": "string"
}`})]}):(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h3",{className:"font-bold text-surface-900 text-sm",children:"نمونه آدرس و Query String فراخوانی"}),(0,a.jsxs)("button",{onClick:()=>{X("url-query","send"===k?`https://apis.smsnegar.com/api/v1/user/Messages/url/single?RecipientNumber=09172378789&Username=USERNAME&Password=PASSWORD&DomainName=DOMAIN&SmsLineNumber=3000XXXX&MessageText=سلام&ApiKey=${$||"API_KEY"}`:`https://apis.smsnegar.com/api/v1/user/Messages/url/received?UserName=USERNAME&Password=PASSWORD&DomainName=DOMAIN&ApiKey=${$||"API_KEY"}&IsAllMessage=true`)},className:"flex items-center gap-1.5 text-xs text-primary-600 font-bold hover:underline cursor-pointer",children:["url-query"===P?(0,a.jsx)(p.A,{className:"w-3.5 h-3.5 text-emerald-600"}):(0,a.jsx)(x.A,{className:"w-3.5 h-3.5"}),"کپی نمونه آدرس"]})]}),(0,a.jsx)("pre",{dir:"ltr",className:"bg-surface-900 p-5 rounded-2xl overflow-auto text-emerald-400 font-mono text-xs leading-relaxed whitespace-pre-wrap",children:"send"===k?`https://apis.smsnegar.com/api/v1/user/Messages/url/single?RecipientNumber=09172378789&Username=USERNAME&Password=PASSWORD&DomainName=DOMAIN&SmsLineNumber=3000XXXX&MessageText=MESSAGE_TEXT&ApiKey=${$||"YOUR_API_KEY"}`:`https://apis.smsnegar.com/api/v1/user/Messages/url/received?UserName=USERNAME&Password=PASSWORD&DomainName=DOMAIN&ApiKey=${$||"YOUR_API_KEY"}&IsAllMessage=true&FromNumber=FROM_NUMBER&FromDate=FROM_DATE&ToDate=TO_DATE`})]}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("h3",{className:"font-black text-surface-900 text-sm",children:"جدول مشخصات و توضیحات پارامترها"}),(0,a.jsxs)("div",{className:"border border-surface-200 rounded-2xl overflow-hidden",children:[(0,a.jsxs)("div",{className:"grid grid-cols-12 bg-surface-100/70 p-3.5 font-black text-surface-700 text-xs",children:[(0,a.jsx)("span",{className:"col-span-3",children:"نام پارامتر"}),(0,a.jsx)("span",{className:"col-span-2 text-center",children:"نوع داده"}),(0,a.jsx)("span",{className:"col-span-2 text-center",children:"وضعیت"}),(0,a.jsx)("span",{className:"col-span-5",children:"توضیحات"})]}),(0,a.jsx)("div",{className:"divide-y divide-surface-100",children:("url"===R?"send"===k?[{name:"RecipientNumber",type:"string",required:!0,desc:"شماره موبایل گیرنده پیامک (مثال: 09123456789)"},{name:"Username",type:"string",required:!0,desc:"نام کاربری حساب شما در سامانه"},{name:"Password",type:"string",required:!0,desc:"رمز عبور حساب کاربری سامانه"},{name:"DomainName",type:"string",required:!0,desc:"دامنه یا شناسه سامانه پیامک"},{name:"SmsLineNumber",type:"string",required:!0,desc:"شماره خط اختصاصی یا اشتراکی ارسال‌کننده پیامک"},{name:"MessageText",type:"string",required:!0,desc:"متن پیامک ارسالی (به صورت URL-Encoded)"},{name:"ApiKey",type:"string",required:!0,desc:"کلید API احراز هویت دریافت‌شده از تب ساخت API Key"}]:[{name:"UserName",type:"string",required:!0,desc:"نام کاربری حساب شما در سامانه"},{name:"Password",type:"string",required:!0,desc:"رمز عبور حساب کاربری سامانه"},{name:"DomainName",type:"string",required:!0,desc:"دامنه یا شناسه سامانه پیامک"},{name:"ApiKey",type:"string",required:!0,desc:"کلید API احراز هویت"},{name:"IsAllMessage",type:"boolean",required:!0,desc:"دریافت همه پیام‌ها (مقدار true یا false)"},{name:"FromNumber",type:"string",required:!1,desc:"فیلتر بر اساس شماره فرستنده پیامک (اختیاری)"},{name:"FromDate",type:"string",required:!1,desc:"فیلتر تاریخ شروع (اختیاری)"},{name:"ToDate",type:"string",required:!1,desc:"فیلتر تاریخ پایان (اختیاری)"}]:"send"===k?[{name:"recipientNumber",type:"string",required:!0,desc:"شماره موبایل گیرنده پیامک (مثال: 09172378789)"},{name:"username",type:"string",required:!0,desc:"نام کاربری ورود به سامانه"},{name:"password",type:"string",required:!0,desc:"رمز عبور حساب کاربری"},{name:"domainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"smsLineNumber",type:"string",required:!0,desc:"شماره خط فرستنده اختصاصی پیامک"},{name:"messageText",type:"string",required:!0,desc:"متن پیامک ارسالی"},{name:"apiKey",type:"string",required:!0,desc:"کلید اختصاصی API Key جهت احراز هویت"}]:[{name:"userName",type:"string",required:!0,desc:"نام کاربری ورود به سامانه"},{name:"password",type:"string",required:!0,desc:"رمز عبور حساب کاربری"},{name:"domainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"apiKey",type:"string",required:!0,desc:"کلید اختصاصی API Key جهت احراز هویت"},{name:"isAllMessage",type:"boolean",required:!0,desc:"دریافت تمامی پیامک‌ها (مقدار true)"},{name:"fromNumber",type:"string",required:!1,desc:"فیلتر شماره ارسال‌کننده (اختیاری)"},{name:"fromDate",type:"string",required:!1,desc:"تاریخ ابتدایی جستجو (اختیاری)"},{name:"toDate",type:"string",required:!1,desc:"تاریخ انتهایی جستجو (اختیاری)"}]).map(e=>(0,a.jsxs)("div",{className:"grid grid-cols-12 items-center p-3.5 text-xs",children:[(0,a.jsx)("span",{className:"col-span-3 font-mono font-bold text-primary-600",dir:"ltr",children:e.name}),(0,a.jsx)("span",{className:"col-span-2 text-center font-mono text-surface-500",children:e.type}),(0,a.jsx)("span",{className:"col-span-2 text-center",children:e.required?(0,a.jsx)("span",{className:"inline-block bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full text-[10px] font-bold",children:"اجباری *"}):(0,a.jsx)("span",{className:"inline-block bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full text-[10px] font-medium",children:"اختیاری"})}),(0,a.jsx)("span",{className:"col-span-5 text-surface-600 leading-relaxed",children:e.desc})]},e.name))})]})]}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("h3",{className:"font-bold text-surface-900 text-sm",children:"نمونه ساختار پاسخ سرور (JSON Response)"}),(0,a.jsx)("pre",{dir:"ltr",className:"bg-surface-900 p-5 rounded-2xl overflow-auto text-emerald-400 font-mono text-xs leading-relaxed",children:"send"===k?`{
  "isSuccess": true,
  "message": "پیام با موفقیت ارسال شد",
  "data": {
    "messageId": 12849502,
    "cost": 120,
    "status": 1
  }
}`:`{
  "isSuccess": true,
  "message": "دریافت پیام‌ها با موفقیت انجام شد",
  "data": [
    {
      "id": 1024,
      "senderNumber": "09121111111",
      "receiverNumber": "3000XXXX",
      "messageText": "پاسخ مشتری به پیامک",
      "receivedDate": "1403/01/15 14:30:20"
    }
  ]
}`})]}),(0,a.jsxs)("div",{className:"space-y-4 pt-6 border-t border-surface-100",children:[(0,a.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between sm:items-center gap-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-black text-surface-900 text-base",children:"سورس کد نمونه جهت استفاده در پروژه‌ها"}),(0,a.jsx)("p",{className:"text-surface-400 text-xs",children:"کد آماده اجرا در زبان مورد نظر خود را کپی کنید"})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1.5 bg-surface-100 p-1 rounded-xl",children:["curl","node","python","php","csharp"].map(e=>(0,a.jsx)("button",{onClick:()=>D(e),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${C===e?"bg-white text-primary-600 shadow-sm":"text-surface-500 hover:text-surface-800"}`,children:"csharp"===e?"C#":"node"===e?"Node.js":e.toUpperCase()},e))})]}),(0,a.jsxs)("div",{className:"relative group bg-surface-900 rounded-2xl overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center bg-white/5 px-4 py-2 border-b border-white/5",children:[(0,a.jsxs)("span",{className:"font-mono text-[11px] text-white/50 uppercase",children:[R.toUpperCase()," | ","send"===k?"SEND SINGLE":"GET RECEIVED"," | ",C.toUpperCase()]}),(0,a.jsx)("button",{onClick:()=>{let e=K(R,k,C);X(`code-${R}-${k}-${C}`,e)},className:"flex items-center gap-1.5 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-xs text-white transition-colors cursor-pointer",children:P===`code-${R}-${k}-${C}`?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.A,{className:"w-3.5 h-3.5 text-emerald-400"}),(0,a.jsx)("span",{children:"کپی شد!"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.A,{className:"w-3.5 h-3.5"}),(0,a.jsx)("span",{children:"کپی کد"})]})})]}),(0,a.jsx)("pre",{dir:"ltr",className:"p-5 overflow-x-auto font-mono text-xs text-emerald-400 leading-relaxed custom-scrollbar max-h-96",children:(0,a.jsx)("code",{children:K(R,k,C)})})]})]})]})]})]},s)})]})}},93715:(e,s,r)=>{Promise.resolve().then(r.bind(r,57718))}},e=>{e.O(0,[3986,5228,4286,9924,7504,8441,3794,7358],()=>e(e.s=93715)),_N_E=e.O()}]);