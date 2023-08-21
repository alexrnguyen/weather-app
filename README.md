# weather-app

This application uses [WeatherAPI.com](https://www.weatherapi.com/) to retrieve the latest weather information. Users can enter a city name to retrieve weather information from any major city in the world.

## API Key

An API key is needed to use the weather API. You can [sign up for free](https://www.weatherapi.com/signup.aspx) to get your own API key. Your API key must be added to a file called config.js:

```js
var config = {
  API_KEY: "YOUR_API_KEY",
};
```

Ensure config.js is in the weather app directory on your computer
