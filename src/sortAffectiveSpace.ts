function sortAffectiveSpace(space: AffectiveSpace, x: number, y: number) {
  //Create a copy of the feelings array to sort
  let copyOfFeelings: Array<Feeling> = space.feelings.slice(
    0,
    space.feelings.length
  );

  //Determine the function to call to sort the feelings
  if (space.algorithmType === "radial") {
    //Check if both x and y are 0. If they are, provide random number instead
    if (x === 0 && y === 0) {
      x = getRandomNumber(-100, 100);
      y = getRandomNumber(-100, 100);
    }

    return sortByRadialDistance(copyOfFeelings, x, y);
  } else if (space.algorithmType === "vector") {
    return sortByVectorDistance(copyOfFeelings, x, y);
  } else if (space.algorithmType === "random") {
    return shuffleArray(copyOfFeelings);
  } else {
    console.log("Provide a valid algorithm type.");
  }
}
