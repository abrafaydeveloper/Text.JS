//---------------------------Numbers------------------------------
const num1 = 200;
console.log(num1);  


const num2 = new Number(300);
console.log(num2.toString().length);


const num3 = 23.5567;
console.log(num3.toExponential(3));



const num4 = 123.645;
console.log(num4.toPrecision(3));


const num5 = 300000000;
console.log(num5.toLocaleString());

//-------------------------Maths-------------------------------------

console.log(Math);

console.log(Math.abs(-5)); // OutPut 5

console.log(Math.round(4.976)); //Output 5

console.log(Math.ceil(4.01));   //OutPut 5

console.log(Math.floor(5.8));   //OutPut 5

console.log(Math.min(10,40,5,100));  //OutPut 5

console.log(Math.max(2,4,5,1));  //OutPut 5

// Most Important Method

// console.log(Math.random());

// console.log(Math.floor((Math.random()*10)+1));

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);












