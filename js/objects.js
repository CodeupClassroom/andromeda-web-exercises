(function() {
    "use strict";

/**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Justin",
        lastName: "Reich"
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // function to return the discounted amount
    function calculateDiscount(total) {
        var output = 0;
        if (total > 200) {
            output = total * .12;
        }
        return output;
    }

    // convert to currency
    function convertToCurrency(num) {
        return "$" + num.toFixed(2);
    }

    // display shopper info function
    // EXAMPLE OUTPUT "SHOPPER_NAME spent AMOUNT_SPENT and received a discount of SOME_DOLLARS and paid SOME_DOLLARS"
    function displayShopperInfo(shopper) {
        var output = "";
        var amount = convertToCurrency(shopper.amount);
        var discount = convertToCurrency(calculateDiscount(shopper.amount));
        var finalAmount = convertToCurrency(shopper.amount - calculateDiscount(shopper.amount));
        output += shopper.name + " spent " + amount;
        output += " and received a discount of " + discount;
        output += " and paid " + finalAmount;
        return output;
    }

    // take in shoppers and call the display shopper function for each one
    function displayShoppersInfo(shoppers) {
        shoppers.forEach(function(shopper) {
           console.log(displayShopperInfo(shopper));
        });
    }

    displayShoppersInfo(shoppers);


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Title 1",
            author: {
                firstName: "First Name 1",
                lastName: "Last Name 1"
            }
        },
        {
            title: "Title 2",
            author: {
                firstName: "First Name 2",
                lastName: "Last Name 2"
            }
        },
        {
            title: "Title 3",
            author: {
                firstName: "First Name 3",
                lastName: "Last Name 3"
            }
        },
        {
            title: "Title 4",
            author: {
                firstName: "First Name 4",
                lastName: "Last Name 4"
            }
        },
        {
            title: "Title 5",
            author: {
                firstName: "First Name 5",
                lastName: "Last Name 5"
            }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index) {
        var output = "";
        output += "Book # " + (index + 1) + "\n";
        output += "Title: " + book.title + "\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
        output += "---";
        console.log(output);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();