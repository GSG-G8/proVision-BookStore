let cart = document.getElementById("cart");
let goToCart = document.getElementById("gotocart");
let products = document.querySelector('.products');
let cart__cancel = document.querySelector('.cart__cancel');
goToCart.addEventListener("click" , gotocar);
function gotocar() {
  cart.style.display = "flex";
  products.style.display = "none";
};
cart__cancel.addEventListener('click',backToProduct);
function backToProduct(){
    cart.style.display = "none";
    products.style.display = "flex";
};
window.onclick = e => {
  console.log(e.target.innerText);
} 