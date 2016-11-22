var url = document.URL;
var urlArray = url.split("/");
var NewurlArray = urlArray.reverse();
if(NewurlArray[0] == ''){
	var page = "index";
}else{
	var pageArray = NewurlArray[0].split(".");
	var page = pageArray[0];
}
var dirpage = NewurlArray[1]+"_"+page;
if(dirpage == 'service_index'){
	var service_index = ' class="now"';
}else{
	var service_index = '';
}
if(dirpage == 'point_index'){
	var point_index = '<span class="now">';
	var point_index2 = '</span>';
}else{
	var point_index = '';
	var point_index2 = '';
}
if(dirpage == 'point_case' || dirpage == 'point_case_nomurajoy' || dirpage == 'point_case_psf' || dirpage == 'point_case_himawari' || dirpage == 'point_case_okidata'){
	var point_case = ' class="now"';
}else{
	var point_case = '';
}
if(dirpage == 'point_alliedlist'){
	var point_alliedlist = ' class="now"';
}else{
	var point_alliedlist = '';
}
if(dirpage == 'ad_index'){
	var ad_index = ' class="now"';
	var ad_index = '<span class="now">';
	var ad_index2 = '</span>';
}else{
	var ad_index = '';
	var ad_index2 = '';
}
document.write('			<ul>');
document.write('				<li'+service_index+'><a href="/0nm/netmile/co/www/service/index.html">ネットマイルの提供する<br />サービス</a></li>');
document.write('				<li>'+point_index+'<a href="/0nm/netmile/co/www/service/point/index.html">ポイントプログラム事業</a>'+point_index2);
document.write('					<p'+point_case+'><a href="/0nm/netmile/co/www/service/point/case.html">ネットマイル活用事例</a></p>');
document.write('					<p'+point_alliedlist+'><a href="/0nm/netmile/co/www/service/point/alliedlist.html">提携加盟サイト一覧</a></p>');
/*document.write('					<p class="newwin"><a href="http://www.netmile.co.jp/nm_biz/gift/" target="_blank">ネットマイルギフト</a></p>');*/
document.write('				</li>');
document.write('				<li>'+ad_index+'<a href="/0nm/netmile/co/www/service/ad/index.html">広告事業</a>'+ad_index2);
document.write('					<p class="newwin"><a href="http://biz.netmile.co.jp/download/mediainfo.pdf" target="_blank">媒体資料のダウンロード</a></p>');
document.write('				</li>');
document.write('				<li class="newwin"><a href="http://research.netmile.co.jp/" target="_blank">リサーチ事業</a></li>');
document.write('			</ul>');
document.close();