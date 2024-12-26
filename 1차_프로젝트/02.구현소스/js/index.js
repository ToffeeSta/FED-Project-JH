/////////////////// 섹션간 페이지 전환(스크롤 이벤트 설정) ////////////////////
let currentSection = 0;
const sections = document.querySelectorAll(".scroll-area");
const targetSections = ["sec5", "sec6", "sec7"]; // 효과를 적용할 섹션들
let isScrolling = false;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length) return; // 배열 범위 초과 방지

  sections.forEach((section, i) => {
    const sectionId = section.id; // 섹션 ID 가져오기
    if (targetSections.includes(sectionId) && i === index) {
      section.classList.add("active"); // 활성화 (펴짐)
    } else if (targetSections.includes(sectionId)) {
      section.classList.remove("active"); // 비활성화 (접힘)
    }
  });

  window.scrollTo({ top: sections[index].offsetTop, behavior: "smooth" });
}

window.addEventListener("scroll", (e) => {
  if (isScrolling) return;

  const section = sections[currentSection];
  if (!section) return; // currentSection이 유효한지 확인

  const rect = section.getBoundingClientRect();
  const threshold = window.innerHeight * 0.7;

  // 아래로 스크롤: 하단이 70% 이상 보였을 때
  if (rect.top < 0 && rect.bottom >= threshold) return;

  // 위로 스크롤: 상단이 70% 이상 보였을 때
  if (rect.bottom > window.innerHeight && rect.top <= window.innerHeight * 0.3)
    return;

  // 스크롤 방향에 따라 변경
  const nextSection =
    rect.top < 0
      ? currentSection + 1
      : rect.bottom > window.innerHeight
      ? currentSection - 1
      : currentSection;

  // currentSection 업데이트 (배열 범위 초과 방지)
  if (nextSection >= 0 && nextSection < sections.length) {
    currentSection = nextSection;
    scrollToSection(currentSection);
    isScrolling = true;

    // 스크롤 완료 후 0.6초 뒤 다시 활성화
    setTimeout(() => (isScrolling = false), 600);
  }
});

// 초기 활성화 상태 설정
document.addEventListener("DOMContentLoaded", () => {
  sections.forEach((section, index) => {
    const sectionId = section.id;
    if (targetSections.includes(sectionId) && index === currentSection) {
      section.classList.add("active");
    }
  });
});

////// 페이지 로드 시, 트렌지션 이벤트

document.addEventListener("DOMContentLoaded", () => {
  const tbox = document.querySelector("#sec1 .tbox");
  const videobox = document.querySelector("#sec1 video");

  setTimeout(() => {
    tbox.style.opacity = "1";
    tbox.style.scale = "1";
    // tbox.style.transform = "translate(80% , -50%)"; // 이동 위치 변경
  }, 200);
  setTimeout(() => {
    videobox.style.transform = "translateX(0)"; // 이동 위치 변경
    tbox.style.transform = "translateY(-50%)"; // 이동 위치 변경
  }, 1000);
});

//////////// sub1-area 비디오 재생 //////////////
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".sub1-video");
  const txtBox = document.querySelector(".tbox-ani");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          // 비디오 재생 및 시간 기반 텍스트 표시
          video.play();
          const onTimeUpdate = () => {
            if (video.currentTime > 2.5) {
              txtBox.style.opacity = "1"; // 텍스트 박스 표시
              txtBox.style.transform = "translate(-50%,-50%)";
              txtBox.style.scale = "1";

              video.removeEventListener("timeupdate", onTimeUpdate); // 한 번만 실행
            }
          };
          video.addEventListener("timeupdate", onTimeUpdate);
        } else {
          // 비디오 정지 및 초기화
          video.pause();
          video.currentTime = 0;
          txtBox.style.opacity = "0";
          txtBox.style.transform = "translate(-100%,-100%)";
          txtBox.style.scale = "0.5";
        }
      });
    },
    {
      threshold: [0.5], // 요소의 50%가 화면에 보일 때 트리거
    }
  );

  // 관찰 시작
  observer.observe(video);
});

//////////////// 서브3(sec4) ///////////////
const sec4MenuLi = document.querySelectorAll(".sub3-menu > ul > li");
const sec4ConLi = document.querySelectorAll(
  ".sub3-ban > .item-group > .item-list"
);

let num = 0;
const tab = (a, b) => {
  a.forEach((item, index) => {
    item.onclick = () => {
      a[num].classList.remove("on");
      b[num].classList.remove("on");

      item.classList.add("on");
      b[index].classList.add("on");
      num = index;
    };
  });
};

tab(sec4MenuLi, sec4ConLi);
