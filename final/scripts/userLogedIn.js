let username = sessionStorage.getItem("user");
let userLink = document.querySelector(".app-header-userLink");
let logout = document.querySelector(".app-header-logout");
let login = document.querySelector(".app-header-login");
let register = document.querySelector(".app-header-register");
let user = document.querySelector(".app-header-user");

if(username){
    userLink.style.display = "block";
    logout.style.display = "block";
    login.style.display = "none";
    register.style.display = "none";
    user.innerHTML = username;
}

logout.addEventListener("click", () => {
    userLink.style.display = "none";
    logout.style.display = "none";
    login.style.display = "block";
    register.style.display = "block";
    user.innerHTML = "";
    sessionStorage.removeItem("user");
});