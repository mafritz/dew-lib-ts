(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sortByVectorDistance = void 0;
    const sortByVectorDistance = function (feelings, appraisals) {
        // Sort by One Dimension
        function sortByOneDimension(firstFeeling, secondFeeling) {
            //Absolue delta first feeling
            let deltaFirstFeeling = Math.abs(firstFeeling.coordinates[0] - appraisals[0]);
            //Absolute delta second feeling
            let deltaSecondFeeling = Math.abs(secondFeeling.coordinates[0] - appraisals[0]);
            if (deltaFirstFeeling > deltaSecondFeeling) {
                return 1;
            }
            else if (deltaFirstFeeling < deltaSecondFeeling) {
                return -1;
            }
            else {
                return 0;
            }
        }
        // Sort by Multiple Dimensions
        function sortByMultiDimensions(firstFeeling, secondFeeling) {
            // First feeling
            let distanceFirstFeeling = 0;
            for (let i = 0; i < appraisals.length; i++) {
                distanceFirstFeeling += Math.pow((appraisals[i] - firstFeeling.coordinates[i]), 2);
            }
            distanceFirstFeeling = Math.sqrt(distanceFirstFeeling);
            // Second feeling
            let distanceSecondFeeling = 0;
            for (let i = 0; i < appraisals.length; i++) {
                distanceSecondFeeling += Math.pow((appraisals[i] - secondFeeling.coordinates[i]), 2);
            }
            distanceSecondFeeling = Math.sqrt(distanceSecondFeeling);
            if (distanceFirstFeeling > distanceSecondFeeling) {
                return 1;
            }
            else if (distanceFirstFeeling < distanceSecondFeeling) {
                return -1;
            }
            else {
                return 0;
            }
        }
        //Check number of appraisals
        let numAppraisals = appraisals.length;
        if (numAppraisals === 1) {
            feelings.sort(sortByOneDimension);
        }
        else if (numAppraisals > 1) {
            feelings.sort(sortByMultiDimensions);
        }
        else {
            console.log("The number of appraisals is not valid");
        }
        return feelings;
    };
    exports.sortByVectorDistance = sortByVectorDistance;
});
//# sourceMappingURL=sortByVectorDistance.js.map