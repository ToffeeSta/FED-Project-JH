$(function () {
    //body태그 앞 뒤로 헤더와 푸터 header태그 생성
    $('body').prepend('<header id="header"></header>')
    $('body').append('<footer id="footer"></footer>')
    // id가 헤더태그인놈안에 inc.html안에있는 head클래스 갖고있는 놈 추가
    $("#header").load("inc.html .head",function(){
        //추가할때 header.js파일로 가져와서 js작동하게끔함
        $.getScript('./js/header.js');
    });
    //푸터 위와 동일
    $("#footer").load("inc.html .footer-con, .quick-box",function(){
        $.getScript('./js/footer.js');
})
});