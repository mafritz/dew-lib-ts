const dew = require("../backend");

const numEmotions = dew.getRandomNumber(1, 100);
const numAppraisals = dew.getRandomNumber(1, 20);
const simulatedAffectiveSpace = dew.simulateVectorAffectiveSpace(
  numEmotions,
  numAppraisals
);

test("Create a random affective space and check number of emotions and appraisals", () => {
  expect(simulatedAffectiveSpace.feelings.length).toBe(numEmotions);
  expect(simulatedAffectiveSpace.feelings[0].coordinates.length).toBe(
    numAppraisals
  );
});
