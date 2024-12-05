// 상단 네비 스크롤 시
const header = document.querySelector('.top-area');

let pos = {y:0,y2:0,status:true};
window.addEventListener('scroll',function(){
    pos.y = window.pageYOffset;

    //삼항연산자
    pos.status = (pos.y > pos.y2) ? true : false;

    pos.y2 = pos.y

    if(pos.status){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})