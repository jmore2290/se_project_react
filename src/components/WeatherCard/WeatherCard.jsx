import "./WeatherCard.css";
import sunny from "../../assets//day/clear_day.png";
import { weatherOptions } from "../../utils/constants";
import { defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) { 
  const weatherOption = weatherOptions.find((item) => {
    return item.day === weatherData.isDay && item.condition === weatherData.condition;
  });
  
  console.log(weatherData.isDay);
  console.log(weatherData.condition);
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
      <p className="weather-card__temp">{weatherData.temp.F} &deg: F</p>
      <img
        src={weatherOption?.url}
        alt={weatherOption?.condition}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
