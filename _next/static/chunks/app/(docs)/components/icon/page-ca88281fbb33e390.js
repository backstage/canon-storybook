(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3607],{3975:function(e,t,n){Promise.resolve().then(n.t.bind(n,5878,23)),Promise.resolve().then(n.t.bind(n,2260,23)),Promise.resolve().then(n.t.bind(n,8295,23)),Promise.resolve().then(n.t.bind(n,4952,23)),Promise.resolve().then(n.t.bind(n,9986,23)),Promise.resolve().then(n.bind(n,7127)),Promise.resolve().then(n.bind(n,8119)),Promise.resolve().then(n.bind(n,5689)),Promise.resolve().then(n.bind(n,5496)),Promise.resolve().then(n.bind(n,3786)),Promise.resolve().then(n.bind(n,8810)),Promise.resolve().then(n.bind(n,1311)),Promise.resolve().then(n.bind(n,9241)),Promise.resolve().then(n.bind(n,1477)),Promise.resolve().then(n.bind(n,1449)),Promise.resolve().then(n.bind(n,9527)),Promise.resolve().then(n.bind(n,9027)),Promise.resolve().then(n.bind(n,6366)),Promise.resolve().then(n.bind(n,2430)),Promise.resolve().then(n.bind(n,105)),Promise.resolve().then(n.bind(n,6361)),Promise.resolve().then(n.bind(n,5174)),Promise.resolve().then(n.bind(n,5832)),Promise.resolve().then(n.bind(n,70))},7127:function(e,t,n){"use strict";n.r(t),n.d(t,{List:function(){return c},Panel:function(){return u},Root:function(){return l},Tab:function(){return d}});var r=n(7437),o=n(1333),s=n(6825),i=n.n(s),a=n(5832);let l=e=>{let{className:t,...n}=e;return(0,r.jsx)(o.m.fC,{className:"".concat(i().root," ").concat(t),...n})},c=e=>{let{className:t,children:n,...s}=e;return(0,r.jsxs)(o.m.aV,{className:"".concat(i().list," ").concat(t),...s,children:[n,(0,r.jsx)(o.m.z$,{className:i().indicator})]})},d=e=>(0,r.jsx)(o.m.OK,{...e,render:(e,t)=>{let{children:n,...o}=e;return(0,r.jsx)("button",{className:i().tab,...o,children:(0,r.jsx)(a.Text,{variant:"subtitle",weight:"bold",...o,style:{color:t.selected?"var(--canon-fg-text-primary)":"var(--canon-fg-text-secondary)"},children:n})})}}),u=e=>{let{className:t,...n}=e;return(0,r.jsx)(o.m.s_,{className:"".concat(i().panel," ").concat(t),...n})}},8119:function(e,t,n){"use strict";n.d(t,{IconPreview:function(){return s}});var r=n(7437),o=n(6361);let s=()=>(0,r.jsx)(o.Icon,{name:"heart"})},2430:function(e,t,n){"use strict";n.d(t,{Button:function(){return l}});var r=n(7437),o=n(2265),s=n(6361),i=n(6532),a=n(8205);let l=(0,o.forwardRef)((e,t)=>{let{size:n="medium",variant:o="primary",disabled:l,iconStart:c,iconEnd:d,children:u,className:_,style:m,...h}=e,v=(0,a.V)(n),f=(0,a.V)(o);return(0,r.jsxs)("button",{...h,ref:t,disabled:l,className:(0,i.Z)("canon-Button","canon-Button--size-".concat(v),"canon-Button--variant-".concat(f),_),style:m,children:[(0,r.jsxs)("span",{className:["canon-Button--content",c&&d?"canon-Button--icon-start-end":""].filter(Boolean).join(" "),children:[c&&(0,r.jsx)(s.Icon,{name:c}),u]}),d&&(0,r.jsx)(s.Icon,{name:d})]})})},105:function(e,t,n){"use strict";n.d(t,{Heading:function(){return a}});var r=n(7437),o=n(2265),s=n(6532),i=n(8205);let a=(0,o.forwardRef)((e,t)=>{let{children:n,variant:o="title1",as:a="h1",className:l,...c}=e,d=(0,i.V)(o),u=a;return"title2"===o&&(u="h2"),"title3"===o&&(u="h3"),"title4"===o&&(u="h4"),"title5"===o&&(u="h5"),a&&(u=a),(0,r.jsx)(u,{ref:t,className:(0,s.Z)("canon-Heading",d&&"canon-Heading--variant-".concat(d),l),...c,children:n})});a.displayName="Heading"},6361:function(e,t,n){"use strict";n.r(t),n.d(t,{Icon:function(){return i}});var r=n(7437);n(2265);var o=n(70),s=n(6532);let i=e=>{let{name:t,size:n=16,className:i,style:a,...l}=e,{icons:c}=(0,o.useCanon)(),d=c[t];return d?(0,r.jsx)(d,{className:(0,s.Z)("canon-Icon",i),style:{width:n,height:n,...a},...l}):(console.error('Icon "'.concat(t,'" not found or is not a valid component.')),(0,r.jsx)("svg",{}))}},5174:function(e,t,n){"use strict";n.d(t,{Input:function(){return a}});var r=n(7437),o=n(2265),s=n(4589),i=n(6532);let a=(0,o.forwardRef)((e,t)=>{let{size:n="md",className:o,...a}=e;return(0,r.jsx)(s.I,{ref:t,className:(0,i.Z)("canon-Input","sm"===n?"canon-Input--size-sm":"canon-Input--size-md",o),...a})});a.displayName=s.I.displayName},5832:function(e,t,n){"use strict";n.d(t,{Text:function(){return a}});var r=n(7437),o=n(2265),s=n(8205),i=n(6532);let a=(0,o.forwardRef)((e,t)=>{let{children:n,variant:o="body",weight:a="regular",style:l,className:c,...d}=e,u=(0,s.V)(o),_=(0,s.V)(a);return(0,r.jsx)("p",{ref:t,className:(0,i.Z)("canon-Text",u&&"canon-Text--variant-".concat(u),_&&"canon-Text--weight-".concat(_),c),style:l,...d,children:n})});a.displayName="Text"},70:function(e,t,n){"use strict";n.r(t),n.d(t,{CanonProvider:function(){return l},useCanon:function(){return c}});var r=n(7437),o=n(2265),s=n(7865);let i={arrowDown:s.ZMw,arrowLeft:s.RHc,arrowRight:s.wKp,arrowUp:s.tN7,arrowDownCircle:s.iOO,arrowLeftCircle:s.zNb,arrowRightCircle:s.FU_,arrowUpCircle:s.vNF,check:s.ffJ,chevronDown:s.ZXJ,chevronUp:s.gcy,chevronLeft:s.jW7,chevronRight:s.jfD,cloud:s.Pa1,externalLink:s.uXP,heart:s.iB2,moon:s.S6R,plus:s.p22,sun:s.sEY,trash:s.GnT},a=(0,o.createContext)({icons:i}),l=e=>{let{children:t,overrides:n}=e,o={...i,...n};return(0,r.jsx)(a.Provider,{value:{icons:o},children:t})},c=()=>(0,o.useContext)(a)},8205:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(2265);let o=r.useLayoutEffect,s=[{name:"Initial",id:"initial",value:0},{name:"Extra Small",id:"xs",value:640},{name:"Small",id:"sm",value:768},{name:"Medium",id:"md",value:1024},{name:"Large",id:"lg",value:1280},{name:"Extra Large",id:"xl",value:1536}],i=()=>{let e=s.map(e=>(function(e){let{defaultValue:t=!1,initializeWithValue:n=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e=>window.matchMedia(e).matches,[i,a]=(0,r.useState)(()=>n?s(e):t);function l(){a(s(e))}return o(()=>{let t=window.matchMedia(e);return l(),t.addListener?t.addListener(l):t.addEventListener("change",l),()=>{t.removeListener?t.removeListener(l):t.removeEventListener("change",l)}},[e]),i})("(min-width: ".concat(e.value,"px)")));for(let t=e.length-1;t>=0;t--)if(e[t])return s[t].id;return s[0].id},a=e=>{let t=i();if("object"==typeof e){let n=s.findIndex(e=>e.id===t);for(let t=n;t>=0;t--)if(e[s[t].id])return e[s[t].id];for(let t=0;t<s.length;t++)if(e[s[t].id])return e[s[t].id]}return e}},4952:function(e){e.exports={chip:"styles_chip__XPG78",head:"styles_head__L8DiE"}},2260:function(e){e.exports={codeBlock:"styles_codeBlock__cJkhk",title:"styles_title__LVFiR",code:"styles_code__W0N63"}},9986:function(e){e.exports={container:"styles_container__T5X7T",preview:"styles_preview__tlnTq",previewContent:"styles_previewContent__ZqyBx",center:"styles_center__xU0vc",trigger:"styles_trigger__oILEp",panel:"styles_panel__rSJk7"}},8295:function(e){e.exports={wrapper:"styles_wrapper__sBS6b",table:"styles_table__ij6HO",tableCell:"styles_tableCell__kaS_H",tableHeaderCell:"styles_tableHeaderCell__bWDvx",tableRow:"styles_tableRow__LiOYk",tableChip:"styles_tableChip__K9ssW",tableType:"styles_tableType__Nq22z"}},6825:function(e){e.exports={root:"styles_root__sy2wE",list:"styles_list___Mh8g",tab:"styles_tab__IQ_KB",indicator:"styles_indicator__iUzBj"}}},function(e){e.O(0,[733,1393,3738,6211,8975,1333,8174,5266,4589,2971,2117,1744],function(){return e(e.s=3975)}),_N_E=e.O()}]);