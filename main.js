
const usernameinput = document.querySelector("#username");
const passwordinput = document.querySelector("#password");
const button = document.querySelector(".continue")

const username = "name" ;
const password = "1111" ;

button.addEventListener("click" , (e) => {

    if (usernameinput.value === username && passwordinput.value === password){
        window.location.href = "home.html";
    }else{
        alert ("wrong username or password");
        
    }
});