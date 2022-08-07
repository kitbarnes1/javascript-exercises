const sumAll = function(a, b) {
    var z = 0
    var y = a
    

    if(isNaN(b)) {
        return "ERROR"
    }
    else if (b < 0 || a < 0) {
        return "ERROR"
    }   
    else if (typeof b != "number") {
        return "ERROR"
    }  
    else if (a > b) {
        while (y >= b) {
            z+=y
            y-- }
        }
    else {
        while (y <= b) {
            z+=y
            y++
        }
    }

    console.log(z)
    return z

};



// Do not edit below this line
module.exports = sumAll;
