const greetingSection = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetinName = document.querySelector("#name");
const mainSection = document.querySelector("main")
const bg = document.querySelector("#bg")


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //디폴트를 막아 새고되는 것을 막고
    greetingSection.classList.add(HIDDEN_CLASSNAME); //submit되었으면 form을 숨기고
    const username = loginInput.value; //유저이름을 변수로 저장해주고
    localStorage.setItem(USERNAME_KEY,username); //local storage에 저장
    paintGreetings(username);
}

function paintGreetings(username){
    mainSection.classList.remove(HIDDEN_CLASSNAME);
    bg.classList.remove(HIDDEN_CLASSNAME);
    document.body.classList.remove("first");
    greetinName.innerText = `${username}님, 주문하신 노래 나왔습니다.`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    greetingSection.classList.remove(HIDDEN_CLASSNAME);
    //submit event 감지하기
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

window.addEventListener("resize",setHeight);
setHeight();
function setHeight(){
    const bgHeight = bg.height;
    mainSection.style.height = bgHeight+"px";
}
