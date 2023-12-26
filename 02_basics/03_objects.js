// singleton

// Object literals


// Object.create

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser = {
    first: 'Joe',
    last: 'Doe',
    "Full Name": "Joe Doe",
    age: 30,
    location: "Lahore",
    email: "test@gmail.com",
    isLoogedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "hello"
}




console.log(jsUser.age)
console.log(jsUser["email"])
console.log(jsUser["Full Name"])
console.log(jsUser[mySym])

console.log(mySym === mySym)


jsUser.email = "abdul@chatgpt.com"

jsUser.greeting = function(){
    console.log("hello js user")
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this["Full Name"]}`)
}

// Object.freeze(jsUser)

jsUser.greeting()
jsUser.greeting2()