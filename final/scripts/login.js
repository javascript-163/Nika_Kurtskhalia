let formLogin = document.querySelector(".app-login-form");

formLogin.addEventListener("submit", () => {
    let data = JSON.parse(localStorage.getItem("userData"));
    let username = document.querySelector(".app-input-username").value;
    let password = document.querySelector(".app-input-password").value;
    let userIsRegistered = false;
    data.forEach(user => {
        if(user.username === username && user.password === password) {
            userIsRegistered = true;
            window.location = "index.html";
            sessionStorage.setItem("user", username);
        }
    });

})

