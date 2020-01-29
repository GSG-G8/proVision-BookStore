const add = document.getElementById("addBook");
add.addEventListener("click", showProduct);

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
    document.getElementById("products").insertAdjacentHTML('afterbegin',item);
  } else {
    alert("empty input not allowed");
  }
}
