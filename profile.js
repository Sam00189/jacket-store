/* LOAD USER DATA */
window.onload = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if(user){
    document.getElementById("username").innerText = user.name;
    document.getElementById("email").innerText = user.email;
  } else {
    // not logged in → redirect
    window.location.href = "login.html";
  }
};

/* LOGOUT */
function logout(){
  localStorage.removeItem("user");
  alert("Logged out");
  window.location.href = "index.html";
}
function goHome(){
  window.location.href = "index.html";
}