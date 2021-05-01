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
    exports.computeSlope = void 0;
    const computeSlope = function (x, y) {
        let slope = Math.PI / 2 - Math.atan(y / x);
        if (x > 0 && y > 0) {
            slope = slope - 0.5 * Math.PI;
        }
        else if (x < 0 && y < 0) {
            slope = slope + 0.5 * Math.PI;
        }
        else if (x > 0 && y < 0) {
            slope = slope - 0.5 * Math.PI;
        }
        else if (x < 0 && y > 0) {
            slope = slope + 0.5 * Math.PI;
        }
        else {
            slope = 0;
        }
        slope = (slope * 180) / Math.PI + 90;
        return slope;
    };
    exports.computeSlope = computeSlope;
});
//# sourceMappingURL=computeSlope.js.map