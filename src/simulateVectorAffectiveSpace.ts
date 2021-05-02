import { Feeling } from "./feeling.interface";
import { getRandomNumber } from "./getRandomNumber";

export function simulateVectorAffectiveSpace(numEmotions: number, numAppraisals: number): Array<Feeling> {
    let feelings: Array<Feeling> = [];
    for (let i = 0; i < numEmotions; i++) {
        let randomCoordinates = [];
        for (let j = 0; j < numAppraisals; j++) {
            randomCoordinates.push(getRandomNumber(-100, 100));
        }
        feelings.push({
            label: randomCoordinates.join(", "),
            coordinates: randomCoordinates,
        });
    }

    return feelings;
}