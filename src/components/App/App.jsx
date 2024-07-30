import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import {getItems, addNewItem, deleteItem} from "../../utils/Api";
import {CurrentTemperatureUnitContext} from "../../utils/contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F")
  const [clothingItems, setClothingItems] = useState([{
    "_id": 0,
    "name": "Beanie"
}]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const onAddItem = (values) => {

    console.log(values.name);
    addNewItem(values).then((item) => {
      console.log(item);
      const card = item;
      setClothingItems([...clothingItems, card]);
      //console.log("initial cards after adding: ", clothingItems);
      closeActiveModal();
    })
    .catch(console.error);

  }

  const handleToggleSwitchChange = () =>{

    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F"); 
  
  }

  
  const handleDeleteCard = (deleteCard) => {
    console.log(deleteCard);
    deleteItem(deleteCard)
      .then(() => {
        const filterCards = clothingItems.filter(
          (x) => x._id !== deleteCard
        );
        console.log(filterCards);
        setClothingItems(filterCards);
        console.log(deleteCard);
        closeActiveModal();
      })
      .catch(console.error);
  };
  


  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        console.log(data);
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
       
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
     getItems().then((data) => {
        setClothingItems(data);
     }).catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />

        <Routes>
           <Route path="/" element={<Main weatherData={weatherData} handleCardClick={handleCardClick} clothingArray={clothingItems} />}/>
           <Route path="/profile" element={<Profile handleCardClick={handleCardClick} handleAddClick={handleAddClick} clothingArray={clothingItems}/>}/>
        </Routes>
        


        <Footer />
      </div>
      <AddItemModal
         handleCloseModal={closeActiveModal}
         onAddItem={onAddItem}
         //activeModal={activeModal}
         isOpen={activeModal ==="add-garment"}
         />
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        closeActiveModal={closeActiveModal}
        onDelete={handleDeleteCard}
      />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
