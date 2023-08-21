import { getWeather } from "../api/get-weather";

const createWeatherInfo = () => {
  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.id = "weather-info-container";

  const locationInfoContainer = document.createElement("div");
  locationInfoContainer.id = "location-info-container";

  const timeInfoContainer = document.createElement("div");
  timeInfoContainer.id = "time-info-container";

  weatherInfoContainer.appendChild(locationInfoContainer);
  weatherInfoContainer.appendChild(timeInfoContainer);

  return weatherInfoContainer;
};

const updateWeatherInfo = async (cityName) => {
  const locationInfoContainer = document.getElementById(
    "location-info-container"
  );
  const weatherData = await getWeather(cityName);
  console.log(weatherData);
  locationInfoContainer.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
};

export { createWeatherInfo, updateWeatherInfo };
