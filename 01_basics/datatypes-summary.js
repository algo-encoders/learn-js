// Primitives

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id)
console.log(id === anotherId)
// Reference (Non Primitives)

// Array, Objects, Functions

const bigNumber = 2323432432432432432432222222n

console.log(typeof bigNumber)

// cannot perform math. on bigint and int both should be bigint

const heros = ["Umar", "Abu Bakar"];
let myObj = {
    name: "Abdul",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof heros)
console.log(typeof myFunction)
console.log(typeof myObj)

