import{C as s}from"./codemirror.es-DMUuxErw.js";import{I as o,W as e,X as l,Y as n,Z as r}from"./GraphiQL-B9aJM6eK.js";import{r as c}from"./mode-indent.es-DRhmi37H.js";import"./codemirror.es2-D1PI0zxW.js";import"./index-DSRpE5Rv.js";var b=Object.defineProperty,m=(a,t)=>b(a,"name",{value:t,configurable:!0});s.defineMode("graphql-variables",a=>{const t=o({eatWhitespace:u=>u.eatSpace(),lexRules:d,parseRules:V,editorConfig:{tabSize:a.tabSize}});return{config:a,startState:t.startState,token:t.token,indent:c,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const d={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},V={Document:[e("{"),l("Variable",n(e(","))),e("}")],Variable:[i("variable"),e(":"),"Value"],Value(a){switch(a.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(a.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(a.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[r("Number","number")],StringValue:[r("String","string")],BooleanValue:[r("Keyword","builtin")],NullValue:[r("Keyword","keyword")],ListValue:[e("["),l("Value",n(e(","))),e("]")],ObjectValue:[e("{"),l("ObjectField",n(e(","))),e("}")],ObjectField:[i("attribute"),e(":"),"Value"]};function i(a){return{style:a,match:t=>t.kind==="String",update(t,u){t.name=u.value.slice(1,-1)}}}m(i,"namedKey");