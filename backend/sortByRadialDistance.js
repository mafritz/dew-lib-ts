(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./computeSlope"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sortByRadialDistance = void 0;
    const computeSlope_1 = require("./computeSlope");
    const sortByRadialDistance = function (feelings, x, y) {
        let currentSlope = (0, computeSlope_1.computeSlope)(x, y);
        function orderByAngle(firstFeeling, secondFeeling) {
            let firstFeelingAngle = firstFeeling.angle;
            let secondFeelingAngle = secondFeeling.angle;
            return (Math.abs(firstFeelingAngle - currentSlope) -
                Math.abs(secondFeelingAngle - currentSlope));
        }
        feelings.sort(orderByAngle);
        return feelings;
    };
    exports.sortByRadialDistance = sortByRadialDistance;
});
//# sourceMappingURL=sortByRadialDistance.js.map