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
  document.body.appendChild((0,_ui_forecast__WEBPACK_IMPORTED_MODULE_4__.createForecast)());
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
/* harmony export */   createForecast: () => (/* binding */ createForecast),
/* harmony export */   updateForecastTable: () => (/* binding */ updateForecastTable)
/* harmony export */ });
const createForecast = () => {
  const forecastContainer = document.createElement("div");
  forecastContainer.id = "forecast-container";
  const forecastTable = document.createElement("table");
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
const updateForecastTable = weatherData => {
  const {
    units
  } = document.getElementById("units-switcher").dataset;
  for (let i = 0; i < 7; i++) {
    const row = document.querySelectorAll(`.forecast-row`)[i];
    console.log(row);
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
    iconCell.src = `https://${forecast.day.condition.icon}`;
    conditionsCell.textContent = forecast.day.condition.text;
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
  searchbar.type = "text";
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;AACnB;;AAEA;;EAEE,8BAA8B;AAChC;;AAEA,cAAc;AACd;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,cAAc;AACd;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,cAAc;AACd,iEAAiE;AACjE;EACE,0BAA0B,EAAE,eAAe;EAC3C,kCAAkC,EAAE,SAAS;EAC7C,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,MAAM;EACN,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap\");\r\n\r\n/* || General Styles */\r\n\r\n:root {\r\n  --blue: #2667ff;\r\n  --green: #64f58d;\r\n  --black: #404e4d;\r\n  --white: #ebf2fa;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Lato;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n#weather-info-container,\r\n#forecast-container {\r\n  background-color: var(--black);\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--green);\r\n}\r\n\r\n#logo {\r\n  font-size: 2rem;\r\n}\r\n\r\n#searchbar {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #searchbar {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/* || Units Switcher */\r\n#units-switcher {\r\n  justify-self: end;\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  font-size: 1rem;\r\n  border: 2px solid black;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n[data-units=\"celsius\"] {\r\n  background-color: var(--white);\r\n}\r\n\r\n[data-units=\"fahrenheit\"] {\r\n  color: white;\r\n  background-color: var(--blue);\r\n}\r\n\r\n/* || Weather Info */\r\n#weather-info-container {\r\n  flex: 1;\r\n  padding: 2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  color: var(--white);\r\n  text-align: center;\r\n}\r\n\r\n#location-info-container {\r\n  font-size: 3em;\r\n}\r\n\r\n#date-time-info-container,\r\n#conditions-container {\r\n  font-size: 1.5em;\r\n}\r\n\r\n#weather-info-container img {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n}\r\n\r\n#temp-container {\r\n  font-size: 2em;\r\n}\r\n\r\n/* || Footer */\r\nfooter {\r\n  background-color: var(--green);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: inherit;\r\n}\r\n\r\n/* || Loader */\r\n/* Source: https://www.w3schools.com/howto/howto_css_loader.asp */\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid var(--blue); /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvc2VhcmNoYmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3VuaXRzLXN3aXRjaGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3dlYXRoZXItaW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuLy8gR2V0IHRoZSBsYXRlc3Qgd2VhdGhlciBpbmZvcm1hdGlvbiBmb3IgdGhlIGdpdmVuIGNpdHkgZnJvbSBXZWF0aGVyQVBJLmNvbVxyXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtjb25maWcuQVBJX0tFWX0mcT0ke2NpdHlOYW1lfSZkYXlzPTdgXHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICBhbGVydChlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xyXG4iLCJjb25zdCBjb25maWcgPSB7XHJcbiAgQVBJX0tFWTogXCIyYTc4ODdkNDVmMDU0YzEzODI2NzI1NTkyMzE3MDhcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiaW1wb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vdWkvd2VhdGhlci1pbmZvXCI7XHJcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL3VpL2hlYWRlclwiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL3VpL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JlY2FzdCB9IGZyb20gXCIuL3VpL2ZvcmVjYXN0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdlYXRoZXJJbmZvKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9yZWNhc3QoKSk7XHJcbiAgdXBkYXRlV2VhdGhlckluZm8oXCJFZG1vbnRvblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxufTtcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7XHJcbiIsIi8vIENyZWF0ZSBmb290ZXIgb2YgdGhlIHdlYnBhZ2UgY29udGFpbmluZyBhIGxpbmtlZCB0byBXZWF0aGVyQVBJLmNvbVxyXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuXHJcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGZvb3RlclRleHQuaWQgPSBcImZvb3Rlci10ZXh0XCI7XHJcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPVxyXG4gICAgXCJQb3dlcmVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3LndlYXRoZXJhcGkuY29tLyc+V2VhdGhlckFQSS5jb208L2E+XCI7XHJcblxyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcclxuICByZXR1cm4gZm9vdGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xyXG4iLCJjb25zdCBjcmVhdGVGb3JlY2FzdCA9ICgpID0+IHtcclxuICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9yZWNhc3RDb250YWluZXIuaWQgPSBcImZvcmVjYXN0LWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBmb3JlY2FzdFRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uc3Qgcm93ID0gZm9yZWNhc3RUYWJsZS5pbnNlcnRSb3coKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSBcImZvcmVjYXN0LXJvd1wiO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcclxuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJmb3JlY2FzdC1jZWxsXCI7XHJcbiAgICAgIGNlbGwuZGF0YXNldC5pbmRleCA9IGo7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdFRhYmxlKTtcclxuICByZXR1cm4gZm9yZWNhc3RDb250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVGb3JlY2FzdFRhYmxlID0gKHdlYXRoZXJEYXRhKSA9PiB7XHJcbiAgY29uc3QgeyB1bml0cyB9ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0cy1zd2l0Y2hlclwiKS5kYXRhc2V0O1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZm9yZWNhc3Qtcm93YClbaV07XHJcbiAgICBjb25zb2xlLmxvZyhyb3cpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVDZWxsID0gcm93LmNoaWxkTm9kZXNbMF07XHJcbiAgICBjb25zdCBpY29uQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzFdO1xyXG4gICAgY29uc3QgY29uZGl0aW9uc0NlbGwgPSByb3cuY2hpbGROb2Rlc1syXTtcclxuICAgIGNvbnN0IGhpZ2hUZW1wQ2VsbCA9IHJvdy5jaGlsZE5vZGVzWzNdO1xyXG4gICAgY29uc3QgbG93VGVtcENlbGwgPSByb3cuY2hpbGROb2Rlc1s0XTtcclxuXHJcbiAgICBjb25zdCBmb3JlY2FzdCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldO1xyXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGZvcmVjYXN0LmRhdGU7XHJcbiAgICBkYXRlQ2VsbC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUNBXCIsIHtcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpY29uQ2VsbC5zcmMgPSBgaHR0cHM6Ly8ke2ZvcmVjYXN0LmRheS5jb25kaXRpb24uaWNvbn1gO1xyXG5cclxuICAgIGNvbmRpdGlvbnNDZWxsLnRleHRDb250ZW50ID0gZm9yZWNhc3QuZGF5LmNvbmRpdGlvbi50ZXh0O1xyXG5cclxuICAgIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1heHRlbXBfY1xyXG4gICAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcblxyXG4gICAgICBsb3dUZW1wQ2VsbC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2N9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgIDE3NlxyXG4gICAgICApfUNgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGlnaFRlbXBDZWxsLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgICAgZm9yZWNhc3QuZGF5Lm1heHRlbXBfZlxyXG4gICAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcblxyXG4gICAgICBsb3dUZW1wQ2VsbC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmRheS5taW50ZW1wX2Z9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKFxyXG4gICAgICAgIDE3NlxyXG4gICAgICApfUZgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUZvcmVjYXN0LCB1cGRhdGVGb3JlY2FzdFRhYmxlIH07XHJcbiIsImltcG9ydCBjcmVhdGVTZWFyY2hiYXIgZnJvbSBcIi4vc2VhcmNoYmFyXCI7XHJcbmltcG9ydCBjcmVhdGVVbml0c1N3aXRjaGVyIGZyb20gXCIuL3VuaXRzLXN3aXRjaGVyXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIGhlYWRlciBvZiB0aGUgd2VicGFnZSAoaW5jbHVkZXMgbG9nbywgc2VhcmNoYmFyLCBhbmQgdW5pdHMgc3dpdGNoZXIpXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvLmlkID0gXCJsb2dvXCI7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiV2VhdGhlclRvZGF5XCI7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVVbml0c1N3aXRjaGVyKCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuLy8gQ3JlYXRlIHRoZSBzZWFyY2hiYXIgdGhhdCBwcm9tcHRzIHRoZSB1c2VyIHRvIGVudGVyIGEgY2l0eSB0byByZXRyaWV2ZSB3ZWF0aGVyIGluZm9ybWF0aW9uXHJcbmNvbnN0IGNyZWF0ZVNlYXJjaGJhciA9ICgpID0+IHtcclxuICBjb25zdCBzZWFyY2hiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgc2VhcmNoYmFyLnR5cGUgPSBcInRleHRcIjtcclxuICBzZWFyY2hiYXIuaWQgPSBcInNlYXJjaGJhclwiO1xyXG4gIHNlYXJjaGJhci5wbGFjZWhvbGRlciA9IFwiRW50ZXIgYSBjaXR5XCI7XHJcblxyXG4gIC8vIFNlYXJjaCBmb3IgdGhlIGlucHV0dGVkIGNpdHkgd2hlbiB0aGUgZW50ZXIga2V5IGlzIHByZXNzZWRcclxuICBzZWFyY2hiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdXBkYXRlV2VhdGhlckluZm8oc2VhcmNoYmFyLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gc2VhcmNoYmFyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VhcmNoYmFyO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuLy8gQ3JlYXRlIHVuaXRzIHN3aXRjaGVyIHdoaWNoIGFsbG93cyB0aGUgdXNlciB0byBzd2l0Y2ggYmV0d2VlbiBjZWxzaXVzIGFuZCBmYWhyZW5oZWl0IG1lYXN1cmVtZW50c1xyXG5jb25zdCBjcmVhdGVVbml0c1N3aXRjaGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHVuaXRzU3dpdGNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHVuaXRzU3dpdGNoZXIuaWQgPSBcInVuaXRzLXN3aXRjaGVyXCI7XHJcbiAgdW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID0gXCJjZWxzaXVzXCI7XHJcbiAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcclxuXHJcbiAgdW5pdHNTd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgICAgdW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID0gXCJmYWhyZW5oZWl0XCI7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIudGV4dENvbnRlbnQgPSBgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImNlbHNpdXNcIjtcclxuICAgICAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgd2VhdGhlciBpbmZvIGlmIGEgY2l0eSBpcyBhbHJlYWR5IGlucHV0dGVkIGludG8gdGhlIHNlYXJjaGJhclxyXG4gICAgY29uc3Qgc2VhcmNoYmFySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKS52YWx1ZTtcclxuICAgIGlmIChzZWFyY2hiYXJJbnB1dCAhPT0gXCJcIikge1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhzZWFyY2hiYXJJbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJbml0aWFsIHdlYXRoZXIgaW5mb1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhcIkVkbW9udG9uXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdW5pdHNTd2l0Y2hlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaXRzU3dpdGNoZXI7XHJcbiIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuLi9hcGkvZ2V0LXdlYXRoZXJcIjtcclxuaW1wb3J0IFF1ZXN0aW9uTWFyayBmcm9tIFwiLi4vYXNzZXRzL3F1ZXN0aW9uLW1hcmsuc3ZnXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUZvcmVjYXN0VGFibGUgfSBmcm9tIFwiLi9mb3JlY2FzdFwiO1xyXG5cclxuLy8gQ3JlYXRlIHdlYXRoZXIgaW5mbyBjb250YWluZXIgKGNvbnRhaW5zIGxvY2F0aW9uLCBkYXRlL3RpbWUsIGFuZCBjdXJyZW50IGNvbmRpdGlvbnMpXHJcbmNvbnN0IGNyZWF0ZVdlYXRoZXJJbmZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5pZCA9IFwid2VhdGhlci1pbmZvLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5pZCA9IFwibG9jYXRpb24taW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZGF0ZVRpbWVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXRlVGltZUluZm9Db250YWluZXIuaWQgPSBcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbmRpdGlvbnNJbWFnZS5pZCA9IFwiY29uZGl0aW9ucy1pbWFnZVwiO1xyXG5cclxuICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0ZW1wQ29udGFpbmVyLmlkID0gXCJ0ZW1wLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBjb25kaXRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25kaXRpb25zQ29udGFpbmVyLmlkID0gXCJjb25kaXRpb25zLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCBmZWVsc0xpa2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZlZWxzTGlrZUNvbnRhaW5lci5pZCA9IFwiZmVlbHMtbGlrZS1jb250YWluZXJcIjtcclxuXHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVGltZUluZm9Db250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNJbWFnZSk7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZGl0aW9uc0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJJbmZvQ29udGFpbmVyO1xyXG59O1xyXG5cclxuLy8gQ2xlYXIgd2VhdGhlciBpbmZvIGNvbnRhaW5lciBjb250ZW50c1xyXG5jb25zdCBjbGVhcldlYXRoZXJJbmZvID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24taW5mby1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS10aW1lLWluZm8tY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtaW1hZ2VcIikuc3JjID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxufTtcclxuXHJcbi8vIFVwZGF0ZSB0aGUgd2VhdGhlciBpbmZvIGNvbnRhaW5lciB1cG9uIHJlY2VpdmluZyBpbnB1dCBmcm9tIHRoZSBzZWFyY2hib3hcclxuY29uc3QgdXBkYXRlV2VhdGhlckluZm8gPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcclxuICAvLyBET00gRWxlbWVudHNcclxuICBjb25zdCB7IHVuaXRzIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRzLXN3aXRjaGVyXCIpLmRhdGFzZXQ7XHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gICAgXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25kaXRpb25zLWltYWdlXCIpO1xyXG4gIGNvbnN0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXAtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGNvbmRpdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZS1jb250YWluZXJcIik7XHJcbiAgLy8gUmV0cmlldmUgd2VhdGhlciBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlOYW1lKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgdXBkYXRlRm9yZWNhc3RUYWJsZSh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIC8vIEhhbmRsZSBmYWlsdXJlIHRvIHJldHJpZXZlIGRhdGFcclxuICBpZiAoIXdlYXRoZXJEYXRhKSB7XHJcbiAgICBjbGVhcldlYXRoZXJJbmZvKCk7XHJcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIudGV4dENvbnRlbnQgPSBcIkNpdHkgbm90IGZvdW5kIVwiO1xyXG4gICAgY29uZGl0aW9uc0ltYWdlLnNyYyA9IFF1ZXN0aW9uTWFyaztcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIEFkZCB3ZWF0aGVyIGRhdGEgdG8gd2VhdGhlciBpbmZvIFVJXHJcbiAgbG9jYXRpb25JbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubG9jYXRpb24ubmFtZX0sICR7d2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeX1gO1xyXG5cclxuICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxyXG4gICAgXCJlbi1DQVwiLFxyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICB9XHJcbiAgKTtcclxuICBkYXRlVGltZUluZm9Db250YWluZXIudGV4dENvbnRlbnQgPSBkYXRlVGltZTtcclxuICBjb25kaXRpb25zSW1hZ2Uuc3JjID0gYGh0dHBzOi8vJHt3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XHJcblxyXG4gIC8vIENoYW5nZSB0ZW1wZXJhdHVyZSBiYXNlZCBvbiBzZWxlY3RlZCB1bml0c1xyXG4gIGlmICh1bml0cyA9PT0gXCJjZWxzaXVzXCIpIHtcclxuICAgIHRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2NcclxuICAgIH0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1DYDtcclxuXHJcbiAgICBmZWVsc0xpa2VDb250YWluZXIudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke1xyXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2ZcclxuICAgIH0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICAgIGZlZWxzTGlrZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7XHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2ZcclxuICAgIH0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbnNDb250YWluZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJsdWU6ICMyNjY3ZmY7XHJcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcclxuICAtLWJsYWNrOiAjNDA0ZTRkO1xyXG4gIC0td2hpdGU6ICNlYmYyZmE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyLFxyXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi8qIHx8IEhlYWRlciAqL1xyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI3NlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAjc2VhcmNoYmFyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xyXG4jdW5pdHMtc3dpdGNoZXIge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuW2RhdGEtdW5pdHM9XCJjZWxzaXVzXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiZmFocmVuaGVpdFwiXSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4vKiB8fCBXZWF0aGVyIEluZm8gKi9cclxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxyXG4jY29uZGl0aW9ucy1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3RlbXAtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLyogfHwgRm9vdGVyICovXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLyogfHwgTG9hZGVyICovXHJcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3NfbG9hZGVyLmFzcCAqL1xyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tYmx1ZSk7IC8qIEJsdWUgKi9cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsc0JBQXNCOztBQUV0QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQSxjQUFjO0FBQ2QsaUVBQWlFO0FBQ2pFO0VBQ0UsMEJBQTBCLEVBQUUsZUFBZTtFQUMzQyxrQ0FBa0MsRUFBRSxTQUFTO0VBQzdDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJsdWU6ICMyNjY3ZmY7XFxyXFxuICAtLWdyZWVuOiAjNjRmNThkO1xcclxcbiAgLS1ibGFjazogIzQwNGU0ZDtcXHJcXG4gIC0td2hpdGU6ICNlYmYyZmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogTGF0bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lcixcXHJcXG4jZm9yZWNhc3QtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgSGVhZGVyICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaGJhciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICNsb2dvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xcclxcbiAgI3NlYXJjaGJhciB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFVuaXRzIFN3aXRjaGVyICovXFxyXFxuI3VuaXRzLXN3aXRjaGVyIHtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbltkYXRhLXVuaXRzPVxcXCJjZWxzaXVzXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS11bml0cz1cXFwiZmFocmVuaGVpdFxcXCJdIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBXZWF0aGVyIEluZm8gKi9cXHJcXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi1pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtdGltZS1pbmZvLWNvbnRhaW5lcixcXHJcXG4jY29uZGl0aW9ucy1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiA2NHB4O1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGVtcC1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgTG9hZGVyICovXFxyXFxuLyogU291cmNlOiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc19sb2FkZXIuYXNwICovXFxyXFxuLmxvYWRlciB7XFxyXFxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xcclxcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCB2YXIoLS1ibHVlKTsgLyogQmx1ZSAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImNvbmZpZyIsImdldFdlYXRoZXIiLCJjaXR5TmFtZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJBUElfS0VZIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImFsZXJ0IiwiY3JlYXRlV2VhdGhlckluZm8iLCJ1cGRhdGVXZWF0aGVySW5mbyIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUZvcmVjYXN0IiwiaW5pdGlhbGl6ZVdlYnNpdGUiLCJsb2FkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb290ZXJDb250YWluZXIiLCJmb290ZXJUZXh0IiwiaWQiLCJpbm5lckhUTUwiLCJmb3JlY2FzdENvbnRhaW5lciIsImZvcmVjYXN0VGFibGUiLCJpIiwicm93IiwiaW5zZXJ0Um93IiwiY2xhc3NOYW1lIiwiaiIsImNlbGwiLCJpbnNlcnRDZWxsIiwiZGF0YXNldCIsImluZGV4IiwidXBkYXRlRm9yZWNhc3RUYWJsZSIsIndlYXRoZXJEYXRhIiwidW5pdHMiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRlQ2VsbCIsImNoaWxkTm9kZXMiLCJpY29uQ2VsbCIsImNvbmRpdGlvbnNDZWxsIiwiaGlnaFRlbXBDZWxsIiwibG93VGVtcENlbGwiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF0ZVN0cmluZyIsImRhdGUiLCJ0ZXh0Q29udGVudCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwidGV4dCIsIm1heHRlbXBfYyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1pbnRlbXBfYyIsIm1heHRlbXBfZiIsIm1pbnRlbXBfZiIsImNyZWF0ZVNlYXJjaGJhciIsImNyZWF0ZVVuaXRzU3dpdGNoZXIiLCJoZWFkZXJDb250YWluZXIiLCJsb2dvIiwic2VhcmNoYmFyIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInVuaXRzU3dpdGNoZXIiLCJzZWFyY2hiYXJJbnB1dCIsIlF1ZXN0aW9uTWFyayIsIndlYXRoZXJJbmZvQ29udGFpbmVyIiwibG9jYXRpb25JbmZvQ29udGFpbmVyIiwiZGF0ZVRpbWVJbmZvQ29udGFpbmVyIiwiY29uZGl0aW9uc0ltYWdlIiwidGVtcENvbnRhaW5lciIsImNvbmRpdGlvbnNDb250YWluZXIiLCJmZWVsc0xpa2VDb250YWluZXIiLCJjbGVhcldlYXRoZXJJbmZvIiwicXVlcnlTZWxlY3RvciIsImxvY2F0aW9uIiwibmFtZSIsImNvdW50cnkiLCJkYXRlVGltZSIsImxvY2FsdGltZSIsImhvdXIiLCJtaW51dGUiLCJjdXJyZW50IiwidGVtcF9jIiwiZmVlbHNsaWtlX2MiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiJdLCJzb3VyY2VSb290IjoiIn0=