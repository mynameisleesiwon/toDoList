// return
const age = 96;
function calculatorKrAge(ageOfForeinger){
        console.log("hi");
        return ageOfForeinger + 2;
        // return하는 순간 fucntion 종료
        console.log("bye bye"); // 안뜸
}

// function 외부에서 value 제공받기
//ageOfForeinger + 2; 가 calculatorKrAge(age);를 대체
const krAge = calculatorKrAge(age);
console.log(krAge);