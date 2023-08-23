import { createWeatherInfo } from "./ui/weather-info";
import "./css/style.css";
import createHeader from "./ui/header";

const initializeWebsite = async () => {
  document.body.appendChild(createHeader());
  document.body.appendChild(createWeatherInfo());
};

initializeWebsite();
