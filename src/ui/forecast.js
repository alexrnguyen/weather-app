import printTemperature from "../utils/print-temperature";

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
const updateForecastTable = (weatherData) => {
  const { units } = document.getElementById("units-switcher").dataset;
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
      day: "numeric",
    });

    const forecastIcon = document.createElement("img");
    forecastIcon.className = "forecast-table-icon";
    forecastIcon.src = `https://${forecast.day.condition.icon}`;
    iconCell.innerHTML = "";
    iconCell.appendChild(forecastIcon);
    conditionsCell.textContent = forecast.day.condition.text;

    // Change low/high temperature based on units selected
    if (units === "celsius") {
      highTempCell.textContent = printTemperature(
        "celsius",
        forecast.day.maxtemp_c
      );
      lowTempCell.textContent = printTemperature(
        "celsius",
        forecast.day.mintemp_c
      );
    } else {
      highTempCell.textContent = printTemperature(
        "fahrenheit",
        forecast.day.maxtemp_f
      );
      lowTempCell.textContent = printTemperature(
        "fahrenheit",
        forecast.day.mintemp_f
      );
    }
  }
};

export { createForecastTable, updateForecastTable };
