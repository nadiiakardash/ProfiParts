"use strict";window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var s=0;s<this.length;s++)e.call(t,this[s],s,this)});var objectFitImages=function(){function e(e,t,s){var c=function(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}(t||1,s||0);_.call(e,"src")!==c&&b.call(e,"src",c)}function t(e,s){e.naturalWidth?s(e):setTimeout(t,100,e,s)}function s(s){var l=function(e){for(var t,s=getComputedStyle(e).fontFamily,c={};null!==(t=i.exec(s));)c[t[1]]=t[2];return c}(s),o=s[a];if(l["object-fit"]=l["object-fit"]||"fill",!o.img){if("fill"===l["object-fit"])return;if(!o.skipTest&&n&&!l["object-position"])return}if(!o.img){o.img=new Image(s.width,s.height),o.img.srcset=_.call(s,"data-ofi-srcset")||s.srcset,o.img.src=_.call(s,"data-ofi-src")||s.src,b.call(s,"data-ofi-src",s.src),s.srcset&&b.call(s,"data-ofi-srcset",s.srcset),e(s,s.naturalWidth||s.width,s.naturalHeight||s.height),s.srcset&&(s.srcset="");try{c(s)}catch(s){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}(function(e){if(e.srcset&&!u&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}})(o.img),s.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',s.style.backgroundPosition=l["object-position"]||"center",s.style.backgroundRepeat="no-repeat",s.style.backgroundOrigin="content-box",/scale-down/.test(l["object-fit"])?t(o.img,(function(){o.img.naturalWidth>s.width||o.img.naturalHeight>s.height?s.style.backgroundSize="contain":s.style.backgroundSize="auto"})):s.style.backgroundSize=l["object-fit"].replace("none","auto").replace("fill","100% 100%"),t(o.img,(function(t){e(s,t.naturalWidth,t.naturalHeight)}))}function c(e){var t={get:function(t){return e[a].img[t||"src"]},set:function(t,c){return e[a].img[c||"src"]=t,b.call(e,"data-ofi-"+c,t),s(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function l(e,t){var c=!p&&!e;if(t=t||{},e=e||"img",r&&!t.skipTest||!d)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var i=0;i<e.length;i++)e[i][a]=e[i][a]||{skipTest:t.skipTest},s(e[i]);c&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&l(e.target,{skipTest:t.skipTest})}),!0),p=!0,e="img"),t.watchMQ&&window.addEventListener("resize",l.bind(null,e,{skipTest:t.skipTest}))}var a="fregante:object-fit-images",i=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,o="undefined"==typeof Image?{style:{"object-position":1}}:new Image,n="object-fit"in o.style,r="object-position"in o.style,d="background-size"in o.style,u="string"==typeof o.currentSrc,_=o.getAttribute,b=o.setAttribute,p=!1;return l.supportsObjectFit=n,l.supportsObjectPosition=r,function(){function e(e,t){return e[a]&&e[a].img&&("src"===t||"srcset"===t)?e[a].img:e}r||(HTMLImageElement.prototype.getAttribute=function(t){return _.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,s){return b.call(e(this,t),t,String(s))})}(),l}();function visibleSection(e,t){var s=document.querySelectorAll(".".concat(e)),c=document.querySelectorAll(".".concat(t));s.forEach((function(e,s){var l=window.pageYOffset+e.getBoundingClientRect().top-400,a=window.pageXOffset+e.getBoundingClientRect().left-400,i=window.pageXOffset+e.getBoundingClientRect().right-400,o=window.pageYOffset+e.getBoundingClientRect().bottom-400,n=window.pageYOffset,r=window.pageXOffset,d=window.pageXOffset+document.documentElement.clientWidth,u=window.pageYOffset+document.documentElement.clientHeight;if(o>n&&l<u&&i>r&&a<d){var _=s-1;_<0&&(_=0),c[_].classList.contains("".concat(t,"--active"))||c[_].classList.add("".concat(t,"--active"))}else{var b=s-1;b<0&&(b=0),c[b].classList.remove("".concat(t,"--active"))}}))}function contactsToggle(){var e=document.querySelectorAll(".contacts__button-toggle"),t=document.querySelector(".contacts__button--prev"),s=document.querySelector(".contacts__button--next"),c=document.querySelectorAll(".contacts__address"),l=document.querySelectorAll(".contacts__item--main"),a=document.querySelectorAll(".contacts__item--thumbs");function i(e,t){l.forEach((function(s,a){if(l[a].classList.contains("contacts__item--active"))if(c.forEach((function(e){e.classList.remove("contacts__address--active")})),e||t)if(e&&!t)try{c[a-1].classList.add("contacts__address--active")}catch(e){return}else c[a].classList.add("contacts__address--active");else c[a+1].classList.add("contacts__address--active")}))}e.forEach((function(e){e.onclick=function(e){var t=e.target.closest(".contacts__address");t&&(t.classList.contains("contacts__address--active")?t.classList.remove("contacts__address--active"):t.classList.add("contacts__address--active"))}})),s.onclick=function(){return i()},t.onclick=function(){return i(!0)},a.forEach((function(e){e.onclick=function(){return i(!1,!0)}}))}function _createForOfIteratorHelper(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=_unsupportedIterableToArray(e))){var t=0,s=function(){};return{s:s,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l,a=!0,i=!1;return{s:function(){c=e[Symbol.iterator]()},n:function(){var e=c.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==c.return||c.return()}finally{if(i)throw l}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,c=new Array(t);s<t;s++)c[s]=e[s];return c}window.addEventListener("scroll",(function(){visibleSection("main__item","anchors__link")})),visibleSection("main__item","anchors__link"),contactsToggle();var _step,anchors=document.querySelectorAll(".scroll"),_iterator=_createForOfIteratorHelper(anchors);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(t){t.preventDefault();var s=e.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var scrolltop=pageYOffset,toggleClass=document.querySelector(".header");function toggleSelectors(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=function(){return s?n:o},a=document.querySelectorAll(".".concat(t)),i=document.querySelectorAll(".".concat(e)),o="".concat(t,"--active"),n="visually-hidden",r=l(),d="".concat(t,"--opened");c?i.forEach((function(e){e.onfocus=function(){a.forEach((function(e){var t=e.classList;t.contains(d)||t.add(d)}))},e.onblur=function(){a.forEach((function(e){e.classList.remove(d)}))}})):i.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),a.forEach((function(e){var t=e.classList;t.contains(r)?t.remove(r):t.add(r)}))}))}))}function _defineProperty(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function initSwiper(e,t){var s;if(e){var c=new Swiper(".".concat(t.container),{pagination:{el:".".concat(t.blockClass,"__pagination"),type:"bullets",currentClass:"".concat(t.blockClass,"__current"),totalClass:"".concat(t.blockClass,"__total"),bulletClass:"".concat(t.blockClass,"__bullet"),bulletActiveClass:"".concat(t.blockClass,"__bullet--active"),clickable:!0},speed:1e3,direction:"vertical",loop:t.loop,slidesPerView:t.slidesPerView||1,spaceBetween:t.spaceBetween||30,freeMode:t.freeMode,watchSlidesVisibility:t.watchSlidesVisibility,watchSlidesProgress:t.watchSlidesProgress,wrapperClass:"".concat(t.blockClass,"__list"),slideClass:"".concat(t.blockClass,"__item"),slideActiveClass:"".concat(t.blockClass,"__item--active"),slideDuplicateActiveClass:"".concat(t.blockClass,"__item-duplicate--active"),slideVisibleClass:"".concat(t.blockClass,"__item--visible"),slideDuplicateClass:"".concat(t.blockClass,"__item-duplicate"),slideNextClass:"".concat(t.blockClass,"__item--next"),slideDuplicateNextClass:"".concat(t.blockClass,"__item-duplicate--next"),slidePrevClass:"".concat(t.blockClass,"__item--prev"),slideDuplicatePrevClass:"".concat(t.blockClass,"__item-duplicate--prev"),slideBlankClass:"".concat(t.blockClass,"__invisible-blank"),bulletClass:"".concat(t.blockClass,"__bullet"),bulletActiveClass:"".concat(t.blockClass,"__bullet--active"),modifierClass:"".concat(t.blockClass,"__pagination"),hiddenClass:"".concat(t.blockClass,"__hidden"),progressbarFillClass:"".concat(t.blockClass,"__progressbar-fill"),clickableClass:"".concat(t.blockClass,"__clickable"),lockClass:"".concat(t.blockClass,"__lock"),progressbarOppositeClass:"".concat(t.blockClass,"__progressbar-opposite"),breakpoints:{320:{direction:"horizontal",slidesPerView:t.slidesPerViewMobile||1,spaceBetween:t.spaceBetweenMobile||5},768:{direction:"vertical",spaceBetween:t.spaceBetweenTablet||5},1200:{spaceBetween:t.spaceBetween||30}}});new Swiper(".".concat(e.container),(_defineProperty(s={pagination:{el:".".concat(e.blockClass,"__pagination"),type:"bullets",currentClass:"".concat(e.blockClass,"__current"),totalClass:"".concat(e.blockClass,"__total"),bulletClass:"".concat(e.blockClass,"__bullet"),bulletActiveClass:"".concat(e.blockClass,"__bullet--active"),clickable:!0},navigation:{nextEl:".".concat(e.blockClass,"__button--next"),prevEl:".".concat(e.blockClass,"__button--prev"),disabledClass:"".concat(e.blockClass,"__button--disabled")},thumbs:{swiper:c,slideThumbActiveClass:"".concat(t.blockClass,"__thumb--active"),thumbsContainerClass:"".concat(t.container,"-container")},speed:1e3,loop:e.loop,freeMode:e.freeMode,watchSlidesVisibility:e.watchSlidesVisibility,watchSlidesProgress:e.watchSlidesProgress,slidesPerView:e.slidesPerView||1,spaceBetween:e.spaceBetween||30},"freeMode",e.freeMode),_defineProperty(s,"watchSlidesVisibility",e.watchSlidesVisibility),_defineProperty(s,"watchSlidesProgress",e.watchSlidesProgress),_defineProperty(s,"wrapperClass","".concat(e.blockClass,"__list")),_defineProperty(s,"slideClass","".concat(e.blockClass,"__item")),_defineProperty(s,"slideActiveClass","".concat(e.blockClass,"__item--active")),_defineProperty(s,"slideDuplicateActiveClass","".concat(e.blockClass,"__item-duplicate--active")),_defineProperty(s,"slideVisibleClass","".concat(e.blockClass,"__item--visible")),_defineProperty(s,"slideDuplicateClass","".concat(e.blockClass,"__item-duplicate")),_defineProperty(s,"slideNextClass","".concat(e.blockClass,"__item--next")),_defineProperty(s,"slideDuplicateNextClass","".concat(e.blockClass,"__item-duplicate--next")),_defineProperty(s,"slidePrevClass","".concat(e.blockClass,"__item--prev")),_defineProperty(s,"slideDuplicatePrevClass","".concat(e.blockClass,"__item-duplicate--prev")),_defineProperty(s,"slideBlankClass","".concat(e.blockClass,"__invisible-blank")),_defineProperty(s,"bulletClass","".concat(e.blockClass,"__bullet")),_defineProperty(s,"bulletActiveClass","".concat(e.blockClass,"__bullet--active")),_defineProperty(s,"modifierClass","".concat(e.blockClass,"__pagination")),_defineProperty(s,"hiddenClass","".concat(e.blockClass,"__hidden")),_defineProperty(s,"progressbarFillClass","".concat(e.blockClass,"__progressbar-fill")),_defineProperty(s,"clickableClass","".concat(e.blockClass,"__clickable")),_defineProperty(s,"lockClass","".concat(e.blockClass,"__lock")),_defineProperty(s,"progressbarOppositeClass","".concat(e.blockClass,"__progressbar-opposite")),s))}}window.addEventListener("scroll",(function(){pageYOffset>scrolltop?toggleClass.classList.add("header--fixed"):toggleClass.classList.remove("header--fixed"),scrolltop=pageYOffset})),toggleSelectors("header__button","header"),document.documentElement.clientWidth<768?AOS.init({duration:2e3,offset:0}):AOS.init({duration:2e3,offset:100}),objectFitImages(),(new universalParallax).init({speed:6});var contacts={container:"contacts__inner--main",blockClass:"contacts",slidesPerView:1},thumbs={container:"contacts__inner--thumbs",blockClass:"contacts",slidesPerView:4,freeMode:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,spaceBetween:9,slidesPerViewMobile:4};function initNewsSwiper(e){if(e)new Swiper(".".concat(e.container),{pagination:{el:".".concat(e.blockClass,"__pagination"),type:"bullets",currentClass:"".concat(e.blockClass,"__current"),totalClass:"".concat(e.blockClass,"__total"),bulletClass:"".concat(e.blockClass,"__bullet"),bulletActiveClass:"".concat(e.blockClass,"__bullet--active"),clickable:!0},navigation:{nextEl:".".concat(e.blockClass,"__button--next"),prevEl:".".concat(e.blockClass,"__button--prev"),disabledClass:"".concat(e.blockClass,"__button--disabled")},speed:1e3,loop:e.loop,slidesPerView:e.slidesPerView||1,spaceBetween:e.spaceBetween||30,freeMode:e.freeMode,watchSlidesVisibility:e.watchSlidesVisibility,watchSlidesProgress:e.watchSlidesProgress,wrapperClass:"".concat(e.blockClass,"__list"),slideClass:"".concat(e.blockClass,"__item"),slideActiveClass:"".concat(e.blockClass,"__item--active"),slideDuplicateActiveClass:"".concat(e.blockClass,"__item-duplicate--active"),slideVisibleClass:"".concat(e.blockClass,"__item--visible"),slideDuplicateClass:"".concat(e.blockClass,"__item-duplicate"),slideNextClass:"".concat(e.blockClass,"__item--next"),slideDuplicateNextClass:"".concat(e.blockClass,"__item-duplicate--next"),slidePrevClass:"".concat(e.blockClass,"__item--prev"),slideDuplicatePrevClass:"".concat(e.blockClass,"__item-duplicate--prev"),slideBlankClass:"".concat(e.blockClass,"__invisible-blank"),bulletClass:"".concat(e.blockClass,"__bullet"),bulletActiveClass:"".concat(e.blockClass,"__bullet--active"),modifierClass:"".concat(e.blockClass,"__pagination"),hiddenClass:"".concat(e.blockClass,"__hidden"),progressbarFillClass:"".concat(e.blockClass,"__progressbar-fill"),clickableClass:"".concat(e.blockClass,"__clickable"),lockClass:"".concat(e.blockClass,"__lock"),progressbarOppositeClass:"".concat(e.blockClass,"__progressbar-opposite"),breakpoints:{320:{slidesPerView:e.slidesPerViewMobile||1},768:{spaceBetween:e.spaceBetweenTablet||15},1200:{spaceBetween:e.spaceBetween||30}}})}initSwiper(contacts,thumbs);var news={container:"news__slider",blockClass:"news",slidesPerView:2};initNewsSwiper(news);