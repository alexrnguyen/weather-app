import config from "../config";

// Get the latest weather information for the given city from WeatherAPI.com
const getWeather = async (cityName) => {
  try {
    const response = await fetch(
      // eslint-disable-next-line no-undef
      `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${cityName}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
    throw error;
  }
};

export default getWeather;
