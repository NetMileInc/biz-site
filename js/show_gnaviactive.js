jQuery(document).ready(
	function(){
    var $acurl2 = location.pathname.split("/")[1];
    //alert($acurl2); 
	if($acurl2.match("policy") || document.URL.match("sitemap.html")){
	}else if($acurl2.match("company")){
		$('.globalNaviMain > li').eq(1).addClass('active');
	}else if($acurl2.match("service")){
		$('.globalNaviMain > li').eq(2).addClass('active');
		// alert($acurl2);
	}else if($acurl2.match("news")){
		$('.globalNaviMain > li').eq(3).addClass('active');
	}else if($acurl2.match("recruit")){
		$('.globalNaviMain > li').eq(4).addClass('active');
	}else{
		$('.globalNaviMain > li').eq(0).addClass('active');	//ホーム
	}
});
