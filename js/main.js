"use strict";

// testingtest function
function testingtest(x) {
  return x * 2;
}

//define variables and get elements from locoal storage

function addItem(items, name, details, price, category, URL) {
  let id = items.length;
  let obj = {
    id,
    name,
    details,
    price,
    category,
    URL
  };
  // updateLocoalStorage(obj);
  return [...items, obj];
}

function search(arr, txt) {
  let newItems = arr.filter(element => {
    let replace = txt;
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
    testingtest: testingtest,
    addItem: addItem,
    search: search,
    filterPrice: filterPrice,
    filterCat: filterCat
  };
}
