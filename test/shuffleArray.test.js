const rewire = require("rewire");
const dew = rewire("../dist/dew.lib");

const shuffleArray = dew.__get__("shuffleArray");

const testArray = [1, 2, 3, 4, 5];
const copyTestArray = testArray.splice(0, testArray.length);

test("Shuffle a given array", () => {
  expect(shuffleArray(testArray).join()).not.toEqual(copyTestArray.join());
});
