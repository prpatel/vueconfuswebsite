webpackJsonp([3],{2051:function(t,e,o){"use strict";var i="vueconf-splash-video-viewed";e.a={props:{videoUrl:{type:String,required:!0}},beforeMount:function(){var t=this;setTimeout(function(){t.$cookie&&(t.open=!t.$cookie.get(i))},4e3)},data:function(){return{open:!1}},methods:{close:function(){this.open=!1,this.$cookie.set(i,!1)}},computed:{autoplayUrl:function(){return this.videoUrl+"?autoplay=1"}}}},"6IQV":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,".splash-video[data-v-7d7cbd0a]{z-index:11;position:fixed;top:0;left:0;width:100vw;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:1}.splash-video[v-cloak][data-v-7d7cbd0a]{display:none}.splash-video .backdrop[data-v-7d7cbd0a]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;background-color:rgba(0,0,0,.7)}.splash-video .modal-window[data-v-7d7cbd0a]{background-color:transparent;max-height:100%;width:100%;max-width:80%;border-radius:4px;margin:0 20px;position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.splash-video .modal-window[data-v-7d7cbd0a],.splash-video .modal-window__button[data-v-7d7cbd0a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.splash-video .modal-window__button[data-v-7d7cbd0a]{width:32px;height:32px;padding:2px 0 0 2px;font-size:14px;position:absolute;top:-10px;right:-10px}.splash-video .modal-window__video[data-v-7d7cbd0a]{position:relative;padding-bottom:56.25%;padding-top:25px;height:0;width:100%;height:100%}.splash-video .modal-window__video iframe[data-v-7d7cbd0a]{position:absolute;top:0;left:0;width:100%;height:100%}.splash-video-enter-active[data-v-7d7cbd0a]{-webkit-transition:opacity .5s ease 1s;transition:opacity .5s ease 1s}.splash-video-leave-active[data-v-7d7cbd0a]{-webkit-transition:opacity .5s ease;transition:opacity .5s ease}.splash-video-enter[data-v-7d7cbd0a],.splash-video-leave-to[data-v-7d7cbd0a]{opacity:0}",""])},"7KvE":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,".cookies__container[data-v-3e22da97]{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:10px 0}.cookies__message[data-v-3e22da97]{font-size:16px;display:inline-block;margin:0}@media only screen and (min-width:640px){.cookies__message[data-v-3e22da97]{max-width:calc(100% - 180px)}}.button[data-v-3e22da97]{padding:8px 15px;font-size:16px;float:right;display:inline-block;margin-top:10px}.button--dark[data-v-3e22da97]{background:none;color:#35485e}",""])},AA7G:function(t,e,o){t.exports=o.p+"img/twitter.0caa945.svg"},AooT:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,'.footer{margin-top:40px;padding-top:70px;padding-bottom:30px;border-top:1px solid #e6e6e6}.footer__top{padding-bottom:40px}@media only screen and (min-width:640px){.footer__top{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}}.footer__logo{display:inline-block;vertical-align:middle}.footer__logo:before{content:"";background-image:url('+o("L3/a")+');margin-left:6px;display:inline-block;height:24px;width:119px;background-size:contain;background-repeat:no-repeat}.footer__list{list-style:none;padding:0;margin:0;font-size:22px}.footer__list li{line-height:1.4;font-weight:300}.footer__list a{font-weight:400;color:#3bb881;text-decoration:none}.footer__list.footer__list--small{font-size:20px}.footer__header{margin:15px 0;font-size:36px;font-weight:300;color:#35485e}.footer__bottom{font-size:20px;font-weight:400;line-height:36px;text-align:center;color:#35485e}.footer__bottom a{text-decoration:none;color:#35485e;white-space:nowrap}.footer__img{height:24px;display:inline-block;margin-bottom:-3px;margin-left:4px}.footer__copyright{font-size:13px;margin-top:0;color:#9d9d9d}.footer__legal{font-size:11px;line-height:1;margin-top:0;color:#9d9d9d}span.at:before{content:"@"}',""])},BhLQ:function(t,e,o){"use strict";function i(t){o("aX6c")}var n=o("SrYn"),a=o("s6PI"),s=o("VU/8"),r=i,c=s(n.a,a.a,!1,r,"data-v-3e22da97",null);e.a=c.exports},Bjak:function(t,e,o){var i=o("6IQV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("17aa916c",i,!0)},DPyA:function(t,e,o){t.exports=o.p+"img/github.140d562.svg"},FSM0:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar",class:t.isOpen&&"open"},[i("div",{staticClass:"navbar__container"},[i("nuxt-link",{staticClass:"navbar__logo",attrs:{to:"/"}},[i("img",{attrs:{src:o("oxjd"),width:"40",height:"36"}}),t._v("VueConf US")]),i("button",{staticClass:"navbar__burger",attrs:{type:"button"},on:{click:t.toggle}},[i("div",{staticClass:"bar"}),i("div",{staticClass:"bar"}),i("div",{staticClass:"bar"})]),i("nav",[i("ul",{staticClass:"navbar-nav",on:{click:t.toggle}},[i("li",{staticClass:"navbar-nav__item"},[i("nuxt-link",{attrs:{to:"/workshops"}},[t._v("Workshops")])],1),t._m(0)])])],1)])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"navbar-nav__item"},[o("a",{staticClass:"button",attrs:{href:"https://tickets.connectevents.io/events/vueconf2019/"}},[t._v("Register")])])}],a={render:i,staticRenderFns:n};e.a=a},HwcC:function(t,e,o){"use strict";function i(t){o("zvof")}var n=o("m5EH"),a=o("FSM0"),s=o("VU/8"),r=i,c=s(n.a,a.a,!1,r,null,null);e.a=c.exports},"L3/a":function(t,e,o){t.exports=o.p+"img/monterail-logotype.57219d9.svg"},Ma2J:function(t,e,o){"use strict";function i(t){o("Wjsq")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("YNiB"),a=o("pq0b"),s=o("VU/8"),r=i,c=s(n.a,a.a,!1,r,null,null);e.default=c.exports},SrYn:function(t,e,o){"use strict";(function(t){e.a={data:function(){return{cookiesAccepted:!0}},methods:{acceptCookies:function(){this.$cookie.set("cookiesAccepted",!0),this.cookiesAccepted=!0}},created:function(){t.BROWSER_BUILD&&(this.cookiesAccepted=!!this.$cookie.get("cookiesAccepted"))}}}).call(e,o("W2nU"))},WSIR:function(t,e,o){var i=o("AooT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("0b49f874",i,!0)},Wjsq:function(t,e,o){var i=o("ztKQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("58682a2f",i,!0)},YNiB:function(t,e,o){"use strict";var i=o("HwcC"),n=o("yqLL"),a=o("BhLQ"),s=o("exb8");e.a={components:{Navbar:i.a,FooterSection:n.a,Cookies:a.a,SplashVideo:s.a},head:{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},data:function(){return{}}}},aX6c:function(t,e,o){var i=o("7KvE");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("7499a590",i,!0)},cL0i:function(t,e,o){t.exports=o.p+"img/gitlab.732b7c4.svg"},"ef/I":function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,'.navbar{display:block;position:fixed;z-index:10;background:hsla(0,0%,100%,.8);border-bottom:1px solid #efefef;width:100%;padding:20px 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nav-target{position:absolute;top:-76px}.navbar__container{max-width:960px;padding:0 20px;margin:0 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar__logo{line-height:40px}.navbar__logo img{vertical-align:middle;margin-right:15px}.navbar-nav__item a,.navbar__logo{text-decoration:none;color:#445b71}.navbar-nav__item a.button,.navbar__logo.button{color:#fff}.navbar-nav{margin:0;padding:0;list-style:none}.navbar-nav__item{display:inline-block;vertical-align:middle;padding-left:25px;line-height:35px;text-transform:uppercase}.navbar-nav__item a{font-size:15px;font-weight:400}.navbar__burger{display:none;display:block;border:1px solid #ccc;border-radius:5px;height:30px;width:40px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;background:none}.navbar__burger .bar{position:relative;height:2px;margin-bottom:3px;background:#ccc;-webkit-transition:opacity .5s ease,-webkit-transform .5s ease;transition:opacity .5s ease,-webkit-transform .5s ease;transition:opacity .5s ease,transform .5s ease;transition:opacity .5s ease,transform .5s ease,-webkit-transform .5s ease}nav{position:absolute;left:100%;top:0}nav li{width:250px;padding-left:0!important;padding:0}nav li>a{padding:15px 25px;display:block}nav li+li{-webkit-box-shadow:0 -10px 0 -9px #eee;box-shadow:0 -10px 0 -9px #eee}nav .button{margin:20px auto;display:block;max-width:calc(100% - 100px)}.navbar,.navbar~*{-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.navbar.open,.navbar.open~*{-webkit-transform:translateX(-250px);transform:translateX(-250px)}.navbar.open .navbar__burger .bar:first-child,.navbar.open .navbar__burger .bar:nth-child(3){opacity:0}.navbar.open .navbar__burger .bar:nth-child(2){-webkit-transform:rotate(45deg) scale(.7);transform:rotate(45deg) scale(.7)}.navbar.open .navbar__burger .bar:nth-child(2):before{content:" ";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:#ccc;-webkit-transform:rotate(90deg);transform:rotate(90deg)}',""])},exb8:function(t,e,o){"use strict";function i(t){o("Bjak")}var n=o("2051"),a=o("zz+L"),s=o("VU/8"),r=i,c=s(n.a,a.a,!1,r,"data-v-7d7cbd0a",null);e.a=c.exports},m5EH:function(t,e,o){"use strict";e.a={data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},trackTicketsEvent:function(t){ga("send","event",{eventAction:"click",eventLabel:t.target.href,eventCategory:"Tickets link",transport:"beacon"}),_pq.push(["track","GoToTickets"]),fbq("trackCustom","GoToTickets",{source:"Navigation"})}}}},oxjd:function(t,e,o){t.exports=o.p+"img/vuelogo.318f73f.svg"},pq0b:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("navbar"),o("nuxt"),o("footer-section")],1)},n=[],a={render:i,staticRenderFns:n};e.a=a},rzxB:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"container__inner"},[o("div",{staticClass:"footer__top"},[t._m(0),o("ul",{staticClass:"footer__list footer__list--small"},[o("h3",{staticClass:"footer__header"},[t._v("Useful links")]),o("li",[o("nuxt-link",{attrs:{to:"/workshops"}},[t._v("Workshops")])],1),o("li",[o("nuxt-link",{attrs:{to:"/codeofconduct"}},[t._v("Code of Conduct")])],1)])]),t._m(1)])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"footer__list"},[o("h3",{staticClass:"footer__header"},[t._v("Contact")]),o("li",[t._v("Twitter: "),o("a",{attrs:{href:"https://twitter.com/vueconfus",target:"_blank"}},[o("span",{staticClass:"at"},[t._v("VueConfUS")])])]),o("li",[t._v("Email:"),o("a",[t._v(" hello"),o("span",{staticClass:"at"},[t._v("vueconf.us")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer__bottom"},[o("div",{staticClass:"footer__copyright"},[t._v("Copyright 2018-2019 ConnectEvents.io"),o("br")])])}],a={render:i,staticRenderFns:n};e.a=a},s6PI:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:!t.cookiesAccepted,expression:"!cookiesAccepted"}],staticClass:"cookies__container"},[o("div",{staticClass:"container__inner"},[o("p",{staticClass:"cookies__message"},[t._v("We use cookies to provide you with better user experience and for statistical purposes.\nYou can block cookies by adjusting settings on your browser. If you do not block cookies,\nyou give your consent to use them and store them in the memory of your device. For more information see our "),o("nuxt-link",{attrs:{to:"/privacypolicy"}},[t._v("Privacy Policy")]),t._v(".")],1),o("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.acceptCookies}},[t._v("Accept")]),o("button",{staticClass:"button button--dark",attrs:{type:"button"},on:{click:function(e){t.cookiesAccepted=!0}}},[t._v("Close")])])])},n=[],a={render:i,staticRenderFns:n};e.a=a},yqLL:function(t,e,o){"use strict";function i(t){o("WSIR")}var n=o("rzxB"),a=o("VU/8"),s=i,r=a(null,n.a,!1,s,null,null);e.a=r.exports},ztKQ:function(t,e,o){e=t.exports=o("FZ+f")(!1),e.push([t.i,"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}body,html{font-family:Source Sans Pro,sans-serif;font-size:100%;height:100%;color:#35485e;background-color:#f9f9f9}.container{margin:0 auto;padding-top:130px}.container__inner{max-width:960px;margin:auto;padding:0 20px}.center{text-align:center}.section{padding-top:80px;padding-bottom:80px;position:relative}.terms h1,.terms h2,.terms h3{text-align:center}.terms h1,.terms h2{margin-bottom:0}.terms h3{margin-top:0}.terms a,.terms a:visited{text-decoration:none;color:#3bb881}.page-enter-active,.page-leave-active{-webkit-transition:opacity .25s ease;transition:opacity .25s ease}.page-enter,.page-leave-active{opacity:0}.vueconf-logo{max-height:50vh}.icon{display:inline-block;vertical-align:middle;background-repeat:no-repeat}.icon--twitter{background-image:url("+o("AA7G")+");background-size:24px 19px;width:24px;height:19px}.icon--github{background-image:url("+o("DPyA")+")}.icon--github,.icon--gitlab{background-size:22px;width:22px;height:22px}.icon--gitlab{background-image:url("+o("cL0i")+")}.content{margin:0 -20px}h1,h2,h3,h4,p,ul{font-family:Source Sans Pro,sans-serif;color:#35485e}h1{font-size:28px;font-weight:300;margin-bottom:80px}@media only screen and (min-width:640px){h1{font-size:32px}}@media only screen and (min-width:1024px){h1{font-size:44px}}h2{font-size:24px;font-weight:300}@media only screen and (min-width:640px){h2{font-size:28px}}@media only screen and (min-width:1024px){h2{font-size:36px}}h3{font-size:22px;font-weight:600}@media only screen and (min-width:640px){h3{font-size:24px}}h4{font-size:20px;font-weight:600}@media only screen and (min-width:640px){h4{font-size:22px}}p{margin:20px 0 0;font-size:18px;font-weight:300;line-height:1.4}@media only screen and (min-width:640px){p{font-size:20px}}@media only screen and (min-width:1024px){p{font-size:22px}}ol,ul{margin:20px 0 0;font-size:18px;font-weight:300;line-height:1.4}@media only screen and (min-width:640px){ol,ul{font-size:20px}}@media only screen and (min-width:1024px){ol,ul{font-size:22px}}hr{border:none;border-top:1px solid #ddd}strong{font-weight:600}a{color:#3bb881}.button,a{text-decoration:none}.button{display:inline-block;vertical-align:middle;padding:10px 33px;background-color:#3eb882;color:#fff;font-family:Source Sans Pro,sans-serif;font-weight:300;font-size:20px;line-height:1.25;text-align:center;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;border-radius:20px;letter-spacing:.5px;-webkit-transition:background-color .3s ease;transition:background-color .3s ease}@media only screen and (min-width:640px){.button{font-size:22px}}.button:hover{background-color:#319267}.button--dark{font-size:20px;background-color:#35485e;border-radius:50px}.button--dark:hover{background-color:#47617f}.button[disabled]{background-color:#afd0c1}.button--small{font-size:14px;padding:7px 20px;font-weight:400;letter-spacing:1px}.form__label{display:inline-block;font-size:32px;font-family:Source Sans Pro,sans-serif;vertical-align:middle;line-height:59px}.form__input{position:relative;width:100%;padding:15px 25px;font-size:18px;font-weight:300;color:#636970;border:1px solid #ddd;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50px;outline:0}.header{max-width:960px;margin:0 auto;padding:0 15px}.post-section__header{z-index:2;position:relative;font-size:28px;color:#35485e;font-weight:300;margin-top:0}@media only screen and (min-width:640px){.post-section__header{font-size:32px}}@media only screen and (min-width:1024px){.post-section__header{font-size:38px}}.post-section{text-align:center}.post-section__button{margin:25px 0 0;border-radius:50px}@media only screen and (min-width:640px){.post-section__button{margin:35px 0 0}}@media only screen and (min-width:1024px){.post-section__button{margin:35px 0 0}}",""])},zvof:function(t,e,o){var i=o("ef/I");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("rjj0")("2cd495ea",i,!0)},"zz+L":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"splash-video"}},[t.open?o("div",{staticClass:"splash-video"},[o("div",{staticClass:"backdrop"}),o("div",{staticClass:"modal-window"},[o("div",{staticClass:"modal-window__video"},[o("iframe",{attrs:{width:"853",height:"480",src:t.autoplayUrl,frameborder:"0",allowfullscreen:""}})]),o("button",{staticClass:"modal-window__button button",on:{click:t.close}},[t._v("✕")])])]):t._e()])},n=[],a={render:i,staticRenderFns:n};e.a=a}});
//# sourceMappingURL=default.7cfecc39ff0d19790a2e.js.map