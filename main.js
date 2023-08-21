"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["main"],{

/***/ "./src/api/get-weather.js":
/*!********************************!*\
  !*** ./src/api/get-weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
const getWeather = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${config.API_KEY}&q=${cityName}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Invalid location");
    }
  } catch (error) {
    throw error;
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_searchbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/searchbar */ "./src/ui/searchbar.js");
/* harmony import */ var _ui_weather_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/weather-info */ "./src/ui/weather-info.js");



const initializeWebsite = async () => {
  document.body.appendChild((0,_ui_searchbar__WEBPACK_IMPORTED_MODULE_0__.createSearchbar)());
  document.body.appendChild((0,_ui_weather_info__WEBPACK_IMPORTED_MODULE_1__.createWeatherInfo)());
};

initializeWebsite();


/***/ }),

/***/ "./src/ui/searchbar.js":
/*!*****************************!*\
  !*** ./src/ui/searchbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSearchbar: () => (/* binding */ createSearchbar)
/* harmony export */ });
/* harmony import */ var _weather_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-info */ "./src/ui/weather-info.js");


const createSearchbar = () => {
  const searchbar = document.createElement("input");
  searchbar.type = "text";
  searchbar.id = "searchbar";
  searchbar.placeholder = "Enter a city";

  searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      (0,_weather_info__WEBPACK_IMPORTED_MODULE_0__.updateWeatherInfo)(searchbar.value);
    }
  });
  return searchbar;
};




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

  const timeInfoContainer = document.createElement("div");
  timeInfoContainer.id = "time-info-container";

  weatherInfoContainer.appendChild(locationInfoContainer);
  weatherInfoContainer.appendChild(timeInfoContainer);

  return weatherInfoContainer;
};

const updateWeatherInfo = async (cityName) => {
  const locationInfoContainer = document.getElementById(
    "location-info-container"
  );
  const weatherData = await (0,_api_get_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(cityName);
  console.log(weatherData);
  locationInfoContainer.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0Esd0RBQXdELGVBQWUsS0FBSyxTQUFTO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RpRDtBQUNLO0FBQ3REO0FBQ0E7QUFDQSw0QkFBNEIsOERBQWU7QUFDM0MsNEJBQTRCLG1FQUFpQjtBQUM3QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFpQjtBQUN2QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNERBQVU7QUFDdEM7QUFDQSx5Q0FBeUMsMEJBQTBCLElBQUksNkJBQTZCO0FBQ3BHO0FBQ0E7QUFDZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdWkvc2VhcmNoYmFyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3dlYXRoZXItaW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2NvbmZpZy5BUElfS0VZfSZxPSR7Y2l0eU5hbWV9YFxyXG4gICAgKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWFyY2hiYXIgfSBmcm9tIFwiLi91aS9zZWFyY2hiYXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlV2VhdGhlckluZm8gfSBmcm9tIFwiLi91aS93ZWF0aGVyLWluZm9cIjtcclxuXHJcbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU2VhcmNoYmFyKCkpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlV2VhdGhlckluZm8oKSk7XHJcbn07XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xyXG4iLCJpbXBvcnQgeyB1cGRhdGVXZWF0aGVySW5mbyB9IGZyb20gXCIuL3dlYXRoZXItaW5mb1wiO1xyXG5cclxuY29uc3QgY3JlYXRlU2VhcmNoYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBzZWFyY2hiYXIudHlwZSA9IFwidGV4dFwiO1xyXG4gIHNlYXJjaGJhci5pZCA9IFwic2VhcmNoYmFyXCI7XHJcbiAgc2VhcmNoYmFyLnBsYWNlaG9sZGVyID0gXCJFbnRlciBhIGNpdHlcIjtcclxuXHJcbiAgc2VhcmNoYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHVwZGF0ZVdlYXRoZXJJbmZvKHNlYXJjaGJhci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHNlYXJjaGJhcjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVNlYXJjaGJhciB9O1xyXG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4uL2FwaS9nZXQtd2VhdGhlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlV2VhdGhlckluZm8gPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VhdGhlckluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdlYXRoZXJJbmZvQ29udGFpbmVyLmlkID0gXCJ3ZWF0aGVyLWluZm8tY29udGFpbmVyXCI7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmlkID0gXCJsb2NhdGlvbi1pbmZvLWNvbnRhaW5lclwiO1xyXG5cclxuICBjb25zdCB0aW1lSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGltZUluZm9Db250YWluZXIuaWQgPSBcInRpbWUtaW5mby1jb250YWluZXJcIjtcclxuXHJcbiAgd2VhdGhlckluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvQ29udGFpbmVyKTtcclxuICB3ZWF0aGVySW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lSW5mb0NvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVySW5mb0NvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IHVwZGF0ZVdlYXRoZXJJbmZvID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcImxvY2F0aW9uLWluZm8tY29udGFpbmVyXCJcclxuICApO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5TmFtZSk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xyXG4gIGxvY2F0aW9uSW5mb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWV9LCAke3dlYXRoZXJEYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXJJbmZvLCB1cGRhdGVXZWF0aGVySW5mbyB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=