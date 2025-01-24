(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5101],{6527:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.t.bind(n,2260,23)),Promise.resolve().then(n.t.bind(n,8295,23)),Promise.resolve().then(n.t.bind(n,4952,23)),Promise.resolve().then(n.t.bind(n,9986,23)),Promise.resolve().then(n.bind(n,7127)),Promise.resolve().then(n.bind(n,9257)),Promise.resolve().then(n.bind(n,3786)),Promise.resolve().then(n.bind(n,8810)),Promise.resolve().then(n.bind(n,1311)),Promise.resolve().then(n.bind(n,5832))},7127:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return c},Panel:function(){return u},Root:function(){return a},Tab:function(){return d}});var r=n(7437),o=n(1333),s=n(6825),l=n.n(s),i=n(5832);let a=e=>{let{className:t,...n}=e;return(0,r.jsx)(o.m.fC,{className:"".concat(l().root," ").concat(t),...n})},c=e=>{let{className:t,children:n,...s}=e;return(0,r.jsxs)(o.m.aV,{className:"".concat(l().list," ").concat(t),...s,children:[n,(0,r.jsx)(o.m.z$,{className:l().indicator})]})},d=e=>(0,r.jsx)(o.m.OK,{...e,render:(e,t)=>{let{children:n,...o}=e;return(0,r.jsx)("button",{className:l().tab,...o,children:(0,r.jsx)(i.Text,{variant:"subtitle",weight:"bold",...o,style:{color:t.selected?"var(--canon-fg-text-primary)":"var(--canon-fg-text-secondary)"},children:n})})}}),u=e=>{let{className:t,...n}=e;return(0,r.jsx)(o.m.s_,{className:"".concat(l().panel," ").concat(t),...n})}},9257:function(e,t,n){"use strict";n.d(t,{InlinePreview:function(){return a}});var r=n(7437),o=n(8024),s=n(1408);let l=[{width:45,height:60},{width:150,height:75},{width:80,height:50},{width:120,height:70},{width:95,height:65},{width:80,height:32},{width:130,height:60},{width:100,height:80},{width:140,height:45},{width:85,height:70},{width:125,height:50}],i=e=>{let{width:t=120,height:n=80}=e;return(0,r.jsx)(o.x,{borderRadius:"xs",style:{background:"#eaf2fd",borderRadius:"4px",boxShadow:"0 0 0 1px #2563eb",width:t,height:n,backgroundImage:'url("data:image/svg+xml,%3Csvg%20width%3D%226%22%20height%3D%226%22%20viewBox%3D%220%200%206%206%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%232563eb%22%20fill-opacity%3D%220.3%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M5%200h1L0%206V5zM6%205v1H5z%22/%3E%3C/g%3E%3C/svg%3E")'}})},a=()=>(0,r.jsx)(s.g,{children:l.map((e,t)=>(0,r.jsx)(i,{width:e.width,height:e.height},t))})},8024:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(2265),o=n(7110),s=n(6532);let l=(0,r.forwardRef)((e,t)=>{let{as:n="div",className:l,style:i,children:a,...c}=e,d=(0,o.f)(c),u=(0,s.Z)("canon-Box",d,l);return(0,r.createElement)(n,{ref:t,className:u,style:i,children:a})})},1408:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(2265),o=n(7110),s=n(6532);let l=e=>{if("string"==typeof e){let t="stretch";return"left"===e&&(t="start"),"center"===e&&(t="center"),"right"===e&&(t="end"),t}if("object"==typeof e){let t={};for(let[n,r]of Object.entries(e))t[n]=l(r);return t}return"stretch"},i=e=>{if("string"==typeof e){let t="stretch";return"top"===e&&(t="start"),"center"===e&&(t="center"),"bottom"===e&&(t="end"),t}if("object"==typeof e){let t={};for(let[n,r]of Object.entries(e))t[n]=i(r);return t}return"stretch"},a=(0,r.forwardRef)((e,t)=>{let{as:n="div",children:a,align:c="left",alignY:d="top",gap:u="xs",className:p,style:h,...f}=e,g=(0,o.f)({gap:u,alignItems:i(d),justifyContent:l(c),...f});return(0,r.createElement)(n,{ref:t,className:(0,s.Z)("canon-Inline",g,p),style:h,children:a})})},5832:function(e,t,n){"use strict";n.d(t,{Text:function(){return i}});var r=n(7437),o=n(2265),s=n(8205),l=n(6532);let i=(0,o.forwardRef)((e,t)=>{let{children:n,variant:o="body",weight:i="regular",style:a,className:c,...d}=e,u=(0,s.V)(o),p=(0,s.V)(i);return(0,r.jsx)("p",{ref:t,className:(0,l.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),p&&"canon-Text--weight-".concat(p),c),style:a,...d,children:n})});i.displayName="Text"},8205:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(2265);let o=r.useLayoutEffect,s=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],l=()=>{let e=s.map(e=>(function(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e=>window.matchMedia(e).matches,[l,i]=(0,r.useState)(()=>n?s(e):t);function a(){i(s(e))}return o(()=>{let t=window.matchMedia(e);return a(),t.addListener?t.addListener(a):t.addEventListener("change",a),()=>{t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}},[e]),l})("(min-width: ".concat(e.value,"px)")));for(let t=e.length-1;t>=0;t--)if(e[t])return s[t].id;return s[0].id},i=e=>{let t=l();if("object"==typeof e){let n=s.findIndex(e=>e.id===t);for(let t=n;t>=0;t--)if(e[s[t].id])return e[s[t].id];for(let t=0;t<s.length;t++)if(e[s[t].id])return e[s[t].id]}return e}},7110:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});let r=e=>({none:"".concat(e,"-none"),"2xs":"".concat(e,"-2xs"),xs:"".concat(e,"-xs"),sm:"".concat(e,"-sm"),md:"".concat(e,"-md"),lg:"".concat(e,"-lg"),xl:"".concat(e,"-xl"),"2xl":"".concat(e,"-2xl")}),o={alignItems:{stretch:"items-stretch",start:"items-start",center:"items-center",end:"items-end"},border:{none:"border-none",base:"border-base",error:"border-error",warning:"border-warning",selected:"border-selected"},borderRadius:{none:"rounded-none","2xs":"rounded-2xs",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl"},colEnd:{1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",auto:"col-end-auto"},colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",auto:"col-span-auto"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"},columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",auto:"grid-cols-auto"},display:{none:"hidden",flex:"flex",block:"block",inline:"inline"},flexDirection:{row:"flex-row",column:"flex-col"},flexWrap:{wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},gap:r("gap"),justifyContent:{stretch:"justify-stretch",start:"justify-start",center:"justify-center",end:"justify-end",around:"justify-around",between:"justify-between"},margin:r("m"),marginBottom:r("mb"),marginLeft:r("ml"),marginRight:r("mr"),marginTop:r("mt"),marginX:r("mx"),marginY:r("my"),padding:r("p"),paddingBottom:r("pb"),paddingLeft:r("pl"),paddingRight:r("pr"),paddingTop:r("pt"),paddingX:r("px"),paddingY:r("py"),rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",7:"row-span-7",8:"row-span-8",9:"row-span-9",10:"row-span-10",11:"row-span-11",12:"row-span-12",full:"row-span-full"}},s=(e,t)=>{let n=[];if(!o.hasOwnProperty(e))return n;if("string"==typeof t||"number"==typeof t){var r;let s=(null===(r=o[e])||void 0===r?void 0:r[t])||t;n.push("cu-".concat(s))}else"object"==typeof t&&Object.entries(t).forEach(t=>{var r;let[s,l]=t,i=(null===(r=o[e])||void 0===r?void 0:r[l])||l;"xs"===s?n.push("cu-".concat(i)):n.push("cu-".concat(s,"-").concat(i))});return n},l=e=>{let t=[];return Object.entries(e).forEach(e=>{let[n,r]=e;t.push(...s(n,r))}),t.filter(Boolean).join(" ")}},4952:function(e){e.exports={chip:"styles_chip__XPG78",head:"styles_head__L8DiE"}},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}},9986:function(e){e.exports={container:"styles_container__T5X7T",preview:"styles_preview__tlnTq",previewContent:"styles_previewContent__ZqyBx",center:"styles_center__xU0vc",trigger:"styles_trigger__oILEp",panel:"styles_panel__rSJk7"}},8295:function(e){e.exports={wrapper:"styles_wrapper__sBS6b",table:"styles_table__ij6HO",tableCell:"styles_tableCell__kaS_H",tableHeaderCell:"styles_tableHeaderCell__bWDvx",tableRow:"styles_tableRow__LiOYk",tableChip:"styles_tableChip__K9ssW",tableType:"styles_tableType__Nq22z"}},6825:function(e){e.exports={root:"styles_root__sy2wE",list:"styles_list___Mh8g",tab:"styles_tab__IQ_KB",indicator:"styles_indicator__iUzBj"}}},function(e){e.O(0,[733,1393,6211,8975,1333,8174,2971,2117,1744],function(){return e(e.s=6527)}),_N_E=e.O()}]);