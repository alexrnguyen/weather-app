import { createWeatherInfo, updateWeatherInfo } from "./ui/weather-info";
import "./css/style.css";
import createHeader from "./ui/header";
import createFooter from "./ui/footer";
import { createForecastTable } from "./ui/forecast";

const initializeWebsite = async () => {
  const loader = document.createElement("div");
  loader.classList.toggle("hidden");
  loader.classList.add("loader");
  document.body.appendChild(loader);
  document.body.appendChild(createHeader());
  document.body.appendChild(createWeatherInfo());
  document.body.appendChild(createForecastTable());
  updateWeatherInfo("Edmonton");
  document.body.appendChild(createFooter());
};

initializeWebsite();
