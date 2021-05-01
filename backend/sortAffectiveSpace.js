(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./getRandomNumber", "./sortByRadialDistance", "./sortByVectorDistance", "./sortByRandomOrder"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sortAffectiveSpace = void 0;
    const getRandomNumber_1 = require("./getRandomNumber");
    const sortByRadialDistance_1 = require("./sortByRadialDistance");
    const sortByVectorDistance_1 = require("./sortByVectorDistance");
    const sortByRandomOrder_1 = require("./sortByRandomOrder");
    const sortAffectiveSpace = function (space, appraisals) {
        //Create a copy of the feelings array to sort
        let copyOfAffectiveSpace = JSON.parse(JSON.stringify(space));
        let copyOfFeelings = copyOfAffectiveSpace.feelings;
        let sortedFeelings = [];
        //Determine the function to call to sort the feelings
        if (space.algorithmType.toLocaleLowerCase() === "radial") {
            //Check if both x and y are 0. If they are, provide random number instead
            if (appraisals[0] === 0 && appraisals[1] === 0) {
                appraisals[0] = getRandomNumber_1.getRandomNumber(-100, 100);
                appraisals[1] = getRandomNumber_1.getRandomNumber(-100, 100);
            }
            sortedFeelings = sortByRadialDistance_1.sortByRadialDistance(copyOfFeelings, appraisals[0], appraisals[1]);
        }
        else if (space.algorithmType.toLocaleLowerCase() === "vector") {
            sortedFeelings = sortByVectorDistance_1.sortByVectorDistance(copyOfFeelings, appraisals);
        }
        else if (space.algorithmType.toLocaleLowerCase() === "random") {
            sortedFeelings = sortByRandomOrder_1.sortByRandomOrder(copyOfFeelings);
        }
        else {
            console.log("Provide a valid algorithm type.");
        }
        return sortedFeelings;
    };
    exports.sortAffectiveSpace = sortAffectiveSpace;
});
//# sourceMappingURL=sortAffectiveSpace.js.map