(function ($) {

    'use strict';

	/*------------------------------------
        scrollUp
	--------------------------------------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() !== 0) {
			$('#scrollUp').fadeIn();
		} else {
			$('#scrollUp').fadeOut();
		}
    });
    
	$('#scrollUp').on('click', function () {
		$("html, body").animate({scrollTop: 0}, 600);
		return false;
	});


	// Accordion
	$('.faq-head').click(function() {
		$(this).parent().addClass('active').children('.faq-body').slideDown().parent().siblings().removeClass('active').children('.faq-body').slideUp();
	});

	// Owl 
	$('.testimonial-wrapper').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1,
				// autoHeight: true,
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	// Team
	$('.team-wrapper').owlCarousel({
		loop:false,
		margin:30,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

})(jQuery);
