let result = document.getElementById("result")
let searchBtn = document.getElementById("search-btn")
let cityRef = document.getElementById("city")

let key = "d885aa1d783fd13a55050afeef620fcb";

//function to fetch weather deatils from api and display them...
let getWeather = () => {
    
    let cityName = cityRef.value;

    if (cityName.length === 0) {
        result.innerHTML = `<h3 class="msg">please enter a city name</h3>`
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

        cityRef.value = "";

        fetch(url)
            .then((res)=>res.json())
            .then((data) => {
                console.log(data);

                result.innerHTML = `
                <h2>${data.name}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />
                <h1>${data.main.temp} &#176</h1>
                <div class='temp-container'>
                <div>
                    <h4 class="title">Min</h4>
                    <h4 class="temp">${data.main.temp_min} </h4>
                </div>
                <div>
                    <h4 class="title">Max</h4>
                    <h4 class="temp">${data.main.temp_max} </h4>
                </div>
                </div>
                `;
            })
            .catch(() => {
                result.innerHTML=`<h3 class="msg">City Not Found</h3>`
            })
        
    }

}

searchBtn.addEventListener("click", getWeather)
window.addEventListener("load", getWeather)