/*
 typed.js - A JavaScript Typing Animation Library
   Author: Matt Boldt <me@mattboldt.com>
   Version: v2.0.12
   Url: https://github.com/mattboldt/typed.js
   License(s): MIT

*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(b,c){return Object.prototype.hasOwnProperty.call(b,c)};$jscomp.assign="function"==typeof Object.assign?Object.assign:function(b,c){for(var d=1;d<arguments.length;d++){var f=arguments[d];if(f)for(var g in f)$jscomp.owns(f,g)&&(b[g]=f[g])}return b};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,c,d,f){if(c){d=$jscomp.global;b=b.split(".");for(f=0;f<b.length-1;f++){var g=b[f];g in d||(d[g]={});d=d[g]}b=b[b.length-1];f=d[b];c=c(f);c!=f&&null!=c&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:c})}};$jscomp.polyfill("Object.assign",function(b){return b||$jscomp.assign},"es6","es3");$jscomp.findInternal=function(b,c,d){b instanceof String&&(b=String(b));for(var f=b.length,g=0;g<f;g++){var k=b[g];if(c.call(d,k,g,b))return{i:g,v:k}}return{i:-1,v:void 0}};
$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,d){return $jscomp.findInternal(this,b,d).v}},"es6","es3");
(function(b,c){"object"===typeof exports&&"object"===typeof module?module.exports=c():"function"===typeof define&&define.amd?define([],c):"object"===typeof exports?exports.Typed=c():b.Typed=c()})(this,function(){return function(b){function c(f){if(d[f])return d[f].exports;var g=d[f]={exports:{},id:f,loaded:!1};b[f].call(g.exports,g,g.exports,c);g.loaded=!0;return g.exports}var d={};c.m=b;c.c=d;c.p="";return c(0)}([function(b,c,d){Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function b(a,
b){for(var e=0;e<b.length;e++){var h=b[e];h.enumerable=h.enumerable||!1;h.configurable=!0;"value"in h&&(h.writable=!0);Object.defineProperty(a,h.key,h)}}return function(a,h,e){h&&b(a.prototype,h);e&&b(a,e);return a}}(),g=d(1),k=d(3);d=function(){function b(a,h){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");g.initializer.load(this,h,a);this.begin()}f(b,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||
this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){!this.typingComplete&&this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1);this.options.onDestroy(this)}},{key:"reset",value:function(){var a=0>=arguments.length||
void 0===arguments[0]?!0:arguments[0];clearInterval(this.timeout);this.replaceText("");this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null);this.curLoop=this.arrayPos=this.strPos=0;a&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var a=this;this.options.onBegin(this);this.typingComplete=!1;this.shuffleStringsIfNeeded(this);this.insertCursor();this.bindInputFocusEvents&&this.bindFocusEvents();this.timeout=
setTimeout(function(){a.currentElContent&&0!==a.currentElContent.trim().length?a.backspace(a.currentElContent,a.currentElContent.length):a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},this.startDelay)}},{key:"typewrite",value:function(a,b){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var h=this.humanizer(this.typeSpeed),c=1;!0===this.pause.status?this.setPauseStatus(a,
b,!0):this.timeout=setTimeout(function(){b=k.htmlParser.typeHtmlChars(a,b,e);var h=0,d=a.substr(b);if("^"===d.charAt(0)&&/^\^\d+/.test(d)){var f=1;d=/\d+/.exec(d)[0];f+=d.length;h=parseInt(d);e.temporaryPause=!0;e.options.onTypingPaused(e.arrayPos,e);a=a.substring(0,b)+a.substring(b+f);e.toggleBlinking(!0)}if("`"===d.charAt(0)){for(;"`"!==a.substr(b+c).charAt(0)&&!(c++,b+c>a.length););d=a.substring(0,b);f=a.substring(d.length+1,b+c);var g=a.substring(b+c+1);a=d+f+g;c--}e.timeout=setTimeout(function(){e.toggleBlinking(!1);
b>=a.length?e.doneTyping(a,b):e.keepTyping(a,b,c);e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},h)},h)}},{key:"keepTyping",value:function(a,b,e){0===b&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));b+=e;e=a.substr(0,b);this.replaceText(e);this.typewrite(a,b)}},{key:"doneTyping",value:function(a,b){var e=this;this.options.onStringTyped(this.arrayPos,this);this.toggleBlinking(!0);if(this.arrayPos===this.strings.length-1&&(this.complete(),
!1===this.loop||this.curLoop===this.loopCount))return;this.timeout=setTimeout(function(){e.backspace(a,b)},this.backDelay)}},{key:"backspace",value:function(a,b){var e=this;if(!0===this.pause.status)this.setPauseStatus(a,b,!1);else{if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var c=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){b=k.htmlParser.backSpaceHtmlChars(a,b,e);var c=a.substr(0,b);e.replaceText(c);if(e.smartBackspace){var d=e.strings[e.arrayPos+1];d&&
c===d.substr(0,b)?e.stopNum=b:e.stopNum=0}b>e.stopNum?(b--,e.backspace(a,b)):b<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],b))},c)}}},{key:"complete",value:function(){this.options.onComplete(this);this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(a,b,e){this.pause.typewrite=e;this.pause.curString=a;this.pause.curStrPos=
b}},{key:"toggleBlinking",value:function(a){this.cursor&&!this.pause.status&&this.cursorBlinking!==a&&((this.cursorBlinking=a)?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(a){return Math.round(Math.random()*a/2)+a}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var a=this;this.el.className+=
" "+this.fadeOutClass;this.cursor&&(this.cursor.className+=" "+this.fadeOutClass);return setTimeout(function(){a.arrayPos++;a.replaceText("");a.strings.length>a.arrayPos?a.typewrite(a.strings[a.sequence[a.arrayPos]],0):(a.typewrite(a.strings[0],0),a.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(a){this.attr?this.el.setAttribute(this.attr,a):this.isInput?this.el.value=a:"html"===this.contentType?this.el.innerHTML=a:this.el.textContent=a}},{key:"bindFocusEvents",value:function(){var a=
this;this.isInput&&(this.el.addEventListener("focus",function(b){a.stop()}),this.el.addEventListener("blur",function(b){a.el.value&&0!==a.el.value.length||a.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&!this.cursor&&(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]);return b}();
c["default"]=d;b.exports=c["default"]},function(b,c,d){Object.defineProperty(c,"__esModule",{value:!0});var f=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var c=arguments[a],e;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(b[e]=c[e])}return b},g=function(){function b(a,b){for(var e=0;e<b.length;e++){var c=b[e];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(a,c.key,c)}}return function(a,c,e){c&&b(a.prototype,c);e&&b(a,e);
return a}}(),k=(b=d(2))&&b.__esModule?b:{"default":b};b=function(){function b(){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");}g(b,[{key:"load",value:function(a,b,c){a.el="string"===typeof c?document.querySelector(c):c;a.options=f({},k["default"],b);a.isInput="input"===a.el.tagName.toLowerCase();a.attr=a.options.attr;a.bindInputFocusEvents=a.options.bindInputFocusEvents;a.showCursor=a.isInput?!1:a.options.showCursor;a.cursorChar=a.options.cursorChar;a.cursorBlinking=
!0;a.elContent=a.attr?a.el.getAttribute(a.attr):a.el.textContent;a.contentType=a.options.contentType;a.typeSpeed=a.options.typeSpeed;a.startDelay=a.options.startDelay;a.backSpeed=a.options.backSpeed;a.smartBackspace=a.options.smartBackspace;a.backDelay=a.options.backDelay;a.fadeOut=a.options.fadeOut;a.fadeOutClass=a.options.fadeOutClass;a.fadeOutDelay=a.options.fadeOutDelay;a.isPaused=!1;a.strings=a.options.strings.map(function(a){return a?a.trim():null});a.stringsElement="string"===typeof a.options.stringsElement?
document.querySelector(a.options.stringsElement):a.options.stringsElement;if(a.stringsElement&&(a.strings=[],a.stringsElement.style.display="none",b=Array.prototype.slice.apply(a.stringsElement.children),c=b.length))for(var e=0;e<c;e+=1)a.strings.push(b[e].innerHTML.trim());a.strPos=0;a.arrayPos=0;a.stopNum=0;a.loop=a.options.loop;a.loopCount=a.options.loopCount;a.curLoop=0;a.shuffle=a.options.shuffle;a.sequence=[];a.pause={status:!1,typewrite:!0,curString:"",curStrPos:0};a.typingComplete=!1;for(e in a.strings)a.sequence[e]=
e;a.currentElContent=this.getCurrentElContent(a);a.autoInsertCss=a.options.autoInsertCss;this.appendAnimationCss(a)}},{key:"getCurrentElContent",value:function(a){return a.attr?a.el.getAttribute(a.attr):a.isInput?a.el.value:"html"===a.contentType?a.el.innerHTML:a.el.textContent}},{key:"appendAnimationCss",value:function(a){if(a.autoInsertCss&&(a.showCursor||a.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var b=document.createElement("style");b.type="text/css";b.setAttribute("data-typed-js-css",
!0);var c="";a.showCursor&&(c+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ");
a.fadeOut&&(c+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ");0!==b.length&&(b.innerHTML=c,document.body.appendChild(b))}}}]);return b}();c["default"]=b;b=new b;c.initializer=b},function(b,c){Object.defineProperty(c,"__esModule",{value:!0});c["default"]={strings:["These are the default values...","You know what you should do?",
"Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(b){},onComplete:function(b){},preStringTyped:function(b,c){},onStringTyped:function(b,c){},onLastStringBackspaced:function(b){},onTypingPaused:function(b,c){},onTypingResumed:function(b,
c){},onReset:function(b){},onStop:function(b,c){},onStart:function(b,c){},onDestroy:function(b){}};b.exports=c["default"]},function(b,c){Object.defineProperty(c,"__esModule",{value:!0});var d=function(){function b(b,c){for(var d=0;d<c.length;d++){var a=c[d];a.enumerable=a.enumerable||!1;a.configurable=!0;"value"in a&&(a.writable=!0);Object.defineProperty(b,a.key,a)}}return function(c,d,f){d&&b(c.prototype,d);f&&b(c,f);return c}}();b=function(){function b(){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function");
}d(b,[{key:"typeHtmlChars",value:function(b,c,d){if("html"!==d.contentType)return c;d=b.substr(c).charAt(0);if("<"===d||"&"===d){for(d="<"===d?">":";";b.substr(c+1).charAt(0)!==d&&!(c++,c+1>b.length););c++}return c}},{key:"backSpaceHtmlChars",value:function(b,c,d){if("html"!==d.contentType)return c;d=b.substr(c).charAt(0);if(">"===d||";"===d){for(d=">"===d?"<":"&";b.substr(c-1).charAt(0)!==d&&!(c--,0>c););c--}return c}}]);return b}();c["default"]=b;b=new b;c.htmlParser=b}])});
function initTyped(b,c){c[0]&&(c=c[0]);return new Typed(c,{strings:b,typeSpeed:101-parseInt(c.getAttribute("data-speed")),backSpeed:101-parseInt(c.getAttribute("data-speed")),loop:!0,backDelay:1E3})}function getDataWordsArr(b){for(var c=parseInt(b.getAttribute("data-words")),d=[],f=1;f<=c;f++){var g="data-word"+f;void 0!==b.getAttribute(g)&&d.push(b.getAttribute(g))}return d}var isBuilder=document.querySelector("html").classList.contains("is-builder"),initedTypes;
isBuilder?$(document).on("add.cards",function(b){0!=$(b.target).find(".typed-text").length&&$(b.target).find(".animated-element").each(function(){initedTypes&&initedTypes.destroy();initedTypes=parseInt($(this).attr("data-words"))?initTyped(getDataWordsArr(this),$(this)):initTyped([$(this).attr("data-word1"),$(this).attr("data-word2"),$(this).attr("data-word3")],$(this))})}).on("changeParameter.cards",function(b,c,d){0!=c.indexOf("animatedWord")&&"typeSpeed"!=c&&"wordsCount"!=c||$(b.target).find(".animated-element").each(function(){initedTypes&&
initedTypes.destroy();initedTypes=parseInt($(this).attr("data-words"))?initTyped(getDataWordsArr(this),$(this)):initTyped([$(this).attr("data-word1"),$(this).attr("data-word2"),$(this).attr("data-word3")],$(this))})}):document.querySelectorAll(".typed-text .animated-element").forEach(function(b){parseInt(b.getAttribute("data-words"))?initTyped(getDataWordsArr(b),b):initTyped([b.getAttribute("data-word1"),b.getAttribute("data-word2"),b.getAttribute("data-word3")],b)});
