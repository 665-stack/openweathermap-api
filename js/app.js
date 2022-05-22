const API_KEY = `f77a70fc22db25210b61e819bcebce52`;
const searchTempetature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY
        }`;
    fetch(url)
        .then(res => res.json())
        .then(data => diplayTemperature(data));
}
const diplayTemperature = temperature => {
    console.log(temperature);
}