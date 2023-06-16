const inputText = document.getElementById("city");
const submitBtn = document.getElementById("submit")

const citySpan = document.querySelector("[data-city]");
const regionSpan = document.querySelector("[data-region]");
const countrySpan = document.querySelector("[data-country]");
const tempSpan = document.querySelector("[data-temp]");
const humidSpan = document.querySelector("[data-humid]");
const windSpan = document.querySelector("[data-wind]");

async function getWeather(city) {
    let weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=5603a1d2920244628f702809231406&q=${city}`)
    weather = await weather.json();
    console.log(weather)
    renderInfo(weather)
}

function renderInfo(info) {
    citySpan.textContent = info.location.name;
    regionSpan.textContent = info.location.region;
    countrySpan.textContent = info.location.country;
    tempSpan.textContent = info.current.temp_f;
    humidSpan.textContent = info.current.humidity;
    windSpan.textContent = info.current.wind_mph;
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(inputText.value);
    inputText.value = "";
})
