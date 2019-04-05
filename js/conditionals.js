"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function messageForEvenOrOdd(number) {
    var message;
    if (number % 2 === 0) {
        message = "This is an even number!";
    } else {
        message = "This is an odd number!";
    }
    return message;
}

function plusOneHundMessage(number) {
    return "This number plus 100 is " + (number + 100) + "!";
}
function mathGame() {
    var go = confirm("Hey, want to do some math?");
    if (go === true) {
        var number = parseInt(prompt("Give me a number"));
        if (isNaN(number)) {
            alert("You did not enter a number.")
        } else {
            alert(messageForEvenOrOdd(number));
            alert(plusOneHundMessage(number));
            if (number >= 0) {
                alert("This number is positive!")
            } else {
                alert("This number is negative!")
            }
        }
    }
    return number;
}

// mathGame();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    var message;
    if (color.toLowerCase() === "blue") {
        message = "Blue is the color of the sky."
    } else if (color.toLowerCase() === "red") {
        message = "Strawberries are red."
    } else if (color.toLowerCase() === "cyan") {
        message = "I don't know anything about cyan."
    } else {
        message = "I don't care for " + color + "."
    }
    return message
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch(color) {
    var message;
    switch(color.toLowerCase()) {
        case "blue":
            message = "Blue is the color of the sky.";
            break;
        case "red":
            message = "Strawberries are red.";
            break;
        case "cyan":
            message = "I don't know anything about cyan.";
            break;
        default:
            message = "I don't care for " + color + ".";
            break;
    }
    return message
}

// console.log(analyzeColorSwitch(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorPrompt = prompt("Give me a color!");
// var userInput = analyzeColorSwitch(colorPrompt);
// alert(userInput);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    var finalTotal;
    total = parseFloat(total);
    switch (parseInt(luckyNumber)) {
        case 0:
            finalTotal = total;
            break;
        case 1:
            finalTotal = total - (total * .10);
            break;
        case 2:
            finalTotal = total - (total * .25);
            break;
        case 3:
            finalTotal = total - (total * .35);
            break;
        case 4:
            finalTotal = total - (total * .50);
            break;
        case 5:
            finalTotal = 0;
            break;
        default:
            finalTotal = total;
            break;
    }
    return finalTotal;
}

// var discountedTotal = calculateTotal(0, 125);
// console.log(discountedTotal);
// discountedTotal = calculateTotal(3, 125);
// console.log(discountedTotal);
// discountedTotal = calculateTotal(5, 125);
// console.log(discountedTotal);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5
var luckyNumber = Math.floor(Math.random() * 5 + 1);

function promptForTotal(luckyNumber) {
    var promptedTotal = prompt("What is your total, sir/madam?");
    var discountTotal = calculateTotal(luckyNumber, promptedTotal);
    alert("Your total before discount was $" + promptedTotal + ", but you drew number " + luckyNumber + ", so you pay $" + discountTotal + "!");
    return discountTotal;
}

promptForTotal(luckyNumber);