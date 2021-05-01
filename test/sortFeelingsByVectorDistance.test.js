const dew = require("../backend/");

const affectiveSpace = {
  algorithmType: "vector",
  feelings: [
    { label: "66, 9, 55", coordinates: [66, 9, 55] },
    { label: "67, 19, 44", coordinates: [67, 19, 44] },
    { label: "-37, 47, -33", coordinates: [-37, 47, -33] },
    { label: "-5, -55, -10", coordinates: [-5, -55, -10] },
    { label: "-55, 43, 12", coordinates: [-55, 43, 12] },
    { label: "Contentment", coordinates: [77, 3, 27] },
    { label: "Disappointment", coordinates: [-77, -12, 33] },
    { label: "Disgust", coordinates: [-68, 20, 12] },
    { label: "Fear", coordinates: [-61, 7, -97] },
    { label: "Guilt", coordinates: [-57, -27, 35] },
    { label: "Hate", coordinates: [-45, 43, 39] },
    { label: "Interest", coordinates: [61, 25, 88] },
    { label: "Joy", coordinates: [68, 7, -99] },
    { label: "Love", coordinates: [58, -16, -73] },
    { label: "Pleasure", coordinates: [71, 2, 53] },
    { label: "Pride", coordinates: [72, 15, -41] },
    { label: "Regret", coordinates: [-70, -19, 14] },
    { label: "Relief", coordinates: [66, -36, 90] },
    { label: "Sadness", coordinates: [-68, -35, -90] },
    { label: "Shame", coordinates: [-61, -16, 77] },
  ],
};

let x = dew.getRandomNumber(-100, 100);
let y = dew.getRandomNumber(-100, 100);

test("Test sortAffectiveSpace function with vector order", () => {
  expect(dew.sortAffectiveSpace(affectiveSpace, [x, y])).not.toStrictEqual(
    affectiveSpace.feelings
  );
});
