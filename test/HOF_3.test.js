const isRubyComing = require("../src/HOF_3");
describe("is Ruby Coming", () => {
  it("return false if there is no Ruby developers in the list", () => {
    let list1 = [
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "Javascript"
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 42,
        language: "JavaScript"
      }
    ];
    expect(isRubyComing(list1)).toEqual(false);
  });
  it("return true if there is no Ruby developers in the list", () => {
    let list2 = [
      {
        firstName: "Emma",
        lastName: "Z.",
        country: "Netherlands",
        continent: "Europe",
        age: 29,
        language: "Ruby"
      },
      ,
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "Javascript"
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 42,
        language: "JavaScript"
      }
    ];
    expect(isRubyComing(list2)).toEqual(true);
  });
});
