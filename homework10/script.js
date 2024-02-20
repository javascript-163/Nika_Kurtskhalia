let submit = document.querySelector(".submit");
let submit2 = document.querySelector(".submit2");
let weather = document.querySelector(".weather");
let windSpeed = document.querySelector(".windSpeed");

function findTemperature(lon, lat) {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,rain,windspeed_10m`;
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        weather.innerHTML = `weather: ${data.current_weather.temperature}`;
        chooseWindImg(data.current_weather.windspeed);
    })
    .catch(error => console.error('Error:', error));
}

function findLonLat(url) {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let lon = data[0].lon;
        let lat = data[0].lat;
        findTemperature(lon, lat)
    })
    .catch(error => console.error('Error:', error));
};

function chooseWindImg(speed) {
    windSpeed.style.display = "block";
    if(speed < 20) {
        windSpeed.src = "./images/wind1.png";
    } else if(speed < 40) {
        windSpeed.src = "./images/wind2.png";
    } else {
        windSpeed.src = "./images/wind3.png";
    }
}
    
submit.addEventListener('click', () => {
    let lon = document.querySelector(".longitute").value;
    let lat = document.querySelector(".latitute").value;
    findTemperature(lon, lat);
});

submit2.addEventListener('click', () => {
    let location = document.querySelector(".location").value;
    let url = `https://geocode.maps.co/search?q=${location}`;
    findLonLat(url);
});

