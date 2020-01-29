
let functions = require("./js/main");
let testingtest = functions.testingtest;
let addItem = functions.addItem;
let search= functions.search;
let filterPrice = functions.filterPrice;
let filterCat = functions.filterCat;
let updateLocoalStorage = functions.updateLocoalStorage;

describe("this is to check that test works well", () => {
  test("return 10 when given 5", () => {
    expect(testingtest(5)).toBe(10);
  });
});

describe("check if user inputs are stored in objects or not", ()=> {
    test("should return arr [{id 0}]", () => {
        let actual = addItem([],'Einstein universe','nice book','25','Science','URL');
        let expected = [{"URL": "URL", "category": "Science", "details": "nice book", "id": 0, "name": "Einstein universe", "price": "25"}];
        expect(actual).toEqual(expected);
      });
      test("should return arr [{id 0}]", () => {
        let actual = addItem([{"URL": "URL", "category": "Science", "details": "nice book", "id": 0, "name": "Einstein universe", "price": "25"}],'Einstein universe','nice book','25','Science','URL');
        let expected = [{"URL": "URL", "category": "Science", "details": "nice book", "id": 0, "name": "Einstein universe", "price": "25"},{"URL": "URL", "category": "Science", "details": "nice book", "id": 1, "name": "Einstein universe", "price": "25"}];
        expect(actual).toEqual(expected);
      });
            test("should return arr [{id 0}]", () => {
        let actual = addItem([{"URL": "URL", "category": "Science", "details": "nice book", "id": 0, "name": "Einstein universe", "price": "25"},{"URL": "URL", "category": "Science", "details": "nice book", "id": 1, "name": "Einstein universe", "price": "25"}],'Einstein universe','nice book','25','Science','URL');
        let expected = [{"URL": "URL", "category": "Science", "details": "nice book", "id": 0, "name": "Einstein universe", "price": "25"},{"URL": "URL", "category": "Science", "details": "nice book", "id": 1, "name": "Einstein universe", "price": "25"},{"URL": "URL", "category": "Science", "details": "nice book", "id": 2, "name": "Einstein universe", "price": "25"}];
        expect(actual).toEqual(expected);
      });
      
});


describe("search function to return the product with the value of search input name",()=>{
  test("should return [{price : 7,name : `book1`}] when search for book1 ", ()=>{
    let actual= search([{price : 7,name : "book1"},{price : 5,name : "book2"},{price : 15,name : "book"
    }], "book1");
    let expected= [{price : 7,name : "book1"}];
    expect(actual).toEqual(expected);

  } )

})

describe("filter arrays product by price", ()=>{
  test("filter objects by price less than 10" , ()=>{
    let actual= filterPrice([{price : 7,name : "book1"},{price : 5,name : "book2"},{price : 15,name : "book"
    }], 10);
    let expected = [{price : 7,name : "book1"},{price : 5,name : "book2"}];
    expect(actual).toEqual(expected);
  })
})

describe("filter arrays by category" , ()=>{
  test("filter object by category history", ()=>{
    let actual= filterCat([{price : 7,name : "book1", category: "History"},{price : 5,name : "book2",category: "novel"},{price : 15, name : "book",category: "science"}], "History");
    let expected = [{price : 7,name : "book1", category: "History"}];
    expect(actual).toEqual(expected)
  })
})
