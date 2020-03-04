filldata = () =>{
    var data = JSON.parse(window.localStorage.getItem("data"));
    var str = "";
    str += "<td>"+data["username"]+"</td>";
    str += "<td>"+data["email"]+"</td>";
    str += "<td>"+data["password"]+"</td>";
    document.querySelector("#myRow").insertAdjacentHTML('beforeend',str);

}


filldata();