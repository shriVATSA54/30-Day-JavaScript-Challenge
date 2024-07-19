//ACtivity 1 Functions
//Taks1 : normal function :=> check whether even or odd and log it
let numb = 3;
function EvenOdd(numb) {
    if (numb % 2 == 0) {
        console.log("It's Even")
    } else {
        console.log("It's Odd ")
    }
}
EvenOdd(numb);

//Square of num

function Square(numb) {
    return numb * numb;
}
console.log(Square(numb));

//Activity 2: function expression
//Task 1 : find the largest no and log it
var n1 = 12;
var n2 = 15;
let largest = function (n1, n2) {
    if (n1 > n2) {
        return (n1)
    }
    return n2
}

console.log(largest(n1, n2) + ` is largest among ${n1} and ${n2}`);

//Task 4: Concatenate String
let str1 = "Hello";
let str2 = "World";
let concat = function (n, m) {
    return n + m;
}
console.log(concat(str1, str2));

// Activty 3 : ARrow function
//Task5: calculate sum of 2no's
let a = (n1, n2) => {
    return n1 + n2;
}
console.log(a(5, 20));

// Give boolean to determine if a letter is present in String

let word = "HelloWorld";
let check1 = (word, e) => {
    return word.includes(e)
};
console.log(check1(word, "d"));

// Activity 4
// Task 4: func takes 2 param and return their product. default value for 2nd param

let totalBill = function total(bill, bagprice = 5) {
    return bill + bagprice;
}
console.log(totalBill(25));
console.log(totalBill(23, 30))

//Task 5:func takes age and name .Return greeting msg
function greet(name, age = 18) {
    console.log(`${name} is of  above ${age} Age `)
}
greet("Shail", 23);
greet("Shaili")

//Activity 5: High order function
//Task1
// HoF : that takes no and runs it no of times mentioned

let square = () => {
    console.log(count);
    count++;
}
var count = 1;
function print(number, func) {

    for (i = 0; i < number; i++) {
        func(count)

    }
    count = 1;
}

print(3, square);

//Task 10
function hello(fn1, fn2, value) {
    let anss = fn1(value);
    console.log(`The Square value is ${anss}`)
    var x = fn2(anss);
    console.log(`The Quadraple value is ${x}`);
    return x;

}
sq = (p) => {
    return p * p;
}
cube = (p) => {

    return p * p;
}
hello(sq, cube, 5);
console.log(`Quadraple of number is ` + hello(sq, cube, 3))