const getAverageAge = require("../src/HOF_11");
describe("Find the average age", () => {
  it("should return 50", () => {
    let list1 = [
      {
        firstName: "Maria",
        lastName: "Y.",
        country: "Cyprus",
        continent: "Europe",
        age: 30,
        language: "Java"
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 70,
        language: "Python"
      }
    ];
    expect(getAverageAge(list1)).toEqual(50);
  });
  it("should return 21", () => {
    let list2 = [
      {
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 20,
        language: "Ruby"
      },
      {
        firstName: "Andrei",
        lastName: "E.",
        country: "Romania",
        continent: "Europe",
        age: 21,
        language: "C"
      }
    ];
    expect(getAverageAge(list2)).toEqual(21);
  });
  it("should return 66", () => {
    let list3 = [
      {
        firstName: "Mariam",
        lastName: "B.",
        country: "Egypt",
        continent: "Africa",
        age: 89,
        language: "Python"
      },
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C"
      },
      {
        firstName: "Agustin",
        lastName: "V.",
        country: "Uruguay",
        continent: "Americas",
        age: 19,
        language: "JavaScript"
      },
      {
        firstName: "Sofia",
        lastName: "P.",
        country: "Italy",
        continent: "Europe",
        age: 71,
        language: "Clojure"
      },
      {
        firstName: "Alexander",
        lastName: "F.",
        country: "Russia",
        continent: "Europe",
        age: 89,
        language: "Java"
      },
      {
        firstName: "Marian",
        lastName: "N.",
        country: "Colombia",
        continent: "Americas",
        age: 55,
        language: "Python"
      },
      {
        firstName: "Andrei",
        lastName: "E.",
        country: "Romania",
        continent: "Europe",
        age: 59,
        language: "C"
      },
      {
        firstName: "Shufen",
        lastName: "L.",
        country: "Taiwan",
        continent: "Asia",
        age: 35,
        language: "PHP"
      },
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 19,
        language: "Python"
      },
      {
        firstName: "Sofia",
        lastName: "A.",
        country: "Denmark",
        continent: "Europe",
        age: 19,
        language: "Python"
      }
    ];
    expect(getAverageAge(list3)).toEqual(47);
  });
});
