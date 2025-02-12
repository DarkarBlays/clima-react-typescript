import { Weather } from "../../hooks/useWeather";
import { formatTemperature } from "../../utils";
import styles from "./WeatherDetail.module.css";

type WeatherDetailProps = {
  weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  const { name, main } = weather;

  return (
    <div className={styles.container}>
      <h2>Clima de: {name}</h2>
      <p className={styles.current}> {formatTemperature(main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>
          Temp max:{" "}
          <span>{formatTemperature(main.temp_max)}&deg;C</span>
        </p>
        <p>
          Temp min:{" "}
          <span>{formatTemperature(main.temp_min)}&deg;C</span>
        </p>
      </div>
    </div>
  );
}
