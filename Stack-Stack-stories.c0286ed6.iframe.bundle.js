"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[706],{"./src/components/Stack/Stack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignCenter:()=>AlignCenter,AlignLeft:()=>AlignLeft,AlignRight:()=>AlignRight,Default:()=>Default,LargeGap:()=>LargeGap,ResponsiveAlign:()=>ResponsiveAlign,ResponsiveGap:()=>ResponsiveGap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Stack__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Stack/Stack.tsx"),_Box_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/utils/argTypes.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stack",component:_Stack__WEBPACK_IMPORTED_MODULE_1__.B,argTypes:{..._docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__.V8,..._docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__.To,align:{control:"inline-radio",options:["left","center","right"]},children:{control:!1},as:{control:!1},className:{control:"text"}},args:{align:"left",gap:"xs"}},FakeBox=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box__WEBPACK_IMPORTED_MODULE_3__.a,{paddingX:"xl",paddingY:"md",borderRadius:"small",style:{background:"#1f47ff",color:"white"}},"Fake Box"),Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null))}},AlignLeft={args:{...Default.args,align:"left"}},AlignCenter={args:{...Default.args,align:"center"}},AlignRight={args:{...Default.args,align:"right"}},ResponsiveAlign={args:{...Default.args,align:{xs:"left",md:"center",lg:"right"}}},ResponsiveGap={args:{...Default.args,gap:{xs:"xs",md:"md",lg:"2xl"}}},LargeGap={args:{...Default.args,gap:"xl"}},__namedExportsOrder=["Default","AlignLeft","AlignCenter","AlignRight","ResponsiveAlign","ResponsiveGap","LargeGap"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <FakeBox />\n        <FakeBox />\n        <FakeBox />\n      </>\n  }\n}",...Default.parameters?.docs?.source}}},AlignLeft.parameters={...AlignLeft.parameters,docs:{...AlignLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'left'\n  }\n}",...AlignLeft.parameters?.docs?.source}}},AlignCenter.parameters={...AlignCenter.parameters,docs:{...AlignCenter.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'center'\n  }\n}",...AlignCenter.parameters?.docs?.source}}},AlignRight.parameters={...AlignRight.parameters,docs:{...AlignRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'right'\n  }\n}",...AlignRight.parameters?.docs?.source}}},ResponsiveAlign.parameters={...ResponsiveAlign.parameters,docs:{...ResponsiveAlign.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: {\n      xs: 'left',\n      md: 'center',\n      lg: 'right'\n    }\n  }\n}",...ResponsiveAlign.parameters?.docs?.source}}},ResponsiveGap.parameters={...ResponsiveGap.parameters,docs:{...ResponsiveGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    gap: {\n      xs: 'xs',\n      md: 'md',\n      lg: '2xl'\n    }\n  }\n}",...ResponsiveGap.parameters?.docs?.source}}},LargeGap.parameters={...LargeGap.parameters,docs:{...LargeGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    gap: 'xl'\n  }\n}",...LargeGap.parameters?.docs?.source}}}}}]);