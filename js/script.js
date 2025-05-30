//fix lista
$(window).scroll(function() {
	var height = $(window).scrollTop();

	if(height  > 139) {
		$( "#fixmenu" ).addClass("navbar-fixed-top");
		$( "#logo_fixed" ).addClass("logo_fixed");
	} else {
		$( "#fixmenu" ).removeClass("navbar-fixed-top");
		$( "#logo_fixed" ).removeClass("logo_fixed");
	}

});


$('.matches-owl').owlCarousel({
	rtl:true,
	loop:false,
	margin:0,
	nav:true,
	navText: ['',''],
	startPosition: $('.matches-owl .match.future').length - 2,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:2,
			nav:true
		},
		1000:{
			items:3
		},
		1200:{
			items:4
		}
	}
});


$(document).ready(function() {
	if ($(window).width()>778) {
		jQuery('#nav-menu ul.nav li.dropdown').hover(function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		});
	}

});





$(document).ready(function() {
	if ($(window).width()<977) {
	  $("#topstory-big").addClass("topstory-small");
	} else {
	  $("#topstory-big").removeClass("topstory-small");
	}

});





$(window).on('resize', function(){
	  var win = $(this); //this = window
	  if (win.width() < 977) {
		$("#topstory-big").addClass("topstory-small");
	  } else {
		$("#topstory-big").removeClass("topstory-small");
	  }
});

