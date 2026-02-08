const apiKey = "YOUR_API_KEY"; // Get free key from openweathermap.org
const result = document.getElementById("weatherResult");

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name</p>";
        return;
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();

        if (data.cod === "404") {
            result.innerHTML = "<p>City not found ❌</p>";
            return;
        }

        result.innerHTML = `
            <div class="weather-card">
                <h2>${data.name}</h2>
                <p>🌡️ Temp: ${data.main.temp} °C</p>
                <p>☁️ Weather: ${data.weather[0].main}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind: ${data.wind.speed} km/h</p>
            </div>
        `;
    } catch (error) {
        result.innerHTML = "<p>Error fetching data</p>";
    }
}
