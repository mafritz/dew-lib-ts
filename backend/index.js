(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./computeSlope", "./getRadialCoordinates", "./getRandomNumber", "./shuffleArray", "./sortAffectiveSpace", "./sortByRadialDistance", "./sortByRandomOrder", "./sortByVectorDistance", "./subsetFeelings", "./simulateVectorAffectiveSpace", "./computeUniDimensionalDistance", "./computeMultiDimensionalDistance"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.computeMultiDimensionalDistance = exports.computeUniDimensionalDistance = exports.simulateVectorAffectiveSpace = exports.subsetFeelings = exports.sortByVectorDistance = exports.sortByRandomOrder = exports.sortByRadialDistance = exports.sortAffectiveSpace = exports.shuffleArray = exports.getRandomNumber = exports.getRadialCoordinates = exports.computeSlope = void 0;
    var computeSlope_1 = require("./computeSlope");
    Object.defineProperty(exports, "computeSlope", { enumerable: true, get: function () { return computeSlope_1.computeSlope; } });
    var getRadialCoordinates_1 = require("./getRadialCoordinates");
    Object.defineProperty(exports, "getRadialCoordinates", { enumerable: true, get: function () { return getRadialCoordinates_1.getRadialCoordinates; } });
    var getRandomNumber_1 = require("./getRandomNumber");
    Object.defineProperty(exports, "getRandomNumber", { enumerable: true, get: function () { return getRandomNumber_1.getRandomNumber; } });
    var shuffleArray_1 = require("./shuffleArray");
    Object.defineProperty(exports, "shuffleArray", { enumerable: true, get: function () { return shuffleArray_1.shuffleArray; } });
    var sortAffectiveSpace_1 = require("./sortAffectiveSpace");
    Object.defineProperty(exports, "sortAffectiveSpace", { enumerable: true, get: function () { return sortAffectiveSpace_1.sortAffectiveSpace; } });
    var sortByRadialDistance_1 = require("./sortByRadialDistance");
    Object.defineProperty(exports, "sortByRadialDistance", { enumerable: true, get: function () { return sortByRadialDistance_1.sortByRadialDistance; } });
    var sortByRandomOrder_1 = require("./sortByRandomOrder");
    Object.defineProperty(exports, "sortByRandomOrder", { enumerable: true, get: function () { return sortByRandomOrder_1.sortByRandomOrder; } });
    var sortByVectorDistance_1 = require("./sortByVectorDistance");
    Object.defineProperty(exports, "sortByVectorDistance", { enumerable: true, get: function () { return sortByVectorDistance_1.sortByVectorDistance; } });
    var subsetFeelings_1 = require("./subsetFeelings");
    Object.defineProperty(exports, "subsetFeelings", { enumerable: true, get: function () { return subsetFeelings_1.subsetFeelings; } });
    var simulateVectorAffectiveSpace_1 = require("./simulateVectorAffectiveSpace");
    Object.defineProperty(exports, "simulateVectorAffectiveSpace", { enumerable: true, get: function () { return simulateVectorAffectiveSpace_1.simulateVectorAffectiveSpace; } });
    var computeUniDimensionalDistance_1 = require("./computeUniDimensionalDistance");
    Object.defineProperty(exports, "computeUniDimensionalDistance", { enumerable: true, get: function () { return computeUniDimensionalDistance_1.computeUniDimensionalDistance; } });
    var computeMultiDimensionalDistance_1 = require("./computeMultiDimensionalDistance");
    Object.defineProperty(exports, "computeMultiDimensionalDistance", { enumerable: true, get: function () { return computeMultiDimensionalDistance_1.computeMultiDimensionalDistance; } });
});
//# sourceMappingURL=index.js.map