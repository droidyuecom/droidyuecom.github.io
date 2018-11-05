define("modules/safariicon/safariicon",["require","base/etpl/bdetpl","sfr"],function(n){return function(){function t(t){if("2"!==page.utils.cookie("safariicon")&&1!==l){var i=n("base/etpl/bdetpl");i.config({commandOpen:"<%",commandClose:"%>"})
;var a=i.compile('<div class="gh-safariicon-container-inside" style="position: fixed; width: 100%; text-align: center; bottom: 0px; z-index: 20; word-wrap: break-word; word-break: break-word; white-space: normal;">\n    <style>\n\n        .gh-safariicon-container-help {\n            background: rgba(0, 0, 0, 0.4);\n        }\n        .gh-safariicon-stopscroll {\n            height: 100%;\n            width: 100%;\n            overflow: hidden;\n        }\n        .safariicon-popup .b-popup-content {\n            margin: 0;\n        }\n        .safariicon-popup .b-popup-head{\n            margin: 0;\n\n        }\n        .gh-animated {\n          animation-duration: .24s;\n          animation-fill-mode: both;\n          -webkit-animation-duration: .24s;\n          -webkit-animation-fill-mode:both;\n        }\n\n        @keyframes gh_bounceInUp {\n            from, 60%, 75%, 90%, to {\n                animation-timing-function: cubic-bezier(0.0, 0.0, 0.4, 1);\n                -webkit-animation-timing-function: cubic-bezier(0.0, 0.0, 0.4, 1);\n            }\n\n            from {\n                opacity: 0;\n                transform: translate3d(0, 100px, 0);\n                -webkit-transform: translate3d(0, 100px, 0);\n            }\n\n            60% {\n                opacity: .5;\n                transform: translate3d(0, -5px, 0);\n                -webkit-transform: translate3d(0, -5px, 0);\n            }\n\n            75% {\n                opacity: 1;\n                transform: translate3d(0, 0px, 0);\n                -webkit-transform: translate3d(0, 0px, 0);\n            }\n\n            90% {\n                transform: translate3d(0, -2px, 0);\n                -webkit-transform: translate3d(0, -2px, 0);\n            }\n\n            to {\n                transform: translate3d(0, 0, 0);\n                -webkit-transform: translate3d(0, 0, 0);\n            }\n        }\n        @-webkit-keyframes gh_bounceInUp {\n            from, 60%, 75%, 90%, to {\n                animation-timing-function: cubic-bezier(0.0, 0.0, 0.4, 1);\n                -webkit-animation-timing-function: cubic-bezier(0.0, 0.0, 0.4, 1);\n            }\n\n            from {\n                opacity: 0;\n                transform: translate3d(0, 100px, 0);\n                -webkit-transform: translate3d(0, 100px, 0);\n            }\n\n            60% {\n                opacity: .5;\n                transform: translate3d(0, -5px, 0);\n                -webkit-transform: translate3d(0, -5px, 0);\n            }\n\n            75% {\n                opacity: 1;\n                transform: translate3d(0, 0px, 0);\n                -webkit-transform: translate3d(0, 0px, 0);\n            }\n\n            90% {\n                transform: translate3d(0, -2px, 0);\n                -webkit-transform: translate3d(0, -2px, 0);\n            }\n\n            to {\n                transform: translate3d(0, 0, 0);\n                -webkit-transform: translate3d(0, 0, 0);\n            }\n        }\n\n        .gh-bounceInUp {\n            animation-duration: .32s;\n            animation-name: gh_bounceInUp;\n            -webkit-animation-duration: .32s;\n            -webkit-animation-name:gh_bounceInUp;\n        }\n\n        @keyframes gh_bounceOutDown {\n            from, 60%, 75%, 90%, to {\n                animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n                -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n            }\n            from {\n                transform: translate3d(0, 0, 0);\n                -webkit-transform: translate3d(0, 0, 0);\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, 100px, 0);\n                -webkit-transform: translate3d(0, 100px, 0);\n            }\n        }\n        @-webkit-keyframes gh_bounceOutDown {\n            from, 60%, 75%, 90%, to {\n                animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n                -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);\n            }\n            from {\n                transform: translate3d(0, 0, 0);\n                -webkit-transform: translate3d(0, 0, 0);\n            }\n\n            to {\n                opacity: 0;\n                transform: translate3d(0, 100px, 0);\n                -webkit-transform: translate3d(0, 100px, 0);\n            }\n        }\n\n        .gh-bounceOutDown {\n            animation-name: gh_bounceOutDown;\n            -webkit-animation-name:gh_bounceOutDown;\n        }\n\n        @keyframes gh_fadeInUp {\n            from {\n                opacity: 0;\n                transform: translate3d(0, 100%, 0);\n                -webkit-transform: translate3d(0, 100%, 0);\n            }\n\n            to {\n                opacity: 1;\n                transform: none;\n                -webkit-transform: none;\n            }\n        }\n        @-webkit-keyframes gh_fadeInUp {\n            from {\n                opacity: 0;\n                transform: translate3d(0, 100%, 0);\n                -webkit-transform: translate3d(0, 100%, 0);\n            }\n\n            to {\n                opacity: 1;\n                transform: none;\n                -webkit-transform: none;\n            }\n        }\n\n        .gh-fadeInUp {\n            animation-name: gh_fadeInUp;\n            -webkit-animation-name:gh_fadeInUp;\n        }\n\n        .gh-safari-btn{\n            position: relative;\n            bottom: 0.1rem;\n            margin: 0px auto;\n            display: inline-block;\n            opacity: 0;\n            font-size: 0;\n        }\n        \n        .gh-safari-btn-wrap {\n            position: relative;\n            top: 0.09rem;\n            padding: 0px 0.41rem 0px 0.31rem;\n            font-size: 0.14rem;\n            background: rgba(0, 0, 0, 0.8);\n            color: rgb(255, 255, 255);\n            line-height: 0.14rem;\n            border-radius: 0.04rem;\n            white-space: nowrap;\n        }\n        .gh-safari-btn-add {\n            width: 0.16rem;\n            height: 0.16rem;\n            position: absolute;\n            top: 0.07rem;\n            left: 0.1rem;\n        }\n        .gh-safari-btn-info {\n            position: relative;\n            height: 0.3rem;\n            line-height: 0.3rem;\n        }\n        .gh-safari-closefloat{\n            position: absolute;\n            height: 0.3rem;\n            line-height: 0.3rem;\n            display: inline-block;\n            top: 0px;\n            right: 0.06rem;\n        }\n        .gh-btnarrow {\n            position: relative;\n            display: inline-block;\n            width: 0.1rem;\n            height: 0.06rem;\n        }\n\n        .gh-helpwrap {\n            font-size: .16rem;\n            line-height: .26rem;\n            padding: 0 .17rem;\n            color: #555;\n            background: #f1f1f1;\n            text-align: left;\n        }\n        .gh-div1{\n            padding: .15rem 0 .09rem;\n        }\n        .gh-div2{\n            padding-bottom: .2rem;\n            border-bottom: .01rem solid #dadada;\n        }\n        .gh-div3{\n            padding: .15rem 0 .09rem;\n        }\n        .gh-div4{\n            padding-bottom: .2rem;\n        }\n\n        .gh-help-text {\n            padding: .15rem 0 .09rem;\n        }\n        .gh-help-img {\n            padding-bottom: .2rem;\n            border-bottom: .01rem solid #dadada;\n        }\n        .gh-help-img:last-child{\n            border-bottom: 0;\n        }\n        .b-popup-remove{\n            display: none;\n        }\n        .gh-safari-btn-cancel{\n            display: block;\n            position: initial;\n            text-align: center;\n            height: .49rem;\n            line-height: .49rem;\n            background: #fff;\n            border-top: .01rem solid #dadada;\n            margin: 0 -.2rem;\n            color: #000;\n        }\n        .gh-safari-btn-wrap2 {\n            position: relative;\n            padding: 0px 0.46rem 0px 0.07rem;\n            font-size: 0.14rem;\n            background: rgba(0, 0, 0, 0.8);\n            color: rgb(255, 255, 255);\n            line-height: 0.14rem;\n            border-radius: 0.04rem;\n            white-space: nowrap;\n        }\n        .gh-safari-btn-img {\n            width: 0.16rem;\n            height: 0.16rem;\n            position: relative;\n            display: inline;\n            vertical-align: sub;\n        }\n        .gh-safari-btn-text {\n            position: relative;\n            height: 0.3rem;\n            line-height: 0.3rem;\n            display: inline;\n        }\n    </style>\n    <div class="gh-safari-btn gh-animated">\n        \n        <% if: ${s_element_list} %>\n            <div class="gh-safari-btn-wrap2">\n                <% for: ${s_element_list} as ${item}, ${index} %>\n                    <% if: ${item.type} == \'text\' %>\n                    <div class="gh-safari-btn-text">${item.value}</div>\n                    <% elif: ${item.type} == \'img\' %>\n                    <img class="gh-safari-btn-img" src="${item.value}" alt="add">\n                    <% /if %>\n                <% /for %>\n                <div class="gh-safari-closefloat"> | 关闭</div>\n            </div>\n        <% /if %>\n        <% if: ${has_arrow} == 1 %>\n        <img class="gh-btnarrow" src="//gh.bdstatic.com/static/gh/img/wise/arrow.png">\n        <% /if %>\n    </div>\n</div>'),o=i.compile("<div class='gh-safariicon-container-help'>\n\t<div class='gh-helpwrap'>\n\t\t<% if: ${l_element_list} %>\n\t\t\t<% for: ${l_element_list} as ${item}, ${index} %>\n\t            <% if: ${item.type} == 'text' %>\n\t\t\t\t\t<div class='gh-help-item gh-help-text'>\n\t\t\t\t\t\t<span style='color:#000'>${item.extra} </span>${item.value}\n\t\t\t\t\t</div>\n\t\t\t\t<% elif: ${item.type} == 'img' %>\n\t\t\t\t\t<div class='gh-help-item gh-help-img'>\n\t\t\t\t\t\t<img style='display:block;width:100%' src='${item.value}'>\n\t\t\t\t\t</div>\n\t\t\t\t<% /if %>\n\t\t\t<% /for %>\n\t\t<% /if %>\n\t\t<div class='b-popup-remove gh-safari-btn-cancel'>取消</div>\n\t</div>\n</div>"),r=$('<div class="gh-safariicon-container">'),s=$('<b-popup class="safariicon-popup" title="" content=""></b-popup>')
;r.html(a(t)),s.attr({content:o(t)}),r.append(s),$("body").append(r),e()}}function e(){n(["fusion/b-popup/b-popup"],function(){var n=$(".safariicon-popup").get(0);n.fusionReady=function(){$(".gh-safari-btn-img,.gh-safari-btn-text").on("click",function(t){n.fusion.open(),$("html").css({height:"100%",overflow:"hidden"}),$("body").css({height:"100%",overflow:"hidden"}),page.log.send({ct:69,cst:2,clk_extra:JSON.stringify({type:"btn_click"})})}),$(n).on("opened",function(){m=!0,page.log.send({ct:69,
cst:4,clk_extra:JSON.stringify({type:"help_show"})})}).on("closed",function(){$("html").css({height:"",overflow:""}),$("body").css({height:"",overflow:""}),m=!1,page.log.send({ct:69,cst:5,clk_extra:JSON.stringify({type:"help_close"})})})}}),window.addEventListener("orientationchange",function(){90===window.orientation||-90===window.orientation?o(!0):a()},!1),$(".gh-safari-closefloat").on("click",function(n){if(n.stopPropagation(),n.preventDefault(),page.log.send({ct:69,cst:3,
clk_extra:JSON.stringify({type:"icon_close"})}),l=1,o(),page.utils.cookie("safariicon"))return void page.utils.cookie("safariicon","2",{domain:"baidu.com",expires:6048e5});page.utils.cookie("safariicon","1",{domain:"baidu.com",expires:6048e5})}),page.on("detach",function(){o(!0)}),page.on("destory",function(){o(!0)})}function i(){if(d.scrollnum<2)return void d.scrollnum++;clearTimeout(d.scrollTimer),m||(d.scrollTimer=setTimeout(function(){$(window).scrollTop()>=10&&p&&o(!0)},50))}function a(n){
if(!("2"===page.utils.cookie("safariicon")||1===l||90===window.orientation||-90===window.orientation||page.comm.pn>=10||(n.side_off&&"1"===n.side_off&&$(window).on("scroll",i),p))){var t=$(".gh-safari-btn");t.css("display","inline-block");var e=0!==n.start_sec&&"0"!==n.start_sec?1e3*parseInt(n.start_sec,10):100;d.showtimer=setTimeout(function(){t.css("opacity",1),t.addClass("gh-bounceInUp"),0!==n.duration_sec&&"0"!==n.duration_sec&&(d.timer||(d.timer=setTimeout(function(){clearTimeout(d.timer),
d.timer=null,o(!0)},1e3*parseInt(n.duration_sec,10)))),p=!0},e)}}function o(n){if($(window).off("scroll",i),d.timer&&(clearTimeout(d.timer),d.timer=null),d.showtimer&&(clearTimeout(d.showtimer),d.showtimer=null),p){p=!1;var t=$(".gh-safari-btn");n?(t.removeClass("gh-bounceInUp"),t.addClass("gh-bounceOutDown"),setTimeout(function(){$(".gh-safari-btn").removeClass("gh-bounceOutDown"),t.hide(),t.css("opacity",0)},240)):(t.removeClass("gh-bounceInUp"),t.removeClass("gh-bounceOutDown"),t.hide(),
t.css("opacity",0))}}function r(t){var e=location.pathname+location.search;/\/s\?.*?word=/.test(e)&&(e=e.replace(/[&|?]sasub=[^&]+/,""),e=e.replace(/([&|?]word=[^&]+)/,function(n){return n+"&sasub="+t}),n(["superframe/start"],function(t){n("sfr").action.reset(e,null,{silent:!0})}))}function s(n){if(n){for(var t=0;t<$("link").length;t++)"apple-touch-icon-precomposed"===$("link")[t].rel&&$("link")[t].remove()
;$("head").append('<link rel="apple-touch-icon-precomposed" type="image/x-icon" href="'+n+'"/>')}}function c(n){var t={duration_sec:7,side_off:1,start_sec:0,has_arrow:0,s_element_list:[{type:"text",value:"点击"},{type:"img",value:"//gh.bdstatic.com/static/gh/img/wise/safari_add.png"},{type:"text",value:"添加至桌面，快速访问结果"}],l_element_list:[{type:"text",value:"点击底部功能栏按钮"},{type:"img",value:"//gh.bdstatic.com/static/gh/img/wise/safari_help_1.png"},{type:"text",
value:"选择“添加到主屏幕”按钮，确认添加后，一个图标将添加到您的手机桌面，以便快速访问结果。"},{type:"img",value:"//gh.bdstatic.com/static/gh/img/wise/safari_help_2.png"}]};for(var e in t)t.hasOwnProperty(e)&&(t[e]=n[e]||t[e]);return t}var l=0,m=!1,p=!1,d={scrollnum:0};return{init:function(n){if(n=c(n),-1===page.comm.sasub.indexOf("gh_icon")){t(n)
;var e=new Date,i=parseInt(e.getMonth()+1,10)>=10?parseInt(e.getMonth()+1,10):"0"+parseInt(e.getMonth()+1,10),o=parseInt(e.getDate(),10)>=10?parseInt(e.getDate(),10):"0"+parseInt(e.getDate(),10);r("gh_icon"+e.getFullYear()+i+o),a(n),page.log.send({ct:69,cst:1,clk_extra:JSON.stringify({type:"icon_show"})})}else window.performance&&0===window.performance.navigation.type&&page.log.send({ct:69,cst:1,clk_extra:JSON.stringify({type:"icon_fromscreen"})}),page.log.send({ct:69,cst:1,
clk_extra:JSON.stringify({type:"icon_dl"})})},setIcon:function(){s(page.comm.iconUrl?page.comm.iconUrl:"https://gh.bdstatic.com/static/gh/icon/safariicon/morengh.png")}}}()});