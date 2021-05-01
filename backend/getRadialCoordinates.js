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
    exports.getRadialCoordinates = void 0;
    const getRadialCoordinates = function (affectiveSpace, center, radius) {
        function getRadialX(angle) {
            let x = center + radius * Math.cos((angle * Math.PI) / 180);
            return x;
        }
        function getRadialY(angle) {
            let y = center + radius * Math.sin((angle * Math.PI) / 180);
            return y;
        }
        let copyOfAffectiveSpace = JSON.parse(JSON.stringify(affectiveSpace));
        return copyOfAffectiveSpace.feelings.map(function (feeling) {
            let currentAngle = feeling.angle;
            feeling.coordinates = [];
            feeling.coordinates[0] = getRadialX(currentAngle);
            feeling.coordinates[1] = getRadialY(currentAngle);
            return feeling;
        });
    };
    exports.getRadialCoordinates = getRadialCoordinates;
});
//# sourceMappingURL=getRadialCoordinates.js.map