define("fusion/b-scroll/scroll",["require"],function(e){var t=function(e,t){if(e){var n=this;n.el=e;var s=!0;n.options=t||{},n._events={},n.control=navigator.control||{};var o=$(n.el);o.children().hasClass("c-scroll-touch")||o.children().wrap('<div class="c-scroll-touch"></div>');n.options.timeout;if("string"==typeof n.el&&(n.el=document.querySelector(e)),!(n.el instanceof HTMLElement))throw Error("parameter 1 is not of type Element or valid string");var i=(n.options.scrollEnd,{})
;n.el.addEventListener("touchstart",function(e){n.control.gesture&&n.control.gesture(!1),s&&($(n.el).imageDelayload(),s=!1),i.sx=e.touches[0].clientX,i.ex=e.touches[0].clientX,i.sy=e.touches[0].clientY}),n.el.addEventListener("touchmove",function(e){i.ex=e.touches[0].clientX,i.ey=e.touches[0].clientY}),n.el.addEventListener("touchend",function(e){n.control.gesture&&n.control.gesture(!0),Math.abs(i.ex-i.sx)>30&&n._execEvent("scrollEnd")})}};return t.prototype={on:function(e,t){
this._events&&(this._events[e]||(this._events[e]=[]),this._events[e].push(t))},off:function(e,t){if(this._events&&this._events[e]){var n=this._events[e].indexOf(t);n>-1&&this._events[e].splice(n,1)}},_execEvent:function(e){if(this._events[e]){var t=0,n=this._events[e].length;if(n)for(;t<n;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}},refresh:function(){}},t});