import "./WeatherCard.css";
import sunny from "../../assets//day/clear_day.png";
import { weatherOptions } from "../../utils/constants";
import { defaultWeatherOptions } from "../../utils/constants";
import {useContext} from "react";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) { 
  const weatherOption = weatherOptions.find((item) => {
    return item.day === weatherData.isDay && item.condition === weatherData.condition;
  });
  
  console.log(weatherData.isDay);
  console.log(weatherData.condition);

  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);
  const temp = weatherData?.weather?.temperature[currentTemperatureUnit] || 999;
  console.log(temp);
  /*
  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }
    */
    

  //const weatherOptionUrl = filteredOptions[0]?.url;
  //const weatherOptionCondition = filteredOptions[0]?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{`${temp}° ${currentTemperatureUnit}`}</p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
