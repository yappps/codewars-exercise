const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const allContinents = list => {
  let data = {};
  list.forEach(dev => {
      /* 
      Syntax: objName.keyName = (objName.keyName || defaultValue)
      */
    data[dev.continent] = (data[dev.continent] || 0) + 1;
  });
  return Object.keys(data).length === continents.length ? true : false;
};

module.exports = allContinents;
