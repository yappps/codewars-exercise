const orderFood = list =>
  list.reduce((meals, dev) => {
    dev.meal in meals ? meals[dev.meal]++ : (meals[dev.meal] = 1);
    return meals;
  }, {});

module.exports = orderFood;
// Other Solution
/* 
const orderFood = list =>
  list.reduce(
    (acc, currDev) => ((acc[currDev.meal] = (acc[currDev.meal] || 0) + 1), acc),
    {}
  );
*/
