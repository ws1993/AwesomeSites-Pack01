(window.webpackJsonp=window.webpackJsonp||[]).push([[3,78,92,93,95],{370:function(t,e,r){"use strict";r.r(e);r(44),r(52),r(12),r(51),r(48);var n=[320,640,960,1280,1680,1920],o={props:{alt:{type:String,default:null},src:{type:String,default:null},srcset:{type:String,default:null},resizeable:{type:Boolean,default:!0},sizes:{type:String,required:!1,default:""},widths:{type:Array,default:function(){return n}},dimensions:{type:Object,default:null},caption:{type:Boolean,required:!1,default:!1},skipLazy:{type:Boolean,required:!1,default:!1},extraClass:{type:String,required:!1,default:""},animation:{type:String,default:null},rootMargin:{type:String,default:"0px"},threshold:{type:String,default:"0.1"},responsiveHeight:{type:Boolean,default:!1},cover:{type:Boolean,default:!1}},data:function(){return{loaded:!1,nativeLazySupported:!1,isVisible:!1}},computed:{isImgix:function(){return this.src.includes("images.prismic.io")||this.src.includes("?auto=compress,format")}},mounted:function(){window&&(this.nativeLazySupported="loading"in HTMLImageElement.prototype)},methods:{handleLoad:function(){var t=this;this.$refs.image&&(this.$emit("load",{url:this.$refs.image.currentSrc}),this.$nextTick((function(){t.loaded=!0})))},generateLow:function(){return this.resizeable&&this.isImgix?"".concat(this.src,"&w=5"):"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPkFFxcDwACJgE"},generateSrcSet:function(){var t=this;if(this.srcset)return this.srcset;var e="";return this.widths&&this.resizeable&&this.isImgix?(this.widths.forEach((function(r){e+="".concat(t.src,"&w=").concat(r," ").concat(r,"w,")})),e.slice(0,-1)):(e+="".concat(this.src),this.dimensions&&this.dimensions.widths&&(e+="&w=".concat(this.dimensions.width)),e)},visibilityChanged:function(t,e){t&&(this.nativeLazySupported||(this.$refs.image.srcset=this.$refs.image.dataset.srcset,this.$refs.image.sizes=this.$refs.image.dataset.sizes),this.isVisible=t)}}},d=(r(374),r(5)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"a-lazy-image",class:[{"-responsive-height":t.responsiveHeight},{"-cover":t.cover},t.animation&&"-"+t.animation],style:{"--img-progress":t.loaded&&t.isVisible?1:0}},[r("img",t._b({directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:!t.skipLazy&&{callback:t.visibilityChanged,once:!0,intersection:{rootMargin:t.rootMargin,threshold:0}},expression:"\n      !skipLazy\n        ? {\n            callback: visibilityChanged,\n            once: true,\n            intersection: { rootMargin, threshold: 0 }\n          }\n        : false\n    "}],ref:"image",staticClass:"a-image__img",class:{"-lazy":!t.loaded,extraClass:t.extraClass},attrs:{alt:t.alt||"",sizes:t.sizes,width:t.dimensions&&t.dimensions.width,height:t.dimensions&&t.dimensions.height,crossorigin:"",src:t.generateLow()},on:{load:t.handleLoad}},"img",t.nativeLazySupported||t.skipLazy?{loading:t.skipLazy?"eager":"lazy",srcset:t.generateSrcSet()}:{"data-srcset":t.generateSrcSet()},!1)),t._v(" "),t.caption?r("figcaption",[t._v("\n    "+t._s(t.alt)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},371:function(t,e,r){var content=r(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("09da1452",content,!0,{sourceMap:!1})},374:function(t,e,r){"use strict";r(371)},375:function(t,e,r){var n=r(42)(!1);n.push([t.i,".a-lazy-image.-scale{transform:scale(calc(.5 + var(--img-progress)*0.5));opacity:var(--img-progress);transition:transform .8s cubic-bezier(.175,.885,.32,1.275),opacity .6s cubic-bezier(.215,.61,.355,1),filter .4s cubic-bezier(.215,.61,.355,1)}.a-lazy-image.-responsive-height img{width:auto;height:100%}.a-lazy-image.-cover img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.a-lazy-image img{display:block;width:100%;height:auto;transition:filter .4s cubic-bezier(.215,.61,.355,1);opacity:1}.a-lazy-image img.has-rotate{transform:translateZ(0)}.a-lazy-image img.-lazy{filter:blur(20px)}",""]),t.exports=n},483:function(t,e,r){"use strict";r.r(e);var n=r(166),o=r(736),d=r(737),l=r(694),c={components:{StoryChapterHeader:o.default,StoryChapterContent:d.default},mixins:[l.a],props:{id:{type:String,required:!0},pin:{type:Boolean,default:!0},gradient:{type:Array,default:function(){return n.a.blueGreen}},header:{type:Object,required:!0},introHtml:{type:String,default:null},contents:{type:Array,default:null}},mounted:function(){var t=this;this.pin&&this.$nextTick((function(){return t.init()}))},beforeDestroy:function(){0}},m=(r(825),r(5)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,intersection:{rootMargin:"0px",threshold:.01}},expression:"{\n    callback: visibilityChanged,\n    intersection: {\n      rootMargin: '0px',\n      threshold: 0.01\n    }\n  }"}],staticClass:"o-storyChapter",style:{"--gradient-color-1":t.gradient[0],"--gradient-color-2":t.gradient[1]},attrs:{id:t.id}},[r("div",{staticClass:"o-storyChapter__container grid"},[r("StoryChapterHeader",t._b({staticClass:"o-storyChapter__header",attrs:{gradient:t.gradient}},"StoryChapterHeader",t.header,!1)),t._v(" "),t._t("default",[t.introHtml?r("div",{staticClass:"o-storyChapter__intro",domProps:{innerHTML:t._s(t.introHtml)}}):t._e(),t._v(" "),t.contents?t._l(t.contents,(function(content,i){return r("StoryChapterContent",{key:i,staticClass:"o-storyChapter__content",attrs:{content:content}})})):t._e()])],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{StoryChapterHeader:r(736).default,StoryChapterContent:r(737).default})},580:function(t,e,r){var content=r(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("5079244b",content,!0,{sourceMap:!1})},581:function(t,e,r){var content=r(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1f63d0fd",content,!0,{sourceMap:!1})},694:function(t,e,r){"use strict";r(18),r(16),r(17),r(24),r(12),r(25);var n=r(4),o=(r(60),r(65)),d=r(152);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}o.b.registerPlugin(d.a),e.a={beforeDestroy:function(){this.st&&this.st.kill(!1)},methods:{init:function(){var t=this;this.st=d.a.create({id:this.$el.id,trigger:this.$el,start:"bottom bottom",end:"+=".concat(window.innerHeight,"px"),pin:!0,pinSpacing:!1}),setTimeout((function(){t.st.refresh()}),2e3)},visibilityChanged:function(t){this.$store.commit("story/setVisibleChapters",c(c({},this.$store.state.story.visibleChapters),Object(n.a)({},this.id,t)))}}}},697:function(t,e,r){"use strict";r(580)},698:function(t,e,r){var n=r(42)(!1);n.push([t.i,".m-storyChapterHeader{position:relative;padding:0}@media(min-width:959px){.m-storyChapterHeader{padding:0 3.125rem}}.m-storyChapterHeader__kicker{font-weight:800;letter-spacing:.5em;font-size:1.25rem;text-align:center;text-transform:uppercase}@media(min-width:959px){.m-storyChapterHeader__kicker{font-size:1.625rem}}.m-storyChapterHeader__title{text-align:center;font-weight:800;letter-spacing:-2%;line-height:90%;font-size:3.125rem;padding-top:1.125rem;padding-bottom:1.125rem;--gradient-orientation:162deg}@media(min-width:959px){.m-storyChapterHeader__title{font-size:6.875rem;padding-top:1.75rem;padding-bottom:1.75rem}}",""]),t.exports=n},699:function(t,e,r){"use strict";r(581)},700:function(t,e,r){var n=r(42)(!1);n.push([t.i,'.m-storyChapterContent__text{grid-column:1/span 6;padding:0 .5rem}@media(min-width:959px){.m-storyChapterContent__text{padding:0 1.5rem}}@media(min-width:1023px){.m-storyChapterContent__text{padding:0;grid-column:3/11}.m-storyChapterContent__text h3{font-size:1.75rem}.m-storyChapterContent__text p{font-size:1.375rem}.m-storyChapterContent__text ul{font-size:1.25rem}}.m-storyChapterContent__text h3{font-weight:600;font-size:1.25rem;letter-spacing:.3em;padding-bottom:1.875rem}@media(min-width:959px){.m-storyChapterContent__text h3{padding-bottom:2.5rem;font-size:1.375rem}}.m-storyChapterContent__text p{font-size:1rem;color:var(--very-dark-grey);line-height:140%;letter-spacing:-.01em}@media(min-width:959px){.m-storyChapterContent__text p{font-size:1.125rem}}.m-storyChapterContent__text strong{font-weight:700}.m-storyChapterContent__text ul{padding:2.8125rem 0;font-size:1rem;line-height:150%;color:var(--very-dark-grey)}@media(min-width:959px){.m-storyChapterContent__text ul{padding:5.625rem 0}}.m-storyChapterContent__text ul li{position:relative;padding:.9375rem 1.375rem;margin-bottom:1.25rem}@media(min-width:959px){.m-storyChapterContent__text ul li{padding:1.875rem 4.0625rem}}.m-storyChapterContent__text ul li:before{content:"";display:block;position:absolute;top:0;left:0;height:100%;width:.1875rem;border-radius:.09375rem;overflow:hidden;background-color:var(--gradient-color-1);background:linear-gradient(180deg,var(--gradient-color-1),var(--gradient-color-2));background:linear-gradient(var(--gradient-orientation,180deg),var(--gradient-color-1) var(--gradient-start,0),var(--gradient-color-2) var(--gradient-stop,100%))}.m-storyChapterContent__text ul li:nth-child(1n+1){--gradient-color-1:#ffbf04;--gradient-color-2:#ff6069}.m-storyChapterContent__text ul li:nth-child(1n+2){--gradient-color-1:#be65ff;--gradient-color-2:#00dfff}.m-storyChapterContent__text ul li:nth-child(1n+3){--gradient-color-1:#ffe000;--gradient-color-2:#15cf74}.m-storyChapterContent__medias{position:relative;grid-column:start/end;margin:3.125rem 0}@media(min-width:959px){.m-storyChapterContent__medias{margin:6.25rem 0}}@media(min-width:1023px){.m-storyChapterContent__medias{grid-column:2/12;overflow:hidden}}.m-storyChapterContent__medias:last-child{margin-bottom:0}.m-storyChapterContent__medias__wrapper{position:relative;margin:0 auto;--width:100%;width:var(--width);padding-top:90%}:not(.-multiple) .m-storyChapterContent__medias__wrapper{max-width:calc(80vh/var(--ratio))}@media(min-width:959px){.m-storyChapterContent__medias__wrapper{padding-top:min(calc(var(--ratio)*var(--width)),80vh);--width:calc(var(--w)/var(--totalW)*100%)}}@media(min-width:1023px){.m-storyChapterContent__medias__wrapper{max-height:80vh}}.m-storyChapterContent__medias__figure{position:absolute;top:0;left:0;right:0;bottom:0}.m-storyChapterContent__medias img{height:100%;width:100%;border-radius:.9375rem;-o-object-fit:cover;object-fit:cover}.m-storyChapterContent__medias.-multiple{display:flex;flex-direction:column;justify-content:center;align-items:center}@media(min-width:959px){.m-storyChapterContent__medias.-multiple{flex-direction:row}}.m-storyChapterContent__medias.-multiple .m-storyChapterContent__medias__wrapper{overflow:hidden}.m-storyChapterContent__medias.-multiple .m-storyChapterContent__medias__wrapper img{-o-object-fit:cover;object-fit:cover}.m-storyChapterContent__medias.-multiple .m-storyChapterContent__medias__wrapper:first-child{margin-bottom:1.25rem}@media(min-width:959px){.m-storyChapterContent__medias.-multiple .m-storyChapterContent__medias__wrapper:first-child{margin-bottom:0;margin-right:1.25rem}}',""]),t.exports=n},736:function(t,e,r){"use strict";r.r(e);var n={props:{kicker:{type:String,default:null},title:{type:String,required:!0}}},o=(r(697),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-storyChapterHeader"},[r("p",{staticClass:"m-storyChapterHeader__kicker"},[t._v(t._s(t.kicker))]),t._v(" "),r("h2",{staticClass:"m-storyChapterHeader__title configurable-text-gradient"},[t._v("\n    "+t._s(t.title)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},737:function(t,e,r){"use strict";r.r(e);r(12);var n={components:{LazyResponsiveImg:r(370).default},props:{content:{type:Array,required:!0}},methods:{getTotalWidth:function(t){var e=0;return t.forEach((function(t){var r=t.dimensions.width;e+=r})),e}}},o=(r(699),r(5)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-storyChapterContent no-mg-grid"},[t._l(t.content,(function(e,i){return["html"===e.type?r("div",{key:i,staticClass:"m-storyChapterContent__text",domProps:{innerHTML:t._s(e.content)}}):t._e(),t._v(" "),"image"===e.type?r("div",{key:i,staticClass:"m-storyChapterContent__medias",class:{"-multiple":e.content.length>1},style:{"--totalW":t.getTotalWidth(e.content),"--count":e.content.length}},t._l(e.content,(function(image,t){return r("div",{key:i+t,staticClass:"m-storyChapterContent__medias__wrapper",style:{"--ratio":image.dimensions.height/image.dimensions.width,"--w":image.dimensions.width}},[r("LazyResponsiveImg",{staticClass:"m-storyChapterContent__medias__figure",attrs:{dimensions:image.dimensions,src:image.url,alt:image.alt,threshold:"0.5",animation:"scale",sizes:"(min-width: 960px) "+100/e.content.length+"vw, (min-width: 1920px) 1680px, 95vw"}})],1)})),0):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LazyResponsiveImg:r(370).default})},775:function(t,e,r){var content=r(826);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("1ae32dbd",content,!0,{sourceMap:!1})},825:function(t,e,r){"use strict";r(775)},826:function(t,e,r){var n=r(42)(!1);n.push([t.i,'.o-storyChapter{position:relative;padding-top:5rem;padding-bottom:6rem;background-color:var(--white)}@media(min-width:959px){.o-storyChapter{padding-top:10.3125rem;padding-bottom:12rem}}.o-storyChapter:before{content:"";position:absolute;z-index:0;border-radius:1.25rem;top:0;left:var(--gutter-size);right:var(--gutter-size);height:100vh;background:linear-gradient(180deg,var(--gradient-color-1),hsla(0,0%,100%,0));background:linear-gradient(180deg,var(--gradient-color-1) var(--gradient-start,0),hsla(0,0%,100%,0));opacity:.08;pointer-events:none}.o-storyChapter__header{grid-column:2/span 6}@media(min-width:1023px){.o-storyChapter__header{grid-column:4/12}}.o-storyChapter__intro{position:relative;z-index:1;text-align:center;margin-top:2.5rem;grid-column:2/span 6}@media(min-width:1023px){.o-storyChapter__intro{margin-top:3.75rem;grid-column:5/11}}.o-storyChapter__intro p{font-size:1.375rem;line-height:135%}@media(min-width:959px){.o-storyChapter__intro p{font-size:1.625rem;line-height:150%}}.o-storyChapter__intro strong{font-weight:700}.o-storyChapter__content{position:relative;z-index:1;padding-top:5rem;grid-column:start/end}@media(min-width:959px){.o-storyChapter__content{padding-top:6.25rem}}@media(min-width:1023px){.o-storyChapter__content{grid-column:wrapper-start/wrapper-end;padding-top:8.75rem}}@media(min-width:1919px){.o-storyChapter__content{grid-column:start/end}}',""]),t.exports=n}}]);