define("modules/vsl/vslNewUtil",["require","ralltiir","@baidu/vsl/dist/vsl-configurator"],function(e){function r(){l=[];for(var e=A.list||[],r=e.length,i=0;i<r;i++){var t=e[i];if(m.indexOf(t.tplName)>-1&&t.container.querySelector("[voice-action]"))return l.push({srcid:t.srcid,tplName:t.tplName,order:t.order}),t.container}}function i(){return!(page&&page.comm&&page.comm.degrade&&+page.comm.degrade.www_voiceinteract)}function t(e){window.location.href=page.utils.buildSearchUrl(e)}function n(){
return/SearchCraft\//.test(navigator.userAgent)&&window.Viaduct||window.Box&&window.Box.isBox}function o(e){e.current.path.match(/\/s$/)?a():s()}function a(o,a){"function"==typeof o&&(a=o,o=null),o=o||{};var s=r();s&&n()&&i()&&(o.container&&s!==o.container||e(["@baidu/vsl/dist/vsl-h5"],function(e){u||(u=e.init({domain:"vsl",rootNode:s,customData:{csrc:page.comm.browser,user_id:page.comm.user&&page.comm.user.uid.toString()||"0",qid:page.comm.lid,debug:0,ivi_type:"aladin",page_info:{voiceCards:l},
device_status:{}},asrParams:{server_params:{product:"vsl"}}}),e.on("command",function(e){"search"===e.command&&t(e.text)}),e.on("error",function(e){t(e.text)}),e.run()),a&&a(u)}))}function s(){u&&e(["@baidu/vsl/dist/vsl-h5"],function(e){e.destroy()}),u=null,l=[]}var c=e("ralltiir"),d=e("@baidu/vsl/dist/vsl-configurator"),u=null,l=[],m=["yl_musicembed","sg_vd_list","med_vaccine_search","ms_express_delivery","express_delivery","form3","zuowen_match","batchline","mortgage_cal"]
;return c.action.on("dispatching",o),{setProcessor:d.setProcessor,setProvider:d.setProvider,markInvisible:d.markInvisible,markVisible:d.markVisible,getInstance:a,destroy:s,createCardInstance:function(){}}});