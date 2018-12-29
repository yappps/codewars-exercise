// Failed
/* 
Your task is to return:

- `true` if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
- `false` otherwise.
*/

const minAges = [...Array(10).keys()].map(number => number + 1);

const isAgeDiverse = list => {
  const devAgesSorted = list
    .map(dev => (dev.age >= 100 ? 10 : Math.floor(dev.age / 10)))
    .sort((a, b) => a - b);

  return new Set(devAgesSorted).size === minAges.length;
};

module.exports = isAgeDiverse;
