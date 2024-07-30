import avatar from "../../assets/avatar.svg";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default Avatar"></img>
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
};

export default Sidebar;
