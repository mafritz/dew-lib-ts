(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./getRandomNumber"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.simulateVectorAffectiveSpace = void 0;
    const getRandomNumber_1 = require("./getRandomNumber");
    function simulateVectorAffectiveSpace(numEmotions, numAppraisals) {
        let feelings = [];
        for (let i = 0; i < numEmotions; i++) {
            let randomCoordinates = [];
            for (let j = 0; j < numAppraisals; j++) {
                randomCoordinates.push(getRandomNumber_1.getRandomNumber(-100, 100));
            }
            feelings.push({
                label: "Feeling #".concat(String(i + 1)),
                coordinates: randomCoordinates,
            });
        }
        return {
            algorithmType: "vector",
            feelings: feelings
        };
    }
    exports.simulateVectorAffectiveSpace = simulateVectorAffectiveSpace;
});
//# sourceMappingURL=simulateVectorAffectiveSpace.js.map