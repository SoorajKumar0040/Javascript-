//    Data Types
// 1. Primitive 
//  In Primitive there are 7 type of datatypes :
// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt 

let String = "Suraj";
let num = 22;
let Boolean = false;
let Null = null;
let userName = undefined;
const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 122345678456789n;




//Referance (Non Primitive)

// Array,Objects,Functions
const friends = ["Suraj", "Sagar", "Shivam", "Shubham"];

let myDetails = {
    name :"suaraj",
    age : 23 ,
}

const myFunction = function (){
    console.log("Hello World");
}

//************************************************************** */

//Stack (Primitive) 
//In stack the value you get is copy of that data
let myYoutubename = "surajkumardotcom"

let anothername = myYoutubename
anothername = "soorajkumar"

console.log(myYoutubename);
console.log(anothername);

// Heap (Non -Primitive)
//In heap the value you get by the referance of that data 

let userOne = {
    email:"sooraj@gmail.com",
    upi:"user@asix",
}

let userTwo = userOne

userTwo.email = "sooraj123@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);
