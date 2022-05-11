const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// 일반적으로 string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

function onLoginSubmit(event){
    // preventDefault : 어떤 event의 기본 행동이든지 발생되지 않도록 막음
    // submit의 새로고침을 막음
    event.preventDefault();
    // const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    
    // localStorage : 브라우저에 무언가를 저장한 후 나중에 가져 올 수 있음.
    // localStorage에 배열 저장x . 오직 텍스트만 저장 가능  
    // setItem("저장될값 이름",값);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
    
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long.");
    // }
}
// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }

function paintGreetings(username){
    // ${변수명} ``(백틱기호), fn+esc
    greeting.innerText = `Hello\n${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// link.addEventListener("click",handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){ // localStorage에 유저정보가 없을 때
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}