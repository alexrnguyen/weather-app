import getWeather from "../api/get-weather";
import QuestionMark from "../assets/question-mark.svg";

const createWeatherInfo = () => {
  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.id = "weather-info-container";

  const locationInfoContainer = document.createElement("div");
  locationInfoContainer.id = "location-info-container";

  const dateTimeInfoContainer = document.createElement("div");
  dateTimeInfoContainer.id = "date-time-info-container";

  const conditionsImage = document.createElement("img");
  conditionsImage.id = "conditions-image";

  const tempContainer = document.createElement("div");
  tempContainer.id = "temp-container";

  const conditionsContainer = document.createElement("div");
  conditionsContainer.id = "conditions-container";

  const feelsLikeContainer = document.createElement("div");
  feelsLikeContainer.id = "feels-like-container";

  weatherInfoContainer.appendChild(locationInfoContainer);
  weatherInfoContainer.appendChild(dateTimeInfoContainer);
  weatherInfoContainer.appendChild(conditionsImage);
  weatherInfoContainer.appendChild(tempContainer);
  weatherInfoContainer.appendChild(conditionsContainer);

  return weatherInfoContainer;
};

const clearWeatherInfo = () => {
  document.getElementById("location-info-container").textContent = "";
  document.getElementById("date-time-info-container").textContent = "";
  document.getElementById("conditions-image").src = "";
  document.getElementById("temp-container").textContent = "";
  document.getElementById("conditions-container").textContent = "";
};

const updateWeatherInfo = async (cityName) => {
  // DOM Elements
  const { units } = document.getElementById("units-switcher").dataset;
  const locationInfoContainer = document.getElementById(
    "location-info-container"
  );
  const dateTimeInfoContainer = document.getElementById(
    "date-time-info-container"
  );
  const conditionsImage = document.getElementById("conditions-image");
  const tempContainer = document.getElementById("temp-container");
  const conditionsContainer = document.getElementById("conditions-container");
  // Retrieve weather data from API
  const weatherData = await getWeather(cityName);

  // Handle failure to retrieve data
  if (!weatherData) {
    clearWeatherInfo();
    locationInfoContainer.textContent = "City not found!";
    conditionsImage.src = QuestionMark;
    return;
  }
  locationInfoContainer.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

  const dateTime = new Date(weatherData.location.localtime).toLocaleDateString(
    "en-CA",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  dateTimeInfoContainer.textContent = dateTime;
  conditionsImage.src = `https://${weatherData.current.condition.icon}`;

  if (units === "celsius") {
    tempContainer.textContent = `${
      weatherData.current.temp_c
    }${String.fromCharCode(176)}C`;
  } else {
    tempContainer.textContent = `${
      weatherData.current.temp_f
    }${String.fromCharCode(176)}F`;
  }

  conditionsContainer.textContent = weatherData.current.condition.text;
};

export { createWeatherInfo, updateWeatherInfo };
