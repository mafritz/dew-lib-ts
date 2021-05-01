const dew = require("../backend/");

const testArray = [1, 2, 3, 4, 5];
const copyTestArray = testArray.splice(0, testArray.length);

test("Shuffle a given array", () => {
  expect(dew.shuffleArray(testArray).join()).not.toEqual(copyTestArray.join());
});
