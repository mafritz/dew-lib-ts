const rewire = require("rewire");
const dew = rewire("../dist/dew.lib");

const computeSlope = dew.__get__("computeSlope");
const getRandomNumber = dew.__get__("getRandomNumber");

const x_zero = 0;
const x_random = getRandomNumber(-100, 100);
const x_positive = getRandomNumber(1, 100);
const x_negative = getRandomNumber(-100, -1);

const y_zero = 0;
const y_random = getRandomNumber(-100, 100);
const y_positive = getRandomNumber(1, 100);
const y_negative = getRandomNumber(-100, -1);

test("Compute a slope given x = 0 and y = 0 values", () => {
  expect(computeSlope(x_zero, y_zero)).toBeGreaterThanOrEqual(0);
  expect(computeSlope(x_zero, y_zero)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = random and y = random values", () => {
  expect(computeSlope(x_random, y_random)).toBeGreaterThanOrEqual(0);
  expect(computeSlope(x_random, y_random)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = positive and y = positive", () => {
  expect(computeSlope(x_positive, y_positive)).toBeGreaterThanOrEqual(0);
  expect(computeSlope(x_positive, y_positive)).toBeLessThanOrEqual(90);
});

test("Compute a slope given x = positive and y = negative", () => {
  expect(computeSlope(x_positive, y_negative)).toBeGreaterThanOrEqual(90);
  expect(computeSlope(x_positive, y_negative)).toBeLessThanOrEqual(180);
});

test("Compute a slope given x = negative and y = negative", () => {
  expect(computeSlope(x_negative, y_negative)).toBeGreaterThanOrEqual(180);
  expect(computeSlope(x_negative, y_negative)).toBeLessThanOrEqual(270);
});

test("Compute a slope given x = negative and y = positive", () => {
  expect(computeSlope(x_negative, y_positive)).toBeGreaterThanOrEqual(270);
  expect(computeSlope(x_negative, y_positive)).toBeLessThanOrEqual(360);
});
