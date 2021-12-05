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