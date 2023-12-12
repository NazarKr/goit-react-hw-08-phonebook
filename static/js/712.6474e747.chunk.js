"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[712],{3309:function(n,e,t){t.d(e,{II:function(){return f},__:function(){return u},jj:function(){return m},oH:function(){return h},pC:function(){return d}});var o,i,r,c,s,a=t(168),x=t(6444),l=t(1607),p=t(2506),d=(0,x.ZP)(p.l0)(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 240px;\n"]))),u=x.ZP.label(i||(i=(0,a.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  \n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),l.Z.fontSizes.m,l.Z.fontWeights.normal,l.Z.colors.secondary,l.Z.fontSizes.s),f=(0,x.ZP)(p.gN)(r||(r=(0,a.Z)(["\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),l.Z.fontSizes.m,l.Z.space[3],l.Z.space[3],l.Z.radii.normal,l.Z.colors.primary,l.Z.fonts.body,l.Z.colors.secondary,l.Z.fontSizes.s),h=(0,x.ZP)(p.gN)(c||(c=(0,a.Z)(["\n  margin-bottom: 10px;\n  height: 46px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),l.Z.fontSizes.m,l.Z.space[3],l.Z.space[3],l.Z.radii.normal,l.Z.colors.primary,l.Z.fonts.body,l.Z.colors.secondary,l.Z.fontSizes.s),m=x.ZP.p(s||(s=(0,a.Z)(["\n  display: inline;\n  position: absolute;\n  top: calc("," + 30px);\n  font-size: ",";\n  color: red;\n"])),l.Z.space[2],l.Z.fontSizes.m)},5712:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var o,i,r,c,s,a,x,l,p,d=t(9434),u=t(6916),f=Object.freeze({all:"all",active:"active",completed:"completed"}),h=function(n){return n.tasks.items},m=function(n){return n.tasks.isLoading},Z=function(n){return n.tasks.error},g=(0,u.P1)([h,function(n){return n.tasks.items}],(function(n,e){switch(e){case f.active:return n.filter((function(n){return!n.done}));case f.completed:return n.filter((function(n){return n.done}));default:return n}})),b=(0,u.P1)([h],(function(n){return n.reduce((function(n,e){return e.done?n.completed+=1:n.active+=1,n}),{active:0,completed:0})})),j=t(168),k=t(6444),y=t(1607),v=k.ZP.div(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 24px;\n"]))),z=k.ZP.p(i||(i=(0,j.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  margin-bottom: 12px;\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),y.Z.fontSizes.m,y.Z.fontWeights.normal,y.Z.colors.secondary,y.Z.fontSizes.s),_=t(184),w=function(){var n=(0,d.v9)(b),e=n.active,t=n.completed;return(0,_.jsxs)(v,{children:[(0,_.jsxs)(z,{children:["Active: ",e]}),(0,_.jsxs)(z,{children:["Completed: ",t]})]})},S=t(1456),C=t(4197),P=t(5985),T=t(2506),A=t(6727),I=t(3309),F=A.Ry().shape({title:A.Z_().min(2,"Too Short!").max(30,"Too Long!").required("Required"),text:A.Z_().min(2,"Too Short!").max(200,"Too Long!")}),N=function(){var n=(0,d.I0)(),e=(0,d.v9)((function(n){return n.contacts.items})),t=function(t){var o=t.title;if(e.find((function(n){return n.title===o})))P.Am.warning("".concat(o," is already in contacts"));else{var i=t.text,r=(0,C.gI)({title:o,text:i});n(r)}};return(0,_.jsx)(T.J9,{initialValues:{title:"",text:""},validationSchema:F,onSubmit:function(n,e){var o=n.title,i=n.text,r=e.resetForm,c={title:o,text:i};t(c),P.Am.info("Task was add ".concat(c.title)),r()},children:(0,_.jsxs)(I.pC,{children:[(0,_.jsx)(I.__,{htmlFor:"title",children:"Title"}),(0,_.jsx)(I.II,{id:"title",name:"title",placeholder:"Title"}),(0,_.jsx)(T.Bc,{name:"title",component:I.jj}),(0,_.jsx)(I.__,{htmlFor:"text",children:"Text"}),(0,_.jsx)(I.oH,{id:"text",name:"text",placeholder:"Text"}),(0,_.jsx)(T.Bc,{name:"text",component:I.jj}),(0,_.jsx)(S.z,{type:"submit",disabled:!1,children:"Add tack"})]})})},E=t(5349),H=t(2134),V=k.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  gap: 12px;\n  padding: 8px 0;\n"]))),W=k.ZP.p(c||(c=(0,j.Z)(["\n  text-align: left;\n  font-size: ",";\n  font-weight: ",";\n  margin-bottom: 6px;\n  @media (min-width: 420px) {\n    font-size: ",";\n    \n  }\n"])),y.Z.fontSizes.s,y.Z.fontWeights.regular,y.Z.fontSizes.m),q=k.ZP.p(s||(s=(0,j.Z)(["\n  text-align: left;\n  font-size: ",";\n  font-weight: ",";\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),y.Z.fontSizes.xs,y.Z.fontWeights.light,y.Z.fontSizes.m),B={checkboxContainer:"checkbox_checkboxContainer__F9tcV",customCheckbox:"checkbox_customCheckbox__TbHQ7",checkmark:"checkbox_checkmark__C1Vab",checkAnim:"checkbox_checkAnim__rH8M0"},R=function(n){var e=n.task,t=(0,d.I0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(V,{children:[(0,_.jsxs)("label",{className:B.checkboxContainer,children:[(0,_.jsx)("input",{className:B.customCheckbox,checked:e.done,onChange:function(){return e.done,t((0,C.KE)(e)),void t((0,C.Jv)())},type:"checkbox"}),(0,_.jsx)("span",{className:B.checkmark})]}),(0,_.jsxs)("div",{children:[(0,_.jsx)(W,{children:e.title}),(0,_.jsx)(q,{children:e.text})]})]}),(0,_.jsx)(E.Z,{className:B.btn,onClick:function(){return t((0,C._5)(e._id))},children:(0,_.jsx)(H.VPh,{size:24})})]})},J=k.ZP.ul(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  border-radius: 5px;\n"]))),L=k.ZP.li(x||(x=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 260px;\n  padding: 8px;\n  margin-bottom: 8px;\n  border: 1px solid #eee;\n  border-radius: ",";\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: lightgray;\n    box-shadow: 0px 0px 20px -18px;\n  }\n"])),y.Z.radii.normal),D=function(){var n=(0,d.v9)(g);return(0,_.jsx)(J,{children:n.map((function(n){return(0,_.jsx)(L,{children:(0,_.jsx)(R,{task:n})},n.id)}))})},M=t(2791),K=k.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),O=k.ZP.section(p||(p=(0,j.Z)(["\n  display: grid;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),Q=function(){var n=(0,d.I0)(),e=(0,d.v9)(m),t=(0,d.v9)(Z);return(0,M.useEffect)((function(){n((0,C.Jv)())}),[n]),(0,_.jsxs)(K,{children:[(0,_.jsxs)(O,{children:[(0,_.jsx)(N,{}),e&&!t&&(0,_.jsx)("b",{children:"Request in progress..."})]}),(0,_.jsxs)(O,{children:[(0,_.jsx)(w,{}),(0,_.jsx)(D,{})]})]})}},5349:function(n,e,t){t.d(e,{Z:function(){return l}});t(2791);var o,i=t(168),r=t(6444),c=t(1607),s=r.ZP.button(o||(o=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    background: ",";\n    color: ",";\n    padding: 6px;\n    border-radius: ",";\n    border: 1px solid darkgray;\n    font-size: ",";\n    cursor: pointer;\n    &:hover {\n        background-color: #1976d2;\n        box-shadow: 0px 0px 20px -18px;\n    }\n    &:active {\n    transform: scale(0.95);\n    }\n    @media (min-width: 420px) {\n       font-size: ",";\n      }\n"])),(function(n){return n.primary,"lightgray"}),(function(n){return n.primary?"{theme.colors.text}":"grey"}),c.Z.radii.normal,c.Z.fontSizes.s,c.Z.fontSizes.m),a=t(184),x=function(n){var e=n.icon,t=void 0===e?null:e,o=n.type,i=n.disabled,r=n.children,c=n.onClick,x=n.iconSize,l=n.primary;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s,{primary:l,type:o,disabled:i,onClick:c,children:[t&&(0,a.jsx)(t,{size:x}),r]})})};x.defaultProps={onClick:function(){return null},children:null};var l=x},1456:function(n,e,t){t.d(e,{z:function(){return p}});var o=t(1413),i=t(4942),r=t(4925),c=t(8182),s="Button_btn__y0oeI",a="Button_isSelected__VSqTZ",x=t(184),l=["selected","type","children"],p=function(n){var e=n.selected,t=void 0!==e&&e,p=n.type,d=void 0===p?"button":p,u=n.children,f=(0,r.Z)(n,l);return(0,x.jsx)("button",(0,o.Z)((0,o.Z)({className:(0,c.Z)(s,(0,i.Z)({},a,t)),type:d},f),{},{children:u}))}},1607:function(n,e){var t="235deg 32% 13%",o={colors:{white:"#fff",text:"#000",background:"#90ADC6",primary:"#E9EAEC",secondary:"#333652",accent:"#FAD02C",muted:"#808080"},fonts:{body:"Rubik, sans-serif",heading:"system-ui, sans-serif",monospace:"Menlo, monospace"},fontSizes:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"24px",xxl:"32px"},fontWeights:{light:400,regular:500,bold:700},lineHeights:{body:1.5,heading:1.125},space:["0px","2px","4px","8px","16px","32px","64px","128px","256px"],borders:{none:"none",normal:"1px solid"},radii:{none:"0",normal:"5px",high:"16px",round:"50%"},sizes:{container:"1200px"},shadow:{low:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.47),\n    0.3px 1.2px 1.1px -2px hsl(").concat(t," / 0.35),\n    0.7px 3px 2.7px -4.1px hsl(").concat(t," / 0.23);"),medium:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.49),\n    0.4px 1.8px 1.6px -1.3px hsl(").concat(t," / 0.39),\n    1.3px 5.5px 5px -2.7px hsl(").concat(t," / 0.3),\n    3.5px 15px 13.7px -4.1px hsl(").concat(t," / 0.21);"),high:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.45),\n    0.5px 2.2px 2px -0.6px hsl(").concat(t," / 0.41),\n    1px 4.4px 4px -1.2px hsl(").concat(t," / 0.37),\n    2px 8.5px 7.8px -1.7px hsl(").concat(t," / 0.32),\n    3.6px 15.8px 14.5px -2.3px hsl(").concat(t," / 0.28),\n    6.3px 27.4px 25.1px -2.9px hsl(").concat(t," / 0.24),\n    10.3px 44.6px 40.9px -3.5px hsl(").concat(t," / 0.19),\n    15.8px 68.4px 62.7px -4.1px hsl(").concat(t," / 0.15);")}};e.Z=o}}]);
//# sourceMappingURL=712.6474e747.chunk.js.map