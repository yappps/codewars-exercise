const isSameLanguage = require("../src/HOF_6");
describe("Is Same Language", () => {
  it("Should return false if developer's language are different ", () => {
    let list = [
      {
        firstName: "Mariami",
        lastName: "G.",
        country: "Georgia",
        continent: "Europe",
        age: 29,
        language: "Python"
      },
      {
        firstName: "Mia",
        lastName: "H.",
        country: "Germany",
        continent: "Europe",
        age: 39,
        language: "Ruby"
      }
    ];
    expect(isSameLanguage(list)).toEqual(false);
  });
  it("Should return true if developer's language are same ", () => {
    let list = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "JavaScript"
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "JavaScript"
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 65,
        language: "JavaScript"
      }
    ];
    expect(isSameLanguage(list)).toEqual(true);
  });
});
