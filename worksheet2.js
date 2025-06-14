// Worksheet 2: Operators and Expressions


//1.arithmetic operators
console.log("Arithmetic Operators\n\n\n");
let a = 50;
let b = 8;
let c = 2;

let sum = a + b + c; // Adding a, b, and c
let difference = a - b - c; // Subtracting b and c from a
let product = a * b * c; // Multiplying a, b, and c
let quotient = a / b / c; // Dividing a by b and then by c
let remainder = a % b; // Finding the remainder of a divided by b
let exponent = a ** c; // Raising a to the power of c
let increment = ++a; // Incrementing a by 1
let decrement = --b; // Decrementing b by 1


console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Exponent:", exponent);
console.log("Incremented a:", increment);
console.log("Decremented b:", decrement);
console.log("\n\n\n");

/*output:
Sum: 60
Difference: 40
Product: 800
Quotient: 3.125
Remainder: 2
Exponent: 125000
Incremented a: 51
Decremented b: 7
*/
// This code demonstrates the use of arithmetic operators in JavaScript.

// 2.Assignment Operators
console.log("Assignment Operators\n\n\n");
let x = 8;
let y = 2;

x += y; // 10
console.log("x += y :", x);

y = 5;
y -= x; // -5
console.log("y -= x :", y);

x = 4;
x *= y; // -20
console.log("x *= y :", x);

y = 10;
y /= x; // -0.5
console.log("y /= x :", y);

x = 9;
y = 4;
x %= y; // 1
console.log("x %= y :", x);

x = 2;
y = 3;
y **= x; // 9
console.log("y **= x :", y);

console.log("\n\n\n");
//output:
// x += y : 10
// y -= x : -5
// x *= y : -20
// y /= x : -0.5
// x %= y : 1
// y **= x : 9



// 3.Relational Operators
console.log("Relational Operators\n\n\n");
let num1 = 10;
let num2 = 20;

let name1 = "sandesh";
let name2 = "sandesh";
let name3 = "ghimire";

console.log("num1 < num2:", num1 < num2); // less than true
console.log("num1 <= num2:", num1 <= num2); // less than or equal to true
console.log("num1 > num2:", num1 > num2); // greater than false
console.log("num1 >= num2:", num1 >= num2); // greater than or equal to false

console.log("name1 == name2:", name1 == name2); // true

console.log("name1 === name2:", name1 === name2); // true
console.log("name1 != name3:", name1 != name3); // true
console.log("name1 !== name3:", name1 !== name2); // false


console.log("\n\n\n");
// output:
// num1 < num2: true
// num1 <= num2: true
// num1 > num2: false
// num1 >= num2: false
// name1 == name2: true
// name1 === name2: true
// name1 != name3: true
// name1 !== name3: false

// 4.Logical Operators
console.log("Logical Operators\n\n\n");

let one = 1;
let five = 5;
let ten = 10;

console.log("First number:", one);
console.log("Second number:", five);
console.log("Third number:", ten);
console.log("The greatest number among these three is:");

if (one > five && one > ten) {
    console.log(one, "one is the largest number");
} else if (five > one && five > ten) {
    console.log(five, "five is the largest number");
} else {
    console.log(ten, "ten is the largest number");
}
// output:
// First number: 1
// Second number: 5
// Third number: 10
// The greatest number among these three is: 10 ten is the largest number