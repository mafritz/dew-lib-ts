const dew = require("../backend/");

const affectiveSpace = {
  algorithmType: "radial",
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
    { label: "Irritated", angle: 351 },
  ],
};

let x = dew.getRandomNumber(-100, 100);
let y = dew.getRandomNumber(-100, 100);

test("Test sortAffectiveSpace function with radial order", () => {
  expect(dew.sortAffectiveSpace(affectiveSpace, x, y)).not.toStrictEqual(
    affectiveSpace.feelings
  );
});
