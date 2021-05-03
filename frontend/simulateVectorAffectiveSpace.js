import { getRandomNumber } from "./getRandomNumber.js";
export function simulateVectorAffectiveSpace(numEmotions, numAppraisals) {
  var feelings = [];
  for (var i = 0; i < numEmotions; i++) {
    var randomCoordinates = [];
    for (var j = 0; j < numAppraisals; j++) {
      randomCoordinates.push(getRandomNumber(-100, 100));
    }
    feelings.push({
      label: "Feeling #".concat(String(i + 1)),
      coordinates: randomCoordinates,
    });
  }
  return {
    algorithmType: "vector",
    feelings: feelings,
  };
}
//# sourceMappingURL=simulateVectorAffectiveSpace.js.map
