const sumOfTheSum = arr => {
  let sum = 0;
  arr.forEach(element => {
    let increamentBy = sum;
    sum += increamentBy + element;
    console.log(element, increamentBy, sum);
  });
  return sum;
};
module.exports = sumOfTheSum;
