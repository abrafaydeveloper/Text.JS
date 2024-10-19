let name = "Abdul Rafay";
let age = 20;

// console.log("My name is " + name + "and age is" + age); // One way

console.log(`My name is ${name.toUpperCase()} and age is ${age}`); // Best Way

let gameName = new String('Pubg')

// Methods In String

console.log(gameName.length);  // Output => length String

console.log(gameName[1]);    // Output => Index Position

console.log(gameName.__proto__);  // Output => {} means Object

console.log(gameName.toLowerCase()); // Output => small letters

console.log(gameName.charAt(3));     // Output => g 

console.log(gameName.indexOf('g'));   // Output => 3

console.log(gameName.substring(0,3));  //Output => PUB // No negative value Assign

console.log(gameName.slice(-3,2)); //Output => U  // Assign Negative value

let space = "      rafay         ";
console.log(space.trim()); // Output => No Space Count

const url = "https://rafay.com/abdul%20rafay"
console.log(url.replace('%20','-'));           //Output => https://rafay.com/abdul-rafay


console.log(url.includes('Web Developer')); //Output => False bcz this word is not included in url

console.log(url.includes('abdul'));  //Output => True

let split = "Abdul/Rafay/DEV"
console.log(split.split('/'));   //Output => Convert in ARRAY and replace '/'









