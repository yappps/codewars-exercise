/* 
[Qns]:
- Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

const findOdd = arr => {
  let tabulate = {};
  arr.forEach(element => {
    // Another way of writing: obj[el] ? obj[el]++ : obj[el] = 1;
    tabulate[element] = (tabulate[element] || 0) + 1;
  });
  for (key in tabulate) {
    if (tabulate[key] % 2 !== 0) {
      return Number.parseInt(key);
    }
  }
};
module.exports = findOdd;
