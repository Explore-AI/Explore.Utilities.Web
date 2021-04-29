
//toggle-menu
$('.mobile-menu').on('click', function(){
    $('.desktop-menu').slideToggle();
  }); 
$('.desktop-menu li span.submenu-close').on('click', function(){
    $('.submenu-mb').slideToggle();
  }); 


//what-we-owl
$('.what-we-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
//customers-say
$('.clients-say-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//awards
$('.awards-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})