const topTen = require("../src/topTenMostUsedWords");

describe("Top 10 Most Used Words", () => {
  it('should return "You need to have text!!" when input is 0', () => {
    let input = "";
    expect(topTen(input)).toEqual("You need to have text");
  });
  it("should return all the words if individual words <10 ", () => {
    let input = "hi hi bye bye what the the fuck fuck test k";
    let expectedResults = {
      hi: 2,
      bye: 2,
      the: 2,
      fuck: 2,
      what: 1,
      test: 1,
      k: 1
    };
    expect(topTen(input)).toEqual(expectedResults);
  });
  it("should return TOP TEN words if individual words > 10 ", () => {
    let input =
      "hi hi bye bye what a a bye f f es bye the the fuck the erp fuck hack test lorem lorem lorem lorem lorem lorem lorem k";
    let expectedResults = {
      lorem: 7,
      bye: 4,
      the: 3,
      a: 2,
      f: 2,
      fuck: 2,
      hi: 2,
      es: 1,
      erp: 1,
      hack: 1
    };
    expect(topTen(input)).toEqual(expectedResults);
  });
  it("should return TOP TEN words if individual words > 10 ", () => {
    let input =
      "Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied. Day blushes visitor end company old prevent chapter. Consider declared out expenses her concerns. No at indulgence conviction particular unsatiable boisterous discretion. Direct enough off others say eldest may exeter she. Possible all ignorant supplied get settling marriage recurred. ";
    let expectedResults = {
      am: 1,
      half: 1,
      high: 1,
      late: 1,
      neat: 1,
      prevent: 1,
      sent: 1,
      sigh: 1,
      to: 1,
      what: 1
    };
    expect(topTen(input)).toEqual(expectedResults);
  });
});
