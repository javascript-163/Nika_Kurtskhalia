function registerUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;

    let userData = localStorage.getItem("userData");
    
    let person = {
        username, password, firstName, lastName, age, location
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
}