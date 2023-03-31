(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-599ecc75"],{4638:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"ma-0"},[t._v("Guide")]),n("h2",{attrs:{id:"task-and-job-states"}},[t._v(" Task And Job States ")]),n("div",{staticClass:"card-grid"},[n("v-flex",{attrs:{md6:"",xs12:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("p",{staticClass:"display-1 text--primary"},[t._v("Task State Vs Job State")])]),n("v-card-text",[n("table",{attrs:{id:"task-job-state-table"}},[n("tr",[n("td",[t._v("Task")]),n("td"),n("td",[t._v("Job")])]),n("tr",[n("td",[n("p",[t._v(" The status of the task in the workflow. ")])]),n("td"),n("td",[n("p",[t._v(" The status of a single job submission, one task can have multiple jobs. ")])])]),t._l(t.states,(function(e){return n("tr",{key:e.name.name},[n("td",{staticStyle:{"font-size":"2em"}},[n("task",{attrs:{status:e.name,startTime:Date.now(),estimatedDuration:30}})],1),n("td",[n("span",[t._v(t._s(e.name))])]),n("td",{staticStyle:{"font-size":"2em"}},[n("job",{attrs:{status:e.name}})],1)])}))],2)])],1)],1),n("v-flex",{attrs:{md5:"",xs12:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("p",{staticClass:"display-1 text--primary"},[t._v("Special Task States")])]),n("v-card-text",[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",[n("v-list-item-icon",[n("task",{staticStyle:{"font-size":"2em"},attrs:{status:"waiting",isHeld:!0}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" Held ")]),n("v-list-item-sub-title",[t._v(' When a task is "held" no new job submissions will be made ')])],1)],1),n("v-list-item",[n("v-list-item-icon",[n("task",{staticStyle:{"font-size":"2em"},attrs:{status:"waiting",isQueued:!0}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" Queued ")]),n("v-list-item-sub-title",[t._v(" Task queued for job submission ")])],1)],1),n("v-list-item",[n("v-list-item-icon",[n("task",{staticStyle:{"font-size":"2em"},attrs:{status:"waiting",isRunahead:!0}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" Runahead ")]),n("v-list-item-sub-title",[t._v(" Task held back by runahead limiting ")])],1)],1)],1)],1)],1)],1)],1)])},a=[],s=n("d350"),l=n("9070"),c=n("c0d4"),o=n("ebc4");function r(){var t="/home/runner/work/cylc-ui/cylc-ui/src/views/Guide.vue",e="0de211c23321980015e6d2c7e77278295d3ab630",n=new Function("return this")(),i="__coverage__",a={path:"/home/runner/work/cylc-ui/cylc-ui/src/views/Guide.vue",statementMap:{0:{start:{line:177,column:15},end:{line:179,column:3}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:177,column:8},end:{line:177,column:9}},loc:{start:{line:177,column:15},end:{line:179,column:3}},line:177}},branchMap:{},s:{0:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0de211c23321980015e6d2c7e77278295d3ab630"},s=n[i]||(n[i]={});s[t]&&s[t].hash===e||(s[t]=a);var l=s[t];return r=function(){return l},l}r();var u={name:"Guide",mixins:[o["a"]],components:{task:s["a"],job:l["a"]},data:function(){return r().f[0]++,r().s[0]++,{states:c["a"]}}},m=u,d=(n("b9df"),n("2877")),v=n("6544"),f=n.n(v),b=n("b0af"),h=n("99d9"),p=n("a523"),_=n("0e8f"),k=n("8860"),w=n("da13"),y=n("5d23"),x=n("34c3"),S=Object(d["a"])(m,i,a,!1,null,null,null);e["default"]=S.exports;f()(S,{VCard:b["a"],VCardText:h["c"],VCardTitle:h["d"],VContainer:p["a"],VFlex:_["a"],VList:k["a"],VListItem:w["a"],VListItemContent:y["b"],VListItemIcon:x["a"],VListItemTitle:y["d"]})},"56cc":function(t,e,n){t.exports={fontRootSize:"16px"}},b9df:function(t,e,n){"use strict";n("56cc")},ebc4:function(t,e,n){"use strict";var i=n("d981");function a(){var t="/home/runner/work/cylc-ui/cylc-ui/src/mixins/subscriptionView.js",e="66ec013f03155a2e098a883987b91415d8deabe4",n=new Function("return this")(),i="__coverage__",s={path:"/home/runner/work/cylc-ui/cylc-ui/src/mixins/subscriptionView.js",statementMap:{0:{start:{line:36,column:4},end:{line:38,column:6}},1:{start:{line:37,column:6},end:{line:37,column:46}},2:{start:{line:41,column:4},end:{line:43,column:6}},3:{start:{line:42,column:6},end:{line:42,column:46}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:35,column:2},end:{line:35,column:3}},loc:{start:{line:35,column:36},end:{line:39,column:3}},line:35},1:{name:"(anonymous_1)",decl:{start:{line:36,column:9},end:{line:36,column:10}},loc:{start:{line:36,column:15},end:{line:38,column:5}},line:36},2:{name:"(anonymous_2)",decl:{start:{line:40,column:2},end:{line:40,column:3}},loc:{start:{line:40,column:37},end:{line:44,column:3}},line:40},3:{name:"(anonymous_3)",decl:{start:{line:41,column:9},end:{line:41,column:10}},loc:{start:{line:41,column:15},end:{line:43,column:5}},line:41}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"66ec013f03155a2e098a883987b91415d8deabe4"},l=n[i]||(n[i]={});l[t]&&l[t].hash===e||(l[t]=s);var c=l[t];return a=function(){return c},c}a(),e["a"]={mixins:[i["a"]],beforeRouteEnter:function(t,e,n){a().f[0]++,a().s[0]++,n((function(t){a().f[1]++,a().s[1]++,t.$workflowService.startSubscriptions()}))},beforeRouteUpdate:function(t,e,n){a().f[2]++,a().s[2]++,n((function(t){a().f[3]++,a().s[3]++,t.$workflowService.startSubscriptions()}))}}}}]);