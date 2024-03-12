function showAllCustomer(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/customers/",
        success: function (data){
            console.log(data)
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content+=`
                   <tr>
       <td>${data[i].id}</td>
       <td>${data[i].firstName}</td>
       <td>${data[i].lastName}</td>
       <td><button onclick="deleteCustomer(${data[i].id})">Delete</button></td>
   </tr>`
            }
            document.getElementById("list").innerHTML = content;
        }
    })
}

showAllCustomer();

function createNewCustomer(){
    //chan su kien mac dinh
    // event.preventDefault();
    //lay du lieu
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    //chuyen thanh object
    let newCustomer = {
        firstName: firstName,
        lastName: lastName
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url:"http://localhost:8080/api/customers",
        data: JSON.stringify(newCustomer),
        success: showAllCustomer
    })
}

function deleteCustomer(id) {
    $.ajax({
        type: "DELETE",
        //tên API
        url: `http://localhost:8080//api/customers/${id}`,
        //xử lý khi thành công
        success: showAllCustomer
    });
}