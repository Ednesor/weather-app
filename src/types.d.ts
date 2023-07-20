interface WeatherFromApi {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  wind_kph: number;
  wind_dir: string;
  humidity: number;
}
