// Primitive Data Type

// There are 7 types of primitive data type

// String , Number , Null, Undefined, BigInt, Symbol , Boolean



let fullname = "Abdul Rafay"
console.log(typeof fullname); // output => string

let number = 100.4
console.log(typeof number); // output => number

let empty = null
console.log(typeof null);  // output => Object


let update; 
console.log(typeof update);  // output => undefined


let id = Symbol("123")

let anotherId = Symbol("123")

console.log(typeof id,anotherId); // output => Symbol

console.log(id===anotherId);  // output => False value same but not unique id

let num1 = 10
let num2 = 10
console.log(num1 == num2); //output => True
console.log(num1 != num2); //output => False

let x = BigInt("123456789012345678901234567890");
console.log(x);
console.log(typeof x);


// Non-Primitive Data Type (Reference)


// Arrays , Object , Functions

const data = ["Abdul Rafay",20,"A+"]
console.log(data);
console.log(typeof data); // Output => Object


let student = {

              name : "Abdul Rafay",
              age : 20,
              grade : "A"
}

console.log(student);
console.log(typeof student); // Output => Object

let details = function(){
              console.log("Abdul Rafay");
              
}

console.log(typeof details); //Output => Function











/* Note:- 


JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/