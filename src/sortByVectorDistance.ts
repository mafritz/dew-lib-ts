import { Feeling } from "./feeling.interface";
import { computeUniDimensionalDistance } from "./computeUniDimensionalDistance";
import { computeMultiDimensionalDistance } from "./computeMultiDimensionalDistance";

export const sortByVectorDistance = function (
  feelings: Array<Feeling>,
  appraisals: number[]
): Array<Feeling> {

  // Sort by One Dimension
  function sortByOneDimension(firstFeeling: Feeling, secondFeeling: Feeling) {
    //Absolue delta first feeling
    let deltaFirstFeeling = computeUniDimensionalDistance(firstFeeling.coordinates, appraisals);
    //Absolute delta second feeling
    let deltaSecondFeeling = computeUniDimensionalDistance(secondFeeling.coordinates, appraisals);

    if (deltaFirstFeeling > deltaSecondFeeling) {
      return 1;
    } else if (deltaFirstFeeling < deltaSecondFeeling) {
      return -1;
    } else {
      return 0;
    }

  }

  // Sort by Multiple Dimensions
  function sortByMultiDimensions(firstFeeling: Feeling, secondFeeling: Feeling) {

    // First feeling
    let distanceFirstFeeling: number = computeMultiDimensionalDistance(appraisals, firstFeeling.coordinates);

    // Second feeling
    let distanceSecondFeeling: number = computeMultiDimensionalDistance(appraisals, secondFeeling.coordinates);

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
  } else if (numAppraisals > 1) {
    feelings.sort(sortByMultiDimensions)
  } else {
    console.log("The number of appraisals is not valid");
  }

  return feelings;
};
