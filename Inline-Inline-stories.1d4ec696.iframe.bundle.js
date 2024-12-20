"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[70],{"./src/components/Inline/Inline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignCenter:()=>AlignCenter,AlignLeft:()=>AlignLeft,AlignRight:()=>AlignRight,Default:()=>Default,LargeGap:()=>LargeGap,VerticalAlignBottom:()=>VerticalAlignBottom,VerticalAlignCenter:()=>VerticalAlignCenter,VerticalAlignTop:()=>VerticalAlignTop,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Inline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Inline/Inline.tsx"),_Box_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Box.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Inline",component:_Inline__WEBPACK_IMPORTED_MODULE_1__.c,argTypes:{align:{control:"inline-radio",options:["left","center","right"]},alignY:{control:"inline-radio",options:["top","center","bottom"]},children:{control:!1},as:{control:!1},className:{control:"text"}}},FakeBox=({width=120,height=80})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box__WEBPACK_IMPORTED_MODULE_2__.a,{borderRadius:"xs",style:{background:"#1f47ff",color:"white",width,height}}),Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,[{width:45,height:60},{width:150,height:75},{width:80,height:50},{width:120,height:70},{width:95,height:65},{width:110,height:55},{width:130,height:60},{width:100,height:80},{width:140,height:45},{width:85,height:70},{width:125,height:50},{width:105,height:75},{width:115,height:65},{width:135,height:55},{width:90,height:60},{width:145,height:80},{width:75,height:45},{width:155,height:70},{width:60,height:50},{width:160,height:75},{width:70,height:65},{width:150,height:55},{width:95,height:60},{width:120,height:80},{width:85,height:45},{width:130,height:70},{width:100,height:50},{width:140,height:75},{width:110,height:65},{width:125,height:55},{width:105,height:60},{width:145,height:80}].map(((block,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,{key:index,width:block.width,height:block.height}))))}},AlignLeft={args:{...Default.args,align:"left"}},AlignCenter={args:{...Default.args,align:"center"}},AlignRight={args:{...Default.args,align:"right"}},VerticalAlignTop={args:{...Default.args,alignY:"top"}},VerticalAlignCenter={args:{...Default.args,alignY:"center"}},VerticalAlignBottom={args:{...Default.args,alignY:"bottom"}},LargeGap={args:{...Default.args,gap:"xl"}},__namedExportsOrder=["Default","AlignLeft","AlignCenter","AlignRight","VerticalAlignTop","VerticalAlignCenter","VerticalAlignBottom","LargeGap"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        {fakeBlockList.map((block, index) => <FakeBox key={index} width={block.width} height={block.height} />)}\n      </>\n  }\n}",...Default.parameters?.docs?.source}}},AlignLeft.parameters={...AlignLeft.parameters,docs:{...AlignLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'left'\n  }\n}",...AlignLeft.parameters?.docs?.source}}},AlignCenter.parameters={...AlignCenter.parameters,docs:{...AlignCenter.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'center'\n  }\n}",...AlignCenter.parameters?.docs?.source}}},AlignRight.parameters={...AlignRight.parameters,docs:{...AlignRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'right'\n  }\n}",...AlignRight.parameters?.docs?.source}}},VerticalAlignTop.parameters={...VerticalAlignTop.parameters,docs:{...VerticalAlignTop.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    alignY: 'top'\n  }\n}",...VerticalAlignTop.parameters?.docs?.source}}},VerticalAlignCenter.parameters={...VerticalAlignCenter.parameters,docs:{...VerticalAlignCenter.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    alignY: 'center'\n  }\n}",...VerticalAlignCenter.parameters?.docs?.source}}},VerticalAlignBottom.parameters={...VerticalAlignBottom.parameters,docs:{...VerticalAlignBottom.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    alignY: 'bottom'\n  }\n}",...VerticalAlignBottom.parameters?.docs?.source}}},LargeGap.parameters={...LargeGap.parameters,docs:{...LargeGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    gap: 'xl'\n  }\n}",...LargeGap.parameters?.docs?.source}}}},"./src/utils/getClassNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getClassNames});const spaceMap=type=>({none:`${type}-none`,"2xs":`${type}-2xs`,xs:`${type}-xs`,sm:`${type}-sm`,md:`${type}-md`,lg:`${type}-lg`,xl:`${type}-xl`,"2xl":`${type}-2xl`}),valueMap={alignItems:{stretch:"items-stretch",start:"items-start",center:"items-center",end:"items-end"},border:{none:"border-none",base:"border-base",error:"border-error",warning:"border-warning",selected:"border-selected"},borderRadius:{none:"rounded-none","2xs":"rounded-2xs",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl"},colEnd:{1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",auto:"col-end-auto"},colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",auto:"col-span-auto"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",auto:"col-start-auto"},columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",auto:"grid-cols-auto"},display:{none:"hidden",flex:"flex",block:"block",inline:"inline"},flexDirection:{row:"flex-row",column:"flex-col"},flexWrap:{wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},gap:spaceMap("gap"),justifyContent:{stretch:"justify-stretch",start:"justify-start",center:"justify-center",end:"justify-end",around:"justify-around",between:"justify-between"},margin:spaceMap("m"),marginBottom:spaceMap("mb"),marginLeft:spaceMap("ml"),marginRight:spaceMap("mr"),marginTop:spaceMap("mt"),marginX:spaceMap("mx"),marginY:spaceMap("my"),padding:spaceMap("p"),paddingBottom:spaceMap("pb"),paddingLeft:spaceMap("pl"),paddingRight:spaceMap("pr"),paddingTop:spaceMap("pt"),paddingX:spaceMap("px"),paddingY:spaceMap("py"),rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",7:"row-span-7",8:"row-span-8",9:"row-span-9",10:"row-span-10",11:"row-span-11",12:"row-span-12",full:"row-span-full"}},getClassNames=props=>{const classNames=[];return Object.entries(props).forEach((([propName,propValue])=>{classNames.push(...((propName,propValue)=>{const classNames=[];if(!valueMap.hasOwnProperty(propName))return classNames;if("string"==typeof propValue||"number"==typeof propValue){const value=valueMap[propName]?.[propValue]||propValue;classNames.push(`cu-${value}`)}else"object"==typeof propValue&&Object.entries(propValue).forEach((([breakpoint,value])=>{const mappedValue=valueMap[propName]?.[value]||value;"xs"===breakpoint?classNames.push(`cu-${mappedValue}`):classNames.push(`cu-${breakpoint}-${mappedValue}`)}));return classNames})(propName,propValue))})),classNames.filter(Boolean).join(" ")}}}]);