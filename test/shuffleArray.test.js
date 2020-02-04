const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

const testArray = [1, 2, 3, 4, 5];
const copyTestArray = testArray.splice(0, testArray.length);

test("Shuffle a given array", () => {
  expect(DEW.shuffleArray(testArray).join()).not.toEqual(copyTestArray.join());
});
