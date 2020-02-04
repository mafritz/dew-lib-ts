DEW.subsetFeelings = function(
  feelings: Array<Feeling>,
  cardinality: number
): Array<Feeling> {
  let subset = feelings.slice(0, cardinality);
  return subset;
};
