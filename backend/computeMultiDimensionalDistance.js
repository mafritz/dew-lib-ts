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
    exports.computeMultiDimensionalDistance = void 0;
    const computeMultiDimensionalDistance = function (firstArray, secondArray) {
        // First feeling
        let multiDimensionalDistance = 0;
        for (let i = 0; i < firstArray.length; i++) {
            multiDimensionalDistance += Math.pow((firstArray[i] - secondArray[i]), 2);
        }
        multiDimensionalDistance = Math.sqrt(multiDimensionalDistance);
        return multiDimensionalDistance;
    };
    exports.computeMultiDimensionalDistance = computeMultiDimensionalDistance;
});
//# sourceMappingURL=computeMultiDimensionalDistance.js.map