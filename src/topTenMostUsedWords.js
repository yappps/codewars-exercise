const topTen = input => {
  let removeSpecialCharacters = input.replace(/[^a-zA-Z0-9 ]/g, "");
  let tabulate = {};
  let topTen = {};
  if (input.length === 0) {
    return "You need to have text";
  } else {
    let convertToArray = removeSpecialCharacters.toLowerCase().split(" ");
    convertToArray.map(element => {
      tabulate[element] = (tabulate[element] || 0) + 1;
    });
    let keysSorted = Object.keys(tabulate).sort(
      (a, b) => tabulate[b] - tabulate[a]
    );
    console.log(Object.keys(tabulate))
    if (keysSorted.length < 11) {
      keysSorted.forEach(element => {
        topTen[element] = tabulate[element];
      });
    } else {
      for (i = 0; i < 10; i++) {
        topTen[keysSorted[i]] = tabulate[keysSorted[i]];
      }
    }
    return topTen;
  }
};

module.exports = topTen;
