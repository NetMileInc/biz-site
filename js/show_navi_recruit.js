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
if(dirpage == 'recruit_ceo'){
	var recruit_ceo = ' class="now"';
}else{
	var recruit_ceo = '';
}
if(dirpage == 'recruit_mission'){
	var recruit_mission = ' class="now"';
}else{
	var recruit_mission = '';
}
if(dirpage == 'recruit_members'){
	var recruit_members = ' class="now"';
}else{
	var recruit_members = '';
}
if(dirpage == 'recruit_work' || dirpage == 'recruit_work_hamano' || dirpage == 'recruit_work_isima' || dirpage == 'recruit_work_nisino' || dirpage == 'recruit_work_ochiai' || dirpage == 'recruit_work_sudo' || dirpage == 'recruit_work_tadokoro' || dirpage == 'recruit_work_yagihasi'){
	var recruit_work = ' class="now"';
}else{
	var recruit_work = '';
}
if(dirpage == 'recruit_office'){
	var recruit_office = ' class="now"';
}else{
	var recruit_office = '';
}
if(dirpage == 'recruit_internship'){
	var recruit_internship = ' class="now"';
}else{
	var recruit_internship = '';
}
if(NewurlArray[1] == 'guide' || dirpage == 'recruit_entry_exp' || dirpage == 'recruit_entry_exp_confirm' || dirpage == 'recruit_entry_exp_thanks' || dirpage == 'recruit_entry_grad' || dirpage == 'recruit_entry_grad_confirm' || dirpage == 'recruit_entry_grad_thanks' || dirpage == 'recruit_entry_intern' || dirpage == 'recruit_entry_intern_confirm' || dirpage == 'recruit_entry_intern_thanks'){
	var recruit_guide = ' class="now"';
}else{
	var recruit_guide = '';
}
document.write('			<ul>');
document.write('				<li><a href="/recruit/index.html">採用情報TOP</a></li>');
document.write('				<li'+recruit_ceo+'><a href="/recruit/ceo.html">CEOメッセージ</a></li>');
document.write('				<!--li'+recruit_mission+'><a href="/recruit/mission.html">理念・価値観</a></li-->');
document.write('				<li'+recruit_members+'><a href="/company/message.html">役員紹介</a></li>');
// document.write('				<li'+recruit_work+'><a href="/recruit/work.html">ネットマイルの仕事</a></li>');
document.write('				<li'+recruit_office+'><a href="/recruit/office.html">オフィスツアー</a></li>');
document.write('				<li><a href="/company/history.html">ネットマイルヒストリー</a></li>');
document.write('				<li'+recruit_guide+'><a href="/recruit/guide/index.html">募集要項</a></li>');
document.write('				<li'+recruit_internship+'><a href="/recruit/internship.html">インターンシップ</a></li>');
document.write('			</ul>');
document.close();
