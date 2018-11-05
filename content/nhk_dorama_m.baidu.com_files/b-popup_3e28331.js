define("fusion/b-popup/b-popup",["fusion/deps/fusion.best","fusion/deps/naboo","fusion/deps/spark"],function(t,e,o){return t("b-popup",{
css:"/*最外层wrapper*/.b-popup-wrapper {  z-index: 900;}/*遮罩*/.b-popup-mask {  display: none;  position: fixed;  left: 0;  top: 0;  opacity: 0;  width: 100%;  height: 100%;  background: rgba(0, 0, 0, 0.5);  z-index: 901;}/*head和content的外层容器*/.b-popup-modal {  display: none;  position: fixed;  left: 0;  width: 100%;  background-color: #fff;  z-index: 902;  margin: 0;  overflow: hidden;  -webkit-transform: translate3d(0, 100%, 0);  transform: translate3d(0, 100%, 0);}/*头部*/.b-popup-head {  font-size: 18px;  margin: 10px 26px;}/*title*/.b-popup-title {  overflow: hidden;  white-space: nowrap;  text-overflow: ellipsis;}/*remove按钮*/.b-popup-remove {  line-height: 17px;  position: absolute;  right: 8px;  top: 10px;}/*内容*/.b-popup-content {  text-align: center;  margin: 0 26px 10px;}",
tpl:'<div class="b-popup-wrapper">\n    <div class="b-popup-modal">\n        <div class="b-popup-head">\n            <div class="b-popup-title">${title|raw}</div>\n            <div class="b-popup-remove c-icon">&#xe61a</div>\n        </div>\n        <div class="b-popup-content">${content|raw}</div>\n    </div>\n    <div class="b-popup-mask"></div>\n</div>\n',props:{title:{type:String,value:"",onChange:function(){this.render()}},content:{type:String,value:"",onChange:function(){this.render()}},
fullView:{type:Boolean,value:!1},duration:{type:Number,value:400},direction:{type:String,value:"bottom"},headerStyle:{type:Object,value:{}}},init:function(){e.register("fade",function(t,e,n,a){o.css3(e,{opacity:a},n,"ease",0,function(){t()})}),e.register("slide",function(t,e,n,a,i){switch(a){case"left":var p="translate3d( -"+i+", 0, 0)";break;case"right":var p="translate3d("+i+", 0, 0)";break;case"top":var p="translate3d(0, -"+i+", 0)";break;default:var p="translate3d(0, "+i+", 0)"}var s={
transform:p,"-webkit-transform":p};o.css3(e,s,n,"ease",0,function(){$(e).css({transform:"none","-webkit-transform":"none"}),t()})});var t=this;$(this.element).on("click",".b-popup-mask,.b-popup-remove",function(){t.close()}).on("touchmove",".b-popup-content",function(t){t.stopPropagation()})},open:function(){var t=this,o=$(window).height(),n=this.$(".b-popup-mask"),a=this.$(".b-popup-modal"),i=this.getProp("fullView");(i||a.height()>o)&&a.height("100%");var p=this.getProp("headerStyle")
;p&&(i||a.height()>=o)&&a.find(".b-popup-head").css({"background-color":p.bg,color:p.color}),n.show();var s=this.getProp("direction");switch(s){case"top":$("#sfa-head").length&&!i&&(n.css("z-index","498"),a.css({"z-index":"499",top:"44px!important"})),a.css({top:0,transform:"translate3d(0, -100%, 0)","-webkit-transform":"translate3d(0, -100%, 0)"});break;case"left":a.css({bottom:0,transform:"translate3d(-100%, 0, 0)","-webkit-transform":"translate3d(-100%, 0, 0)"});break;case"right":a.css({
bottom:0,transform:"translate3d(100%, 0, 0)","-webkit-transform":"translate3d(100%, 0, 0)"});break;default:a.css({bottom:0,transform:"translate3d(0, 100%, 0)","-webkit-transform":"translate3d(0, 100%, 0)"})}a.show();var r=this.getProp("duration");e.p(e.fade(n.get(0),r,1),e.slide(a.get(0),r,s,"0")).start(function(){t.trigger("opened")})},close:function(){var t=this,o=this.$(".b-popup-mask"),n=this.$(".b-popup-modal"),a=this.getProp("duration"),i=this.getProp("direction")
;e.p(e.fade(o.get(0),a,0),e.slide(n.get(0),a,i,"100%")).start(function(){o.hide(),n.hide(),t.trigger("closed")})},detached:function(){o.dispose()}})});