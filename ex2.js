var args = process.argv;

function sumArgs(args) {
    "use strict";
    var total = 0;
    for (let i=2; i<args.length; i++) {
        total += Number(args[i]);
    }
    return total;
}

console.log(sumArgs(args));