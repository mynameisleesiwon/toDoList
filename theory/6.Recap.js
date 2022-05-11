// Recap
// 숙제 
// a+b ,a-b, a/b, a**b
const calculator = {
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    powerof:function(a,b){
        return a**b; 
    },
};
// a+b;가 calculator.add(2,5);를 대체
const addResult = calculator.add(2,5);
const minusResult = calculator.minus(addResult,10);
const divideResult = calculator.divide(10,minusResult);
const powerofResult = calculator.powerof(minusResult,divideResult);