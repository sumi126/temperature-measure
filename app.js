
const API_KEY =`b04f2baf9c0556baf1ebd98e353e65a7`;
const searchTemperature = () =>{
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(resp => resp.json())
        .then(data =>{
            displayTemperature(data);
        })
}
const setTemperature = (id,text) =>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setTemperature("city",temperature.name);
    setTemperature("temperature",temperature.main.temp);
    setTemperature("condition",temperature.weather[0].main);

    //set icon
    // const imgIcon = document.getElementById("weather-icon");
    // const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    // imgIcon.setAttribute('src' , url);
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
}


