// Conditional(조건문)
const age1 = parseInt(prompt("How old are you?"));

// string -> int
// parseInt(); , 값에 숫자만 인식 가능, 문자를 넣을경우 NaN(Not a Number)뜸
// value의 type을 볼때 : typeof
console.log(typeof age1);
console.log(age1,parseInt(age1));
console.log(age1);

// isNaN(): number인지 아닌지 boolean으로 반환
console.log(isNaN(age1)); // false : number라는 뜻

// condition은 boolean값, true이면 실행
if(isNaN(age1)){
    console.log("Please write a number");
}else{
    console.log("Thank you for writing your age.");
}

if(isNaN(age1) || age1 < 0){
    console.log("Please write a real positive number"); 
}else if(age1 < 18){
    console.log("You are too young.");
}else if(age1 >= 18 && age1 <= 50){
    console.log("You can drink");
}else if(age1 > 50 && age1 <=80){
    console.log("You should exercise");
}else if(age1> 80){
    console.log("You can do whatever you want.");
// 100은 80보다 크기때문에 실행안됨, 순서를 바꿔야함
}else if(age1 === 100){
    console.log("wow you are wise");
}