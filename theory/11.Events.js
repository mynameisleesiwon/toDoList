// event
const h1_1 = document.querySelector("div.hello h1:first-child");
title.style.color = "blue";
// event를 listen

// 앞에 on이 붙은게 이벤트
console.dir(h1_1);

title.innerText = "click me!";

function handleTitleClick(){
    const currentColor = h1_1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1_1.style.color = newColor;
    //console.log("title was clicked!");
}

function handleMouseEnter(){
    h1_1.innerText = "Mouse is here!";
    //console.log("mouse is here!");
}

function handleMouseLeave(){
    h1_1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOOD");
}
// click 이벤트가 발생하면 handleTtitleClick이라는 function이 동작
// function에 ()안하면 바로 실행 X, 유저가 h1을 click할 경우에 javascript가 실행버튼을 대신 눌러줌
h1_1.addEventListener("click", handleTitleClick);
h1_1.addEventListener('mouseenter',handleMouseEnter);
h1_1.addEventListener('mouseleave',handleMouseLeave);

// 다른방법으로 event 사용 , 잘 사용 x
// h1_1.onclick = handleTitleClick;
// h1_1.onmouseenter = handleMouseEnter;
// h1_1.onmouseleave = handleMouseLeave;

// More Events
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("oinline",handleWindowOnline);