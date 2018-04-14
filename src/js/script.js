//= vendors/jquery-3.3.1.min.js
//= vendors/slick.min.js
//= vendors/aos.js
//= vendors/bootstrap.min.js


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
    appendDots: $(".news-container__news-slider-main__news-dots-container")
});

$('.testimonials-container__testimonials-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1600,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: $(".testimonials-container__testimonials-dots-container")
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



