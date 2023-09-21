// for 

const arr = [1,2,3,4]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }

// for of

// for (const val of arr) {
//     console.log(val)
// }

// const s = "Hello"
// for (const i of s) {
//     console.log(i)  
// }

// Maps

const map = new Map()
map.set("state","Ap")
map.set("us","Ap")
console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key,val] of map) {
    console.log(key,val)
}


const obj = {
    'game1':"NFS",
    "game2":"pubj"
}

// Object is not iterable
// for (const key of obj) {
//     console.log(key)
// }

