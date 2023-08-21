import { updateWeatherInfo } from "./weather-info";

const createSearchbar = () => {
  const searchbar = document.createElement("input");
  searchbar.type = "text";
  searchbar.id = "searchbar";
  searchbar.placeholder = "Enter a city";

  searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      updateWeatherInfo(searchbar.value);
    }
  });
  return searchbar;
};

export default createSearchbar;
