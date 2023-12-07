"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[809],{8809:function(n,e,a){a.r(e),a.d(e,{default:function(){return h}});var t=a(9434),o=a(5822),r=a(1413),i=a(158),p={name:"",email:"",password:""},s=a(7791),x={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},l=a(608),c=a(184),d=function(n){var e=n.onSubmit,a=(0,i.Z)({initialState:p,onSubmit:e}),t=a.state,o=a.handleChange,d=a.handleSubmit,u=t.name,h=t.email,m=t.password;return(0,c.jsxs)("form",{onSubmit:d,children:[(0,c.jsx)(s.Z,(0,r.Z)({value:u,handleChange:o},x.name)),(0,c.jsx)(s.Z,(0,r.Z)({value:h,handleChange:o},x.email)),(0,c.jsx)(s.Z,(0,r.Z)({value:m,handleChange:o},x.password)),(0,c.jsx)(l.Z,{text:"Submit"})]})},u=a(7689),h=function(){var n=(0,t.I0)(),e=(0,u.s0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Register page"}),(0,c.jsx)(d,{onSubmit:function(a){n((0,o.z2)(a)),e("/after-registration")}})]})}},608:function(n,e,a){a.d(e,{Z:function(){return c}});a(2791);var t,o,r=a(168),i=a(6444),p=a(1607),s=i.ZP.button(t||(t=(0,r.Z)(["\n    display: flex;\n    align-items: center;\n    background-color: lightgray;\n    color: ",";\n    padding: 8px 20px;\n    border-radius: ",";\n    border: 1px solid darkgray;\n    font-size: ",";\n    cursor: pointer;\n    &:hover {\n        background-color: ",";\n        box-shadow: 0px 0px 20px -18px;\n    }\n    &:active {\n    transform: scale(0.95);\n    }\n    @media (min-width: 420px) {\n       font-size: ",";\n      }\n"])),p.Z.colors.text,p.Z.radii.normal,p.Z.fontSizes.s,p.Z.colors.background,p.Z.fontSizes.m),x=i.ZP.p(o||(o=(0,r.Z)(["\n  margin-left: ",";\n"])),(function(n){return n.Icon?p.Z.space[3]:p.Z.space[0]})),l=a(184),c=function(n){var e=n.icon,a=void 0===e?null:e,t=n.type,o=n.disabled,r=n.text,i=n.onClick,p=n.iconSize;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(s,{type:t,disabled:o,onClick:i,children:[a&&(0,l.jsx)(a,{size:p}),(0,l.jsx)(x,{Icon:a,children:r})]})})}},7791:function(n,e,a){a.d(e,{Z:function(){return m}});var t,o,r=a(1413),i=a(4925),p=a(2791),s=a(168),x=a(6444),l=a(1607),c=x.ZP.div(t||(t=(0,s.Z)(["\n  display: grid;\n  /* grid-template-columns: 120px 1fr; */\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),d=x.ZP.input(o||(o=(0,s.Z)(["\n  width: 240px;\n  padding: 10px;\n  padding-left: 30px;\n  font-size: ",";\n  border-radius: ",";\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 20px -20px;\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),l.Z.fontSizes.xs,l.Z.radii.normal,l.Z.fontSizes.s),u=a(184),h=["label","handleChange"],m=function(n){var e=n.label,a=n.handleChange,t=(0,i.Z)(n,h),o=(0,p.useMemo)((function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)(c,{children:[(0,u.jsx)("label",{htmlFor:o,children:e}),(0,u.jsx)(d,(0,r.Z)({id:o,onChange:a},t))]})}},158:function(n,e,a){var t=a(4942),o=a(1413),r=a(9439),i=a(2791);e.Z=function(n){var e=n.initialState,a=n.onSubmit,p=(0,i.useState)((0,o.Z)({},e)),s=(0,r.Z)(p,2),x=s[0],l=s[1],c=(0,i.useCallback)((function(n){var e=n.target,a=e.name,r=e.value;l((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,t.Z)({},a,r))}))}),[l]);return{state:x,setState:l,handleChange:c,handleSubmit:function(n){n.preventDefault(),a((0,o.Z)({},x)),l((0,o.Z)({},e))}}}},1607:function(n,e){var a="235deg 32% 13%",t={colors:{white:"#fff",text:"#000",background:"#90ADC6",primary:"#E9EAEC",secondary:"#333652",accent:"#FAD02C",muted:"#808080"},fonts:{body:"Rubik, sans-serif",heading:"system-ui, sans-serif",monospace:"Menlo, monospace"},fontSizes:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"24px",xxl:"32px"},fontWeights:{light:400,regular:500,bold:700},lineHeights:{body:1.5,heading:1.125},space:["0px","2px","4px","8px","16px","32px","64px","128px","256px"],borders:{none:"none",normal:"1px solid"},radii:{none:"0",normal:"5px",high:"16px",round:"50%"},sizes:{container:"1200px"},shadow:{low:"0.2px 0.8px 0.7px hsl(".concat(a," / 0.47),\n    0.3px 1.2px 1.1px -2px hsl(").concat(a," / 0.35),\n    0.7px 3px 2.7px -4.1px hsl(").concat(a," / 0.23);"),medium:"0.2px 0.8px 0.7px hsl(".concat(a," / 0.49),\n    0.4px 1.8px 1.6px -1.3px hsl(").concat(a," / 0.39),\n    1.3px 5.5px 5px -2.7px hsl(").concat(a," / 0.3),\n    3.5px 15px 13.7px -4.1px hsl(").concat(a," / 0.21);"),high:"0.2px 0.8px 0.7px hsl(".concat(a," / 0.45),\n    0.5px 2.2px 2px -0.6px hsl(").concat(a," / 0.41),\n    1px 4.4px 4px -1.2px hsl(").concat(a," / 0.37),\n    2px 8.5px 7.8px -1.7px hsl(").concat(a," / 0.32),\n    3.6px 15.8px 14.5px -2.3px hsl(").concat(a," / 0.28),\n    6.3px 27.4px 25.1px -2.9px hsl(").concat(a," / 0.24),\n    10.3px 44.6px 40.9px -3.5px hsl(").concat(a," / 0.19),\n    15.8px 68.4px 62.7px -4.1px hsl(").concat(a," / 0.15);")}};e.Z=t}}]);
//# sourceMappingURL=809.3b82b31c.chunk.js.map