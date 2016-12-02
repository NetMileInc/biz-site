
jQuery.easing.quart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};


jQuery(document).ready(function(){

	jQuery('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = jQuery(this.hash);
			$target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				jQuery('html,body').animate({ scrollTop: targetOffset }, 1200, 'quart');
				return false;
			}
		}
	});

	jQuery(function($) {
		var nav = $('#globalNavi'),
		offset = nav.offset();
		$(window).scroll(function () {
		  if($(window).scrollTop() > offset.top) {
		    nav.addClass('fixed');
		  } else {
            nav.removeClass('fixed');
		  }
		});
	});
});

$(function(){
	  var state = false;
	  var scrollpos;
		$( ".menuSP_button" ).click(function() {
			if(state == false) {
				scrollpos = $(window).scrollTop();
				$('body').addClass('fixed').css({'top': -scrollpos});
				$('.menuSP_navi').css({
					"display": "block",
				});
				$(".menuSP_button").text('Close');
		      state = true;
		    } else {
				$('body').removeClass('fixed').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				$('.menuSP_navi').css({
					"display": "none",
				});
				$(".menuSP_button").text('Menu');
				state = false;
		    }
		});
	  $(window).resize(function(){
	    var win = $(window).width();
	    var p = 768;
	    if(win > p){
	      $(".menuSP_navi").show();
	    } else {
	      $(".menuSP_navi").hide();
	    }
	  });
});