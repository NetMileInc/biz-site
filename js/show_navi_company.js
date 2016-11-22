var url = document.URL;
var urlArray = url.split("/");
var NewurlArray = urlArray.reverse();
if(NewurlArray[0] == ''){
	var page = "index";
}else{
	var pageArray = NewurlArray[0].split(".");
	var page = pageArray[0];
}
if(page == 'index'){
	var comp_index = ' class="now"';
}else{
	var comp_index = '';
}
if(page == 'history'){
	var comp_history = ' class="now"';
}else{
	var comp_history = '';
}
if(page == 'top_message'){
	var comp_top_message = ' class="now"';
}else{
	var comp_top_message = '';
}
if(page == 'message'){
	var comp_message = ' class="now"';
}else{
	var comp_message = '';
}
if(page == 'mission'){
	var comp_mission = ' class="now"';
}else{
	var comp_mission = '';
}
if(page == 'award'){
	var comp_award = ' class="now"';
}else{
	var comp_award = '';
}
if(page == 'accessmap'){
	var comp_accessmap = ' class="now"';
}else{
	var comp_accessmap = '';
}
document.write('			<ul>');
document.write('				<li'+comp_index+'><a href="/company/index.html">会社概要</a></li>');
document.write('				<li'+comp_mission+'><a href="/company/mission.html">企業理念</a></li>');
document.write('				<li'+comp_history+'><a href="/company/history.html">会社沿革</a></li>');
document.write('				<li'+comp_top_message+'><a href="/company/top_message.html">CEO挨拶</a></li>');
document.write('				<li'+comp_message+'><a href="/company/message.html">役員紹介</a></li>');
document.write('				<li'+comp_award+'><a href="/company/award.html">受賞履歴</a></li>');
document.write('				<li'+comp_accessmap+'><a href="/company/accessmap.html">アクセス</a></li>');
document.write('			</ul>');
document.close();