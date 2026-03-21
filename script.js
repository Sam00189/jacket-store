const jackets = [
  "images/jacket-1.png",
  "images/jacket-2.png",
  "images/jacket-3.png",
  "images/jacket-4.png"
];

const backgrounds = [
  "images/bg-1.jpg",
  "images/bg-2.jpg",
  "images/bg-3.jpg",
  "images/bg-4.jpg"
];

const productData = [
  { title: "Relaxed", type: "Thin", price: "$99.50" },
  { title: "Winter", type: "Heavy", price: "$129.50" },
  { title: "Urban", type: "Street", price: "$109.50" },
  { title: "Spider", type: "Limited", price: "$149.50" }
];

let current = 0;

const img = document.getElementById("jacket");
const dots = document.querySelectorAll(".slider span");

/* MAIN LOAD */
window.addEventListener("load", () => {

  // INITIAL JACKET
  img.src = jackets[0];
  document.body.style.backgroundImage = `url(${backgrounds[0]})`;

  img.classList.add("enter");
  dots[0].classList.add("active");

  // INITIAL TEXT
  document.getElementById("title").innerHTML =
    productData[0].title + "<br><span>" + productData[0].type + "</span>";
  document.getElementById("price").innerText =
    productData[0].price;

  // LOGIN STATE
  updateUserUI();

  // AUTO SLIDE (ONLY ONCE)
  setInterval(() => {
    let next = (current + 1) % jackets.length;
    changeJacket(next);
  }, 5000);

});

/* CHANGE JACKET */
function changeJacket(index){

  if(index === current) return;

  img.classList.remove("enter");
  void img.offsetWidth;

  img.src = jackets[index];
  document.body.style.backgroundImage = `url(${backgrounds[index]})`;

  img.classList.add("enter");

  // UPDATE TEXT
  document.getElementById("title").innerHTML =
    productData[index].title + "<br><span>" + productData[index].type + "</span>";
  document.getElementById("price").innerText =
    productData[index].price;

  // DOTS
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");

  current = index;
}

/* LOGIN UI UPDATE */
function updateUserUI(){
  const user = localStorage.getItem("user");
  const icon = document.getElementById("userIcon");

  if(user){
    icon.innerHTML = '<i class="fa-solid fa-user"></i>';
  } else {
    icon.innerText = "Login";
  }
}

/* GO PROFILE */
function goProfile(){
  const user = localStorage.getItem("user");

  if(user){
    window.location.href = "profile.html";
  } else {
    window.location.href = "login.html";
  }
}