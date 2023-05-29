window.onload = function(){
    const constantDiv1 = document.getElementById("constant_div_1");
    const widthConstantDiv1 = constantDiv1.offsetWidth;
    const heightConstantDiv1 = constantDiv1.offsetHeight;
    
    const letters_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*&#%$!";

    let interval_1 = null;

    document.getElementById("random_letters_1").onmouseover = event => {
        constantDiv1.style.width = widthConstantDiv1 + "px";
        constantDiv1.style.height = heightConstantDiv1 + "px";
        let iterations_1 = 0;
    
        clearInterval(interval_1);
    
        interval_1 = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations_1) {
                        return event.target.dataset.value[index];
                    }
                    return letters_1[Math.floor(Math.random() * 32)];
                })
                .join("");
    
            if(iterations_1 >= event.target.dataset.value.length){
                clearInterval(interval_1);
            }
    
            iterations_1 += 1 / 5;
        }, 30);
    }

    const constantDiv2 = document.getElementById("constant_div_2");
    const widthConstantDiv2 = constantDiv2.offsetWidth;
    const heightConstantDiv2 = constantDiv2.offsetHeight;
    
    const letters_2 = "물불땅한국어도서생활소녀명상싸움놀";

    let interval_2 = null;

    document.getElementById("random_letters_2").onmouseover = event => {
        constantDiv2.style.width = widthConstantDiv2 + "px";
        constantDiv2.style.height = heightConstantDiv2 + "px";
        let iterations_2 = 0;
    
        clearInterval(interval_2);
    
        interval_2 = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations_2) {
                        return event.target.dataset.value[index];
                    }
                    return letters_2[Math.floor(Math.random() * 17)];
                })
                .join("");
    
            if(iterations_2 >= event.target.dataset.value.length){
                clearInterval(interval_2);
            }
    
            iterations_2 += 1 / 10;
        }, 30);
    }
}