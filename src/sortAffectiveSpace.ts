function sortAffectiveSpace(
  space: AffectiveSpace,
  x: number,
  y: number
): Array<Feeling> {
  //Create a copy of the feelings array to sort
  let copyOfFeelings: Array<Feeling> = space.feelings.slice(
    0,
    space.feelings.length
  );

  let sortedFeelings: Array<Feeling> = [];

  //Determine the function to call to sort the feelings
  if (space.algorithmType.toLocaleLowerCase() === "radial") {
    //Check if both x and y are 0. If they are, provide random number instead
    if (x === 0 && y === 0) {
      x = getRandomNumber(-100, 100);
      y = getRandomNumber(-100, 100);
    }

    sortedFeelings = sortByRadialDistance(copyOfFeelings, x, y);
  } else if (space.algorithmType.toLocaleLowerCase() === "vector") {
    sortedFeelings = sortByVectorDistance(copyOfFeelings, x, y);
  } else if (space.algorithmType.toLocaleLowerCase() === "random") {
    sortedFeelings = sortByRandomOrder(copyOfFeelings);
  } else {
    console.log("Provide a valid algorithm type.");
  }

  return sortedFeelings;
}
