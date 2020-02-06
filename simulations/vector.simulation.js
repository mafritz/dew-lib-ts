const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");
const fs = require("fs");

const affectiveSpace = {
  id: "ry-s0AORKG",
  lang: "en",
  name: "Geneva Emotion Wheel version 3 (vector)",
  description:
    "The 20 emotions used in the third version of the Geneva Emotion Wheel",
  algorithmType: "vector",
  dimX: "Valence",
  dimY: "Power",
  isGrid: true,
  isPublic: true,
  user: "admin",
  createdAt: "2018-03-20T12:30:11.200Z",
  updatedAt: "2018-05-28T10:51:54.991Z",
  feelings: [
    { label: "Admiration", valueX: 66, valueY: 9 },
    { label: "Amusement", valueX: 67, valueY: 19 },
    { label: "Anger", valueX: -37, valueY: 47 },
    { label: "Compassion", valueX: -5, valueY: -55 },
    { label: "Contempt", valueX: -55, valueY: 43 },
    { label: "Contentment", valueX: 77, valueY: 3 },
    { label: "Disappointment", valueX: -77, valueY: -12 },
    { label: "Disgust", valueX: -68, valueY: 20 },
    { label: "Fear", valueX: -61, valueY: 7 },
    { label: "Guilt", valueX: -57, valueY: -27 },
    { label: "Hate", valueX: -45, valueY: 43 },
    { label: "Interest", valueX: 61, valueY: 25 },
    { label: "Joy", valueX: 68, valueY: 7 },
    { label: "Love", valueX: 58, valueY: -16 },
    { label: "Pleasure", valueX: 71, valueY: 2 },
    { label: "Pride", valueX: 72, valueY: 15 },
    { label: "Regret", valueX: -70, valueY: -19 },
    { label: "Relief", valueX: 66, valueY: -36 },
    { label: "Sadness", valueX: -68, valueY: -35 },
    { label: "Shame", valueX: -61, valueY: -16 }
  ],
  _id: 3,
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
  __dirname + "/data/gew_vector.json",
  JSON.stringify(simulatedData)
);
