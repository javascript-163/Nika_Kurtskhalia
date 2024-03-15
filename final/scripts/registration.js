let form = document.querySelector(".app-registration-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    registerUser();
});

function registerUser() {
    let username = document.getElementById("username").value;
    let mail = document.getElementById("email").value;
    let fullname = document.getElementById("fullname").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;

    let usernameValidator = /^\S+$/;
    let mailValidator = /^([a-z\d\_+.-]+){1,300}@([a-z\d-]+)\.([a-z]+)$/;
    let fullnameValidator = /^([\w]{2,})+\s+([\w\s]{2,})+$/;
    let passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(usernameValidator.test(username) === true &&
       mailValidator.test(mail) === true &&
       fullnameValidator.test(fullname) === true &&
       age > 0 && age < 200 &&
       passwordValidator.test(password) === true
    ) {
        let userData = localStorage.getItem("userData");
        
        let person = {
            username, mail, fullname, age, password
        }
    
        if (userData !== null && userData.length) {
            userData = JSON.parse(userData);
            userData.push(person);
            localStorage.setItem("userData", JSON.stringify(userData));
        } else {
            userData = [];
            userData.push(person);
    
            localStorage.setItem("userData", JSON.stringify(userData));
        }   

        window.location = "login.html";

    } else {
        alert("Enter Proper Values");
    }
}