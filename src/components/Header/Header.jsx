import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import{Link} from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import {useContext} from 'react';
import {CurrentUserContext} from "../../utils/contexts/CurrentUserContext.jsx";

function Header({ handleAddClick, isLoggedIn, weatherData, handleLoginClick, handleRegisterClick}) {

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
      <img className="header__logo" alt="Header Logo"src={logo} />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch/>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>

      {isLoggedIn ? (   
         <Link to="/profile" className="header__link">
         <div className="header__user-container">
           <p className="header__username">{currentUser.name}</p>
           {currentUser.avatar ? (<img src={currentUser.avatar} alt={currentUser.name} className="header__avatar" />)
            :(<span>{(currentUser.name).toUpperCase.charAt(0)}</span>)}
         </div>
         </Link>
      ):( 
        <div>
        <button
        type="button"
        onClick={handleLoginClick}
        >
          Log-In
      </button>
      <button
         type="button"
         onClick={handleRegisterClick}
         >
        Register
      </button>
      </div>
      )}
     
    </header>
  );
}

export default Header;
