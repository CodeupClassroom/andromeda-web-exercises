"use strict";

// EXERCISE 2

while(true) {

    var userChoice = prompt("Please enter an odd number between 1 and 50");

    if (isNaN(userChoice)) {
        alert("Invalid Input! The input must be a number.");
        continue;
    }

    userChoice = parseFloat(userChoice);

    if (userChoice < 1 || userChoice > 50) {
        alert("Invalid input! The number entered is out of range.");
        continue;
    }

    if (userChoice % 2 === 0) {
        alert("Invalid input! The number entered must be odd.");
    } else {
        break;
    }

}


// EXERCISE 3

for (var i = 1; i <= 50; ++i) {

    if (i % 2 === 0) {
        continue;
    }

    if (i === userChoice) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i > 49) {
        break;
    }
}