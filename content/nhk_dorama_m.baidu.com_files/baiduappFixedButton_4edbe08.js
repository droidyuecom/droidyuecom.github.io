define("modules/baiduappFixedButton",["require","modules/invoke/invokebox"],function(o){function n(){function n(){var o=page.comm.hasHintScript||!1,n=$(".mkt-egg-overlay").length>0;return o||n}function t(){window.pageYOffset<v&&i(),s()}function i(){!m.hasClass("show")&&m.addClass("show"),!k&&l("show")}function a(){m.hasClass("show")&&m.removeClass("show")}function s(){m.on("click",function(o){l("click"),p()}),$(window).on("touchmove.fixedbutton scroll.fixedbutton",b),
$(window).on("resize.fixedbutton",function(){v=r()})}function r(){var o=$(".se-foot-logo").height()||0,n=$(".se-copyright").height()||0,e=o+n+10,t=window.innerHeight;return document.body.clientHeight-t-e}function u(){$(window).scrollTop()>v?a():i()}function c(o,n){var e=/(sa=)([^&]*)/gi,t=/(^|[&?])sa=([^&]*)(&|$)/;return t.test(o)?o.replace(e,"sa="+n):o+"&sa="+n}function p(){var o=c(location.href,"osc_2");o=o+"&ts0="+((new Date).getTime()-x)+"&dqid="+(page.comm.lid||"")+"&tn=zbios";var n={
from:h.from,channel:h.channel,iosScheme:"baiduboxapp://browse?url="+encodeURIComponent(o)+"&opennewwindow=1&minver=3.8.0.0",androidCommand:{mode:"2",url:o,min_v:"25165824"},notUseIdm:!0,waitTime:1e3};d&&d.open(n)}function f(){var o=navigator.userAgent.toLowerCase(),n=/baiduboxapp/i.test(o),e=/searchcraft/i.test(o);return!n&&!e}function l(o){var n;switch(o){case"show":n="show_baiduapp_button";break;case"click":n="click_baiduapp_button"}page.log.send({ct:76,cst:3,action:n})}var d,m,b=e(u,50,{
leading:!0}),g=o("modules/invoke/invokebox"),h=function(o){var n={from:"",channel:""};if(page.comm.invokeZbios&&page.comm.invokeZbios.from&&page.comm.invokeZbios.channel){var e=page.comm.invokeZbios.from,t=page.comm.invokeZbios.channel;e.length&&e[o]&&t.length&&t[o]&&(n.from=e[o],n.channel=t[o])}return n}(8),w=function(){var o=n(),e=!1;if(page.comm.invokeZbios&&page.comm.invokeZbios.rule){"1"===page.comm.invokeZbios.rule.split("")[8]&&(e=!0)}var t=f();return e&&!o&&t
}(),v=r(),x=(new Date).getTime(),k=!1;w&&(!function(){
$(".search-page").append('<style class="baiduapp-fixed-button-style">.baiduapp-fixed-button{position:fixed;bottom:0;left:50%;z-index:100;padding:0 12px;font-size:15px;font-weight:400;line-height:36px;height:36px;color:#fff;text-align:center;background:#38f;border-radius:18px;opacity:0;outline:0;-webkit-transform:translate(-50%,60px);transform:translate(-50%,60px);box-shadow:0 3px 7px rgba(51,136,255,.22);transition:-webkit-transform .3s .3s,opacity .5s ease-in-out .2s;transition:transform .3s .3s,opacity .5s ease-in-out .2s}.baiduapp-fixed-button.show{opacity:1;-webkit-transform:translate(-50%,-12px);transform:translate(-50%,-12px)}@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)){.baiduapp-fixed-button{margin-bottom:13px;}}</style>'),
$(".search-page").append('<button class="baiduapp-fixed-button">App 内打开</button>')}(),m=$(".baiduapp-fixed-button"),d=new g,d.ready(setTimeout(t,0)))}function e(o,n,e){var t,i,a,s=null,r=0;e||(e={});var u=function(){r=!1===e.leading?0:Date.now(),s=null,a=o.apply(t,i),s||(t=i=null)};return function(){var c=Date.now();r||!1!==e.leading||(r=c);var p=n-(c-r);return t=this,i=arguments,p<=0||p>n?(s&&(clearTimeout(s),s=null),r=c,a=o.apply(t,i),s||(t=i=null)):s||!1===e.trailing||(s=setTimeout(u,p)),a}}
function t(){$(".baiduapp-fixed-button").remove(),$(window).off("touchmove.fixedbutton scroll.fixedbutton"),$(window).off("resize.fixedbutton")}return{init:n,destroy:t}});