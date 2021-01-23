const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

const x_zero = 0;
const x_random = DEW.getRandomNumber(-100, 100);
const x_positive = DEW.getRandomNumber(1, 100);
const x_negative = DEW.getRandomNumber(-100, -1);

const y_zero = 0;
const y_random = DEW.getRandomNumber(-100, 100);
const y_positive = DEW.getRandomNumber(1, 100);
const y_negative = DEW.getRandomNumber(-100, -1);

test("Compute a slope given x = 0 and y = 0 values", () => {
  expect(DEW.computeSlope(x_zero, y_zero)).toBeGreaterThanOrEqual(0);
  expect(DEW.computeSlope(x_zero, y_zero)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = random and y = random values", () => {
  expect(DEW.computeSlope(x_random, y_random)).toBeGreaterThanOrEqual(0);
  expect(DEW.computeSlope(x_random, y_random)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = positive and y = positive", () => {
  expect(DEW.computeSlope(x_positive, y_positive)).toBeGreaterThanOrEqual(0);
  expect(DEW.computeSlope(x_positive, y_positive)).toBeLessThanOrEqual(90);
});

test("Compute a slope given x = positive and y = negative", () => {
  expect(DEW.computeSlope(x_positive, y_negative)).toBeGreaterThan(90);
  expect(DEW.computeSlope(x_positive, y_negative)).toBeLessThanOrEqual(180);
});

test("Compute a slope given x = negative and y = negative", () => {
  expect(DEW.computeSlope(x_negative, y_negative)).toBeGreaterThan(180);
  expect(DEW.computeSlope(x_negative, y_negative)).toBeLessThanOrEqual(270);
});

test("Compute a slope given x = negative and y = positive", () => {
  expect(DEW.computeSlope(x_negative, y_positive)).toBeGreaterThan(270);
  expect(DEW.computeSlope(x_negative, y_positive)).toBeLessThanOrEqual(360);
});
