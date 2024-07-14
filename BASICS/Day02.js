//Activity1 
//Task 1 add 2 no's
var a = 6;
var b = 7;
console.log(a + b)

//Task 2 subtract 2 no's
var a = 6;
var b = 7;
console.log(a - b)

//Task 3 multiply 2 no's
var a = 6;
var b = 7;
console.log(a * b);

//Task 4 divide 2 no's
var a = 6;
var b = 2;
console.log(a / b)

//Task 5 remainder 2 no's
var a = 4;
var b = 3;
console.log(a % b)
console.log(b % a)

//Activity 2 Assignment Operator
//Task1   +=
var d = 5;
d += 5;
console.log(d);
//Task2   -=
var e = 5;
e -= 5;
console.log(e);

//Activity 3  Comparrisson Operator
//Task1 
var g = 3;
let h = 5;
console.log(g > h)  // g greater true or false
console.log(g < h)  // h greater true or false
console.log(g == h) // g equal to h
console.log(g != h)  //g not equal to h 
console.log(g === h)  // checks for value and type
h = 3; console.log(g === h)  // checks for value and type

//ACtivity 5 Logical Operators
a = 6;
b = 6;
c = 8;
console.log("verifies both " + (a == b && c == b))

a = 6;
b = 6;
c = 8;
console.log("verifies either one " + (a == b || c == b))
// ! negates the result and gives
a = 6;
b = 15;
console.log(!(a > b))
console.log(!(a == b))

//Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse
console.log("Ternary Operator")
a == b ? console.log("True") : console.log("False");
a != b ? console.log("True") : console.log("False");

a = 2;
b = -2;
a > 0 ? console.log(`${a} a is Positive`) : console.log(`${a} a is negative`);
b > 0 ? console.log(`${b} a is Positive`) : console.log(`${b} a is negative`);

