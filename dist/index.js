!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chimeePluginFrame=void 0,r(2);var n={name:"chimeeFrame",el:"chimee-frame",data:{_work:!1,_frameList:[]},create:function(){this.$dom.innerHTML='<div class="frame-wrapper"></div>',this.$elFrameWrapper=this.$dom.querySelector(".frame-wrapper")},methods:{setData:function(e){this._destroy(),e&&"[object Array]"!==!Object.prototype.toString.call(e)&&(this._work=!0,this._frameList=e)},destroy:function(){this._destroy()},_destroy:function(){this.$elFrameWrapper.innerHTML="",this._frameList=[],this._work=!1},_timeupdate:function(e){var t=this;(this._frameList||[]).forEach(function(r,n){e===r.time&&t._renderFrame(r)})},_renderFrame:function(e){!function(e,t){if(!t._IS_RENDER){var r=null;"text"===t.type?((r=document.createElement("span")).setAttribute("class","frame-text"),r.innerHTML=t.content):"img"===t.type&&((r=document.createElement("div")).setAttribute("class","frame-picture"),r.innerHTML='<img src="'+t.content+'">');var n=t.style;for(var i in"[object Object]"!==Object.prototype.toString.call(n)&&(n=JSON.parse(t.style)),n)n.hasOwnProperty(i)&&(r.style[i]=n[i]);t.duration&&setTimeout(function(){t._IS_RENDER=!1,e.$elFrameWrapper.innerHTML=""},1e3*t.duration),t._IS_RENDER=!0,e.$elFrameWrapper.append(r)}}(this,e)}},events:{timeupdate:function(e){if(this._work){var t=e.target.currentTime;parseInt(t+.5)===Math.floor(t)&&this._timeupdate(Math.floor(t))}}}};t.default=n,t.chimeePluginFrame=n},function(e,t){}])});