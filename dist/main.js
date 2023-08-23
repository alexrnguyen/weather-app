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
    `https://api.weatherapi.com/v1/current.json?key=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].API_KEY}&q=${cityName}`);
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




const initializeWebsite = async () => {
  const loader = document.createElement("div");
  loader.classList.toggle("hidden");
  loader.classList.add("loader");
  document.body.appendChild(loader);
  document.body.appendChild((0,_ui_header__WEBPACK_IMPORTED_MODULE_2__["default"])());
  document.body.appendChild((0,_ui_weather_info__WEBPACK_IMPORTED_MODULE_0__.createWeatherInfo)());
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
  // Retrieve weather data from API
  const loader = document.querySelector(".loader");
  loader.classList.toggle("hidden");
  const weatherData = await (0,_api_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
  loader.classList.toggle("hidden");

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
  } else {
    tempContainer.textContent = `${weatherData.current.temp_f}${String.fromCharCode(176)}F`;
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
  background-color: var(--black);
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;AACnB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,cAAc;AACd;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA,cAAc;AACd,iEAAiE;AACjE;EACE,0BAA0B,EAAE,eAAe;EAC3C,kCAAkC,EAAE,SAAS;EAC7C,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,MAAM;EACN,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,QAAQ;AACV;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap\");\r\n\r\n/* || General Styles */\r\n\r\n:root {\r\n  --blue: #2667ff;\r\n  --green: #64f58d;\r\n  --black: #404e4d;\r\n  --white: #ebf2fa;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Lato;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--green);\r\n}\r\n\r\n#logo {\r\n  font-size: 2rem;\r\n}\r\n\r\n#searchbar {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #searchbar {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/* || Units Switcher */\r\n#units-switcher {\r\n  justify-self: end;\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  font-size: 1rem;\r\n  border: 2px solid black;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n[data-units=\"celsius\"] {\r\n  background-color: var(--white);\r\n}\r\n\r\n[data-units=\"fahrenheit\"] {\r\n  color: white;\r\n  background-color: var(--blue);\r\n}\r\n\r\n/* || Weather Info */\r\n#weather-info-container {\r\n  flex: 1;\r\n  padding: 2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  color: var(--white);\r\n  background-color: var(--black);\r\n  text-align: center;\r\n}\r\n\r\n#location-info-container {\r\n  font-size: 3em;\r\n}\r\n\r\n#date-time-info-container,\r\n#conditions-container {\r\n  font-size: 1.5em;\r\n}\r\n\r\n#weather-info-container img {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n}\r\n\r\n#temp-container {\r\n  font-size: 2em;\r\n}\r\n\r\n/* || Footer */\r\nfooter {\r\n  background-color: var(--green);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: inherit;\r\n}\r\n\r\n/* || Loader */\r\n/* Source: https://www.w3schools.com/howto/howto_css_loader.asp */\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid var(--blue); /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  animation: spin 2s linear infinite;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvZm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9zZWFyY2hiYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvdW5pdHMtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvd2VhdGhlci1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG4vLyBHZXQgdGhlIGxhdGVzdCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZvciB0aGUgZ2l2ZW4gY2l0eSBmcm9tIFdlYXRoZXJBUEkuY29tXHJcbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eU5hbWUpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7Y29uZmlnLkFQSV9LRVl9JnE9JHtjaXR5TmFtZX1gXHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XHJcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICBBUElfS0VZOiBcIjJhNzg4N2Q0NWYwNTRjMTM4MjY3MjU1OTIzMTcwOFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVXZWF0aGVySW5mbywgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi91aS93ZWF0aGVyLWluZm9cIjtcclxuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vdWkvaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vdWkvZm9vdGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibG9hZGVyXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZGVyKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVdlYXRoZXJJbmZvKCkpO1xyXG4gIHVwZGF0ZVdlYXRoZXJJbmZvKFwiRWRtb250b25cIik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn07XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xyXG4iLCIvLyBDcmVhdGUgZm9vdGVyIG9mIHRoZSB3ZWJwYWdlIGNvbnRhaW5pbmcgYSBsaW5rZWQgdG8gV2VhdGhlckFQSS5jb21cclxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcblxyXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXItdGV4dFwiO1xyXG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID1cclxuICAgIFwiUG93ZXJlZCBieSA8YSBocmVmPSdodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS8nPldlYXRoZXJBUEkuY29tPC9hPlwiO1xyXG5cclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcclxuIiwiaW1wb3J0IGNyZWF0ZVNlYXJjaGJhciBmcm9tIFwiLi9zZWFyY2hiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgZnJvbSBcIi4vdW5pdHMtc3dpdGNoZXJcIjtcclxuXHJcbi8vIENyZWF0ZSB0aGUgaGVhZGVyIG9mIHRoZSB3ZWJwYWdlIChpbmNsdWRlcyBsb2dvLCBzZWFyY2hiYXIsIGFuZCB1bml0cyBzd2l0Y2hlcilcclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ28uaWQgPSBcImxvZ29cIjtcclxuICBsb2dvLnRleHRDb250ZW50ID0gXCJXZWF0aGVyVG9kYXlcIjtcclxuXHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVTZWFyY2hiYXIoKSk7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVVuaXRzU3dpdGNoZXIoKSk7XHJcblxyXG4gIHJldHVybiBoZWFkZXJDb250YWluZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXI7XHJcbiIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vd2VhdGhlci1pbmZvXCI7XHJcblxyXG4vLyBDcmVhdGUgdGhlIHNlYXJjaGJhciB0aGF0IHByb21wdHMgdGhlIHVzZXIgdG8gZW50ZXIgYSBjaXR5IHRvIHJldHJpZXZlIHdlYXRoZXIgaW5mb3JtYXRpb25cclxuY29uc3QgY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZWFyY2hiYXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlYXJjaGJhci5pZCA9IFwic2VhcmNoYmFyXCI7XHJcbiAgc2VhcmNoYmFyLnBsYWNlaG9sZGVyID0gXCJFbnRlciBhIGNpdHlcIjtcclxuXHJcbiAgLy8gU2VhcmNoIGZvciB0aGUgaW5wdXR0ZWQgY2l0eSB3aGVuIHRoZSBlbnRlciBrZXkgaXMgcHJlc3NlZFxyXG4gIHNlYXJjaGJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB1cGRhdGVXZWF0aGVySW5mbyhzZWFyY2hiYXIudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzZWFyY2hiYXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZWFyY2hiYXI7XHJcbiIsImltcG9ydCB7IHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vd2VhdGhlci1pbmZvXCI7XHJcblxyXG4vLyBDcmVhdGUgdW5pdHMgc3dpdGNoZXIgd2hpY2ggYWxsb3dzIHRoZSB1c2VyIHRvIHN3aXRjaCBiZXR3ZWVuIGNlbHNpdXMgYW5kIGZhaHJlbmhlaXQgbWVhc3VyZW1lbnRzXHJcbmNvbnN0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdW5pdHNTd2l0Y2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgdW5pdHNTd2l0Y2hlci5pZCA9IFwidW5pdHMtc3dpdGNoZXJcIjtcclxuICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImNlbHNpdXNcIjtcclxuICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG5cclxuICB1bml0c1N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAodW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID09PSBcImNlbHNpdXNcIikge1xyXG4gICAgICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImZhaHJlbmhlaXRcIjtcclxuICAgICAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9IFwiY2Vsc2l1c1wiO1xyXG4gICAgICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB3ZWF0aGVyIGluZm8gaWYgYSBjaXR5IGlzIGFscmVhZHkgaW5wdXR0ZWQgaW50byB0aGUgc2VhcmNoYmFyXHJcbiAgICBjb25zdCBzZWFyY2hiYXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpLnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaGJhcklucHV0ICE9PSBcIlwiKSB7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhcklucHV0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEluaXRpYWwgd2VhdGhlciBpbmZvXHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKFwiRWRtb250b25cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1bml0c1N3aXRjaGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pdHNTd2l0Y2hlcjtcclxuIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4uL2FwaS9nZXQtd2VhdGhlclwiO1xyXG5pbXBvcnQgUXVlc3Rpb25NYXJrIGZyb20gXCIuLi9hc3NldHMvcXVlc3Rpb24tbWFyay5zdmdcIjtcclxuXHJcbi8vIENyZWF0ZSB3ZWF0aGVyIGluZm8gY29udGFpbmVyIChjb250YWlucyBsb2NhdGlvbiwgZGF0ZS90aW1lLCBhbmQgY3VycmVudCBjb25kaXRpb25zKVxyXG5jb25zdCBjcmVhdGVXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBjb25zdCB3ZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuaWQgPSBcIndlYXRoZXItaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkluZm9Db250YWluZXIuaWQgPSBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLmlkID0gXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25kaXRpb25zSW1hZ2UuaWQgPSBcImNvbmRpdGlvbnMtaW1hZ2VcIjtcclxuXHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcENvbnRhaW5lci5pZCA9IFwidGVtcC1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uZGl0aW9uc0NvbnRhaW5lci5pZCA9IFwiY29uZGl0aW9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuaWQgPSBcImZlZWxzLWxpa2UtY29udGFpbmVyXCI7XHJcblxyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVJbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25zSW1hZ2UpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gd2VhdGhlckluZm9Db250YWluZXI7XHJcbn07XHJcblxyXG4vLyBDbGVhciB3ZWF0aGVyIGluZm8gY29udGFpbmVyIGNvbnRlbnRzXHJcbmNvbnN0IGNsZWFyV2VhdGhlckluZm8gPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1pbWFnZVwiKS5zcmMgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59O1xyXG5cclxuLy8gVXBkYXRlIHRoZSB3ZWF0aGVyIGluZm8gY29udGFpbmVyIHVwb24gcmVjZWl2aW5nIGlucHV0IGZyb20gdGhlIHNlYXJjaGJveFxyXG5jb25zdCB1cGRhdGVXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xyXG4gIC8vIERPTSBFbGVtZW50c1xyXG4gIGNvbnN0IHsgdW5pdHMgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdHMtc3dpdGNoZXJcIikuZGF0YXNldDtcclxuICBjb25zdCBsb2NhdGlvbkluZm9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwibG9jYXRpb24taW5mby1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgZGF0ZVRpbWVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtaW1hZ2VcIik7XHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1jb250YWluZXJcIik7XHJcbiAgLy8gUmV0cmlldmUgd2VhdGhlciBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIik7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlOYW1lKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcclxuXHJcbiAgLy8gSGFuZGxlIGZhaWx1cmUgdG8gcmV0cmlldmUgZGF0YVxyXG4gIGlmICghd2VhdGhlckRhdGEpIHtcclxuICAgIGNsZWFyV2VhdGhlckluZm8oKTtcclxuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ2l0eSBub3QgZm91bmQhXCI7XHJcbiAgICBjb25kaXRpb25zSW1hZ2Uuc3JjID0gUXVlc3Rpb25NYXJrO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHdlYXRoZXIgZGF0YSB0byB3ZWF0aGVyIGluZm8gVUlcclxuICBsb2NhdGlvbkluZm9Db250YWluZXIudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lfSwgJHt3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5fWA7XHJcblxyXG4gIGNvbnN0IGRhdGVUaW1lID0gbmV3IERhdGUod2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lKS50b0xvY2FsZURhdGVTdHJpbmcoXHJcbiAgICBcImVuLUNBXCIsXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgIH1cclxuICApO1xyXG4gIGRhdGVUaW1lSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGRhdGVUaW1lO1xyXG4gIGNvbmRpdGlvbnNJbWFnZS5zcmMgPSBgaHR0cHM6Ly8ke3dlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcclxuXHJcbiAgLy8gQ2hhbmdlIHRlbXBlcmF0dXJlIGJhc2VkIG9uIHNlbGVjdGVkIHVuaXRzXHJcbiAgaWYgKHVuaXRzID09PSBcImNlbHNpdXNcIikge1xyXG4gICAgdGVtcENvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke1xyXG4gICAgICB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfY1xyXG4gICAgfSR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9RmA7XHJcbiAgfVxyXG5cclxuICBjb25kaXRpb25zQ29udGFpbmVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXJJbmZvLCB1cGRhdGVXZWF0aGVySW5mbyB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHx8IEdlbmVyYWwgU3R5bGVzICovXHJcblxyXG46cm9vdCB7XHJcbiAgLS1ibHVlOiAjMjY2N2ZmO1xyXG4gIC0tZ3JlZW46ICM2NGY1OGQ7XHJcbiAgLS1ibGFjazogIzQwNGU0ZDtcclxuICAtLXdoaXRlOiAjZWJmMmZhO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiB8fCBIZWFkZXIgKi9cclxuaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNzZWFyY2hiYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICNsb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgI3NlYXJjaGJhciB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxufVxyXG5cclxuLyogfHwgVW5pdHMgU3dpdGNoZXIgKi9cclxuI3VuaXRzLXN3aXRjaGVyIHtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiY2Vsc2l1c1wiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5bZGF0YS11bml0cz1cImZhaHJlbmhlaXRcIl0ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLyogfHwgV2VhdGhlciBJbmZvICovXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFlbTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2NhdGlvbi1pbmZvLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbiNkYXRlLXRpbWUtaW5mby1jb250YWluZXIsXHJcbiNjb25kaXRpb25zLWNvbnRhaW5lciB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuI3dlYXRoZXItaW5mby1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jdGVtcC1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4vKiB8fCBGb290ZXIgKi9cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5hLFxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4vKiB8fCBMb2FkZXIgKi9cclxuLyogU291cmNlOiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc19sb2FkZXIuYXNwICovXHJcbi5sb2FkZXIge1xyXG4gIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCB2YXIoLS1ibHVlKTsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBLGNBQWM7QUFDZCxpRUFBaUU7QUFDakU7RUFDRSwwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLGtDQUFrQyxFQUFFLFNBQVM7RUFDN0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4vKiB8fCBHZW5lcmFsIFN0eWxlcyAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmx1ZTogIzI2NjdmZjtcXHJcXG4gIC0tZ3JlZW46ICM2NGY1OGQ7XFxyXFxuICAtLWJsYWNrOiAjNDA0ZTRkO1xcclxcbiAgLS13aGl0ZTogI2ViZjJmYTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IEhlYWRlciAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2hiYXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAjbG9nbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICNzZWFyY2hiYXIge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xcclxcbiN1bml0cy1zd2l0Y2hlciB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS11bml0cz1cXFwiY2Vsc2l1c1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdW5pdHM9XFxcImZhaHJlbmhlaXRcXFwiXSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgV2VhdGhlciBJbmZvICovXFxyXFxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxufVxcclxcblxcclxcbiNkYXRlLXRpbWUtaW5mby1jb250YWluZXIsXFxyXFxuI2NvbmRpdGlvbnMtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBGb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IExvYWRlciAqL1xcclxcbi8qIFNvdXJjZTogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3NfbG9hZGVyLmFzcCAqL1xcclxcbi5sb2FkZXIge1xcclxcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7IC8qIExpZ2h0IGdyZXkgKi9cXHJcXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tYmx1ZSk7IC8qIEJsdWUgKi9cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxyXFxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJjb25maWciLCJnZXRXZWF0aGVyIiwiY2l0eU5hbWUiLCJyZXNwb25zZSIsImZldGNoIiwiQVBJX0tFWSIsIm9rIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImFsZXJ0IiwiY3JlYXRlV2VhdGhlckluZm8iLCJ1cGRhdGVXZWF0aGVySW5mbyIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZUZvb3RlciIsImluaXRpYWxpemVXZWJzaXRlIiwibG9hZGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9vdGVyQ29udGFpbmVyIiwiZm9vdGVyVGV4dCIsImlkIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2VhcmNoYmFyIiwiY3JlYXRlVW5pdHNTd2l0Y2hlciIsImhlYWRlckNvbnRhaW5lciIsImxvZ28iLCJ0ZXh0Q29udGVudCIsInNlYXJjaGJhciIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ1bml0c1N3aXRjaGVyIiwiZGF0YXNldCIsInVuaXRzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2VhcmNoYmFySW5wdXQiLCJnZXRFbGVtZW50QnlJZCIsIlF1ZXN0aW9uTWFyayIsIndlYXRoZXJJbmZvQ29udGFpbmVyIiwibG9jYXRpb25JbmZvQ29udGFpbmVyIiwiZGF0ZVRpbWVJbmZvQ29udGFpbmVyIiwiY29uZGl0aW9uc0ltYWdlIiwidGVtcENvbnRhaW5lciIsImNvbmRpdGlvbnNDb250YWluZXIiLCJmZWVsc0xpa2VDb250YWluZXIiLCJjbGVhcldlYXRoZXJJbmZvIiwic3JjIiwicXVlcnlTZWxlY3RvciIsIndlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJuYW1lIiwiY291bnRyeSIsImRhdGVUaW1lIiwiRGF0ZSIsImxvY2FsdGltZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwiaWNvbiIsInRlbXBfYyIsInRlbXBfZiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9