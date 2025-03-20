const apiKey = "693133986f616111cbd8c0589b69b7e8"; // Replace with your API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    document.getElementById("weatherResult").innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Condition: ${weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" alt="${weather[0].description}">
    `;
}
