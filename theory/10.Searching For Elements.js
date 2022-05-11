// querySelector : css처럼 사용 가능, 오직 첫번째 element만 가져옴
const title = document.querySelector(".hello h1:first-child");
console.log(title);
// querySelectorAll : selector 안의 조건에 부합하는 모든 element를 가져다줌
const title1 = document.querySelectorAll(".hello h1");
console.log(title1); 