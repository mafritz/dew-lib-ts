const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

const affectiveSpace = DEW.affectiveSpacesList.find(space => {
  return space.name == "EATMINT french circumplex";
});

let center = DEW.getRandomNumber(0, 500);
let radius = center + DEW.getRandomNumber(0, 500);

test("Compute coordinates from radial circumplex", () => {
  expect(
    DEW.getRadialCoordinates(affectiveSpace, center, radius)
  ).not.toStrictEqual(affectiveSpace.feelings);
});
