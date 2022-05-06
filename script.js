/* 
===> code with harry


*/

// ===> Functions

// function avg(a, b) {
//     return (a + b)/2;

// }

// c = avg(10, 25);
// c1 = avg(2,24)
// console.log(c);
// console.log(c1);

// ==> conditionals in js

// var age = 24;
// if(age > 18) {
//     console.log("You are not kid any more !")
// }
// else {
//     console.log("you are kid !")
// }

// loops
// ==> for loop

// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log("length of array is " + arr.length);
// for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// or using for each for ittrate an array
// arr.forEach(function(element){
//     console.log(element);
// })

// while loop

// let j = 0;
// while(j < arr.length) {
//     console.log(arr[j])
//     j++;
// }

//  do while loop
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);



/* 
==> Breake and Continue statements
*/

// var arr = [1,2,3,4,5];
// for(var i = 0; i<arr.length ; i++) {
//     if(i == 2) {
//         break;
//     }
//     console.log(arr[i]);
// }


// let myArr = ["Ayush", "age", 24, null, true];

// Array methods

// console.log(myArr.length);
// console .log(myArr.pop());
// myArr.push("pandit");
// myArr.shift();
// const newLen = myArr.unshift("Pawan");
// console.log(newLen);

// const str = myArr.toString();
// console.log(str);
// console.log(myArr);


// const arr2 = [1,2,5,4,8,6]
// console.log(arr2.sort);
// console.log(arr2.sort());



// ==> String 

// let str = "Ayush kumar pandit";  // [0,1,2,3,4] index of string
// console.log(str.length);
// console.log(str.indexOf("s"));
/*
String slicing
*/
// console.log(str.slice(0, 11));

// method to repalacing the string
// d = str.replace("Ayush", "Pawan");
// console.log("new string is "  +  d);
// console.log("old string is " + str);


// ==> javaScript Dates

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.toString());


/* 
===> Dom(Ducment object model)
*/

// 1 method==>getElementbyid
// let e = document.getElementById('click');
// console.log(e);
// let d = document.getElementsByClassName('container');
// console.log(d);
// let doc = document.getElementsByClassName("container");
// doc[0].style.background =  "pink";








/* 
    ===> js events.

*/
// function clicked(){
//     console.log("the buttom was clicked");
// }

// window.onload = function(){
//     console.log("Document was loaded");
// }


// // events.......

// firstContainer.addEventListener('click', function(){
//     console.log("clicked");
// })



// firstContainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })


// ===> Arrow function
// function sum(a,b){
//     return a+b;
// }

// arrow finction

// sum = (a, b) => {
//     return a + b;
// }



// -----> setTime out and setTime interval......

// logKaro = () => {
//     console.log("I am your log ! ");
// }
// setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// clearInterval(clr);


// ===> local storage
// localStorage.setItem('name', 'Ayush');
// localStorage
// Storage{name: "Ayush", length: 1} --->output 


// localStorage.getItem('name');
// localStorage.removeItem("name")
// localStorage.clear();



/* ====>json......*/

obj = { name : "ayush", length: 1, a: { surname: "Pandit"}}
jso = JSON.stringify(obj)
console.log(typeof jso)
console.log(jso);

parsed = JSON.parse(`{"name":"ayush","length":1,"a":{"surname":"Pandit"}} `);
console.log(parsed);