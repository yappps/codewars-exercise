const addUsername = require("../src/HOF_10");
describe("Name of the group", () => {
  it("should return ", () => {
    let list1 = [
      {
        firstName: "Emily",
        lastName: "N.",
        country: "Ireland",
        continent: "Europe",
        age: 30,
        language: "Ruby"
      },
      {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 20,
        language: "Clojure"
      }
    ];
    let expectedResult = [
      {
        firstName: "Emily",
        lastName: "N.",
        country: "Ireland",
        continent: "Europe",
        age: 30,
        language: "Ruby",
        username: "emilyn1988"
      },
      {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 20,
        language: "Clojure",
        username: "nore1998"
      }
    ];
    expect(addUsername(list1)).toEqual(expect.arrayContaining(expectedResult));
  });
});
