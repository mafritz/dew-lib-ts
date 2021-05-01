(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./shuffleArray"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sortByRandomOrder = void 0;
    const shuffleArray_1 = require("./shuffleArray");
    const sortByRandomOrder = function (feelings) {
        return shuffleArray_1.shuffleArray(feelings);
    };
    exports.sortByRandomOrder = sortByRandomOrder;
});
//# sourceMappingURL=sortByRandomOrder.js.map