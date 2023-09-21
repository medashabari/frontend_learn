// const tinderuser = new Object() - singleton

const tinderuser = {} // non singleton

tinderuser.id = "123abc"
tinderuser.name = "shan"
tinderuser.isLoggedIn = false
// console.log(tinderuser)


const regulaUser = {
    email:"some@gmail.com",
    fullname : {
        userFullname :{
            firstname:"Shabari",
            lastname : "meda"
        }
    }
}

// console.log(regulaUser["fullname"]["userFullname"]["firstname"])


// // But what is user name is not exits

// console.log(regulaUser.fullname?.userFullname?.firstname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    4:"a",
    5:"b"
}
const obj5 = {
    10:"a",
    10:"b"
}


// const obj3 = {obj1,obj2}
// console.log(obj3)
// // combine objects

// const obj4 = Object.assign({},obj1, obj2,obj5)
// console.log(obj4)

// const obj6 = { ...obj1, ...obj2}
// console.log(obj6)

// console.log(tinderuser)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty("isLoggedIn"))


course = {
    coursename : "Javascript",
    price : 999,
    courseInstructor:"Hithesh"
}

// Destructure and take what you want

const {coursename,courseInstructor:instructor} = course

console.log(coursename,instructor)