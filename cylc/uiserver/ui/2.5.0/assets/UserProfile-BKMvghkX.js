import{ds as T,dV as Z,dC as A,dL as O,m as e,bl as y,dW as G,dX as q,dY as K,dZ as W,d_ as z,d$ as X,y as Y,e0 as Q,e1 as x,e2 as R,K as V,e3 as ee,e4 as le,_ as te,cA as ae,e5 as se,dM as oe,cC as ne,x as re,a3 as ue,e6 as de,e7 as ie,a8 as ce,e8 as me,e9 as fe,l as w,w as t,V as h,C as pe,k as d,q as o,E as n,t as i,ea as Ve,$ as be,v as u,Z as j,F as P,I as $,p as C,G as D,D as c,r as g,bn as ge,ae as ye,eb as ve}from"./index-DSRpE5Rv.js";import{V as _e}from"./VAlert-DPLBpYWN.js";import{V as k}from"./VCheckbox-DP4ATyok.js";const E=2;function U(l=null){localStorage.fontSize=l,document.documentElement.style.fontSize=l}function Se(){U(`${F()-E}px`)}function we(){U(`${F()+E}px`)}function F(){const l=window.getComputedStyle(document.documentElement).fontSize;return parseFloat(l)}const Pe=T({...Z({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),$e=A()({name:"VRadio",props:Pe(),setup(l,s){let{slots:b}=s;return O(()=>e(G,y(l,{class:["v-radio",l.class],style:l.style,type:"radio"}),b)),{}}}),Ce=T({height:{type:[Number,String],default:"auto"},...q(),...K(W(),["multiple"]),trueIcon:{type:z,default:"$radioOn"},falseIcon:{type:z,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),ke=A()({name:"VRadioGroup",inheritAttrs:!1,props:Ce(),emits:{"update:modelValue":l=>!0},setup(l,s){let{attrs:b,slots:r}=s;const I=X(),m=Y(()=>l.id||`radio-group-${I}`),f=Q(l,"modelValue");return O(()=>{const[a,p]=x(b),L=R.filterProps(l),N=G.filterProps(l),v=r.label?r.label({label:l.label,props:{for:m.value}}):l.label;return e(R,y({class:["v-radio-group",l.class],style:l.style},a,L,{modelValue:f.value,"onUpdate:modelValue":_=>f.value=_,id:m.value}),{...r,default:_=>{let{id:S,messagesId:B,isDisabled:J,isReadonly:M}=_;return e(V,null,[v&&e(ee,{id:S.value},{default:()=>[v]}),e(le,y(N,{id:S.value,"aria-describedby":B.value,defaultsTarget:"VRadio",trueIcon:l.trueIcon,falseIcon:l.falseIcon,type:l.type,disabled:J.value,readonly:M.value,"aria-labelledby":v?S.value:void 0,multiple:!1},p,{modelValue:f.value,"onUpdate:modelValue":H=>f.value=H}),r)])}})}),{}}}),Ue={name:"UserProfile",components:{Job:ae},setup(){return{defaultView:se(),cyclePointsOrderDesc:oe(),jobTheme:ne(),reducedAnimation:re()}},computed:{...ue("user",["user"])},methods:{resetFontSize:U,decreaseFontSize:Se,increaseFontSize:we,getCurrentFontSize:F},allViews:de,vuetifyDefaults:{global:{hideDetails:!0}},jobStates:ie.enumValues.map(l=>l.name),jobThemes:["default","greyscale","colour_blind"],icons:{settings:ce,increase:me,decrease:fe}},Fe={class:"text-h5"},Ie={class:"text-body-1"},ze=n("p",{class:"text-h6"},"Preferences",-1),Re=n("span",null,"Font size",-1),he=n("span",null,"Colour Theme",-1),je={class:"c-job-state-table"},De=n("th",null,"State",-1),Te=n("td",null,null,-1),Ae=n("span",null,"Latest cycle point at top",-1),Oe=n("span",null,"Reduced animations",-1),Ge=n("span",null,"Default view",-1);function Ee(l,s,b,r,I,m){const f=pe("job");return d(),w(h,{fluid:"",class:"c-user-profile"},{default:t(()=>[e(u,{class:"wrap"},{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[e(_e,{icon:l.$options.icons.settings,prominent:"",color:"grey-lighten-3"},{default:t(()=>[n("h3",Fe,i(l.$t("UserProfile.tableHeader")),1),n("p",Ie,i(l.$t("UserProfile.tableSubHeader")),1)]),_:1},8,["icon"]),l.user!==null?(d(),w(Ve,{key:0},{default:t(()=>[e(be,{defaults:l.$options.vuetifyDefaults},{default:t(()=>[e(h,{"py-0":""},{default:t(()=>[e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[n("span",null,i(l.$t("UserProfile.username")),1)]),_:1}),e(o,{cols:"9"},{default:t(()=>[e(j,{"model-value":l.user.username,disabled:"",id:"profile-username","aria-disabled":"true",class:"text-body-1"},null,8,["model-value"])]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[n("span",null,i(l.$t("UserProfile.administrator")),1)]),_:1}),e(o,{cols:"9"},{default:t(()=>[e(k,{modelValue:l.user.admin,"onUpdate:modelValue":s[0]||(s[0]=a=>l.user.admin=a),disabled:"",id:"profile-admin","aria-disabled":"true",class:"text-body-1"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[n("span",null,i(l.$t("UserProfile.groups")),1)]),_:1}),e(o,{cols:"9"},{default:t(()=>[e(P,{items:l.user.groups,modelValue:l.user.groups,"onUpdate:modelValue":s[1]||(s[1]=a=>l.user.groups=a),"menu-props":{attach:!0},multiple:"",disabled:"",id:"profile-groups","aria-disabled":"true",class:"text-body-1"},null,8,["items","modelValue"])]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[n("span",null,i(l.$t("UserProfile.created")),1)]),_:1}),e(o,{cols:"9"},{default:t(()=>[e(j,{"model-value":l.user.created,disabled:"",id:"profile-created","aria-disabled":"true",class:"text-body-1"},null,8,["model-value"])]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[n("span",null,i(l.$t("UserProfile.permissions")),1)]),_:1}),e(o,{cols:"9"},{default:t(()=>[e(P,{items:l.user.permissions,modelValue:l.user.permissions,"onUpdate:modelValue":s[2]||(s[2]=a=>l.user.permissions=a),"menu-props":{attach:!0},multiple:"",disabled:"",id:"profile-permissions","aria-disabled":"true",class:"text-body-1"},null,8,["items","modelValue"])]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"mt-4"},{default:t(()=>[e(o,{cols:"12"},{default:t(()=>[ze]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[Re]),_:1}),e(o,{cols:"9"},{default:t(()=>[e($,{variant:"outlined",id:"font-size-reset-button",class:"mr-2",onClick:s[3]||(s[3]=a=>m.resetFontSize())},{default:t(()=>[C(" Reset ")]),_:1}),e($,{variant:"outlined",id:"font-size-decrease-button",class:"mx-2",onClick:s[4]||(s[4]=a=>m.decreaseFontSize())},{default:t(()=>[e(D,null,{default:t(()=>[C(i(l.$options.icons.decrease),1)]),_:1})]),_:1}),e($,{variant:"outlined",id:"font-size-increase-button",class:"ml-2",onClick:s[5]||(s[5]=a=>m.increaseFontSize())},{default:t(()=>[e(D,null,{default:t(()=>[C(i(l.$options.icons.increase),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[he]),_:1}),e(ke,{modelValue:r.jobTheme,"onUpdate:modelValue":s[6]||(s[6]=a=>r.jobTheme=a)},{default:t(()=>[n("table",je,[n("tr",null,[De,(d(!0),c(V,null,g(l.$options.jobThemes,a=>(d(),c("th",{key:a},i(a.replace("_"," ")),1))),128))]),n("tr",null,[Te,(d(!0),c(V,null,g(l.$options.jobThemes,a=>(d(),c("td",{key:a},[e($e,{value:a,id:`input-job-theme-${a}`},null,8,["value","id"])]))),128))]),(d(!0),c(V,null,g(l.$options.jobStates,a=>(d(),c("tr",{key:a},[n("td",null,i(a),1),(d(!0),c(V,null,g(l.$options.jobThemes,p=>(d(),c("td",{key:p,class:ge([`job_theme--${p}`,"job_theme_override"])},[e(f,{status:a},null,8,["status"])],2))),128))]))),128))])]),_:1},8,["modelValue"]),e(o,{cols:"9"})]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[Ae]),_:1}),e(k,{modelValue:r.cyclePointsOrderDesc,"onUpdate:modelValue":s[7]||(s[7]=a=>r.cyclePointsOrderDesc=a),id:"input-cyclepoints-order"},null,8,["modelValue"])]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[Oe]),_:1}),e(k,{modelValue:r.reducedAnimation,"onUpdate:modelValue":s[8]||(s[8]=a=>r.reducedAnimation=a),"data-cy":"reduced-animation"},null,8,["modelValue"])]),_:1}),e(u,{"no-gutters":"",class:"align-center wrap"},{default:t(()=>[e(o,{cols:"3"},{default:t(()=>[Ge]),_:1}),e(P,{modelValue:r.defaultView,"onUpdate:modelValue":s[9]||(s[9]=a=>r.defaultView=a),items:Array.from(l.$options.allViews.keys()),"prepend-inner-icon":l.$options.allViews.get(r.defaultView).icon,"data-cy":"select-default-view","menu-props":{"data-cy":"select-default-view-menu"}},{item:t(({item:a,props:p})=>[e(ye,y(p,{"prepend-icon":l.$options.allViews.get(a.value).icon}),null,16,["prepend-icon"])]),_:1},8,["modelValue","items","prepend-inner-icon"])]),_:1})]),_:1})]),_:1},8,["defaults"])]),_:1})):(d(),w(ve,{key:1,indeterminate:!0}))]),_:1})]),_:1})]),_:1})}const Je=te(Ue,[["render",Ee]]);export{Je as default};
