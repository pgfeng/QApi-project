(function(t){function e(e){for(var a,i,n=e[0],c=e[1],u=e[2],d=0,l=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"048e":function(t,e,s){"use strict";var a=s("dd8e"),o=s.n(a);o.a},"452c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[!1===t.status?s("div",{staticClass:"loginBox"},[s("div",{staticClass:"title"},[t._v("请输入密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("van-button",{staticClass:"button",attrs:{block:"",type:"primary"},on:{click:t.submit}},[t._v("查看文档")])],1):t._e(),t.status?s("doc"):t._e()],1)},r=[],i=s("adab"),n={components:{Doc:i["default"]},data:function(){return{status:!1,password:""}},mounted:function(){var t=this;this.$store.dispatch("checkPassword",this.password).then((function(e){t.status=e.status}))},methods:{submit:function(){var t=this;this.password||this.$toast("请输入文档密码！"),this.$store.state.password=this.password,this.$store.dispatch("login",this.password).then((function(e){t.status=e.status}))}}},c=n,u=(s("9f07"),s("b0a0"),s("2877")),p=Object(u["a"])(c,o,r,!1,null,"64e3d51e",null),d=p.exports,l=(s("d3b7"),s("8c4f")),h=s("9062"),m=s.n(h);s("e40d");a["a"].use(m.a),a["a"].use(l["a"]);var f=[{path:"/",component:function(){return Promise.resolve().then(s.bind(null,"adab"))}}],v=new l["a"]({routes:f}),_=v,y=s("53ca"),b=s("2f62"),A=(s("b0c0"),s("ac1f"),s("5319"),s("bc3a")),g=s.n(A),P={app_title:"QApi Document",api_url:"/"},w=s("c1c0"),x=w(!0,P,{api_url:"http://127.0.0.1:8899/"}),$="production",H="production"===$?P:x,C=H,O=s("72bf"),S=s("d399"),Q=g.a.create({baseURL:C.api_url,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),j={request:function(t,e){var s=t.path;if("undefined"!=typeof t.params["QApi\\Attribute\\Parameter\\PathParam"])for(var a=0;a<t.params["QApi\\Attribute\\Parameter\\PathParam"].length;a++)s=s.replace("{"+t.params["QApi\\Attribute\\Parameter\\PathParam"][a]["name"]+"}",t.params["QApi\\Attribute\\Parameter\\PathParam"][a]["default"]);var o={_QApi:"QApiDocument"};if("undefined"!=typeof t.params["QApi\\Attribute\\Parameter\\HeaderParam"])for(var r=0;r<t.params["QApi\\Attribute\\Parameter\\HeaderParam"].length;r++)o[t.params["QApi\\Attribute\\Parameter\\HeaderParam"][r]["name"]]=t.params["QApi\\Attribute\\Parameter\\HeaderParam"][r]["default"]||"";var i={};if("undefined"!=typeof t.params["QApi\\Attribute\\Parameter\\GetParam"])for(var n=0;n<t.params["QApi\\Attribute\\Parameter\\GetParam"].length;n++)i[t.params["QApi\\Attribute\\Parameter\\GetParam"][n]["name"]]=t.params["QApi\\Attribute\\Parameter\\GetParam"][n]["default"]||"";var c={};if("undefined"!=typeof t.params["QApi\\Attribute\\Parameter\\PostParam"])for(var u=0;u<t.params["QApi\\Attribute\\Parameter\\PostParam"].length;u++)c[t.params["QApi\\Attribute\\Parameter\\PostParam"][u]["name"]]=t.params["QApi\\Attribute\\Parameter\\PostParam"][u]["default"]||"";return Q.request({url:e+s,method:t.type,headers:o,params:i,data:Object(O["stringify"])(c)})},getJSON:function(t,e){return e||(e={}),new Promise((function(s,a){Q.request({url:t,method:"get",params:e}).then((function(t){s(t.data)})).catch((function(t){Object(S["a"])("网络请求故障~"),a(t)}))}))},post:function(t,e,s){return e||(e={}),new Promise((function(a,o){Q.request({url:t,method:"post",params:e,data:Object(O["stringify"])(s)}).then((function(t){a(t.data)})).catch((function(t){Object(S["a"])("网络请求故障~"),o(t)}))}))}},V=s("6821"),k=s.n(V);a["a"].use(b["a"]);var q={getItem:function(t){var e=localStorage.getItem(t);return e||null},setItem:function(t,e){return"object"==Object(y["a"])(e)?localStorage.setItem(t,JSON.stringify(e)):localStorage.setItem(t,e)},removeItem:function(t){return localStorage.removeItem(t)}},N=new b["a"].Store({state:{doc:null,password:""},mutations:{},actions:{init:function(t){return new Promise((function(e){if(t.state.password)e();else{var s=q.getItem("password");s&&(t.state.password=s),e()}}))},login:function(t,e){return e=k()(e),q.setItem("password",e),t.state.password=e,t.dispatch("checkPassword")},checkPassword:function(t){return j.getJSON("__status.json",{password:t.state.password})}},modules:{}}),J=s("b970"),I=(s("157a"),s("f5df1"),s("499a"),s("5ece")),R=s.n(I),z=s("7212"),D=s.n(z),T=(s("dfa4"),s("d4cd")),B=s.n(T),G={install:function(t){t.prototype.$http=j,t.prototype.$config=C}},E=s("a822");a["a"].use(B.a),a["a"].use(R.a,{holdTime:2e3,tapTime:200}),a["a"].use(J["a"]),a["a"].use(D.a),a["a"].use(G),a["a"].config.productionTip=!1,a["a"].use(E["a"]),a["a"].prototype.$config=C,N.dispatch("init").then((function(){new a["a"]({data:{config:C},router:_,store:N,render:function(t){return t(d)}}).$mount("#app")})).catch((function(){}))},"9f07":function(t,e,s){"use strict";var a=s("e760"),o=s.n(a);o.a},adab:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"docBody"},[t.doc?s("div",{staticClass:"slide"},[t._m(0),s("div"),s("div",{staticClass:"api-lists"},[t.choseVersion?s("div",{staticClass:"content"},t._l(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion],(function(e,a){return s("div",{key:a,staticClass:"module"},[s("div",{staticClass:"name"},[t._v(t._s(a))]),s("ul",{staticClass:"module-lists"},t._l(e,(function(e,o){return s("li",{key:o,class:{curr:t.api==o&&a===t.module},on:{click:function(e){return t.choseApi(a,o)}}},[t._v(" "+t._s(e.summary)+" ")])})),0)])})),0):s("div",{staticStyle:{color:"#444"}},[s("van-empty",{attrs:{description:"未选择项目"}})],1)]),s("div",{staticClass:"appSelect"},[s("van-button",{attrs:{block:"",size:"small",type:"primary"},on:{click:function(e){t.show=!0}}},[t._v("切换项目接口")])],1)]):t._e(),s("div",{staticClass:"body"},[t.module&&t.api?t._e():s("div",{staticClass:"box",staticStyle:{display:"flex",height:"100%","align-items":"center","justify-content":"center"}},[s("div",{staticStyle:{"font-size":"120px",color:"#BBB","font-weight":"700","text-align":"center","padding-bottom":"25%"}},[t._v(" QApi ")])]),t.module&&null!=t.api?s("div",{staticClass:"box"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].summary)+" "),s("van-icon",{staticClass:"refreshApi",staticStyle:{float:"right"},attrs:{name:"replay",size:"18"},on:{click:t.refreshApi}})],1),s("div",{staticClass:"description"},[t._v(" "+t._s(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].description)+" ")]),s("div",{staticClass:"title"},[t._v(" 接口地址 ")]),s("div",{staticClass:"description"},[s("van-tag",{attrs:{type:"primary",plain:"",size:"large"}},[t._v(t._s(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].type)+" ")]),t._v(" "),s("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(t.doc[t.choseApp][t.choseHost].scheme)+"://"+t._s(t.doc[t.choseApp][t.choseHost].host)+t._s(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].path))])],1),s("div",{staticClass:"title"},[t._v(" 请求参数 ")]),s("div",{staticClass:"description"},[s("table",{staticClass:"apiTable",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(1),s("tbody",[t._l(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].params,(function(e,a){return["QApi\\Attribute\\Parameter\\HeaderParam"===a?t._l(e,(function(e,a){return s("tr",{key:a},[s("td",[t._v(" "+t._s(e.name)+" ")]),s("td",[t._v(" "+t._s(e.summary||"无")+" ")]),s("td",[t._v(" "+t._s(e.type)+" ")]),s("td",[t._v(" header ")]),s("td",[t._v(" "+t._s(e.required)+" ")]),s("td",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"data.default"}],attrs:{placeholder:"参数值"},domProps:{value:e.default},on:{input:function(s){s.target.composing||t.$set(e,"default",s.target.value)}}})]),s("td",[t._v(" "+t._s(e.description||"无")+" ")])])})):t._e(),"QApi\\Attribute\\Parameter\\GetParam"===a?t._l(e,(function(e,a){return s("tr",{key:a},[s("td",[t._v(" "+t._s(e.name)+" ")]),s("td",[t._v(" "+t._s(e.summary||"无")+" ")]),s("td",[t._v(" "+t._s(e.type)+" ")]),s("td",[t._v(" get ")]),s("td",[t._v(" "+t._s(e.required)+" ")]),s("td",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"data.default"}],attrs:{placeholder:"参数值"},domProps:{value:e.default},on:{input:function(s){s.target.composing||t.$set(e,"default",s.target.value)}}})]),s("td",[t._v(" "+t._s(e.description||"无")+" ")])])})):t._e(),"QApi\\Attribute\\Parameter\\PostParam"===a?t._l(e,(function(e,a){return s("tr",{key:a},[s("td",[t._v(" "+t._s(e.name)+" ")]),s("td",[t._v(" "+t._s(e.summary||"无")+" ")]),s("td",[t._v(" "+t._s(e.type)+" ")]),s("td",[t._v(" post ")]),s("td",[t._v(" "+t._s(e.required)+" ")]),s("td",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"data.default"}],attrs:{placeholder:"参数值"},domProps:{value:e.default},on:{input:function(s){s.target.composing||t.$set(e,"default",s.target.value)}}})]),s("td",[t._v(" "+t._s(e.description||"无")+" ")])])})):t._e(),"QApi\\Attribute\\Parameter\\PathParam"===a?t._l(e,(function(e,a){return s("tr",{key:a},[s("td",[t._v(" "+t._s(e.name)+" ")]),s("td",[t._v(" "+t._s(e.summary||"无")+" ")]),s("td",[t._v(" "+t._s(e.type)+" ")]),s("td",[t._v(" path ")]),s("td",[t._v(" "+t._s(e.required)+" ")]),s("td",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.default,expression:"data.default"}],attrs:{placeholder:"参数值"},domProps:{value:e.default},on:{input:function(s){s.target.composing||t.$set(e,"default",s.target.value)}}})]),s("td",[t._v(" "+t._s(e.description||"无")+" ")])])})):t._e()]}))],2)])]),s("div",{staticClass:"title",staticStyle:{"max-width":"1200px"}},[s("van-button",{staticStyle:{padding:"0 30px"},attrs:{size:"small",type:"primary"},on:{click:function(e){return t.run(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api])}}},[t._v("运行 ")]),t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].response?s("van-button",{staticStyle:{padding:"0 30px",float:"right"},attrs:{size:"small",type:"default"},on:{click:function(e){return t.saveResponse(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api])}}},[t._v("更新示例 ")]):t._e()],1),s("div",{staticClass:"description"},[t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].response?s("vue-json-pretty",{attrs:{path:"res",data:t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api].response}}):t._e()],1)]):t._e()]),s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("van-cascader",{attrs:{title:"请选择项目","active-color":"#07c160",options:t.options},on:{change:t.change,close:function(e){t.show=!1},finish:t.choseFinish},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1)],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{staticClass:"name"},[t._v(" QApiDocument ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",[t._v("参数")]),s("td",[t._v("简介")]),s("td",[t._v("类型")]),s("td",[t._v("请求类型")]),s("td",[t._v("必填")]),s("td",[t._v("参数值")]),s("td",[t._v("描述")])])])}],r=(s("d3b7"),s("ac1f"),s("5319"),s("838b")),i=s.n(r),n=(s("b83f"),{name:"doc",components:{VueJsonPretty:i.a},data:function(){return{show:!1,doc:null,choseApp:this.$route.query.app||null,choseHost:this.$route.query.host||null,choseVersion:this.$route.query.version||null,module:this.$route.query.m||null,api:this.$route.query.api||null,apiData:null,cascaderValue:"",options:[]}},created:function(){this.loadDoc()},methods:{choseApi:function(t,e){this.$router.replace({path:"/",query:{app:this.choseApp,host:this.choseHost,version:this.choseVersion,m:t,api:e}})},loadResponse:function(t){t.response||this.$http.getJSON("__apiResponse.json",{path:this.choseApp+"##"+this.doc[this.choseApp][this.choseHost].host+t.path,type:t.type}).then((function(e){t.response=JSON.parse(e.data)}))},saveResponse:function(t){var e=this;this.$http.post("__apiResponse.json",{path:this.choseApp+"##"+this.doc[this.choseApp][this.choseHost].host+t.path,type:t.type},{response:JSON.stringify(t.response)}).then((function(t){t.status&&e.$toast("保存成功！")}))},run:function(t){this.$http.request(t,this.doc[this.choseApp][this.choseHost].scheme+"://"+this.doc[this.choseApp][this.choseHost].host).then((function(e){t.response=e.data}))},choseFinish:function(t){this.show=!1,this.choseApp=t.selectedOptions[0].value,this.choseHost=t.selectedOptions[1].value,this.choseVersion=t.selectedOptions[2].value,this.$router.replace({path:"/",query:{app:this.choseApp,host:this.choseHost,version:this.choseVersion}})},refreshApi:function(){var t=this,e=this.$toast.loading("正在刷新");this.$http.post("__apis.json",{},{}).then((function(e){var s=[];for(var a in t.doc=e.data,t.doc){var o=[];for(var r in t.doc[a]){var i=[];for(var n in t.doc[a][r].doc)i.push({text:"版本-"+n,value:n});o.push({text:t.doc[a][r].host+" - "+t.doc[a][r].mode,value:r,children:i})}var c={text:a,value:a,children:o};s.push(c)}t.options=s})).finally((function(){e.clear()}))},loadDoc:function(){var t=this;this.$http.getJSON("__apis.json").then((function(e){var s=[];for(var a in t.doc=e.data,t.doc){var o=[];for(var r in t.doc[a]){var i=[];for(var n in t.doc[a][r].doc)i.push({text:"版本-"+n,value:n});o.push({text:t.doc[a][r].host+" - "+t.doc[a][r].mode,value:r,children:i})}var c={text:a,value:a,children:o};s.push(c)}t.options=s,null!=t.api&&t.loadResponse(t.doc[t.choseApp][t.choseHost].doc[t.choseVersion][t.module][t.api])}))}},watch:{$route:function(){this.choseApp=this.$route.query.app||null,this.choseHost=this.$route.query.host||null,this.choseVersion=this.$route.query.version||null,this.module=this.$route.query.m||null,this.api=this.$route.query.api||null,this.api&&this.loadResponse(this.doc[this.choseApp][this.choseHost].doc[this.choseVersion][this.module][this.api])}}}),c=n,u=(s("048e"),s("2877")),p=Object(u["a"])(c,a,o,!1,null,"a98bb40a",null);e["default"]=p.exports},b0a0:function(t,e,s){"use strict";var a=s("452c"),o=s.n(a);o.a},dd8e:function(t,e,s){},e760:function(t,e,s){}});
//# sourceMappingURL=app.4dcd460b.js.map