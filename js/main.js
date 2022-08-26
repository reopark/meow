
$(function() {
    var index;
    /*큰이미지 좌우 클릭*/
    var $slider = $('.main_img'),
    $firstSlide = $slider.find('li').first().stop(true).animate({
        opacity : 1
    },200);

    // 왼쪽 버튼 함수
    function PrevSlide(){ 
        var $lastSlide = $slider.find('li').last().prependTo($slider);
        $secondSlide = $slider.find('li').eq(1).stop(true).animate({
            opacity : 0
        },400);
        $firstSlide = $slider.find('li').first().stop(true).animate({
            opacity : 1
        },400);
    }

    // 오른쪽 버튼 함수
    function NextSlide(){
        $firstSlide = $slider.find('li').first().appendTo($slider);
        var $lastSlide = $slider.find('li').last().stop(true).animate({
            opacity : 0
        },400);
        $firstSlide = $slider.find('li').first().stop(true).animate({
            opacity : 1
        },400);
    }

    // 오른쪽 버튼 클릭
    $('.next').on('click', function() {
        NextSlide();
    });

    // 왼쪽 버튼 클릭
    $('.prev').on('click', function() {
        PrevSlide();
    });


    /*BEST*/
    moveSlider(index);
    var $slider1 = $('.BEST_grid'),
    $firstSlide1 = $slider1.find('li').first().stop(true).animate({
        opacity : 1
    },200);

    // 왼쪽 버튼 함수
    function PrevSlide1(){ 
        stopSlide1();
        startSlide1();
        var $lastSlide1 = $slider1.find('li').last().prependTo($slider1);
        $secondSlide1 = $slider1.find('li').eq(1).stop(true).animate({
            opacity : 1
        },400);
        $firstSlide1 = $slider1.find('li').first().stop(true).animate({
            opacity : 1
        },400);
    }

    // 오른쪽 버튼 함수
    function NextSlide1(){
        stopSlide1();
        startSlide1();
        $firstSlide1 = $slider1.find('li').first().appendTo($slider1);
        var $lastSlide1 = $slider1.find('li').last().stop(true).animate({
            opacity : 1
        },400);
        $firstSlide1 = $slider1.find('li').first().stop(true).animate({
            opacity : 1
        },400);
    }

    // 왼쪽 버튼 클릭
    $('.BEST_next').on('click', function() {
        NextSlide1();
    });

    //오른쪽 버튼 클릭
    $('.BEST_prev').on('click', function() {
        PrevSlide1();
    });

    // 자동 슬라이드
    startSlide1();
    var theInterval1;

    function startSlide1() {
        theInterval1 = setInterval(NextSlide1, 5000);
    }

    function stopSlide1() {
        clearInterval(theInterval1);
    }

    // 마우스 오버시 멈춤
    $('.BEST_grid').hover(function() {
        stopSlide1();
    }, function (){
        startSlide1();
    });
    
    // 움직임 슬라이드
    function moveSlider(index) {
        $('.BEST_pager_item').removeClass('active');
        $('.BEST_pager_item').eq(index).addClass('active');
    }

    // 컨트롤 버튼
    $('.BEST_pager_item').on('click', function() {
        index = $(this).index();
        moveSlider(index);
    })
});




$(function() {
    
});
