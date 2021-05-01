const dew = require("../backend/");

test("Generate random number between -100 and 100", () => {
  expect(dew.getRandomNumber(-100, 100)).toBeGreaterThanOrEqual(-100);
  expect(dew.getRandomNumber(-100, 100)).toBeLessThanOrEqual(100);
});
