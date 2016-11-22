$(window).bind("load", function(){
	if(document.URL.match("2016") || document.URL.match("index") || document.URL.match("publicity.html")){
		$('.bnList11').addClass('now');
	}else if(document.URL.match("2015")){
		$('.bnList10').addClass('now');
	}else if(document.URL.match("2014")){
		$('.bnList9').addClass('now');
	}else if(document.URL.match("2013")){
		$('.bnList8').addClass('now');
	}else if(document.URL.match("2012")){
		$('.bnList7').addClass('now');
	}else if(document.URL.match("2011")){
		$('.bnList6').addClass('now');
	}else if(document.URL.match("2010")){
		$('.bnList5').addClass('now');
	}else if(document.URL.match("2009")){
		$('.bnList4').addClass('now');
	}else if(document.URL.match("2008")){
		$('.bnList3').addClass('now');
	}else if(document.URL.match("2007")){
		$('.bnList2').addClass('now');
	}else if(document.URL.match("2006")){
		$('.bnList1').addClass('now');
	}
 
});

function writeSubnavi(){
	var h4title = "";
	var ctURL = "";
	var topURL = "";
	var html = "";
	if(document.URL.match("press") || document.URL.match("index")) {
		var h4title ="プレスリリース"
		var ctURL ="press"
		var topURL ="index"
	}else if(document.URL.match("publicity")){
		var h4title ="パブリシティ"
		var ctURL ="publicity"
		var topURL ="publicity"
	}
	html += '<div class="IndexList">';
	html += '<h4>'+ h4title +' インデックス</h4>';
	html += '<div class="bnBox"><ul>';
	html += '<li class="bnList11"><a href="/news/'+topURL+'.html">2016年</a></li>';
	html += '<li class="bnList10"><a href="/news/'+ctURL+'_2015.html">2015年</a></li>';
	html += '<li class="bnList9"><a href="/news/'+ctURL+'_2014.html">2014年</a></li>';
	html += '<li class="bnList8"><a href="/news/'+ctURL+'_2013.html">2013年</a></li>';
	html += '<li class="bnList7"><a href="/news/'+ctURL+'_2012.html">2012年</a></li>';
	html += '<li class="bnList6"><a href="/news/'+ctURL+'_2011.html">2011年</a></li>';
	html += '<li class="bnList5"><a href="/news/'+ctURL+'_2010.html">2010年</a></li>';
	html += '<li class="bnList4"><a href="/news/'+ctURL+'_2009.html">2009年</a></li>';
	html += '<li class="bnList3"><a href="/news/'+ctURL+'_2008.html">2008年</a></li>';
	html += '<li class="bnList2"><a href="/news/'+ctURL+'_2007.html">2007年</a></li>';
	html += '<li class="bnList1"><a href="/news/'+ctURL+'_2006.html">2006年</a></li>';
	html += '</ul></div>';
	html += '</div>';

	document.write(html);
}