(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c743b446"],{4895:function(o,n,t){(function(o){o(t("56b3"))})((function(o){"use strict";function n(n,e,i,f){if(i&&i.call){var l=i;i=null}else l=r(n,i,"rangeFinder");"number"==typeof e&&(e=o.Pos(e,0));var a=r(n,i,"minFoldSize");function d(o){var t=l(n,e);if(!t||t.to.line-t.from.line<a)return null;if("fold"===f)return t;for(var r=n.findMarksAt(t.from),i=0;i<r.length;++i)if(r[i].__isFold){if(!o)return null;t.cleared=!0,r[i].clear()}return t}var u=d(!0);if(r(n,i,"scanUp"))while(!u&&e.line>n.firstLine())e=o.Pos(e.line-1,0),u=d(!1);if(u&&!u.cleared&&"unfold"!==f){var c=t(n,i,u);o.on(c,"mousedown",(function(n){s.clear(),o.e_preventDefault(n)}));var s=n.markText(u.from,u.to,{replacedWith:c,clearOnEnter:r(n,i,"clearOnEnter"),__isFold:!0});s.on("clear",(function(t,e){o.signal(n,"unfold",n,t,e)})),o.signal(n,"fold",n,u.from,u.to)}}function t(o,n,t){var e=r(o,n,"widget");if("function"==typeof e&&(e=e(t.from,t.to)),"string"==typeof e){var i=document.createTextNode(e);e=document.createElement("span"),e.appendChild(i),e.className="CodeMirror-foldmarker"}else e&&(e=e.cloneNode(!0));return e}o.newFoldFunction=function(o,t){return function(e,r){n(e,r,{rangeFinder:o,widget:t})}},o.defineExtension("foldCode",(function(o,t,e){n(this,o,t,e)})),o.defineExtension("isFolded",(function(o){for(var n=this.findMarksAt(o),t=0;t<n.length;++t)if(n[t].__isFold)return!0})),o.commands.toggleFold=function(o){o.foldCode(o.getCursor())},o.commands.fold=function(o){o.foldCode(o.getCursor(),null,"fold")},o.commands.unfold=function(o){o.foldCode(o.getCursor(),{scanUp:!1},"unfold")},o.commands.foldAll=function(n){n.operation((function(){for(var t=n.firstLine(),e=n.lastLine();t<=e;t++)n.foldCode(o.Pos(t,0),{scanUp:!1},"fold")}))},o.commands.unfoldAll=function(n){n.operation((function(){for(var t=n.firstLine(),e=n.lastLine();t<=e;t++)n.foldCode(o.Pos(t,0),{scanUp:!1},"unfold")}))},o.registerHelper("fold","combine",(function(){var o=Array.prototype.slice.call(arguments,0);return function(n,t){for(var e=0;e<o.length;++e){var r=o[e](n,t);if(r)return r}}})),o.registerHelper("fold","auto",(function(o,n){for(var t=o.getHelpers(n,"fold"),e=0;e<t.length;e++){var r=t[e](o,n);if(r)return r}}));var e={rangeFinder:o.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(o,n,t){if(n&&void 0!==n[t])return n[t];var r=o.options.foldOptions;return r&&void 0!==r[t]?r[t]:e[t]}o.defineOption("foldOptions",null),o.defineExtension("foldOption",(function(o,n){return r(this,o,n)}))}))},cbc8:function(o,n,t){(function(o){o(t("56b3"),t("4895"))})((function(o){"use strict";o.defineOption("foldGutter",!1,(function(n,r,i){i&&i!=o.Init&&(n.clearGutter(n.state.foldGutter.options.gutter),n.state.foldGutter=null,n.off("gutterClick",d),n.off("changes",u),n.off("viewportChange",c),n.off("fold",s),n.off("unfold",s),n.off("swapDoc",u)),r&&(n.state.foldGutter=new t(e(r)),a(n),n.on("gutterClick",d),n.on("changes",u),n.on("viewportChange",c),n.on("fold",s),n.on("unfold",s),n.on("swapDoc",u))}));var n=o.Pos;function t(o){this.options=o,this.from=this.to=0}function e(o){return!0===o&&(o={}),null==o.gutter&&(o.gutter="CodeMirror-foldgutter"),null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open"),null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded"),o}function r(o,t){for(var e=o.findMarks(n(t,0),n(t+1,0)),r=0;r<e.length;++r)if(e[r].__isFold){var i=e[r].find(-1);if(i&&i.line===t)return e[r]}}function i(o){if("string"==typeof o){var n=document.createElement("div");return n.className=o+" CodeMirror-guttermarker-subtle",n}return o.cloneNode(!0)}function f(o,t,e){var f=o.state.foldGutter.options,a=t-1,d=o.foldOption(f,"minFoldSize"),u=o.foldOption(f,"rangeFinder"),c="string"==typeof f.indicatorFolded&&l(f.indicatorFolded),s="string"==typeof f.indicatorOpen&&l(f.indicatorOpen);o.eachLine(t,e,(function(t){++a;var e=null,l=t.gutterMarkers;if(l&&(l=l[f.gutter]),r(o,a)){if(c&&l&&c.test(l.className))return;e=i(f.indicatorFolded)}else{var p=n(a,0),m=u&&u(o,p);if(m&&m.to.line-m.from.line>=d){if(s&&l&&s.test(l.className))return;e=i(f.indicatorOpen)}}(e||l)&&o.setGutterMarker(t,f.gutter,e)}))}function l(o){return new RegExp("(^|\\s)"+o+"(?:$|\\s)\\s*")}function a(o){var n=o.getViewport(),t=o.state.foldGutter;t&&(o.operation((function(){f(o,n.from,n.to)})),t.from=n.from,t.to=n.to)}function d(o,t,e){var i=o.state.foldGutter;if(i){var f=i.options;if(e==f.gutter){var l=r(o,t);l?l.clear():o.foldCode(n(t,0),f)}}}function u(o){var n=o.state.foldGutter;if(n){var t=n.options;n.from=n.to=0,clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout((function(){a(o)}),t.foldOnChangeTimeSpan||600)}}function c(o){var n=o.state.foldGutter;if(n){var t=n.options;clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout((function(){var t=o.getViewport();n.from==n.to||t.from-n.to>20||n.from-t.to>20?a(o):o.operation((function(){t.from<n.from&&(f(o,t.from,n.from),n.from=t.from),t.to>n.to&&(f(o,n.to,t.to),n.to=t.to)}))}),t.updateViewportTimeSpan||400)}}function s(o,n){var t=o.state.foldGutter;if(t){var e=n.line;e>=t.from&&e<t.to&&f(o,e,e+1)}}}))}}]);