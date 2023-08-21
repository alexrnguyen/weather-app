import { createSearchbar } from "./ui/searchbar";
import { createWeatherInfo } from "./ui/weather-info";

const initializeWebsite = async () => {
  document.body.appendChild(createSearchbar());
  document.body.appendChild(createWeatherInfo());
};

initializeWebsite();
