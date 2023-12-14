"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[689],{3309:(n,e,o)=>{o.d(e,{II:()=>h,__:()=>m,jj:()=>Z,oH:()=>f,pC:()=>d});var t,i,s,a,r,c=o(168),l=o(6444),p=o(1607),x=o(2506);const d=(0,l.ZP)(x.l0)(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 240px;\n"]))),m=l.ZP.label(i||(i=(0,c.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  \n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),p.Z.fontSizes.m,p.Z.fontWeights.normal,p.Z.colors.secondary,p.Z.fontSizes.s),h=(0,l.ZP)(x.gN)(s||(s=(0,c.Z)(["\n  margin-bottom: 10px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),p.Z.fontSizes.m,p.Z.space[3],p.Z.space[3],p.Z.radii.normal,p.Z.colors.primary,p.Z.fonts.body,p.Z.colors.secondary,p.Z.fontSizes.s),f=(0,l.ZP)(x.gN)(a||(a=(0,c.Z)(["\n  margin-bottom: 10px;\n  height: 46px;\n  box-shadow: 0px 0px 20px -20px;\n  font-size: ",";\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid #ccc;\n  border-radius: ",";\n  background-color: ",";\n\n  ::placeholder {\n    font-family: ",";\n    color: ",";\n  }\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),p.Z.fontSizes.m,p.Z.space[3],p.Z.space[3],p.Z.radii.normal,p.Z.colors.primary,p.Z.fonts.body,p.Z.colors.secondary,p.Z.fontSizes.s),Z=l.ZP.p(r||(r=(0,c.Z)(["\n  display: inline;\n  position: absolute;\n  top: calc("," + 30px);\n  font-size: ",";\n  color: red;\n"])),p.Z.space[2],p.Z.fontSizes.m)},3689:(n,e,o)=>{o.r(e),o.d(e,{default:()=>K});var t=o(9434),i=o(2506),s=o(1456),a=o(4865),r=o(5985),c=o(8007),l=o(3309),p=o(184);const x=c.Ry().shape({firstName:c.Z_().min(2,"Too Short!").max(20,"Too Long!").required("Required"),lastName:c.Z_().min(2,"Too Short!").max(20,"Too Long!"),phone:c.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Number is not valid").required("Required")}),d=()=>{const n=(0,t.v9)((n=>n.contacts.items)),e=(0,t.I0)();return(0,p.jsx)(i.J9,{initialValues:{firstName:"",lastName:"",phone:"",email:""},validationSchema:x,onSubmit:(o,t)=>{let{firstName:i,lastName:s,phone:c,email:l}=o,{resetForm:p}=t;const x={name:((n,e)=>e?n.trim()+" "+e.trim():n.trim())(i,s),phone:c.trim(),email:l};(o=>{const t=o.name;if(n.find((n=>n.name===t)))return void alert("".concat(t," is already in contacts"));const i=o.phone,s=o.email,r=(0,a.v6)({name:t,phone:i,email:s});e(r)})(x),r.Am.info("Contact was add ".concat(x.name)),p()},children:(0,p.jsxs)(l.pC,{children:[(0,p.jsx)(l.__,{htmlFor:"firstName",children:"First Name"}),(0,p.jsx)(l.II,{id:"firstName",name:"firstName",placeholder:"Name"}),(0,p.jsx)(i.Bc,{name:"firstName",component:l.jj}),(0,p.jsx)(l.__,{htmlFor:"lastName",children:"Last Name"}),(0,p.jsx)(l.II,{id:"lastName",name:"lastName",placeholder:"Last name"}),(0,p.jsx)(i.Bc,{name:"lastName",component:l.jj}),(0,p.jsx)(l.__,{htmlFor:"phone",children:"Phone"}),(0,p.jsx)(l.II,{id:"phone",name:"phone",placeholder:"Phone",type:"phone"}),(0,p.jsx)(i.Bc,{name:"phone",component:l.jj}),(0,p.jsx)(l.__,{htmlFor:"email",children:"Email"}),(0,p.jsx)(l.II,{id:"email",name:"email",placeholder:"Email",type:"email"}),(0,p.jsx)(i.Bc,{name:"email",component:l.jj}),(0,p.jsx)(s.z,{type:"submit",disabled:!1,children:"Add contact"})]})})};var m=o(2791),h=o(6916);const f=n=>{let{contacts:e,filter:o}=n;if(!o)return e.items;const t=o.toLowerCase();return e.items.filter((n=>{let{name:e}=n;return e.toLowerCase().includes(t)}))},Z=(0,h.P1)([n=>n.contacts.items],(n=>n.reduce(((n,e)=>(e&&(n.contacts+=1),n)),{contacts:0})));var g,u,b,j,y,z,w=o(2134),v=o(5349),_=o(168),S=o(6444),C=o(1607);const k=S.ZP.ul(g||(g=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  border-radius: 5px;\n"]))),N=S.ZP.li(u||(u=(0,_.Z)(["\n  display: flex;\n  /* flex-direction: column; */\n  align-items: center;\n  justify-content: space-between;\n  width: 260px;\n  padding: 8px;\n  margin-bottom: 8px;\n  border: 1px solid #eee;\n  border-radius: ",";\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(190, 190, 190),\n    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);\n  &:hover {\n    background-color: lightgray;\n    box-shadow: 0px 0px 20px -18px;\n  }\n"])),C.Z.radii.normal),P=S.ZP.div(b||(b=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),I=S.ZP.div(j||(j=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),F=S.ZP.p(y||(y=(0,_.Z)(["\n  text-align: left;\n  font-size: ",";\n  font-weight: ",";\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),C.Z.fontSizes.s,C.Z.fontWeights.regular,C.Z.fontSizes.m),L=S.ZP.p(z||(z=(0,_.Z)(["\n  text-align: right;\n  font-size: ",";\n  font-weight: ",";\n"])),C.Z.fontSizes.xs,C.Z.fontWeights.light);var B;const T=S.ZP.p(B||(B=(0,_.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  margin-bottom: 16px;\n  \n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),C.Z.fontSizes.m,C.Z.fontWeights.normal,C.Z.colors.secondary,C.Z.fontSizes.s),W=()=>{const{contacts:n}=(0,t.v9)(Z);return(0,p.jsx)("div",{children:(0,p.jsxs)(T,{children:["Total contacts: ",n]})})},A="CheckBoxFavorite_container__aRWbc",E=n=>{let{onChange:e,checked:o}=n;return(0,p.jsxs)("label",{className:A,children:[(0,p.jsx)("input",{checked:o,onChange:e,type:"checkbox"}),(0,p.jsx)("svg",{height:"24px",id:"Layer_1",version:"1.2",viewBox:"0 0 24 24",width:"24px",children:(0,p.jsx)("g",{children:(0,p.jsx)("g",{children:(0,p.jsx)("path",{d:"M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"})})})})]})},q=()=>{const n=(0,t.I0)();(0,m.useEffect)((()=>{n((0,a.CL)())}),[n]);const e=(0,t.v9)(f);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(k,{children:[(0,p.jsx)(W,{}),e.map((o=>{let{_id:t,name:i,phone:s,email:c,favorite:l}=o;return(0,p.jsxs)(N,{children:[(0,p.jsxs)(P,{children:[(0,p.jsx)(F,{children:i}),(0,p.jsx)(L,{children:s}),(0,p.jsx)(L,{children:c})]}),(0,p.jsxs)(I,{children:[(0,p.jsx)(E,{checked:l,onChange:()=>(o=>{const t=e.find((n=>n._id===o));n((0,a.JY)(t)),n((0,a.CL)())})(t)}),(0,p.jsx)(v.Z,{icon:w.VPh,iconSize:20,onClick:()=>(e=>{n((0,a.in)(e)),r.Am.warning("Contact was deleted "),n((0,a.CL)())})(t)})]})]},t)}))]})})};var R=o(1634);const V=n=>{let{filter:e}=n;return e};var D,H,J;const M=S.ZP.div(D||(D=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 240px;\n"]))),Y=S.ZP.label(H||(H=(0,_.Z)(["\n  font-size: ",";\n  font-weight: ",";\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),C.Z.fontSizes.s,C.Z.fontWeights.regular,C.Z.fontSizes.m),$=S.ZP.input(J||(J=(0,_.Z)(["\n  width: 240px;\n  padding: 10px;\n  padding-left: 30px;\n  font-size: ",";\n  border-radius: ",";\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 20px -20px;\n\n  :focus {\n    outline-color: #1976d2;\n  }\n\n  @media (min-width: 420px) {\n    font-size: ",";\n  }\n"])),C.Z.fontSizes.xs,C.Z.radii.normal,C.Z.fontSizes.s),G=()=>{const n=(0,t.v9)(V),e=(0,t.I0)();return(0,p.jsx)(M,{children:(0,p.jsxs)(Y,{children:["Find contacts by name",(0,p.jsx)($,{type:"text",placeholder:"Search name",value:n,onChange:n=>{const o=(0,R.T)(n.target.value);e(o)}})]})})},K=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{}),(0,p.jsx)(G,{}),(0,p.jsx)(q,{})]})},5349:(n,e,o)=>{o.d(e,{Z:()=>p});o(2791);var t,i=o(168),s=o(6444),a=o(1607);const r=s.ZP.button(t||(t=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    background: ",";\n    color: ",";\n    padding: 6px;\n    border-radius: ",";\n    border: 1px solid darkgray;\n    font-size: ",";\n    cursor: pointer;\n    &:hover {\n        background-color: #f05557;\n        box-shadow: 0px 0px 20px -18px;\n    }\n    &:active {\n    transform: scale(0.95);\n    }\n    @media (min-width: 420px) {\n       font-size: ",";\n      }\n"])),(n=>(n.primary,"lightgray")),(n=>n.primary?"{theme.colors.text}":"grey"),a.Z.radii.normal,a.Z.fontSizes.s,a.Z.fontSizes.m);var c=o(184);const l=n=>{let{icon:e=null,type:o,disabled:t,children:i,onClick:s,iconSize:a,primary:l}=n;return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r,{primary:l,type:o,disabled:t,onClick:s,children:[e&&(0,c.jsx)(e,{size:a}),i]})})};l.defaultProps={onClick:()=>null,children:null};const p=l},1456:(n,e,o)=>{o.d(e,{z:()=>r});var t=o(8182);const i="Button_btn__y0oeI",s="Button_isSelected__VSqTZ";var a=o(184);const r=n=>{let{selected:e=!1,type:o="button",children:r,...c}=n;return(0,a.jsx)("button",{className:(0,t.Z)(i,{[s]:e}),type:o,...c,children:r})}},1607:(n,e,o)=>{o.d(e,{Z:()=>i});const t="235deg 32% 13%",i={colors:{white:"#fff",text:"#000",background:"#90ADC6",primary:"#E9EAEC",secondary:"#333652",accent:"#FAD02C",muted:"#808080"},fonts:{body:"Rubik, sans-serif",heading:"system-ui, sans-serif",monospace:"Menlo, monospace"},fontSizes:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"24px",xxl:"32px"},fontWeights:{light:400,regular:500,bold:700},lineHeights:{body:1.5,heading:1.125},space:["0px","2px","4px","8px","16px","32px","64px","128px","256px"],borders:{none:"none",normal:"1px solid"},radii:{none:"0",normal:"5px",high:"16px",round:"50%"},sizes:{container:"1200px"},shadow:{low:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.47),\n    0.3px 1.2px 1.1px -2px hsl(").concat(t," / 0.35),\n    0.7px 3px 2.7px -4.1px hsl(").concat(t," / 0.23);"),medium:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.49),\n    0.4px 1.8px 1.6px -1.3px hsl(").concat(t," / 0.39),\n    1.3px 5.5px 5px -2.7px hsl(").concat(t," / 0.3),\n    3.5px 15px 13.7px -4.1px hsl(").concat(t," / 0.21);"),high:"0.2px 0.8px 0.7px hsl(".concat(t," / 0.45),\n    0.5px 2.2px 2px -0.6px hsl(").concat(t," / 0.41),\n    1px 4.4px 4px -1.2px hsl(").concat(t," / 0.37),\n    2px 8.5px 7.8px -1.7px hsl(").concat(t," / 0.32),\n    3.6px 15.8px 14.5px -2.3px hsl(").concat(t," / 0.28),\n    6.3px 27.4px 25.1px -2.9px hsl(").concat(t," / 0.24),\n    10.3px 44.6px 40.9px -3.5px hsl(").concat(t," / 0.19),\n    15.8px 68.4px 62.7px -4.1px hsl(").concat(t," / 0.15);")}}}}]);
//# sourceMappingURL=689.96145483.chunk.js.map