//= vendors/jquery-3.3.1.min.js
//= vendors/slick.min.js
//= vendors/aos.js
//= vendors/bootstrap.min.js
//
// if (screen.width > 992) {
//     document.write ('<script type="text/javascript" src="assets/js/aos.js" ></sc' + 'ript>');
//
// }

$(document).ready(function() {
    setTimeout(function() {
        $('.wrapper').addClass('loaded');
    }, 1100);
});

(function($) {

    // Animate bar menu
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        if( $('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }else{
            $('body').toggleClass('open-menu');
        }
    });

    // Close menu when press esc
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
        }
    });

})(jQuery);

$('.header-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    appendDots: $(".dots-container")
});

$('.news-container__news-slider-main__news-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: $(".news-container__news-slider-main__news-dots-container"),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {

                slidesToShow: 1
            }
        }
    ]
});

$('.testimonials-container__testimonials-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1600,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: $(".testimonials-container__testimonials-dots-container"),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.slider-1').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});
$('.slider-3').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-4').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-5').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-6').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-7').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-8').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-9').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.slider-10').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    fade: true,
    cssEase: 'linear'
});

$('.left-arrow').click(function(){
    $('.header-slider').slick('slickPrev');
});

$('.right-arrow').click(function(){
    $('.header-slider').slick('slickNext');
});

$('.left-arrow').click(function(){
    $('.slider-1').slick('slickPrev');
});

$('.right-arrow').click(function(){
    $('.slider-1').slick('slickNext');
});

$('.left-arrow-2').click(function(){
    $('.slider-2').slick('slickPrev');
});

$('.right-arrow-2').click(function(){
    $('.slider-2').slick('slickNext');
});

$('.left-arrow-3').click(function(){
    $('.slider-3').slick('slickPrev');
});

$('.right-arrow-3').click(function(){
    $('.slider-3').slick('slickNext');
});


$('.left-arrow-4').click(function(){
    $('.slider-4').slick('slickPrev');
});

$('.right-arrow-4').click(function(){
    $('.slider-4').slick('slickNext');
});


$('.left-arrow-5').click(function(){
    $('.slider-5').slick('slickPrev');
});

$('.right-arrow-5').click(function(){
    $('.slider-5').slick('slickNext');
});


$('.left-arrow-6').click(function(){
    $('.slider-6').slick('slickPrev');
});

$('.right-arrow-6').click(function(){
    $('.slider-6').slick('slickNext');
});


$('.left-arrow-7').click(function(){
    $('.slider-7').slick('slickPrev');
});

$('.right-arrow-7').click(function(){
    $('.slider-7').slick('slickNext');
});


$('.left-arrow-8').click(function(){
    $('.slider-8').slick('slickPrev');
});

$('.right-arrow-8').click(function(){
    $('.slider-8').slick('slickNext');
});


$('.left-arrow-9').click(function(){
    $('.slider-9').slick('slickPrev');
});

$('.right-arrow-9').click(function(){
    $('.slider-9').slick('slickNext');
});


$('.left-arrow-10').click(function(){
    $('.slider-10').slick('slickPrev');
});

$('.right-arrow-10').click(function(){
    $('.slider-10').slick('slickNext');
});
$('.left-arrow-news').click(function(){
    $('.news-container__news-slider-main__news-slider').slick('slickPrev');
});

$('.right-arrow-news').click(function(){
    $('.news-container__news-slider-main__news-slider').slick('slickNext');
});

$('.left-arrow-testimonials').click(function(){
    $('.testimonials-container__testimonials-slider').slick('slickPrev');
});

$('.right-arrow-testimonials').click(function(){
    $('.testimonials-container__testimonials-slider').slick('slickNext');
});

$('.left-arrow-portfolio').click(function(){
    $('.single-portfolio-slider-container__width-1440__slider-portfolio').slick('slickPrev');
});

$('.right-arrow-portfolio').click(function(){
    $('.single-portfolio-slider-container__width-1440__slider-portfolio').slick('slickNext');
});


// $(window).resize(function() {
//     $('.header-slider').css({
//         'position': 'relative',
//         'left': -($(window).width() - $('.width-1440').width()) / 2
//     });
// });

// $(window).on('load', function () {
//     $('.header-slider').css({
//         'position': 'relative',
//         'left': -($(window).width() - $('.width-1440').width()) / 2
//     });
// });
//
//

$(window).resize(function() {
    $('.bg-gray-single-news').css({
        'width': $(window).width() - ($(window).width() / 4)
    });
});

$(window).on('load', function () {
    $('.bg-gray-single-news').css({
        'width': $(window).width() - ($(window).width() / 4)
    });
});


$(window).resize(function() {
    $('.portfolio-container__width-1440__vertical-title-right div hr').css({
        'width': $('.portfolio-container__width-1440').height() - 250
    });
});

$(window).on('load', function () {
    $('.portfolio-container__width-1440__vertical-title-right div hr').css({
        'width': $('.portfolio-container__width-1440').height() - 250
    });
});


$(window).resize(function() {
    $('.line-status-height').css({
        'width': ($('.portfolio-container').height() + $('#portfolio-height').height()) - 83
    });
});

$(window).on('load', function () {
    $('.line-status-height').css({
        'width': ($('.portfolio-container').height() + $('#portfolio-height').height()) - 83
    });
});


$(window).resize(function() {
    $('#left-line').css({
        'height': $('.single-portfolio-slider-container__width-1440').height() - 48
    });
});

$(window).on('load', function () {
    $('#left-line').css({
        'height': $('.single-portfolio-slider-container__width-1440').height() - 48
    });
});





$(window).resize(function() {
    $('.single-portfolio-slider-container__gray-bg-portfolio').css({

        'width': $(window).width() - ($(window).width() / 3)
    });
});

$(window).on('load', function () {
    $('.single-portfolio-slider-container__gray-bg-portfolio').css({

        'width': $(window).width() - ($(window).width() / 3)
    });
});


$(window).resize(function() {
    $('.single-portfolio-slider-container__width-1440__title-with-line hr').css({
        'width': $('.width-1440').width() - ($('.width-1440').width() / 2)
    });
});

$(window).on('load', function () {
    $('.single-portfolio-slider-container__width-1440__title-with-line hr').css({
        'width': $('.width-1440').width() - ($('.width-1440').width() / 2)
    });
});



$(window).resize(function() {
    $('.slider-width').css({
        'position': 'relative',
        'left': -($(window).width() - $('.width-1440').width()) / 2
    });
});

$(window).on('load', function () {
    $('.slider-width').css({
        'position': 'relative',
        'left': -($(window).width() - $('.width-1440').width()) / 2
    });
});

$(window).resize(function() {
    $('.gray-bg-navigation').css({
        'width': (($('.width-1440').width()) / 2) + ($(window).width() - $('.width-1440').width()) / 2
    });
});

$(window).on('load', function () {
    $('.gray-bg-navigation').css({
        'width': (($('.width-1440').width()) / 2) + ($(window).width() - $('.width-1440').width()) / 2
    });
});


$(window).resize(function() {
    $('.left-bg-gray').css({
        'width': ($(window).width() / 2) + 200
    });
});


$(window).on('load', function () {
    $('.gray-bg-style').css({
        'width': ($('.portfolio-container__width-1440__wrapper__item').width()) - (($('.portfolio-container__width-1440__wrapper__item').width()) / 4)
    });
});


$(window).resize(function() {
    $('.gray-bg-style').css({
        'width': ($('.portfolio-container__width-1440__wrapper__item').width()) - (($('.portfolio-container__width-1440__wrapper__item').width()) / 4)
    });
});

$(window).on('load', function () {
    $('.left-bg-gray').css({
        'width': ($(window).width() / 2) + 200
    });
});


$(window).resize(function() {
    $('.right-bg-gray').css({
        'width': ($(window).width() / 2) + 250
    });
});

$(window).on('load', function () {
    $('.right-bg-gray').css({
        'width': ($(window).width() / 2) + 250
    });
});


$(window).resize(function() {
    $('.width-980').css({
        'position': 'relative',
        'width': (($('.width-1440').width()) / 2) - 50
    });
});

$(window).on('load', function () {
    $('.width-980').css({
        'position': 'relative',
        'width': (($('.width-1440').width()) / 2) - 50
    });
});

$(window).resize(function() {
    $('.info-under-slider-container').css({
        'position': 'relative',
        'width': (($('.width-1440').width()) / 2) - 45
    });
});

$(window).on('load', function () {
    $('.info-under-slider-container').css({
        'position': 'relative',
        'width': (($('.width-1440').width()) / 2) - 45
    });
});


$(window).resize(function() {
    $('.gray-bg-slider').css({
        'height': (($('.header-slider').height()) - 100)
    });
});

$(window).on('load', function () {
    $('.gray-bg-slider').css({
        'height': (($('.header-slider').height()) - 100)
    });
});

$(window).resize(function() {
    $('.social-slider-container__item').css({
        'width': (($('.header-slider').height()) / 2)
    });
});

$(window).on('load', function () {
    $('.social-slider-container__item').css({
        'width': (($('.header-slider').height()) / 2)
    });
});


$(window).resize(function() {
    $('.social-slider-container').css({
        'height': (($('.header-slider').height()))
    });
});

$(window).on('load', function () {
    $('.social-slider-container').css({
        'height': (($('.header-slider').height()))
    });
});

$(window).resize(function() {
    $('.line-vertical').css({
        'width': (($('.slider-1').height()))
    });
});

$(window).on('load', function () {
    $('.line-vertical').css({

        'width': (($('.slider-1').height()))
    });
});

$(window).resize(function() {
    $('.footer-container__width-1440__gmap-container').css({
        'width': $(window).width() - (($(window).width() - $('.width-1440').width()) / 2) - $('.footer-container__width-1440__footer-info').width()
    });
});

$(window).on('load', function () {
    $('.footer-container__width-1440__gmap-container').css({
            'width': $(window).width() - (($(window).width() - $('.width-1440').width()) / 2) - $('.footer-container__width-1440__footer-info').width()
    });
});

$(window).resize(function() {
    $('.bg-gray-portfolio').css({
        'width': $('.portfolio-container').width() - ($('.portfolio-container').width() / 4)
    });
});

$(window).on('load', function () {
    $('.bg-gray-portfolio').css({
        'width': $('.portfolio-container').width() - ($('.portfolio-container').width() / 4)
    });
});



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.menu-container').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.menu-container').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.menu-container').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}



$('.single-portfolio-slider-container__width-1440__slider-portfolio').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true

    // asNavFor: '.single-portfolio-slider-container__width-1440__content__slider-portfolio-thumb'
});
// $('.single-portfolio-slider-container__width-1440__content__slider-portfolio-thumb').slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     asNavFor: '.single-portfolio-slider-container__width-1440__slider-portfolio',
//     dots: true,
//     autoplay: true,
//     focusOnSelect: true,
//     arrows: false
//
// });



$(document).ready(function(){
    $('.form-element').focus(function(){
        $(this).siblings('label').addClass('focus');
    });
    $('.form-element').focusout(function(){
        if ($(this).val() === ''){
            $(this).siblings('label').removeClass('focus');
        }
    });
});

$(function() {
    function maskImgs() {
        //$('.img-wrapper img').imagesLoaded({}, function() {
        $.each($('.img-wrapper img'), function(index, img) {
            var src = $(img).attr('src');
            var parent = $(img).parent();
            parent
                .css('background', 'url(' + src + ') no-repeat center center')
                .css('background-size', 'cover');
            $(img).remove();
        });
        //});
    }

    var preview = {
        init: function() {
            preview.setPreviewImg();
            preview.listenInput();
        },
        setPreviewImg: function(fileInput) {
            var path = $(fileInput).val();
            var uploadText = $(fileInput).siblings('.file-upload-text');

            if (!path) {
                $(uploadText).val('');
            } else {
                path = path.replace(/^C:\\fakepath\\/, "");
                $(uploadText).val(path);

                preview.showPreview(fileInput, path, uploadText);
            }
        },
        showPreview: function(fileInput, path, uploadText) {
            var file = $(fileInput)[0].files;

            if (file && file[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    var previewImg = $(fileInput).parents('.file-upload-wrapper').siblings('.preview');
                    var img = $(previewImg).find('img');

                    if (img.length == 0) {
                        $(previewImg).html('<img src="' + e.target.result + '" alt=""/>');
                    } else {
                        img.attr('src', e.target.result);
                    }

                    uploadText.val(path);
                    maskImgs();
                }

                reader.onloadstart = function() {
                    $(uploadText).val('uploading..');
                }

                reader.readAsDataURL(file[0]);
            }
        },
        listenInput: function() {
            $('.file-upload-native').on('change', function() {
                preview.setPreviewImg(this);
            });
        }
    };
    preview.init();
});


