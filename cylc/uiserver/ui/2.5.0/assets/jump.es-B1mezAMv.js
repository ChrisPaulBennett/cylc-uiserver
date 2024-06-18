import{C as u}from"./codemirror.es-DMUuxErw.js";import{E as g,L as M,R as k,_ as v,G as y,O}from"./SchemaReference.es-Je_w_EN8.js";import"./codemirror.es2-D1PI0zxW.js";import"./forEachState.es-CB2-vmvs.js";import"./GraphiQL-B9aJM6eK.js";import"./index-DSRpE5Rv.js";var D=Object.defineProperty,s=(t,n)=>D(t,"name",{value:n,configurable:!0});u.defineOption("jump",!1,(t,n,i)=>{if(i&&i!==u.Init){const o=t.state.jump.onMouseOver;u.off(t.getWrapperElement(),"mouseover",o);const r=t.state.jump.onMouseOut;u.off(t.getWrapperElement(),"mouseout",r),u.off(document,"keydown",t.state.jump.onKeyDown),delete t.state.jump}if(n){const o=t.state.jump={options:n,onMouseOver:c.bind(null,t),onMouseOut:d.bind(null,t),onKeyDown:f.bind(null,t)};u.on(t.getWrapperElement(),"mouseover",o.onMouseOver),u.on(t.getWrapperElement(),"mouseout",o.onMouseOut),u.on(document,"keydown",o.onKeyDown)}});function c(t,n){const i=n.target||n.srcElement;if(!(i instanceof HTMLElement)||(i==null?void 0:i.nodeName)!=="SPAN")return;const o=i.getBoundingClientRect(),r={left:(o.left+o.right)/2,top:(o.top+o.bottom)/2};t.state.jump.cursor=r,t.state.jump.isHoldingModifier&&p(t)}s(c,"onMouseOver");function d(t){if(!t.state.jump.isHoldingModifier&&t.state.jump.cursor){t.state.jump.cursor=null;return}t.state.jump.isHoldingModifier&&t.state.jump.marker&&l(t)}s(d,"onMouseOut");function f(t,n){if(t.state.jump.isHoldingModifier||!j(n.key))return;t.state.jump.isHoldingModifier=!0,t.state.jump.cursor&&p(t);const i=s(e=>{e.code===n.code&&(t.state.jump.isHoldingModifier=!1,t.state.jump.marker&&l(t),u.off(document,"keyup",i),u.off(document,"click",o),t.off("mousedown",r))},"onKeyUp"),o=s(e=>{const{destination:a,options:m}=t.state.jump;a&&m.onClick(a,e)},"onClick"),r=s((e,a)=>{t.state.jump.destination&&(a.codemirrorIgnore=!0)},"onMouseDown");u.on(document,"keyup",i),u.on(document,"click",o),t.on("mousedown",r)}s(f,"onKeyDown");const w=typeof navigator<"u"&&navigator&&navigator.appVersion.includes("Mac");function j(t){return t===(w?"Meta":"Control")}s(j,"isJumpModifier");function p(t){if(t.state.jump.marker)return;const{cursor:n,options:i}=t.state.jump,o=t.coordsChar(n),r=t.getTokenAt(o,!0),e=i.getDestination||t.getHelper(o,"jump");if(e){const a=e(r,i,t);if(a){const m=t.markText({line:o.line,ch:r.start},{line:o.line,ch:r.end},{className:"CodeMirror-jump-token"});t.state.jump.marker=m,t.state.jump.destination=a}}}s(p,"enableJumpMode");function l(t){const{marker:n}=t.state.jump;t.state.jump.marker=null,t.state.jump.destination=null,n.clear()}s(l,"disableJumpMode");u.registerHelper("jump","graphql",(t,n)=>{if(!n.schema||!n.onClick||!t.state)return;const{state:i}=t,{kind:o,step:r}=i,e=g(n.schema,i);if(o==="Field"&&r===0&&e.fieldDef||o==="AliasedField"&&r===2&&e.fieldDef)return M(e);if(o==="Directive"&&r===1&&e.directiveDef)return k(e);if(o==="Argument"&&r===0&&e.argDef)return v(e);if(o==="EnumValue"&&e.enumValue)return y(e);if(o==="NamedType"&&e.type)return O(e)});
