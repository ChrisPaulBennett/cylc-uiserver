import{C as g}from"./codemirror.es-DMUuxErw.js";import{E as L,L as C,R as M,_ as x,G as V,O as u}from"./SchemaReference.es-Je_w_EN8.js";import"./info-addon.es-Bdmnq283.js";import"./codemirror.es2-D1PI0zxW.js";import"./forEachState.es-CB2-vmvs.js";import{J as f,K as v}from"./GraphiQL-B9aJM6eK.js";import"./index-DSRpE5Rv.js";var F=Object.defineProperty,d=(r,e)=>F(r,"name",{value:e,configurable:!0});g.registerHelper("info","graphql",(r,e)=>{if(!e.schema||!r.state)return;const{kind:i,step:t}=r.state,n=L(e.schema,r.state);if(i==="Field"&&t===0&&n.fieldDef||i==="AliasedField"&&t===2&&n.fieldDef||i==="ObjectField"&&t===0&&n.fieldDef){const c=document.createElement("div");c.className="CodeMirror-info-header",D(c,n,e);const o=document.createElement("div");return o.append(c),p(o,e,n.fieldDef),o}if(i==="Directive"&&t===1&&n.directiveDef){const c=document.createElement("div");c.className="CodeMirror-info-header",y(c,n,e);const o=document.createElement("div");return o.append(c),p(o,e,n.directiveDef),o}if(i==="Argument"&&t===0&&n.argDef){const c=document.createElement("div");c.className="CodeMirror-info-header",N(c,n,e);const o=document.createElement("div");return o.append(c),p(o,e,n.argDef),o}if(i==="EnumValue"&&n.enumValue&&n.enumValue.description){const c=document.createElement("div");c.className="CodeMirror-info-header",T(c,n,e);const o=document.createElement("div");return o.append(c),p(o,e,n.enumValue),o}if(i==="NamedType"&&n.type&&n.type.description){const c=document.createElement("div");c.className="CodeMirror-info-header",m(c,n,e,n.type);const o=document.createElement("div");return o.append(c),p(o,e,n.type),o}});function D(r,e,i){E(r,e,i),l(r,e,i,e.type)}d(D,"renderField");function E(r,e,i){var t;const n=((t=e.fieldDef)===null||t===void 0?void 0:t.name)||"";a(r,n,"field-name",i,C(e))}d(E,"renderQualifiedField");function y(r,e,i){var t;const n="@"+(((t=e.directiveDef)===null||t===void 0?void 0:t.name)||"");a(r,n,"directive-name",i,M(e))}d(y,"renderDirective");function N(r,e,i){var t;const n=((t=e.argDef)===null||t===void 0?void 0:t.name)||"";a(r,n,"arg-name",i,x(e)),l(r,e,i,e.inputType)}d(N,"renderArg");function T(r,e,i){var t;const n=((t=e.enumValue)===null||t===void 0?void 0:t.name)||"";m(r,e,i,e.inputType),a(r,"."),a(r,n,"enum-value",i,V(e))}d(T,"renderEnumValue");function l(r,e,i,t){const n=document.createElement("span");n.className="type-name-pill",t instanceof f?(m(n,e,i,t.ofType),a(n,"!")):t instanceof v?(a(n,"["),m(n,e,i,t.ofType),a(n,"]")):a(n,(t==null?void 0:t.name)||"","type-name",i,u(e,t)),r.append(n)}d(l,"renderTypeAnnotation");function m(r,e,i,t){t instanceof f?(m(r,e,i,t.ofType),a(r,"!")):t instanceof v?(a(r,"["),m(r,e,i,t.ofType),a(r,"]")):a(r,(t==null?void 0:t.name)||"","type-name",i,u(e,t))}d(m,"renderType");function p(r,e,i){const{description:t}=i;if(t){const n=document.createElement("div");n.className="info-description",e.renderDescription?n.innerHTML=e.renderDescription(t):n.append(document.createTextNode(t)),r.append(n)}h(r,e,i)}d(p,"renderDescription");function h(r,e,i){const t=i.deprecationReason;if(t){const n=document.createElement("div");n.className="info-deprecation",r.append(n);const c=document.createElement("span");c.className="info-deprecation-label",c.append(document.createTextNode("Deprecated")),n.append(c);const o=document.createElement("div");o.className="info-deprecation-reason",e.renderDescription?o.innerHTML=e.renderDescription(t):o.append(document.createTextNode(t)),n.append(o)}}d(h,"renderDeprecation");function a(r,e,i="",t={onClick:null},n=null){if(i){const{onClick:c}=t;let o;c?(o=document.createElement("a"),o.href="javascript:void 0",o.addEventListener("click",s=>{s.preventDefault(),c(n,s)})):o=document.createElement("span"),o.className=i,o.append(document.createTextNode(e)),r.append(o)}else r.append(document.createTextNode(e))}d(a,"text");