(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{8065:function(e,s,t){Promise.resolve().then(t.t.bind(t,5878,23)),Promise.resolve().then(t.bind(t,4206)),Promise.resolve().then(t.bind(t,9488)),Promise.resolve().then(t.bind(t,6667)),Promise.resolve().then(t.bind(t,7127)),Promise.resolve().then(t.t.bind(t,7700,23)),Promise.resolve().then(t.t.bind(t,9986,23)),Promise.resolve().then(t.bind(t,4420)),Promise.resolve().then(t.bind(t,3786)),Promise.resolve().then(t.bind(t,8810)),Promise.resolve().then(t.bind(t,1311))},9488:function(e,s,t){"use strict";t.d(s,{BaseUI:function(){return a}});var n=t(7437),r=t(5832),o=t(6361),i=t(7811),c=t.n(i);let a=e=>{let{href:s}=e;return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)("svg",{width:"17",height:"30",viewBox:"0 0 17 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:c().icon,children:[(0,n.jsx)("path",{d:"M8 12.8V15V26C3.58172 26 0 22.0601 0 17.2V15V4C4.41828 4 8 7.93989 8 12.8Z"}),(0,n.jsx)("path",{d:"M9.5001 10.0154C9.2245 9.99843 9 10.2239 9 10.5V26.0001C13.4183 26.0001 17 22.4184 17 18.0001C17 13.7498 13.6854 10.2736 9.5001 10.0154Z"})]}),(0,n.jsxs)("div",{className:c().content,children:[(0,n.jsx)(r.x,{variant:"subtitle",weight:"bold",children:"Base UI"}),(0,n.jsx)("div",{className:c().description,children:(0,n.jsx)(r.x,{variant:"subtitle",children:"This component is using Base UI under the hood. While most of the original props are available, we have made some changes to the API to fit our needs."})}),s&&(0,n.jsxs)("a",{className:c().button,href:s,target:"_blank",children:["Discover more",(0,n.jsx)(o.J,{name:"externalLink"})]})]})]})}},4420:function(e,s,t){"use strict";t.d(s,{InputPreview:function(){return i},InputSizes:function(){return c}});var n=t(7437),r=t(5174),o=t(7913);let i=()=>(0,n.jsx)("div",{style:{width:"300px"},children:(0,n.jsx)(r.I,{placeholder:"Enter your name"})}),c=()=>(0,n.jsxs)(o.r,{style:{width:"300px"},children:[(0,n.jsx)(r.I,{size:"sm",placeholder:"Small"}),(0,n.jsx)(r.I,{size:"md",placeholder:"Medium"})]})},7913:function(e,s,t){"use strict";t.d(s,{r:function(){return l}});var n=t(2265),r=t(4984),o=t(5915);let i=["1","2","3","4","5","6","7","8","9","10","11","12","auto"],c={columns:{type:"enum | string",className:"cu-columns",customProperties:["--columns"],values:i,responsive:!0,default:"auto"}},a={colSpan:{type:"enum | string",className:"cu-col-span",customProperties:["--col-span"],values:i,responsive:!0},colEnd:{type:"enum | string",className:"cu-col-end",customProperties:["--col-end"],values:i,responsive:!0},colStart:{type:"enum | string",className:"cu-col-start",customProperties:["--col-start"],values:i,responsive:!0},rowSpan:{type:"enum | string",className:"cu-row-span",customProperties:["--row-span"],values:i,responsive:!0}};var u=t(6532);let l=Object.assign((0,n.forwardRef)((e,s)=>{let t={...r.c,...c},{className:i,style:a}=(0,o.y)(e,t);return(0,n.createElement)("div",{ref:s,className:(0,u.Z)("canon-Grid",i),style:a,children:e.children})}),{Item:(0,n.forwardRef)((e,s)=>{let t={...a},{className:r,style:i}=(0,o.y)(e,t);return(0,n.createElement)("div",{ref:s,className:(0,u.Z)("canon-GridItem",r),style:i,children:e.children})})})},6361:function(e,s,t){"use strict";t.d(s,{J:function(){return i}});var n=t(7437);t(2265);var r=t(8719),o=t(6532);let i=e=>{let{name:s,size:t,className:i,style:c,...a}=e,{icons:u}=(0,r.z)(),l=u[s];return l?(0,n.jsx)(l,{className:(0,o.Z)("canon-Icon",i),style:{...t?{width:t,height:t}:{},...c},...a}):(console.error('Icon "'.concat(s,'" not found or is not a valid component.')),(0,n.jsx)("svg",{}))}},5174:function(e,s,t){"use strict";t.d(s,{I:function(){return c}});var n=t(7437),r=t(2265),o=t(2211),i=t(6532);let c=(0,r.forwardRef)((e,s)=>{let{size:t="md",className:r,...c}=e;return(0,n.jsx)(o.I,{ref:s,className:(0,i.Z)("canon-Input","sm"===t?"canon-Input--size-sm":"canon-Input--size-md",r),...c})});c.displayName=o.I.displayName},8719:function(e,s,t){"use strict";t.d(s,{O:function(){return c},z:function(){return a}});var n=t(7437),r=t(2265),o=t(1975);let i=(0,r.createContext)({icons:o.c}),c=e=>{let{children:s,overrides:t}=e,r={...o.c,...t};return(0,n.jsx)(i.Provider,{value:{icons:r},children:s})},a=()=>(0,r.useContext)(i)},4984:function(e,s,t){"use strict";t.d(s,{c:function(){return n}});let n={gap:{type:"enum | string",className:"cu-gap",customProperties:["--gap"],values:t(5390).X,responsive:!0,default:"4"}}},5390:function(e,s,t){"use strict";t.d(s,{c:function(){return r},X:function(){return n}});let n=["0.5","1","1.5","2","3","4","5","6","7","8","9","10","11","12","13","14"],r={p:{type:"enum | string",className:"cu-p",customProperties:["--p"],values:n,responsive:!0},px:{type:"enum | string",className:"cu-px",customProperties:["--px"],values:n,responsive:!0},py:{type:"enum | string",className:"cu-py",customProperties:["--py"],values:n,responsive:!0},pt:{type:"enum | string",className:"cu-pt",customProperties:["--pt"],values:n,responsive:!0},pr:{type:"enum | string",className:"cu-pr",customProperties:["--pr"],values:n,responsive:!0},pb:{type:"enum | string",className:"cu-pb",customProperties:["--pb"],values:n,responsive:!0},pl:{type:"enum | string",className:"cu-pl",customProperties:["--pl"],values:n,responsive:!0},m:{type:"enum | string",values:n,className:"cu-m",customProperties:["--m"],responsive:!0},mx:{type:"enum | string",values:n,className:"cu-mx",customProperties:["--mx"],responsive:!0},my:{type:"enum | string",values:n,className:"cu-my",customProperties:["--my"],responsive:!0},mt:{type:"enum | string",values:n,className:"cu-mt",customProperties:["--mt"],responsive:!0},mr:{type:"enum | string",values:n,className:"cu-mr",customProperties:["--mr"],responsive:!0},mb:{type:"enum | string",values:n,className:"cu-mb",customProperties:["--mb"],responsive:!0},ml:{type:"enum | string",values:n,className:"cu-ml",customProperties:["--ml"],responsive:!0}}},5915:function(e,s,t){"use strict";function n(e,s){let t=(e.className||"").split(" "),n={...e.style},r=s=>e.hasOwnProperty(s);for(let o in s){if(!r(o)&&!s[o].hasOwnProperty("default"))continue;let i=r(o)?e[o]:s[o].default,c=s[o].values,a=s[o].customProperties,u=s[o].className,l=s[o].responsive,m=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";"as"!==o&&(c.includes(e)?t.push("".concat(s).concat(u,"-").concat(e)):(n[l&&s?"".concat(a,"-").concat(s.slice(0,-1)):a]=e,t.push("".concat(s).concat(u))))};if(l&&"object"==typeof i)for(let e in i){let s="initial"===e?"":"".concat(e,":");m(i[e],s)}else m(i)}let o=Object.keys(e).reduce((t,n)=>(s.hasOwnProperty(n)||(t[n]=e[n]),t),{}),i=t.filter(e=>e&&""!==e.trim()).join(" ");return{...o,className:i,style:n}}t.d(s,{y:function(){return n}})},7811:function(e){e.exports={container:"styles_container__QRSI3",icon:"styles_icon__fXERG",content:"styles_content__j0Wt_",description:"styles_description__vnxpI",button:"styles_button__kV03v"}}},function(e){e.O(0,[312,738,211,975,333,174,191,109,478,117,744],function(){return e(e.s=8065)}),_N_E=e.O()}]);