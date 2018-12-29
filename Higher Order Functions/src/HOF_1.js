// .filter() method creates a new array with all elements that pass the test implemented by the provided function.
const countDevelopers = arr =>
  arr.filter(
    element =>
      element.language === "JavaScript" && element.continent === "Europe"
  ).length;

module.exports = countDevelopers;
