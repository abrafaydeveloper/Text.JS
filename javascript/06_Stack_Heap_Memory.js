// Stack Memory (Primitive)  

let oneid = "abdulrafay"
let secondid = oneid
secondid = "abdul3210"
console.log(oneid);
console.log(secondid);

// & Heap Memory (Non Primitive)


let oneemail = {
              email : "abdul@321"
}

let secondemail = oneemail

secondemail.email = "rafay@456"

console.log(oneemail.email);
console.log(secondemail.email);