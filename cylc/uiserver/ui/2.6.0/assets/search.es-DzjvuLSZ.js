import{r as I,g as V}from"./codemirror.es2-CXusOVRv.js";import{r as L}from"./searchcursor.es2-Dq1sOYAn.js";import{a as z}from"./dialog.es-DctWZWWN.js";function K(O,P){for(var a=0;a<P.length;a++){const d=P[a];if(typeof d!="string"&&!Array.isArray(d)){for(const y in d)if(y!=="default"&&!(y in O)){const g=Object.getOwnPropertyDescriptor(d,y);g&&Object.defineProperty(O,y,g.get?g:{enumerable:!0,get:()=>d[y]})}}}return Object.freeze(Object.defineProperty(O,Symbol.toStringTag,{value:"Module"}))}var U={exports:{}};(function(O,P){(function(a){a(I(),L(),z)})(function(a){a.defineOption("search",{bottom:!1});function d(e,n){return typeof e=="string"?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),n?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos;var r=e.exec(t.string);if(r&&r.index==t.pos)return t.pos+=r[0].length||1,"searching";r?t.pos=r.index:t.skipToEnd()}}}function y(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function g(e){return e.state.search||(e.state.search=new y)}function m(e){return typeof e=="string"&&e==e.toLowerCase()}function S(e,n,t){return e.getSearchCursor(n,t,{caseFold:m(n),multiline:!0})}function Q(e,n,t,r,o){e.openDialog(n,r,{value:t,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){b(e)},onKeyDown:o,bottom:e.options.search.bottom})}function R(e,n,t,r,o){e.openDialog?e.openDialog(n,o,{value:r,selectValueOnOpen:!0,bottom:e.options.search.bottom}):o(prompt(t,r))}function $(e,n,t,r){e.openConfirm?e.openConfirm(n,r):confirm(t)&&r[0]()}function D(e){return e.replace(/\\([nrt\\])/g,function(n,t){return t=="n"?`
`:t=="r"?"\r":t=="t"?"	":t=="\\"?"\\":n})}function C(e){var n=e.match(/^\/(.*)\/([a-z]*)$/);if(n)try{e=new RegExp(n[1],n[2].indexOf("i")==-1?"":"i")}catch{}else e=D(e);return(typeof e=="string"?e=="":e.test(""))&&(e=/x^/),e}function N(e,n,t){n.queryText=t,n.query=C(t),e.removeOverlay(n.overlay,m(n.query)),n.overlay=d(n.query,m(n.query)),e.addOverlay(n.overlay),e.showMatchesOnScrollbar&&(n.annotate&&(n.annotate.clear(),n.annotate=null),n.annotate=e.showMatchesOnScrollbar(n.query,m(n.query)))}function x(e,n,t,r){var o=g(e);if(o.query)return w(e,n);var i=e.getSelection()||o.lastQuery;if(i instanceof RegExp&&i.source=="x^"&&(i=null),t&&e.openDialog){var u=null,f=function(l,v){a.e_stop(v),l&&(l!=o.queryText&&(N(e,o,l),o.posFrom=o.posTo=e.getCursor()),u&&(u.style.opacity=1),w(e,v.shiftKey,function(h,c){var p;c.line<3&&document.querySelector&&(p=e.display.wrapper.querySelector(".CodeMirror-dialog"))&&p.getBoundingClientRect().bottom-4>e.cursorCoords(c,"window").top&&((u=p).style.opacity=.4)}))};Q(e,T(e),i,f,function(l,v){var h=a.keyName(l),c=e.getOption("extraKeys"),p=c&&c[h]||a.keyMap[e.getOption("keyMap")][h];p=="findNext"||p=="findPrev"||p=="findPersistentNext"||p=="findPersistentPrev"?(a.e_stop(l),N(e,g(e),v),e.execCommand(p)):(p=="find"||p=="findPersistent")&&(a.e_stop(l),f(v,l))}),r&&i&&(N(e,o,i),w(e,n))}else R(e,T(e),"Search for:",i,function(l){l&&!o.query&&e.operation(function(){N(e,o,l),o.posFrom=o.posTo=e.getCursor(),w(e,n)})})}function w(e,n,t){e.operation(function(){var r=g(e),o=S(e,r.query,n?r.posFrom:r.posTo);!o.find(n)&&(o=S(e,r.query,n?a.Pos(e.lastLine()):a.Pos(e.firstLine(),0)),!o.find(n))||(e.setSelection(o.from(),o.to()),e.scrollIntoView({from:o.from(),to:o.to()},20),r.posFrom=o.from(),r.posTo=o.to(),t&&t(o.from(),o.to()))})}function b(e){e.operation(function(){var n=g(e);n.lastQuery=n.query,n.query&&(n.query=n.queryText=null,e.removeOverlay(n.overlay),n.annotate&&(n.annotate.clear(),n.annotate=null))})}function s(e,n){var t=e?document.createElement(e):document.createDocumentFragment();for(var r in n)t[r]=n[r];for(var o=2;o<arguments.length;o++){var i=arguments[o];t.appendChild(typeof i=="string"?document.createTextNode(i):i)}return t}function T(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",s("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function j(e){return s("",null," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",s("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function k(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",s("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}function A(e){return s("",null,s("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",s("button",{},e.phrase("Yes"))," ",s("button",{},e.phrase("No"))," ",s("button",{},e.phrase("All"))," ",s("button",{},e.phrase("Stop")))}function E(e,n,t){e.operation(function(){for(var r=S(e,n);r.findNext();)if(typeof n!="string"){var o=e.getRange(r.from(),r.to()).match(n);r.replace(t.replace(/\$(\d)/g,function(i,u){return o[u]}))}else r.replace(t)})}function _(e,n){if(!e.getOption("readOnly")){var t=e.getSelection()||g(e).lastQuery,r=n?e.phrase("Replace all:"):e.phrase("Replace:"),o=s("",null,s("span",{className:"CodeMirror-search-label"},r),j(e));R(e,o,r,t,function(i){i&&(i=C(i),R(e,k(e),e.phrase("Replace with:"),"",function(u){if(u=D(u),n)E(e,i,u);else{b(e);var f=S(e,i,e.getCursor("from")),l=function(){var h=f.from(),c;!(c=f.findNext())&&(f=S(e,i),!(c=f.findNext())||h&&f.from().line==h.line&&f.from().ch==h.ch)||(e.setSelection(f.from(),f.to()),e.scrollIntoView({from:f.from(),to:f.to()}),$(e,A(e),e.phrase("Replace?"),[function(){v(c)},l,function(){E(e,i,u)}]))},v=function(h){f.replace(typeof i=="string"?u:u.replace(/\$(\d)/g,function(c,p){return h[p]})),l()};l()}}))})}}a.commands.find=function(e){b(e),x(e)},a.commands.findPersistent=function(e){b(e),x(e,!1,!0)},a.commands.findPersistentNext=function(e){x(e,!1,!0,!0)},a.commands.findPersistentPrev=function(e){x(e,!0,!0,!0)},a.commands.findNext=x,a.commands.findPrev=function(e){x(e,!0)},a.commands.clearSearch=b,a.commands.replace=_,a.commands.replaceAll=function(e){_(e,!0)}})})();var F=U.exports;const B=V(F),H=K({__proto__:null,default:B},[F]);export{H as s};
