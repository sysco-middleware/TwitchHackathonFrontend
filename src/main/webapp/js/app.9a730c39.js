(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"background"},[n("br"),n("v-main",[n("MainPage"),n("Chat")],1)],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},c=[],s={name:"MainPage",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},u=s,f=(n("59f2"),n("2877")),l=Object(f["a"])(u,i,c,!1,null,null,null),p=l.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"space-around"}},[n("v-card",{attrs:{width:"100%"}},[n("v-img",{attrs:{height:"100px",src:"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2113&q=80"}},[n("v-app-bar",{attrs:{flat:"",color:"rgba(0, 0, 0, 0)"}},[n("v-toolbar-title",{staticClass:"text-h6 white--text pl-0"},[t._v(" Cegal Twitch Stream ")]),n("v-spacer")],1)],1),n("v-card-text",[n("v-row",[n("v-col",{staticClass:"col-8"},[n("iframe",{attrs:{src:"https://player.twitch.tv/moonunit666",height:"600",width:"775",allowfullscreen:""}})]),n("v-col",[n("v-btn",{staticClass:"button",attrs:{depressed:"",color:"#E0C2F2"},on:{click:function(e){return t.clickButton(e)}}},[t._v(" A ")]),n("v-btn",{staticClass:"white--text button",attrs:{depressed:"",color:"#3F1651"},on:{click:function(e){return t.clickButton(e)}}},[t._v(" B ")])],1)],1)],1)],1)],1)],1)},d=[],v=(n("d3b7"),n("e9c4"),{name:"Chat",data:function(){return{question:{scene:"scene-1",answer:""}}},methods:{fetchSomething:function(){fetch("https://ghibliapi.herokuapp.com/films").then((function(t){return t.json()})).then((function(t){return console.log(t)}))},clickButton:function(t){this.question.answer=t.target.outerText,this.postRequest()},postRequest:function(){var t=this.question;console.log(JSON.stringify(t)),fetch("https://twitchcommandreceiver.azurewebsites.net/sendAction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){console.log("Success:",t)})).catch((function(t){console.error("Error:",t)}))}}}),m=v,y=(n("6957"),n("6544")),b=n.n(y),g=n("40dc"),w=n("8336"),x=n("b0af"),j=n("99d9"),O=n("62ad"),C=n("a523"),_=n("adda"),V=n("0fd9"),k=n("2fa4"),S=n("2a7f"),M=Object(f["a"])(m,h,d,!1,null,"ddbff888",null),P=M.exports;b()(M,{VAppBar:g["a"],VBtn:w["a"],VCard:x["a"],VCardText:j["a"],VCol:O["a"],VContainer:C["a"],VImg:_["a"],VRow:V["a"],VSpacer:k["a"],VToolbarTitle:S["a"]});var T={name:"App",components:{MainPage:p,Chat:P}},q=T,A=(n("034f"),n("7496")),B=n("f6c4"),E=Object(f["a"])(q,o,a,!1,null,null,null),J=E.exports;b()(E,{VApp:A["a"],VMain:B["a"]});var $=n("f309");r["a"].use($["a"]);var D=new $["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:D,render:function(t){return t(J)}}).$mount("#app")},"59f2":function(t,e,n){"use strict";n("fcca")},6957:function(t,e,n){"use strict";n("f738")},"85ec":function(t,e,n){},f738:function(t,e,n){},fcca:function(t,e,n){}});
//# sourceMappingURL=app.9a730c39.js.map