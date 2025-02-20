import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import {
  getItems,
  addNewItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";
import * as Auth from "../../utils/auth";
import { CurrentTemperatureUnitContext } from "../../utils/contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState({});
  const [clothingItems, setClothingItems] = useState([
    {
      _id: 0,
      name: "Beanie",
    },
  ]);
  const navigate = useNavigate();

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

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const logToRegister = () => {
    closeActiveModal();
    handleRegisterClick();
  }

  const registerToLog = () =>{
    closeActiveModal();
    handleLoginClick();
  }

  const handleLoginClick = () => {
    setActiveModal("logging-in");
  };

  const handleProfileEditClick = () => {
    setActiveModal("edit-profile");
  };

  const handleCardLike = (id, isLiked) => {
    const token = localStorage.getItem("token");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((clothingItems) =>
              clothingItems.map((item) =>
                item._id === id ? updatedCard.data : item
              )
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            const filterCards = clothingItems.map((item) =>
              item._id === id ? updatedCard.data : item
            );

            setClothingItems(filterCards);
          })
          .catch((err) => console.log(err));
  };

  const onAddItem = (values) => {
    console.log(values.name);
    addNewItem(values)
      .then((item) => {
        console.log(item.data);
        setClothingItems([item.data,...clothingItems]);

        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleDeleteCard = (deleteCard) => {
    console.log(deleteCard);
    deleteItem(deleteCard)
      .then(() => {
        const filterCards = clothingItems.filter((x) => x._id !== deleteCard);
        setClothingItems(filterCards);
        console.log(deleteCard);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const registerUser = ({ email, password, name, avatar }) => {
    Auth.signUpUser({ name, avatar, email, password })
      .then(() => {
        
        //setIsLoggedIn(true);
        //setCurrentUser(data.user);
        //localStorage.setItem("token", data.token);
        //console.log(data.user);
          //console.log(data.user.name);
          //console.log(data);
        //closeActiveModal();
        loginUser({ email, password });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const loginUser = ({ email, password }) => {
    console.log(email);
    console.log(password);
    Auth.signInUser(email, password)
      .then((data) => {
        if (data) {
          console.log(data);       
          //console.log(data.token);
          localStorage.setItem("token", data.token);
          getCurrentUser(data.token).then(() => closeActiveModal());
        }
      })
      .catch(console.error);
  };

  function getCurrentUser(token){
    // this code was taken straight from the useEffect
    return Auth.getUser(token) // we add return so we can use the .then on login
       .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
         setCurrentUser(res);
         console.log(isLoggedIn);
       })
       .catch((err) => {
         console.log(err);
       });
   }

  const logoutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const updateUser = ({ name, avatar }) => {
    Auth.updateUser( name, avatar )
      .then((data) => {
        if (data) {
          setCurrentUser(data);
          closeActiveModal();
        }
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);


  useEffect(() => {
    //localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      /*Auth.getUser(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
          console.log(isLoggedIn);
        })
        .catch((err) => {
          console.log(err);
        });
        */
       getCurrentUser(token);
    }
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
        console.log(isLoggedIn);
      })
      .catch(console.error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              isLoggedIn={isLoggedIn}
              weatherData={weatherData}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isLoggedIn={isLoggedIn}
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingArray={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
               <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      clothingArray={clothingItems}
                      handleLogoutClick={logoutUser}
                      handleProfileEditClick={handleProfileEditClick}
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            handleCloseModal={closeActiveModal}
            onAddItem={onAddItem}
            isOpen={activeModal === "add-garment"}
          />
          <ItemModal
            isLoggedIn={isLoggedIn}
            isOpen={activeModal === "preview"}
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            onDelete={handleDeleteCard}
          />
          <LoginModal
            isOpen={activeModal === "logging-in"}
            closeActiveModal={closeActiveModal}
            onLogin={loginUser}
            logToRegister={logToRegister}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            closeActiveModal={closeActiveModal}
            onRegister={registerUser}
            registerToLog={registerToLog}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            closeActiveModal={closeActiveModal}
            onUpdateUser={updateUser}
          />
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
