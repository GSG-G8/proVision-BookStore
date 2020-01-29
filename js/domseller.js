


///////// show product
let add= document.getElementById('addBook');

add.addEventListener('click',showProduct);
let productsParent = document.getElementById('products');
function showProduct(){
  let namePro = document.getElementById('product-name').value;
  let detPro = document.getElementById('product-detailes').value;
  let pricePro = document.getElementById('product-price').value;
  let imgPro = document.getElementById('product-image').value;
  let catPro = document.getElementById('product-category').value;
  addItem(namePro, detPro, pricePro, catPro, imgPro);
  let ProSection = document.createElement('section');
  productsParent.appendChild(ProSection);
  ProSection.classList.add("products__sec");
  ProSection.innerHTML = `
          <img src=${imgPro} alt="book" />
          <h2>${namePro}</h2>
          <p>${detPro}</p>
          <span>${pricePro}</span>
          <span>${catPro}</span><br />
          <button class="products__sec-dlt" type="button">
            Delete products
          </button>
          <button class="products__sec-edit" type="button">
            Edit products
          </button>
                  `
}
function load(){
  let proSecP=document.getElementById('products')
  let proArr = JSON.parse(localStorage.getItem("product"));
  for(let i=0; i<proArr.length; i++){
  let secProduct= document.createElement('section');
  secProduct.classList.add('products__sec');
  secProduct.id= proArr[i].id;
  proSecP.appendChild(secProduct);
    secProduct.innerHTML=`<img src=${proArr[i].URL} alt="book"/>
    <h2>${proArr[i].name}</h2>
    <p>${proArr[i].details}</p>
    <span>${proArr[i].price}</span>
    <span>${proArr[i].category}</span><br />
    <button class="products__sec-dlt" type="button">
      Delete products
    </button>
    <button class="products__sec-edit" type="button">
      Edit products
    </button>`
    
  }
}
load();
