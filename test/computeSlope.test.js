const dew = require("../backend/");

const x_zero = 0;
const x_random = dew.getRandomNumber(-100, 100);
const x_positive = dew.getRandomNumber(1, 100);
const x_negative = dew.getRandomNumber(-100, -1);

const y_zero = 0;
const y_random = dew.getRandomNumber(-100, 100);
const y_positive = dew.getRandomNumber(1, 100);
const y_negative = dew.getRandomNumber(-100, -1);

test("Compute a slope given x = 0 and y = 0 values", () => {
  expect(dew.computeSlope(x_zero, y_zero)).toBeGreaterThanOrEqual(0);
  expect(dew.computeSlope(x_zero, y_zero)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = random and y = random values", () => {
  expect(dew.computeSlope(x_random, y_random)).toBeGreaterThanOrEqual(0);
  expect(dew.computeSlope(x_random, y_random)).toBeLessThanOrEqual(360);
});

test("Compute a slope given x = positive and y = positive", () => {
  expect(dew.computeSlope(x_positive, y_positive)).toBeGreaterThanOrEqual(0);
  expect(dew.computeSlope(x_positive, y_positive)).toBeLessThanOrEqual(90);
});

test("Compute a slope given x = positive and y = negative", () => {
  expect(dew.computeSlope(x_positive, y_negative)).toBeGreaterThan(90);
  expect(dew.computeSlope(x_positive, y_negative)).toBeLessThanOrEqual(180);
});

test("Compute a slope given x = negative and y = negative", () => {
  expect(dew.computeSlope(x_negative, y_negative)).toBeGreaterThan(180);
  expect(dew.computeSlope(x_negative, y_negative)).toBeLessThanOrEqual(270);
});

test("Compute a slope given x = negative and y = positive", () => {
  expect(dew.computeSlope(x_negative, y_positive)).toBeGreaterThan(270);
  expect(dew.computeSlope(x_negative, y_positive)).toBeLessThanOrEqual(360);
});
