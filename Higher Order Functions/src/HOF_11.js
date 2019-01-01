/* 
Write a function that returns the average age of developers (rounded to the nearest integer). 
*/

const getAverageAge = list =>
  Math.round(
    list.map(dev => dev.age).reduce((prev, curr) => prev + curr) / list.length
  );
module.exports = getAverageAge;

// A better solution
/*
const getAverageAge = list =>
  Math.round(list.reduce((prev, curr) => prev + curr.age, 0) / list.length);
*/
