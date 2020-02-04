DEW.sortByRadialDistance = function(
  feelings: Array<Feeling>,
  x: number,
  y: number
): Array<Feeling> {
  let currentSlope = DEW.computeSlope(x, y);

  function orderByAngle(firstFeeling: Feeling, secondFeeling: Feeling) {
    let firstFeelingAngle = firstFeeling.angle as number;
    let secondFeelingAngle = secondFeeling.angle as number;
    return (
      Math.abs(firstFeelingAngle - currentSlope) -
      Math.abs(secondFeelingAngle - currentSlope)
    );
  }

  feelings.sort(orderByAngle);

  return feelings;
};
