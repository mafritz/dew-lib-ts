const rewire = require("rewire");
const DEW = rewire("../dist/dew.lib").__get__("DEW");

const affectiveSpace = {
  name: "EATMINT english circumplex",
  description: "Translation of the 20 EATMINT emotions.",
  lang: "en",
  algorithmType: "random",
  dimX: "Valence",
  dimY: "Control",
  isGrid: false,
  isPublic: true,
  feelings: [
    { label: "Confident", angle: 9 },
    { label: "Interested", angle: 27 },
    { label: "Amused", angle: 45 },
    { label: "Delighted", angle: 63 },
    { label: "Attentive", angle: 81 },
    { label: "Satisfied", angle: 99 },
    { label: "Relaxed", angle: 117 },
    { label: "Surprised", angle: 135 },
    { label: "Relieved", angle: 153 },
    { label: "Empathic", angle: 171 },
    { label: "Confused", angle: 189 },
    { label: "Anxious", angle: 207 },
    { label: "Bored", angle: 225 },
    { label: "Stressed", angle: 243 },
    { label: "Disappointed", angle: 261 },
    { label: "Frustrated", angle: 279 },
    { label: "Disgusted", angle: 315 },
    { label: "Envious", angle: 297 },
    { label: "Annoyed", angle: 333 },
    { label: "Irritated", angle: 351 }
  ],
  citation:
    "Fritz, M. A., & Bétrancourt, M. (2017). Providing emotional awareness in Computer-Supported Collaborative Learning with an Emotion Awareness Tool. In 17th Biennial EARLI Conference for Research on Learning and Instruction. Tampere, FL.",
  user: "admin",
  id: "BkDX-gsCf",
  createdAt: "2018-05-17T12:15:11.344Z",
  updatedAt: "2018-05-27T16:45:02.031Z",
  _id: 5
};

test("Test de sortAffectiveSpace function with random order", () => {
  expect(DEW.sortAffectiveSpace(affectiveSpace)).not.toStrictEqual(
    affectiveSpace.feelings
  );
});
