
let functions = require("./js/main");
let testingtest = functions.testingtest;
let addItem = functions.addItem;

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

