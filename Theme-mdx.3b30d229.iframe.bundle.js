(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[2724],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./docs/Theme.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./docs/components/Title/Title.tsx"),_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./docs/components/Text/Text.tsx"),_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./docs/components/Chip/Chip.tsx"),_components_Table__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./docs/components/Table/index.ts"),_components_Table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./docs/components/Table/Table.tsx");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return _components_Table__WEBPACK_IMPORTED_MODULE_3__||_missingMdxReference("Table",!1),_components_Table__WEBPACK_IMPORTED_MODULE_4__.nB||_missingMdxReference("Table.Body",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh||_missingMdxReference("Table.Cell",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.Y9||_missingMdxReference("Table.Header",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3||_missingMdxReference("Table.HeaderCell",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.Sy||_missingMdxReference("Table.HeaderRow",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.bL||_missingMdxReference("Table.Root",!0),_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI||_missingMdxReference("Table.Row",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{title:"Core Concepts/Theming"}),"\n"," ","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.di,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h1",children:"Theming"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Backstage ships with a default theme with a light and dark mode variant. The\nthemes are provided as a part of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@backstage/canon"})," package, which also\nincludes utilities for customizing the default theme, or creating completely\nnew themes."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h2",children:"Light & Dark modes"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"By default we are supporting both light and dark modes. Each user can opt to\nchoose what theme they want to use or to use their system decide what theme to\nuse. If you want to create your own theme, you will have to set both light and\ndark themes following the instructions below. If you only set one of them, the\nother mode will fallback to the default theme."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h2",children:"How to create your own theme"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"To create your own theme, you will have to define the variables below. To do\nthat, create a theme.css file and import it in your application. Here's an\nexample below on how to set your light and dark mode."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.kL,{code:"/** Light theme **/\n[data-theme='light'] {\n  --canon-accent: #1ed760;\n  --canon-bg: #fff;\n  --canon-surface-1: #f5f5f5;\n  --canon-surface-2: #000;\n  --canon-outline: #666;\n  --canon-outline-focus: #ccc;\n  --canon-text-primary: #f0f0f0;\n  --canon-text-secondary: #666;\n  --canon-font-regular: 'Geist', serif;\n  --canon-font-mono: 'Monospace', monospace;\n  /* ... other values */\n}\n  \n/** Dark theme **/\n[data-theme='dark'] {\n  --canon-accent: #1ed760;\n  --canon-bg: #000;\n  --canon-surface-1: #f5f5f5;\n  --canon-surface-2: #000;\n  --canon-outline: #666;\n  --canon-outline-focus: #ccc;\n  --canon-text-primary: #fff;\n  --canon-text-secondary: #666;\n  --canon-font-regular: 'Geist', serif;\n  --canon-font-mono: 'Monospace', monospace;\n  /* ... other values */\n}\n",language:"css",dark:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h2",children:"Colors"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We provide a set of generic colours tokens that we use across Canon. By\nchanging these colours you can easily change the look and feel of your\napplication to match your brand."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.bL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Y9,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Sy,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.nB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-accent"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The accent color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-bg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The background color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-surface-1"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The first surface color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-surface-2"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The second surface color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-outline"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The outline color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-outline-focus"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The outline focus color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-text-primary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The primary text color for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-text-secondary"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The secondary text color for the theme."})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h2",children:"Typography"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We have two fonts that we use across Canon. The first one is the sans-serif\nfont that we use for the body of the application. The second one is the\nmonospace font that we use for code blocks and tables."})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.bL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Y9,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Sy,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.nB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-font-regular"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The sans-serif font for the theme."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-font-mono"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:"The monospace font for the theme."})]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_6__.h,{type:"h2",children:"Spacing"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_7__.E,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our default spacing system is made to work in most scenarios. We have 7 scale\nvalues from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xxs"})," to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"xxl"}),". We use the values on padding and margin in our\nlayout components mostly. If you prefer to use a different spacing system, you\ncan do that by changing the values below."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.bL,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Y9,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.Sy,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Prop"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.A3,{children:"Description"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.nB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-unit"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The base unit for the spacing system. Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"1em"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-xxs"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"0.25 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-xs"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"0.5 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-sm"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"0.75 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-md"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"1.25 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-lg"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"2 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-xl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"3.25 x space unit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fI,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components__WEBPACK_IMPORTED_MODULE_8__.v,{head:!0,children:"--canon-space-xxl"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Table__WEBPACK_IMPORTED_MODULE_4__.fh,{children:["Default value is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"5.25 x space unit"})]})]})]})]})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_backstage_backstage_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./docs/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Chip=({children,head=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"chip "+(head?"head":"")},children);Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},head:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./docs/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A3:()=>HeaderCell,Sy:()=>HeaderRow,Y9:()=>Header,bL:()=>Root,fI:()=>Row,fh:()=>Cell,nB:()=>Body});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Root=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-table-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"sb-table"},children)),Header=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,children),Body=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,children),HeaderRow=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,children),HeaderCell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{className:"sb-table-cell sb-table-header-cell"},children),Row=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:"sb-table-row"},children),Cell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{className:"sb-table-cell"},children);Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Body.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderRow.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderCell.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./docs/components/Table/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Body:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.nB,Cell:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.fh,Header:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.Y9,HeaderCell:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.A3,HeaderRow:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.Sy,Root:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.bL,Row:()=>_Table__WEBPACK_IMPORTED_MODULE_0__.fI});var _Table__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./docs/components/Table/Table.tsx")},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"sb-text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`sb-title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);