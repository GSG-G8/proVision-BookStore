const cart = document.getElementById("cart");
const goToCart = document.getElementById("gotocart");
const products = document.querySelector('.products');
const cart__cancel = document.querySelector('.cart__cancel');
let product = JSON.parse(localStorage.getItem("product"));
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
let cartItems = JSON.parse(localStorage.getItem('cartItems'));

document.addEventListener('click',function addToC(event){
   let theElement = event.target;
  if(!cartItems){
    cartItems = [];
  }

   if(theElement.getAttribute('title') === "prod"){
    cartItems = addItem(cartItems,'nameProduct','sadf','dsaf','20','home');
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    theElement.setAttribute('title','incart');
    theElement.innerText = 'in cart';
    productinCart();
  }
  
  }
);

function productinCart() {
    cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let itemAll;
    cartItems.forEach(element => {
      itemAll = `<section id="${element.id}" class="products__prod">
      <img src='${element.URL}' alt="book" class="products__prod-img" >
      <h3 class="products__prod-name">${element.name}</h3>
      <p class="products__prod-price">${element.details}</p>
      <p class="products__prod-price">${element.price}</p>
      <span>${element.category}</span><br />
      <button class="products__button-add" type="button">
        Delete products
      </button>
      </section>`;
    });
    document.getElementById("productsInCart").insertAdjacentHTML('afterbegin',itemAll);
}



if (typeof exports !== "undefined") {
  module.exports = {
    testingtest: testingtest,
    addItem: addItem
  };
}



function showProduct() {

  if (!product) {
    product = [];
  }
  
    
  product.forEach(element => {
   let itemGet = `<section id="${element.id}" class="products__prod">
    <img src='${element.URL}' alt="book" class="products__prod-img" >
    <h3 class="products__prod-name">${element.name}</h3>
    <p class="products__prod-price">${element.details}</p>
    <p class="products__prod-price">${element.price}</p>
    <span>${element.category}</span><br />
    <button class="products__button-add" type="button" title="prod">
      add to cart
    </button>
    </section>`;
    document.getElementById("products").insertAdjacentHTML('afterbegin',itemGet);
  });

}
showProduct();
