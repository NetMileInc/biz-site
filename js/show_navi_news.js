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
if(page == 'index' || page == 'press_bn' || page == 'press_2006' || page == 'press_2007' || page == 'press_2008' || page == 'press_2009' || page == 'press_2010' || page == 'press_2011' || page == 'press_2012' || page == 'press_2013' || page == 'press_2014' || page == 'press_2015'){
	var news_index = ' class="now"';
}else{
	var news_index = '';
}
if(page == 'publicity' || page == 'publicity_bn' || page == 'publicity_2006' || page == 'publicity_2007' || page == 'publicity_2008' || page == 'publicity_2009' || page == 'publicity_2010' || page == 'publicity_2011' || page == 'publicity_2012' || page == 'publicity_2013' || page == 'publicity_2014' || page == 'publicity_2015'){
	var news_publicity = ' class="now"';
}else{
	var news_publicity = '';
}
document.write('<ul>');
document.write('<li'+news_index+'><a href="/news/index.html">プレスリリース</a></li>');
document.write('<li'+news_publicity+'><a href="/news/publicity.html">パブリシティ</a></li>');
document.write('</ul>');
document.close();
