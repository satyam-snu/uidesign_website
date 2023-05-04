window.onload = function(){
    const constantDiv = document.getElementById("constant_div");
    const widthConstantDiv = constantDiv.offsetWidth;
    const heightConstantDiv = constantDiv.offsetHeight;
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*&#%$!";
    let interval = null;

    document.getElementById("random_letters").onmouseover = event => {
        constantDiv.style.width = widthConstantDiv + "px";
        constantDiv.style.height = heightConstantDiv + "px";
        let iterations = 0;
    
        clearInterval(interval);
    
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 32)];
                })
                .join("");
    
            if(iterations >= event.target.dataset.value.length){
                clearInterval(interval);
            }
    
            iterations += 1 / 3;
        }, 30);
    }
}
// $(document).ready(function() {
//     $('body').click(function(){
//         $(this).css('background', 'yellow');
//     })
// });