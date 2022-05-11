// const : 상수, 값이 바뀌질 않음 , 디폴트
// let : 값이 바뀔 수 있음, 업데이트가 필요한 변수만
// var : 언제 어디서나 업데이트 가능, let과 const가 생기기전에 있었음
// 규칙 : 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var는 쓰지 말 것.

const a = 5;
const b = 2;
let myName = "siwon";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+ myName);

myName = "leesiwon";

console.log("your new name is " + myName)