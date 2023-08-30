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
      console.log(data);
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
    console.log(dateString);
    console.log(new Date(dateString).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }));
    dateCell.textContent = new Date(dateString).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
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
    feelsLikeContainer.textContent = `Feels like: ${(0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("celsius", weatherData.current.feelslike_c)}`;
  } else {
    tempContainer.textContent = (0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("fahrenheit", weatherData.current.temp_f);
    feelsLikeContainer.textContent = `Feels like: ${(0,_utils_print_temperature__WEBPACK_IMPORTED_MODULE_2__["default"])("fahrenheit", weatherData.current.feelslike_f)}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0RkFBNEYsTUFBTSxVQUFVLFlBQVksYUFBYSxh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Q0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL2dldC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3NlYXJjaGJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS91bml0cy1zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS93ZWF0aGVyLWluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbHMvcHJpbnQtdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbHMvcm91bmQtdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbi8vIEdldCB0aGUgbGF0ZXN0IHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBnaXZlbiBjaXR5IGZyb20gV2VhdGhlckFQSS5jb21cclxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7Y29uZmlnLkFQSV9LRVl9JnE9JHtjaXR5TmFtZX0mZGF5cz03YFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxyXG4gICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiY29uc3QgY29uZmlnID0ge1xyXG4gIEFQSV9LRVk6IFwiMmE3ODg3ZDQ1ZjA1NGMxMzgyNjcyNTU5MjMxNzA4XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdlYXRoZXJJbmZvLCB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3VpL3dlYXRoZXItaW5mb1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi91aS9oZWFkZXJcIjtcclxuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi91aS9mb290ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlRm9yZWNhc3RUYWJsZSB9IGZyb20gXCIuL3VpL2ZvcmVjYXN0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdlYXRoZXJJbmZvKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9yZWNhc3RUYWJsZSgpKTtcclxuICB1cGRhdGVXZWF0aGVySW5mbyhcIkVkbW9udG9uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcclxuIiwiLy8gQ3JlYXRlIGZvb3RlciBvZiB0aGUgd2VicGFnZSBjb250YWluaW5nIGEgbGlua2VkIHRvIFdlYXRoZXJBUEkuY29tXHJcbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5cclxuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZm9vdGVyVGV4dC5pZCA9IFwiZm9vdGVyLXRleHRcIjtcclxuICBmb290ZXJUZXh0LmlubmVySFRNTCA9XHJcbiAgICBcIlBvd2VyZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly93d3cud2VhdGhlcmFwaS5jb20vJz5XZWF0aGVyQVBJLmNvbTwvYT5cIjtcclxuXHJcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xyXG4gIHJldHVybiBmb290ZXJDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XHJcbiIsImltcG9ydCBwcmludFRlbXBlcmF0dXJlIGZyb20gXCIuLi91dGlscy9wcmludC10ZW1wZXJhdHVyZVwiO1xyXG5cclxuLy8gQ3JlYXRlIGEgZm9yZWNhc3QgdGFibGVcclxuY29uc3QgY3JlYXRlRm9yZWNhc3RUYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9yZWNhc3RDb250YWluZXIuaWQgPSBcImZvcmVjYXN0LWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cclxuICBjb25zdCBoZWFkZXJzID0gZm9yZWNhc3RUYWJsZS5pbnNlcnRSb3coKTtcclxuICBjb25zdCBkYXRlSGVhZGVyID0gaGVhZGVycy5pbnNlcnRDZWxsKCk7XHJcbiAgZGF0ZUhlYWRlci50ZXh0Q29udGVudCA9IFwiRGF0ZVwiO1xyXG5cclxuICBjb25zdCBjb25kaXRpb25zSGVhZGVyID0gaGVhZGVycy5pbnNlcnRDZWxsKCk7XHJcbiAgY29uZGl0aW9uc0hlYWRlci50ZXh0Q29udGVudCA9IFwiQ29uZGl0aW9uc1wiO1xyXG4gIGNvbmRpdGlvbnNIZWFkZXIuY29sU3BhbiA9IDI7XHJcblxyXG4gIGNvbnN0IGhpZ2hUZW1wSGVhZGVyID0gaGVhZGVycy5pbnNlcnRDZWxsKCk7XHJcbiAgaGlnaFRlbXBIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuXHJcbiAgY29uc3QgbG93VGVtcEhlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGxvd1RlbXBIZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZm9yZWNhc3RUYWJsZS5pbnNlcnRSb3coKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSBcImZvcmVjYXN0LXJvd1wiO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJmb3JlY2FzdC1jZWxsXCI7XHJcbiAgICAgIGNlbGwuZGF0YXNldC5pbmRleCA9IGo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdFRhYmxlKTtcclxuICByZXR1cm4gZm9yZWNhc3RDb250YWluZXI7XHJcbn07XHJcblxyXG4vLyBVcGRhdGUgdGhlIGZvcmVjYXN0IHRhYmxlIHVwb24gcmVjZWl2aW5nIHdlYXRoZXIgZGF0YSBmcm9tIHRoZSBBUElcclxuY29uc3QgdXBkYXRlRm9yZWNhc3RUYWJsZSA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgdW5pdHMgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdHMtc3dpdGNoZXJcIikuZGF0YXNldDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZvcmVjYXN0LXJvd2ApW2ldO1xyXG5cclxuICAgIC8vIEVhY2ggcm93IGNvbnRhaW5zIGEgZGF0ZSwgaWNvbiwgY29uZGl0aW9ucywgYW5kIGxvdy9oaWdoIHRlbXBlcmF0dXJlXHJcbiAgICBjb25zdCBkYXRlQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgY29uc3QgaWNvbkNlbGwgPSByb3cuY2hpbGROb2Rlc1sxXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbnNDZWxsID0gcm93LmNoaWxkTm9kZXNbMl07XHJcbiAgICBjb25zdCBoaWdoVGVtcENlbGwgPSByb3cuY2hpbGROb2Rlc1szXTtcclxuICAgIGNvbnN0IGxvd1RlbXBDZWxsID0gcm93LmNoaWxkTm9kZXNbNF07XHJcblxyXG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmb3JlY2FzdC5kYXRlO1xyXG4gICAgY29uc29sZS5sb2coZGF0ZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgbmV3IERhdGUoZGF0ZVN0cmluZykudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tQ0FcIiwge1xyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBkYXRlQ2VsbC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIsIHtcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgIHRpbWVab25lOiBcIlVUQ1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGZvcmVjYXN0SWNvbi5jbGFzc05hbWUgPSBcImZvcmVjYXN0LXRhYmxlLWljb25cIjtcclxuICAgIGZvcmVjYXN0SWNvbi5zcmMgPSBgaHR0cHM6Ly8ke2ZvcmVjYXN0LmRheS5jb25kaXRpb24uaWNvbn1gO1xyXG4gICAgaWNvbkNlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGZvcmVjYXN0SWNvbik7XHJcbiAgICBjb25kaXRpb25zQ2VsbC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmRheS5jb25kaXRpb24udGV4dDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgbG93L2hpZ2ggdGVtcGVyYXR1cmUgYmFzZWQgb24gdW5pdHMgc2VsZWN0ZWRcclxuICAgIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgICBcImNlbHNpdXNcIixcclxuICAgICAgICBmb3JlY2FzdC5kYXkubWF4dGVtcF9jXHJcbiAgICAgICk7XHJcbiAgICAgIGxvd1RlbXBDZWxsLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgICBcImNlbHNpdXNcIixcclxuICAgICAgICBmb3JlY2FzdC5kYXkubWludGVtcF9jXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoaWdoVGVtcENlbGwudGV4dENvbnRlbnQgPSBwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICAgIFwiZmFocmVuaGVpdFwiLFxyXG4gICAgICAgIGZvcmVjYXN0LmRheS5tYXh0ZW1wX2ZcclxuICAgICAgKTtcclxuICAgICAgbG93VGVtcENlbGwudGV4dENvbnRlbnQgPSBwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICAgIFwiZmFocmVuaGVpdFwiLFxyXG4gICAgICAgIGZvcmVjYXN0LmRheS5taW50ZW1wX2ZcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBjcmVhdGVGb3JlY2FzdFRhYmxlLCB1cGRhdGVGb3JlY2FzdFRhYmxlIH07XHJcbiIsImltcG9ydCBjcmVhdGVTZWFyY2hiYXIgZnJvbSBcIi4vc2VhcmNoYmFyXCI7XHJcbmltcG9ydCBjcmVhdGVVbml0c1N3aXRjaGVyIGZyb20gXCIuL3VuaXRzLXN3aXRjaGVyXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGhlYWRlciBvZiB0aGUgd2VicGFnZSAoaW5jbHVkZXMgbG9nbywgc2VhcmNoYmFyLCBhbmQgdW5pdHMgc3dpdGNoZXIpXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvLmlkID0gXCJsb2dvXCI7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiV2VhdGhlclRvZGF5XCI7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVVbml0c1N3aXRjaGVyKCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBzZWFyY2hiYXIgdGhhdCBwcm9tcHRzIHRoZSB1c2VyIHRvIGVudGVyIGEgY2l0eSB0byByZXRyaWV2ZSB3ZWF0aGVyIGluZm9ybWF0aW9uXHJcbmNvbnN0IGNyZWF0ZVNlYXJjaGJhciA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc2VhcmNoYmFyLnR5cGUgPSBcInNlYXJjaFwiO1xyXG4gIHNlYXJjaGJhci5pZCA9IFwic2VhcmNoYmFyXCI7XHJcbiAgc2VhcmNoYmFyLnBsYWNlaG9sZGVyID0gXCJFbnRlciBhIGNpdHlcIjtcclxuXHJcbiAgLy8gU2VhcmNoIGZvciB0aGUgaW5wdXR0ZWQgY2l0eSB3aGVuIHRoZSBlbnRlciBrZXkgaXMgcHJlc3NlZFxyXG4gIHNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhzZWFyY2hiYXIudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzZWFyY2hiYXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hiYXI7XHJcbiIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vd2VhdGhlci1pbmZvXCI7XHJcblxyXG4vLyBDcmVhdGUgdW5pdHMgc3dpdGNoZXIgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIHN3aXRjaCBiZXR3ZWVuIGNlbHNpdXMgYW5kIGZhaHJlbmhlaXQgbWVhc3VyZW1lbnRzXHJcbmNvbnN0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdW5pdHNTd2l0Y2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgdW5pdHNTd2l0Y2hlci5pZCA9IFwidW5pdHMtc3dpdGNoZXJcIjtcclxuICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImNlbHNpdXNcIjtcclxuICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG5cclxuICB1bml0c1N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAodW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID09PSBcImNlbHNpdXNcIikge1xyXG4gICAgICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImZhaHJlbmhlaXRcIjtcclxuICAgICAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9IFwiY2Vsc2l1c1wiO1xyXG4gICAgICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB3ZWF0aGVyIGluZm8gaWYgYSBjaXR5IGlzIGFscmVhZHkgaW5wdXR0ZWQgaW50byB0aGUgc2VhcmNoYmFyXHJcbiAgICBjb25zdCBzZWFyY2hiYXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpLnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaGJhcklucHV0ICE9PSBcIlwiKSB7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhcklucHV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEluaXRpYWwgd2VhdGhlciBpbmZvXHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKFwiRWRtb250b25cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1bml0c1N3aXRjaGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pdHNTd2l0Y2hlcjtcclxuIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4uL2FwaS9nZXQtd2VhdGhlclwiO1xyXG5pbXBvcnQgUXVlc3Rpb25NYXJrIGZyb20gXCIuLi9hc3NldHMvcXVlc3Rpb24tbWFyay5zdmdcIjtcclxuaW1wb3J0IHByaW50VGVtcGVyYXR1cmUgZnJvbSBcIi4uL3V0aWxzL3ByaW50LXRlbXBlcmF0dXJlXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUZvcmVjYXN0VGFibGUgfSBmcm9tIFwiLi9mb3JlY2FzdFwiO1xyXG5cclxuLy8gQ3JlYXRlIHdlYXRoZXIgaW5mbyBjb250YWluZXIgKGNvbnRhaW5zIGxvY2F0aW9uLCBkYXRlL3RpbWUsIGFuZCBjdXJyZW50IGNvbmRpdGlvbnMpXHJcbmNvbnN0IGNyZWF0ZVdlYXRoZXJJbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5pZCA9IFwid2VhdGhlci1pbmZvLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5pZCA9IFwibG9jYXRpb24taW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZGF0ZVRpbWVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXRlVGltZUluZm9Db250YWluZXIuaWQgPSBcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbmRpdGlvbnNJbWFnZS5pZCA9IFwiY29uZGl0aW9ucy1pbWFnZVwiO1xyXG5cclxuICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZW1wQ29udGFpbmVyLmlkID0gXCJ0ZW1wLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25kaXRpb25zQ29udGFpbmVyLmlkID0gXCJjb25kaXRpb25zLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZlZWxzTGlrZUNvbnRhaW5lci5pZCA9IFwiZmVlbHMtbGlrZS1jb250YWluZXJcIjtcclxuXHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGltZUluZm9Db250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNJbWFnZSk7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uc0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJJbmZvQ29udGFpbmVyO1xyXG59O1xyXG5cclxuLy8gQ2xlYXIgd2VhdGhlciBpbmZvIGNvbnRhaW5lciBjb250ZW50c1xyXG5jb25zdCBjbGVhcldlYXRoZXJJbmZvID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24taW5mby1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS10aW1lLWluZm8tY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtaW1hZ2VcIikuc3JjID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgd2VhdGhlciBpbmZvIGNvbnRhaW5lciB1cG9uIHJlY2VpdmluZyBpbnB1dCBmcm9tIHRoZSBzZWFyY2hib3hcclxuY29uc3QgdXBkYXRlV2VhdGhlckluZm8gPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcclxuICAvLyBET00gRWxlbWVudHNcclxuICBjb25zdCB7IHVuaXRzIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRzLXN3aXRjaGVyXCIpLmRhdGFzZXQ7XHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWltYWdlXCIpO1xyXG4gIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGNvbmRpdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS1jb250YWluZXJcIik7XHJcbiAgLy8gUmV0cmlldmUgd2VhdGhlciBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlOYW1lKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgdXBkYXRlRm9yZWNhc3RUYWJsZSh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIC8vIEhhbmRsZSBmYWlsdXJlIHRvIHJldHJpZXZlIGRhdGFcclxuICBpZiAoIXdlYXRoZXJEYXRhKSB7XHJcbiAgICBjbGVhcldlYXRoZXJJbmZvKCk7XHJcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIkNpdHkgbm90IGZvdW5kIVwiO1xyXG4gICAgY29uZGl0aW9uc0ltYWdlLnNyYyA9IFF1ZXN0aW9uTWFyaztcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIEFkZCB3ZWF0aGVyIGRhdGEgdG8gd2VhdGhlciBpbmZvIFVJXHJcbiAgbG9jYXRpb25JbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xyXG5cclxuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgXCJlbi1DQVwiLFxyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICB9XHJcbiAgKTtcclxuICBkYXRlVGltZUluZm9Db250YWluZXIudGV4dENvbnRlbnQgPSBkYXRlVGltZTtcclxuICBjb25kaXRpb25zSW1hZ2Uuc3JjID0gYGh0dHBzOi8vJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XHJcblxyXG4gIC8vIENoYW5nZSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiBzZWxlY3RlZCB1bml0c1xyXG4gIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgIHRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICBcImNlbHNpdXNcIixcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2NcclxuICAgICk7XHJcbiAgICBmZWVsc0xpa2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtwcmludFRlbXBlcmF0dXJlKFxyXG4gICAgICBcImNlbHNpdXNcIixcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfY1xyXG4gICAgKX1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gcHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgXCJmYWhyZW5oZWl0XCIsXHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICApO1xyXG4gICAgZmVlbHNMaWtlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7cHJpbnRUZW1wZXJhdHVyZShcclxuICAgICAgXCJmYWhyZW5oZWl0XCIsXHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2ZcclxuICAgICl9YDtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbnNDb250YWluZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH07XHJcbiIsImltcG9ydCByb3VuZFRlbXBlcmF0dXJlIGZyb20gXCIuL3JvdW5kLXRlbXBlcmF0dXJlXCI7XHJcblxyXG4vLyBSZXR1cm4gYSBwcm9wZXJseSBmb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGUgdGVtcGVyYXR1cmVcclxuY29uc3QgcHJpbnRUZW1wZXJhdHVyZSA9ICh1bml0cywgdGVtcCkgPT4ge1xyXG4gIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgIHJldHVybiBgJHtyb3VuZFRlbXBlcmF0dXJlKHRlbXApfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gIH1cclxuICByZXR1cm4gYCR7cm91bmRUZW1wZXJhdHVyZSh0ZW1wKX0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaW50VGVtcGVyYXR1cmU7XHJcbiIsIi8vIFJvdW5kIHRoZSB0ZW1wZXJhdHVyZSB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXHJcbmNvbnN0IHJvdW5kVGVtcGVyYXR1cmUgPSAodGVtcCkgPT4gTWF0aC5yb3VuZCh0ZW1wKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdW5kVGVtcGVyYXR1cmU7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJsdWU6ICMyNjY3ZmY7XHJcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcclxuICAtLWJsYWNrOiAjNDA0ZTRkO1xyXG4gIC0td2hpdGU6ICNlYmYyZmE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyLFxyXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qIHx8IEhlYWRlciAqL1xyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI3NlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAjc2VhcmNoYmFyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xyXG4jdW5pdHMtc3dpdGNoZXIge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuW2RhdGEtdW5pdHM9XCJjZWxzaXVzXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiZmFocmVuaGVpdFwiXSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4vKiB8fCBXZWF0aGVyIEluZm8gKi9cclxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxyXG4jY29uZGl0aW9ucy1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3RlbXAtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLyogfHwgRm9yZWNhc3QgVGFibGUgKi9cclxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcbnRhYmxlLFxyXG50aCxcclxudGQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qIHx8IEZvb3RlciAqL1xyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIHx8IExvYWRlciAqL1xyXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fY3NzX2xvYWRlci5hc3AgKi9cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cclxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWJsdWUpOyAvKiBCbHVlICovXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUEsY0FBYztBQUNkO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUEsY0FBYztBQUNkLGlFQUFpRTtBQUNqRTtFQUNFLDBCQUEwQixFQUFFLGVBQWU7RUFDM0Msa0NBQWtDLEVBQUUsU0FBUztFQUM3QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbi8qIHx8IEdlbmVyYWwgU3R5bGVzICovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ibHVlOiAjMjY2N2ZmO1xcclxcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcXHJcXG4gIC0tYmxhY2s6ICM0MDRlNGQ7XFxyXFxuICAtLXdoaXRlOiAjZWJmMmZhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IExhdG87XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIsXFxyXFxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hiYXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICNzZWFyY2hiYXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xcclxcbiN1bml0cy1zd2l0Y2hlciB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS11bml0cz1cXFwiY2Vsc2l1c1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdW5pdHM9XFxcImZhaHJlbmhlaXRcXFwiXSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgV2VhdGhlciBJbmZvICovXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbiNkYXRlLXRpbWUtaW5mby1jb250YWluZXIsXFxyXFxuI2NvbmRpdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBGb3JlY2FzdCBUYWJsZSAqL1xcclxcbiNmb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBGb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IExvYWRlciAqL1xcclxcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3NfbG9hZGVyLmFzcCAqL1xcclxcbi5sb2FkZXIge1xcclxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tYmx1ZSk7IC8qIEJsdWUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjb25maWciLCJnZXRXZWF0aGVyIiwiY2l0eU5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX0tFWSIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhbGVydCIsImNyZWF0ZVdlYXRoZXJJbmZvIiwidXBkYXRlV2VhdGhlckluZm8iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJjcmVhdGVGb3JlY2FzdFRhYmxlIiwiaW5pdGlhbGl6ZVdlYnNpdGUiLCJsb2FkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb290ZXJDb250YWluZXIiLCJmb290ZXJUZXh0IiwiaWQiLCJpbm5lckhUTUwiLCJwcmludFRlbXBlcmF0dXJlIiwiZm9yZWNhc3RDb250YWluZXIiLCJmb3JlY2FzdFRhYmxlIiwiaGVhZGVycyIsImluc2VydFJvdyIsImRhdGVIZWFkZXIiLCJpbnNlcnRDZWxsIiwidGV4dENvbnRlbnQiLCJjb25kaXRpb25zSGVhZGVyIiwiY29sU3BhbiIsImhpZ2hUZW1wSGVhZGVyIiwibG93VGVtcEhlYWRlciIsImkiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImRhdGFzZXQiLCJpbmRleCIsInVwZGF0ZUZvcmVjYXN0VGFibGUiLCJ3ZWF0aGVyRGF0YSIsInVuaXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0ZUNlbGwiLCJjaGlsZE5vZGVzIiwiaWNvbkNlbGwiLCJjb25kaXRpb25zQ2VsbCIsImhpZ2hUZW1wQ2VsbCIsImxvd1RlbXBDZWxsIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsInRpbWVab25lIiwiZm9yZWNhc3RJY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsInRleHQiLCJtYXh0ZW1wX2MiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2YiLCJtaW50ZW1wX2YiLCJjcmVhdGVTZWFyY2hiYXIiLCJjcmVhdGVVbml0c1N3aXRjaGVyIiwiaGVhZGVyQ29udGFpbmVyIiwibG9nbyIsInNlYXJjaGJhciIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ1bml0c1N3aXRjaGVyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2VhcmNoYmFySW5wdXQiLCJRdWVzdGlvbk1hcmsiLCJ3ZWF0aGVySW5mb0NvbnRhaW5lciIsImxvY2F0aW9uSW5mb0NvbnRhaW5lciIsImRhdGVUaW1lSW5mb0NvbnRhaW5lciIsImNvbmRpdGlvbnNJbWFnZSIsInRlbXBDb250YWluZXIiLCJjb25kaXRpb25zQ29udGFpbmVyIiwiZmVlbHNMaWtlQ29udGFpbmVyIiwiY2xlYXJXZWF0aGVySW5mbyIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwiZGF0ZVRpbWUiLCJsb2NhbHRpbWUiLCJob3VyIiwibWludXRlIiwiY3VycmVudCIsInRlbXBfYyIsImZlZWxzbGlrZV9jIiwidGVtcF9mIiwiZmVlbHNsaWtlX2YiLCJyb3VuZFRlbXBlcmF0dXJlIiwidGVtcCIsIk1hdGgiLCJyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=