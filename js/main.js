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

$('.main-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev main-slick-arrow" aria-label="Previous" type="button"><img src="img/ic_left_arrow.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next main-slick-arrow" aria-label="Next" type="button"><img src="img/ic_right_arrow.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 1.7, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 1, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 1, slidesToScroll: 1
    }
    }]
})

$('.main-slick-two').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev-two slick-arrow-two last-arrow1" aria-label="Previous" type="button"><img src="img/arrow-down-black.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next-two slick-arrow-two last-arrow2" aria-label="Next" type="button"><img src="img/arrow-down-black.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 6, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 1, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 1, slidesToScroll: 1
    }
    }]
})

$('.main-two-category-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1.1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev main-slick-arrow slick-two" aria-label="Previous" type="button"><img src="img/ic_left_arrow.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next main-slick-arrow slick-two two-s" aria-label="Next" type="button"><img src="img/ic_right_arrow.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 4, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 1.1, slidesToScroll: 1
    }
    }]
})


$('.main-slick-3').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev main-slick-arrow" aria-label="Previous" type="button"><img src="img/ic_left_arrow.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next main-slick-arrow" aria-label="Next" type="button"><img src="img/ic_right_arrow.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 2.7, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 4, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 1, slidesToScroll: 1
    }
    }]
})

$('.main-slick-dif').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev-two slick-arrow-two last-arrow1" aria-label="Previous" type="button"><img src="img/arrow-down-black.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next-two slick-arrow-two last-arrow2" aria-label="Next" type="button"><img src="img/arrow-down-black.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 3, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 2, slidesToScroll: 1
    }
    }]
})

$(".es-years-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    centerPadding: 0,
    asNavFor: ".es-history-slider",
    prevArrow:
        '<button class="slick-prev slick-arrow slider-3" aria-label="Previous" type="button"><img src="img/ic_slider-left.svg"/></button>',
    nextArrow:
        '<button class="slick-next slick-arrow slider-3" aria-label="Next" type="button"><img src="img/ic_slider-right.svg"/></button>',
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
            adaptiveHeight: true,
            centerMode: true,
            variableWidth: true,
            variableHeight: true,
            arrows: true,
        },
    },
    ],
});

$(".es-history-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerPadding: 0,
    asNavFor: ".es-years-slider",
    responsive: [
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            verticalSwiping: false,
            adaptiveHeight: true,
            centerMode: true,
        },
        },
    ],
});

$(".es-years-slider").slick("slickGoTo", 2);