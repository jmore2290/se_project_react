import "./WeatherCard.css";
import sunny from "../../assets//day/clear_day.png";
import { weatherOptions } from "../../utils/constants";
import { defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((item) => {
    return (
      item.day === weatherData.isDay && item.condition === weatherData.condition
    );
  });
  console.log(weatherData);
  console.log(weatherData.url);
  console.log(weatherOption?.condition);
  console.log(weatherOption);

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.weather?.temperature[currentTemperatureUnit] || 999;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{`${temp}° ${currentTemperatureUnit}`}</p>
      
       {weatherOption ? (
        <div>
            <img
             src={weatherOption?.url}
             alt={weatherOption?.condition}
             className="weather-card__image"
           />
        </div>
      ) : (
        <div>
          <img
             src={new URL("../assets/day/default.png", import.meta.url).href}
             alt={"default image"}
             className="weather-card__image"
          />
        </div>
      )}
    </section>
  );
}

export default WeatherCard;
