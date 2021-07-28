(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"c-dashboard mt-4",attrs:{fluid:"","grid-list":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("p",{staticClass:"display-1"},[t._v("Workflows")]),n("v-data-table",{attrs:{headers:t.workflowsHeader,items:t.workflowsTable,loading:t.isLoading,"hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"item.count",fn:function(e){var l=e.item;return[n("v-skeleton-loader",{attrs:{loading:t.isLoading,"max-width":50,type:"table-cell",tile:""}},[n("span",{staticClass:"headline font-weight-light"},[t._v(t._s(l.count))])])]}},{key:"item.text",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.text))])]}}])},[n("v-progress-linear",{attrs:{slot:"progress",color:"grey",indeterminate:""},slot:"progress"})],1)],1),n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("p",{staticClass:"display-1"},[t._v("Events")]),n("v-data-table",{attrs:{headers:t.eventsHeader,items:t.events,"hide-default-footer":"","hide-default-header":""},scopedSlots:t._u([{key:"item.id",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.id))])]}},{key:"item.text",fn:function(e){var l=e.item;return[n("span",{staticClass:"title font-weight-light"},[t._v(t._s(l.text))])]}},{key:"no-data",fn:function(){return[n("td",{staticClass:"title"},[t._v("No events")])]},proxy:!0}])})],1)],1),n("v-divider"),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",{attrs:{to:"/workflows"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.table))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Workflows Table ")]),n("v-list-item-subtitle",[t._v(" View name, host, port, etc. of your workflows ")])],1)],1),n("v-list-item",{attrs:{to:"/user-profile"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.settings))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Settings ")]),n("v-list-item-subtitle",[t._v(" View your Hub permissions, and alter user preferences ")])],1)],1),n("v-list-item",{attrs:{href:t.hubUrl}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.hub))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Cylc Hub ")]),n("v-list-item-subtitle",[t._v(" Visit the Hub to manage your running UI Servers ")])],1)],1)],1)],1),n("v-flex",{attrs:{xs12:"",md6:"",lg6:""}},[n("v-list",{attrs:{"three-line":""}},[n("v-list-item",{attrs:{href:"#/guide"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.quickstart))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Cylc UI Quickstart ")]),n("v-list-item-subtitle",[t._v(" Learn how to use the Cylc UI ")])],1)],1),n("v-list-item",{attrs:{href:"https://cylc.github.io/cylc-doc/latest/html/suite-design-guide/index.html"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.workflow))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Workflow Design Guide ")]),n("v-list-item-subtitle",[t._v(" How to make complex Cylc and Rose workflows simpler and easier to maintain ")])],1)],1),n("v-list-item",{attrs:{href:"https://cylc.github.io/cylc-doc/latest/html/index.html"}},[n("v-list-item-avatar",{staticStyle:{"font-size":"2em"},attrs:{size:"60"}},[n("v-icon",{attrs:{large:""}},[t._v(t._s(t.svgPaths.documentation))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title font-weight-light"},[t._v(" Documentation ")]),n("v-list-item-subtitle",[t._v(" The complete Cylc documentation ")])],1)],1)],1)],1)],1)],1)},i=[],a=n("f3f3"),s=(n("d81d"),n("07ac"),n("4e827"),n("b0c0"),n("fb6a"),n("2f62")),o=n("94ed"),r=n("1b62"),c=n("ebc4"),u=n("5982"),m=n("700d"),d=n("e2db"),v=n("020d"),f=n("0306");function h(){var t="/home/runner/work/cylc-ui/cylc-ui/src/views/Dashboard.vue",e="389db0f45cdbf10daac86d9afa44b3580ead67ab",n=new Function("return this")(),l="__coverage__",i={path:"/home/runner/work/cylc-ui/cylc-ui/src/views/Dashboard.vue",statementMap:{0:{start:{line:191,column:4},end:{line:193,column:5}},1:{start:{line:196,column:4},end:{line:238,column:5}},2:{start:{line:243,column:20},end:{line:248,column:14}},3:{start:{line:244,column:25},end:{line:244,column:40}},4:{start:{line:246,column:10},end:{line:246,column:44}},5:{start:{line:247,column:10},end:{line:247,column:20}},6:{start:{line:249,column:6},end:{line:256,column:10}},7:{start:{line:250,column:31},end:{line:250,column:66}},8:{start:{line:252,column:10},end:{line:255,column:11}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:190,column:2},end:{line:190,column:3}},loc:{start:{line:190,column:14},end:{line:194,column:3}},line:190},1:{name:"(anonymous_1)",decl:{start:{line:195,column:2},end:{line:195,column:3}},loc:{start:{line:195,column:10},end:{line:239,column:3}},line:195},2:{name:"(anonymous_2)",decl:{start:{line:242,column:4},end:{line:242,column:5}},loc:{start:{line:242,column:22},end:{line:257,column:5}},line:242},3:{name:"(anonymous_3)",decl:{start:{line:244,column:13},end:{line:244,column:14}},loc:{start:{line:244,column:25},end:{line:244,column:40}},line:244},4:{name:"(anonymous_4)",decl:{start:{line:245,column:16},end:{line:245,column:17}},loc:{start:{line:245,column:32},end:{line:248,column:9}},line:245},5:{name:"(anonymous_5)",decl:{start:{line:250,column:14},end:{line:250,column:15}},loc:{start:{line:250,column:31},end:{line:250,column:66}},line:250},6:{name:"(anonymous_6)",decl:{start:{line:251,column:13},end:{line:251,column:14}},loc:{start:{line:251,column:22},end:{line:256,column:9}},line:251}},branchMap:{0:{loc:{start:{line:246,column:24},end:{line:246,column:39}},type:"binary-expr",locations:[{start:{line:246,column:24},end:{line:246,column:34}},{start:{line:246,column:38},end:{line:246,column:39}}],line:246},1:{loc:{start:{line:254,column:19},end:{line:254,column:41}},type:"binary-expr",locations:[{start:{line:254,column:19},end:{line:254,column:36}},{start:{line:254,column:40},end:{line:254,column:41}}],line:254}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"389db0f45cdbf10daac86d9afa44b3580ead67ab"},a=n[l]||(n[l]={});a[t]&&a[t].hash===e||(a[t]=i);var s=a[t];return h=function(){return s},s}h();var b={name:"Dashboard",mixins:[r["a"],u["a"],c["a"]],metaInfo:function(){return h().f[0]++,h().s[0]++,{title:this.getPageTitle("App.dashboard")}},data:function(){return h().f[1]++,h().s[1]++,{query:new v["a"](f["a"],{},"root",["workflows/applyWorkflowsDeltas"],[]),workflowsHeader:[{text:"Count",sortable:!1,value:"count"},{text:"Text",sortable:!1,value:"text"}],eventsHeader:[{text:"ID",sortable:!1,value:"id"},{text:"Event",sortable:!1,value:"text"}],events:[],svgPaths:{table:o["O"],settings:o["h"],hub:o["v"],quickstart:o["b"],workflow:o["d"],documentation:o["c"]},hubUrl:Object(m["a"])("/hub/home",!1,!0)}},computed:Object(a["a"])(Object(a["a"])({},Object(s["e"])("workflows",["workflows"])),{},{workflowsTable:function(){h().f[2]++;var t=(h().s[2]++,Object.values(this.workflows).map((function(t){return h().f[3]++,h().s[3]++,t.status})).reduce((function(t,e){return h().f[4]++,h().s[4]++,t[e]=(h().b[0][0]++,(t[e]||(h().b[0][1]++,0))+1),h().s[5]++,t}),{}));return h().s[6]++,d["a"].enumValues.sort((function(t,e){return h().f[5]++,h().s[7]++,t.name.localeCompare(e.name)})).map((function(e){return h().f[6]++,h().s[8]++,{text:e.name.charAt(0).toUpperCase()+e.name.slice(1),count:(h().b[1][0]++,t[e.name]||(h().b[1][1]++,0))}}))}})},g=b,w=n("2877"),_=n("6544"),p=n.n(_),y=n("a523"),k=n("8fea"),x=n("ce7e"),C=n("0e8f"),V=n("132d"),S=n("a722"),z=n("8860"),L=n("da13"),I=n("8270"),D=n("5d23"),P=n("8e36"),H=n("3129"),T=Object(w["a"])(g,l,i,!1,null,null,null);e["default"]=T.exports;p()(T,{VContainer:y["a"],VDataTable:k["a"],VDivider:x["a"],VFlex:C["a"],VIcon:V["a"],VLayout:S["a"],VList:z["a"],VListItem:L["a"],VListItemAvatar:I["a"],VListItemContent:D["b"],VListItemSubtitle:D["c"],VListItemTitle:D["d"],VProgressLinear:P["a"],VSkeletonLoader:H["a"]})}}]);