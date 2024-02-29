let submit = document.querySelector(".form-submit");
submit.addEventListener("click", (e) => {
    let mail = document.querySelector(".form-mail-input").value;
    let mailValidator = /^([a-z\d\_+.-]+){1,300}@([a-z\d-]+)\.([a-z]+)$/;
    let message = document.querySelector(".message");
    message.style.display = "block";
    if(mailValidator.test(mail) === false) {
        message.innerHTML = "Please enter valid email address";
        message.style.color = "red";
    } else {
        message.innerHTML = "If it was proper form you would be able to log in";
        message.style.color = "blue";
    }
    e.preventDefault();
});

