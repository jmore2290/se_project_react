import Sidebar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({handleCardClick, clothingArray}) =>{

     return (
        <div className="profile">
            <section className="profile__sidebar">
                <Sidebar/>
            </section>
            <section className="profile__clothing-items">
                <ClothesSection handleCardClick={handleCardClick} clothingArray={clothingArray}/>
            </section>
        </div>
     );


}



export default Profile;