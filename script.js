const APIKey = "521fc1af407e323ef8f43c5f23022b1a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button"); 
let weatherIcon = document.querySelector (".container");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temperature").innerHTML =Math.round (data.main.temp) + " °C";
    document.querySelector(".info-humidity").innerHTML =data.main.humidity + " %";
    document.querySelector(".info-wind").innerHTML =data.wind.speed + " k/mh";
    document.querySelector(".description").innerHTML =data.weather[0].main;

    if(data.weather[0].main == "Rain"){
        weatherIcon.Style.backgroundImage = url('images/cloudy.jpeg')
    }
    else if(data.weather[0].main == "Clear"){
        var img = document.getElementById('weatherPic');
        img.src = "images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rainy"){
        var img = document.getElementById('weatherPic');
        img.src = "images/rain.jpeg";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.webp";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.jpeg";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/cloudyfairy.jpeg";
    }



}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

