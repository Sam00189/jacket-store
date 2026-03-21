/* SWITCH TO SIGNUP */
function showSignup(){
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
}

/* SWITCH TO LOGIN */
function showLogin(){
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

/* SIGNUP */
function signup(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("newEmail").value;
  const pass = document.getElementById("newPass").value;

  const user = { name, email, password: pass };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created! Please login.");
  showLogin();
}

/* LOGIN */
function login(){
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(user && user.email === email && user.password === pass){
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}