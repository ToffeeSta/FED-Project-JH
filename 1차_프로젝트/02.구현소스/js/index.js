document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.sub1-video video');
  const txtBox = document.querySelector('.sub1-area txt-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        video.play(); // 비디오 재생
      } else {
        video.pause(); // 비디오 정지
      }
    });
  }, {
    threshold: [0.5] // 비디오 요소의 50%가 보이는 화면 기준
  });

  observer.observe(document.querySelector('.sub1-video'));
});
