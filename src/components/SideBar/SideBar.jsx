import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

const Sidebar = ({handleLogoutClick, handleProfileEditClick}) => {
  return (
    <div>
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default Avatar"></img>
      <p className="sidebar__username">Terrence Tegegne</p>
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
