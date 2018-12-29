const isAgeDiverse = require("../src/HOF_9");
describe("Is the meetup age-diverse?", () => {
  it("should return true", () => {
    let list1 = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 19,
        language: "Python"
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 29,
        language: "JavaScript"
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
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 40,
        language: "Ruby"
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
        firstName: "Maria",
        lastName: "S.",
        country: "Peru",
        continent: "Americas",
        age: 60,
        language: "C"
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 75,
        language: "Python"
      },
      {
        firstName: "Chloe",
        lastName: "K.",
        country: "Guernsey",
        continent: "Europe",
        age: 88,
        language: "Ruby"
      },
      {
        firstName: "Viktoria",
        lastName: "W.",
        country: "Bulgaria",
        continent: "Europe",
        age: 98,
        language: "PHP"
      },
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript"
      }
    ];

    expect(isAgeDiverse(list1)).toBeTruthy();
  });
  it("should return false due to some age group not represented", () => {
    let list2 = [
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 29,
        language: "Ruby"
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
    expect(isAgeDiverse(list2)).toBeFalsy();
  });
  it("should return false due to some age group not represented", () => {
    let list3 = [
      {
        firstName: "Sofia",
        lastName: "P.",
        country: "Italy",
        continent: "Europe",
        age: 41,
        language: "Clojure"
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 42,
        language: "JavaScript"
      },
      {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 43,
        language: "Python"
      },
      {
        firstName: "Rimas",
        lastName: "C.",
        country: "Jordan",
        continent: "Asia",
        age: 44,
        language: "Java"
      }
    ];
    expect(isAgeDiverse(list3)).toBeFalsy();
  });
  xit("should return false due to some age group not represented", () => {
    let list4 = [
      {
        firstName: "Jakub",
        lastName: "I.",
        country: "Slovakia",
        continent: "Europe",
        age: 28,
        language: "Java"
      },
      {
        firstName: "Ellen",
        lastName: "E.",
        country: "Finland",
        continent: "Europe",
        age: 55,
        language: "Ruby"
      },
      {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 75,
        language: "Python"
      },
      {
        firstName: "Sofija",
        lastName: "Q.",
        country: "Latvia",
        continent: "Europe",
        age: 29,
        language: "Ruby"
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
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript"
      },
      {
        firstName: "Hugo",
        lastName: "K.",
        country: "Spain",
        continent: "Europe",
        age: 39,
        language: "Python"
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
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python"
      },
      {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 70,
        language: "Python"
      },
      {
        firstName: "Nor",
        lastName: "E.",
        country: "Malaysia",
        continent: "Asia",
        age: 21,
        language: "Clojure"
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
        firstName: "Mamadou",
        lastName: "E.",
        country: "Mali",
        continent: "Africa",
        age: 22,
        language: "Python"
      },
      {
        firstName: "Malik",
        lastName: "J.",
        country: "Greenland",
        continent: "Europe",
        age: 19,
        language: "Python"
      },
      {
        firstName: "Mia",
        lastName: "H.",
        country: "Germany",
        continent: "Europe",
        age: 39,
        language: "Ruby"
      },
      {
        firstName: "Liam",
        lastName: "D.",
        country: "Faroe Islands",
        continent: "Europe",
        age: 28,
        language: "Python"
      },
      {
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 40,
        language: "Ruby"
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
        firstName: "Maia",
        lastName: "S.",
        country: "Tahiti",
        continent: "Oceania",
        age: 28,
        language: "Clojure"
      },
      {
        firstName: "Jayden",
        lastName: "P.",
        country: "Jamaica",
        continent: "Americas",
        age: 42,
        language: "JavaScript"
      },
      {
        firstName: "Emma",
        lastName: "B.",
        country: "Norway",
        continent: "Europe",
        age: 19,
        language: "Clojure"
      },
      {
        firstName: "William",
        lastName: "L.",
        country: "Sweden",
        continent: "Europe",
        age: 32,
        language: "Java"
      },
      {
        firstName: "Fatemeh",
        lastName: "Z.",
        country: "Iran",
        continent: "Asia",
        age: 29,
        language: "Java"
      },
      {
        firstName: "Maria",
        lastName: "S.",
        country: "Peru",
        continent: "Americas",
        age: 60,
        language: "C"
      },
      {
        firstName: "Seoyeon",
        lastName: "J.",
        country: "South Korea",
        continent: "Asia",
        age: 29,
        language: "Ruby"
      },
      {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 52,
        language: "JavaScript"
      },
      {
        firstName: "Yerasyl",
        lastName: "D.",
        country: "Kazakhstan",
        continent: "Asia",
        age: 22,
        language: "Ruby"
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 29,
        language: "JavaScript"
      },
      {
        firstName: "Nikau",
        lastName: "R.",
        country: "New Zealand",
        continent: "Oceania",
        age: 39,
        language: "Ruby"
      },
      {
        firstName: "Jakub",
        lastName: "Z.",
        country: "Czech Republic",
        continent: "Europe",
        age: 42,
        language: "Java"
      },
      {
        firstName: "Thomas",
        lastName: "L.",
        country: "Canada",
        continent: "Americas",
        age: 38,
        language: "Java"
      },
      {
        firstName: "Luka",
        lastName: "J.",
        country: "Slovenia",
        continent: "Europe",
        age: 39,
        language: "Clojure"
      },
      {
        firstName: "Lukas",
        lastName: "R.",
        country: "Austria",
        continent: "Europe",
        age: 89,
        language: "C"
      },
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Africa",
        age: 25,
        language: "JavaScript"
      },
      {
        firstName: "Viktoria",
        lastName: "W.",
        country: "Bulgaria",
        continent: "Europe",
        age: 98,
        language: "PHP"
      },
      {
        firstName: "Emma",
        lastName: "Z.",
        country: "Netherlands",
        continent: "Europe",
        age: 29,
        language: "Ruby"
      },
      {
        firstName: "Krishna",
        lastName: "G.",
        country: "Nepal",
        continent: "Asia",
        age: 112,
        language: "Java"
      },
      {
        firstName: "Joshua",
        lastName: "O.",
        country: "Isle of Man",
        continent: "Europe",
        age: 39,
        language: "Clojure"
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
      }
    ];
    expect(isAgeDiverse(list4)).toBeFalsy();
  });
});
