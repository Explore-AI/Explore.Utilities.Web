jQuery(document).ready(function($){
	    $(".right-menu > ul > li.menu-item-has-children > a").after('<span class="submenu-close"></span>');
	    $('span.submenu-close').click(function() {
	    $(this).next().slideToggle();
		});
		
		$('.mobile-menu-icon').click(function() {
	   		$('.right-menu').slideToggle();
		});

		$('.oursolution_slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dots: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.ourcase_slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dot: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.wasteour-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dot: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.wastecase-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dot: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.waterour-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dot: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});

		$('.watercase-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    dot: false,
		    responsive:{
		        0:{
		            items:1
		        },
		       
		        1000:{
		            items:1
		        }
		    }
		});


});