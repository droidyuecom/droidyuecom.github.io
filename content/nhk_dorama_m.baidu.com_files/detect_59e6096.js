define("fusion/deps/detect",["require"],function(e){var r=navigator.userAgent.toLowerCase();return{os:function(){if(r){var e;return $&&$.os?$.os.ios?e="ios":$.os.android&&(e="android"):e=r.indexOf("iphone")>-1||r.indexOf("ipod")>-1?"ios":"android",{n:e,v:""}}}(),browser:function(){if(r){var e,o="";return-1!=r.indexOf("baiduboxapp/")?e="zbios":-1!=r.indexOf("baidubrowser/")?(e="bmbadr",o=r.match(/baidubrowser\/([\d\.]*)/),
o=o&&o[1]?o[1]:""):-1!=r.indexOf("mqqbrowser/")&&-1===r.indexOf("micromessenger/")?(e="qq",o=r.match(/mqqbrowser\/([\d\.]*)/),o=o&&o[1]?o[1]:""):-1!=r.indexOf("micromessenger/")?(e="wechat",o=r.match(/micromessenger\/([\d\.]*)/),o=o&&o[1]?o[1]:""):-1!=r.indexOf("ucbrowser/")?(e="uc",o=r.match(/ucbrowser\/([\d\.]*)/),o=o&&o[1]?o[1]:""):-1!=r.indexOf("sogoumobilebrowser/")?(e="sogou",o=r.match(/sogoumobilebrowser\/([\d\.]*)/),o=o&&o[1]?o[1]:""):-1!=r.indexOf("crios/")?(e="chrome",
o=r.match(/crios\/([\d\.]*)/),o=o&&o[1]?o[1]:""):e="other",{n:e,v:o}}}()}});