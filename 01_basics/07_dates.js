// Dates

let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)

console.log(myCreatedDate.toDateString())


console.log(new Date("2023-01-14"))


let myTimeStamp = Date.now();


console.log(myTimeStamp)


const newDate = new Date();

newDate.toLocaleString('default', {
    weekday: 'long',
})






