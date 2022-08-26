/*회원 비회원 바꾸기*/
$(function() {
    var sw = false;
    $('.menu li').click(function() {
        sw =! sw;
        if(sw){
            $('.menu li').eq(0).removeClass('selected');
            $('.menu li').eq(1).addClass('selected');
            $('#logmember').css('display', 'none');
            $('#lognomember').css('display', 'block');
        }
        else {
            $('.menu li').eq(1).removeClass('selected');
            $('.menu li').eq(0).addClass('selected');
            $('#lognomember').css('display', 'none');
            $('#logmember').css('display', 'block');
        }
    });
});