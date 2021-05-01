import { getRandomNumber } from "./getRandomNumber";
import { sortByRadialDistance } from "./sortByRadialDistance";
import { sortByVectorDistance } from "./sortByVectorDistance";
import { sortByRandomOrder } from "./sortByRandomOrder";
import { AffectiveSpace } from "./affectiveSpace.interface";
import { Feeling } from "./feeling.interface";

export const sortAffectiveSpace = function (
  space: AffectiveSpace,
  appraisals: number[]
): Array<Feeling> {
  //Create a copy of the feelings array to sort
  let copyOfAffectiveSpace: AffectiveSpace = JSON.parse(JSON.stringify(space));
  let copyOfFeelings: Feeling[] = copyOfAffectiveSpace.feelings;

  let sortedFeelings: Array<Feeling> = [];

  //Determine the function to call to sort the feelings
  if (space.algorithmType.toLocaleLowerCase() === "radial") {
    //Check if both x and y are 0. If they are, provide random number instead
    if (appraisals[0] === 0 && appraisals[1] === 0) {
      appraisals[0] = getRandomNumber(-100, 100);
      appraisals[1] = getRandomNumber(-100, 100);
    }

    sortedFeelings = sortByRadialDistance(copyOfFeelings, appraisals[0], appraisals[1]);
  } else if (space.algorithmType.toLocaleLowerCase() === "vector") {
    sortedFeelings = sortByVectorDistance(copyOfFeelings, appraisals);
  } else if (space.algorithmType.toLocaleLowerCase() === "random") {
    sortedFeelings = sortByRandomOrder(copyOfFeelings);
  } else {
    console.log("Provide a valid algorithm type.");
  }

  return sortedFeelings;
};
