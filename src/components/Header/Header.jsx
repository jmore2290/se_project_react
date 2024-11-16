import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext.jsx";

function Header({
  handleAddClick,
  isLoggedIn,
  weatherData,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="Header Logo" src={logo} />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      

      {isLoggedIn ? (
        <div className="header__user-loggedin">
        <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            ) : (
              <div className="header__user-icon">
                {currentUser.name[0]}
              </div>
            )}
          </div>
        </Link>
        </div>
      ) : (
        <div className="header__user-loggedout">
          <button className="header__auth-btn" type="button" onClick={handleLoginClick}>
            Log-In
          </button>
          <button className="header__auth-btn" type="button" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
