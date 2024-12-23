/////////////////// 섹션간 페이지 전환(스크롤 이벤트 설정) ////////////////////  
let currentSection = 0;
const sections = document.querySelectorAll('.scroll-area');
const targetSections = ['sec5', 'sec6', 'sec7']; // 효과를 적용할 섹션들
let isScrolling = false;

function scrollToSection(index) {
  sections.forEach((section, i) => {
    const sectionId = section.id; // 섹션 ID 가져오기
    if (targetSections.includes(sectionId) && i === index) {
      section.classList.add('active'); // 활성화 (펴짐)
    } else if (targetSections.includes(sectionId)) {
      section.classList.remove('active'); // 비활성화 (접힘)
    }
  });

  window.scrollTo({ top: sections[index].offsetTop, behavior: 'smooth' });
}

// wheel 이벤트로 변경
window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  const delta = e.deltaY; // 휠의 움직임 방향 (양수: 아래, 음수: 위)
  const nextSection = delta > 0 ? currentSection + 1 : currentSection - 1;

  // 유효한 섹션 범위로 제한
  if (nextSection < 0 || nextSection >= sections.length) return;

  currentSection = nextSection;

  scrollToSection(currentSection);
  isScrolling = true;

  // 스크롤 완료 후 다시 활성화
  setTimeout(() => (isScrolling = false), 600);
});

// 초기 활성화 상태 설정
document.addEventListener('DOMContentLoaded', () => {
  sections.forEach((section, index) => {
    const sectionId = section.id;
    if (targetSections.includes(sectionId) && index === currentSection) {
      section.classList.add('active');
    }
  });
});

//////////// sub1-area 비디오 재생 //////////////
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".sub1-video");
  const txtBox = document.querySelector(".tbox-ani");
  txtBox.style.display = "none";

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play(); // 비디오 재생
          video.addEventListener("timeupdate", () => {
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
