const findAdmin = require("../src/HOF_12");
let list = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes"
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no"
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes"
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no"
  }
];
describe("Find GitHub admins", () => {
  it("Javascript should return 2 admins ", () => {
    let expected = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes"
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes"
      }
    ];
    expect(findAdmin(list, "JavaScript")).toEqual(
      expect.arrayContaining(expected)
    );
  });
  it("Ruby should return 0 admins ", () => {
    let expected = [];
    expect(findAdmin(list, "Ruby")).toEqual(expect.arrayContaining(expected));
  });
  it("Python should return 0 admins ", () => {
    let expected = [];
    expect(findAdmin(list, "Python")).toEqual(expect.arrayContaining(expected));
  });
});
