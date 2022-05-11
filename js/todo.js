const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    // JSON.stringify : Array -> String
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));

}

function deleteToDo(event){
    // target : 클릭된 HTML element
    // parentElement : 클릭된 element의 부모
    const li = event.target.parentElement;
    li.remove();
    // toDo.id는 number, li.id는 string. 맞춰줘야함
    // toDos에 저장되어 있는 id와 누른 버튼의 부모인 li의 id가 같을경우 지우고 그걸 toDos에 저장
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    // li에 각각 랜덤한 id값 입력
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text; 
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    // toDoInput.value를 newToDo에 복사
    const newToDo = toDoInput.value;
    // toDoInput은 공백이 되지만 newToDo에는 영향X
    toDoInput.value ="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    // toDos.push(newToDo);
    paintToDo(newToDoObj);
    saveToDos();   
}

toDoForm.addEventListener("submit",handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    // JSON.parse() : localStroage에서 온 string을 Array형식으로 변환
    const parsedToDos = JSON.parse(savedToDos);
    // Array 형식이기 때문에 forEach 사용가능
    // forEach : function을 실행하게 해주는데 그 array에 있는 각각의 item에 대해서 실행
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    // function 안만들고 다른방법
    // item에 배열값 하나하나 담겨있음
    // parsedToDos.forEach((item) => console.log("this is the turn of ",item));
    parsedToDos.forEach(paintToDo);
    };


















    // function sexyFilter(){
// // 만약 새 array에도 1,2,3,4를 포함하고 싶으면
// // sexyFilter는 반드시 true를 return 해야함
// // 만약 false를 return하면 그 item은 새 array에 포함되지 않음
// }

// 자바 스크립트가 sexyFilter를 4번 부름
// [1,2,3,4].filter(sexyFilter)

// sexyFilter(1) = 1
// sexyFilter(2) = 2
// sexyFilter(3) X // 3에서 FALSE를 리턴할때
// sexyFilter(4) = 4

// // true 리턴
// function sexyFilter(){return true}
// [1,2,3,4,5].filter(sexyFilter)
// (5) [1, 2, 3, 4, 5]
// // false 리턴
// function sexyFilter(){return false}
// [1,2,3,4,5].filter(sexyFilter)
// []

// // item이 3이 아니면 true를 리턴
// function sexyFilter(item){return item !== 3}
// [1,2,3,4,5].filter(sexyFilter)
// (4) [1, 2, 4, 5]

// const arr = ["pizza","banana","tomato"]
// function sexyFilter(food){return food !== "banana"}
// arr.filter(sexyFilter)
// (2) ['pizza', 'tomato']

// // 1000보다 작은 수만 남기기
// const arr = [1234,5454,223,122,45,6775,334]
// function sexyFucntion(potato){return potato <= 1000}
// arr.filter(sexyFucntion)
// (4) [223, 122, 45, 334]

// // fillter function은 예전 array에는 실제로 작업X , 새 array를 줌
// const arr = [1,2,3,4]
// arr.filter(item => item >2)
// (2) [3, 4]
// const newArr = arr.filter(item => item >2)
// arr
// (4) [1, 2, 3, 4]
// newArr
// (2) [3, 4]
