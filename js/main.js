"use strict";

// testingtest function
function testingtest(x) {
  return x * 2;
}

//define variables and get elements from locoal storage
let product = JSON.parse(localStorage.getItem("product"));
if (!product) {
    product = [];
}

function addItem(name, details, price, category, URL) {
let id;
if (!JSON.parse(localStorage.getItem("product"))) {
         id = 0;
      }
    else{
        id = JSON.parse(localStorage.getItem("product")).length;
    }
  
  let obj = {
    id,
    name,
    details,
    price,
    category,
    URL
  };
  updateLocoalStorage(obj);
  return obj;
}

function updateLocoalStorage(obj){
    let localUpdate = [...product,obj];
    localStorage.setItem("product", JSON.stringify(localUpdate));
}

if (typeof exports !== "undefined") {
  module.exports = {
    testingtest: testingtest,
    addItem: addItem,
    updateLocoalStorage: updateLocoalStorage
  };
}
