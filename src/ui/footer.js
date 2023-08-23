// Create footer of the webpage containing a linked to WeatherAPI.com
const createFooter = () => {
  const footerContainer = document.createElement("footer");

  const footerText = document.createElement("p");
  footerText.id = "footer-text";
  footerText.innerHTML =
    "Powered by <a href='https://www.weatherapi.com/'>WeatherAPI.com</a>";

  footerContainer.appendChild(footerText);
  return footerContainer;
};

export default createFooter;
