//Activity 1 FOR
//Task 1  1 to 10
let a = 0;
for (i = 0; i <= 10; i++) {
    console.log("i is " + i)
}
//Task 2  5 tables
var table = 5;
for (i = 1; i < 11; i++) {
    console.log("5 * " + i + " = " + table * i);
}

//Activity 2 WHILE
//Task 1 sum of no's 1 to 10
var b = 1;
var numb = 0;
while (b < 11) {
    numb = numb + b;
    b++;
}
console.log("sum of 1 to 10 : " + numb);

//Task 2:  Print 10 to 1
b = 10;
while (b > 0) {
    console.log(`b is ${b}`);
    b--;

}

//Activity 3   Do while loop
//Task1   print 1 to 5
b = 1;
do {
    console.log(`b value is: ${b}`)
    b++;
} while (b < 6);

//Task2   Factorial of number
b = 5;
numb = 1;
do {
    numb = numb * b;
    b--;
} while (b > 0);
console.log(`The factorial of value is ${numb}`);

// Activity4:  Nested loops
// print pattern       *
//                     * *
//                     * * *
//                     * * * *

a = 1;
for (i = 1; i < 6; i++) {
    stars = ''
    for (k = 1; k < i; k++) {
        stars = stars + " * ";

    } console.log(stars);
}


//Activity5: 

//Skip 5 using continue  
for (i = 1; i < 11; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
//Exit from loop using  break
for (i = 1; i < 11; i++) {
    if (i == 7) {
        break;
    }
    console.log(i)
}





