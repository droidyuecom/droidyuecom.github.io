define("modules/vsl/vslUtil",["require","ralltiir","versions-compare","@searchfe/user-agent","modules/vsl/vslNewUtil","@baidu/vsl-old/dist/vsl-configurator"],function(e){function r(){g=[];for(var e=A.list||[],r=e.length,i=0;i<r;i++){var t=e[i];if(h.indexOf(t.tplName)>-1&&t.container.querySelector("[voice-action]"))return g.push({srcid:t.srcid,tplName:t.tplName,order:t.order}),t.container}}function i(){return!(page&&page.comm&&page.comm.degrade&&+page.comm.degrade.www_voiceinteract)}
function t(e){return e.data={csrc:page.comm.browser,user_id:page.comm.user&&page.comm.user.uid||0,qid:page.comm.lid,debug:0,ivi_type:"aladin",page_info:{voiceCards:g},device_status:{}},e}function n(e,r){if(0!==e.status)throw e.msg;var i=e.data.data;return i.data={actions:i.actions},delete i.actions,i}function o(e){window.location.href=page.utils.buildSearchUrl(e)}function a(){return/SearchCraft\//.test(navigator.userAgent)&&window.Viaduct||window.Box&&window.Box.isBox}function s(e){
e.current.path.match(/\/s$/)?c():l()}function c(s,c){"function"==typeof s&&(c=s,s=null),s=s||{};var l=r();l&&a()&&i()&&(s.container&&l!==s.container||(s.requestFilter=s.requestFilter||t,s.responseFilter=s.responseFilter||n,e(["@baidu/vsl-old/dist/vsl"],function(e){if(!p){var r=new e.VoiceInteracter({rootNode:l,requestConfig:{url:s.url||w,requestFilter:s.requestFilter,responseFilter:s.responseFilter}});p=r,r.on("command",function(e){"search"===e.type&&o(e.data.query)}),r.on("fail",function(e){
o(e.data.query)}),r.run()}c&&c(p)})))}function l(){p&&(p.destroy(),p=null),g=[]}var u=e("ralltiir"),d=e("versions-compare"),m=e("@searchfe/user-agent"),v=e("modules/vsl/vslNewUtil"),f=e("@baidu/vsl-old/dist/vsl-configurator"),p=null,g=[],w="https://voice.baidu.com/api/voiceinteractionv3";if(m.isBaiduBox()&&d(m.baiduBoxVersion(),"10.13")>=0)return v;var h=["yl_musicembed","sg_vd_list","med_vaccine_search","ms_express_delivery","express_delivery","form3","zuowen_match","batchline","mortgage_cal"]
;return u.action.on("dispatching",s),{setProcessor:f.setProcessor,setProvider:f.setProvider,markInvisible:f.markInvisible,markVisible:f.markVisible,getInstance:c,destroy:l,createCardInstance:function(){}}});