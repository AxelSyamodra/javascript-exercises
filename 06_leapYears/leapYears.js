const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                // console.log("It's a leap year");
                return true;
            } else {
                // console.log("It's not leap year");
                return false;
            }
        } else {
            // console.log("It's a leap year");
            return true;
        }
    } else {
        // console.log("It's not leap year");
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
