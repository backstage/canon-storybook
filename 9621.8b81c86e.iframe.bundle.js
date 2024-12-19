"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[9621],{"./src/components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var react=__webpack_require__("../../node_modules/react/index.js");const spaceMap=type=>({none:`${type}-none`,"2xs":`${type}-2xs`,xs:`${type}-xs`,sm:`${type}-sm`,md:`${type}-md`,lg:`${type}-lg`,xl:`${type}-xl`,"2xl":`${type}-2xl`}),valueMap={display:{none:"hidden",flex:"flex",block:"block",inline:"inline"},flexDirection:{row:"flex-row",column:"flex-col"},flexWrap:{wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},justifyContent:{stretch:"justify-stretch",start:"justify-start",center:"justify-center",end:"justify-end",around:"justify-around",between:"justify-between"},alignItems:{stretch:"items-stretch",start:"items-start",center:"items-center",end:"items-end"},borderRadius:{none:"rounded-none","2xs":"rounded-2xs",xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl"},border:{none:"border-none",base:"border-base",error:"border-error",warning:"border-warning",selected:"border-selected"},padding:spaceMap("p"),paddingX:spaceMap("px"),paddingY:spaceMap("py"),paddingLeft:spaceMap("pl"),paddingRight:spaceMap("pr"),paddingTop:spaceMap("pt"),paddingBottom:spaceMap("pb"),margin:spaceMap("m"),marginX:spaceMap("mx"),marginY:spaceMap("my"),marginLeft:spaceMap("ml"),marginRight:spaceMap("mr"),marginTop:spaceMap("mt"),marginBottom:spaceMap("mb"),gap:spaceMap("gap")},getClassNames=props=>{const classNames=[];return Object.entries(props).forEach((([propName,propValue])=>{classNames.push(...((propName,propValue)=>{const classNames=[];if(!valueMap.hasOwnProperty(propName))return classNames;if("string"==typeof propValue){const value=valueMap[propName]?.[propValue]||propValue;classNames.push(`cu-${value}`)}else"object"==typeof propValue&&Object.entries(propValue).forEach((([breakpoint,value])=>{const mappedValue=valueMap[propName]?.[value]||value;"xs"===breakpoint?classNames.push(`cu-${mappedValue}`):classNames.push(`cu-${breakpoint}-${mappedValue}`)}));return classNames})(propName,propValue))})),classNames.filter(Boolean).join(" ")},Box=(0,react.forwardRef)(((props,ref)=>{const{as="div",className,style,children,...restProps}=props,classNames=["canon-box",getClassNames(restProps),className].filter(Boolean).join(" ");return(0,react.createElement)(as,{ref,className:classNames,style,children})}));Box.__docgenInfo={description:"@public",methods:[],displayName:"Box",props:{alignItems:{required:!1,tsType:{name:"union",raw:"AlignItems | Partial<Record<Breakpoint, AlignItems>>",elements:[{name:"union",raw:"'stretch' | 'start' | 'center' | 'end'",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'stretch' | 'start' | 'center' | 'end'",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]}],raw:"Record<Breakpoint, AlignItems>"}],raw:"Partial<Record<Breakpoint, AlignItems>>"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"Border | Partial<Record<Breakpoint, Border>>",elements:[{name:"union",raw:"'none' | 'base' | 'error' | 'warning' | 'selected'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'base'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'selected'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | 'base' | 'error' | 'warning' | 'selected'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'base'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'selected'"}]}],raw:"Record<Breakpoint, Border>"}],raw:"Partial<Record<Breakpoint, Border>>"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"BorderRadius | Partial<Record<Breakpoint, BorderRadius>>",elements:[{name:"union",raw:"| 'none'\n| '2xs'\n| 'xs'\n| 'sm'\n| 'md'\n| 'lg'\n| 'xl'\n| '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"| 'none'\n| '2xs'\n| 'xs'\n| 'sm'\n| 'md'\n| 'lg'\n| 'xl'\n| '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, BorderRadius>"}],raw:"Partial<Record<Breakpoint, BorderRadius>>"}]},description:""},display:{required:!1,tsType:{name:"union",raw:"Display | Partial<Record<Breakpoint, Display>>",elements:[{name:"union",raw:"'none' | 'flex' | 'block' | 'inline'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'flex'"},{name:"literal",value:"'block'"},{name:"literal",value:"'inline'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | 'flex' | 'block' | 'inline'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'flex'"},{name:"literal",value:"'block'"},{name:"literal",value:"'inline'"}]}],raw:"Record<Breakpoint, Display>"}],raw:"Partial<Record<Breakpoint, Display>>"}]},description:""},flexDirection:{required:!1,tsType:{name:"union",raw:"FlexDirection | Partial<Record<Breakpoint, FlexDirection>>",elements:[{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]}],raw:"Record<Breakpoint, FlexDirection>"}],raw:"Partial<Record<Breakpoint, FlexDirection>>"}]},description:""},flexWrap:{required:!1,tsType:{name:"union",raw:"FlexWrap | Partial<Record<Breakpoint, FlexWrap>>",elements:[{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}]}],raw:"Record<Breakpoint, FlexWrap>"}],raw:"Partial<Record<Breakpoint, FlexWrap>>"}]},description:""},gap:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:"JustifyContent | Partial<Record<Breakpoint, JustifyContent>>",elements:[{name:"union",raw:"| 'stretch'\n| 'start'\n| 'center'\n| 'end'\n| 'around'\n| 'between'",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'around'"},{name:"literal",value:"'between'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"| 'stretch'\n| 'start'\n| 'center'\n| 'end'\n| 'around'\n| 'between'",elements:[{name:"literal",value:"'stretch'"},{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'around'"},{name:"literal",value:"'between'"}]}],raw:"Record<Breakpoint, JustifyContent>"}],raw:"Partial<Record<Breakpoint, JustifyContent>>"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},padding:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'none' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}}}]);