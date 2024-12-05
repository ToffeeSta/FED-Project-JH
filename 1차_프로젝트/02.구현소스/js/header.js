    mo.forEach(function(e,k){
        e.onclick = function(){

            if(this.classList.contains('on')){
                mo[num].classList.remove('on');
                $(mo2).stop().slideUp();
            }else{
            mo[num].classList.remove('on');
            this.classList.add('on');
            num = k;
            $(mo2).stop().slideUp().eq(k).slideToggle();
            }

        }
    })

    const header = document.getElementById('header');

    function scroll(){
        let y = pageYOffset; //scrollY
        if(y > 1){
            header.classList.add('off')
        }else{
            header.classList.remove('off')
        }
    }

    const head = document.getElementById('header');

    let pos = {y:0,y2:0,status:true};

    window.addEventListener('scroll',function(){
        pos.y = window.pageYOffset;

        //삼항연산자
        pos.status = (pos.y > pos.y2) ? true : false;

        pos.y2 = pos.y

        if(pos.status){
            head.classList.add('active');
        }else{
            head.classList.remove('active');
        }
    })

window.addEventListener('scroll',scroll);
ham.addEventListener('click',on);