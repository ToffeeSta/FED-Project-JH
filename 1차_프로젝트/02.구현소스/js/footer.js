const btnLi = document.querySelectorAll(".btn-box > .btn-wrap");
const btnCon = document.querySelectorAll(".btn-list-box > ul");


let num = 0;
btnLi.forEach((item, index) => {
    item.onclick = () => {
        if (item.classList.contains("on")) {
            item.classList.remove("on");
        } else {
            btnLi[num].classList.remove("on");
            item.classList.add("on");
            num = index;
        }
    };
});
