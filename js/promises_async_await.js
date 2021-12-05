// A JavaScript Promise object can be:



// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

const one = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am function one");
            resolve();
        },5000)
    });
}


const two = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am function two");
            resolve();
        },1000)
    });
}

const three = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("i am function three");
            resolve();
        },3000)
    });
}
two().then(()=>{
    three().then(()=>{
        one().then(()=>{
            console.log("Work is done")
        })
    })
})

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// now time to use async and await 
//The keyword async before a function makes the function return a promise:
//The keyword await before a function makes the function wait for a promise:
const  run = async ()=>{
    await two();
    await three();
    await one();
}