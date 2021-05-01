import { AffectiveSpace } from "./affectiveSpace.interface";
import { Feeling } from "./feeling.interface";

export const getRadialCoordinates = function (
  affectiveSpace: AffectiveSpace,
  center: number,
  radius: number
): Feeling[] {
  function getRadialX(angle: number): number {
    let x = center + radius * Math.cos((angle * Math.PI) / 180);
    return x;
  }
  function getRadialY(angle: number): number {
    let y = center + radius * Math.sin((angle * Math.PI) / 180);
    return y;
  }

  let copyOfAffectiveSpace = JSON.parse(JSON.stringify(affectiveSpace));

  return copyOfAffectiveSpace.feelings.map(function (feeling: Feeling) {
    let currentAngle = feeling.angle as number;
    feeling.coordinates = [];
    feeling.coordinates[0] = getRadialX(currentAngle);
    feeling.coordinates[1] = getRadialY(currentAngle);
    return feeling;
  });
};
