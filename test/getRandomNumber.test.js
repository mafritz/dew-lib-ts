const rewire = require("rewire");
const dew = rewire("../dist/dew.lib");

const getRandomNumber = dew.__get__("getRandomNumber");

test("Generate random number between -100 and 100", () => {
  expect(getRandomNumber(-100, 100)).toBeGreaterThanOrEqual(-100);
  expect(getRandomNumber(-100, 100)).toBeLessThanOrEqual(100);
});
