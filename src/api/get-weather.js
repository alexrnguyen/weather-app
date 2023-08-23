const config = {
  API_KEY: "2a7887d45f054c1382672559231708",
};

const getWeather = async (cityName) => {
  try {
    const loader = document.querySelector(".loader");
    loader.classList.toggle("hidden");
    const response = await fetch(
      // eslint-disable-next-line no-undef
      `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${cityName}`
    );
    loader.classList.toggle("hidden");
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
