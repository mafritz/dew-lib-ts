DEW.sortByVectorDistance = function(
  feelings: Array<Feeling>,
  x: number,
  y: number
): Array<Feeling> {
  function orderByVector(firstFeeling: Feeling, secondFeeling: Feeling) {
    //First feeling distance
    let firstFeelingX = firstFeeling.valueX as number;
    let firstFeelingDeltaX = x - firstFeelingX;

    let firstFeelingY = firstFeeling.valueY as number;
    let firstFeelingDeltaY = y - firstFeelingY;

    //Second feeling distance
    let secondFeelingX = secondFeeling.valueX as number;
    let secondFeelingDeltaX = x - secondFeelingX;

    let secondFeelingY = secondFeeling.valueY as number;
    let secondFeelingDeltaY = y - secondFeelingY;

    return (
      Math.sqrt(
        Math.pow(firstFeelingDeltaX, 2) + Math.pow(firstFeelingDeltaY, 2)
      ) -
      Math.sqrt(
        Math.pow(secondFeelingDeltaX, 2) + Math.pow(secondFeelingDeltaY, 2)
      )
    );
  }

  feelings.sort(orderByVector);

  return feelings;
};
