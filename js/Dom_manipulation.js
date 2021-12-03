let btn = document.getElementById('btn').addEventListener('click', () => {
    let email = document.getElementById('inputEmail4').value;
    let password = document.getElementById('inputPassword4').value;
    let address1 = document.getElementById('inputAddress').value;
    let address2 = document.getElementById('inputAddress2').value;

   let arr = [email,password,address2,address1]
    console.log(arr)
   let dynamic = document.getElementById('container');
   
   arr.forEach((data)=>{
       let fetch = document.getElementById('container').innerHTML;
     dynamic.innerHTML = `
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data.email}</div>
        <div class="card-body">
          <h5 class="card-title">${data.password}</h5>
          <p class="card-text">${data.address1}</p>
        </div>
      </div>
    </div>`+ fetch;
   })

   


    
});
