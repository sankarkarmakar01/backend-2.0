// import readline from "readline";

// const API_KEY = `e0b231f73c37c21c6856f5a581e70e10`;
// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const getWeather = async (city) => {
//   const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`City not found. Please check the city name.`);
//     }
//     const weatherData = await response.json();
//     console.log(weatherData);

//     console.log(`\nWeather Information:`);
//     console.log(`City: ${weatherData.name}`);
//     console.log(`Temperature: ${weatherData.main.temp}°C`);
//     console.log(`Description: ${weatherData.weather[0].description}`);
//     console.log(`Humidity: ${weatherData.main.humidity}%`);
//     console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const city = rl.question("Enter a city name to gei its weather:");
// await getWeather(city);
// rl.close();


import readline from "readline";
import fetch from "node-fetch"; // Import node-fetch for making HTTP requests

const API_KEY = `e0b231f73c37c21c6856f5a581e70e10`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found. Please check the city name.`);
    }
    const weatherData = await response.json();
    console.log(weatherData);

    console.log(`\nWeather Information:`);
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
  } catch (error) {
    console.log(error);
  }
};

// Wrap the code in an async function to use await
const main = async () => {
  const city = await new Promise((resolve) => {
    rl.question("Enter a city name to get its weather: ", resolve);
  });
  await getWeather(city);
  rl.close();
};

// Call the main function
main();