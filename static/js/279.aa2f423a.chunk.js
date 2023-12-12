"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[279],{3309:function(n,e,t){t.d(e,{II:function(){return f},__:function(){return u},jj:function(){return h},oH:function(){return m},pC:function(){return d}});var o,i,r,c,s,a=t(168),l=t(6444),x=t(1607),p=t(2506),d=(0,l.ZP)(p.l0)(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 240px;\n"]))),u=l.ZP.label(i||(i=(0,a.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  \n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),x.Z.fontSizes.m,x.Z.fontWeights.normal,x.Z.colors.secondary,x.Z.fontSizes.s),f=(0,l.ZP)(p.gN)(r||(r=(0,a.Z)(["\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),x.Z.fontSizes.m,x.Z.space[3],x.Z.space[3],x.Z.radii.normal,x.Z.colors.primary,x.Z.fonts.body,x.Z.colors.secondary,x.Z.fontSizes.s),m=(0,l.ZP)(p.gN)(c||(c=(0,a.Z)(["\n  margin-bottom: 10px;\n  height: 46px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),x.Z.fontSizes.m,x.Z.space[3],x.Z.space[3],x.Z.radii.normal,x.Z.colors.primary,x.Z.fonts.body,x.Z.colors.secondary,x.Z.fontSizes.s),h=l.ZP.p(s||(s=(0,a.Z)(["\n  display: inline;\n  position: absolute;\n  top: calc("," + 30px);\n  font-size: ",";\n  color: red;\n"])),x.Z.space[2],x.Z.fontSizes.m)},7279:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var o,i,r,c,s,a,l,x,p=t(9434),d=t(6916),u=Object.freeze({all:"all",active:"active",completed:"completed"}),f=function(n){return n.tasks.items},m=function(n){return n.tasks.isLoading},h=function(n){return n.tasks.error},Z=(0,d.P1)([f,function(n){return n.tasks.items}],(function(n,e){switch(e){case u.active:return n.filter((function(n){return!n.done}));case u.completed:return n.filter((function(n){return n.done}));default:return n}})),g=(0,d.P1)([f],(function(n){return n.reduce((function(n,e){return e.done?n.completed+=1:n.active+=1,n}),{active:0,completed:0})})),b=t(168),y=t(6444),j=t(1607),v=y.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 24px;\n"]))),z=y.ZP.p(i||(i=(0,b.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  margin-bottom: 12px;\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),j.Z.fontSizes.m,j.Z.fontWeights.normal,j.Z.colors.secondary,j.Z.fontSizes.s),w=t(184),k=function(){var n=(0,p.v9)(g),e=n.active,t=n.completed;return(0,w.jsxs)(v,{children:[(0,w.jsxs)(z,{children:["Active: ",e]}),(0,w.jsxs)(z,{children:["Completed: ",t]})]})},_=t(1456),S=t(4197),P=t(5985),C=t(2506),T=t(6727),I=t(3309),A=T.Ry().shape({title:T.Z_().min(2,"Too Short!").max(30,"Too Long!").required("Required"),text:T.Z_().min(2,"Too Short!").max(200,"Too Long!")}),F=function(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.contacts.items})),t=function(t){var o=t.title;if(e.find((function(n){return n.title===o})))P.Am.warning("".concat(o," is already in contacts"));else{var i=t.text,r=(0,S.gI)({title:o,text:i});n(r)}};return(0,w.jsx)(C.J9,{initialValues:{title:"",text:""},validationSchema:A,onSubmit:function(n,e){var o=n.title,i=n.text,r=e.resetForm,c={title:o,text:i};t(c),P.Am.info("Task was add ".concat(c.title)),r()},children:(0,w.jsxs)(I.pC,{children:[(0,w.jsx)(I.__,{htmlFor:"title",children:"Title"}),(0,w.jsx)(I.II,{id:"title",name:"title",placeholder:"Title"}),(0,w.jsx)(C.Bc,{name:"title",component:I.jj}),(0,w.jsx)(I.__,{htmlFor:"text",children:"Text"}),(0,w.jsx)(I.oH,{id:"text",name:"text",placeholder:"Text"}),(0,w.jsx)(C.Bc,{name:"text",component:I.jj}),(0,w.jsx)(_.z,{type:"submit",disabled:!1,children:"Add tack"})]})})},E=y.ZP.ul(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  border-radius: 5px;\n"]))),q=y.ZP.li(c||(c=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 260px;\n  padding: 8px;\n  margin-bottom: 8px;\n  border: 1px solid #eee;\n  border-radius: ",";\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: lightgray;\n    box-shadow: 0px 0px 20px -18px;\n  }\n"])),j.Z.radii.normal),B=y.ZP.p(s||(s=(0,b.Z)(["\n  text-align: left;\n  font-size: ",";\n  font-weight: ",";\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),j.Z.fontSizes.xs,j.Z.fontWeights.light,j.Z.fontSizes.m),R=t(5349),W=t(2134),H=y.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  gap: 12px;\n  padding: 8px 0;\n"]))),J=function(n){var e=n.task,t=(0,p.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(H,{children:[(0,w.jsx)("input",{type:"checkbox",checked:e.done,onChange:function(){return e.done,t((0,S.KE)(e)),void t((0,S.Jv)())}}),(0,w.jsxs)("div",{children:[(0,w.jsx)(B,{children:e.title}),(0,w.jsx)(B,{children:e.text})]})]}),(0,w.jsx)(R.Z,{icon:W.VPh,iconSize:20,onClick:function(){return t((0,S._5)(e._id))}})]})},L=function(){var n=(0,p.v9)(Z);return(0,w.jsx)(E,{children:n.map((function(n){return(0,w.jsx)(q,{children:(0,w.jsx)(J,{task:n})},n.id)}))})},N=t(2791),V=y.ZP.div(l||(l=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),D=y.ZP.section(x||(x=(0,b.Z)(["\n  display: grid;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),K=function(){var n=(0,p.I0)(),e=(0,p.v9)(m),t=(0,p.v9)(h);return(0,N.useEffect)((function(){n((0,S.Jv)())}),[n]),(0,w.jsxs)(V,{children:[(0,w.jsxs)(D,{children:[(0,w.jsx)(F,{}),e&&!t&&(0,w.jsx)("b",{children:"Request in progress..."})]}),(0,w.jsxs)(D,{children:[(0,w.jsx)(k,{}),(0,w.jsx)(L,{})]})]})}},5349:function(n,e,t){t.d(e,{Z:function(){return x}});t(2791);var o,i=t(168),r=t(6444),c=t(1607),s=r.ZP.button(o||(o=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    background: ",";\n    color: ",";\n    padding: 6px;\n    border-radius: ",";\n    border: 1px solid darkgray;\n    font-size: ",";\n    cursor: pointer;\n    &:hover {\n        background-color: #1976d2;\n        box-shadow: 0px 0px 20px -18px;\n    }\n    &:active {\n    transform: scale(0.95);\n    }\n    @media (min-width: 420px) {\n       font-size: ",";\n      }\n"])),(function(n){return n.primary,"lightgray"}),(function(n){return n.primary?"{theme.colors.text}":"grey"}),c.Z.radii.normal,c.Z.fontSizes.s,c.Z.fontSizes.m),a=t(184),l=function(n){var e=n.icon,t=void 0===e?null:e,o=n.type,i=n.disabled,r=n.children,c=n.onClick,l=n.iconSize,x=n.primary;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s,{primary:x,type:o,disabled:i,onClick:c,children:[t&&(0,a.jsx)(t,{size:l}),r]})})};l.defaultProps={onClick:function(){return null},children:null};var x=l},1456:function(n,e,t){t.d(e,{z:function(){return p}});var o=t(1413),i=t(4942),r=t(4925),c=t(8182),s="Button_btn__y0oeI",a="Button_isSelected__VSqTZ",l=t(184),x=["selected","type","children"],p=function(n){var e=n.selected,t=void 0!==e&&e,p=n.type,d=void 0===p?"button":p,u=n.children,f=(0,r.Z)(n,x);return(0,l.jsx)("button",(0,o.Z)((0,o.Z)({className:(0,c.Z)(s,(0,i.Z)({},a,t)),type:d},f),{},{children:u}))}},1607:function(n,e){var t="235deg 32% 13%",o={colors:{white:"#fff",text:"#000",background:"#90ADC6",primary:"#E9EAEC",secondary:"#333652",accent:"#FAD02C",muted:"#808080"},fonts:{body:"Rubik, sans-serif",heading:"system-ui, sans-serif",monospace:"Menlo, monospace"},fontSizes:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"24px",xxl:"32px"},fontWeights:{light:400,regular:500,bold:700},lineHeights:{body:1.5,heading:1.125},space:["0px","2px","4px","8px","16px","32px","64px","128px","256px"],borders:{none:"none",normal:"1px solid"},radii:{none:"0",normal:"5px",high:"16px",round:"50%"},sizes:{container:"1200px"},shadow:{low:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.47),\n    0.3px 1.2px 1.1px -2px hsl(").concat(t," / 0.35),\n    0.7px 3px 2.7px -4.1px hsl(").concat(t," / 0.23);"),medium:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.49),\n    0.4px 1.8px 1.6px -1.3px hsl(").concat(t," / 0.39),\n    1.3px 5.5px 5px -2.7px hsl(").concat(t," / 0.3),\n    3.5px 15px 13.7px -4.1px hsl(").concat(t," / 0.21);"),high:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.45),\n    0.5px 2.2px 2px -0.6px hsl(").concat(t," / 0.41),\n    1px 4.4px 4px -1.2px hsl(").concat(t," / 0.37),\n    2px 8.5px 7.8px -1.7px hsl(").concat(t," / 0.32),\n    3.6px 15.8px 14.5px -2.3px hsl(").concat(t," / 0.28),\n    6.3px 27.4px 25.1px -2.9px hsl(").concat(t," / 0.24),\n    10.3px 44.6px 40.9px -3.5px hsl(").concat(t," / 0.19),\n    15.8px 68.4px 62.7px -4.1px hsl(").concat(t," / 0.15);")}};e.Z=o}}]);
//# sourceMappingURL=279.aa2f423a.chunk.js.map