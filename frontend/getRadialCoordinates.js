export var getRadialCoordinates = function (affectiveSpace, center, radius) {
    function getRadialX(angle) {
        var x = center + radius * Math.cos((angle * Math.PI) / 180);
        return x;
    }
    function getRadialY(angle) {
        var y = center + radius * Math.sin((angle * Math.PI) / 180);
        return y;
    }
    var copyOfAffectiveSpace = JSON.parse(JSON.stringify(affectiveSpace));
    return copyOfAffectiveSpace.feelings.map(function (feeling) {
        var currentAngle = feeling.angle;
        feeling.coordinates = [];
        feeling.coordinates[0] = getRadialX(currentAngle);
        feeling.coordinates[1] = getRadialY(currentAngle);
        return feeling;
    });
};
//# sourceMappingURL=getRadialCoordinates.js.map