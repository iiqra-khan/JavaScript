// fetch('ajdllk.com').then().catch().finally()
const promiseOne = new Promise(function (resolve, reject) {
    // do async task
    // db calls
    setTimeout(function(){
        console.log('Async task is complete');   
        resolve()
    }, 1000)
    
})

promiseOne.then(function(){  //this func auto receives an argument
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "iqra", email: "xyz"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "iqra"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user)=> {
//     console.log(user);
//     return user.username
// }) ------- DOESNT WORK--------



promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username) => {   
    //this then after then is called chaining and the value that it gets is the return value of above then
    console.log(username);
})
.catch(function(error){
    console.log(error);   
})
.finally(() => console.log("either resolved or not"))



const promiseFive = new Promise(function(resole, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resole({username: 'js', password: '123'})
        }
        else{
            reject("js went wrong")
        }
    }, 1000)
})

promiseFive
async function consumePromiseFive() {
    try {
        const response = await promiseFive  //promise is obj cannot be consumed like promisefive()
        console.log(response); //when error is false the prgrm will run smoothly
    } catch (error) {
        console.log((error));
        
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
    
// }


// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json() //conversion to json needs time therefore we need to add await to this also otherwise will not work
//         console.log(data);
//     }catch(error){
//         console.log("e: ", error);
        
//     }
    
// }

// getAllUsers() // nothing will be printed without try catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response
})
.then((data)=>{  //chaining or thenable
    console.log(data);
})
.catch((error) => console.log(error))

// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request — as soon as the server responds with headers — even if the server response is an HTTP error status. You can also optionally pass in an init options object as the second argument (see Request).


// see vdo on promise etc 