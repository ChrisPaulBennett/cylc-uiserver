(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f11eb6e"],{"1b62":function(n,e,c){"use strict";c("99af");var l=c("12cb");function o(){var n="/home/runner/work/cylc-ui/cylc-ui/src/mixins/index.js",e="00c13a517ad5fe31b7978da6442a2c9ccbbd80ac",c=new Function("return this")(),l="__coverage__",a={path:"/home/runner/work/cylc-ui/cylc-ui/src/mixins/index.js",statementMap:{0:{start:{line:37,column:6},end:{line:37,column:61}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:36,column:18},end:{line:36,column:19}},loc:{start:{line:36,column:46},end:{line:38,column:5}},line:36}},branchMap:{0:{loc:{start:{line:36,column:33},end:{line:36,column:44}},type:"default-arg",locations:[{start:{line:36,column:42},end:{line:36,column:44}}],line:36}},s:{0:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"00c13a517ad5fe31b7978da6442a2c9ccbbd80ac"},t=c[l]||(c[l]={});t[n]&&t[n].hash===e||(t[n]=a);var u=t[n];return o=function(){return u},u}o(),e["a"]={methods:{getPageTitle:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(o().b[0][0]++,{});return o().f[0]++,o().s[0]++,"".concat(l["a"].t("App.name")," | ").concat(l["a"].t(n,e))}}}},"6baa":function(n,e,c){"use strict";var l=c("2909"),o=c("d4ec"),a=c("bee2"),t=c("262e"),u=c("2caf"),i=c("f6e2"),r=c("6e23");function s(){var n="/home/runner/work/cylc-ui/cylc-ui/src/components/cylc/common/callbacks.js",e="a83f40c8ac13f01a057829a0289456a2b662780c",c=new Function("return this")(),l="__coverage__",o={path:"/home/runner/work/cylc-ui/cylc-ui/src/components/cylc/common/callbacks.js",statementMap:{0:{start:{line:26,column:4},end:{line:26,column:11}},1:{start:{line:27,column:4},end:{line:27,column:22}},2:{start:{line:31,column:4},end:{line:31,column:65}},3:{start:{line:35,column:4},end:{line:35,column:44}},4:{start:{line:36,column:4},end:{line:36,column:22}},5:{start:{line:40,column:20},end:{line:40,column:56}},6:{start:{line:41,column:4},end:{line:41,column:34}},7:{start:{line:45,column:20},end:{line:45,column:60}},8:{start:{line:46,column:4},end:{line:46,column:34}},9:{start:{line:50,column:20},end:{line:50,column:58}},10:{start:{line:51,column:4},end:{line:51,column:34}},11:{start:{line:55,column:4},end:{line:55,column:53}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:25,column:2},end:{line:25,column:3}},loc:{start:{line:25,column:17},end:{line:28,column:3}},line:25},1:{name:"(anonymous_1)",decl:{start:{line:30,column:2},end:{line:30,column:3}},loc:{start:{line:30,column:33},end:{line:32,column:3}},line:30},2:{name:"(anonymous_2)",decl:{start:{line:34,column:2},end:{line:34,column:3}},loc:{start:{line:34,column:27},end:{line:37,column:3}},line:34},3:{name:"(anonymous_3)",decl:{start:{line:39,column:2},end:{line:39,column:3}},loc:{start:{line:39,column:33},end:{line:42,column:3}},line:39},4:{name:"(anonymous_4)",decl:{start:{line:44,column:2},end:{line:44,column:3}},loc:{start:{line:44,column:37},end:{line:47,column:3}},line:44},5:{name:"(anonymous_5)",decl:{start:{line:49,column:2},end:{line:49,column:3}},loc:{start:{line:49,column:35},end:{line:52,column:3}},line:49},6:{name:"(anonymous_6)",decl:{start:{line:54,column:2},end:{line:54,column:3}},loc:{start:{line:54,column:25},end:{line:56,column:3}},line:54}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a83f40c8ac13f01a057829a0289456a2b662780c"},a=c[l]||(c[l]={});a[n]&&a[n].hash===e||(a[n]=o);var t=a[n];return s=function(){return t},t}s();var m=function(n){Object(t["a"])(c,n);var e=Object(u["a"])(c);function c(){var n;return Object(o["a"])(this,c),s().f[0]++,s().s[0]++,n=e.call(this),s().s[1]++,n.lookup=null,n}return Object(a["a"])(c,[{key:"before",value:function(n,e,c){s().f[1]++,s().s[2]++,this.lookup=Object.assign({},e.state.workflows.lookup)}},{key:"tearDown",value:function(n,e){s().f[2]++,s().s[3]++,n.commit("workflows/SET_LOOKUP",{}),s().s[4]++,this.lookup=null}},{key:"onAdded",value:function(n,e,c){s().f[3]++;var o=(s().s[5]++,Object(r["a"])(n,this.lookup));s().s[6]++,c.push.apply(c,Object(l["a"])(o.errors))}},{key:"onUpdated",value:function(n,e,c){s().f[4]++;var o=(s().s[7]++,Object(r["c"])(n,this.lookup));s().s[8]++,c.push.apply(c,Object(l["a"])(o.errors))}},{key:"onPruned",value:function(n,e,c){s().f[5]++;var o=(s().s[9]++,Object(r["b"])(n,this.lookup));s().s[10]++,c.push.apply(c,Object(l["a"])(o.errors))}},{key:"commit",value:function(n,e){s().f[6]++,s().s[11]++,n.commit("workflows/SET_LOOKUP",this.lookup)}}]),c}(i["a"]);e["a"]=m},a254:function(n,e,c){"use strict";var l=c("5530"),o=(c("99af"),c("2f62"));c("f45f");function a(){var n="/home/runner/work/cylc-ui/cylc-ui/src/mixins/graphql.js",e="ea127306a8e016dc7ca20b8feeb95cd1f845e90a",c=new Function("return this")(),l="__coverage__",o={path:"/home/runner/work/cylc-ui/cylc-ui/src/mixins/graphql.js",statementMap:{0:{start:{line:53,column:6},end:{line:53,column:55}},1:{start:{line:61,column:6},end:{line:63,column:7}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:52,column:4},end:{line:52,column:5}},loc:{start:{line:52,column:18},end:{line:54,column:5}},line:52},1:{name:"(anonymous_1)",decl:{start:{line:60,column:4},end:{line:60,column:5}},loc:{start:{line:60,column:17},end:{line:64,column:5}},line:60}},branchMap:{},s:{0:0,1:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ea127306a8e016dc7ca20b8feeb95cd1f845e90a"},t=c[l]||(c[l]={});t[n]&&t[n].hash===e||(t[n]=o);var u=t[n];return a=function(){return u},u}a(),e["a"]={props:{workflowName:{type:String,required:!0}},computed:Object(l["a"])(Object(l["a"])({},Object(o["e"])("user",["user"])),{},{workflowId:function(){return a().f[0]++,a().s[0]++,"~".concat(this.user.owner,"/").concat(this.workflowName)},variables:function(){return a().f[1]++,a().s[1]++,{workflowId:this.workflowId}}})}},ebc4:function(n,e,c){"use strict";var l=c("d981");function o(){var n="/home/runner/work/cylc-ui/cylc-ui/src/mixins/subscriptionView.js",e="66ec013f03155a2e098a883987b91415d8deabe4",c=new Function("return this")(),l="__coverage__",a={path:"/home/runner/work/cylc-ui/cylc-ui/src/mixins/subscriptionView.js",statementMap:{0:{start:{line:36,column:4},end:{line:38,column:6}},1:{start:{line:37,column:6},end:{line:37,column:46}},2:{start:{line:41,column:4},end:{line:43,column:6}},3:{start:{line:42,column:6},end:{line:42,column:46}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:35,column:2},end:{line:35,column:3}},loc:{start:{line:35,column:36},end:{line:39,column:3}},line:35},1:{name:"(anonymous_1)",decl:{start:{line:36,column:9},end:{line:36,column:10}},loc:{start:{line:36,column:15},end:{line:38,column:5}},line:36},2:{name:"(anonymous_2)",decl:{start:{line:40,column:2},end:{line:40,column:3}},loc:{start:{line:40,column:37},end:{line:44,column:3}},line:40},3:{name:"(anonymous_3)",decl:{start:{line:41,column:9},end:{line:41,column:10}},loc:{start:{line:41,column:15},end:{line:43,column:5}},line:41}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"66ec013f03155a2e098a883987b91415d8deabe4"},t=c[l]||(c[l]={});t[n]&&t[n].hash===e||(t[n]=a);var u=t[n];return o=function(){return u},u}o(),e["a"]={mixins:[l["a"]],beforeRouteEnter:function(n,e,c){o().f[0]++,o().s[0]++,c((function(n){o().f[1]++,o().s[1]++,n.$workflowService.startSubscriptions()}))},beforeRouteUpdate:function(n,e,c){o().f[2]++,o().s[2]++,c((function(n){o().f[3]++,o().s[3]++,n.$workflowService.startSubscriptions()}))}}}}]);