$('.category-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="img/ic_left_arrow.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="img/ic_right_arrow.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 6, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 4, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 2, slidesToScroll: 1
    }
    }]
})

$().ready(function () {
    let t = $('#back-top')
    $(window).on('scroll', function () {
        $scrollTop = $(window).scrollTop(), t = $('#back-top'), $scrollTop > 350 ? t.addClass('visible') : t.removeClass('visible')
    
        $scrollTop > 0 ? $('.es-navbar').addClass('es-navbar-fixed') : $('.es-navbar').removeClass('es-navbar-fixed')
        })
        $htmlBody = $('html, body'), t.length && t.on('click', function (t) {
        $htmlBody.animate({scrollTop: 0}, 200), t.preventDefault()
    }   
)
})
