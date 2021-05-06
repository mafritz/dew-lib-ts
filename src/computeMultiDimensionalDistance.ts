export const computeMultiDimensionalDistance = function (firstArray: number[], secondArray: number[]): number {
    // First feeling
    let multiDimensionalDistance: number = 0;
    for (let i = 0; i < firstArray.length; i++) {
        multiDimensionalDistance += Math.pow((firstArray[i] - secondArray[i]), 2)
    }
    multiDimensionalDistance = Math.sqrt(multiDimensionalDistance);

    return multiDimensionalDistance;
}