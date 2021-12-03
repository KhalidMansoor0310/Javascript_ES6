// foreach/map/filter/reduce 

// for each used to iterate an array only
let arr = ['khalid mansoor','MUHAMMAD AQIB','salman khan','muhammad ishaq']

arr.forEach((items,index)=>{
    console.log(items + " is at "+index)
})

//map function is used to return a new array and we could also operate on that array
const new_map_arr = arr.map((items)=>{
    return items+" Islamian"
})

console.log(new_map_arr[0])

numbers = [5,10,15,20,25,30]
//filter function is same as map but it can filter according to a condition but return always a new array
const new_arr_filter = arr.filter((items)=>{
    return items > 5;
})
console.log(new_arr_filter)

// reduce function 
