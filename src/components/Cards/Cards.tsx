import style from "./Cards.module.css";
import { BiTime } from "react-icons/bi";
import { FaTemperatureHigh } from "react-icons/fa";

interface Props {
  weather: Array<WeatherFromApi>;
}

export default function Cards({ weather }: Props) {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        {weather.map((e) => {
          return (
            <div className={style.card}>
              <h3 className={style.name}>{e.name}</h3>
              <p className={style.country}>{e.country}</p>
              <div className={style.wrapper}>
                <p className={style.temp}>
                  <FaTemperatureHigh className={style.icon} />
                  {e.temp_c}°C
                </p>
                <p className={style.time}>
                  <BiTime className={style.icon} />
                  {e.localtime.substring(11, 16)}
                </p>
              </div>
              <img
                className={style.image}
                src={e.condition.icon}
                alt={e.name.toLowerCase()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
