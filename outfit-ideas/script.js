// Note: This API key is a key of free subscription. 
const apiKey = "d5ba1b11b94f8e892caecfe6dc7766f0";
const getLocation = async () => {
    document.querySelector("#location").innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Searching location...`;
    document.querySelector("#weather").innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Searching location...`;
    try {
     const response = await fetch(`https://ipapi.co/json/`);
     const data = await response.json();
     document.querySelector("#location").innerHTML = `${data.city}, ${data.country}`;
     getWeather(data.city);
    }
    catch(error) {
     document.querySelector("#location").innerHTML = `We couldn't find your location. Please check console logs or reload page.`;
    }
}
const getWeather = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
        const response = await fetch(url);
        const data = await response.json();
        document.querySelector("#weather").innerHTML =  `${data.weather[0].description}, ${data.main.temp}°C`;
        writeSuggestion(data.main.temp);
    } catch (error) {
        document.querySelector("#weather").innerHTML = "We couldn't find the information. Please check console logs, or reload page."
    }
}
const writeSuggestion = async (temp) => {
    console.log(temp);
    // Suggestion logic will be here
}
getLocation();