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
    exports.subsetFeelings = void 0;
    const subsetFeelings = function (feelings, cardinality) {
        let subset = feelings.slice(0, cardinality);
        return subset;
    };
    exports.subsetFeelings = subsetFeelings;
});
//# sourceMappingURL=subsetFeelings.js.map