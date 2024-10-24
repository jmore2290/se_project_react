import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useState, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";
import "./Main.css";

function Main({
  isLoggedIn,
  weatherData,
  handleCardClick,
  clothingArray,
  onCardLike,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherData?.weather?.temperature[currentTemperatureUnit] || 999;
  console.log(clothingArray);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          {`Today is ${temp}° ${currentTemperatureUnit} / You may want to wear:`}
        </p>
        <ul className="cards__list">
          {clothingArray
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  isLoggedIn={isLoggedIn}
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
