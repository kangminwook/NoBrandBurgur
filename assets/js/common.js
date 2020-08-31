


// 회원 비밀번호 타입 변경
function passChangeType(){
    $(".userPassChange").click(function(){

        let inputType = $(this).prev().attr("type");

        if(inputType == "password"){
            $(this).prev().attr("type","text");
        }else{
            $(this).prev().attr("type","password");   
        }
    })
}