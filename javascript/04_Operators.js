/* 
Types of JavaScript Operators

There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

*/            


//Arithmetic Operators Example


let a = 5
let b = (100 + 5) / 100

console.log(b);



// // console.log(3 + 3)  Add Operator

// // console.log(3 - 3)  Substraction Operator

// console.log(10 % 5);  Modulus Operator

//   console.log(10/2);   Division Operator

// console.log(2**3);     Exponentiation Operator

// console.log(10 * 5)   Multiplication Operator


// Assignment Operator (=) assigns a value to a variable


let x = 5
let y = 10
let z = (x + y) * 2

console.log("The Result is = " , z);


{ 

  let value = 3
  let neg = -value
  console.log(neg);
              
}

let firstName = "Abdul"
let secondName = " Rafay"
let addName = firstName + secondName
console.log(addName);

// Logical Points


console.log("1" + 2);   // output => 12
console.log(1 + "2");   // output => 12    
console.log(1 + "2" + 2); // output => 122

console.log(1 + 2 + "2"); // output => 32

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 4
console.log(num1,num2,num3);


//            Uniary Operators

console.log(+true);  //Output 1

console.log(+"");  //Output 0


//Comparison Operators


// console.log(2 == 2);  // Equals to
// console.log(2 != 2);  // Not Equals to
// console.log(2 > 2);   // Greater Than
// console.log(2 >= 2);  // Greater Than Equals to
// console.log(2 < 2);   // Less Than
// console.log(2 <= 2);  // Less Than Equals to
// console.log(2 === 2);  // Equals to & type
// console.log(2 !== 2);  // Not Equals to type

// Logical Points

console.log("2" > 1); // First Number is string data type and the second Number is int data type
                      // But the output is 2 is greater than 1 means (True)   

console.log(null > 0); // Output => False
console.log(null == 0);  // Output => False
console.log(null >= 0);  // Output => True


