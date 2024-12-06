//////////// sub1-area 비디오 재생 //////////////
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".sub1-video video");
  const txtBox = document.querySelector(".sub1-area txt-box");
  const tgBox = document.querySelector(".sub1-video");

//   const vdo = $('.sub1-video video');
// console.log(vdo);
//   setTimeout(() => {
//     vdo.get(0).play();
    
//   }, 1000);
//   const winH = window.innerHeight;
//   const getBCL = x=>x.getBoundingClientRect().top;
//   let sts = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play(); // 비디오 재생
        } else {
          video.pause(); // 비디오 정지
          video.currentTime = 0; // 처음으로 돌아가기
        }
      });
    },
    {
      threshold: [0.5], // 비디오 요소의 30%가 보이는 화면 기준
    }
  );

  observer.observe(document.querySelector(".sub1-video"));


  // video.addEventListener('timeupdate', ()=>{
  //   console.log('vvv');
  // })

  // window.addEventListener('scroll', ()=>{

  //   if(this.scrollY < winH*0.5 && sts){
  //     sts = false;
  //     video.play();
  //     video.currentTime = 0;
  //   }
  //   console.log(getBCL(tgBox),video,'/',winH*0.5,'/스크롤:',this.scrollY);
  // })



});


