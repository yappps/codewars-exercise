const allContinents = require("../src/HOF_8");

describe("Will all continents be represented?", () => {
  it("should return true when all continents are represented", () => {
    let list1 = [
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Africa",
        age: 25,
        language: "JavaScript"
      },
      {
        firstName: "Agustín",
        lastName: "M.",
        country: "Chile",
        continent: "Americas",
        age: 37,
        language: "C"
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 39,
        language: "Ruby"
      },
      {
        firstName: "Laia",
        lastName: "P.",
        country: "Andorra",
        continent: "Europe",
        age: 55,
        language: "Ruby"
      },
      {
        firstName: "Oliver",
        lastName: "Q.",
        country: "Australia",
        continent: "Oceania",
        age: 65,
        language: "PHP"
      }
    ];

    expect(allContinents(list1)).toBeTruthy();
  });
  it("should return false when africa is not represented", () => {
    let list1 = [
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Africa",
        age: 25,
        language: "JavaScript"
      },
      {
        firstName: "Agustín",
        lastName: "M.",
        country: "Chile",
        continent: "Americas",
        age: 37,
        language: "C"
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "Chile",
        continent: "Africa",
        age: 39,
        language: "Ruby"
      },
      {
        firstName: "Laia",
        lastName: "P.",
        country: "Andorra",
        continent: "Europe",
        age: 55,
        language: "Ruby"
      },
      {
        firstName: "Oliver",
        lastName: "Q.",
        country: "Australia",
        continent: "Oceania",
        age: 65,
        language: "PHP"
      }
    ];

    expect(allContinents(list1)).toBeFalsy();
  });
});
