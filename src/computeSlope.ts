export const computeSlope = function (x: number, y: number) {
  let slope = Math.PI / 2 - Math.atan(y / x);
  if (x > 0 && y > 0) {
    slope = slope - 0.5 * Math.PI;
  } else if (x < 0 && y < 0) {
    slope = slope + 0.5 * Math.PI;
  } else if (x > 0 && y < 0) {
    slope = slope - 0.5 * Math.PI;
  } else if (x < 0 && y > 0) {
    slope = slope + 0.5 * Math.PI;
  } else {
    slope = 0;
  }
  slope = (slope * 180) / Math.PI + 90;
  return slope;
};
