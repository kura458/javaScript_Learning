
/* =========================================
   1. DOM ELEMENTS
========================================= */

const citySelect = document.getElementById('city-select');
const getWeatherBtn = document.getElementById('get-weather-btn');

const weatherResults = document.getElementById('weather-results');
const emptyState = document.getElementById('empty-state');

const weatherIcon = document.getElementById('weather-icon');
const mainTemperature = document.getElementById('main-temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const windGust = document.getElementById('wind-gust');
const weatherMain = document.getElementById('weather-main');
const locationElement = document.getElementById('location');


/* =========================================
   2. WEATHER API
========================================= */

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${encodeURIComponent(city)}`
    );

    const data = await response.json();

    return data;

  } catch (error) {
    console.log(error);
    return undefined;
  }
}


/* =========================================
   3. DISPLAY WEATHER INFORMATION
========================================= */

async function showWeather(city) {
  let data;

  try {
    data = await getWeather(city);
  } catch (error) {
    console.log(error);
    alert('Something went wrong, please try again later');
    return;
  }

  // Do not change the current weather if the request failed.
  if (data === undefined || data === null) {
    alert('Something went wrong, please try again later');
    return;
  }

  const currentWeather = data.weather?.[0];
  const main = data.main;
  const windData = data.wind;

  // Helper function for displaying missing values.
  function displayValue(value, unit = '') {
    if (value === undefined || value === null) {
      return 'N/A';
    }

    return `${value}${unit}`;
  }

  // Location
  locationElement.textContent = displayValue(data.name);

  // Weather icon
  if (currentWeather?.icon) {
    weatherIcon.src = currentWeather.icon;
    weatherIcon.alt = currentWeather.description || 'Weather icon';
  } else {
    weatherIcon.removeAttribute('src');
    weatherIcon.alt = 'Weather icon unavailable';
  }

  // Main weather type
  weatherMain.textContent = displayValue(currentWeather?.main);

  // Temperature information
  mainTemperature.textContent = displayValue(main?.temp, '°C');

  feelsLike.textContent = displayValue(
    main?.feels_like,
    '°C'
  );

  // Humidity
  humidity.textContent = displayValue(main?.humidity, '%');

  // Wind information
  wind.textContent = displayValue(windData?.speed, ' m/s');

  windGust.textContent = displayValue(windData?.gust, ' m/s');

  // Show the weather card after successfully receiving data.
  weatherResults.hidden = false;
  emptyState.hidden = true;
}


/* =========================================
   4. BUTTON EVENT
========================================= */

getWeatherBtn.addEventListener('click', () => {
  const selectedCity = citySelect.value;

  // Do nothing when no city is selected.
  if (!selectedCity) {
    return;
  }

  showWeather(selectedCity);
});
