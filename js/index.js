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
    $(window).scroll(function() { 
        var t = $(this).scrollTop() + ($(this).width() / 6) ;
        $(".green-ball").stop().animate({left:t}, 3000);
    });

    //orange ball
    $(window).scroll(function() { 
        var t = $(this).scrollTop() - 900  
        $(".orange-ball").stop().animate({left:-t}, 3000);
    });

    //green ball-2
    $(window).scroll(function() { 
        var t = $(this).scrollTop() - 2000 
        $(".green-ball-2").stop().animate({left:t}, 3000);
    });


    //portfolio slide
    $("#arrow").click(function() {
        $("#slider").prepend($("#slider > div:last-child")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#arrow-1").click(function() {
        $("#slider-1").prepend($("#slider-1 > div:last-child")).css({left:"-936px"}).animate({left:0}, 500);
    });

    $("#arrow-2").click(function() {
        $("#slider-2").prepend($("#slider-2 > div:last-child")).css({left:"-936px"}).animate({left:0}, 500);
    });


   // 모달창
   var modals = document.getElementsByClassName("modal");
    var btns = document.getElementsByClassName("web-box");
    var spanes = document.getElementsByClassName("close");
    var funcs = [];
 
    function Modal(num) {
    return function() {
        btns[num].onclick =  function() {
            modals[num].style.display = "block";
            console.log(num);
        };
    
        spanes[num].onclick = function() {
            modals[num].style.display = "none";
        };
    };
    }
    for(var i = 0; i < btns.length; i++) {
    funcs[i] = Modal(i);
    }
    for(var j = 0; j < btns.length; j++) {
    funcs[j]();
    }
    window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
    };


    //메뉴 부드럽게 이동
    var gnbA = $(".gnb>li>a");
    gnbA.click(function() {
        var target = $(this).attr("href"); 
        $("html").animate({scrollTop:$(target).offset().top},1000); 
    });

    //top btn
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
        $("#top-bt").fadeIn("fast");		
        } else {
        $("#top-bt").fadeOut("fast");		
        }
    });
    $("#top-bt").click(function() {
        $("html").animate({scrollTop:0}, 500);
    })

    //mobile-menu
    $(".mobile-menu").click(function() {
        $(".orange-stroke").slideToggle();
    })
})

