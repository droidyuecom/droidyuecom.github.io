define("modules/invoke/setInvokeCookie",["require"],function(e){function i(e){var i,o=page.cookie("SE_LAUNCH")||"",n=e+":[\\d]*",r=new RegExp(n,"g","i"),t=parseInt(page.comm.serverTime/60,10);if(5===e){if(r.test(o))return;i=o?o+"_5:"+t:"5:"+t}else i=r.test(o)?o.replace(r,e+":"+t):o?o+"_"+e+":"+t:e+":"+t;i&&page.cookie("SE_LAUNCH",i,{expires:864e5,domain:".baidu.com",path:"/"})}return i});