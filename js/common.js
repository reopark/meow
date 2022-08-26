$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("#header01").addClass("fixed");
            $("#menubar").addClass("fixed");
        } else {
            $("#header01").removeClass("fixed");
            $("#menubar").removeClass("fixed");
        }
    });
});

/*메뉴바 영문 한글 체인지*/
$(function () {
    $('.Menu1').hover(function() {
        var target = $(this).html();
        switch(target) {
            case "NEW 10%" :
            $(this).html("신상품 10%");
            break;
            case "BEST 100" :
            $(this).html("베스트 100");
            break;
            case "OUTER" :
            $(this).html("아우터");
            break;
            case "SHIRT" :
            $(this).html("셔츠");
            break;
            case "TOP" :
            $(this).html("상의");
            break;
            case "PANTS" :
            $(this).html("바지");
            break;
            case "SHOES" :
            $(this).html("신발");
            break;
            case "ACC" :
            $(this).html("악세서리");
            break;
            case "SALE" :
            $(this).html("세일");
            break;
        }
    }, function() {
        var target = $(this).html();
        switch(target) {
            case "신상품 10%" :
            $(this).html("NEW 10%");
            break;
            case "베스트 100" :
            $(this).html("BEST 100");
            break;
            case "아우터" :
            $(this).html("OUTER");
            break;
            case "셔츠" :
            $(this).html("SHIRT");
            break;
            case "상의" :
            $(this).html("TOP");
            break;
            case "바지" :
            $(this).html("PANTS");
            break;
            case "신발" :
            $(this).html("SHOES");
            break;
            case "악세서리" :
            $(this).html("ACC");
            break;
            case "세일" :
            $(this).html("SALE");
            break;
        }
    });

    $('#AllMenu li').hover(function() {
        $('.submenu', this).stop().slideDown(200);
    }, function() {
        $('.submenu', this).stop().slideUp(200);
    });
});

$(function () {
    $('#AllMenu p').hover(function() {
        $('#AllMenuView').css('display', 'block');
    }, function() {
        $('#AllMenuView').css('display', 'none');
    });
});