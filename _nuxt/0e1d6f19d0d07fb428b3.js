(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){"use strict";var s=a(2),n=a(16),i=a(18),o=a(92),r=a(45),l=a(10),c=a(46).f,p=a(66).f,d=a(8).f,u=a(178).trim,h=s.Number,m=h,g=h.prototype,f="Number"==i(a(65)(g)),b="trim"in String.prototype,w=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){var a,s,n,i=(t=b?t.trim():u(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+t}for(var o,l=t.slice(2),c=0,p=l.length;c<p;c++)if((o=l.charCodeAt(c))<48||o>n)return NaN;return parseInt(l,s)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(f?l(function(){g.valueOf.call(a)}):"Number"!=i(a))?o(new m(w(t)),a,h):w(t)};for(var v,k=a(7)?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)n(m,v=k[y])&&!n(h,v)&&d(h,v,p(m,v));h.prototype=g,g.constructor=h,a(11)(s,"Number",h)}},178:function(e,t,a){var s=a(6),n=a(17),i=a(10),o=a(179),r="["+o+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),p=function(e,t,a){var n={},r=i(function(){return!!o[e]()||"​"!="​"[e]()}),l=n[e]=r?t(d):o[e];a&&(n[a]=l),s(s.P+s.F*r,"String",n)},d=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=p},179:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},180:function(e,t,a){var s=a(239);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(15).default)("91e85dbe",s,!0,{})},181:function(e,t,a){var s=a(241);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(15).default)("c7f672e2",s,!0,{})},182:function(e,t,a){var s=a(243);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(15).default)("3edf5b37",s,!0,{})},203:function(e,t,a){"use strict";a(177),a(236);var s={mounted:function(){document.body.style="overflow: hidden"},beforeDestroy:function(){document.body.style=""}},n=(a(238),a(4)),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.$emit("close")}}},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[e._t("header")],2),e._v(" "),a("div",{staticClass:"modal-body"},[e._t("body")],2),e._v(" "),a("div",{staticClass:"modal-footer"},[e._t("footer")],2)]),a("button",{staticClass:"button-secondary modal-button",on:{click:function(t){e.$emit("close")}}},[e._v("Close")])])])])},[],!1,null,"16b29cac",null);i.options.__file="Modal.vue";var o={components:{Modal:i.exports},props:{speaker:{type:Object,required:!0},adjustImgUrl:{type:Boolean,default:!1}},data:function(){return{modalVisible:!1}},methods:{showDetails:function(){this.speaker.link?this.$router.push("/workshops?focus=".concat(this.speaker.link)):this.modalVisible=!0}},computed:{image:function(){return this.adjustImgUrl?"/../".concat(this.speaker.img):this.speaker.img}}},r=(a(240),Object(n.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"speaker__container"},[e.modalVisible?a("modal",{on:{close:function(t){e.modalVisible=!1}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("div",{staticClass:"speaker__large"},[a("img",{staticClass:"speaker__image",attrs:{src:e.image,alt:e.speaker.name}}),a("div",{staticClass:"speaker__aside"},[a("div",{staticClass:"speaker__title"},[e._v(e._s(e.speaker.name))]),a("div",{staticClass:"speaker__sessionTitle"},[e._v(e._s(e.speaker.sessionTitle))]),a("div",{staticClass:"speaker__sessionAbstract"},[e._v(e._s(e.speaker.sessionAbstract))]),a("div",{staticClass:"speaker__social"})])]),a("div",{staticClass:"speaker__bio"},[e._v(e._s(e.speaker.title))])]),e.speaker.quote?a("blockquote",{staticClass:"speaker__quote"},[e._v(e._s(e.speaker.quote)),a("cite",[e._v(e._s(e.speaker.name))])]):e._e()]):e._e(),a("div",{staticClass:"speaker",on:{click:e.showDetails}},[a("img",{staticClass:"speaker__image",attrs:{src:e.image,alt:e.speaker.name}}),a("div",{staticClass:"speaker__aside"},[a("div",{staticClass:"speaker__details"},[a("div",{staticClass:"speaker__description"},[a("div",{staticClass:"speaker__title"},[e._v(e._s(e.speaker.name))]),a("div",{staticClass:"speaker__subtitle"},[e._v(e._s(e.speaker.sessionTitle))])]),a("div",{staticClass:"speaker__links"},[a("div",{staticClass:"speaker__social"},[e.speaker.gitlab?a("a",{staticClass:"icon icon--gitlab",attrs:{href:e.speaker.gitlab,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e(),e.speaker.github?a("a",{staticClass:"icon icon--github",attrs:{href:e.speaker.github,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e(),e.speaker.twitter?a("a",{staticClass:"icon icon--twitter",attrs:{href:e.speaker.twitter,target:"_blank"},on:{click:function(e){e.stopPropagation()}}}):e._e()]),a("button",{staticClass:"button-secondary",on:{click:function(t){return t.stopPropagation(),e.showDetails(t)}}},[e._v("Learn more")])])])])])],1)},[],!1,null,null,null));r.options.__file="Speaker.vue";var l={components:{Speaker:r.exports},props:{limit:{type:Number,default:999},speakers:{type:Array,required:!0},adjustImgUrl:{type:Boolean,default:!1}},computed:{speakersList:function(){return this.speakers.slice(0,this.limit)}}},c=(a(242),Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"speakers-list"},[a("transition-group",{staticClass:"speaker-list-container",attrs:{name:"fade",tag:"div"}},e._l(e.speakersList,function(t){return a("speaker",{key:t.name,staticClass:"fade",attrs:{speaker:t,"adjust-img-url":e.adjustImgUrl}})}),1)],1)},[],!1,null,null,null));c.options.__file="SpeakersList.vue";t.a=c.exports},206:function(e,t,a){"use strict";t.a=[{sessionTitle:"State of Vuenation",sessionAbstract:"Creator of Vue, Evan You, will open the conference with an update on all thing Vue.js",twitter:"https://twitter.com/youyuxi",name:"Evan You",title:"Creator of Vue.js ",img:"https://cfp.connectevents.io/system/avatars/1107/large/499550.jpeg?1515104079"},{sessionTitle:"Run Your Vue and Node App Anywhere",sessionAbstract:"You built your Vue app but does it run everywhere? We'll explore how to a Vue frontend with a Node.js backend can be structured in a mono-repo, how to build them, debug them together, and how to set it up with Docker. We'll debug the app running in Docker, stream the logs, and deploy it to the cloud - ultimately showing how you can run your Vue app anywhere!",twitter:"https://twitter.com/john_papa",name:"John Papa",title:"John Papa is a dedicated a father and husband, a Web Developer with Microsoft, and an alumnus of the Google Developer Expert, Microsoft RD and MVP programs. His passions are coding and teaching modern web technologies and enjoying everything Disney with his family. John is a co-host of the Adventures in Angular and Views on Vue podcasts, author of the Angular Style Guide, and many popular Pluralsight courses.\r\n\r\nYou can reach John on twitter at @john_papa.",img:"https://cfp.connectevents.io/system/avatars/1733/large/code-beach.jpg?1541453777"},{sessionTitle:"The Future of Animation in Vue",sessionAbstract:"Take animation to the next level, including use of soon-to-be-released browser features and upcoming changes to transitions and animation in Vue 3!",twitter:"https://twitter.com/@sarah_edo",name:"Sarah Drasner",title:"Sarah Drasner is an award-winning Speaker, Senior Developer Advocate at Microsoft, and Staff Writer at CSS-Tricks. Sarah is also the co-founder of Web Animation Workshops, with Val Head. She’s the author of SVG Animations from O’Reilly and has given Frontend Masters workshops on Vue.js and Advanced SVG Animations. Sarah is formerly Manager of UX Design & Engineering at Trulia (Zillow).",img:"https://cfp.connectevents.io/system/avatars/1151/large/97cssCek_400x400.jpg?1513436066"},{sessionTitle:"Ionic & Vue for fast mobile apps",sessionAbstract:"Vue as a framework prides itself for providing an excellent developer experience out of the box so devs can build awesome apps with it. Ionic as a component library shares these same values while providing a great UI for any kind of app. In this talk, we'll look at how we can use Ionic and Vue together to quickly create a compelling mobile application that can be deployed to the iOS, Android, and the Web.",twitter:"https://twitter.com/mhartington",name:"Mike Hartington",title:"Mike is a Developer on the Ionic Framework team, as well as a GDE in Angular, Web Technologies, and Firebase. Aside from technologies, Mike loves a good beer and building cool things.",img:"https://cfp.connectevents.io/system/avatars/439/large/mike-headshot-2.png?1544211553"},{sessionTitle:"Advanced animations with Vue.js",sessionAbstract:"In this talk, I’ll walk you through the coolest features of Vue.js and explore how to combine them with advanced CSS animations and transitions in order to create fancy interactive animations. We'll dive into a game built with Vue.js and how to apply similar techniques to spice up real-world applications.",twitter:"https://twitter.com/@krystalcampioni",name:"Krystal Campioni",title:"Senior Front-end Developer @Shopify. Giphy and Whale fluent speaker. Tech, design, and ufology enthusiast.",img:"https://cfp.connectevents.io/system/avatars/1686/large/krystal.jpeg?1540114595"},{sessionTitle:"Dynamic CSS with Vue",sessionAbstract:"CSS has come a long way since the browser wars of the late 90s. What used to be a struggle, is now often a breeze (see box-shadow or border-radius). But the last 2 years have pushed CSS into entirely new territory: with DOM-aware variables and calculations that can drive your design.\r\n\r\nWe can inject data directly into our themes and layouts, but where does that data come from, and how do we safely wire it up? Vue provides all the tools we need, but first we have to understand the possibilities and constraints. We'll cover…\r\n\r\nThe basics for understanding CSS custom properties, grid, and calc().\r\nPractical examples and use-cases for data-infused design.\r\nHow dynamic CSS & JS work together in this new paradigm.\r\nRobust patterns for managing themes, layouts, and more from Vue.",twitter:"https://twitter.com/mirisuzanne",name:"Miriam E Suzanne",title:"Miriam is an author, performer, musician, designer, and web developer — working with OddBird, Teacup Gorilla, Grapefruit Lab, and CSS Tricks. She’s the author of Riding SideSaddle* and The Post-Obsolete Book, co-author of Jump Start Sass (Sitepoint), and creator of the Susy and True open source tools.",img:"https://cfp.connectevents.io/system/avatars/1142/large/miriam.jpg?1543891975"},{sessionTitle:"Building desktop applications with Vue",sessionAbstract:"With Vue framework your experience is not limited to web or mobile applications - you can create a desktop app as well! Let's check what options do we have to create one...",twitter:"https://twitter.com/@n_tepluhina",name:"Natalia Tepluhina",title:"Frontend Developer with a passion to VueJS. Vue Vixens CTO",img:"https://cfp.connectevents.io/system/avatars/1237/large/natalia.jpg?1529377889"},{sessionTitle:"Web Accessibility with VueJS",sessionAbstract:"Want to learn about Web Accessibility with Vue.js?\r\n\r\nA Board Certified Assistant Behavior Analyst turned Web Developer gives you a different take on accessibility and why it is important. Web Accessibility is a way to make everyone - regardless of hardware, software, language, location, or ability - have access to the web and internet in whole. Let's use Vue.js to create accessible web apps!",twitter:"https://twitter.com/vueconfus",name:"Maria Lamardo",title:"My name is Maria Lamardo. I am originally from Caracas, Venezuela and currently reside in North Carolina. I graduated cum laude from Florida International University where I received a Bachelor’s in Psychology and a minor in business. I provided behavioral therapy for children with developmental disabilities for 8 years as a Board Certified Assistant Behavior Analyst. Now, as a software developer, I am very passionate about the importance of web accessibility.",img:"https://cfp.connectevents.io/system/avatars/1699/large/maria.jpeg?1543892057"},{sessionTitle:"5 Brain Science Hacks to Successfully Level up in Programming",sessionAbstract:"Leveling up in programming can be downright infuriating, time consuming & expensive. Take the frustration out of the equation with these 5 hacks based on research in educational psychology (brain science) applied to coding. Save money, time, and aggravation while expanding your knowledge base.\r\n\r\n",twitter:"https://twitter.com/fwallacephd",name:"Dr. Faith H. Wallace",title:"Web Developer. Professor. Writer. Hogwarts Student. Doctor Who Companion. Okay, so maybe I am not a student at Hogwarts… I am sure I'd be sorted into Ravenclaw! And, maybe I am not a Doctor Who companion… But wouldn’t time traveling in the TARDIS be amazing? I am a former college professor turned web developer with the goal of making teaching and learning code more accessible.",img:"https://cfp.connectevents.io/system/avatars/1198/large/faith.jpg?1543892160"},{sessionTitle:"How do you Vue?",sessionAbstract:"Vue core team member Chris Fritz will dive into practical tips n' tricks for developing great Vue applications!",twitter:"https://twitter.com/chrisvfritz",name:"Chris Fritz",title:"Educator/hacker working to make web dev simpler. Vue core team member and curator of our docs.",img:"https://cfp.connectevents.io/system/avatars/978/large/rMSXLIWW_400x400.jpg?1515104982"},{sessionTitle:"Vuex Explained Visually",sessionAbstract:"Understand Vue's state management pattern through a visual walkthrough.",twitter:"https://twitter.com/adamjahr",name:"Adam Jahr",title:"Adam Jahr is co-founder and instructor over at VueMastery.com, where he releases weekly Vue.js video tutorials and articles. He also hosts the Official Vue News podcast, covering the latest news and libraries in the Vue.js ecosystem. ",img:"https://cfp.connectevents.io/system/avatars/1685/large/adam.jpg?1543880130"},{sessionTitle:"9 performance secrets revealed",sessionAbstract:"With these 9 secrets revealed to you, take the performance of your app to the next level and make your users happy!",twitter:"https://twitter.com/akryum",name:"Guillaume Chau",title:"Vue Core member, Open Source contributor in the Vue, Meteor and Apollo GraphQL communities",img:"https://cfp.connectevents.io/system/avatars/988/large/avatar.jpg?1529570442"},{sessionTitle:"Phenomenal Design Patterns In Vue",sessionAbstract:"Jacob provides a high level overview of common features that can be solved with time tested design patterns from the Gang of Four and mixed with Vue with Vuex to solve common problems like:\r\nThe Memento for undo and redo\r\nThe Bridge for an awesome drawing API\r\nThe Decorator for making games with\r\nThe Builder for your fast food ordering system\r\nAnd many more.\r\nThe best part is you'll still use Vuex to manage your global state and Vue to manage your reactivity, but also add in some sweet design patterns to quickly solve tougher common programming problems.\r\nIt's not always easy to figure out where these classic design patterns fit in a modern framework like Vue which has solved many specific problems already, but Jacob will show you how they fit in perfectly",twitter:"https://twitter.com/jakecodes",name:"Jacob Schatz",title:"Jacob Schatz started the frontend team at GitLab. He quickly realized  the endless possibilities at GitLab. Jacob's code has reached millions of people, from making sites for Panera Bread, CVS, Weight Watchers and of course, GitLab, to his person fun projects like MyCaseBuilder. He has been programming since 2006, and has a degree in piano performance. He has also published 2 books, and tons of tutorials and courses.",img:"https://cfp.connectevents.io/system/avatars/1016/large/jacobschatz.jpg?1510619506"},{sessionTitle:"Demystifying: the dark art of SFC compilation",sessionAbstract:"Vue single file components empowers developers with ability to write declarative render functions using plain HTML-like syntax. The so called SFCs also provide features like collocation and scoped styles. We tend to use these SFCs effortlessly as any other JavaScript file but to reach that level of ease, Vue does the heavy lifting of transpilation. This talk takes a deep dive in the compilation process of Vue components and explains how to write a custom block processor. It also discovers some less known facts about SFCs.",twitter:"https://twitter.com/znck0",name:"Rahul Kadyan",title:"",img:"https://cfp.connectevents.io/system/avatars/983/large/me.jpg?1522970914"},{sessionTitle:"Building fast and semantic input masks in VueJS",sessionAbstract:"Input masking is a common pattern in form design that guide users to enter information in the correct format in a consistent manner. Typically this involves formatting user input according to the type of data they represent like dates, phone numbers, addresses and credit card numbers. You can achieve an input mask in Vue by leaning heavily Vue’s reactivity system chiefly methods, computed, and watchers. In this talk, we will cover the distinction between the various components that make up Vue’s reactivity system and how to leverage it in order to create semantic and robust input elements that respond seamlessly to user feedback.",twitter:"https://twitter.com/shortdiv",name:"Divya Sasidharan",title:"",img:"https://cfp.connectevents.io/system/avatars/1122/large/divya.jpg?1543880162"},{sessionTitle:"Back to the Vueture: Stuck in the Event Loop with a Trash Brain",sessionAbstract:'Do you feel like you\'re stuck in the event loop of hell, forced to fumble through setTimeout after setTimeout day after day when all you want to do is leap out of bed singing "I got Vue babe" and wielding nextTick in style? Join us as we dive into the source code of nextTick and microtasks and make nextTick work for you today!',twitter:"https://twitter.com/@halftes6",name:"tessa",title:"Tessa is an artist and software engineer whose idea of a good time includes creating UI components and comic book layouts and watching movies with her guinea pig.",img:"https://cfp.connectevents.io/system/avatars/1749/large/tessa.jpg?1542662000"},{sessionTitle:"Getting started with Nuxt.js ",sessionAbstract:"So you know the Vue basics but keep on hearing about this Nuxt.js framework.  Perhaps you’re wondering if you should use it on your next project?  In this talk Gregg Pollack will visually explain why you should care about Nuxt and cover all the basics of using the framework to create scalable Vue applications.  By the end you’ll see why Gregg describes Nuxt.js as: production ready Vue which helps you employ best practices as you build.",twitter:"https://twitter.com/greggpollack",name:"Gregg Pollack",title:"Gregg Pollack is the founder of Vue Mastery, the ultimate learning resource for Vue Developers.  Previously he founded Code School, an online software programming school which was acquired by Pluralsight, Envy, a web application development firm, and Starter Studio, Orlando's first technical accelerator now in its eighth class.  He’s passionate about being a father, teaching programming, traveling the world, organizational psychology, and attending theater.",img:"https://cfp.connectevents.io/system/avatars/1059/large/GreggPollack-Square-New.jpg?1513615639"},{sessionTitle:"Vue.js In Practice at Optoro",sessionAbstract:"We've learned a lot since deploying our first Vue.js app in production over one year ago. I'd love to share our experience shipping Vue.js to desktop and mobile devices and leveling up our engineering team in the process. I'll discuss lessons learned from deprecating AngularJS and Bower to adopting Vue.js and deploying an internal NPM repo. I'll talk about the benefits we've seen with Vue.js by providing real stories from the volunteers that upgraded our tooling and the engineers that build the apps today. This is how Optoro upgraded its enterprise front-ends with Vue.js.",twitter:"https://twitter.com/@krawchyk",name:"Andrew Krawchyk",title:"",img:"https://cfp.connectevents.io/system/avatars/1735/large/andrew.jpeg?1545160328"}]},236:function(e,t,a){"use strict";a(237)("link",function(e){return function(t){return e(this,"a","href",t)}})},237:function(e,t,a){var s=a(6),n=a(10),i=a(17),o=/"/g,r=function(e,t,a,s){var n=String(i(e)),r="<"+t;return""!==a&&(r+=" "+a+'="'+String(s).replace(o,"&quot;")+'"'),r+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(r),s(s.P+s.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},238:function(e,t,a){"use strict";var s=a(180);a.n(s).a},239:function(e,t,a){(e.exports=a(14)(!1)).push([e.i,"\n.modal-mask[data-v-16b29cac]{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3);display:table;transition:opacity .3s ease\n}\n.modal-wrapper[data-v-16b29cac]{display:table-cell;vertical-align:middle\n}\n.modal-container[data-v-16b29cac]{max-width:650px;position:relative;width:100%;max-height:72vh;overflow:auto;box-sizing:border-box;margin:40px auto 0;padding:20px 20px 0;background-color:#fff;border-radius:5px;box-shadow:0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);transition:all .3s ease\n}\n@media only screen and (min-width:640px){\n.modal-container[data-v-16b29cac]{padding:40px 40px 0\n}\n}\n.modal-body[data-v-16b29cac]{padding-bottom:20px\n}\n@media only screen and (min-width:640px){\n.modal-body[data-v-16b29cac]{padding-bottom:40px\n}\n}\n.modal-footer[data-v-16b29cac]{text-align:right\n}\n.modal-header h3[data-v-16b29cac]{margin-top:0;color:#42b983\n}\n.modal-enter[data-v-16b29cac],.modal-leave-active[data-v-16b29cac]{opacity:0\n}\n.modal-enter .modal-container[data-v-16b29cac],.modal-leave-active .modal-container[data-v-16b29cac]{-webkit-transform:scale(1.1);transform:scale(1.1)\n}\n.modal-button[data-v-16b29cac]{background:#fff;padding:20px;margin:0 auto;display:block;box-shadow:0 18px 35px rgba(50,50,93,.1),0 8px 15px rgba(0,0,0,.07);border-bottom-left-radius:5px;border-bottom-right-radius:5px\n}",""])},240:function(e,t,a){"use strict";var s=a(181);a.n(s).a},241:function(e,t,a){(e.exports=a(14)(!1)).push([e.i,'\n@charset "UTF-8";\n.speaker__container{width:calc(100% - 20px);display:inline-block;margin:10px;position:relative;text-align:left\n}\n@media only screen and (min-width:640px){\n.speaker__container{width:calc(50% - 20px)\n}\n}\n.speaker{display:flex;width:100%;height:130px;background:#fff;border-radius:5px;text-align:left;box-shadow:0 15px 35px rgba(50,50,93,.03),0 5px 15px rgba(0,0,0,.06);cursor:pointer;transition:all .15s ease\n}\n.speaker:hover{box-shadow:0 15px 35px rgba(50,50,93,.07),0 5px 15px rgba(0,0,0,.1)\n}\n.speaker__image{height:100%;display:inline-block;padding:0;vertical-align:top;margin-right:20px;border-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0\n}\n@media only screen and (min-width:640px){\n.speaker__image{max-width:140px\n}\n}\n.speaker__aside{vertical-align:top;max-width:calc(100% - 120px)\n}\n@media only screen and (min-width:640px){\n.speaker__aside{max-width:calc(100% - 160px)\n}\n}\n.speaker__details{display:flex;flex-direction:column;justify-content:space-between;height:100%\n}\n.speaker__title{margin-top:12px;font-size:14px;letter-spacing:.8px;font-weight:600;color:#35485e;text-transform:uppercase\n}\n@media only screen and (min-width:640px){\n.speaker__title{font-size:18px\n}\n}\n.speaker__sessionTitle{font-size:20px;margin-bottom:10px\n}\n.speaker__sessionTitle,.speaker__sessionTitle .speaker__sessionAbstract{font-weight:300;color:#495669;word-break:break-words;white-space:pre-line;margin-top:10px\n}\n.speaker__sessionTitle .speaker__sessionAbstract{font-size:12px;margin-bottom:30px\n}\n.speaker__subtitle{font-size:12px;font-weight:300;color:#8795a9;word-break:break-words;white-space:pre-line\n}\n@media only screen and (min-width:640px){\n.speaker__subtitle{font-size:16px\n}\n}\n.speaker__large .speaker__aside{max-width:calc(100% - 160px)\n}\n@media only screen and (min-width:640px){\n.speaker__large .speaker__aside{max-width:calc(100% - 260px)\n}\n}\n.speaker__large .speaker__image{max-width:140px;border-top-right-radius:5px;border-bottom-right-radius:5px\n}\n@media only screen and (min-width:640px){\n.speaker__large .speaker__image{max-width:240px\n}\n}\n.speaker__large .speaker__title{font-size:28px;text-transform:none\n}\n.speaker__large .speaker__subtitle{font-size:18px\n}\n.speaker__bio,.speaker__quote{margin-top:20px;font-size:16px;font-weight:300;color:#495669\n}\n@media only screen and (min-width:640px){\n.speaker__bio,.speaker__quote{font-size:18px\n}\n}\n.speaker__quote{margin:20px 0 0;font-style:italic\n}\n.speaker__quote cite{display:block;margin-top:10px\n}\n.speaker__quote cite:before{content:"\\2014   "\n}\n.speaker__links{display:flex;margin-bottom:12px\n}\n.speaker__links .speaker__social{margin-top:0\n}\n.speaker__links .button-secondary{position:static;line-height:22px\n}\n.speaker__social{margin-top:4px\n}\n@media only screen and (min-width:640px){\n.speaker__social{margin-top:10px\n}\n}\n.speaker__social .icon--twitter{margin-left:10px\n}\n.speaker__social .icon:first-child{margin-left:0\n}\n.speaker .button-secondary{position:absolute;right:10px;display:none\n}\n@media only screen and (min-width:640px){\n.speaker .button-secondary{display:inline-block\n}\n}\n.button-secondary{background:none;border:none;text-transform:uppercase;padding:0;line-height:15px;font-size:15px;font-weight:400;color:#3bb881;letter-spacing:.8px\n}\n.button-secondary:hover{background:#f8f8f8\n}',""])},242:function(e,t,a){"use strict";var s=a(182);a.n(s).a},243:function(e,t,a){(e.exports=a(14)(!1)).push([e.i,"\n.speakers-list{margin:0 -10px\n}\n.speaker-list-container{display:flex;flex-wrap:wrap\n}\n.fade{opacity:1;transition:opacity .2s ease-in-out\n}\n.fade-enter-active,.fade-leave-active{opacity:0\n}",""])}}]);