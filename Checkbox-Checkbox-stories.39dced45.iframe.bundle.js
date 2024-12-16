/*! For license information please see Checkbox-Checkbox-stories.39dced45.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[8498],{"./src/components/Checkbox/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var react=__webpack_require__("../../node_modules/react/index.js"),CheckboxRoot=__webpack_require__("../../node_modules/@base_ui/react/Checkbox/Root/CheckboxRoot.js"),CheckboxIndicator=__webpack_require__("../../node_modules/@base_ui/react/Checkbox/Indicator/CheckboxIndicator.js"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx");const Checkbox=react.forwardRef(((props,ref)=>{const{label,checked,onChange,disabled,required,className,name,value,style}=props,checkboxElement=react.createElement(CheckboxRoot.y,{ref,className:`checkbox ${className}`,checked,onCheckedChange:onChange,disabled,required,name,value,style},react.createElement(CheckboxIndicator.P,{className:"checkbox-indicator"},react.createElement(Icon.I,{name:"check",size:12})));return label?react.createElement("label",{className:"checkbox-label"},checkboxElement,label):checkboxElement}));Checkbox.__docgenInfo={description:"@public",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Checkbox_stories={title:"Components/Checkbox",component:Checkbox,parameters:{layout:"centered"}},Primary={args:{label:"Accept terms and conditions"}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Accept terms and conditions'\n  }\n}",...Primary.parameters?.docs?.source}}}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_theme_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/context.tsx");const Icon=props=>{const{name,size=16}=props,{icons}=(0,_theme_context__WEBPACK_IMPORTED_MODULE_1__.D)(),RemixIcon=icons[name];return RemixIcon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixIcon,{className:`icon-${size}`}):(console.error(`Icon "${name}" not found or is not a valid component.`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",null))};Icon.__docgenInfo={description:"@public",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"| 'arrowDown'\n| 'arrowLeft'\n| 'arrowRight'\n| 'arrowUp'\n| 'arrowDownCircle'\n| 'arrowLeftCircle'\n| 'arrowRightCircle'\n| 'arrowUpCircle'\n| 'check'\n| 'chevronDown'\n| 'chevronLeft'\n| 'chevronRight'\n| 'chevronUp'\n| 'cloud'\n| 'heart'\n| 'plus'\n| 'trash'",elements:[{name:"literal",value:"'arrowDown'"},{name:"literal",value:"'arrowLeft'"},{name:"literal",value:"'arrowRight'"},{name:"literal",value:"'arrowUp'"},{name:"literal",value:"'arrowDownCircle'"},{name:"literal",value:"'arrowLeftCircle'"},{name:"literal",value:"'arrowRightCircle'"},{name:"literal",value:"'arrowUpCircle'"},{name:"literal",value:"'check'"},{name:"literal",value:"'chevronDown'"},{name:"literal",value:"'chevronLeft'"},{name:"literal",value:"'chevronRight'"},{name:"literal",value:"'chevronUp'"},{name:"literal",value:"'cloud'"},{name:"literal",value:"'heart'"},{name:"literal",value:"'plus'"},{name:"literal",value:"'trash'"}]},description:""},size:{required:!1,tsType:{name:"number"},description:""}}}}}]);