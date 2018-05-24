const topTen = input => {
  let removeSpecialCharacters = input.replace(/[^a-zA-Z0-9 ]/g, "");
  let rank = {};
  let topTen = {};
  if (input.length === 0) {
    return "You need to have text";
  } else {
    let convertToArray = removeSpecialCharacters.toLowerCase().split(" ");
    convertToArray.map(element => {
      rank[element] = (rank[element] || 0) + 1;
    });
    let keysSorted = Object.keys(rank).sort((a, b) => rank[b] - rank[a]);

    if (keysSorted.length < 11) {
      keysSorted.forEach(element => {
        topTen[element] = rank[element];
      });
    } else {
      for (i = 0; i < 10; i++) {
        topTen[keysSorted[i]] = rank[keysSorted[i]];
      }
    }
    console.log(topTen);
    return topTen;
  }
};

module.exports = topTen;
