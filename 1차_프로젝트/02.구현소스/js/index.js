//////////// sub1-area 비디오 재생 //////////////
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".sub1-video video");
  const txtBox = document.querySelector(".tbox2");
  console.log(txtBox);
  txtBox.style.display = "none";
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play(); // 비디오 재생
          video.addEventListener('timeupdate',()=>{
            console.log(video.currentTime);
            if(video.currentTime>2.79){

              txtBox.style.display = "block";
              
            }
          })
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

//tmzmfhf