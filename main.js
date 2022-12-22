$(function () {

    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_width').addClass('on');
        } else {
            $('.header_width').removeClass('on');
        }

    });


    $('.main_video').YTPlayer({
        videoURL: 'https://youtu.be/11KwsRh9XHk?list=PLi_dgkvr6Fr5wxUEq-JpMh3RSPBtH5PrK',
        containment: '.video_wrap',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });


    var conP = $('.main_con_left_inner').offset().top;
    // console.log(conP);

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        // console.log(sct, conP);
        if (sct > conP - 700) {
            $('.main_con_left_inner').addClass('on')
        } else {
            $('.main_con_left_inner').removeClass('on')
        }
    });



    var conP02 = $('.main_ed_center').offset().top;
    // console.log(conP02);

    $(window).on('scroll', function () {
        var sct02 = $(window).scrollTop();
        // console.log(sct, conP);
        if (sct02 > conP02 - 1300) {
            $('.main_ed_center').addClass('on')
        } else {
            $('.main_ed_center').removeClass('on')
        }
    });



    // mainSlide
    $('.main_slide').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });









})
