const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

const affectiveSpace = DEW.affectiveSpacesList.find(space => {
  return space.name == "EATMINT french circumplex";
});

let center = DEW.getRandomNumber(0, 500);
let radius = center + DEW.getRandomNumber(0, 500);

let originalFeelings = [...affectiveSpace.feelings];
let newFeelings = DEW.getRadialCoordinates(affectiveSpace, center, radius);

test("Compute coordinates from radial circumplex", () => {
  expect(originalFeelings).not.toStrictEqual(newFeelings);
});

console.log(originalFeelings);
console.log(newFeelings);
