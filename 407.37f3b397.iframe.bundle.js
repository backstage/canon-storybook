"use strict";(self.webpackChunk_backstage_canon=self.webpackChunk_backstage_canon||[]).push([[407],{"./src/components/Stack/Stack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Stack});var react=__webpack_require__("../../node_modules/react/index.js"),injectStylesIntoStyleTag=(__webpack_require__('src/layout/sprinkles.css.ts.vanilla.css!=!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/layout/sprinkles.css.ts.vanilla.css","source":"#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"}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js'),__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),webpack_plugin_extracted=__webpack_require__('../../node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/Stack/sprinkles.css.ts.vanilla.css","source":"#H4sIAAAAAAAAA63SzwqCQBDH8btPMcc6GOvf1C69SWzuqFu6yLpQEL17KBTqJjXUceDLDz4wm4OXMtWeGYObA8BrWSpXGmy6DDqj0eTVzrk7m2cW21lR49XtDNdmUuZ2maMyqCeVXNhDJfpu36CQHLpcIyrgSsCqkcq9SGGqDOKQtdf1sPAa9IZzSQJwH8fbd/HYM+vFu/6pmrWnxe3B1teffNs4sXw+xZcQfUjwnX/3ecwPLWBAAaZEYEEA1n8A+on9oSEFyInAkgBs/gCMgtgCRhTgkQisCED1BfABrTYuggEFAAA="}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js'),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(webpack_plugin_extracted.A,options);webpack_plugin_extracted.A&&webpack_plugin_extracted.A.locals&&webpack_plugin_extracted.A.locals;var x,stackSprinkles=(0,__webpack_require__("../../node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js").U)(((x={conditions:{defaultCondition:"xs",conditionNames:["xs","sm","md","lg","xl","2xl"],responsiveArray:["xs","sm","md","lg","xl","2xl"]},styles:{padding:{mappings:["paddingTop","paddingBottom","paddingLeft","paddingRight"]},paddingX:{mappings:["paddingLeft","paddingRight"]},paddingY:{mappings:["paddingTop","paddingBottom"]},margin:{mappings:["marginTop","marginBottom","marginLeft","marginRight"]},marginX:{mappings:["marginLeft","marginRight"]},marginY:{mappings:["marginTop","marginBottom"]},paddingTop:{values:{none:{conditions:{xs:"jv764q0",sm:"jv764q1",md:"jv764q2",lg:"jv764q3",xl:"jv764q4","2xl":"jv764q5"},defaultClass:"jv764q0"},"2xs":{conditions:{xs:"jv764q6",sm:"jv764q7",md:"jv764q8",lg:"jv764q9",xl:"jv764qa","2xl":"jv764qb"},defaultClass:"jv764q6"},xs:{conditions:{xs:"jv764qc",sm:"jv764qd",md:"jv764qe",lg:"jv764qf",xl:"jv764qg","2xl":"jv764qh"},defaultClass:"jv764qc"},sm:{conditions:{xs:"jv764qi",sm:"jv764qj",md:"jv764qk",lg:"jv764ql",xl:"jv764qm","2xl":"jv764qn"},defaultClass:"jv764qi"},md:{conditions:{xs:"jv764qo",sm:"jv764qp",md:"jv764qq",lg:"jv764qr",xl:"jv764qs","2xl":"jv764qt"},defaultClass:"jv764qo"},lg:{conditions:{xs:"jv764qu",sm:"jv764qv",md:"jv764qw",lg:"jv764qx",xl:"jv764qy","2xl":"jv764qz"},defaultClass:"jv764qu"},xl:{conditions:{xs:"jv764q10",sm:"jv764q11",md:"jv764q12",lg:"jv764q13",xl:"jv764q14","2xl":"jv764q15"},defaultClass:"jv764q10"},"2xl":{conditions:{xs:"jv764q16",sm:"jv764q17",md:"jv764q18",lg:"jv764q19",xl:"jv764q1a","2xl":"jv764q1b"},defaultClass:"jv764q16"}},responsiveArray:void 0},paddingBottom:{values:{none:{conditions:{xs:"jv764q1c",sm:"jv764q1d",md:"jv764q1e",lg:"jv764q1f",xl:"jv764q1g","2xl":"jv764q1h"},defaultClass:"jv764q1c"},"2xs":{conditions:{xs:"jv764q1i",sm:"jv764q1j",md:"jv764q1k",lg:"jv764q1l",xl:"jv764q1m","2xl":"jv764q1n"},defaultClass:"jv764q1i"},xs:{conditions:{xs:"jv764q1o",sm:"jv764q1p",md:"jv764q1q",lg:"jv764q1r",xl:"jv764q1s","2xl":"jv764q1t"},defaultClass:"jv764q1o"},sm:{conditions:{xs:"jv764q1u",sm:"jv764q1v",md:"jv764q1w",lg:"jv764q1x",xl:"jv764q1y","2xl":"jv764q1z"},defaultClass:"jv764q1u"},md:{conditions:{xs:"jv764q20",sm:"jv764q21",md:"jv764q22",lg:"jv764q23",xl:"jv764q24","2xl":"jv764q25"},defaultClass:"jv764q20"},lg:{conditions:{xs:"jv764q26",sm:"jv764q27",md:"jv764q28",lg:"jv764q29",xl:"jv764q2a","2xl":"jv764q2b"},defaultClass:"jv764q26"},xl:{conditions:{xs:"jv764q2c",sm:"jv764q2d",md:"jv764q2e",lg:"jv764q2f",xl:"jv764q2g","2xl":"jv764q2h"},defaultClass:"jv764q2c"},"2xl":{conditions:{xs:"jv764q2i",sm:"jv764q2j",md:"jv764q2k",lg:"jv764q2l",xl:"jv764q2m","2xl":"jv764q2n"},defaultClass:"jv764q2i"}},responsiveArray:void 0},paddingLeft:{values:{none:{conditions:{xs:"jv764q2o",sm:"jv764q2p",md:"jv764q2q",lg:"jv764q2r",xl:"jv764q2s","2xl":"jv764q2t"},defaultClass:"jv764q2o"},"2xs":{conditions:{xs:"jv764q2u",sm:"jv764q2v",md:"jv764q2w",lg:"jv764q2x",xl:"jv764q2y","2xl":"jv764q2z"},defaultClass:"jv764q2u"},xs:{conditions:{xs:"jv764q30",sm:"jv764q31",md:"jv764q32",lg:"jv764q33",xl:"jv764q34","2xl":"jv764q35"},defaultClass:"jv764q30"},sm:{conditions:{xs:"jv764q36",sm:"jv764q37",md:"jv764q38",lg:"jv764q39",xl:"jv764q3a","2xl":"jv764q3b"},defaultClass:"jv764q36"},md:{conditions:{xs:"jv764q3c",sm:"jv764q3d",md:"jv764q3e",lg:"jv764q3f",xl:"jv764q3g","2xl":"jv764q3h"},defaultClass:"jv764q3c"},lg:{conditions:{xs:"jv764q3i",sm:"jv764q3j",md:"jv764q3k",lg:"jv764q3l",xl:"jv764q3m","2xl":"jv764q3n"},defaultClass:"jv764q3i"},xl:{conditions:{xs:"jv764q3o",sm:"jv764q3p",md:"jv764q3q",lg:"jv764q3r",xl:"jv764q3s","2xl":"jv764q3t"},defaultClass:"jv764q3o"},"2xl":{conditions:{xs:"jv764q3u",sm:"jv764q3v",md:"jv764q3w",lg:"jv764q3x",xl:"jv764q3y","2xl":"jv764q3z"},defaultClass:"jv764q3u"}},responsiveArray:void 0},paddingRight:{values:{none:{conditions:{xs:"jv764q40",sm:"jv764q41",md:"jv764q42",lg:"jv764q43",xl:"jv764q44","2xl":"jv764q45"},defaultClass:"jv764q40"},"2xs":{conditions:{xs:"jv764q46",sm:"jv764q47",md:"jv764q48",lg:"jv764q49",xl:"jv764q4a","2xl":"jv764q4b"},defaultClass:"jv764q46"},xs:{conditions:{xs:"jv764q4c",sm:"jv764q4d",md:"jv764q4e",lg:"jv764q4f",xl:"jv764q4g","2xl":"jv764q4h"},defaultClass:"jv764q4c"},sm:{conditions:{xs:"jv764q4i",sm:"jv764q4j",md:"jv764q4k",lg:"jv764q4l",xl:"jv764q4m","2xl":"jv764q4n"},defaultClass:"jv764q4i"},md:{conditions:{xs:"jv764q4o",sm:"jv764q4p",md:"jv764q4q",lg:"jv764q4r",xl:"jv764q4s","2xl":"jv764q4t"},defaultClass:"jv764q4o"},lg:{conditions:{xs:"jv764q4u",sm:"jv764q4v",md:"jv764q4w",lg:"jv764q4x",xl:"jv764q4y","2xl":"jv764q4z"},defaultClass:"jv764q4u"},xl:{conditions:{xs:"jv764q50",sm:"jv764q51",md:"jv764q52",lg:"jv764q53",xl:"jv764q54","2xl":"jv764q55"},defaultClass:"jv764q50"},"2xl":{conditions:{xs:"jv764q56",sm:"jv764q57",md:"jv764q58",lg:"jv764q59",xl:"jv764q5a","2xl":"jv764q5b"},defaultClass:"jv764q56"}},responsiveArray:void 0},marginTop:{values:{none:{conditions:{xs:"jv764q5c",sm:"jv764q5d",md:"jv764q5e",lg:"jv764q5f",xl:"jv764q5g","2xl":"jv764q5h"},defaultClass:"jv764q5c"},"2xs":{conditions:{xs:"jv764q5i",sm:"jv764q5j",md:"jv764q5k",lg:"jv764q5l",xl:"jv764q5m","2xl":"jv764q5n"},defaultClass:"jv764q5i"},xs:{conditions:{xs:"jv764q5o",sm:"jv764q5p",md:"jv764q5q",lg:"jv764q5r",xl:"jv764q5s","2xl":"jv764q5t"},defaultClass:"jv764q5o"},sm:{conditions:{xs:"jv764q5u",sm:"jv764q5v",md:"jv764q5w",lg:"jv764q5x",xl:"jv764q5y","2xl":"jv764q5z"},defaultClass:"jv764q5u"},md:{conditions:{xs:"jv764q60",sm:"jv764q61",md:"jv764q62",lg:"jv764q63",xl:"jv764q64","2xl":"jv764q65"},defaultClass:"jv764q60"},lg:{conditions:{xs:"jv764q66",sm:"jv764q67",md:"jv764q68",lg:"jv764q69",xl:"jv764q6a","2xl":"jv764q6b"},defaultClass:"jv764q66"},xl:{conditions:{xs:"jv764q6c",sm:"jv764q6d",md:"jv764q6e",lg:"jv764q6f",xl:"jv764q6g","2xl":"jv764q6h"},defaultClass:"jv764q6c"},"2xl":{conditions:{xs:"jv764q6i",sm:"jv764q6j",md:"jv764q6k",lg:"jv764q6l",xl:"jv764q6m","2xl":"jv764q6n"},defaultClass:"jv764q6i"}},responsiveArray:void 0},marginBottom:{values:{none:{conditions:{xs:"jv764q6o",sm:"jv764q6p",md:"jv764q6q",lg:"jv764q6r",xl:"jv764q6s","2xl":"jv764q6t"},defaultClass:"jv764q6o"},"2xs":{conditions:{xs:"jv764q6u",sm:"jv764q6v",md:"jv764q6w",lg:"jv764q6x",xl:"jv764q6y","2xl":"jv764q6z"},defaultClass:"jv764q6u"},xs:{conditions:{xs:"jv764q70",sm:"jv764q71",md:"jv764q72",lg:"jv764q73",xl:"jv764q74","2xl":"jv764q75"},defaultClass:"jv764q70"},sm:{conditions:{xs:"jv764q76",sm:"jv764q77",md:"jv764q78",lg:"jv764q79",xl:"jv764q7a","2xl":"jv764q7b"},defaultClass:"jv764q76"},md:{conditions:{xs:"jv764q7c",sm:"jv764q7d",md:"jv764q7e",lg:"jv764q7f",xl:"jv764q7g","2xl":"jv764q7h"},defaultClass:"jv764q7c"},lg:{conditions:{xs:"jv764q7i",sm:"jv764q7j",md:"jv764q7k",lg:"jv764q7l",xl:"jv764q7m","2xl":"jv764q7n"},defaultClass:"jv764q7i"},xl:{conditions:{xs:"jv764q7o",sm:"jv764q7p",md:"jv764q7q",lg:"jv764q7r",xl:"jv764q7s","2xl":"jv764q7t"},defaultClass:"jv764q7o"},"2xl":{conditions:{xs:"jv764q7u",sm:"jv764q7v",md:"jv764q7w",lg:"jv764q7x",xl:"jv764q7y","2xl":"jv764q7z"},defaultClass:"jv764q7u"}},responsiveArray:void 0},marginLeft:{values:{none:{conditions:{xs:"jv764q80",sm:"jv764q81",md:"jv764q82",lg:"jv764q83",xl:"jv764q84","2xl":"jv764q85"},defaultClass:"jv764q80"},"2xs":{conditions:{xs:"jv764q86",sm:"jv764q87",md:"jv764q88",lg:"jv764q89",xl:"jv764q8a","2xl":"jv764q8b"},defaultClass:"jv764q86"},xs:{conditions:{xs:"jv764q8c",sm:"jv764q8d",md:"jv764q8e",lg:"jv764q8f",xl:"jv764q8g","2xl":"jv764q8h"},defaultClass:"jv764q8c"},sm:{conditions:{xs:"jv764q8i",sm:"jv764q8j",md:"jv764q8k",lg:"jv764q8l",xl:"jv764q8m","2xl":"jv764q8n"},defaultClass:"jv764q8i"},md:{conditions:{xs:"jv764q8o",sm:"jv764q8p",md:"jv764q8q",lg:"jv764q8r",xl:"jv764q8s","2xl":"jv764q8t"},defaultClass:"jv764q8o"},lg:{conditions:{xs:"jv764q8u",sm:"jv764q8v",md:"jv764q8w",lg:"jv764q8x",xl:"jv764q8y","2xl":"jv764q8z"},defaultClass:"jv764q8u"},xl:{conditions:{xs:"jv764q90",sm:"jv764q91",md:"jv764q92",lg:"jv764q93",xl:"jv764q94","2xl":"jv764q95"},defaultClass:"jv764q90"},"2xl":{conditions:{xs:"jv764q96",sm:"jv764q97",md:"jv764q98",lg:"jv764q99",xl:"jv764q9a","2xl":"jv764q9b"},defaultClass:"jv764q96"}},responsiveArray:void 0},marginRight:{values:{none:{conditions:{xs:"jv764q9c",sm:"jv764q9d",md:"jv764q9e",lg:"jv764q9f",xl:"jv764q9g","2xl":"jv764q9h"},defaultClass:"jv764q9c"},"2xs":{conditions:{xs:"jv764q9i",sm:"jv764q9j",md:"jv764q9k",lg:"jv764q9l",xl:"jv764q9m","2xl":"jv764q9n"},defaultClass:"jv764q9i"},xs:{conditions:{xs:"jv764q9o",sm:"jv764q9p",md:"jv764q9q",lg:"jv764q9r",xl:"jv764q9s","2xl":"jv764q9t"},defaultClass:"jv764q9o"},sm:{conditions:{xs:"jv764q9u",sm:"jv764q9v",md:"jv764q9w",lg:"jv764q9x",xl:"jv764q9y","2xl":"jv764q9z"},defaultClass:"jv764q9u"},md:{conditions:{xs:"jv764qa0",sm:"jv764qa1",md:"jv764qa2",lg:"jv764qa3",xl:"jv764qa4","2xl":"jv764qa5"},defaultClass:"jv764qa0"},lg:{conditions:{xs:"jv764qa6",sm:"jv764qa7",md:"jv764qa8",lg:"jv764qa9",xl:"jv764qaa","2xl":"jv764qab"},defaultClass:"jv764qa6"},xl:{conditions:{xs:"jv764qac",sm:"jv764qad",md:"jv764qae",lg:"jv764qaf",xl:"jv764qag","2xl":"jv764qah"},defaultClass:"jv764qac"},"2xl":{conditions:{xs:"jv764qai",sm:"jv764qaj",md:"jv764qak",lg:"jv764qal",xl:"jv764qam","2xl":"jv764qan"},defaultClass:"jv764qai"}},responsiveArray:void 0},gap:{values:{none:{conditions:{xs:"jv764qao",sm:"jv764qap",md:"jv764qaq",lg:"jv764qar",xl:"jv764qas","2xl":"jv764qat"},defaultClass:"jv764qao"},"2xs":{conditions:{xs:"jv764qau",sm:"jv764qav",md:"jv764qaw",lg:"jv764qax",xl:"jv764qay","2xl":"jv764qaz"},defaultClass:"jv764qau"},xs:{conditions:{xs:"jv764qb0",sm:"jv764qb1",md:"jv764qb2",lg:"jv764qb3",xl:"jv764qb4","2xl":"jv764qb5"},defaultClass:"jv764qb0"},sm:{conditions:{xs:"jv764qb6",sm:"jv764qb7",md:"jv764qb8",lg:"jv764qb9",xl:"jv764qba","2xl":"jv764qbb"},defaultClass:"jv764qb6"},md:{conditions:{xs:"jv764qbc",sm:"jv764qbd",md:"jv764qbe",lg:"jv764qbf",xl:"jv764qbg","2xl":"jv764qbh"},defaultClass:"jv764qbc"},lg:{conditions:{xs:"jv764qbi",sm:"jv764qbj",md:"jv764qbk",lg:"jv764qbl",xl:"jv764qbm","2xl":"jv764qbn"},defaultClass:"jv764qbi"},xl:{conditions:{xs:"jv764qbo",sm:"jv764qbp",md:"jv764qbq",lg:"jv764qbr",xl:"jv764qbs","2xl":"jv764qbt"},defaultClass:"jv764qbo"},"2xl":{conditions:{xs:"jv764qbu",sm:"jv764qbv",md:"jv764qbw",lg:"jv764qbx",xl:"jv764qby","2xl":"jv764qbz"},defaultClass:"jv764qbu"}},responsiveArray:void 0}}}).styles.paddingTop.responsiveArray=x.conditions.responsiveArray,x.styles.paddingBottom.responsiveArray=x.conditions.responsiveArray,x.styles.paddingLeft.responsiveArray=x.conditions.responsiveArray,x.styles.paddingRight.responsiveArray=x.conditions.responsiveArray,x.styles.marginTop.responsiveArray=x.conditions.responsiveArray,x.styles.marginBottom.responsiveArray=x.conditions.responsiveArray,x.styles.marginLeft.responsiveArray=x.conditions.responsiveArray,x.styles.marginRight.responsiveArray=x.conditions.responsiveArray,x.styles.gap.responsiveArray=x.conditions.responsiveArray,x),{conditions:{defaultCondition:["light","dark"],conditionNames:["light","dark"],responsiveArray:void 0},styles:{color:{values:{primary:{conditions:{light:"jv764qc0",dark:"jv764qc1"},defaultClass:"jv764qc0 jv764qc1"},secondary:{conditions:{light:"jv764qc2",dark:"jv764qc3"},defaultClass:"jv764qc2 jv764qc3"},error:{conditions:{light:"jv764qc4",dark:"jv764qc5"},defaultClass:"jv764qc4 jv764qc5"}}},background:{values:{background:{conditions:{light:"jv764qc6",dark:"jv764qc7"},defaultClass:"jv764qc6 jv764qc7"},elevation1:{conditions:{light:"jv764qc8",dark:"jv764qc9"},defaultClass:"jv764qc8 jv764qc9"},elevation2:{conditions:{light:"jv764qca",dark:"jv764qcb"},defaultClass:"jv764qca jv764qcb"},transparent:{conditions:{light:"jv764qcc",dark:"jv764qcd"},defaultClass:"jv764qcc jv764qcd"}}}}},{conditions:{defaultCondition:"xs",conditionNames:["xs","sm","md","lg","xl","2xl"],responsiveArray:void 0},styles:{alignItems:{values:{stretch:{conditions:{xs:"_190npk00",sm:"_190npk01",md:"_190npk02",lg:"_190npk03",xl:"_190npk04","2xl":"_190npk05"},defaultClass:"_190npk00"},"flex-start":{conditions:{xs:"_190npk06",sm:"_190npk07",md:"_190npk08",lg:"_190npk09",xl:"_190npk0a","2xl":"_190npk0b"},defaultClass:"_190npk06"},center:{conditions:{xs:"_190npk0c",sm:"_190npk0d",md:"_190npk0e",lg:"_190npk0f",xl:"_190npk0g","2xl":"_190npk0h"},defaultClass:"_190npk0c"},"flex-end":{conditions:{xs:"_190npk0i",sm:"_190npk0j",md:"_190npk0k",lg:"_190npk0l",xl:"_190npk0m","2xl":"_190npk0n"},defaultClass:"_190npk0i"}}}}});const Stack=(0,react.forwardRef)(((props,ref)=>{const{as="div",children,align="left",gap="xs",className,style,...restProps}=props,flexAlign=(align=>"left"===align?"stretch":"center"===align?"center":"right"===align?"flex-end":void 0)(align),classNames=["stack",stackSprinkles({...restProps,gap,alignItems:flexAlign}),className].filter(Boolean).join(" ");return(0,react.createElement)(as,{ref,className:classNames,style,children})}));Stack.__docgenInfo={description:"@public",methods:[],displayName:"Stack",props:{gap:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},padding:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},paddingY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},margin:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginLeft:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginRight:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginTop:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginBottom:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginX:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},marginY:{required:!1,tsType:{name:"union",raw:"Space | Partial<Record<Breakpoint, Space>>",elements:[{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"keyof typeof space",elements:[{name:"literal",value:"none"},{name:"literal",value:"'2xs'"},{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]}],raw:"Record<Breakpoint, Space>"}],raw:"Partial<Record<Breakpoint, Space>>"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"| 'primary'\n| 'secondary'\n| 'error'\n| Partial<Record<Theme, 'primary' | 'secondary' | 'error'>>",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof themes",elements:[{name:"literal",value:"light"},{name:"literal",value:"dark"}]},{name:"union",raw:"'primary' | 'secondary' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'error'"}]}],raw:"Record<Theme, 'primary' | 'secondary' | 'error'>"}],raw:"Partial<Record<Theme, 'primary' | 'secondary' | 'error'>>"}]},description:""},background:{required:!1,tsType:{name:"union",raw:"| 'background'\n| 'elevation1'\n| 'elevation2'\n| 'transparent'\n| Partial<\n    Record<Theme, 'background' | 'elevation1' | 'elevation2' | 'transparent'>\n  >",elements:[{name:"literal",value:"'background'"},{name:"literal",value:"'elevation1'"},{name:"literal",value:"'elevation2'"},{name:"literal",value:"'transparent'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof themes",elements:[{name:"literal",value:"light"},{name:"literal",value:"dark"}]},{name:"union",raw:"'background' | 'elevation1' | 'elevation2' | 'transparent'",elements:[{name:"literal",value:"'background'"},{name:"literal",value:"'elevation1'"},{name:"literal",value:"'elevation2'"},{name:"literal",value:"'transparent'"}]}],raw:"Record<Theme, 'background' | 'elevation1' | 'elevation2' | 'transparent'>"}],raw:"Partial<\n  Record<Theme, 'background' | 'elevation1' | 'elevation2' | 'transparent'>\n>"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},as:{required:!1,tsType:{name:"union",raw:"| 'div'\n| 'span'\n| 'p'\n| 'article'\n| 'section'\n| 'main'\n| 'nav'\n| 'aside'\n| 'ul'\n| 'ol'\n| 'li'\n| 'details'\n| 'summary'\n| 'dd'\n| 'dl'\n| 'dt'",elements:[{name:"literal",value:"'div'"},{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'article'"},{name:"literal",value:"'section'"},{name:"literal",value:"'main'"},{name:"literal",value:"'nav'"},{name:"literal",value:"'aside'"},{name:"literal",value:"'ul'"},{name:"literal",value:"'ol'"},{name:"literal",value:"'li'"},{name:"literal",value:"'details'"},{name:"literal",value:"'summary'"},{name:"literal",value:"'dd'"},{name:"literal",value:"'dl'"},{name:"literal",value:"'dt'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"| 'left'\n| 'center'\n| 'right'\n| Partial<Record<Breakpoint, 'left' | 'center' | 'right'>>",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"keyof typeof breakpoints",elements:[{name:"literal",value:"xs"},{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"},{name:"literal",value:"xl"},{name:"literal",value:"'2xl'"}]},{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]}],raw:"Record<Breakpoint, 'left' | 'center' | 'right'>"}],raw:"Partial<Record<Breakpoint, 'left' | 'center' | 'right'>>"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}}}}]);