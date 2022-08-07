const leapYears = function(x) {

    if (x % 100 == 0 && x % 400 == 0) {
        return true
        console.log("true")
    }
    else if (x % 100 != 0 && x % 4 == 0) {
        return true
        console.log("true")
    }
    else {
        return false
        console.log("false")
    }

};

leapYears("1900")
// console.log("1900" % 400)

// Do not edit below this line
module.exports = leapYears;
