function details(){

    let obj = {
        Name : document.getElementById("name").value,
        EmailId : document.getElementById("email").value,
        PhoneNumber : document.getElementById("phone").value,
        Date : document.getElementById("call").value,
        Time : document.getElementById("time").value
    }
    // let userDetails = document.getElementById("email").value;

    localStorage.setItem(obj.EmailId,JSON.stringify(obj));
    document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("phone").value = " ";
    document.getElementById("call").value = " ";
    document.getElementById("time").value = " ";

    let container = document.getElementById("first-class");
    let container1 = document.querySelector(".class2");
    let ele1 = document.createElement("ul");
    let ele2 = document.createElement("li");
    let ele3 = document.createTextNode(`${obj.Name} ${obj.EmailId} ${obj.PhoneNumber} ${obj.Date} ${obj.Date}`);
    let delBtn = document.createElement("input");
    delBtn.type = "button";
    delBtn.value = "Delete";
    delBtn.onclick=()=>{
        localStorage.removeItem(obj.EmailId);
        ele1.removeChild(ele2);
    }
    ele2.appendChild(ele3);
    ele2.appendChild(delBtn);
    ele1.appendChild(ele2);
    container.insertBefore(ele1,container1);
    

}