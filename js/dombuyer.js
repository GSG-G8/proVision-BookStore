const cart = document.getElementById("cart");
const goToCart = document.getElementById("gotocart");
const products = document.querySelector('.products');
const cart__cancel = document.querySelector('.cart__cancel');
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

document.addEventListener('click',function addToC(event){
  let a = event.target;
  let cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if(!cartItems){
    cartItems = [];
  }
  let i = 0;
   if(a.getAttribute('title') === "prod"){
      
    cartItem = addItem(cartItems,i,'sadf','dsaf','20','home','a');
    localStorage.setItem('cartItem',JSON.stringify(cartItem));
    i++;
  }
  
  }
);

if (typeof exports !== "undefined") {
  module.exports = {
    testingtest: testingtest,
    addItem: addItem
  };
}
