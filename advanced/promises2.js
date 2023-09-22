// const promiseOne  = new Promise(function(resolve,reject){
//     let error=true;
//     if(!error){
//         resolve({"s":1,'a':2})
//     } 
//     else{
//         reject("Something went wrong")
//     }
// })

// promiseOne.then(function(data){
//     console.log(data)
// })
// .catch(function(data){
//     console.log(data);
// })

const fetch = require('node-fetch');

fetch('https://randomuser.me/api/')
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
