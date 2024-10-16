const locationInput = document.getElementById('location');
const getWeatherBtn = document.getElementById('get-weather');
const weatherDataDiv = document.getElementById('weather-data');
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

getWeatherBtn.addEventListener('click', getWeather);

function getWeather() {
	const location = locationInput.value;
	const url = 'https:/api.openweathermap.org/data/2.5/weather?g=$(location}&units=metric&appid=${apiKey}';
	
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weatherData = `
				<h2>${data.name}, ${data.sys.country}</h2>
				<p>Temperature: ${data.main.temp}°C</p>
				<p>Weather: ${data.weather[0].description}</p>
				<p>Humidity: ${data.main.humidity}%</p>
				<p>Wind Speed: ${data.wind.speed} m/s</p>
			`;
			weatherDataDiv.innerHTML = weatherData;
		})
		.catch(error => console.error(error));
}
