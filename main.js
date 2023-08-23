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
  const lowTempHeader = headers.insertCell();
  lowTempHeader.textContent = "Low";
  const highTempHeader = headers.insertCell();
  highTempHeader.textContent = "High";
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
    console.log(row);

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
      highTempCell.textContent = `${forecast.day.maxtemp_c}${String.fromCharCode(176)}C`;
      lowTempCell.textContent = `${forecast.day.mintemp_c}${String.fromCharCode(176)}C`;
    } else {
      highTempCell.textContent = `${forecast.day.maxtemp_f}${String.fromCharCode(176)}F`;
      lowTempCell.textContent = `${forecast.day.mintemp_f}${String.fromCharCode(176)}F`;
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
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast */ "./src/ui/forecast.js");




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
  (0,_forecast__WEBPACK_IMPORTED_MODULE_2__.updateForecastTable)(weatherData);

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
    tempContainer.textContent = `${weatherData.current.temp_c}${String.fromCharCode(176)}C`;
    feelsLikeContainer.textContent = `Feels like ${weatherData.current.feelslike_c}${String.fromCharCode(176)}C`;
  } else {
    tempContainer.textContent = `${weatherData.current.temp_f}${String.fromCharCode(176)}F`;
    feelsLikeContainer.textContent = `Feels like ${weatherData.current.feelslike_f}${String.fromCharCode(176)}F`;
  }
  conditionsContainer.textContent = weatherData.current.condition.text;
};


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
  margin: 1rem;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,sBAAsB;AACtB;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA,cAAc;AACd;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,cAAc;AACd,iEAAiE;AACjE;EACE,0BAA0B,EAAE,eAAe;EAC3C,kCAAkC,EAAE,SAAS;EAC7C,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,MAAM;EACN,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap\");\r\n\r\n/* || General Styles */\r\n\r\n:root {\r\n  --blue: #2667ff;\r\n  --green: #64f58d;\r\n  --black: #404e4d;\r\n  --white: #ebf2fa;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Lato;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n#weather-info-container,\r\n#forecast-container {\r\n  background-color: var(--black);\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--green);\r\n}\r\n\r\n#logo {\r\n  font-size: 2rem;\r\n}\r\n\r\n#searchbar {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #searchbar {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/* || Units Switcher */\r\n#units-switcher {\r\n  justify-self: end;\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  font-size: 1rem;\r\n  border: 2px solid black;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n[data-units=\"celsius\"] {\r\n  background-color: var(--white);\r\n}\r\n\r\n[data-units=\"fahrenheit\"] {\r\n  color: white;\r\n  background-color: var(--blue);\r\n}\r\n\r\n/* || Weather Info */\r\n#weather-info-container {\r\n  flex: 1;\r\n  padding: 2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  color: var(--white);\r\n  text-align: center;\r\n}\r\n\r\n#location-info-container {\r\n  font-size: 3em;\r\n}\r\n\r\n#date-time-info-container,\r\n#conditions-container {\r\n  font-size: 1.5em;\r\n}\r\n\r\n#weather-info-container img {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n}\r\n\r\n#temp-container {\r\n  font-size: 2em;\r\n}\r\n\r\n/* || Forecast Table */\r\n#forecast-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\ntable {\r\n  margin: 1rem;\r\n}\r\n\r\ntable,\r\nth,\r\ntd {\r\n  border: 2px solid var(--blue);\r\n  border-collapse: collapse;\r\n}\r\n\r\ntd {\r\n  color: var(--white);\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n/* || Footer */\r\nfooter {\r\n  background-color: var(--green);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: inherit;\r\n}\r\n\r\n/* || Loader */\r\n/* Source: https://www.w3schools.com/howto/howto_css_loader.asp */\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid var(--blue); /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEZBQTRGLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxhQUFhLE9BQU8s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QUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9zZWFyY2hiYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvdW5pdHMtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvd2VhdGhlci1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG4vLyBHZXQgdGhlIGxhdGVzdCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZvciB0aGUgZ2l2ZW4gY2l0eSBmcm9tIFdlYXRoZXJBUEkuY29tXHJcbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2NvbmZpZy5BUElfS0VZfSZxPSR7Y2l0eU5hbWV9JmRheXM9N2BcclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcIjJhNzg4N2Q0NWYwNTRjMTM4MjY3MjU1OTIzMTcwOFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVXZWF0aGVySW5mbywgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi91aS93ZWF0aGVyLWluZm9cIjtcclxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vdWkvaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vdWkvZm9vdGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0VGFibGUgfSBmcm9tIFwiLi91aS9mb3JlY2FzdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRlclwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRlcik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXZWF0aGVySW5mbygpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvcmVjYXN0VGFibGUoKSk7XHJcbiAgdXBkYXRlV2VhdGhlckluZm8oXCJFZG1vbnRvblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxufTtcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiIsIi8vIENyZWF0ZSBmb290ZXIgb2YgdGhlIHdlYnBhZ2UgY29udGFpbmluZyBhIGxpbmtlZCB0byBXZWF0aGVyQVBJLmNvbVxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGZvb3RlclRleHQuaWQgPSBcImZvb3Rlci10ZXh0XCI7XHJcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPVxyXG4gICAgXCJQb3dlcmVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tLyc+V2VhdGhlckFQSS5jb208L2E+XCI7XHJcblxyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xyXG4iLCIvLyBDcmVhdGUgYSBmb3JlY2FzdCB0YWJsZVxyXG5jb25zdCBjcmVhdGVGb3JlY2FzdFRhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JlY2FzdENvbnRhaW5lci5pZCA9IFwiZm9yZWNhc3QtY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGZvcmVjYXN0VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblxyXG4gIGNvbnN0IGhlYWRlcnMgPSBmb3JlY2FzdFRhYmxlLmluc2VydFJvdygpO1xyXG4gIGNvbnN0IGRhdGVIZWFkZXIgPSBoZWFkZXJzLmluc2VydENlbGwoKTtcclxuICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XHJcblxyXG4gIGNvbnN0IGNvbmRpdGlvbnNIZWFkZXIgPSBoZWFkZXJzLmluc2VydENlbGwoKTtcclxuICBjb25kaXRpb25zSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb25kaXRpb25zXCI7XHJcbiAgY29uZGl0aW9uc0hlYWRlci5jb2xTcGFuID0gMjtcclxuXHJcbiAgY29uc3QgbG93VGVtcEhlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGxvd1RlbXBIZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG5cclxuICBjb25zdCBoaWdoVGVtcEhlYWRlciA9IGhlYWRlcnMuaW5zZXJ0Q2VsbCgpO1xyXG4gIGhpZ2hUZW1wSGVhZGVyLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBmb3JlY2FzdFRhYmxlLmluc2VydFJvdygpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9IFwiZm9yZWNhc3Qtcm93XCI7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgY2VsbC5jbGFzc05hbWUgPSBcImZvcmVjYXN0LWNlbGxcIjtcclxuICAgICAgY2VsbC5kYXRhc2V0LmluZGV4ID0gajtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0VGFibGUpO1xyXG4gIHJldHVybiBmb3JlY2FzdENvbnRhaW5lcjtcclxufTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgZm9yZWNhc3QgdGFibGUgdXBvbiByZWNlaXZpbmcgd2VhdGhlciBkYXRhIGZyb20gdGhlIEFQSVxyXG5jb25zdCB1cGRhdGVGb3JlY2FzdFRhYmxlID0gKHdlYXRoZXJEYXRhKSA9PiB7XHJcbiAgY29uc3QgeyB1bml0cyB9ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0cy1zd2l0Y2hlclwiKS5kYXRhc2V0O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZm9yZWNhc3Qtcm93YClbaV07XHJcbiAgICBjb25zb2xlLmxvZyhyb3cpO1xyXG5cclxuICAgIC8vIEVhY2ggcm93IGNvbnRhaW5zIGEgZGF0ZSwgaWNvbiwgY29uZGl0aW9ucywgYW5kIGxvdy9oaWdoIHRlbXBlcmF0dXJlXHJcbiAgICBjb25zdCBkYXRlQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgY29uc3QgaWNvbkNlbGwgPSByb3cuY2hpbGROb2Rlc1sxXTtcclxuICAgIGNvbnN0IGNvbmRpdGlvbnNDZWxsID0gcm93LmNoaWxkTm9kZXNbMl07XHJcbiAgICBjb25zdCBoaWdoVGVtcENlbGwgPSByb3cuY2hpbGROb2Rlc1szXTtcclxuICAgIGNvbnN0IGxvd1RlbXBDZWxsID0gcm93LmNoaWxkTm9kZXNbNF07XHJcblxyXG4gICAgY29uc3QgZm9yZWNhc3QgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmb3JlY2FzdC5kYXRlO1xyXG4gICAgZGF0ZUNlbGwudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1DQVwiLCB7XHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZm9yZWNhc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGZvcmVjYXN0SWNvbi5jbGFzc05hbWUgPSBcImZvcmVjYXN0LXRhYmxlLWljb25cIjtcclxuICAgIGZvcmVjYXN0SWNvbi5zcmMgPSBgaHR0cHM6Ly8ke2ZvcmVjYXN0LmRheS5jb25kaXRpb24uaWNvbn1gO1xyXG4gICAgaWNvbkNlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGljb25DZWxsLmFwcGVuZENoaWxkKGZvcmVjYXN0SWNvbik7XHJcbiAgICBjb25kaXRpb25zQ2VsbC50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmRheS5jb25kaXRpb24udGV4dDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgbG93L2hpZ2ggdGVtcGVyYXR1cmUgYmFzZWQgb24gdW5pdHMgc2VsZWN0ZWRcclxuICAgIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1heHRlbXBfY1xyXG4gICAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcblxyXG4gICAgICBsb3dUZW1wQ2VsbC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2N9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgIDE3NlxyXG4gICAgICApfUNgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1heHRlbXBfZlxyXG4gICAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcblxyXG4gICAgICBsb3dUZW1wQ2VsbC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2Z9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgIDE3NlxyXG4gICAgICApfUZgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUZvcmVjYXN0VGFibGUsIHVwZGF0ZUZvcmVjYXN0VGFibGUgfTtcclxuIiwiaW1wb3J0IGNyZWF0ZVNlYXJjaGJhciBmcm9tIFwiLi9zZWFyY2hiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgZnJvbSBcIi4vdW5pdHMtc3dpdGNoZXJcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgaGVhZGVyIG9mIHRoZSB3ZWJwYWdlIChpbmNsdWRlcyBsb2dvLCBzZWFyY2hiYXIsIGFuZCB1bml0cyBzd2l0Y2hlcilcclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uaWQgPSBcImxvZ29cIjtcclxuICBsb2dvLnRleHRDb250ZW50ID0gXCJXZWF0aGVyVG9kYXlcIjtcclxuXHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hiYXIoKSk7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVVuaXRzU3dpdGNoZXIoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vd2VhdGhlci1pbmZvXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIHNlYXJjaGJhciB0aGF0IHByb21wdHMgdGhlIHVzZXIgdG8gZW50ZXIgYSBjaXR5IHRvIHJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb25cclxuY29uc3QgY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZWFyY2hiYXIudHlwZSA9IFwic2VhcmNoXCI7XHJcbiAgc2VhcmNoYmFyLmlkID0gXCJzZWFyY2hiYXJcIjtcclxuICBzZWFyY2hiYXIucGxhY2Vob2xkZXIgPSBcIkVudGVyIGEgY2l0eVwiO1xyXG5cclxuICAvLyBTZWFyY2ggZm9yIHRoZSBpbnB1dHRlZCBjaXR5IHdoZW4gdGhlIGVudGVyIGtleSBpcyBwcmVzc2VkXHJcbiAgc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNlYXJjaGJhcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaGJhcjtcclxuIiwiaW1wb3J0IHsgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi93ZWF0aGVyLWluZm9cIjtcclxuXHJcbi8vIENyZWF0ZSB1bml0cyBzd2l0Y2hlciB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gc3dpdGNoIGJldHdlZW4gY2Vsc2l1cyBhbmQgZmFocmVuaGVpdCBtZWFzdXJlbWVudHNcclxuY29uc3QgY3JlYXRlVW5pdHNTd2l0Y2hlciA9ICgpID0+IHtcclxuICBjb25zdCB1bml0c1N3aXRjaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICB1bml0c1N3aXRjaGVyLmlkID0gXCJ1bml0cy1zd2l0Y2hlclwiO1xyXG4gIHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9IFwiY2Vsc2l1c1wiO1xyXG4gIHVuaXRzU3dpdGNoZXIudGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcblxyXG4gIHVuaXRzU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICh1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPT09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9IFwiZmFocmVuaGVpdFwiO1xyXG4gICAgICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUZgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID0gXCJjZWxzaXVzXCI7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIudGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHdlYXRoZXIgaW5mbyBpZiBhIGNpdHkgaXMgYWxyZWFkeSBpbnB1dHRlZCBpbnRvIHRoZSBzZWFyY2hiYXJcclxuICAgIGNvbnN0IHNlYXJjaGJhcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIikudmFsdWU7XHJcbiAgICBpZiAoc2VhcmNoYmFySW5wdXQgIT09IFwiXCIpIHtcclxuICAgICAgdXBkYXRlV2VhdGhlckluZm8oc2VhcmNoYmFySW5wdXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSW5pdGlhbCB3ZWF0aGVyIGluZm9cclxuICAgICAgdXBkYXRlV2VhdGhlckluZm8oXCJFZG1vbnRvblwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVuaXRzU3dpdGNoZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbml0c1N3aXRjaGVyO1xyXG4iLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi4vYXBpL2dldC13ZWF0aGVyXCI7XHJcbmltcG9ydCBRdWVzdGlvbk1hcmsgZnJvbSBcIi4uL2Fzc2V0cy9xdWVzdGlvbi1tYXJrLnN2Z1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVGb3JlY2FzdFRhYmxlIH0gZnJvbSBcIi4vZm9yZWNhc3RcIjtcclxuXHJcbi8vIENyZWF0ZSB3ZWF0aGVyIGluZm8gY29udGFpbmVyIChjb250YWlucyBsb2NhdGlvbiwgZGF0ZS90aW1lLCBhbmQgY3VycmVudCBjb25kaXRpb25zKVxyXG5jb25zdCBjcmVhdGVXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBjb25zdCB3ZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuaWQgPSBcIndlYXRoZXItaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkluZm9Db250YWluZXIuaWQgPSBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLmlkID0gXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25kaXRpb25zSW1hZ2UuaWQgPSBcImNvbmRpdGlvbnMtaW1hZ2VcIjtcclxuXHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcENvbnRhaW5lci5pZCA9IFwidGVtcC1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uZGl0aW9uc0NvbnRhaW5lci5pZCA9IFwiY29uZGl0aW9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuaWQgPSBcImZlZWxzLWxpa2UtY29udGFpbmVyXCI7XHJcblxyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVJbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25zSW1hZ2UpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZUNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVySW5mb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbi8vIENsZWFyIHdlYXRoZXIgaW5mbyBjb250YWluZXIgY29udGVudHNcclxuY29uc3QgY2xlYXJXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWltYWdlXCIpLnNyYyA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn07XHJcblxyXG4vLyBVcGRhdGUgdGhlIHdlYXRoZXIgaW5mbyBjb250YWluZXIgdXBvbiByZWNlaXZpbmcgaW5wdXQgZnJvbSB0aGUgc2VhcmNoYm94XHJcbmNvbnN0IHVwZGF0ZVdlYXRoZXJJbmZvID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgLy8gRE9NIEVsZW1lbnRzXHJcbiAgY29uc3QgeyB1bml0cyB9ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0cy1zd2l0Y2hlclwiKS5kYXRhc2V0O1xyXG4gIGNvbnN0IGxvY2F0aW9uSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBkYXRlVGltZUluZm9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwiZGF0ZS10aW1lLWluZm8tY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IGNvbmRpdGlvbnNJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1pbWFnZVwiKTtcclxuICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2UtY29udGFpbmVyXCIpO1xyXG4gIC8vIFJldHJpZXZlIHdlYXRoZXIgZGF0YSBmcm9tIEFQSVxyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5TmFtZSk7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcblxyXG4gIHVwZGF0ZUZvcmVjYXN0VGFibGUod2VhdGhlckRhdGEpO1xyXG5cclxuICAvLyBIYW5kbGUgZmFpbHVyZSB0byByZXRyaWV2ZSBkYXRhXHJcbiAgaWYgKCF3ZWF0aGVyRGF0YSkge1xyXG4gICAgY2xlYXJXZWF0aGVySW5mbygpO1xyXG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDaXR5IG5vdCBmb3VuZCFcIjtcclxuICAgIGNvbmRpdGlvbnNJbWFnZS5zcmMgPSBRdWVzdGlvbk1hcms7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgd2VhdGhlciBkYXRhIHRvIHdlYXRoZXIgaW5mbyBVSVxyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuXHJcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgIFwiZW4tQ0FcIixcclxuICAgIHtcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGF0ZVRpbWU7XHJcbiAgY29uZGl0aW9uc0ltYWdlLnNyYyA9IGBodHRwczovLyR7d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xyXG5cclxuICAvLyBDaGFuZ2UgdGVtcGVyYXR1cmUgYmFzZWQgb24gc2VsZWN0ZWQgdW5pdHNcclxuICBpZiAodW5pdHMgPT09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcblxyXG4gICAgZmVlbHNMaWtlQ29udGFpbmVyLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfY1xyXG4gICAgfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcbiAgICBmZWVsc0xpa2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke1xyXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcbiAgfVxyXG5cclxuICBjb25kaXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXJJbmZvLCB1cGRhdGVXZWF0aGVySW5mbyB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHx8IEdlbmVyYWwgU3R5bGVzICovXHJcblxyXG46cm9vdCB7XHJcbiAgLS1ibHVlOiAjMjY2N2ZmO1xyXG4gIC0tZ3JlZW46ICM2NGY1OGQ7XHJcbiAgLS1ibGFjazogIzQwNGU0ZDtcclxuICAtLXdoaXRlOiAjZWJmMmZhO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lcixcclxuI2ZvcmVjYXN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4vKiB8fCBIZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNzZWFyY2hiYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICNsb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgI3NlYXJjaGJhciB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogfHwgVW5pdHMgU3dpdGNoZXIgKi9cclxuI3VuaXRzLXN3aXRjaGVyIHtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiY2Vsc2l1c1wiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5bZGF0YS11bml0cz1cImZhaHJlbmhlaXRcIl0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLyogfHwgV2VhdGhlciBJbmZvICovXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2xvY2F0aW9uLWluZm8tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuI2RhdGUtdGltZS1pbmZvLWNvbnRhaW5lcixcclxuI2NvbmRpdGlvbnMtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiN0ZW1wLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbi8qIHx8IEZvcmVjYXN0IFRhYmxlICovXHJcbiNmb3JlY2FzdC1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG50YWJsZSxcclxudGgsXHJcbnRkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4vKiB8fCBGb290ZXIgKi9cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiB8fCBMb2FkZXIgKi9cclxuLyogU291cmNlOiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc19sb2FkZXIuYXNwICovXHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCB2YXIoLS1ibHVlKTsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLGNBQWM7QUFDZDtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBLGNBQWM7QUFDZCxpRUFBaUU7QUFDakU7RUFDRSwwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLGtDQUFrQyxFQUFFLFNBQVM7RUFDN0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4vKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmx1ZTogIzI2NjdmZjtcXHJcXG4gIC0tZ3JlZW46ICM2NGY1OGQ7XFxyXFxuICAtLWJsYWNrOiAjNDA0ZTRkO1xcclxcbiAgLS13aGl0ZTogI2ViZjJmYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyLFxcclxcbiNmb3JlY2FzdC1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBIZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoYmFyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgI2xvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAjc2VhcmNoYmFyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgVW5pdHMgU3dpdGNoZXIgKi9cXHJcXG4jdW5pdHMtc3dpdGNoZXIge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdW5pdHM9XFxcImNlbHNpdXNcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbltkYXRhLXVuaXRzPVxcXCJmYWhyZW5oZWl0XFxcIl0ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFdlYXRoZXIgSW5mbyAqL1xcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxcclxcbiNjb25kaXRpb25zLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgRm9yZWNhc3QgVGFibGUgKi9cXHJcXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxufVxcclxcblxcclxcbnRhYmxlLFxcclxcbnRoLFxcclxcbnRkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsdWUpO1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxudGQge1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgRm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBMb2FkZXIgKi9cXHJcXG4vKiBTb3VyY2U6IGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vaG93dG8vaG93dG9fY3NzX2xvYWRlci5hc3AgKi9cXHJcXG4ubG9hZGVyIHtcXHJcXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXFxyXFxuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWJsdWUpOyAvKiBCbHVlICovXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiY29uZmlnIiwiZ2V0V2VhdGhlciIsImNpdHlOYW1lIiwicmVzcG9uc2UiLCJmZXRjaCIsIkFQSV9LRVkiLCJvayIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJjcmVhdGVXZWF0aGVySW5mbyIsInVwZGF0ZVdlYXRoZXJJbmZvIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlRm9yZWNhc3RUYWJsZSIsImluaXRpYWxpemVXZWJzaXRlIiwibG9hZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9vdGVyQ29udGFpbmVyIiwiZm9vdGVyVGV4dCIsImlkIiwiaW5uZXJIVE1MIiwiZm9yZWNhc3RDb250YWluZXIiLCJmb3JlY2FzdFRhYmxlIiwiaGVhZGVycyIsImluc2VydFJvdyIsImRhdGVIZWFkZXIiLCJpbnNlcnRDZWxsIiwidGV4dENvbnRlbnQiLCJjb25kaXRpb25zSGVhZGVyIiwiY29sU3BhbiIsImxvd1RlbXBIZWFkZXIiLCJoaWdoVGVtcEhlYWRlciIsImkiLCJyb3ciLCJjbGFzc05hbWUiLCJqIiwiY2VsbCIsImRhdGFzZXQiLCJpbmRleCIsInVwZGF0ZUZvcmVjYXN0VGFibGUiLCJ3ZWF0aGVyRGF0YSIsInVuaXRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGF0ZUNlbGwiLCJjaGlsZE5vZGVzIiwiaWNvbkNlbGwiLCJjb25kaXRpb25zQ2VsbCIsImhpZ2hUZW1wQ2VsbCIsImxvd1RlbXBDZWxsIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImZvcmVjYXN0SWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJ0ZXh0IiwibWF4dGVtcF9jIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibWludGVtcF9jIiwibWF4dGVtcF9mIiwibWludGVtcF9mIiwiY3JlYXRlU2VhcmNoYmFyIiwiY3JlYXRlVW5pdHNTd2l0Y2hlciIsImhlYWRlckNvbnRhaW5lciIsImxvZ28iLCJzZWFyY2hiYXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidW5pdHNTd2l0Y2hlciIsInNlYXJjaGJhcklucHV0IiwiUXVlc3Rpb25NYXJrIiwid2VhdGhlckluZm9Db250YWluZXIiLCJsb2NhdGlvbkluZm9Db250YWluZXIiLCJkYXRlVGltZUluZm9Db250YWluZXIiLCJjb25kaXRpb25zSW1hZ2UiLCJ0ZW1wQ29udGFpbmVyIiwiY29uZGl0aW9uc0NvbnRhaW5lciIsImZlZWxzTGlrZUNvbnRhaW5lciIsImNsZWFyV2VhdGhlckluZm8iLCJxdWVyeVNlbGVjdG9yIiwibG9jYXRpb24iLCJuYW1lIiwiY291bnRyeSIsImRhdGVUaW1lIiwibG9jYWx0aW1lIiwiaG91ciIsIm1pbnV0ZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJmZWVsc2xpa2VfYyIsInRlbXBfZiIsImZlZWxzbGlrZV9mIl0sInNvdXJjZVJvb3QiOiIifQ==