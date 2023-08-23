import { createWeatherInfo, updateWeatherInfo } from "./ui/weather-info";
import "./css/style.css";
import createHeader from "./ui/header";
import createFooter from "./ui/footer";

const initializeWebsite = async () => {
  document.body.appendChild(createHeader());
  document.body.appendChild(createWeatherInfo());
  updateWeatherInfo("Edmonton");
  document.body.appendChild(createFooter());
};

initializeWebsite();
