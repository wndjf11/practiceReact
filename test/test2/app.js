const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  const HIDDEN_CLASSNAME = "hidden";
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener("submit", onLoginSubmit);
