// variations
let h1;
let x = 0;
let y = 0;
let main;
let bg;
let title;
let mouseX = 0;
let mouseY = 0;
let speed = 0.005;

// functions

function loop(){
    mouseX += (x - mouseX)*speed;
    mouseY += (y - mouseY)*speed;
    //h1.innerHTML = `X : ${x} mouseX : ${mouseX}`;
    main.style.transform = `translate(${mouseX/6}px, ${mouseY/6}px)`;
    bg.style.transform = `translate(${-mouseX/8}px, ${-mouseY/8}px)`;
    title.style.transform = `translate(${-mouseX/2}px, ${-mouseY/2}px)`;
    // translate에 mouseX와 mouseY값을 마이너스로 넣어주면 마우스가 움직이는 방향과 반대로 움직이게 할 수 있다!
    // 마우스 움직임 값 보다 조금 움직이게 하려면 mouseX를 숫자로 나눠주면 된다!
    // 원하는 정도까지 나눠주면 쉽다
    window.requestAnimationFrame(loop); 
}


window.onload = function(){
    h1 = document.getElementsByTagName("h1")[0];
    main = document.getElementsByClassName("main")[0];
    bg = document.getElementsByClassName("bg")[0];
    title = document.getElementsByClassName("title")[0];
    
    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
        x = (e.clientX - window.innerWidth/2);
        y = (e.clientY - window.innerHeight/2);
        // 화면의 가운데를 기준점 삼아 움직이도록 함
        // 즉 가로 900px의 경우, 가운데 기준점이 0, 오른쪽 끝이 450, 왼쪽 끝이 -450으로 나타나게 된다!
    };

    loop();
}



