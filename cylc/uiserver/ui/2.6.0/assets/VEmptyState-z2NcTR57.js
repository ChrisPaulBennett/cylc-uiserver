import{dr as V,ds as _,dt as T,du as b,dv as z,dw as E,dx as I,dy as P,dz as D,b$ as B,dA as A,dB as W,dC as j,k as a,I as F,dD as N,E as R,Y as m,dE as $,G as w}from"./index-CQRaJAEP.js";const G=V({actionText:String,bgColor:String,color:String,icon:_,image:String,justify:{type:String,default:"center"},headline:String,title:String,text:String,textWidth:{type:[Number,String],default:500},href:String,to:String,...T(),...b(),...z({size:void 0}),...E()},"VEmptyState"),M=I()({name:"VEmptyState",props:G(),emits:{"click:action":e=>!0},setup(e,u){let{emit:y,slots:t}=u;const{themeClasses:r}=P(e),{backgroundColorClasses:g,backgroundColorStyles:v}=D(B(e,"bgColor")),{dimensionStyles:h}=A(e),{displayClasses:k}=W();function s(n){y("click:action",n)}return j(()=>{var c,l,d;const n=!!(t.actions||e.actionText),f=!!(t.headline||e.headline),S=!!(t.title||e.title),x=!!(t.text||e.text),C=!!(t.media||e.image||e.icon),i=e.size||(e.image?200:96);return a("div",{class:["v-empty-state",{[`v-empty-state--${e.justify}`]:!0},r.value,g.value,k.value,e.class],style:[v.value,h.value,e.style]},[C&&a("div",{key:"media",class:"v-empty-state__media"},[t.media?a(m,{key:"media-defaults",defaults:{VImg:{src:e.image,height:i},VIcon:{size:i,icon:e.icon}}},{default:()=>[t.media()]}):a(F,null,[e.image?a(N,{key:"image",src:e.image,height:i},null):e.icon?a(R,{key:"icon",color:e.color,size:i,icon:e.icon},null):void 0])]),f&&a("div",{key:"headline",class:"v-empty-state__headline"},[((c=t.headline)==null?void 0:c.call(t))??e.headline]),S&&a("div",{key:"title",class:"v-empty-state__title"},[((l=t.title)==null?void 0:l.call(t))??e.title]),x&&a("div",{key:"text",class:"v-empty-state__text",style:{maxWidth:$(e.textWidth)}},[((d=t.text)==null?void 0:d.call(t))??e.text]),t.default&&a("div",{key:"content",class:"v-empty-state__content"},[t.default()]),n&&a("div",{key:"actions",class:"v-empty-state__actions"},[a(m,{defaults:{VBtn:{class:"v-empty-state__action-btn",color:e.color??"surface-variant",text:e.actionText}}},{default:()=>{var o;return[((o=t.actions)==null?void 0:o.call(t,{props:{onClick:s}}))??a(w,{onClick:s},null)]}})])])}),{}}});export{M as V};
