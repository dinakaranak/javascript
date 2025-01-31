
// javascript is a dynamic language or untyped language.
// variables: it is like a container for storing values

console.log("hello");
console.log(5+6);
console.log(5+6+4);

let a=67
let b=6                                                 

// keywords to declare a variable: let, const, var

var s=23
var s="hello"  // redeclaring
s="welcome" // reassigning

//let a = "gt"  // redeclaring is not allowed
a=34  // reassigning is allowed 

const x=89 // we cant re declare and reassign

// rules for declaring variables:
// 1. variables should start with alphabets only
//2. it should not start with number and special char(except _,$)
// 3. do not use keywords as a variable name
// 4.do not leave space b/w variable names
// 5. give reasonable names 


let _name ="test"
let userName = "dhinakaran"  // camelcase
let n = true  // boolean value


// data types: Primitive data types: Number, String, boolean , non primitive types: array and objects

let arr = ["apple", "banana", 56, 78]  // collection of values

let obj = {
    name: "test",
    age:16
 } // collection of properties

 let y // undefined

 let z = null // null values is stores as a obj in js

 console.log( typeof(z));


 // scope of variables: global scope , local scope

 {
    let d = 67 // local scope or block scoped ; let and const are block scoped keyword
    console.log(d);
    var t = 90  //var global scoped keyword
 }
//console.log(d); it can not be accessed out isde of the block

 console.log(t);
 




let nam = "Dinakaran"

// Check if the user entered a name
if (nam) {
    console.log(`Hello, ${nam}! Welcome to JavaScript.`);
   //  alert(`Hello, ${nam}! Welcome to JavaScript.`);
} else {
    console.log("Hello, Guest! Welcome to JavaScript.");
   //  alert("Hello, Guest! Welcome to JavaScript.");
}

 









