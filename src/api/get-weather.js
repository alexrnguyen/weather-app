export const getWeather = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${cityName}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Invalid location");
    }
  } catch (error) {
    throw error;
  }
};
