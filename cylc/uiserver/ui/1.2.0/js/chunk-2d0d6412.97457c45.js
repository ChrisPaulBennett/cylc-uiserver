(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6412"],{7289:function(e,n,t){(function(e){e(t("56b3"))})((function(e){"use strict";var n={},t=/[^\s\u00a0]/,i=e.Pos,l=e.cmpPos;function o(e){var n=e.search(t);return-1==n?0:n}function a(e,n,t){return/\bstring\b/.test(e.getTokenTypeAt(i(n.line,0)))&&!/^[\'\"\`]/.test(t)}function r(e,n){var t=e.getMode();return!1!==t.useInnerComments&&t.innerMode?e.getModeAt(n):t}e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",(function(e){e||(e=n);for(var t=this,l=1/0,o=this.listSelections(),a=null,r=o.length-1;r>=0;r--){var m=o[r].from(),c=o[r].to();m.line>=l||(c.line>=l&&(c=i(l,0)),l=m.line,null==a?t.uncomment(m,c,e)?a="un":(t.lineComment(m,c,e),a="line"):"un"==a?t.uncomment(m,c,e):t.lineComment(m,c,e))}})),e.defineExtension("lineComment",(function(e,l,m){m||(m=n);var c=this,g=r(c,e),s=c.getLine(e.line);if(null!=s&&!a(c,e,s)){var f=m.lineComment||g.lineComment;if(f){var u=Math.min(0!=l.ch||l.line==e.line?l.line+1:l.line,c.lastLine()+1),d=null==m.padding?" ":m.padding,h=m.commentBlankLines||e.line==l.line;c.operation((function(){if(m.indent){for(var n=null,l=e.line;l<u;++l){var a=c.getLine(l),r=a.slice(0,o(a));(null==n||n.length>r.length)&&(n=r)}for(l=e.line;l<u;++l){a=c.getLine(l);var g=n.length;(h||t.test(a))&&(a.slice(0,g)!=n&&(g=o(a)),c.replaceRange(n+f+d,i(l,0),i(l,g)))}}else for(l=e.line;l<u;++l)(h||t.test(c.getLine(l)))&&c.replaceRange(f+d,i(l,0))}))}else(m.blockCommentStart||g.blockCommentStart)&&(m.fullLines=!0,c.blockComment(e,l,m))}})),e.defineExtension("blockComment",(function(e,o,a){a||(a=n);var m=this,c=r(m,e),g=a.blockCommentStart||c.blockCommentStart,s=a.blockCommentEnd||c.blockCommentEnd;if(g&&s){if(!/\bcomment\b/.test(m.getTokenTypeAt(i(e.line,0)))){var f=Math.min(o.line,m.lastLine());f!=e.line&&0==o.ch&&t.test(m.getLine(f))&&--f;var u=null==a.padding?" ":a.padding;e.line>f||m.operation((function(){if(0!=a.fullLines){var n=t.test(m.getLine(f));m.replaceRange(u+s,i(f)),m.replaceRange(g+u,i(e.line,0));var r=a.blockCommentLead||c.blockCommentLead;if(null!=r)for(var d=e.line+1;d<=f;++d)(d!=f||n)&&m.replaceRange(r+u,i(d,0))}else{var h=0==l(m.getCursor("to"),o),p=!m.somethingSelected();m.replaceRange(s,o),h&&m.setSelection(p?o:m.getCursor("from"),o),m.replaceRange(g,e)}}))}}else(a.lineComment||c.lineComment)&&0!=a.fullLines&&m.lineComment(e,o,a)})),e.defineExtension("uncomment",(function(e,l,o){o||(o=n);var a,m=this,c=r(m,e),g=Math.min(0!=l.ch||l.line==e.line?l.line:l.line-1,m.lastLine()),s=Math.min(e.line,g),f=o.lineComment||c.lineComment,u=[],d=null==o.padding?" ":o.padding;e:if(f){for(var h=s;h<=g;++h){var p=m.getLine(h),v=p.indexOf(f);if(v>-1&&!/comment/.test(m.getTokenTypeAt(i(h,v+1)))&&(v=-1),-1==v&&t.test(p))break e;if(v>-1&&t.test(p.slice(0,v)))break e;u.push(p)}if(m.operation((function(){for(var e=s;e<=g;++e){var n=u[e-s],t=n.indexOf(f),l=t+f.length;t<0||(n.slice(l,l+d.length)==d&&(l+=d.length),a=!0,m.replaceRange("",i(e,t),i(e,l)))}})),a)return!0}var C=o.blockCommentStart||c.blockCommentStart,k=o.blockCommentEnd||c.blockCommentEnd;if(!C||!k)return!1;var b=o.blockCommentLead||c.blockCommentLead,L=m.getLine(s),x=L.indexOf(C);if(-1==x)return!1;var R=g==s?L:m.getLine(g),O=R.indexOf(k,g==s?x+C.length:0),T=i(s,x+1),S=i(g,O+1);if(-1==O||!/comment/.test(m.getTokenTypeAt(T))||!/comment/.test(m.getTokenTypeAt(S))||m.getRange(T,S,"\n").indexOf(k)>-1)return!1;var E=L.lastIndexOf(C,e.ch),M=-1==E?-1:L.slice(0,e.ch).indexOf(k,E+C.length);if(-1!=E&&-1!=M&&M+k.length!=e.ch)return!1;M=R.indexOf(k,l.ch);var w=R.slice(l.ch).lastIndexOf(C,M-l.ch);return E=-1==M||-1==w?-1:l.ch+w,(-1==M||-1==E||E==l.ch)&&(m.operation((function(){m.replaceRange("",i(g,O-(d&&R.slice(O-d.length,O)==d?d.length:0)),i(g,O+k.length));var e=x+C.length;if(d&&L.slice(e,e+d.length)==d&&(e+=d.length),m.replaceRange("",i(s,x),i(s,e)),b)for(var n=s+1;n<=g;++n){var l=m.getLine(n),o=l.indexOf(b);if(-1!=o&&!t.test(l.slice(0,o))){var a=o+b.length;d&&l.slice(a,a+d.length)==d&&(a+=d.length),m.replaceRange("",i(n,o),i(n,a))}}})),!0)}))}))}}]);