let functions = require("./js/main");
let testingtest = functions.testingtest;
let addItem = functions.addItem;
let search = functions.search;
let filterPrice = functions.filterPrice;
let filterCat = functions.filterCat;


describe("this is to check that test works well", () => {
  test("return 10 when given 5", () => {
    expect(testingtest(5)).toBe(10);
  });
});

describe("check if user inputs are stored in objects or not", () => {
  test("should return arr [{id 0}]", () => {
    let actual = addItem(
      [],
      "Einstein universe",
      "nice book",
      "25",
      "Science",
      "URL"
    );
    let expected = [
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 0,
        name: "Einstein universe",
        price: "25"
      }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return arr [{id 0}]", () => {
    let actual = addItem(
      [
        {
          URL: "URL",
          category: "Science",
          details: "nice book",
          id: 0,
          name: "Einstein universe",
          price: "25"
        }
      ],
      "Einstein universe",
      "nice book",
      "25",
      "Science",
      "URL"
    );
    let expected = [
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 0,
        name: "Einstein universe",
        price: "25"
      },
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 1,
        name: "Einstein universe",
        price: "25"
      }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return arr [{id 0}]", () => {
    let actual = addItem(
      [
        {
          URL: "URL",
          category: "Science",
          details: "nice book",
          id: 0,
          name: "Einstein universe",
          price: "25"
        },
        {
          URL: "URL",
          category: "Science",
          details: "nice book",
          id: 1,
          name: "Einstein universe",
          price: "25"
        }
      ],
      "Einstein universe",
      "nice book",
      "25",
      "Science",
      "URL"
    );
    let expected = [
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 0,
        name: "Einstein universe",
        price: "25"
      },
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 1,
        name: "Einstein universe",
        price: "25"
      },
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 2,
        name: "Einstein universe",
        price: "25"
      }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("search function to return the product with the value of search input name or detalis", () => {
  test("should return [{}] ", () => {
    let actual = search(
      [
        {
          URL: "URL",
          category: "Science",
          details: "nice book",
          id: 0,
          name: "Einstein universe",
          price: "25"
        }
      ],
      "Einstein"
    );
    let expected = [
      {
        URL: "URL",
        category: "Science",
        details: "nice book",
        id: 0,
        name: "Einstein universe",
        price: "25"
      }
    ];
    expect(actual).toEqual(expected);
  });
  test("should return []", () => {
    let actual = search(
      [
        {
          URL: "URL",
          category: "Science",
          details: "nice book",
          id: 0,
          name: "Einstein universe",
          price: "25"
        }
      ],
      "Ahmed"
    );
    let expected = [];
    expect(actual).toEqual(expected);
  });
  test("should return [{}]", () => {
    let actual = search(
      [
        {
          URL: "a",
          category: "mystery",
          details: "a",
          id: 0,
          name: "a",
          price: "4"
        }
      ],
      "a"
    );
    let expected = [
      {
        URL: "a",
        category: "mystery",
        details: "a",
        id: 0,
        name: "a",
        price: "4"
      }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("filter arrays product by price", () => {
  test("filter objects by price less than 10", () => {
    let actual = filterPrice(
      [
        { price: 7, name: "book1" },
        { price: 5, name: "book2" },
        { price: 15, name: "book" }
      ],
      10
    );
    let expected = [
      { price: 7, name: "book1" },
      { price: 5, name: "book2" }
    ];
    expect(actual).toEqual(expected);
  });
});

describe("filter arrays by category", () => {
  test("filter object by category history", () => {
    let actual = filterCat(
      [
        { price: 7, name: "book1", category: "History" },
        { price: 5, name: "book2", category: "novel" },
        { price: 15, name: "book", category: "science" }
      ],
      "History"
    );
    let expected = [{ price: 7, name: "book1", category: "History" }];
    expect(actual).toEqual(expected);
  });
});
