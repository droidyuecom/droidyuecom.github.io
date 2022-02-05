function shouldDisplayBlogRoll() {

    return true ;
}

function makeBlogRollPrefix() {
    return '<section><h1>Blogrolls</h1>';
}

function makeBlogRollSuffix() {
    return '</section>';
}

function isBlogRollInDebug() {
    return false;
}




var sDroidBlogRollClass = "droid_blogroll_class";


function makeBlogRollDataSource() {
    var data = {};
        
    data['技术小黑屋血拼'] = 'http://droidyue.com/buy/';
    //data['友情链接'] = 'http://droidyue.com/links/';
    
    data['Github程序员,极客IT男女秋冬装连帽卫衣外套'] = 'https://s.click.taobao.com/t?e=m%3D2%26s%3DwoSIkDYPqJEcQipKwQzePOeEDrYVVa64K7Vc7tFgwiHjf2vlNIV67tbnx6I9k9jJ7km9mWjOCUbM3gYQjCL89vSdxyvKgR5IYpon8UCVSYbLpyU0ndK1k5QOL1xF%2Fxg18v5XPGCNToGRwDcbfzfTz6Gv2iXKUYvOomfkDJRs%2BhU%3D&pvid=10_117.100.136.71_899_1482670043778';

          
    data['XBrowser-极简快速的浏览器'] = 'http://www.xbext.com';

       
    data['OneDrive 超实用网盘'] = 'https://onedrive.live.com?invref=6b59396564b1963a&invscr=90';
	
    data['玩客云 私人云盘 迅雷 畅快下载 轻NAS'] = "https://u.jd.com/ZLxAMy"; 	
    data['Vultr VPS, 注册赠送50刀，节点丰富,最低3美刀/月,可支付宝'] = 'https://www.vultr.com/?ref=7819525-4F';
	data["Virmach 真实可用，1.25美刀/月，可支付宝"]="https://billing.virmach.com/aff.php?aff=9882";
    data['超强路由器 网件NETGEAR WIFI双频千兆无线路由器 中继 OPENWRT多拨'] = 'https://s.click.taobao.com/t?e=m%3D2%26s%3DvCkZ5LnV6jEcQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67qNt1tv4PQ%2FZ2yqscP0DbOLM3gYQjCL89vSdxyvKgR5IYpon8UCVSYYxlixgehhYB0Tt1%2FHfNXx2BMGh5JTLAt%2FtF%2FQ8iK%2FmlXSWvTmLw6qt&pvid=10_45.76.81.169_13674_1479774191207';
    data['通勤读书神器Kindle'] = 'https://www.amazon.cn/gp/product/B0186FESGW/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=536&creative=3200&creativeASIN=B0186FESGW&linkCode=as2&tag=droidyue-23';

    data = sortJsonObject(data);
    
    return data;












}


