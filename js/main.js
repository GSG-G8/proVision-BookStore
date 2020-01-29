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


if (typeof exports !== "undefined") {
  module.exports = {
    testingtest: testingtest,
    addItem: addItem
  };
}


