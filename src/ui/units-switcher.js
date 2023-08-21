const createUnitsSwitcher = () => {
  // Create toggle switch in JavaScript
  // Source: https://www.w3schools.com/howto/howto_css_switch.asp
  const unitsSwitcher = document.createElement("button");
  unitsSwitcher.id = "units-switcher";
  unitsSwitcher.dataset.units = "celsius";
  unitsSwitcher.textContent = String.fromCharCode(176) + "C";

  unitsSwitcher.addEventListener("click", () => {
    if (unitsSwitcher.dataset.units === "celsius") {
      unitsSwitcher.dataset.units = "fahrenheit";
      unitsSwitcher.textContent = String.fromCharCode(176) + "F";
    } else {
      unitsSwitcher.dataset.units = "celsius";
      unitsSwitcher.textContent = String.fromCharCode(176) + "C";
    }
  });

  return unitsSwitcher;
};

export { createUnitsSwitcher };
