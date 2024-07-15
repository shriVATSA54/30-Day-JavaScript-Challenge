// Activity1
//Task1
//var number=-8
//var number=8
var number = 0;

if (number == 0) {
    console.log(`${number} is Zero`)
} else if (number > 0) {
    console.log(`${number} is Positive `)
} else {
    console.log(`${number} is Negative`)
}

//Task2
let age = 18;
if (age >= 18) {
    console.log("Eligible to Vote")
} else {
    console.log("Not Eligible to Vote")
}


//Activity 2
//NEsted If ELse
let n1 = 15;
let n2 = 223;
let n3 = 1444;

if (n1 > n2) {
    if (n1 > n3) {
        console.log(`n1 ${n1} is Largest number`);
    } else {
        console.log(`n3 ${n3} is Largest number`);
    }
} else {
    if (n2 > n3) {
        console.log(`n2 ${n2} is Largest number`);
    } else {
        console.log(`n3 ${n3} is Largest number`);
    }
}


//Activity 3  SWITCH CASES

//ASK 1 Based on 1 to 7 determine which day it is

let day = 9;
switch (day) {
    case (1): {
        console.log("It is Sunday");
        break;
    }
    case (2): {
        console.log("It is Monday");
        break;
    }
    case (3): {
        console.log("It is Tuesday");
        break;
    }
    case (4): {
        console.log("It is Wednesday");
        break;
    }
    case (5): {
        console.log("It is Thursday");
        break;
    } case (6): {
        console.log("It is Friday");
        break;
    } case (7): {
        console.log("It is Saturday");
        break;
    }
    default: {
        console.log("The value is wrong")
    }

}

//Activity 4
//conditional ternary in js

let nbr = 16;
(nbr % 2) == 0 ? console.log("The number is Even") : console.log("The number is Odd");

//Activity 5
//Check if year is leap year

var year = 2016;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Year is Leap")
} else {
    console.log("Year is not Leap")
}

