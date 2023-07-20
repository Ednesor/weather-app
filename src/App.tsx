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
    temp_c: 18,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    },
    wind_kph: 11.9,
    wind_dir: "SW",
    humidity: 88,
  },
  {
    name: "London",
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
  },
];

function App() {
  const [WeatherArray, setWeatherArray] = useState<Array<WeatherFromApi>>(INITIAL_STATE);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
