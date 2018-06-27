const greetDevelopers = require("../src/HOF_2");
describe("Greet developers", () => {
  it("should return an array where each object will have a new property 'greeting' ", () => {
    let list1 = [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java"
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python"
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby"
      }
    ];
    let results = [
      {
        firstName: "Sofia",
        lastName: "I.",
        country: "Argentina",
        continent: "Americas",
        age: 35,
        language: "Java",
        greeting: "Hi Sofia, what do you like the most about Java?"
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 35,
        language: "Python",
        greeting: "Hi Lukas, what do you like the most about Python?"
      },
      {
        firstName: "Madison",
        lastName: "U.",
        country: "United States",
        continent: "Americas",
        age: 32,
        language: "Ruby",
        greeting: "Hi Madison, what do you like the most about Ruby?"
      }
    ];
    expect(greetDevelopers(list1)).toEqual(results);
  });
});
