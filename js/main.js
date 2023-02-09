$(window).scroll(function () {
    // 100 = The point you would like to fade the nav in.

    if ($(window).scrollTop() > 10) {

        $('.header').addClass('show');

    } else {

        $('.header').removeClass('show');

    };


});

$(document).ready(function () {
    new WOW().init();
     
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


 var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3, //640~1024 해상도 외 레이아웃 뷰 개수
            spaceBetween: 20, //위 slidesPerview 여백
            pagination: true, // pager 여부
            breakpoints: { //반응형 조건 속성
                650: { //650 이상일 경우
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
            },
            navigation: {   // 버튼 사용자 지정
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

