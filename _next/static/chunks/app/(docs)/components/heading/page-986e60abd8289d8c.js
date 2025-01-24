(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1426],{748:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.t.bind(n,2260,23)),Promise.resolve().then(n.t.bind(n,8295,23)),Promise.resolve().then(n.t.bind(n,4952,23)),Promise.resolve().then(n.t.bind(n,9986,23)),Promise.resolve().then(n.bind(n,7127)),Promise.resolve().then(n.bind(n,8525)),Promise.resolve().then(n.bind(n,3786)),Promise.resolve().then(n.bind(n,8810)),Promise.resolve().then(n.bind(n,1311)),Promise.resolve().then(n.bind(n,5832))},7127:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return c},Panel:function(){return u},Root:function(){return o},Tab:function(){return d}});var r=n(7437),i=n(1333),l=n(6825),a=n.n(l),s=n(5832);let o=e=>{let{className:t,...n}=e;return(0,r.jsx)(i.m.fC,{className:"".concat(a().root," ").concat(t),...n})},c=e=>{let{className:t,children:n,...l}=e;return(0,r.jsxs)(i.m.aV,{className:"".concat(a().list," ").concat(t),...l,children:[n,(0,r.jsx)(i.m.z$,{className:a().indicator})]})},d=e=>(0,r.jsx)(i.m.OK,{...e,render:(e,t)=>{let{children:n,...i}=e;return(0,r.jsx)("button",{className:a().tab,...i,children:(0,r.jsx)(s.Text,{variant:"subtitle",weight:"bold",...i,style:{color:t.selected?"var(--canon-fg-text-primary)":"var(--canon-fg-text-secondary)"},children:n})})}}),u=e=>{let{className:t,...n}=e;return(0,r.jsx)(i.m.s_,{className:"".concat(a().panel," ").concat(t),...n})}},8525:function(e,t,n){"use strict";n.d(t,{HeadingAllVariants:function(){return o},HeadingPreview:function(){return s},HeadingResponsive:function(){return c},Y:function(){return d}});var r=n(7437),i=n(105),l=n(5240),a=n(5832);let s=()=>(0,r.jsx)(i.Heading,{children:"Look mum, no hands!"}),o=()=>(0,r.jsxs)(l.K,{children:[(0,r.jsx)(i.Heading,{variant:"display",children:"Display"}),(0,r.jsx)(i.Heading,{variant:"title1",children:"Title 1"}),(0,r.jsx)(i.Heading,{variant:"title2",children:"Title 2"}),(0,r.jsx)(i.Heading,{variant:"title3",children:"Title 3"}),(0,r.jsx)(i.Heading,{variant:"title4",children:"Title 4"})]}),c=()=>(0,r.jsx)(l.K,{children:(0,r.jsx)(i.Heading,{variant:{initial:"title2",lg:"title1"},children:"Responsive heading"})}),d=()=>(0,r.jsxs)(l.K,{children:[(0,r.jsx)(a.Text,{children:"All variants"}),(0,r.jsx)(i.Heading,{variant:"display",children:"Display"}),(0,r.jsx)(i.Heading,{variant:"title1",children:"Title 1"}),(0,r.jsx)(i.Heading,{variant:"title2",children:"Title 2"}),(0,r.jsx)(i.Heading,{variant:"title3",children:"Title 3"}),(0,r.jsx)(i.Heading,{variant:"title4",children:"Title 4"})]})},105:function(e,t,n){"use strict";n.d(t,{Heading:function(){return s}});var r=n(7437),i=n(2265),l=n(6532),a=n(8205);let s=(0,i.forwardRef)((e,t)=>{let{children:n,variant:i="title1",as:s="h1",className:o,...c}=e,d=(0,a.V)(i),u=s;return"title2"===i&&(u="h2"),"title3"===i&&(u="h3"),"title4"===i&&(u="h4"),"title5"===i&&(u="h5"),s&&(u=s),(0,r.jsx)(u,{ref:t,className:(0,l.Z)("canon-Heading",d&&"canon-Heading--variant-".concat(d),o),...c,children:n})});s.displayName="Heading"},5240:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(2265),i=n(7110),l=n(6532);let a=e=>{if("string"==typeof e){let t="stretch";return"left"===e&&(t="stretch"),"center"===e&&(t="center"),"right"===e&&(t="end"),t}if("object"==typeof e){let t={};for(let[n,r]of Object.entries(e))t[n]=a(r);return t}return"stretch"},s=(0,r.forwardRef)((e,t)=>{let{as:n="div",children:s,align:o="left",gap:c="xs",className:d,style:u,...p}=e,f=(0,i.f)({gap:c,alignItems:a(o),...p});return(0,r.createElement)(n,{ref:t,className:(0,l.Z)("canon-Stack",f,d),style:u,children:s})})},5832:function(e,t,n){"use strict";n.d(t,{Text:function(){return s}});var r=n(7437),i=n(2265),l=n(8205),a=n(6532);let s=(0,i.forwardRef)((e,t)=>{let{children:n,variant:i="body",weight:s="regular",style:o,className:c,...d}=e,u=(0,l.V)(i),p=(0,l.V)(s);return(0,r.jsx)("p",{ref:t,className:(0,a.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),p&&"canon-Text--weight-".concat(p),c),style:o,...d,children:n})});s.displayName="Text"},8205:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(2265);let i=r.useLayoutEffect,l=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],a=()=>{let e=l.map(e=>(function(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=e=>window.matchMedia(e).matches,[a,s]=(0,r.useState)(()=>n?l(e):t);function o(){s(l(e))}return i(()=>{let t=window.matchMedia(e);return o(),t.addListener?t.addListener(o):t.addEventListener("change",o),()=>{t.removeListener?t.removeListener(o):t.removeEventListener("change",o)}},[e]),a})("(min-width: ".concat(e.value,"px)")));for(let t=e.length-1;t>=0;t--)if(e[t])return l[t].id;return l[0].id},s=e=>{let t=a();if("object"==typeof e){let n=l.findIndex(e=>e.id===t);for(let t=n;t>=0;t--)if(e[l[t].id])return e[l[t].id];for(let t=0;t<l.length;t++)if(e[l[t].id])return e[l[t].id]}return e}},7110:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});let r=e=>({none:"".concat(e,"-none"),"2xs":"".concat(e,"-2xs"),xs:"".concat(e,"-xs"),sm:"".concat(e,"-sm"),md:"".concat(e,"-md"),lg:"".concat(e,"-lg"),xl:"".concat(e,"-xl"),"2xl":"".concat(e,"-2xl")}),i={alignItems:{stretch:"items-stretch",start:"items-start",center:"items-center",end:"items-end"},border:{none:"border-none",base:"border-base",error:"border-error",warning:"border-warning",selected:"border-selected"},borderRadius:{none:"rounded-none","2xs":"rounded-2xs",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl"},colEnd:{1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",auto:"col-end-auto"},colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",auto:"col-span-auto"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"},columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",auto:"grid-cols-auto"},display:{none:"hidden",flex:"flex",block:"block",inline:"inline"},flexDirection:{row:"flex-row",column:"flex-col"},flexWrap:{wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},gap:r("gap"),justifyContent:{stretch:"justify-stretch",start:"justify-start",center:"justify-center",end:"justify-end",around:"justify-around",between:"justify-between"},margin:r("m"),marginBottom:r("mb"),marginLeft:r("ml"),marginRight:r("mr"),marginTop:r("mt"),marginX:r("mx"),marginY:r("my"),padding:r("p"),paddingBottom:r("pb"),paddingLeft:r("pl"),paddingRight:r("pr"),paddingTop:r("pt"),paddingX:r("px"),paddingY:r("py"),rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",7:"row-span-7",8:"row-span-8",9:"row-span-9",10:"row-span-10",11:"row-span-11",12:"row-span-12",full:"row-span-full"}},l=(e,t)=>{let n=[];if(!i.hasOwnProperty(e))return n;if("string"==typeof t||"number"==typeof t){var r;let l=(null===(r=i[e])||void 0===r?void 0:r[t])||t;n.push("cu-".concat(l))}else"object"==typeof t&&Object.entries(t).forEach(t=>{var r;let[l,a]=t,s=(null===(r=i[e])||void 0===r?void 0:r[a])||a;"xs"===l?n.push("cu-".concat(s)):n.push("cu-".concat(l,"-").concat(s))});return n},a=e=>{let t=[];return Object.entries(e).forEach(e=>{let[n,r]=e;t.push(...l(n,r))}),t.filter(Boolean).join(" ")}},4952:function(e){e.exports={chip:"styles_chip__XPG78",head:"styles_head__L8DiE"}},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}},9986:function(e){e.exports={container:"styles_container__T5X7T",preview:"styles_preview__tlnTq",previewContent:"styles_previewContent__ZqyBx",center:"styles_center__xU0vc",trigger:"styles_trigger__oILEp",panel:"styles_panel__rSJk7"}},8295:function(e){e.exports={wrapper:"styles_wrapper__sBS6b",table:"styles_table__ij6HO",tableCell:"styles_tableCell__kaS_H",tableHeaderCell:"styles_tableHeaderCell__bWDvx",tableRow:"styles_tableRow__LiOYk",tableChip:"styles_tableChip__K9ssW",tableType:"styles_tableType__Nq22z"}},6825:function(e){e.exports={root:"styles_root__sy2wE",list:"styles_list___Mh8g",tab:"styles_tab__IQ_KB",indicator:"styles_indicator__iUzBj"}}},function(e){e.O(0,[733,1393,6211,8975,1333,8174,2971,2117,1744],function(){return e(e.s=748)}),_N_E=e.O()}]);