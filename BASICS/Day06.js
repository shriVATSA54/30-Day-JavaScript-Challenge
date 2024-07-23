// Activity 1
//Task1
let a = [1, 2, 3, 4, 5];
console.log(a);

//Task 2
console.log(a[0]);
console.log(a[4]);

//Activity 2
//Push :add's at the end
a.push("a");
console.log(a);


//POP: pop at end
a.pop();
console.log(a);

//shift: removes first
a.shift();
console.log(a);
// Unshift adds at first 
a.unshift("a")
console.log(a);


//Activty 3
//MAp: Allows to create func and perform on an array
//Transforming Data: When you need to convert data from one form to another


const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = ar.map(ar => ar * 2);
console.log(multiply);

//we can also use multiple map on same aarray
const cube = ar.map(a => a * a).map(a => a * a);
console.log(cube)

//Filter:filters by a function defined and creates a neew array
//Filtering Data: When you need to extract a subset of data based on a condition.

//Multiples of 3
const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
var array = arra.filter(a => a % 3 == 0);
console.log(array);

//give only even no
array = arra.filter(a => (a % 2) == 0);
console.log(array +
    "  Even no"
);

//reduce : reduces array to a single value
// has 4 args accumulator:initially it's value is initial value, then updated value, initialvalue is declared, current value is presnt variable on which some mtehod is performed
//simple ex
const aarra1 = arra.reduce((accumulator, curentvalue) => { return accumulator + curentvalue }, 0);
console.log(aarra1);

//reduce method to calculate sum of all no's
var aarra2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = aarra2.reduce((acc, crent) => {
    return acc + crent;
}, 0);
console.log(array2);


//activity 4
// for loop

for (i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}
console.log("  array  ")

//Task 2 for each loop
arra.forEach(element => {
    console.log(element);

});

//Activity 5
//Task1
const array3 = [[1, 2, 3], [4, 5, 6]];
console.log(array3);

//Task 2
console.log(array3[1][1]);





