// callbacks
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

const one = (callback) =>{
    setTimeout(()=>{
        console.log("I am function one")
        callback();
    },3000)
}

const two = (callback) =>{
    setTimeout(()=>{
        console.log("i am function two")
        callback();
    },2000)
}

const three = (callback) =>{
    setTimeout(()=>{
        console.log("i am function three");
        callback();
    },1000)
}

three(()=>{
    two(()=>{
        one(()=>{
            console.log("I have done");
        })
    })
})

// note: asynchronous functionality provider