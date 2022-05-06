// var arr = [1,2,3,4,5,6];
// console.log(arr);
// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

/* Value and variables */

// var myName = "Ayush";
// var myAge = 23;
// console.log(myName, myAge);
// type of operator

// var iAmAyush = true;
// console.log(iAmAyush)

// console.log(typeof(iAmAyush))

/* naming convantion

1. camelCase notaetion
    myAge
    myName
--> not start with number 
--> start with letter, underscore(-), doller($)
-->namming of vaqriables are case sensitive.
 */

/* null and undefine */

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));    //2nd bug in js

// var iAmStandBy ;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));

// console.log("Ayush" - "kumar");

/*
Expression and operaetors
*/
// Assignment operator
// var x = 5;
// var y = 5;
// console.log(x == y);
// console.log("is X and y is equal or not" + x == y);

// increment and decrement

// var num = 15
// var newNum = ++num
// console.log(num)
// console.log(newNum)

// --> String operator

// ---> Swapping of two numbers

// var a = 10;
// var b = 20;
// console.log("before swapping the number the value of a and b is " + a,b);
// wiuth using 3rd variable
// var temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a,b)

// without 3rd variable
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);

// console.log("The value of a is " + a)
// console.log("The value of b is " + b)

/*  
Difference between == and ====
*/

// var num1 = 10;
// var num2 = '10'
// console.log(typeof( num1));
// console.log(typeof( num2));
// console.log(num2);
// console.log(num1 === num2);

/*  Control statement and loops*/

// var tmr = 'rain';
// if(tmr == 'rain') {
//     console.log("Need to take raincoat")

// }else{
//     console.log("No need to take raincoat !")
// }

// chalanges.......

// var year = 2024;

// if (year % 4 == 0) {
//     if(year % 100 == 0){
//         if(year % 400 == 0) {
//             console.log(" The entered year" + year + " is a leap year !")
//         }
//         else{
//             console.log("The entered year" + year + " is not a leap year !");
//         }

//     }
//     else {
//         console.log("The entered year" + year + " is a leap year !");
//     }
// } 
// else {
//   console.log("The entered year" + year + " is not a leap year !");
// }



// ternary(Conditional) operator
/*
Syntax:-

 variableName = (condition) ? value1:value2
*/
// var age = 19;
// var age = (age >= 18) ? console.log("you can vote") : console.log("you cant vote your age is belloqw 18!")
//  or 

// if(age >= 18) {
//     console.log("you can vote !");
// // }
// else {
//     console.log("you cant vote !")
// }



/*
switch statement
 */
// var person = prompt("Enter your name " );
// alert("your name is " + person);