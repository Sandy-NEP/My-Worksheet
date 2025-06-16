//Worksheet 10: Array Methods

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let filtered = numbers.filter(n => n > 3);
let found = numbers.find(n => n > 3);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Original:", numbers, "\nDoubled:", doubled, "\nFiltered:", filtered, "\nFound:", found, "\nSum:", sum);

/*
Method	What it did
map()	Made a new array, doubled each item
filter()	Picked only items > 3
find()	Found the first item > 3
reduce()	Added them all into one value
*/

// Output:
// Original: [1, 2, 3, 4, 5]
// Doubled: [2, 4, 6, 8, 10]
// Filtered: [4, 5]
// Found: 4
// Sum: 15