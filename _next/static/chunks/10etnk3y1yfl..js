(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,689664,e=>{"use strict";let s=(0,e.i(456420).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,s],689664)},508734,e=>{"use strict";let s=(0,e.i(456420).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",0,s],508734)},13285,e=>{"use strict";let s=(0,e.i(456420).default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);e.s(["Layers",0,s],13285)},768877,e=>{"use strict";let s=(0,e.i(456420).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,s],768877)},667774,e=>{"use strict";var s=e.i(843476),r=e.i(271645),a=e.i(508734),t=e.i(689664),n=e.i(584026),i=e.i(91511),o=e.i(13285),d=e.i(730274),l=e.i(444594);let c=(0,e.i(456420).default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);var u=e.i(768877),p=e.i(705766),m=e.i(618566);let x=({code:e,language:n,label:i})=>{let[o,d]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"group bg-surface-900 mb-6 border border-white/5 rounded-2xl overflow-hidden shadow-lg",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center bg-white/5 px-4 py-2.5 border-b border-white/5",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"font-bold text-[10px] text-white/40 uppercase tracking-widest",children:n}),(0,s.jsx)("span",{className:"font-medium text-white/80 text-xs",children:i})]}),(0,s.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(e),d(!0),p.default.success("کد در کلیپ‌بورد کپی شد!"),setTimeout(()=>d(!1),2e3)},className:"flex items-center gap-1.5 hover:bg-white/10 px-2.5 py-1 rounded-lg text-white/60 hover:text-white transition-colors cursor-pointer text-xs",children:[o?(0,s.jsx)(t.Check,{className:"w-3.5 h-3.5 text-emerald-400"}):(0,s.jsx)(a.Copy,{className:"w-3.5 h-3.5"}),(0,s.jsx)("span",{children:o?"کپی شد":"کپی"})]})]}),(0,s.jsx)("pre",{className:"bg-black/25 p-5 max-h-[460px] overflow-x-auto font-mono text-[13px] leading-relaxed custom-scrollbar text-emerald-400",dir:"ltr",children:(0,s.jsx)("code",{children:e})})]})};e.s(["default",0,function(){let e=(0,m.useRouter)(),[a,t]=(0,r.useState)("url"),[p,g]=(0,r.useState)("send"),[y,h]=(0,r.useState)("node"),f="https://apis.smsnegar.com",N={"url-send-curl":`curl -X GET "${f}/api/v1/user/Messages/url/single?RecipientNumber=09172378789&Username=your_username&Password=your_password&DomainName=your_domain&SmsLineNumber=3000XXXX&MessageText=${encodeURIComponent("سلام، پیامک آزمایشی")}&ApiKey=YOUR_API_KEY"`,"url-send-node":`const axios = require('axios');

async function sendSmsUrl() {
  try {
    const response = await axios.get('${f}/api/v1/user/Messages/url/single', {
      params: {
        RecipientNumber: '09172378789',
        Username: 'your_username',
        Password: 'your_password',
        DomainName: 'your_domain',
        SmsLineNumber: '3000XXXX',
        MessageText: 'سلام، پیامک آزمایشی',
        ApiKey: 'YOUR_API_KEY'
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

sendSmsUrl();`,"url-send-python":`import requests

url = "${f}/api/v1/user/Messages/url/single"
params = {
    "RecipientNumber": "09172378789",
    "Username": "your_username",
    "Password": "your_password",
    "DomainName": "your_domain",
    "SmsLineNumber": "3000XXXX",
    "MessageText": "سلام، پیامک آزمایشی",
    "ApiKey": "YOUR_API_KEY"
}

response = requests.get(url, params=params)
print("Response:", response.json())`,"url-send-php":`<?php
$url = "${f}/api/v1/user/Messages/url/single?" . http_build_query([
    'RecipientNumber' => '09172378789',
    'Username'        => 'your_username',
    'Password'        => 'your_password',
    'DomainName'      => 'your_domain',
    'SmsLineNumber'   => '3000XXXX',
    'MessageText'     => 'سلام، پیامک آزمایشی',
    'ApiKey'          => 'YOUR_API_KEY'
]);

$response = file_get_contents($url);
echo "Response: " . $response;
?>`,"url-send-csharp":`using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${f}/api/v1/user/Messages/url/single" +
                     "?RecipientNumber=09172378789" +
                     "&Username=your_username" +
                     "&Password=your_password" +
                     "&DomainName=your_domain" +
                     "&SmsLineNumber=3000XXXX" +
                     "&MessageText=" + Uri.EscapeDataString("سلام، پیامک آزمایشی") +
                     "&ApiKey=YOUR_API_KEY";

        var response = await client.GetAsync(url);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine("Response: " + result);
    }
}`,"url-send-go":`package main

import (
  "fmt"
  "io"
  "net/http"
  "net/url"
)

func main() {
  baseURL := "${f}/api/v1/user/Messages/url/single"
  params := url.Values{}
  params.Add("RecipientNumber", "09172378789")
  params.Add("Username", "your_username")
  params.Add("Password", "your_password")
  params.Add("DomainName", "your_domain")
  params.Add("SmsLineNumber", "3000XXXX")
  params.Add("MessageText", "سلام، پیامک آزمایشی")
  params.Add("ApiKey", "YOUR_API_KEY")

  resp, err := http.Get(baseURL + "?" + params.Encode())
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,"url-received-curl":`curl -X GET "${f}/api/v1/user/Messages/url/received?UserName=your_username&Password=your_password&DomainName=your_domain&ApiKey=YOUR_API_KEY&IsAllMessage=true"`,"url-received-node":`const axios = require('axios');

async function getReceivedUrl() {
  try {
    const response = await axios.get('${f}/api/v1/user/Messages/url/received', {
      params: {
        UserName: 'your_username',
        Password: 'your_password',
        DomainName: 'your_domain',
        ApiKey: 'YOUR_API_KEY',
        IsAllMessage: true,
        FromNumber: '', // اختیاری
        FromDate: '',   // اختیاری
        ToDate: ''      // اختیاری
      }
    });

    console.log('Received Messages:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getReceivedUrl();`,"url-received-python":`import requests

url = "${f}/api/v1/user/Messages/url/received"
params = {
    "UserName": "your_username",
    "Password": "your_password",
    "DomainName": "your_domain",
    "ApiKey": "YOUR_API_KEY",
    "IsAllMessage": True
}

response = requests.get(url, params=params)
print("Received Messages:", response.json())`,"url-received-php":`<?php
$url = "${f}/api/v1/user/Messages/url/received?" . http_build_query([
    'UserName'     => 'your_username',
    'Password'     => 'your_password',
    'DomainName'   => 'your_domain',
    'ApiKey'       => 'YOUR_API_KEY',
    'IsAllMessage' => 'true'
]);

$response = file_get_contents($url);
echo "Received Messages: " . $response;
?>`,"url-received-csharp":`using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${f}/api/v1/user/Messages/url/received" +
                     "?UserName=your_username" +
                     "&Password=your_password" +
                     "&DomainName=your_domain" +
                     "&ApiKey=YOUR_API_KEY" +
                     "&IsAllMessage=true";

        var response = await client.GetAsync(url);
        string result = await response.Content.ReadAsStringAsync();
        Console.WriteLine("Received Messages: " + result);
    }
}`,"url-received-go":`package main

import (
  "fmt"
  "io"
  "net/http"
  "net/url"
)

func main() {
  baseURL := "${f}/api/v1/user/Messages/url/received"
  params := url.Values{}
  params.Add("UserName", "your_username")
  params.Add("Password", "your_password")
  params.Add("DomainName", "your_domain")
  params.Add("ApiKey", "YOUR_API_KEY")
  params.Add("IsAllMessage", "true")

  resp, err := http.Get(baseURL + "?" + params.Encode())
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println("Received Messages:", string(body))
}`,"rest-send-curl":`curl -X POST "${f}/api/v1/user/Messages/rest/single" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipientNumber": "09172378789",
    "username": "your_username",
    "password": "your_password",
    "domainName": "your_domain",
    "smsLineNumber": "3000XXXX",
    "messageText": "سلام، پیامک ارسالی از REST API",
    "apiKey": "YOUR_API_KEY"
  }'`,"rest-send-node":`const axios = require('axios');

async function sendSmsRest() {
  const payload = {
    recipientNumber: "09172378789",
    username: "your_username",
    password: "your_password",
    domainName: "your_domain",
    smsLineNumber: "3000XXXX",
    messageText: "سلام، پیامک ارسالی از REST API",
    apiKey: "YOUR_API_KEY"
  };

  try {
    const response = await axios.post('${f}/api/v1/user/Messages/rest/single', payload);
    console.log('Result:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

sendSmsRest();`,"rest-send-python":`import requests

url = "${f}/api/v1/user/Messages/rest/single"
payload = {
    "recipientNumber": "09172378789",
    "username": "your_username",
    "password": "your_password",
    "domainName": "your_domain",
    "smsLineNumber": "3000XXXX",
    "messageText": "سلام، پیامک ارسالی از REST API",
    "apiKey": "YOUR_API_KEY"
}

response = requests.post(url, json=payload)
print("Result:", response.json())`,"rest-send-php":`<?php
$url = "${f}/api/v1/user/Messages/rest/single";

$payload = json_encode([
    "recipientNumber" => "09172378789",
    "username"        => "your_username",
    "password"        => "your_password",
    "domainName"      => "your_domain",
    "smsLineNumber"   => "3000XXXX",
    "messageText"     => "سلام، پیامک ارسالی از REST API",
    "apiKey"          => "YOUR_API_KEY"
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($payload)
]);

$response = curl_exec($ch);
curl_close($ch);

echo "Result: " . $response;
?>`,"rest-send-csharp":`using System;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${f}/api/v1/user/Messages/rest/single";

        string jsonPayload = @"{
            ""recipientNumber"": ""09172378789"",
            ""username"": ""your_username"",
            ""password"": ""your_password"",
            ""domainName"": ""your_domain"",
            ""smsLineNumber"": ""3000XXXX"",
            ""messageText"": ""سلام، پیامک ارسالی از REST API"",
            ""apiKey"": ""YOUR_API_KEY""
        }";

        var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        string result = await response.Content.ReadAsStringAsync();

        Console.WriteLine("Result: " + result);
    }
}`,"rest-send-go":`package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "io"
  "net/http"
)

func main() {
  url := "${f}/api/v1/user/Messages/rest/single"

  payload := map[string]string{
    "recipientNumber": "09172378789",
    "username":        "your_username",
    "password":        "your_password",
    "domainName":      "your_domain",
    "smsLineNumber":   "3000XXXX",
    "messageText":     "سلام، پیامک ارسالی از REST API",
    "apiKey":          "YOUR_API_KEY",
  }

  jsonData, _ := json.Marshal(payload)
  resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println("Result:", string(body))
}`,"rest-received-curl":`curl -X POST "${f}/api/v1/user/Messages/rest/received" \\
  -H "Content-Type: application/json" \\
  -d '{
    "userName": "your_username",
    "password": "your_password",
    "domainName": "your_domain",
    "apiKey": "YOUR_API_KEY",
    "isAllMessage": true,
    "fromNumber": "09123456789",
    "fromDate": "1403/01/01",
    "toDate": "1403/01/30"
  }'`,"rest-received-node":`const axios = require('axios');

async function getReceivedRest() {
  const payload = {
    userName: "your_username",
    password: "your_password",
    domainName: "your_domain",
    apiKey: "YOUR_API_KEY",
    isAllMessage: true,
    fromNumber: "09123456789",
    fromDate: "1403/01/01",
    toDate: "1403/01/30"
  };

  try {
    const response = await axios.post('${f}/api/v1/user/Messages/rest/received', payload);
    console.log('Received Messages:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

getReceivedRest();`,"rest-received-python":`import requests

url = "${f}/api/v1/user/Messages/rest/received"
payload = {
    "userName": "your_username",
    "password": "your_password",
    "domainName": "your_domain",
    "apiKey": "YOUR_API_KEY",
    "isAllMessage": True,
    "fromNumber": "09123456789",
    "fromDate": "1403/01/01",
    "toDate": "1403/01/30"
}

response = requests.post(url, json=payload)
print("Received Messages:", response.json())`,"rest-received-php":`<?php
$url = "${f}/api/v1/user/Messages/rest/received";

$payload = json_encode([
    "userName"     => "your_username",
    "password"     => "your_password",
    "domainName"   => "your_domain",
    "apiKey"       => "YOUR_API_KEY",
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

$response = curl_exec($ch);
curl_close($ch);

echo "Received Messages: " . $response;
?>`,"rest-received-csharp":`using System;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using var client = new HttpClient();
        string url = "${f}/api/v1/user/Messages/rest/received";

        string jsonPayload = @"{
            ""userName"": ""your_username"",
            ""password"": ""your_password"",
            ""domainName"": ""your_domain"",
            ""apiKey"": ""YOUR_API_KEY"",
            ""isAllMessage"": true,
            ""fromNumber"": ""09123456789"",
            ""fromDate"": ""1403/01/01"",
            ""toDate"": ""1403/01/30""
        }";

        var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");
        var response = await client.PostAsync(url, content);
        string result = await response.Content.ReadAsStringAsync();

        Console.WriteLine("Received Messages: " + result);
    }
}`,"rest-received-go":`package main

import (
  "bytes"
  "encoding/json"
  "fmt"
  "io"
  "net/http"
)

func main() {
  url := "${f}/api/v1/user/Messages/rest/received"

  payload := map[string]interface{}{
    "userName":     "your_username",
    "password":     "your_password",
    "domainName":   "your_domain",
    "apiKey":       "YOUR_API_KEY",
    "isAllMessage": true,
    "fromNumber":   "09123456789",
    "fromDate":     "1403/01/01",
    "toDate":       "1403/01/30",
  }

  jsonData, _ := json.Marshal(payload)
  resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  body, _ := io.ReadAll(resp.Body)
  fmt.Println("Received Messages:", string(body))
}`}[`${a}-${p}-${y}`]||"// نمونه کدی برای این زبان تعریف نشده است.";return(0,s.jsxs)("div",{className:"mx-auto px-4 pb-20 max-w-6xl space-y-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("button",{onClick:()=>e.push("/dashboard/programming/api-key"),className:"flex items-center gap-2 bg-white px-4 py-2 border border-surface-200 rounded-xl text-surface-600 font-bold text-xs hover:bg-surface-50 transition-colors cursor-pointer",children:[(0,s.jsx)(u.ArrowRight,{className:"w-4 h-4"}),"بازگشت به ساخت کلید و راهنما"]}),(0,s.jsxs)("div",{className:"flex items-center gap-2 text-surface-400 text-xs",children:[(0,s.jsx)("span",{children:"API Version 1.0"}),(0,s.jsx)("span",{children:"•"}),(0,s.jsxs)("span",{className:"text-emerald-600 font-bold flex items-center gap-1",children:[(0,s.jsx)("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"سرویس فعال"]})]})]}),(0,s.jsxs)("div",{className:"relative bg-surface-900 shadow-2xl p-8 sm:p-12 rounded-[2.5rem] overflow-hidden text-white",children:[(0,s.jsx)("div",{className:"top-0 right-0 absolute bg-primary-500/20 blur-[120px] w-1/3 h-full pointer-events-none"}),(0,s.jsx)("div",{className:"bottom-0 left-0 absolute blur-[100px] w-1/2 h-full bg-blue-500/10 pointer-events-none"}),(0,s.jsxs)("div",{className:"z-10 relative space-y-4",children:[(0,s.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 border border-white/10 rounded-full font-black text-[10px] text-primary-400 uppercase tracking-widest",children:[(0,s.jsx)(n.ShieldCheck,{className:"w-3.5 h-3.5"}),"مستندات و نمونه کدهای توسعه‌دهندگان"]}),(0,s.jsxs)("h1",{className:"font-black text-3xl sm:text-5xl leading-tight",children:["نمونه کدهای پیاده‌سازی ",(0,s.jsx)("span",{className:"text-primary-400",children:"API پیامک"})]}),(0,s.jsxs)("p",{className:"text-surface-300 text-sm sm:text-base max-w-2xl leading-relaxed",children:["راهنمای جامع ارسال و دریافت پیامک از طریق دو متد استاندارد ",(0,s.jsx)("strong",{className:"text-white",children:"URL (GET)"})," و ",(0,s.jsx)("strong",{className:"text-white",children:"REST (POST)"})," همراه با سورس‌کدهای اجرایی در زبان‌های مختلف."]})]})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"bg-white p-4 border border-surface-100 rounded-3xl shadow-sm flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-xs font-bold text-surface-500",children:"متد ارتباطی:"}),(0,s.jsx)("p",{className:"font-black text-surface-900 text-sm",children:"url"===a?"URL Method (GET)":"REST API (POST)"})]}),(0,s.jsxs)("div",{className:"flex gap-1.5 bg-surface-100 p-1.5 rounded-2xl",children:[(0,s.jsxs)("button",{onClick:()=>t("url"),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs transition-all cursor-pointer ${"url"===a?"bg-white text-emerald-700 shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,s.jsx)(i.Globe,{className:"w-3.5 h-3.5 text-emerald-600"}),"URL (GET)"]}),(0,s.jsxs)("button",{onClick:()=>t("rest"),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs transition-all cursor-pointer ${"rest"===a?"bg-white text-blue-700 shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,s.jsx)(o.Layers,{className:"w-3.5 h-3.5 text-blue-600"}),"REST (POST)"]})]})]}),(0,s.jsxs)("div",{className:"bg-white p-4 border border-surface-100 rounded-3xl shadow-sm flex items-center justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"text-xs font-bold text-surface-500",children:"عملیات پیامک:"}),(0,s.jsx)("p",{className:"font-black text-surface-900 text-sm",children:"send"===p?"ارسال تک پیامک":"دریافت پیامک‌ها"})]}),(0,s.jsxs)("div",{className:"flex gap-1.5 bg-surface-100 p-1.5 rounded-2xl",children:[(0,s.jsxs)("button",{onClick:()=>g("send"),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs transition-all cursor-pointer ${"send"===p?"bg-primary-600 text-white shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,s.jsx)(d.Send,{className:"w-3.5 h-3.5"}),"ارسال پیامک"]}),(0,s.jsxs)("button",{onClick:()=>g("received"),className:`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-xs transition-all cursor-pointer ${"received"===p?"bg-primary-600 text-white shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:[(0,s.jsx)(l.Inbox,{className:"w-3.5 h-3.5"}),"دریافت پیامک"]})]})]})]}),(0,s.jsxs)("div",{className:"bg-white shadow-sm border border-surface-100 rounded-3xl p-6 sm:p-10 space-y-8",children:[(0,s.jsxs)("div",{className:"space-y-3 pb-6 border-b border-surface-100",children:[(0,s.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between sm:items-center gap-2",children:[(0,s.jsxs)("h2",{className:"font-black text-surface-900 text-xl",children:["send"===p?"سرویس ارسال تک پیامک":"سرویس دریافت پیامک‌های دریافتی"," (",a.toUpperCase(),")"]}),(0,s.jsx)("span",{className:"text-xs text-surface-400 font-mono",children:"url"===a?"Query String":"JSON Request Body"})]}),(0,s.jsxs)("div",{dir:"ltr",className:"flex items-center gap-3 bg-surface-900 p-4 rounded-2xl overflow-x-auto",children:[(0,s.jsx)("span",{className:`px-3 py-1 rounded-lg font-black text-white text-xs ${"url"===a?"bg-emerald-600":"bg-blue-600"}`,children:"url"===a?"GET":"POST"}),(0,s.jsxs)("code",{className:"font-mono text-emerald-400 text-sm whitespace-nowrap",children:["url"===a&&"send"===p&&"/api/v1/user/Messages/url/single","url"===a&&"received"===p&&"/api/v1/user/Messages/url/received","rest"===a&&"send"===p&&"/api/v1/user/Messages/rest/single","rest"===a&&"received"===p&&"/api/v1/user/Messages/rest/received"]})]})]}),"rest"===a&&(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("h3",{className:"font-bold text-surface-900 text-sm",children:"ساختار بدنه درخواست (Request Body - JSON)"}),(0,s.jsx)("pre",{dir:"ltr",className:"bg-surface-900 p-5 rounded-2xl overflow-auto text-emerald-400 font-mono text-xs leading-relaxed",children:"send"===p?`{
  "recipientNumber": "09172378789",
  "username": "string",
  "password": "string",
  "domainName": "string",
  "smsLineNumber": "string",
  "messageText": "string",
  "apiKey": "string"
}`:`{
  "userName": "string",
  "password": "string",
  "domainName": "string",
  "apiKey": "string",
  "isAllMessage": true,
  "fromNumber": "string",
  "fromDate": "string",
  "toDate": "string"
}`})]}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("h3",{className:"font-black text-surface-900 text-sm",children:"مشخصات پارامترهای ورودی"}),(0,s.jsxs)("div",{className:"border border-surface-200 rounded-2xl overflow-hidden",children:[(0,s.jsxs)("div",{className:"grid grid-cols-12 bg-surface-100/70 p-3.5 font-black text-surface-700 text-xs",children:[(0,s.jsx)("span",{className:"col-span-3",children:"نام فیلد"}),(0,s.jsx)("span",{className:"col-span-2 text-center",children:"نوع داده"}),(0,s.jsx)("span",{className:"col-span-2 text-center",children:"وضعیت"}),(0,s.jsx)("span",{className:"col-span-5",children:"توضیحات"})]}),(0,s.jsx)("div",{className:"divide-y divide-surface-100",children:("url"===a?"send"===p?[{name:"RecipientNumber",type:"string",required:!0,desc:"شماره موبایل گیرنده پیامک (مثال: 09172378789)"},{name:"Username",type:"string",required:!0,desc:"نام کاربری حساب شما در سامانه پیام کوتاه"},{name:"Password",type:"string",required:!0,desc:"رمز عبور حساب کاربری سامانه"},{name:"DomainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"SmsLineNumber",type:"string",required:!0,desc:"شماره خط اختصاصی یا عمومی ارسال‌کننده پیامک"},{name:"MessageText",type:"string",required:!0,desc:"متن پیامک ارسالی (به صورت URL Encoded)"},{name:"ApiKey",type:"string",required:!0,desc:"کلید احراز هویت API Key دریافت‌شده از پنل"}]:[{name:"UserName",type:"string",required:!0,desc:"نام کاربری حساب شما در سامانه"},{name:"Password",type:"string",required:!0,desc:"رمز عبور حساب کاربری سامانه"},{name:"DomainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"ApiKey",type:"string",required:!0,desc:"کلید احراز هویت API Key"},{name:"IsAllMessage",type:"boolean",required:!0,desc:"دریافت همه پیام‌ها (مقدار true یا false)"},{name:"FromNumber",type:"string",required:!1,desc:"فیلتر بر اساس شماره ارسال‌کننده (اختیاری)"},{name:"FromDate",type:"string",required:!1,desc:"فیلتر تاریخ شروع (اختیاری)"},{name:"ToDate",type:"string",required:!1,desc:"فیلتر تاریخ پایان (اختیاری)"}]:"send"===p?[{name:"recipientNumber",type:"string",required:!0,desc:"شماره موبایل گیرنده پیامک (مثال: 09172378789)"},{name:"username",type:"string",required:!0,desc:"نام کاربری ورود به سامانه"},{name:"password",type:"string",required:!0,desc:"رمز عبور حساب کاربری"},{name:"domainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"smsLineNumber",type:"string",required:!0,desc:"شماره خط اختصاصی ارسال‌کننده"},{name:"messageText",type:"string",required:!0,desc:"متن پیامک ارسالی"},{name:"apiKey",type:"string",required:!0,desc:"کلید احراز هویت API Key"}]:[{name:"userName",type:"string",required:!0,desc:"نام کاربری ورود به سامانه"},{name:"password",type:"string",required:!0,desc:"رمز عبور حساب کاربری"},{name:"domainName",type:"string",required:!0,desc:"نام دامنه سرویس پیامک"},{name:"apiKey",type:"string",required:!0,desc:"کلید احراز هویت API Key"},{name:"isAllMessage",type:"boolean",required:!0,desc:"دریافت تمامی پیامک‌ها (مقدار true)"},{name:"fromNumber",type:"string",required:!1,desc:"فیلتر بر اساس شماره فرستنده (اختیاری)"},{name:"fromDate",type:"string",required:!1,desc:"تاریخ شروع جستجو (اختیاری)"},{name:"toDate",type:"string",required:!1,desc:"تاریخ پایان جستجو (اختیاری)"}]).map(e=>(0,s.jsxs)("div",{className:"grid grid-cols-12 items-center p-3.5 text-xs",children:[(0,s.jsx)("span",{className:"col-span-3 font-mono font-bold text-primary-600",dir:"ltr",children:e.name}),(0,s.jsx)("span",{className:"col-span-2 text-center font-mono text-surface-500",children:e.type}),(0,s.jsx)("span",{className:"col-span-2 text-center",children:e.required?(0,s.jsx)("span",{className:"inline-block bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full text-[10px] font-bold",children:"اجباری *"}):(0,s.jsx)("span",{className:"inline-block bg-surface-100 text-surface-500 px-2 py-0.5 rounded-full text-[10px] font-medium",children:"اختیاری"})}),(0,s.jsx)("span",{className:"col-span-5 text-surface-600 leading-relaxed",children:e.desc})]},e.name))})]})]}),(0,s.jsxs)("div",{className:"space-y-4 pt-6 border-t border-surface-100",children:[(0,s.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between sm:items-center gap-3",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(c,{className:"w-5 h-5 text-primary-600"}),(0,s.jsx)("h3",{className:"font-black text-surface-900 text-lg",children:"سورس کدهای نمونه به تفکیک زبان"})]}),(0,s.jsx)("div",{className:"flex flex-wrap gap-1.5 bg-surface-100 p-1.5 rounded-2xl w-fit",children:["node","python","php","csharp","go","curl"].map(e=>(0,s.jsx)("button",{onClick:()=>h(e),className:`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${y===e?"bg-white text-primary-600 shadow-sm":"text-surface-600 hover:text-surface-900"}`,children:"csharp"===e?"C#":"node"===e?"Node.js":"curl"===e?"cURL":e.toUpperCase()},e))})]}),(0,s.jsx)(x,{label:`${a.toUpperCase()} - ${"send"===p?"ارسال پیامک":"دریافت پیامک"} (${y.toUpperCase()})`,language:"csharp"===y?"csharp":"node"===y?"javascript":y,code:N})]})]})]})}],667774)}]);