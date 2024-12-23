// 상단 네비 스크롤 시
const header = document.getElementById('header');

let pos = {y:0,y2:0,status:true};
window.addEventListener('scroll',function(){
    pos.y = window.pageYOffset;

    //삼항연산자
    pos.status = (pos.y > pos.y2) ? true : false;

    pos.y2 = pos.y

    if(pos.status){
        header.classList.add('active');
        header.classList.add('active2');
    }else{
        header.classList.remove('active');
        if(pos.y === 0){
            header.classList.remove('active2');
        }
    }
})




$(() => {
  $(".gnb a").click(function (e) {
    e.preventDefault();
    let idName = $(this).attr("href");
    let pos = $(idName).offset().top;
    // let currIdx = $(idName).index();
    // currentSection = currIdx;
    console.log(pos);
    $("html, body").animate({ scrollTop: pos }, 500,()=>{
        $(idName).addClass("active")
        .siblings().removeClass("active");

    });
  });
});
