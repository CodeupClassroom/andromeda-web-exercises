"use strict";

// EXERCISE 2

function outputRow(num1, num2) {
    var output = "";
    var total = num1 * num2;
    output += num1 + " x " + num2 + " = " + total;
    return output;
}

function showMultiplicationTable(num) {

    // create output variable
    var output = "";

    // iterate over numbers 1 - 10

    for (var i = 1; i <= 10; i += 1) {
        // concatenate to the output variable this...
            // pass in the num value and the value of the iterator to outputRow()
        output += outputRow(num, i) + "\n";
    }
    return output;
}


// EXERCISE 3

// function to generate random number

function returnRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to console log if number is even or odd

function isEvenOdd(num) {
    var outputMessage = num;
    outputMessage += (num % 2 === 0) ? " is even" : " is odd";
    console.log(outputMessage);
}

// main function to iterate 10 times

function evenOddCalculator() {
    for (var i = 1; i <= 10; i += 1) {
        // generate random number
        var randNum = returnRandNum(20, 200);
        // check if rand num is even or odd
        isEvenOdd(randNum);
        // output results
    }
}


// EXERCISE 4

// for (var i = 1; i < 10; i += 1) {
//     console.log(String(i).repeat(i));
// }

for (var i = 1; i < 10; i += 1) {
    // output
    var output = "";
    // loop up to the current value i and concatenate the value of the current value to the output
    // console.log output
    for (var j = 1; j <= i; j += 1) {
        output += i;
    }
    console.log(output);
}


// EXERCISE 5

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}












