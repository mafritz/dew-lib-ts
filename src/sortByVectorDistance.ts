import { Feeling } from "./feeling.interface";

export const sortByVectorDistance = function (
  feelings: Array<Feeling>,
  appraisals: number[]
): Array<Feeling> {

  // Sort by One Dimension
  function sortByOneDimension(firstFeeling: Feeling, secondFeeling: Feeling) {
    if ((appraisals[0] - firstFeeling.coordinates[0]) > (appraisals[0] - secondFeeling.coordinates[0])) {
      return 1;
    } else if ((appraisals[0] - firstFeeling.coordinates[0]) < (appraisals[0] - secondFeeling.coordinates[0])) {
      return -1;
    } else {
      return 0;
    }
  }

  // Sort by Two Dimensions
  function sortByTwoDimensions(firstFeeling: Feeling, secondFeeling: Feeling) {
    // Deltas first feeling
    let firstFeelingDeltaX = appraisals[0] - firstFeeling.coordinates[0];
    let firstFeelingDeltaY = appraisals[1] - firstFeeling.coordinates[1];

    // Deltas second feelings
    let secondFeelingDeltaX = appraisals[0] - secondFeeling.coordinates[0];
    let secondFeelingDeltaY = appraisals[1] - secondFeeling.coordinates[1];

    // Return closer
    return (
      Math.sqrt(
        Math.pow(firstFeelingDeltaX, 2) + Math.pow(firstFeelingDeltaY, 2)
      ) -
      Math.sqrt(
        Math.pow(secondFeelingDeltaX, 2) + Math.pow(secondFeelingDeltaY, 2)
      )
    );
  }

  // Sort by N Dimensions
  function sortByNDimensions(firstFeeling: Feeling, secondFeeling: Feeling) {

    // First feeling
    let distanceFirstFeeling: number = 0;
    for (let i = 0; i < appraisals.length; i++) {
      distanceFirstFeeling += Math.pow((appraisals[i] - firstFeeling.coordinates[i]), 2)
    }
    distanceFirstFeeling = Math.sqrt(distanceFirstFeeling);

    // Second feeling
    let distanceSecondFeeling: number = 0;
    for (let i = 0; i < appraisals.length; i++) {
      distanceSecondFeeling += Math.pow((appraisals[i] - secondFeeling.coordinates[i]), 2)
    }
    distanceSecondFeeling = Math.sqrt(distanceSecondFeeling);

    if (distanceFirstFeeling > distanceSecondFeeling) {
      return 1;
    } else if (distanceFirstFeeling < distanceSecondFeeling) {
      return -1;
    } else {
      return 0;
    }
  }

  //Check number of appraisals
  let numAppraisals = appraisals.length;

  if (numAppraisals === 1) {
    feelings.sort(sortByOneDimension);
  } else if (numAppraisals === 2) {
    feelings.sort(sortByTwoDimensions)
  } else if (numAppraisals > 2) {
    feelings.sort(sortByNDimensions)
  } else {
    console.log("The number of appraisals is not valid");
  }

  return feelings;
};
