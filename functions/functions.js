function fun() {
    console.log("a")
}

a =function() {
    console.log("a")
} 

// a()
// fun()

// function addTwoNumbers(num1,num2) {
//     console.log(num1,num2);
// }

// const res = addTwoNumbers(3,4)
// console.log(res)



function addTwoNumbers1(num1,num2) {
    let res = num1+num2
    return res
}

const res1 = addTwoNumbers1(3,4)
console.log(res1)
