$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 10) {

        $('.header').addClass('show');

    } else {

        $('.header').removeClass('show');

    };


});

$(document).ready(function () {

    $(".topbtnBox #topBtn").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 500);
    });

    

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.sec5_left_box').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


    $(".scaleA").click(function() {
        $("html").animate({
            scrollTop: 1000
        }, 500);
    });

});


