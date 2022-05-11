// // className
// const  h1_2 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const CLICKED_CLASS = "clicked";
//     if(h1_2.className === CLICKED_CLASS){
//         h1_2.className = "";
//     }else{
//         h1_2.className = CLICKED_CLASS;
//     }
// }

// h1_2.addEventListener("click",handleTitleClick);

// // className으로 변경하면 기존의 클래스가 사라지게 되는 문제가 발생

// classList : class들의 목록으로 작업할 수 있게끔 허용

const h1_3 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
//     const CLICKED_CLASS = "clicked";
//    // classList가 'clicked'을 포함하고 있는지
//     if(h1_3.classList.contains(CLICKED_CLASS)){
//         // 기존 클래스는 제거되지 않음
//         h1_3.classList.remove(CLICKED_CLASS);
//     }else{
//         // 기존 클래스 뒤에 추가됨
//         h1_3.classList.add(CLICKED_CLASS);
//     }
    
    // toggle로 구현
    // toggle은 h1의 classList에 'clicked' class가 이미 있는지 확인해서
    // 만약 있다면 toggle이 'clicked' 을 제거해줌
    // 만약 h1의 classList에 clicked가 존재하지 않는다면
    // toggle은 'clicked'를 classList에 추가해줌
    h1_3.classList.toggle("clicked");
}

h1_3.addEventListener("click",handleTitleClick);