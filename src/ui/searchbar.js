import { updateWeatherInfo } from "./weather-info";

// Create the searchbar that prompts the user to enter a city to retrieve weather information
const createSearchbar = () => {
  const searchbar = document.createElement("input");
  searchbar.type = "text";
  searchbar.id = "searchbar";
  searchbar.placeholder = "Enter a city";

  // Search for the inputted city when the enter key is pressed
  searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateWeatherInfo(searchbar.value);
    }
  });
  return searchbar;
};

export default createSearchbar;
