"use strict";

function addItem(items, name, details, price, category, URL) {
  let id = items.length;
  let obj = {
    id,
    name,
    details,
    price,
    category,
    URL,
  };
  return [...items, obj];
}

function search(arr, txt) {
  let newItems = arr.filter(element => {
    let searchInput = new RegExp(txt, "g");
    let text = element.name + element.detalis;
    return searchInput.test(text);
  });
  return newItems;
}

function filterPrice(arr, price) {
  return arr.filter(e => e.price <= price);
}
function filterCat(arr, cat) {
  return arr.filter(e => e.category == cat);
}

if (typeof exports !== "undefined") {
  module.exports = {
    addItem: addItem,
    search: search,
    filterPrice: filterPrice,
    filterCat: filterCat
  };
}
