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
const getWeather = async cityName => {
  try {
    const response = await fetch(
    // eslint-disable-next-line no-undef
    `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${cityName}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    console.log("Invalid location");
    return false;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

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

const createSearchbar = () => {
  const searchbar = document.createElement("input");
  searchbar.type = "text";
  searchbar.id = "searchbar";
  searchbar.placeholder = "Enter a city";
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
  const weatherData = await (0,_api_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
  console.log(weatherData);

  // Handle failure to retrieve data
  if (!weatherData) {
    return;
  }
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA,sBAAsB;;AAEtB;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,SAAS;EACT,iBAAiB;AACnB;;AAEA,cAAc;AACd;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA,oBAAoB;AACpB;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA,cAAc;AACd;EACE,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@300;400;700;900&display=swap\");\r\n\r\n/* || General Styles */\r\n\r\n:root {\r\n  --blue: #2667ff;\r\n  --green: #64f58d;\r\n  --black: #404e4d;\r\n  --white: #ebf2fa;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: Lato;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n/* || Header */\r\nheader {\r\n  padding: 1rem;\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n  background-color: var(--green);\r\n}\r\n\r\n#logo {\r\n  font-size: 2rem;\r\n}\r\n\r\n#searchbar {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n  width: 50%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #logo {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  #searchbar {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/* || Units Switcher */\r\n#units-switcher {\r\n  justify-self: end;\r\n  align-self: center;\r\n  border-radius: 20px;\r\n  font-size: 1rem;\r\n  border: 2px solid black;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n[data-units=\"celsius\"] {\r\n  background-color: var(--white);\r\n}\r\n\r\n[data-units=\"fahrenheit\"] {\r\n  color: white;\r\n  background-color: var(--blue);\r\n}\r\n\r\n/* || Weather Info */\r\n#weather-info-container {\r\n  flex: 1;\r\n  padding: 2em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  color: var(--white);\r\n  background-color: var(--black);\r\n}\r\n\r\n#location-info-container {\r\n  font-size: 3em;\r\n}\r\n\r\n#date-time-info-container,\r\n#conditions-container {\r\n  font-size: 1.5em;\r\n}\r\n\r\n#weather-info-container img {\r\n  width: 64px;\r\n  height: 64px;\r\n  border: none;\r\n}\r\n\r\n#temp-container {\r\n  font-size: 2em;\r\n}\r\n\r\n/* || Footer */\r\nfooter {\r\n  background-color: var(--green);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\na,\r\na:visited {\r\n  color: inherit;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3NlYXJjaGJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS91bml0cy1zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS93ZWF0aGVyLWluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2NvbmZpZy5BUElfS0VZfSZxPSR7Y2l0eU5hbWV9YFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBsb2NhdGlvblwiKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH0gZnJvbSBcIi4vdWkvd2VhdGhlci1pbmZvXCI7XHJcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL3VpL2hlYWRlclwiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL3VpL2Zvb3RlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVXZWF0aGVySW5mbygpKTtcclxuICB1cGRhdGVXZWF0aGVySW5mbyhcIkVkbW9udG9uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG59O1xyXG5cclxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcclxuIiwiY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcblxyXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBmb290ZXJUZXh0LmlkID0gXCJmb290ZXItdGV4dFwiO1xyXG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID1cclxuICAgIFwiUG93ZXJlZCBieSA8YSBocmVmPSdodHRwczovL3d3dy53ZWF0aGVyYXBpLmNvbS8nPldlYXRoZXJBUEkuY29tPC9hPlwiO1xyXG5cclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XHJcbiAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcclxuIiwiaW1wb3J0IGNyZWF0ZVNlYXJjaGJhciBmcm9tIFwiLi9zZWFyY2hiYXJcIjtcclxuaW1wb3J0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgZnJvbSBcIi4vdW5pdHMtc3dpdGNoZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvLmlkID0gXCJsb2dvXCI7XHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiV2VhdGhlclRvZGF5XCI7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVVbml0c1N3aXRjaGVyKCkpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyQ29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuY29uc3QgY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZWFyY2hiYXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlYXJjaGJhci5pZCA9IFwic2VhcmNoYmFyXCI7XHJcbiAgc2VhcmNoYmFyLnBsYWNlaG9sZGVyID0gXCJFbnRlciBhIGNpdHlcIjtcclxuXHJcbiAgc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNlYXJjaGJhcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlYXJjaGJhcjtcclxuIiwiaW1wb3J0IHsgdXBkYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi93ZWF0aGVyLWluZm9cIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVVuaXRzU3dpdGNoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdW5pdHNTd2l0Y2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgdW5pdHNTd2l0Y2hlci5pZCA9IFwidW5pdHMtc3dpdGNoZXJcIjtcclxuICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImNlbHNpdXNcIjtcclxuICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG5cclxuICB1bml0c1N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAodW5pdHNTd2l0Y2hlci5kYXRhc2V0LnVuaXRzID09PSBcImNlbHNpdXNcIikge1xyXG4gICAgICB1bml0c1N3aXRjaGVyLmRhdGFzZXQudW5pdHMgPSBcImZhaHJlbmhlaXRcIjtcclxuICAgICAgdW5pdHNTd2l0Y2hlci50ZXh0Q29udGVudCA9IGAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVuaXRzU3dpdGNoZXIuZGF0YXNldC51bml0cyA9IFwiY2Vsc2l1c1wiO1xyXG4gICAgICB1bml0c1N3aXRjaGVyLnRleHRDb250ZW50ID0gYCR7U3RyaW5nLmZyb21DaGFyQ29kZSgxNzYpfUNgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB3ZWF0aGVyIGluZm8gaWYgYSBjaXR5IGlzIGFscmVhZHkgaW5wdXR0ZWQgaW50byB0aGUgc2VhcmNoYmFyXHJcbiAgICBjb25zdCBzZWFyY2hiYXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpLnZhbHVlO1xyXG4gICAgaWYgKHNlYXJjaGJhcklucHV0ICE9PSBcIlwiKSB7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhcklucHV0KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVuaXRzU3dpdGNoZXI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbml0c1N3aXRjaGVyO1xyXG4iLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi4vYXBpL2dldC13ZWF0aGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVXZWF0aGVySW5mbyA9ICgpID0+IHtcclxuICBjb25zdCB3ZWF0aGVySW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuaWQgPSBcIndlYXRoZXItaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2NhdGlvbkluZm9Db250YWluZXIuaWQgPSBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGRhdGVUaW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLmlkID0gXCJkYXRlLXRpbWUtaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25kaXRpb25zSW1hZ2UuaWQgPSBcImNvbmRpdGlvbnMtaW1hZ2VcIjtcclxuXHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGVtcENvbnRhaW5lci5pZCA9IFwidGVtcC1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uZGl0aW9uc0NvbnRhaW5lci5pZCA9IFwiY29uZGl0aW9ucy1jb250YWluZXJcIjtcclxuXHJcbiAgY29uc3QgZmVlbHNMaWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmZWVsc0xpa2VDb250YWluZXIuaWQgPSBcImZlZWxzLWxpa2UtY29udGFpbmVyXCI7XHJcblxyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRpbWVJbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb25zSW1hZ2UpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDb250YWluZXIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmRpdGlvbnNDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gd2VhdGhlckluZm9Db250YWluZXI7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVXZWF0aGVySW5mbyA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xyXG4gIC8vIERPTSBFbGVtZW50c1xyXG4gIGNvbnN0IHsgdW5pdHMgfSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdHMtc3dpdGNoZXJcIikuZGF0YXNldDtcclxuICBjb25zdCBsb2NhdGlvbkluZm9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgIFwibG9jYXRpb24taW5mby1jb250YWluZXJcIlxyXG4gICk7XHJcbiAgY29uc3QgZGF0ZVRpbWVJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImRhdGUtdGltZS1pbmZvLWNvbnRhaW5lclwiXHJcbiAgKTtcclxuICBjb25zdCBjb25kaXRpb25zSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvbnMtaW1hZ2VcIik7XHJcbiAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgY29uZGl0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9ucy1jb250YWluZXJcIik7XHJcbiAgLy8gUmV0cmlldmUgd2VhdGhlciBkYXRhIGZyb20gQVBJXHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlOYW1lKTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIC8vIEhhbmRsZSBmYWlsdXJlIHRvIHJldHJpZXZlIGRhdGFcclxuICBpZiAoIXdlYXRoZXJEYXRhKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxuXHJcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcclxuICAgIFwiZW4tQ0FcIixcclxuICAgIHtcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgZGF0ZVRpbWVJbmZvQ29udGFpbmVyLnRleHRDb250ZW50ID0gZGF0ZVRpbWU7XHJcbiAgY29uZGl0aW9uc0ltYWdlLnNyYyA9IGBodHRwczovLyR7d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbn1gO1xyXG5cclxuICBpZiAodW5pdHMgPT09IFwiY2Vsc2l1c1wiKSB7XHJcbiAgICB0ZW1wQ29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7XHJcbiAgICAgIHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jXHJcbiAgICB9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDE3Nil9Q2A7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBDb250YWluZXIudGV4dENvbnRlbnQgPSBgJHtcclxuICAgICAgd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2ZcclxuICAgIH0ke1N0cmluZy5mcm9tQ2hhckNvZGUoMTc2KX1GYDtcclxuICB9XHJcblxyXG4gIGNvbmRpdGlvbnNDb250YWluZXIudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlV2VhdGhlckluZm8sIHVwZGF0ZVdlYXRoZXJJbmZvIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJsdWU6ICMyNjY3ZmY7XHJcbiAgLS1ncmVlbjogIzY0ZjU4ZDtcclxuICAtLWJsYWNrOiAjNDA0ZTRkO1xyXG4gIC0td2hpdGU6ICNlYmYyZmE7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogTGF0bztcclxuICBtYXJnaW46IDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIHx8IEhlYWRlciAqL1xyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxufVxyXG5cclxuI2xvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI3NlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI2xvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAjc2VhcmNoYmFyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB8fCBVbml0cyBTd2l0Y2hlciAqL1xyXG4jdW5pdHMtc3dpdGNoZXIge1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuW2RhdGEtdW5pdHM9XCJjZWxzaXVzXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbltkYXRhLXVuaXRzPVwiZmFocmVuaGVpdFwiXSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG59XHJcblxyXG4vKiB8fCBXZWF0aGVyIEluZm8gKi9cclxuI3dlYXRoZXItaW5mby1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMWVtO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5mby1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG59XHJcblxyXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxyXG4jY29uZGl0aW9ucy1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI3RlbXAtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLyogfHwgRm9vdGVyICovXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBLGNBQWM7QUFDZDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogfHwgR2VuZXJhbCBTdHlsZXMgKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJsdWU6ICMyNjY3ZmY7XFxyXFxuICAtLWdyZWVuOiAjNjRmNThkO1xcclxcbiAgLS1ibGFjazogIzQwNGU0ZDtcXHJcXG4gIC0td2hpdGU6ICNlYmYyZmE7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogTGF0bztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB8fCBIZWFkZXIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoYmFyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgI2xvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAjc2VhcmNoYmFyIHtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgVW5pdHMgU3dpdGNoZXIgKi9cXHJcXG4jdW5pdHMtc3dpdGNoZXIge1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdW5pdHM9XFxcImNlbHNpdXNcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbltkYXRhLXVuaXRzPVxcXCJmYWhyZW5oZWl0XFxcIl0ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIHx8IFdlYXRoZXIgSW5mbyAqL1xcclxcbiN3ZWF0aGVyLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLWluZm8tY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS10aW1lLWluZm8tY29udGFpbmVyLFxcclxcbiNjb25kaXRpb25zLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pbmZvLWNvbnRhaW5lciBpbWcge1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWNvbnRhaW5lciB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogfHwgRm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJjaXR5TmFtZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb25maWciLCJBUElfS0VZIiwib2siLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNyZWF0ZVdlYXRoZXJJbmZvIiwidXBkYXRlV2VhdGhlckluZm8iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJpbml0aWFsaXplV2Vic2l0ZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9vdGVyQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImZvb3RlclRleHQiLCJpZCIsImlubmVySFRNTCIsImNyZWF0ZVNlYXJjaGJhciIsImNyZWF0ZVVuaXRzU3dpdGNoZXIiLCJoZWFkZXJDb250YWluZXIiLCJsb2dvIiwidGV4dENvbnRlbnQiLCJzZWFyY2hiYXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidW5pdHNTd2l0Y2hlciIsImRhdGFzZXQiLCJ1bml0cyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNlYXJjaGJhcklucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3ZWF0aGVySW5mb0NvbnRhaW5lciIsImxvY2F0aW9uSW5mb0NvbnRhaW5lciIsImRhdGVUaW1lSW5mb0NvbnRhaW5lciIsImNvbmRpdGlvbnNJbWFnZSIsInRlbXBDb250YWluZXIiLCJjb25kaXRpb25zQ29udGFpbmVyIiwiZmVlbHNMaWtlQ29udGFpbmVyIiwid2VhdGhlckRhdGEiLCJsb2NhdGlvbiIsIm5hbWUiLCJjb3VudHJ5IiwiZGF0ZVRpbWUiLCJEYXRlIiwibG9jYWx0aW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNyYyIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwidGVtcF9jIiwidGVtcF9mIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=