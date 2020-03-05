$(document).ready(function() {
    $(".skitter-large").skitter({
        animation: "random",
        dots: false,
        navigation: true,
        theme: "square",
        stop_over: false
    });
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true
    });
    $('[data-toggle="datepicker2"]').datepicker({
        autoHide: true
    });
    $(".slider-feedback").slick({
        autoplay: true,
        infinite: true
    });
    $(".sidebar-dropdown .sidebar-list-item").click(function() {
        $(this).toggleClass("icon-animate");
    });
    $(".menu-nav-btn").click(function() {
        $(".sidebar").addClass("open");
        $(".backdrop-bg").fadeToggle();
    });
    $(".backdrop-bg,.close-sidebar").click(function() {
        $(".backdrop-bg").fadeToggle();
        $(".sidebar").removeClass("open");
    });

    $(".active-room-slider").slick({
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            '<button type="button" class="arrow-prev"><i class="far fa-angle-left"></i></button>',
        nextArrow:
            '<button type="button" class="arrow-next"><i class="far fa-angle-right"></i></button>'
    });

    $("Gallery-shadow a").fancybox();

    $(function(){
        $.scrollUp({
            scrollText: '<i class="fas fa-chevron-up"></i>',
            easingType: 'linear',
            scrollSpeed: 600,
            animation: 'fade'
        });
    });
});
