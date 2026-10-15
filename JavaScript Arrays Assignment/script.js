// ==========================================
// SECTION 1: ARRAY BASICS
// ==========================================

console.log("=== SECTION 1: ARRAY BASICS ===");

// Question 1: Array Access and Length
let favoriteFruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

// a) Access the second fruit using index and print it
console.log("Q1 a) Second fruit:", favoriteFruits[1]);

// b) Access the last fruit using index and print it
console.log("Q1 b) Last fruit:", favoriteFruits[favoriteFruits.length - 1]);

// c) Print the length of the array
console.log("Q1 c) Length of array:", favoriteFruits.length);

// d) Modify the third element of the array and print the updated array
favoriteFruits[2] = "Strawberry";
console.log("Q1 d) Updated array:", favoriteFruits);


// Question 2: Understanding Array References
let arr1 = [10, 20, 30, 40];

// Part 1
console.log("\n--- Q2 Part 1 ---");
// a) Assign arr1 to another variable arr2
let arr2 = arr1;

// b) Modify the second element of arr2 to 99
arr2[1] = 99;

// c) Print both arr1 and arr2
console.log("arr1:", arr1);
console.log("arr2:", arr2);

// d) Explanation:
/*
  Explanation: In JavaScript, arrays are reference types (stored by reference, not value). 
  When you assign `arr1` to `arr2`, you aren't copying the array data itself; you are 
  copying the *memory address* (reference) to that array. As a result, both variables 
  point to the exact same array in memory. Modifying `arr2` also affects `arr1`.
*/

// Part 2
console.log("\n--- Q2 Part 2 ---");
// Create a new array arr3 using slice() to make a shallow copy of arr1
let arr3 = arr1.slice();

// a) Modify the last element of arr3 to 88
arr3[arr3.length - 1] = 88;

// b) Print arr1, arr2, and arr3
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);

// c) Explanation:
/*
  Explanation: The `slice()` method creates a new shallow copy by allocating a new array 
  in memory and copying the primitive values over. Therefore, `arr3` has its own independent 
  memory reference. Changing `arr3` does not impact `arr1` or `arr2`. However, `arr1` and `arr2` 
  remain linked to each other because they still point to the same original reference.
*/


// ==========================================
// SECTION 2: ARRAY METHODS
// ==========================================

console.log("\n=== SECTION 2: ARRAY METHODS ===");

// Question 1: Basic Array Methods
let numbersArray = [12, 15, 20, 25, 30];

// a) Use push() to add a number
numbersArray.push(35);
console.log("Q1 a) After push:", numbersArray);

// b) Use pop() to remove the last number
numbersArray.pop();
console.log("Q1 b) After pop:", numbersArray);

// c) Use indexOf() to find the position of 20 and print it
console.log("Q1 c) Position of 20:", numbersArray.indexOf(20));


// Question 2: Working with Array Methods
let colors = ["red", "blue", "green", "yellow", "purple", "black"];

// a) Extract the middle three colors into a new array
// Index length is 6, middle three items are indices 2, 3, 4 ("green", "yellow", "purple")
let middleColors = colors.slice(2, 5);
console.log("Q2 a) Middle three colors:", middleColors);

// b) Does this operation change the original array? Explain why or why not.
/*
  Explanation: No, `slice()` does not change the original array. It non-destructively 
  extracts a portion of the array and returns it as a brand-new array.
*/


// Question 3: Insert and Remove Elements
let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

// a) Remove "eraser" and "scale" from the array (Indices 2 and 3)
// b) Insert "marker" and "ruler" at the same position using splice()
items.splice(2, 2, "marker", "ruler");
console.log("Q3 Updated items array:", items);


// ==========================================
// SECTION 3: ADVANCED ARRAY OPERATIONS
// ==========================================

console.log("\n=== SECTION 3: ADVANCED ARRAY OPERATIONS ===");

// Question 1: Replace Values in an Array
let scores = [12, 25, 37, 48, 59, 63, 77];

// a) Replace only the last three values with 0
scores.splice(scores.length - 3, 3, 0, 0, 0);
console.log("Q1 a) Last three replaced with 0:", scores);

// b) Then overwrite the entire array with "N/A"
// We can fill or reassign, or use fill method:
scores.fill("N/A");
console.log("Q1 b) Overwritten with 'N/A':", scores);


// Question 2: Filtering Data from Arrays
let numbers = [11, 22, 35, 42, 59, 60, 73, 88];

// a) Create a new array containing only numbers greater than or equal to 50
let filteredGreater = numbers.filter(num => num >= 50);
console.log("Q2 a) Numbers >= 50:", filteredGreater);

// b) Separate function that checks whether a number is even, and filter using it
function isEven(num) {
    return num % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);
console.log("Q2 b) Even numbers:", evenNumbers);


// Question 3: Looping Through Nested Arrays
let cube = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];

console.log("Q3) Looping through nested cube array:");
for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube[i].length; j++) {
        for (let k = 0; k < cube[i][j].length; k++) {
            console.log(cube[i][j][k]);
        }
    }
}