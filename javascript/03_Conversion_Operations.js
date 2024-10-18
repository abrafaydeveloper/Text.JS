// let num = "33abc";

let num = undefined;

let num1 = Number(num);
console.log(num1);
console.log(typeof num1);  // Output => NAN means (Not a Number) but type is Number

{
let num = null;
let num1 = Number(num);
console.log(num1);
console.log(typeof num1);  // Output => 0  but type is Object
}


let name = 'rafay';
let change = Boolean(name);
console.log(typeof change);
console.log(change); // Output => True  (1)

let number = 1;
let convert = Boolean(number);
console.log(typeof convert);
console.log(convert);  // Output => True


{
 let number = "";
let convert = Boolean(number);
console.log(typeof convert);
console.log(convert);  // Output => False (0)
}


// const int = '3456';

const int = "123abc";
const int1 = Number(int);
console.log(typeof int1);
console.log(int1); // outpur => type => Number but actually result is NAN not a number 









