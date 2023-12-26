// const tindorUser = new Object(); // Singlton object

const tindorUser = {}

tindorUser.id = "12323abc"
tindorUser.name = "John"
tindorUser.isLoggedIn = false

// console.log(tindorUser);



const regularUser = {
    email: "some@gmail.com",
    fullName: {
        firstName: "Alexander",
        lastName: "John"
    }
}

// console.log(regularUser.fullName.firstName)


const obj1 = {
    1: "a",
    2: "b"
}


const obj2 = {
    3: "c",
    4: "d"
}


// console.log(Object.assign({}, obj1, obj2))

// console.log(obj1)


const obj3 = {...obj1, ...obj2}
console.log(obj3)


const users = [
    { id: 0, name: 'Alice' },
    { id: 0, name: 'Alice' },
    { id: 0, name: 'Alice' },
    { id: 0, name: 'Alice' },
    { id: 0, name: 'Alice' },
]


console.log(users[1].id)

console.log(tindorUser)

console.log(Object.keys(tindorUser))
console.log(Object.values(tindorUser))
console.log(Object.entries(tindorUser))


console.log(tindorUser.hasOwnProperty('id'))

