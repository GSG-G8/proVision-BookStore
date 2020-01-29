


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

