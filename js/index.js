$(function() {
    //menu
    $(".orange-stroke").hover(function() {
        $(".green-cir").animate({
            width:"570px",
            height:"570px",
        },500);
    }, function() {
        $(".green-cir").animate({
            width:"530px",
            height:"530px",
        },500);
    }); 

    //me
    $(".me-hover").hide();
    $(".illustration-me").on({
        "mouseover":function() {
            $('.me-hover').show();
        },
        "mouseout":function() {
            $('.me-hover').hide();
        }
    })

    //hello p
    $(".hello-txt").hover(function() {
        $(".hello-txt").animate({
            fontSize: '28px',
        },500);
    }, function() {
        $(".hello-txt").animate({
            fontSize: '23px',
        },500);
    }); 


    //green ball
    // $(".green-ball").css($(window).width() / 2  - $(".green-ball").width()/2 + "px");
    $(window).scroll(function() { //문서가 스크롤되면, 메뉴의 위치 설정
        var t = $(this).scrollTop() ; // 수직 스크롤의 위치값을 더해 메뉴 위치 설정
        $(".green-ball").stop().animate({left:t}, 1000);
    });

    //orange ball
    // $(window).scroll(function() { //문서가 스크롤되면, 메뉴의 위치 설정
    //     var t = $(this).scrollTop() + ($(this).width() / 2 - $(".orange-ball").width() / 2);; // 수직 스크롤의 위치값을 더해 메뉴 위치 설정
    //     $(".orange-ball").stop().animate({left:t}, 1000);
    // });

    // var window_width = $(window).width() - $('.green-ball').width();
    // var document_height = $(document).height() - $(window).height();
    // $(".green-ball").css("top",$(window).height() / 2  - $(".green-ball").height()/2 + "px");

    // $(window).scroll(function () {
    //     var scroll_position = $(window).scrollTop();
    //     var object_position_left = window_width * (scroll_position / document_height);
    //     $('.green-ball').css({
    //         'left': object_position_left
    //     });
    // });
    

    // var window_width = $(window).width() - $('.orange-ball').width();
    // var document_height = $(document).height() - $(window).height();
    //     $(window).scroll(function () {
    //         var scroll_position = $(window).scrollTop();
    //         var object_position_left = window_width * (scroll_position / document_height);
    //         $('.orange-ball').css({
    //             'left': object_position_left
    //         });
    //     });

    //circle progress bar
    var progressBarOptions = {
        starAngle: -1.55,
        size: 200,
        value: 0.75,
        fill: {
            color: '#ffa500'
        }
    }
    
    $('.orange').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });

    $('#c-a').circleProgress({
        value : 0.25,
        fill: {
            color: '#FF0000'
        }
    });

    $('#c-b').circleProgress({
        value : 0.92,
        fill: {
            color: '#008000'
        }
    });
})