const dew = require("../backend/");

// Random affective space
test("Test sortAffectiveSpace function with random affective space", () => {
  const numEmotions = dew.getRandomNumber(10, 100);
  const numAppraisals = dew.getRandomNumber(1, 10);
  const randomAffectiveSpace = dew.simulateVectorAffectiveSpace(
    numEmotions,
    numAppraisals
  );

  let randomAppraisals = [];
  for (let i = 0; i < numAppraisals; i++) {
    randomAppraisals.push(dew.getRandomNumber(-100, 100));
  }

  let orderedAffectiveSpace = dew.sortAffectiveSpace(
    randomAffectiveSpace,
    randomAppraisals
  );

  expect(orderedAffectiveSpace).not.toStrictEqual(
    randomAffectiveSpace.feelings
  );
});

//Unidimensional affective space
test("Test sortAffectiveSpace function with unidimensional affective space", () => {
  const numEmotions = dew.getRandomNumber(10, 100);
  const numAppraisals = 1;
  const randomAffectiveSpace = dew.simulateVectorAffectiveSpace(
    numEmotions,
    numAppraisals
  );

  let fixedAppraisals = [];
  for (let i = 0; i < numAppraisals; i++) {
    fixedAppraisals.push(dew.getRandomNumber(-100, 100));
  }

  //Add target results with label that comes before "Feeling #" to control for equal distance
  let targetResult = {
    label: "AAAAA",
    coordinates: fixedAppraisals,
  };

  randomAffectiveSpace.feelings.push(targetResult);

  let orderedAffectiveSpace = dew.sortAffectiveSpace(
    randomAffectiveSpace,
    fixedAppraisals
  );

  expect(orderedAffectiveSpace[0].label).toStrictEqual(targetResult.label);
});

//Bidimensional affective space
test("Test sortAffectiveSpace function with bidimensional affective space", () => {
  const numEmotions = dew.getRandomNumber(10, 100);
  const numAppraisals = 2;
  const randomAffectiveSpace = dew.simulateVectorAffectiveSpace(
    numEmotions,
    numAppraisals
  );

  let fixedAppraisals = [];
  for (let i = 0; i < numAppraisals; i++) {
    fixedAppraisals.push(dew.getRandomNumber(-100, 100));
  }

  //Add target results with label that comes before "Feeling #" to control for equal distance
  let targetResult = {
    label: "AAAAA",
    coordinates: fixedAppraisals,
  };

  randomAffectiveSpace.feelings.push(targetResult);

  let orderedAffectiveSpace = dew.sortAffectiveSpace(
    randomAffectiveSpace,
    fixedAppraisals
  );

  expect(orderedAffectiveSpace[0].label).toStrictEqual(targetResult.label);
});

//Tridimensional affective space
test("Test sortAffectiveSpace function with tridimensional affective space", () => {
  const numEmotions = dew.getRandomNumber(10, 100);
  const numAppraisals = 3;
  const randomAffectiveSpace = dew.simulateVectorAffectiveSpace(
    numEmotions,
    numAppraisals
  );

  let fixedAppraisals = [];
  for (let i = 0; i < numAppraisals; i++) {
    fixedAppraisals.push(dew.getRandomNumber(-100, 100));
  }

  //Add target results with label that comes before "Feeling #" to control for equal distance
  let targetResult = {
    label: "AAAAA",
    coordinates: fixedAppraisals,
  };

  randomAffectiveSpace.feelings.push(targetResult);

  let orderedAffectiveSpace = dew.sortAffectiveSpace(
    randomAffectiveSpace,
    fixedAppraisals
  );

  expect(orderedAffectiveSpace[0].label).toStrictEqual(targetResult.label);
});
