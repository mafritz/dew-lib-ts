const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");
const fs = require("fs");

const affectiveSpace = {
  id: "H1zsACORtM",
  lang: "en",
  name: "Geneva Emotion Wheel version 3 (radial)",
  description:
    "The 20 emotions used in the third version of the Geneva Emotion Wheel",
  algorithmType: "radial",
  dimX: "Valence",
  dimY: "Power",
  isGrid: true,
  isPublic: true,
  user: "admin",
  createdAt: "2018-03-20T12:30:11.200Z",
  updatedAt: "2018-05-28T10:51:35.410Z",
  feelings: [
    { label: "Interest", angle: 9 },
    { label: "Amusement", angle: 27 },
    { label: "Pride", angle: 45 },
    { label: "Joy", angle: 63 },
    { label: "Pleasure", angle: 81 },
    { label: "Contentment", angle: 99 },
    { label: "Love", angle: 117 },
    { label: "Admiration", angle: 135 },
    { label: "Relief", angle: 153 },
    { label: "Compassion", angle: 171 },
    { label: "Sadness", angle: 189 },
    { label: "Guilt", angle: 207 },
    { label: "Regret", angle: 225 },
    { label: "Shame", angle: 243 },
    { label: "Disappointment", angle: 261 },
    { label: "Fear", angle: 279 },
    { label: "Disgust", angle: 315 },
    { label: "Contempt", angle: 297 },
    { label: "Hate", angle: 333 },
    { label: "Anger", angle: 351 }
  ],
  _id: 4,
  citation:
    "Scherer, K. R., Shuman, V., Fontaine, J. R. J., & Soriano, C. (2013). The GRID meets the Wheel: Assessing emotional feeling via self-report. In J. R. J. Fontaine, K. R. Scherer, & C. Soriano (Eds.), Components of Emotional Meaning: A sourcebook (pp. 281–298). Oxford, UK: Oxford University Press."
};

let simulatedData = [];
for (let x = -100; x <= 100; x++) {
  for (let y = -100; y <= 100; y++) {
    let simulation = DEW.sortAffectiveSpace(affectiveSpace, x, y);
    let pivot_longer = simulation.map(function(feeling, index) {
      return {
        x: x,
        y: y,
        position: index + 1,
        label: feeling.label
      };
    });
    simulatedData.push(pivot_longer);
  }
}

console.log(simulatedData);

fs.writeFileSync(
  __dirname + "/data/gew_radial.json",
  JSON.stringify(simulatedData)
);
