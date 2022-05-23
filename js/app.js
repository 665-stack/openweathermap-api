const API_KEY = `f77a70fc22db25210b61e819bcebce52`;
const searchTempetature = () => {
    const cityInput = document.getElementById('city-name-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => diplayTemperature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const diplayTemperature = temperature => {
    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp)
    setInnerText('weatherCondition', temperature.weather[0].main)

    //set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('weatherIcon');
    imgIcon.setAttribute('src', url)

    console.log(temperature);
}