const removeFromArray = function(a, ...manyMoreArgs) {
    const args = a;
    const args2 = manyMoreArgs
    console.log(args2)


    for (const j of args2) {
        var i = 0;
        while (i < args.length) {
            if (args[i] === j) {
                args.splice(i, 1);
            }
                else {
                    ++i
                }
            }

    }

return args
    }
;

    

removeFromArray([1, 2, 3, 4], 2, 4, "lbha")

// Do not edit below this line
module.exports = removeFromArray;
