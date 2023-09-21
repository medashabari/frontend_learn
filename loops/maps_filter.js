const nums = [1,2,3,4,5,6,7,8,9,10]

const res = nums.map( (item) => (item+1))
console.log(res)

const res1 = nums.map( (item)=> {
    return item*10
})

console.log(res1)

const res2 = nums.filter( (item) => ( item>1 )).filter( (item) => (item<5)).map( (item) => (item*10))
console.log(res2)