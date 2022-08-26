/*아이디*/
$(function () {
    /*function id_check1(id) {    
        var ex1 = /^[a-z0-9]{4,16}$/;
        var idx = /^[A-Z0-9][$@$!%*?&][\s]{4,16}$/;
        var re1 = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Z\d$@$!%*?&]{4,16}/;
        var re = /^[a-z0-9]{4,16}$/;
        return (id != '' && id != 'undefined' && idx.test(id)); 
    }
    function id_check2(id) {    
        
        return (id != '' && id != 'undefined' && re.test(id)); 
    }*/
    $('#id').blur(function() {
        var id = $("#id").val();
        var ex1 = /^[A-Z][$@$!%*?&][\s]{4,16}$/;
        var ex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{4,16}$/;
        if(id == '' || id == 'undefined') {
            $('#idMsg').text('아이디를 입력해 주세요.');
            $('#idMsg').css('color', '#f00');
            return;
        }
        if(id.length < 4 || id.length > 16) {
            $('#idMsg').text('아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.');
            $('#idMsg').css('color', '#f00');
            return false;
        }

        /*else if(!ex1.test(id)) {
            $('#idMsg').text('대문자/공백/특수문자가 포함되어있는 아이디는 사용할 수 없습니다.');
            $('#idMsg').css('color', '#f00');
            return false;
        }*/
        else if(ex.test(id)){
            $('#idMsg').text(id + '는 사용 가능한 아이디입니다.');
            $('#idMsg').css('color', '#000');
            return true;
        }
        
        
        /*else if(!idx.test(id)) {
            $('#idMsg').text('대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.');
            $('#idMsg').css('color', '#f00');
            return false;
        }*/
        /*if(! re.test(id)) {
            $('#idMsg').text('아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.');
            $('#idMsg').css('color', '#f00');
            return;
        }*/
        /*else {
            $('#idMsg').text(id + '는 사용 가능한 아이디입니다.');
            $('#idMsg').css('color', '#000');
            return true;
        }*/
    });
});

/*아이디 중복체크*/

function idC() {
    win=window.open("member.html", "", "width = 250, height = 200");
}



/*비밀번호*/
$(function () {
    $('#password').blur(function() {
        var pw = $("#password").val();
        var pwx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
        if(pw == '' || pw == 'undefined') {
            $('#pwMsg').text('비밀번호를 입력해 주세요.');
            $('#pwMsg').css('color', '#f00');
            return;
        }
        else if(!pwx.test(pw)) {
            $('#pwMsg').text('비밀번호는 영문대소문자, 숫자 , 특수문자 중 3가지 이상 조합해서 8~16자로 입력해 주세요.');
            $('#pwMsg').css('color', '#f00');
            return false;
        }
        else {
            $('#pwMsg').text(pw + '는 사용 가능한 비밀번호입니다.');
            $('#pwMsg').css('color', '#000');
            return true;
        }
    })
});


/*비밀번호 일치 확인*/
$(function() { 
    $('#confirmPassword').blur(function(){
        var password1 = $("#password").val();
        var password2 = $("#confirmPassword").val();
        if( password1 == '' || password1 == 'undefined') return;
        if( password2 == '' || password2 == 'undefined') return;
        if(password1 != password2) {
            $('#pwconfirmMsg').text('비밀번호가 일치하지 않습니다');
            $('#pwconfirmMsg').css('color', '#f00');
            return false;
        }else {
            $('#pwconfirmMsg').text('비밀번호가 일치합니다.');
            $('#pwconfirmMsg').css('color', '#000');
            
        }
    });
});


/*이메일*/
$(function() {
    function email_check(email) {    
        var regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email != '' && email != 'undefined' && regex.test(email)); 
    }
    
    $('input[type=email]').blur(function(){
        var email = $(this).val();
        if( email == '' || email == 'undefined') return;
        if(! email_check(email) ) {
            $('#emailMsg').text('이메일 형식으로 적어주세요');
            $(this).focus();
            return false;
        }else {
            $('#emailMsg').text('올바른 이메일입니다.');
        }
    });
});

/*입력 값 중에 비어있을 경우*/
function empty() {
    var f = document.frm;
    var allcheck = document.getElementById('AllCheck').value;
    
    if(f.id.value == "") {
        alert("아이디를 입력해주세요.");

    }

    if(f.nameChk.value == "0") {
        alert("아이디 중복체크를 해주세요.");

    }

    if(f.password.value == "") {
        alert("비밀번호를 입력해주세요.");

    }

    if(f.name.value == "") {
        alert("이름을 입력해주세요.");

    }

    if(allcheck == false) {
        alert("이용약관에 동의 해주세요.");

    }
    
}



/*전체 체크박스*/
$(function() {
    $('#AllCheck').change('click',function() {
        if(this.checked) {
            $('.base_checking').prop('checked', true);
        }
        else {
            $('.base_checking').prop('checked', false);
        }
    });

    $('.base_checking').change(function() {
        var allchecked = $('.base_checking').length == 0;
        $('#AllCheck').prop('checked', allchecked);
    });
});


/*카카오톡 우편 번호*/
$(function(){
    $('.findAddress').on('click', function() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("address").value = roadAddr;
                document.getElementById("detailAddress").value = data.jibunAddress;
            }
        }).open();
    });
});


