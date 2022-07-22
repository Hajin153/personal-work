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

    //percent
    $('.count').each(function() {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + "%");
            }
        });
    });

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
        var t = $(this).scrollTop() + ($(this).width() / 6) ; // 수직 스크롤의 위치값을 더해 메뉴 위치 설정
        $(".green-ball").stop().animate({left:t}, 3000);
    });

    

    //orange ball
    $(window).scroll(function() { //문서가 스크롤되면, 메뉴의 위치 설정
        var t = $(this).scrollTop() - 900  // 수직 스크롤의 위치값을 더해 메뉴 위치 설정
        $(".orange-ball").stop().animate({left:-t}, 3000);
    });

    //green ball-2
    $(window).scroll(function() { //문서가 스크롤되면, 메뉴의 위치 설정
        var t = $(this).scrollTop() - 2000  // 수직 스크롤의 위치값을 더해 메뉴 위치 설정
        $(".green-ball-2").stop().animate({left:t}, 3000);
    });


    //portfolio slide
    $("#arrow").click(function() {
        $("#slider").append($("#slider > div:first-child")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#arrow-1").click(function() {
        $("#slider-1").prepend($("#slider-1 > div:last-child")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#arrow-2").click(function() {
        $("#slider-2").prepend($("#slider-2 > div:last-child")).css({left:"-936px"}).animate({left:0}, 500);
    });

    //my skill modal
    
    $('#web-box').click(function() {
        $('#myModal').addClass("active");
    })

    $('.close').click(function() {
        $('#myModal').removeClass("active");
    })

})
