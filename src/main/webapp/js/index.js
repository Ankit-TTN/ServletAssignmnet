register = () => {
    let fd = new FormData();
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;

    fd.append("username",username);
    fd.append("email",email);
    fd.append("pass",pass);

    fetch('http://localhost:8080/ServletAssignmnet/register',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
       },
       body: urlencodeFormData(fd)
      }).then((response) => {
         return response.json();
       })
       .then((data) => {
         window.localStorage.setItem("data",JSON.stringify(data));
         console.log(data);
         window.location.href = "http://localhost:8080/ServletAssignmnet/data.html";
      });
}


tabularData = (data) => {
    const container = document.querySelector(".container");
    container.innerHtml = "";
}


function urlencodeFormData(fd){
    var params = new URLSearchParams();
    for(var pair of fd.entries()){
        typeof pair[1]=='string' && params.append(pair[0], pair[1]);
    }
    return params.toString();
}



