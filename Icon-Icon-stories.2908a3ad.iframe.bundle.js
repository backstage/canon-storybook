"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[466],{"./src/components/Icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithCustomIcon:()=>WithCustomIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.tsx"),_theme_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/context.tsx"),_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/icons.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Icon",component:_Icon__WEBPACK_IMPORTED_MODULE_1__.I,parameters:{layout:"centered"},argTypes:{name:{control:"select",options:Object.keys(_icons__WEBPACK_IMPORTED_MODULE_2__.o)}},args:{name:"heart"}},Primary={args:{name:"heart"}},WithCustomIcon={args:{name:"arrowDown"},decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_context__WEBPACK_IMPORTED_MODULE_3__.N,{overrides:{arrowDown:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Custom Icon")}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},__namedExportsOrder=["Primary","WithCustomIcon"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'heart'\n  }\n}",...Primary.parameters?.docs?.source}}},WithCustomIcon.parameters={...WithCustomIcon.parameters,docs:{...WithCustomIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'arrowDown'\n  },\n  decorators: [Story => <ThemeProvider overrides={{\n    arrowDown: () => <div>Custom Icon</div>\n  }}>\n        <Story />\n      </ThemeProvider>]\n}",...WithCustomIcon.parameters?.docs?.source}}}},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_theme_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/context.tsx");const Icon=({name})=>{const{icons}=(0,_theme_context__WEBPACK_IMPORTED_MODULE_1__.D)(),RemixIcon=icons[name];return RemixIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixIcon,null):(console.error(`Icon "${name}" not found.`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",null))};Icon.__docgenInfo={description:"@public",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},description:""}}}},"./src/components/Icon/icons.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>defaultIcons});var _remixicon_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@remixicon/react/index.mjs");const defaultIcons={arrowDown:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.iqQ,arrowLeft:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.Nkd,arrowRight:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.U$C,arrowUp:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.n5d,cloud:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.O01,heart:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.Zml,plus:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.Ld_,trash:_remixicon_react__WEBPACK_IMPORTED_MODULE_0__.Ku6}},"./src/theme/context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useTheme,N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_components_Icon_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/icons.ts");const ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({icons:_components_Icon_icons__WEBPACK_IMPORTED_MODULE_1__.o}),ThemeProvider=({children,overrides})=>{const combinedIcons={..._components_Icon_icons__WEBPACK_IMPORTED_MODULE_1__.o,...overrides};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider,{value:{icons:combinedIcons}},children)},useTheme=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);ThemeProvider.__docgenInfo={description:"@public",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},overrides:{required:!0,tsType:{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},{name:"ReactComponentType",raw:"React.ComponentType"}],raw:"Record<IconNames, React.ComponentType>"}],raw:"Partial<Record<IconNames, React.ComponentType>>"},description:""}}}}}]);