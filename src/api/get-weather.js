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
    console.log("Invalid location");
    return false;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getWeather;
