const inputText = document.getElementById("city");
const submitBtn = document.getElementById("submit")

async function getWeather(city) {
    let weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=5603a1d2920244628f702809231406&q=${city}`)
    weather = await weather.json();
    console.log(weather)
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(inputText.value);
})
