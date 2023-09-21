// object literals

const sym = Symbol("key")
const users = {
    name:"shabarish",
    age:10,
    [sym]:10
}

console.log(users["name"])
console.log(users[sym])
console.log(users)
Object.freeze(users)
users.name = "Hari"
console.log(users)

const data = {
    name:"shabarish",
    age:10,
    [sym]:10
}

data.greeting = function() {
    console.log("HEllo world")
}

data.greeting1 = function() {
    console.log(`HEllo world ${this.name}`)
}
console.log(data.greeting())
console.log(data.greeting)

console.log(data.greeting1())
