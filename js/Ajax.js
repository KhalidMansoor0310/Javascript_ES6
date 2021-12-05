// three main steps in which XMLHttpRequest can be done 
// 1)=> request open(method,url)
// 2)=> request send();
// 3)=> response receive(status,readyState,responseText)

const xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users');

xhr.onreadystatechange=()=>{
    if(xhr.status==200 && xhr.readyState==4){
        const records = this.responseText;
        console.log(records)
    }
}
xhr.send();