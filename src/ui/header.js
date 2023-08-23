import createSearchbar from "./searchbar";
import createUnitsSwitcher from "./units-switcher";

// Create the header of the webpage (includes logo, searchbar, and units switcher)
const createHeader = () => {
  const headerContainer = document.createElement("header");

  const logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "WeatherToday";

  headerContainer.appendChild(logo);
  headerContainer.appendChild(createSearchbar());
  headerContainer.appendChild(createUnitsSwitcher());

  return headerContainer;
};

export default createHeader;
