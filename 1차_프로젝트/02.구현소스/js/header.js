// 상단 네비 스크롤 시
const header = document.getElementById("header");

let pos = { y: 0, y2: 0, status: true };
window.addEventListener("scroll", function () {
  pos.y = window.pageYOffset;

  //삼항연산자
  pos.status = pos.y > pos.y2 ? true : false;

  pos.y2 = pos.y;

  if (pos.status) {
    header.classList.add("active");
    header.classList.add("active2");
  } else {
    header.classList.remove("active");
    if (pos.y === 0) {
      header.classList.remove("active2");
    }
  }
});

$(".gnb a").click(function (e) {
  e.preventDefault();



  let idName = $(this).attr("href");
  let pos = $(idName).offset().top;
  currentSection = $(idName).index(".scroll-area");

  // 스크롤 이동 후 currentSection에 맞게 동기화
  $("html, body").animate({ scrollTop: pos }, 300, () => {
    $(idName).addClass("active").siblings().removeClass("active");
  });
});
