import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Details from "./components/Details/Details";
import Menu from "./components/Menu/Menu";
import { Route, Routes } from "react-router-dom";

const INITIAL_STATE = [
  {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    temp_c: 18.4,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
    localtime: "2023-07-14 23:32",
  },
  {
    name: "Argetnina",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    temp_c: 18,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
    localtime: "2023-07-14 23:32",
  },
  {
    name: "Argetnina",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    temp_c: 18,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
    localtime: "2023-07-14 23:32",
  },
  {
    name: "Argetnina",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    temp_c: 18,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
    localtime: "2023-07-14 23:32",
  },
  {
    name: "Argetnina",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    temp_c: 18,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
    localtime: "2023-07-14 23:32",
  },
];

function App() {
  const [WeatherArray, setWeatherArray] =
    useState<Array<WeatherFromApi>>(INITIAL_STATE);

  const handleAdd = () => {
    setWeatherArray([
      ...WeatherArray,
      {
        name: "España",
        region: "City of Espania, Greater Español",
        country: "United Espain",
        lat: 51.52,
        lon: -0.11,
        temp_c: 18,
        condition: {
          text: "Partly cloudy",
          icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        },
        wind_kph: 11.9,
        wind_dir: "SW",
        humidity: 88,
        localtime: "2023-07-14 23:32",
      },
    ]);
  };

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Cards weather={WeatherArray} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
