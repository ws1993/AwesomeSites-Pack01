(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{402:function(e,t,r){"use strict";var o=r(4),n=(r(44),r(52),r(21),r(18),r(16),r(17),r(24),r(12),r(25),r(65));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={transition:{css:!1,enter:function(e,t){var r=this,o=!this.$route.name.includes("story"),d=!this.$store.state.experience.easterEggTransition,animate=function(){n.b.fromTo(e,c({opacity:0,autoAlpha:0},o&&{y:d?-100:0}),c(c({opacity:1,autoAlpha:1},o&&{y:0}),{},{ease:"power2.out",duration:.5,delay:d?.3:.6,clearProps:"transform",onComplete:function(){r.$store.state.showCookieBanner||"waiting"!==r.$store.state.cookieStatus||r.$store.commit("setShowCookieBanner",!0),t()}}))};this.$store.state.hasExperience?this.$nuxt.$once("experienceReady",(function(){d&&r.$nuxt.$emit("pageEnter"),animate()})):(animate(),d&&this.$nuxt.$emit("pageEnter"))},leave:function(e,t){var r=this,o=!this.$store.state.experience.easterEggTransition;o&&this.$nuxt.$emit("pageLeave"),this.$store.state.showCookieBanner&&this.$store.commit("setShowCookieBanner",!1),n.b.fromTo(e,{opacity:1,y:0,scaleY:1},{opacity:0,y:o?100:0,ease:"power3.out",duration:1.2,delay:.1,clearProps:"transform",onComplete:function(){r.$store.commit("setHeaderTheme","dark"),t()}})}}}},412:function(e,t,r){"use strict";r(18),r(17),r(24),r(12),r(25);var o=r(86),n=r(4);r(51),r(16),r(56),r(265);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={head:function(){var e=this.$nuxtI18nHead({addSeoAttributes:!0}),t=this.$store.state.settings.seo;return this.seo&&(t=this.seo),{title:t.title,htmlAttrs:c({},e.htmlAttrs),meta:[{hid:"title",name:"title",content:t.title},{hid:"description",name:"description",content:t.description},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:t.title},{hid:"twitter:description",name:"twitter:description",content:t.description},{hid:"twitter:image",name:"twitter:image",content:t.socialImages.twitter&&t.socialImages.twitter.url},{hid:"og:title",name:"og:title",content:t.title},{hid:"og:description",name:"og:description",content:t.description},{hid:"og:type",name:"og:type",content:"website"},{hid:"og:image",name:"og:image",content:t.socialImages.og&&t.socialImages.og.url},{hid:"og:url",name:"og:url",content:"www.madbox.io"}].concat(Object(o.a)(e.meta)),link:Object(o.a)(e.link)}}}},532:function(e,t,r){var content=r(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(43).default)("642f4ef4",content,!0,{sourceMap:!1})},659:function(e,t,r){"use strict";r(532)},660:function(e,t,r){var o=r(42)(!1);o.push([e.i,'.o-gamesHero[data-v-388d1354]{flex-direction:column;min-height:100vh;align-items:flex-start}.o-gamesHero[data-v-388d1354],.o-gamesHero__heroContainer[data-v-388d1354]{position:relative;width:100%;justify-content:center}.o-gamesHero__heroContainer[data-v-388d1354]{height:calc(100vh - 21.875rem);min-height:25rem;display:flex;align-items:center;background-size:contain;background-repeat:no-repeat;background-position:bottom}@media(min-width:959px){.o-gamesHero__heroContainer[data-v-388d1354]{min-height:31.25rem}}.o-gamesHero__heroContainer__img[data-v-388d1354]{position:absolute;bottom:-10%;left:-10%;width:120%}@media(min-width:959px){.o-gamesHero__heroContainer__img[data-v-388d1354]{bottom:-40%;left:0;max-width:100%;width:100%}}.o-gamesHero__title[data-v-388d1354]{text-align:center;justify-content:center;font-size:3.75rem;padding:0 1rem .625rem;color:var(--white)}@media(min-width:959px){.o-gamesHero__title[data-v-388d1354]{font-size:5.625rem}}.o-gamesHero__featuredGamesWrapper[data-v-388d1354]{position:relative;width:100%;padding-bottom:1.25rem}.o-gamesHero__featuredGamesWrapper[data-v-388d1354]:before{content:"";display:block;position:absolute;top:21.875rem;background:var(--white);bottom:0;right:0;left:0}.o-gamesHero__featuredGames[data-v-388d1354]{box-sizing:border-box;width:calc(100vw - 2.5rem);overflow:hidden;position:relative;z-index:1;border-radius:24px;background-color:var(--white);padding-top:3.125rem;padding-bottom:4.8125rem}@media(min-width:959px){.o-gamesHero__featuredGames[data-v-388d1354]{padding-top:6.25rem;padding-bottom:9.0625rem}}@media(min-width:1439px){.o-gamesHero__featuredGames[data-v-388d1354]{padding-left:3.75rem;padding-right:3.75rem}}.o-gamesHero__featuredGames__header[data-v-388d1354]{position:relative;z-index:2;grid-column:start/end;text-align:center}@media(min-width:1023px){.o-gamesHero__featuredGames__header[data-v-388d1354]{grid-column:4/span 8}}.o-gamesHero__featuredGames__title[data-v-388d1354]{font-size:2.625rem;padding-bottom:2.625rem}@media(min-width:959px){.o-gamesHero__featuredGames__title[data-v-388d1354]{font-size:4.375rem}}.o-gamesHero__featuredGames__description[data-v-388d1354]{padding:0 1rem 5.25rem;opacity:0;transform:translateY(50px);transition:all .5s cubic-bezier(.175,.885,.32,1.275)}.o-gamesHero__featuredGames__description.-visible[data-v-388d1354]{opacity:1;transform:translateY(0)}.o-gamesHero__featuredGames__item[data-v-388d1354]{grid-column:start/end}.o-gamesHero__featuredGames__item[data-v-388d1354]:not(:last-child){margin-bottom:6.25rem}',""]),e.exports=o},797:function(e,t,r){"use strict";r.r(t);r(16),r(56);var o=r(65),n={components:{LazyResponsiveImg:r(370).default},props:{title:{type:String,required:!0},subtitle:{type:String,required:!0},description:{type:String,default:null},featuredGames:{type:Array,required:!0},backgroundImg:{type:Object,default:null},downloadLabel:{type:String,default:"Download now"}},methods:{visibilityChanged:function(e){var t=this;if(e){var r=o.b.timeline();r.add(this.$refs.title.enter({staggerAmount:.2})),r.fromTo(this.$refs.card,{autoAlpha:0,y:300},{autoAlpha:1,y:0,ease:"back.out(1.2)"},.3),r.add(this.$refs.subtitle.enter({staggerAmount:.2}),.6),r.fromTo(this.$refs.bgImg.$el,{autoAlpha:0,y:100,scale:0},{autoAlpha:1,y:0,scale:1,ease:"back.out(1.2)"},.5),r.add((function(){t.$refs.description.classList.add("-visible")}),1.2)}}}},d=(r(659),r(5)),component=Object(d.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:e.visibilityChanged,once:!0,intersection:{rootMargin:"0px",threshold:.1}},expression:"{\n    callback: visibilityChanged,\n    once: true,\n    intersection: {\n      rootMargin: '0px',\n      threshold: 0.1\n    }\n  }"}],staticClass:"o-gamesHero bluePurple-bg-gradient"},[r("div",{staticClass:"o-gamesHero__heroContainer"},[r("LazyResponsiveImg",{ref:"bgImg",staticClass:"o-gamesHero__heroContainer__img",attrs:{dimensions:e.backgroundImg.dimensions,src:e.backgroundImg.url,alt:e.backgroundImg.alt,sizes:"100vw",animation:"scale"}}),e._v(" "),r("SplittedText",{ref:"title",staticClass:"o-gamesHero__title",attrs:{as:"h1",config:{splitBy:"word"},text:e.title}})],1),e._v(" "),r("div",{staticClass:"o-gamesHero__featuredGamesWrapper"},[r("div",{ref:"card",staticClass:"o-gamesHero__featuredGames grid"},[r("div",{staticClass:"o-gamesHero__featuredGames__header"},[r("SplittedText",{ref:"subtitle",staticClass:"o-gamesHero__featuredGames__title",attrs:{as:"h2",config:{splitBy:"word"},text:e.subtitle}}),e._v(" "),r("p",{ref:"description",staticClass:"o-gamesHero__featuredGames__description"},[e._v("\n          "+e._s(e.description)+"\n        ")])],1),e._v(" "),e._l(e.featuredGames,(function(t,i){return r("FeaturedGame",e._b({key:i,staticClass:"o-gamesHero__featuredGames__item",attrs:{"download-label":e.downloadLabel,reverse:i%2==1}},"FeaturedGame",t,!1))}))],2)])])}),[],!1,null,"388d1354",null);t.default=component.exports;installComponents(component,{LazyResponsiveImg:r(370).default,SplittedText:r(372).default,FeaturedGame:r(613).default})},870:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(45),r(22),r(33),r(32),r(402)),d={name:"Games",mixins:[r(412).a,n.a],asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var o,n,d,c,m,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(114).then(r.bind(null,864));case 2:return o=t.sent,n=o.handler,t.next=6,n(e);case 6:return d=t.sent,c=d.seo,m=d.heroAndFeaturedGames,l=d.gamesList,t.next=12,e.store.dispatch("updateSettings",e);case 12:return t.abrupt("return",{seo:c,heroAndFeaturedGames:m,gamesList:l});case 13:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$store.commit("setHeaderTheme","light")}},c=r(5),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"home"},[r("GamesHeroAndFeaturedGames",e._b({},"GamesHeroAndFeaturedGames",e.heroAndFeaturedGames,!1)),e._v(" "),r("GamesListSection",e._b({},"GamesListSection",e.gamesList,!1))],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GamesHeroAndFeaturedGames:r(797).default,GamesListSection:r(857).default})}}]);