// Primitive

// 7 types : String, Number, Boolean, null, undesfined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoeggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 32343482748384328924n

// Reference (Non Primitive)  

// Array, Objects, Functions


const heros = ["shaktiman", "Deep", "Harsh"]
let myObject = {
    name: "Vikas",
    age: 24,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// Stack

let myName = "Vikas Singh"

let anotherName = myName 

myName = "Deepu"

console.log(anotherName);

console.log(myName);

// Heap

let userOne = {
    email: "user@gmail.com",
    upi: "upi@paytm"
}

let userTwo = userOne

userOne.email = "deep@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);