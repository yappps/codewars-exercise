const countLanguages = require("../src/HOF_5");
describe("Count Languages", () => {
  it("should return {C : 2}", () => {
    let list = [
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C"
      },
      {
        firstName: "George",
        lastName: "B.",
        country: "England",
        continent: "Europe",
        age: 81,
        language: "C"
      }
    ];
    expect(countLanguages(list)).toEqual({ C: 2 });
  });
  it("should return { C: 2, JavaScript: 1, Ruby: 1 }", () => {
    let list = [
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C"
      },
      {
        firstName: "Anna",
        lastName: "R.",
        country: "Liechtenstein",
        continent: "Europe",
        age: 52,
        language: "JavaScript"
      },
      {
        firstName: "Ramon",
        lastName: "R.",
        country: "Paraguay",
        continent: "Americas",
        age: 29,
        language: "Ruby"
      },
      {
        firstName: "George",
        lastName: "B.",
        country: "England",
        continent: "Europe",
        age: 81,
        language: "C"
      }
    ];
    expect(countLanguages(list)).toEqual({ C: 2, JavaScript: 1, Ruby: 1 });
  });
});
