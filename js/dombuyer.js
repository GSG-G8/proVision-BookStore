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

function load(){
  let proSecP=document.getElementById('products')
  let proArr = JSON.parse(localStorage.getItem("product"));
  for(let i=0; i<proArr.length; i++){
  let secProduct= document.createElement('section');
  secProduct.classList.add('products__prod');
  secProduct.id= proArr[i].id;
  proSecP.appendChild(secProduct);
    secProduct.innerHTML=`<img class="products__prod-img" src=${proArr[i].URL} alt="book"/>
    <h3 class="products__prod-name">${proArr[i].name}</h3>
    <p>${proArr[i].details}</p>
    <span>${proArr[i].price}</span>
    <span>${proArr[i].category}</span><br />
    <button class="products__button-add">add to cart</button>`
  }
}
load();