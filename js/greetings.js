const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const welcomeHeader = document.querySelector(".welcome-header");
const savedUsername = localStorage.getItem("username"); //스토리지에 저장된 유저명

function handleLogin(event) {
  event.preventDefault();

  const username = loginInput.value;
  localStorage.setItem("username", username);
  showWelcome(username);
  loginForm.classList.add("hidden");
}

function showWelcome(username) {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12 && hours >= 5) {
    welcomeHeader.innerText = `Good morning, ${username}`;
  } else if (hours >= 12 && hours < 17) {
    welcomeHeader.innerText = `Good afternoon, ${username}`;
  } else if (hours >= 17 && hours < 22) {
    welcomeHeader.innerText = `Good evening, ${username}`;
  } else {
    welcomeHeader.innerText = `Good night, ${username}`;
  }

  welcomeHeader.classList.remove("hidden");
}

if (savedUsername === null) {
  //loginform 으로 받기
  loginForm.classList.remove("hidden"); //입력받을 form 을 보여주기
  loginForm.addEventListener("submit", handleLogin); //submit 했을 때 이루어져야 하는 것들 이루어짐
} else {
  //welcome 화면 보여주기
  showWelcome(savedUsername);
}
