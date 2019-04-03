"use strict";
 console.log("Hello from external JavaScript.");

 alert("Welcome to my Website!");

 var favoriteColor = prompt("What is your favorite color?");

 alert("Wow! " + favoriteColor + " is my favorite color too.");


 //total movie cost
 var littleMermaid = prompt("How many days did you rent 'The Little Mermaid'?");
 var brotherBear = prompt("How many days did you rent 'Brother Bear'?");
 var hercules = prompt("How many days did you rent 'Hercules'?");

 var pricePerDay = prompt("What was the price of renting per day?");
 var totalCost = (+littleMermaid + +brotherBear + +hercules) * pricePerDay;
 alert("The total cost was: $" + totalCost);

//total weekly pay
var googlePay = prompt("How much does Google pay/hr?");
var amazonPay = prompt("How much does Amazon pay/hr?");
var facebookPay = prompt("How much does Facebook pay/hr?");

var googleHours = prompt("How many hours at Google?");
var amazonHours = prompt("How many hours at Amazon?");
var facebookHours = prompt("How many hours at Facebook?");

var totalPay = googlePay * googleHours;
totalPay += amazonPay * amazonHours;
totalPay += facebookPay * facebookHours;

alert("You made: $" + totalPay + " this week!");

//can student enroll?
var classSize = confirm("Is the class currently full? If not, click cancel.");
var classSchedule = confirm("Does the class conflict with current schedule? If not, click cancel.");
var enrollmentStatus = !classSize && !classSchedule;

alert("Student enrollment status: " + enrollmentStatus);

//can offer be used?
var numberOfItems = prompt("How many items did you buy?");
var offerExpiration = confirm("Is the offer valid?");
var membership = confirm("Are you a premium member?");

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration;
alert("Can customer use this offer? " + couponStatus);


