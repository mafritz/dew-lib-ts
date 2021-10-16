(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./computeUniDimensionalDistance", "./computeMultiDimensionalDistance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sortByVectorDistance = void 0;
    const computeUniDimensionalDistance_1 = require("./computeUniDimensionalDistance");
    const computeMultiDimensionalDistance_1 = require("./computeMultiDimensionalDistance");
    const sortByVectorDistance = function (feelings, appraisals) {
        // Sort by One Dimension
        function sortByOneDimension(firstFeeling, secondFeeling) {
            //Absolue delta first feeling
            let deltaFirstFeeling = (0, computeUniDimensionalDistance_1.computeUniDimensionalDistance)(firstFeeling.coordinates, appraisals);
            //Absolute delta second feeling
            let deltaSecondFeeling = (0, computeUniDimensionalDistance_1.computeUniDimensionalDistance)(secondFeeling.coordinates, appraisals);
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
            let distanceFirstFeeling = (0, computeMultiDimensionalDistance_1.computeMultiDimensionalDistance)(appraisals, firstFeeling.coordinates);
            // Second feeling
            let distanceSecondFeeling = (0, computeMultiDimensionalDistance_1.computeMultiDimensionalDistance)(appraisals, secondFeeling.coordinates);
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