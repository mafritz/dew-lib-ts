import { shuffleArray } from "./shuffleArray";
import { Feeling } from "./feeling.interface";

export const sortByRandomOrder = function (feelings: Array<Feeling>): Array<Feeling> {
  return shuffleArray(feelings);
};
