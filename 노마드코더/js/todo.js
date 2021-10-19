const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos" //todo의 key이름

let toDos = []; //빈 array값 / 빈 값이므로 전에 있던 todo들을 갖고 있지 않음 / 새로 사용자가 입력하는 todo를 받기 위함 / 바뀔 수 있도록 변수를 let으로 줌
//근데 왜 새로고침을 해도 전에 있던 todo가 그대로 있나? 전에 있던 todo는 localstorage에 저장되어 있기 때문에 지워지지 않고 보여지는 것임  

function saveToDos(){   //toDos array의 내용을 로컬 스토리지에 넣기위해 작성된 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localstorage는 문자열 밖에 저장할 수 없기 때문에 stringify를 씀 
}

function deleteToDo(event){ //TODO 리스트 지우는 함수
    const li = event.target.parentElement; //event.target은 x기호로 즉, x버튼을 타켓으로 누른 span의 부모엘리먼트인 li를 변수 할당
    li.remove(); //위에서 할당된 li변수, 타겟 li를 지운다.
    console.log(typeof li.id);  //리스트의 아이디가 문자열인지 숫자열인지 콘솔로 확인
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id와 다른 toDo는 남긴다. 즉, 클릭한 li의 id는 지운다. 
    //toDo의 아이디 값은 오브젝트이나 li의 아이디값은 문자열이기 때문에 모든 조건이 일치 하지 않으므로 parseInt를 통해 li.id를 toDo.id와 똑같은 조건으로 변환 시켜줌
    saveToDos();    //saveToDos 함수 실행
};

// function deleteToDo() {
//     const li = this.parentElement;
//     li.remove();
// };


function paintToDo(newTodo) { //TODO 생성 function
  const li = document.createElement("li");  //li 태그 생성
  li.id = newTodo.id;   //li의 아이디에 newTodo의 아이디 할당
  const span = document.createElement("span");  //span 태그 생성
  span.innerText = newTodo.text;    //span에 newTodo의 텍스트 넣기
  const button = document.createElement("button");  //버튼 태그 생성
  button.innerText = "❌";  //버튼에 x 기호 넣기
  button.addEventListener("click", deleteToDo); //버튼을 클릭하면 deleteToDo 함수 실행
  li.appendChild(span); //li에 span 자식 부여
  li.appendChild(button);   //li에 버튼 자식 부여
  toDoList.appendChild(li); // toDoList라는 변수를 가진 ul의 자식으로 li 부여
  //append는 맨 마지막에 놓여져야 함
}

function handleToDoSubmit(event) {
  event.preventDefault();   //화면 새로고침 안됨
  const newTodo = toDoInput.value; // 초기화 하기 전에 newTodo라는 새로운 변수에 TODO 입력값 복사
  toDoInput.value = "";     //TODO input에 입력된 입력값 사라지도록 빈값 할당
  const newTodoObj = {  // newTodoObj라는 변수에 
    text: newTodo,  //text라는 key에 TODO입력한 텍스트
    id: Date.now(), //어떤걸 지우고 추가했는지 구분하기 위해 id라는 key에 랜덤한 id 값을 줌 Date.now는 초단위보다 더 세밀한 단위로 중복되기 어렵기 때문에 여기서 랜덤한 숫자처럼 씀 
  };
  toDos.push(newTodoObj);   //기존 toDos에 새 입력한 값 추가
  paintToDo(newTodoObj);    //paintToDo함수를 통해 화면에 그려주고
  saveToDos();  //toDo들을 saveToDos라는 함수를 통해 저장해줌
}

toDoForm.addEventListener("submit", handleToDoSubmit); //TODO를 적고 엔터를 누를시 handleToDoSubmit 실행

const savedToDos = localStorage.getItem(TODOS_KEY); // savedToDos라는 변수에 TODOS_KEY를 브라우저 DB에 저장한 값을 할당

if(savedToDos !== null){    //savedToDos가 빈값이 아니면    
    const parsedToDos = JSON.parse(savedToDos); // savedToDos값인 문자열을 array로 바꿔주기
    toDos = parsedToDos; //새로 생성 된 TODO 리스트를 기존 toDos에 대입
    parsedToDos.forEach(paintToDo); //parsedToDos를 array의 각 아이템에 대해 반복하면서 painToDo function을 실행 
}