// header
$(function () {
    $("body").on("mousewheel", function (e) {
        var wheel = e.originalEvent.wheelDelta;

        if (wheel > 0) {
            $('.header').removeClass('active');
        } else {
            $('.header').addClass('active');
        }
    });
});


// main_slide
$(document).ready(function () {
    $('.main_slide').slick({
        infinite: true,
        speed: 15000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        draggable: false,
        arrows: false,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: 'linear'
    });
});

// mv_slide
var swiper = new Swiper(".mv_slide", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    breakpoints: {
        560: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        }
    }
});

AOS.init({
    duration: 1200,
});


// top btn
$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) { 
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
});


