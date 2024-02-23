let categories = document.getElementsByClassName("app-filter-item");
let cards = document.getElementsByClassName("app-card");

for(let category of categories) {
    category.addEventListener("click", (e) => {
        for(let category of categories) {
            if(e.target === category) {
                category.style.backgroundColor = "blue";
            } else {
                category.style.backgroundColor = "red";
            }
        }  
        for(let card of cards) {
            let value = card.querySelector(".app-card-info-header").textContent.toUpperCase();
            if(value.includes(category.textContent.toUpperCase())) {
                card.style.display = "block";
            } else if(category.textContent.toUpperCase() === "ALL") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    })
};

function searchProd() {
    let input = document.querySelector(".app-search-input");
    let filter = input.value.toUpperCase();
    for(let card of cards) {
        let value = card.querySelector(".app-card-info-header").textContent.toUpperCase();
        if(value.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

for(let j = 0; j < cards.length; j++) {
    if(j > 3) {
        let imageContaniner = cards[j].querySelectorAll(".app-card-img-container")[0];
        let curSlide = 0;
        autoSlide();
        
        function autoSlide() {
            let images = imageContaniner.querySelectorAll(".app-card-img");
            for(let i=0; i< images.length; i++) {
                images[i].style.display = "none";
            }
            curSlide++;

            if(curSlide >= images.length) {
                curSlide = 0;
            }

            images[curSlide].style.display = "block";
            
            setTimeout(autoSlide, 1000);
        }
    } else{
        let imageContaniner = cards[j].querySelectorAll(".app-card-img-container")[0];
        let imageButtons = cards[j].querySelector(".app-card-img-buttons");
        let previous = cards[j].querySelector(".app-card-previous");
        let next = cards[j].querySelector(".app-card-next");
        let curSlide = 0;
        function slide(num) {
            let images = imageContaniner.querySelectorAll(".app-card-img");
            for(let i=0; i< images.length; i++) {
                images[i].style.display = "none";
            }
            curSlide = curSlide + num;

            if(curSlide >= images.length) {
                curSlide = 0;
            }

            if(curSlide < 0) {
                curSlide = images.length-1;
            }
            
            images[curSlide].style.display = "block";
        }
        
        previous.addEventListener("click", () => {
            slide(-1);
        });

        next.addEventListener("click", () => {
            slide(1);
        });

        cards[j].addEventListener("mouseover", () => {
            imageButtons.style.display = "flex";
        });

        cards[j].addEventListener("mouseout", () => {
            imageButtons.style.display = "none";
        });
    }
}