const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

test("Generate random number between -100 and 100", () => {
  expect(DEW.getRandomNumber(-100, 100)).toBeGreaterThanOrEqual(-100);
  expect(DEW.getRandomNumber(-100, 100)).toBeLessThanOrEqual(100);
});
