let login = document.querySelector(".app-form-submit");

login.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("userData"));
    let username = document.querySelector(".app-input-username").value;
    let password = document.querySelector(".app-input-password").value;
    let userIsRegistered = false;
    data.forEach(user => {
        if(user.username === username && user.password === password) {
            userIsRegistered = true;
        }
    });

    if(userIsRegistered) {
        window.location = "welcome.html"
    }
})