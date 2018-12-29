const getFirstPython = require("../src/HOF_4");

describe("Get First Python", () => {
  it('should return "There will be no Python developers if no Python developer has signed up." ', () => {
    let list = [
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 29,
        language: "JavaScript"
      },
      {
        firstName: "Amar",
        lastName: "V.",
        country: "Bosnia and Herzegovina",
        continent: "Europe",
        age: 32,
        language: "Ruby"
      }
    ];
    let expectedAns =
      "There will be no Python developers";

    expect(getFirstPython(list)).toEqual(expectedAns);
  });
  it('should return "Victoria, Puerto Rico" ', () => {
    let list = [
      {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 22,
        language: "JavaScript"
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 30,
        language: "Python"
      },
      {
        firstName: "Emma",
        lastName: "B.",
        country: "Norway",
        continent: "Europe",
        age: 19,
        language: "Clojure"
      }
    ];
    let expectedAns = "Victoria, Puerto Rico";

    expect(getFirstPython(list)).toEqual(expectedAns);
  });
});
