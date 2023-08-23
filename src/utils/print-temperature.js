import roundTemperature from "./round-temperature";

// Return a properly formatted version of the temperature
const printTemperature = (units, temp) => {
  if (units === "celsius") {
    return `${roundTemperature(temp)}${String.fromCharCode(176)}C`;
  }
  return `${roundTemperature(temp)}${String.fromCharCode(176)}F`;
};

export default printTemperature;
