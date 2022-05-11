// function
// function이 없다면
console.log("Hello my name is siwon");
console.log("Hello my name is siwony");
console.log("Hello my name is siwonddf");
console.log("Hello my name is siwonqwewe");
console.log("Hello my name is siwonqw");
console.log("Hello my name is siwonsdf");

// function 사용
// (argument)
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

// function 실행
sayHello("siwon", 10);
sayHello("nico", 23);
sayHello("lynn", 21);

function plus(firstNumber,secondNumber){
    console.log(firstNumber+secondNumber);
}
function divide(a,b){
    console.log(a/b);
}
// console.log(firstNumber); -> 오류, firstNumber는 plus function 안에서만 존재
plus(8,60);
divide(98,20);

// 'player' object
const player2 = {
    name:"nico",
    // object 안에서는 function 만드는 법이 다름
    sayHello2 :function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
};
console.log(player2.name);
player2.sayHello2("lynn");
player2.sayHello2("siwon");