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
    exports.getRandomNumber = void 0;
    const getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    exports.getRandomNumber = getRandomNumber;
});
//# sourceMappingURL=getRandomNumber.js.map