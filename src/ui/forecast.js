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

const updateForecastTable = (weatherData) => {
  const { units } = document.getElementById("units-switcher").dataset;
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
      day: "numeric",
    });

    iconCell.src = `https://${forecast.day.condition.icon}`;

    conditionsCell.textContent = forecast.day.condition.text;

    if (units === "celsius") {
      highTempCell.textContent = `${
        forecast.day.maxtemp_c
      }${String.fromCharCode(176)}C`;

      lowTempCell.textContent = `${forecast.day.mintemp_c}${String.fromCharCode(
        176
      )}C`;
    } else {
      highTempCell.textContent = `${
        forecast.day.maxtemp_f
      }${String.fromCharCode(176)}F`;

      lowTempCell.textContent = `${forecast.day.mintemp_f}${String.fromCharCode(
        176
      )}F`;
    }
  }
};

export { createForecast, updateForecastTable };
