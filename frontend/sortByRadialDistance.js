import { computeSlope } from "./computeSlope.js";
export var sortByRadialDistance = function (feelings, x, y) {
  var currentSlope = computeSlope(x, y);
  function orderByAngle(firstFeeling, secondFeeling) {
    var firstFeelingAngle = firstFeeling.angle;
    var secondFeelingAngle = secondFeeling.angle;
    return (
      Math.abs(firstFeelingAngle - currentSlope) -
      Math.abs(secondFeelingAngle - currentSlope)
    );
  }
  feelings.sort(orderByAngle);
  return feelings;
};
//# sourceMappingURL=sortByRadialDistance.js.map
