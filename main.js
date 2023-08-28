"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/api/get-weather.js":
/*!********************************!*\
  !*** ./src/api/get-weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");


// Get the latest weather information for the given city from WeatherAPI.com
const getWeather = async cityName => {
  try {
    const response = await fetch(
    // eslint-disable-next-line no-undef
    `https://api.weatherapi.com/v1/forecast.json?key=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY}&q=${cityName}&days=7`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return false;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  API_KEY: "2a7887d45f054c1382672559231708"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/weather-info */ "./src/ui/weather-info.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _ui_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/header */ "./src/ui/header.js");
/* harmony import */ var _ui_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/footer */ "./src/ui/footer.js");
/* harmony import */ var _ui_forecast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/forecast */ "./src/ui/forecast.js");





const initializeWebsite = async () => {
  const loader = document.createElement("div");
  loader.classList.toggle("hidden");
  loader.classList.add("loader");
  document.body.appendChild(loader);
  document.body.appendChild((0,_ui_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
  document.body.appendChild((0,_ui_weather_info__WEBPACK_IMPORTED_MODULE_0__.createWeatherInfo)());
  document.body.appendChild((0,_ui_forecast__WEBPACK_IMPORTED_MODULE_4__.createForecastTable)());
  (0,_ui_weather_info__WEBPACK_IMPORTED_MODULE_0__.updateWeatherInfo)("Edmonton");
  document.body.appendChild((0,_ui_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
};
initializeWebsite();

/***/ }),

/***/ "./src/ui/footer.js":
/*!**************************!*\
  !*** ./src/ui/footer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create footer of the webpage containing a linked to WeatherAPI.com
const createFooter = () => {
  const footerContainer = document.createElement("footer");
  const footerText = document.createElement("p");
  footerText.id = "footer-text";
  footerText.innerHTML = "Powered by <a href='https://www.weatherapi.com/'>WeatherAPI.com</a>";
  footerContainer.appendChild(footerText);
  return footerContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/ui/forecast.js":
/*!****************************!*\
  !*** ./src/ui/forecast.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForecastTable: () => (/* binding */ createForecastTable),
/* harmony export */   updateForecastTable: () => (/* binding */ updateForecastTable)
/* harmony export */ });
/* harmony import */ var _utils_print_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/print-temperature */ "./src/utils/print-temperature.js");


// Create a forecast table
const createForecastTable = () => {
  const forecastContainer = document.createElement("div");
  forecastContainer.id = "forecast-container";
  const forecastTable = document.createElement("table");
  const headers = forecastTable.insertRow();
  const dateHeader = headers.insertCell();
  dateHeader.textContent = "Date";
  const conditionsHeader = headers.insertCell();
  conditionsHeader.textContent = "Conditions";
  conditionsHeader.colSpan = 2;
  const highTempHeader = headers.insertCell();
  highTempHeader.textContent = "High";
  const lowTempHeader = headers.insertCell();
  lowTempHeader.textContent = "Low";
  for (let i = 0; i < 7; i++) {
    const row = forecastTable.insertRow();
    row.className = "forecast-row";
    for (let j = 0; j < 5; j++) {
      const cell = row.insertCell();
      cell.className = "forecast-cell";
      cell.dataset.index = j;
    }
  }
  forecastContainer.appendChild(forecastTable);
  return forecastContainer;
};

// Update the forecast table upon receiving weather data from the API
const updateForecastTable = weatherData => {
  const {
    units
  } = document.getElementById("units-switcher").dataset;
  for (let i = 0; i < 7; i++) {
    const row = document.querySelectorAll(`.forecast-row`)[i];

    // Each row contains a date, icon, conditions, and low/high temperature
    const dateCell = row.childNodes[0];
    const iconCell = row.childNodes[1];
    const conditionsCell = row.childNodes[2];
    const highTempCell = row.childNodes[3];
    const lowTempCell = row.childNodes[4];
    const forecast = weatherData.forecast.forecastday[i];
    const dateString = forecast.date;
    dateCell.textContent = new Date(dateString).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    const forecastIcon = document.createElement("img");
    forecastIcon.className = "forecast-table-icon";
    forecastIcon.src = `https://${forecast.day.condition.icon}`;
    iconCell.innerHTML = "";
    iconCell.appendChild(forecastIcon);
    conditionsCell.textContent = forecast.day.condition.text;

    // Change low/high temperature based on units selected
    if (units === "celsius") {
      highTempCell.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])("celsius", forecast.day.maxtemp_c);
      lowTempCell.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])("celsius", forecast.day.mintemp_c);
    } else {
      highTempCell.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])("fahrenheit", forecast.day.maxtemp_f);
      lowTempCell.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])("fahrenheit", forecast.day.mintemp_f);
    }
  }
};


/***/ }),

/***/ "./src/ui/header.js":
/*!**************************!*\
  !*** ./src/ui/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchbar */ "./src/ui/searchbar.js");
/* harmony import */ var _units_switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units-switcher */ "./src/ui/units-switcher.js");



// Create the header of the webpage (includes logo, searchbar, and units switcher)
const createHeader = () => {
  const headerContainer = document.createElement("header");
  const logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "WeatherToday";
  headerContainer.appendChild(logo);
  headerContainer.appendChild((0,_searchbar__WEBPACK_IMPORTED_MODULE_0__["default"])());
  headerContainer.appendChild((0,_units_switcher__WEBPACK_IMPORTED_MODULE_1__["default"])());
  return headerContainer;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/ui/searchbar.js":
/*!*****************************!*\
  !*** ./src/ui/searchbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info */ "./src/ui/weather-info.js");


// Create the searchbar that prompts the user to enter a city to retrieve weather information
const createSearchbar = () => {
  const searchbar = document.createElement("input");
  searchbar.type = "search";
  searchbar.id = "searchbar";
  searchbar.placeholder = "Enter a city";

  // Search for the inputted city when the enter key is pressed
  searchbar.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__.updateWeatherInfo)(searchbar.value);
    }
  });
  return searchbar;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSearchbar);

/***/ }),

/***/ "./src/ui/units-switcher.js":
/*!**********************************!*\
  !*** ./src/ui/units-switcher.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info */ "./src/ui/weather-info.js");


// Create units switcher which allows the user to switch between celsius and fahrenheit measurements
const createUnitsSwitcher = () => {
  const unitsSwitcher = document.createElement("button");
  unitsSwitcher.id = "units-switcher";
  unitsSwitcher.dataset.units = "celsius";
  unitsSwitcher.textContent = `${String.fromCharCode(176)}C`;
  unitsSwitcher.addEventListener("click", () => {
    if (unitsSwitcher.dataset.units === "celsius") {
      unitsSwitcher.dataset.units = "fahrenheit";
      unitsSwitcher.textContent = `${String.fromCharCode(176)}F`;
    } else {
      unitsSwitcher.dataset.units = "celsius";
      unitsSwitcher.textContent = `${String.fromCharCode(176)}C`;
    }

    // Update weather info if a city is already inputted into the searchbar
    const searchbarInput = document.getElementById("searchbar").value;
    if (searchbarInput !== "") {
      (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__.updateWeatherInfo)(searchbarInput);
    } else {
      // Initial weather info
      (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__.updateWeatherInfo)("Edmonton");
    }
  });
  return unitsSwitcher;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUnitsSwitcher);

/***/ }),

/***/ "./src/ui/weather-info.js":
/*!********************************!*\
  !*** ./src/ui/weather-info.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWeatherInfo: () => (/* binding */ createWeatherInfo),
/* harmony export */   updateWeatherInfo: () => (/* binding */ updateWeatherInfo)
/* harmony export */ });
/* harmony import */ var _api_get_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/get-weather */ "./src/api/get-weather.js");
/* harmony import */ var _assets_question_mark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/question-mark.svg */ "./src/assets/question-mark.svg");
/* harmony import */ var _utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/print-temperature */ "./src/utils/print-temperature.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ "./src/ui/forecast.js");





// Create weather info container (contains location, date/time, and current conditions)
const createWeatherInfo = () => {
  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.id = "weather-info-container";
  const locationInfoContainer = document.createElement("div");
  locationInfoContainer.id = "location-info-container";
  const dateTimeInfoContainer = document.createElement("div");
  dateTimeInfoContainer.id = "date-time-info-container";
  const conditionsImage = document.createElement("img");
  conditionsImage.id = "conditions-image";
  const tempContainer = document.createElement("div");
  tempContainer.id = "temp-container";
  const conditionsContainer = document.createElement("div");
  conditionsContainer.id = "conditions-container";
  const feelsLikeContainer = document.createElement("div");
  feelsLikeContainer.id = "feels-like-container";
  weatherInfoContainer.appendChild(locationInfoContainer);
  weatherInfoContainer.appendChild(dateTimeInfoContainer);
  weatherInfoContainer.appendChild(conditionsImage);
  weatherInfoContainer.appendChild(tempContainer);
  weatherInfoContainer.appendChild(conditionsContainer);
  weatherInfoContainer.appendChild(feelsLikeContainer);
  return weatherInfoContainer;
};

// Clear weather info container contents
const clearWeatherInfo = () => {
  document.getElementById("location-info-container").textContent = "";
  document.getElementById("date-time-info-container").textContent = "";
  document.getElementById("conditions-image").src = "";
  document.getElementById("temp-container").textContent = "";
  document.getElementById("conditions-container").textContent = "";
};

// Update the weather info container upon receiving input from the searchbox
const updateWeatherInfo = async cityName => {
  // DOM Elements
  const {
    units
  } = document.getElementById("units-switcher").dataset;
  const locationInfoContainer = document.getElementById("location-info-container");
  const dateTimeInfoContainer = document.getElementById("date-time-info-container");
  const conditionsImage = document.getElementById("conditions-image");
  const tempContainer = document.getElementById("temp-container");
  const conditionsContainer = document.getElementById("conditions-container");
  const feelsLikeContainer = document.getElementById("feels-like-container");
  // Retrieve weather data from API
  const loader = document.querySelector(".loader");
  loader.classList.toggle("hidden");
  const weatherData = await (0,_api_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
  loader.classList.toggle("hidden");
  (0,_forecast__WEBPACK_IMPORTED_MODULE_3__.updateForecastTable)(weatherData);

  // Handle failure to retrieve data
  if (!weatherData) {
    clearWeatherInfo();
    locationInfoContainer.textContent = "City not found!";
    conditionsImage.src = _assets_question_mark_svg__WEBPACK_IMPORTED_MODULE_1__;
    return;
  }

  // Add weather data to weather info UI
  locationInfoContainer.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
  const dateTime = new Date(weatherData.location.localtime).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  dateTimeInfoContainer.textContent = dateTime;
  conditionsImage.src = `https://${weatherData.current.condition.icon}`;

  // Change temperature based on selected units
  if (units === "celsius") {
    tempContainer.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("celsius", weatherData.current.temp_c);
    feelsLikeContainer.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("celsius", weatherData.current.feelslike_c);
  } else {
    tempContainer.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("fahrenheit", weatherData.current.temp_f);
    feelsLikeContainer.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("fahrenheit", weatherData.current.feelslike_f);
  }
  conditionsContainer.textContent = weatherData.current.condition.text;
};


/***/ }),

/***/ "./src/utils/print-temperature.js":
/*!****************************************!*\
  !*** ./src/utils/print-temperature.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _round_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round-temperature */ "./src/utils/round-temperature.js");


// Return a properly formatted version of the temperature
const printTemperature = (units, temp) => {
  if (units === "celsius") {
    return `${(0,_round_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])(temp)}${String.fromCharCode(176)}C`;
  }
  return `${(0,_round_temperature__WEBPACK_IMPORTED_MODULE_0__["default"])(temp)}${String.fromCharCode(176)}F`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printTemperature);

/***/ }),

/***/ "./src/utils/round-temperature.js":
/*!****************************************!*\
  !*** ./src/utils/round-temperature.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Round the temperature to the nearest integer
const roundTemperature = temp => Math.round(temp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roundTemperature);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* || General Styles */

:root {
  --blue: #2667ff;
  --green: #64f58d;
  --black: #404e4d;
  --white: #ebf2fa;
}

body {
  display: flex;
  flex-direction: column;
  font-family: Lato;
  margin: 0;
  min-height: 100vh;
}

#weather-info-container,
#forecast-container {
  background-color: var(--black);
}

/* || Header */
header {
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  gap: 10px;
  align-items: center;
  background-color: var(--green);
}

#logo {
  font-size: 2rem;
}

#searchbar {
  border-radius: 5px;
  border: 1px solid black;
  height: 2em;
  width: 50%;
}

@media screen and (max-width: 500px) {
  #logo {
    font-size: 1rem;
  }
}

@media screen and (max-width: 650px) {
  #searchbar {
    width: 75%;
  }
}

/* || Units Switcher */
#units-switcher {
  justify-self: end;
  align-self: center;
  border-radius: 20px;
  font-size: 1rem;
  border: 2px solid black;
  padding: 0.5rem 1rem;
}

[data-units="celsius"] {
  background-color: var(--white);
}

[data-units="fahrenheit"] {
  color: white;
  background-color: var(--blue);
}

/* || Weather Info */
#weather-info-container {
  flex: 1;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  color: var(--white);
  text-align: center;
}

#location-info-container {
  font-size: 3em;
}

#date-time-info-container,
#conditions-container {
  font-size: 1.5em;
}

#weather-info-container img {
  width: 64px;
  height: 64px;
  border: none;
}

#temp-container {
  font-size: 2em;
}

/* || Forecast Table */
#forecast-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  margin: 2rem;
}

table,
th,
td {
  border: 2px solid var(--blue);
  border-collapse: collapse;
}

td {
  color: var(--white);
  text-align: center;
  padding: 5px;
}

/* || Footer */
footer {
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
}

a,
a:visited {
  color: inherit;
}

/* || Loader */
/* Source: https://www.w3schools.com/howto/howto_css_loader.asp */
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid var(--blue); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hidden {
  visibility: hidden;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA,cAAc;AACd;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,cAAc;AACd,iEAAiE;AACjE;EACE,0BAA0B,EAAE,eAAe;EAC3C,kCAAkC,EAAE,SAAS;EAC7C,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,MAAM;EACN,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap\");\r\n\r\n/* || General Styles */\r\n\r\n:root {\r\n  --blue: #2667ff;\r\n  --green: #64f58d;\r\n  --black: #404e4d;\r\n  --white: #ebf2fa;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Lato;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n#weather-info-container,\r\n#forecast-container {\r\n  background-color: var(--black);\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--green);\r\n}\r\n\r\n#logo {\r\n  font-size: 2rem;\r\n}\r\n\r\n#searchbar {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #searchbar {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/* || Units Switcher */\r\n#units-switcher {\r\n  justify-self: end;\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  font-size: 1rem;\r\n  border: 2px solid black;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n[data-units=\"celsius\"] {\r\n  background-color: var(--white);\r\n}\r\n\r\n[data-units=\"fahrenheit\"] {\r\n  color: white;\r\n  background-color: var(--blue);\r\n}\r\n\r\n/* || Weather Info */\r\n#weather-info-container {\r\n  flex: 1;\r\n  padding: 2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  color: var(--white);\r\n  text-align: center;\r\n}\r\n\r\n#location-info-container {\r\n  font-size: 3em;\r\n}\r\n\r\n#date-time-info-container,\r\n#conditions-container {\r\n  font-size: 1.5em;\r\n}\r\n\r\n#weather-info-container img {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n}\r\n\r\n#temp-container {\r\n  font-size: 2em;\r\n}\r\n\r\n/* || Forecast Table */\r\n#forecast-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ntable {\r\n  margin: 2rem;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 2px solid var(--blue);\r\n  border-collapse: collapse;\r\n}\r\n\r\ntd {\r\n  color: var(--white);\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n/* || Footer */\r\nfooter {\r\n  background-color: var(--green);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: inherit;\r\n}\r\n\r\n/* || Loader */\r\n/* Source: https://www.w3schools.com/howto/howto_css_loader.asp */\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid var(--blue); /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/question-mark.svg":
/*!**************************************!*\
  !*** ./src/assets/question-mark.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d6dac584e1942ee8019.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1B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ZWF0aGVyLWFwcC8uL3NyYy9hcGkvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvc2VhcmNoYmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3VuaXRzLXN3aXRjaGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9wcmludC10ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlscy9yb3VuZC10ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuLy8gR2V0IHRoZSBsYXRlc3Qgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgdGhlIGdpdmVuIGNpdHkgZnJvbSBXZWF0aGVyQVBJLmNvbVxyXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWcuQVBJX0tFWX0mcT0ke2NpdHlOYW1lfSZkYXlzPTdgXHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcIjJhNzg4N2Q0NWYwNTRjMTM4MjY3MjU1OTIzMTcwOFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVXZWF0aGVySW5mbywgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi91aS93ZWF0aGVyLWluZm9cIjtcclxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vdWkvaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vdWkvZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0VGFibGUgfSBmcm9tIFwiLi91aS9mb3JlY2FzdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRlclwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRlcik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXZWF0aGVySW5mbygpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvcmVjYXN0VGFibGUoKSk7XHJcbiAgdXBkYXRlV2VhdGhlckluZm8oXCJFZG1vbnRvblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxufTtcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiIsIi8vIENyZWF0ZSBmb290ZXIgb2YgdGhlIHdlYnBhZ2UgY29udGFpbmluZyBhIGxpbmtlZCB0byBXZWF0aGVyQVBJLmNvbVxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGZvb3RlclRleHQuaWQgPSBcImZvb3Rlci10ZXh0XCI7XHJcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPVxyXG4gICAgXCJQb3dlcmVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tLyc+V2VhdGhlckFQSS5jb208L2E+XCI7XHJcblxyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xyXG4iLCJpbXBvcnQgcHJpbnRUZW1wZXJhdHVyZSBmcm9tIFwiLi4vdXRpbHMvcHJpbnQtdGVtcGVyYXR1cmVcIjtcclxuXHJcbi8vIENyZWF0ZSBhIGZvcmVjYXN0IHRhYmxlXHJcbmNvbnN0IGNyZWF0ZUZvcmVjYXN0VGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcmVjYXN0Q29udGFpbmVyLmlkID0gXCJmb3JlY2FzdC1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZm9yZWNhc3RUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHJcbiAgY29uc3QgaGVhZGVycyA9IGZvcmVjYXN0VGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgY29uc3QgZGF0ZUhlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGRhdGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0hlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGNvbmRpdGlvbnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbmRpdGlvbnNcIjtcclxuICBjb25kaXRpb25zSGVhZGVyLmNvbFNwYW4gPSAyO1xyXG5cclxuICBjb25zdCBoaWdoVGVtcEhlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGhpZ2hUZW1wSGVhZGVyLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGNvbnN0IGxvd1RlbXBIZWFkZXIgPSBoZWFkZXJzLmluc2VydENlbGwoKTtcclxuICBsb3dUZW1wSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGZvcmVjYXN0VGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gXCJmb3JlY2FzdC1yb3dcIjtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICBjZWxsLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtY2VsbFwiO1xyXG4gICAgICBjZWxsLmRhdGFzZXQuaW5kZXggPSBqO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUYWJsZSk7XHJcbiAgcmV0dXJuIGZvcmVjYXN0Q29udGFpbmVyO1xyXG59O1xyXG5cclxuLy8gVXBkYXRlIHRoZSBmb3JlY2FzdCB0YWJsZSB1cG9uIHJlY2VpdmluZyB3ZWF0aGVyIGRhdGEgZnJvbSB0aGUgQVBJXHJcbmNvbnN0IHVwZGF0ZUZvcmVjYXN0VGFibGUgPSAod2VhdGhlckRhdGEpID0+IHtcclxuICBjb25zdCB7IHVuaXRzIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRzLXN3aXRjaGVyXCIpLmRhdGFzZXQ7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5mb3JlY2FzdC1yb3dgKVtpXTtcclxuXHJcbiAgICAvLyBFYWNoIHJvdyBjb250YWlucyBhIGRhdGUsIGljb24sIGNvbmRpdGlvbnMsIGFuZCBsb3cvaGlnaCB0ZW1wZXJhdHVyZVxyXG4gICAgY29uc3QgZGF0ZUNlbGwgPSByb3cuY2hpbGROb2Rlc1swXTtcclxuICAgIGNvbnN0IGljb25DZWxsID0gcm93LmNoaWxkTm9kZXNbMV07XHJcbiAgICBjb25zdCBjb25kaXRpb25zQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzJdO1xyXG4gICAgY29uc3QgaGlnaFRlbXBDZWxsID0gcm93LmNoaWxkTm9kZXNbM107XHJcbiAgICBjb25zdCBsb3dUZW1wQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzRdO1xyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV07XHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZm9yZWNhc3QuZGF0ZTtcclxuICAgIGRhdGVDZWxsLnRleHRDb250ZW50ID0gbmV3IERhdGUoZGF0ZVN0cmluZykudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tQ0FcIiwge1xyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBmb3JlY2FzdEljb24uY2xhc3NOYW1lID0gXCJmb3JlY2FzdC10YWJsZS1pY29uXCI7XHJcbiAgICBmb3JlY2FzdEljb24uc3JjID0gYGh0dHBzOi8vJHtmb3JlY2FzdC5kYXkuY29uZGl0aW9uLmljb259YDtcclxuICAgIGljb25DZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpY29uQ2VsbC5hcHBlbmRDaGlsZChmb3JlY2FzdEljb24pO1xyXG4gICAgY29uZGl0aW9uc0NlbGwudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5kYXkuY29uZGl0aW9uLnRleHQ7XHJcblxyXG4gICAgLy8gQ2hhbmdlIGxvdy9oaWdoIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHVuaXRzIHNlbGVjdGVkXHJcbiAgICBpZiAodW5pdHMgPT09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICAgIGhpZ2hUZW1wQ2VsbC50ZXh0Q29udGVudCA9IHByaW50VGVtcGVyYXR1cmUoXHJcbiAgICAgICAgXCJjZWxzaXVzXCIsXHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1heHRlbXBfY1xyXG4gICAgICApO1xyXG4gICAgICBsb3dUZW1wQ2VsbC50ZXh0Q29udGVudCA9IHByaW50VGVtcGVyYXR1cmUoXHJcbiAgICAgICAgXCJjZWxzaXVzXCIsXHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1pbnRlbXBfY1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgICBcImZhaHJlbmhlaXRcIixcclxuICAgICAgICBmb3JlY2FzdC5kYXkubWF4dGVtcF9mXHJcbiAgICAgICk7XHJcbiAgICAgIGxvd1RlbXBDZWxsLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgICBcImZhaHJlbmhlaXRcIixcclxuICAgICAgICBmb3JlY2FzdC5kYXkubWludGVtcF9mXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlRm9yZWNhc3RUYWJsZSwgdXBkYXRlRm9yZWNhc3RUYWJsZSB9O1xyXG4iLCJpbXBvcnQgY3JlYXRlU2VhcmNoYmFyIGZyb20gXCIuL3NlYXJjaGJhclwiO1xyXG5pbXBvcnQgY3JlYXRlVW5pdHNTd2l0Y2hlciBmcm9tIFwiLi91bml0cy1zd2l0Y2hlclwiO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBoZWFkZXIgb2YgdGhlIHdlYnBhZ2UgKGluY2x1ZGVzIGxvZ28sIHNlYXJjaGJhciwgYW5kIHVuaXRzIHN3aXRjaGVyKVxyXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nby5pZCA9IFwibG9nb1wiO1xyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIldlYXRoZXJUb2RheVwiO1xyXG5cclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVNlYXJjaGJhcigpKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVW5pdHNTd2l0Y2hlcigpKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcclxuIiwiaW1wb3J0IHsgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi93ZWF0aGVyLWluZm9cIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgc2VhcmNoYmFyIHRoYXQgcHJvbXB0cyB0aGUgdXNlciB0byBlbnRlciBhIGNpdHkgdG8gcmV0cmlldmUgd2VhdGhlciBpbmZvcm1hdGlvblxyXG5jb25zdCBjcmVhdGVTZWFyY2hiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHNlYXJjaGJhci50eXBlID0gXCJzZWFyY2hcIjtcclxuICBzZWFyY2hiYXIuaWQgPSBcInNlYXJjaGJhclwiO1xyXG4gIHNlYXJjaGJhci5wbGFjZWhvbGRlciA9IFwiRW50ZXIgYSBjaXR5XCI7XHJcblxyXG4gIC8vIFNlYXJjaCBmb3IgdGhlIGlucHV0dGVkIGNpdHkgd2hlbiB0aGUgZW50ZXIga2V5IGlzIHByZXNzZWRcclxuICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdXBkYXRlV2VhdGhlckluZm8oc2VhcmNoYmFyLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gc2VhcmNoYmFyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoYmFyO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuLy8gQ3JlYXRlIHVuaXRzIHN3aXRjaGVyIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBzd2l0Y2ggYmV0d2VlbiBjZWxzaXVzIGFuZCBmYWhyZW5oZWl0IG1lYXN1cmVtZW50c1xyXG5jb25zdCBjcmVhdGVVbml0c1N3aXRjaGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVuaXRzU3dpdGNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHVuaXRzU3dpdGNoZXIuaWQgPSBcInVuaXRzLXN3aXRjaGVyXCI7XHJcbiAgdW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID0gXCJjZWxzaXVzXCI7XHJcbiAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcclxuXHJcbiAgdW5pdHNTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgdW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID0gXCJmYWhyZW5oZWl0XCI7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIudGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImNlbHNpdXNcIjtcclxuICAgICAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgd2VhdGhlciBpbmZvIGlmIGEgY2l0eSBpcyBhbHJlYWR5IGlucHV0dGVkIGludG8gdGhlIHNlYXJjaGJhclxyXG4gICAgY29uc3Qgc2VhcmNoYmFySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKS52YWx1ZTtcclxuICAgIGlmIChzZWFyY2hiYXJJbnB1dCAhPT0gXCJcIikge1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhzZWFyY2hiYXJJbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJbml0aWFsIHdlYXRoZXIgaW5mb1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhcIkVkbW9udG9uXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdW5pdHNTd2l0Y2hlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaXRzU3dpdGNoZXI7XHJcbiIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuLi9hcGkvZ2V0LXdlYXRoZXJcIjtcclxuaW1wb3J0IFF1ZXN0aW9uTWFyayBmcm9tIFwiLi4vYXNzZXRzL3F1ZXN0aW9uLW1hcmsuc3ZnXCI7XHJcbmltcG9ydCBwcmludFRlbXBlcmF0dXJlIGZyb20gXCIuLi91dGlscy9wcmludC10ZW1wZXJhdHVyZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVGb3JlY2FzdFRhYmxlIH0gZnJvbSBcIi4vZm9yZWNhc3RcIjtcclxuXHJcbi8vIENyZWF0ZSB3ZWF0aGVyIGluZm8gY29udGFpbmVyIChjb250YWlucyBsb2NhdGlvbiwgZGF0ZS90aW1lLCBhbmQgY3VycmVudCBjb25kaXRpb25zKVxyXG5jb25zdCBjcmVhdGVXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBjb25zdCB3ZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuaWQgPSBcIndlYXRoZXItaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkluZm9Db250YWluZXIuaWQgPSBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLmlkID0gXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25kaXRpb25zSW1hZ2UuaWQgPSBcImNvbmRpdGlvbnMtaW1hZ2VcIjtcclxuXHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcENvbnRhaW5lci5pZCA9IFwidGVtcC1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uZGl0aW9uc0NvbnRhaW5lci5pZCA9IFwiY29uZGl0aW9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuaWQgPSBcImZlZWxzLWxpa2UtY29udGFpbmVyXCI7XHJcblxyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVJbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25zSW1hZ2UpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZUNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVySW5mb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbi8vIENsZWFyIHdlYXRoZXIgaW5mbyBjb250YWluZXIgY29udGVudHNcclxuY29uc3QgY2xlYXJXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWltYWdlXCIpLnNyYyA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn07XHJcblxyXG4vLyBVcGRhdGUgdGhlIHdlYXRoZXIgaW5mbyBjb250YWluZXIgdXBvbiByZWNlaXZpbmcgaW5wdXQgZnJvbSB0aGUgc2VhcmNoYm94XHJcbmNvbnN0IHVwZGF0ZVdlYXRoZXJJbmZvID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgLy8gRE9NIEVsZW1lbnRzXHJcbiAgY29uc3QgeyB1bml0cyB9ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0cy1zd2l0Y2hlclwiKS5kYXRhc2V0O1xyXG4gIGNvbnN0IGxvY2F0aW9uSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBkYXRlVGltZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZGF0ZS10aW1lLWluZm8tY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IGNvbmRpdGlvbnNJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1pbWFnZVwiKTtcclxuICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2UtY29udGFpbmVyXCIpO1xyXG4gIC8vIFJldHJpZXZlIHdlYXRoZXIgZGF0YSBmcm9tIEFQSVxyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5TmFtZSk7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcblxyXG4gIHVwZGF0ZUZvcmVjYXN0VGFibGUod2VhdGhlckRhdGEpO1xyXG5cclxuICAvLyBIYW5kbGUgZmFpbHVyZSB0byByZXRyaWV2ZSBkYXRhXHJcbiAgaWYgKCF3ZWF0aGVyRGF0YSkge1xyXG4gICAgY2xlYXJXZWF0aGVySW5mbygpO1xyXG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDaXR5IG5vdCBmb3VuZCFcIjtcclxuICAgIGNvbmRpdGlvbnNJbWFnZS5zcmMgPSBRdWVzdGlvbk1hcms7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgd2VhdGhlciBkYXRhIHRvIHdlYXRoZXIgaW5mbyBVSVxyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuXHJcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgIFwiZW4tQ0FcIixcclxuICAgIHtcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGF0ZVRpbWU7XHJcbiAgY29uZGl0aW9uc0ltYWdlLnNyYyA9IGBodHRwczovLyR7d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xyXG5cclxuICAvLyBDaGFuZ2UgdGVtcGVyYXR1cmUgYmFzZWQgb24gc2VsZWN0ZWQgdW5pdHNcclxuICBpZiAodW5pdHMgPT09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgXCJjZWxzaXVzXCIsXHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jXHJcbiAgICApO1xyXG4gICAgZmVlbHNMaWtlQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgXCJjZWxzaXVzXCIsXHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2NcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICBcImZhaHJlbmhlaXRcIixcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2ZcclxuICAgICk7XHJcbiAgICBmZWVsc0xpa2VDb250YWluZXIudGV4dENvbnRlbnQgPSBwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICBcImZhaHJlbmhlaXRcIixcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbnNDb250YWluZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH07XHJcbiIsImltcG9ydCByb3VuZFRlbXBlcmF0dXJlIGZyb20gXCIuL3JvdW5kLXRlbXBlcmF0dXJlXCI7XHJcblxyXG4vLyBSZXR1cm4gYSBwcm9wZXJseSBmb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGUgdGVtcGVyYXR1cmVcclxuY29uc3QgcHJpbnRUZW1wZXJhdHVyZSA9ICh1bml0cywgdGVtcCkgPT4ge1xyXG4gIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgIHJldHVybiBgJHtyb3VuZFRlbXBlcmF0dXJlKHRlbXApfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gIH1cclxuICByZXR1cm4gYCR7cm91bmRUZW1wZXJhdHVyZSh0ZW1wKX0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50VGVtcGVyYXR1cmU7XHJcbiIsIi8vIFJvdW5kIHRoZSB0ZW1wZXJhdHVyZSB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXHJcbmNvbnN0IHJvdW5kVGVtcGVyYXR1cmUgPSAodGVtcCkgPT4gTWF0aC5yb3VuZCh0ZW1wKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdW5kVGVtcGVyYXR1cmU7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJsdWU6ICMyNjY3ZmY7XHJcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcclxuICAtLWJsYWNrOiAjNDA0ZTRkO1xyXG4gIC0td2hpdGU6ICNlYmYyZmE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyLFxyXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qIHx8IEhlYWRlciAqL1xyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI3NlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAjc2VhcmNoYmFyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xyXG4jdW5pdHMtc3dpdGNoZXIge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuW2RhdGEtdW5pdHM9XCJjZWxzaXVzXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiZmFocmVuaGVpdFwiXSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4vKiB8fCBXZWF0aGVyIEluZm8gKi9cclxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxyXG4jY29uZGl0aW9ucy1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3RlbXAtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLyogfHwgRm9yZWNhc3QgVGFibGUgKi9cclxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbnRhYmxlLFxyXG50aCxcclxudGQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qIHx8IEZvb3RlciAqL1xyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIHx8IExvYWRlciAqL1xyXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fY3NzX2xvYWRlci5hc3AgKi9cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWJsdWUpOyAvKiBCbHVlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUEsY0FBYztBQUNkO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUEsY0FBYztBQUNkLGlFQUFpRTtBQUNqRTtFQUNFLDBCQUEwQixFQUFFLGVBQWU7RUFDM0Msa0NBQWtDLEVBQUUsU0FBUztFQUM3QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ibHVlOiAjMjY2N2ZmO1xcclxcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcXHJcXG4gIC0tYmxhY2s6ICM0MDRlNGQ7XFxyXFxuICAtLXdoaXRlOiAjZWJmMmZhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IExhdG87XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIsXFxyXFxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hiYXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICNzZWFyY2hiYXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xcclxcbiN1bml0cy1zd2l0Y2hlciB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS11bml0cz1cXFwiY2Vsc2l1c1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdW5pdHM9XFxcImZhaHJlbmhlaXRcXFwiXSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgV2VhdGhlciBJbmZvICovXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbiNkYXRlLXRpbWUtaW5mby1jb250YWluZXIsXFxyXFxuI2NvbmRpdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBGb3JlY2FzdCBUYWJsZSAqL1xcclxcbiNmb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBGb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IExvYWRlciAqL1xcclxcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3NfbG9hZGVyLmFzcCAqL1xcclxcbi5sb2FkZXIge1xcclxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tYmx1ZSk7IC8qIEJsdWUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjb25maWciLCJnZXRXZWF0aGVyIiwiY2l0eU5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX0tFWSIsIm9rIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImFsZXJ0IiwiY3JlYXRlV2VhdGhlckluZm8iLCJ1cGRhdGVXZWF0aGVySW5mbyIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUZvcmVjYXN0VGFibGUiLCJpbml0aWFsaXplV2Vic2l0ZSIsImxvYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvb3RlckNvbnRhaW5lciIsImZvb3RlclRleHQiLCJpZCIsImlubmVySFRNTCIsInByaW50VGVtcGVyYXR1cmUiLCJmb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0VGFibGUiLCJoZWFkZXJzIiwiaW5zZXJ0Um93IiwiZGF0ZUhlYWRlciIsImluc2VydENlbGwiLCJ0ZXh0Q29udGVudCIsImNvbmRpdGlvbnNIZWFkZXIiLCJjb2xTcGFuIiwiaGlnaFRlbXBIZWFkZXIiLCJsb3dUZW1wSGVhZGVyIiwiaSIsInJvdyIsImNsYXNzTmFtZSIsImoiLCJjZWxsIiwiZGF0YXNldCIsImluZGV4IiwidXBkYXRlRm9yZWNhc3RUYWJsZSIsIndlYXRoZXJEYXRhIiwidW5pdHMiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlQ2VsbCIsImNoaWxkTm9kZXMiLCJpY29uQ2VsbCIsImNvbmRpdGlvbnNDZWxsIiwiaGlnaFRlbXBDZWxsIiwibG93VGVtcENlbGwiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiZm9yZWNhc3RJY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsInRleHQiLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJjcmVhdGVTZWFyY2hiYXIiLCJjcmVhdGVVbml0c1N3aXRjaGVyIiwiaGVhZGVyQ29udGFpbmVyIiwibG9nbyIsInNlYXJjaGJhciIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ1bml0c1N3aXRjaGVyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2VhcmNoYmFySW5wdXQiLCJRdWVzdGlvbk1hcmsiLCJ3ZWF0aGVySW5mb0NvbnRhaW5lciIsImxvY2F0aW9uSW5mb0NvbnRhaW5lciIsImRhdGVUaW1lSW5mb0NvbnRhaW5lciIsImNvbmRpdGlvbnNJbWFnZSIsInRlbXBDb250YWluZXIiLCJjb25kaXRpb25zQ29udGFpbmVyIiwiZmVlbHNMaWtlQ29udGFpbmVyIiwiY2xlYXJXZWF0aGVySW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwiZGF0ZVRpbWUiLCJsb2NhbHRpbWUiLCJob3VyIiwibWludXRlIiwiY3VycmVudCIsInRlbXBfYyIsImZlZWxzbGlrZV9jIiwidGVtcF9mIiwiZmVlbHNsaWtlX2YiLCJyb3VuZFRlbXBlcmF0dXJlIiwidGVtcCIsIk1hdGgiLCJyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=