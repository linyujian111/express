(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fa371aa"],{"0a26":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("ad06"),s=i("78eb"),a=i("9884"),o=i("ea8e"),r=function(t){var e=t.parent,i=t.bem,r=t.role;return{mixins:[Object(a["a"])(e),s["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===r&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this,i=t.target,n=this.$refs.icon,s=n===i||n.contains(i);this.isDisabled||!s&&this.labelDisabled?this.$emit("click",t):(this.toggle(),setTimeout((function(){e.$emit("click",t)})))},genIcon:function(){var t=this.$createElement,e=this.checked,s=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:i("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(o["a"])(s)}},[this.slots("icon",{checked:e})||t(n["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:r,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}}},"20fb":function(t,e,i){"use strict";var n=i("2638"),s=i.n(n),a=i("d282"),o=i("ea8e"),r=i("a142"),l=i("a8fa"),c=i("1325"),h=i("482d"),u=i("90c6"),d=i("78eb"),f=Object(a["a"])("stepper"),m=f[0],p=f[1],g=600,v=200;function b(t,e){return String(t)===String(e)}function w(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i}e["a"]=m({mixins:[d["a"]],props:{value:null,theme:String,integer:Boolean,disabled:Boolean,allowEmpty:Boolean,inputWidth:[Number,String],buttonSize:[Number,String],asyncChange:Boolean,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,decimalLength:[Number,String],name:{type:[Number,String],default:""},min:{type:[Number,String],default:1},max:{type:[Number,String],default:1/0},step:{type:[Number,String],default:1},defaultValue:{type:[Number,String],default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},longPress:{type:Boolean,default:!0}},data:function(){var t,e=null!=(t=this.value)?t:this.defaultValue,i=this.format(e);return b(i,this.value)||this.$emit("input",i),{currentValue:i}},computed:{minusDisabled:function(){return this.disabled||this.disableMinus||this.currentValue<=+this.min},plusDisabled:function(){return this.disabled||this.disablePlus||this.currentValue>=+this.max},inputStyle:function(){var t={};return this.inputWidth&&(t.width=Object(o["a"])(this.inputWidth)),this.buttonSize&&(t.height=Object(o["a"])(this.buttonSize)),t},buttonStyle:function(){if(this.buttonSize){var t=Object(o["a"])(this.buttonSize);return{width:t,height:t}}}},watch:{max:"check",min:"check",integer:"check",decimalLength:"check",value:function(t){b(t,this.currentValue)||(this.currentValue=this.format(t))},currentValue:function(t){this.$emit("input",t),this.$emit("change",t,{name:this.name})}},methods:{check:function(){var t=this.format(this.currentValue);b(t,this.currentValue)||(this.currentValue=t)},formatNumber:function(t){return Object(h["a"])(String(t),!this.integer)},format:function(t){return this.allowEmpty&&""===t||(t=this.formatNumber(t),t=""===t?0:+t,t=Object(u["a"])(t)?this.min:t,t=Math.max(Math.min(this.max,t),this.min),Object(r["c"])(this.decimalLength)&&(t=t.toFixed(this.decimalLength))),t},onInput:function(t){var e=t.target.value,i=this.formatNumber(e);if(Object(r["c"])(this.decimalLength)&&-1!==i.indexOf(".")){var n=i.split(".");i=n[0]+"."+n[1].slice(0,this.decimalLength)}b(e,i)||(t.target.value=i),this.emitChange(i)},emitChange:function(t){this.asyncChange?(this.$emit("input",t),this.$emit("change",t,{name:this.name})):this.currentValue=t},onChange:function(){var t=this.type;if(this[t+"Disabled"])this.$emit("overlimit",t);else{var e="minus"===t?-this.step:+this.step,i=this.format(w(+this.currentValue,e));this.emitChange(i),this.$emit(t)}},onFocus:function(t){this.disableInput&&this.$refs.input?this.$refs.input.blur():this.$emit("focus",t)},onBlur:function(t){var e=this.format(t.target.value);t.target.value=e,this.currentValue=e,this.$emit("blur",t),Object(l["a"])()},longPressStep:function(){var t=this;this.longPressTimer=setTimeout((function(){t.onChange(),t.longPressStep(t.type)}),v)},onTouchStart:function(){var t=this;this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress=!1,this.longPressTimer=setTimeout((function(){t.isLongPress=!0,t.onChange(),t.longPressStep()}),g))},onTouchEnd:function(t){this.longPress&&(clearTimeout(this.longPressTimer),this.isLongPress&&Object(c["c"])(t))}},render:function(){var t=this,e=arguments[0],i=function(e){return{on:{click:function(i){i.preventDefault(),t.type=e,t.onChange()},touchstart:function(){t.type=e,t.onTouchStart()},touchend:t.onTouchEnd,touchcancel:t.onTouchEnd}}};return e("div",{class:p([this.theme])},[e("button",s()([{directives:[{name:"show",value:this.showMinus}],attrs:{type:"button"},style:this.buttonStyle,class:p("minus",{disabled:this.minusDisabled})},i("minus")])),e("input",{ref:"input",attrs:{type:this.integer?"tel":"text",role:"spinbutton",disabled:this.disabled,readonly:this.disableInput,inputmode:this.integer?"numeric":"decimal",placeholder:this.placeholder,"aria-valuemax":this.max,"aria-valuemin":this.min,"aria-valuenow":this.currentValue},class:p("input"),domProps:{value:this.currentValue},style:this.inputStyle,on:{input:this.onInput,focus:this.onFocus,blur:this.onBlur}}),e("button",s()([{directives:[{name:"show",value:this.showPlus}],attrs:{type:"button"},style:this.buttonStyle,class:p("plus",{disabled:this.plusDisabled})},i("plus")]))])}})},2381:function(t,e,i){},2994:function(t,e,i){"use strict";i("68ef"),i("e3b3"),i("c0c2")},"2bdd":function(t,e,i){"use strict";var n=i("d282"),s=i("02de"),a=i("a8c1"),o=i("5fbe"),r=i("543e"),l=Object(n["a"])("list"),c=l[0],h=l[1],u=l[2];e["a"]=c({mixins:[Object(o["a"])((function(t){this.scroller||(this.scroller=Object(a["d"])(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,i=t.$el,n=t.scroller,a=t.offset,o=t.direction;e=n.getBoundingClientRect?n.getBoundingClientRect():{top:0,bottom:n.innerHeight};var r=e.bottom-e.top;if(!r||Object(s["a"])(i))return!1;var l=!1,c=t.$refs.placeholder.getBoundingClientRect();l="up"===o?e.top-c.top<=a:c.bottom-e.bottom<=a,l&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:h("loading")},[this.slots("loading")||t(r["a"],{attrs:{size:"16"}},[this.loadingText||u("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:h("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:h("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:h("placeholder")});return t("div",{class:h(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}})},"3c32":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("2381")},"417e":function(t,e,i){"use strict";var n=i("d282"),s=i("0a26"),a=Object(n["a"])("checkbox"),o=a[0],r=a[1];e["a"]=o({mixins:[Object(s["a"])({bem:r,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,i=e.value.slice();if(t){if(e.max&&i.length>=e.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),e.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),e.$emit("input",i))}}}})},"504b":function(t,e,i){},"769a":function(t,e,i){"use strict";var n=i("b775");e["a"]={uploapFile:function(t){var e=new FormData;return t instanceof Array?t.map((function(t){t.status="uploading",t.message="上传中...",e.append("file",t.file)})):(t.status="uploading",t.message="上传中...",e.append("file",t.file)),n["a"].post("http://mro.ur.com.cn::8384/admin/sys/files/upload/",e)}}},"78eb":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},"8f80":function(t,e,i){"use strict";var n=i("c31d"),s=i("d282"),a=i("ea8e"),o=i("a142");function r(t){return Array.isArray(t)?t:[t]}function l(t,e){return new Promise((function(i){if("file"!==e){var n=new FileReader;n.onload=function(t){i(t.target.result)},"dataUrl"===e?n.readAsDataURL(t):"text"===e&&n.readAsText(t)}else i()}))}function c(t,e){return r(t).some((function(t){return t.size>e}))}var h=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(t){return h.test(t)}function d(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?u(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var f=i("78eb"),m=i("ad06"),p=i("44bf"),g=i("543e"),v=i("2b0e"),b=Object(s["a"])("image-preview"),w=b[0],y=b[1],S=i("6605"),x=i("3875"),$=i("5fbe"),T=i("5596"),k=i("482d"),C=i("1325"),P=i("2bb1");function O(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var j,z={mixins:[x["a"]],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,e=this.rootHeight,i=e/t;return this.imageRatio>i},imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var i=this.moveX/t,n=this.moveY/t;e.transform="scale("+t+", "+t+") translate("+i+"px, "+n+"px)"}return e},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){this.scale=Object(k["b"])(t,+this.minZoom,+this.maxZoom),this.$emit("scale",{scale:this.scale,index:this.active})},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var e=t.touches,i=this.offsetX,n=void 0===i?0:i;this.touchStart(t),this.touchStartTime=new Date,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===e.length&&1!==this.scale,this.zooming=2===e.length&&!n,this.zooming&&(this.startScale=this.scale,this.startDistance=O(t.touches))},onTouchMove:function(t){var e=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&Object(C["c"])(t,!0),this.moving){var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(k["b"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(k["b"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var s=O(e),a=this.startScale*s/this.startDistance;this.setScale(a)}},onTouchEnd:function(t){var e=!1;(this.moving||this.zooming)&&(e=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.zooming&&(this.moveX=Object(k["b"])(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=Object(k["b"])(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),Object(C["c"])(t,e),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this,e=this.offsetX,i=void 0===e?0:e,n=this.offsetY,s=void 0===n?0:n,a=new Date-this.touchStartTime,o=250,r=10;i<r&&s<r&&a<o&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),o))},onLoad:function(t){var e=t.target,i=e.naturalWidth,n=e.naturalHeight;this.imageRatio=n/i}},render:function(){var t=arguments[0],e={loading:function(){return t(g["a"],{attrs:{type:"spinner"}})}};return t(P["a"],{class:y("swipe-item")},[t(p["a"],{attrs:{src:this.src,fit:"contain"},class:y("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:e,on:{load:this.onLoad}})])}},D=w({mixins:[x["a"],Object(S["a"])({skipToggleEvent:!0}),Object($["a"])((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:500},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:y("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var e=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){e.resize(),e.$refs.swipe.swipeTo(+e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:y("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:y("cover")},[e])},genImages:function(){var t=this,e=this.$createElement;return e(T["a"],{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:y("swipe"),on:{change:this.setActive}},[this.images.map((function(i){return e(z,{attrs:{src:i,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(m["a"],{attrs:{role:"button",name:this.closeIcon},class:y("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,e){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,e)}},render:function(){var t=arguments[0];if(this.shouldRender)return t("transition",{attrs:{name:"van-fade"},on:{afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],class:[y(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()])])}}),L={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,getContainer:"body",startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},B=function(){j=new(v["a"].extend(D))({el:document.createElement("div")}),document.body.appendChild(j.$el),j.$on("change",(function(t){j.onChange&&j.onChange(t)})),j.$on("scale",(function(t){j.onScale&&j.onScale(t)}))},I=function(t,e){if(void 0===e&&(e=0),!o["g"]){j||B();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(n["a"])(j,L,i),j.$once("input",(function(t){j.value=t})),j.$once("closed",(function(){j.images=[]})),i.onClose&&(j.$off("close"),j.$once("close",i.onClose)),j}};I.Component=D,I.install=function(){v["a"].use(D)};var M=I,E=Object(s["a"])("uploader"),N=E[0],A=E[1];e["a"]=N({inheritAttrs:!1,mixins:[f["a"]],model:{prop:"fileList"},props:{disabled:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return Object(a["a"])(this.previewSize)},value:function(){return this.fileList}},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var e=this,i=t.target.files;if(!this.disabled&&i.length){if(i=1===i.length?i[0]:[].slice.call(i),this.beforeRead){var n=this.beforeRead(i,this.getDetail());if(!n)return void this.resetInput();if(Object(o["f"])(n))return void n.then((function(t){t?e.readFile(t):e.readFile(i)})).catch(this.resetInput)}this.readFile(i)}},readFile:function(t){var e=this,i=c(t,this.maxSize);if(Array.isArray(t)){var n=this.maxCount-this.fileList.length;t.length>n&&(t=t.slice(0,n)),Promise.all(t.map((function(t){return l(t,e.resultType)}))).then((function(n){var s=t.map((function(t,e){var i={file:t,status:"",message:""};return n[e]&&(i.content=n[e]),i}));e.onAfterRead(s,i)}))}else l(t,this.resultType).then((function(n){var s={file:t,status:"",message:""};n&&(s.content=n),e.onAfterRead(s,i)}))},onAfterRead:function(t,e){var i=this;this.resetInput();var n=t;if(e){var s=t;Array.isArray(t)?(s=[],n=[],t.forEach((function(t){t.file&&(t.file.size>i.maxSize?s.push(t):n.push(t))}))):n=null,this.$emit("oversize",s,this.getDetail())}var a=Array.isArray(n)?Boolean(n.length):Boolean(n);a&&(this.$emit("input",[].concat(this.fileList,r(n))),this.afterRead&&this.afterRead(n,this.getDetail()))},onDelete:function(t,e){var i=this;if(this.beforeDelete){var n=this.beforeDelete(t,this.getDetail(e));if(!n)return;if(Object(o["f"])(n))return void n.then((function(){i.deleteFile(t,e)})).catch(o["h"])}this.deleteFile(t,e)},deleteFile:function(t,e){var i=this.fileList.slice(0);i.splice(e,1),this.$emit("input",i),this.$emit("delete",t,this.getDetail(e))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onPreviewImage:function(t){var e=this;if(this.previewFullImage){var i=this.fileList.filter((function(t){return d(t)})),s=i.map((function(t){return t.content||t.url}));this.imagePreview=M(Object(n["a"])({images:s,startPosition:i.indexOf(t),onClose:function(){e.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var e=this.$createElement,i=t.status,n=t.message;if("uploading"===i||"failed"===i){var s="failed"===i?e(m["a"],{attrs:{name:"close"},class:A("mask-icon")}):e(g["a"],{class:A("loading")}),a=Object(o["c"])(n)&&""!==n;return e("div",{class:A("mask")},[s,a&&e("div",{class:A("mask-message")},[n])])}},genPreviewItem:function(t,e){var i=this,s=this.$createElement,a="uploading"!==t.status&&this.deletable,o=a&&s("div",{class:A("preview-delete"),on:{click:function(n){n.stopPropagation(),i.onDelete(t,e)}}},[s(m["a"],{attrs:{name:"cross"},class:A("preview-delete-icon")})]),r=this.slots("preview-cover",Object(n["a"])({index:e},t)),l=r&&s("div",{class:A("preview-cover")},[r]),c=d(t)?s(p["a"],{attrs:{fit:this.imageFit,src:t.content||t.url,width:this.previewSize,height:this.previewSize,lazyLoad:this.lazyLoad},class:A("preview-image"),on:{click:function(){i.onPreviewImage(t)}}},[l]):s("div",{class:A("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[s(m["a"],{class:A("file-icon"),attrs:{name:"description"}}),s("div",{class:[A("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),l]);return s("div",{class:A("preview"),on:{click:function(){i.$emit("click-preview",t,i.getDetail(e))}}},[c,this.genPreviewMask(t),o])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var e,i=this.slots(),s=t("input",{attrs:Object(n["a"])({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:A("input"),on:{change:this.onChange}});if(i)return t("div",{class:A("input-wrapper")},[i,s]);if(this.previewSize){var a=this.previewSizeWithUnit;e={width:a,height:a}}return t("div",{class:A("upload"),style:e},[t(m["a"],{attrs:{name:this.uploadIcon},class:A("upload-icon")}),this.uploadText&&t("span",{class:A("upload-text")},[this.uploadText]),s])}}},render:function(){var t=arguments[0];return t("div",{class:A()},[t("div",{class:A("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}})},b813:function(t,e,i){"use strict";var n=i("b775");e["a"]={searchHeadquartersDlData:function(t){return n["a"].post("/delivery/searchHeadquartersDlData",t)},saveHeadquartersDelivery:function(t){return n["a"].put("/delivery/saveHeadquartersDelivery",t)}}},bcd3:function(t,e,i){},c0c2:function(t,e,i){},e930:function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b"),i("bcd3")},f06a:function(t,e,i){"use strict";i("68ef"),i("fb6c")},f9ae:function(t,e,i){"use strict";function n(t){return t.forEach((function(t){var e=t.fileType.toLowerCase();t.image="png"===e||"jpg"===e||"jpeg"===e?1:0})),t}function s(){document.documentElement.style.overflow="hidden"}function a(){document.documentElement.style.overflow="scroll"}i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"b",(function(){return a}))},fb6c:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0fa371aa.8e8ca748.js.map