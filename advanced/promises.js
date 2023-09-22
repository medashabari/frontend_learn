const promiseOne = new Promise(function(resolve,reject){
    // Do async task
    // Do calls,cryptography,network
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shabari",email:"shabari@gmail.com"})
    },1000)
})

promiseThree.then(function(userdetails){
    console.log(userdetails)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error){
            resolve({username:"HAri",email:"shabari@gmail.com"})
        } else {
            reject('Error Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(() => {
    console.log("The promise is either resolved or rejected")
})


