

const add = document.getElementById("addBook");
const showForm = document.getElementById("showAdd");
const addForm = document.getElementById("add");
const hideForm = document.getElementById("hideForm");
const products = document.getElementById("products");
add.addEventListener("click", showProduct);
showForm.addEventListener("click", function() {
  addForm.style.display = "block";
});

hideForm.addEventListener("click", function() {
  addForm.style.display = "none";
});

function showProduct() {
  const namePro = document.getElementById("product-name").value;
  const detPro = document.getElementById("product-detailes").value;
  const pricePro = document.getElementById("product-price").value;
  const imgPro = document.getElementById("product-image").value;
  const catPro = document.getElementById("product-category").value;
  let product = JSON.parse(localStorage.getItem("product"));
  if (!product) {
    product = [];
  }
  if (namePro && detPro && pricePro && imgPro && catPro) {
    product = addItem(product, namePro, detPro, pricePro, catPro, imgPro);
    localStorage.setItem("product", JSON.stringify(product));
    const item = `<div id="${product.length}" class="products__sec">
    <img src='${imgPro}' alt="book">
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
  </div>`;
    document.getElementById("product-name").value = "";
    document.getElementById("product-detailes").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-image").value = "";
    document.getElementById("product-category").value = "";
    products.insertAdjacentHTML("afterbegin", item);
  } else {
    alert("empty input not allowed");
  }
}

function load() {
  let proArr = JSON.parse(localStorage.getItem("product"));
  if (!proArr) {
    proArr = [];
  }
  for (let i = 0; i < proArr.length; i++) {
    let secProduct = document.createElement("section");
    secProduct.classList.add("products__sec");
    secProduct.id = proArr[i].id;
    products.appendChild(secProduct);
    secProduct.innerHTML = `<img src=${proArr[i].URL} alt="book"/>
    <h2>${proArr[i].name}</h2>
    <p>${proArr[i].details}</p>
    <span>${proArr[i].price}</span>
    <span>${proArr[i].category}</span><br />
    <button id="delt${i}" class="products__sec-dlt" type="button">
      Delete products
    </button>
    <button class="products__sec-edit" type="button">
      Edit products
    </button>`;

    let delte = document.getElementById(`delt${i}`);
    delte.addEventListener("click", function(event) {
      event.target.parentElement.remove();
    });
  }
}

load();
