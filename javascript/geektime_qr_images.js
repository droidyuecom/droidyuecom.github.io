
var originalGeekTimeQrImages = [
	"https://asset.droidyue.com/image/geektime/shejimoshi_zhimei_zaoniao.jpg",
	
	"https://asset.droidyue.com/image/maths_for_programer.jpeg",

	"https://asset.droidyue.com/image/geektime/suanfa_mianshi_tongguan_40_jiang.jpeg",

	"https://asset.droidyue.com/image/geektime/tech_management.jpeg",

	"https://asset.droidyue.com/image/geektime/qiuyue_de_chanpin_shijian.jpeg",

	"https://asset.droidyue.com/image/geektime/shenru_chajie_jvm.jpeg",

	"https://asset.droidyue.com/image/geektime/kuaishu_shangshou_kotlin_kaifa_zhangtao.jpeg",

    	"https://asset.droidyue.com/image/geektime/qutanwangluoxieyi.jpeg",

    	"https://asset.droidyue.com/image/java_hexin_jishu_36_jiang.jpeg",

    	"https://asset.droidyue.com/image/geektime/zhuyun_de_jishu_guanli_ke.jpeg",

	"https://asset.droidyue.com/image/geektime/zuoerduo_haozi_zhuanlan.jpeg",

    	"https://asset.droidyue.com/image/jishlingdaoli_300_jiang.jpeg",
	
	"https://asset.droidyue.com/image/geektime/mysql_shizhan_0308.png",
	
	"https://asset.droidyue.com/image/geektime/go_yuyan_hexin_36_jiang.png",
	
	"https://asset.droidyue.com/image/geektime/jiqixuexi_40_jiang_0308.png",
	
	"https://asset.droidyue.com/image/2019_05/gitchat_refer_new.jpg",
	
	"https://asset.droidyue.com/image/2019_05/java_performance.jpeg"
];
var tempGeekTimeImages = []
tempGeekTimeImages.push(originalGeekTimeQrImages[0])
var geekTimeQrImages = tempGeekTimeImages.concat(shuffleArray(originalGeekTimeQrImages));
