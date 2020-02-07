const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");
const fs = require("fs");
const { parse } = require("json2csv");

const fields = ["x", "y", "label", "order"];
const opts = { fields };

const affectiveSpace = DEW.affectiveSpacesList.find(function(space) {
  return space.name == "Geneva Emotion Wheel version 3 (radial)";
});

let simulatedData = [];
for (let x = -100; x <= 100; x++) {
  for (let y = -100; y <= 100; y++) {
    let simulation = DEW.sortAffectiveSpace(affectiveSpace, x, y);
    simulation.forEach(function(feeling, index) {
      simulatedData.push({
        x: x,
        y: y,
        label: feeling.label,
        order: index + 1
      });
    });
  }
}

try {
  const csv = parse(simulatedData, opts);
  fs.writeFileSync(__dirname + "/data/simulation_gew_radial.csv", csv);
} catch (err) {
  console.error(err);
}
