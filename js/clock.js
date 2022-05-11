const clock = document.querySelector("h2#clock");

// function sayHello(){
//     console.log("hello");
// }

// setInterval(함수(()치면x), 몇초마다 실행);
// setInterval(sayHello,5000); // 5000ms : 5초
// setTimeout(함수(()치면x), 몇초에 딱 한번 실행);
// setTimeout(sayHello, 5000);

function getClock(){
    // new Date() object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있음
    const date = new Date();
    // 시간은 number라서 바로 padStart 쓸수없음, String으로 묶음
    // padStart : String의 시작을 다른 string으로 채워 주어진 길이를 만족해는 새로운 string 반환
    // padStart(2,"0") : String이 최대 2가 되지 않으면 앞쪽에 "0"을 붙여준다.
    const hours = String(date.getHours()).padStart(2,"0"); 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock();
setInterval(getClock,1000);
