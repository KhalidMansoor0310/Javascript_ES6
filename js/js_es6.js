// let vs var vs const 
// var declarations are globally scoped or function scoped 
// while let and const are block scoped. var variables can be updated
// and re-declared within its scope; let variables can be updated but not re-declared; 
// const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.

var a = 10

console.log(`value of a = ${a}`)

var a = 20

console.log(a)

// let 

let b = 10
console.log(b)

let b = 20 //will give an error its because it has declared once