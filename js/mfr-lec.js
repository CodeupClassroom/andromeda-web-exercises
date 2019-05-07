// Pop quiz!
// -----------------------------------------------------------------------

// What do we mean by map, filter, reduce?
// How do these affect our arrays?
// What data type are we using these methods on?

// -----------------------------------------------------------------------

// Problem: Manipulate an array of numbers in a way that we see a new
// array of just the even numbers from the previous array.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];
// How do we do this with our current knowledge?
// numbers.forEach(function(data){
//     if(data % 2 === 0) {
//         evens.push(data);
//     }
// });

// console.log(numbers);
// console.log(evens);








//Get ready to hate me...

// evens = numbers.filter(n => n % 2 === 0);
// console.log(evens);

// Problem: Create an array by filtering an array of integers that only
// has numbers that have square roots that are whole numbers.

// let wholeSquareRoots = numbers.filter(n => {
//     let sqrt = Math.sqrt(n);
//     return sqrt % 1 === 0;
// });
//
// console.log(wholeSquareRoots);

// -----------------------------------------------------------------------

// Problem: Create an array from another array where each number from
// the previous array is squared.

// const squares = numbers.map(n => {
//     return n * n;
// });
// console.log(squares);

// -----------------------------------------------------------------------

// Problem: Create a function that will take an array of sales person
// objects and return the average sales for the staff.

let salesPersons = [
    {name: 'David', sales: 3200, empId: 620774},
    {name: 'Justin', sales: 3800, empId: 613310},
    {name: 'Terrell', sales: 2200, empId: 609482},
    {name: 'Sophie', sales: 4400, empId: 620612},
    {name: 'Fernando', sales: 5200, empId: 600350},
    {name: 'Daniel', sales: 3600, empId: 618090},
    {name: 'Ryan', sales: 3800, empId: 599135},
    {name: 'Zach', sales: 4000, empId: 599991},
    {name: 'Maggie', sales: 3800, empId: 618921}
];

// const getAverageSales = employees => {
//     let totalSales = employees.reduce((accumulator,employee) => {
//         return employee.sales + accumulator;
//     }, 0);
//     console.log(totalSales);
//     return totalSales/employees.length;
// };
//
// console.log(getAverageSales(salesPersons));

// -----------------------------------------------------------------------

// Problem: Create a function that reduces a string, and returns the
// longest word from it. If there is a tie, it will return the earlier
// word.

const testSentence1 = "It's Supercalifragilisticexpialidocious; even though the sound of it is something quite atrocious";
const testSentence2 = "The relish fish was delish and it made quite a dish.";

// const longestWord = sentence => {
//     // How do I do this?
//     let splitSentence = sentence.split(" ");
//     let longestWord = splitSentence.reduce((biggestWord, word) => {
//         if (word.length > biggestWord.length){
//             biggestWord = word;
//         }
//         return biggestWord;
//     }, "");
//     return longestWord;
// };
//
// console.log(longestWord(testSentence1));
// console.log(longestWord(testSentence2));

// -----------------------------------------------------------------------

// Problem: Create a function that will take in a word, set all the
// letters to upper case, and remove the vowels (Y is a consonant).

// const withoutVowels = word => {
//     let splitWord = word.split("");
//     return splitWord.reduce((accumulator, letter) => {
//         let uppercaseLetter = letter.toUpperCase();
//         if (uppercaseLetter !== "A" && uppercaseLetter !== "E" && uppercaseLetter !== "I" && uppercaseLetter !== "O" && uppercaseLetter !== "U"){
//             return accumulator + uppercaseLetter;
//         }
//         return accumulator;
//     }, "")
// };

// console.log(withoutVowels(longestWord(testSentence1)));