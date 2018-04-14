/*
Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example:
  deleteNth ([1,1,1,1],2) // return [1,1]
  deleteNth ([20,37,20,21],1) // return [20,37,21]
*/
// [My solution]
const deleteNth = (array, nth) => {
  let groupedElementObject = {};
  let ansArray = [];
  array.forEach(element => {
    // if the key does not exist, create one
    groupedElementObject[element] === undefined
      ? (groupedElementObject[element] = 1)
      : // if the key exist, add one
        (groupedElementObject[element] += 1);

    // if the number of the element > nth, do not add to the ansArray
    if (groupedElementObject[element] <= nth) {
      ansArray.push(element);
    }
  });
  return ansArray;
};

// [Other people Ans]
// function deleteNth(array, nth) {
//   var cache = {};
//   return array.filter(function(element) {
//     cache[element] = (cache[element] || 0) + 1;
//     // console.log(cache);
//     // console.log(cache[element]);
//     return cache[element] <= nth;
//   });
// }
module.exports = deleteNth;
