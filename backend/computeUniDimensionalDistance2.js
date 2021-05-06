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
    exports.computeUniDimensionalDistance = void 0;
    const computeUniDimensionalDistance = function (firstArray, secondArray) {
        return Math.abs(firstArray[0] - secondArray[0]);
    };
    exports.computeUniDimensionalDistance = computeUniDimensionalDistance;
});
//# sourceMappingURL=computeUniDimensionalDistance2.js.map