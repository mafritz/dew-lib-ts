export var sortByVectorDistance = function (feelings, appraisals) {
    // Sort by One Dimension
    function sortByOneDimension(firstFeeling, secondFeeling) {
        //Absolue delta first feeling
        var deltaFirstFeeling = Math.abs(firstFeeling.coordinates[0] - appraisals[0]);
        //Absolute delta second feeling
        var deltaSecondFeeling = Math.abs(secondFeeling.coordinates[0] - appraisals[0]);
        if (deltaFirstFeeling > deltaSecondFeeling) {
            return 1;
        }
        else if (deltaFirstFeeling < deltaSecondFeeling) {
            return -1;
        }
        else {
            return 0;
        }
    }
    // Sort by Two Dimensions
    function sortByTwoDimensions(firstFeeling, secondFeeling) {
        // Deltas first feeling
        var firstFeelingDeltaX = appraisals[0] - firstFeeling.coordinates[0];
        var firstFeelingDeltaY = appraisals[1] - firstFeeling.coordinates[1];
        // Deltas second feelings
        var secondFeelingDeltaX = appraisals[0] - secondFeeling.coordinates[0];
        var secondFeelingDeltaY = appraisals[1] - secondFeeling.coordinates[1];
        // Return closer
        return (Math.sqrt(Math.pow(firstFeelingDeltaX, 2) + Math.pow(firstFeelingDeltaY, 2)) -
            Math.sqrt(Math.pow(secondFeelingDeltaX, 2) + Math.pow(secondFeelingDeltaY, 2)));
    }
    // Sort by N Dimensions
    function sortByNDimensions(firstFeeling, secondFeeling) {
        // First feeling
        var distanceFirstFeeling = 0;
        for (var i = 0; i < appraisals.length; i++) {
            distanceFirstFeeling += Math.pow((appraisals[i] - firstFeeling.coordinates[i]), 2);
        }
        distanceFirstFeeling = Math.sqrt(distanceFirstFeeling);
        // Second feeling
        var distanceSecondFeeling = 0;
        for (var i = 0; i < appraisals.length; i++) {
            distanceSecondFeeling += Math.pow((appraisals[i] - secondFeeling.coordinates[i]), 2);
        }
        distanceSecondFeeling = Math.sqrt(distanceSecondFeeling);
        if (distanceFirstFeeling > distanceSecondFeeling) {
            return 1;
        }
        else if (distanceFirstFeeling < distanceSecondFeeling) {
            return -1;
        }
        else {
            return 0;
        }
    }
    //Check number of appraisals
    var numAppraisals = appraisals.length;
    if (numAppraisals === 1) {
        feelings.sort(sortByOneDimension);
    }
    else if (numAppraisals === 2) {
        feelings.sort(sortByTwoDimensions);
    }
    else if (numAppraisals > 2) {
        feelings.sort(sortByNDimensions);
    }
    else {
        console.log("The number of appraisals is not valid");
    }
    return feelings;
};
//# sourceMappingURL=sortByVectorDistance.js.map