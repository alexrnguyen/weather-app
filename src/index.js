import createSearchbar from "./ui/searchbar";
import createUnitsSwitcher from "./ui/units-switcher";
import { createWeatherInfo } from "./ui/weather-info";
import "./css/style.css";

const initializeWebsite = async () => {
  document.body.appendChild(createSearchbar());
  document.body.appendChild(createUnitsSwitcher());
  document.body.appendChild(createWeatherInfo());
};

initializeWebsite();
