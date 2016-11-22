function getYear() {
	var now = new Date();
	var year = now.getYear();
	return (year < 2000) ? year+1900 : year;
}
jQuery(function($) {
	$('a[href^=#pagetop]').click(function(){
	var speed = 300;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
	});
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
document.write('<p id="page-top"><a href="#pagetop">PAGE TOP</a></p>');
document.write('<div class="footerCopy">');
document.write('<div class="infooterBox"><p>株式会社ネットマイル</p>');
document.write('<p>Copyright (C) 2001-'+ getYear()+' NetMile, Inc. All Rights Reserved.</p></div></div>');
document.close();