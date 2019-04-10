"use strict";

// EXERCISE 2

var i = 2;
while(i <= 65536) {
    console.log(i);
    i *= 2;
}


// EXERCISE 3

var conesToSell = Math.floor(Math.random() * 50) + 50;
while (conesToSell > 0) {
    var conesOrdered = Math.floor(Math.random() * 5) + 1;
    if (conesToSell >= conesOrdered) {
        console.log(conesToSell + " cones sold!");
        conesToSell -= conesOrdered;
    } else {
        console.log("Cannot sell you " + conesOrdered + " cones. I only have " + conesToSell + "...");
    }
}
console.log("Yay! I sold them all!");