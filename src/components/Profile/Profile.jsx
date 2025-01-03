import Sidebar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  handleCardClick,
  handleAddClick,
  clothingArray,
  handleLogoutClick,
  handleProfileEditClick,
  onCardLike,
  isLoggedIn
}) => {
  console.log(isLoggedIn);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar
          handleLogoutClick={handleLogoutClick}
          handleProfileEditClick={handleProfileEditClick}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          handleCardClick={handleCardClick}
          handleAddClick={handleAddClick}
          clothingArray={clothingArray}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </section>
    </div>
  );
};

export default Profile;
