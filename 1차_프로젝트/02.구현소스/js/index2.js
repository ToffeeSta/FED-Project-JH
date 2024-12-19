/////////////////// 섹션간 페이지 전환 ////////////////////  
let currentSection = 0;
const sections = document.querySelectorAll('.scroll-area');
let isScrolling = false;

function scrollToSection(index) {
    window.scrollTo({ top: sections[index].offsetTop, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    if (isScrolling) return;

    const section = sections[currentSection];
    const rect = section.getBoundingClientRect();
    const threshold = window.innerHeight * 0.7;

    // 아래로 스크롤: 하단이 70% 이상 보였을 때
    if (rect.top < 0 && rect.bottom >= threshold) return;
    
    // 위로 스크롤: 상단이 70% 이상 보였을 때
    if (rect.bottom > window.innerHeight && rect.top <= window.innerHeight * 0.3) return;

    // 스크롤 방향에 따라 섹션 변경
    currentSection += (rect.top < 0) ? 1 : (rect.bottom > window.innerHeight) ? -1 : 0;

    scrollToSection(currentSection);
    isScrolling = true;

    // 스크롤 완료 후 0.5초 뒤 다시 활성화
    setTimeout(() => isScrolling = false, 500);
});

//////////// sub1-area 비디오 재생 //////////////
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".sub1-video");
  const txtBox = document.querySelector(".tbox-ani");
  // console.log(txtBox);
  txtBox.style.display = "none";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play(); // 비디오 재생
          video.addEventListener("timeupdate", () => {
            // console.log(video.currentTime);
            if (video.currentTime > 2.79) {
              txtBox.style.display = "block";
            }
          });
        } else {
          video.pause(); // 비디오 정지
          video.currentTime = 0; // 처음으로 돌아가기
          txtBox.style.display = "none";
        }
      });
    },
    {
      threshold: [0.5], // 비디오 요소의 50%가 보이는 화면 기준
    }
  );

  observer.observe(document.querySelector(".sub1-video"));
});

//////////////// 서브3(sec4) ///////////////
const sec4MenuLi = document.querySelectorAll(".sub3-menu > ul > li");
const sec4ConLi = document.querySelectorAll(
  ".sub3-ban > .item-group > .item-list"
);

let num = 0;

sec4MenuLi[num].classList.add("on");
sec4ConLi[num].classList.add("on");

sec4MenuLi.forEach((item, index) => {
  item.onclick = () => {
    sec4MenuLi[num].classList.remove("on");
    sec4ConLi[num].classList.remove("on");

    item.classList.add("on");
    sec4ConLi[index].classList.add("on");
    num = index;
  };
});

