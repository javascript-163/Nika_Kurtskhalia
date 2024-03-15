const url = `https://api.themoviedb.org/3/movie/popular?api_key=0b7b5050774bc37ab633f2e09326102e&language=en-US&page=1`;

const displayTopMovies = (data) => {
    let curSlide = 0;
    const next = document.querySelector(".app-main-top3-img-button-right");
    const previous = document.querySelector(".app-main-top3-img-button-left");
    previous.addEventListener("click", () => {
        if(curSlide <= 0) {
            curSlide = 10;
        }
        changePhoto(curSlide--);
    });

    next.addEventListener("click", () => {
        if(curSlide >= 10) {
            curSlide = 0;
        }
        changePhoto(curSlide++);
    });


    function changePhoto(curSlide) {
        const mainImg = document.querySelector(".app-main-top3-img");
        const mainImgheader = document.querySelector(".app-main-top3-header");
        const mainImgtext = document.querySelector(".app-main-top3-text");

        mainImg.src = `http://image.tmdb.org/t/p/w1280${data.results[curSlide].backdrop_path}`;
        mainImgheader.innerHTML = data.results[curSlide].original_title;
        mainImgtext.innerHTML = data.results[curSlide].overview;
    }

    autoSlide();
    
    function autoSlide() {
        changePhoto(curSlide);
        curSlide++;
        if(curSlide >= 10) {
            curSlide = 0;
        }       
        setTimeout(autoSlide, 5000);

    }
}

const displayAllMovies = (data, page) => {
    let cards = document.querySelectorAll(".app-main-content-card");
    if(page===1) {
        cards.forEach(card => {
            card.remove();
        })
    }
    const container = document.querySelector('.app-main-content');
    data.results.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('app-main-content-card');
        const poster = document.createElement('img');
        poster.src = `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
        poster.alt = movie.id;
        poster.classList.add('app-main-content-card-img');

        const movieName = document.createElement('h5');
        movieName.innerHTML = movie.original_title
        movieName.classList.add('app-main-content-card-moviename');

        card.appendChild(poster);
        card.appendChild(movieName);
        container.appendChild(card);
    });
}

const fetchMovies = async (url) => {
    const response = await fetch(
        url
      );
      const data = await response.json()
      displayTopMovies(data);
      displayAllMovies(data);
};

const fetchSearchedMovies = async (url, page) => {
    const response = await fetch(
        url
      );
      const data = await response.json()
      displayAllMovies(data, page);
};

let searchInput = document.querySelector(".app-main-search");
let loadMore = document.querySelector(".app-main-content-loadmore");
let page = 1;

searchInput.addEventListener("change", () => {
    if(searchInput.value !== "") {
        let url =  `https://api.themoviedb.org/3/search/movie?api_key=0b7b5050774bc37ab633f2e09326102e&language=en-US&query=${searchInput.value}&page=1`;
        fetchSearchedMovies(url, 1);
    } else {
        let url =  `https://api.themoviedb.org/3/movie/popular?api_key=0b7b5050774bc37ab633f2e09326102e&language=en-US&page=1`;
        fetchSearchedMovies(url, 1);
    }
});

loadMore.addEventListener("click", () => {
    page++;
    if(searchInput.value !== "") {
        let url =  `https://api.themoviedb.org/3/search/movie?api_key=0b7b5050774bc37ab633f2e09326102e&language=en-US&query=${searchInput.value}&page=${page}`;
        fetchSearchedMovies(url, page);
    } else {
        let url =  `https://api.themoviedb.org/3/movie/popular?api_key=0b7b5050774bc37ab633f2e09326102e&language=en-US&page=${page}`;
        fetchSearchedMovies(url, page);
    }
})

fetchMovies(url);

//burger menu script

let menu = document.querySelector(".app-header-menu");
let xmark = document.querySelector(".app-header-xmarkIcon");
let burger = document.querySelector(".app-header-burgerIcon");

burger.addEventListener('click', () => {
    menu.classList.add("show")
    xmark.style.display = "block";
    burger.style.display = "none";
});

xmark.addEventListener('click', () => {
    menu.classList.remove("show")
    xmark.style.display = "none";
    burger.style.display = "inline-block";
});


//logout button script


