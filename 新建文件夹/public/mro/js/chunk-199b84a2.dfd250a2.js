(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-199b84a2"],{"17e2":function(a,n,e){"use strict";var t=e("9012"),s=e.n(t);s.a},"89c8":function(a,n,e){"use strict";var t=e("b775");n["a"]={getWinningAddress:function(a){return t["a"].post("/winning/getWinningAddress",a)},getYearMonth:function(a){return t["a"].post("/winning/getYearMonth",a)},listWinningInfo:function(a){return t["a"].post("/winning/listWinningInfo",a)},saveWinningAddressInfo:function(a){return t["a"].post("/winning/saveWinningAddressInfo",a)}}},9012:function(a,n,e){},c918:function(a,n,e){"use strict";e.r(n);var t,s=function(){var a=this,n=a.$createElement,e=a._self._c||n;return a.isshow?e("div",{staticClass:"write-box"},[e("div",{staticClass:"tipbox"},[a._v("为保证活动公正性，获奖用户如在中奖公布后的1个月内就该订单货品提出退货申请的，将视为其放弃获奖资格。")]),e("div",{staticClass:"main"},[e("van-popup",{attrs:{position:"bottom"},model:{value:a.showArea,callback:function(n){a.showArea=n},expression:"showArea"}},[e("van-area",{attrs:{"item-height":"1.174rem",title:"选择地区","area-list":a.areaList,"visible-item-count":"5"},on:{confirm:a.onConfirm,cancel:function(n){a.showArea=!1}}})],1),e("van-popup",{staticClass:"successPopup",attrs:{closeable:""},model:{value:a.show1,callback:function(n){a.show1=n},expression:"show1"}},[e("div",{staticStyle:{"text-align":"center"}},[a._v(a._s(a.successTip))])]),e("van-form",{on:{submit:a.onSubmit}},[e("div",{staticClass:"form-top"},[e("van-field",{attrs:{name:"consignee",maxlength:"25",label:"收货人姓名",placeholder:"请输入收货人姓名",rules:[{required:!0,message:"不能为空"}]},nativeOn:{input:function(n){a.formData.consignee=a.formData.consignee.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5\.]/g,"")}},model:{value:a.formData.consignee,callback:function(n){a.$set(a.formData,"consignee",n)},expression:"formData.consignee"}}),e("van-field",{attrs:{readonly:"",autosize:"",name:"area",label:"所在地区",placeholder:"请输入所在地区",rules:[{required:!0,message:"不能为空",trigger:"onChange"}]},on:{click:function(n){a.showArea=!0}},model:{value:a.formData.area,callback:function(n){a.$set(a.formData,"area",n)},expression:"formData.area"}}),e("van-field",{staticClass:"input-item",attrs:{type:"textarea",rows:"1",autosize:"",name:"dz",label:"详细地址",maxlength:"50",placeholder:"请输入详细地址",rules:[{required:!0,message:"不能为空"}]},nativeOn:{input:function(n){a.formData.address=a.formData.address.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,"")}},model:{value:a.formData.address,callback:function(n){a.$set(a.formData,"address",n)},expression:"formData.address"}}),e("van-field",{attrs:{name:"phone",label:"手机号码",placeholder:"请输入手机号码","error-message":a.dhErrorMessage,rules:[{required:!0,message:"不能为空"}]},nativeOn:{input:function(n){a.formData.phone=a.formData.phone.replace(/[^0-9\.]/g,"")}},model:{value:a.formData.phone,callback:function(n){a.$set(a.formData,"phone",n)},expression:"formData.phone"}})],1),a._l(a.winningInfo,(function(n,t){return e("div",{key:t,staticClass:"form-bottom"},[e("div",{staticClass:"form-bottom-img"},[e("img",{attrs:{src:n.prizeUrl,alt:""}})]),e("div",{staticClass:"form-bottom-info"},[e("div",{staticClass:"form-bottom-info-title"},[a._v(a._s(n.prizeTitle))]),e("div",{staticClass:"form-bottom-info-good"},[e("div",{staticClass:"form-bottom-info-good-name"},[a._v(a._s(n.prizeName))]),e("div",{staticClass:"form-bottom-info-good-num"},[e("span",{staticClass:"x"},[a._v("X")]),e("span",{staticClass:"n"},[a._v("1")])])])])])})),e("van-popup",{model:{value:a.isshownoEditTip,callback:function(n){a.isshownoEditTip=n},expression:"isshownoEditTip"}},[e("div",{staticClass:"shownoEditTip"},[e("div",{staticClass:"info"},[a._v("领奖信息提交后无法修改，是否提交")]),e("div",{staticClass:"btn"},[e("div",{staticClass:"btn1",on:{click:function(n){return n.target!==n.currentTarget?null:a.toCanle(n)}}},[a._v("取消")]),e("div",{staticClass:"btn2",on:{click:function(n){return n.target!==n.currentTarget?null:a.toSubmit(n)}}},[a._v("确认")])])])]),e("div",{staticClass:"bottom-button"},[e("van-button",{attrs:{block:"",type:"info","native-type":"submit"}},[a._v("领取奖品")])],1)],2)],1)]):a._e()},i=[],o=(e("e7e5"),e("d399")),r=(e("e17f"),e("2241")),c=(e("db2c"),e("1125")),l=(e("4ddd"),e("9f14")),u=(e("a44c"),e("e27c")),f=(e("be7f"),e("565f")),d=(e("38d5"),e("772a")),m=e("89c8"),p=e("ff82");function h(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}var g={components:(t={},h(t,d["a"].name,d["a"]),h(t,f["a"].name,f["a"]),h(t,u["a"].name,u["a"]),h(t,l["a"].name,l["a"]),h(t,c["a"].name,c["a"]),h(t,r["a"].Component.name,r["a"].Component),t),data:function(){return{isshownoEditTip:!1,dhErrorMessage:"",successTip:"",areaList:{},formData:{consignee:"",area:"",phone:"",address:""},winningInfo:[],value:"",show1:!1,show2:!1,showArea:!1,isshow:!0}},created:function(){this.areaList=p["a"];var a=window.localStorage.getItem("WXwinningInfo");a?this.winningInfo=JSON.parse(a):(this.isshow=!1,o["a"].fail({type:"fail",message:"您无权访问该页面",icon:"fail",duration:0}))},mounted:function(){},methods:{validator:function(a){return/^[1][3,4,5,7,8][\d]{9}$/.test(a)},onSubmit:function(a){11==this.formData.phone.length?this.isshownoEditTip=!0:o["a"].fail("手机号码长度为11位数")},toCanle:function(){this.isshownoEditTip=!1},toSubmit:function(){var a=this;this.isshownoEditTip=!1,o["a"].loading({duration:0,message:"领取中...",forbidClick:!0,loadingType:"spinner"}),m["a"].saveWinningAddressInfo({address:this.formData.address,area:this.formData.area,consignee:this.formData.consignee,fromSystem:"LOTTERY_SYSTEM",phone:this.formData.phone,winningId:this.$route.params.winningId}).then((function(n){"200"==n.code?(o["a"].clear(),a.successTip="恭喜您成功领取奖品!",a.show1=!0,setTimeout((function(){a.$router.push({name:"send"})}),2e3)):"2001"==n.code&&(o["a"].clear(),a.successTip=n.desc,a.show1=!0,a.$router.push({name:"sended"}))})).catch((function(a){o["a"].clear(),o["a"].fail("领奖失败："+a)}))},ruletellphone:function(a){var n=/^[1][3,4,5,7,8][\d]{9}$/;return n.test(a)},onConfirm:function(a){this.formData.area=a.map((function(a){return a?a.name:""})).join("/"),this.showArea=!1}}},v=g,b=(e("17e2"),e("2877")),w=Object(b["a"])(v,s,i,!1,null,"cece46f4",null);n["default"]=w.exports}}]);
//# sourceMappingURL=chunk-199b84a2.dfd250a2.js.map