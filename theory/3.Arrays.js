// 배열없는세상
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

let dayOfWeek = mon+tue+wed+thu+fri+sat+sun;
console.log(dayOfWeek);

// //배열
const dayOfWeek2 = ["mon","tue","wed","thu","fri","sat"];
const nonsence = [1,2,"hello",false,null,true,undefined,"nico"];
console.log(dayOfWeek2);
//array에서 아이템 받아오기
console.log(dayOfWeek2[0]);

//array안에 요일 추가하기
dayOfWeek2.push("sun");
//array안에 값 변경
dayOfWeek2[2] = "wend";

console.log(dayOfWeek2);