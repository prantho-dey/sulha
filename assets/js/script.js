(function ($) {

    'use strict';

	// Accordion
	$('.faq-head').click(function() {
		$(this).parent().addClass('active').children('.faq-body').slideDown().parent().siblings().removeClass('active').children('.faq-body').slideUp();
	});

	// Owl 
	$('.testimonial-wrapper').owlCarousel({
		loop:false,
		margin:30,
		nav:false,
		dots:true,
		autoHeight: false,
		responsive:{
			0:{
				items:1,
			},
			767:{
				items:2,
				autoHeight: true,
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

	// Read more
	$('.invisible-content').hide();
	$(document).on('click',"#read-button", function(){
		var morelessbtn = $(".invisible-content").is(":visible")?'Read more':'Show less';
		$(this).text(morelessbtn);
		$(this).parent('.single-testimonial').find('.invisible-content').toggle();
		$(this).parent('.single-testimonial').find('.visible-contnet').toggle();
	});
	
	// Team 
	$('.collaps').click(function() {
		$(this).toggleClass('active').parents('.single-team-member').children('.team-description').slideToggle();
	})

})(jQuery);
