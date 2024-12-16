(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[733,9706],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/Stack/Docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_Stack_stories__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Stack/Stack.stories.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./docs/components/Title/Title.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./docs/components/Text/Text.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./docs/components/PropsTable/PropsTable.tsx"),_docs_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./docs/components/PropsTable/getProps.ts"),_layout_sprinkles_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/layout/sprinkles.css.ts");function _createMdxContent(props){const _components={p:"p",...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_Stack_stories__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.di,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h1",children:"Stack"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is the stack container component. It will help to define the number of\ncolumns that will be used in the grid. You can also define the gap between the\ncolumns. All values are responsive."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Usage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'import { Stack } from "@backstage/canon";\n\n<Stack>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n</Stack>\n',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",style:{marginBottom:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"API reference"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_7__.X,{data:{align:{type:["left","center","right"],responsive:!0},children:{type:"ReactNode",required:!1},className:{type:"string",required:!1},style:{type:"CSSProperties",required:!1}}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{style:{marginTop:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The grid component also accepts all the spacing props from the Box component."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_7__.X,{data:(0,_docs_components__WEBPACK_IMPORTED_MODULE_8__.D)(_layout_sprinkles_css__WEBPACK_IMPORTED_MODULE_9__.P.styles)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Common questions"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Can I stack horizontally?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Stack component only allows for stacking elements vertically. If you want\nto create a column layout, please use the Grid component."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Grid columns={3} gap="md">\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n</Grid>\n',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h2",children:"Examples"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Simple"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A simple example of how to use the Stack component with a medium gap."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:'<Stack gap="md">\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n</Stack>',language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Responsive"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Stack component also supports responsive values, making it easy to create\nresponsive designs."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:"<Stack gap={{ xs: 'sm', md: 'md' }}>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n</Stack>",language:"tsx",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_5__.h,{type:"h3",children:"Align"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_components__WEBPACK_IMPORTED_MODULE_6__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Stack component also supports responsive alignment, making it easy to\ncreate responsive designs."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.kL,{code:"<Stack align={{ xs: 'left', md: 'center' }}>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n  <Box>Hello World</Box>\n</Stack>",language:"tsx",dark:!0})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/Stack/Stack.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignCenter:()=>AlignCenter,AlignLeft:()=>AlignLeft,AlignRight:()=>AlignRight,Default:()=>Default,LargeGap:()=>LargeGap,ResponsiveAlign:()=>ResponsiveAlign,ResponsiveGap:()=>ResponsiveGap,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Stack__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Stack/Stack.tsx"),_Box_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/utils/argTypes.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stack",component:_Stack__WEBPACK_IMPORTED_MODULE_1__.B,argTypes:{..._docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__.V8,..._docs_utils_argTypes__WEBPACK_IMPORTED_MODULE_2__.To,align:{control:"inline-radio",options:["left","center","right"]},children:{control:!1},as:{control:!1},className:{control:"text"}},args:{align:"left",gap:"xs"}},FakeBox=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Box_Box__WEBPACK_IMPORTED_MODULE_3__.a,{paddingX:"xl",paddingY:"md",borderRadius:"small",style:{background:"#1f47ff",color:"white"}},"Fake Box"),Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeBox,null))}},AlignLeft={args:{...Default.args,align:"left"}},AlignCenter={args:{...Default.args,align:"center"}},AlignRight={args:{...Default.args,align:"right"}},ResponsiveAlign={args:{...Default.args,align:{xs:"left",md:"center",lg:"right"}}},ResponsiveGap={args:{...Default.args,gap:{xs:"xs",md:"md",lg:"2xl"}}},LargeGap={args:{...Default.args,gap:"xl"}},__namedExportsOrder=["Default","AlignLeft","AlignCenter","AlignRight","ResponsiveAlign","ResponsiveGap","LargeGap"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <FakeBox />\n        <FakeBox />\n        <FakeBox />\n      </>\n  }\n}",...Default.parameters?.docs?.source}}},AlignLeft.parameters={...AlignLeft.parameters,docs:{...AlignLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'left'\n  }\n}",...AlignLeft.parameters?.docs?.source}}},AlignCenter.parameters={...AlignCenter.parameters,docs:{...AlignCenter.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'center'\n  }\n}",...AlignCenter.parameters?.docs?.source}}},AlignRight.parameters={...AlignRight.parameters,docs:{...AlignRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: 'right'\n  }\n}",...AlignRight.parameters?.docs?.source}}},ResponsiveAlign.parameters={...ResponsiveAlign.parameters,docs:{...ResponsiveAlign.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    align: {\n      xs: 'left',\n      md: 'center',\n      lg: 'right'\n    }\n  }\n}",...ResponsiveAlign.parameters?.docs?.source}}},ResponsiveGap.parameters={...ResponsiveGap.parameters,docs:{...ResponsiveGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    gap: {\n      xs: 'xs',\n      md: 'md',\n      lg: '2xl'\n    }\n  }\n}",...ResponsiveGap.parameters?.docs?.source}}},LargeGap.parameters={...LargeGap.parameters,docs:{...LargeGap.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    gap: 'xl'\n  }\n}",...LargeGap.parameters?.docs?.source}}}},'../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/Stack/sprinkles.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA63SzwqCQBDH8btPMcc6GOvf1C69SWzuqFu6yLpQEL17KBTqJjXUceDLDz4wm4OXMtWeGYObA8BrWSpXGmy6DDqj0eTVzrk7m2cW21lR49XtDNdmUuZ2maMyqCeVXNhDJfpu36CQHLpcIyrgSsCqkcq9SGGqDOKQtdf1sPAa9IZzSQJwH8fbd/HYM+vFu/6pmrWnxe3B1teffNs4sXw+xZcQfUjwnX/3ecwPLWBAAaZEYEEA1n8A+on9oSEFyInAkgBs/gCMgtgCRhTgkQisCED1BfABrTYuggEFAAA="}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js':(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"._190npk00 {\n  align-items: stretch;\n}\n._190npk06 {\n  align-items: flex-start;\n}\n._190npk0c {\n  align-items: center;\n}\n._190npk0i {\n  align-items: flex-end;\n}\n@media screen and (min-width: 640px) {\n  ._190npk01 {\n    align-items: stretch;\n  }\n  ._190npk07 {\n    align-items: flex-start;\n  }\n  ._190npk0d {\n    align-items: center;\n  }\n  ._190npk0j {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 768px) {\n  ._190npk02 {\n    align-items: stretch;\n  }\n  ._190npk08 {\n    align-items: flex-start;\n  }\n  ._190npk0e {\n    align-items: center;\n  }\n  ._190npk0k {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1024px) {\n  ._190npk03 {\n    align-items: stretch;\n  }\n  ._190npk09 {\n    align-items: flex-start;\n  }\n  ._190npk0f {\n    align-items: center;\n  }\n  ._190npk0l {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1280px) {\n  ._190npk04 {\n    align-items: stretch;\n  }\n  ._190npk0a {\n    align-items: flex-start;\n  }\n  ._190npk0g {\n    align-items: center;\n  }\n  ._190npk0m {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1536px) {\n  ._190npk05 {\n    align-items: stretch;\n  }\n  ._190npk0b {\n    align-items: flex-start;\n  }\n  ._190npk0h {\n    align-items: center;\n  }\n  ._190npk0n {\n    align-items: flex-end;\n  }\n}","",{version:3,sources:["webpack://./../../node_modules/@vanilla-extract/webpack-plugin/extracted.js"],names:[],mappings:"AAAA;EACE,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,qBAAqB;EACvB;AACF",sourcesContent:["._190npk00 {\n  align-items: stretch;\n}\n._190npk06 {\n  align-items: flex-start;\n}\n._190npk0c {\n  align-items: center;\n}\n._190npk0i {\n  align-items: flex-end;\n}\n@media screen and (min-width: 640px) {\n  ._190npk01 {\n    align-items: stretch;\n  }\n  ._190npk07 {\n    align-items: flex-start;\n  }\n  ._190npk0d {\n    align-items: center;\n  }\n  ._190npk0j {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 768px) {\n  ._190npk02 {\n    align-items: stretch;\n  }\n  ._190npk08 {\n    align-items: flex-start;\n  }\n  ._190npk0e {\n    align-items: center;\n  }\n  ._190npk0k {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1024px) {\n  ._190npk03 {\n    align-items: stretch;\n  }\n  ._190npk09 {\n    align-items: flex-start;\n  }\n  ._190npk0f {\n    align-items: center;\n  }\n  ._190npk0l {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1280px) {\n  ._190npk04 {\n    align-items: stretch;\n  }\n  ._190npk0a {\n    align-items: flex-start;\n  }\n  ._190npk0g {\n    align-items: center;\n  }\n  ._190npk0m {\n    align-items: flex-end;\n  }\n}\n@media screen and (min-width: 1536px) {\n  ._190npk05 {\n    align-items: stretch;\n  }\n  ._190npk0b {\n    align-items: flex-start;\n  }\n  ._190npk0h {\n    align-items: center;\n  }\n  ._190npk0n {\n    align-items: flex-end;\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./docs/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Chip=({children,head=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"chip "+(head?"head":"")},children);Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},head:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./docs/components/PropsTable/PropsTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>PropsTable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./docs/components/Table/Table.tsx"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/components/Chip/Chip.tsx");const PropsTable=({data})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.bL,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Y9,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Sy,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Prop"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Type"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.A3,null,"Responsive"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.nB,null,Object.keys(data).map((n=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fI,{key:n},react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{head:!0},n)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,Array.isArray(data[n].type)?data[n].type.map((t=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,{key:t},t))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].type)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.fh,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.v,null,data[n].responsive?"Yes":"No")))))));PropsTable.__docgenInfo={description:"",methods:[],displayName:"PropsTable",props:{data:{required:!0,tsType:{name:"T"},description:""}}}},"./docs/components/PropsTable/getProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getProps(styles){return Object.keys(styles).reduce(((acc,n)=>{const style=styles[n];let values=[];if(style.values)values=Object.keys(style.values);else if(style.mappings&&style.mappings.length>0){const firstMapping=style.mappings[0];values=Object.keys(styles[firstMapping].values)}else values=[];return acc[n]={type:values,responsive:!0},acc}),{})}__webpack_require__.d(__webpack_exports__,{D:()=>getProps})},"./docs/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A3:()=>HeaderCell,Sy:()=>HeaderRow,Y9:()=>Header,bL:()=>Root,fI:()=>Row,fh:()=>Cell,nB:()=>Body});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Root=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-table-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"sb-table"},children)),Header=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,children),Body=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,children),HeaderRow=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,children),HeaderCell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{className:"sb-table-cell sb-table-header-cell"},children),Row=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:"sb-table-row"},children),Cell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{className:"sb-table-cell"},children);Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Body.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderRow.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderCell.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`sb-title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);