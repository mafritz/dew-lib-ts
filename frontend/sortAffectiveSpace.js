import { getRandomNumber } from "./getRandomNumber.js";
import { sortByRadialDistance } from "./sortByRadialDistance.js";
import { sortByVectorDistance } from "./sortByVectorDistance.js";
import { sortByRandomOrder } from "./sortByRandomOrder.js";
export var sortAffectiveSpace = function (space, appraisals) {
  //Create a copy of the feelings array to sort
  var copyOfAffectiveSpace = JSON.parse(JSON.stringify(space));
  var copyOfFeelings = copyOfAffectiveSpace.feelings;
  var sortedFeelings = [];
  //Determine the function to call to sort the feelings
  if (space.algorithmType.toLocaleLowerCase() === "radial") {
    //Check if both x and y are 0. If they are, provide random number instead
    if (appraisals[0] === 0 && appraisals[1] === 0) {
      appraisals[0] = getRandomNumber(-100, 100);
      appraisals[1] = getRandomNumber(-100, 100);
    }
    sortedFeelings = sortByRadialDistance(
      copyOfFeelings,
      appraisals[0],
      appraisals[1]
    );
  } else if (space.algorithmType.toLocaleLowerCase() === "vector") {
    sortedFeelings = sortByVectorDistance(copyOfFeelings, appraisals);
  } else if (space.algorithmType.toLocaleLowerCase() === "random") {
    sortedFeelings = sortByRandomOrder(copyOfFeelings);
  } else {
    console.log("Provide a valid algorithm type.");
  }
  return sortedFeelings;
};
//# sourceMappingURL=sortAffectiveSpace.js.map
