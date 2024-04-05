let increase = document.querySelector(".button-inc");
let decrease = document.querySelector(".button-dec");
let image = document.querySelector(".image");

let change = 20;

increase.addEventListener("click", () => {
    image.style.width = image.width + change + "px"
});

decrease.addEventListener("click", () => {
    image.style.width = image.width - change + "px"
});

// 2
let header = document.querySelector(".header-2");
let button2 = document.querySelector(".button-2");

button2.addEventListener("click", () => {
    if(header.innerText === "BLUE") {
        header.innerText = "RED";
        header.style.color = "red";
    } else if (header.innerText === "RED"){
        header.innerText = "GREEN";
        header.style.color = "green";
    } else {
        header.innerText = "BLUE";
        header.style.color = "blue";
    }
});

// 3
let text = document.querySelector(".text-3");
let button3 = document.querySelector(".button-3");

button3.addEventListener("click", () => {
    if(text.style.display === "block") {
        text.style.display = "none";
        button3.innerText = "show";
    } else {
        text.style.display = "block";
        button3.innerText = "hide";
    }
})
