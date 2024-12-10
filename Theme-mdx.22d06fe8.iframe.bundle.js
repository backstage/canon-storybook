(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[724],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./docs/Theme.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});var Table_namespaceObject={};__webpack_require__.r(Table_namespaceObject),__webpack_require__.d(Table_namespaceObject,{Body:()=>Table.nB,Cell:()=>Table.fh,Header:()=>Table.Y9,HeaderCell:()=>Table.A3,HeaderRow:()=>Table.Sy,Root:()=>Table.bL,Row:()=>Table.fI});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),Title=__webpack_require__("./docs/components/Title/Title.tsx"),Text=__webpack_require__("./docs/components/Text/Text.tsx"),Chip=__webpack_require__("./docs/components/Chip/Chip.tsx"),Table=__webpack_require__("./docs/components/Table/Table.tsx");function _createMdxContent(props){const _components={code:"code",p:"p",...(0,lib.R)(),...props.components};return Table_namespaceObject||_missingMdxReference("Table",!1),Table.nB||_missingMdxReference("Table.Body",!0),Table.fh||_missingMdxReference("Table.Cell",!0),Table.Y9||_missingMdxReference("Table.Header",!0),Table.A3||_missingMdxReference("Table.HeaderCell",!0),Table.Sy||_missingMdxReference("Table.HeaderRow",!0),Table.bL||_missingMdxReference("Table.Root",!0),Table.fI||_missingMdxReference("Table.Row",!0),(0,jsx_runtime.jsxs)(dist.di,{children:[(0,jsx_runtime.jsx)(Title.h,{type:"h1",children:"Theming"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Backstage ships with a default theme with a light and dark mode variant. The\nthemes are provided as a part of the ",(0,jsx_runtime.jsx)(_components.code,{children:"@backstage/canon"})," package, which also\nincludes utilities for customizing the default theme, or creating completely\nnew themes."]})}),(0,jsx_runtime.jsx)(Title.h,{type:"h2",children:"Light & Dark modes"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)(_components.p,{children:"By default we are supporting both light and dark modes. Each user can opt to\nchoose what theme they want to use or to use their system decide what theme to\nuse. If you want to create your own theme, you will have to set both light and\ndark themes following the instructions below. If you only set one of them, the\nother mode will fallback to the default theme."})}),(0,jsx_runtime.jsx)(Title.h,{type:"h2",children:"How to create your own theme"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)(_components.p,{children:"To create your own theme, you will have to define the variables below. To do\nthat, create a theme.css file and import it in your application. Here's an\nexample below on how to set your light and dark mode."})}),(0,jsx_runtime.jsx)(dist.kL,{code:"/** Light theme **/\n[data-theme='light'] {\n  --canon-accent: #1ed760;\n  --canon-bg: #fff;\n  --canon-surface-1: #f5f5f5;\n  --canon-surface-2: #000;\n  --canon-outline: #666;\n  --canon-outline-focus: #ccc;\n  --canon-text-primary: #f0f0f0;\n  --canon-text-secondary: #666;\n  --canon-font-regular: 'Geist', serif;\n  --canon-font-mono: 'Monospace', monospace;\n  /* ... other values */\n}\n  \n/** Dark theme **/\n[data-theme='dark'] {\n  --canon-accent: #1ed760;\n  --canon-bg: #000;\n  --canon-surface-1: #f5f5f5;\n  --canon-surface-2: #000;\n  --canon-outline: #666;\n  --canon-outline-focus: #ccc;\n  --canon-text-primary: #fff;\n  --canon-text-secondary: #666;\n  --canon-font-regular: 'Geist', serif;\n  --canon-font-mono: 'Monospace', monospace;\n  /* ... other values */\n}\n",language:"css",dark:!0}),(0,jsx_runtime.jsx)(Title.h,{type:"h2",children:"Colors"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)(_components.p,{children:"We provide a set of generic colours tokens that we use across Canon. By\nchanging these colours you can easily change the look and feel of your\napplication to match your brand."})}),(0,jsx_runtime.jsxs)(Table.bL,{children:[(0,jsx_runtime.jsx)(Table.Y9,{children:(0,jsx_runtime.jsxs)(Table.Sy,{children:[(0,jsx_runtime.jsx)(Table.A3,{children:"Prop"}),(0,jsx_runtime.jsx)(Table.A3,{children:"Description"})]})}),(0,jsx_runtime.jsxs)(Table.nB,{children:[(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-accent"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The accent color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-bg"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The background color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-surface-1"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The first surface color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-surface-2"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The second surface color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-outline"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The outline color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-outline-focus"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The outline focus color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-text-primary"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The primary text color for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-text-secondary"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The secondary text color for the theme."})]})]})]}),(0,jsx_runtime.jsx)(Title.h,{type:"h2",children:"Typography"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsx)(_components.p,{children:"We have two fonts that we use across Canon. The first one is the sans-serif\nfont that we use for the body of the application. The second one is the\nmonospace font that we use for code blocks and tables."})}),(0,jsx_runtime.jsxs)(Table.bL,{children:[(0,jsx_runtime.jsx)(Table.Y9,{children:(0,jsx_runtime.jsxs)(Table.Sy,{children:[(0,jsx_runtime.jsx)(Table.A3,{children:"Prop"}),(0,jsx_runtime.jsx)(Table.A3,{children:"Description"})]})}),(0,jsx_runtime.jsxs)(Table.nB,{children:[(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-font-regular"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The sans-serif font for the theme."})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-font-mono"})}),(0,jsx_runtime.jsx)(Table.fh,{children:"The monospace font for the theme."})]})]})]}),(0,jsx_runtime.jsx)(Title.h,{type:"h2",children:"Spacing"}),(0,jsx_runtime.jsx)(Text.E,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Our default spacing system is made to work in most scenarios. We have 7 scale\nvalues from ",(0,jsx_runtime.jsx)(_components.code,{children:"xxs"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"xxl"}),". We use the values on padding and margin in our\nlayout components mostly. If you prefer to use a different spacing system, you\ncan do that by changing the values below."]})}),(0,jsx_runtime.jsxs)(Table.bL,{children:[(0,jsx_runtime.jsx)(Table.Y9,{children:(0,jsx_runtime.jsxs)(Table.Sy,{children:[(0,jsx_runtime.jsx)(Table.A3,{children:"Prop"}),(0,jsx_runtime.jsx)(Table.A3,{children:"Description"})]})}),(0,jsx_runtime.jsxs)(Table.nB,{children:[(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-unit"})}),(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsxs)(_components.p,{children:["The base unit for the spacing system. Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"1em"})]})})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-xxs"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"0.25 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-xs"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"0.5 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-sm"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"0.75 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-md"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"1.25 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-lg"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"2 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-xl"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"3.25 x space unit"})]})]}),(0,jsx_runtime.jsxs)(Table.fI,{children:[(0,jsx_runtime.jsx)(Table.fh,{children:(0,jsx_runtime.jsx)(Chip.v,{head:!0,children:"--canon-space-xxl"})}),(0,jsx_runtime.jsxs)(Table.fh,{children:["Default value is ",(0,jsx_runtime.jsx)(_components.code,{children:"5.25 x space unit"})]})]})]})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./docs/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>Chip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Chip=({children,head=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"chip "+(head?"head":"")},children);Chip.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},head:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./docs/components/Table/Table.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A3:()=>HeaderCell,Sy:()=>HeaderRow,Y9:()=>Header,bL:()=>Root,fI:()=>Row,fh:()=>Cell,nB:()=>Body});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Root=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"table-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"table"},children)),Header=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead",null,children),Body=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,children),HeaderRow=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",null,children),HeaderCell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("th",{className:"table-cell table-header-cell"},children),Row=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{className:"table-row"},children),Cell=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{className:"table-cell"},children);Root.__docgenInfo={description:"",methods:[],displayName:"Root",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Body.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderRow.__docgenInfo={description:"",methods:[],displayName:"HeaderRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},HeaderCell.__docgenInfo={description:"",methods:[],displayName:"HeaderCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Row.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},Cell.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}},"./docs/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Text=({children,style})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text",style},children);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}},"./docs/components/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Title});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const Title=({children,style,type="h1"})=>{let Component="h1";return"h1"===type&&(Component="h1"),"h2"===type&&(Component="h2"),"h3"===type&&(Component="h3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{className:`title ${type}`,style,children})};Title.__docgenInfo={description:"",methods:[],displayName:"Title",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},type:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}}}}]);