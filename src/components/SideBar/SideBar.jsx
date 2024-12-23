import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext.jsx";

const Sidebar = ({ handleLogoutClick, handleProfileEditClick }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
      <div className="sidebar">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="Default Avatar"
        ></img>
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button className="sidebar__editprofile" onClick={handleProfileEditClick}>
        Change profile data
      </button>
      <button className="sidebar__logout" onClick={handleLogoutClick}>
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
