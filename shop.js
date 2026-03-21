console.log("JS LOADED ✅");

/* WAIT UNTIL DOM READY */
document.addEventListener("DOMContentLoaded", () => {

  /* LOGIN UI */
  const user = localStorage.getItem("user");
  const icon = document.getElementById("userIcon");

  if(icon){
    if(user){
      icon.innerHTML = '<i class="fa-solid fa-user"></i>';
    } else {
      icon.innerText = "Login";
    }
  }

  /* BUTTON CLICK */
  const buttons = document.querySelectorAll(".shop-btn");
  console.log("Buttons found:", buttons.length);

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.getAttribute("data-product");
      openOrder(product);
    });
  });

});


/* OPEN MODAL */
function openOrder(product){
  const modal = document.getElementById("orderModal");
  const title = document.getElementById("productName");

  if(!modal || !title) return;

  modal.style.display = "flex";
  title.innerText = product;

  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("successMsg").innerText = "";
}


/* CLOSE MODAL */
function closeOrder(){
  const modal = document.getElementById("orderModal");
  if(modal){
    modal.style.display = "none";
  }
}


/* CLOSE WHEN CLICK OUTSIDE */
window.addEventListener("click", (e) => {
  const modal = document.getElementById("orderModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});


/* PLACE ORDER */
function placeOrder(){
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("successMsg");

  if(address === "" || phone === ""){
    alert("Please fill all details");
    return;
  }

  if(!/^\d{10}$/.test(phone)){
    alert("Enter valid 10-digit phone number");
    return;
  }

  msg.innerText = "Order placed successfully! 🎉";

  setTimeout(() => {
    closeOrder();
  }, 2000);
}