
let url = 'https://jsonplaceholder.typicode.com/posts'

function axios(method, url, body = null) { //body parameter will only be used for post request only not for others
    // function returns promise 
    return new Promise((resolve, rejects) => {

        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        // validate if data reached or not 
        xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.onreadyState == 4) {
                const records = xhr.response;
                // console.log(records);
                resolve(records)
            }
         }
        //sending request
        xhr.send(JSON.stringify(body));
    })
}

//for getting data from server
axios('GET', url);

// but what if we can send some data using post method to server then 

//and also then and catch will not work with this if you wanna make them work
//then you must have a to return promise by a function 
axios('POST', url, {
    name: "khalid mansoor",
    age: '21',
    department: "BSSE"
}).then((res) => {
    console.log('Message from then block',res)
}).catch((err) => {

})