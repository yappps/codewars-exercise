const findSenior = require("../src/HOF_7");
describe("Find the most Senior dev", () => {
  it("should return 2 dev who has the same age and is the oldest", () => {
    let list = [
      {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP"
      },
      {
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python"
      },
      {
        firstName: "Emilija",
        lastName: "S.",
        country: "Lithuania",
        continent: "Europe",
        age: 19,
        language: "Python"
      },
      {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 49,
        language: "PHP"
      }
    ];
    let expectedAns = [
      {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP"
      },
      {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 49,
        language: "PHP"
      }
    ];
    expect(findSenior(list)).toEqual(expectedAns);
  });
  it("should return 2 dev who has the same age and is the oldest", () => {
    let list = [
      {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP"
      },
      {
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python"
      },
      {
        firstName: "Emilija",
        lastName: "S.",
        country: "Lithuania",
        continent: "Europe",
        age: 19,
        language: "Python"
      }
    ];
    let expectedAns = [
      {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP"
      }
    ];
    expect(findSenior(list)).toEqual(expectedAns);
  });
  it("should return 2 dev who has the same age and is the oldest", () => {
    var list = [
      {
        firstName: "Alexander",
        lastName: "F.",
        country: "Russia",
        continent: "Europe",
        age: 89,
        language: "Java"
      },
      {
        firstName: "Fatima",
        lastName: "K.",
        country: "Saudi Arabia",
        continent: "Asia",
        age: 21,
        language: "Clojure"
      },
      {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 22,
        language: "JavaScript"
      },
      {
        firstName: "Nikola",
        lastName: "H.",
        country: "Serbia",
        continent: "Europe",
        age: 29,
        language: "Python"
      },
      {
        firstName: "Jakub",
        lastName: "I.",
        country: "Slovakia",
        continent: "Europe",
        age: 28,
        language: "Java"
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 89,
        language: "JavaScript"
      },
      {
        firstName: "Luka",
        lastName: "J.",
        country: "Slovenia",
        continent: "Europe",
        age: 29,
        language: "Clojure"
      },
      {
        firstName: "Mariam",
        lastName: "B.",
        country: "Egypt",
        continent: "Africa",
        age: 89,
        language: "Python"
      }
    ];

    var expectedAns = [
      {
        firstName: "Alexander",
        lastName: "F.",
        country: "Russia",
        continent: "Europe",
        age: 89,
        language: "Java"
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 89,
        language: "JavaScript"
      },
      {
        firstName: "Mariam",
        lastName: "B.",
        country: "Egypt",
        continent: "Africa",
        age: 89,
        language: "Python"
      }
    ];

    expect(findSenior(list)).toEqual(expectedAns);
  });
});
