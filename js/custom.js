$(function () {

    //preloader js
    $(window).on('load', function () {
        $(".preloader").delay(1000).fadeOut(500);
    });

    var back2top = $(".back-2-top");
    var html_body = $("html, body");

    back2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }

        if (scrolling > 100) {
            $(".main-menu").addClass("bg");
        } else {
            $(".main-menu").removeClass("bg");
        }
    });

    //smooth scroll
    $('.navbar-nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });



    // banner slider
    $('.banner-slidess').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        dots: false,
        autoplaySpeed: 2000,
    });

    //testimonial-slider
    $('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 2000,
        dots: false,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
//            {
//                breakpoint: 480,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1
//                }
//            }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


});
