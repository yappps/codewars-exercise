const countDevelopers = require("../src/HOF_1");
describe(" Count the number of JavaScript developers coming from Europe", () => {
  it("should return 0 if there is no Javascript developers", () => {
    let list = [
      {
        firstName: "Oliver",
        lastName: "Q.",
        country: "Australia",
        continent: "Oceania",
        age: 19,
        language: "HTML"
      },
      {
        firstName: "Lukas",
        lastName: "R.",
        country: "Austria",
        continent: "Europe",
        age: 89,
        language: "HTML"
      }
    ];
    expect(countDevelopers(list)).toEqual(0);
  });
  it("should return 1 if there are 1 Javascript developers that come from Europe", () => {
    let list = [
      {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "JavaScript"
      },
      {
        firstName: "Maia",
        lastName: "S.",
        country: "Tahiti",
        continent: "Oceania",
        age: 28,
        language: "JavaScript"
      },
      {
        firstName: "Shufen",
        lastName: "L.",
        country: "Taiwan",
        continent: "Asia",
        age: 35,
        language: "HTML"
      },
      {
        firstName: "Sumayah",
        lastName: "M.",
        country: "Tajikistan",
        continent: "Asia",
        age: 30,
        language: "CSS"
      }
    ];
    expect(countDevelopers(list)).toEqual(1);
  });
});
