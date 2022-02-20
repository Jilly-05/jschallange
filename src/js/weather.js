//------------ 날씨 js 시작 ------------//
// SELECT ELEMENTS
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getWeather(lat, lng);
}
function onGeoError(){
    alert("Cant't find you. No weather for you.")
}

function setPosition(){
    navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);    
}

setPosition();

function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&lang=kr`; //language korean에 관한 내용은 api 참고
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name; //동이름
            weather.country = data.sys.country; //나라이름
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
//나라, 도시 설정은 여기서!
function displayWeather(){
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
}

//10분마다 새로고침
setInterval('setPosition()',10000*60);

//----------- 날씨 js 끝 -------------//
