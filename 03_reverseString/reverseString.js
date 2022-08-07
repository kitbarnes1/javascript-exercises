const reverseString = function(string) {
    const blah = string.split('')
    console.log(blah.length)
    var reverse = blah.reverse();
    console.log(reverse)
    joined = reverse.join("")
    console.log(joined)
    return joined
};
reverseString("blah")
// Do not edit below this line
module.exports = reverseString;
